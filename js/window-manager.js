/* Windows: split-view layout, desktop icons, dock buttons, open/close/minimize/zoom, drag with tilt, genie animation. */
function split(b,a){b.style.cssText="padding:0;display:flex;overflow:hidden";b.innerHTML='<nav class="sb"></nav><section class="dt"></section>';var nv=b.firstChild,dt=b.lastChild,f=-1,IOS=document.documentElement.classList.contains("ios");
 a.nav.forEach(function(n,i){var d=document.createElement("div");if(n[0]==="#"){d.className="sh";d.textContent=n[1]}else{d.className="si";d.innerHTML="<b>"+n[0]+"</b><span>"+n[1]+"</span>";d.onclick=function(){sel(i);if(IOS)b.classList.add("sp-detail")};if(f<0)f=i}nv.appendChild(d)});
 function sel(i){[].forEach.call(nv.children,function(c,j){c.classList.toggle("on",j===i)});dt.innerHTML=(IOS?'<button class="btn o sbk">‹ Back</button>':"")+a.nav[i][2];if(IOS)dt.querySelector(".sbk").onclick=function(){b.classList.remove("sp-detail")};dt.scrollTop=0}
 if(!IOS)sel(f)}
var order=["about","exp","projects","skills","certs","research","github","learning","resume","terminal","contact"],W={},z=10,n=0,desk=document.getElementById("desk"),dock=document.getElementById("dock");
order.forEach(function(k,i){
 var a=A[k];
 var b=document.createElement("button");b.className="dk";b.dataset.n=a.t;b.setAttribute("aria-label",a.t);
 b.innerHTML='<div class="tile" style="background:'+a.c+'">'+a.e+'</div>';
 b.onclick=function(){open(k)};dock.appendChild(b);a.dk=b;
 b.oncontextmenu=function(e){e.preventDefault();var on=PIN.indexOf(k)>-1,run=!!W[k];menu([[a.t,0],["-"],[run?"Show":"Open",function(){open(k)}],[on?"Remove from Desktop":"Pin to Desktop",function(){pin(k,!on)}],["-"],["Quit",run?function(){W[k].querySelector(".l1").click()}:0]],e.clientX,e.clientY);dd.style.top=Math.max(34,e.clientY-dd.offsetHeight-18)+"px"};
});
var PIN=(function(){try{var s=JSON.parse(localStorage.getItem("pins"));if(Array.isArray(s))return s.filter(function(k){return A[k]})}catch(e){}return (typeof DEFAULT_PINNED!=="undefined"?DEFAULT_PINNED:[]).filter(function(k){return A[k]})})();
function savePins(){try{localStorage.setItem("pins",JSON.stringify(PIN))}catch(e){}}
function renderDesk(){[].forEach.call(desk.querySelectorAll(".di"),function(x){x.remove()});
 PIN.forEach(function(k,i){var a=A[k],d=document.createElement("div");d.className="di";d.tabIndex=0;d.style.top=(14+(i%6)*94)+"px";d.style.right=(18+Math.floor(i/6)*92)+"px";
  d.innerHTML='<div class="tile" style="background:'+a.c+'">'+a.e+'</div><span>'+a.t.split(" &")[0]+'</span>';
  d.ondblclick=function(){open(k)};d.onkeydown=function(e){if(e.key==="Enter")open(k)};
  d.oncontextmenu=function(e){e.preventDefault();e.stopPropagation();menu([["Open",function(){open(k)}],["Remove from Desktop",function(){pin(k,0)}]],e.clientX,e.clientY)};
  if(matchMedia("(pointer:coarse)").matches)d.onclick=function(){open(k)};
  d.style.animation="pop .3s cubic-bezier(.2,.9,.3,1.15)";desk.appendChild(d)})}
