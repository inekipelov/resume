<div align="center">
  <h1><b>Resume</b></h1>
  <p>
    Markdown-first workspace for storing, organizing, and exporting resume variants.
  </p>
</div>

## Current Resumes

- 2026 iOS Developer (EN)
- 2026 iOS Developer (ES)
- 2026 iOS Developer (UKR)
- 2026 Mobile Project Manager
- 2026 Software Engineer
- 2026 Python Developer
- 2026 Software Engineer (EN, Work.ua 3671922)
- 2026 Software Engineer (EN, Work.ua 7394323)

## Overview

- Canonical fact sources live in `contacts.md` and `experience.md`.
- Derived resumes live under `resumes/<year>/<role>/<language>/<variant>/resume.md`.
- Derived resumes are the only inputs to the PDF export pipeline.
- PDF exports are optional delivery artifacts and are not a source of truth.

## PDF Export

- Run `npm run build:resume-pdfs` to build PDFs from derived `resume.md` files.
- The `release` branch workflow can publish generated PDFs as versioned GitHub Releases.
- Stable download links use GitHub's `releases/latest/download/...` endpoint.
