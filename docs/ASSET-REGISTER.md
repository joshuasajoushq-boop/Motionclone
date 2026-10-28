# Asset register

Updated: 2026-10-28 · Regaarder Motion Atelier · version 36

This is the central register for current and future assets. Stable IDs, exact local paths and SHA-256 hashes identify the actual item. Source verification and reuse permission are separate fields. An online SVG is not automatically unrestricted. No unknown source, model, prompt or license is invented.

## Labels for the future AI harness

| Label | Selection rule |
|---|---|
| `brand-reference` | Use only when representing the named brand in the template. Preserve silhouette/proportions. Review new contexts. No broad license grant has been verified. |
| `project-procedural` | Reuse the project code and exposed parameters in this template. Do not describe illustrative geometry as a scanned or verified product. |
| `generated-recorded` | Project manifest records AI generation. Use as an illustration, never as archival evidence. Check prompt/reference records before reuse elsewhere. |
| `user-reference` | User-provided source. Permission beyond this task is unverified. Do not automatically reuse in unrelated outputs. |
| `licensed-source` | Inspect the recorded license URL and conditions for the intended use. Credit and modification history stay attached. |
| `review-required` | Source or permission is incomplete. Do not automatically select for new generated outputs until reviewed. |
| `metadata` | Documentation or prompt record, not a scene visual. |

## Required workflow

1. Before adding or replacing an asset, record exact origin URL or generation/reference provenance in asset-manifest.json or this generator’s provenance map.
2. Record author/owner when known, retrieval date, license URL or unknown status, transformations, usage label and scene purpose. Never infer clearance from a familiar logo or file extension.
3. Run `python scripts/build-asset-register.py`; commit the Markdown and manifest together with the asset.
4. Run `node scripts/check-asset-register.mjs`. Missing files, hashes or entries fail validation. A newly discovered legacy item defaults to review-required.
5. Keep superseded files labelled instead of silently representing them as current. User uploads need the same fields when incorporated into distributed source.

## Assets

### asset-assets-adidas-bars-svg

- **Label:** adidas official three-bar mark
- **File:** `assets/adidas-bars.svg`
- **Usage label:** `brand-reference`
- **Origin / exact source:** https://www.adidas-group.com/en/public/icons/icons.svg
- **Source location / method:** symbol#logo, viewBox 0 0 300 189. Discovery page: https://www.adidas-group.com/en/ (base href /en/)
- **Author / brand owner:** adidas
- **Retrieved / created:** 2026-10-28
- **License / permission status:** Not specified by the downloaded corporate asset. No broad redistribution or trademark clearance is asserted.
- **Modifications:** Extracted the three original paths into a standalone SVG; white fill. Replaces the previous hand-built bars.
- **SHA-256:** `469d19e80e9e59570c86f60a100f34f94c2372aee4b925650057d94db8396952`
- **Bytes:** 275

### asset-assets-adidas-wordmark-svg

- **Label:** adidas official wordmark
- **File:** `assets/adidas-wordmark.svg`
- **Usage label:** `brand-reference`
- **Origin / exact source:** https://www.adidas-group.com/en/public/adidas-logo-white.svg
- **Source location / method:** Image referenced by the official corporate homepage header
- **Author / brand owner:** adidas
- **Retrieved / created:** 2026-10-28
- **License / permission status:** Not specified by the downloaded corporate asset. No broad redistribution or trademark clearance is asserted.
- **Modifications:** Removed non-SVG className attribute; original paths and group transform preserved.
- **SHA-256:** `db6f14a6806b5444aa0e8678ff4e9e032a2fb8decc020fed16bc413af9b8d4f2`
- **Bytes:** 1238

### asset-assets-battle-fireball-png

- **Label:** Conflict · billowing fireball texture
- **File:** `assets/battle-fireball.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** Built-in image generation, as recorded in the existing asset manifest
- **Source location / method:** RGBA blast plate with one expansion, rising advection, internal deformation, debris and burnout; no repeated global scale pulsing
- **Author / brand owner:** Project generation record
- **Retrieved / created:** See associated brief; unknown if absent
- **License / permission status:** Generated project asset; source/reference restrictions are not independently cleared
- **Modifications:** See method; generation tool version/date is unknown unless a related brief explicitly records it.
- **SHA-256:** `42af1cd39a5909a21493acb983184fc2f53abce8e0465a2acaea0dc683b811b7`
- **Bytes:** 2155186

### asset-assets-battle-ridge-png

- **Label:** Conflict · rocky foreground ridge
- **File:** `assets/battle-ridge.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** Built-in image generation, as recorded in the existing asset manifest
- **Source location / method:** generated RGBA rocky cutout; foreground occlusion pass
- **Author / brand owner:** Project generation record
- **Retrieved / created:** See associated brief; unknown if absent
- **License / permission status:** Generated project asset; source/reference restrictions are not independently cleared
- **Modifications:** See method; generation tool version/date is unknown unless a related brief explicitly records it.
- **SHA-256:** `099dfbe903c67fe174427f4a1dff5168b1aaf9632cca7ebe08a1009405538889`
- **Bytes:** 2047444

### asset-assets-brand-credits-txt

- **Label:** Brand Credits
- **File:** `assets/brand-credits.txt`
- **Usage label:** `metadata`
- **Origin / exact source:** Existing project documentation
- **Source location / method:** Legacy project metadata
- **Author / brand owner:** Project records
- **Retrieved / created:** Original creation date varies; see file contents
- **License / permission status:** Contains provenance and prompts; not a scene asset
- **Modifications:** Read the file for the exact prompt, source or credit where available.
- **SHA-256:** `825439eee5f9cbcdb1dad76ae7fcfa6357edc89fbd874c602c1d950d152a9012`
- **Bytes:** 236

### asset-assets-city-aerial-v1-credit-txt

- **Label:** City Aerial V1 Credit
- **File:** `assets/city-aerial-v1-credit.txt`
- **Usage label:** `metadata`
- **Origin / exact source:** Existing project documentation
- **Source location / method:** source provenance text
- **Author / brand owner:** Project records
- **Retrieved / created:** Original creation date varies; see file contents
- **License / permission status:** Contains provenance and prompts; not a scene asset
- **Modifications:** Read the file for the exact prompt, source or credit where available.
- **SHA-256:** `945fba3a6dede8ebc03c5485c51ba36dff3165a6be7b2cd8c6b04c3df268b63c`
- **Bytes:** 711
- **Related provenance records:** `assets/city-aerial-v1-credit.txt`

### asset-assets-city-aerial-v1-png

- **Label:** Illustrative Bavarian aerial image
- **File:** `assets/city-aerial-v1.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** Built-in image generation, as recorded in the existing asset manifest
- **Source location / method:** generated raster plate
- **Author / brand owner:** Project generation record
- **Retrieved / created:** See associated brief; unknown if absent
- **License / permission status:** Generated project asset; source/reference restrictions are not independently cleared
- **Modifications:** See method; generation tool version/date is unknown unless a related brief explicitly records it.
- **SHA-256:** `84309258540614d20635872001e5687627f64d416ae41344c26ffad8df1e96f6`
- **Bytes:** 4003289
- **Related provenance records:** `assets/city-aerial-v1-credit.txt`

### asset-assets-clouds-png

- **Label:** Clouds
- **File:** `assets/clouds.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** Built-in image generation, as recorded in the existing asset manifest
- **Source location / method:** generated alpha cutout
- **Author / brand owner:** Project generation record
- **Retrieved / created:** See associated brief; unknown if absent
- **License / permission status:** Generated project asset; source/reference restrictions are not independently cleared
- **Modifications:** See method; generation tool version/date is unknown unless a related brief explicitly records it.
- **SHA-256:** `b4ccfb64f40fbe440fd103d77d714ad29507ef9f9061fe2b4c93592343934604`
- **Bytes:** 1244752