function pin(k,on){var i=PIN.indexOf(k);if(on&&i<0)PIN.push(k);else if(!on&&i>-1)PIN.splice(i,1);savePins();renderDesk();if(typeof notify==="function")notify(on?"Pinned to Desktop":"Removed from Desktop",A[k].t)}
renderDesk();
function focus(k){
 z++;Object.keys(W).forEach(function(j){W[j].classList.remove("front")});
 if(W[k]){W[k].style.zIndex=z;W[k].classList.add("front");document.getElementById("appname").textContent=A[k].t}
}
function open(k){
 var a=A[k],w=W[k];
 if(w){if(w.classList.contains("min")){w.classList.remove("min");w.animate([{transform:gz(w,a),opacity:.15},{transform:"none",opacity:1}],{duration:400,easing:"cubic-bezier(.2,.9,.3,1)"})}focus(k);return}
 w=document.createElement("div");w.className="win"+(a.term?" tw":"");w.setAttribute("role","dialog");w.setAttribute("aria-label",a.t);
 var vw=desk.clientWidth,vh=desk.clientHeight,ww=Math.min(a.w,vw-16),hh=Math.min(a.h,vh-100);
 w.style.width=ww+"px";w.style.height=hh+"px";
 w.style.left=Math.max(8,Math.min(vw-ww-8,60+n*34))+"px";w.style.top=Math.max(8,Math.min(vh-hh-90,24+n*30))+"px";n=(n+1)%7;
 w.innerHTML='<div class="tb"><div class="lights"><button class="l1" aria-label="Close">×</button><button class="l2" aria-label="Minimize">−</button><button class="l3" aria-label="Zoom">+</button></div><h2>'+a.t+'</h2></div><div class="body"></div>';
 var body=w.querySelector(".body");
 function paint(t){
  body.innerHTML=(a.tabs?'<div class="tabs"><button data-t="work" class="'+(t==="work"?"on":"")+'">Work</button><button data-t="edu" class="'+(t==="edu"?"on":"")+'">Education</button></div>':"")+a.r(t);
  if(a.tabs)body.querySelectorAll(".tabs button").forEach(function(b){b.onclick=function(){paint(b.dataset.t)}});
 }
 if(a.nav)split(body,a);else paint("work");if(a.init)a.init(body);
 w.querySelector(".l1").onclick=function(e){e.stopPropagation();w.style.pointerEvents="none";w.animate([{transform:"none",opacity:1},{transform:"scale(.93)",opacity:0}],{duration:170,fill:"forwards"}).onfinish=function(){w.remove()};delete W[k];a.dk.classList.remove("run");var ks=Object.keys(W);document.getElementById("appname").textContent=ks.length?A[ks[ks.length-1]].t:"Finder";if(ks.length)focus(ks[ks.length-1])};
 w.querySelector(".l2").onclick=function(e){e.stopPropagation();w.classList.remove("front");var an=w.animate([{transform:"none",opacity:1},{transform:gz(w,a),opacity:.15}],{duration:460,easing:"cubic-bezier(.6,0,.9,.4)",fill:"forwards"});an.onfinish=function(){w.classList.add("min");an.cancel();var v=Object.keys(W).filter(function(j){return !W[j].classList.contains("min")});if(v.length)focus(v[v.length-1]);else document.getElementById("appname").textContent="Finder"}};
 function zoom(){var r=w.getBoundingClientRect();w.classList.toggle("max");var q=w.getBoundingClientRect();w.animate([{transform:"translate("+(r.left-q.left)+"px,"+(r.top-q.top)+"px) scale("+r.width/q.width+","+r.height/q.height+")",transformOrigin:"0 0"},{transform:"none",transformOrigin:"0 0"}],{duration:380,easing:"cubic-bezier(.2,.9,.3,1)"})}
 w.querySelector(".l3").onclick=function(e){e.stopPropagation();zoom()};
 var tb=w.querySelector(".tb");
 tb.ondblclick=zoom;
 tb.onpointerdown=function(e){
  if(e.target.closest(".lights")||w.classList.contains("max"))return;
  var sx=e.clientX-w.offsetLeft,sy=e.clientY-w.offsetTop;tb.setPointerCapture(e.pointerId);tb.style.cursor="grabbing";
  var lx=e.clientX,sn=0;w.style.transition="transform .12s";
  tb.onpointermove=function(m){w.style.left=Math.max(-ww+90,Math.min(desk.clientWidth-90,m.clientX-sx))+"px";w.style.top=Math.max(0,Math.min(desk.clientHeight-40,m.clientY-sy))+"px";var dx=m.clientX-lx;lx=m.clientX;w.style.transform="rotate("+Math.max(-2.5,Math.min(2.5,dx*.35))+"deg) scale(1.012)";clearTimeout(w._t);w._t=setTimeout(function(){w.style.transform="rotate(0deg) scale(1.012)"},90);sn=m.clientX<8?"l":m.clientX>innerWidth-8?"r":m.clientY<34?"m":0;snp(sn)};
  tb.onpointerup=function(){tb.onpointermove=null;tb.style.cursor="";clearTimeout(w._t);w.style.transition="transform .4s cubic-bezier(.2,1.5,.4,1)";w.style.transform="";setTimeout(function(){w.style.transition=""},420);snp(0);if(sn)snapTo(w,sn)};
 };
 w.addEventListener("pointerdown",function(){focus(k)});
 W[k]=w;desk.appendChild(w);var ic=a.dk.firstChild;if(ic&&ic.animate)ic.animate([{transform:"translateY(0)"},{transform:"translateY(-24px)"},{transform:"translateY(0)"},{transform:"translateY(-12px)"},{transform:"translateY(0)"}],{duration:1000,easing:"ease-out"});a.dk.classList.add("run");focus(k);
}
function gz(w,a){var r=w.getBoundingClientRect(),d=a.dk.getBoundingClientRect();return "translate("+(d.left+d.width/2-r.left-r.width/2)+"px,"+(d.top+d.height/2-r.top-r.height/2)+"px) scale(.08,.02)"}
function fk(){return Object.keys(W).filter(function(f){return W[f].classList.contains("front")})[0]}
function bt(c){var k=fk();if(k)W[k].querySelector(c).click()}
function closeAll(){Object.keys(W).forEach(function(k){W[k].remove();A[k].dk.classList.remove("run");delete W[k]});document.getElementById("appname").textContent="Finder"}
