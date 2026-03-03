# Repository Layout

## Purpose

This repository stores personal resume variants as Markdown-only source documents. It is optimized for text diffs, reviewable edits, and predictable directory structure.

## Canonical Structure

All resumes live under `resumes/` and follow the same directory contract:

```text
resumes/
  <year>/
    <role>/
      <language>/
        <variant>/
          resume.md
```

Exact example:

```text
resumes/
  2025/
    ios-developer/
      en/
        base/
          resume.md
```

## Naming Rules

### Year

- Use a four-digit year such as `2025`.
- Group resume variants by the year they were created or actively maintained.

### Role

- Use kebab-case slugs such as `ios-developer` or `senior-ios-engineer`.
- The role folder should describe the target role, not the company name.

### Language

- Use lowercase language codes such as `en`, `ru`, or `uk`.
- Keep one language per folder.

### Variant

- Use `base` for the untargeted default resume.
- Use a separate kebab-case slug for targeted variants such as `stripe-ios` or `product-heavy`.
- Keep sibling variants at the same depth under the same year, role, and language.

## Required File

- Each variant folder must contain exactly one canonical file: `resume.md`.
- The canonical filename is always `resume.md`; do not invent alternative filenames.

## Forbidden Files and Locations

- Do not keep resume source files in the repository root.
- Do not commit binary resume exports such as `.pdf`.
- Do not rely on [README.md](../../README.md) for repository rules.
- Do not use ad hoc filenames such as `Resume_Final.md`, `resume-v3.md`, or `ios-cv.md`.

## Legacy Migration Rules

- Convert any root-level or non-Markdown resume into `resume.md` under the canonical directory tree.
- Preserve section order, dates, names, and bullet meaning during migration.
- Mark any ambiguous extraction with a short `TODO:` note instead of guessing.
- Remove the legacy artifact from the repository after the Markdown version is in place.
