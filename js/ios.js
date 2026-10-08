/* iPhone mode: on screens 640px wide or less the desktop becomes an iOS home screen (status bar, app grid, widgets, dock, home indicator, full-screen apps). */
(function(){
 var R=document.documentElement,mq=matchMedia("(max-width:640px)"),DOCK=["about","projects","learning","contact"],rd=renderDesk;
 var st=document.createElement("div");st.id="ios-st";
 st.innerHTML='<span id="ios-clock"></span><span class="isl"><svg viewBox="0 0 18 12" width="18" height="12" fill="currentColor"><rect y="8" width="3" height="4" rx="1"/><rect x="5" y="5.5" width="3" height="6.5" rx="1"/><rect x="10" y="3" width="3" height="9" rx="1"/><rect x="15" width="3" height="12" rx="1"/></svg><svg viewBox="0 0 16 12" width="16" height="12" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"><path d="M1 4.2a10 10 0 0 1 14 0M3.6 7a6.3 6.3 0 0 1 8.8 0M6.2 9.8a2.6 2.6 0 0 1 3.6 0"/></svg><svg viewBox="0 0 26 12" width="26" height="12"><rect x=".5" y=".5" width="22" height="11" rx="3.5" fill="none" stroke="currentColor" opacity=".45"/><rect x="2" y="2" width="19" height="8" rx="2" fill="currentColor"/><rect x="24" y="4" width="2" height="4" rx="1" fill="currentColor" opacity=".5"/></svg></span>';
 document.body.appendChild(st);
 var hi=document.createElement("div");hi.id="hi";hi.onclick=function(){bt(".l1")};document.body.appendChild(hi);
 function icons(){[].forEach.call(desk.querySelectorAll(".di"),function(x){x.remove()});
  order.concat(["mac"]).forEach(function(k){var a=A[k],d=document.createElement("div");d.className="di";d.tabIndex=0;d.innerHTML='<div class="tile" style="background:'+a.c+'">'+a.e+'</div><span>'+(k==="mac"?"Settings":a.t.split(" &")[0])+'</span>';d.onclick=function(){open(k)};d.onkeydown=function(e){if(e.key==="Enter")open(k)};desk.appendChild(d)})}
 renderDesk=function(){if(R.classList.contains("ios"))icons();else rd()};
 function clock(){document.getElementById("ios-clock").textContent=new Date().toLocaleTimeString("en-US",{hour:"numeric",minute:"2-digit"}).replace(/\s?[AP]M/i,"")}
 function apply(){var on=mq.matches;R.classList.toggle("ios",on);A.mac.t=on?"About This iPhone":"About This Mac";
  var keep=DOCK.map(function(k){return A[k].dk});[].forEach.call(dock.children,function(d){d.hidden=on&&keep.indexOf(d)<0});renderDesk()}
 apply();clock();setInterval(clock,20000);
 if(mq.addEventListener)mq.addEventListener("change",apply);else if(mq.addListener)mq.addListener(apply);
 new MutationObserver(function(){R.classList.toggle("app-open",!!desk.querySelector(".win:not(.min)"))}).observe(desk,{childList:true,subtree:true,attributes:true,attributeFilter:["class"]});
})();
