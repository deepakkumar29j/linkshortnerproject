# Validation and Data Safety

## Available checks

Run checks relevant to the change:

- `npm run lint` runs ESLint.
- `npm run build` runs the production Next.js build.

There is currently no `test` script or project test suite in `package.json`. Do not claim tests passed when no tests were run. If a change adds testable behavior, add focused tests using an established project test setup or explain the missing setup.

For UI changes, verify the affected route and responsive/accessibility behavior when a browser is available. For route or auth changes, include the relevant authenticated and unauthenticated cases in verification.

## Database safety

- Do not run `src/index.ts` as a routine smoke test. It writes to and deletes from the configured database and uses a fixed email address.
- Never run migrations, destructive queries, seed data, or database scripts without explicit task need and a known safe target (such as a disposable test database).
- Do not read, print, or copy secrets from `.env`. Check only whether required variable names are configured, without revealing their values.
- If a check requires external Clerk or database credentials unavailable in the environment, report that limitation rather than inventing a successful result.

## Reporting

Summarize which commands and routes were checked, their outcomes, and any checks blocked by missing configuration or infrastructure.