### asset-assets-conflict-fire-keyframe-v6-png

- **Label:** Conflict fire · visual reference keyframe
- **File:** `assets/conflict-fire-keyframe-v6.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** Built-in image generation, as recorded in the existing asset manifest
- **Source location / method:** generated edit of selected reference; inactive visual guide, not flattened scene replacement
- **Author / brand owner:** Project generation record
- **Retrieved / created:** See associated brief; unknown if absent
- **License / permission status:** Generated project asset; source/reference restrictions are not independently cleared
- **Modifications:** See method; generation tool version/date is unknown unless a related brief explicitly records it.
- **SHA-256:** `8c0b5b547e2f93d9947cfb5bef34462db7c0751500f607797da5f52a7b69695a`
- **Bytes:** 1942036

### asset-assets-conflict-generation-briefs-json

- **Label:** Conflict · exact asset generation prompts
- **File:** `assets/conflict-generation-briefs.json`
- **Usage label:** `metadata`
- **Origin / exact source:** Existing project documentation
- **Source location / method:** exact submitted prompts, tool and provenance
- **Author / brand owner:** Project records
- **Retrieved / created:** Original creation date varies; see file contents
- **License / permission status:** Contains provenance and prompts; not a scene asset
- **Modifications:** Read the file for the exact prompt, source or credit where available.
- **SHA-256:** `0b9f15dc51acd4b8f8ad9791e86c8567e519371121e9c523d4456f1661790468`
- **Bytes:** 2627

### asset-assets-depot-complete-figure-prompts-v9-json

- **Label:** Depot Complete Figure Prompts V9
- **File:** `assets/depot-complete-figure-prompts-v9.json`
- **Usage label:** `metadata`
- **Origin / exact source:** Existing project documentation
- **Source location / method:** Legacy project metadata
- **Author / brand owner:** Project records
- **Retrieved / created:** Original creation date varies; see file contents
- **License / permission status:** Contains provenance and prompts; not a scene asset
- **Modifications:** Read the file for the exact prompt, source or credit where available.
- **SHA-256:** `97f1ef1356492b4cdf95fe248d8822f1a7434062c256af914700a0a015f9c5d2`
- **Bytes:** 2467
- **Related provenance records:** `assets/depot-generation-briefs.json`, `assets/depot-generation-briefs-v10.json`, `assets/depot-complete-figure-prompts-v9.json`

### asset-assets-depot-crate-png

- **Label:** Canvas-covered military equipment case
- **File:** `assets/depot-crate.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** Built-in image generation, as recorded in the existing asset manifest
- **Source location / method:** generated alpha cargo cutout; independent vector markings
- **Author / brand owner:** Project generation record
- **Retrieved / created:** See associated brief; unknown if absent
- **License / permission status:** Generated project asset; source/reference restrictions are not independently cleared
- **Modifications:** See method; generation tool version/date is unknown unless a related brief explicitly records it.
- **SHA-256:** `a22f3b953aa5e2da0229323ea9963c7cbdea2030d66e3661e59fd70d8a36aa17`
- **Bytes:** 2911249
- **Related provenance records:** `assets/depot-generation-briefs.json`, `assets/depot-generation-briefs-v10.json`, `assets/depot-complete-figure-prompts-v9.json`

### asset-assets-depot-figures-reference-png

- **Label:** Depot figures · supplied source frame
- **File:** `assets/depot-figures-reference.png`
- **Usage label:** `user-reference`
- **Origin / exact source:** User attachment; original public URL not recorded
- **Source location / method:** user-provided visual source, not archival attribution
- **Author / brand owner:** Not independently established
- **Retrieved / created:** Original attachment date not reliably recorded
- **License / permission status:** Unknown beyond the user-authorized template task
- **Modifications:** See manifest method and related depot brief files.
- **SHA-256:** `67f7f97854e204bb44da564d8b55048466a86c3c8309ca805c33876426a0341e`
- **Bytes:** 611083
- **Related provenance records:** `assets/depot-generation-briefs.json`, `assets/depot-generation-briefs-v10.json`, `assets/depot-complete-figure-prompts-v9.json`

### asset-assets-depot-generation-briefs-v10-json

- **Label:** Depot Generation Briefs V10
- **File:** `assets/depot-generation-briefs-v10.json`
- **Usage label:** `metadata`
- **Origin / exact source:** Existing project documentation
- **Source location / method:** Legacy project metadata
- **Author / brand owner:** Project records
- **Retrieved / created:** Original creation date varies; see file contents
- **License / permission status:** Contains provenance and prompts; not a scene asset
- **Modifications:** Read the file for the exact prompt, source or credit where available.
- **SHA-256:** `aef197acf5b4fb9469daa9689e0cc79c50dadd1a6972177bfeea08c4d760b8fa`
- **Bytes:** 1767
- **Related provenance records:** `assets/depot-generation-briefs.json`, `assets/depot-generation-briefs-v10.json`, `assets/depot-complete-figure-prompts-v9.json`

### asset-assets-depot-generation-briefs-json

- **Label:** Depot · exact generation briefs and result status
- **File:** `assets/depot-generation-briefs.json`
- **Usage label:** `metadata`
- **Origin / exact source:** Existing project documentation
- **Source location / method:** exact submitted prompts; rejected figure generation explicitly recorded
- **Author / brand owner:** Project records
- **Retrieved / created:** Original creation date varies; see file contents
- **License / permission status:** Contains provenance and prompts; not a scene asset
- **Modifications:** Read the file for the exact prompt, source or credit where available.
- **SHA-256:** `d511df86f08fff1e5866bce515f8d990fde744018dbddb67e56d26fda92ecc9d`
- **Bytes:** 3983
- **Related provenance records:** `assets/depot-generation-briefs.json`, `assets/depot-generation-briefs-v10.json`, `assets/depot-complete-figure-prompts-v9.json`

### asset-assets-depot-head-reference-png

- **Label:** Depot left figure · full-head source frame
- **File:** `assets/depot-head-reference.png`
- **Usage label:** `user-reference`
- **Origin / exact source:** User attachment; original public URL not recorded
- **Source location / method:** user-provided visual source for unclipped hair contour
- **Author / brand owner:** Not independently established
- **Retrieved / created:** Original attachment date not reliably recorded
- **License / permission status:** Unknown beyond the user-authorized template task
- **Modifications:** See manifest method and related depot brief files.
- **SHA-256:** `71021bc5edf809180207ffdc57cdb32d2fd4d93eb21e34613fdcbe05dc232174`
- **Bytes:** 523436
- **Related provenance records:** `assets/depot-generation-briefs.json`, `assets/depot-generation-briefs-v10.json`, `assets/depot-complete-figure-prompts-v9.json`

### asset-assets-depot-man-left-svg

