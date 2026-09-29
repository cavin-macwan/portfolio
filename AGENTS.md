# Repository Guidelines

## Project Structure & Module Organization

This Next.js App Router portfolio keeps pages, layout, CSS, and SEO files in `app/`. Article Markdown lives in `content/articles/`; images live in `public/`. `app/scroll-motion.tsx` handles browser-side animations. There is no automated test suite.

## Build, Test & Development Commands

- `pnpm install` installs dependencies.
- `pnpm dev` starts the local development server at `http://localhost:3000`.
- `pnpm lint` runs the Next.js ESLint rules.
- `pnpm build` checks TypeScript and creates the production build; `pnpm start` serves it.

There is no `pnpm test` script. Run lint and build before submitting changes, then check affected pages in a browser.

## Coding Style & Naming Conventions

Use TypeScript and TSX with two-space indentation, double quotes, and semicolons. Keep route files under `app/` and use kebab-case slugs and assets, such as `why-kotlin-uses-coroutines`. Prefer Server Components; use client components for browser APIs. Keep visual rules in `app/globals.css`. Follow the existing ESLint configuration.

## Content & SEO

When adding an article, update its Markdown file, route metadata in `app/articles/[slug]/page.tsx`, listings in `app/page.tsx` and `app/articles/page.tsx`, cover in `public/articles/`, and `app/sitemap.xml`. Keep dates, canonical paths, and social images consistent. Use PNG or JPEG for social previews.

## Testing Guidelines

No framework or coverage threshold is configured. For content or metadata edits, confirm the generated routes, links, images, and page metadata after `pnpm build`. Add a focused test only when introducing logic that needs one.

## Commit & Pull Request Guidelines

Recent commits use short descriptions such as `added animations`; no formal commit convention is enforced. Write a concise, action-focused message. Pull requests should describe the change, list verification commands, link a relevant issue when one exists, and include before/after screenshots for visual changes.

## Agent-Specific Instructions

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
