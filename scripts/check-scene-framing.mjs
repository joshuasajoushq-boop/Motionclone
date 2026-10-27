import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import vm from 'node:vm';
import {rearPanelPlacement} from '../dist/scene-framing.js';
import {sampleCamera,easing} from '../dist/chess-motion.js';
const fx={panelX:4,panelY:4,panelZ:-7,chessMove:5,chessSecond:10,chessMoveTime:3,chessSpin:70,chessPull:10,chessTilt:42,chessOrbit:32,chessDistance:19.25,orbitStart:12,orbitTime:25,lowerTime:10,orbitTurns:.55,lowAngle:12,closeStart:35,closeTime:13,closeDistance:5,parallaxTime:12,cameraEase:'accelerate',dollyStart:5,dollyTime:3.5,dollyBack:15,dollyFront:24,dollyDrop:35,depth:24,cameraZoom:1.8,cameraRise:100};
for(let age=0;age<=48;age+=.1){const camera=sampleCamera(age,fx).position,p=rearPanelPlacement(camera,[0,0,0],fx);const cameraSide=(camera[0]-p.position[0])*p.front[0]+(camera[2]-p.position[2])*p.front[2];assert(cameraSide>0,'Camera must remain on panel front');assert(p.position[0]*camera[0]+p.position[2]*camera[2]<0,'Panel must stay behind board')}
assert(rearPanelPlacement([0,10,0],[0,0,0],fx).position.every(Number.isFinite));
const ease=(v,type)=>type==='accelerate'?(v=Math.max(0,Math.min(1,v)),v<.5?v*.8:.4+.6*(1-(1-(v-.5)/.5)**2)):easing(v,type);
const peopleCamera=vm.runInNewContext(readFileSync(new URL('../dist/epilogue.js',import.meta.url),'utf8').split('\n')[0]+';peopleCameraRig',{motionEase:ease});
const a=peopleCamera(5,fx),b=peopleCamera(8.5,fx);
assert(b.personScale>a.personScale,'Foreground pushes closer');assert(b.backScale<a.backScale,'Background recedes during push');
const head=75+b.rise+(56-75)*b.personScale;assert(head<400,'Faces stay visible through second move');const late=peopleCamera(14,fx);assert(75+late.rise+(56-75)*late.personScale>540,'People finally leave the frame');
console.log('Scene framing checks passed: panel remains behind board; foreground and background move oppositely; faces remain visible before exiting.');
