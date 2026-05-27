# Eneden — Vanishing Canopies

Immersive storytelling site about Vietnam's primary forest conservation and the Red Data Book.

- Next.js `16.2.6`
- React `19.2.4`
- Turbopack (via Next.js dev/build)
- Tailwind CSS v4 + shadcn/ui primitives

## Quick Start

```bash
pnpm install
pnpm dev
pnpm build
pnpm lint
```

Default dev URL is typically `http://localhost:3000` unless a different port is provided at runtime.

## Scripts

- `pnpm dev` - start dev server
- `pnpm build` - production build
- `pnpm start` - run production server
- `pnpm lint` - run ESLint
- `pnpm lint:fix` - run ESLint with autofix
- `pnpm format` - format all files with Prettier
- `pnpm format:check` - check Prettier formatting
- `pnpm typecheck` - run TypeScript checks (`noEmit`)

## App Structure

The app is locale-routed under `src/app/[lang]`:

- `/{lang}` - landing page
- `/{lang}/details` - details stub
- `/{lang}/map` - map stub

Supported locales are defined in `src/i18n/config.ts`:

- `vi` (default)
- `en`
- `zh`

If a request has no locale segment, `src/proxy.ts` redirects it to the default locale.

## Project Layout

```text
src/
  app/
    [lang]/
      layout.tsx
      page.tsx
      details/page.tsx
      map/page.tsx
    globals.css
  components/
    features/landing/
    ui/
  i18n/
    config.ts
    dictionaries.ts
  lib/
    utils.ts
  proxy.ts
```

## Implementation Notes

- UI copy is sourced from locale dictionaries (`src/i18n/dictionaries.ts`).
- Landing experience is composed from feature components in `src/components/features/landing/`.
- Fonts are loaded in `src/app/[lang]/layout.tsx` using `next/font/google`.

## Development Rules

This repository enforces formatting and linting strictly:

1. Run `npx prettier --write <file>` (or `npx prettier --write .`) after edits.
2. Run `pnpm lint` and fix all reported issues before finishing.

Important lint rule: `react/jsx-no-literals` is strict. Avoid raw text literals directly in JSX unless allowed by config.
