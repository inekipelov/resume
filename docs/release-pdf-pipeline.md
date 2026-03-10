# Release PDF Pipeline

This repository stores resumes in Markdown as the only source of truth.
PDF files are generated only in CI and published as GitHub Release assets.

## Purpose

- Keep resume content editable and reviewable in Markdown.
- Produce fresh PDF files automatically from branch `release`.
- Publish one rolling GitHub Release tied to technical tag `resume-pdfs-latest`.

## Source Files

- The generator scans all files matching `resumes/**/resume.md`.
- Paths must follow `resumes/<year>/<role>/<lang>/<variant>/resume.md`.
- Invalid paths fail the build with a clear error message.

## PDF Naming

- Primary file name format: `<year>-<role>.pdf`.
- If multiple resumes share the same year and role, each conflicting file switches to
  `<year>-<role>-<lang>-<variant>.pdf`.
- If names are still duplicated after fallback, the build fails.

## How Release Updates Work

1. Push or merge resume changes into branch `release`.
2. Workflow `.github/workflows/publish-resume-pdfs.yml` runs.
3. CI generates all PDFs into `dist/resume-pdfs/`.
4. Existing release with tag `resume-pdfs-latest` is deleted with tag cleanup.
5. A new release with the same tag is created and new PDF assets are uploaded.

This recreate strategy removes stale assets when resume files are deleted.

## Why PDFs Are Not Committed

- Binary files are noisy in diffs and increase repository size.
- Markdown remains the canonical, review-friendly source.
- Release assets provide downloadable PDFs without polluting git history.
