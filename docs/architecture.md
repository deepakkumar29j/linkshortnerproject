# Architecture and Framework Conventions

## Current project shape

- This is a Next.js App Router project using TypeScript, React, Tailwind CSS, and the `app/` directory.
- `app/` contains routes, the root layout, and global styles. Keep route-specific UI with its route unless it is genuinely shared.
- `app/sign-in/[[...sign-in]]/page.tsx` and `app/sign-up/[[...sign-up]]/page.tsx` render Clerk's hosted UI components. `app/layout.tsx` provides `ClerkProvider`.
- `proxy.ts` configures Clerk middleware for requests. Preserve its matcher behavior when changing request handling, and use the installed Next.js and Clerk guidance for current APIs.
- `src/db/schema.ts` defines the Drizzle PostgreSQL schema. `drizzle.config.ts` configures Drizzle Kit, and `src/index.ts` is a standalone database CRUD example—not an application API or a link-shortening service.
- `components/ui/` contains reusable UI primitives. `lib/utils.ts` re-exports the class-name helper.

## Change boundaries

- Do not move route or framework files, replace the router, or introduce a second authentication/database layer without a clear requirement.
- Keep database schema and migration changes aligned. Inspect the existing migration setup before changing schema; do not assume a migration workflow or deployed schema that is not present.
- The repository is an early scaffold. Do not describe short-link creation, redirect, analytics, or dashboard features as implemented unless the code actually implements them.
- Prefer server components by default. Add client components only where browser-side state, effects, or event handlers are needed.
- Use the installed-version documentation under `node_modules/next/dist/docs/` before implementing Next.js behavior. This project's Next.js version may differ from familiar conventions.
