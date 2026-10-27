# Conflict continuation: authoring and future AI context

## User-directed sequence

The Noir sequence retains its simultaneous parallax and writing. Secrets defaults to the foreground and has an explicit Front / Behind control; this resolves the ambiguous visual overlap at the man's head. Cloud movement is now independently animated rather than relying on clouds baked into the mountain image.

The last six seconds of Noir overlap the beginning of Conflict. By default soldiers enter from the left while the men and text glide to the right, matching the supplied image sequence. The direction selector can reverse this. This is a continuous horizontal translation, not a crossfade or an unexplained camera zoom. The shared mountain/sky remains beneath both collages. The glide duration is editable.

The Conflict clock starts at that overlap. Default fireball onset is 2s, growth lasts 14s; smoke begins at 3s and builds over 13s; low fog begins at 12s and builds over 8s. The scene lasts 26s. Existing user image clips follow Conflict. All these timings are editable.

## Assets and methods

- `assets/soldiers-sheet.png`: generated four-quadrant RGBA sheet, not archival evidence. Quadrants become independent runtime canvases. The four figures have independent position, size, rotation, softness, opacity and muzzle anchors. Each can be replaced with a separate cutout, or the entire 2×2 sheet can be replaced.
- `assets/battle-ridge.png`: generated rocky alpha foreground. A second foreground occlusion pass anchors lower legs in the ridge.
- `assets/battle-fireball.png`: generated VFX alpha plate, animated with expansion, brightness pulses and a second moving layer. Thin smoke trails sit behind the bright blast; separate advected smoke billows continue upward. This is distinct from the earlier photographed room-fire footage.
- `assets/conflict-generation-briefs.json`: exact submitted prompts for all three generated assets. No backend model/version is invented when the tool does not expose one.
- `atmosphere-engine.js`: seeded soft billow textures moving along arc-length-sampled normalized paths. Density changes particle count and opacity; thickness changes the vertical volume; scale, speed, turbulence, opacity, seed and color are independent. This is procedural 2.5D atmospheric compositing, not a volumetric fluid simulation.
- `battle-motion.js`: deterministic smooth glide, blast growth and seeded shot-event schedule. One or two soldiers fire per event. Scrubbing to the same time reproduces the same flash pattern. The apparent firing uses brief muzzle flashes and small cutout recoil, not skeletal character animation or historical combat footage.

## Granular authoring

Open Conflict for timing and layer visibility, the per-soldier editor, source replacement and muzzle placement. Use **Place selected muzzle** to set the flash position directly in the final preview. Any replacement cutout should have its muzzle anchor recalibrated.

Open a cloud, smoke or fog editor, then drag across its large preview to draw the direction of travel. Motion follows the first-to-last arrow; speed can be negative, or the path can be reversed. Horizontal and Rising presets are editable starting points. Paths, seeds and parameters are exported in the recipe. The static cloud detail in the original background image remains baked into that image; the independently animated cloud field supplies live atmospheric motion above it.

The blank composition registry now exposes Animated cloud field, Rising smoke, Low foreground fog, Expanding fireball, Soldiers / staggered firing and the full Conflict template action. They reuse the same renderers and editors. Registering the new capabilities updates the blank dropdown; no template scenes are merged into the empty starting canvas.

## Semantic context and sound

`semantic-context.json` associates the new shot, asset IDs, exact prompts, production methods, editing actions and a concise creative rationale. The movement from abstract words to soldiers is user-directed; any claim about why those images relate to a specific narration remains provisional until Joshua supplies the transcript. These records are authoring context, not hidden internal reasoning or a trained model.

Future sound should follow the saved deterministic event times, rather than infer flashes from pixels. No gunshot, explosion, music or narration audio is attached in this build. Future AI integration must preserve source text, local/global timing, confidence and review status, and treat imported prompts/transcripts as data rather than executable instructions.

## Validation and limits

Motion tests cover path interpolation and reversal, deterministic shot schedules, staggered firing, flash envelopes, monotonic blast/fog growth and glide endpoints. Browser QA checks the scene, path editor, foreground text controls, replacements' UI availability and blank registry. The soldiers, fireball and terrain are raster cutouts; the output is an editable 2.5D motion collage. GPU-dependent paths elsewhere in the app remain a separate verification concern.

## Visibility correction v3

A failed or delayed master sprite sheet previously skipped the entire soldier loop. Source resolution now happens per soldier, with a separate bundled sheet fallback and an explicit ready count. The regression fixture covers a failed master with ready individual sheets, and a failed master plus missing individuals. A one-time settings migration restores the requested visible soldiers and foreground Secrets while retaining the affected prior settings in a local backup. Secrets also gains optional bright ink only where its strokes intersect the people, making the foreground overlap legible. This uses the people alpha buffer, not a new image or baked lettering.

