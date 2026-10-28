import {depotEase} from './depot-motion.js?v=motion-v36';
export function portalState(t,f={}){const start=f.depotPortalStart??50.5,grow=Math.max(.1,f.depotPortalGrow??1.15),hold=Math.max(0,f.depotPortalHold??.35),close=Math.max(.1,f.depotPortalClose??1.25),peak=start+grow,clear=peak+hold+close,growth=depotEase((t-start)/grow),release=depotEase((t-peak-hold)/close),vanishAt=f.depotVanishStart??51.1,vanish=depotEase((t-vanishAt)/Math.max(.1,f.depotVanishTime??1.05));return {start,peak,clear,growth,release,energy:growth*(1-release),vanish,opacity:1-depotEase((vanish-.6)/.4),scale:1-vanish*.92,yaw:depotEase(vanish/.68)*(f.depotPortalYaw??34),shatter:depotEase((t-(f.depotShatterStart??44))/Math.max(.1,f.depotShatterTime??3)),dark:depotEase((t-(f.depotLateDarkStart??45))/Math.max(.1,f.depotLateDarkTime??5)),titleEarliest:Math.max(clear,vanishAt+(f.depotVanishTime??1.05))+(f.depotPortalTitleGap??.3)}}
// Slow, deterministic edge advection; no frame-random flicker.
export function portalEdge(y,t,width,x=500){const v=y/540,flow=t*.48;return {center:x+Math.sin(v*7.4+flow)*18+Math.sin(v*21-flow*.7)*6,half:width*(.32+.085*Math.sin(v*12.5+flow*.65)+.045*Math.cos(v*28-flow))}}
export function paintPortal(c,t,f,p){
 if(p.energy<.001||(f.depotPortalPower??1.25)<=0)return;
 const power=p.energy*(f.depotPortalPower??1.25),width=(f.depotPortalWidth??285)*p.growth,x=f.depotDividerX??500,bloomPower=Math.max(0,f.depotPortalBloom??.65);
 c.save();c.globalCompositeOperation='screen';
 const bloom=c.createRadialGradient(x,255,0,x,255,560);bloom.addColorStop(0,`rgba(255,254,247,${Math.min(1,power*.4*bloomPower)})`);bloom.addColorStop(.38,`rgba(205,218,255,${Math.min(1,power*.14*bloomPower)})`);bloom.addColorStop(1,'#e5edff00');c.fillStyle=bloom;c.fillRect(0,0,960,540);
 for(let pass=0;pass<3;pass++){
  const w=width*(pass===0?1.4:pass===1?1:.36);c.save();c.globalAlpha=Math.min(1,power*(pass===0?.34:pass===1?.85:.98));c.filter=`blur(${pass===0?28:pass===1?11:4}px)`;c.shadowColor='#fffdf7';c.shadowBlur=pass===0?38:16;c.fillStyle=pass===0?'#becfff':'#fffefa';c.beginPath();
  for(let i=0;i<=54;i++){const y=i*10,edge=portalEdge(y,t,w,x);i?c.lineTo(edge.center-edge.half,y):c.moveTo(edge.center-edge.half,y)}
  for(let i=54;i>=0;i--){const y=i*10,edge=portalEdge(y,t,w,x);c.lineTo(edge.center+edge.half,y)}c.closePath();c.fill();c.restore();
 }
 c.restore();
}
