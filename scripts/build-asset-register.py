"""Rebuild the human-readable asset register from actual files and known provenance.
Unknown provenance stays explicit. Do not infer licenses from file formats or availability.
"""
from pathlib import Path
import hashlib,json,re
root=Path(__file__).resolve().parents[1]
manifest=json.loads((root/'dist/asset-manifest.json').read_text())
known={a['src']:a for a in manifest['assets']}
web={
'assets/puma-cat.svg':dict(label='PUMA leaping cat',source='https://about.puma.com',locator='HTML header__logo > inline SVG, native 54 × 42 coordinate system',owner='PUMA',changes='Preserved path; viewBox added to standalone file. Runtime changes tint, alpha, scale and blur; no silhouette redraw.'),
'assets/puma-lockup.svg':dict(label='PUMA combined cat and wordmark',source='https://about.puma.com',locator='HTML footer__logo > inline SVG, viewBox 0 0 100 49.541',owner='PUMA',changes='Preserved geometry; fill made white for compositing.'),
'assets/adidas-bars.svg':dict(label='adidas official three-bar mark',source='https://www.adidas-group.com/en/public/icons/icons.svg',locator='symbol#logo, viewBox 0 0 300 189. Discovery page: https://www.adidas-group.com/en/ (base href /en/)',owner='adidas',changes='Extracted the three original paths into a standalone SVG; white fill. Replaces the previous hand-built bars.'),
'assets/adidas-wordmark.svg':dict(label='adidas official wordmark',source='https://www.adidas-group.com/en/public/adidas-logo-white.svg',locator='Image referenced by the official corporate homepage header',owner='adidas',changes='Removed non-SVG className attribute; original paths and group transform preserved.'),
'assets/real-fire.mp4':dict(label='Fire on Black Background',source='https://www.pexels.com/video/fire-on-black-background-11977692/',locator='Existing project credit: assets/real-fire-credit.txt',owner='Artur Szczubelek / Pexels',changes='Trimmed and resized for compositing; recorded download 2026-10-27.',license='https://www.pexels.com/license/')}
procedural={
'brand-marks.js':'Canvas rendering of the registered official brand paths. Source geometry is copied from the registered SVGs; it is not original brand artwork.',
'chapter-shoes.js':'Version 36 project-authored 3D trainer last with raised heel, shaped forefoot/toe, recessed ankle opening, padded collar, tongue, eyelets, laces, stitched welt and tread blocks. Leather/rubber/fabric lighting; perspective depth drift and blur. Created in code from the user-authorized visual brief, without an external model or texture. Not a scan or an identified branded product.',
'chapter-motion.js':'Version 36 chapter defaults, subdued logo/glow values, per-shoe arrival offsets/durations and continuous depth travel. Retains v35 staggered arrivals and slow rotations. Timing is inferred from user references, not measured video tracks.',
'depot-chapter.js':'Version 36 moving right-side bent neon sweep, depth-ordered arriving shoes, entrance blur/scale and editable text easing. All optical effects are project-authored canvas code; existing registered brand silhouettes are retained.',
'depot-glass.js':'Version 36 seeded tiled glass fractures with independently offset softbox/core reflections, local facet shear/refraction and portal-driven specular catches. Existing fall, gravity, gap and fracture controls are retained.',
'depot-portal.js':'Version 36 narrower project-authored beam with three soft light passes, smoothly advecting irregular edges and independent bloom. Earlier edge-on rotation precedes disappearance. No third-party image or SVG was added.'}
paths=sorted({str(p.relative_to(root/'dist')) for folder in ['assets','vendor'] for p in (root/'dist'/folder).rglob('*') if p.is_file()}|set(known)|set(procedural))
lines=['# Asset register','', 'Updated: 2026-10-28 · Regaarder Motion Atelier · version 36','',
'This is the central register for current and future assets. Stable IDs, exact local paths and SHA-256 hashes identify the actual item. Source verification and reuse permission are separate fields. An online SVG is not automatically unrestricted. No unknown source, model, prompt or license is invented.','',
'## Labels for the future AI harness','',
'| Label | Selection rule |','|---|---|',
'| `brand-reference` | Use only when representing the named brand in the template. Preserve silhouette/proportions. Review new contexts. No broad license grant has been verified. |',
'| `project-procedural` | Reuse the project code and exposed parameters in this template. Do not describe illustrative geometry as a scanned or verified product. |',
'| `generated-recorded` | Project manifest records AI generation. Use as an illustration, never as archival evidence. Check prompt/reference records before reuse elsewhere. |',
'| `user-reference` | User-provided source. Permission beyond this task is unverified. Do not automatically reuse in unrelated outputs. |',
'| `licensed-source` | Inspect the recorded license URL and conditions for the intended use. Credit and modification history stay attached. |',
'| `review-required` | Source or permission is incomplete. Do not automatically select for new generated outputs until reviewed. |',
'| `metadata` | Documentation or prompt record, not a scene visual. |','',
'## Required workflow','',
'1. Before adding or replacing an asset, record exact origin URL or generation/reference provenance in asset-manifest.json or this generator’s provenance map.','2. Record author/owner when known, retrieval date, license URL or unknown status, transformations, usage label and scene purpose. Never infer clearance from a familiar logo or file extension.','3. Run `python scripts/build-asset-register.py`; commit the Markdown and manifest together with the asset.','4. Run `node scripts/check-asset-register.mjs`. Missing files, hashes or entries fail validation. A newly discovered legacy item defaults to review-required.','5. Keep superseded files labelled instead of silently representing them as current. User uploads need the same fields when incorporated into distributed source.','',
'## Assets','']
records=[]
for path in paths:
 p=root/'dist'/path
 if not p.exists():continue
 meta=known.get(path,{})
 label=meta.get('label') or p.stem.replace('-',' ').title()
 method=meta.get('method','')
 entry={'id':'asset-'+re.sub('[^a-z0-9]+','-',path.lower()).strip('-'),'path':path,'sha256':hashlib.sha256(p.read_bytes()).hexdigest(),'bytes':p.stat().st_size}
 if path in web:
  w=web[path];label=w['label'];kind='licensed-source' if 'license' in w else 'brand-reference';origin=w['source'];license=w.get('license','Not specified by the downloaded corporate asset. No broad redistribution or trademark clearance is asserted.');detail=w['locator'];owner=w['owner'];changes=w['changes'];date='2026-10-27 (existing credit)' if path.endswith('.mp4') else '2026-10-28'
 elif path.startswith('vendor/'):
  kind='licensed-source';origin='https://github.com/mrdoob/three.js';license='MIT; see vendor/THREE-LICENSE.txt. Exact original download URL/version not recorded in the legacy checkout.';detail='Existing vendored Three.js package. Retained source and license.';owner='Three.js contributors';changes='Legacy vendored copy; modifications not independently audited.';date='Original retrieval date unknown'
 elif path in procedural:
  kind='project-procedural';origin='Project source: '+path;license='Project-scoped code; no external model license applies. Embedded brand paths retain their brand-reference label.';detail=procedural[path];owner='Project-authored implementation';changes=detail;date='2026-10-28'
 elif 'user-' in method or 'user-provided' in method:
  kind='user-reference';origin='User attachment; original public URL not recorded';license='Unknown beyond the user-authorized template task';detail=method;owner='Not independently established';changes='See manifest method and related depot brief files.';date='Original attachment date not reliably recorded'
 elif p.suffix.lower() in ['.txt','.json','.md']:
  kind='metadata';origin='Existing project documentation';license='Contains provenance and prompts; not a scene asset';detail=method or 'Legacy project metadata';owner='Project records';changes='Read the file for the exact prompt, source or credit where available.';date='Original creation date varies; see file contents'
 elif 'generated' in method.lower() or 'RGBA' in method:
  kind='generated-recorded';origin='Built-in image generation, as recorded in the existing asset manifest';license='Generated project asset; source/reference restrictions are not independently cleared';detail=method;owner='Project generation record';changes='See method; generation tool version/date is unknown unless a related brief explicitly records it.';date='See associated brief; unknown if absent'
 else:
  kind='review-required';origin='Legacy project file; exact origin not documented';license='Unknown; do not automatically reuse outside this task';detail=method or 'No reliable acquisition record';owner='Unknown';changes='Unknown; file hash preserves current identity.';date='Unknown'
 entry.update(label=label,usageLabel=kind,source=origin,license=license)
 records.append(entry)
 related=[x for x in ['assets/conflict-generation-briefs.json','assets/depot-generation-briefs.json','assets/depot-generation-briefs-v10.json','assets/depot-complete-figure-prompts-v9.json','assets/city-aerial-v1-credit.txt'] if ('depot' in path and 'depot' in x) or ('soldier' in path and 'conflict' in x) or ('city-aerial' in path and 'city-aerial' in x)]
 lines += ['### '+entry['id'],'',f'- **Label:** {label}',f'- **File:** `{path}`',f'- **Usage label:** `{kind}`',f'- **Origin / exact source:** {origin}',f'- **Source location / method:** {detail}',f'- **Author / brand owner:** {owner}',f'- **Retrieved / created:** {date}',f'- **License / permission status:** {license}',f'- **Modifications:** {changes}',f'- **SHA-256:** `{entry["sha256"]}`',f'- **Bytes:** {entry["bytes"]}']
 if related:lines+=['- **Related provenance records:** '+', '.join('`'+r+'`' for r in related)]
 lines+=['']
lines+=['## Non-file surfaces','', '- Font: Arial / system sans-serif, supplied by the user’s platform; no font file is bundled.','- Dust, clouds made from noise, lightning, glass seams and light bloom are procedural code surfaces; texture sprites remain separately registered above.','- Runtime user uploads remain browser-local until explicitly incorporated into source. They are not automatically treated as cleared reusable assets.','']
text='\n'.join(lines)
(root/'docs/ASSET-REGISTER.md').write_text(text)
(root/'dist/ASSET-REGISTER.md').write_text(text)
(root/'dist/asset-register.json').write_text(json.dumps({'schemaVersion':1,'updated':'2026-10-28','assets':records},indent=2)+'\n')
print(f'Registered {len(records)} assets, including all current asset and vendor files.')
