---
name: tailored-resume-generator
description: Build or update a vacancy-targeted derived resume from contacts.md, experience.md, the target vacancy, and existing resumes in this repository. Use when tailoring a resume for a specific role, employer, or ATS profile.
---

# Tailored Resume Generator

Use this skill when the task is to create or update a derived resume under `resumes/**/resume.md`.

## Inputs

- `contacts.md` for identity, links, work preferences, and languages
- `experience.md` for canonical experience, projects, education, and role families
- The target vacancy or targeting brief
- The closest existing derived resume, if one already exists

## Workflow

1. Read `contacts.md` and `experience.md` first.
2. Identify the closest role family and the best existing derived resume to reuse.
3. Select only facts that are relevant to the target vacancy. Do not invent missing facts, metrics, or tools.
4. Keep the output in `resumes/<year>/<role>/<language>/<variant>/resume.md`.
5. Use `base` only for the untargeted default version. Use a dedicated variant folder for a vacancy-specific version.
6. Preserve factual fidelity. Tailoring may change emphasis, order, and wording, but not the underlying facts.
7. If the vacancy reveals a missing canonical fact, update `contacts.md` or `experience.md` before finalizing the derived resume.

## Output Rules

- Derived resumes must stay concise and role-specific.
- Prefer existing repository wording when it already matches the target.
- Keep PDF concerns out of the authoring workflow. PDF generation happens only after the derived resume is ready.
