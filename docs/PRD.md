# Product Requirements Document

## Problem statement

Individual creators want to make cute digital sticker packs from their own images, but general design tools are broad and can feel slow for this specific workflow. The product should turn a personal image into a styled sticker, then let users build a scene or dress-up composition without accounts, payments, or printing.

## User segments

- Social creator: wants quick assets for posts, stories, banners, and profile decoration.
- Digital journal user: wants sticker PNGs for planners, notes, scrapbooks, and moodboards.
- Fan artist or small creator: wants to convert drawings into a reusable digital sticker pack.
- Casual maker: wants a playful browser tool, not a professional editor.

## User journeys

### Journey 1: Create a sticker pack

1. User opens the app.
2. User uploads several images.
3. App creates sticker items with a default cute white border and soft shadow.
4. User adjusts border thickness, shadow, rotation, and names.
5. User exports all stickers as a ZIP pack.

Acceptance criteria:

- At least one uploaded image can become a transparent PNG sticker.
- The app exports all current stickers into a ZIP file.
- The user does not need to sign in.

### Journey 2: Build a sticker scene

1. User selects a scene template.
2. User drags stickers from the tray onto the canvas.
3. User scales, rotates, layers, duplicates, and deletes stickers.
4. User exports the whole scene as a PNG.

Acceptance criteria:

- Canvas supports move, scale, rotate, layer order, duplicate, delete, undo-ready state updates.
- Exported scene visually matches the canvas.

### Journey 3: Dress-up composition

1. User selects a character or avatar template.
2. User drags clothing, accessories, props, or user-created stickers onto the figure.
3. User adjusts placement and layers.
4. User exports the dressed-up image.

Acceptance criteria:

- One MVP dress-up template is included.
- Template layers are locked or protected from accidental deletion.
- User stickers can be placed above or below template regions.

## Functional requirements

### Upload and asset intake

- Accept PNG, JPG, and WebP uploads.
- Reject files above the configured maximum size.
- Generate an object URL or bitmap preview.
- Preserve original file dimensions in metadata.
- Provide upload error messages for unsupported files.

### Sticker creation

- Create a sticker object from an uploaded image.
- Apply default preset: white border, subtle shadow, no background.
- Provide controls for border width, border color, shadow, rotation, scale, opacity, and corner softness.
- Allow duplicate, delete, rename, and reset style.

### Editor canvas

- Provide a central scene canvas.
- Support drag, scale, rotate, snap-to-center guides, layer order, and canvas clear.
- Provide a sticker tray for created stickers.
- Provide template picker for scene and dress-up modes.
- Maintain a serializable project state.

### Export

- Export selected sticker as transparent PNG.
- Export all stickers as ZIP.
- Export full scene as PNG.
- Use predictable file names based on sticker names or timestamps.

### Local persistence

- Save project state locally.
- Restore last project after refresh.
- Provide manual "new project" action.
- Avoid cloud storage in MVP.

### AI-ready capability

- Design the app so AI background removal and AI style conversion can be plugged in later.
- Keep AI calls behind an adapter interface.
- Allow fallback to manual controls if AI is unavailable.

## Signature feature spec: Sticker Scene Desk

### User story

As an individual creator, I want to upload an image and instantly turn it into a cute digital sticker, then place it into a scene or dress-up board, so I can create a shareable sticker pack or scene without learning a complex design tool.

### MVP behavior

- User uploads an image.
- The app creates a styled sticker with a white border and soft shadow.
- The sticker appears in the tray and on the current canvas.
- User can drag the sticker into a scene or dress-up template.
- User exports sticker or scene as PNG.

### Edge cases

- Very large image: downscale for editing, keep metadata, warn user.
- Image with solid background: MVP may not remove it automatically; user can crop or accept the result.
- Transparent PNG upload: preserve transparency.
- Browser memory pressure: limit max canvas size and number of active stickers.

### Acceptance criteria

- One-click upload-to-sticker flow takes no more than two visible actions after file selection.
- Default sticker preset is visually recognizable as a digital sticker.
- Exported sticker PNG keeps transparency outside the sticker boundary.
- The same sticker can be used in both scene mode and dress-up mode.

### Future version

- AI background removal.
- AI cute toy style preset.
- AI scene background generation.
- Auto sticker pack cover and social preview.

## Non-functional requirements

- Desktop-first responsive web app.
- No account required.
- Works in current Chromium, Firefox, Safari, and Edge where feasible.
- Avoid heavy backend requirements.
- Keep initial load lightweight; lazy-load editor-only dependencies if needed.
- Do not upload user images unless the user explicitly invokes an AI or cloud feature.

## UX and style requirements

- Cute toy-inspired visual direction.
- First screen is the actual editor, not a marketing landing page.
- Three-zone editor layout: asset/template panel, central canvas, style/export panel.
- Use icon buttons for common editor actions with tooltips.
- Avoid nested cards and overly decorative layouts.
- Keep controls compact and understandable.
- Use playful template thumbnails and sticker presets.

## Analytics or success signals

For MVP without accounts, use local-only counters during development or privacy-friendly analytics later:

- Upload started.
- Sticker created.
- Scene template selected.
- Sticker exported.
- ZIP exported.
- Draft restored.
- Export failed.
