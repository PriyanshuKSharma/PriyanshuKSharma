/* Control Center: dark mode, focus, brightness slider. */
var ccp=document.createElement("div");
ccp.id="ccp";
ccp.innerHTML='<div class="cg"><button data-t="d">◐<span>Dark Mode</span></button><button data-t="f">🌙<span>Focus</span></button><button data-t="w" class="on">📶<span>Wi-Fi</span></button></div><label>Display<input type="range" id="brs" min="30" max="100" value="100"></label><label>Sound<input type="range" min="0" max="100" value="60"></label>';
document.body.appendChild(ccp);
var brt=document.createElement("div");
brt.id="brt";
document.body.appendChild(brt);
ccp.querySelector("#brs").oninput=function(){brt.style.opacity=(100-this.value)/100*.75};
ccp.querySelector(".cg").onclick=function(e){var b=e.target.closest("button");if(!b)return;b.classList.toggle("on");if(b.dataset.t==="d")document.getElementById("theme").click();if(b.dataset.t==="f")dnd=b.classList.contains("on")};
document.getElementById("ccb").onclick=function(){ccp.classList.toggle("on")};
