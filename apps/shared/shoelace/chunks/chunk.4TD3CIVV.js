import{a as kt}from"./chunk.UVP462F6.js";import{a as Ct}from"./chunk.RUACWBWF.js";import{a as Ot,b as E,d as ft,f as zt}from"./chunk.PRU55YXS.js";import{c as ut}from"./chunk.SYBSOZNG.js";import{a as A,b as C,c as tt,e as b}from"./chunk.I4CX4JT3.js";function U(t){return t.split("-")[1]}function mt(t){return t==="y"?"height":"width"}function $(t){return t.split("-")[0]}function X(t){return["top","bottom"].includes($(t))?"x":"y"}function Dt(t,e,n){let{reference:i,floating:l}=t,r=i.x+i.width/2-l.width/2,o=i.y+i.height/2-l.height/2,s=X(e),c=mt(s),f=i[c]/2-l[c]/2,d=s==="x",a;switch($(e)){case"top":a={x:r,y:i.y-l.height};break;case"bottom":a={x:r,y:i.y+i.height};break;case"right":a={x:i.x+i.width,y:o};break;case"left":a={x:i.x-l.width,y:o};break;default:a={x:i.x,y:i.y}}switch(U(e)){case"start":a[s]-=f*(n&&d?-1:1);break;case"end":a[s]+=f*(n&&d?-1:1)}return a}var Bt=async(t,e,n)=>{let{placement:i="bottom",strategy:l="absolute",middleware:r=[],platform:o}=n,s=r.filter(Boolean),c=await(o.isRTL==null?void 0:o.isRTL(e)),f=await o.getElementRects({reference:t,floating:e,strategy:l}),{x:d,y:a}=Dt(f,i,c),u=i,h={},p=0;for(let m=0;m<s.length;m++){let{name:g,fn:y}=s[m],{x:w,y:x,data:T,reset:R}=await y({x:d,y:a,initialPlacement:i,placement:u,strategy:l,middlewareData:h,rects:f,platform:o,elements:{reference:t,floating:e}});d=w!=null?w:d,a=x!=null?x:a,h=C(A({},h),{[g]:A(A({},h[g]),T)}),R&&p<=50&&(p++,typeof R=="object"&&(R.placement&&(u=R.placement),R.rects&&(f=R.rects===!0?await o.getElementRects({reference:t,floating:e,strategy:l}):R.rects),{x:d,y:a}=Dt(f,u,c)),m=-1)}return{x:d,y:a,placement:u,strategy:l,middlewareData:h}};function Ht(t){return typeof t!="number"?function(e){return A({top:0,right:0,bottom:0,left:0},e)}(t):{top:t,right:t,bottom:t,left:t}}function et(t){return C(A({},t),{top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height})}async function it(t,e){var n;e===void 0&&(e={});let{x:i,y:l,platform:r,rects:o,elements:s,strategy:c}=t,{boundary:f="clippingAncestors",rootBoundary:d="viewport",elementContext:a="floating",altBoundary:u=!1,padding:h=0}=e,p=Ht(h),m=s[u?a==="floating"?"reference":"floating":a],g=et(await r.getClippingRect({element:(n=await(r.isElement==null?void 0:r.isElement(m)))==null||n?m:m.contextElement||await(r.getDocumentElement==null?void 0:r.getDocumentElement(s.floating)),boundary:f,rootBoundary:d,strategy:c})),y=a==="floating"?C(A({},o.floating),{x:i,y:l}):o.reference,w=await(r.getOffsetParent==null?void 0:r.getOffsetParent(s.floating)),x=await(r.isElement==null?void 0:r.isElement(w))&&await(r.getScale==null?void 0:r.getScale(w))||{x:1,y:1},T=et(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({rect:y,offsetParent:w,strategy:c}):y);return{top:(g.top-T.top+p.top)/x.y,bottom:(T.bottom-g.bottom+p.bottom)/x.y,left:(g.left-T.left+p.left)/x.x,right:(T.right-g.right+p.right)/x.x}}var dt=Math.min,q=Math.max;function pt(t,e,n){return q(t,dt(e,n))}var gt=t=>({name:"arrow",options:t,async fn(e){let{element:n,padding:i=0}=t||{},{x:l,y:r,placement:o,rects:s,platform:c}=e;if(n==null)return{};let f=Ht(i),d={x:l,y:r},a=X(o),u=mt(a),h=await c.getDimensions(n),p=a==="y"?"top":"left",m=a==="y"?"bottom":"right",g=s.reference[u]+s.reference[a]-d[a]-s.floating[u],y=d[a]-s.reference[a],w=await(c.getOffsetParent==null?void 0:c.getOffsetParent(n)),x=w?a==="y"?w.clientHeight||0:w.clientWidth||0:0;x===0&&(x=s.floating[u]);let T=g/2-y/2,R=f[p],D=x-h[u]-f[m],L=x/2-h[u]/2+T,N=pt(R,L,D),j=U(o)!=null&&L!=N&&s.reference[u]/2-(L<R?f[p]:f[m])-h[u]/2<0;return{[a]:d[a]-(j?L<R?R-L:D-L:0),data:{[a]:N,centerOffset:L-N}}}}),Zt=["top","right","bottom","left"],se=Zt.reduce((t,e)=>t.concat(e,e+"-start",e+"-end"),[]),te={left:"right",right:"left",bottom:"top",top:"bottom"};function nt(t){return t.replace(/left|right|bottom|top/g,e=>te[e])}function ee(t,e,n){n===void 0&&(n=!1);let i=U(t),l=X(t),r=mt(l),o=l==="x"?i===(n?"end":"start")?"right":"left":i==="start"?"bottom":"top";return e.reference[r]>e.floating[r]&&(o=nt(o)),{main:o,cross:nt(o)}}var ne={start:"end",end:"start"};function ht(t){return t.replace(/start|end/g,e=>ne[e])}var yt=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var n;let{placement:i,middlewareData:l,rects:r,initialPlacement:o,platform:s,elements:c}=e,Tt=t,{mainAxis:f=!0,crossAxis:d=!0,fallbackPlacements:a,fallbackStrategy:u="bestFit",fallbackAxisSideDirection:h="none",flipAlignment:p=!0}=Tt,m=tt(Tt,["mainAxis","crossAxis","fallbackPlacements","fallbackStrategy","fallbackAxisSideDirection","flipAlignment"]),g=$(i),y=$(o)===o,w=await(s.isRTL==null?void 0:s.isRTL(c.floating)),x=a||(y||!p?[nt(o)]:function(O){let F=nt(O);return[ht(O),F,ht(F)]}(o));a||h==="none"||x.push(...function(O,F,_,M){let S=U(O),z=function(I,ct,Jt){let Lt=["left","right"],Pt=["right","left"],Kt=["top","bottom"],Qt=["bottom","top"];switch(I){case"top":case"bottom":return Jt?ct?Pt:Lt:ct?Lt:Pt;case"left":case"right":return ct?Kt:Qt;default:return[]}}($(O),_==="start",M);return S&&(z=z.map(I=>I+"-"+S),F&&(z=z.concat(z.map(ht)))),z}(o,p,h,w));let T=[o,...x],R=await it(e,m),D=[],L=((n=l.flip)==null?void 0:n.overflows)||[];if(f&&D.push(R[g]),d){let{main:O,cross:F}=ee(i,r,w);D.push(R[O],R[F])}if(L=[...L,{placement:i,overflows:D}],!D.every(O=>O<=0)){var N,j;let O=(((N=l.flip)==null?void 0:N.index)||0)+1,F=T[O];if(F)return{data:{index:O,overflows:L},reset:{placement:F}};let _=(j=L.filter(M=>M.overflows[0]<=0).sort((M,S)=>M.overflows[1]-S.overflows[1])[0])==null?void 0:j.placement;if(!_)switch(u){case"bestFit":{var At;let M=(At=L.map(S=>[S.placement,S.overflows.filter(z=>z>0).reduce((z,I)=>z+I,0)]).sort((S,z)=>S[1]-z[1])[0])==null?void 0:At[0];M&&(_=M);break}case"initialPlacement":_=o}if(i!==_)return{reset:{placement:_}}}return{}}}};var wt=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){let{x:n,y:i}=e,l=await async function(r,o){let{placement:s,platform:c,elements:f}=r,d=await(c.isRTL==null?void 0:c.isRTL(f.floating)),a=$(s),u=U(s),h=X(s)==="x",p=["left","top"].includes(a)?-1:1,m=d&&h?-1:1,g=typeof o=="function"?o(r):o,{mainAxis:y,crossAxis:w,alignmentAxis:x}=typeof g=="number"?{mainAxis:g,crossAxis:0,alignmentAxis:null}:A({mainAxis:0,crossAxis:0,alignmentAxis:null},g);return u&&typeof x=="number"&&(w=u==="end"?-1*x:x),h?{x:w*m,y:y*p}:{x:y*p,y:w*m}}(e,t);return{x:n+l.x,y:i+l.y,data:l}}}};function ie(t){return t==="x"?"y":"x"}var xt=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){let{x:n,y:i,placement:l}=e,g=t,{mainAxis:r=!0,crossAxis:o=!1,limiter:s={fn:y=>{let{x:w,y:x}=y;return{x:w,y:x}}}}=g,c=tt(g,["mainAxis","crossAxis","limiter"]),f={x:n,y:i},d=await it(e,c),a=X($(l)),u=ie(a),h=f[a],p=f[u];if(r){let y=a==="y"?"bottom":"right";h=pt(h+d[a==="y"?"top":"left"],h,h-d[y])}if(o){let y=u==="y"?"bottom":"right";p=pt(p+d[u==="y"?"top":"left"],p,p-d[y])}let m=s.fn(C(A({},e),{[a]:h,[u]:p}));return C(A({},m),{data:{x:m.x-n,y:m.y-i}})}}};var ot=function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(e){let{placement:n,rects:i,platform:l,elements:r}=e,R=t,{apply:o=()=>{}}=R,s=tt(R,["apply"]),c=await it(e,s),f=$(n),d=U(n),a=X(n)==="x",{width:u,height:h}=i.floating,p,m;f==="top"||f==="bottom"?(p=f,m=d===(await(l.isRTL==null?void 0:l.isRTL(r.floating))?"start":"end")?"left":"right"):(m=f,p=d==="end"?"top":"bottom");let g=h-c[p],y=u-c[m],w=g,x=y;if(a?x=dt(u-c.right-c.left,y):w=dt(h-c.bottom-c.top,g),!e.middlewareData.shift&&!d){let D=q(c.left,0),L=q(c.right,0),N=q(c.top,0),j=q(c.bottom,0);a?x=u-2*(D!==0||L!==0?D+L:q(c.left,c.right)):w=h-2*(N!==0||j!==0?N+j:q(c.top,c.bottom))}await o(C(A({},e),{availableWidth:x,availableHeight:w}));let T=await l.getDimensions(r.floating);return u!==T.width||h!==T.height?{reset:{rects:!0}}:{}}}};function P(t){var e;return((e=t.ownerDocument)==null?void 0:e.defaultView)||window}function B(t){return P(t).getComputedStyle(t)}var Nt=Math.min,J=Math.max,at=Math.round;function Wt(t){let e=B(t),n=parseFloat(e.width),i=parseFloat(e.height),l=t.offsetWidth,r=t.offsetHeight,o=at(n)!==l||at(i)!==r;return o&&(n=l,i=r),{width:n,height:i,fallback:o}}function V(t){return jt(t)?(t.nodeName||"").toLowerCase():""}var rt;function Vt(){if(rt)return rt;let t=navigator.userAgentData;return t&&Array.isArray(t.brands)?(rt=t.brands.map(e=>e.brand+"/"+e.version).join(" "),rt):navigator.userAgent}function H(t){return t instanceof P(t).HTMLElement}function k(t){return t instanceof P(t).Element}function jt(t){return t instanceof P(t).Node}function Ft(t){return typeof ShadowRoot=="undefined"?!1:t instanceof P(t).ShadowRoot||t instanceof ShadowRoot}function st(t){let{overflow:e,overflowX:n,overflowY:i,display:l}=B(t);return/auto|scroll|overlay|hidden|clip/.test(e+i+n)&&!["inline","contents"].includes(l)}function oe(t){return["table","td","th"].includes(V(t))}function vt(t){let e=/firefox/i.test(Vt()),n=B(t),i=n.backdropFilter||n.WebkitBackdropFilter;return n.transform!=="none"||n.perspective!=="none"||!!i&&i!=="none"||e&&n.willChange==="filter"||e&&!!n.filter&&n.filter!=="none"||["transform","perspective"].some(l=>n.willChange.includes(l))||["paint","layout","strict","content"].some(l=>{let r=n.contain;return r!=null&&r.includes(l)})}function bt(){return/^((?!chrome|android).)*safari/i.test(Vt())}function Et(t){return["html","body","#document"].includes(V(t))}function _t(t){return k(t)?t:t.contextElement}var qt={x:1,y:1};function G(t){let e=_t(t);if(!H(e))return qt;let n=e.getBoundingClientRect(),{width:i,height:l,fallback:r}=Wt(e),o=(r?at(n.width):n.width)/i,s=(r?at(n.height):n.height)/l;return o&&Number.isFinite(o)||(o=1),s&&Number.isFinite(s)||(s=1),{x:o,y:s}}function Y(t,e,n,i){var l,r;e===void 0&&(e=!1),n===void 0&&(n=!1);let o=t.getBoundingClientRect(),s=_t(t),c=qt;e&&(i?k(i)&&(c=G(i)):c=G(t));let f=s?P(s):window,d=bt()&&n,a=(o.left+(d&&((l=f.visualViewport)==null?void 0:l.offsetLeft)||0))/c.x,u=(o.top+(d&&((r=f.visualViewport)==null?void 0:r.offsetTop)||0))/c.y,h=o.width/c.x,p=o.height/c.y;if(s){let m=P(s),g=i&&k(i)?P(i):i,y=m.frameElement;for(;y&&i&&g!==m;){let w=G(y),x=y.getBoundingClientRect(),T=getComputedStyle(y);x.x+=(y.clientLeft+parseFloat(T.paddingLeft))*w.x,x.y+=(y.clientTop+parseFloat(T.paddingTop))*w.y,a*=w.x,u*=w.y,h*=w.x,p*=w.y,a+=x.x,u+=x.y,y=P(y).frameElement}}return{width:h,height:p,top:u,right:a+h,bottom:u+p,left:a,x:a,y:u}}function W(t){return((jt(t)?t.ownerDocument:t.document)||window.document).documentElement}function lt(t){return k(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function Yt(t){return Y(W(t)).left+lt(t).scrollLeft}function Q(t){if(V(t)==="html")return t;let e=t.assignedSlot||t.parentNode||Ft(t)&&t.host||W(t);return Ft(e)?e.host:e}function Ut(t){let e=Q(t);return Et(e)?e.ownerDocument.body:H(e)&&st(e)?e:Ut(e)}function K(t,e){var n;e===void 0&&(e=[]);let i=Ut(t),l=i===((n=t.ownerDocument)==null?void 0:n.body),r=P(i);return l?e.concat(r,r.visualViewport||[],st(i)?i:[]):e.concat(i,K(i))}function St(t,e,n){let i;if(e==="viewport")i=function(o,s){let c=P(o),f=W(o),d=c.visualViewport,a=f.clientWidth,u=f.clientHeight,h=0,p=0;if(d){a=d.width,u=d.height;let m=bt();(!m||m&&s==="fixed")&&(h=d.offsetLeft,p=d.offsetTop)}return{width:a,height:u,x:h,y:p}}(t,n);else if(e==="document")i=function(o){let s=W(o),c=lt(o),f=o.ownerDocument.body,d=J(s.scrollWidth,s.clientWidth,f.scrollWidth,f.clientWidth),a=J(s.scrollHeight,s.clientHeight,f.scrollHeight,f.clientHeight),u=-c.scrollLeft+Yt(o),h=-c.scrollTop;return B(f).direction==="rtl"&&(u+=J(s.clientWidth,f.clientWidth)-d),{width:d,height:a,x:u,y:h}}(W(t));else if(k(e))i=function(o,s){let c=Y(o,!0,s==="fixed"),f=c.top+o.clientTop,d=c.left+o.clientLeft,a=H(o)?G(o):{x:1,y:1};return{width:o.clientWidth*a.x,height:o.clientHeight*a.y,x:d*a.x,y:f*a.y}}(e,n);else{let o=A({},e);if(bt()){var l,r;let s=P(t);o.x-=((l=s.visualViewport)==null?void 0:l.offsetLeft)||0,o.y-=((r=s.visualViewport)==null?void 0:r.offsetTop)||0}i=o}return et(i)}function Mt(t,e){return H(t)&&B(t).position!=="fixed"?e?e(t):t.offsetParent:null}function $t(t,e){let n=P(t),i=Mt(t,e);for(;i&&oe(i)&&B(i).position==="static";)i=Mt(i,e);return i&&(V(i)==="html"||V(i)==="body"&&B(i).position==="static"&&!vt(i))?n:i||function(l){let r=Q(l);for(;H(r)&&!Et(r);){if(vt(r))return r;r=Q(r)}return null}(t)||n}function re(t,e,n){let i=H(e),l=W(e),r=Y(t,!0,n==="fixed",e),o={scrollLeft:0,scrollTop:0},s={x:0,y:0};if(i||!i&&n!=="fixed")if((V(e)!=="body"||st(l))&&(o=lt(e)),H(e)){let c=Y(e,!0);s.x=c.x+e.clientLeft,s.y=c.y+e.clientTop}else l&&(s.x=Yt(l));return{x:r.left+o.scrollLeft-s.x,y:r.top+o.scrollTop-s.y,width:r.width,height:r.height}}var Z={getClippingRect:function(t){let{element:e,boundary:n,rootBoundary:i,strategy:l}=t,r=n==="clippingAncestors"?function(f,d){let a=d.get(f);if(a)return a;let u=K(f).filter(g=>k(g)&&V(g)!=="body"),h=null,p=B(f).position==="fixed",m=p?Q(f):f;for(;k(m)&&!Et(m);){let g=B(m),y=vt(m);g.position==="fixed"?h=null:(p?y||h:y||g.position!=="static"||!h||!["absolute","fixed"].includes(h.position))?h=g:u=u.filter(w=>w!==m),m=Q(m)}return d.set(f,u),u}(e,this._c):[].concat(n),o=[...r,i],s=o[0],c=o.reduce((f,d)=>{let a=St(e,d,l);return f.top=J(a.top,f.top),f.right=Nt(a.right,f.right),f.bottom=Nt(a.bottom,f.bottom),f.left=J(a.left,f.left),f},St(e,s,l));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}},convertOffsetParentRelativeRectToViewportRelativeRect:function(t){let{rect:e,offsetParent:n,strategy:i}=t,l=H(n),r=W(n);if(n===r)return e;let o={scrollLeft:0,scrollTop:0},s={x:1,y:1},c={x:0,y:0};if((l||!l&&i!=="fixed")&&((V(n)!=="body"||st(r))&&(o=lt(n)),H(n))){let f=Y(n);s=G(n),c.x=f.x+n.clientLeft,c.y=f.y+n.clientTop}return{width:e.width*s.x,height:e.height*s.y,x:e.x*s.x-o.scrollLeft*s.x+c.x,y:e.y*s.y-o.scrollTop*s.y+c.y}},isElement:k,getDimensions:function(t){return H(t)?Wt(t):t.getBoundingClientRect()},getOffsetParent:$t,getDocumentElement:W,getScale:G,async getElementRects(t){let{reference:e,floating:n,strategy:i}=t,l=this.getOffsetParent||$t,r=this.getDimensions;return{reference:re(e,await l(n),i),floating:A({x:0,y:0},await r(n))}},getClientRects:t=>Array.from(t.getClientRects()),isRTL:t=>B(t).direction==="rtl"};function Xt(t,e,n,i){i===void 0&&(i={});let{ancestorScroll:l=!0,ancestorResize:r=!0,elementResize:o=!0,animationFrame:s=!1}=i,c=l&&!s,f=c||r?[...k(t)?K(t):t.contextElement?K(t.contextElement):[],...K(e)]:[];f.forEach(h=>{c&&h.addEventListener("scroll",n,{passive:!0}),r&&h.addEventListener("resize",n)});let d,a=null;if(o){let h=!0;a=new ResizeObserver(()=>{h||n(),h=!1}),k(t)&&!s&&a.observe(t),k(t)||!t.contextElement||s||a.observe(t.contextElement),a.observe(e)}let u=s?Y(t):null;return s&&function h(){let p=Y(t);!u||p.x===u.x&&p.y===u.y&&p.width===u.width&&p.height===u.height||n(),u=p,d=requestAnimationFrame(h)}(),n(),()=>{var h;f.forEach(p=>{c&&p.removeEventListener("scroll",n),r&&p.removeEventListener("resize",n)}),(h=a)==null||h.disconnect(),a=null,s&&cancelAnimationFrame(d)}}var Gt=(t,e,n)=>{let i=new Map,l=A({platform:Z},n),r=C(A({},l.platform),{_c:i});return Bt(t,e,C(A({},l),{platform:r}))};function It(t){return ae(t)}function Rt(t){return t.assignedSlot?t.assignedSlot:t.parentNode instanceof ShadowRoot?t.parentNode.host:t.parentNode}function ae(t){for(let e=t;e;e=Rt(e))if(e instanceof Element&&getComputedStyle(e).display==="none")return null;for(let e=Rt(t);e;e=Rt(e)){if(!(e instanceof Element))continue;let n=getComputedStyle(e);if(n.display!=="contents"&&(n.position!=="static"||n.filter!=="none"||e.tagName==="BODY"))return e}return null}var v=class extends zt{constructor(){super(...arguments);this.active=!1;this.placement="top";this.strategy="absolute";this.distance=0;this.skidding=0;this.arrow=!1;this.arrowPlacement="anchor";this.arrowPadding=10;this.flip=!1;this.flipFallbackPlacements="";this.flipFallbackStrategy="best-fit";this.flipPadding=0;this.shift=!1;this.shiftPadding=0;this.autoSizePadding=0}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){this.stop()}async updated(n){super.updated(n),n.has("active")&&(this.active?this.start():this.stop()),n.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor=="string"){let n=this.getRootNode();this.anchorEl=n.getElementById(this.anchor)}else this.anchor instanceof Element?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');if(this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),!this.anchorEl)throw new Error("Invalid anchor element: no anchor could be found using the anchor slot or the anchor attribute.");this.start()}start(){this.anchorEl&&(this.cleanup=Xt(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(n=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>n())):n()})}reposition(){if(!this.active||!this.anchorEl)return;let n=[wt({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?n.push(ot({apply:({rects:l})=>{let r=this.sync==="width"||this.sync==="both",o=this.sync==="height"||this.sync==="both";this.popup.style.width=r?`${l.reference.width}px`:"",this.popup.style.height=o?`${l.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&n.push(yt({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy==="best-fit"?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&n.push(xt({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?n.push(ot({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:l,availableHeight:r})=>{this.autoSize==="vertical"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-height",`${r}px`):this.style.removeProperty("--auto-size-available-height"),this.autoSize==="horizontal"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-width",`${l}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&n.push(gt({element:this.arrowEl,padding:this.arrowPadding}));let i=this.strategy==="absolute"?l=>Z.getOffsetParent(l,It):Z.getOffsetParent;Gt(this.anchorEl,this.popup,{placement:this.placement,middleware:n,strategy:this.strategy,platform:C(A({},Z),{getOffsetParent:i})}).then(({x:l,y:r,middlewareData:o,placement:s})=>{let c=getComputedStyle(this).direction==="rtl",f={top:"bottom",right:"left",bottom:"top",left:"right"}[s.split("-")[0]];if(this.setAttribute("data-current-placement",s),Object.assign(this.popup.style,{left:`${l}px`,top:`${r}px`}),this.arrow){let d=o.arrow.x,a=o.arrow.y,u="",h="",p="",m="";if(this.arrowPlacement==="start"){let g=typeof d=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";u=typeof a=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",h=c?g:"",m=c?"":g}else if(this.arrowPlacement==="end"){let g=typeof d=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";h=c?"":g,m=c?g:"",p=typeof a=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else this.arrowPlacement==="center"?(m=typeof d=="number"?"calc(50% - var(--arrow-size-diagonal))":"",u=typeof a=="number"?"calc(50% - var(--arrow-size-diagonal))":""):(m=typeof d=="number"?`${d}px`:"",u=typeof a=="number"?`${a}px`:"");Object.assign(this.arrowEl.style,{top:u,right:h,bottom:p,left:m,[f]:"calc(var(--arrow-size-diagonal) * -1)"})}}),this.emit("sl-reposition")}render(){return ut`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <div
        part="popup"
        class=${Ct({popup:!0,"popup--active":this.active,"popup--fixed":this.strategy==="fixed","popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?ut`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};v.styles=kt,b([ft(".popup")],v.prototype,"popup",2),b([ft(".popup__arrow")],v.prototype,"arrowEl",2),b([E()],v.prototype,"anchor",2),b([E({type:Boolean,reflect:!0})],v.prototype,"active",2),b([E({reflect:!0})],v.prototype,"placement",2),b([E({reflect:!0})],v.prototype,"strategy",2),b([E({type:Number})],v.prototype,"distance",2),b([E({type:Number})],v.prototype,"skidding",2),b([E({type:Boolean})],v.prototype,"arrow",2),b([E({attribute:"arrow-placement"})],v.prototype,"arrowPlacement",2),b([E({attribute:"arrow-padding",type:Number})],v.prototype,"arrowPadding",2),b([E({type:Boolean})],v.prototype,"flip",2),b([E({attribute:"flip-fallback-placements",converter:{fromAttribute:t=>t.split(" ").map(e=>e.trim()).filter(e=>e!==""),toAttribute:t=>t.join(" ")}})],v.prototype,"flipFallbackPlacements",2),b([E({attribute:"flip-fallback-strategy"})],v.prototype,"flipFallbackStrategy",2),b([E({type:Object})],v.prototype,"flipBoundary",2),b([E({attribute:"flip-padding",type:Number})],v.prototype,"flipPadding",2),b([E({type:Boolean})],v.prototype,"shift",2),b([E({type:Object})],v.prototype,"shiftBoundary",2),b([E({attribute:"shift-padding",type:Number})],v.prototype,"shiftPadding",2),b([E({attribute:"auto-size"})],v.prototype,"autoSize",2),b([E()],v.prototype,"sync",2),b([E({type:Object})],v.prototype,"autoSizeBoundary",2),b([E({attribute:"auto-size-padding",type:Number})],v.prototype,"autoSizePadding",2),v=b([Ot("sl-popup")],v);export{v as a};