- **Label:** Depot figure · left · archived rough mask
- **File:** `assets/depot-man-left.svg`
- **Usage label:** `user-reference`
- **Origin / exact source:** User attachment; original public URL not recorded
- **Source location / method:** user-reference photograph with a native SVG subject mask; independent runtime armband
- **Author / brand owner:** Not independently established
- **Retrieved / created:** Original attachment date not reliably recorded
- **License / permission status:** Unknown beyond the user-authorized template task
- **Modifications:** See manifest method and related depot brief files.
- **SHA-256:** `dd134a00aac3aada8beb7aa986ea8bec5348ca00af9eacebd3fe2b06ff94ad12`
- **Bytes:** 1513645
- **Related provenance records:** `assets/depot-generation-briefs.json`, `assets/depot-generation-briefs-v10.json`, `assets/depot-complete-figure-prompts-v9.json`

### asset-assets-depot-man-right-svg

- **Label:** Depot figure · right, round glasses · archived rough mask
- **File:** `assets/depot-man-right.svg`
- **Usage label:** `user-reference`
- **Origin / exact source:** User attachment; original public URL not recorded
- **Source location / method:** user-reference photograph with native SVG subject mask; independent runtime armband
- **Author / brand owner:** Not independently established
- **Retrieved / created:** Original attachment date not reliably recorded
- **License / permission status:** Unknown beyond the user-authorized template task
- **Modifications:** See manifest method and related depot brief files.
- **SHA-256:** `291bbf805ce3387ce41de3304de6251f177e4e923ba7eb2cb9dc799a365bb7ee`
- **Bytes:** 815399
- **Related provenance records:** `assets/depot-generation-briefs.json`, `assets/depot-generation-briefs-v10.json`, `assets/depot-complete-figure-prompts-v9.json`

### asset-assets-depot-mountain-face-v10-png

- **Label:** Mountain descent · continuous rock face
- **File:** `assets/depot-mountain-face-v10.png`
- **Usage label:** `review-required`
- **Origin / exact source:** Legacy project file; exact origin not documented
- **Source location / method:** No reliable acquisition record
- **Author / brand owner:** Unknown
- **Retrieved / created:** Unknown
- **License / permission status:** Unknown; do not automatically reuse outside this task
- **Modifications:** Unknown; file hash preserves current identity.
- **SHA-256:** `905a9d2e6f598fc033403b1a20d60ca457a8bad156c6ea731e866be2b5bb7477`
- **Bytes:** 3510138
- **Related provenance records:** `assets/depot-generation-briefs.json`, `assets/depot-generation-briefs-v10.json`, `assets/depot-complete-figure-prompts-v9.json`

### asset-assets-depot-person-left-v9-png

- **Label:** Depot Person Left V9
- **File:** `assets/depot-person-left-v9.png`
- **Usage label:** `review-required`
- **Origin / exact source:** Legacy project file; exact origin not documented
- **Source location / method:** No reliable acquisition record
- **Author / brand owner:** Unknown
- **Retrieved / created:** Unknown
- **License / permission status:** Unknown; do not automatically reuse outside this task
- **Modifications:** Unknown; file hash preserves current identity.
- **SHA-256:** `fc7ff0a9b680ee180cc0aa33eecc4988e01e57c0ae1341deb5073c5832600e8a`
- **Bytes:** 1656697
- **Related provenance records:** `assets/depot-generation-briefs.json`, `assets/depot-generation-briefs-v10.json`, `assets/depot-complete-figure-prompts-v9.json`

### asset-assets-depot-person-right-v9-png

- **Label:** Depot Person Right V9
- **File:** `assets/depot-person-right-v9.png`
- **Usage label:** `review-required`
- **Origin / exact source:** Legacy project file; exact origin not documented
- **Source location / method:** No reliable acquisition record
- **Author / brand owner:** Unknown
- **Retrieved / created:** Unknown
- **License / permission status:** Unknown; do not automatically reuse outside this task
- **Modifications:** Unknown; file hash preserves current identity.
- **SHA-256:** `5f2a2763c8d57b890e8ac2d48bc37583021c55fd1f99b96132c4f01fb1d9c7d9`
- **Bytes:** 1618871
- **Related provenance records:** `assets/depot-generation-briefs.json`, `assets/depot-generation-briefs-v10.json`, `assets/depot-complete-figure-prompts-v9.json`

### asset-assets-depot-room-png

- **Label:** Supply depot · warm industrial background
- **File:** `assets/depot-room.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** Built-in image generation, as recorded in the existing asset manifest
- **Source location / method:** generated photographic background plate
- **Author / brand owner:** Project generation record
- **Retrieved / created:** See associated brief; unknown if absent
- **License / permission status:** Generated project asset; source/reference restrictions are not independently cleared
- **Modifications:** See method; generation tool version/date is unknown unless a related brief explicitly records it.
- **SHA-256:** `f5d12486f42d35a2b267c0750a87c08b0be1de7405126e59a37c155741bd48d7`
- **Bytes:** 2070117
- **Related provenance records:** `assets/depot-generation-briefs.json`, `assets/depot-generation-briefs-v10.json`, `assets/depot-complete-figure-prompts-v9.json`

### asset-assets-depot-soldier-left-v10-svg

- **Label:** Depot soldier · left · plain military uniform
- **File:** `assets/depot-soldier-left-v10.svg`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** Built-in image generation, as recorded in the existing asset manifest
- **Source location / method:** Generated transparent uniformed pair, isolated by native SVG viewport. Integrated political insignia request rejected; no floating armband overlay.
- **Author / brand owner:** Project generation record
- **Retrieved / created:** See associated brief; unknown if absent
- **License / permission status:** Generated project asset; source/reference restrictions are not independently cleared
- **Modifications:** See method; generation tool version/date is unknown unless a related brief explicitly records it.
- **SHA-256:** `6442246833c01451a3e90515a6d57a8dc5ba546b8f079248d0544c2d88be37ee`
- **Bytes:** 2532364
- **Related provenance records:** `assets/conflict-generation-briefs.json`, `assets/depot-generation-briefs.json`, `assets/depot-generation-briefs-v10.json`, `assets/depot-complete-figure-prompts-v9.json`

### asset-assets-depot-soldier-right-v10-svg

- **Label:** Depot soldier · right · plain military uniform
- **File:** `assets/depot-soldier-right-v10.svg`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** Built-in image generation, as recorded in the existing asset manifest
- **Source location / method:** Generated transparent uniformed pair, isolated by native SVG viewport. Integrated political insignia request rejected; no floating armband overlay.
- **Author / brand owner:** Project generation record
- **Retrieved / created:** See associated brief; unknown if absent
- **License / permission status:** Generated project asset; source/reference restrictions are not independently cleared
- **Modifications:** See method; generation tool version/date is unknown unless a related brief explicitly records it.
- **SHA-256:** `c5f37bcd3cbee6f4f425a14d630e841ff470f06e90fd42d681dbf10a371a37f7`
- **Bytes:** 2532366
- **Related provenance records:** `assets/conflict-generation-briefs.json`, `assets/depot-generation-briefs.json`, `assets/depot-generation-briefs-v10.json`, `assets/depot-complete-figure-prompts-v9.json`

### asset-assets-depot-uniformed-pair-v10-png

- **Label:** Depot Uniformed Pair V10
- **File:** `assets/depot-uniformed-pair-v10.png`
- **Usage label:** `review-required`
- **Origin / exact source:** Legacy project file; exact origin not documented
- **Source location / method:** No reliable acquisition record
- **Author / brand owner:** Unknown
- **Retrieved / created:** Unknown
- **License / permission status:** Unknown; do not automatically reuse outside this task
- **Modifications:** Unknown; file hash preserves current identity.
- **SHA-256:** `59b36b0384a18f667b73ade1a3202f7b92fc4bbe5ec29a1ac9f7b56ea5ebcdce`
- **Bytes:** 1899152
- **Related provenance records:** `assets/depot-generation-briefs.json`, `assets/depot-generation-briefs-v10.json`, `assets/depot-complete-figure-prompts-v9.json`

### asset-assets-depot-uniformed-pair-v29-png

- **Label:** Generated plain-uniform pair · v29
- **File:** `assets/depot-uniformed-pair-v29.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** Built-in image generation, as recorded in the existing asset manifest
- **Source location / method:** Generated alpha cutout using the built-in image-generation tool; recorded in the project conversation. Exact submitted prompt/output ID not retained in the current checkout.
- **Author / brand owner:** Project generation record
- **Retrieved / created:** See associated brief; unknown if absent
- **License / permission status:** Generated project asset; source/reference restrictions are not independently cleared
- **Modifications:** See method; generation tool version/date is unknown unless a related brief explicitly records it.
- **SHA-256:** `6a98793f6e5a7cd1bc8d7872b5342dbfe14e0dfaedb86718aed0f84d24a9f474`
- **Bytes:** 1825125
- **Related provenance records:** `assets/depot-generation-briefs.json`, `assets/depot-generation-briefs-v10.json`, `assets/depot-complete-figure-prompts-v9.json`

