/* Spotlight search (Ctrl/Cmd + K). */
var sp=document.createElement("div");
sp.id="sp";
sp.innerHTML='<div><input placeholder="Search apps and links" aria-label="Search"><ul></ul></div>';
document.body.appendChild(sp);
var si=sp.querySelector("input"),sl=sp.querySelector("ul"),sel=0,its=[];
var LK=[["Learning websites hub",LH],["LinkedIn",LI],["GitHub profile",G],["Published paper (DOI)","https://doi.org/10.56975/ijcrt.v14i4.305033"],["Nebula live demo","https://nebulacommandcenter.vercel.app/"],["SkyVault live demo","https://priyanshuksharma.github.io/SkyVault/"]];
function paintSel(){[].forEach.call(sl.children,function(li,j){li.classList.toggle("on",j===sel)})}
function sfill(){var q=si.value.toLowerCase();its=order.map(function(k){return{n:A[k].t,e:A[k].e,f:function(){open(k)}}}).concat(LK.map(function(l){return{n:l[0],e:"↗",f:function(){(sfHost(l[1])?sfOpen(l[1],l[0]):_wo.call(window,l[1],"_blank","noopener"))}}})).filter(function(x){return x.n.toLowerCase().indexOf(q)>-1});sel=0;sl.innerHTML=its.map(function(x,j){return '<li data-j="'+j+'"><span>'+x.e+'</span>'+x.n+'</li>'}).join("");paintSel()}
function spot(on){sp.classList.toggle("on",on);if(on){si.value="";sfill();si.focus()}}
function run(j){if(its[j]){spot(false);its[j].f()}}
si.oninput=sfill;
si.onkeydown=function(e){if(e.key==="ArrowDown"){sel=Math.min(its.length-1,sel+1);paintSel();e.preventDefault()}else if(e.key==="ArrowUp"){sel=Math.max(0,sel-1);paintSel();e.preventDefault()}else if(e.key==="Enter")run(sel);else if(e.key==="Escape")spot(false)};
sl.onclick=function(e){var li=e.target.closest("li");if(li)run(+li.dataset.j)};
sp.onclick=function(e){if(e.target===sp)spot(false)};
document.getElementById("sbtn").onclick=function(){spot(true)};
document.addEventListener("keydown",function(e){if((e.metaKey||e.ctrlKey)&&e.key.toLowerCase()==="k"){e.preventDefault();spot(!sp.classList.contains("on"))}else if(e.key==="Escape")spot(false)});
