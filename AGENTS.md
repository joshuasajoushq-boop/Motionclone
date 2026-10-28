# Motion Atelier asset provenance

When adding, replacing or modifying a distributed visual, model, SVG, video, texture or vendor asset, update its exact origin and usage label in `dist/asset-manifest.json` or `scripts/build-asset-register.py`. Preserve exact web URLs, owner/author when known, retrieval date, modifications, and license status. Do not invent missing provenance or infer unrestricted use from online availability.

Run `python scripts/build-asset-register.py` and `node scripts/check-asset-register.mjs`. Commit `docs/ASSET-REGISTER.md`, its distributed copy and `dist/asset-register.json` with the asset. Unknown legacy sources remain `review-required`; user references are not automatically reusable elsewhere. Official brand silhouettes must use the registered paths consistently across scenes.
