# Battlefield to supply depot

The green foreground objects are interpreted as olive canvas-covered wooden military equipment cases or supply crates. The interior is a warm industrial supply depot / warehouse. These are visual interpretations of the reference, not identification of a documented historical location or specific people.

## Sequence and clocks

The final four seconds before the new shot build a dark smoke veil. The Depot clock overlaps the final five seconds of Conflict. The outgoing battlefield moves upward while the room enters from below, giving a continuous downward camera passage. Initial defocus settles into warm warehouse lights. Twelve independent cargo cases occupy far, middle, near and foreground planes. Cargo approaches from 5.3–9.3 seconds, growing at 1.4×, 1.85× and 2.6× across the first three planes, anchored to the floor. The right shoulder enters at 11 seconds and the left figure at 13 seconds. A pullback starts at 12 seconds and lasts 18 seconds, taking people from 3.2× to 1× and revealing heads gradually. Foreground covers enter at 28 seconds. The shot lasts 34 seconds. Imported image scenes follow it; earlier scene start times are preserved.

## Assets and insignia

The room and case are generated with prompts in `assets/depot-generation-briefs.json`. Version 21 replaces the rough version-20 reference masks with two newly generated complete transparent figures: intact hair, neck, shoulders, arms, hands and legs. Exact successful prompts are retained in `assets/depot-complete-figure-prompts-v9.json`. These are fictional figures based on the reference styling, not exact reproductions of the supplied identities. Old reference masks are archived and inactive.

Armband and cargo symbols are separate vector overlays. They identify the user-requested historical Nazi setting, without narration, endorsement or invented historical identification. Each marking has independently editable position, size, rotation, color, opacity and visibility. The new figures have plain sleeves; markings remain separate overlays. This is a 2.5D collage, not skeletal character animation or a reconstructed 3D room.

## Editing

Open **Depot** and use Descent, Cargo, Shoulder, Two figures and Full reveal to inspect the beats. Scene duration, descent, smoke, focus, camera focal point, starting/final scale, background depth and foreground depth stay editable. Every cargo case and figure has its own position, size, reveal timing, opacity, rotation, softness, brightness, depth plane and saved motion keys. The armband / cargo-insignia section edits its local symbol. Tap a rendered object or marking to get the same contextual tools. Asset replacement, image animation, manual background masking and vector tracing are available through the shared tools.

The blank core exposes the whole Depot action plus isolated figures and cargo. They use the same renderer and save into the selected layer. Insignia and object controls remain available through the full Depot tools. The full shot has a room background; isolated figure/cargo actions render transparently.

## Validation and next work

`check-depot-motion.mjs` checks descent endpoints and continuity, monotonic pullback, independent foreground timing, two marked figures, unchanged earlier phase starts differential cargo approach, floor anchoring and active RGBA figure sources. Existing Noir, battle, authoring and composition checks remain required. Browser QA must inspect the descent, shoulder view and final frame as well as selection.

Narration and sound remain pending. Obtain Joshua's transcript before asserting what this scene communicates or adding sound cues. Prompt records and concise creative intent are authoring data, not private reasoning or model training. Future work includes narration-aligned audio and video export.


## Version 22 · descent and framed storm

The 58-second shot descends along an extended rock face for 8 seconds before the depot emerges. Cargo contact positions are fixed independently of scale, with contact shadows. Cargo approach no longer reverses when the figure camera pulls back. Twelve cases, a corner flag and larger foreground covers form the depth layers. Newly generated plain field-gray military uniforms replace civilian jackets. The image service rejected generation of integrated Nazi armbands; floating overlays are removed and this requested detail remains incomplete.

At 32 seconds the depot becomes a monochrome photograph in a gold beaded frame. The frame recedes over 23 seconds; cracks begin at 40 seconds and spread over 8 seconds. Rotation and perspective tilt begin at 43 seconds, reaching their editable targets over 12 seconds. Blue/cyan and red cloud fields surround a white glowing divider and brief secondary flashes. Fine-tune exposes timing, frame size, signed rotation/tilt, cloud density/speed/position/colors and lightning frequency/brightness/width/position. Objects remain selectable and have individual motion keys. Figure insignia are source-image details, not editable floating patches. Exact successful generation prompts are in `assets/depot-generation-briefs-v10.json`.