### asset-assets-desk-lamp-v3-png

- **Label:** Desk and practical lamp · alpha cutout
- **File:** `assets/desk-lamp-v3.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** Built-in image generation, as recorded in the existing asset manifest
- **Source location / method:** generated alpha cutout
- **Author / brand owner:** Project generation record
- **Retrieved / created:** See associated brief; unknown if absent
- **License / permission status:** Generated project asset; source/reference restrictions are not independently cleared
- **Modifications:** See method; generation tool version/date is unknown unless a related brief explicitly records it.
- **SHA-256:** `f7293766663be7e076578f15dc4e4f3fc632166c866478f6435e6d4d2abecaab`
- **Bytes:** 2020196

### asset-assets-desk-png

- **Label:** Desk
- **File:** `assets/desk.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** Built-in image generation, as recorded in the existing asset manifest
- **Source location / method:** generated alpha cutout
- **Author / brand owner:** Project generation record
- **Retrieved / created:** See associated brief; unknown if absent
- **License / permission status:** Generated project asset; source/reference restrictions are not independently cleared
- **Modifications:** See method; generation tool version/date is unknown unless a related brief explicitly records it.
- **SHA-256:** `0c2f98e637e2a86f50b8b870e10740c0298beb31b9006e0923fd7581ed91194a`
- **Bytes:** 2541460

### asset-assets-faces-v3-png

- **Label:** Fire scene · paired portrait cutouts
- **File:** `assets/faces-v3.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** Built-in image generation, as recorded in the existing asset manifest
- **Source location / method:** generated alpha cutout
- **Author / brand owner:** Project generation record
- **Retrieved / created:** See associated brief; unknown if absent
- **License / permission status:** Generated project asset; source/reference restrictions are not independently cleared
- **Modifications:** See method; generation tool version/date is unknown unless a related brief explicitly records it.
- **SHA-256:** `5bf0f5f1a696431d15a4c7ffa5ef35d3cb4e455dff13c9f1e64febea4db31c1f`
- **Bytes:** 2025849

### asset-assets-fire-poster-png

- **Label:** Fire Poster
- **File:** `assets/fire-poster.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** Built-in image generation, as recorded in the existing asset manifest
- **Source location / method:** generated alpha cutout
- **Author / brand owner:** Project generation record
- **Retrieved / created:** See associated brief; unknown if absent
- **License / permission status:** Generated project asset; source/reference restrictions are not independently cleared
- **Modifications:** See method; generation tool version/date is unknown unless a related brief explicitly records it.
- **SHA-256:** `6214a054c8bd00e77328c842c37f16c1b2b477fb146f425c5f8fc67ade23be3f`
- **Bytes:** 2102389

### asset-assets-fire-png

- **Label:** Fire
- **File:** `assets/fire.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** Built-in image generation, as recorded in the existing asset manifest
- **Source location / method:** generated alpha cutout
- **Author / brand owner:** Project generation record
- **Retrieved / created:** See associated brief; unknown if absent
- **License / permission status:** Generated project asset; source/reference restrictions are not independently cleared
- **Modifications:** See method; generation tool version/date is unknown unless a related brief explicitly records it.
- **SHA-256:** `d39792ffe706cac10b1ca9344c022234d4cd908af0979996797eca5cb9fcd228`
- **Bytes:** 2030703

### asset-assets-lamp-png

- **Label:** Lamp
- **File:** `assets/lamp.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** Built-in image generation, as recorded in the existing asset manifest
- **Source location / method:** generated alpha cutout
- **Author / brand owner:** Project generation record
- **Retrieved / created:** See associated brief; unknown if absent
- **License / permission status:** Generated project asset; source/reference restrictions are not independently cleared
- **Modifications:** See method; generation tool version/date is unknown unless a related brief explicitly records it.
- **SHA-256:** `eeee03dd74022bda537099ef5912f9775ab73d3929f28de0968a82addb9fffda`
- **Bytes:** 813731

### asset-assets-map-png

- **Label:** Opening map image
- **File:** `assets/map.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** Built-in image generation, as recorded in the existing asset manifest
- **Source location / method:** generated raster plate
- **Author / brand owner:** Project generation record
- **Retrieved / created:** See associated brief; unknown if absent
- **License / permission status:** Generated project asset; source/reference restrictions are not independently cleared
- **Modifications:** See method; generation tool version/date is unknown unless a related brief explicitly records it.
- **SHA-256:** `edc4f7c0ecb5aa185e55d982063698518d7e0109c4b6ac8ec3033b81eb280b34`
- **Bytes:** 2648899

### asset-assets-mystery-men-png

- **Label:** Mysterious men · rear-view alpha cutout
- **File:** `assets/mystery-men.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** Built-in image generation, as recorded in the existing asset manifest
- **Source location / method:** generated alpha cutout
- **Author / brand owner:** Project generation record
- **Retrieved / created:** See associated brief; unknown if absent
- **License / permission status:** Generated project asset; source/reference restrictions are not independently cleared
- **Modifications:** See method; generation tool version/date is unknown unless a related brief explicitly records it.
- **SHA-256:** `467cf2b6b36d59e55a17d851b3605c05ef835b52ca4bd55cd4027591896b66b7`
- **Bytes:** 1185857

### asset-assets-mystery-sky-png

- **Label:** Noir cloud and mountain background
- **File:** `assets/mystery-sky.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** Built-in image generation, as recorded in the existing asset manifest
- **Source location / method:** generated raster plate
- **Author / brand owner:** Project generation record
- **Retrieved / created:** See associated brief; unknown if absent
- **License / permission status:** Generated project asset; source/reference restrictions are not independently cleared
- **Modifications:** See method; generation tool version/date is unknown unless a related brief explicitly records it.
- **SHA-256:** `cf86b627f87a007efce7b328cedec20f8235d37b13322c2edb16a149b25ff790`
- **Bytes:** 2168046

### asset-assets-outdoor-png

- **Label:** Outdoor
- **File:** `assets/outdoor.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** Built-in image generation, as recorded in the existing asset manifest
- **Source location / method:** generated raster plate
- **Author / brand owner:** Project generation record
- **Retrieved / created:** See associated brief; unknown if absent
- **License / permission status:** Generated project asset; source/reference restrictions are not independently cleared
- **Modifications:** See method; generation tool version/date is unknown unless a related brief explicitly records it.
- **SHA-256:** `9dd4096d04d1a853a3ce78ed27986d2600f9be85e577b0375b6446f3702e7227`
- **Bytes:** 3685012

