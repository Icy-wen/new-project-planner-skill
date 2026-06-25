# Research

## Search date

2026-06-24

## Sources reviewed

- Fabric.js GitHub: https://github.com/fabricjs/fabric.js
- Konva GitHub: https://github.com/konvajs/konva
- tldraw GitHub: https://github.com/tldraw/tldraw
- Sticker Mule Studio: https://www.stickermule.com/studio
- Canva sticker maker: https://www.canva.com/create/stickers/
- Printify API docs: https://developers.printify.com/

## Comparable projects and products

| Name | Link | Audience | Core features | Stack clues | License/pricing | Maintenance/adoption | Strengths | Gaps for this project |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Fabric.js | https://github.com/fabricjs/fabric.js | Developers building canvas editors | Canvas objects, scale, move, rotate, filters, JPG/PNG/JSON/SVG I/O | TypeScript/JavaScript, HTML5 canvas | MIT | High adoption, about 31.3k GitHub stars on review date | Mature, permissive, good fit for object editing and export | Does not provide product UX, sticker-specific workflows, or AI |
| Konva | https://github.com/konvajs/konva | Developers building interactive canvas apps | Drag/drop, animation, shapes, mobile/desktop interactivity | JavaScript canvas framework | View license on GitHub; commonly used in React canvas apps | Active, about 14.6k GitHub stars; latest release shown as Apr 30, 2026 | Strong interaction model and performance | Export and image-editing workflow may need more custom code than Fabric.js |
| tldraw | https://github.com/tldraw/tldraw | Teams building infinite canvas apps | Infinite canvas, drawing, collaboration-style primitives | React SDK, TypeScript | Development use is free; production use requires a license key | Very high adoption, about 48.2k GitHub stars; latest release shown as Jun 12, 2026 | Rich editor foundation and polished interaction model | Production license cost is a poor fit for a very low-budget MVP |
| Sticker Mule Studio | https://www.stickermule.com/studio | Sticker buyers and makers | Online sticker design for printed stickers | Hosted product | Commercial | Mature product | Shows demand for simple sticker design | Print-first, not focused on reusable digital scene building |
| Canva Sticker Maker | https://www.canva.com/create/stickers/ | General creators and marketers | Templates, design editing, export and print-adjacent flows | Hosted design suite | Freemium/commercial | Very broad adoption | Strong template and export UX | Too broad; not optimized for fast personal sticker-to-scene workflow |
| Printify API | https://developers.printify.com/ | Print-on-demand sellers | Product creation, uploads, orders, webhooks | Server-side REST API | Commercial fulfillment | Production-oriented | Useful if printing is added later | Not needed for current fully digital scope |

## Existing landscape

The market has many general-purpose design tools and several print-sticker workflows. Open-source canvas libraries are mature enough to build an editor without inventing core canvas interactions. The under-served area is a lightweight digital-only sticker pack workflow that combines personal image upload, sticker styling, scene building, and dress-up.

## Opportunity and gap

The project can avoid competing head-to-head with large design suites by focusing on a narrow emotional workflow:

- Personal images become cute digital objects quickly.
- Scene and dress-up boards make the output more playful than a plain PNG export.
- Local-first, no-login usage lowers friction and cost.
- Optional AI can be added only where it creates visible value.

## Major risks

- Background removal quality: fully automatic cutouts are hard without AI and may be costly with AI.
- Browser performance: large uploads and many layered stickers can slow canvas rendering.
- Export correctness: transparent PNG and ZIP export need careful testing across browsers.
- Copyright and user uploads: the product should remind users to upload content they can use.
- Scope creep: adding marketplace, social sharing, accounts, and AI too early would undermine the low-budget constraint.

## Build difficulty

MVP difficulty: moderate.

The first version is feasible with a small client-side app because it avoids accounts, payments, backend storage, and physical fulfillment. The hardest MVP parts are canvas state management, PNG export quality, local draft persistence, and a pleasant editor UX.

AI-enhanced difficulty: higher.

AI cutout, style transfer, and background generation require hosted APIs, user keys, rate limits, or a local model strategy. These should be treated as P1/P2 capabilities after the core editor proves useful.

## Recommended MVP boundary

Build the non-AI core first:

- Upload image.
- Create sticker object.
- Add border, shadow, and simple effects.
- Place stickers into scene and dress-up templates.
- Export transparent PNG, full scene PNG, and ZIP pack.
- Save local draft.

Defer:

- AI cutout and style transfer.
- Accounts and cloud sync.
- Public gallery or marketplace.
- Printing and fulfillment.

## Differentiation strategy

Position the product as "a cute digital sticker scene desk" rather than a generic design editor. The default state should invite users to upload a personal image and immediately play with it in a scene. Templates, presets, and export formats should all serve the sticker-pack workflow.

## Signature feature comparison

The signature feature combines three steps that are usually split across tools: image upload, sticker styling, and scene/dress-up composition. This makes the experience feel like a toy-like creator workflow, not a blank professional editor.

## Risks to verify later

- Whether Fabric.js or Konva gives better export quality for transparent sticker border rendering.
- Whether a browser-only background removal package is good enough for MVP use.
- ZIP export memory limits with 20 to 50 stickers.
- User willingness to accept manual cleanup before AI is added.