## Version 23 · cloud and glass readability

The storm now uses continuous fractal cloud density rendered immediately from a cached texture, rather than an image-dependent layer. No solid polygon fallback is used. Glass fractures have stronger dark edges and bright bevels so they remain legible as the frame recedes. Picture brightness decreases continuously with frame pullback, reaching 18% at the final size by default. Darkening amount and crack visibility are editable in Fine-tune and the contextual frame toolbar.


## Version 24 · loading recovery and picture clarity

Required depot image readiness is now explicit. Failed local overrides recover once to bundled assets; unrecoverable failures name the missing asset instead of silently omitting it. The frame is not rendered with an incomplete source photograph. The two soldiers now load the same ordinary PNG sheet and are separated by cached canvas viewports at render time, avoiding duplicate embedded SVG image decoding. A Reload bundled depot assets action restores sources without resetting object edits. Side-card posters repaint after the 3D engine resolves or fails.

Photographic cloud billows replace the full-screen fractal wallpaper when available, with a dark textured fallback while loading. Picture darkening now retains 52% brightness at the final size; glass fractures use subtle bevels instead of thick white linework. Saved previous default contrast values migrate individually, preserving custom values.


## Version 25 · organic focus and corrected cargo sequence

Latest direction supersedes the earlier forward-cargo request: closest cases appear first, then recede at separate depth rates from 8–13 seconds, revealing the rear cases and the shoulder before the people pullback. Floor contact stays fixed. Foreground cover cases remain an independently timed later layer. Grass/edge blur uses irregular overlapping feathered alpha masks rather than rectangular clipping, with cached drawing surfaces. Clouds translate, rotate and breathe independently at different layer rates. Lightning has branching flashes and stronger internal illumination; glass cracks include connected fracture rings while leaving the photograph readable. Integrated Nazi armbands remain unavailable after the earlier image-service rejection; plain period-uniform assets are unchanged.


## Version 26 · shared camera and glass surface

Cargo and people now occupy fixed billboard depths and project through one retreating camera with an initial vertical descent. At the opening, people and the closest cover cases are behind the camera or outside the crop; they are opaque, not faded into view. The nearest cargo top begins around 61% of picture height and rises toward 40% during descent, then retreats in perspective. Later foreground cases enter through perspective and conceal lower bodies naturally. The plain period-uniform figures are retained under the user-approved no-armband option.

The photograph, gold frame and glass are composited into one surface and projected using a subdivided perspective mesh, with visible lower frame thickness. Glass sectors sample the picture with small stable refractive offsets; connected fracture edges have subtle bright/dark bevels. A broad reflected light sweeps over the surface as cracks spread. Photograph and clouds darken after that reflection beat, with independently editable controls. Obsolete independent cargo zoom controls are removed from the main shot tools.


Version 28: taller passing cargo, lower figure staging, a higher initial camera position for a continuous downward reveal, backlit drifting haze and dust, layered cloud density, irregular crack timing and cross-fractures, stronger reflection/refraction, deeper final perspective and darkening. New period figure sheet generated but not integrated: extraneous haze remained; image-tool cleanup was rejected. Existing clean figure sheet retained.


Version 29: newly generated transparent relaxed-shoulder period uniform figures integrated; camera descent height corrected and cargo moved inward so the shoulder reveal has higher cargo tops. Glass rebuilt with twelve irregular segmented fractures, staggered growth, smaller branches, stable refraction and a softbox reflection. Frame uses projected rear corners for actual edge thickness. Lightning and cloud flash share one clock. Last six seconds now bridge the receding frame to an animated Adidas and Puma documentary title. Verified shoulder, glass and settled title milestones; regression checks passed.


Version 30: high-energy impact preset with 1.6s fracture spread, luminous beveled crack edges, editable glow, impact origin, branching, double-pulse screen bloom and shake. Cloud layers visibly advect and deform; lightning shares blast illumination. Added Web Audio thunder with volume/mute, playback speed 0.25–2x, Space play/pause, arrows ±1s (Shift ±5s), volume arrows. Editor uses the viewport with one inspector scroll; fullscreen Fill covers the screen, Fit preserves aspect with letterboxing. Added collapsed director groups, per-surface numeric keyframes and easing, object yaw/pitch and entrance presets, eight title entrance modes, editable title text/colors/timing and four frame-to-title transition modes. Verified fullscreen image, speed, keyboard seek/volume and director title controls. All check scripts passed.


