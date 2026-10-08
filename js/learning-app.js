/* Safari: tabs, address bar and a Start Page. Links to my own sites open here first, with an Open in new tab button. */
I.k='<path d="M3 5.5C5 4 8.5 4 12 6c3.5-2 7-2 9-.5V19c-2-1.5-5.5-1.5-9 .5-3.5-2-7-2-9-.5z"/><path d="M12 6v13.5"/>';
function host(u){return u.replace(/^https?:\/\//,"").replace(/\/index\.html$/,"").replace(/\/$/,"")}
var SFH=[/\.github\.io$/,/\.web\.app$/,/\.vercel\.app$/];
function sfHost(u){try{var h=new URL(u).hostname;return SFH.some(function(r){return r.test(h)})}catch(e){return false}}
function sfOpen(url,name){open("learning");var w=W.learning;if(w&&w._nav)w._nav(url,name)}
document.addEventListener("click",function(e){var a=e.target.closest&&e.target.closest("a[href]");if(!a||a.hasAttribute("data-ext")||e.metaKey||e.ctrlKey||e.shiftKey||e.button)return;if(sfHost(a.href)){e.preventDefault();sfOpen(a.href,(a.textContent||"").trim().slice(0,28)||host(a.href))}},true);
var FAVC=["#0a84ff","#30b0c7","#ff9f0a","#bf5af2","#ff375f","#34c759","#5e5ce6","#ff6b35","#00b4d8","#8e8e93","#c69c6d","#e5383b"];
function ini(n){var w=n.replace(/[^A-Za-z0-9 .]/g,"").split(/\s+/).filter(Boolean);return (w.length>1?w[0][0]+w[1][0]:w[0].slice(0,2)).toUpperCase()}
function sfSections(){var g=[["Learning hub",[["All learning websites",LH]]]],m={};LW.forEach(function(x){if(!m[x[0]]){m[x[0]]=[x[0],[]];g.push(m[x[0]])}m[x[0]][1].push([x[1],x[2]])});g.push(["Projects and portfolio",LF.map(function(x){return [x[1],x[2]]})]);return g}
A.learning={t:"Safari",e:ic("k"),c:"#eaf1fb",w:960,h:640,
 r:function(){var k=0;return '<div class="sfb2"><button data-a="home" title="Start Page" aria-label="Start Page">⌂</button><button data-a="reload" title="Reload" aria-label="Reload">⟳</button><input class="sfa" spellcheck="false" placeholder="Search or enter website name" aria-label="Address"><a class="sfo" data-ext target="_blank" rel="noopener">Open in new tab ↗</a><button data-a="new" title="New tab" aria-label="New tab">+</button></div><div class="sft"></div><div class="sfs"><div class="sfp"><h3 style="margin:0 0 4px">Start Page</h3><div class="mute">Sites I built to learn and to share. They open here first.</div>'+
  sfSections().map(function(s){return '<h4 class="hs">'+s[0]+'</h4><div class="sfg">'+s[1].map(function(x){return '<button class="fv" data-u="'+x[1]+'" data-n="'+x[0]+'"><span class="fi" style="background:'+FAVC[k++%FAVC.length]+'">'+ini(x[0])+'</span>'+x[0]+'</button>'}).join("")+'</div>'}).join("")+'</div></div>'},
 init:function(b){b.style.cssText="padding:0;display:flex;flex-direction:column;overflow:hidden";
  var q=function(s){return b.querySelector(s)},sfs=q(".sfs"),sfp=q(".sfp"),sft=q(".sft"),adr=q(".sfa"),opn=q(".sfo"),tabs=[],cur=-1;
  function esc(s){return s.replace(/[&<>"]/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]})}
  function show(){tabs.forEach(function(t,i){t.w.style.display=i===cur?"block":"none"});sfp.style.display=cur<0?"block":"none";sft.style.display=tabs.length?"flex":"none";
   sft.innerHTML=tabs.map(function(t,i){return '<div class="sti'+(i===cur?" on":"")+'" data-i="'+i+'"><span>'+esc(t.n)+'</span><i data-x="'+i+'" title="Close tab">×</i></div>'}).join("");
   adr.value=cur<0?"":tabs[cur].u;opn.style.visibility=cur<0?"hidden":"visible";if(cur>-1)opn.href=tabs[cur].u}
  function add(u,n){if(!/^https?:\/\//i.test(u))u="https://"+u;for(var i=0;i<tabs.length;i++)if(tabs[i].u===u){cur=i;show();return}
   var name=n||host(u),w=document.createElement("div"),f=document.createElement("iframe");w.className="sw";w.innerHTML='<div class="sfn"><b>'+esc(name)+'</b><br>Loading... If this stays blank, the site does not allow embedding. Use Open in new tab.</div>';
   f.src=u;f.title=name;f.setAttribute("sandbox","allow-scripts allow-same-origin allow-popups allow-forms");w.appendChild(f);sfs.appendChild(w);tabs.push({u:u,n:name,w:w});cur=tabs.length-1;show()}
  b.parentNode._nav=add;
  b.onclick=function(e){var x=e.target.closest("[data-a]"),v=e.target.closest("[data-u]"),c=e.target.closest("[data-x]"),t=e.target.closest(".sti");
   if(c){var i=+c.dataset.x;tabs[i].w.remove();tabs.splice(i,1);if(i<cur)cur--;if(cur>=tabs.length)cur=tabs.length-1;show()}
   else if(t){cur=+t.dataset.i;show()}
   else if(v)add(v.dataset.u,v.dataset.n);
   else if(x){var a=x.dataset.a;if(a==="home"||a==="new"){cur=-1;show();if(a==="new")adr.focus()}else if(a==="reload"&&cur>-1){var fr=tabs[cur].w.querySelector("iframe");fr.src=fr.src}}};
  adr.onkeydown=function(e){if(e.key==="Enter"&&adr.value.trim())add(adr.value.trim())};show()}};
