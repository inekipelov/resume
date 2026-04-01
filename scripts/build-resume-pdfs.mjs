#!/usr/bin/env node

import { execFile } from "node:child_process";
import fs from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { promisify } from "node:util";

import fg from "fast-glob";
import MarkdownIt from "markdown-it";

const RESUME_GLOB = "resumes/**/resume.md";
const OUTPUT_DIR = "dist/resume-pdfs";
const OUTPUT_MANIFEST_PATH = `${OUTPUT_DIR}/manifest.json`;
const CSS_PATH = "assets/pdf/github-markdown-resume.css";
const CANONICAL_PATH_REGEX =
  /^resumes\/(?<year>\d{4})\/(?<role>[a-z0-9]+(?:-[a-z0-9]+)*)\/(?<lang>[a-z]{2,3}(?:-[a-z0-9]+)*)\/(?<variant>[a-z0-9]+(?:-[a-z0-9]+)*)\/resume\.md$/;
const CHROME_PATHS_BY_PLATFORM = {
  darwin: [
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    "/Applications/Chromium.app/Contents/MacOS/Chromium",
  ],
  linux: [
    "/usr/bin/google-chrome",
    "/usr/bin/google-chrome-stable",
    "/usr/bin/chromium-browser",
    "/usr/bin/chromium",
  ],
  win32: [
    "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
    "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
  ],
};

const markdown = new MarkdownIt({
  html: false,
  linkify: true,
  typographer: true,
});
const execFileAsync = promisify(execFile);

function toPosixPath(filePath) {
  return filePath.replaceAll(path.sep, "/");
}

export function parseCliArgs(argv) {
  const options = {
    resumePath: null,
  };

  for (let index = 2; index < argv.length; index += 1) {
    const arg = argv[index];
    if (arg === "--resume") {
      const value = argv[index + 1];
      if (!value) {
        throw new Error('Missing value for "--resume".');
      }
      options.resumePath = toPosixPath(value);
      index += 1;
      continue;
    }

    throw new Error(`Unknown argument "${arg}".`);
  }

  return options;
}

function parseResumePath(relativePath) {
  const normalizedPath = toPosixPath(relativePath);
  const match = normalizedPath.match(CANONICAL_PATH_REGEX);
  if (!match?.groups) {
    throw new Error(
      `Invalid resume path "${normalizedPath}". Expected "resumes/<year>/<role>/<lang>/<variant>/resume.md".`,
    );
  }

  return {
    sourcePath: normalizedPath,
    year: match.groups.year,
    role: match.groups.role,
    lang: match.groups.lang,
    variant: match.groups.variant,
  };
}

function createInitialPdfName(entry) {
  return `${entry.year}-${entry.role}.pdf`;
}

function createFallbackPdfName(entry) {
  return `${entry.year}-${entry.role}-${entry.lang}-${entry.variant}.pdf`;
}

function resolveOutputNames(parsedEntries) {
  const groupedByInitialName = new Map();
  for (const entry of parsedEntries) {
    const initialName = createInitialPdfName(entry);
    const existing = groupedByInitialName.get(initialName) ?? [];
    existing.push(entry);
    groupedByInitialName.set(initialName, existing);
  }

  const entriesWithNames = [];
  for (const [initialName, entries] of groupedByInitialName) {
    if (entries.length === 1) {
      entriesWithNames.push({ ...entries[0], outputPdfName: initialName });
      continue;
    }

    for (const entry of entries) {
      entriesWithNames.push({
        ...entry,
        outputPdfName: createFallbackPdfName(entry),
      });
    }
  }

  const duplicateOutputNames = new Map();
  for (const entry of entriesWithNames) {
    const existing = duplicateOutputNames.get(entry.outputPdfName) ?? [];
    existing.push(entry.sourcePath);
    duplicateOutputNames.set(entry.outputPdfName, existing);
  }

  const unresolved = [...duplicateOutputNames.entries()].filter(([, paths]) => paths.length > 1);
  if (unresolved.length > 0) {
    const details = unresolved
      .map(([name, paths]) => `${name}: ${paths.join(", ")}`)
      .join("\n");
    throw new Error(
      `Cannot build unique PDF names after lang/variant fallback.\nConflicts:\n${details}`,
    );
  }

  return entriesWithNames.sort((a, b) => a.sourcePath.localeCompare(b.sourcePath));
}

export function resolveSelectedEntries(entries, options) {
  if (!options.resumePath) {
    return entries;
  }

  const requestedPath = toPosixPath(options.resumePath);
  const selectedEntries = entries.filter((entry) => entry.sourcePath === requestedPath);
  if (selectedEntries.length === 0) {
    throw new Error(`Requested resume path was not found: "${requestedPath}".`);
  }

  return selectedEntries;
}

