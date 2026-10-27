import assert from 'node:assert/strict';
import {noirState,noirTextPose} from '../dist/noir-scene.js';
const f={noirFadeStart:3,noirFadeDuration:4,noirBlackHold:1,noirReveal:10,noirStartScale:1.5,noirEndScale:.82,noirShiftStart:9,noirShiftTime:4,noirShift:110,noirBackDepth:.18,noirExposure:100};
const layer={x:540,y:150,depth:.45,rotation:-3,anchor:'people'},reference=[];
for(const pose of [{x:0,y:0,scale:1,rotation:0},{x:30,y:-20,scale:1.2,rotation:12}])for(const duration of [3,10,22]){const cfg={...f,noirReveal:duration};for(const fraction of [.3,.31,.45,.6,.75,1,1.4]){const s=noirState(8+duration*fraction,cfg),p=noirTextPose(layer,s,cfg,pose),cx=480+s.shift*cfg.noirShift+pose.x,cy=60+s.q*92+s.shift*8+pose.y,k=s.foreground*pose.scale,a=pose.rotation*Math.PI/180,dx=(p.x-cx)/k,dy=(p.y-cy)/k;reference.push({x:Math.cos(a)*dx+Math.sin(a)*dy,y:-Math.sin(a)*dx+Math.cos(a)*dy,scale:p.scale/k});}}
for(const p of reference){assert(Math.abs(p.x-(540-480)/.82)<1e-9);assert(Math.abs(p.y-(150-152)/.82)<1e-9);assert(Math.abs(p.scale-(1+.45*.12)/.82)<1e-9)}
const scene=noirTextPose({...layer,anchor:'scene'},noirState(16,f),f);assert.equal(scene.x,540);console.log('Secrets anchor passed: constant text/head position and size through early writing, full reveal, sideways motion, short/long parallax and transformed cutouts.');