### asset-assets-pair-v2-png

- **Label:** Background portrait pair · alpha cutout
- **File:** `assets/pair-v2.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** Built-in image generation, as recorded in the existing asset manifest
- **Source location / method:** generated alpha cutout
- **Author / brand owner:** Project generation record
- **Retrieved / created:** See associated brief; unknown if absent
- **License / permission status:** Generated project asset; source/reference restrictions are not independently cleared
- **Modifications:** See method; generation tool version/date is unknown unless a related brief explicitly records it.
- **SHA-256:** `15fc2c490b529a2c8b6b1f118f67cdb9cfe08156d708f3d75d8cf1ed9a92caf4`
- **Bytes:** 1831563

### asset-assets-people-png

- **Label:** People
- **File:** `assets/people.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** Built-in image generation, as recorded in the existing asset manifest
- **Source location / method:** generated alpha cutout
- **Author / brand owner:** Project generation record
- **Retrieved / created:** See associated brief; unknown if absent
- **License / permission status:** Generated project asset; source/reference restrictions are not independently cleared
- **Modifications:** See method; generation tool version/date is unknown unless a related brief explicitly records it.
- **SHA-256:** `7820eaff0d9717b0ad1fa5da937c47ec3a9f794fafe7fbd9a9cc8ed11220b746`
- **Bytes:** 1977571

### asset-assets-portrait-png

- **Label:** Opening archival-style portrait
- **File:** `assets/portrait.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** Built-in image generation, as recorded in the existing asset manifest
- **Source location / method:** generated alpha cutout
- **Author / brand owner:** Project generation record
- **Retrieved / created:** See associated brief; unknown if absent
- **License / permission status:** Generated project asset; source/reference restrictions are not independently cleared
- **Modifications:** See method; generation tool version/date is unknown unless a related brief explicitly records it.
- **SHA-256:** `5dcdf8cbc6fba24b08f300265cd810470ba0f4dcb752417f4704377443c990d4`
- **Bytes:** 2059594

### asset-assets-puma-cat-svg

- **Label:** PUMA leaping cat
- **File:** `assets/puma-cat.svg`
- **Usage label:** `brand-reference`
- **Origin / exact source:** https://about.puma.com
- **Source location / method:** HTML header__logo > inline SVG, native 54 × 42 coordinate system
- **Author / brand owner:** PUMA
- **Retrieved / created:** 2026-10-28
- **License / permission status:** Not specified by the downloaded corporate asset. No broad redistribution or trademark clearance is asserted.
- **Modifications:** Preserved path; viewBox added to standalone file. Runtime changes tint, alpha, scale and blur; no silhouette redraw.
- **SHA-256:** `bc70453a65103e09db00332b261881a1cb368f6f7ffafb5ea56a82b703fb93f7`
- **Bytes:** 1347

### asset-assets-puma-lockup-svg

- **Label:** PUMA combined cat and wordmark
- **File:** `assets/puma-lockup.svg`
- **Usage label:** `brand-reference`
- **Origin / exact source:** https://about.puma.com
- **Source location / method:** HTML footer__logo > inline SVG, viewBox 0 0 100 49.541
- **Author / brand owner:** PUMA
- **Retrieved / created:** 2026-10-28
- **License / permission status:** Not specified by the downloaded corporate asset. No broad redistribution or trademark clearance is asserted.
- **Modifications:** Preserved geometry; fill made white for compositing.
- **SHA-256:** `c4323fdc11201b74cfbe9b99b8073e215f8c3c1a1ad99e7363a40531fc232530`
- **Bytes:** 3063

### asset-assets-real-fire-credit-txt

- **Label:** Real Fire Credit
- **File:** `assets/real-fire-credit.txt`
- **Usage label:** `metadata`
- **Origin / exact source:** Existing project documentation
- **Source location / method:** source provenance text
- **Author / brand owner:** Project records
- **Retrieved / created:** Original creation date varies; see file contents
- **License / permission status:** Contains provenance and prompts; not a scene asset
- **Modifications:** Read the file for the exact prompt, source or credit where available.
- **SHA-256:** `d1cc1e133b3ba6f7c5598092fc87145a56323d36e056d8b74782d6c3ca13a2ae`
- **Bytes:** 371

### asset-assets-real-fire-mp4

- **Label:** Fire on Black Background
- **File:** `assets/real-fire.mp4`
- **Usage label:** `licensed-source`
- **Origin / exact source:** https://www.pexels.com/video/fire-on-black-background-11977692/
- **Source location / method:** Existing project credit: assets/real-fire-credit.txt
- **Author / brand owner:** Artur Szczubelek / Pexels
- **Retrieved / created:** 2026-10-27 (existing credit)
- **License / permission status:** https://www.pexels.com/license/
- **Modifications:** Trimmed and resized for compositing; recorded download 2026-10-27.
- **SHA-256:** `d1b1777cf6f4727f51ac33770c27dbe71795843f679a1e04aeb52214af1e5014`
- **Bytes:** 4635920

### asset-assets-reveal-png

- **Label:** Reveal
- **File:** `assets/reveal.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** Built-in image generation, as recorded in the existing asset manifest
- **Source location / method:** generated raster plate
- **Author / brand owner:** Project generation record
- **Retrieved / created:** See associated brief; unknown if absent
- **License / permission status:** Generated project asset; source/reference restrictions are not independently cleared
- **Modifications:** See method; generation tool version/date is unknown unless a related brief explicitly records it.
- **SHA-256:** `7c69903df351ea10d2ea41e7df5a11450d82924be77083cc7675cbe9b8ec19cf`
- **Bytes:** 2240487

### asset-assets-shoulder-v3-png

- **Label:** Shoulder V3
- **File:** `assets/shoulder-v3.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** Built-in image generation, as recorded in the existing asset manifest
- **Source location / method:** generated raster plate
- **Author / brand owner:** Project generation record
- **Retrieved / created:** See associated brief; unknown if absent
- **License / permission status:** Generated project asset; source/reference restrictions are not independently cleared
- **Modifications:** See method; generation tool version/date is unknown unless a related brief explicitly records it.
- **SHA-256:** `2941f7e86cfed0067fc41d890bd3c25c08b12df4e679c596142ae42b184fbc56`
- **Bytes:** 1642252

### asset-assets-shoulder-png

- **Label:** Shoulder
- **File:** `assets/shoulder.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** Built-in image generation, as recorded in the existing asset manifest
- **Source location / method:** generated raster plate
- **Author / brand owner:** Project generation record
- **Retrieved / created:** See associated brief; unknown if absent
- **License / permission status:** Generated project asset; source/reference restrictions are not independently cleared
- **Modifications:** See method; generation tool version/date is unknown unless a related brief explicitly records it.
- **SHA-256:** `9523df3906afb5d2fbf7dfd31a342c4c3d788efeb2f74c5b6326990a3df75305`
- **Bytes:** 2048698

