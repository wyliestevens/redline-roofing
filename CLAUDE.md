# Redline Roofing & Restoration — Project Status

## Overview
Production-ready Next.js 16 demo website for a fictional OKC roofing company "Redline Roofing & Restoration." Built as a sales demo for AI Peak Biz.

## Tech Stack
- Next.js 16 App Router, TypeScript strict mode
- Tailwind CSS v4 (CSS-based config) + shadcn/ui (base-ui)
- Fraunces (headings, local font) + Inter (body, Google Font) via next/font
- Lucide React icons
- react-hook-form + zod for form validation
- Deploy target: Vercel

## Current Status
- **Phase:** BUILD COMPLETE
- **Started:** 2026-04-27
- **Last updated:** 2026-04-27
- **Build:** Passing (43 pages, 0 errors)

### All Complete
- [x] Tailwind v4 design system (globals.css) with custom tokens
- [x] Site config (lib/site-config.ts) — 14 service areas, all brand data
- [x] Layout + header (sticky, mega menu, mobile sheet) + footer (4-col)
- [x] Homepage with 12 sections (hero, trust bar, services, why-redline, insurance teaser, gallery preview, reviews, CTA+form, FAQ, financing strip, service area map, final CTA)
- [x] Lead form ("use client") with react-hook-form + zod, TCPA consent, API submission
- [x] Exit-intent popup ("use client") with scroll/mouse-leave triggers, localStorage frequency cap
- [x] 6 service pages (roof replacement, repair, storm damage, commercial, gutters, inspection) — 700-1200 words each with tables, dl, FAQs
- [x] 14 city pages (OKC, Edmond, Norman, Moore, Yukon + 9 more) — unique copy per city
- [x] Insurance claims cornerstone page — case studies, ACV/RCV table, 8 FAQs
- [x] About page — McAllister family history, team section
- [x] Blog hub + 5 full posts (hail guide, cost breakdown, Class 4 shingles, ACV vs RCV, storm chasers)
- [x] FAQ (15 items), Financing, Warranty, Reviews (12 reviews), Gallery (12 projects), Contact pages
- [x] JSON-LD structured data (RoofingContractor, Service, FAQPage, Article, BreadcrumbList, AggregateRating)
- [x] robots.ts, sitemap.ts (all routes), llms.txt
- [x] API lead route (edge runtime, webhook forwarding)
- [x] Accessibility: skip-link, focus rings, semantic HTML, aria labels
- [x] Mobile call button, chatbot container, Retell script placeholder
- [x] Data files: reviews (12), FAQs (15), service areas (14), blog posts (5), JSON-LD builders (7)

### Pre-Launch TODO (for real deployment)
- [ ] Replace placeholder images in public/img/ with real photography
- [ ] Replace phone number with real Retell-routed number
- [ ] Set RETELL_AGENT_ID and RETELL_WEBHOOK_URL in .env
- [ ] Set up Google Analytics (NEXT_PUBLIC_GA_ID)
- [ ] Connect GitHub repo to Vercel for deployment
- [ ] Add real favicon and OG image

## Key Info
- **Phone:** (405) 555-0117 (placeholder for Retell)
- **Address:** 2401 NW 23rd Street, Suite 300, OKC, OK 73107
- **Domain:** redlineroofingok.com
- **CIB #:** 80003217
- **Design tokens:** slate-deep #1F2A37, copper #B8531C, sand #E8DDC9, cream #FAFAF7
