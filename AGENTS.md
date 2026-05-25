<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

<!-- END:nextjs-agent-rules -->

# Eneden — Vanishing Canopies

Single-page immersive storytelling site about Vietnam's primary forest conservation and the Red Data Book. Next.js 16 + React 19 + Turbopack.

## Quick Start

```sh
pnpm install
pnpm dev          # starts on port 3002 (not 3000)
pnpm build        # TypeScript check + production build via Turbopack
pnpm lint         # ESLint v9 flat config
npx prettier --write .  # fix all formatting
```

## Architecture

- **3 routes**: `/` (landing), `/details` (stub), `/map` (stub) — all under `src/app/`
- **No data fetching** — fully static. No server components needed. Every landing component uses `"use client"`.
- **No tests** — no test framework installed.
- **Pre-commit hook**: `.husky/pre-commit` runs `lint-staged` then `npm run type-check`. **Broken** — neither `lint-staged` config nor `type-check` script exist in `package.json`. Do not rely on it; use `pnpm build` or `pnpm lint` directly.

## Prettier — mandatory after every edit

Project uses `eslint-plugin-prettier/recommended` (Prettier formatting enforced by ESLint).
**After editing any file, always run** `npx prettier --write <file>` or `npx prettier --write .` to fix formatting. Otherwise, `pnpm lint` will fail on formatting issues.

## ESLint — traps for agents

Flat config (`eslint.config.mjs`). The rule `react/jsx-no-literals` is **strict — enabled** with `noStrings: true`. This means every JSX text string must be:

- either in the `allowedStrings` array (punctuation only — `:`, `-`, `—`, `•`, `·`, `/`, `"`, `đ`), or
- extracted to a constant/variable outside JSX (or via `children` prop, `dangerouslySetInnerHTML`, etc.)

**Writing `<p>Some plain text</p>` directly in a component will fail lint.** Extract text into a `const` above the component or use `/* eslint-disable react/jsx-no-literals */` for demo/prototype code (but not in production files).

Other enforced rules:

- `simple-import-sort/imports` — imports must be sorted (auto-fixable)
- `unused-imports/no-unused-imports` — deleting unused imports (auto-fixable)
- `@next/next/no-img-element` — **disabled** (raw `<img>` allowed)

## Tailwind CSS v4 — differences from v3

**No `tailwind.config.js`.** All theme tokens are defined in `src/app/globals.css` via `@theme`:

- Default font: `--font-sans` (Geist) via `next/font/google`
- Custom fonts: `--font-display` (EB Garamond, serif), `--font-body` (Be Vietnam Pro, sans)
- Class names: `font-display` and `font-body` (NOT `font-serif`/`font-sans`)
- Color tokens follow shadcn CSS variable pattern: `bg-background`, `text-foreground`, `border-border`
- **No `@config`** — the old `tailwind.config.js` pattern does not apply
- PostCSS plugin: `@tailwindcss/postcss` (not `tailwindcss`)

## Import paths

All component imports use `@/` → `./src/`:

```ts
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
```

## Dependencies worth knowing

| Package                                                                | Purpose                                                             |
| ---------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `motion` ^12                                                           | Animations (imported from `motion/react`, NOT `framer-motion`)      |
| `zustand` ^5                                                           | State management (installed but not used yet)                       |
| `shadcn` / `radix-ui`                                                  | UI primitives (style: `radix-nova`)                                 |
| `sonner`                                                               | Toast notifications (installed but not used yet)                    |
| `babel-plugin-react-compiler`                                          | React Compiler — enabled via `next.config.ts` `reactCompiler: true` |
| `tw-animate-css`, `tailwind-merge`, `clsx`, `class-variance-authority` | shadcn/ui toolchain                                                 |

## Source structure

```
src/
  app/
    globals.css          # Tailwind v4 @theme + shadcn tokens + custom CSS
    layout.tsx           # RootLayout — loads 4 Google Fonts, applies variables
    page.tsx             # Landing page — composes 7 sections
    details/page.tsx     # Stub
    map/page.tsx         # Stub
  components/
    landing/             # 12 components — all "use client", all feature-specific
      nav.tsx            # Fixed glass-nav with mobile hamburger
      hero.tsx           # Fullscreen parallax hero
      atmospheric-quote.tsx
      scroll-story.tsx   # Multi-panel sticky scroll section (4 panels, parallax layers)
      species-showcase.tsx
      threat-section.tsx
      sketchfab-model.tsx
      museum-section.tsx # Bảo tàng Sách Đỏ — species grid + 3D viewer
      cta-section.tsx
      footer.tsx
      parallax-layer.tsx # Reusable parallax (speed param, accepts external scrollY)
      particle-system.tsx # Canvas-free DOM particle effect
    ui/
      button.tsx         # shadcn/ui button (cva + Slot)
  lib/
    utils.ts             # cn() — clsx + tailwind-merge
```

## Key patterns

- **Component exports**: Named function exports only (`export function ComponentName()`)
- **Image strategy**: CSS `backgroundImage` with inline gradient overlays (no next/image). Images are external URLs (Google AIDA-public, Unsplash).
- **Animation**: `motion/react` — `useInView` for scroll-reveal, `useScroll` for parallax, `AnimatePresence` for transitions
- **Color scheme**: Dark backgrounds (`#0e0e0e`, `#131313`, `#111`), brass accent `#e9c176`, text `#e5e2e1`/`#c3c8c2`
- **3D viewer**: Sketchfab embeds via iframes (`sketchfabId` in data)

## Build & lint quirks

- `pnpm build` succeeds with current code. No test step.
- ESLint is the stricter gate (see JSX-no-literals above). TypeScript is at `strict: true` but `skipLibCheck: true`.
- The `pnpm-workspace.yaml` has `allowBuilds`/`ignoredBuiltDependencies` but **no `packages:` list**. This is benign for a single-project workspace.
