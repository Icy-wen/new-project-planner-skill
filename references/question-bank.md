# Question Bank

Use this reference to choose a small, high-signal question batch. Do not ask every question. Ask only what materially changes feasibility, stack, scope, or UX.

## Required Questions

Ask these unless already answered:

- What is the one-sentence project goal?
- Who will use it first, and in what real scenario?
- What form should it take: web app, mobile app, desktop app, CLI, API service, browser extension, automation, library, game, plugin, or something else?
- Are there hard technology stack requirements? If none, what matters most: speed, cost, scalability, maintainability, local-first, privacy, AI capability, cross-platform support, or hiring familiarity?
- What is one signature feature or distinctive twist you personally want this project to include? Describe the user experience, even if you are unsure how to build it.
- What visual style, brand feeling, or reference product should it resemble?
- What is the first MVP outcome that would make the project useful?

## Conditional Questions

Ask these when relevant:

- Data: What data does the product need, where does it come from, and who owns it?
- Users/auth: Does it need accounts, roles, teams, SSO, permissions, or guest usage?
- Integrations: Which external APIs, files, devices, payment systems, or AI models are required?
- Deployment: Should it run locally, on a private server, on Vercel/Netlify/Fly/Render, in cloud infrastructure, or in an enterprise environment?
- Operations: Does it need logs, analytics, backups, scheduled jobs, queues, monitoring, or admin tooling?
- Compliance: Are there privacy, security, copyright, financial, medical, education, or jurisdiction constraints?
- Timeline/team: Is this a solo prototype, hackathon, client project, startup MVP, internal tool, or long-term product?
- Budget: Are paid APIs, hosted databases, cloud services, or SaaS dependencies acceptable?
- Performance: What scale, latency, offline behavior, file size, or concurrency requirements matter?
- Content/design: Are there existing logos, colors, typography, copy tone, design systems, or accessibility requirements?

## Stack Recommendation Prompts

If the user has no hard stack, ask enough to choose among:

- Static or simple web: Astro, Vite, Next.js, SvelteKit, or plain HTML/CSS/JS.
- Full-stack web app: Next.js, Remix, Rails, Django, Laravel, Phoenix, or equivalent.
- API-first service: FastAPI, Express/NestJS, Go, Rails API, Django REST, or similar.
- Mobile: React Native/Expo, Flutter, native iOS/Android, or PWA.
- Desktop: Tauri, Electron, native, or web-based local app.
- Data/AI: Python stack, TypeScript stack, vector database, workflow engine, or model-provider choices.

Prefer the simplest stack that satisfies the user's constraints and can be deployed reliably.
