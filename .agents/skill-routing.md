# Skill Routing

Always refer to skills with a leading `$` prefix.

## Required Skills

- Use `$agent-md-refactor` for any change to `AGENTS.md` or files under `.agents/`.
- Use `$brainstorming` before creative or structural work such as defining a new resume family, performing a major rewrite, or changing repository workflow rules.
- Use `$writing-plans` after design approval for multi-step migrations, large reorganizations, or other implementation plans that touch several files or folders.

## Resume and Application Skills

- Use `$tailored-resume-generator` when adapting an existing `resume.md` to a specific vacancy, ATS keyword set, or employer-facing variant.
- Use `$career-document-architect` for academic CVs, biosketches, career narratives, or other higher-level positioning work that goes beyond a standard industry resume.
- Use `$cover-letter` only when the task explicitly asks for a cover letter that should stay aligned with an existing resume.

## Optional Skills

- Use `$copy-editing` when the task is to polish existing resume wording without changing the underlying facts.
- Use `$copywriting` only when the user explicitly asks for a from-scratch rewrite of positioning, summary, or achievement framing.

## Explicit Exclusions

- Do not use `$story-coach` for normal resume authoring or maintenance in this repository; the expected output is direct resume content, not coaching-only guidance.
- Do not pull in unrelated engineering skills unless the task is actually about those domains rather than resume content or repository structure.
- Do not use `$career-document-architect` as the default for ordinary industry-resume edits; prefer `$tailored-resume-generator`, `$copy-editing`, or `$copywriting` when those fit better.
- Do not let `$cover-letter` redefine the repository contract: this repository stays Markdown-only, and any in-repo artifacts must remain text-first unless the user explicitly asks for an external export workflow.
