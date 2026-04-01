# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an April Fools' Day prank project: a fake Anthropic blog post announcing fictitious "Fisher Pricing" changes. The "Learn more about Fisher Pricing" link reveals the joke by redirecting to a Fisher-Price toy on the Mattel website.

## Commands

```bash
# Development
npm run dev          # Start dev server

# Build (static export)
npm run build        # Outputs to out/

# Test static build locally
npx serve out
```

## Architecture

- **Framework**: Next.js 14 with static export (`output: 'export'`)
- **Styling**: Global CSS in `app/globals.css` (dark Anthropic-style theme)
- **Fonts**: Inter + JetBrains Mono via Google Fonts

### Structure

```
app/
├── layout.tsx           # Root layout with metadata/OpenGraph tags
├── page.tsx             # Main article page (single-page site)
├── globals.css          # All styles
└── components/
    ├── Header.tsx       # Navigation header
    ├── Breadcrumb.tsx   # Article breadcrumb
    ├── ArticleHero.tsx  # Hero section with title/metadata
    ├── RelatedPosts.tsx # Related articles section
    └── Footer.tsx       # Site footer
```

### Content Resources

- `resources/content/linkedin-post.md` - LinkedIn announcement drafts
- `resources/content/blog-article.md` - Article content draft
- `resources/content/design-specs.md` - Design specifications

## Deployment

Target: GitHub Pages at `claude-fisher-pricing.github.io`

The build outputs static files to `out/` for deployment.