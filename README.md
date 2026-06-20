# Phantom Vision

A Persona-inspired daily stat tracker. Log real actions across four stats —
Knowledge, Guts, Proficiency, Charm — across three daily time blocks, read a
new Calling Card every day at noon, and watch your progress build in the
Data Terminal. Built as a static React + Tailwind site for GitHub Pages, all
data stored locally in your browser.

> "Take it back — your own way of life."

## Stack

- React + Vite
- Tailwind CSS
- React Router (`HashRouter`, works on GitHub Pages without server config)
- `localStorage` for persistence — no backend, no accounts

## Local development

```bash
npm install
npm run dev
```

## Editing your stats / slots / actions

Everything you track lives in:

```
src/data/config.js
```

Edit `STATS` to change which stats exist, `SLOTS` to change the three daily
time blocks and what actions live in each. Actions can split across two
stats with custom weights (see `movie` and `cooking` for examples of a
0.5/0.5 split).

## Editing the Calling Cards (Spark page quotes)

```
src/data/callingCards.js
```

Append new entries to the `CALLING_CARDS` array. Each card needs:
- `id` — unique string
- `text` — the quote/line itself
- `tag` — one of `'knowledge' | 'guts' | 'proficiency' | 'charm' | null`

The featured card rotates automatically once per day, **flipping at 12:00
noon local time** (so the morning still shows the previous day's card for
continuity, and a fresh one appears after noon). Rotation is deterministic —
same card all day, every device, no backend needed.

## Deploying to GitHub Pages

1. Push this project to a new GitHub repo.
2. In `vite.config.js`, set `base` to match your repo name:
   ```js
   base: '/your-repo-name/',
   ```
3. In repo **Settings → Pages**, set source to **GitHub Actions**.
4. Push to `main` — the included workflow builds and deploys automatically.
5. Live at `https://<your-username>.github.io/<repo-name>/`

## Data & privacy

All data lives in your browser's `localStorage` under the key
`phantom-vision-state-v1`. Nothing is sent anywhere. This means your data is
tied to one browser on one device, and clearing site data erases history.

## Project structure

```
src/
  data/
    config.js         — stats, slots, actions (edit this to customize tracking)
    callingCards.js    — Spark page quote pool + daily rotation logic
  utils/storage.js      — localStorage read/write, totals, streaks, levels
  components/           — UI building blocks
  pages/
    Today.jsx           — daily checklist + live stat cards
    History.jsx          — radar chart, weekly bar chart, monthly heatmap
    Spark.jsx            — Calling Card of the day + archive + directive
```
