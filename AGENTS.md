# Resume Repository

This repository exists to store and organize resumes as Markdown documents.

## Universal Rules

- Ignore [README.md](README.md) as a source of truth.
- Treat Markdown as the only in-repo source of truth.
- Canonical fact sources live in [contacts.md](contacts.md) and [experience.md](experience.md).
- Files under `resumes/<year>/<role>/<language>/<variant>/resume.md` are derived resumes for roles or vacancies.
- Use `base` for the untargeted default variant and create separate variant folders for tailored versions.
- Only `resumes/**/base/resume.md` files are canonical default resume variants for the repository's default PDF/export flows.
- [README.md](README.md) tracks the current implemented `base` resume variants, not every tailored vacancy-specific variant. Any change that adds or removes a `resumes/**/base/resume.md` file must update that README list in the same change.
- Refer to skills with a leading `$` prefix.
- Do not treat PDF artifacts as source of truth. PDFs may be generated only from derived `resume.md` files. The default PDF build/export flow includes only `base` variants unless a specific resume path is selected explicitly.
- When forming commit messages, follow the rules in `.gitlint`.
- Store every resume at `resumes/<year>/<role>/<language>/<variant>/resume.md`.
- When starting work on a new vacancy, create a dedicated PR named `Company + Role`.
- When preparing a tailored role variant (any variant except `base`), create two checklist Markdown files next to `resume.md`: one with HR questions and one with technical team / CEO questions.

## Preferred Local Skills

- Use `$tailored-resume-generator` for vacancy-targeted resume creation or updates from [contacts.md](contacts.md), [experience.md](experience.md), the vacancy text, and existing derived resumes.
- Use `$career-document-architect` for changes to canonical source documents, repository resume structure, or role-family positioning.
