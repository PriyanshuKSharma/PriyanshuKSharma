/* Menu bar dropdowns, Apple menu, About This Mac, desktop right-click menu. */
A.mac={t:"About This Mac",e:"",c:"",w:360,h:340,dk:document.createElement("div"),r:function(){return '<div style="text-align:center"><div class="av" style="margin:0 auto 10px">PS</div><h3>Priyanshu’s Mac</h3><div class="mute">Portfolio OS 26 · Cloud Edition</div></div><div class="row"><div class="top"><span class="mute">Chip</span><span>Cloud + Security + Research</span></div><div class="top"><span class="mute">Memory</span><span>7 projects, 1 paper</span></div><div class="top"><span class="mute">Startup disk</span><span>IIT Patna, M.Tech</span></div><div class="top"><span class="mute">Serial</span><span>PKS-9.9-2026</span></div></div>'}};
var dd=document.createElement("div");
dd.id="dd";
document.body.appendChild(dd);
function hide(){dd.classList.remove("on");[].forEach.call(document.querySelectorAll(".mb.on"),function(b){b.classList.remove("on")})}
function menu(it,x,y){dd.innerHTML=it.map(function(m,j){return m[0]==="-"?"<hr>":'<div data-j="'+j+'" class="'+(m[1]?"":"dis")+'"><span>'+m[0]+'</span></div>'}).join("");dd.style.left=Math.max(4,Math.min(x,innerWidth-236))+"px";dd.style.top=y+"px";dd.classList.add("on");dd.onclick=function(e){var d=e.target.closest("div");if(d&&!d.classList.contains("dis")){hide();it[+d.dataset.j][1]()}}}
document.addEventListener("pointerdown",function(e){if(!e.target.closest("#dd,.mb"))hide();if(!e.target.closest("#ccp,#ccb"))ccp.classList.remove("on")},true);
var MK={apple:function(){return [["About This Mac",function(){open("mac")}],["-"],["Lock Screen",lock],["Restart…",restart],["Shut Down…",shut]]},
 app:function(){var k=fk(),n=k?A[k].t:"Finder";return [["About "+n,function(){open(k||"about")}],["-"],["Hide "+n,k?function(){bt(".l2")}:0],["Quit "+n,k?function(){bt(".l1")}:0]]},
 file:function(){return [["New Terminal Window",function(){open("terminal")}],["Close Window",fk()?function(){bt(".l1")}:0]]},
 edit:function(){return [["Undo",0],["Redo",0],["-"],["Cut",0],["Copy",0],["Paste",0]]},
 window:function(){return [["Minimize",fk()?function(){bt(".l2")}:0],["Zoom",fk()?function(){bt(".l3")}:0],["-"]].concat(Object.keys(W).map(function(k){return [A[k].t,function(){open(k)}]}))}};
[].forEach.call(document.querySelectorAll("#menubar .mb"),function(b){b.onclick=function(){var was=b.classList.contains("on");hide();if(was)return;b.classList.add("on");var r=b.getBoundingClientRect();menu(MK[b.dataset.m](),r.left,r.bottom+2)};b.onmouseenter=function(){if(dd.classList.contains("on")&&!b.classList.contains("on"))b.click()}});
desk.oncontextmenu=function(e){if(e.target!==desk)return;e.preventDefault();menu([["Open Terminal",function(){open("terminal")}],["Change Wallpaper…",nextWall],["Toggle Matrix Mode",function(){setMatrix(!mode)}],["Mission Control",mission],["-"],["About This Mac",function(){open("mac")}]],e.clientX,e.clientY)};
