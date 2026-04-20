<div align="center">
  <h1><b>Resume</b></h1>
  <p>
    Markdown-first workspace for storing, organizing, and exporting resume variants.
  </p>
</div>

## Current Resumes

This list tracks the current implemented resume variants in the repository.

### Base Variants

- 2026 iOS Developer (EN)
- 2026 iOS Developer (ES)
- 2026 iOS Developer (UKR)
- 2026 Mobile Project Manager
- 2026 Software Engineer
- 2026 Python Developer

### Tailored Variants

- 2026 iOS Developer (EN) - Djinni 816057
- 2026 iOS Developer (EN) - Sngular Mobile Developer (iOS)
- 2026 Python Developer (EN) - DZencode Python Django
- 2026 Python Developer (UKR) - DZencode Python Django
- 2026 Software Engineer (EN) - MacPaw Senior Research Engineer (macOS)
- 2026 Software Engineer (EN) - Work.ua 3671922
- 2026 Software Engineer (EN) - Work.ua 6033030
- 2026 Software Engineer (EN) - Work.ua 7394323
- 2026 Software Engineer (EN) - Work.ua 7804785

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
