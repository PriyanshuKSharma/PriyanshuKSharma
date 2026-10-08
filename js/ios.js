/* Mobile mode: keeps the Apple menu and full menubar controls accessible at the top,
   renders all apps on the desktop grid, enables touch-scrolling dock, and handles full-screen responsive windows. */
(function(){
 var R=document.documentElement,mq=matchMedia("(max-width:640px)"),rd=renderDesk;
 var hi=document.createElement("div");hi.id="hi";hi.title="Home";hi.onclick=function(){bt(".l1")};document.body.appendChild(hi);
 function icons(){
   [].forEach.call(desk.querySelectorAll(".di"),function(x){x.remove()});
   order.concat(["mac"]).forEach(function(k){
     var a=A[k],d=document.createElement("div");
     d.className="di";
     d.tabIndex=0;
     d.innerHTML='<div class="tile" style="background:'+a.c+'">'+a.e+'</div><span>'+(k==="mac"?"Settings":a.t.split(" &")[0])+'</span>';
     d.onclick=function(){open(k)};
     d.onkeydown=function(e){if(e.key==="Enter")open(k)};
     desk.appendChild(d);
   });
 }
 renderDesk=function(){if(R.classList.contains("ios"))icons();else rd()};
 function apply(){
   var on=mq.matches;
   R.classList.toggle("ios",on);
   if(A && A.mac) A.mac.t=on?"About This Device":"About This Mac";
   [].forEach.call(dock.children,function(d){d.hidden=false});
   renderDesk();
 }
 apply();
 if(mq.addEventListener)mq.addEventListener("change",apply);else if(mq.addListener)mq.addListener(apply);
 new MutationObserver(function(){R.classList.toggle("app-open",!!desk.querySelector(".win:not(.min)"))}).observe(desk,{childList:true,subtree:true,attributes:true,attributeFilter:["class"]});
})();