function buildHtmlDocument({ title, bodyHtml, cssText }) {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${title}</title>
    <style>${cssText}</style>
  </head>
  <body>
    <article class="markdown-body">
      ${bodyHtml}
    </article>
  </body>
</html>`;
}

async function resolveChromeExecutablePath() {
  const envPath = process.env.PUPPETEER_EXECUTABLE_PATH;
  const candidatePaths = [
    ...(envPath ? [envPath] : []),
    ...(CHROME_PATHS_BY_PLATFORM[process.platform] ?? []),
  ];

  for (const candidatePath of candidatePaths) {
    try {
      await fs.access(candidatePath);
      return candidatePath;
    } catch {
      continue;
    }
  }

  throw new Error(
    [
      "Chrome executable not found.",
      "Set PUPPETEER_EXECUTABLE_PATH or install a Chrome/Chromium binary.",
    ].join(" "),
  );
}

async function loadResumes(rootDir, options) {
  const resumePaths = await fg(RESUME_GLOB, {
    cwd: rootDir,
    onlyFiles: true,
    unique: true,
  });

  if (resumePaths.length === 0) {
    throw new Error(`No resume files found by pattern "${RESUME_GLOB}".`);
  }

  const parsedEntries = resumePaths.map((relativePath) => parseResumePath(relativePath));
  const entries = resolveOutputNames(parsedEntries);
  return resolveSelectedEntries(entries, options);
}

async function renderPdfFiles({ rootDir, entries, cssText }) {
  const absoluteOutputDir = path.join(rootDir, OUTPUT_DIR);
  await fs.rm(absoluteOutputDir, { recursive: true, force: true });
  await fs.mkdir(absoluteOutputDir, { recursive: true });

  const executablePath = await resolveChromeExecutablePath();
  const tempDir = await fs.mkdtemp(path.join(os.tmpdir(), "resume-pdf-html-"));
  try {
    for (const entry of entries) {
      const absoluteSourcePath = path.join(rootDir, entry.sourcePath);
      const markdownText = await fs.readFile(absoluteSourcePath, "utf8");
      const bodyHtml = markdown.render(markdownText);
      const htmlDocument = buildHtmlDocument({
        title: `${entry.year} ${entry.role} resume`,
        bodyHtml,
        cssText,
      });
      const htmlFilePath = path.join(
        tempDir,
        entry.outputPdfName.replace(/\.pdf$/u, ".html"),
      );
      const pdfFilePath = path.join(absoluteOutputDir, entry.outputPdfName);
      await fs.writeFile(htmlFilePath, htmlDocument, "utf8");

      const chromeArgs = [
        "--headless=new",
        "--disable-gpu",
        "--no-first-run",
        "--no-default-browser-check",
        "--allow-file-access-from-files",
        "--no-pdf-header-footer",
        `--print-to-pdf=${pdfFilePath}`,
        pathToFileURL(htmlFilePath).href,
      ];
      if (process.platform === "linux") {
        chromeArgs.unshift("--disable-setuid-sandbox");
        chromeArgs.unshift("--no-sandbox");
      }

      await execFileAsync(executablePath, chromeArgs, {
        maxBuffer: 10 * 1024 * 1024,
      });
      console.log(`Generated ${entry.outputPdfName} from ${entry.sourcePath}`);
    }
  } finally {
    await fs.rm(tempDir, { recursive: true, force: true });
  }
}

async function writeManifest({ rootDir, entries }) {
  const manifest = {
    generatedAt: new Date().toISOString(),
    sourcePattern: RESUME_GLOB,
    outputDir: OUTPUT_DIR,
    files: entries.map((entry) => ({
      sourcePath: entry.sourcePath,
      outputPdfName: entry.outputPdfName,
      year: entry.year,
      role: entry.role,
      lang: entry.lang,
      variant: entry.variant,
    })),
  };

  await fs.writeFile(
    path.join(rootDir, OUTPUT_MANIFEST_PATH),
    `${JSON.stringify(manifest, null, 2)}\n`,
    "utf8",
  );
}

async function main(argv = process.argv) {
  const rootDir = process.cwd();
  const options = parseCliArgs(argv);
  const cssPath = path.join(rootDir, CSS_PATH);
  const cssText = await fs.readFile(cssPath, "utf8");
  const entries = await loadResumes(rootDir, options);

  await renderPdfFiles({ rootDir, entries, cssText });
  await writeManifest({ rootDir, entries });

  console.log(`Generated ${entries.length} PDF files to ${OUTPUT_DIR}`);
  console.log(`Manifest written to ${OUTPUT_MANIFEST_PATH}`);
}

const isEntrypoint =
  process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url);

if (isEntrypoint) {
  main().catch((error) => {
    console.error(error instanceof Error ? error.message : String(error));
    process.exitCode = 1;
  });
}
