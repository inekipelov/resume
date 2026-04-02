<div align="center">
  <h1><b>Resume</b></h1>
  <p>
    Markdown-first workspace for storing, organizing, and exporting resume variants.
  </p>
</div>

## Current Resumes

This list tracks the current default `base` resume variants. Tailored vacancy-specific variants under non-`base` folders are not enumerated here.

- 2026 iOS Developer (EN)
- 2026 iOS Developer (ES)
- 2026 iOS Developer (UKR)
- 2026 Mobile Project Manager
- 2026 Software Engineer
- 2026 Python Developer

## Overview

- Canonical fact sources live in `contacts.md` and `experience.md`.
- Canonical interview question bank lives in `interview-questions.md`.
- Derived resumes live under `resumes/<year>/<role>/<language>/<variant>/resume.md`.
- Derived resumes are the only inputs to the PDF export pipeline.
- PDF exports are optional delivery artifacts and are not a source of truth.

## PDF Export

- Run `npm run build:resume-pdfs` to build PDFs only from default `base` derived resumes.
- Run `npm run build:resume-pdfs -- --resume resumes/<year>/<role>/<language>/<variant>/resume.md` to build a specific tailored variant.
- The `release` branch workflow can publish generated PDFs as versioned GitHub Releases.
- Stable download links use GitHub's `releases/latest/download/...` endpoint.
