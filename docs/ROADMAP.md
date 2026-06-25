# Roadmap

## Milestone 0: Research and setup

Goal: lock MVP scope and prepare the project foundation.

- Confirm project name and initial creator niche.
- Confirm max upload size and supported file formats.
- Create Next.js, TypeScript, Tailwind, and test setup.
- Pick Fabric.js as the initial canvas engine.
- Add base editor layout and design tokens.

Exit criteria:

- App runs locally.
- First screen opens directly to editor shell.
- No account, payment, or backend dependency exists.

## Milestone 1: Foundation and first vertical slice

Goal: make one image become one sticker and export it.

- Implement file upload.
- Render uploaded image on canvas.
- Add default sticker preset.
- Support move, scale, rotate, delete, and duplicate.
- Export selected sticker as transparent PNG.
- Add basic local draft save.

Exit criteria:

- A user can upload an image, style it as a sticker, and export it.
- Refreshing the page can restore the latest draft.

## Milestone 2: Core sticker pack workflow

Goal: make a small pack, not just one sticker.

- Add sticker tray.
- Add rename and reorder.
- Add per-sticker style controls.
- Add ZIP export.
- Add project reset and export error handling.
- Add performance guardrails for large files.

Exit criteria:

- A user can create and export a pack of at least 6 stickers.
- ZIP contains predictable PNG file names.

## Milestone 3: Sticker Scene Desk

Goal: make the signature feature feel distinct.

- Add scene mode and template picker.
- Add at least 4 scene templates.
- Add dress-up mode and 1 locked character/avatar template.
- Add layer controls for templates and stickers.
- Export full scene PNG.
- Add playful empty states and template thumbnails.

Exit criteria:

- A user can use the same sticker in a scene and dress-up board.
- A finished scene exports as a share-ready PNG.

## Milestone 4: Quality, deployment, and polish

Goal: make the MVP shippable.

- Add Playwright smoke tests.
- Add visual QA checklist.
- Improve responsive behavior.
- Improve keyboard and accessibility basics.
- Deploy to Vercel or another low-cost host.
- Add lightweight usage/error analytics only if needed.

Exit criteria:

- Main flow passes browser smoke test.
- App is deployed.
- Known limitations are documented.

## Future ideas

- AI background removal.
- AI cute toy style conversion.
- AI-generated scenes and pack covers.
- User-provided API key mode for low-cost AI.
- Shareable project links.
- Cloud project sync.
- Public sticker pack gallery.
- Marketplace or creator store.
- Mobile-optimized editor.
