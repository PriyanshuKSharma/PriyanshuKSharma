/* Desktop widgets: "~/now" card, animated stats, cursor spotlight on the wallpaper. */
var wg=document.createElement("div");
wg.id="wg";
wg.innerHTML='<b>~/now</b><br><span class="g">●</span> building nebula<br>&nbsp;&nbsp;multi-cloud control plane<br><span class="g">●</span> researching<br>&nbsp;&nbsp;quantum-cloud · zero trust<br><span class="g">●</span> open to collaborate<br><span style="opacity:.6">Ctrl/⌘ K to search</span>';
desk.appendChild(wg);
var w2=document.createElement("div");
w2.id="wg2";
w2.innerHTML=[["9.91","CGPA",9.91,2,""],["50+","repos",50,0,"+"],["4","papers",4,0,""],["9","hack sprints",9,0,""]].map(function(x){return '<div><b data-t="'+x[2]+'" data-d="'+x[3]+'" data-s="'+x[4]+'">0</b>'+x[1]+'</div>'}).join("");
desk.appendChild(w2);
function cnt(){[].forEach.call(w2.querySelectorAll("b"),function(b){var t=+b.dataset.t,d=+b.dataset.d,s0=performance.now();(function f(n){var k=Math.min(1,(n-s0)/1400);b.textContent=(t*(1-Math.pow(1-k,3))).toFixed(d)+b.dataset.s;if(k<1)requestAnimationFrame(f)})(s0)})}
var wl=document.getElementById("wall"),raf=0;
document.addEventListener("pointermove",function(e){if(raf)return;raf=requestAnimationFrame(function(){raf=0;wl.style.setProperty("--mx",e.clientX+"px");wl.style.setProperty("--my",e.clientY+"px")})});
