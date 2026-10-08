/* Launchpad overlay and its dock icon. */
var lpe=document.createElement("div");
lpe.id="lp";
lpe.innerHTML=order.map(function(k){return '<div class="li" data-k="'+k+'"><div class="tile" style="background:'+A[k].c+'">'+A[k].e+'</div>'+A[k].t.split(" &")[0]+'</div>'}).join("");
document.body.appendChild(lpe);
lpe.onclick=function(e){lpe.classList.remove("on");var i=e.target.closest(".li");if(i)open(i.dataset.k)};
var lb=document.createElement("button");
lb.className="dk";
lb.dataset.n="Launchpad";
lb.setAttribute("aria-label","Launchpad");
lb.innerHTML='<div class="tile" style="background:#d5d8e0">'+LPART+'</div>';
lb.onclick=function(){lpe.classList.toggle("on")};
dock.insertBefore(lb,dock.firstChild);
var ab=document.getElementById("appsbtn");
if(ab)ab.onclick=function(){lpe.classList.toggle("on")};
document.addEventListener("keydown",function(e){if(e.key==="Escape")lpe.classList.remove("on")});
