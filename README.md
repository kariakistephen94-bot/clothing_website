# ÉLAN Atelier

A modern, Apple-inspired ecommerce experience for a fictional premium fashion house — _"Designed for the moments that define you."_

Built as a polished, frontend-only showcase: minimal, calm, and luxurious, with editorial photography, elegant serif/sans typography, and restrained motion.

## Tech Stack

- **Next.js 15** (App Router) + **React 19**
- **TypeScript**
- **Tailwind CSS v4** (CSS-first `@theme` configuration)
- **Framer Motion** — section reveals, hero animation, drawer & micro-interactions
- **Lucide React** — icons

No backend, database, or authentication. Cart state is client-side (React Context) and persists to `localStorage`.

## Getting Started

```bash
npm install
npm run dev      # http://localhost:3000
```

```bash
npm run build    # production build
npm start        # serve the production build
```

> Product & campaign imagery uses Unsplash CDN placeholders (configured in `next.config.mjs`). The first dev-mode load optimizes images on demand and can take a moment; production builds pre-optimize and cache them.

## Design System

| Token            | Value     | Usage                    |
| ---------------- | --------- | ------------------------ |
| Deep Charcoal    | `#111111` | Text, dark sections      |
| Warm Ivory       | `#F8F5EF` | Primary background       |
| Champagne Gold   | `#C8A96A` | Accents, eyebrows        |
| Soft Stone       | `#E8E2D8` | Borders, image surfaces  |

Typography pairs **Cormorant Garamond** (display serif) with **Inter** (UI sans).
Tokens live in [`app/globals.css`](app/globals.css).

## Project Structure

```
app/
  layout.tsx              # Root layout — fonts, providers, nav, footer, cart
  page.tsx                # Homepage composition
  globals.css             # Tailwind v4 theme + design tokens
  not-found.tsx           # 404
  products/[id]/page.tsx  # Product detail (SSG via generateStaticParams)

components/
  Navbar.tsx              # Transparent-over-hero → solid-on-scroll, mobile menu
  Hero.tsx                # Full-bleed cinematic hero
  FeaturedCollections.tsx # Women's & Men's collection grids
  NewArrivals.tsx         # Tabbed product grid
  BrandStory.tsx          # Editorial brand statement
  ProductCard.tsx         # Grid card w/ hover image swap + quick-add
  CollectionCard.tsx      # Collection tile
  ProductGallery.tsx      # Image gallery w/ thumbnails + hover zoom
  ProductDetail.tsx       # Size/color selectors, quantity, add-to-bag
  CartDrawer.tsx          # Slide-in bag w/ quantity controls
  Footer.tsx              # Newsletter, links, socials
  Reveal.tsx              # Reusable scroll-reveal wrapper

context/
  CartContext.tsx         # Cart state + localStorage persistence

data/
  products.ts             # Products, collections, helpers
```

## Features

- Responsive across desktop, tablet, and mobile
- Scroll-aware navigation with full-screen mobile menu
- Tabbed New Arrivals (Women / Men) with animated pill toggle
- Product pages with image zoom, color & size selection, related products
- Persistent shopping bag drawer with live subtotal
- Calm, consistent fade-in motion throughout
