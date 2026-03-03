# Resume Workflow

## Creating a New Base Resume

1. Choose the target `year`, `role`, and `language`.
2. Create `resumes/<year>/<role>/<language>/base/`.
3. Add `resume.md` as the first and only canonical file in that folder.
4. Keep `base` general enough to serve as the parent for future targeted variants.

## Creating a Targeted Variant

1. Start from the closest matching `base` resume or an existing targeted sibling.
2. Create a new folder at `resumes/<year>/<role>/<language>/<variant>/`.
3. Keep the filename fixed as `resume.md`.
4. Apply only the changes needed for that target; do not overwrite `base`.

## Editing an Existing Variant

- Edit content directly in that variant's `resume.md`.
- Keep changes scoped to the selected variant unless the update clearly belongs in every sibling.
- If the update should benefit all future applications, apply it to `base` and then propagate intentionally.
- Keep repository changes text-first and diff-friendly.

## Preserving Versus Forking Variants

- Edit `base` when the change is generally true across applications.
- Fork into a new variant when the wording, emphasis, ordering, or evidence is tailored to a specific employer, product area, or role angle.
- Do not silently overwrite a sibling variant that serves a different target.

## Migrating a Legacy Non-Markdown Resume

1. Extract the source content into `resume.md` under the canonical directory layout.
2. Preserve the original section order and factual meaning.
3. Reconstruct headings and bullets in clean Markdown.
4. Add a short `TODO:` note only where extraction is genuinely ambiguous.
5. Remove the legacy non-Markdown file from the repository after the Markdown file exists.

## Before Renaming or Restructuring Resume Folders

1. Inspect sibling variants under the same year, role, and language.
2. Confirm whether `base` is still the correct parent or whether a new role/language branch is needed.
3. Move the canonical `resume.md` to its new location instead of duplicating competing copies.
4. Update any links from [AGENTS.md](../../AGENTS.md) or other agent docs if the documented structure changes.
