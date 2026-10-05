/* Mission Control (dock icon, F3, Ctrl+Up, bottom-left hot corner). */
I.g='<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>';
var mcOn=0;
function mission(){var ks=Object.keys(W).filter(function(k){return !W[k].classList.contains("min")});
 if(mcOn){mcOn=0;desk.classList.remove("mc");ks.forEach(function(k){W[k].style.transition="transform .5s cubic-bezier(.2,.9,.3,1)";W[k].style.transform=""});setTimeout(function(){ks.forEach(function(k){if(W[k])W[k].style.transition=""})},540);return}
 if(!ks.length)return;mcOn=1;desk.classList.add("mc");
 var n=ks.length,dw=desk.clientWidth,dh=desk.clientHeight,c=Math.ceil(Math.sqrt(n*dw/dh)),r=Math.ceil(n/c),cw=dw/c,chh=(dh-90)/r;
 ks.forEach(function(k,i){var w=W[k],ww=w.offsetWidth,hh=w.offsetHeight,sc=Math.min(.9*cw/ww,.86*chh/hh,.8),tx=(i%c)*cw+cw/2-(w.offsetLeft+ww/2),ty=Math.floor(i/c)*chh+chh/2+12-(w.offsetTop+hh/2);w.dataset.k=k;w.style.transition="transform .55s cubic-bezier(.2,.9,.3,1) "+i*.03+"s";w.style.transform="translate("+tx+"px,"+ty+"px) scale("+sc+")"})}
desk.addEventListener("click",function(e){if(!mcOn)return;e.stopPropagation();var w=e.target.closest(".win");if(w)focus(w.dataset.k);mission()},true);
var mb2=document.createElement("button");
mb2.className="dk";
mb2.dataset.n="Mission Control";
mb2.setAttribute("aria-label","Mission Control");
mb2.innerHTML='<div class="tile" style="background:linear-gradient(#7b8cff,#2a2f94)">'+ic("g")+'</div>';
mb2.onclick=mission;
dock.insertBefore(mb2,dock.children[1]);
var hc=document.createElement("div"),ht;
hc.id="hc";
document.body.appendChild(hc);
hc.onmouseenter=function(){ht=setTimeout(mission,450)};
hc.onmouseleave=function(){clearTimeout(ht)};
document.addEventListener("keydown",function(e){if(e.key==="F3"||(e.ctrlKey&&e.key==="ArrowUp")){e.preventDefault();mission()}else if(e.key==="Escape"&&mcOn)mission()});
