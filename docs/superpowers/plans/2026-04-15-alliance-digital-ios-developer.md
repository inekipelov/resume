# Alliance Digital iOS Developer Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build and publish a vacancy-specific application package for the Alliance Digital iOS Developer role.

**Architecture:** Create a new derived resume variant under the existing 2026 iOS English resume tree, then keep all application assets for this vacancy in the same folder. Use canonical repository facts for the resume and use a separate Ukrainian cover letter to carry tone, motivation, and HR-facing positioning.

**Tech Stack:** Markdown, git, GitHub PR workflow

---

### Task 1: Prepare Vacancy Variant Files

**Files:**
- Create: `resumes/2026/ios-developer/en/alliance-digital-ios-developer/resume.md`
- Create: `resumes/2026/ios-developer/en/alliance-digital-ios-developer/cover-letter-uk.md`
- Create: `resumes/2026/ios-developer/en/alliance-digital-ios-developer/hr-questions.md`
- Create: `resumes/2026/ios-developer/en/alliance-digital-ios-developer/technical-team-ceo-questions.md`

- [ ] Step 1: Base the new resume on the existing English iOS resume structure and reorder emphasis toward the vacancy requirements.
- [ ] Step 2: Write the Ukrainian cover letter with a warm, interested tone that does not mirror the resume bullets.
- [ ] Step 3: Add the HR and technical or CEO checklist files required by `AGENTS.md`.
- [ ] Step 4: Re-read all new files for factual accuracy and repetition.

### Task 2: Publish the Vacancy Package

**Files:**
- Modify: `docs/superpowers/specs/2026-04-15-alliance-digital-ios-developer-design.md`
- Modify: `docs/superpowers/plans/2026-04-15-alliance-digital-ios-developer.md`

- [ ] Step 1: Create a feature branch for the vacancy package.
- [ ] Step 2: Inspect the final diff with `git diff --stat` and `git diff -- resumes/2026/ios-developer/en/alliance-digital-ios-developer`.
- [ ] Step 3: Stage only the intended files.
- [ ] Step 4: Commit with a gitlint-compliant message.
- [ ] Step 5: Push the branch and open a draft PR titled `Alliance Digital + iOS Developer`.
