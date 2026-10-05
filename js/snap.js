/* Window snapping to screen edges. */
var sp2=document.createElement("div");
sp2.id="snp";
desk.appendChild(sp2);
function snp(m){if(!m){sp2.style.opacity=0;return}var a=desk.clientWidth;sp2.style.opacity=1;sp2.style.left=m==="r"?a/2+"px":"0px";sp2.style.top="0px";sp2.style.width=(m==="m"?a:a/2)+"px";sp2.style.height=desk.clientHeight+"px"}
function snapTo(w,m){if(m==="m"){w.classList.add("max");return}var a=desk.clientWidth;w.classList.add("sn");w.style.left=(m==="r"?a/2:0)+"px";w.style.top="0px";w.style.width=a/2+"px";w.style.height=desk.clientHeight+"px";setTimeout(function(){w.classList.remove("sn")},350)}
