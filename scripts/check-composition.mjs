import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
const code=fs.readFileSync('dist/continuation.js','utf8'),defaultsCode=code.slice(code.indexOf('const continuationDefaults='),code.indexOf('\nlet fx='));const context={};vm.runInNewContext(defaultsCode+';this.defaults=continuationDefaults',context);const f=context.defaults;
for(const reveal of [3,10,22])for(const l of f.noirTexts){const factor=reveal/10;assert(l.start*factor<reveal,`${l.id} starts during parallax`);assert((l.start+l.duration)*factor<=reveal,`${l.id} completes during parallax`)}
assert(f.noirTexts.find(l=>l.id==='corruption').whiteStart<10);
const manifest=JSON.parse(fs.readFileSync('dist/asset-manifest.json')),ids=new Set();for(const a of manifest.assets){assert(!ids.has(a.id),'stable unique asset IDs');ids.add(a.id);if(a.src&&!a.src.startsWith('http'))assert(fs.existsSync('dist/'+a.src),a.src)}
const semantic=JSON.parse(fs.readFileSync('dist/semantic-context.json'));for(const shot of semantic.shots){assert(shot.localEnd>shot.localStart);for(const id of shot.assets)assert(ids.has(id),`known semantic asset ${id}`)}for(const a of semantic.assets){assert(ids.has(a.assetId));assert(a.promptStatus);if(a.promptStatus==='exact submitted prompt')assert(a.generationPrompt.length>100)}
const html=fs.readFileSync('dist/index.html','utf8').replace(/\?v=[^"]+/g,'');for(const [before,after]of [['surface-reveal.js','city.js'],['asset-workbench.js','composition-core.js'],['composition-core.js','story-context.js']])assert(html.indexOf('src="'+before+'"')<html.indexOf('src="'+after+'"'));
console.log('Composition checks passed: all words overlap parallax at short/default/long durations; source assets and semantic references resolve; module order is valid.');
