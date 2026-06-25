# TODO

| Status | Priority | Task | Dependency | Output | Acceptance criteria |
| --- | --- | --- | --- | --- | --- |
| Done | P0 | Capture product direction | User answers | Clear MVP direction | Digital-only sticker pack maker for individual creators is documented |
| Done | P0 | Create planning docs | Product direction | `docs/` and `TODO.md` | Brief, research, PRD, technical design, roadmap, and TODO exist |
| Todo | P0 | Create app scaffold | Stack decision | Next.js app with TypeScript and Tailwind | `npm run dev` opens editor shell locally |
| Todo | P0 | Build editor shell layout | App scaffold | Asset panel, canvas, style panel, toolbar | First screen is usable tool surface, not a landing page |
| Todo | P0 | Implement image upload validation | Editor shell | File validation module | PNG, JPG, WebP accepted; unsupported and oversized files are rejected |
| Todo | P0 | Add Fabric.js canvas adapter | App scaffold | `fabricAdapter.ts` | Canvas mounts, disposes cleanly, and can add image objects |
| Todo | P0 | Implement upload-to-sticker flow | Upload and canvas adapter | First sticker object | Uploaded image appears as styled sticker on canvas |
| Todo | P0 | Add sticker style controls | Sticker flow | Border, shadow, opacity, filter controls | User can change style and see canvas update |
| Todo | P0 | Add object controls | Canvas adapter | Move, scale, rotate, duplicate, delete | Selected sticker can be edited without breaking canvas state |
| Todo | P0 | Export selected sticker PNG | Sticker object | PNG export service | Exported image has transparent background where applicable |
| Todo | P0 | Save and restore local draft | Project state | IndexedDB/localStorage persistence | Refresh restores current project |
| Todo | P1 | Add sticker tray | Multiple stickers | Tray component | User can select, rename, duplicate, and delete stickers from tray |
| Todo | P1 | Export ZIP sticker pack | Sticker tray | ZIP export service | ZIP contains one PNG per sticker with predictable file names |
| Todo | P1 | Add scene templates | Canvas and templates | Template picker | At least 4 templates can be selected and exported |
| Todo | P1 | Add dress-up template | Template system | Locked character/avatar template | User stickers can be layered onto template without deleting base art |
| Todo | P1 | Export full scene PNG | Scene mode | Scene export service | Exported PNG matches visible canvas |
| Todo | P1 | Add file and performance limits | Upload and export | Guardrails | Large files are downscaled or rejected with clear feedback |
| Todo | P1 | Add Playwright smoke test | Working MVP | Browser test | Test uploads fixture, creates sticker, exports, and restores draft |
| Todo | P2 | Improve alpha-outline border | Basic sticker border | Pixel-aware border effect | Transparent PNG stickers get clean rounded white outline |
| Todo | P2 | Add optional AI adapter | Stable MVP | `aiAdapter.ts` and disabled UI path | App can call future AI feature without changing core editor |
| Todo | P2 | Add AI background removal | AI adapter | Cutout workflow | User can remove background with fallback when unavailable |
| Todo | P2 | Add AI cute style preset | AI adapter | Stylize workflow | User can generate a cute sticker variant and accept or discard it |
| Todo | P2 | Add pack cover generator | Sticker pack export | Cover template | User can export a cover image for the sticker pack |
| Todo | P2 | Deploy MVP | Passing smoke test | Public URL | Main flow works on deployed build |
