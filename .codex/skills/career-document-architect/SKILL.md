---
name: career-document-architect
description: Maintain the canonical career documents for this repository. Use when restructuring contacts.md or experience.md, normalizing role families, updating source facts, or changing the repository's resume information architecture.
---

# Career Document Architect

Use this skill when the task affects canonical source documents or the repository's resume information model.

## Primary Responsibilities

- Keep `contacts.md` and `experience.md` as the canonical source of facts.
- Normalize facts so they can support multiple derived resume families without duplication.
- Maintain clear separation between source facts and derived, vacancy-specific framing.

## Workflow

1. Update canonical facts in `contacts.md` and `experience.md` before editing derived resumes.
2. Keep the required top-level sections intact unless the repository contract explicitly changes.
3. Store reusable facts, role families, and skill inventories in canonical documents.
4. Keep vacancy-specific emphasis, ATS phrasing, and employer targeting out of canonical documents.
5. When repository structure changes, make sure `AGENTS.md` and `README.md` still describe the current contract.
6. If canonical facts change materially, review the affected derived resumes and refresh them only where necessary.

## Guardrails

- Do not turn PDFs into a source of truth.
- Do not duplicate the same factual content across multiple canonical files without a clear reason.
- Do not add new role families or experience claims unless they are grounded in existing source facts.
