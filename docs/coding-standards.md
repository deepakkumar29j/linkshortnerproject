# Coding Standards

## TypeScript and React

- Keep TypeScript strict and preserve useful inferred and explicit types. Avoid `any`, unsafe casts, and non-null assertions when a guard or accurate type can express the behavior.
- Use functional React components and the App Router conventions already present in `app/`.
- Keep components small and focused. Extract reusable UI into `components/` only when more than one area benefits from it.
- Handle errors explicitly. Do not swallow exceptions, return success-shaped fallbacks, or silently ignore invalid input.

## Styling and UI

- Use Tailwind utility classes and the existing theme tokens in `app/globals.css`; avoid introducing a competing styling system.
- Reuse the existing primitives in `components/ui/` and the `cn` helper from `lib/utils.ts` when appropriate.
- Preserve responsive behavior, keyboard accessibility, visible focus states, and semantic HTML when changing UI.
- Avoid adding dependencies for functionality already available in the current stack.

## Data and authentication

- Keep database definitions in `src/db/schema.ts` and use Drizzle patterns consistent with the installed version.
- Validate and normalize untrusted inputs at the application boundary. Do not trust client-supplied user or ownership identifiers.
- Use Clerk's supported server/client APIs for the installed package version. Keep protected operations authenticated and verify authorization at the server boundary.
- Keep credentials in environment variables. Never hard-code secrets, log credentials, or include `.env` contents in responses or generated files.

## Scope and maintenance

- Prefer the smallest complete change that follows existing patterns.
- Update directly related documentation and validation when behavior, configuration, or commands change.
- Do not add speculative abstractions or features unrelated to the request.
