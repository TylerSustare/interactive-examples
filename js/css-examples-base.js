!function(e){"use strict";var t={calculateFrameLoadTime(){var e="Not supported",t=(new Date).getTime();return void 0!==performance.timing&&(e=t-performance.timing.navigationStart),e},isPropertySupported:function(e){return void 0!==document.createElement("div").style[e]},showCustomExampleHTML:function(e){var t=document.getElementById("default-example");t.classList.add("hidden"),t.setAttribute("aria-hidden",!0),e.classList.remove("hidden"),e.setAttribute("aria-hidden",!1)}};window.mceUtils=t}(),function(){"use strict";var e={trackEvent:function(e){window.parent.postMessage(e,"https://developer.mozilla.org")},trackCSSExampleSelection:function(){this.trackEvent({category:"css",action:"New CSS example selected",label:"Interaction Events"})},trackFirstEdit:function(e){this.trackEvent({category:e,action:"First edit",label:"Keyboard Interaction Events"}),localStorage.setItem("first"+e.toUpperCase()+"EditRecorded",!0)},trackFrameLoadTime:function(e,t){this.trackEvent({category:e,action:"Load time in ms: "+t,label:"Performance"})},trackRunClicks:function(){this.trackEvent({category:"js",action:"Clicked run",label:"Interaction Events"})}};window.mceAnalytics=e}(),function(){"use strict";function e(e){window.onload=function(){mceAnalytics.trackFrameLoadTime(e,mceUtils.calculateFrameLoadTime())}}var t=document.getElementById("example-choice-list"),n=document.getElementById("live"),a=document.getElementById("editor");t&&(e("css"),t.addEventListener("keyup",function(){localStorage.getItem("firstCSSEditRecorded")||mceAnalytics.trackFirstEdit("css")})),a&&(e("js"),n.addEventListener("click",function(e){switch(e.target.id){case"execute":mceAnalytics.trackRunClicks()}}),a.addEventListener("keyup",function(){localStorage.getItem("firstJSEditRecorded")||mceAnalytics.trackFirstEdit("js")})),window.onerror=function(e,t,n,a,r){var i=["URL: "+t,"Line: "+n,"Column: "+a,"Error object: "+JSON.stringify(r)].join(" - ");mceAnalytics.trackEvent({category:"JavaScript Errors",action:i,label:e})}}();var _self="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},Prism=function(){var e=/\blang(?:uage)?-(\w+)\b/i,t=0,n=_self.Prism={manual:_self.Prism&&_self.Prism.manual,util:{encode:function(e){return e instanceof a?new a(e.type,n.util.encode(e.content),e.alias):"Array"===n.util.type(e)?e.map(n.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++t}),e.__id},clone:function(e){switch(n.util.type(e)){case"Object":var t={};for(var a in e)e.hasOwnProperty(a)&&(t[a]=n.util.clone(e[a]));return t;case"Array":return e.map&&e.map(function(e){return n.util.clone(e)})}return e}},languages:{extend:function(e,t){var a=n.util.clone(n.languages[e]);for(var r in t)a[r]=t[r];return a},insertBefore:function(e,t,a,r){var i=(r=r||n.languages)[e];if(2==arguments.length){a=arguments[1];for(var s in a)a.hasOwnProperty(s)&&(i[s]=a[s]);return i}var l={};for(var o in i)if(i.hasOwnProperty(o)){if(o==t)for(var s in a)a.hasOwnProperty(s)&&(l[s]=a[s]);l[o]=i[o]}return n.languages.DFS(n.languages,function(t,n){n===r[e]&&t!=e&&(this[t]=l)}),r[e]=l},DFS:function(e,t,a,r){r=r||{};for(var i in e)e.hasOwnProperty(i)&&(t.call(e,i,e[i],a||i),"Object"!==n.util.type(e[i])||r[n.util.objId(e[i])]?"Array"!==n.util.type(e[i])||r[n.util.objId(e[i])]||(r[n.util.objId(e[i])]=!0,n.languages.DFS(e[i],t,i,r)):(r[n.util.objId(e[i])]=!0,n.languages.DFS(e[i],t,null,r)))}},plugins:{},highlightAll:function(e,t){var a={callback:t,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};n.hooks.run("before-highlightall",a);for(var r,i=a.elements||document.querySelectorAll(a.selector),s=0;r=i[s++];)n.highlightElement(r,!0===e,a.callback)},highlightElement:function(t,a,r){for(var i,s,l=t;l&&!e.test(l.className);)l=l.parentNode;l&&(i=(l.className.match(e)||[,""])[1].toLowerCase(),s=n.languages[i]),t.className=t.className.replace(e,"").replace(/\s+/g," ")+" language-"+i,l=t.parentNode,/pre/i.test(l.nodeName)&&(l.className=l.className.replace(e,"").replace(/\s+/g," ")+" language-"+i);var o={element:t,language:i,grammar:s,code:t.textContent};if(n.hooks.run("before-sanity-check",o),!o.code||!o.grammar)return o.code&&(n.hooks.run("before-highlight",o),o.element.textContent=o.code,n.hooks.run("after-highlight",o)),void n.hooks.run("complete",o);if(n.hooks.run("before-highlight",o),a&&_self.Worker){var c=new Worker(n.filename);c.onmessage=function(e){o.highlightedCode=e.data,n.hooks.run("before-insert",o),o.element.innerHTML=o.highlightedCode,r&&r.call(o.element),n.hooks.run("after-highlight",o),n.hooks.run("complete",o)},c.postMessage(JSON.stringify({language:o.language,code:o.code,immediateClose:!0}))}else o.highlightedCode=n.highlight(o.code,o.grammar,o.language),n.hooks.run("before-insert",o),o.element.innerHTML=o.highlightedCode,r&&r.call(t),n.hooks.run("after-highlight",o),n.hooks.run("complete",o)},highlight:function(e,t,r){var i=n.tokenize(e,t);return a.stringify(n.util.encode(i),r)},matchGrammar:function(e,t,a,r,i,s,l){var o=n.Token;for(var c in a)if(a.hasOwnProperty(c)&&a[c]){if(c==l)return;var u=a[c];u="Array"===n.util.type(u)?u:[u];for(var d=0;d<u.length;++d){var g=u[d],m=g.inside,p=!!g.lookbehind,f=!!g.greedy,h=0,y=g.alias;if(f&&!g.pattern.global){var v=g.pattern.toString().match(/[imuy]*$/)[0];g.pattern=RegExp(g.pattern.source,v+"g")}g=g.pattern||g;for(var b=r,k=i;b<t.length;k+=t[b].length,++b){var w=t[b];if(t.length>e.length)return;if(!(w instanceof o)){g.lastIndex=0;var S=g.exec(w),E=1;if(!S&&f&&b!=t.length-1){if(g.lastIndex=k,!(S=g.exec(e)))break;for(var A=S.index+(p?S[1].length:0),P=S.index+S[0].length,x=b,L=k,C=t.length;C>x&&(P>L||!t[x].type&&!t[x-1].greedy);++x)L+=t[x].length,A>=L&&(++b,k=L);if(t[b]instanceof o||t[x-1].greedy)continue;E=x-b,w=e.slice(k,L),S.index-=k}if(S){p&&(h=S[1].length);var P=(A=S.index+h)+(S=S[0].slice(h)).length,N=w.slice(0,A),j=w.slice(P),I=[b,E];N&&(++b,k+=N.length,I.push(N));var F=new o(c,m?n.tokenize(S,m):S,y,S,f);if(I.push(F),j&&I.push(j),Array.prototype.splice.apply(t,I),1!=E&&n.matchGrammar(e,t,a,b,k,!0,c),s)break}else if(s)break}}}}},tokenize:function(e,t){var a=[e],r=t.rest;if(r){for(var i in r)t[i]=r[i];delete t.rest}return n.matchGrammar(e,a,t,0,0,!1),a},hooks:{all:{},add:function(e,t){var a=n.hooks.all;a[e]=a[e]||[],a[e].push(t)},run:function(e,t){var a=n.hooks.all[e];if(a&&a.length)for(var r,i=0;r=a[i++];)r(t)}}},a=n.Token=function(e,t,n,a,r){this.type=e,this.content=t,this.alias=n,this.length=0|(a||"").length,this.greedy=!!r};if(a.stringify=function(e,t,r){if("string"==typeof e)return e;if("Array"===n.util.type(e))return e.map(function(n){return a.stringify(n,t,e)}).join("");var i={type:e.type,content:a.stringify(e.content,t,r),tag:"span",classes:["token",e.type],attributes:{},language:t,parent:r};if("comment"==i.type&&(i.attributes.spellcheck="true"),e.alias){var s="Array"===n.util.type(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(i.classes,s)}n.hooks.run("wrap",i);var l=Object.keys(i.attributes).map(function(e){return e+'="'+(i.attributes[e]||"").replace(/"/g,"&quot;")+'"'}).join(" ");return"<"+i.tag+' class="'+i.classes.join(" ")+'"'+(l?" "+l:"")+">"+i.content+"</"+i.tag+">"},!_self.document)return _self.addEventListener?(_self.addEventListener("message",function(e){var t=JSON.parse(e.data),a=t.language,r=t.code,i=t.immediateClose;_self.postMessage(n.highlight(r,n.languages[a],a)),i&&_self.close()},!1),_self.Prism):_self.Prism;var r=document.currentScript||[].slice.call(document.getElementsByTagName("script")).pop();return r&&(n.filename=r.src,!document.addEventListener||n.manual||r.hasAttribute("data-manual")||("loading"!==document.readyState?window.requestAnimationFrame?window.requestAnimationFrame(n.highlightAll):window.setTimeout(n.highlightAll,16):document.addEventListener("DOMContentLoaded",n.highlightAll))),_self.Prism}();"undefined"!=typeof module&&module.exports&&(module.exports=Prism),"undefined"!=typeof global&&(global.Prism=Prism),Prism.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+?.*?(;|(?=\s*\{))/i,inside:{rule:/@[\w-]+/}},url:/url\((?:(["'])(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,selector:/[^\{\}\s][^\{\};]*?(?=\s*\{)/,string:{pattern:/("|')(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},property:/(\b|\B)[\w-]+(?=\s*:)/i,important:/\B!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:]/},Prism.languages.css.atrule.inside.rest=Prism.util.clone(Prism.languages.css),Prism.languages.markup&&(Prism.languages.insertBefore("markup","tag",{style:{pattern:/(<style[\s\S]*?>)[\s\S]*?(?=<\/style>)/i,lookbehind:!0,inside:Prism.languages.css,alias:"language-css"}}),Prism.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|').*?\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:Prism.languages.markup.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:Prism.languages.css}},alias:"language-css"}},Prism.languages.markup.tag)),Prism.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?\*\//,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0}],string:{pattern:/(["'])(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/i,lookbehind:!0,inside:{punctuation:/(\.|\\)/}},keyword:/\b(if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(true|false)\b/,function:/[a-z0-9_]+(?=\()/i,number:/\b-?(?:0x[\da-f]+|\d*\.?\d+(?:e[+-]?\d+)?)\b/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/},Prism.languages.javascript=Prism.languages.extend("clike",{keyword:/\b(as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,number:/\b-?(0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+|\d*\.?\d+([Ee][+-]?\d+)?|NaN|Infinity)\b/,function:/[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*(?=\()/i,operator:/-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/}),Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:/(^|[^\/])\/(?!\/)(\[[^\]\r\n]+]|\\.|[^\/\\\[\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/,lookbehind:!0,greedy:!0}}),Prism.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\\\|\\?[^\\])*?`/,greedy:!0,inside:{interpolation:{pattern:/\$\{[^}]+\}/,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:Prism.languages.javascript}},string:/[\s\S]+/}}}),Prism.languages.markup&&Prism.languages.insertBefore("markup","tag",{script:{pattern:/(<script[\s\S]*?>)[\s\S]*?(?=<\/script>)/i,lookbehind:!0,inside:Prism.languages.javascript,alias:"language-javascript"}}),Prism.languages.js=Prism.languages.javascript,function(){function e(e,t){return Array.prototype.slice.call((t||document).querySelectorAll(e))}function t(e,t){return t=" "+t+" ",(" "+e.className+" ").replace(/[\n\t]/g," ").indexOf(t)>-1}function n(e,n,a){for(var i,s=n.replace(/\s+/g,"").split(","),l=+e.getAttribute("data-line-offset")||0,o=(r()?parseInt:parseFloat)(getComputedStyle(e).lineHeight),c=0;i=s[c++];){var u=+(i=i.split("-"))[0],d=+i[1]||u,g=document.createElement("div");g.textContent=Array(d-u+2).join(" \n"),g.setAttribute("aria-hidden","true"),g.className=(a||"")+" line-highlight",t(e,"line-numbers")||(g.setAttribute("data-start",u),d>u&&g.setAttribute("data-end",d)),g.style.top=(u-l-1)*o+"px",t(e,"line-numbers")?e.appendChild(g):(e.querySelector("code")||e).appendChild(g)}}function a(){var t=location.hash.slice(1);e(".temporary.line-highlight").forEach(function(e){e.parentNode.removeChild(e)});var a=(t.match(/\.([\d,-]+)$/)||[,""])[1];if(a&&!document.getElementById(t)){var r=t.slice(0,t.lastIndexOf(".")),i=document.getElementById(r);i&&(i.hasAttribute("data-line")||i.setAttribute("data-line",""),n(i,a,"temporary "),document.querySelector(".temporary.line-highlight").scrollIntoView())}}if("undefined"!=typeof self&&self.Prism&&self.document&&document.querySelector){var r=function(){var e;return function(){if(void 0===e){var t=document.createElement("div");t.style.fontSize="13px",t.style.lineHeight="1.5",t.style.padding=0,t.style.border=0,t.innerHTML="&nbsp;<br />&nbsp;",document.body.appendChild(t),e=38===t.offsetHeight,document.body.removeChild(t)}return e}}(),i=0;Prism.hooks.add("before-sanity-check",function(t){var n=t.element.parentNode,a=n&&n.getAttribute("data-line");if(n&&a&&/pre/i.test(n.nodeName)){var r=0;e(".line-highlight",n).forEach(function(e){r+=e.textContent.length,e.parentNode.removeChild(e)}),r&&/^( \n)+$/.test(t.code.slice(-r))&&(t.code=t.code.slice(0,-r))}}),Prism.hooks.add("complete",function(e){var t=e.element.parentNode,r=t&&t.getAttribute("data-line");t&&r&&/pre/i.test(t.nodeName)&&(clearTimeout(i),n(t,r),i=setTimeout(a,1))}),window.addEventListener&&window.addEventListener("hashchange",a)}}(),"undefined"!=typeof self&&self.Prism&&self.document&&Prism.hooks.add("complete",function(e){if(e.code){var t=e.element.parentNode,n=/\s*\bline-numbers\b\s*/;if(t&&/pre/i.test(t.nodeName)&&(n.test(t.className)||n.test(e.element.className))&&!e.element.querySelector(".line-numbers-rows")){n.test(e.element.className)&&(e.element.className=e.element.className.replace(n,"")),n.test(t.className)||(t.className+=" line-numbers");var a,r=e.code.match(/\n(?!$)/g),i=r?r.length+1:1,s=new Array(i+1);s=s.join("<span></span>"),(a=document.createElement("span")).setAttribute("aria-hidden","true"),a.className="line-numbers-rows",a.innerHTML=s,t.hasAttribute("data-start")&&(t.style.counterReset="linenumber "+(parseInt(t.getAttribute("data-start"),10)-1)),e.element.appendChild(a)}}}),function(e){"use strict";function t(e){var t=e.querySelector("code");e.classList.add("selected"),t.setAttribute("contentEditable",!0),t.setAttribute("spellcheck",!1),t.focus(),f.applyCode(e.textContent,e)}function n(e){var t=window.getSelection().getRangeAt(0);e.clipboardData.setData("text/plain",t.toString()),e.clipboardData.setData("text/html",t.toString()),e.preventDefault(),e.stopPropagation()}function a(){c.querySelector(".reset").addEventListener("click",function(){for(var e=0,n=u.length;e<n;e++){var a=Prism.highlight(m[e],Prism.languages.css);u[e].classList.remove("invalid","selected"),u[e].querySelector("code").innerHTML=a}t(g?u[g]:u[0])})}function r(e,t){for(var n=0,a=e.length;n<a;n++)if(e[n]===t)return n;return-1}function i(e){var n=document.querySelector(".selected");if(n&&e.currentTarget!==n){var a=Prism.highlight(n.firstChild.textContent,Prism.languages.css);n.firstChild.innerHTML=a,mceAnalytics.trackCSSExampleSelection(),l(),t(e.currentTarget)}}function s(e){f.applyCode(e.currentTarget.textContent,e.currentTarget)}function l(){var e=document.getElementById("default-example");if(e.classList.value.indexOf("hidden")>-1){for(var t=p.querySelectorAll("section"),n=0,a=t.length;n<a;n++)t[n].classList.add("hidden"),t[n].setAttribute("aria-hidden",!0);e.classList.remove("hidden"),e.setAttribute("aria-hidden",!1)}o()}function o(){for(var e of u)e.classList.remove("selected")}var c=document.getElementById("example-choice-list"),u=c.querySelectorAll(".example-choice"),d=document.querySelector("header"),g=0,m=[],p=document.getElementById("output"),f={applyCode:function(e,t,n){var a=/(\/\*)[\s\S]+(\*\/)/g,r=n||document.getElementById("example-element");e.replace(a,""),r.style.cssText=e,r.style.cssText?t.classList.remove("invalid"):t.classList.add("invalid")}};mceUtils.isPropertySupported(c.dataset.property)&&(!function(){d.classList.remove("hidden"),c.classList.add("live"),p.classList.remove("hidden"),document.addEventListener("cut",n),document.addEventListener("copy",n);for(let t=0,n=u.length;t<n;t++){var e=u[t];m.push(e.querySelector("code").textContent),e.getAttribute("initial-choice")&&(g=r(u,e)),e.addEventListener("click",i),e.addEventListener("keyup",s)}a()}(),t(u[g])),e.cssEditorUtils=f}(window);