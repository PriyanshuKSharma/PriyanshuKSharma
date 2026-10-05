/* Dock magnification. */
dock.onmousemove=function(e){[].forEach.call(dock.children,function(b){var r=b.getBoundingClientRect();b.style.setProperty("--s",Math.max(0,1-Math.abs(e.clientX-r.left-r.width/2)/120).toFixed(2))})};
dock.onmouseleave=function(){[].forEach.call(dock.children,function(b){b.style.setProperty("--s",0)})};
