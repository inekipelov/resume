import test from "node:test";
import assert from "node:assert/strict";

import * as pdfBuilder from "./build-resume-pdfs.mjs";

test("parseCliArgs reads --resume path", () => {
  const options = pdfBuilder.parseCliArgs([
    "node",
    "scripts/build-resume-pdfs.mjs",
    "--resume",
    "resumes/2026/ios-developer/en/djinni-816057/resume.md",
  ]);

  assert.deepEqual(options, {
    resumePath: "resumes/2026/ios-developer/en/djinni-816057/resume.md",
  });
});

test("resolveSelectedEntries keeps only requested resume", () => {
  const entries = [
    {
      sourcePath: "resumes/2026/ios-developer/en/base/resume.md",
      outputPdfName: "2026-ios-developer-en-base.pdf",
      year: "2026",
      role: "ios-developer",
      lang: "en",
      variant: "base",
    },
    {
      sourcePath: "resumes/2026/ios-developer/en/djinni-816057/resume.md",
      outputPdfName: "2026-ios-developer-en-djinni-816057.pdf",
      year: "2026",
      role: "ios-developer",
      lang: "en",
      variant: "djinni-816057",
    },
  ];

  const filtered = pdfBuilder.resolveSelectedEntries(entries, {
    resumePath: "resumes/2026/ios-developer/en/djinni-816057/resume.md",
  });

  assert.deepEqual(filtered, [entries[1]]);
});

test("resolveSelectedEntries keeps only canonical entries by default", () => {
  const entries = [
    {
      sourcePath: "resumes/2026/ios-developer/en/base/resume.md",
      outputPdfName: "2026-ios-developer-en-base.pdf",
      year: "2026",
      role: "ios-developer",
      lang: "en",
      variant: "base",
    },
    {
      sourcePath: "resumes/2026/ios-developer/en/djinni-816057/resume.md",
      outputPdfName: "2026-ios-developer-en-djinni-816057.pdf",
      year: "2026",
      role: "ios-developer",
      lang: "en",
      variant: "djinni-816057",
    },
  ];

  const filtered = pdfBuilder.resolveSelectedEntries(entries, {
    resumePath: null,
  });

  assert.deepEqual(filtered, [entries[0]]);
});

test("resolveSelectedEntries throws for unknown resume path", () => {
  const entries = [
    {
      sourcePath: "resumes/2026/ios-developer/en/base/resume.md",
      outputPdfName: "2026-ios-developer-en-base.pdf",
      year: "2026",
      role: "ios-developer",
      lang: "en",
      variant: "base",
    },
  ];

  assert.throws(
    () =>
      pdfBuilder.resolveSelectedEntries(entries, {
        resumePath: "resumes/2026/ios-developer/en/missing/resume.md",
      }),
    /Requested resume path was not found/u,
  );
});
