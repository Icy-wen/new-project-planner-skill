# Technical Design

## Stack decision and rationale

Recommended MVP stack:

- Next.js with App Router: durable React foundation and easy future deployment.
- TypeScript: improves maintainability for editor state and export logic.
- Tailwind CSS: fast styling without a large design system.
- Fabric.js: mature canvas object model, image filters, interactions, JSON state, and PNG/SVG export support.
- Zustand or React state plus reducer: small client-side editor state layer.
- IndexedDB via Dexie or localForage: local draft and image metadata persistence.
- JSZip: export sticker packs.
- Vitest and Playwright: unit tests plus browser export/editor smoke tests.
- Vercel or static hosting: simple deployment for a low-budget web app.

Deferred:

- Database.
- Auth.
- Payments.
- Print fulfillment.
- Cloud storage.

## Architecture overview

The app is a client-heavy editor. The server side is only needed for static rendering and future AI endpoints. In the MVP, user images remain in the browser.

Main runtime flow:

1. User uploads image.
2. Asset service validates file and creates image asset metadata.
3. Sticker service creates a sticker preset object.
4. Canvas adapter renders and edits objects.
5. Project store serializes canvas JSON and asset metadata.
6. Export service renders selected sticker, all stickers, or full scene.
7. Persistence service saves and restores local draft.

## Folder/module structure

```text
src/
  app/
    page.tsx
    layout.tsx
  components/
    editor/
      EditorShell.tsx
      CanvasStage.tsx
      AssetPanel.tsx
      StylePanel.tsx
      TemplatePanel.tsx
      ExportPanel.tsx
      Toolbar.tsx
    ui/
      Button.tsx
      IconButton.tsx
      Slider.tsx
      Tooltip.tsx
  lib/
    canvas/
      fabricAdapter.ts
      stickerEffects.ts
      templates.ts
    export/
      exportSticker.ts
      exportScene.ts
      exportZip.ts
    persistence/
      projectStorage.ts
    ai/
      aiAdapter.ts
      noOpAiAdapter.ts
    validation/
      files.ts
  state/
    editorStore.ts
  types/
    project.ts
    sticker.ts
```

## Data model

```ts
type Project = {
  id: string;
  name: string;
  version: number;
  createdAt: string;
  updatedAt: string;
  mode: "scene" | "dress-up";
  canvas: SerializedCanvas;
  assets: ImageAsset[];
  stickers: Sticker[];
  selectedTemplateId: string | null;
};

type ImageAsset = {
  id: string;
  name: string;
  mimeType: "image/png" | "image/jpeg" | "image/webp";
  width: number;
  height: number;
  objectUrl?: string;
  storageKey?: string;
};

type Sticker = {
  id: string;
  assetId: string;
  name: string;
  style: StickerStyle;
  canvasObjectId: string;
};

type StickerStyle = {
  borderWidth: number;
  borderColor: string;
  shadowBlur: number;
  shadowColor: string;
  opacity: number;
  cornerSoftness: number;
  filterPreset: "none" | "soft" | "pop" | "pastel";
};
```

## Integration contracts

MVP has no required external API.

Future AI adapter:

```ts
type AiAdapter = {
  removeBackground(input: Blob): Promise<Blob>;
  stylizeSticker(input: Blob, preset: string): Promise<Blob>;
  generateScene(prompt: string): Promise<Blob>;
};
```

The default MVP implementation is `noOpAiAdapter`, which returns an explicit unsupported result and lets the UI show manual controls.

## State management

Use a small editor store to separate UI state from Fabric.js runtime state.

State categories:

- Project metadata.
- Asset list.
- Sticker list.
- Selected object id.
- Selected template id.
- Current editor mode.
- Export status.
- Error messages.

Fabric.js should be wrapped in an adapter so React components do not directly depend on low-level canvas calls everywhere.

## Signature feature implementation

### MVP approach

The "Sticker Scene Desk" feature is implemented as a thin vertical slice:

1. `AssetPanel` accepts an uploaded file.
2. `files.ts` validates type and size.
3. `fabricAdapter.ts` creates a Fabric image object.
4. `stickerEffects.ts` applies a default sticker preset.
5. The sticker is added to tray and canvas.
6. User moves the sticker in scene or dress-up mode.
7. Export service outputs PNG or ZIP.

### Border rendering strategy

Start with a pragmatic MVP:

- Render a duplicate image or silhouette-like outline behind the image when transparency exists.
- For non-transparent images, apply border around the image bounding box as a fallback.
- Add a future task to improve pixel-accurate alpha outline.

### Complexity

- Basic upload-to-sticker: low to medium.
- Pleasant canvas editing: medium.
- Pixel-perfect cutout border: medium to high.
- AI background removal: high if self-hosted, medium if API-based.

### Risks

- Transparent outline quality may vary by input image.
- Fabric.js object lifecycle can leak memory if not disposed carefully.
- Exporting very large canvases may fail on mobile browsers.

### Fallback behavior

- If AI is unavailable, keep manual crop and style controls.
- If ZIP export fails, allow per-sticker PNG export.
- If local draft save fails, allow immediate PNG export and show a warning.

## Authentication and authorization

None for MVP.

Future accounts can be added only if cloud projects, sharing, or marketplace features become necessary.

## Error handling

- Validate file type and size before loading.
- Show recoverable editor errors in a compact toast area.
- Keep failed exports from clearing project state.
- Log development errors to console in local builds.

## Security and privacy considerations

- MVP keeps uploads local to the browser.
- Do not send images to remote services unless a future AI feature is explicitly triggered.
- Add user-facing copy reminding users to upload images they own or have rights to use.
- Avoid storing raw images in URLs or remote logs.
- Sanitize file names before export.

## Testing strategy

Unit tests:

- File validation.
- Project serialization/deserialization.
- Sticker style reducer.
- Export filename generation.

Browser tests:

- Upload fixture image.
- Create sticker.
- Move and resize object.
- Export selected sticker.
- Restore local draft.

Manual visual checks:

- Transparent PNG upload.
- JPG upload with rectangular border fallback.
- Scene export at common sizes.
- ZIP export with 10 and 25 stickers.

## Deployment and environment variables

MVP can deploy with no required secrets.

Future optional environment variables:

```text
AI_PROVIDER=
AI_API_KEY=
NEXT_PUBLIC_MAX_UPLOAD_MB=10
```

## Observability and operations

MVP:

- Basic client-side error boundary.
- Manual QA checklist.

Future:

- Privacy-friendly analytics.
- Export failure tracking.
- AI cost and rate-limit dashboard.

## Known tradeoffs

- Local-first reduces cost and privacy risk but limits cross-device continuity.
- Avoiding AI in MVP keeps cost low but makes background removal less magical.
- Fabric.js accelerates editor development but still requires custom sticker-specific effects.
- No account flow makes onboarding simpler but prevents cloud sharing at launch.
