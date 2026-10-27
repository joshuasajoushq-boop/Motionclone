# Noir Exposé — editable investigative collage foundation

Style ID: `noir-expose` · Schema version: 1

This is an original reusable documentary motion recipe. It combines photographic cutouts, layered camera moves, earth reveals, restrained color territories, dark-to-light atmosphere and stroke-written titles. The name identifies this implementation; it is not a claim to reproduce or own another publisher's style.

## What is actually 3D?

- **Chess:** Three.js scene with lathed solids, extruded knight/mark geometry, perspective camera, lighting and a floor-anchored rear wall. WebGL uses depth testing, materials, shadows and reflection. Browsers without GPU acceleration use a per-pixel depth-buffer software renderer, with simpler lighting.
- **City and reusable image scenes:** one image/video texture on a perspective plane. The camera can change focus, elevation, heading, roll, distance and orbit. This is 2.5D image animation, **not reconstructed buildings, volumetric people or a Google Earth dataset**.
- **People/cloud collage:** independently transformed raster layers. Foreground, background, clouds and text have separate scale, drift and lateral offsets.
- **Cutouts:** PNG alpha or a manually outlined polygon mask. Generated alpha images and manually traced masks are labelled differently. There is no automatic AI segmentation model in this build.

## Included sequence

1. Map, portrait, eye strip and growing paper tears.
2. Shoulder, desk and practical lamp; real filmed fire plus independent sparks and movable layers.
3. Fire portraits, standing pair, roofs that occlude background portraits, clouds, second parallax move, logos and color split.
4. Chess camera and independently keyed piece motion, visible light wall and logos.
5. A soil cross-section curtain reveals the aerial plane. Drifted particles, soft edge blur, camera focus/roll, color territories and logos remain separate controls.
6. The partial cat completes its entrance while the image rotates, then dims to complete black.
7. Rear-view men and clouds brighten at different depths. Lies, Secrets and Corruption follow editable pen paths during the initial parallax. The Corruption layer can turn white where it intersects the people, through a wipe, or across the whole word. A lateral move continues the collage.
8. User-authored image scenes append after the noir scene.

## Asset registry and provenance

`asset-manifest.json` lists every bundled image, video, alternate, provenance file and procedural source. Each has a stable ID, source path, kind, role/slots and authoring method. `Assets & tools` exposes Source, Replace, Animate in 3D, and Edit/cutout actions as appropriate. Archived alternates remain available. Uploaded and derived assets extend `parameters.userAssets` in a browser recipe.

The current recipe export contains parameters, asset metadata, cutout masks, semantic context and the blank composition. It **does not package uploaded binaries**: download those source files separately. New alpha cutouts preserve their parent source, normalized outline points and feather radius. Replacements keep the source asset ID so its scene role remains stable.

Bundled aerial, soil, mountains and people are generated illustrations/photographic-style assets. Portrait likenesses and geography are not independently verified. The city carries an illustrative-source label. The included fire is photographed footage; consult `assets/real-fire-credit.txt` for its provenance. No Google Earth branding is added to generated imagery.

## Image-on-plane authoring

1. Open **Assets & tools**, choose an image, then **Animate in 3D**.
2. Set start/end camera distance, tilt and roll. Pick start/end focus points in the preview.
3. Adjust duration, orbit turns and feathered edge blur. The original image aspect ratio is preserved.
4. Add a paired split or trace a local spot. Each region has independent color, opacity, movement, rotation and scale. Splits also expose position, angle and curvature.
5. Save the image scene to append it to the sequence. **Images** lists saved clips and their Edit motion/Remove actions.

Every clip stores its asset ID and motion parameters. Editing that clip does not overwrite the source picture. A flat card remains flat when viewed from the side; use a true mesh or separate alpha layers if actual volume or depth separation is required.

## Manual cutout workflow

Open **Edit / cutout**, tap around the subject, drag points to refine, use Undo or Clear, and preview the mask. Feather is measured in source-image pixels. Save creates a new transparent PNG asset. The source is preserved; the new asset can be animated, downloaded, or used to replace an existing slot. This manual polygon tool supports one outer contour; it does not yet provide automatic subject detection, interior holes, hair matting or a brush-based segmentation model.

