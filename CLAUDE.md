# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Core Commands
- `pnpm dev` - Start development server with Turbo (auto-runs lint check before starting)
- `pnpm build` - Full production build (generates blog index + Next.js build)  
- `pnpm build:prod` - Production build without blog index generation
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint checks

### Blog Management
- `pnpm generate-blog-index` - Generate blog index from MDX files in src/mdx/blog/
- `pnpm check-translations` - Check translation completeness
- `pnpm clean-translations` - Clean unused translation keys
- `pnpm remove-translations` - Remove translations with --remove flag

### Dependency Management  
- `pnpm windrun` - Update all @windrun-huaiin packages to latest versions
- `pnpm d8` (alias for `pnpm deep-clean`) - Deep clean node_modules and rebuild

## Project Architecture

### Tech Stack
- **Framework**: Next.js 15.3 with App Router
- **Content**: FumaDocs for MDX-based blog/documentation
- **Styling**: Tailwind CSS 4.1 with custom UI components
- **Internationalization**: next-intl (English only currently)
- **Package Manager**: pnpm with workspace support

### Key Directory Structure
```
src/
├── app/[locale]/                 # Next.js App Router with i18n
│   ├── (home)/[[...slug]]/      # Blog pages  
│   └── legal/[[...slug]]/       # Legal pages
├── lib/
│   ├── appConfig.ts             # Central app configuration
│   ├── source-blog.ts           # FumaDocs blog source
│   └── source-legal.ts          # FumaDocs legal source  
├── mdx/
│   ├── blog/                    # Blog MDX content
│   └── legal/                   # Legal MDX content
└── components/
    └── mdx-components.tsx       # MDX component providers
```

### Configuration Files
- `source.config.ts` - FumaDocs configuration with blog/legal sources
- `dev-scripts.config.json` - Configuration for @windrun-huaiin/dev-scripts
- `next.config.ts` - Next.js config with MDX and i18n plugins

### MDX Content System
- Blog content in `src/mdx/blog/` with `meta.json` for navigation
- FumaDocs handles MDX processing with Shiki syntax highlighting
- Custom transformers for code language detection and notation escape
- Math support via remark-math and rehype-katex
- Image optimization disabled (uses remote URLs)

### Custom UI Framework
- Heavily uses `@windrun-huaiin/*` packages for UI components
- Custom site icon generation via `createSiteIcon('Sigma')`
- JetBrains-inspired design language (see .cursor/rules/jet-brains-style-rule.md)
- Responsive design with Tailwind CSS

### Development Notes
- TypeScript strict mode enabled
- ESLint with unused imports plugin
- Montserrat font from Google Fonts
- Experimental webpack settings for build optimization
- React 19.1.0 with strict overrides in pnpm config