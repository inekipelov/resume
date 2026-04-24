# 2026 Base Resumes Refresh Design

## Goal

Refresh every `base` resume for 2026 so the repository has a stronger and more consistent default resume set grounded in canonical facts from `contacts.md` and `experience.md`.

## Scope

Update these files only:

- `resumes/2026/ios-developer/en/base/resume.md`
- `resumes/2026/ios-developer/uk/base/resume.md`
- `resumes/2026/ios-developer/es/base/resume.md`
- `resumes/2026/software-engineer/en/base/resume.md`
- `resumes/2026/python-developer/en/base/resume.md`
- `resumes/2026/mobile-project-manager/en/base/resume.md`

Do not change tailored variants.

## Source of Truth

- Use `contacts.md` for identity, contact data, links, language list, and work context.
- Use `experience.md` for positioning, role families, skills inventory, work history, projects, and education.
- Do not treat existing resume wording as canonical if it conflicts with the source documents.

## Editorial Strategy

Apply a full editorial refresh rather than a factual-only sync:

- Rewrite summaries so each resume has a distinct default positioning.
- Keep role-specific emphasis, but remain honest to the documented experience.
- Rebuild skills sections from the canonical inventory instead of preserving weak legacy lists.
- Use projects selectively to strengthen the target role narrative.
- Keep the structure recognizable across all base resumes.

## Role Baselines

### iOS Engineer

This is the flagship mobile resume.

- Emphasize principal-level iOS depth, architecture modernization, real-time communication, Apple frameworks, hardware integrations, delivery reliability, and technical leadership.
- Keep the broadest mobile skill set and the richest mobile project framing.

### Software Engineer

This is the broad engineering resume.

- Present a mobile-first software engineer profile with adjacent backend, reporting, automation, and integration depth.
- Highlight system boundaries, API contracts, data pipelines, and delivery quality more than Apple-only specialization.

### Python Developer

This is a truthful backend-adjacent Python resume, not a fictional pure-backend profile.

- Anchor the narrative in TradingView Dashboard and TradingView Notifications.
- Use prior work only where it proves API integration, data flow, contract alignment, validation, and release discipline.
- Avoid overstating years of Python-only commercial experience.

### Mobile Technical Lead

This resume should read as delivery and technical leadership oriented.

- Emphasize ownership during reset and scale phases, architecture stabilization, team guidance, cross-functional coordination, rollout safety, and product execution.
- Keep technical depth visible, but subordinate implementation detail to leadership and delivery outcomes.

## Structure Rules

For every updated base resume:

- Keep contact and links aligned with `contacts.md`.
- Keep experience chronology aligned with `experience.md`.
- Use concise but substantive bullet points.
- Prefer impact, scope, and system responsibility over low-signal task descriptions.
- Do not include compensation data.

## Localization Rules

### Ukrainian

- Raise the Ukrainian version to the same factual depth as the English iOS base resume.
- Reduce unnecessary English insertions when a clear Ukrainian equivalent exists.
- Preserve standard technical terms when translation would be awkward or misleading.

### Spanish

- Raise the Spanish version to the same factual depth as the English iOS base resume.
- Reduce avoidable Spanglish where natural Spanish phrasing is available.
- Preserve standard technical terms and product names where translation would reduce clarity.

## Non-Goals

- No repository structure changes.
- No updates to `contacts.md` or `experience.md` unless a concrete factual issue is discovered.
- No tailored employer-specific positioning.
- No README update, because the set of `base` resume paths is unchanged.

## Verification

Before completion:

- Re-read all updated base resumes against `contacts.md` and `experience.md`.
- Check that role positioning differs meaningfully across base resumes.
- Check that Ukrainian and Spanish iOS resumes are semantically aligned with the English iOS base resume.
