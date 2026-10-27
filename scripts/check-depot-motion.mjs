import assert from 'node:assert/strict';import fs from 'node:fs';import vm from 'node:vm';
import {depotCamera,projectDepotObject,framePoint} from '../dist/depot-camera.js';
import {depotEnvelope,depotPhase} from '../dist/depot-motion.js';
const code=fs.readFileSync('dist/depot.js','utf8'),box={};vm.runInNewContext(code.slice(code.indexOf('const depotDefaults='),code.indexOf(';Object.assign'))+';this.f=depotDefaults',box);const f=box.f,people=f.depotObjects.filter(o=>o.type==='person'),near=f.depotObjects.find(o=>o.id==='near-0'),front=f.depotObjects.find(o=>o.id==='front-0');
assert.equal(people.length,2);assert(people.every(o=>depotEnvelope(8,o)===1));assert(people.every(o=>!projectDepotObject(o,depotCamera(8,f)).visible));assert(people.every(o=>projectDepotObject(o,depotCamera(13,f)).visible));
for(let t=8;t<30;t+=.1){const a=depotCamera(t,f),b=depotCamera(t+.1,f);assert(b.z<=a.z);assert(Math.abs(b.z-a.z)<12);for(const o of f.depotObjects){const p=projectDepotObject(o,a);if(p.visible)assert([p.x,p.y,p.scale].every(Number.isFinite))}}
const top=(o,t)=>{const p=projectDepotObject(o,depotCamera(t,f));return (p.y-o.height*p.scale/2)/540};assert(top(near,8)>.55&&top(near,8)<.75);assert(top(near,13)>.2&&top(near,13)<.45);assert(top(front,30)>.4&&top(front,30)<.6);
const head=(o,t)=>{const p=projectDepotObject(o,depotCamera(t,f));return p.y+(.03-.5)*o.height*p.scale};assert(head(people[1],13)<0);assert(head(people[1],30)>0);assert(f.depotObjects.every(o=>o.cameraProjected));
const s={scale:.5,angle:0,tilt:1},L=framePoint(-500,0,s,f),R=framePoint(500,0,s,f);assert(Math.abs(480-L.x)!==Math.abs(R.x-480));const phases=depotPhase({battle:100,images:126,end:136,noir:80},f);assert.equal(phases.depot,118);assert.equal(phases.images,176);assert.equal(phases.noir,80);
console.log('Depot camera passed: shared continuous retreat, cropped close cargo, initial vertical descent, opaque shoulder reveal, physical foreground entry and perspective frame projection.');

const still=projectDepotObject({...near,depthStrength:0},depotCamera(8,f));assert.equal(still.scale,1);assert.equal(still.x,near.x);
const leftFigure=people.find(o=>o.id==='man-left'),rightFigure=people.find(o=>o.id==='man-right'),cam=depotCamera(12,f),leftInner=projectDepotObject({...leftFigure,x:leftFigure.x+leftFigure.width*.23},cam),rightInner=projectDepotObject({...rightFigure,x:rightFigure.x-rightFigure.width*.23},cam);assert(rightInner.x-leftInner.x>150,'Shoulder reveal must preserve the warehouse aisle');

const shoulder=people.map(o=>{const p=projectDepotObject(o,depotCamera(13,f));return p.y+(.2-.5)*o.height*p.scale});assert(shoulder.every(y=>y>top(near,13)*540+30),"Cargo tops must sit above relaxed shoulders during the reveal");
