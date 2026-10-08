/* About This Mac (Settings on iPhone): a tabbed system report with live uptime, your display info and a clickable storage breakdown of the portfolio. */
I.s='<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1 7 17M17 7l2.1-2.1"/>';
A.mac={t:"About This Mac",e:ic("s"),c:"linear-gradient(#9aa1b2,#4f5668)",w:560,h:480,dk:document.createElement("div"),
r:function(){return '<div class="tabs mt"><button data-t="o" class="on">Overview</button><button data-t="d">Display</button><button data-t="s">Storage</button><button data-t="h">Support</button></div><div class="mp"></div>'},
init:function(b){
 var T0=Date.now(),mp=b.querySelector(".mp"),iph=document.documentElement.classList.contains("ios");
 function row(k,v,id){return '<div class="top"><span class="mute">'+k+'</span><span'+(id?' id="'+id+'"':'')+'>'+v+'</span></div>'}
 function bt(u,t,c){return '<a class="btn'+(c?" "+c:"")+'" href="'+u+'" target="_blank" rel="noopener">'+t+'</a>'}
 var P={
  o:function(){return '<div style="text-align:center"><div class="av" style="margin:4px auto 12px;width:104px;height:104px"></div><h3>Priyanshu’s '+(iph?"iPhone":"Mac")+'</h3><div class="mute">Portfolio '+(iph?"iOS":"OS")+' 26 · Cloud Edition</div></div><div class="row mr">'+row("Chip","Cloud + Security + Research")+row("Memory","7 projects · 4 papers · 9 hackathons")+row("Startup disk","IIT Patna, M.Tech")+row("Role","Graduate Engineer Trainee, Marquardt India")+row("Serial number","PKS-9.91-2026")+row("Uptime","0s","mup")+row("Windows open","0","mwin")+'</div>'},
  d:function(){var s=screen,n=navigator;return '<h4>Your display</h4><div class="row mr">'+row("Viewport",innerWidth+" × "+innerHeight)+row("Screen",s.width+" × "+s.height+" @"+(devicePixelRatio||1)+"x")+row("Layout",iph?"iPhone (compact)":"Desktop")+row("Appearance",document.documentElement.dataset.theme==="light"?"Light":"Dark")+row("CPU cores",n.hardwareConcurrency||"n/a")+row("Language",n.language||"n/a")+row("Network",n.onLine?"Online":"Offline")+'</div><p class="mute" style="font-size:12px">Read from your own browser and shown only to you.</p>'},
  s:function(){var seg=[["Projects",PJ.length,"#0a95b8","projects"],["Skills",MXC.reduce(function(t,c){return t+c[2].length},0),"#a78bfa","skills"],["Roles and education",EX.length+ED.length,"#ff9f43","exp"],["Certificates and awards",CE.length+AW.length+HK.length,"#ffd166","certs"],["Research",RS.length,"#f0456a","research"],["Learning sites",LW.length+1,"#34d399","learning"]],tot=seg.reduce(function(t,x){return t+x[1]},0);
   return '<h4>Portfolio storage</h4><div class="mute" style="margin-bottom:8px">'+tot+' items on this disk</div><div class="sbar">'+seg.map(function(x,i){return '<i data-open="'+x[3]+'" title="'+x[0]+'" style="width:'+x[1]/tot*100+'%;background:'+x[2]+';animation-delay:'+i*80+'ms"></i>'}).join("")+'</div><div class="row mr">'+seg.map(function(x){return '<div class="top sl" data-open="'+x[3]+'"><span><span style="color:'+x[2]+'">●</span> '+x[0]+'</span><span class="mute">'+x[1]+'</span></div>'}).join("")+'</div><p class="mute" style="font-size:12px">Tap a segment to open that app.</p>'},
  h:function(){return '<h4>Support</h4><p>Questions, collaboration or a project idea? Reach me here.</p><div class="btns">'+bt("mailto:priyanshu17ks@gmail.com","Email")+bt(LI,"LinkedIn","o")+bt(G,"GitHub","o")+'<button class="btn o" data-open="contact">Open Contacts</button><button class="btn o" data-open="learning">Learning hub</button></div>'}
 };
 function show(k){mp.innerHTML=P[k]();[].forEach.call(b.querySelectorAll(".mt button"),function(x){x.classList.toggle("on",x.dataset.t===k)});mp.style.animation="none";void mp.offsetWidth;mp.style.animation="fin .25s"}
 b.querySelector(".mt").onclick=function(e){var x=e.target.closest("button");if(x)show(x.dataset.t)};
 mp.onclick=function(e){var x=e.target.closest("[data-open]");if(x)open(x.dataset.open)};
 show("o");
 (function tk(){if(!b.isConnected)return;var u=Math.floor((Date.now()-T0)/1000),el=b.querySelector("#mup"),w=b.querySelector("#mwin");if(el)el.textContent=Math.floor(u/60)+"m "+u%60+"s";if(w)w.textContent=Object.keys(W).length;setTimeout(tk,1000)})();
}};
