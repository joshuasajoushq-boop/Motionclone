import assert from 'node:assert/strict';
import {cityCamera,earthEdge} from '../dist/city-motion.js';
const fx={cityDescent:6,cityFlyTime:20,cityStartU:.5,cityStartV:.55,cityEndU:.76,cityEndV:.63,cityStartElevation:35,cityEndElevation:82,cityStartDistance:31,cityEndDistance:10,cityHeading:0,cityRoll:-8,cityEndRoll:3,citySpinStart:20,citySpinTime:12,cityTurns:.45,cityLogoStart:21,cityLogoFade:4,cityCatStart:29,cityCatTime:5};
const start=cityCamera(0,fx),end=cityCamera(38,fx);assert.equal(start.logo,0);assert.equal(start.cat,0);assert.equal(end.logo,1);assert.equal(end.cat,1);assert(Math.abs(end.target[0]-7.8)<.001);assert(Math.abs(end.target[2]-3.9)<.001);assert(end.position[1]<start.position[1]);
for(let t=0;t<=38;t+=.1){const c=cityCamera(t,fx);assert([...c.position,...c.target,c.roll].every(Number.isFinite));assert(c.position[1]>0);assert(c.logo>=0&&c.logo<=1);assert(c.cat>=0&&c.cat<=1)}
assert(earthEdge(500,2,1)<earthEdge(500,0,0));assert.deepEqual(cityCamera(34,fx),cityCamera(38,fx),'Final camera and partial-logo pose must hold for continuation');console.log('City motion checks passed: descent, flyover, focus, roll, logo timing, and held continuation.');
