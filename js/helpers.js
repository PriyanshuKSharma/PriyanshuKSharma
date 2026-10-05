/* Shared constants, icon set and small HTML-building helpers used by every app. */
var _wo=window.open; /* keep the native window.open: the window manager defines its own open() later */
var G="https://github.com/PriyanshuKSharma";
var I={u:'<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7"/>',f:'<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>',b:'<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M3 13h18"/>',z:'<path d="M13 2 4 14h7l-1 8 9-12h-7z"/>',c:'<circle cx="12" cy="9" r="6"/><path d="M8.5 14 7 22l5-3 5 3-1.5-8"/>',r:'<path d="M9 3h6M10 3v6L4.5 19a1.5 1.5 0 0 0 1.3 2h12.4a1.5 1.5 0 0 0 1.3-2L14 9V3M7.5 15h9"/>',d:'<path d="M6 3h9l4 4v14H6zM14 3v5h5M9 13h7M9 17h7"/>',t:'<path d="m5 8 4 4-4 4M12 17h7"/>',m:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',l:'<path d="M12 3c4 2 6 6 5 11l-5 4-5-4c-1-5 1-9 5-11zM8 17l-3 4M16 17l3 4"/><circle cx="12" cy="10" r="1.6"/>'};
function ic(n){return '<svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">'+I[n]+'</svg>'}
function lk(u,t){return '<a href="'+u+'" target="_blank" rel="noopener">'+t+'</a>'}
function ul(a){return '<ul class="bl"><li>'+a.join('</li><li>')+'</li></ul>'}
function ch(a){return '<div class="chips">'+a.map(function(x){return '<span class="chip">'+x+'</span>'}).join('')+'</div>'}
function dtl(h,s,b){return '<h3>'+h+'</h3><div class="mute" style="margin-bottom:12px">'+s+'</div>'+b}
var LI="https://www.linkedin.com/in/priyanshu-kumar-sharma-333800251",DOI="https://doi.org/10.56975/ijcrt.v14i4.305033";
function hs(t,b){return '<h4 class="hs">'+t+'</h4>'+b}
function tbl(h,r){return '<table class="tbl"><tr>'+h.map(function(x){return '<th>'+x+'</th>'}).join('')+'</tr>'+r.map(function(x){return '<tr>'+x.map(function(c){return '<td>'+c+'</td>'}).join('')+'</tr>'}).join('')+'</table>'}
function pb(p){var l=!p[5]?[]:typeof p[5]==="string"?[["Live demo",p[5]]]:Array.isArray(p[5][0])?p[5]:[p[5]],a=l.concat([["Source code",G+"/"+p[4]]]);return '<div class="btns">'+a.map(function(x,i){return '<a class="btn'+(i?" o":"")+'" href="'+x[1]+'" target="_blank" rel="noopener">'+x[0]+'</a>'}).join('')+'</div>'}
function grid(a){return '<div class="gr">'+a.map(function(c){return '<div class="cd"><b>'+c[0]+'</b><span>'+c[1]+'</span></div>'}).join('')+'</div>'}
function pe(a,b,c,bl){return '<div class="pe"><div class="top"><b>'+a+'</b><span>'+(c||"")+'</span></div><div class="i">'+b+'</div>'+(bl?ul(bl):"")+'</div>'}
function bar2(x){return '<div style="display:flex;justify-content:space-between"><span>'+x[0]+'</span><span class="mute">'+x[1]+'%</span></div><div class="bar"><i style="width:'+x[1]+'%"></i></div>'}
function avg(c){return Math.round(c[2].reduce(function(t,x){return t+x[1]},0)/c[2].length)}
function bar3(x,a){var p=x[1],l=a?"":(p>=85?"Advanced":p>=70?"Proficient":p>=55?"Working":"Learning")+" · ";return '<div class="sk"><span>'+x[0]+'</span><span class="mute">'+l+p+'%</span></div><div class="bar"><i style="width:'+p+'%"></i></div>'}
