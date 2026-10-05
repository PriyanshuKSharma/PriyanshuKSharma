/* Terminal app: virtual file system (cd, ls, cat, tree) and every command. */
A.terminal={t:"Terminal",e:ic("t"),c:"linear-gradient(#4a4d57,#17181c)",w:660,h:430,term:1,
r:function(){return '<div class="to"></div><label class="tl"><span class="pr">priyanshu@cloud ~ %</span><input spellcheck="false" autocomplete="off" autocapitalize="off" aria-label="Terminal input"></label>'},
init:function(b){
 var o=b.querySelector(".to"),i=b.querySelector("input"),pr=b.querySelector(".pr"),h=[],hi=0,cwd=[],t0=Date.now();
 function esc(s){var d=document.createElement("span");d.textContent=s;return d.innerHTML}
 function L(u,t){return '<a href="'+u+'" target="_blank" rel="noopener">'+(t||u)+'</a>'}
 function lf(t){return esc(t).replace(/(https?:\/\/[^\s<]+)/g,'<a href="$1" target="_blank" rel="noopener">$1</a>').replace(/([\w.]+@[\w.]+\.\w+)/g,'<a href="mailto:$1">$1</a>')}
 function say(x){o.insertAdjacentHTML("beforeend",x+"\n");b.scrollTop=b.scrollHeight}
 function slug(s){return s.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"")}
 function bar(n){var f=Math.round(n/5);return "█".repeat(f)+"░".repeat(20-f)}
 function pad(s,n){return (s+" ".repeat(n)).slice(0,n)}
 function pp(){pr.textContent="priyanshu@cloud "+(cwd.length?"~/"+cwd.join("/"):"~")+" %"}
 function demo(x){return !x[5]?"":typeof x[5]==="string"?x[5]:Array.isArray(x[5][0])?x[5][0][1]:x[5][1]}
 function skl(c){return c[2].slice().sort(function(a,b){return b[1]-a[1]}).map(function(x){return pad(x[0],20)+bar(x[1])+" "+x[1]+"%"}).join("\n")}
 function CT(){return "email       priyanshu17ks@gmail.com\nphone       +91 93923 81422\nlinkedin    "+LI+"\ngithub      "+G+"\ndocker hub  https://hub.docker.com/u/priyanshuksharma\nhackerrank  https://www.hackerrank.com/profile/priyanshu17ks\nx           https://x.com/itspriyanshuks"}
 function tree(){var p={},e={},s={},r={};
  PJ.forEach(function(x){p[slug(x[0].split(":")[0].split(" (")[0])+".md"]=x[0]+"\n"+x[1]+"\n\n"+x[2]+"\n\nstack:  "+x[3].join(", ")+"\nsource: "+G+"/"+x[4]+(demo(x)?"\ndemo:   "+demo(x):"")});
  EX.forEach(function(x,j){e[("0"+(j+1)).slice(-2)+"-"+slug(x[0])+".txt"]=x[0]+"\n"+x[1]+(x[2]?" · "+x[2]:"")+"\n\n- "+x[3].join("\n- ")});
  e["education.txt"]=ED.map(function(x){return x[0]+"\n"+x[1]+" · "+x[2]+"\n"+x[3]}).join("\n\n");
  MXC.forEach(function(c){s[slug(c[0])+".txt"]=c[0]+" (average "+avg(c)+"%)\n\n"+skl(c)});
  RS.forEach(function(x){r[slug(x[0])+".txt"]=x[0]+"\n"+x[1]+" · "+x[2]+"\n\n"+x[3]+"\n\nstack: "+x[4].join(", ")+"\n"+x[5].map(function(l){return l[0]+": "+l[1]}).join("\n")});
  return {"about.txt":"Priyanshu Kumar Sharma\nGraduate Engineer Trainee, Marquardt India, Pune. M.Tech in Cloud Computing at IIT Patna.\nCloud and DevOps engineer building and benchmarking serverless and multi-cloud systems, with security as a design choice.","contact.txt":CT(),"certificates.txt":"CERTIFICATIONS\n"+CE.map(function(c){return "- "+c[0]+" ("+c[1]+")"}).join("\n")+"\n\nAWARDS\n"+AW.map(function(a){return "- "+a[0]+", "+a[1]}).join("\n")+"\n\nHACKATHONS\n"+HK.map(function(a){return "- "+a[0]+" ("+a[1]+")"}).join("\n"),"resume.pdf":"@resume",projects:p,experience:e,skills:s,research:r}}
 function go(path){var parts=/^[~\/]/.test(path)?[]:cwd.slice();path.replace(/^[~\/]+/,"").split("/").forEach(function(s){if(!s||s===".")return;if(s==="..")parts.pop();else parts.push(s)});var n=tree();for(var k=0;k<parts.length;k++){if(n&&typeof n==="object"&&n.hasOwnProperty(parts[k]))n=n[parts[k]];else return null}return {n:n,p:parts}}
 function appOf(q){q=q.toLowerCase().replace(/\.(pdf|txt|md)$/,"").split("/")[0];return order.filter(function(x){return x===q||A[x].t.toLowerCase().indexOf(q)===0})[0]}
 var D={help:"list commands, or help &lt;cmd&gt;",whoami:"who I am",ls:"list files, ls [path]",cd:"change directory: cd projects, cd ..",pwd:"print working directory",cat:"read a file: cat about.txt",tree:"show the whole file tree",open:"open an app or link: open projects, open github",close:"close an app window: close projects",exit:"close this terminal",projects:"list projects, or projects &lt;n|name&gt;",skills:"skill bars by category, or skills &lt;category&gt;",research:"papers and research, with links",contact:"how to reach me, with clickable links",neofetch:"system summary",theme:"theme [light|dark]",matrix:"matrix [on|off]",date:"current date and time",echo:"print text",history:"commands run so far",clear:"clear the screen (Ctrl+L)",uname:"system info, uname -a",github:"open my GitHub",linkedin:"open my LinkedIn"};
 var C={
  help:function(a){if(a[0])return D[a[0]]?"<b>"+a[0]+"</b>  "+D[a[0]]:"help: no help for "+esc(a[0]);return Object.keys(D).map(function(k){return "<b>"+pad(k,10)+"</b>"+D[k]}).join("\n")+"\n\nTab completes commands and file names."},
  whoami:function(){return "Priyanshu Kumar Sharma\ncloud &amp; security engineer · GET at Marquardt India · M.Tech (Cloud) at IIT Patna"},
  ls:function(a){var t=go(a.filter(function(x){return x[0]!=="-"})[0]||".");if(!t)return "ls: no such file or directory";if(typeof t.n!=="object")return esc(t.p[t.p.length-1]);return Object.keys(t.n).map(function(k){return typeof t.n[k]==="object"?'<b style="color:#79c0ff">'+k+"/</b>":esc(k)}).join("  ")},
  cd:function(a){var t=go(a[0]||"~");if(!t)return "cd: no such directory: "+esc(a[0]);if(typeof t.n!=="object")return "cd: not a directory: "+esc(a[0]);cwd=t.p;pp();return ""},
  pwd:function(){return "/home/priyanshu"+(cwd.length?"/"+cwd.join("/"):"")},
  cat:function(a){if(!a[0])return "usage: cat &lt;file&gt;";var t=go(a[0]);if(!t)return "cat: "+esc(a[0])+": no such file";if(typeof t.n==="object")return "cat: "+esc(a[0])+": is a directory";if(t.n[0]==="@"){open(t.n.slice(1));return "opening Resume.pdf"}return lf(t.n)},
  tree:function(){function tr(o,pre){var k=Object.keys(o);return k.map(function(x,j){var last=j===k.length-1,d=typeof o[x]==="object";return pre+(last?"└── ":"├── ")+esc(x)+(d?"/\n"+tr(o[x],pre+(last?"    ":"│   ")):"")}).join("\n")}return "~\n"+tr(tree(),"")},
  open:function(a){var q=(a[0]||"").toLowerCase(),LN={github:G,linkedin:LI,doi:DOI};if(!q)return "usage: open &lt;app|github|linkedin|doi&gt;";if(LN[q]){_wo.call(window,LN[q],"_blank","noopener");return "opening "+L(LN[q])}var k=appOf(q);if(!k)return "open: no such app: "+esc(q)+"\napps: "+order.join(" ");open(k);return "opening "+A[k].t},
  close:function(a){var k=a[0]&&appOf(a[0]);if(!k||!W[k])return "close: "+esc(a[0]||"nothing")+" is not open";W[k].querySelector(".l1").click();return "closed "+A[k].t},
  exit:function(){if(W.terminal)W.terminal.querySelector(".l1").click();return ""},
  projects:function(a){var q=(a[0]||"").toLowerCase();if(!q)return PJ.map(function(x,j){return "<b>"+(j+1)+".</b> "+esc(x[0])+'  <span style="opacity:.6">'+esc(x[1])+"</span>"}).join("\n")+"\n\nprojects &lt;n|name&gt; for details";var x=PJ[+q-1]||PJ.filter(function(y){return y[0].toLowerCase().indexOf(q)>-1||y[4].toLowerCase().indexOf(q)>-1})[0];if(!x)return "projects: no match for "+esc(q);var d=demo(x);return "<b>"+esc(x[0])+"</b>\n"+esc(x[1])+"\n\n"+esc(x[2])+"\n\nstack   "+esc(x[3].join(", "))+"\nsource  "+L(G+"/"+x[4])+(d?"\ndemo    "+L(d):"")},
  skills:function(a){var q=(a[0]||"").toLowerCase();if(!q)return MXC.map(function(c){return pad(c[3],9)+bar(avg(c))+" "+avg(c)+"%"}).join("\n")+"\n\nskills &lt;category&gt; for details: "+MXC.map(function(c){return c[3]}).join(", ");var c=MXC.filter(function(x){return x[3]===q||x[3].indexOf(q)===0||x[0].toLowerCase().indexOf(q)===0})[0];return c?"<b>"+esc(c[0])+"</b>\n\n"+skl(c):"skills: unknown category "+esc(q)},
  research:function(){return RS.map(function(x,j){return "<b>"+(j+1)+".</b> "+esc(x[0])+"\n   "+esc(x[1]+" · "+x[2])+"\n   "+x[5].map(function(l){return L(l[1],l[0])}).join(" · ")}).join("\n\n")},
  contact:function(){return lf(CT())},
  neofetch:function(){var s=Math.floor((Date.now()-t0)/1000);return "<b>priyanshu@cloud</b>\n------------------\nrole     GET, Marquardt India (Pune)\nstudy    M.Tech Cloud Computing, IIT Patna\ndegree   B.Tech IT, CGPA 9.91\nstack    AWS Azure GCP Docker K8s Terraform\nfocus    multi-cloud, IAM, serverless, quantum\nlatest   Nebula: multi-cloud command center\nuptime   "+Math.floor(s/60)+"m "+s%60+"s\nwindows  "+Object.keys(W).length+" open\ntheme    "+(document.documentElement.dataset.theme==="light"?"light":"dark")+"\nshell    zsh (portfolio)"},
  theme:function(a){var c=document.documentElement.dataset.theme==="light"?"light":"dark",n=a[0]==="light"||a[0]==="dark"?a[0]:c==="dark"?"light":"dark";if(n!==c)document.getElementById("theme").click();return "theme: "+n},
  matrix:function(a){setMatrix(a[0]==="off"?0:a[0]==="on"?1:!mode);return mode?"Wake up, Priyanshu...":"Back to the aurora."},
  date:function(){return new Date().toString()},
  echo:function(a,raw){return esc(raw.replace(/^\s*echo\s?/i,""))},
  history:function(){return h.map(function(x,j){return pad(j+1,5)+esc(x)}).join("\n")},
  clear:function(){o.innerHTML="";return ""},
  uname:function(a){return a.indexOf("-a")>-1?"PortfolioOS 26 cloud-1 x86_64 (browser)":"PortfolioOS"},
  github:function(){return C.open(["github"])},
  linkedin:function(){return C.open(["linkedin"])},
  sudo:function(){return "priyanshu is not in the sudoers file. This incident will be reported."},
  rm:function(){return "rm: permission denied. Nice try."},
  man:function(a){return C.help(a)}
 };
 function run(v){var s=v.trim().split(/\s+/),c=s[0].toLowerCase();if(!C.hasOwnProperty(c)){var m=Object.keys(D).filter(function(k){return k.indexOf(c)===0})[0];return "zsh: command not found: "+esc(s[0])+(m?"\ndid you mean <b>"+m+"</b>?":"\ntype <b>help</b> to see commands")}return C[c](s.slice(1),v)}
 function echoP(v){say('<span class="pr">'+esc(pr.textContent)+"</span> "+esc(v))}
 i.onkeydown=function(e){
  if(e.key==="ArrowUp"&&h.length){hi=Math.max(0,hi-1);i.value=h[hi];e.preventDefault()}
  else if(e.key==="ArrowDown"){hi=Math.min(h.length,hi+1);i.value=h[hi]||"";e.preventDefault()}
  else if(e.ctrlKey&&e.key==="l"){e.preventDefault();o.innerHTML=""}
  else if(e.ctrlKey&&e.key==="c"){echoP(i.value+"^C");i.value=""}
  else if(e.key==="Tab"){e.preventDefault();var s=i.value.split(/\s+/),w=s[s.length-1],d=go(".").n,pool=s.length<2?Object.keys(C):Object.keys(d).concat(order),m=pool.filter(function(x){return x.indexOf(w)===0});if(m.length===1){s[s.length-1]=m[0];i.value=s.join(" ")+(s.length<2?" ":"")}else if(m.length>1){echoP(i.value);say(m.join("  "))}}
  else if(e.key==="Enter"){var v=i.value.trim();i.value="";echoP(v);if(v){h.push(v);hi=h.length;var r=run(v);if(r)say(r)}}
 };
 b.onclick=function(){if(!String(getSelection()))i.focus()};
 say("Welcome. Type <b>help</b> to see every command. Tab completes.");
}};
