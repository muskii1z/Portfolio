# musabsaraswat.com

The source for my portfolio site: case studies of the AI products I've built and shipped, a resume page, and a link to book a call.

**Live site:** [musabsaraswat.com](https://musabsaraswat.com)

## Built with

- Next.js 16 (App Router) and React 19, in TypeScript
- Tailwind CSS, with Framer Motion for scroll animations and Lucide for icons
- A Calendly embed for booking calls
- Deployed on Vercel

All content lives in `src/data/` (case studies in `src/data/work/`, plus experience and site settings), so pages render from data and copy changes never touch components.

## Pages

- `/`: home, with headline results, featured work, and experience
- `/work` and `/work/<slug>`: case studies (the old `/projects` URLs redirect here)
- `/about`, `/contact`, `/resume`
- `/preview`: shows every page inside phone-sized frames with device toggles, for checking mobile layouts without browser dev tools

## Run it locally

```bash
npm install
npm run dev   # http://localhost:3000
```
