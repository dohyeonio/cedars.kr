(this["webpackJsonpcedars-web"]=this["webpackJsonpcedars-web"]||[]).push([[0],{14:function(e,t,a){e.exports=a(41)},19:function(e,t,a){},24:function(e,t,a){},25:function(e,t,a){},36:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(6),s=a.n(c);a(19),a(20),a(24);var l=function(e){var t=e.title,a=e.href;return r.a.createElement("a",{className:"LinkButton",href:a},t)},o=a(7),i=a.n(o);var m=function(e){var t=e.href;return r.a.createElement("a",{href:t,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:i.a,alt:"Download"}))},u=a(10);a(25);var p=function(e){var t=e.app,a=t.description&&t.description.split("\n");return r.a.createElement("div",{className:"Project"},r.a.createElement("div",{className:"left"},r.a.createElement("div",{className:"title"},t.trackName),a&&a.length>0&&r.a.createElement("div",{className:"description"},a[0]),r.a.createElement("div",{className:"download"},r.a.createElement(m,{href:t.trackViewUrl}))),t.screenshotUrls&&r.a.createElement("div",{className:"phone"},r.a.createElement(u.a,{width:"392px",autoplay:!0,withoutControls:!0},t.screenshotUrls&&t.screenshotUrls.map((function(e,t){return r.a.createElement("img",{key:t,src:e,alt:"Screenshot"})})))))},d=(a(36),a(9)),f=a.n(d);var E=function(){return r.a.createElement("div",{className:"Hero"},r.a.createElement("header",{className:"logo"},r.a.createElement("img",{src:f.a,alt:"Cedars"})),r.a.createElement("div",{className:"description"},"\uc2dc\ub354\uc2a4\ub294 \ubc31\ud5a5\ubaa9\uc744 \uc758\ubbf8\ud569\ub2c8\ub2e4. \ubc31\ud5a5\ubaa9\uc740 \uc9d9\uc740 \ud5a5\uae30\ub97c \ud48d\uaca8\uc11c \ud5a5\uae30\ub86d\uace0 \ucda9\ud574\uac00 \uc5c6\uc73c\uba70 \uacac\uace0\ud55c \ub0b4\uad6c\ub825\uc744 \uac00\uc9c0\uace0 \uc788\uc5b4 \uc88b\uc740 \uac74\ucd95\uc7ac\ub85c \uc0ac\uc6a9\ub429\ub2c8\ub2e4. \uacf5\ub3d9\uccb4\ub97c \uc704\ud55c \ubaa8\ubc14\uc77c \uc5b4\ud50c\ub9ac\ucf00\uc774\uc158, \uc6f9 \uc11c\ube44\uc2a4\ub97c \uae30\ud68d/\uac1c\ubc1c\ud569\ub2c8\ub2e4."),r.a.createElement("div",{className:"buttons"},r.a.createElement(l,{title:"Projects",href:"#projects"}),r.a.createElement(l,{title:"Contact Us",href:"#support"})))},v=a(12),h=a(11),N=(a(37),[398189559,615918629,668955631]);a(38);var k=function(){var e=Object(n.useState)(N.map((function(e){return{id:e}}))),t=Object(h.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){fetch("https://itunes.apple.com/lookup?id=".concat(N.join(","),"&entity=software")).then((function(e){return e.json()})).then((function(e){var t=e.results||[];c(t.map((function(e){return Object(v.a)({},e,{id:e.trackId})})))}))}),[]),r.a.createElement("div",{className:"Projects",id:"projects"},a.map((function(e){return r.a.createElement(p,{key:e.id,app:e})})))};a(39);var b=function(){return r.a.createElement("div",{className:"Support",id:"support"},r.a.createElement("header",{className:"title"},"Contact Us"),r.a.createElement("div",{className:"buttons"},r.a.createElement(l,{title:"support@cedars.kr",href:"mailto:support@cedars.kr"})))};a(40);var j=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(E,null),r.a.createElement(k,null),r.a.createElement(b,null))};s.a.render(r.a.createElement(j,null),document.getElementById("root"))},7:function(e,t,a){e.exports=a.p+"static/media/download-black.9fed1600.svg"},9:function(e,t,a){e.exports=a.p+"static/media/logo.23a96583.svg"}},[[14,1,2]]]);
//# sourceMappingURL=main.28ab105b.chunk.js.map