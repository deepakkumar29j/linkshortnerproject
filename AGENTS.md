# Agent Instructions

These instructions apply to the whole repository. Read the relevant project guides in [`docs/`](./docs/) before making changes, and keep them current when project conventions change.

- Follow the existing architecture and conventions; do not assume planned link-shortener features already exist.
- Keep changes focused, preserve existing behavior, and update or add validation for changed behavior.
- Never expose or commit secrets. Do not run database operations against a configured database unless the task explicitly requires it and the target is known to be safe.
- Before using a Next.js API or changing framework configuration, read the relevant guide shipped with the installed Next.js version under `node_modules/next/dist/docs/`.

## Project Guides

- [Architecture and framework conventions](./docs/architecture.md)
- [Coding standards](./docs/coding-standards.md)
- [Validation and data safety](./docs/validation.md)

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
