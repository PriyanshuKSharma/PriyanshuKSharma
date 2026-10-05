/* System features: notifications, boot sequence, lock screen, shut down / restart, clock, theme toggle, wallpapers. */
var dnd=0,WP=[["#cad8ea","#e8d9ea","#b9d3e6"],["#f3c6b4","#f2dfb0","#e2a6c6"],["#1b2a4a","#4a2b6b","#0f4c5c"]],wi=0;
function nextWall(){wi=(wi+1)%3;["--bg1","--bg2","--bg3"].forEach(function(v,j){document.documentElement.style.setProperty(v,WP[wi][j])})}
function notify(t,m){if(dnd)return;var n=document.createElement("div");n.className="nt";n.innerHTML="<b>"+t+"</b><br>"+m;document.body.appendChild(n);n.animate([{transform:"translateX(120%)"},{transform:"none"}],{duration:520,easing:"cubic-bezier(.2,.9,.3,1)"});n.onclick=function(){n.remove()};setTimeout(function(){n.animate([{opacity:1},{opacity:0,transform:"translateX(50%)"}],{duration:350,fill:"forwards"}).onfinish=function(){n.remove()}},5500)}
var BH='<div class="av" style="width:88px;height:88px;margin-bottom:6px"></div><div style="font:600 20px -apple-system,system-ui,sans-serif">Priyanshu Kumar Sharma</div><div class="bt"></div><div class="pb"><i></i></div><div class="bp">0%</div>';
function boot(){var b=document.getElementById("boot");if(!b){b=document.createElement("div");b.id="boot";document.body.appendChild(b)}b.className="";b.innerHTML=BH;
 var t=b.querySelector(".bt"),pc=b.querySelector(".bp"),n=0;
 ["> INITIALIZING KERNEL...","> LOADING MODULES...","> VERIFYING SECURITY PROTOCOLS...","> ACCESSING MAINFRAME"].forEach(function(x,i){setTimeout(function(){t.insertAdjacentHTML("beforeend","<div>"+x+"</div>")},250+i*650)});
 var iv=setInterval(function(){n=Math.min(100,n+4);pc.textContent=n+"%";if(n>=100)clearInterval(iv)},100);
 setTimeout(function(){b.classList.add("off");open("about");if(innerWidth>900)setTimeout(function(){open("terminal")},450);cnt();setTimeout(function(){notify("Welcome to Priyanshu’s Mac","Press Ctrl/⌘ K, drag a window to a screen edge to snap it, or rest the cursor in the bottom-left corner for Mission Control.")},1500)},2900);setTimeout(function(){b.remove()},3500)}
var lse=document.createElement("div");
lse.id="ls";
lse.innerHTML='<div id="lt" style="font-size:76px;font-weight:600;letter-spacing:-.02em"></div><div id="ld" style="font-size:20px;margin-bottom:40px"></div><div class="av">PS</div><div style="font-weight:600;font-size:16px">Priyanshu</div><div style="opacity:.7">Click anywhere to unlock</div>';
document.body.appendChild(lse);
function lock(){var d=new Date();lse.querySelector("#lt").textContent=d.toLocaleTimeString("en-US",{hour:"numeric",minute:"2-digit",hour12:false});lse.querySelector("#ld").textContent=d.toLocaleDateString("en-US",{weekday:"long",month:"long",day:"numeric"});lse.classList.add("on")}
lse.onclick=function(){lse.animate([{opacity:1},{opacity:0}],{duration:350}).onfinish=function(){lse.classList.remove("on")}};
var sde=document.createElement("div");
sde.id="sd";
sde.textContent="Click to power on";
document.body.appendChild(sde);
function shut(){closeAll();sde.classList.add("on");sde.animate([{opacity:0},{opacity:1}],{duration:700})}
sde.onclick=function(){sde.classList.remove("on");boot()};
function restart(){closeAll();boot()}
function tick(){document.getElementById("clock").textContent=new Date().toLocaleString("en-US",{weekday:"short",month:"short",day:"numeric",hour:"numeric",minute:"2-digit"})}
tick();
setInterval(tick,20000);
document.getElementById("theme").onclick=function(){var r=document.documentElement,d=r.dataset.theme==="dark"||(!r.dataset.theme&&matchMedia("(prefers-color-scheme:dark)").matches);r.dataset.theme=d?"light":"dark"};
