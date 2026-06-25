# Project Brief

## Project name

Sticker Scene Studio

## One-sentence goal

A browser-based digital sticker pack maker for individual creators that turns uploaded images into cute transparent PNG stickers and lets users arrange them into scenes or dress-up templates.

## Target users

- Individual creators who make social posts, fan art, journaling assets, profile decorations, or small digital goods.
- Users with little design-tool experience who want a playful, low-friction sticker workflow.
- Creators with a very small budget who prefer a free or cheap local-first web tool.

## Primary use cases

- Upload one or more images and quickly turn them into digital stickers.
- Add sticker-like styling: white border, soft shadow, rounded cutout feel, and cute color treatment.
- Arrange stickers on a scene canvas such as a desk, room, scrapbook page, photo frame, or toy display.
- Place clothing, accessories, props, and decorations on a character or avatar template.
- Export individual transparent PNG stickers, a ZIP sticker pack, or one finished scene image.

## MVP scope

- Web app only.
- No accounts, no payments, no printing, no cloud storage.
- Client-side image editing with local draft persistence.
- Upload image files from the browser.
- Create a sticker object with move, scale, rotate, layer order, duplicate, delete, and reset controls.
- Apply white border, color border, shadow, corner softness, and simple filters.
- Provide a small scene template set and one dress-up template.
- Export selected sticker as transparent PNG.
- Export all stickers as a ZIP pack.
- Export full canvas as PNG scene image.
- Save the current project locally with IndexedDB or localStorage.

## Signature feature

User idea: upload an image and turn it into a digital sticker in one click, then use the sticker for scene building or dress-up.

MVP version: "Sticker Scene Desk" gives users one flow: upload image, apply sticker preset, drag it onto a cute scene or dress-up board, then export a sticker pack or scene image.

Why it differentiates: generic design tools can make stickers, but they often start from a blank editor. This product starts from the creator's personal image and moves directly into a playful sticker-world workflow.

Future version:

- AI background removal.
- AI cute-toy style conversion.
- AI-generated scene backgrounds that match the sticker set.
- Auto sticker pack naming, cover generation, and social preview layouts.

## Non-goals

- Physical sticker printing or fulfillment.
- Multi-user collaboration.
- Marketplace, community feed, creator stores, or payment features.
- Advanced vector drawing or Canva-level general design tooling.
- Mandatory login.

## Success metrics

- A first-time user can upload an image, create a sticker, place it in a scene, and export within 3 minutes.
- Exported sticker PNG has transparent background and visually clear border.
- A user can create at least 6 stickers in a single pack without account setup.
- Browser performance remains smooth with 20 sticker objects on a typical laptop.
- Local draft reload works after browser refresh.

## Assumptions

- Initial users are desktop-first, with mobile support as a responsive polish item.
- Users own or have rights to the images they upload.
- Low budget means AI should be optional and rate-limited, or implemented later with user-provided API keys.
- The first version prioritizes delightful workflow over perfect automated background removal.

## Open questions

- Should the MVP include a manual background eraser, or only border and crop controls?
- Should exported ZIP files include metadata such as sticker names and pack cover?
- Which file size limits should be enforced for uploads?
- Which scene and dress-up templates best match the first creator niche?
