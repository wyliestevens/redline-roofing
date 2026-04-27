# Redline Roofing & Restoration — Demo Site

Production-ready Next.js 14 demo site for AI Peak Biz roofing-contractor sales demos.

## Tech stack
Next.js 14 App Router · TypeScript · Tailwind · shadcn/ui · deployed to Vercel.

## Local dev

```bash
# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Run dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

```
app/              → App Router pages and API routes
components/       → React components (ui/ = shadcn)
lib/              → Config, data files, JSON-LD builders
public/           → Static assets, fonts, images
```

## Environment variables

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Production URL |
| `RETELL_WEBHOOK_URL` | Retell AI webhook for lead capture |
| `RETELL_AGENT_ID` | Retell voice agent ID |
| `GOOGLE_MAPS_API_KEY` | Google Maps embed key |
| `NEXT_PUBLIC_GA_ID` | Google Analytics 4 measurement ID |

## Deploy

Push to GitHub and connect to Vercel. Zero-config deployment.

## Image placeholders

All images in `public/img/` and `public/og/` are placeholders. Replace with real photography before launch.

## License

Proprietary — AI Peak Biz demo asset.
