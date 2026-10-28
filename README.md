# Regaarder Motion Atelier · version 36

Continues the complete version 35 export from source commit 3b4636d250d5262c5fd6544f389d4514eee12c30. The v35 export is the authoritative baseline; the previously stale GitHub source is not used to replace it.

## Run locally

No package installation or build step is required. From this folder run:

```sh
python -m http.server 8000 --directory dist
```

Open http://localhost:8000 in a browser. Use Depot → Watch shoe chapter for the latest scene. Settings and user uploads are browser-local and are not included in this source export.

## Contents

- dist/: runnable site and bundled assets
- docs/ASSET-REGISTER.md: asset origins, exact known source URLs, usage labels and hashes
- scripts/: validation and asset-register maintenance
- AGENTS.md: instructions for future asset additions

Run individual checks with Node, for example `node scripts/check-chapter-motion.mjs` and `node scripts/check-asset-register.mjs`. Rebuild provenance with `python scripts/build-asset-register.py` after changing assets.

GitHub destination: https://github.com/joshuasajoushq-boop/Motionclone

Version 36 refines the procedural trainer geometry and depth motion, chapter light sweep and restrained branding, glass optics and portal absorption. Basic shoe controls stay visible; arrival/depth and tumble/drift controls are collapsed. See `docs/DEPOT-CONTINUATION.md` for migration and review details.

The existing Express server and package files are retained when synchronizing to GitHub. The static site still runs without a build or package installation using the command above.

The previously supplied hosted Site ID returns “Sites project not found” to the current connection. This revision must not be described as deployed to that Site without a successful publication result.