### asset-assets-snow-material-png

- **Label:** Snow · natural fine grains
- **File:** `assets/snow-material.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** Built-in image generation, as recorded in the existing asset manifest
- **Source location / method:** generated photorealistic material plate
- **Author / brand owner:** Project generation record
- **Retrieved / created:** See associated brief; unknown if absent
- **License / permission status:** Generated project asset; source/reference restrictions are not independently cleared
- **Modifications:** See method; generation tool version/date is unknown unless a related brief explicitly records it.
- **SHA-256:** `dff6bd308546858bc78b4a0e45f3e372d1038f98a3d47ddd2027949b84376261`
- **Bytes:** 2231190

### asset-assets-soil-cross-section-png

- **Label:** Granular soil · earth cross-section
- **File:** `assets/soil-cross-section.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** Built-in image generation, as recorded in the existing asset manifest
- **Source location / method:** generated raster plate
- **Author / brand owner:** Project generation record
- **Retrieved / created:** See associated brief; unknown if absent
- **License / permission status:** Generated project asset; source/reference restrictions are not independently cleared
- **Modifications:** See method; generation tool version/date is unknown unless a related brief explicitly records it.
- **SHA-256:** `345b467a4e62e845011f6365cef388673e18229ce85bb593e4bc29c4787a19c3`
- **Bytes:** 4138410

### asset-assets-soldier-1-svg

- **Label:** Soldier 1 · standalone transparent cutout
- **File:** `assets/soldier-1.svg`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** Built-in image generation, as recorded in the existing asset manifest
- **Source location / method:** lossless SVG viewport wrapper around an embedded original generated PNG quadrant; no runtime sheet canvas
- **Author / brand owner:** Project generation record
- **Retrieved / created:** See associated brief; unknown if absent
- **License / permission status:** Generated project asset; source/reference restrictions are not independently cleared
- **Modifications:** See method; generation tool version/date is unknown unless a related brief explicitly records it.
- **SHA-256:** `d55814f678667b518d696384849c723140391d706a87f84ac4aa9b033b3ba0b7`
- **Bytes:** 2770591
- **Related provenance records:** `assets/conflict-generation-briefs.json`

### asset-assets-soldier-2-svg

- **Label:** Soldier 2 · standalone transparent cutout
- **File:** `assets/soldier-2.svg`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** Built-in image generation, as recorded in the existing asset manifest
- **Source location / method:** lossless SVG viewport wrapper around an embedded original generated PNG quadrant; no runtime sheet canvas
- **Author / brand owner:** Project generation record
- **Retrieved / created:** See associated brief; unknown if absent
- **License / permission status:** Generated project asset; source/reference restrictions are not independently cleared
- **Modifications:** See method; generation tool version/date is unknown unless a related brief explicitly records it.
- **SHA-256:** `0e4349564198fd895c58587109651e421bca5b56121cf6a8592831f81dc2982d`
- **Bytes:** 2770593
- **Related provenance records:** `assets/conflict-generation-briefs.json`

### asset-assets-soldier-3-svg

- **Label:** Soldier 3 · standalone transparent cutout
- **File:** `assets/soldier-3.svg`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** Built-in image generation, as recorded in the existing asset manifest
- **Source location / method:** lossless SVG viewport wrapper around an embedded original generated PNG quadrant; no runtime sheet canvas
- **Author / brand owner:** Project generation record
- **Retrieved / created:** See associated brief; unknown if absent
- **License / permission status:** Generated project asset; source/reference restrictions are not independently cleared
- **Modifications:** See method; generation tool version/date is unknown unless a related brief explicitly records it.
- **SHA-256:** `fb18ad1f49fc3a8212918f1fba71e004d1a0e00f173c82de8a6750e99d6a3655`
- **Bytes:** 2770593
- **Related provenance records:** `assets/conflict-generation-briefs.json`

### asset-assets-soldier-4-svg

- **Label:** Soldier 4 · standalone transparent cutout
- **File:** `assets/soldier-4.svg`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** Built-in image generation, as recorded in the existing asset manifest
- **Source location / method:** lossless SVG viewport wrapper around an embedded original generated PNG quadrant; no runtime sheet canvas
- **Author / brand owner:** Project generation record
- **Retrieved / created:** See associated brief; unknown if absent
- **License / permission status:** Generated project asset; source/reference restrictions are not independently cleared
- **Modifications:** See method; generation tool version/date is unknown unless a related brief explicitly records it.
- **SHA-256:** `150222f91628150fba5c9ffb9100f2c2c699a725a849b0aff31c177a8a849b2f`
- **Bytes:** 2770595
- **Related provenance records:** `assets/conflict-generation-briefs.json`

### asset-assets-soldiers-sheet-png

- **Label:** Four soldier cutouts · 2×2 sprite sheet
- **File:** `assets/soldiers-sheet.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** Built-in image generation, as recorded in the existing asset manifest
- **Source location / method:** generated RGBA sheet; each quadrant is cropped at runtime; per-soldier transforms, recoil and muzzle anchor
- **Author / brand owner:** Project generation record
- **Retrieved / created:** See associated brief; unknown if absent
- **License / permission status:** Generated project asset; source/reference restrictions are not independently cleared
- **Modifications:** See method; generation tool version/date is unknown unless a related brief explicitly records it.
- **SHA-256:** `8d4ef02acaeb72453c0a5f3af2b30b328e1da81c4886ee147f94a446beb54148`
- **Bytes:** 2077786
- **Related provenance records:** `assets/conflict-generation-briefs.json`

### asset-assets-standing-png

- **Label:** Standing foreground pair
- **File:** `assets/standing.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** Built-in image generation, as recorded in the existing asset manifest
- **Source location / method:** generated alpha cutout
- **Author / brand owner:** Project generation record
- **Retrieved / created:** See associated brief; unknown if absent
- **License / permission status:** Generated project asset; source/reference restrictions are not independently cleared
- **Modifications:** See method; generation tool version/date is unknown unless a related brief explicitly records it.
- **SHA-256:** `c03d6039a0d576290e7dfcbd259c29ed3d07a430e31ed9b5f6e840f9a087d801`
- **Bytes:** 1243048

### asset-assets-wisps-png

- **Label:** Wisps
- **File:** `assets/wisps.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** Built-in image generation, as recorded in the existing asset manifest
- **Source location / method:** generated alpha cutout
- **Author / brand owner:** Project generation record
- **Retrieved / created:** See associated brief; unknown if absent
- **License / permission status:** Generated project asset; source/reference restrictions are not independently cleared
- **Modifications:** See method; generation tool version/date is unknown unless a related brief explicitly records it.
- **SHA-256:** `56a6da9fb8c2aa54cb15ba12179ac3bbfd119411480181526b487888ccec6fcf`
- **Bytes:** 1934523

### asset-assets-young-man-v2-png

- **Label:** Young foreground man · alpha cutout
- **File:** `assets/young-man-v2.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** Built-in image generation, as recorded in the existing asset manifest
- **Source location / method:** generated alpha cutout
- **Author / brand owner:** Project generation record
- **Retrieved / created:** See associated brief; unknown if absent
- **License / permission status:** Generated project asset; source/reference restrictions are not independently cleared
- **Modifications:** See method; generation tool version/date is unknown unless a related brief explicitly records it.
- **SHA-256:** `937fd38f7da7afc64c4bbc41231ca36b8abae9aac7f2e156fde795828097b036`
- **Bytes:** 1747621

