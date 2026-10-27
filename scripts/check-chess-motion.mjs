import assert from 'node:assert/strict';
import {sampleTrack,defaultTracks,sampleCamera,pose} from '../dist/chess-motion.js';
const fx={chessMove:5,chessSecond:10,chessMoveTime:3,chessSpin:70,chessPull:10,chessTilt:42,chessOrbit:32,chessDistance:19.25,orbitStart:12,orbitTime:25,orbitTurns:.78,lowAngle:12,closeStart:35,closeTime:13,closeDistance:5};
const tracks=defaultTracks(fx);
assert(sampleTrack(tracks['b-knight-6'],19).position[1]>1.8,'Knight must lift');
assert.equal(sampleTrack(tracks['b-knight-6'],24).position[1],0,'Knight must land');
assert.equal(sampleTrack(tracks['b-pawn-3'],31).visible,false,'Captured pawn must disappear');
assert(sampleTrack(tracks['b-bishop-5'],48).position[1]>2.9,'Final logo piece must rise');
assert.equal(sampleTrack({enabled:false,keys:[]},8,pose([1,2,3])).position[1],2);
const custom={keys:[{time:0,...pose([0,0,0]),ease:'linear'},{time:2,...pose([4,2,0],[360,720,0]),ease:'linear'}],offset:1,speed:2};
assert.deepEqual(sampleTrack(custom,1.5).position,[2,1,0]);
assert.deepEqual(sampleTrack(custom,1.5).rotation,[180,360,0]);
for(let time=0;time<=48;time+=.25){const camera=sampleCamera(time,fx);assert(camera.position.every(Number.isFinite));assert(camera.target.every(Number.isFinite));assert(camera.position[1]>camera.target[1],'Camera must stay above board');for(const track of Object.values(tracks)){const p=sampleTrack(track,time);assert([...p.position,...p.rotation,...p.scale].every(Number.isFinite))}}
const customCamera=sampleCamera(1,{...fx,chessCameraKeys:[{time:0,position:[0,1,2],target:[0,0,0],fov:30},{time:2,position:[2,3,4],target:[2,0,0],fov:50,ease:'linear'}]});assert.deepEqual(customCamera.position,[1,2,3]);assert.equal(customCamera.fov,40);
console.log('Chess choreography checks passed: lifts, landings, capture, turns, retiming and camera path.');
