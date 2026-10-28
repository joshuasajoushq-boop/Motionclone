import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import {chapterDefaults,defaultShoes} from '../dist/chapter-motion.js';
import {shoePose} from '../dist/chapter-shoes.js';
import {portalState,portalEdge} from '../dist/depot-portal.js';
const code=fs.readFileSync(new URL('../dist/chapter-director.js',import.meta.url),'utf8');
function load(fx){
 const memory=new Map(['depot-chapter-v34','depot-chapter-v35','city-brand-placement-v35-final'].map(k=>[k,'1']));
 const context={fx,continuationDefaults:{},structuredClone,localStorage:{getItem:k=>memory.get(k),setItem:(k,v)=>memory.set(k,v)},saveEffects(){},syncDuration(){},renderDepotControls(){},assetSave(){},directorGroups:{glass:{fields:[]}},panels:{depot:{main:[[]]},city:{more:[]}}};
 vm.createContext(context);vm.runInContext(code,context);return {context,memory};
}
const stored=structuredClone({...chapterDefaults,depotChapterGlow:37,depotChapterLogoSize:223,depotChapterLogoOpacity:.31,depotChapterAmbient:.4,depotChapterShoes:defaultShoes});
stored.depotChapterShoes[0].x=185;stored.depotChapterShoes[0].keys=[{at:2,x:10},{at:7,x:300}];stored.depotChapterShoes[0].depthTravel=0;
const custom=load(stored);assert.equal(stored.depotChapterGlow,37);assert.equal(stored.depotChapterLogoSize,223);assert.equal(stored.depotChapterLogoOpacity,.31);assert.equal(stored.depotChapterAmbient,.4);assert.equal(stored.depotChapterShoes[0].x,185);assert.equal(stored.depotChapterShoes[0].depthTravel,0);assert.equal(stored.depotChapterShoes[0].keys.length,2);
assert(custom.memory.has('depot-chapter-before-v36'));const saved=JSON.stringify(stored);const repeat=vm.createContext({...custom.context,fx:structuredClone(stored)});vm.runInContext(code,repeat);assert.equal(JSON.stringify(repeat.fx),saved);
const prior=structuredClone({...chapterDefaults,depotChapterGlow:22,depotChapterLogoSize:340,depotChapterLogoOpacity:.16,depotChapterAmbient:.25,depotChapterShoes:defaultShoes});for(const shoe of prior.depotChapterShoes)delete shoe.depthTravel;
load(prior);assert.equal(prior.depotChapterGlow,14);assert.equal(prior.depotChapterLogoSize,290);assert.equal(prior.depotChapterShoes[0].depthTravel,defaultShoes[0].depthTravel);
// Perspective breathing stays continuous, deterministic, and can be disabled.
const shoe=defaultShoes[1];assert.notEqual(shoePose(0,shoe).size,shoePose(6,shoe).size);assert.equal(shoePose(0,{...shoe,depthTravel:0}).size,shoe.size);
for(let t=0;t<25;t+=.1)assert(Math.abs(shoePose(t+.01,shoe).size-shoePose(t,shoe).size)<.1);
// Beam contour advects smoothly and the frame turns before its opacity disappears.
for(let y=0;y<=540;y+=10){const a=portalEdge(y,51.4,285),b=portalEdge(y,51.41,285);assert(a.half>0);assert(Math.abs(a.center-b.center)<1)}
assert(portalState(51.8).yaw>32);assert(portalState(51.8).opacity>0);assert.equal(portalState(52.2).opacity,0);
console.log('Chapter migration passed: editor loads, custom settings and keys survive, matching defaults update, depth is continuous, and the portal turns before disappearing.');
