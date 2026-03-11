# Resume Repository

This repository stores personal resume variants as canonical Markdown documents.

## Universal Rules

- Ignore [README.md](README.md) as a source of truth.
- [README.md](README.md) must display the current implemented resumes, and any change that adds or removes a canonical `resumes/**/resume.md` file must update that README list in the same change.
- Refer to skills with a leading `$` prefix.
- Treat Markdown as the only in-repo source of truth.
- Do not create, keep, or rely on PDF resume artifacts in this repository.
- When forming commit messages, follow the rules in `.gitlint`.
- Store every resume at `resumes/<year>/<role>/<language>/<variant>/resume.md`.
- Use `base` for the untargeted default variant and create separate variant folders for tailored versions.
- For resume tailoring and adjacent application materials, prefer `$tailored-resume-generator`, `$career-document-architect`, and `$cover-letter` as routed in `.agents/skill-routing.md`.

## Detailed Instructions

- [Repository Layout](.agents/repo-layout.md)
- [Resume Workflow](.agents/resume-workflow.md)
- [Skill Routing](.agents/skill-routing.md)