### asset-assets-young-man-png

- **Label:** Young Man
- **File:** `assets/young-man.png`
- **Usage label:** `generated-recorded`
- **Origin / exact source:** Built-in image generation, as recorded in the existing asset manifest
- **Source location / method:** generated alpha cutout
- **Author / brand owner:** Project generation record
- **Retrieved / created:** See associated brief; unknown if absent
- **License / permission status:** Generated project asset; source/reference restrictions are not independently cleared
- **Modifications:** See method; generation tool version/date is unknown unless a related brief explicitly records it.
- **SHA-256:** `448a63f20626448486272b7b9ce73a982b8e4be97c7b8a44f968558921e1b9af`
- **Bytes:** 1633244

### asset-atmosphere-engine-js

- **Label:** Animated clouds, smoke & fog · path-driven billboards
- **File:** `atmosphere-engine.js`
- **Usage label:** `review-required`
- **Origin / exact source:** Legacy project file; exact origin not documented
- **Source location / method:** seeded procedural billow textures advected along arc-length-sampled paths; not a fluid simulation
- **Author / brand owner:** Unknown
- **Retrieved / created:** Unknown
- **License / permission status:** Unknown; do not automatically reuse outside this task
- **Modifications:** Unknown; file hash preserves current identity.
- **SHA-256:** `c028b03a522e6b63a824b9e4dedf4f390e8fc612d573656b8523b9d4701ba8c4`
- **Bytes:** 2502

### asset-battle-motion-js

- **Label:** Glide & staggered firing · deterministic motion recipe
- **File:** `battle-motion.js`
- **Usage label:** `review-required`
- **Origin / exact source:** Legacy project file; exact origin not documented
- **Source location / method:** seeded event schedule, one/two flashes, cutout recoil and overlapping glide
- **Author / brand owner:** Unknown
- **Retrieved / created:** Unknown
- **License / permission status:** Unknown; do not automatically reuse outside this task
- **Modifications:** Unknown; file hash preserves current identity.
- **SHA-256:** `fbd10dbedbd16351d654b7477e1398fa4e5cf04078f65a23aa5b0427adaf7fcf`
- **Bytes:** 1656

### asset-brand-marks-js

- **Label:** Brand Marks
- **File:** `brand-marks.js`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project source: brand-marks.js
- **Source location / method:** Canvas rendering of the registered official brand paths. Source geometry is copied from the registered SVGs; it is not original brand artwork.
- **Author / brand owner:** Project-authored implementation
- **Retrieved / created:** 2026-10-28
- **License / permission status:** Project-scoped code; no external model license applies. Embedded brand paths retain their brand-reference label.
- **Modifications:** Canvas rendering of the registered official brand paths. Source geometry is copied from the registered SVGs; it is not original brand artwork.
- **SHA-256:** `4c973244ea9577695ece44378392156330276a0b25e08161100d1f0a0410c92a`
- **Bytes:** 1962

### asset-brush-writing-js

- **Label:** Noir Brush / Ink / Chalk · pen-path alphabet
- **File:** `brush-writing.js`
- **Usage label:** `review-required`
- **Origin / exact source:** Legacy project file; exact origin not documented
- **Source location / method:** original procedural single-stroke alphabet; vector pen-path reveal
- **Author / brand owner:** Unknown
- **Retrieved / created:** Unknown
- **License / permission status:** Unknown; do not automatically reuse outside this task
- **Modifications:** Unknown; file hash preserves current identity.
- **SHA-256:** `3057f0cef2b187e05df5c577482f5b60512a70ee4d7722937a8620cd90302090`
- **Bytes:** 4514

### asset-chapter-motion-js

- **Label:** Chapter Motion
- **File:** `chapter-motion.js`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project source: chapter-motion.js
- **Source location / method:** Version 36 chapter defaults, subdued logo/glow values, per-shoe arrival offsets/durations and continuous depth travel. Retains v35 staggered arrivals and slow rotations. Timing is inferred from user references, not measured video tracks.
- **Author / brand owner:** Project-authored implementation
- **Retrieved / created:** 2026-10-28
- **License / permission status:** Project-scoped code; no external model license applies. Embedded brand paths retain their brand-reference label.
- **Modifications:** Version 36 chapter defaults, subdued logo/glow values, per-shoe arrival offsets/durations and continuous depth travel. Retains v35 staggered arrivals and slow rotations. Timing is inferred from user references, not measured video tracks.
- **SHA-256:** `73ce440684eb1cbbe99e4f0e93f63fc3f52727225f6338b67aa1a9bafb4604cf`
- **Bytes:** 6309

### asset-chapter-shoes-js

- **Label:** Chapter Shoes
- **File:** `chapter-shoes.js`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project source: chapter-shoes.js
- **Source location / method:** Version 36 project-authored 3D trainer last with raised heel, shaped forefoot/toe, recessed ankle opening, padded collar, tongue, eyelets, laces, stitched welt and tread blocks. Leather/rubber/fabric lighting; perspective depth drift and blur. Created in code from the user-authorized visual brief, without an external model or texture. Not a scan or an identified branded product.
- **Author / brand owner:** Project-authored implementation
- **Retrieved / created:** 2026-10-28
- **License / permission status:** Project-scoped code; no external model license applies. Embedded brand paths retain their brand-reference label.
- **Modifications:** Version 36 project-authored 3D trainer last with raised heel, shaped forefoot/toe, recessed ankle opening, padded collar, tongue, eyelets, laces, stitched welt and tread blocks. Leather/rubber/fabric lighting; perspective depth drift and blur. Created in code from the user-authorized visual brief, without an external model or texture. Not a scan or an identified branded product.
- **SHA-256:** `9b9dbacf0ee61258ed2690c2b6c643654ab18c466e1ac94333c62e5675d379ce`
- **Bytes:** 6652

### asset-chess-engine-js

- **Label:** Chessboard and pieces · Three.js geometry
- **File:** `chess-engine.js`
- **Usage label:** `review-required`
- **Origin / exact source:** Legacy project file; exact origin not documented
- **Source location / method:** procedural lathed solids, extruded knight/marks, depth-tested scene
- **Author / brand owner:** Unknown
- **Retrieved / created:** Unknown
- **License / permission status:** Unknown; do not automatically reuse outside this task
- **Modifications:** Unknown; file hash preserves current identity.
- **SHA-256:** `17d05f5a735691bda82a2cd5d762e658c9be5109066f26e09908739a7fbf884b`
- **Bytes:** 22746

### asset-city-engine-js

- **Label:** Image-on-3D-plane engine
- **File:** `city-engine.js`
- **Usage label:** `review-required`
- **Origin / exact source:** Legacy project file; exact origin not documented
- **Source location / method:** 2D image or video texture projected onto a perspective plane; not reconstructed buildings
- **Author / brand owner:** Unknown
- **Retrieved / created:** Unknown
- **License / permission status:** Unknown; do not automatically reuse outside this task
- **Modifications:** Unknown; file hash preserves current identity.
- **SHA-256:** `ee59a8e0b4986a12a391ae026d41265837ce65363ecbafa4e887f8e6e9973578`
- **Bytes:** 3801

### asset-depot-chapter-js

