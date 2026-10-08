/* GitHub Activity app: live profile, repositories, events and contribution calendar from public APIs, cached for 30 minutes. */
I.h='<circle cx="6" cy="6" r="2.5"/><circle cx="6" cy="18" r="2.5"/><circle cx="18" cy="9" r="2.5"/><path d="M6 8.5v7M18 11.5c0 4-6 3-12 4.5"/>';
function ghj(url,key){var c;try{c=JSON.parse(localStorage.getItem(key))}catch(e){}
 if(c&&Date.now()-c.t<18e5)return Promise.resolve(c.d);
 return Promise.resolve().then(function(){return fetch(url)}).then(function(r){if(!r.ok)throw new Error(r.status);return r.json()}).then(function(d){try{localStorage.setItem(key,JSON.stringify({t:Date.now(),d:d}))}catch(e){}return d})}
function ago(t){var s=(Date.now()-new Date(t))/1000;return s<3600?Math.max(1,Math.floor(s/60))+"m ago":s<86400?Math.floor(s/3600)+"h ago":Math.floor(s/86400)+"d ago"}
function ghEvent(e){var r=e.repo.name.split("/")[1],p=e.payload||{},t=e.type;
 return t==="PushEvent"?"Pushed "+(p.size||(p.commits&&p.commits.length)||1)+" commit(s) to "+r:t==="PullRequestEvent"?(p.action||"Updated")+" a pull request in "+r:t==="CreateEvent"?"Created "+(p.ref_type||"repository")+" in "+r:t==="IssuesEvent"?(p.action||"Updated")+" an issue in "+r:t==="WatchEvent"?"Starred "+r:t==="ForkEvent"?"Forked "+r:t.replace("Event","")+" in "+r}