Version 32: pane rebuilt as 20 deterministic closed shards (12 at minimum branch density), including all pane corners. Shared boundaries are tiled without overlap or holes at tested center/off-center impacts. Each shard has an independent optical normal, local brightness/tint, tiny rotation and image displacement, and a differently angled/offset moving reflection. Dark crevices and selective thin bevel highlights replace uniformly glowing spokes. Material settings (optical tilt, facet contrast, reflection separation, tint) are exposed in the glass director and support surface keyframes. Existing impact timing, global frame perspective and transport layout retained.


Version 33: complete post-fracture finale: secondary reflection and wider shard gaps, late darkening, an irregular soft portal beam, accelerated retreat and edge-on rotation, frame absorption, beam clearing, then a title delay. Large tinted rivalry portraits emerge in the storm. A dedicated director group exposes stage timings, gap/tilt, beam dimensions/intensity, absorption and title pause; timeline jump points cover each beat. Tests check ordering, full disappearance before title, continuous retreat and renderer coordinates.


## Version34 · rivalry exit and floating-shoe chapter

Extends the existing depot timeline to84seconds. Default sequence: portal clears53.25, title53.6, Puma zoom58–59.4, black gap, chapter60.2, assembly2.7seconds, moving hold12seconds, environment dim3seconds, whole-scene fade2seconds. These are inferred timings from screenshots and the narrated walkthrough, not measured source-video timing.

Six deterministic procedural3D trainer meshes show upper/sole/collar/laces through independent yaw,pitch,roll rotations. They are illustrative models, not photogrammetric replicas or verified branded product models. Individual colours,position,size,blur,brightness,opacity,drift,rotation speeds and transform keyframes are exposed under Shoes. Right-side models stay unlabelled pending product identification.

Chapter controls expose text,entrance variants,stagger,defocus,bloom,recession,hold/dim/fade timing,background logo transforms/tints,neon flash and particles. Quick preview buttons and jump points avoid scrubbing the entire clip. Numeric surface settings support the existing keyframe system; object colour/style are static controls. Settings continue to export through the existing story/preset system.

Glass presets: Hairline,Cracked,Shattered,Falling shards. Break amount,detached fraction,fall start,gravity,spin and fade are independent. Beam intensity is applied to all portal light passes;zero removes beam contribution.

The Puma silhouette is sourced from the official about.puma.com header and shared by the chapter,zoom transition,city reveal,chess logo and heritage badge. The old improvised animal paths are removed. The historical badge remains an illustrative composition. Source credit:assets/brand-credits.txt.

Validation:check-chapter-motion.mjs checks ordering,black gap,continuous rotations and reversal,finite geometry/rendering,environment-first dim and shard falling. All existing checks also run. Shoes render sharply into per-object buffers before one depth-blur composite to avoid per-face filtering overhead.


## Version35 · reference pacing, focus and source accuracy

Chapter assembly now lasts5.2seconds, with a1.1second defocus hold and4.4second focus transition. Letter positions ease smoothly instead of resolving early under an ease-out curve. Persistent centre softness0.45px and edge softness2.4px retain the reference’s optical falloff after the text is readable. Initial text scale1.48 creates the enlarged cropped entrance; the later recession is gentler.

Shoes arrive at0,0.35,1.9,3.2,4.5,6.1seconds; shared tumble speed is45% of the prior rate. Peripheral shoes are slightly smaller and softer. Background illumination is reduced to25%; logos use soft, low-opacity tints and stay within their own blue/violet and red/burgundy halves. A second right-side neon sweep peaks3.6seconds into the chapter. Glow and glyph opacity now multiply the parent opacity, preserving environment darkening and final fade.

The official Adidas bar paths and wordmark were retrieved from the Adidas corporate site. The opening no longer embeds the old improvised cat or CSS bars. City branding is attached to the terrain texture, with stripes moved into the blue region and the Puma cat inside the red region, rather than a giant unrelated screen overlay. Chess uses the same registered silhouettes.

Asset provenance is centrally documented in ASSET-REGISTER.md with73records, stable IDs, hashes, exact known web URLs, source locations, modifications and explicit usage labels. Unknown legacy provenance remains review-required. AGENTS.md requires future asset registration; build-asset-register.py and check-asset-register.mjs maintain and validate coverage.