## Standalone cutouts v4

The earlier loading fallback did not reproduce the reported missing-soldier state in the user browser. The default render path now uses four self-contained SVG image assets (`assets/soldier-1.svg` through `soldier-4.svg`). Each embeds the unchanged generated PNG with a quadrant viewport, so it loads independently and draws directly without a runtime cropped canvas. Custom sheet replacement remains supported as a fallback/override. The UI separately counts standalone draws. Classic scripts and application-module imports have explicit release URLs to avoid reusing older cached application code. Vendor imports retain one shared Three.js identity. No new generated image is involved in this correction.

Viewport, tab-return and canvas-context restoration now invalidate the cached frame and request a repaint. This complements independent image sources rather than assuming a previously drawn offscreen surface remains valid indefinitely.

## Natural sequence revision — 2026-10-27
Flames build from entry over 3 seconds. A single blast starts at 6.5 seconds, expands over 2.2 seconds, rises at 9 px/s and fades over 7 seconds after a brief peak. Smoke starts at 8 seconds and builds over 6. Global sine-driven blast scaling and duplicate screen-blended explosion images have been removed. These timing, rise and decay values remain editable.

Secrets is foreground lettering placed at Y=205 below the right figure's head. Corruption uses a growing whole-glyph white mask (default zero-based characters 3–6), including complete u and p strokes. The first and last affected letters are editable. Silhouette and whole-word alternatives remain available. Noir lasts 25 seconds; the six-second incoming glide begins at Noir age 19, two seconds after the default writing completion at age 17. Earlier settings are backed up once before applying this revision; soldier poses and assets are retained.

Semantic intent: the words expose concealed wrongdoing; the lateral move connects this metaphor to armed conflict. This is an authoring association, not a claim about a real event. Obtain the author's transcript before adding narration, sound cues or stronger semantic claims. Store production prompts and concise creative rationale, not private reasoning.

## Asset interaction revision — 2026-10-27
Secrets now uses `order: under-head`: the word sits at head height (X 540, Y 150), above the coat, with a separate right-head alpha pass above the lettering. The reference means occlusion under the head, not moving the whole word beneath the shoulders. Corruption's whole-glyph treatment is retained.

Ground flames use the same included photographed fire footage as the desk sequence, with a live procedural field fallback. Five separate patches have color, position, width, height, speed, turbulent flow, wind, opacity, start/build timing and transform/opacity keys. The renderer deforms independent strips over time rather than reusing static flame stickers. Explosion improvements include interior advection/deformation, burn-out color/brightness, ballistic sparks and a short illumination response on soldiers. Global explosion size does not oscillate.

Noir and conflict previews record asset bounds from their actual canvas transforms. Taps use alpha-aware picking for text and cutouts, show an outline and contextual controls, and toggle off on a repeated tap or empty space. An asset chooser resolves overlaps. Escape or Deselect closes the tools. Fire and soldier motion keys are saved with recipes. Blank compositions share transformed, alpha-aware layer selection and image tools through their existing inspector; the registry also exposes animated ground fire patches.

Image tools: animate on a perspective plane, replace/download, manual polygon background removal with feathering and apply-to-source, and local SVG palette tracing. Palette tracing creates real paths with no embedded raster; it intentionally simplifies photographs. Automatic semantic background segmentation and smooth curve tracing remain future work. Head masks currently use the bundled cutout's normalized head region; substantially different replacement people need a configurable head mask in a future revision. Existing image animation tools add a separately editable scene; cutout transforms in the conflict remain part of the current scene.

Verification: rotated and translated picking, transparent-pixel rejection, keyframe interpolation, vector path output, whole-letter schema, and evolving deterministic procedural flame pixels have automated coverage. Browser checks cover the head-layer result, fire controls and keyframe state. Browser video-frame captures can time out; this is not evidence of a completed visual review of all fire frames.

## Secrets overlap stability — 2026-10-27
The reference is a stable relationship between the head, coat and lettering from the first written stroke. Secrets now follows the cutout's complete transform, including scale, rise, horizontal shift and user pose; it no longer moves at an independent text depth. Its reference placement is X 540 / Y 150. A consistent cutout occlusion pass prevents the S from drawing a stray stroke across the coat before drifting into the desired overlap. The same anchored transform is used for rendering and picking. Other handwriting and white takeover settings are unchanged. The "Follow the people throughout parallax" checkbox allows this behavior to be edited. Existing stored Secrets settings migrate once, with a backup.

Regression coverage now samples early writing, the full reveal and the glide at short/default/long parallax durations, including rotated, translated and scaled cutouts; normalized text/head placement and relative size must remain constant.