## Color territories

Region coordinates are normalized `[u,v]` in source-image space. They remain attached as the image rotates.

- `points`: traced polygon for a spot or arbitrary territory.
- `type: "split"`: sampled boundary with `position`, `angle`, `curve`, and left/right `side`.
- `offsetX`, `offsetY`, `rotation`, `scale`: transform a region independently.
- `color`, `opacity`, `blend`, `start`, `fade`: visual and timing controls.

The City boundary tool can create a paired division, shift it left/right by picking in the preview, rotate it, or curve it. Traced regions remain independent and can isolate a small spot.

## Lettering styles

`brush-writing.js` contains an original editable single-stroke alphabet. Letters are sampled as smooth pen trajectories, and progress follows cumulative path length. This is not a computer typewriter reveal.

- **Noir Brush:** thicker, variable-pressure rounded strokes.
- **Noir Ink:** fine strokes.
- **Noir Chalk:** drier, varying-opacity strokes.

Text layers expose words, pen style, color, position, size, start, duration, rotation, depth, softness, and optional white takeover. The alphabet currently covers Latin letters, spaces and simple punctuation. It is not a complete multilingual font or a natural handwriting synthesis model.

## Timing conventions

Chess, City and Noir panel times are seconds **within that scene**. Noir writing starts are seconds after the black hold, within its revealed collage portion. Chess piece rotations use degrees in keyframes; stored base-object Euler rotations use radians to match Three.js. Image region coordinates are normalized, while collage positions are 960×540 design pixels. Output canvases scale to the player.

## Future AI harness interface

`window.NoirExpose` is a small deterministic browser-side authoring API:

```js
NoirExpose.getRecipe();
NoirExpose.listAssets();
NoirExpose.setParameter("noirReveal", 12);
NoirExpose.addImageClip("city-aerial-v1", { cityDuration: 12, cityEndDistance: 9 });
NoirExpose.addTextLayer({ text: "Evidence", color: "#857084", style: "brush", start: 11, duration: 4 });
NoirExpose.updateRegion(0, { color: "#336caa", offsetX: 0.05, rotation: 8 });
NoirExpose.exportJSON();
```

Numeric ranges and enum/color fields are validated for exposed operations. Structured text/region/image updates use `authoring-schema.js`. The browser API is not a remote MCP service, does not authenticate an external agent, does not run arbitrary generated code, and does not train model weights.

A future agent should: inspect the manifest and recipe; select a known asset ID; declare whether the source is a plate, alpha cutout, footage or mesh; choose a motion method; mutate validated data; preview beginning/middle/end frames; inspect source and alpha; and retain provenance. Add automatic segmentation, external-agent authentication, shared project storage, import validation and export/render services as separate integrations.

## Source map

- `continuation.js`, `epilogue.js`: original story and people parallax.
- `chess-engine.js`, `chess-motion.js`, `chess-director.js`: geometry, deterministic choreography, camera and piece editor.
- `city-engine.js`, `city-motion.js`, `city.js`: reusable perspective plane and city sequence.
- `region-tools.js`: normalized split/polygon transforms.
- `noir-scene.js`, `noir.js`, `brush-writing.js`: noir layers and editable pen-path lettering.
- `asset-workbench.js`: registry, replacement, reusable image scenes, manual masks and authoring boundary.
- `soft-media-blur.js`: feathered edge softness without a hard focus circle.
- `authoring-schema.js`: structured-operation validation.

## Verification and limits

Node checks exercise camera paths, choreography, region transforms, pen paths and data validation. Browser QA uses the available renderer; GPU lighting cannot be fully visually verified when the preview browser lacks acceleration. Browser uploads persist in local IndexedDB, not a collaborative server. Keep the exported JSON and source assets together for reproducibility.

See `AUTHORING-ROADMAP.md` for the shared blank core, surface presets, timing migration, transcript context and future format/audio plans.