## Version 36 · optical refinement and continuous shoe depth

Continues the complete v35 export; earlier scenes, cargo transforms, shared camera, shoulder clearance, scene start times, title content, black interval and 92-second depot clock are preserved. Browser inspection of the close camera pass at depot 12 seconds and the pullback at 17 seconds showed cargo tops above the shoulders, so those transforms were retained.

The project-authored trainer mesh now uses a shaped last with a raised heel, narrow waist, wider forefoot and lifted rounded toe. A recessed ankle opening, inner wall, padded collar, tongue, eyelets, crossed laces, stitched welt and split tread blocks turn with the body. Leather, fabric and rubber receive distinct light response. The runner has unbranded panel seams; its side marking is not asserted to be Nike, Puma or an identified product. These remain illustrative procedural meshes, not scanned products or photographic replicas. No new external SVG or bitmap was required; registered official brand paths remain intact.

Each shoe has continuous perspective depth travel, drift rate and focus falloff. Arrivals grow out of depth with extra defocus, an individual duration override and horizontal/vertical offsets. A duration of zero keeps the shared entrance-duration control active. Depth travel of zero disables depth motion. Foreground shoes composite after smaller distant shoes. All existing transforms, colours, opacity, signed tumble speeds and keyframes remain available. Arrival/depth and tumble/drift are collapsed advanced sections, with Gentle depth drift and Fixed depth presets.

Chapter assembly remains 5.2 seconds with the 1.1-second defocus hold, 4.4-second focus transition, persistent centre/edge softness, six v35 arrival times and shared tumble speed 0.45. Default text glow is reduced from 22 to 14, logo width from 340 to 290, logo opacity from 0.16 to 0.10 and ambient illumination from 0.25 to 0.22. The right light now has a travelling bent neon core and broad bloom, rather than only a stationary luminous block. Its existing two pulse times remain editable. Chapter easing is independently selectable. The hold jump point now lands after assembly.

Glass retains the deterministic tiled shard layout and all existing break/gap/fall controls. Opening increases independent refraction; local facet shear, narrow reflection cores and selective beam-driven catches add optical separation. The portal has smoothly advecting irregular edges, a narrower default width of 285 and independent bloom control (default 0.65). It keeps a powerful white centre while exposing more of the surrounding storm. The additional yaw completes earlier during absorption so an edge-on frame is still visible before opacity reaches zero. Disappearance, beam clearing and title ordering are unchanged.

Migration: `depot-chapter-v36` updates glow, logo size/opacity and ambient only when a value exactly matches its v35 default. Custom values, shoe transforms/colours, arrival start times and motion keys survive. New per-shoe fields fill only absent values. `depot-chapter-before-v36` retains the prior chapter settings and shoes. `depot-optics-v36` changes only the matching old beam width of 440; `depot-optics-before-v36` stores its old optical settings. A shared `motion-v36` asset query prevents mixed-version renderer imports after an update.

Validation: all 19 `scripts/check-*.mjs` entry points pass, including the new chapter editor/migration integration check. It exercises actual director initialization, matching-default updates, preservation of custom values/keyframes, repeat initialization, deterministic continuous depth and edge-on rotation before disappearance. Asset-register rebuild and validation cover 73 current items and updated procedural surface hashes.

Browser QA used the existing editor at depot 45.5 (fractures/reflection), 49.5 (dark hold), 51.8 (edge-on absorption), 52.3 (frame gone), 60.3 (black interval), 62.1 (defocus entrance), 64.6 (assembly/right sweep), 67 and 71 (assembled/hold), 83.5 (environment dim), 86 (late fade) and 88 seconds (black exit). The chapter was also played at 1x, and the collapsed advanced shoe controls were inspected. These are timeline positions in this implementation, not inferred timestamps from reference screenshot filenames. No frame-rate benchmark or pixel-accurate reference match is claimed. Further visual refinement, exact shoe identification and native-speed source-video timing remain open.

Publication: the supplied existing Site project ID is preserved, but the Sites connector returned “Sites project not found” for both lookup and source access. No replacement Site was created and no deployment to the old live URL is claimed. GitHub synchronization is separate from Site publication.
