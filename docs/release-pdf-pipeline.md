# Release PDF Pipeline

This repository stores canonical resume facts in `contacts.md` and `experience.md`, then
maintains derived resumes under `resumes/**/resume.md`. PDF files are optional exports built
from those derived resumes and published as GitHub Release assets.

## Purpose

- Keep canonical facts editable and reviewable in Markdown.
- Generate PDFs only from derived `resume.md` files when a distributable artifact is needed.
- Publish immutable versioned GitHub Releases for exported PDFs.

## Source Files

- Canonical facts are maintained in `contacts.md` and `experience.md`.
- The generator scans all files matching `resumes/**/resume.md`.
- Paths must follow `resumes/<year>/<role>/<lang>/<variant>/resume.md`.
- Invalid paths fail the build with a clear error message.

## PDF Naming

- Primary file name format: `<year>-<role>.pdf`.
- If multiple resumes share the same year and role, each conflicting file switches to
  `<year>-<role>-<lang>-<variant>.pdf`.
- If names are still duplicated after fallback, the build fails.

## Release Versioning

- Release version format: `YYYY.MM.DD.HH.mm`.
- Release version is computed in UTC at workflow runtime.
- Release tag format: `<release-version>-<sha7>`.
- Each publish creates a new release and keeps previous releases in history.
- The newest release is marked as GitHub's `latest` release.

## How Release Updates Work

1. Push or merge resume changes into branch `release`.
2. Workflow `.github/workflows/publish-resume-pdfs.yml` runs.
3. CI generates PDFs from derived resumes into `dist/resume-pdfs/`.
4. If the legacy `resume-pdfs-latest` release still exists, CI deletes it once with tag cleanup.
5. CI creates a new versioned release and uploads the current PDF assets.

## Stable Download Links

- Use GitHub's latest-release download URLs for stable public links:
- `https://github.com/inekipelov/resume/releases/latest/download/2026-ios-developer.pdf`
- `https://github.com/inekipelov/resume/releases/latest/download/2026-software-engineer.pdf`
- These URLs always resolve to the assets from the newest published release.

## Why PDFs Are Not Committed

- Binary files are noisy in diffs and increase repository size.
- Markdown remains the canonical, review-friendly source.
- Release assets provide downloadable PDFs without polluting git history.
