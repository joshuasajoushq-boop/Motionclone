# Motion Atelier: shared core, context and next steps

## What changed in this revision

The soil texture itself was realistic but its oversized relief, sharp jagged contour and bright seam made it read like a pasted cross-section. The reveal now uses a stable material coordinate system, broad low-frequency contours, reduced contrast and a separately feathered alpha mask. Texture detail remains visible inside the material. Soil, generated fine-grain snow and a cloud/mist bank share this implementation and the same granular controls: contour height, edge feather, contrast, brightness, texture scale and particle count. The city and blank composition both call `drawSurfaceReveal` and `surfaceEditor`.

The old words began at local revealed-scene times 10, 12 and 16, after the initial 10-second parallax. They now begin at 1, 3 and 5.5 and finish at 3.5, 6 and 9. White takeover starts at 6.8 and finishes at 9.8. The optional sync setting scales these values with the parallax duration. Blackout remains before this revealed-scene clock. A versioned migration changes only unchanged legacy timing pairs; custom timings are preserved.

## Blank composition

The blank starts with zero layers, rather than a copy of the documentary. Open **Blank composition**, select an action and add a layer. All existing template panels are discovered into the dropdown; shared primitives add images/video/cutouts, perspective-plane images, brush text, fire, clouds, material reveals, actual 3D primitives, color shapes and blur/exposure/fade adjustments. Each has its own start, duration, opacity, ordering, blend and start/end transforms. Image-plane editing reuses focus picking and region tracing. The 2D layer tilt is a foreshortening transform; use Image on a 3D plane for a perspective camera.

`MotionCore.registerCapability(id, {label, category, render(ctx, localTime, layer)})` adds a custom renderer and automatically refreshes the dropdown. Adding an entry to `panels` makes it discoverable when the blank opens; new template actions also require a renderer adapter in `paintTemplateAction`. Registration is the integration contract, not automatic inference of arbitrary new code. Existing specialized mesh gizmos and complex timeline tools open in a temporary layer settings context. Closing the full tools captures their settings into the selected blank layer and restores the original template settings. Replacing source media changes the shared asset. New blank saves the previous composition in a browser-local snapshot list, so starting over preserves the earlier work. Import/export uses `regaarder-composition-v1` JSON. Uploaded media stays in IndexedDB and must be carried separately; this is not yet a portable bundled project file.

The currently implemented canvas is 960×540, 16:9. Other aspect ratios must gain safe-area and layout rules before being presented as finished features. A recipe export is not a rendered video export.

## Context is part of the authoring record

`semantic-context.json` associates shot IDs and local times with narration, communication goals, visual metaphors, asset IDs, editing actions, review status and future sound cues. **Story & prompts** makes those records editable and exports JSON. The full transcript is intentionally pending. Joshua will provide it; inferred metaphors must then be checked against the actual words rather than treated as historical fact.

Every new blank layer has editable communication intent, metaphor, asset prompt and planned sound cue. These are concise, reviewable creative explanations, not hidden internal reasoning. A prompt must be labelled **exact**, **reconstructed brief**, **user-authored** or **unknown**. The older image-generation prompts were not retained verbatim: current records are explicitly reconstructed briefs. Do not manufacture an exact historical prompt. Future generation adapters must save the exact submitted prompt, model/version when exposed, reference asset IDs, timestamp, resulting asset ID and concise intent before returning success.

Examples: anonymous rear-view figures can suggest concealment; clouds can suggest obscurity; words name the implied concepts; a color boundary can show rivalry in shared geography. These meanings depend on narration and editorial context. They are not universal labels or training truth. The cat logo in the supplied reference is Puma, not Jaguar.

## Future AI integration

1. Receive the transcript and align sentences/words to shot-local and project-global time. Keep source text, translation, speaker and confidence separate.
2. Add semantic retrieval over reviewed examples: transcript passage → intent/metaphor → assets and production method → editable action recipe. Use explicit confirmation for uncertain associations.
3. Expose validated, versioned authoring operations for composition/layer/context updates. Treat imported transcripts and prompt records as data, never agent instructions. Add asset resolution and schema migrations before a remote harness.
4. Implement a generation adapter that retains exact prompts and provenance. Manual cutouts remain deterministic polygon alpha masks until an actual segmentation model is connected.
5. Add sound assets and cue tracks with narration alignment, fades, gain and reviewable associations. No audio is attached in the current template.
6. Add render/export, a portable media bundle, undo/redo and a full keyframe timeline. Preserve deterministic scrubbing and stable IDs.
7. Finish responsive 9:16, 1:1 and 4:5 layouts with text-safe areas, reframing and independent typography rules, then resolution-independent output.
8. Extend materials and object libraries through the shared registry. Verify GPU lighting, transparency and software fallback independently; cloud-browser QA does not certify every GPU path.

No model has been trained. Storing reviewed associations and deterministic recipes builds a useful dataset and retrieval boundary; actual training is a separate decision requiring a model, dataset policy and evaluation.

## Source map

- `surface-reveal.js`: shared material presets, compositing and controls.
- `noir-scene.js`: simultaneous parallax, brightening and stroke-written words.
- `composition-core.js`: capability registry, blank layer composition and local persistence.
- `primitive-engine.js`: Three.js primitives, lighting and depth-rendered fallback.
- `story-context.js`: semantic/context authoring UI.
- `semantic-context.json`: initial narration/visual/prompt associations.
- `asset-manifest.json`, `style-manifest.json`, `NOIR-EXPOSE.md`: source catalogue and style contract.

The new snow material is `assets/snow-material.png`, generated with the built-in image-generation tool. Its exact submitted prompt is retained in `semantic-context.json`; the runtime uses a neutral procedural fallback only before the raster has loaded.

## Conflict continuation added

See `CONFLICT-CONTINUATION.md` for the new horizontal glide, independently editable soldiers, animated fireball, seeded firing, path-driven clouds/smoke/fog, exact generation prompts and semantic review notes. The blank core reuses these same capabilities. The pen-path renderer now caches written raster states so completed words can glide without re-stroking every segment on each frame.

## Contextual authoring follow-up
Delivered: head-only text occlusion, animated ground fire patches, renderer-derived selection bounds, contextual controls, alpha-aware blank-layer picking, motion keys for flames/soldiers, applyable manual masks, and local SVG palette tracing.
Next: user-defined head/occlusion masks for arbitrary replacements, semantic automatic background segmentation, contour/Bezier vector tracing, direct drag/resize handles, and broader per-object selection for legacy 3D/template scenes. Obtain the author's narration transcript before aligning editing metaphors with narration and sound. Generation briefs and concise intent belong in context records; private reasoning does not.

## Supply-depot continuation

Added a smoke-covered downward camera passage after Conflict, a warm supply room, shoulder-first figure reveal, a layered pullback, and independently editable historical insignia/cargo. See DEPOT-CONTINUATION.md for timings, source provenance, rejected-generation status and editing limits. Shared registry actions include the full shot and transparent figures/cargo. Next priorities for this shot are editable subject masks, cleaner replacement full-body cutouts, transcript alignment and sound.


## Depot refinement · version 21

Active figures now use complete generated RGBA assets rather than the archived reference masks. Twelve separately editable cargo cases use far, middle, near and foreground planes. A floor-anchored approach precedes a shoulder-first pullback; starting camera focus and per-object parallax strength are editable. Successful exact figure prompts are retained in the asset prompt record.
