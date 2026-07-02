# Ainea Esrat Esika — Portfolio

A one-page portfolio built with Next.js (App Router) and Tailwind CSS,
generated from the CV content.

## Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Build for production

```bash
npm run build
npm run start
```

## Deploy

Push this folder to a GitHub repo and import it in Vercel (or Netlify) —
zero config needed, it's a standard Next.js app.

## Editing content

All the copy lives in `app/page.tsx` — skills, experience, projects,
education, and achievements are plain arrays/objects near the top of the
file, so updating them doesn't require touching any layout code.

Design tokens (colors, fonts) are in `tailwind.config.ts` and
`app/layout.tsx` if you want to adjust the palette or typefaces.