- **Label:** Depot Chapter
- **File:** `depot-chapter.js`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project source: depot-chapter.js
- **Source location / method:** Version 36 moving right-side bent neon sweep, depth-ordered arriving shoes, entrance blur/scale and editable text easing. All optical effects are project-authored canvas code; existing registered brand silhouettes are retained.
- **Author / brand owner:** Project-authored implementation
- **Retrieved / created:** 2026-10-28
- **License / permission status:** Project-scoped code; no external model license applies. Embedded brand paths retain their brand-reference label.
- **Modifications:** Version 36 moving right-side bent neon sweep, depth-ordered arriving shoes, entrance blur/scale and editable text easing. All optical effects are project-authored canvas code; existing registered brand silhouettes are retained.
- **SHA-256:** `a9b56eac69ed93da2898d54f5cad2d46c5d5fc9ebbc8a1019e57d8d61a30b8ef`
- **Bytes:** 6082
- **Related provenance records:** `assets/depot-generation-briefs.json`, `assets/depot-generation-briefs-v10.json`, `assets/depot-complete-figure-prompts-v9.json`

### asset-depot-glass-js

- **Label:** Depot Glass
- **File:** `depot-glass.js`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project source: depot-glass.js
- **Source location / method:** Version 36 seeded tiled glass fractures with independently offset softbox/core reflections, local facet shear/refraction and portal-driven specular catches. Existing fall, gravity, gap and fracture controls are retained.
- **Author / brand owner:** Project-authored implementation
- **Retrieved / created:** 2026-10-28
- **License / permission status:** Project-scoped code; no external model license applies. Embedded brand paths retain their brand-reference label.
- **Modifications:** Version 36 seeded tiled glass fractures with independently offset softbox/core reflections, local facet shear/refraction and portal-driven specular catches. Existing fall, gravity, gap and fracture controls are retained.
- **SHA-256:** `b05b183584df0782db0f2ea4b93e45acdfe09c02c211f302cc3a844b70c77e38`
- **Bytes:** 9009
- **Related provenance records:** `assets/depot-generation-briefs.json`, `assets/depot-generation-briefs-v10.json`, `assets/depot-complete-figure-prompts-v9.json`

### asset-depot-portal-js

- **Label:** Depot Portal
- **File:** `depot-portal.js`
- **Usage label:** `project-procedural`
- **Origin / exact source:** Project source: depot-portal.js
- **Source location / method:** Version 36 narrower project-authored beam with three soft light passes, smoothly advecting irregular edges and independent bloom. Earlier edge-on rotation precedes disappearance. No third-party image or SVG was added.
- **Author / brand owner:** Project-authored implementation
- **Retrieved / created:** 2026-10-28
- **License / permission status:** Project-scoped code; no external model license applies. Embedded brand paths retain their brand-reference label.
- **Modifications:** Version 36 narrower project-authored beam with three soft light passes, smoothly advecting irregular edges and independent bloom. Earlier edge-on rotation precedes disappearance. No third-party image or SVG was added.
- **SHA-256:** `cebda0d924b20148068f3d0b4aa8b3f186d626cda114739b05c820f9bdb50a3d`
- **Bytes:** 2367
- **Related provenance records:** `assets/depot-generation-briefs.json`, `assets/depot-generation-briefs-v10.json`, `assets/depot-complete-figure-prompts-v9.json`

### asset-vendor-orbitcontrols-js

- **Label:** Orbitcontrols
- **File:** `vendor/OrbitControls.js`
- **Usage label:** `licensed-source`
- **Origin / exact source:** https://github.com/mrdoob/three.js
- **Source location / method:** Existing vendored Three.js package. Retained source and license.
- **Author / brand owner:** Three.js contributors
- **Retrieved / created:** Original retrieval date unknown
- **License / permission status:** MIT; see vendor/THREE-LICENSE.txt. Exact original download URL/version not recorded in the legacy checkout.
- **Modifications:** Legacy vendored copy; modifications not independently audited.
- **SHA-256:** `6f3052dd8860a60fe6999260d50558ff54609523724c6e374326228e5590cf55`
- **Bytes:** 32146

### asset-vendor-reflector-js

- **Label:** Reflector
- **File:** `vendor/Reflector.js`
- **Usage label:** `licensed-source`
- **Origin / exact source:** https://github.com/mrdoob/three.js
- **Source location / method:** Existing vendored Three.js package. Retained source and license.
- **Author / brand owner:** Three.js contributors
- **Retrieved / created:** Original retrieval date unknown
- **License / permission status:** MIT; see vendor/THREE-LICENSE.txt. Exact original download URL/version not recorded in the legacy checkout.
- **Modifications:** Legacy vendored copy; modifications not independently audited.
- **SHA-256:** `446cba593c612fabf01442b593b6bd69b6a13668ab55866a70579bcb5774ee3e`
- **Bytes:** 7055

### asset-vendor-three-license-txt

- **Label:** Three License
- **File:** `vendor/THREE-LICENSE.txt`
- **Usage label:** `licensed-source`
- **Origin / exact source:** https://github.com/mrdoob/three.js
- **Source location / method:** Existing vendored Three.js package. Retained source and license.
- **Author / brand owner:** Three.js contributors
- **Retrieved / created:** Original retrieval date unknown
- **License / permission status:** MIT; see vendor/THREE-LICENSE.txt. Exact original download URL/version not recorded in the legacy checkout.
- **Modifications:** Legacy vendored copy; modifications not independently audited.
- **SHA-256:** `4c40a1ef62450b857c3b2aaf294936304cd552d965fbcd9d32d4c5bcf4ba4454`
- **Bytes:** 1081

### asset-vendor-transformcontrols-js

- **Label:** Transformcontrols
- **File:** `vendor/TransformControls.js`
- **Usage label:** `licensed-source`
- **Origin / exact source:** https://github.com/mrdoob/three.js
- **Source location / method:** Existing vendored Three.js package. Retained source and license.
- **Author / brand owner:** Three.js contributors
- **Retrieved / created:** Original retrieval date unknown
- **License / permission status:** MIT; see vendor/THREE-LICENSE.txt. Exact original download URL/version not recorded in the legacy checkout.
- **Modifications:** Legacy vendored copy; modifications not independently audited.
- **SHA-256:** `ad26c2fd761370c633bf29d6138c136bb46da730dab269349fc06832c80211b1`
- **Bytes:** 41675

### asset-vendor-three-module-js

- **Label:** Three.Module
- **File:** `vendor/three.module.js`
- **Usage label:** `licensed-source`
- **Origin / exact source:** https://github.com/mrdoob/three.js
- **Source location / method:** Existing vendored Three.js package. Retained source and license.
- **Author / brand owner:** Three.js contributors
- **Retrieved / created:** Original retrieval date unknown
- **License / permission status:** MIT; see vendor/THREE-LICENSE.txt. Exact original download URL/version not recorded in the legacy checkout.
- **Modifications:** Legacy vendored copy; modifications not independently audited.
- **SHA-256:** `ce1fa418de16a19495a9f72495580e3015d7745c296d3ce0485897f902ddedfb`
- **Bytes:** 1314681

## Non-file surfaces

- Font: Arial / system sans-serif, supplied by the user’s platform; no font file is bundled.
- Dust, clouds made from noise, lightning, glass seams and light bloom are procedural code surfaces; texture sprites remain separately registered above.
- Runtime user uploads remain browser-local until explicitly incorporated into source. They are not automatically treated as cleared reusable assets.
