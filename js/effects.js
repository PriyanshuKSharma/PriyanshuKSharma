/* Animated particle wallpaper, matrix mode and the About typewriter. */
var cv=document.createElement("canvas"),cx=cv.getContext&&cv.getContext("2d"),mode=0,mp={x:-999,y:-999},P=[],cl=[],dpr=Math.min(2,window.devicePixelRatio||1),still=matchMedia("(prefers-reduced-motion:reduce)").matches;
document.body.insertBefore(cv,document.getElementById("wall").nextSibling);
function rs(){if(!cx)return;cv.width=innerWidth*dpr;cv.height=innerHeight*dpr;cv.style.cssText="position:fixed;inset:0;width:100%;height:100%;pointer-events:none";cx.setTransform(dpr,0,0,dpr,0,0);P=[];for(var i=0,n=Math.min(80,Math.floor(innerWidth*innerHeight/15000));i<n;i++)P.push({x:Math.random()*innerWidth,y:Math.random()*innerHeight,vx:(Math.random()-.5)*.45,vy:(Math.random()-.5)*.45});cl=[];for(i=0;i<innerWidth/16;i++)cl.push(Math.random()*innerHeight/16)}
function setMatrix(on){mode=on?1:0;if(cx)cx.clearRect(0,0,innerWidth,innerHeight)}
function frame(){if(!cx)return;var W0=innerWidth,H0=innerHeight;
 if(mode){cx.fillStyle="rgba(3,5,14,.14)";cx.fillRect(0,0,W0,H0);cx.fillStyle="#22d3ee";cx.font="14px monospace";cl.forEach(function(y,i){cx.fillText(String.fromCharCode(12448+Math.random()*96),i*16,y*16);cl[i]=y*16>H0&&Math.random()>.975?0:y+.4})}
 else{cx.clearRect(0,0,W0,H0);P.forEach(function(a,i){a.x+=a.vx;a.y+=a.vy;if(a.x<0||a.x>W0)a.vx*=-1;if(a.y<0||a.y>H0)a.vy*=-1;cx.fillStyle="#7dd3fc99";cx.beginPath();cx.arc(a.x,a.y,1.6,0,6.3);cx.fill();for(var j=i+1;j<P.length;j++){var b=P[j],d=Math.hypot(a.x-b.x,a.y-b.y);if(d<130){cx.strokeStyle="rgba(125,211,252,"+(.22*(1-d/130))+")";cx.beginPath();cx.moveTo(a.x,a.y);cx.lineTo(b.x,b.y);cx.stroke()}}var m=Math.hypot(a.x-mp.x,a.y-mp.y);if(m<170){cx.strokeStyle="rgba(167,139,250,"+(.55*(1-m/170))+")";cx.beginPath();cx.moveTo(a.x,a.y);cx.lineTo(mp.x,mp.y);cx.stroke()}})}
 if(!still)requestAnimationFrame(frame)}
rs();
frame();
addEventListener("resize",rs);
document.addEventListener("pointermove",function(e){mp.x=e.clientX;mp.y=e.clientY});
function typer(el){if(!el)return;var T=["secure cloud systems","serverless benchmarks","multi-cloud control planes","hybrid quantum-cloud research","CI/CD that ships"],i=0,j=0,d=0;(function tk(){if(!el.isConnected)return;var t=T[i],dl=d?28:65;j+=d?-1:1;el.textContent=t.slice(0,j);if(!d&&j===t.length){d=1;dl=1400}else if(d&&j===0){d=0;i=(i+1)%T.length;dl=300}setTimeout(tk,dl)})()}
