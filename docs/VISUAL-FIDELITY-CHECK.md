# Visual fidelity review

This review is required for every new scene or substantial motion change. Repeat it at scene milestones and after changes to timing, camera, lighting, assets or compositing that could affect adjacent scenes. Numerical checks alone do not establish visual fidelity.

## Reference and approval workflow

1. Prefer the original video file at native speed. A downloadable Drive file is equally useful once its bytes are accessible. Keep its filename, frame rate, resolution and time base with the analysis.
2. Extract timestamped frames covering entrance, intermediate motion, assembly, hold, transition and exit. Inspect native-speed playback as well. Do not select only an attractive still.
3. Present a compact frame sequence to Joshua. Describe composition, camera movement, object motion, focus/blur, lighting, depth, transitions and exits. Label direct observations separately from inferred techniques and unresolved details.
4. Propose the next bounded implementation change. Wait for Joshua's validation of the reference interpretation and proposed effects before implementing it. This approval applies to future visual changes; it does not retroactively assert approval of v36.
5. Implement the validated change in the existing template. Preserve controls and user settings; document migrations. Register every added or modified distributed asset.
6. Compare implementation and reference at equivalent stages and native playback speed. Record discrepancies and approximations. Check adjacent scenes and run relevant regression checks.
7. Report the result, remaining gaps and exact commit/deployment status. Do not call it frame-perfect or finished without supporting evidence.

If only screenshots are available, use them for composition and visible state. Their spacing or filenames do not establish motion speed or duration. Extracted video frames should retain their actual source timestamps.

## Review checklist

- [ ] Reference identity, source and timestamps recorded.
- [ ] Entrance, intermediate motion, assembly, hold and exit reviewed.
- [ ] Camera framing, perspective, depth and object overlap compared.
- [ ] Focus hold, focus transition, peripheral blur and motion softness compared.
- [ ] Light direction, flash/sweep timing, reflections, bloom and darkening compared.
- [ ] Text content, scale, spacing, letter entrances and easing compared.
- [ ] Logos use registered geometry; uncertain shoe branding remains unlabelled.
- [ ] Continuity, complete disappearance and black intervals checked.
- [ ] Environment dims before the final composition fade where required.
- [ ] Controls stay usable within the viewport; advanced controls stay collapsed.
- [ ] Custom settings and keyframes survive; migrations are documented.
- [ ] Asset provenance and relevant automated checks completed.
- [ ] Joshua's reference interpretation approval recorded.
- [ ] Remaining visual discrepancies and publication status recorded.

## Current review: v36 · 2026-10-28

Implementation commit: 5fc6dd89f185388eb869c5c6c03ad0bf9e5d18d3.

References: the uploaded Motion-Atelier-References-v35 pack, containing reference screenshots and annotations. Original video and measured source timing have not been supplied for this review.

Completed inspection:

- Cargo/shoulder staging at depot 12 and 17 seconds: cargo tops appeared above shoulders; existing transforms were retained.
- Revised glass at 45.5 seconds and dark hold at 49.5 seconds.
- Portal absorption at 51.8 seconds and frame absence at 52.3 seconds.
- Black interval at 60.3 seconds.
- Chapter entrance at 62.1 seconds, intermediate assembly/right light at 64.6 seconds, assembled/hold states at 67 and 71 seconds.
- Environment dim at 83.5 seconds, late fade at 86 seconds and black exit at 88 seconds.
- Chapter playback at 1x and the collapsed advanced shoe controls.
- All 19 check scripts passed; the register covers 73 items with updated procedural asset hashes.

These times belong to the implementation timeline, not the source video.

Changes reviewed: shaped procedural trainer geometry, per-shoe arrival/depth controls, subtler chapter branding and glow, moving right light, independent glass reflections, narrower irregular portal and earlier edge-on rotation.

Remaining gaps: source-video timing and a direct synchronized comparison are pending. Shoes remain illustrative procedural meshes; exact branded product fidelity and right-side branding are unverified. No frame-rate benchmark or frame-perfect match is claimed. Joshua's visual acceptance of v36 is pending.

Publication: GitHub main was verified at the implementation commit above. The earlier Sites project returned "Sites project not found"; no deployment to that URL was confirmed. Vercel deployment setup was subsequently discussed; deployment success has not yet been verified.

## Future review entry template

- Version / date / commit:
- Reference file and source timestamps:
- Frames shown for validation:
- Observed effects:
- Inferred techniques and uncertainties:
- Proposed bounded changes:
- Joshua's validation / requested corrections:
- Implementation timestamps reviewed:
- Discrepancies remaining:
- Settings migrations and asset-register changes:
- Checks performed:
- Commit and confirmed deployment status:
