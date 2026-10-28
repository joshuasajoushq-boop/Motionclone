import assert from 'node:assert/strict';
import {chapterState,chapterDefaults as f,defaultShoes,shardFall,chapterFocus} from '../dist/chapter-motion.js';
import {shoePose,rotatePoint,shoeMesh} from '../dist/chapter-shoes.js';
import {paintPortal} from '../dist/depot-portal.js';
assert.equal(chapterState(59.6,f).alpha,0,'Black interval must stay empty');
assert(chapterState(f.depotChapterStart+.8,f).flash>0);assert.equal(chapterState(f.depotChapterStart+f.depotChapterAssemble+.1,f).settle,1);
assert(chapterState(83,f).dim>0);assert.equal(chapterState(92,f).alpha,0);
assert(chapterState(65,f).scale>chapterState(72,f).scale);
assert(chapterState(65,{...f,depotChapterStart:20}).start>=f.depotLogoExitStart+f.depotLogoExitTime+f.depotBlackHold,'Chapter cannot overlap the black interval');
assert.equal(defaultShoes.length,6);assert(defaultShoes[0].size>defaultShoes[2].size*3);assert(defaultShoes.filter(o=>o.start<1).length===2);assert(defaultShoes.at(-1).start>6);assert(chapterFocus(2,0,f)>12);assert(chapterFocus(7,1,f)>chapterFocus(7,0,f)+2);assert(f.depotChapterShoeSpeed<.6);
for(const o of defaultShoes){const a=shoePose(0,o),b=shoePose(1,o);assert(b.yaw>a.yaw);for(const face of shoeMesh(o.style,o.upper,o.accent,o.sole))for(const p of face.p)assert(rotatePoint(p,b).every(Number.isFinite))}
assert(shoePose(1,{...defaultShoes[0],yawSpeed:-20}).yaw<shoePose(0,{...defaultShoes[0],yawSpeed:-20}).yaw);
const shard={id:0,normal:{x:.6,y:.4},delay:0};assert.equal(shardFall(48,f,shard).y,0);const falling={...f,depotGlassBehaviour:'fall',depotShardDetach:1};assert(shardFall(48,falling,shard).y>shardFall(46,falling,shard).y);assert.equal(shardFall(50,falling,shard).alpha,0);
// A zero beam intensity must never paint an opaque light pass.
let alpha=1;const seen=[];const ctx=new Proxy({createRadialGradient:()=>({addColorStop(){}}),fillRect(){seen.push(alpha)},fill(){seen.push(alpha)}},{get:(o,k)=>k==='globalAlpha'?alpha:k in o?o[k]:()=>{},set:(o,k,v)=>{if(k==='globalAlpha')alpha=v;else o[k]=v;return true}});paintPortal(ctx,51,{depotPortalPower:0},{energy:1,growth:1});assert.equal(seen.length,0);
// Canvas exercise catches invalid coordinates through assembly, hold and fade.
function canvas(){const c={width:960,height:540};const check=(...args)=>args.forEach(v=>{if(typeof v==='number')assert(Number.isFinite(v))});const ctx=new Proxy({canvas:c,measureText:s=>({width:s.length*30}),createLinearGradient:()=>({addColorStop(){}}),createRadialGradient:()=>({addColorStop(){}})}, {get:(o,k)=>k in o?o[k]:check,set:(o,k,v)=>(o[k]=v,true)});c.getContext=()=>ctx;return c}
globalThis.document={createElement:()=>canvas()};globalThis.Path2D=class{};
const {paintChapter,paintLogoExit}=await import('../dist/depot-chapter.js');for(const age of [58,58.8,59.5,60.2,60.5,61.3,63,65,73,77,80,84]){paintLogoExit(canvas().getContext('2d'),age,f);paintChapter(canvas().getContext('2d'),age,{...f,depotChapterShoes:defaultShoes})}
console.log('Chapter passed: black separation, staggered assembly, continuous 3D tumbling, reversible speeds, retreat, environment-first dimming, fade, detached shards and finite rendering.');
