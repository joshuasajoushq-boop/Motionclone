import assert from 'node:assert/strict';
import fs from 'node:fs';import vm from 'node:vm';
import {finaleState,cloudDensity} from '../dist/depot-finale.js';
const code=fs.readFileSync('dist/depot.js','utf8'),box={};vm.runInNewContext(code.slice(code.indexOf('const depotDefaults='),code.indexOf(';Object.assign'))+';this.f=depotDefaults',box);const f=box.f;
assert.equal(finaleState(f.depotFrameStart,f).q,0);assert.equal(finaleState(f.depotCrackStart,f).crack,0);assert.equal(finaleState(f.depotCrackStart+f.depotCrackTime,f).crack,1);assert(Math.abs(finaleState(58,f).scale-f.depotFrameEndScale)<1e-9);assert(finaleState(58,f).angle<0);assert(finaleState(58,{...f,depotFrameRotation:14}).angle>0);assert(finaleState(58,{...f,depotFrameTilt:-35}).skew>0);
for(let t=32;t<58;t+=.1){const a=finaleState(t,f),b=finaleState(t+.1,f);assert(b.scale<=a.scale+1e-8);assert(b.crack>=a.crack)}
console.log('Depot finale passed: continuous frame pullback, progressive cracks, independently reversible rotation and perspective tilt.');

assert.equal(finaleState(32,f).brightness,1);assert(finaleState(58,f).brightness>.2&&finaleState(58,f).brightness<.6);for(let t=32;t<58;t+=.2)assert(finaleState(t+.2,f).brightness<=finaleState(t,f).brightness);const samples=Array.from({length:400},(_,i)=>cloudDensity(i%20/6,Math.floor(i/20)/6,112));assert(samples.every(n=>Number.isFinite(n)&&n>=0&&n<=1));assert(Math.max(...samples)-Math.min(...samples)>.3);assert.equal(cloudDensity(.42,.73,112),cloudDensity(.42,.73,112));assert.notEqual(cloudDensity(.42,.73,112),cloudDensity(.42,.73,113));

assert.equal(finaleState(f.depotCrackStart,f).dark,0);assert(finaleState(58,f).dark===1);
// Exercise the glass renderer with numeric validation to catch axis-aligned ray failures.
const originalDocument=globalThis.document,originalImage=globalThis.Image;
function surface(){const canvas={width:960,height:540,sceneAssets:[]};let ctx;const check=(...args)=>{for(const x of args)if(typeof x==='number')assert(Number.isFinite(x),'Canvas received a non-finite coordinate')};ctx=new Proxy({canvas,measureText:s=>({width:s.length*35}),createImageData:(w,h)=>({data:new Uint8ClampedArray(w*h*4)}),getTransform:()=>({a:1,b:0,c:0,d:1,e:0,f:0}),createLinearGradient:(...a)=>{assert.equal(a.length,4);check(...a);return {addColorStop(){}}},createRadialGradient:(...a)=>{check(...a);return {addColorStop(){}}}}, {get:(o,k)=>k in o?o[k]:check,set:(o,k,v)=>(o[k]=v,true)});canvas.getContext=()=>ctx;return canvas}
globalThis.document={createElement:()=>surface()};globalThis.Image=class{naturalWidth=2048;naturalHeight=683;};try{const {createDepotFinale}=await import('../dist/depot-finale.js');const renderer=createDepotFinale();for(const time of [32,40,44,46.6,55])renderer.paint(surface().getContext('2d'),time,f,surface());}finally{globalThis.document=originalDocument;globalThis.Image=originalImage}
console.log('Reflective glass renderer passed: finite fracture coordinates and perspective transforms at every milestone.');

const {fractureLayout}=await import('../dist/depot-glass.js');const rays=fractureLayout();assert.equal(rays.length,12);assert(rays.every(r=>r.points.length===4&&r.points.every(p=>Number.isFinite(p.x)&&Number.isFinite(p.y))));assert(new Set(rays.map(r=>r.delay)).size>8);