var LC={JavaScript:"#f1e05a",Python:"#3572A5",TypeScript:"#3178c6",HTML:"#e34c26",CSS:"#563d7c",Java:"#b07219",Dart:"#00B4AB",Shell:"#89e051","Jupyter Notebook":"#DA5B0B",HCL:"#844FBA",Dockerfile:"#384d54",C:"#555555","C++":"#f34b7d"};
var MON=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
A.github={t:"GitHub Activity",e:ic("h"),c:"linear-gradient(#7a6bff,#2b2470)",w:880,h:620,
r:function(){
 var AC=[["Pull Shark","pull-shark","Opened pull requests that have been merged","×3"],["Starstruck","starstruck","Created a repository that has 16 stars"],["Pair Extraordinaire","pair-extraordinaire","Coauthored commits on merged pull requests"],["Quickdraw","quickdraw","Closed an issue or pull request within 5 minutes of opening"],["YOLO","yolo","Merged a pull request without a review"]];
 return '<div class="gc ghp"><div class="av">PS</div><div><h3>Priyanshu Kumar Sharma</h3><div>'+lk("https://github.com/"+GH,"@"+GH)+' <span class="mute" id="ghbio"></span></div></div></div><div class="st" id="ghst"></div>'+
 '<div class="gc"><div class="gt">Contributions <span class="mute" id="ghtot"></span></div><div class="hmo" id="ghmo"></div><div class="hm" id="ghhm"><span class="mute">Loading from the GitHub API...</span></div><div class="hmf" id="ghfoot"></div></div>'+
 '<div class="gc"><div class="gt">GitHub achievements</div><div class="ach">'+AC.map(function(a,i){return '<div class="bd" title="'+a[2]+'" style="animation-delay:'+i*90+'ms"><img src="'+((window.BADGE_DATA&&BADGE_DATA[a[1]])||"assets/images/achievements/"+a[1]+".png")+'" alt="'+a[0]+' badge" width="84" height="84"><b>'+a[0]+'</b>'+(a[3]?'<span class="x3">'+a[3]+'</span>':'')+'<small>'+a[2]+'</small></div>'}).join("")+'</div></div>'+
 '<div class="gc"><div class="gt">Top languages</div><div id="ghlg" class="mute">Loading...</div></div><div class="gc"><div class="gt">Recently updated repositories</div><div id="ghrp" class="mute">Loading...</div></div><div class="gc"><div class="gt">Recent activity</div><div id="ghev" class="mute">Loading...</div></div>'+
 '<p class="mute" style="font-size:11px">Live from the GitHub API and cached for 30 minutes. If a section stays empty, the API is unreachable or rate-limited.</p>'},
init:function(b){
 var $=function(s){return b.querySelector(s)},S={f:GHS.followers,g:GHS.following,r:GHS.repos,s:null};
 function stats(){$("#ghst").innerHTML=[[S.f,"followers"],[S.g,"following"],[S.r,"repositories"],[S.s,"stars"]].map(function(x){return '<div><b>'+(x[0]==null?"–":x[0])+'</b>'+x[1]+'</div>'}).join("")}
 stats();
 ghj("https://api.github.com/users/"+GH,"gh-user").then(function(u){S.f=u.followers;S.g=u.following;S.r=u.public_repos;stats();if(u.bio)$("#ghbio").textContent="· "+u.bio}).catch(function(){});
 ghj("https://api.github.com/users/"+GH+"/repos?per_page=100&sort=pushed","gh-repos").then(function(r){
  var src=r.filter(function(x){return !x.fork}),lc={},n=0;S.s=r.reduce(function(t,x){return t+x.stargazers_count},0);stats();
  src.forEach(function(x){if(x.language){lc[x.language]=(lc[x.language]||0)+1;n++}});
  var ls=Object.keys(lc).sort(function(a,c){return lc[c]-lc[a]}).slice(0,7);
  $("#ghlg").innerHTML='<div class="lgb">'+ls.map(function(k){return '<i title="'+k+'" style="width:'+lc[k]/n*100+'%;background:'+(LC[k]||"#8b949e")+'"></i>'}).join("")+'</div><div class="chips">'+ls.map(function(k){return '<span class="chip"><span style="color:'+(LC[k]||"#8b949e")+'">●</span> '+k+' '+Math.round(lc[k]/n*100)+'%</span>'}).join("")+'</div>';
  $("#ghrp").innerHTML=src.slice(0,6).map(function(x){return '<div class="rr"><div>'+lk(x.html_url,x.name)+'<small>'+(x.description||"No description")+'</small></div><div style="text-align:right;white-space:nowrap">'+(x.language||"")+'<small>★ '+x.stargazers_count+' · '+ago(x.pushed_at)+'</small></div></div>'}).join("")}).catch(function(){$("#ghlg").textContent="Unavailable right now.";$("#ghrp").textContent="Unavailable right now."});
 ghj("https://api.github.com/users/"+GH+"/events/public?per_page=30","gh-events").then(function(e){$("#ghev").innerHTML=e.slice(0,8).map(function(x){return '<div class="ev"><span>'+ghEvent(x)+'</span><span class="mute">'+ago(x.created_at)+'</span></div>'}).join("")||"No recent public activity."}).catch(function(){$("#ghev").textContent="Unavailable right now."});
 ghj("https://github-contributions-api.jogruber.de/v4/"+GH+"?y=last","gh-cal").then(function(d){
  var days=d.contributions;if(!days||!days.length)throw 0;var first=new Date(days[0].date+"T00:00:00").getDay(),cells=[],i,tot=0,best=0,run=0,lg=0,cur=0;
  for(i=0;i<first;i++)cells.push(null);days.forEach(function(x){cells.push(x);tot+=x.count;best=Math.max(best,x.count);if(x.count>0){run++;lg=Math.max(lg,run)}else run=0});
  i=days.length-1;if(days[i].count===0)i--;for(;i>=0&&days[i].count>0;i--)cur++;
  var cols=Math.ceil(cells.length/7),lab="",lm=-1;
  for(var c=0;c<cols;c++){var x=cells[c*7]||cells[c*7+1],m=x?new Date(x.date+"T00:00:00").getMonth():-1;lab+="<span>"+(m>-1&&m!==lm?MON[m]:"")+"</span>";if(m>-1)lm=m}
  $("#ghmo").style.gridTemplateColumns="repeat("+cols+",1fr)";$("#ghmo").innerHTML=lab;
  $("#ghhm").innerHTML=cells.map(function(x,j){return x?'<i class="l'+(x.level||0)+'" style="animation-delay:'+Math.floor(j/7)*9+'ms" title="'+x.count+' contributions on '+x.date+'"></i>':"<i style=\"visibility:hidden\"></i>"}).join("");
  $("#ghtot").textContent="· "+tot+" in the last year";
  $("#ghfoot").innerHTML='<span><b>'+cur+'</b> day current streak</span><span><b>'+lg+'</b> day longest streak</span><span><b>'+best+'</b> best day</span>'}).catch(function(){
  $("#ghmo").innerHTML="";$("#ghhm").className="";$("#ghhm").innerHTML='<img src="https://ghchart.rshah.org/22d3ee/'+GH+'" alt="GitHub contribution graph" style="width:100%" onerror="this.replaceWith(document.createTextNode(\'The contribution graph could not be loaded right now.\'))">'});
}};
