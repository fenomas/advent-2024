(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const w of document.querySelectorAll('link[rel="modulepreload"]'))A(w);new MutationObserver(w=>{for(const r of w)if(r.type==="childList")for(const X of r.addedNodes)X.tagName==="LINK"&&X.rel==="modulepreload"&&A(X)}).observe(document,{childList:!0,subtree:!0});function u(w){const r={};return w.integrity&&(r.integrity=w.integrity),w.referrerPolicy&&(r.referrerPolicy=w.referrerPolicy),w.crossOrigin==="use-credentials"?r.credentials="include":w.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function A(w){if(w.ep)return;w.ep=!0;const r=u(w);fetch(w.href,r)}})();const X1=(M,n)=>M===n,ln={equals:X1};let dn=Gn;const G=1,J=2,Rn={owned:null,cleanups:null,context:null,owner:null};var P=null;let rn=null,b1=null,Y=null,O=null,C=null,$=0;function g1(M,n){const u=Y,A=P,w=M.length===0,r=n===void 0?A:n,X=w?Rn:{owned:null,cleanups:null,context:r?r.context:null,owner:r},v=w?M:()=>M(()=>gn(()=>Q(X)));P=X,Y=null;try{return U(v,!0)}finally{Y=u,P=A}}function y(M,n){n=n?Object.assign({},ln,n):ln;const u={value:M,observers:null,observerSlots:null,comparator:n.equals||void 0},A=w=>(typeof w=="function"&&(w=w(u.value)),Cn(u,w));return[S1.bind(u),A]}function I(M,n,u){const A=yn(M,n,!1,G);nn(A)}function t1(M,n,u){dn=l1;const A=yn(M,n,!1,G);A.user=!0,C?C.push(A):nn(A)}function gn(M){if(Y===null)return M();const n=Y;Y=null;try{return M()}finally{Y=n}}function S1(){if(this.sources&&this.state)if(this.state===G)nn(this);else{const M=O;O=null,U(()=>k(this),!1),O=M}if(Y){const M=this.observers?this.observers.length:0;Y.sources?(Y.sources.push(this),Y.sourceSlots.push(M)):(Y.sources=[this],Y.sourceSlots=[M]),this.observers?(this.observers.push(Y),this.observerSlots.push(Y.sources.length-1)):(this.observers=[Y],this.observerSlots=[Y.sources.length-1])}return this.value}function Cn(M,n,u){let A=M.value;return(!M.comparator||!M.comparator(A,n))&&(M.value=n,M.observers&&M.observers.length&&U(()=>{for(let w=0;w<M.observers.length;w+=1){const r=M.observers[w],X=rn&&rn.running;X&&rn.disposed.has(r),(X?!r.tState:!r.state)&&(r.pure?O.push(r):C.push(r),r.observers&&In(r)),X||(r.state=G)}if(O.length>1e6)throw O=[],new Error},!1)),n}function nn(M){if(!M.fn)return;Q(M);const n=$;e1(M,M.value,n)}function e1(M,n,u){let A;const w=P,r=Y;Y=P=M;try{A=M.fn(n)}catch(X){return M.pure&&(M.state=G,M.owned&&M.owned.forEach(Q),M.owned=null),M.updatedAt=u+1,Nn(X)}finally{Y=r,P=w}(!M.updatedAt||M.updatedAt<=u)&&(M.updatedAt!=null&&"observers"in M?Cn(M,A):M.value=A,M.updatedAt=u)}function yn(M,n,u,A=G,w){const r={fn:M,state:A,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:n,owner:P,context:P?P.context:null,pure:u};return P===null||P!==Rn&&(P.owned?P.owned.push(r):P.owned=[r]),r}function V(M){if(M.state===0)return;if(M.state===J)return k(M);if(M.suspense&&gn(M.suspense.inFallback))return M.suspense.effects.push(M);const n=[M];for(;(M=M.owner)&&(!M.updatedAt||M.updatedAt<$);)M.state&&n.push(M);for(let u=n.length-1;u>=0;u--)if(M=n[u],M.state===G)nn(M);else if(M.state===J){const A=O;O=null,U(()=>k(M,n[0]),!1),O=A}}function U(M,n){if(O)return M();let u=!1;n||(O=[]),C?u=!0:C=[],$++;try{const A=M();return o1(u),A}catch(A){u||(C=null),O=null,Nn(A)}}function o1(M){if(O&&(Gn(O),O=null),M)return;const n=C;C=null,n.length&&U(()=>dn(n),!1)}function Gn(M){for(let n=0;n<M.length;n++)V(M[n])}function l1(M){let n,u=0;for(n=0;n<M.length;n++){const A=M[n];A.user?M[u++]=A:V(A)}for(n=0;n<u;n++)V(M[n])}function k(M,n){M.state=0;for(let u=0;u<M.sources.length;u+=1){const A=M.sources[u];if(A.sources){const w=A.state;w===G?A!==n&&(!A.updatedAt||A.updatedAt<$)&&V(A):w===J&&k(A,n)}}}function In(M){for(let n=0;n<M.observers.length;n+=1){const u=M.observers[n];u.state||(u.state=J,u.pure?O.push(u):C.push(u),u.observers&&In(u))}}function Q(M){let n;if(M.sources)for(;M.sources.length;){const u=M.sources.pop(),A=M.sourceSlots.pop(),w=u.observers;if(w&&w.length){const r=w.pop(),X=u.observerSlots.pop();A<w.length&&(r.sourceSlots[X]=A,w[A]=r,u.observerSlots[A]=X)}}if(M.tOwned){for(n=M.tOwned.length-1;n>=0;n--)Q(M.tOwned[n]);delete M.tOwned}if(M.owned){for(n=M.owned.length-1;n>=0;n--)Q(M.owned[n]);M.owned=null}if(M.cleanups){for(n=M.cleanups.length-1;n>=0;n--)M.cleanups[n]();M.cleanups=null}M.state=0}function s1(M){return M instanceof Error?M:new Error(typeof M=="string"?M:"Unknown error",{cause:M})}function Nn(M,n=P){throw s1(M)}function d(M,n){return gn(()=>M(n||{}))}function i1(M,n,u){let A=u.length,w=n.length,r=A,X=0,v=0,b=n[w-1].nextSibling,g=null;for(;X<w||v<r;){if(n[X]===u[v]){X++,v++;continue}for(;n[w-1]===u[r-1];)w--,r--;if(w===X){const t=r<A?v?u[v-1].nextSibling:u[r-v]:b;for(;v<r;)M.insertBefore(u[v++],t)}else if(r===v)for(;X<w;)(!g||!g.has(n[X]))&&n[X].remove(),X++;else if(n[X]===u[r-1]&&u[v]===n[w-1]){const t=n[--w].nextSibling;M.insertBefore(u[v++],n[X++].nextSibling),M.insertBefore(u[--r],t),n[w]=u[r]}else{if(!g){g=new Map;let S=v;for(;S<r;)g.set(u[S],S++)}const t=g.get(n[X]);if(t!=null)if(v<t&&t<r){let S=X,e=1,o;for(;++S<w&&S<r&&!((o=g.get(n[S]))==null||o!==t+e);)e++;if(e>t-v){const l=n[X];for(;v<t;)M.insertBefore(u[v++],l)}else M.replaceChild(u[v++],n[X++])}else X++;else n[X++].remove()}}}const sn="_$DX_DELEGATE";function h1(M,n,u,A={}){let w;return g1(r=>{w=r,n===document?M():f(n,M(),n.firstChild?null:void 0,u)},A.owner),()=>{w(),n.textContent=""}}function N(M,n,u){let A;const w=()=>{const X=document.createElement("template");return X.innerHTML=M,X.content.firstChild},r=()=>(A||(A=w())).cloneNode(!0);return r.cloneNode=r,r}function zn(M,n=window.document){const u=n[sn]||(n[sn]=new Set);for(let A=0,w=M.length;A<w;A++){const r=M[A];u.has(r)||(u.add(r),n.addEventListener(r,a1))}}function m1(M,n,u){u==null?M.removeAttribute(n):M.setAttribute(n,u)}function c1(M,n,u,A){Array.isArray(u)?(M[`$$${n}`]=u[0],M[`$$${n}Data`]=u[1]):M[`$$${n}`]=u}function B1(M,n,u={}){const A=Object.keys(n||{}),w=Object.keys(u);let r,X;for(r=0,X=w.length;r<X;r++){const v=w[r];!v||v==="undefined"||n[v]||(hn(M,v,!1),delete u[v])}for(r=0,X=A.length;r<X;r++){const v=A[r],b=!!n[v];!v||v==="undefined"||u[v]===b||!b||(hn(M,v,!0),u[v]=b)}return u}function f(M,n,u,A){if(u!==void 0&&!A&&(A=[]),typeof n!="function")return q(M,n,A,u);I(w=>q(M,n(),w,u),A)}function hn(M,n,u){const A=n.trim().split(/\s+/);for(let w=0,r=A.length;w<r;w++)M.classList.toggle(A[w],u)}function a1(M){let n=M.target;const u=`$$${M.type}`,A=M.target,w=M.currentTarget,r=b=>Object.defineProperty(M,"target",{configurable:!0,value:b}),X=()=>{const b=n[u];if(b&&!n.disabled){const g=n[`${u}Data`];if(g!==void 0?b.call(n,g,M):b.call(n,M),M.cancelBubble)return}return n.host&&typeof n.host!="string"&&!n.host._$host&&n.contains(M.target)&&r(n.host),!0},v=()=>{for(;X()&&(n=n._$host||n.parentNode||n.host););};if(Object.defineProperty(M,"currentTarget",{configurable:!0,get(){return n||document}}),M.composedPath){const b=M.composedPath();r(b[0]);for(let g=0;g<b.length-2&&(n=b[g],!!X());g++){if(n._$host){n=n._$host,v();break}if(n.parentNode===w)break}}else v();r(A)}function q(M,n,u,A,w){for(;typeof u=="function";)u=u();if(n===u)return u;const r=typeof n,X=A!==void 0;if(M=X&&u[0]&&u[0].parentNode||M,r==="string"||r==="number"){if(r==="number"&&(n=n.toString(),n===u))return u;if(X){let v=u[0];v&&v.nodeType===3?v.data!==n&&(v.data=n):v=document.createTextNode(n),u=z(M,u,A,v)}else u!==""&&typeof u=="string"?u=M.firstChild.data=n:u=M.textContent=n}else if(n==null||r==="boolean")u=z(M,u,A);else{if(r==="function")return I(()=>{let v=n();for(;typeof v=="function";)v=v();u=q(M,v,u,A)}),()=>u;if(Array.isArray(n)){const v=[],b=u&&Array.isArray(u);if(wn(v,n,u,w))return I(()=>u=q(M,v,u,A,!0)),()=>u;if(v.length===0){if(u=z(M,u,A),X)return u}else b?u.length===0?mn(M,v,A):i1(M,u,v):(u&&z(M),mn(M,v));u=v}else if(n.nodeType){if(Array.isArray(u)){if(X)return u=z(M,u,A,n);z(M,u,null,n)}else u==null||u===""||!M.firstChild?M.appendChild(n):M.replaceChild(n,M.firstChild);u=n}}return u}function wn(M,n,u,A){let w=!1;for(let r=0,X=n.length;r<X;r++){let v=n[r],b=u&&u[M.length],g;if(!(v==null||v===!0||v===!1))if((g=typeof v)=="object"&&v.nodeType)M.push(v);else if(Array.isArray(v))w=wn(M,v,b)||w;else if(g==="function")if(A){for(;typeof v=="function";)v=v();w=wn(M,Array.isArray(v)?v:[v],Array.isArray(b)?b:[b])||w}else M.push(v),w=!0;else{const t=String(v);b&&b.nodeType===3&&b.data===t?M.push(b):M.push(document.createTextNode(t))}}return w}function mn(M,n,u=null){for(let A=0,w=n.length;A<w;A++)M.insertBefore(n[A],u)}function z(M,n,u,A){if(u===void 0)return M.textContent="";const w=A||document.createTextNode("");if(n.length){let r=!1;for(let X=n.length-1;X>=0;X--){const v=n[X];if(w!==v){const b=v.parentNode===M;!r&&!X?b?M.replaceChild(w,v):M.insertBefore(w,u):b&&v.remove()}else r=!0}}else M.insertBefore(w,u);return[w]}const p1=[["1580061","23046913"],["11","31"]],Y1=(M="")=>{const n=M.split(`
`).map(w=>w.split(/\s+/)),u=n.map(([w])=>+w).sort(),A=n.map(([,w])=>+w).sort();return u.reduce((w,r,X)=>w+Math.abs(r-A[X]),0)},O1=(M="")=>{const n=M.split(`
`).map(r=>r.split(/\s+/)),u=n.map(([r])=>+r),A=n.map(([,r])=>+r),w={...[0]};return A.forEach(r=>w[r]=(w[r]||0)+1),u.reduce((r,X)=>r+X*(w[X]||0),0)},P1=Object.freeze(Object.defineProperty({__proto__:null,answers:p1,part1:Y1,part2:O1},Symbol.toStringTag,{value:"Module"})),f1=[["341","404"],["2","4"]],d1=(M="")=>M.split(`
`).reduce((n,u)=>{const A=u.split(/ +/).map(v=>+v),w=(A.at(-1)||0)>A[0]?1:-1,r=[1,2,3].map(v=>v*w);return A.every((v,b,g)=>b===0?!0:r.includes(v-g[b-1]))?n+1:n},0),R1=(M="")=>{const n=(u,A)=>u.every((w,r,X)=>r===0?!0:A.includes(w-X[r-1]));return M.split(`
`).reduce((u,A)=>{const w=A.split(/ +/).map(b=>+b),r=(w.at(-1)||0)>w[0]?1:-1,X=[1,2,3].map(b=>b*r);return n(w,X)||w.find((b,g,t)=>{const S=[...t];return S.splice(g,1),n(S,X)})?u+1:u},0)},C1=Object.freeze(Object.defineProperty({__proto__:null,answers:f1,part1:d1,part2:R1},Symbol.toStringTag,{value:"Module"})),y1=[["187833789","94455185"],["161","161"],["161","48"]],Dn=(M="")=>{let n=0;return M.matchAll(/mul\((\d{1,3},\d{1,3})\)/g)?.forEach(([,u])=>{const[A,w]=u.split(",").map(r=>+r);n+=A*w}),n},G1=(M="")=>{let n=0;return M="do()"+M,M.split("don't()").forEach(u=>{const[,...A]=u.split("do()");n+=Dn(A.join(""))}),n},I1=Object.freeze(Object.defineProperty({__proto__:null,answers:y1,part1:Dn,part2:G1},Symbol.toStringTag,{value:"Module"})),N1=[["2575","2041"],["18","9"]],z1=(M="")=>{const n=M.split(`
`).map(r=>r.split("")),u=(r=0,X=0)=>n[r]&&n[r][X]||"-",A=[[1,0],[-1,0],[0,1],[0,-1],[1,1],[1,-1],[-1,1],[-1,-1]];let w=0;return n.forEach((r,X)=>{r.forEach((v,b)=>{v==="X"&&A.forEach(([g,t])=>{"XMAS".split("").every((e,o)=>u(X+o*g,b+o*t)===e)&&w++})})}),w},D1=(M="")=>{const n=M.split(`
`).map(r=>r.split("")),u=(r=0,X=0)=>n[r]&&n[r][X]||"-",A=[[1,1],[-1,-1],[1,-1],[-1,1]];let w=0;return n.forEach((r,X)=>{r.forEach((v,b)=>{if(v!=="A")return;const g=A.map(([t,S])=>u(X+t,b+S));g[0]!==g[1]&&g.sort().join("")==="MMSS"&&w++})}),w},F1=Object.freeze(Object.defineProperty({__proto__:null,answers:N1,part1:z1,part2:D1},Symbol.toStringTag,{value:"Module"})),Z1=[["5964","4719"],["143","123"]],Q1=(M="")=>tn(M).total,tn=(M="")=>{const[n,u]=M.split(`

`),A=new Map;n.split(`
`).forEach(X=>{const[v,b]=X.split("|");A.has(v)||A.set(v,[]),A.get(v).push(b)});let w=0;const r=u.split(`
`).map(X=>X.split(",").reverse()).filter(X=>{const v=new Set,b=X.every(g=>v.has(g)?!1:((A.get(g)||[]).forEach((t="")=>v.add(t)),!0));return b&&(w+=+X[X.length>>1]),!b});return{total:w,wrongSets:r,follows:A}},U1=(M="")=>{const{wrongSets:n,follows:u}=tn(M);return n.reduce((A,w)=>(w.sort((r,X)=>u.has(r)&&u.get(r).includes(X)?-1:1),A+ +w[w.length>>1]),0)},x1=Object.freeze(Object.defineProperty({__proto__:null,answers:Z1,part1:Q1,part1_impl:tn,part2:U1},Symbol.toStringTag,{value:"Module"})),K1=[["4789","1304"],["41","6"]],H=[[-1,0],[0,1],[1,0],[0,-1]],Fn=(M="")=>{const n=M.split(`
`).map(g=>g.split("")),u=(g=0,t=0)=>n[g]&&n[g][t]||"-";let A=[0,0];n.find((g,t)=>g.find((S,e)=>S==="^"&&(A=[t,e])));const w=new Set,r=[];let X=0,[v,b]=A;for(;;){const[g,t]=H[X],S=v*n.length+b;w.has(S)||r.push([v,b]),w.add(S);const e=u(v+g,b+t);if(e==="-")break;e==="#"?X=(X+1)%4:[v,b]=[v+g,b+t]}return{visited:r,lines:n,start:A}},E1=(M="")=>Fn(M).visited.length,j1=(M="")=>{const{visited:n,lines:u,start:A}=Fn(M),w=[Array.from({length:u.length},()=>[]),Array.from({length:u.length},()=>[])],r=(t,S)=>{w[0][t].push(S),w[1][S].push(t)},X=(t,S)=>{w[0][t]=w[0][t].filter(e=>e!==S),w[1][S]=w[1][S].filter(e=>e!==t)},v=(t,S,e)=>{const[o,l]=H[e],h=o?1:0,[B,s]=h===0?[t,S]:[S,t],i=w[h][B],m=Math.sign(o||l)>0?i.reduce((c,p)=>p>s&&p<c?p:c,1/0):i.reduce((c,p)=>p<s&&p>c?p:c,-1/0);return isFinite(m)?Math.abs(m-s)-1:-1};u.forEach((t,S)=>{t.forEach((e,o)=>{e==="#"&&r(S,o)})});const b=()=>{let[t,S]=A,e=0;const o=H.map(()=>new Set);for(;;){const[l,h]=H[e],B=o[e],s=t*u.length+S;if(B.has(s))return!0;B.add(s);const i=v(t,S,e);if(i===-1)return!1;[t,S]=[t+l*i,S+h*i],e=(e+1)%4}};let g=0;return b()&&g++,n.shift(),n.forEach(([t,S])=>{r(t,S),b()&&g++,X(t,S)}),g},T1=Object.freeze(Object.defineProperty({__proto__:null,answers:K1,part1:E1,part2:j1},Symbol.toStringTag,{value:"Module"})),H1=[["1298103531759","140575048428831"],["3749","11387"]],J1=(M="")=>{const n=(u=0,A=[0],w=0)=>w===0?u===A[0]:u<0||u!==Math.floor(u)?!1:n(u-A[w],A,w-1)||n(u/A[w],A,w-1);return M.split(`
`).reduce((u,A)=>{const[w,r]=A.split(":").map(b=>b.trim()),X=r.split(/ +/).map(b=>+b);return n(+w,X,X.length-1)?u+ +w:u},0)},V1=(M="")=>{const n=(u=0,A=[0],w=0)=>{if(w===0)return u===A[0];if(u<0||u!==Math.floor(u))return!1;const[r,X]=[""+u,""+A[w]];return r.endsWith(X)&&n(+r.slice(0,-X.length),A,w-1)?!0:n(u-A[w],A,w-1)||n(u/A[w],A,w-1)};return M.split(`
`).reduce((u,A)=>{const[w,r]=A.split(":").map(b=>b.trim()),X=r.split(/ +/).map(b=>+b);return n(+w,X,X.length-1)?u+ +w:u},0)},k1=Object.freeze(Object.defineProperty({__proto__:null,answers:H1,part1:J1,part2:V1},Symbol.toStringTag,{value:"Module"})),q1=[["249","905"],["14","34"]],Zn=M=>{const n=new Map;let[u,A]=[0,0];return M.split(`
`).forEach((w,r)=>{w.trim().split("").forEach((X,v)=>{u=Math.max(u,r+1),A=Math.max(A,v+1),X!=="."&&(n.has(X)||n.set(X,[]),n.get(X).push([r,v]))})}),{nodes:n,si:u,sj:A}},_1=(M="")=>{const{nodes:n,si:u,sj:A}=Zn(M),w=new Set,r=(X=0,v=0,b=0,g=0)=>{const[t,S]=[b-X,g-v],[e,o]=[X-t,v-S];e<0||e>=u||o<0||o>=A||w.add(`${e},${o}`)};return n.entries().forEach(([,X])=>{X.forEach(([v,b],g=0)=>{X.forEach(([t,S],e=0)=>{g!==e&&(r(v,b,t,S),r(t,S,v,b))})})}),w.size},L1=(M="")=>{const{nodes:n,si:u,sj:A}=Zn(M),w=new Set,r=(X=0,v=0,b=0,g=0,t=1)=>{const[S,e]=[b-X,g-v];for(let o=1;;o++){const[l,h]=[X-S*t*o,v-e*t*o];if(l<0||l>=u||h<0||h>=A)return;w.add(`${l},${h}`)}};return n.entries().forEach(([,X])=>{X.forEach(([v,b],g=0)=>{X.forEach(([t,S],e=0)=>{g!==e&&(r(v,b,t,S,1),r(t,S,v,b,1),r(v,b,t,S,-1),r(t,S,v,b,-1))})})}),w.size},W1=Object.freeze(Object.defineProperty({__proto__:null,answers:q1,part1:_1,part2:L1},Symbol.toStringTag,{value:"Module"})),$1=[["6370402949053","6398096697992"],["1928","2858"]],n3=(M="")=>{const n=[],u=[];M.trim().split("").forEach((b,g)=>(g%2?u:n).push(+b));let A=0,w=0,r=n.length-1,X=n.length-1,v=0;for(let b=0;b<n.length;b++){let g=n[b];for(;g-- >0;)A+=w*v++;w++;let t=u[b]||0;for(;t-- >0;){for(;n[r]===0;)r--,X--;if(r<=b)break;A+=X*v,v++,n[r]--}}return A},M3=(M="")=>{const n=[],u=[];M.trim().split("").forEach((X,v)=>(v%2?u:n).push(+X));const A=n.map((X,v)=>v);for(let X=n.length-1;X>0;X--){const v=n[X];if(v===0)continue;const b=A[X];let g=0;for(;g<X&&!(u[g]>=v);g++);g>=X||(u[g]-=v,n[X]=0,A[X]=0,u[X]+=v,n.splice(g+1,0,v),A.splice(g+1,0,b),u.splice(g,0,0),X++)}let w=0,r=0;return n.forEach((X,v)=>{for(;X-- >0;)w+=A[v]*r,r++;r+=u[v]}),w},u3=Object.freeze(Object.defineProperty({__proto__:null,answers:$1,part1:n3,part2:M3},Symbol.toStringTag,{value:"Module"})),r3=[["557","1062"],["36","81"]],Qn=[[1,0],[-1,0],[0,1],[0,-1]],v3=(M="")=>{const n=new Set,u=M.split(`
`).map((w,r)=>w.split("").map((X,v)=>(X==="9"&&n.add([r,v].join(",")),X))),A=(w=0,r=0)=>u[w]&&u[w][r]||"-";return n.keys().reduce((w,r)=>{let X=new Set;X.add(r);for(let v=9;v>0;v--){const b=new Set;X.keys().forEach(g=>{const[t,S]=g.split(",").map(Number);Qn.forEach(([e,o])=>{A(t+e,S+o)===String(v-1)&&b.add([t+e,S+o].join(","))})}),X=b}return w+X.size},0)},A3=(M="")=>{const n=new Map,u=M.split(`
`).map((r,X)=>r.split("").map((v,b)=>(v==="9"&&n.set([X,b].join(","),1),v))),A=(r=0,X=0)=>u[r]&&u[r][X]||"-";let w=n;for(let r=9;r>0;r--){const X=new Map;w.entries().forEach(([v,b])=>{const[g,t]=v.split(",").map(Number);Qn.forEach(([S,e])=>{if(A(g+S,t+e)===String(r-1)){const l=[g+S,t+e].join(","),h=X.get(l)||0;X.set(l,b+h)}})}),w=X}return w.values().reduce((r,X)=>r+X)},w3=Object.freeze(Object.defineProperty({__proto__:null,answers:r3,part1:v3,part2:A3},Symbol.toStringTag,{value:"Module"})),X3=[["222461","264350935776416"],["55312","65601038650482"]],Un=(M="",n=1)=>{const u=X=>{if(X==="0")return["1",""];if(X.length%2)return[String(+X*2024),""];{const v=X.slice(0,X.length/2),b=X.slice(X.length/2);return[+v,+b].map(String)}},A=new Map,w=X=>{A.has(X)&&A.get(X);const v=u(X);return A.set(X,v),v};let r=new Map;M.split(/ +/).forEach(X=>{r.set(X,(r.get(X)||0)+1)});for(let X=0;X<n;X++){const v=new Map;r.entries().forEach(([b,g])=>{const[t,S]=w(b);v.set(t,(v.get(t)||0)+g),S&&v.set(S,(v.get(S)||0)+g)}),r=v}return r.values().reduce((X,v)=>X+v,0)},b3=(M="")=>Un(M,25),g3=(M="")=>Un(M,75),t3=Object.freeze(Object.defineProperty({__proto__:null,answers:X3,part1:b3,part2:g3},Symbol.toStringTag,{value:"Module"})),S3=[["1550156","946084"],["140","80"]],_=[[0,1],[0,-1],[1,0],[-1,0]],e3=(M="")=>{const n=M.split(`
`).map(v=>v.split("")),u=(v=0,b=0)=>n[v]&&n[v][b]||"-",A=n.map(v=>v.map(()=>!1)),w=(v=0,b=0,g="",t)=>{u(v,b)===g&&(A[v][b]||(A[v][b]=!0,t(v,b),_.forEach(([S,e])=>w(v+S,b+e,g,t))))},r=(v,b)=>{let g=0;return b.forEach(([t,S])=>{_.forEach(([e,o])=>{u(t+e,S+o)!==v&&g++})}),g};let X=0;return n.forEach((v,b)=>{v.forEach((g,t)=>{if(A[b][t])return;const S=[];w(b,t,g,(o,l)=>S.push([o,l]));const e=r(g,S);X+=e*S.length})}),X},o3=(M="")=>{const n=M.split(`
`).map(v=>v.split("")),u=(v=0,b=0)=>n[v]&&n[v][b]||"-",A=n.map(v=>v.map(()=>!1)),w=(v=0,b=0,g="",t)=>{u(v,b)===g&&(A[v][b]||(A[v][b]=!0,t(v,b),_.forEach(([S,e])=>w(v+S,b+e,g,t))))},r=(v,b)=>{let g=0;const t=new Set;return b.sort(([S,e],[o,l])=>S-o||e-l),b.forEach(([S,e])=>{_.forEach(([o,l],h)=>{if(u(S+o,e+l)!==v){const B=[h,S,e].join(","),s=[h,S+l,e+o].join(","),i=[h,S-l,e-o].join(",");!t.has(s)&&!t.has(i)&&g++,t.add(B)}})}),g};let X=0;return n.forEach((v,b)=>{v.forEach((g,t)=>{if(A[b][t])return;const S=[];w(b,t,g,(o,l)=>S.push([o,l]));const e=r(g,S);X+=e*S.length})}),X},l3=Object.freeze(Object.defineProperty({__proto__:null,answers:S3,part1:e3,part2:o3},Symbol.toStringTag,{value:"Module"})),s3=[["29023","96787395375634"],["480","875318608908"]],xn=(M="",n=0)=>{let u=0;return M.split(`

`).forEach(A=>{const[w,r,X]=A.split(/\n/).map(m=>m.split(":")[1]),[v,b]=w.split(",").map(m=>Number(m.split("+")[1])),[g,t]=r.split(",").map(m=>Number(m.split("+")[1])),[S,e]=X.split(",").map(m=>Number(m.split("=")[1])+n),[o,l]=[b/v,0],[h,B]=[t/g,e-S*t/g],s=(B-l)/(o-h),i=s/v,a=(S-s)/g;Math.abs(i-Math.round(i))>1e-4||(u+=i*3+a)}),u},i3=(M="")=>xn(M,1e13),h3=Object.freeze(Object.defineProperty({__proto__:null,answers:s3,part1:xn,part2:i3},Symbol.toStringTag,{value:"Module"})),m3=[["221655456","7858"],["12","-1"]],c3=(M="")=>{const[n,u]=M.length>500?[101,103]:[11,7],A=100,w=[0,0,0,0],r=(X,v)=>(X%v+v)%v;return M.split(`
`).forEach(X=>{const[v,b]=X.split(" ").map(s=>s.split("=")[1]),[g,t]=v.split(",").map(Number),[S,e]=b.split(",").map(Number),[o,l]=[r(g+S*A,n),r(t+e*A,u)];if(o===(n-1)/2||l===(u-1)/2)return;const h=o<n/2?0:1,B=l<u/2?0:2;w[h+B]++}),w.reduce((X,v)=>X*v,1)},B3=(M="")=>{const[n,u]=M.length>100?[101,103]:[11,7],A=(v,b)=>(v%b+b)%b,w=M.split(`
`).map(v=>{const[b,g]=v.split(" ").map(e=>e.split("=")[1]),t=b.split(",").map(Number),S=g.split(",").map(Number);return{pos:t,vel:S}});let r=-1,X=100;for(let v=0;v<1e4;v++){let b=0;if(w.forEach(({pos:g,vel:t})=>{const S=A(g[1]+t[1]*v,u);(S==44||S===76)&&b++}),!(b<50))if(r<0)r=v;else{X=v-r;break}}for(let v=r;v<1e5;v+=X){const b=new Set;if(w.forEach(({pos:g,vel:t})=>{const S=A(g[1]+t[1]*v,u),e=A(g[0]+t[0]*v,n);e<35||e>65||S===44&&b.add(e)}),!(b.size<20))return v}return-1},a3=Object.freeze(Object.defineProperty({__proto__:null,answers:m3,part1:c3,part2:B3},Symbol.toStringTag,{value:"Module"})),p3=[["1437174","1437468"],["10092","9021"]],Kn={"^":[-1,0],v:[1,0],"<":[0,-1],">":[0,1]},Y3=(M="")=>{const[n,u]=M.split(`

`),A=n.indexOf("@"),w=n.split(`
`).map(t=>t.split("")),r=(t=0,S=0)=>w[t]&&w[t][S]||"-",X=(t=0,S=0,e="")=>w[t]&&(w[t][S]=e),v=w[0].length+1,b=[Math.floor(A/v),A%v];u.split("").forEach(t=>{const S=Kn[t]||"";if(!S)return;let[e,o]=b;for(;;){e+=S[0],o+=S[1];const l=r(e,o);if(l==="#")return;if(l===".")break}for(X(b[0],b[1],"."),b[0]+=S[0],b[1]+=S[1],X(b[0],b[1],"@");b[0]!==e||b[1]!==o;)X(e,o,"O"),e-=S[0],o-=S[1]});let g=0;return w.forEach((t,S)=>{t.forEach((e,o)=>{e==="O"&&(g+=100*S+o)})}),g},O3=(M="")=>{const n={"#":"##",O:"[]",".":"..","@":"@."},[u,A]=M.split(`

`),w=u.indexOf("@"),r=u.split(`
`).map(S=>S.split("").map(e=>n[e]).join("").split("")),X=(S=0,e=0)=>r[S]&&r[S][e]||"-",v=(S=0,e=0,o="")=>r[S]&&(r[S][e]=o),b=r[0].length/2+1,g=[Math.floor(w/b),2*(w%b)];A.split("").forEach(S=>{const e=Kn[S]||"";if(!e)return;const[o,l]=e,[h,B]=g,s=l===0,i=[[h,B]];for(const[m,c]of i){const[p,R]=[m+o,c+l],K=X(p,R);if(K==="#")return;K!=="."&&(i.push([p,R]),s&&(K==="["&&i.push([p,R+1]),K==="]"&&i.push([p,R-1])))}const a=i.filter((m,c)=>i.findIndex(p=>m[0]===p[0]&&m[1]===p[1])===c);for(let m=a.length-1;m>=0;m--){const[c,p]=a[m],R=X(c,p);v(c+o,p+l,R),v(c,p,".")}g[0]+=o,g[1]+=l});let t=0;return r.forEach((S,e)=>{S.forEach((o,l)=>{o==="["&&(t+=100*e+l)})}),t},P3=Object.freeze(Object.defineProperty({__proto__:null,answers:p3,part1:Y3,part2:O3},Symbol.toStringTag,{value:"Module"})),f3=[["85432","465"],["11048","64"]],Xn=[[-1,0],[0,1],[1,0],[0,-1]],En=(M="")=>{const n=M.indexOf("S"),u=M.indexOf("E"),A=M.split(`
`).map(o=>o.split("")),w=(o=0,l=0)=>A[o]&&A[o][l]||"#",r=A[0].length+1,X=[Math.floor(n/r),n%r],v=[Math.floor(u/r),u%r],b=new Map,g=(o=0,l=0)=>[o,l].join(","),t=(o=0,l=0,h=0,B=0)=>{const s=g(o,l),i=Xn.map((m,c)=>B+[0,1e3,2e3,1e3][Math.abs(h-c)]);if(!b.has(s))return b.set(s,i);const a=b.get(s).map((m=0,c=0)=>Math.min(m,i[c]));b.set(s,a)},S=(o=0,l=0,h=0,B=0)=>b.has(g(o,l))?B<b.get(g(o,l))[h]:!0;t(...X,1,0);const e=[X];for(;e.length;){const[o,l]=e.shift()||[],h=b.get(g(o,l));Xn.forEach(([B,s],i)=>{const[a,m]=[o+B,l+s];if(w(a,m)==="#")return;const c=h[i]+1;S(a,m,i,c)&&(t(a,m,i,c),e.push([a,m]))})}return{epos:v,costs:b,key:g}},d3=(M="")=>{const{epos:n,costs:u}=En(M);return Math.min(...u.get(n.join(","))||1/0)},R3=(M="")=>{const{epos:n,costs:u,key:A}=En(M),w=u.get(A(...n)),r=Math.min(...w),X=[];r===w[0]&&X.push([...n,0]),r===w[1]&&X.push([...n,1]);const v=new Set;for(;X.length;){const[b,g,t]=X.pop()||[];v.add(A(b,g));const S=u.get(A(b,g))[t];Xn.forEach(([e,o],l)=>{const[h,B]=[b-e,g-o],s=u.get(A(h,B));if(!s)return;const i=1+[0,1e3,2e3,1e3][Math.abs(t-l)];s[l]===S-i&&X.push([h,B,l])})}return v.size},C3=Object.freeze(Object.defineProperty({__proto__:null,answers:f3,part1:d3,part2:R3},Symbol.toStringTag,{value:"Module"})),y3=[["7,1,5,2,4,0,7,6,1","37222273957364"],["4,6,3,5,6,3,5,2,1,0","0"],["5,7,3,0","117440"]],Sn=(M,n)=>{let u=BigInt(n),A=BigInt(0),w=BigInt(0);const r=S=>BigInt(+S),X=S=>S==="4"?u:S==="5"?A:S==="6"?w:BigInt(+S),v=(S="")=>u/BigInt(2)**X(S),b={0:(S="")=>u=v(S),1:(S="")=>A=A^r(S),2:(S="")=>A=X(S)%BigInt(8),3:(S="")=>u!==BigInt(0)&&(g=Number(r(S))),4:()=>A=A^w,5:(S="")=>t.push(Number(X(S))%8),6:(S="")=>A=v(S),7:(S="")=>w=v(S)};let g=0;const t=[];for(;;){if(g>=M.length)return t;const S=M[g],e=M[g+1];g+=2,b[S](e)}},G3=(M="")=>{const[n,,,,u]=M.split(`
`),A=u.split(": ")[1].split(","),w=+n.split(": ")[1];return Sn(A,w).join(",")},I3=(M="")=>{const n=M.split(`
`)[4].split(": ")[1].split(","),u=n.map(Number);let A=0;for(let w=0;w<u.length;w++){const r=u.slice(u.length-w-1).join("");for(let X=0;X<1e3;X++){const v=A*8+X;if(r===Sn(n,v).join("")){A=v;break}}}return A},N3=Object.freeze(Object.defineProperty({__proto__:null,answers:y3,evalProg:Sn,part1:G3,part2:I3},Symbol.toStringTag,{value:"Module"}));var Z={},E={},j={},T={},cn;function z3(){if(cn)return T;cn=1,Object.defineProperty(T,"__esModule",{value:!0});let M=class{constructor(u){this.comparator=u.comparator,this.data=u.initialValues?u.initialValues.slice(0):[],this._heapify()}_heapify(){if(this.data.length>0)for(let u=0;u<this.data.length;u++)this._bubbleUp(u)}queue(u){this.data.push(u),this._bubbleUp(this.data.length-1)}dequeue(){const u=this.data[0],A=this.data.pop();return this.data.length>0&&A!==void 0&&(this.data[0]=A,this._bubbleDown(0)),u}peek(){return this.data[0]}clear(){this.data.length=0}_bubbleUp(u){for(;u>0;){const A=u-1>>>1;if(this.comparator(this.data[u],this.data[A])<0){const w=this.data[A];this.data[A]=this.data[u],this.data[u]=w,u=A}else break}}_bubbleDown(u){let A=this.data.length-1;for(;;){const w=(u<<1)+1,r=w+1;let X=u;if(w<=A&&this.comparator(this.data[w],this.data[X])<0&&(X=w),r<=A&&this.comparator(this.data[r],this.data[X])<0&&(X=r),X!==u){const v=this.data[X];this.data[X]=this.data[u],this.data[u]=v,u=X}else break}}};return T.default=M,T}var Bn;function D3(){if(Bn)return j;Bn=1,Object.defineProperty(j,"__esModule",{value:!0});const M=z3();let n=class{constructor(A){this._length=0,this._length=A.initialValues?A.initialValues.length:0,this.strategy=new M.default(A)}get length(){return this._length}queue(A){this._length++,this.strategy.queue(A)}dequeue(){if(!this._length)throw new Error("Empty queue");return this._length--,this.strategy.dequeue()}peek(){if(!this._length)throw new Error("Empty queue");return this.strategy.peek()}clear(){this._length=0,this.strategy.clear()}};return j.default=n,j}var an;function F3(){if(an)return E;an=1,Object.defineProperty(E,"__esModule",{value:!0});const M=D3();return E.default=M.default,E}var pn;function Z3(){if(pn)return Z;pn=1,Object.defineProperty(Z,"__esModule",{value:!0}),Z.Pathfinder=void 0;const M=F3(),n=(A,w,r=0,X=0,v=!0)=>({node:A,previous:w,f:r,g:X,open:v});class u{methods;maxIterations=1e6;constructor(w={}){this.methods={nodeToPrimitive:r=>r,getNeighbors:()=>[],getMoveCost:()=>1,getHeuristic:()=>1,...w}}findPath(w,r){const X=this.methods.nodeToPrimitive(w),v=this.methods.nodeToPrimitive(r),b=new M.default({comparator:(h,B)=>h.f-B.f}),g={},t=n(w,null,0,0,!0);b.queue(t),g[X]=t;let S=0;for(;b.length>0;){if(S++>this.maxIterations)throw new Error("Infinite loop!");const h=b.dequeue();if(!h.open)continue;if(this.methods.nodeToPrimitive(h.node)===v)break;h.open=!1,this.methods.getNeighbors(h.node).forEach(s=>{const i=this.methods.getMoveCost(h.node,s);if(i<0)return;const a=this.methods.nodeToPrimitive(s),m=g[a],c=h.g+i;if(m&&m.g<=c)return;const p=this.methods.getHeuristic(s,r);if(m)m.open=!0,m.g=c,m.f=c+p,m.previous=h,b.queue(m);else{const R=n(s,h,c+p,c,!0);g[a]=R,b.queue(R)}})}b.clear();const e=g[v];if(!e)return[];const o=[e.node];let l=e;for(;l.previous;)o.push(l.previous.node),l=l.previous;return o.reverse()}}return Z.Pathfinder=u,Z}var jn=Z3();const Q3=[["336","24,30"],["22","6,1"]],U3=[[-1,0],[0,1],[1,0],[0,-1]],Tn=(M="")=>{const[n,u,A]=M.length<1e3?[7,7,12]:[71,71,1024],w=M.split(`
`).map(g=>g.split(",").map(Number)),r=Array.from(Array(n)).map(()=>Array.from(Array(u)).fill(".")),X=(g=0,t=0)=>r[g]&&r[g][t]||"#",v=(g=0,t=0,S="#")=>{r[g]&&(r[g][t]=S)},b=new jn.Pathfinder({nodeToPrimitive:g=>g.join(","),getNeighbors:([g,t])=>U3.map(([S,e])=>[g+S,t+e]),getMoveCost:(g,[t,S])=>X(t,S)==="."?1:-1,getHeuristic:(g,t)=>Math.abs(g[0]-t[0])+Math.abs(g[1]-t[1])});return{si:n,sj:u,ct:A,locs:w,set:v,finder:b}},x3=(M="")=>{const{si:n,sj:u,ct:A,locs:w,set:r,finder:X}=Tn(M);return w.forEach(([v,b],g)=>g<A&&r(v,b,"#")),X.findPath([0,0],[n-1,u-1]).length-1},K3=(M="")=>{const{si:n,sj:u,locs:A,set:w,finder:r}=Tn(M);return A.forEach(([X,v])=>w(X,v,"#")),A.reverse().find(([X,v])=>{if(w(X,v,"."),r.findPath([0,0],[n-1,u-1]).length!==0)return[X,v].join(",")})},E3=Object.freeze(Object.defineProperty({__proto__:null,answers:Q3,part1:x3,part2:K3},Symbol.toStringTag,{value:"Module"})),j3=[["369","761826581538190"],["6","16"]],Hn=M=>{const[n,u]=M.split(`

`),A=n.split(", ").map(v=>v.trim()),w=u.split(`
`).map(v=>v.trim()),r=new Map([["",1]]),X=(v="")=>{if(r.has(v))return r.get(v)||0;let b=0;for(const g of A)v.startsWith(g)&&(b+=X(v.slice(g.length)));return r.set(v,b),b};return w.map(X)},T3=(M="")=>Hn(M).filter(n=>n>0).length,H3=(M="")=>Hn(M).reduce((n,u)=>n+u,0),J3=Object.freeze(Object.defineProperty({__proto__:null,answers:j3,part1:T3,part2:H3},Symbol.toStringTag,{value:"Module"})),V3=[["1389","1005068"],["10","285"]],k3=[[-1,0],[0,1],[1,0],[0,-1]],Jn=(M,n=1,u=10)=>{const A=M.split(`
`).map(s=>s.trim().split("")),[w,r]=[A.length,A[0].length],X=(s=0,i=0)=>A[s]&&A[s][i]||"#",v=M.indexOf("S"),b=M.indexOf("E"),g=[Math.floor(v/(w+1)),v%(w+1)],t=[Math.floor(b/(w+1)),b%(w+1)],e=new jn.Pathfinder({nodeToPrimitive:s=>s.join(","),getNeighbors:([s,i])=>k3.map(([a,m])=>[s+a,i+m]),getMoveCost:(s,[i,a])=>X(i,a)==="#"?-1:1,getHeuristic:(s,i)=>Math.abs(s[0]-i[0])+Math.abs(s[1]-i[1])}).findPath(g,t),o=new Map,l=(s=0,i=0)=>s<0||i<0||s>=w||i>=r?-1:s*r+i;e.forEach(([s,i],a)=>o.set(l(s,i),a));const h=[];for(let s=-n;s<=n;s++)for(let i=-n;i<=n;i++){const a=Math.abs(s)+Math.abs(i);a<=n&&h.push([s,i,a])}let B=0;return e.forEach(([s,i])=>{const a=o.get(l(s,i))||0;h.forEach(([m,c,p])=>{(o.get(l(s+m,i+c))||0)-a-p>=u&&B++})}),B},q3=(M="")=>Jn(M,2,M.length<1e3?10:100),_3=(M="")=>Jn(M,20,M.length<1e3?50:100),L3=Object.freeze(Object.defineProperty({__proto__:null,answers:V3,part1:q3,part2:_3},Symbol.toStringTag,{value:"Module"})),W3=[["184180","231309103124520"],["126384","154115708116294"]],$3="789456123-0A",n2="-^A<v>",Yn=(M,n)=>{const u=M.indexOf(n);return[Math.floor(u/3),u%3]},M2=(M,n,u)=>{if(n===u)return"A";const[A,w]=Yn(M,n),[r,X]=Yn(M,u),[v,b]=[r-A,X-w],g=(v>0?"v":"^").repeat(Math.abs(v)),t=(b>0?">":"<").repeat(Math.abs(b));return v===0?t+"A":b===0?g+"A":M[A*3+w+b]==="-"?g+t+"A":M[(A+v)*3+w]==="-"||b<0?t+g+"A":g+t+"A"},vn=new Map,Vn=(M,n,u,A=!1)=>{const w=`${M},${n},${u}`;return vn.has(w)||vn.set(w,u2(M,n,u,A)),vn.get(w)||0},u2=(M,n,u,A=!1)=>{const w=M2(A?$3:n2,M,n);if(u===1)return w.length;let r=0;return w.split("").forEach((X,v)=>{r+=Vn(w[v-1]||"A",X,u-1)}),r},kn=(M="",n=2)=>{let u=0;return M.split(/ *\n */).forEach(A=>{let w=0;A.split("").forEach((r,X)=>{w+=Vn(A[X-1]||"A",r,n+1,!0)}),u+=w*parseInt(A.trim())}),u},r2=(M="")=>kn(M,25),v2=Object.freeze(Object.defineProperty({__proto__:null,answers:W3,part1:kn,part2:r2},Symbol.toStringTag,{value:"Module"})),A2=[["16619522798","1854"],["37327623","24"]],On=(1<<24)-1,qn=(M,n=1)=>{for(;n-- >0;)M=(M^M<<6)&On,M=M^M>>5,M=(M^M<<11)&On;return M},w2=(M="")=>M.split(`
`).reduce((n,u)=>n+qn(Number(u),2e3),0),X2=(M="")=>{const n=new Map,u=(1<<28)-1;let A=0;return M.split(`
`).forEach(w=>{const r=new Set;let X=Number(w),v=0,b=0;for(let g=0;g<2e3;g++){X=qn(X);const t=X%10,S=t-v+9;if(b=(b<<7|S)&u,v=t,!r.has(b)&&g>=5){r.add(b);const e=(n.get(b)||0)+t;n.set(b,e),e>A&&(A=e)}}}),A},b2=Object.freeze(Object.defineProperty({__proto__:null,answers:A2,part1:w2,part2:X2},Symbol.toStringTag,{value:"Module"})),g2=[["926","az,ed,hz,it,ld,nh,pc,td,ty,ux,wc,yg,zz"],["7","co,de,ka,ta"]],_n=M=>{const n=new Map;return M.split(`
`).forEach(u=>{const[A,w]=u.split("-").map(r=>r.trim());n.has(A)||n.set(A,[]),n.has(w)||n.set(w,[]),n.get(A)?.push(w),n.get(w)?.push(A)}),n},t2=(M="")=>{const n=_n(M),u=new Set;return n.keys().forEach(A=>{A.startsWith("t")&&n.get(A)?.forEach(w=>{w!==A&&n.get(w)?.forEach(r=>{r===w||r===A||n.get(r)?.includes(A)&&u.add([A,w,r].sort().join("-"))})})}),u.size},S2=(M="")=>{const n=_n(M),u=new Set;let A=["-"];const w=(r,X)=>{const v=n.get(r)?.filter(b=>X.every(g=>n.get(b)?.includes(g)))||[];X.length+v.length<A.length||(v.forEach(b=>{if(u.has(b))return;const g=[...X,b];g.length>A.length&&(A=g),w(b,g)}),u.add(r))};return n.keys().forEach(r=>w(r,[])),A.sort().join(",")},e2=Object.freeze(Object.defineProperty({__proto__:null,answers:g2,part1:t2,part2:S2},Symbol.toStringTag,{value:"Module"})),o2=[["43559017878162","fhc,ggt,hqk,mwh,qhj,z06,z11,z35"],["2024","-"]],l2=(M=0,n=0,u="")=>{if(u==="AND")return M&n;if(u==="OR")return M|n;if(u==="XOR")return M^n;throw"?"},bn=(M=0)=>String(M).padStart(2,"0"),Ln=M=>{const[n,u]=M.split(`

`),A=new Map,w=new Map;return n.split(`
`).forEach(r=>{const[X,v]=r.split(": ");A.set(X,Number(v))}),u.split(`
`).forEach(r=>{const[X,v]=r.split(/ *-> */),[b,g,t]=X.split(/ +/);w.set(v,[b,g,t])}),{vals:A,rules:w}},s2=(M="")=>{const{vals:n,rules:u}=Ln(M),A=r=>{if(n.has(r))return n.get(r)||0;if(!u.has(r))return 0;const[X,v,b]=u.get(r)||[],g=l2(A(X),A(b),v);return n.set(r,g),g};let w=0;for(let r=0;r<50;r++)A("z"+bn(r))&&(w+=2**r);return w},i2=(M="")=>{if(M.length<1e3)return"-";const{rules:n}=Ln(M),u=[],A=[""];n.entries().forEach(([r,[X,v,b]])=>{if([X[0],b[0]].sort().join("")==="xy"){if(X.slice(1)!==b.slice(1))throw"? aaa";const t=parseInt(X.slice(1));if(v==="OR")throw"? bbb";v==="XOR"&&(A[t]=r)}});for(let r=1;r<45;r++){const X="z"+bn(r),[,v]=n.get(X)||[];if(v==="XOR")continue;let b="";for(const[g,[t,S,e]]of n)(t===A[r]||e===A[r])&&S==="XOR"&&(b=g);if(!b)throw"? ccc";u.push([X,b])}const w=(r="",X="")=>{const[v,b]=[n.get(r),n.get(X)];n.set(r,b||[]),n.set(X,v||[])};u.forEach(([r,X])=>w(r,X));for(let r=2;r<45;r++){const X="z"+bn(r),[v,b,g]=n.get(X)||[];if(b!=="XOR")continue;const[,t]=n.get(v)||[],[,S]=n.get(g)||[];if([t,S].sort().join(",")==="OR,XOR")continue;const e=t==="OR"?g:v;u.push([e,A[r]])}return u.flat().sort().join(",")},h2=Object.freeze(Object.defineProperty({__proto__:null,answers:o2,part1:s2,part2:i2},Symbol.toStringTag,{value:"Module"})),m2=[["3320","★"],["3","★"]],c2=(M="")=>{const n=[[0]].slice(1),u=[[0]].slice(1);M.split(`

`).forEach(w=>{const r=w.split(`
`).map(v=>v.trim().split("")),X=r[0].map((v,b)=>r.map((g,t)=>r[t][b]).join(""));X[0].startsWith("#")&&u.push(X.map(v=>v.indexOf("."))),X[0].startsWith(".")&&n.push(X.map(v=>6-v.indexOf("#")))});const A=(w=[0],r=[0])=>w.every((X,v)=>X+r[v]<=6);return u.reduce((w,r)=>w+n.reduce((X,v)=>A(r,v)?X+1:X,0),0)},B2=()=>"★",a2=Object.freeze(Object.defineProperty({__proto__:null,answers:m2,part1:c2,part2:B2},Symbol.toStringTag,{value:"Module"})),p2=`3   4
4   3
2   5
1   3
3   9
3   3`,Y2=`77221   93653
61169   27995
49546   69782
11688   41563
15820   48282
63235   37517
28850   68189
80735   25255
42616   65322
55068   99897
30851   35509
14907   49013
64732   92011
16709   68830
67643   36207
44080   23559
96480   58330
99450   40186
21169   63410
58096   21671
53828   79572
47026   44529
90101   28656
45773   73412
71303   85991
45304   78294
96528   23559
19794   17882
74831   17211
88912   11644
98961   80435
15788   96101
16350   86995
96806   19028
99959   77868
58887   90255
42568   25255
29278   88912
94028   63269
42810   21548
97490   71747
89051   24477
73916   31808
97751   88912
73608   77868
62426   13754
29429   36177
11070   10894
78656   85185
31308   60500
96166   91114
36906   85134
99662   77868
66402   41563
37085   14475
80907   53324
61650   53324
84223   63753
83891   47827
15973   77536
68843   40593
98854   31274
42426   97404
25255   67531
44559   50141
93909   50674
28070   32858
24880   24813
29338   89795
64883   77868
66924   57646
32984   66502
32238   39062
38816   23559
58770   65322
74953   91636
70592   19028
93111   11644
31065   23537
67370   19028
18314   47412
71075   74334
21544   44529
59137   50980
20440   80749
14393   38495
72130   90255
43828   68830
23262   73660
11923   50980
47754   14164
96043   34362
27162   28090
20838   50713
75009   11121
92099   31274
22054   38248
43518   80106
68189   13153
50520   12727
51425   40674
42998   31053
52443   33051
37256   54436
16648   95555
81123   17329
46974   79835
36328   77868
76373   23559
82592   70046
70600   22417
27116   89690
28090   34969
86348   23559
53145   50980
30203   83301
23347   77681
76433   26236
28046   92869
58920   50980
25518   28090
12791   44529
61967   31808
98022   53056
24326   12263
41095   13121
24045   82448
31274   16530
78021   21589
63029   19658
75684   14475
31258   36493
40561   48589
20457   54974
14783   88465
39433   23537
34774   53324
10455   14329
26338   74416
55227   37003
36963   40380
31910   68189
94894   18220
23166   44111
48884   46787
73036   89795
83519   25205
50205   93653
85926   50141
69194   23559
25529   11642
10182   31274
13638   61987
83588   19028
75911   20768
44692   24325
43278   94888
48148   24394
86205   99327
82605   58818
52770   68189
89068   84917
66452   83679
50217   85099
64914   52073
76460   78294
43026   24410
44179   50980
47653   90255
78061   50980
14475   71478
77868   37150
99645   28090
86267   70055
58072   68830
96428   66585
77501   50141
52344   93653
49534   35509
46925   12437
40005   87987
17329   86995
17585   89795
32296   59660
81836   11644
89435   65322
55149   59423
56971   50141
26342   95142
57894   56227
49762   33007
48949   65641
40453   53505
67613   23537
27110   87987
25231   63910
92546   50713
70074   27554
39649   93653
93231   30520
60008   79179
18449   47209
68828   36207
18908   72254
55426   44661
62522   87987
60923   25255
85721   68107
35153   71814
20053   24813
24233   22904
36237   92731
92077   68189
30105   50674
37032   90255
12745   54116
41563   53324
24700   29145
60226   85335
50713   64775
29972   51790
79176   19794
40017   96101
90724   41345
51608   39176
46178   50141
26151   23489
19569   44529
34368   86052
18948   50801
62091   17329
89749   38984
68315   37514
52396   19794
14981   14475
36038   69571
50048   50980
60796   41563
69942   72877
80976   25234
56722   90255
49489   28090
60768   65557
70753   85065
15233   23522
94697   87600
40958   41532
91709   40116
83586   19028
88140   24977
56993   50980
17980   53324
12421   97982
30183   40884
50452   53324
91314   90651
69995   19028
16588   28090
22432   98658
86088   77868
46361   65322
97178   75705
37444   79320
12275   96101
47016   16942
36822   87327
62082   31274
68265   64314
87344   24603
40642   23559
87254   38755
62372   50713
89026   68830
88519   96101
53514   31808
24686   41563
23817   68705
26704   89031
37908   65322
22665   35601
75378   59200
16797   86995
55847   68189
55932   72688
41470   96101
43557   17329
45439   77868
41230   76226
25104   92869
43736   93653
85938   93653
74153   54726
73956   70350
70419   37102
81275   64160
30656   32684
46218   32617
67969   31808
61544   81806
39376   56568
14769   60336
10199   97703
61064   40091
75531   30486
17211   31808
75184   74633
24565   61765
83922   44529
11644   25255
71836   14393
53030   19028
83437   33190
33687   54998
92054   82083
48250   68533
10977   34363
51050   19028
80898   68276
26442   68830
39875   65514
24976   76417
31946   23537
95278   90255
71678   26450
49641   28580
12962   13674
13598   30362
40620   21256
49062   92869
88449   79529
80153   94081
36918   70556
77902   99228
41848   99097
26032   39378
23830   50980
49712   78294
95464   65322
76971   27393
67074   22132
17629   71246
92019   92869
20780   96521
68372   16880
49710   88060
94680   52634
28626   57101
31808   60809
25578   28090
12020   25255
46008   33046
27712   36207
17168   53033
92923   87987
94668   65843
59490   48858
69085   38485
28242   14664
18302   96101
64047   71241
62752   73532
28873   59278
22206   18029
57298   85374
26420   78294
74055   30817
74377   45566
81846   17058
35184   27305
72054   89795
78666   41563
80545   96101
69240   51322
76319   36831
23617   14475
53848   93653
65082   36888
18802   93491
63942   23559
80208   22876
17018   68830
78018   51611
35520   75130
43479   88543
18522   96101
41260   15010
58041   21675
96272   68830
73601   78294
44788   52104
67152   89795
57671   61399
33841   56764
41963   53394
41010   28090
53937   65322
75472   76675
22253   92068
24277   93653
62012   14475
27539   50141
29180   41637
27151   35922
28752   23559
31602   47673
80298   50906
94689   38297
87987   48139
51692   61967
93653   86995
99694   96638
50948   11644
87830   19794
57579   93403
60947   72082
18514   53324
99194   25255
57630   93653
49914   10526
34613   94340
32145   16105
39569   62764
14118   31274
38901   19016
47443   66925
83812   31274
61920   50141
88684   50713
32305   31808
58695   50713
20016   42720
68955   31976
96299   99509
83258   96101
49424   68830
97130   14043
34668   50936
27567   35509
57890   65959
58399   78860
88934   50980
70656   66788
91507   44529
53671   87987
75858   71137
14726   13674
25416   31274
90521   50075
37289   96101
79415   19028
21158   25355
53210   16168
35192   81526
67240   23559
42967   65310
81598   93094
12765   36207
23853   41643
78439   22984
13052   50141
56642   93653
19028   82791
89371   36244
89795   50799
41542   90489
49486   72630
26630   50763
35019   68830
62271   78294
16433   77868
42466   57338
63666   39984
56231   83564
51132   96101
33675   74200
94670   70445
51236   17822
52493   64460
45346   86995
41620   31274
80479   88912
46200   90255
13789   60686
98564   76843
44974   92717
76047   80674
60650   89430
55723   45722
89426   97853
33961   98414
32872   68189
65322   12029
29922   36159
74923   34697
37065   59688
66622   23559
68253   14475
28664   53324
62981   25761
83161   50674
22849   50980
11119   76308
22980   13794
76171   19411
96351   28221
45573   90255
19850   79146
97828   90483
23867   85271
36353   50141
46579   87987
73434   23559
57169   68189
68768   41682
59354   97617
62181   64641
34167   53324
28374   24803
55863   57352
25058   33040
76126   53005
97283   51641
25887   29253
43067   50713
51616   61868
97533   16129
50692   80951
43173   41626
93917   76055
84713   53465
24130   13599
56773   50980
15310   44529
63375   50141
75875   93653
22284   33135
46294   77836
29713   14393
95318   83346
83264   61967
39267   47771
61101   86995
47882   96101
24345   70347
50674   14475
17296   12880
52605   11644
40817   78294
36207   93653
16045   96101
91784   68830
34583   69934
71867   28090
74898   22671
54609   27206
33070   26257
18570   57394
16766   87036
62825   21503
39793   17504
12038   82452
37265   12706
69479   44529
96101   44260
49175   50713
70708   55412
50136   14475
27300   96101
75794   62368
10277   87990
30825   87987
35563   24149
12505   91890
11323   14393
89922   84455
10927   65359
50656   71304
47973   11644
17156   92869
98964   96101
50980   59345
94733   23559
22743   26134
90255   54273
80006   65322
10157   92869
70496   28090
25569   41226
79982   92869
34897   76485
83357   86388
26352   79503
67432   15174
49155   72153
36311   86995
14394   65333
70928   51667
67367   23559
48195   57003
52001   26154
63251   21651
21894   89795
50774   43252
85637   36207
79243   11644
49512   57954
22454   15919
84214   20805
67121   86995
49247   78035
79313   34840
33168   19814
48657   92888
59824   74905
30088   68830
74246   90052
78389   65322
88418   28090
93716   62226
74962   29324
47309   50980
93517   14393
23895   68175
34548   25255
32628   84730
55988   31274
82578   40953
51728   16926
19440   27805
42922   45159
52930   41563
91562   31274
23559   62680
92150   26879
78315   61783
43601   91325
87621   17838
78580   65350
94778   77868
68519   83273
35509   66389
82288   52439
65083   19794
86995   13010
66618   95850
18656   70145
98537   65322
60842   52161
68830   10132
99689   24077
33740   89795
45595   53090
78239   36207
20185   36207
87307   69366
83009   77868
34685   88642
13674   28090
82450   69909
44812   75146
54296   92869
73558   94990
21422   48229
49473   10547
66108   68189
71169   74202
78276   40690
82977   78294
61842   15634
31582   95459
39064   14475
70204   18593
71244   87987
31642   50490
98413   37109
61175   50141
37168   23559
44093   11032
18806   40848
91249   73483
95812   32572
93644   68189
30669   20850
75404   92869
53324   50141
80675   50216
14897   73401
34074   29952
16366   32630
95656   28090
73964   58896
90705   66916
92869   59662
99522   78294
35903   19794
33033   42610
55650   50980
29289   11753
32302   58345
76036   57644
74870   31274
85035   77868
79322   25255
50332   31274
78294   44529
93000   53324
36560   19028
40041   53525
70360   89795
19074   98749
32829   89603
61436   71046
89938   85369
52708   28090
83958   53324
88155   67097
32730   75527
64221   23559
60391   97432
70047   20185
12372   73527
46501   29274
66552   14746
56373   51614
95596   11782
81196   72623
32282   60515
49504   14393
57642   34348
95402   87987
81625   68830
28527   37199
71475   31808
94280   23005
55623   99355
46783   29073
36641   81559
74788   14535
87994   78773
80189   77868
33263   89795
23537   23537
25755   22264
67413   72800
74924   73774
81215   78294
78206   92869
36161   50141
54925   86995
66305   49951
42462   28090
99051   88912
44954   89795
88856   28090
63026   85778
22651   24813
39262   14475
86176   69982
65395   14393
12926   78294
81994   53324
16933   30191
46987   19794
37215   28090
15340   63748
40271   86674
23747   52856
61156   11644
65356   56048
72336   51278
21864   77868
99351   13349
24599   79046
62281   23361
81871   53324
14029   42297
50141   48720
46677   43636
10745   35965
39344   80864
38077   50038
13983   89795
66663   67877
64175   19028
62355   68830
96823   79443
46436   44754
53388   68830
45987   92723
87646   11707
75997   45545
69968   93653
30425   44529
83211   88109
28725   64932
47043   89795
34475   31274
42302   94895
66558   92753
48964   50713
19546   78294
51026   89795
89346   57408
52993   54676
29577   38385
85932   60320
18030   22556
65993   19922
74692   23559
61588   89795
50688   69541
93760   44529
75094   96101
68976   86835
46278   50980
97836   44529
17576   32708
48519   46071
72647   93653
54724   34155
45186   43448
44529   41828
90404   86357
63175   44529
88381   25963
32140   23537
43348   36423
41733   88912
84065   98953
20389   96101
38749   93788
37929   35143
63747   35340
72249   93653
98042   59381
22741   95783
88124   33425
16493   44529
36599   69408
50436   41563
67695   86149
89091   20022
60708   92607
28750   68830
80224   39113
34580   96101
79688   34798
14870   68189
47719   29252
57652   33458
65541   87987
86435   19794
95204   81239
43800   50980
94063   11644
24096   36588
36628   95478
81443   17329
61221   57166
52782   78294
16740   31274
68369   45653
28895   44529
39222   65582
97201   77602
81119   11644
41083   50141
72917   25255
46148   21269
44495   18020
99464   90525
67254   58381
52750   28135
63899   55754
14617   50713
36962   50713
41322   73436
22504   38709
72577   39875
67799   68830
68284   71156
46011   61967
50367   31808
45832   87987
88775   87987
32562   26340
43756   49887
73444   16547
67302   92449
22133   85451
17768   77868
69281   39885
87364   25255
41209   27363
37792   77868
66667   73746
22195   28090
65037   37556
28634   89795
23901   50674
40511   95801
47779   45253
76489   86807
77873   66992
87523   35509
32876   50980
62342   50980
84222   41563
88205   40382
78856   20051
97888   68189
22233   17329
35868   81437
80155   93653
82730   78294
12733   19794
55038   26258
50682   23250
42043   74279
54719   71512
54474   23991
61776   25255
55564   41563
39404   31274
94954   14475
76258   89795
87689   67995
65619   59930
41846   17435
21990   22185
60161   53026
44955   57523
84178   39875
32693   87987
19125   44529
96731   93653
98080   44529
72947   95746
67285   23344
78101   77580
43064   11644
81350   23483
46937   11644
97686   79381
66339   60744
39269   50674
61837   77868
97647   86995
44613   93568
73127   68830
64048   80370
15530   87987
63926   51860
95853   91981
26155   28090
82222   19794
10035   87445
16445   93653
67972   15558
51780   68830
52358   31274
83942   60096
64899   11955
56009   96101
42288   36590
53349   65322
76255   50713
53044   26351
37184   31274
24813   19028
62309   52490
93607   19028
27423   45568
26128   78294
72691   50141
42162   60052
78247   10613
80209   31808
38310   93653
59228   47607
24897   23559
55176   37760
33062   53324
26521   39170
93209   68189
89881   23559
11418   50980
16884   78294
31995   50980
17858   98671
49107   96101
50512   54526
56890   65322
76173   65309
51569   52845
73919   23537
62591   16739
53735   79935
14454   69804
19976   46609`,O2=`7 6 4 2 1
1 2 7 8 9
9 7 6 2 1
1 3 2 4 5
8 6 4 4 1
1 3 6 7 9`,P2=`66 67 68 71 72 69
72 75 78 79 79
38 40 41 42 44 47 48 52
86 87 88 91 96
30 33 34 36 39 36 38 40
77 78 79 80 79 76
84 87 89 86 87 87
7 10 13 14 16 19 18 22
22 25 28 26 28 29 32 38
47 50 53 53 54 56 57 60
67 69 71 73 73 72
15 16 16 19 21 23 23
87 88 90 92 92 96
20 21 24 24 29
18 20 22 24 28 29 31 33
86 87 88 91 95 97 96
13 16 19 22 26 26
28 31 35 38 42
35 37 41 44 49
33 36 42 45 46
78 81 82 85 90 87
44 47 49 54 55 57 57
50 52 53 58 62
72 75 80 81 82 89
12 10 12 14 15 16 19 22
40 39 41 42 45 47 49 46
23 21 24 27 29 30 30
11 8 11 14 15 18 19 23
21 19 22 23 26 27 34
62 61 58 59 60
52 50 53 52 50
3 1 2 5 7 4 4
68 65 68 67 68 72
45 42 40 43 49
5 4 7 9 11 11 14 17
7 4 5 7 10 10 7
64 62 64 64 66 67 67
87 86 86 88 91 92 96
64 62 62 63 64 65 68 73
64 61 62 63 67 68
12 9 13 15 13
83 81 84 88 90 93 95 95
6 3 5 9 10 12 16
38 35 39 41 47
62 60 63 70 71 74
56 55 60 61 63 64 62
44 43 44 45 47 53 53
61 60 67 69 73
73 70 73 74 77 82 84 89
8 8 10 11 14 17
55 55 56 57 59 56
75 75 76 79 81 82 84 84
72 72 75 78 80 84
69 69 72 75 76 77 82
49 49 51 49 51
38 38 41 44 45 43 42
15 15 17 16 16
25 25 26 24 25 26 29 33
18 18 20 22 21 22 29
81 81 81 83 84 85 86
86 86 86 89 92 89
27 27 30 31 32 32 35 35
33 33 33 34 37 40 42 46
50 50 50 52 53 56 58 65
65 65 66 70 73
65 65 66 67 71 70
8 8 9 12 14 18 18
70 70 73 77 81
65 65 66 68 69 73 79
25 25 28 35 36
41 41 48 51 53 56 55
87 87 88 95 95
70 70 75 76 79 81 83 87
10 10 12 13 18 23
69 73 75 77 78 81 83 86
62 66 68 70 72 71
81 85 88 89 92 92
33 37 39 42 45 49
49 53 56 57 58 60 67
18 22 20 21 24 26
80 84 87 90 88 85
17 21 22 21 22 25 25
29 33 35 34 38
5 9 6 7 9 16
19 23 26 29 29 32
49 53 56 57 60 61 61 60
63 67 69 71 71 73 76 76
77 81 83 83 85 89
23 27 27 30 36
37 41 43 45 48 49 53 55
23 27 31 32 35 32
52 56 58 62 62
15 19 23 26 30
60 64 66 67 70 74 76 82
61 65 66 72 74 76
5 9 10 17 16
36 40 41 47 50 53 53
30 34 35 40 41 45
28 32 35 37 43 46 51
22 29 31 34 37
30 36 37 39 38
24 31 34 37 37
4 11 13 16 19 23
37 43 44 45 48 50 55
34 40 37 38 40 42 44
11 17 18 19 21 19 20 18
53 59 61 59 61 62 64 64
58 65 68 65 67 69 73
79 86 89 88 89 92 94 99
15 20 21 22 22 23 25 27
28 33 36 36 38 37
88 95 97 97 99 99
34 39 41 44 45 48 48 52
6 11 11 12 14 16 17 22
59 65 69 72 73 76
54 61 63 67 69 72 74 71
22 29 30 32 34 37 41 41
61 68 70 74 78
28 33 37 39 40 47
13 19 21 24 30 32
69 76 78 80 82 84 89 86
8 15 18 20 25 26 26
67 74 77 82 86
13 18 19 25 27 30 37
67 64 62 60 57 55 53 55
70 69 66 63 60 58 55 55
48 45 43 42 41 37
62 60 59 58 53
15 14 13 12 14 13 10 8
29 27 29 28 25 28
71 69 66 64 65 62 62
17 15 13 15 12 10 6
97 96 97 95 94 92 86
33 30 27 24 21 18 18 17
24 21 20 19 16 16 14 15
43 40 40 38 36 35 35
59 58 55 52 52 49 45
14 12 12 11 5
94 91 89 87 83 82 79
21 18 16 12 10 11
69 66 64 62 58 55 55
88 86 83 82 79 78 74 70
56 54 50 47 40
21 18 13 11 8 5
31 28 26 25 23 20 14 17
52 50 49 43 40 39 39
37 34 31 25 23 19
35 32 30 24 22 21 16
65 68 65 63 61 60 58 55
55 56 53 52 49 52
9 12 11 9 8 5 5
35 36 33 32 31 29 25
62 65 62 59 56 55 50
77 79 82 81 79
65 68 67 65 68 69
26 29 28 31 30 29 29
93 95 94 95 91
81 84 85 83 76
34 37 37 34 31 29 28 25
38 40 39 36 33 33 30 33
54 57 54 51 48 48 48
44 47 47 44 40
88 91 91 89 84
48 50 48 47 44 40 39 37
86 89 85 84 82 79 76 77
80 82 78 76 73 70 70
87 89 86 82 79 77 73
45 47 43 42 41 39 37 32
39 40 35 33 32 31
52 53 50 43 40 42
36 38 37 36 31 29 29
76 79 73 72 71 68 64
87 88 86 85 78 76 73 68
39 39 36 33 31
36 36 35 33 31 29 30
88 88 86 85 82 82
9 9 6 5 1
99 99 97 94 92 90 88 81
62 62 59 60 57 56
41 41 40 37 34 36 34 36
90 90 88 85 88 85 83 83
59 59 60 59 56 53 49
89 89 92 89 87 82
72 72 72 70 68
20 20 18 18 20
48 48 47 46 44 44 44
26 26 24 22 22 18
94 94 94 93 92 91 89 82
25 25 24 20 17 16 15
64 64 61 58 55 51 50 53
85 85 81 80 79 76 76
56 56 52 49 45
91 91 90 86 80
58 58 56 49 48
86 86 79 78 76 74 77
80 80 79 76 75 72 65 65
36 36 29 28 27 26 25 21
22 22 17 16 9
18 14 11 9 6
59 55 53 50 47 50
43 39 38 35 34 32 30 30
37 33 32 31 29 26 22
46 42 39 37 35 34 27
91 87 90 89 88 85 83
53 49 48 49 48 46 48
95 91 90 87 89 86 86
25 21 19 17 18 17 13
65 61 59 61 60 53
58 54 54 53 52 50
58 54 54 51 52
37 33 33 32 29 29
71 67 65 63 62 62 58
62 58 56 55 55 53 51 46
23 19 16 15 12 8 5
76 72 68 67 70
48 44 40 38 35 35
87 83 81 77 75 74 70
66 62 59 55 49
20 16 13 8 6 4 1
56 52 51 49 42 44
31 27 22 20 19 18 18
30 26 24 19 17 16 12
30 26 23 20 15 14 12 5
51 45 42 40 38
34 29 27 24 25
51 44 43 42 42
33 26 24 22 18
82 76 74 73 67
61 54 55 52 51 50
74 68 66 69 72
14 7 8 7 7
62 56 55 57 55 52 48
50 45 42 44 37
19 12 12 9 7 6
39 34 34 31 29 30
65 58 55 53 51 51 51
84 79 77 75 75 71
84 79 78 75 75 73 67
43 37 36 32 31 28 25 23
77 70 66 63 61 58 60
48 43 39 37 37
78 72 68 67 64 61 57
25 18 14 12 5
71 66 65 58 55 53
90 84 82 81 76 75 74 77
54 47 46 41 41
41 35 33 28 24
78 73 72 71 64 62 56
10 11 12 13 15 16 14
49 50 51 53 56 58 60 60
20 21 22 25 27 30 34
70 71 74 77 78 80 86
44 45 48 45 46 48 50 53
62 64 65 68 71 73 70 69
73 75 76 79 82 81 81
34 35 32 35 39
75 76 78 80 78 80 85
91 92 95 95 98
22 25 25 26 27 29 31 28
27 30 31 31 34 36 39 39
55 56 56 58 62
25 28 28 31 34 39
57 60 63 64 68 70 72 73
60 62 65 69 72 70
46 47 48 52 54 54
19 22 23 25 29 33
83 84 86 90 91 93 98
41 42 44 49 52 55 56 57
16 19 21 24 27 34 37 36
27 29 32 35 38 43 43
30 31 33 40 43 47
39 40 41 47 48 49 56
83 81 83 85 86 89 91
48 46 49 52 54 55 53
73 71 73 74 75 78 78
71 70 71 73 74 77 79 83
39 36 38 41 42 44 45 52
86 85 86 84 86 87 89 91
44 42 45 48 46 45
86 85 86 89 87 87
4 1 2 1 5
46 45 44 46 47 50 56
89 86 86 89 90 91
73 71 72 75 76 77 77 76
24 22 23 23 25 27 27
29 28 29 29 33
69 66 69 69 71 73 76 83
61 59 63 65 67
67 66 70 71 69
53 50 53 57 59 60 60
72 70 72 76 80
38 35 38 42 49
50 48 51 58 61
70 68 70 76 73
61 60 61 67 69 69
30 27 29 31 33 38 42
4 1 2 5 8 14 16 23
12 12 15 16 19 21
37 37 39 40 38
2 2 5 7 9 10 11 11
3 3 6 7 11
18 18 20 23 30
70 70 72 73 70 73 75
38 38 40 37 39 42 43 42
71 71 74 73 73
65 65 64 67 68 71 75
35 35 36 37 36 43
30 30 31 31 32 35
93 93 95 95 96 94
27 27 27 30 32 33 36 36
36 36 36 38 40 44
18 18 20 21 22 25 25 30
62 62 64 68 70 73
90 90 94 95 96 99 97
44 44 48 49 51 51
68 68 69 73 75 79
60 60 64 66 72
20 20 22 24 31 33 36 37
34 34 37 43 45 43
58 58 63 64 67 67
54 54 60 61 64 67 71
67 67 68 70 77 80 86
75 79 81 84 87 89
45 49 51 53 50
5 9 12 15 17 19 19
47 51 54 55 56 60
76 80 81 83 86 89 90 97
83 87 89 88 91 92
29 33 31 34 31
51 55 57 60 57 59 59
35 39 40 39 40 44
1 5 8 5 8 13
74 78 79 79 80
57 61 61 62 65 63
4 8 8 10 10
67 71 74 74 77 81
42 46 47 50 50 55
36 40 41 45 47
53 57 60 64 67 64
6 10 11 13 17 17
78 82 84 88 90 94
79 83 86 89 93 98
34 38 45 46 49 52
50 54 59 62 64 66 65
58 62 69 71 72 72
56 60 65 66 67 71
22 26 28 30 32 37 38 44
84 89 91 93 94 95
58 63 64 67 65
36 41 44 47 50 52 55 55
62 67 68 69 73
70 77 80 81 84 86 92
68 73 74 71 72 75 78 81
73 79 76 79 76
53 58 55 56 57 58 59 59
31 36 34 37 40 44
37 43 41 43 50
14 20 22 22 25
70 75 77 80 80 81 84 83
51 56 59 59 59
2 8 9 12 12 14 16 20
50 55 57 58 60 60 65
58 63 64 66 70 72
81 88 90 93 97 95
26 33 37 39 41 41
74 80 82 86 90
26 33 37 38 44
68 75 81 82 83 84
13 18 19 21 26 27 29 27
53 59 60 66 69 70 70
17 22 29 30 33 35 38 42
42 47 48 49 50 52 58 65
84 83 81 79 76 78
61 58 55 54 54
77 75 73 70 67 63
86 85 84 83 80 77 76 70
44 41 42 39 38 37 35
22 19 16 13 16 13 11 14
86 85 84 87 86 86
32 31 30 29 31 28 24
18 15 12 9 7 9 7 1
84 81 81 78 76 74
11 10 7 6 6 4 3 5
20 19 19 18 18
16 13 13 10 6
99 96 94 91 89 86 86 80
27 24 23 22 21 17 16
50 49 45 43 42 39 38 39
85 83 79 78 75 75
19 16 12 10 9 8 4
28 27 23 21 16
91 88 83 80 77
17 16 14 9 11
74 71 66 64 64
40 38 33 30 28 24
66 64 63 56 53 46
33 34 33 32 31 28 27
52 54 52 50 47 46 43 46
60 63 61 59 57 54 54
82 84 82 81 78 77 74 70
36 39 37 35 28
67 69 66 64 67 65 64
45 46 45 48 51
83 84 82 83 81 80 80
33 36 38 36 32
88 91 88 87 89 86 80
43 44 42 39 39 38 37
35 36 36 33 30 31
3 4 4 2 2
77 79 76 74 74 71 67
89 92 92 90 88 87 85 79
45 48 44 41 40
33 36 33 30 28 27 23 25
66 69 68 65 61 59 57 57
88 89 88 84 80
46 47 43 42 36
97 98 96 94 89 88 87 84
11 14 12 5 3 6
80 83 82 81 74 74
24 26 23 16 12
63 64 57 54 48
86 86 85 83 82
24 24 21 20 21
56 56 53 52 51 51
60 60 58 55 54 50
93 93 90 87 86 83 78
13 13 16 13 12 11 8 7
64 64 63 66 64 66
50 50 49 51 51
34 34 33 32 35 31
82 82 79 77 80 78 73
47 47 47 46 43
95 95 95 94 96
48 48 48 45 44 44
18 18 18 16 14 10
87 87 85 84 84 83 81 75
72 72 68 67 66 63
65 65 64 61 57 55 52 54
91 91 90 86 86
46 46 42 39 35
53 53 51 50 47 44 40 33
85 85 78 76 75
70 70 68 63 61 62
47 47 44 38 35 33 31 31
79 79 78 72 68
73 73 68 65 58
75 71 69 68 65
52 48 46 43 40 38 35 37
21 17 15 12 12
41 37 35 32 28
88 84 83 81 78 72
68 64 61 63 61
18 14 15 12 13
62 58 56 53 54 51 51
24 20 18 19 15
93 89 87 89 84
41 37 35 34 34 33 32
44 40 39 36 36 34 35
22 18 16 16 16
86 82 80 77 77 74 73 69
34 30 29 28 27 26 26 19
93 89 87 83 80 79
59 55 54 51 47 46 45 47
20 16 13 12 8 6 4 4
27 23 20 17 15 14 10 6
25 21 17 16 11
98 94 88 87 84
65 61 58 55 52 47 44 46
32 28 26 20 20
82 78 77 74 72 67 63
55 51 49 47 45 44 37 32
36 31 28 27 26 23 21 20
90 85 83 80 77 76 74 76
15 10 8 7 6 5 3 3
57 51 49 46 45 44 42 38
29 24 21 20 19 13
82 76 74 72 71 72 69 66
10 4 7 4 5
37 32 34 32 29 28 26 26
56 50 52 50 46
53 46 49 47 46 45 43 38
76 71 68 68 65 64
88 81 81 79 77 74 76
83 76 76 73 73
66 59 59 58 54
98 93 92 90 90 84
27 22 18 17 14 11
29 24 20 19 17 15 18
81 76 74 71 67 65 62 62
69 63 60 56 55 51
86 81 77 74 67
74 67 62 59 58
66 60 55 54 56
53 46 39 37 35 33 33
29 23 20 14 10
33 28 27 26 19 16 15 8
60 61 56 55 51
97 91 88 87 86 80 81
74 73 68 67 64 60
23 21 17 15 12 12
47 53 55 56 59 60 63 65
38 38 38 36 34
69 62 59 57 54
13 13 12 9 8 7 7 9
32 34 34 37 39 41 42 43
81 77 75 74 75 73 72
2 3 5 7 12 14 11
43 43 41 40 40 39 33
27 25 27 28 32
47 51 53 55 62 63 69
29 32 34 33 30 26
51 58 60 61 65 68 68
66 69 68 69 71 73 73
84 84 86 83 79
59 60 56 53 51
15 20 22 23 27 29 32 39
4 11 12 10 11 13
39 35 33 31 33 31 31
29 30 32 33 35 35
84 83 84 84 87 88 91 96
20 15 14 11 12
16 16 14 15 14 13 11 12
49 43 41 37 38
9 16 20 22 25 28 32
18 18 19 21 25 26
72 74 75 78 82 82
19 23 28 31 35
86 79 78 74 70
14 14 17 14 15 18 22
59 52 51 54 51 48 46
1 1 2 5 7 12 11
54 50 49 47 43 43
81 85 86 87 88 89 87 90
7 8 11 13 16 22
4 10 7 8 12
70 64 63 60 62 62
6 6 9 14 16 18 21 28
56 61 58 60 62 67
44 37 35 31 28 26 21
14 18 20 23 27 27
44 44 42 39 37 37 35 31
95 95 97 99 97 99 96
62 64 61 61 58 55
52 58 58 59 60 61
30 28 30 33 33 36
51 47 44 41 40 37
81 78 76 73 75 72
23 24 28 30 33 35 38 40
12 10 7 5 4 4 5
16 19 19 22 26
79 80 83 82 83 86 88
76 69 66 65 62 62 61 62
14 13 7 5 4 7
56 50 48 45 45 41
62 64 65 69 73
64 68 71 72 75 74 74
43 47 51 54 56 59 63
60 56 53 51 50 47 46 42
75 78 77 77 75 75
53 53 57 60 61 66
82 85 84 82 80 82 79 74
66 61 58 51 49 47 46
35 39 39 40 42 44 48
42 35 34 31 28 21 20 20
94 87 85 86 83 79
53 55 56 59 62 66
10 9 13 14 12
19 25 27 29 32 39 39
79 77 80 82 85 82 79
39 35 33 34 33 30 26
64 71 73 76 83 85 84
64 65 63 66 70
73 74 81 84 85 85
34 34 35 36 36
63 69 70 72 75 81 84 88
66 70 77 79 82 85
80 81 79 75 68
91 87 86 85 82 80 83 86
50 50 56 59 62
2 7 7 10 14
61 62 66 67 68 70 71 70
43 43 45 47 47 48 48
29 27 24 18 16 9
17 21 23 23 29
84 77 75 74 73 70 63
32 30 29 26 22 21 16
25 18 15 17 14 12 9 3
82 85 88 90 92 90
21 18 21 18 21
76 82 82 83 85 87 87
52 50 47 42 41
22 26 28 29 30 30
17 17 18 18 20 22
26 26 22 20 14
34 32 37 38 40 43 45 46
60 60 62 65 62
20 17 20 21 24 27 34 34
41 40 41 42 43 47 50 50
56 49 45 42 42
21 21 25 26 29 30 32 36
48 44 44 43 40 38
94 93 91 93 92 88
70 73 70 69 64 63
42 46 47 50 54
25 26 24 22 19 17 19
95 95 94 92 90 93 90 88
23 22 24 23 27
75 76 75 72 71 68
74 73 71 70 69 66 59 59
14 20 22 24 26 29 27
15 18 22 23 24 29
50 50 51 54 56 57 59
41 39 39 41 43 44 47 51
22 22 19 19 18 18
63 63 66 68 69 70 74
21 20 19 18 16 13 12 5
72 69 66 66 65 61
61 68 69 71 74 75 75
81 75 74 73 72 66 60
18 18 19 19 20 22 19
78 74 72 69 65 64 61 62
30 26 24 21 19 19 19
76 76 78 79 80 78 78
32 38 40 43 50
63 56 56 54 54
81 82 81 79 79 81
85 85 86 86 87 88 94
65 61 59 56 49
1 5 8 10 8 10 9
63 64 67 67 68 69 67
44 44 45 49 49
87 83 82 79 82
54 59 60 63 64 67 70 74
13 12 11 9 8 8
30 32 31 30 24 21 16
77 75 72 71 73 70 67 67
86 86 91 93 93
70 70 67 62 60 59 58
44 50 51 57 59 60 62
84 84 90 91 95
42 46 47 50 53 58 58
31 27 25 25 28
1 1 4 1 1
47 52 52 54 57 64
38 36 38 37 37
49 49 45 43 42 41
20 19 26 28 33
50 53 55 54 56 63
19 26 30 33 35 34
73 73 76 79 82 82 86
40 36 33 32 35 29
50 51 53 54 60 67
68 72 74 77 79 81 81 84
76 79 82 84 91 94 98
8 6 7 9 11 11
56 50 48 48 46
14 17 14 14 10
9 13 18 19 17
57 58 55 55 52 50 49 43
85 82 80 77 74 71 68
80 81 82 84 86 88
17 19 20 21 23 24 25
85 83 81 80 78
50 47 46 44 42
71 69 66 65 63 62
80 78 75 73 70
28 29 32 33 34 36
36 33 30 28 25 22 20
66 68 70 71 74 75
36 33 32 30 29 27 26 23
67 66 64 62 61 59 58 55
45 43 40 39 36 34 31 30
25 23 20 19 16 15 14
67 65 63 60 59 58
3 6 9 10 12 15 17 20
45 42 40 38 37 34
67 69 72 74 77 80 81 84
86 84 82 80 77
13 11 10 7 6 4 2
18 20 21 23 26 28 31
79 80 83 85 88 89 92 95
70 72 74 76 77 78 81 82
43 45 48 51 52
66 63 62 61 60 57 55
15 12 11 8 5
86 83 82 81 78
75 78 81 82 85
28 29 32 33 36 38
72 75 78 80 81 83 86 88
23 21 18 16 14
98 96 94 93 90
76 75 74 71 69 68 65 62
66 65 64 61 60 57 54 53
73 71 70 67 66 65 62 59
41 44 45 48 50 53
27 24 23 22 19
17 14 13 12 10 9 6 5
36 33 30 28 26 24 21
94 92 89 88 85
50 53 55 57 60 61
62 65 66 69 70 73
47 46 44 41 38 35 34 31
48 51 53 54 55 56 59
78 79 80 81 82 85 87 89
51 54 56 58 61 64 65
50 52 53 54 55 58 61 62
76 75 74 71 69 66 64
61 64 67 69 70 72 73
75 74 72 71 70 67
38 39 41 42 43 45 46
76 79 81 84 85 86 89 91
59 58 57 56 55 54 51 50
88 85 84 82 81 80 79 76
15 12 9 8 7 4 1
37 36 34 33 31 30 29
66 69 72 74 77 78 79 81
54 51 49 46 44
65 63 60 59 58
31 33 34 36 39 40
7 10 11 13 15 18 21
17 19 21 23 24 27 29 30
33 30 27 24 23 22 20 18
47 46 45 44 42 39 36 35
45 42 40 38 37
31 33 34 37 40 41 42 44
95 93 90 89 86 84 82
53 50 49 47 45 43 41 39
38 37 34 31 30 27 26
48 50 52 53 54
9 10 12 13 16 17 18 19
75 77 80 83 85
39 40 43 45 48 49
89 90 92 94 95 98 99
78 77 76 74 73 71
32 35 36 38 39 42
95 94 93 90 89 86 83 82
63 62 59 57 54 52 49 46
45 46 47 49 52 54
86 85 84 83 80 77
61 58 56 54 53
42 40 38 35 32 30
86 87 90 91 93 94 96 99
45 48 51 53 56
49 50 51 53 55 57
16 15 13 10 8 7 6
37 40 41 43 46
83 82 79 76 75
9 12 15 18 20
31 30 29 27 24 22
30 33 35 37 39 41 43
25 22 20 19 16 15 13 12
53 51 48 45 42 39 37
30 29 27 26 25 23 20 18
36 38 41 42 43 44 46 49
22 21 18 15 14 11 9
46 47 48 51 54
39 41 44 45 47 49 51
52 50 48 45 42 41
38 39 42 45 48 50 53 56
50 51 53 56 58 59
86 85 83 80 78 76 75 73
59 58 57 54 51
22 24 25 27 29 30 32 35
11 13 15 16 19 21
36 33 31 29 28 27 25 22
43 42 39 37 35 33 31 30
69 67 66 64 61
80 77 75 72 70 68 67
55 57 60 63 66 68
80 77 76 73 72
19 17 15 14 13
50 48 45 44 42
6 7 10 13 14
50 52 55 57 60
67 64 62 60 59 56 54 52
25 28 30 32 35
80 77 76 73 72 70 69
36 35 32 29 28 27 26 25
64 62 61 60 57 54
76 78 79 81 84 87 90 91
69 71 72 75 78
22 19 16 15 13 12 11
95 92 91 88 86 84 81
76 79 80 82 83 86 88 89
25 26 28 29 30 32
4 7 10 12 15
70 71 74 77 78 81
27 29 32 35 38 41 44 46
73 72 69 66 64
17 14 13 10 7 5
47 44 42 40 37 36
28 30 32 33 34 37 39 41
86 88 89 90 93
79 78 76 74 71
44 46 47 48 51 53 54
82 84 87 88 91 92 95 96
24 22 21 18 16 14
48 47 46 45 42
73 76 77 80 81
29 28 27 26 24
59 56 54 52 49 47
43 45 46 49 51 53 56 59
25 24 23 21 18 16 13 12
60 59 57 54 52 50
23 20 18 15 14 12
53 55 56 58 59 60
86 89 92 94 96
21 20 18 16 14 11
61 63 66 68 70 71 73
49 46 45 42 40 38 37
9 11 14 16 19 20
41 39 36 33 30 28 25 23
52 54 55 56 57 58 59 62
20 18 15 13 11 10
62 60 57 56 53 52 50 49
69 72 75 77 79 81
80 81 84 87 90 92 93
34 32 31 28 26 24 22
21 20 18 15 14 11 9 6
89 87 86 83 80 79 77 74
29 32 33 34 35 37 38
29 27 26 24 21 18
38 41 42 45 46 49 50
63 64 67 69 71 73 74
40 42 45 48 49
17 18 19 21 22 23
5 6 9 10 13 15 17
44 47 50 52 55 58 60 62
28 25 24 21 18 16 15
39 38 36 35 34 33 31
78 76 75 74 73 70
69 68 65 64 63
80 82 83 85 88 91 94 96
76 74 71 70 69 68
81 84 86 88 89
40 42 44 45 46 48 51 53
50 51 52 54 55 57
57 60 62 63 65 67 70
46 45 42 39 37 36
72 71 70 68 66
37 40 42 45 47
53 56 58 59 62
87 85 84 82 79 77 75 72
82 81 80 77 74 71 70
28 30 31 32 33
37 36 33 30 27 26 24 22
60 59 58 56 54
86 85 83 80 78 75 72 71
20 21 22 25 27
39 41 43 44 47 48 49 50
33 32 29 27 26 23 20 18
40 37 36 33 31 30
23 25 28 30 32 35
82 81 79 76 75 73 71 68
79 77 76 75 73 72 70 69
82 85 86 89 91 94 97
87 88 90 91 93
14 17 19 20 22 25 26 27
82 79 76 75 72 70 68
88 87 84 81 79 77
15 13 12 10 9 8 7
1 2 5 6 9 11
20 18 15 14 12 11 9 6
11 9 6 3 1
66 65 63 60 57 54
64 63 62 61 58 57
79 77 75 74 72
62 60 59 58 57 54 53
17 16 13 10 8
59 62 64 65 68 69
82 80 79 77 74 72
16 13 11 8 7 4
17 14 12 9 7 4
46 45 43 40 39 36 33
85 86 87 89 92 94 96 99
50 52 55 57 60 62
64 65 67 68 70 73 76 79
54 53 51 49 47 44 42 39
29 30 31 34 35 36 38
40 37 34 33 31 30 27 24
68 70 71 74 76 77 78
62 61 59 58 57 56 55 52
4 5 8 9 12 13
89 86 85 82 80 79
5 8 9 10 13 14 17
84 82 81 78 76 73 71
84 86 87 90 93 96 97
32 31 29 28 26 23
17 19 21 23 26 29 31
62 65 66 67 69 72
43 45 47 48 50 52 55
36 35 34 33 31 29 27
18 15 14 13 11
36 35 32 30 27
13 16 17 19 20 21 23
98 97 95 93 90 87 86
95 93 91 90 88 85 82
28 26 24 21 19 18 16 13
61 58 57 54 53 51 49 47
81 84 86 88 90 92 93
45 46 49 50 51
48 51 53 54 56 57 58 60
73 70 69 68 66 64
75 72 70 67 65 64 62
50 48 45 42 41 38 37 36
44 42 39 37 34 32
46 45 44 42 40
51 48 46 44 41 39 37
19 18 16 15 12 11
39 40 42 45 46
76 77 78 81 82 83 86 87
90 89 88 85 83 82 81 79
72 74 76 78 79 80
65 66 67 68 70 72
49 51 54 56 59 62 63
37 35 32 30 28 25 24 22
90 87 86 84 82
61 64 65 67 68 71 74 77
1 3 4 7 10
61 60 59 58 57 55 54 52
6 8 9 11 13 14 17 19
56 57 58 59 61 63
58 60 63 66 67
22 20 17 16 15 14 13 10
66 63 62 60 57 56 55 53
61 64 67 70 71 74 77
88 86 84 82 80 78 77 75
6 9 11 14 16
75 76 79 82 83 85 86
78 79 80 81 84 85
14 11 8 5 2 1
24 27 30 31 32 35
85 84 83 80 77
68 71 74 76 79 81 82 85
21 19 17 16 14 11 9
93 92 90 87 85
80 78 76 75 72 69
84 87 88 90 93 94 97
54 53 50 49 48 45
41 42 44 45 47
24 26 29 32 35 38 39 41
54 52 49 47 44 42 41 40
39 42 43 44 45 48 50
82 81 79 76 73 71
70 67 65 64 63 61
57 56 53 51 49 46
74 76 79 81 83 85 87 90
56 59 61 64 67 70 71
31 29 28 27 24 23
59 57 55 52 50
82 85 88 91 94 95 97
60 58 55 53 51
57 58 60 63 65 68
41 44 46 48 50 51 53
44 46 47 50 53
33 34 36 38 41 42 44
18 20 22 23 26 28 29
51 48 47 45 44 42
23 21 19 17 14 12
58 56 53 52 49 47 46 44
98 96 95 94 91
80 78 76 75 73
58 61 63 64 66
83 85 87 88 89
23 21 19 17 15 14 12 9
60 62 63 64 65 68
42 41 38 37 36 33
93 92 90 88 87 86 84 82
31 32 34 36 39 42
8 10 12 13 16 17 18 19
14 17 18 20 23 24
8 11 13 14 17 18 21
69 68 66 63 61 58 55
90 87 85 82 80 79
38 35 32 30 28
18 20 23 26 28 29 30
17 16 13 10 8 7 5
83 82 80 77 75 72 69 66
87 88 89 92 94
69 71 72 74 76 78 81 82
49 46 43 40 37 34 33
30 28 26 24 23 20
44 43 40 39 37 34 33 31
21 23 26 29 32 33 34 36
61 59 58 56 54 52 50 48
53 50 49 48 45 42
63 66 68 71 73 76
57 55 53 50 49
54 57 60 62 65
21 22 25 27 29 30
12 14 15 18 20 21 22 23
68 71 73 74 76 77 80
15 13 12 9 6 5 2
35 37 40 41 42 45 46
56 55 53 52 50
38 39 42 43 44
48 46 45 43 42
95 92 91 88 86 84 83 80
48 51 52 55 58
40 42 44 46 49 51`,f2="xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))",d2="xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))",R2=`?% mul(948,148)why() %how(670,744)mul(590,32);where())#}from()>how()mul(611,372)}{~^?>from()^mul(835,665)who()]#^don't()select()select())mul(724,851)[>&mul(188,482)$mul(781,111)[who()<why(),!]mul(678,13)why()$#%who()mul(620,771)<!^}@^+what()mul(281,719)(]'what()where()>&from():!mul(147,678)how(){mul(938,510)where()!$?*['mul(103,563)where())mul(4,125)$*>>^mul(126,929)]& %~mul(161,418)who()>>do()]-''?mul(416,366)~?/where()]who()mul(459,47))>what(){@[(mul(219,400)+do()when()from():who()when()]&{{%mul(804,830)-select()what()*what()%}mul(861,992)who()!',mul(159,874)#<)''<mul(460,777)?mul(909,244)how()+what()]<do()?}mul(749,87)from()(who();why()mul(430,124)/$>how()@$%mul(214,139)&how()>mul(112,835)select()*from()@why()?[{mul(209,568)/; ~)mul(630,749):mul(841,589)/;who()>[mul(778,567)+when() how()<#mul(544,851)what(){+mul(327,103)from()what()/[~-mul(995,415)/when()-mul(880,153)}:}mul(368,920)'how()mul(864,419)from()what()@mul(208,291)who()<?}?what()',[{mul(575,454)*&(<{how()[mul(557,489){{why(){how()@who()~mul(423,703)mul(910,916)+what()^/<-*from()'mul(746,826),-*)/+>}^from()mul(154,571)++:>,mul(601,458)why()<;how()~from(172,16)mul(333,315)?[mul(513,260) {*mul(117,759)%]mul(77,644){($%>]&~mul(238,306)~select()from();-'who()'mul(460,352); ?select()>[[(from() mul(337,294)why()how()</$<where()don't()(?]{why()%}from()mul(367,653)~mul(910,873)^why()>mul(499,785)>what()[*:#where()*what()mul(765,210)*$[]mul(461,957)##)+}when()-@:mul(198,90)what()what()how()') )mul(258,966)]+(when()mul(535,417)where()!don't()@mul(939,319)?mul(751,538))! mul(758,675)~how()[how(),@>[where()when(29,965)mul(358,39){^what();/(where()how()mul(271,786)why():mul(792,761)do()$]%mul(740,232)>who(949,378)what()[(where()who(){who()#mul(595,343)%+mul(194,296)'mul(161,747): '{where(12,567),@mul(234,39)!+do()/who()[where()&'what()when()how())mul(138,925)),#;where()>{mul(738,864){mul(605,662)*when()%when()+( /~&mul(633,935)when()];mul(263/}*<!where(),- ~when()mul(512,798)]}where())when()who()mul(933,447)where()}mul(33,935*mul(15,975)mul(574,550)+#^;'$from(280,157)$^what()mul(919,849)@mul(18,160))$&^]how()what() when()where()mul(88,657):/from())+:/when()@]mul(71,74)from()'*:@{>mul(127,821)^how()$$select()select()@^{:mul(867,979)&%/>{%^how()what(499,657)+do()%what()(~;-:*mul(438,941)<]?]mul(208,834when()&^;]from()when(613,710)^}+$mul(809,573)mul^)*:from(379,983)mul(47,786)}when()-what()how(450,632)> where()how()mul(810,597 ;;{%(select()select()&,mul(356,249)from()/!{#&^mul(23,248)(!who()]-+,mul(873,987)]{what()<  )-{^mul(591,317)/mul(382,188)mul(476,338)*why()$]mul(865,625)who()})?select():*@[)don't()/ ,mul(737,418)select(318,357);+ what()<mul(41,445)mul(236,630)$}from()]$^$,(do()-select()mul(369,197)from()]#};^mul(561,752)+&#+}?}:mul(18,235)<'& ,(*mul(645,811)why()select()who()[>where()don't()%#>!>/@what()[mul(490,823)&^( ,'@ [do()@mul(855,491)*^why()[,mul(348,679)how()$who() '&how(16,459)/!;mul(43,422)#^from()![}select()mul(976,749)-}select()-where()select()mul(223,589)%[why()mul(868,881)mul(178,790)$,{who()from()#,mul(318,399):where()?[mul(182,864)where() mul(156,690) -]mul(857,353)#'%,},>?+@mul(914,528)where()$mul(785,748)<$who()[mul(453,859)%'@ mul(84,729)/{do()(?$<}mul(820,286)?:*?}#when()(%mul(245,958when()?from(),+mul(128,335)mul(463,102);:]@-~-%mul(914,398)
+mul(720,985)how(340,568)^!what()[),[mul(734,270)~')?who()]]mul(964,739)from()?who()$when() /mul(566,142)}*,?how()~mul(733,766)when()mul(319,914)when()mul(808,141)*@:&who();mul(736,736)where(){&!$when()]^mul(612,574)how()mul~]what()!!'[:mul(805,568),<^+~ #)&who()mul(810,729),[~/^<&mul(706,233)!-'{why(),(?&mul(28,746)%mul(127,170)-?} #don't()from(),[@,mul(282,734)mul(332,651)[:~mul(771,888)#who()^select(110,751)>who(){mul(655,334)why()+~&}mul(129,762)mul(597,498))*~-}who()who()~'$mul(235,859)where()^-,,@mul(661,707)[ ~,<-mul(502,445)?why(){why()from()-how()*>&mul(237,280)how()mul(669,512)#$< mul(426,417)[what()why()~select()*%,'where()mul(213,617)##>mul(148-how()&]mul(437,581)who()'<from()>%[:how()mul(985,24);mul(446,704)who(),mul(549#}%>[mul(58,502)%mul(55,502)~<where()''who()}<mul(678,579)mul(457,825)+how()from()'(*#+$$mul(266,507)mul(925,485)^why()mul(605,592)[}<>^<mul(173,922)@:<where()/-]'mul(110,899%select()why()why()>[%%;mul(63,642)>how())<*{mul(155,625)]mul(238,47)where()&@mul(630,112)who() mul(570,946)mul(299,320){({mul(307,251)%[]$%mul(621,739)^!}{^-+what())mul(350,650)!>who()what()]^,*mul(154,394)&?^mul(410,870)[-select()why()<who():+%don't()where()$]/when() how()when()mul(708from()]&?mul(589,972)*mul(167,814)[mul(807?%don't()])?'(who()mul(614,926)mul(404,930)'?+;mul(252how()^who(529,21)'who()%mul(675,37)mul(362*what(640,926)select()'?what(){'>mul(744,141)why():))from()^select()what()mul(991,854){-]+mul(64,859))~>>%>%select()#-mul(282,835)'select()'%<$!from(299,765)don't()-'mul(352,659),mul(366,409),when()mul(672,590)#@#}/(##  mul(550,937)$#/^~mul(458,447)mul#(,/<mul(538,275)}where()'?'!-)mul<^>(how(),mul(465,230)^select()$<from(595,221):mul(704,141)what()]when()^select()^)^%'mul(260,350)>how()what()#@};(from()~mul(716,318)from()+]<!?mul(625,41)#[,~ /mul(19}mul(760,4)@how()mul(508,977)@select())][[mul(261,452 $mul(11,905)how(731,838)[mul(823,988)?!?@&&'mul(929,818)(>mul(701,784)!;>do()'&)when()select()mul(945,704)mul(250,874)who()]@don't()why(51,895)-,how()*+{why()%/mul(964,293)&<^where()<select();&mul(900,32)]where()$from()&#from()who()({mul(755,539)mul(26,466)how()$when()%&$~)mul(926,673)$what()!select(),do()~select()#^mul(272,306)~%'mul(22,647)$mul(904,943)^>-from()mul(635,212)when()how()[mul(314,335)%(-  + ~mul(635,915)~[[do(){where(307,78)(who()(why()where();mul(450from()mul(903,662)>$mul(924,200),why()select()$mul(418,533)where()[where()mul(266,643):~^/#(:[from()mul(81,715),who()@:~+who()'%mul(79?who()select();# mul(436,105)#*why() #~[,where()'mulwho()[(~)[mul(119,92)]where(),select()why()?mul(639,691):+<why()why()mul(815,366)*where()-what()/?>mul(188,19)who()(select()what()mul(916,808));~mul(630,228)-)where()[~mul(586/[how()+~!>}>[how()mul(106,235)do()>why(416,339):mul(788,357)[when(442,691)what()how()where()$from()who()mul(471,832)]/*mul(837,328)<)>!mul(389,633)'from(),mul(70when()!from()select()$](when()*%mul(903,43)where(62,223)^from();@()mul(852,198)-when()?mulhow(168,455)(select()how();from()/mul(918,330)what()'how(215,263)$:{~how()*mul(136,552)from(363,441)-when()how()what()-+mul(229,899)!where()when()from(){mul(47,875)~mul(500,586)/&&where(),where()mul(571,252))%}^~when()mul(979,493)do()@!+~>^mul(568,461)]where()$who(){from();mul(743,403)@?[mul(117,954))/mul(382,589)<:what() mul(578,730)#/<,when()#)select()}mul(889,462){how(562,136)select()when()^>mul(150,815)/$from()?what()mul(842,604)**?'-^>;~'mul(622,493)
mul(901,810)[<,^$do()<#why()<why()},,select()mul(257,221)mul(393,412)-from()&$]mul(198,284)/>;/why()mul(296,969)@mul(224,163)#<$what():,what()mul(995,485)$~)who()mul(382,831)'&~mul(146,234)mul(228,532)mul(944,430)!!who()<;'$(%do()%'{mul(588,828)~$why():where()mul(753(select()/':~$[mul(785,897)/<(#$)@mul(821,858)$what()+@/*mul(545,209)where();what()mul-why()>mul(808,588),where()];;}mul(431,815)<<;how()?@why()(^don't()select()$)!mul(832,43)what()[where()mul(935,377)from()++where()$-]@mul(793,489)*&mul(910,985)mul(340,122);from(87,683)[[]]'mul(659>from()['from()~,;@:^mul(420,510)/mul{from()$ >! -mul(508,275)!()@+{!mul(134,503)how()?mul(717,994)@}what()}[@<do()~'[??from() #&}mul(443,258)){do()^mul(894,293),@from()mul(470,736)/select()where()from()how()mul(769,763)/-'mul(436,853)from()mul(955,870);#why()how()how()mul(807,205)#do()select()<@$when()*select()>mul(899,477)who(88,557){[?-mul[how()>>@mul(113,239)&;?what(825,719)from()}@mul(717,829)when()who()%@what()when()#':mul(644,495)]^$ >[~don't()!#mul(175,323)><$>do()[[$what()/>(#~mul(976,792))what()#{how()-$?mul(534,805))what()@mul(600from()'from()mul(859,367)from()mul(852,796)?{[]/'~mul(624,853($:;^mul(522,963)+mul(143,246)[,what()#*when()',why()mul(435,720)mul(812,909)'<? /;when()}*how()do()mul(49,504)how()when()/!mul(799,134)$mul(213,950)from(182,488)];]do()mul(325,689)(@mul(485,128)who()mul(376~when()(%-what()(mul(776,635)#: from(788,757)}mul(997,619)-from(919,426)where()where()how() mul(370,735)*what(),*%$mul(408,722)}#mul(990,90)(<where()*don't()*@:(;what()%:*#mul(804,562)mul(162,269)]mul mul(267,461)%#{(};^~[mul(124,671) ~-<$<from()<from()mul(401,89)>&!!who()how()/,who()>mul(179,82))]don't()@(}<who()where()%<from()]mul(950,333) }&mul(420,707)mul(293,223)what()(/mul(131,775)>@<mul(498,349)mul(416,808)*how(676,683)select()&@mul(100,528)'&from()/[<,%>!mul(224,804'}-mul(180,723)#+@mul(144,160 +#<]where()+!from()select()(mul(614,183)mul(123,655)*+##mul(744,352):#$when()~&,what(625,950)select()'mul(468,293)*]+#mul/$why()where(623,670)%@;mul(722,469)&(%;do()) from()mul(557,124)/}:mul(928,793>]how(){?who()'<mul(74,894)%mul(312,960)'(,]%^mul(560,307<where();when()}how()%>[mul(624,959)&mul(765,13):who()<),who()& mul(639,802)&;(@:why(988,378):mul(677,987)~@-! ;!^do()mul(29,935)mul(134,862)when()+{what()when()who()}~why()mul(541,335)who()@[<mul(342what()select()who();mul(833,47)when()%@}\${why()mul(891,370)(@*@[^mul(652,523)}why()&-(?'*mul(906,962) )mul(691,622)~(!<--when(506,845)</$mul(603,406)'how(83,339)mul(44,583)<:-^/why()mul(812,857$what()<-:$]what()?mul(226,418)!>'+why();when()&mul(127,948)$mul(485,474))?$mul(278,206)select()mul(641,623){} @{*where()'?mul}>mul(792,193) [#;*%->~what()mul(876,897)/@+'mul(341,837)^)why()?;@+^^~mul(718,922)[why()when()/,{}select()who())mul(941,117)/}/who()why(293,857))mul(414,482)what()! how()who()mul(910,766)!]what(),how()*mul(6,611)~;{who()who()[--mul(720,952)why(546,471)!)from()/?mul(971,461)}&/$@'mul(452,187)#who():(mul(44,298)mul(530,770)']:who()&$from()mul(544,752)mul(375,827))&@select()^;who()where()how()mulselect()^%^,/&mul(204,187)when()&,}$(who();mul(60,317)+who()$from()(how(942,734);@mul(239,338)!?:%)}@select()(mul(284,525)select()what()where()@^#~[mul(718,185)&!*{';when()@when()mul(272,161)how()%how()?mul(66,988)@)@,::>)mul(930,190)why(),~when()%<@&where(),mul(143,136)why()-,/*-what()+mul(73,408)~ who()%*select()'+where()#!/usr/bin/perlmul(379,680)
;@mul(257,25)[!mul(646,635)>?who()who()from()mul(25,275(select()+why()%mul(102,254)%}/where()$mul(608,18)when()*#mul(343,951) mul(337,866)*^?#@why(805,831)-mulwhen()from()mul(854,5)when()@$why()mul(896,11)^mul(451,271)'how()?who()?)<%[}don't()who()/[{]-?from()when()?mul(198,238)])mul(750,760)+/-!what()~?#mul(880,271)%?select();where()(<^select()mul(373@from()where(),mul(700,15),mul(406,120)mul(551,206)mul(636,315);+{mul(261,201)mul,:-/&mul(267,217)/,'mul(132,410)@@;;who()when()]do()why()mul(4,121)#from()/mul(242what()how(277,558)<how()from()+:who()from()what()when()mul(27,714)who()why()what()mul(676,758)+^@*'}mul(274,109)-}]),select()*when()]why()mul(60,516)when()when(708,630)%%where():mul(34,59)from()#]how()+who()%who()*don't()select()&~(;where()/mul(548,869)&mul(439,68)]@}%)~&mul(46,712)when()+[&]where(),+mul(940,261)^who()where()mul(655,165) >'how()how(){mul(12,537)&[>}mul(322,676)[#,do()@,mul(248,663),when()-do()^what()]when()who()what()how())mul(864,73)how()?]*mul(653,55)when()from()from()how()@ }mul(94,590)]~what()mul(164,505)]from()when()]mul(218,565)(from() why()[*when()}[mul(306,447)*]][> #mul(783,715?)+^~mul(308,994):<*~)>from()why()*mul(508,139)>from()@;+~#mul(652,903)#[/?mul(407,208]how(){when(),**@*:/mul(849,965)mul(69,198<'#%[?mul(236,808)what()from()%from()why()^/,don't()select()&where()@mul(888,101) mul(332,775)who()):select()),:-mul(119,209)%how()mulfrom()select()don't(){mul(838,613)why() '({*<!mul(372,376)mul(407,117$who()[ mul(171,741)where();mul(742,142)mul(34#^+:who()mul(157,514)>~>*mul(466,106)mul(883,754->(%%who()[!mul(587,792)'((!?select()&}<mul(791,734){how()&;+<(mul(655,63):why(){!{)mul(320,950)->-'#)why()#[mul(234,162),what(497,671)why()#mul(985,797)>}~;from()select()mul(117,492)&~+from()]%>*$&mul(451,669))}'/@how()?where()why(694,295)'mul(676,756){~;select()what()}what()^}mul(963,857);%/how()?mul(944,194);select()<&^how(){->mul(195,702))?select()why()&~%}why()#mul(90,304)@%why(673,634)*/where()- <:do(){}!mul;who()]where()]-@?<mul(919,817),>when()how()how()>mul(875,604)select()%do()%mul(790,136)*$,mul(853,95)[how()>!%?mul(246,573)&!what()/#from()!mul(382,307),!#[-mul(32,733)$+[*mul(192,47)(@who()mul(304,303)@mul(167,528):select())!:how(){what()(}mul(933,177))#>$#,$:mul(81,603)<mul(40,227)mul(717,937)mul(853,848)mul(66,164)where())^<>what()?how()when()mul(206,607)<where()[$)}when()how()select()*mul(265,447)*/what())%+'[ from()mul(358,747)what()+%how()#from():,what()@mul(791,401)~where()[mul(990,778)?~[!:>!'^mul(666,852)mul(651,206)!+]}from()don't():*]#what()mul(359*%who()^)'mul(190,764)who()when()}select()~(~mul(547,102)mul(406,618)%when()>)<mul(822,907)?/[/from()mul(945,506)>![#mul(890,746)#who()$'~%]',+mul(341,395)who()--mul(285,533)}how()@<}!mul(715}>+~ select()where()$ (mul(894,62)?]}who()&when(652,875)%:}from(24,82)mul(713,250))-^{*%mul(548,903)&]]<]why(){from()when() mul(796,100)-(how()$%~mul(589,969)  :who()  @mul(271,734)<}mul(761,8)}@['- ['$mul(178,28)who()who(282,161)@$from()mul(413,253)#when()?(mul(585,394))select():$?#?>who()?mul(245,344)who()^who()where()why()~@why()don't()why()how()who(450,27)who()(!mul(951,644):select()-)%?*don't(), mul(189,841)]* why()*>'mul(758,690)what()<select()~>@>mul(728,932)how()?select()what()}mul(716,985){where()who()+who():mul(840,772)%how()>:;where()mul(139,830)$select()),mul(730,4)when(305,277);[$!,)mul(278,740)who(856,922)who()#<where()*>mul(212,541)((]mul(689,475)mul(814,611)'}&~{~~mul(716,817)who()mul(21,315))don't())(why()')$<mul(541,349)
$)mul(257,544)+where()how()-[how()^+ mul(986,808){[<why()%!;mul(940,137)who()-+(from()**^mul{>)who()how()?%why()}!<mul(908,379)select(811,438)mul(15,196)from(623,826)-from()+!mul(38,667){>{<{mul(41,189)-<how()*%when()}what(539,203)]mul(813,528)who())why()( ]how()why()how(){mul(299,367)]{[(@^mul(131,889)?:&who())when()'why()$&mul(728,552)^}when()@~mul(842,113)from()),?{!mul(811,809)*how(15,189)#>&+from(544,351)~&mul(516,38)]?;-@?don't()@}*mul(792,426when();#~ >%why()(/$mul(755,392)*(#]where()@select(),^select()mul(630]>*who(267,517)why()-;(mul(176,492)select()from()}~:who()mul(761,226)&,((mul(750,451)@/%select()from()mul(345,75)what()/who(); ~mul(431<)&mul(693,289)?~/mul(693,335)'mul(475,545){(*+~ mul(668,535)how()don't()?,<@mul(980,251)*why()$when()*-)mul(886,969):?/':]}-who()(mul(686,683)#}+($why()mul*^*$){&-(mul(94,775)- @when()?%]{when()mul(376,100)''/,&]^<mul(853,752)when()%who(),[^@where()!do()who()when()how()when(474,246)mul(318,180)do()%~(mul(216,96) ;}]why(907,964)$+when(680,212)?mul(442,979)why()what();##select()%mul(34,342)mul(641,907)@]who()@^:^mul(648,605)how()<}]when()!mul(567,219)?where()$what()~+from(),%how()mul(549,85)$-&(mul(94,269)~how(811,581)who(596,80)-how()~mul(510,591)mul(586,482)who()?#-<[[select()*}mul(249]{%<,where()*~^mul(628,294)]+what())why()mul(312,879&,?+don't()mul(100,514)when()select()mul(621,918)@select(813,295)/{^'%+mul(239,859) ']<*)mul(868,763)where()[/when()@)#{^mul(209,999)how()do()*#}},},&>mul(70/:from(184,559)>mul(679,138))<mul(454,112)[@)-?*where()mul(573,473)[(-/mul(867,232)~]/^/!'&where()mul(391,655)[%'mul(73,32)/{->)(~mul(929,872)'%#)mul(563,750)>(mul(324,725)what()why()[@$mul(186,770)?mul(719,251)[mul(270,934)+>when()'$when()mul(647,486)how()from(947,190),!(?mul(113,517) %[select()what()^)!mul(299,591)]:@' *where(145,530)/mulwhen()mul(811,260)mul(80,605)  where(296,197))])>from()mul(324,361)select(){[/';/},mul(648,947&how(){who()/'-%*]mul(949,359){mul(288,162)&];&:^mul(188,899)select()where()]%mul(248,30)#[&+'why()'') don't()][}& mul(808,221)what()@>><;>*mul{;>what()what()+mul(646,752)select()<from()why(211,37)~~~:mul(196,842)}where(690,849)where()[$select(571,536)how()from()<mul(6,129)what()what()?]]how()mul(116,23)who(205,335)>)'where()!mul(748,585)>?<##mul(381,399)mul(597,746)) *mul(881,573)/:({why()'mul(527,57)@/what()?mul(395,551)%who()when()%'mul(713,766)[<mul(749,438)'(}^when();{mul(43,565)what()% #mul(653,209)what():!-mul(64,870)#from()select()from()mul(206,327)?(mul(678,256)^{mul(311,65)who()when()<(when()mul(552,622)*how()%?~;:;;)mul(767,192)--&$mul(512,806)['?')who()mul/({what()&/#'!mul(811,828)]select()~@!/(}$)mul(683,153)&}&~how()from()mul(815,380),?$*+mul(133,342)mul(867,908)!;&why()?(+!mul(915,100))when(895,91)&select()!({where(758,740)mul(759,261)-from()&])mul(365,436)from()&' &^mul(541,400)~from()-what()!mul(679,638)mul(107^#,%~#>[)*select()mul(313,218))when()when()mul(360,494<-select():::- [/mul(517,923)*from(),from()how()+]mul(870,559)}{*?do()>~mul(704,518)where()!)select()?from()where()&'do();mul(270,449)~[*mul(774,600)how():>why()[!when()mul(338,711){]mul(962,193)*where()#![-+mul(511,924):[who()why()}mul(252,534when())when()when()()'!why(230,750)-mul(543,358)~~ -mul(394,506){mul(176,192)who()from()%@mul(181,776)%[ don't()when()where(229,174)+}@who()where()]>mul(553,452)@{/mul(790,202)&&-]mul(783,999)'mul(123,410)<,#what()}how()when()from()$~mul(674,974)why()#>do()'[$]}when()mul(907,824)from()select(){what()mul(584,273)#<>>do()mul(767,778)how()how()from()[#<$from()how()>mul(133,565):mul(888,792)
who()where()don't()]mul(891,277)~mul(160,638)('don't()/@/%{mul(462,975)!^:+mul(317,407){who()/from()/mul(424,628) when()select()mul(415,352)!?[where(){?how()/mul(661^, -mul(141,973)(/where()!#who()(what()#$mul(916,889)when()$ )mul(945,846)why()+#where()@how()mul(147,694)%select()mul(414,149)< when(){)what()&[how()mul(903,731)~#mul(389,694)mul(72,447)mul(490,881)?++from()>+ ^(mul(703,722)mul(622,578)from() }@^)+mul(642,732)>from()where()@>\${who()mul(526,211$why()[why()mul(349,908)who(635,389)from()what()*$*>@mul(180,150)//: ^mul(622,131);[-^~-mul(32,430)mul(306,173)~where()how() (mul(292,552)<mul(422,363)^<<!#when(304,583)who()mul(348,963)': #select(875,567)#>'where()!do() why()~] who()@^mul(20,119)?[$+/$^mul(242,536)who()'-&'from()mul(351,640){,]~mul(152,587)@select(140,751)<+mul(387,212)[where()%when())how()& >mul(916,539)~]?[when()>!when()??mul(322,151)!]!]~!;mul(27,537); ##;^}}mul(538,277)why()mul(205,526)mul(412,826)^@?where()'mul(957from(193,394)from(863,680)!@how()mul(771,563)( who()mul(377,655) ]select();who()mul(360,272)-select()$what(){mul(291,618)})from()^when(),how()where()don't()why()+&mul(462,803)^$,mul(788,584)@ %?:![:mul(439,528)mul(129,761)]!~mul(321,102)mul(41,728){&what()how()mul(93,933))[ where()^*@+mul(553,965select() '&{-mul(712,817)/<why()[:>/&mul(482,328)when()'mul(957,978)-}{[>{@what()who()mul(48,186)?]how()$what()&,)mul(33,872)#mul(125,207):;mul(143,386)how(),select()don't()}#when()%]&^@?^mul(107,59)&%?don't()mul(183,332):{}/[(#%-+mul(766,627)from()who() what()-+$^mul(41,791)who()] ;-#select()~mul(939,288)[:(</{$how()%select()mul(624,973) ]%mul(780,706)why(677,630);don't()+mul(3,844)$)$$where(),!why()[:mul(506,60)( <>@what()who()?mul(210,210)?select()why()select()where()-how()^mul(755,497)+?^(mul(860,478)^}+$from()(mul(565,649)}mul(184,450) ;/+%[why()mul(752,488)$how()mul(349,56)#'%,+mul(571,637)(mul(186,674)?how() </~@:%mul(295,276)'~where()-&%!mul(72,565);mul(140,645)%#-#*mul(258,568)!/select()why():&}from()from()don't()mul(458,777)#>,'^#!mul(577,819)mul(767,490)how()@when(359,565)mul(97,67)when()?where()>,'(-mul(267,998)%where()why()where():mul(593,317)<mul(514,327)how()~$[{mul(942,232)how()(who() 'from())mul(752,235)?/!'/*#mul(291,995){who()%!,%mul(873,542)%mul(543,144)from())'select()mul(317,658)+mul(819,545)<&what()who()$#who()how()$*mul(849,792)<;-mul(401,327)select()^}?mul(184,612))(where()what()[where()where()@}'mul(532,791)how()how()from()$*~:mul(963,569)when()%- :}why()^~$mul(520,245))^):{do()!mul(900,510)$ %who(615,822)mul(374,872)''/ mul(808,426)select()mul(268,752)&why(),</%!:!/don't()who(){when()*(where()mul(403,172)^mul(185,447)}mul(233,330)why()/&&%who()#/^mul(705,506)?%from();mul(494,15)['}]-}mul(45,474)who()@who()@why()don't()mul(174,355)?what(),@*$+#&mul(9,768);:^mul(381,691)when()&$/]?what(564,603)^how()mul(468,953)[@when()}mul(702,659) where()?where(){**mul(535,116)~where()$('}^~from()mul(926,18)&who()$when()where()>from(),mul(541,30)/why()\${[from()who()  mul(732,465)[<!{mul(794,385)mul(676,776)who()]/mul(45,904)<~+who()@-!)&where()mul(49,63))mul(710,576)+mul(279,872)&<{what()-how(),&how()~`,C2=`MMMSXXMASM
MSAMXMSMSA
AMXSXMAAMM
MSAMASMSMX
XMASAMXAMM
XXAMMXXAMA
SMSMSASXSS
SAXAMASAAA
MAMMMXMMMM
MXMXAXMASX`,y2=`XSXMAAXXSSMMMXMXSXMSXMXSAMXSXMASMMSSMMSASXSAAXAAMXMMAMAMXMXSMXSAMXAXSAMXSSSXMASAMXAAMXSXMASAMXXMAXXSAXAMXMMSAASMXMXMASMMAMXXXSAMMSMMSXMASXAA
XXAMMSMMXMAMAASXSAMAMSAMASASMSASAAAAAXSASAMMMXSMXSAMSSMMASMSAAXXSXAMSAMXMMXMSAMXXXMSMAMMAMXMSSMMMSSMMSASMSXAMMMAASMASAMXSSXSASMSXMAMSASXMMSS
SSSMAAXAAXAMMXSASXMAMMASAMXSAMAXMMSMMMMAMXMAXXAAASAMAAMSMSAMMMSMXMSAXASXSAAMMXSAMXMAMMSMXMAMAAMXAXAAASXMAMXMXAMSAMAXMASAXAXMAMXXAMMMMAMASAMX
XAAMSSSSMSSXSAMAMAMXMSXMASAXMMAMXMXMMAMAMXSAMSMMMSXMMSMAAMXMMXSAAAMSSXMAMSMSAAXAXASMSAMMAXMMSSMMMSMMMXAMSMAXSXMMAMXXXXXMMMMMSMMSXMASXSSMMSXM
MSMMAXXAAXAAMXMASAMXASXSXMASXSXMASXAXMAXXXMMMMAAAXAMXMMMSMAMXAXXMSXAMXMXMAMMMMSMSMSXMAMSSSXAXAMAASAMSSMMASXMAMXSAMXSMSMXAXAAAAXXAXAMAMXXXMXX
XMASMMSMMMMMMAXAXMSMMSAMXAMXXASMAMMMMSSSMSSMASXMMSSMAMAMAXAXMSSXMXMMMXMAMMSSSXMAAAXXSMMSAMMXSMMMMXAMXAXSMXXXXAMXAMAMAAASXSMMSSMMMMAMSXAMAMMX
SSMMMAMXAAAAXMMMSMXAXMAMXSXMAMAMASAMXXAAAAAMXSAAXAAMMSMMMSSSMAAXSAXMAXXASXAAMAMSMMSXMAMMAMXXMXAXMSSMSSMMASMSMSSSXMAMSMXAMAXAXAAASXSAXMASASAM
MAASMSMSSSSSMSAAAXMAMMXMAXAMXXMSASASMMSMMSSMASXMMSSMAXMSMAAAMMSMSASMAXSMMMMSMAMXAASMSAMSSMMXMASMXAAXAXXSMSAAAXAAASAMMXMASAMXSXSMSAMMMAXAMSMS
SSMMAAAAAXXAASMSMMMSMSSMMXAMAMXXXSMMXAAXMMAXAMMSMAAMSSMAMXSMMMXMXAMMMXSXAAXAMAXSMMXAXSXXXAXASAXMMSSMMSMAXMXMMMMSXMASMXSAMASMSAMXMXMMASMMASMM
AAAMXMASMMMMMMAAXAAXAAXAMSMMASMMMMASMSSSSSSMXSAAMASAAMXASMAMXSASMSMXXAMMSMSAMXXSXSMSMMMSSSMXSAMXAAAAAXAMXMAXSAMXXSAMMAMXSSMAXMASMSXSMXAXAMAS
SSMMXSXMASXAAMSMMMSSMMMXMAAXMSXAAAMXAXAAMAAAXMXMSXMMXMMMMAAMASASAXMSMASMMAXMSMMMAMAXAAXMAMMAMXMMMSMSMMMXASXMSASAMXASMMMAMXMXMSMSXSASAXXMXXAM
MMMMAMASXMASXXASXAAXAASASMSMASAXMXXSMMMXMSMMMASXSXSAMXASXSSSMMMMAMAMMAMMMSMAAAXMAMASXMSMSMMASAMMMXMMASXSXSMASXMAXSXMAAXAAMSSMMAXAMAMSXXASMSS
MAAMASAMAMMMMSASMMMSSMXASAAMSMMSMSAMMAXXMXXASAMAMAXAMSAMAAAXXAMMMMXMMMSXAMMSSSMXXSAMAASAAXSAMAMSASASAMXAAMMAMAMXMSSSMMXMXAAAAMMMMMXMASMAMAMA
SSMSXMASASAAXMAMXAMMXAMSMXMXMAAAAMXMMASMMMSMSAMAMXMXMMAMMMMSSMMAASASAASMMSAAAAXAMMMSMMMSMMMAMSMMASXMASXMMMMXSXSXAMASAMASXMSSMMSAXASMAXMAMAMX
MMMXXMASASMMSMMMSMSAMXMMAMXASMMMXMAXXXSASAAXSXMXASMMXXXMSAMXAMMXMSAMMSMAXMMMMMMMSAMAMXXAXXMXMXAMXMASMMAXSAMXMAXAMMAMXMAXAAAXAXMAMMXAMXMXSXXS
MAXMAMXMXXASXAXAMMMAMMMMAMMMSXAMAXSSSMSAMSSMMSXMXAAMSSMXSASXMMSXMMMMXXMSMMASAXAASXMAXSAMXSSMMSAMXSXSASAMXASMMAMAXMXMMMMSMMMMMMXAMXXXMSXAAMXS
SAXSAMXAMSXMSMMSSMSAMAAXAMXAXMSXSAAAMAMXMAXAXMXAXMAMAAMMSAMXAASASAXXASXMAXAMMXMMSXAXXAXXMMMAAMMMXMAMAMAMXXMAMASMSSSMSSMAMMSAAXMMXXXAXXMMXSAX
MAMSAMXMXMAAAXMXAASASMSMMSMSSXMAXMMMMSMAMMMMMMSMMSAMSSMAMXMMMMMAMXSMAMASMMMMMXMXMMSMMMSMASMSMSSSMMAMAMAMMMXSSMSAAAAXAASMXAMSSMAMSAMXMMMSAMMS
XMMSAMXMASXSMSMXMMMAXAMAAAAMMAMXMXSXXASMMMASAMAAXMAXMAMMSMSMSSMAMAMMSMMMMXXAXAXAAAAAAAAXXAAMAMAAASASASASXXAMAMMMMMMMSMMMMMXAMMXMAMAAAAAAAMXS
AMXXMAXXAMMAXAMASMMSMAMMSMSMSAMMMASMXMASXSASASMSMMSAMMXSAAAAAMMMMSXAMMSASASMSMSMMMMMMSSSSMXMAMMMMXASMMMSMSXSAMMXXAXAXAAAAXAMXSMMXMSSSMSSSMAS
XXAASASMAMSSSXSAXAAXMXMXMMMASASXMASAAXAXMMASMMAMMAAASXXSXMMSMXAXAAMXMASAMASAAAMMSSMXMXMAAXSSXXXAXMXMXSAMAAASASMMSSMSSMMMMSSXAMAAXMXAAAAAAMAM
MMSXMAXMXMXAAXMMXMMSAMXASXSASAMMMASXSMXSAMXMAXSAMXSSMAMMSMAMASXSMXAXMXMMMMMMMMMAAAMMMAMSMMXAASXMMSAAAMAMMMMMMXAAXASAMXXXXAMMMXAMMMMXMMMXMMAS
AAXAMMMMMMMMXMASAXXAMXMASASAMAMAMAXMMAAAMSSMMSAMXAXMMMSAAMAMXMAAXAMMXMAMXXAAXXMMSSMASAMAMMMMAMAAASMSMSXMMSAMXSMSMMMMXSSMMMSASAAXAASMSMSAXXAM
MXXAMMAAAXAXXMAMMSSMMAMAMAMMMXMMMXSSXSMMASAASAMAMMSAAAMMMXMXAMXMMSSMMSMMMMSSXSAMXAMMSASXMAAXXSSMMSXXAMAMXMASXMAAMAAXMAMAAXSASXSSSXSAAASASMSS
XSSMMSSSXSAMMMSXMAAAMXSXMXMMAXXXXMXMAMXXXMMMMAXXSASMMSSMMASXMMAMXAAAASAXSAMAASXMSSMMSAMMSXSSMMMAMXMMSMXMAMSMAMSMSSSSSMSMMMMAMAMXMSMMMMMAXAAX
MMASMXXAXMASXAMXMSSSMMMAMXMAASMMSXAMAMXXSSMSMSMMMASMAXAAMAXAAASMMSSMMSAMXMMMMMAAAAAXMAMMSAAMAXMXMXMAAAXSXSMSAMXXXMAXXAAMMAMXMAMAXXMAMAMXMMMS
MSAMMSMSMSMMMMXAXMAXMASAMASMMSAASXMMMMSAMMASAMSAMSMMMSAMMSSMMMXAAAAAXMXMSMAXASMMSSMMSMMAMMMSXMSMSAMMMSXMSAMXXXXMSAMXMSMSXXMASAMXXMSSSMSASAMX
MMASXMAAAAXXAMSSMMMMSASASXSAASMMMMXAAAMAMMAMMMSXSAAAAXAMAMAMXXSMMSAMXAXMXSAMXXXAXAMMAMMSXSASXAAASMSSXMASAMSMMMMXSXXXAAAMMMMASASMSMAAAAXAMXSS
XMAMAMSMMMSAXMAMXXAMMAMASMSMMSAAAXSMMMSMMMXSMASMSMSMSXXMXSAMXXMXMAXMMMMMAMMSSSMSSMMSASAMSMASMSMMMAAXASMMXXAASXAAMMMSSMSMASMMSAXAAMMSMMMSMSMM
SMSXMMMXMSMMMMMMAMSMMSMMMAXMASMMSMXAAMAMXMASMASASAMXMAMXASASMMSAMAMXAAAMASXAAAXAAXMSAMXXAMXMAXMSMMMSMMMMMSASMMMXMAMXMAMXAXAXMMMSMMAMAAAAMAAX
AXXASASAMAAAXAAAAAXAAXAXMMMMXMAXXAXMMSASAMXSMMMXMAMASXAMMSMMAXSXSSSSSSSSXSMMSMMMSMXMASMSMSXSXMXMAXMAAAXXAAXMMXAMXXMXMAXMSSSMAAAMAMASXMSMSSSM
MMSMMASMSSSMMXMSMSXMASXMXMASASMMMMSMASASASASASXSSXMASAMMXSMSSMMAXAAAAAAAMXMAXXSXMAXMXAXAAMAMAASASXSSSMSMSSMMXMXSAMSMMASAAAMSSMMXAMAXMXMMXAAX
XAAAMMMAAXMAXSAAAXAMAXAXXXAMMSAAXAAMXMASXMASAMAMAMMXXAXSAMAAXAMAMMMMMMMMSAMXMASASMXXMMMMSMAMSXMAMMAMXAMAAMAXXAAMMMAAXMAXMMMXMAMSAMXSMAMMMXMM
MSSSMAMMMXSAAMSMMMXMASMMMMSSXMMMMSSSXMXMXSXMAMAMAXXAMSMMASMMSSMXMAAAAAAXSMXMSXSAMXSXMXAAAMXMMAMSMSSSMXMMMSSMAMMSXSSSMMSXXXAMMAMMMMXAMASAXMXM
XXAXXASMSXMXSMXXXAMAMSXAAMXAMXASXXMAXMMAMAMSAXMMXMMMXXASXMAXXMASXSMSMSSMMSAMXAMXMAXAMSMSSSMSSMMAAMAXMASXMAMSAMXMAMMAMAAMXMAMMASXSXSMMMSAMSAS
AMAMXMSXMASXMMSMXMSAMXXSXMSAMSXSASMASXAAAMXSAMSASASXMSAMXSXMXMSMAXXMXMMXAAXXMAMXMMSMMAMAAXXXASXMSMXMASXAMAMAXMAMAMSAMXSSSXMASMSAMXXAAMMMMSAS
XMASAMXMXMMXMASAMAXAXAMMMMMAMXAMASMAXASXSXAMMMXAXASMMMSMAAAAAMMMAMAXXSAMSMSXXAXMAXAMXAMMSMMMAMXMAXSMMXMXSSSMMSMMXMMASAMAMXAAXAMAMAMXMSASMMMM
ASASAMMMAMXXMMMXAMMSMSXSASXSMMAMAMMSSXMAAMXSSMMMMXMAAAAMASMSMSAMMSSMAMMMMAMASMXMSSXSSMMMMMSAMMXSMSXAAMXAMMAXAASMSMSMMXMAMSMMSSSSMXSAAMXMAMXX
MMASAMSXMMMXMSMSSXAXAXASXMAAASMMXSAAXAMSSMAMXXAMXXXSMSXSAAAAASXSAAAMXMSAMAMAMXAXMAXXASAAAAXMMMXMXAMSMSMMSSSMSSMXAAXXXSSXMXAXAAAXMASMMMMSXMSS
XMXMMMMASXSXSAAAAMMSAMXMAMSMMMXSAMXSMXMXAMXMASMSMMMMAMAMXSMMMMMMMSXMXSMMSSMXSMXMMXMXAMSXMSSMASAMMAMXASAMXAAAXMXSMMMMXMAXSSSMSMSMSAMXASXMASXA
XSAMXSSMMAAXMMMMSAAAXXAMAMAAMXXMASXMASXSXMAAXMMAASXSAMXMXAMXAXAAXXMSMXAAAAAAMMSXSASMMMAXSAMXXMASXSSMMMAXMSMMMAAMMAAMMMSMXAMAMAXMMMXSAMAXMMSM
MXMXMAAAMMMMMSAMXMSSSSSSMMXXMSAMXSXMSMMXMSSSMMSSMMAMXMXMSXMSMSSSMMAAAXXMSSMMSMAAMAXXAMASMASXXSAMAAXMMSSMAMXMMMMSSSSMMAMXMXMAMMMSAAMMMSXMAAAX
MMMAXMSMMMSAAMASXMAMMAMXMASXMSAAAXMXMXMXMAXAMAAXAMXMAMAAMAMMXXXMMMSMMMAMXMAMAMMSMMXSXSMSXMMAMMAMMMMXASXMAMMMASXMAAAMMASASXMMSMAMXMXAAAASMSSS
SASMSAXMAAMMXSAMAMMSSMSAMXAAASAMXSMAMAMASMSSMMSSSMMSSSMXMAMAXXAXMXAASXMMASAMMXAXAXXMASMMASMXMXAMAAAMXSXSASASASAMMMMSSXSASAXAAMMSASMMMSMMAMAM
SMSAXMAMMXSAXMASXMXMAASXMASMMMXSAMMASASASAAAAXAXMAMXXAASXSMMSSMMSAMXMAASASXSXMSSMMMSAMASAMXAMSMSSXSAXMASXSXMASMMMXAMXXMASAMSMSASMMSAMXMMXMAM
MXSMAXSXXAMMSMAMXMAMMMMAMAMXMSAMASMMSXXAMMMMMMSMSAMSMMMAAXAXAXMAMMXSSSMMAMXAMXAAAAXMAXAMAXMXXAMXXXAMAMAMXMAMXMAAXMSSXMAXMAMMAMASAMSMMSMXXXAM
MAMXMSXSMAMMMXAXAMMMMXSXMAMMXMAMAMXAMXXXSASXMAXASAXXAAXMMMMMSSMXSXAXMAASAMAXMMXSMMSSMMASAMSSMAXAMMSMXMXSMMSXMXSMSXXAXMXXMAMMMMAMXMXXAMMAMSAS
MASAMXAMSSMMMSXXMXSASAMXMAMXXXMMSSMMASAASMMSMXSMMSSSSMSXMAAAAAAAXMASXSMMASMMXXXAMXAAXSAMAXAASMMMAAAMAMMMMAAASMMASMSMMMSMSMMAXMXMSMMMSSMMMAMX
SASAXMAMAMAAAXMSMAAAMXSAMXASXMMAAAASASMXMAAXMMMMAXMAMXMASXSMSSMMXSXAMAXXAMXMASAMXMMSMMASMMSMMSAXSSMSASXSMMSSMASASAAXAXAAAASMMMXXSAMAAAMSMASM
MASAMSMMMSSMXXAAMXSMMMMAMXXAAAMMSSMMASXMSMMMXAXMASMAMMMXMMAAXXAMASMXSAMMSSMMASMMXSMXMMMAXXMAMXXXXAASASMAXAXXMAMAMMMSMXMSMMAMSMSXXAMMSXMAAXMM
MAMAMSAMXAAAAMXMSMXAXXSAMXMAMMMAAAAMXMAMAAMSMSSXXXMAXXXMMXMXMMMMASAAMASAAAXMASASAMMAXAXMASXSMMSSMMMMXMASMXSASXMAMAMAXAAAMXMAAAAXSSMMMASXXMXX
MMSMMSAMXSMMMSAAAASXMXMASAASMSXMSSMMSSMSSSMAAMAMSXSASMMSMSMASAMXMMMMSXMMXSMMASXMAMSAMXXSMXAAXXAAMMMMAMSMMXSAMXMAXMSASMSMSAXXMXMXAMAAXMMASXXS
MMXMASAMXMASASMSMMSMSSSMMXSMAMAMXXMAAAMMAMXMMMAMXAMASAAAAMSAMAXMMSMMMXXAAXAMAMAXAMMMMSAXXMSMMMMSMAASAXAASAMXMASXSAMXSAMASASXSMXMASMMXAMXMXAA
SAMMMSAMXSAMXXAXXAXAAAASXXXAAMMMMAMMSSMMAMXMXSXMMMMAMMSMSMSSSSXSAAXAAXMXMSAMSMSMAMAAAMXMAMAAXXAXMSMSSSMSMXSAMMSXAXXXMXMASAMASMASXMMXAMXSMMAM
SAMXXSAMXMMSMMSMMMMMMSMMMASXMXXAXAMXXAXSXMASAMXSAXMXSAMAMXMAXAAMSMSMMSMMMSMMXAXSMMMMMXASMSMSMMXMAXAMXMXAAASASXXXMMSMMSSMMAMAMMXSMAAASXMAMAAM
SAMSMSAXMAXAAXXAMXSXAAAXMAMXAXSXSASXSMMSASASASAMSSXAMMSAMSMXMMMMAXXAXAAAMMAMMXMAMXAASXMSAAAAXXXMASAXAMSMMMSMMMMMXAXAAMAASXMAMMXMXMMMMASMXSMS
SAMXAMXMMMSMSSXXMAMMXXMMMXXMSMAAMAMAMXASAMXSXMASAMMMSASAMXAXSXSMSMSXSSMSXSAMXASAMXMMMAAMXMSMMXMAMXMMAXMAMMXAASASMSSSMSXMMMSXMSAAXXMASAMMAMAM
XAMXMMSSMMAMXAXSMSXSASMMSAXSAAMXMAMAMMXMAMAXMMXMMSAMMMSAMMMMMASAMXXMAAAMAXAXXMXAMSSSSMMMMMMXXMAAMAXMXMSAMSSSXSMSAMMXXSMMAXAAASMMMXSAMXMMASAA
XXXAXSXAASMMXSMMAMAMAXMAMMMSASMSSMXSMSASAMMXXXAXXMAXAASXMAASMAMAMAXASMMMASMMSSSSMAAAXXMXXAAAMAXAXXSMSAXXSAMXMMXMAMAXXMASMSMMMSAXSAMASMMMMSMM
MSAMXAMMMMAMXXAMAMXMXMMAMMMSAMXXASAAASASXSXXMSMSAAMSMMSMSASMMMSAMSSMAXXXXSXAXAAMMMMMMXSMSMXSASMSMAMMMSXMAXXMASASAMXMMSAMXXXMAXXMMASAMMAAAMAX
AAMMXMSSMSAMXSSMSSSXMMSMMAMMMMAMAMMMMMAXMAMAAAXMASXAMMMXXXXMXXMAAMAXMSXSAMXSMMMMXXXXMXMAAAAAMXAMAAXAAMMMMMMMMSXSXSAXMAMSXAMXSXAMSXMMSXSSSSMM
SSXSMXMAASMSXMXMMAXSAMAMSMSASXSMSXXXAMXMXAXMSMASAMXXXAMMSMSMSXSMMSMMXSAMXMAXASMXMXMMAAMXMMMSXMMMXMXMMSAAAMXXXXAXAMMXXMSMMMMAXMMXMXMASAMAAXXA
XMAMAAMMMMAMAMXSMXMXMMAXAASASAXAMXMXASMMSSMMAXXMASASMMMAAAAAXAXAAXXMAMXMAMASAMAAMAAXSASXXSAXXAXSASXAAXXSSMMAMXAAMSMSMMAXAAMXSAXMMXMAMSMMMMMS
MMMMSXSXMAMSAMAMMSMXMSSSMXMMMXMMMASAMXAAAAMMSMXMAMXMASMXMSMSMMMMXMASAMASASAMXMSSSMSXMAXXASXSXSASASMSMXXXMAASXAMSXAMAASASXSSSMXSAMAMMSXXMAMAX
XSXAXASAXAXSXMASAAMAMAXAXMAMASMXSASASXMMSSMAMMSMXMAMXMSAAXXXAMASAMXASMAXASMXAXAMXMXAMXMMAMAMAAXMAMAXXXXAMXMMAMSAASMSMMMSAXMAXASXMAXXAMXSASMX
AXMMSMMMMXMMXMMMMMSASMSMMMSMASAAMXSXMXSAMXMAXAAXMSSMMAXMXMASAMSMMSMAAMXSXMMASMMSAASXMASAAMAMMMMMSMMMAMXAMAXSAMMMXXAXAMMMMMSMMMSASMSMASASXAXX
SSMXAMAASMMSAXAXAMXXSXAXMAMMAMMMSAMASMMMSMSSMMMMMAMAMXXXSAMSSMXMSAMAMXAMAAXMAAXSXMAAXXXSXSAXXAXMAAXMAXSAMAMMMXAXMMSMMMAAAXAXAXSAMAMMMMASXMXS
AXMAMSSMSAAAMSSSMMSAMXSMMXXMASXAMASMMSAXSMAXMASXMASXMMMSAMXMAXAMMASMXMMSMMMXMSAMXSXMMMMMMSMXSXSSSSMMAMSXMXSASMMSAXXAASXSXSAMXMMAMXMAXMXMAMAS
MSSXXAMXMMMMMMMAAAMAMAMAMMMMXMMXSMMAASXMSMSMSASAMXSXAAMMMMASMMSSMXMMAMXAAAAXXXAAASMMSXMAAMMASMMXXAAMSMSASAMMSAMXMXMMMMAAXXMXAXXXMASXSAMXMMAS
XMAMMMSXXXAXASMMMMSXMASMSAAXSXAAAMSMMMSAXAXAMMSAXMMXSXXAXSMXAAAAMAAXAMXSSMSMASXMAMAAMASAMSMASAXMMSMMMASAMXXMMMMMMMMSSMMMMSSSMMAMSMSAXAAXXMAS
XMAMAAMMMSSSMMAMAMXMMXSASMMSAMMSSMXAAXMSMXMASMXMXASMMMSMXASMMMSSSSSMMXMAMAAMMMMSSSMMSMMASXMAXMMMXAAAMMMAMAMSMSAXXXAASAMXAXAAMSMMAXMXMSMSAMXM
XSASMXSAXAAMASMMASAMXAMXMASXMXAXAXSMMSAMXXSMMMAMSMSAAAAXSAMSAXAMAAXAAMMAMSMXAAAMXAXMAMXXXXMXSSSMASMMSXXAMAXAASXSMMMSSMMSSMMMMAAXXMMMMAAXXMSM
MSASAXSXMMSMAAASMMASMXMAXXXAXMMMMMXAXXMXSXMMASAXXASXMMSMMAMSXMASMMSMMMMXMASAXMSSSMMSASMMMMMSXAAXAXAAAXXSSSSMXMXSAAMAMAAMASAXSASMSAMASMSMSMAS
MMMMMXMXMXXMMSMMMMAMMASMSAMXMMSASASMSASAMXXSASMSMMMSMAXAXAMXMXXMXXXXXSAMXMXSAAMAXXMSASAAAASAMSMMMSMMMSXAAMMXAMMMSSMMSMMMSMXXMXMAMASAMXAAXSAS
MAMAMASASMXXXAXXAMAASMAMXXAAMXSASAAASAMAMSAMXSAMAAASMSSMMMXAAXXASMSAMAXXXXAXMMMMMXAMAMXMXXAAMAAAAXAAAAMMMXSSMSMAAMAXXMSXXAMSSMSSSMMAMSMSMMXS
SASASXSAXAASMMSSXSSMXSAMMMMASAMAMMMXMASXSMXMASASAMXSAASAASXSMSMAMAAXXAMSSMMSXMAXMMMMXMASMSSSSSSMSXSMSSXSAAMXAAMMMSMMMMMXMAMAAXAAXXMAMMAAAMMS
SASAAAMXSMMMAAAXMMMMMMXSAXSMMXSMMXXXSAMMAMXMASAMXSXMMMXMMSAAASMAMXMXMMSMAAAXMMMSAAXSMMMAAXAAAAAMMMMMMXAXMSSMSMSMMMMAMASMMMMXSMMSMMSSMSSSSMAX
MAMAMXMXAXSSXMMSSSMAAMSMMMASAASXMXSXMASXMMXMAMXMMAMSMMSSMMMMMMMAXASAAMAMSMMMMAXSMMXAAAXMXMMMMMMMSAMMSMSMAAMMXXAXMASMMAXAAAAXXXMAAAAXAAAXXMSS
MSMSMAMXMSMASASAMXMMXMAAAXMMMSMAMXMAXAMXXMSMASAXMAXAAMAAXSASAMSMXASMMSAXXAMAMSMMSSMSSMSXSXMXMXMASAXMXAAMMMXMASMMSAMXMSXXMMSXXAMASMMMMMSMXMAM
MAAMAMXAXAXMAMMMSMXMXXMSSSXXXAXAMSAMXSAMMSMSAXXSXSMSSMSSMAMMAMASMAMMMMMMSAMXXMAAAXXAXXSMAMMASMMMSAMSMMMSMMMXMSXMMSXMAMASXMMMSSMXMAAXXMAMSASX
SMSMXXXASMSXXXAXAAAXMSMAMMMSSMSSSXMXAXAMXAAMXSXMAXAAXAMXAMXSXMAXMAMXAAMXSAMXMSMMMSMMSXXMAMSAMAAAXAXXAAAXAMXSXSAMAMXSAMXMAAXAAXMAXSAMXSAMMAMX
MAMAXMMMAXAXXSSSMSMSAAMAMAAAXAAMMMAMXSAMSMSMXAASAMMMMXMASXMAMMXMSMSSSSMAMASAMAXAAXAASMSMAXMASXMSSMMSMMSSMMAMMSAMXSXMASMSMMMMMSSSMXASAMAMMXMM
MAMAMAASAXMMAMAMXMAAMMSSSMSSMMMSAMXMMMMMXAAAXSXMASXSAXSXMASMXSAMAAMAAMMSMAXAXSSMXSSMXAAMXSSXMXXXAMASAAAXXMASASAMMAASXMMSAMXSXAAAASMMASAMMSMS
SSMMXSMSMSMMMMASAMXMAXAAAAMXAMASMSASAMASMSMSXMASXMAMSMMAMMMXASXSMSMMMMAAMMMSAAAMAMMXMSMMMMXMAMXSSXASXMMSXSSSMSAMAMMMAAASAMAMXMSMMMASAMASXAAX
MMASMMAMAMXAXSASASMXXMASMMMSSMAXMMAMXSASXXAMMXAXAMXMAMSSMSAMXSAXXXXMMMSSSMAXMSSMASMSMXSAAMAMAMXXAMXSASXSAXAMXSAMSMASMMMSMMXMAXAXAMXMASAMXMMM
XSAMAMAMSXSXXMASAMXMSXMXMAXMMMSXSMSMMMMXMMSMAMXSSMSSMXAMAMSXAXMASXMSAAXAAMXMMAMMXSAXMAMXMSASASXMMAMSAMMMMMSMMMXMAMASASASXAXSSSMSXSASMMMXAMAA
AMAMSMMMAASMXSASXXSSMASXSMSAMXXAMAMSMASXXAAMAMAAAAAAMMMSXMXMMMMMMMASMSMSMMMSMASXMMMMMMSAASASMSMAXMXMXMAMSAMAMXSSXXMSXMASMSXMMAAAASMMAXMSMSMS
XSAMXAXAMXMAXMASAXSASAMXXXMXMASMMMMXSAMAMXMMASMSMMMSMMAAASXAAAAAAXXXAXXMAMSAMAXXAAXXAAXMMMXMASASXMMSMSMSMASXMAXAXSAMMMSMXMASMMMMMMASXMMAXMAM
XXASXMMSXSMSMMSMMMSAMXSMMASAMXXSAAMMMMSSMASAAAAMXMXMAMMSSMASXXSSSSSXXSMSMXSASASMMMSMMSMMASAMAMXMAMXAXAXXMMMXXXMAMSAMMSMAXSAMXAMXSXMASXMAMSAS
MSMMASAMSXAAXXAAAXMXMXAXXMAMMAMSMXXSMAAAMASAMMMMXAASXMAMAMMMSMMAMXXMMMMAMASAMXSAAAAAXAASAXAMXSMSAMSMMSSMASMMSMMMMSAMXASMMMXSSSMMXMXAMMASMSAS
MAAXAMAXMMXMAXMMMXMASMMMSMAMMAMMSMASMMSSMXSAMXXMMSMSAMXSMXAAXMXSAMXXAAMAMMSAMASXMSSSMSMMASMMMMXMAMAAAAXXAMAAXAAMMMXMMXXXMXMAAMXSAMMXSAMMAMAM
SSXMXXMASMSSSXXASASASAXAASASMMMAAMXMAMMAMXSMMXAXXAASXMAMXSMSSSMXAXMAMMMSMXXAMXSXMAXMMMAXAAAAAMMMMMSMMSMMMSMMMSASAMSSSMSSMMAMXMASAMAAAXMMSMAM
XAXSMSSMXAAAMMSXSASASAMSMSMSASMSSSMSXMXAMMMMSSMSSMXMXSXSASXAAMASMMSMMSAXMMSXMXMASMMMSSXMASMSXSAMSAMXAMXAAMASAMMMASAAAXAAASXXSMMSMMSSMXXXXSXS
MSMXAAAXMMMMMAMMMAMAMMMXXSXMASAAAAMMAMSSMMAAMAXAAXAXXMAMASMMSMXMAAAAAMASAAAAMMSAMAAAAMAMXXAAMXXAMXMMSMSAMSAMAMXSMMMSMMSSMMSMXMXMMAMAXAMAMXMS
MASXSMMMMAAAMSSXMAMXMASXAXXMAMMMSMMSAMXAASMSSSMSSMSSSMAMMMAMAXASXMMMMSAAMMSXMASASXMMSSSMSMMMMAMMSSXSAAMAAMMSMMAXAXXXAXXAXAMXAMAXMAMXMXMAMAAX
SASMMMAASXSMSAAMSMSMSASMAMMMMSAMXMASMSSMMMAAAAAMXAXAXXAMASXSAXMXMMXAMMXSAMXMMMSAMXMXAAXAAAAAMAXSAMXSASMMMAMAAMXSMMSSXMSXMXSSMSSSSMSSSXSASMSS
MASAXMMMSXAMMMSMSAAXMAXAXXAAAMMSAMASXAXASMMMSMMMMXMAMXSSMSAMXXSAMMSMSMAXAXMASAMMMAAMMMMMSSMSXSSMASAXMMXXMASMSMMMMAXAAMMAMXXAAXMAAAAAMASAMAAM
MXMXMASAMXXXXXMAMSMMMSMSXSSMMSASMMASMASXMASXAAAMMMSSMAXAXMAMAMMAMAASAMXXMSSMMMXAMXXXXXXXAMXXAMAXAMXSMSXSSXMAAAAXXMXMMMSAMMSMMMMSMMMSMAMAMMMS
MMMAAMMAXXSSMSMXMMSAXMAMAMAAAMXMXSXXMMXXSSMSSSMSAAXAMSSMMSAMASXSMSXSXSXXMAMAMSMSSXSAMXMAASAMXSAMXMAAAAXMMAXSSSMSMMSMMXMAAAXAMXMAMMXMMMSSMMMX
XAMXSMXMMAAAAMMAMMMSAMAMAMMMMMSAMMAXSMMMMAAAXMAMMMSAMXAXAXASXSAXAMXSAMMAMAXMMSXMAASXAAMAMMXSAMXMMMSMAMSSMMMMAXMSAAAASMSMMMSMSMSSXSAAMAAAAXXM
SSSMAAASMSMMSMMASAAMMSASAMXAMXAAAMSMXAAAXMMSSMMSAMXMXSMMMMXSAMXMMMAMAMXXAMXMAMAXMMMMSXSASXAMXSXXAAMXMXAXAXAMXMASMMSSMAAXSMSAAAMAASXMMMXXMMMX
AXXAMSMSAAMAMASASAXMASXSASMSSXSSMXAAXSSXMXAMMAMSASASMAMASMMMMMMXMMAMMMSSMSAMASXMXAXMXMMAMMXMMAMMMXSASMSSXSSSMMMXMXMXMMMSMAMAMSMMMMMSXSSMSAMS
XMASXXXMMMMASAMXSASMASAMAMAAMXMAMSMSMMAMSMMSMSMMASASMXMAXAAXSAAASMMXXAXAAAMSASAMSMSAMXSAMXXXMXXXAXSAMAAMXXAAXSMAMAMMXXXMMSMXMXXXAXAXAMAMSASA
XMXMXMXSXXMXSXMAMAMMMMAMXMAXMASAMSAMXMAMMAMXXXAMXMAMASMASMMMSASASAAAMSSMMMXMMSAMSASXMAXMMSSXMSSMMMMMMMMSMMSMMAMMSMSAMSSMAXASXXSSMSSMMMAMXXMA
MSAMASAMMMMAXASXMXMAXSXMXASXSAXMSMXMMMMXSAMMXSAMXMXMMXMAXMAXXMMASMMSXMAMAMAMMSAMMAMXMMXSAMXXSAMXSMAXXXMAXAXASMAXAMXXMAAMASAMXAMAMAMAXSMSSMAX
ASASAMASAAMAMXAXMAMXXMAXXMAXMXMMMMXMSAMXSASAMXMXSMSMXSMMMSXMAXMXMXXMASMMASXSAMASMXMAMXAMXMMSMASAMXSMMMSMMMSMMXMMASAMMSSMASAMXXMAMAMMMAAAAASM
MSAMASASMSSSXMMMMSSMAXMASAMXMSMSAMAXSASASMMMAMMAAXMMAXAAASASXMXSXMAMMMXSXSAMXSAMMASASMMMSAMASAMXSAXAAAAMAMAMMAMSAMAXAXAMASAMMMSMSXSSSMXMMSXA
MMMSXMASMMMMAMXXAASXXAMXAAXXMAMSAXXXSXMAXXAAAAXSMXSMSSSMMSAMMMAMMSMMAMASMMXMXMXSXXMASMXASASASMSAMMSXMSMSMSASXMXMMSSMMSMMMMAMXAAMSXMXXXAMXMMS
XAMXMMAMASXSAMAMMSSMMSSMSSSMSXXSAMSMMXSASXSSSMMASAAXMAXSXMMMSMASAAAMXMASXSASAXAMMMMSMMMMSXMASAMASAXXMXASMSXMAXXXXAXAAAXASXMMMSSXSASMXSXSASAM
MMMAMSSSMMASASAAMMXAAAAAAAAAMMAXAXSAMAMMXAAMAMSAMSXMAAMXMASAMXAMMSSMAMASAAAMAAXSAXXXASXAXMMMMXMXMASXMSMMASXSXMMMMMSMMMSMSAAXAXMASMMMMSMMASMM
MASAMSAMXMXMXSMSMAMMMSXMMXMMMAMSMASAMXSAMSMMAMMMMXMSMMSAMXMASMSSXAAMAMXMXMXMXMSAXSASAMMMSAAAMAMXMAMXAAAMXMASAMAAAAAAAAAASMMMSSMAMAAXAXAMAMAM
SASXSMMMXSMSAMXAMASXAXMSSXMAAXXMXMSMMASAMXASXSASMMASAMSXMXSXMAXMMSMMMSAMXXAXAMXMMMXMMMXXAXSSSSSXMSSMSMSSXSAMASXSSSSSMSMXMXSAMAMASMMSMSSMXSSM
MASXXXXXMMAMMMSASASMASAAAASXSSSMAXSXMAXXMSAMMSAMXMAMAMXMAXSAMXMXAAAAXMAMSXSSMSAXXXSXMASAAMXAAXAXSAMXMSAMXMAMXMAAAXAXAMXMSXMAMSMMMAXMMSAMXMAS
MAMMMSMSAMAMAXXAMAXAMMMMSXMAAAAXMSMMMMXMXAMXAMSMXMXSXMXXMAMXSAMMSSMMSXSMSAAAASASXXXASASASMMMMMXXMAXASMMSMSSMMMMMMMXMMMSSMMSSMAASXMMAXSAMXSAM
SSSMXAAAXXASMSMXMMMXXAXAXAMXMSMMXAAMMAASXXMSSXXMAMAMXMXMSSSMSAMMAXMASAMASMMMMMMAMASXMASAMXXXAAAMMSSMSMXSAAXAAMAMAXXAAAXAAAAAMXMMAASAMXSAMXMS
SAAXXMSMSSMSAXXAAAASXSSSSMMXAMXAMXMMMMMXAAXAMXMAXMSMAAMAAMAASAMMAXSAMAMAMAXMXAMAAXXXMAMAMMMSSSMSAXMAMXAMMMSSMMXSSMSXSSSXMMSSMSSMSMMAAXMSAMXS
MSMMSAAXMAMXMMMSSMXSAAAAAMMSSSMXSASXAXMMSMMASMMAXSASASMMXSMMMMMMAMMASXMXSXMXSXMMMMSMSASMMSAMAAAMASXMSMMSSMMMXXXXMASAMXMASAXAAAAMMXMMMMSAMXAS
XAMAAMSXSMMXXSXAAMSXMMMMMSAAAXAAMMMSASAAAAXSMXMAXSAMMXMSMSAMXAMXMXMXMAXAMAMXSMMSAASASMXMASMMXMMMXMASAMMAMAAAXXMSMSMMMASXMASXMSSMSSMSAMXXMMMS
SASMMXAASXMXMMMSSMAMSMXMAMMSMMMMMSAMXSMSSSMMASMMXMAMMSMAASAMSXXAXMAXMSMSSXXMXAAXMSMMMAXMXMASMSAMASXMAMMAXSMMSMAXMMAAMXMXXAMXMAMXAAXMASMXMAAX
SXMAXMMXMAXXSAAMAMXSAAAMASXXAMAAAMMSASXAAXAMXMASMMMMAMSMMSAMXSSSSSXSAXAMMMMMMMMSSXMAMXMSMXXMASASASMSSMXMXXAAMMSMMSSMSMMSMASMXXXMMSMSXMAASMMS
MMSXMASXSXMAXMXSSMSMMSMSMMMSMMMMSSSMMXMMSMSMAMXMMSMMXMSXXMAMAMSAAAAMXMAMAAAAASXMMAMXXMAAXSAMXSXMAMXXASXSAMMMSAMXXAMMAAXMSAMXXXXXXXAAAMMMXAXA
MAXAMXMASAMMSMMSXMAXMAMXMXMAMASXXXMASXAXXAMXSXMXXAAXMXXMSSMMAXMMMMMMMSSMSSSSSSXMMMMMMSSMMASMAXAXXMMMAXXMAMSAXXSMMMSSMXAXMXSMMSMMMMMSMMAXSSMX
MSSSMSAMSXMMAAXXAXAASASAMMXASAXAAXSAMXSAMXMAMASMSMSMSMAAMAASMMSASXXXXAMMMAMXMMMXASAAXAAXSAXXXMSMSAAMMAMMMMAAMXXAAAAAMMSXMASXAAAAXAMAMXXMAAXS
AXXMAXXXXXMSSSMSMMSASASXSASMMXSSSMMMSAMMSSMSMAMAAXMAASMMSXMMAXSAMXASMMSSMSMMAAXMASXMMSSMMASMSAAAXXXMXASASXXAMMXSMSMSXAXAMASMSSSMSSSMSAXMSMMA
MSMMAMSMMSAAAMAAXXXAMAMAMMSAAAXAXMASMASMMAAXMMMSMMMSMXMMXMMMXMMAMAMXSAAXAAAMSASXMMMXAMXAMXXAMSMSMMMMSXSASMSMAXXXAXAXMASAMXSAMAXMAMXXMAXMAAAS
XAAMAMAAASMMMMSMSMMXMAMAMXXMMMMMMMSMSAMASMMMXXAMXAAMXMSAMAAXSXSASXSAMMSMSSSMMAXXAAMXSMMXXAMSMAMAXAAAXAMAMASMMAMMAMMMAAMMXXMAMAMMXMXSSSSSMXXA
SSSMMSSMMMXXXAMXSAMASMSMSMXXXXAAAMMAMXSMMXMMXMASXMXSAMSASMMMSXXASAMXSXMMMXMXMXMXMXSAXAXSMSAASMSASXMMSXMAMMMAMXXMAMASMSSMSSSMMSSMSAXXAMAAAMSM
AXAXAAXASMMSAAMAMXSAXAAAAMMMMXSMSSMAMXAXMMAMXMMAMAAMAXSAMMSXSAMSMMMAMAAMXAMASMMASAMXSAMXAAXXXXMMXXAMXASXSSSMMSASXSAXXAAAAXAXAAAMAXMMMMSMMMAX
XMMMMSSXMAASMSMAXAMXSSMSMMAASXMSAMXAMXMAMSAMXSMAMMMSMMMXMXSAMXMAAXMASXMXMMMMXAXAMAMAXMMMSMMSSSSXXAMMXAMAMAAAAAMSXMASASMMMXSMMSMMMXXAMXMXAXSM
SMXAXXAXXMMMAMMSMASMXXAAMSSSSXMMXXSMXAXMASASAXMAMAXAAASMSXMAMMSMSMSAMMMXMAAXSMMMSSMXXAAAMAXXAAXMMSMAXMMMMSMMSSXSAAAMAMXMSAMXMMXSXMSSSMMSMSXS
SMASXXSSSSSMMMAMSMMAAMXMMAMAMAXMMMMMXSSMXSAMXSSMXXXSSMXAAMSSMAAXXAMASXAASXMMAAAAAAAASMMSSSSMMMMMAAMXSAAXAAAAMMAXMMXSAMXAMASXMAAXAAXMAAAXSMAA
XAAMXAAAXXAMXMAXAXXMMSAMMSSSSXMAASASAXAMAMXMXMASAMXXXMMMMXAXMXSMMXSAMMSXSASMSSMMSSMMXXAAXMXMXXSMSXXAAXXMSSMMSMSMSAMMMMMXSAMAMMMSMSXXSMMSAMMM
MMMSMMMMMSAMXSXSMSSXAXAMSAAXAMSMXSAMXMAMMXMAMSAMXAMMAMSMXMMSSMMMSAMASAMXSXMAAXXMXMAXMMMMSMMMMMMMXAMSSMXXAAAXAAMXMAXSMXSMMXSAMMXSMMXXXAXSAMSX
AAAXXAAAMXXMXSAAXAMMMSXMAMSMMAMMAMXMASXMSAAAAMMSMXAMAMXAMAXAAAAXMASMMXSAMMMMMMAXAMMMSXAAAAAXAMAAMAMMAMMMMMAMMSMMSSMAAASASASMMSASAMXMSMXXMMSX
SMSXSSSMSMMMAMMMMAMAAMXMSXXAXASMSMMSAMAASMMXSAAAAXSSSSXAMSMXSXMXSAMAXAMAMMAMAMMMSMSAXSXSSSMSSSSSSSMSAMMASMASAAAMAMXSMMMSMASAAMXMMMXMAXXXSAMM
XAMMMXXXMXAMXSAMXSSMXSAMAMXSMASXAAMMASMMMMXMMMSMXMAAAXXXMXMMMMSMMMSSMMSSMSASASMMMAMXXMMMMAXXMAXXXXASXXMAMSAMXSSMASXXAAXXMSMMMSMSAASXXSMMMASA
SASMSAMMMMMXAXAMAXAAXSMSASAMMXXMSXMMMMAXMSAASAMASMMMMMMSAMXASAMAAMAXAAXAASASASAAMAMSAXAAXXMMMSMMMMXMASMAMMXMAXAXAMASMMSAMXAXAAAMMMMXAMXAMXMM
SAAXMXMAAASMSSSMMSMAMSASASAXSMMMMXSAMSSMAXSSMAMAAXXAAAMAAMSMSASXMSMXMAMMMMAMXSMMSAMSASXSSMXXAAAAAAXMAMMXMASMMSAMXSXMMAMMASMMMMSMMSMMMSASMSMM
MSMXAASMSXSAAAASMXXAAMAMAMAMAAXSMASAMAAMSMMXMAMXSASMSSSSSMAASAMXXAXXSAMXAMXMAXAXSMXMAMAAMAXMSSSSSSSMASAMXAXAXMASAMAAMAMMAXAAXAAAAAAAAAAMXMAS
AXXSSMSXMMMMMSMMSAMSSMXMSMASXSMXMASXMSSMXXMASXSXXXSAMXMAMXMMMMMXSSMXAXMASXMMMSAMXSXASMMMMMSAMXXMAXXXXSASMSXSAMXXMSAMSSSMASXMSMSMSSSMSSSXASMM`,G2=`47|53
97|13
97|61
97|47
75|29
61|13
75|53
29|13
97|29
53|29
61|53
97|53
61|29
47|13
75|47
97|75
47|61
75|61
47|29
75|13
53|13

75,47,61,53,29
97,61,53,29,13
75,29,13
75,97,47,61,53
61,13,29
97,13,75,29,47`,I2=`39|57
31|97
31|75
29|45
29|73
29|84
66|91
66|39
66|57
66|54
97|16
97|38
97|59
97|11
97|62
87|38
87|59
87|18
87|93
87|13
87|33
25|55
25|22
25|31
25|64
25|33
25|85
25|93
68|11
68|57
68|36
68|78
68|66
68|73
68|39
68|27
32|29
32|73
32|45
32|14
32|48
32|39
32|54
32|74
32|17
17|76
17|45
17|25
17|14
17|91
17|11
17|27
17|38
17|16
17|22
34|66
34|91
34|64
34|29
34|74
34|65
34|68
34|26
34|36
34|13
34|93
48|76
48|34
48|55
48|22
48|42
48|89
48|14
48|85
48|87
48|23
48|38
48|79
73|62
73|13
73|42
73|25
73|55
73|26
73|65
73|59
73|18
73|21
73|64
73|34
73|79
52|21
52|18
52|13
52|22
52|32
52|55
52|85
52|42
52|93
52|39
52|26
52|66
52|34
52|68
74|27
74|57
74|48
74|73
74|91
74|16
74|87
74|38
74|54
74|75
74|29
74|62
74|69
74|84
74|23
38|37
38|21
38|13
38|42
38|64
38|55
38|66
38|23
38|85
38|32
38|79
38|34
38|89
38|33
38|52
38|22
69|65
69|62
69|38
69|55
69|34
69|37
69|33
69|79
69|21
69|18
69|87
69|23
69|85
69|22
69|16
69|93
69|89
11|18
11|85
11|89
11|59
11|52
11|22
11|26
11|87
11|25
11|76
11|37
11|23
11|42
11|21
11|62
11|38
11|13
11|69
33|97
33|27
33|68
33|29
33|44
33|31
33|93
33|66
33|32
33|84
33|11
33|45
33|17
33|54
33|78
33|75
33|39
33|36
33|91
91|79
91|55
91|22
91|87
91|23
91|36
91|25
91|16
91|76
91|45
91|59
91|11
91|75
91|29
91|62
91|27
91|69
91|54
91|48
91|52
75|34
75|21
75|42
75|25
75|76
75|79
75|23
75|89
75|18
75|22
75|26
75|62
75|69
75|73
75|11
75|85
75|37
75|14
75|52
75|59
75|38
59|55
59|13
59|79
59|32
59|65
59|93
59|42
59|52
59|18
59|44
59|37
59|85
59|22
59|25
59|68
59|33
59|38
59|31
59|21
59|23
59|89
59|26
26|29
26|39
26|44
26|31
26|91
26|17
26|32
26|93
26|74
26|66
26|48
26|57
26|36
26|97
26|13
26|45
26|64
26|65
26|27
26|33
26|84
26|78
26|68
79|42
79|26
79|57
79|31
79|89
79|93
79|18
79|17
79|33
79|68
79|74
79|39
79|85
79|37
79|78
79|21
79|44
79|66
79|65
79|34
79|64
79|32
79|97
79|13
42|37
42|18
42|13
42|97
42|29
42|39
42|78
42|64
42|65
42|66
42|89
42|26
42|44
42|57
42|85
42|34
42|32
42|93
42|31
42|74
42|91
42|17
42|33
42|68
18|17
18|97
18|44
18|36
18|29
18|33
18|91
18|27
18|64
18|74
18|57
18|65
18|13
18|68
18|84
18|26
18|78
18|39
18|66
18|54
18|93
18|31
18|32
18|37
22|26
22|93
22|13
22|78
22|66
22|37
22|31
22|97
22|34
22|32
22|85
22|21
22|39
22|42
22|65
22|64
22|44
22|33
22|89
22|74
22|79
22|68
22|55
22|18
62|44
62|25
62|85
62|22
62|64
62|33
62|13
62|87
62|26
62|89
62|16
62|23
62|79
62|38
62|59
62|93
62|55
62|37
62|18
62|21
62|42
62|34
62|65
62|52
21|34
21|66
21|93
21|17
21|44
21|37
21|68
21|26
21|74
21|57
21|18
21|91
21|65
21|13
21|31
21|89
21|32
21|85
21|39
21|97
21|78
21|42
21|64
21|33
93|84
93|11
93|57
93|45
93|36
93|29
93|76
93|39
93|31
93|14
93|91
93|32
93|66
93|75
93|48
93|97
93|78
93|73
93|74
93|54
93|17
93|27
93|44
93|68
23|32
23|26
23|68
23|79
23|39
23|64
23|25
23|65
23|22
23|85
23|31
23|93
23|55
23|21
23|13
23|89
23|37
23|66
23|52
23|18
23|33
23|44
23|42
23|34
84|52
84|73
84|11
84|55
84|14
84|87
84|76
84|89
84|16
84|62
84|48
84|42
84|54
84|21
84|69
84|38
84|22
84|45
84|79
84|34
84|23
84|75
84|59
84|25
16|22
16|18
16|85
16|65
16|37
16|44
16|13
16|21
16|38
16|59
16|25
16|23
16|87
16|55
16|68
16|52
16|89
16|33
16|34
16|64
16|42
16|79
16|26
16|93
85|44
85|65
85|39
85|37
85|84
85|57
85|64
85|26
85|32
85|91
85|74
85|33
85|18
85|27
85|78
85|93
85|17
85|97
85|66
85|31
85|36
85|29
85|13
85|68
55|26
55|89
55|64
55|37
55|78
55|44
55|93
55|68
55|39
55|97
55|79
55|17
55|21
55|31
55|85
55|66
55|13
55|65
55|42
55|18
55|34
55|33
55|32
55|74
65|75
65|66
65|11
65|78
65|39
65|68
65|44
65|97
65|36
65|31
65|45
65|91
65|14
65|48
65|33
65|57
65|84
65|17
65|93
65|54
65|27
65|29
65|74
65|32
76|37
76|25
76|42
76|69
76|23
76|18
76|16
76|89
76|62
76|52
76|34
76|55
76|21
76|13
76|79
76|38
76|65
76|85
76|26
76|59
76|87
76|73
76|64
76|22
27|21
27|55
27|38
27|79
27|59
27|73
27|75
27|11
27|16
27|62
27|42
27|23
27|76
27|22
27|45
27|34
27|52
27|84
27|87
27|25
27|48
27|69
27|54
27|14
14|52
14|73
14|22
14|69
14|25
14|34
14|16
14|23
14|21
14|37
14|38
14|64
14|87
14|85
14|59
14|26
14|13
14|18
14|76
14|42
14|62
14|79
14|55
14|89
36|48
36|75
36|23
36|21
36|73
36|84
36|54
36|87
36|25
36|62
36|42
36|16
36|79
36|76
36|27
36|38
36|11
36|22
36|69
36|52
36|45
36|14
36|55
36|59
13|17
13|44
13|27
13|93
13|32
13|33
13|66
13|48
13|91
13|31
13|54
13|78
13|57
13|29
13|64
13|84
13|74
13|68
13|39
13|45
13|97
13|36
13|75
13|65
57|29
57|14
57|54
57|25
57|76
57|45
57|59
57|69
57|91
57|75
57|87
57|27
57|16
57|11
57|22
57|84
57|55
57|73
57|38
57|36
57|48
57|62
57|52
57|23
89|29
89|18
89|66
89|37
89|33
89|68
89|39
89|85
89|13
89|44
89|97
89|27
89|91
89|32
89|93
89|31
89|64
89|36
89|74
89|57
89|17
89|65
89|26
89|78
78|75
78|23
78|45
78|48
78|69
78|25
78|17
78|84
78|73
78|29
78|36
78|14
78|91
78|57
78|76
78|87
78|62
78|27
78|38
78|16
78|11
78|54
78|59
78|52
64|33
64|27
64|44
64|57
64|78
64|11
64|65
64|48
64|31
64|93
64|39
64|45
64|17
64|84
64|91
64|74
64|29
64|75
64|68
64|97
64|32
64|36
64|54
64|66
54|34
54|16
54|79
54|85
54|23
54|87
54|69
54|73
54|52
54|21
54|14
54|75
54|22
54|11
54|48
54|59
54|25
54|38
54|45
54|55
54|89
54|76
54|62
54|42
37|91
37|65
37|44
37|13
37|31
37|64
37|17
37|66
37|33
37|36
37|78
37|93
37|68
37|74
37|32
37|29
37|26
37|48
37|39
37|54
37|97
37|84
37|57
37|27
44|54
44|75
44|68
44|69
44|14
44|45
44|97
44|17
44|84
44|29
44|74
44|78
44|27
44|66
44|31
44|39
44|32
44|91
44|57
44|76
44|11
44|48
44|73
44|36
45|76
45|34
45|73
45|21
45|85
45|38
45|59
45|25
45|79
45|87
45|11
45|62
45|52
45|75
45|16
45|37
45|18
45|23
45|22
45|89
45|69
45|55
45|42
45|14
39|29
39|73
39|48
39|59
39|38
39|36
39|87
39|14
39|54
39|91
39|17
39|74
39|76
39|11
39|62
39|78
39|16
39|45
39|69
39|27
39|75
39|97
39|84
31|57
31|48
31|39
31|11
31|27
31|74
31|54
31|66
31|36
31|91
31|16
31|78
31|87
31|45
31|17
31|76
31|84
31|69
31|14
31|29
31|62
31|73
29|11
29|87
29|79
29|25
29|16
29|36
29|22
29|48
29|21
29|62
29|14
29|69
29|75
29|55
29|59
29|76
29|23
29|52
29|38
29|27
29|54
66|14
66|59
66|69
66|27
66|75
66|62
66|84
66|45
66|17
66|78
66|76
66|97
66|87
66|11
66|16
66|36
66|73
66|29
66|48
66|74
97|27
97|91
97|29
97|57
97|78
97|45
97|54
97|14
97|48
97|23
97|69
97|17
97|36
97|73
97|74
97|76
97|84
97|87
97|75
87|44
87|85
87|79
87|55
87|21
87|23
87|22
87|65
87|64
87|42
87|26
87|68
87|32
87|52
87|34
87|89
87|25
87|37
25|34
25|21
25|65
25|42
25|26
25|13
25|44
25|79
25|18
25|68
25|97
25|89
25|32
25|37
25|39
25|74
25|66
68|32
68|62
68|45
68|91
68|29
68|74
68|54
68|14
68|69
68|75
68|84
68|76
68|17
68|48
68|97
68|31
32|69
32|31
32|11
32|27
32|66
32|36
32|97
32|75
32|76
32|84
32|91
32|16
32|57
32|78
32|62
17|57
17|23
17|36
17|69
17|29
17|73
17|75
17|62
17|59
17|48
17|87
17|84
17|54
17|52
34|31
34|57
34|32
34|85
34|39
34|37
34|78
34|17
34|97
34|44
34|18
34|89
34|33
48|52
48|75
48|21
48|59
48|18
48|69
48|73
48|16
48|62
48|11
48|45
48|25
73|52
73|33
73|16
73|85
73|89
73|23
73|87
73|22
73|38
73|69
73|37
52|64
52|31
52|44
52|33
52|25
52|97
52|65
52|89
52|79
52|37
74|36
74|76
74|17
74|11
74|78
74|14
74|52
74|45
74|59
38|26
38|65
38|31
38|68
38|93
38|44
38|25
38|18
69|13
69|26
69|25
69|52
69|42
69|59
69|64
11|16
11|73
11|34
11|55
11|14
11|79
33|74
33|14
33|48
33|76
33|57
91|14
91|38
91|73
91|84
75|55
75|87
75|16
59|34
59|64
26|54

78,45,48,38,52,62,29
87,59,38,52,25,55,79,42,34,85,37,26,13,64,65,33,68
57,29,84,48,45,75,11,14,76,73,69,16,38,23,22
74,57,91,36,27,84,54,45,75,11,14,76,73,69,87,59,38
69,62,16,87,59,38,23,52,25,22,55,79,21,42,34,89,85,18,37,26,13,64,33
33,44,68,32,31,66,39,97,74,78,17,57,91,29,36,27,54,48,75,11,14
32,66,39,97,74,78,17,57,91,29,36,27,84,54,48,45,11,14,73,69,62
74,66,65,34,93,32,21,26,89,31,78,44,18,13,37,85,33,68,79,64,55
38,52,25,55,21,34,85,18,26,13,64,33,93,44,68,32,31
68,36,64,33,48,32,93,31,13,26,74
48,45,75,11,76,73,69,62,87,59,38,23,22,55,79,21,42,34,85
33,16,44,34,85,79,65,22,42,25,64,87,18,55,52,89,13
73,69,62,16,87,59,38,23,52,25,22,55,79,21,42,89,85,18,37,26,13,64,65
14,78,45,23,16,36,57,74,76,87,75,59,62,73,54,27,17,91,48,29,84,69,38
33,93,44,32,31,66,97,74,78,17,57,91,29,36,84,54,48,45,75,11,14
38,23,79,42,34,37,33,32,31
65,93,44,68,32,31,66,39,97,74,78,17,57,91,36,27,84,54,48,75,11
11,84,59,45,54,38,36,14,29,52,16,27,62,76,87,78,75
54,48,45,75,11,14,76,73,69,62,16,87,59,38,23,52,25,22,55,79,21,34,89
34,18,26,74,29,31,85,17,64
16,87,38,52,21,34,18,37,13,64,33
91,31,78,66,27,84,74,36,32,39,68,73,44
69,62,36,74,45,66,54,91,14,11,27,32,75,39,84,48,73,76,31,29,17,78,97
44,68,32,31,66,74,78,57,36,27,84,54,14,76,73
59,73,22,21,76,62,14,23,16,79,27,36,55,75,38,54,48,11,52,45,25,84,69
29,36,27,54,45,75,11,14,73,69,62,16,87,59,38,23,52,25,22,55,79
64,68,39,44,93,13,31,26,74,33,22,66,79,42,55,34,18,65,89,85,37
79,18,37,13,32,66,17
87,38,78,57,36,62,45,17,91,59,23,84,76,75,54,14,29,27,48,16,11
87,59,23,55,79,42,85,18,37,64,65,33,93,44,68
68,17,57,31,11,48,54,73,14,76,91,75,69,74,78,32,84,45,97,66,29,36,39
38,55,65,52,13,87,18,44,22,16,64,26,23,34,37,42,59,85,21
89,85,26,13,64,65,33,68,31,66,74,17,57,91,36
75,11,14,76,73,62,16,87,59,38,23,52,25,22,55,79,21,42,34,89,85,18,37
59,93,33,79,62,16,55
66,39,17,36,84,54,48,75,11
89,21,37,79,93,25,22,52,34,42,64,55,23,68,44,65,32,66,31,26,85,18,13
13,64,32,31,17,84,54
16,65,25,33,55,79,21,34,87,18,64,93,52,38,37,23,59,42,62
91,29,36,84,54,45,75,11,73,69,62,16,87,59,38,23,52,22,55
31,66,39,17,57,27,11,62,16
26,33,32,66,29,36,48
18,37,26,65,33,44,32,66,39,97,57,29,36,27,84
93,44,68,31,39,97,74,78,17,57,91,29,36,27,54,48,45,75,11,14,76
32,31,66,39,97,78,17,57,91,29,36,27,54,48,45,75,14,76,73,69,62
26,13,65,31,66,39,74,57,91,36,84,54,48
68,13,32,93,85,18,25,97,39,42,34
27,84,11,14,76,69,16,38,25
93,66,57,27,54,75,76
16,37,89,73,87,13,14,52,23
85,37,26,13,65,33,93,44,32,66,39,97,17,91,29,36,27
66,78,57,75,11,76,69
75,11,76,73,69,62,16,87,59,38,23,52,25,22,55,79,21,42,34,89,85,18,37
78,27,73,14,38,45,84,69,23,48,11,87,54,16,62,57,29,74,36,17,59,91,75
33,68,17,21,39
26,13,65,33,44,68,32,39,97,74,78,17,91,36,84,54,48
93,13,68,34,32,37,55
11,76,73,69,62,16,87,59,38,23,52,22,55,79,21,42,34,89,85,37,26
14,38,23,25,79,42,89
57,38,84,75,14,59,23
25,34,89,18,26,13,64,65,33,93,44,31,66,39,97
48,91,65,33,97,68,31,57,39,44,27,29,78,64,17,75,93,36,74,66,54,45,32
87,79,13,65,33
55,79,33,44,68,74,78
25,52,26,65,18,13,23,22,37,59,32,42,33,85,44
57,29,75,59,73,17,36
16,13,89,33,21,42,65,38,55,37,59,34,44,25,85,23,22,64,87
32,97,42,39,78,21,33,26,13,85,55
31,84,74,91,32,78,76,36,62
69,16,52,22,55,37,33
13,65,33,68,32,66,39,97,74,78,17,36,27,84,54,48,45
85,23,13,55,42,89,22,68,93,21,26,79,52,59,65,18,87,25,37,34,38
34,75,84,23,62,54,48
76,55,59,62,29,36,38,73,84,16,75,48,87,22,14,79,11
93,26,21,89,64,31,78,79,17,66,13,65,33,32,44,37,68,74,34
11,14,76,73,69,62,16,59,38,23,25,22,55,79,21,42,89,37,26
34,85,93,32,39
44,68,66,39,78,57,54,14,73
42,37,21,44,85,16,64
64,44,32,31,39,97,74,91,36,84,54,45,75
31,66,39,74,78,17,57,91,36,27,45,75,11,14,76,73,69
93,97,57,11,14
65,31,57,13,78,64,45,66,17,48,68,93,54,27,29,36,32,97,44,84,39
73,45,55,11,23,59,76,75,25,87,34,52,22
21,34,89,85,18,37,26,13,64,65,33,93,44,68,32,31,66,39,97,74,78,17,57
42,34,89,85,18,37,13,64,65,33,93,44,68,32,66,39,97,74,78,17,57
18,37,79,26,11
16,59,48,11,14,55,36,87,73,21,76,23,69,27,52,75,54,45,62,84,22
66,78,17,57,91,36,27,84,54
31,44,65,37,78,33,68,36,32,66,17,18,91,93,64,74,26,89,85
89,65,79,85,22,18,64,42,55,31,34,33,97,26,13,25,68
55,21,89,18,26,13,64,93,68,32,31,39,78
22,18,26,44,32,31,66,39,97
38,79,21,42,18,37,64,65,31
34,89,85,18,26,13,64,33,93,68,66,74,78,17,57,91,29
17,39,16,59,54,36,78,69,57,48,76,27,84,97,91,75,45,73,62,11,14
65,33,93,44,68,32,31,74,78,17,57,91,29,36,27,84,54,48,45,75,11
84,48,75,73,16,59,23,52,55,79,21
93,21,32,66,55,89,42,74,85,68,22,44,13,64,26
14,76,73,69,62,16,87,59,38,23,52,25,22,55,21,42,34,89,85,18,37,26,13
32,74,78,27,84,45,11
65,26,44,74,36,78,89,31,66,32,29,13,57
89,85,26,93,68,32,31,17,57,91,29
59,38,23,52,25,22,55,79,21,42,34,89,85,18,26,13,64,65,33,93,44,68,32
31,66,39,74,17,91,29,36,27,84,54,48,45,75,11,76,73,62,16
59,91,75,11,84
91,29,36,11,69,62,16,87,25,22,55
91,97,39,29,57,32,73,78,48,11,84,75,45,76,27,36,69,31,68,66,74,14,17
33,93,44,85,22,26,64,31,32,65,52,66,34,55,68,39,37,42,18
23,37,26,42,34,65,18,21,68,79,33,31,66,89,52,22,25,93,32
55,79,89,13,32,31,78
84,48,45,14,69,87,38
91,29,36,27,84,54,45,75,76,73,62,87,59,38,23,52,25,22,55
37,33,18,66,34,64,32,89,26,79,85,25,68,39,52,44,21
76,73,87,22,79,21,26,13,64
75,11,14,76,73,62,16,87,22,21,42,34,89,85,37
52,25,22,55,79,21,42,34,85,18,37,26,13,65,33,93,44,68,31,66,39
65,22,33,79,13,68,32,42,37,44,26,25,64,85,18,93,66,89,39
73,23,34,85,37,26,65
45,75,11,14,76,73,69,62,16,87,59,38,23,52,25,22,55,79,21,42,34,89,85
14,59,69,87,26,13,34
42,34,89,26,64,65,44,31,66,39,78,17,91
18,37,26,13,93,32,31,66,97,78,57,29,36
42,34,23,11,79,45,75,52,55,73,38,54,22,25,87
85,34,68,65,33,21,37,26,93,89,22,79,38,52,55,44,87,42,23,13,18
75,48,22,73,27,45,57
14,76,73,69,16,59,38,52,22,55,79,21,34,89,18,37,13
26,32,48,36,91,33,65,93,66
36,39,84,13,17,57,26,32,65,54,93,37,97,78,31
42,87,34,73,13,14,85
66,13,37,17,91,31,57,65,27,78,84,97,68,54,39
42,39,97,68,25,26,79,18,21,85,44,34,65,89,93,37,55,31,22
18,34,55,37,64,44,21
23,52,84,87,57,38,76,27,69,22,48,62,16
26,93,29,44,54,33,31,13,66,65,84,78,64,27,74,39,37
37,18,57,13,17,29,31,32,36,93,26
27,87,76,29,78,48,17
32,31,66,39,78,57,91,29,48,75,76,73,62
59,38,55,79,21,89,85,65,33,44,32
27,54,17,64,45,39,97,84,36,65,44,32,74
87,38,23,52,22,21,42,34,89,37,13,65,33,93,68
66,31,22,32,55,13,42,37,18,68,21,79,89,23,85,44,33,34,25
93,74,39,78,17,18,64,57,13,31,33,29,36,37,84,26,32,65,27,66,97,91,44
97,18,33,31,13,93,84,44,26
62,73,48,27,45,54,36,97,16,84,57,76,11,69,78,91,87,59,39,29,17,74,14
29,31,14,39,45,11,84,16,57,27,73
66,39,29,69,87
69,74,59,84,48,73,16,87,62,97,75,76,54,38,45,29,17,36,14,91,27
18,64,65,33,93,44,68,32,31,66,39,97,74,78,17,57,91,29,36,27,84
48,45,73,79,42,34,85
75,11,76,69,62,16,87,59,23,22,55,79,21,34,85
93,22,26,64,33,23,52,65,87,18,25,44,55,38,37,21,42,68,85,13,79,89,59
76,69,87,59,23,52,25,79,42,34,37,13,64
22,37,13,38,69,18,55,21,52,14,62,34,25,23,16,73,59,85,89
79,55,62,73,85,87,26,13,69,42,76,37,64,38,16,21,23,52,25,18,59,34,22
22,21,85,18,26,93,32,66,39,97,74
14,57,11,17,74,29,87
64,65,33,31,74,78,27,84,54,48,75
85,66,68,23,21,32,93
85,89,93,74,65,26,64,78,79,33,66,39,55
57,29,27,54,45,11,76,16,87,59,52,25,22
32,31,97,17,57,29,36,27,84,48,45,75,62
69,91,76,75,14,36,97,54,11,74,62,17,29,45,27
48,45,73,62,16,59,38,23,55,89,85
37,26,13,65,33,93,44,68,32,31,74,78,17,91,29,27,84
33,65,89,37,69,38,18,79,87,52,16,23,34,59,21,62,26,42,55
74,17,91,27,84,54,48,45,75,11,14,76,73,69,62,16,87
66,39,74,78,91,36,27,84,54,48,45,75,11,14,69,16,87
85,25,13,55,21,64,93,38,62,79,65,23,37
44,36,33,68,29,32,13,65,97,39,27
16,22,38,14,62,11,52
45,36,93,68,14,33,44,32,48
93,57,45,97,75,78,27,76,14
62,23,65,33,22,34,13,21,69,79,87
22,69,14,16,52,79,73,11,37
66,68,26,13,39,34,52,85,32,64,33
64,33,44,68,39,74,78,17,57
37,21,73,25,38,55,62,59,34,87,79,89,64
84,59,73,74,75,17,91,78,23
78,45,74,17,84,27,91,29,14
54,45,44,27,17,39,75,31,57,64,48
25,84,23,45,57,69,91,76,87,17,27,73,62,29,54,52,11
97,91,29,84,45,75,11,14,76,59,38
17,57,91,36,27,84,48,45,11,76,73,69,62,16,59,38,23,52,25
21,42,89,85,18,37,26,13,64,65,33,44,68,32,66,39,97,74,78,17,57
34,21,93,23,65,52,37,32,26,25,22
21,89,87,59,16,62,26,76,55,23,11,14,25,69,42,85,79,34,38,22,37
27,54,11,14,62,87,59,38,52,25,22,55,79
42,34,89,85,18,37,26,13,64,65,33,93,44,68,32,31,66,39,97,74,78,17,91
23,25,22,55,34,89,65,93,32
68,13,38,32,18,26,93,89,52,85,22,42,44,65,25,34,21,59,33
57,91,29,36,27,84,54,48,45,75,14,76,73,69,62,16,87,59,38,23,52,25,22
91,29,27,14,16,52,25,22,55
97,26,13,79,66,37,64,42,31,55,65,85,39,44,22,18,68,34,93,33,32
87,11,17,27,36,14,29,76,75,69,78,74,59,91,38,48,62,73,16,57,23
42,89,85,18,64,65,33,93,66,97,74,78,91
75,11,14,76,73,69,62,16,87,59,38,23,52,25,22,55,79,21,42,34,89,18,37
26,64,65,33,93,44,68,32,31,66,39,78,17,57,91,29,36,27,84,54,48
38,23,22,55,42,34,89,37,26,33,93
29,18,34,13,89,17,39,37,26
76,73,69,62,16,87,59,38,23,52,25,22,55,79,42,34,89,85,18,37,26,13,64
68,89,32,17,85,42,74,33,65,18,34,37,31,79,44
23,21,73,18,42,22,34,14,79,59,69,45,25,52,87,55,75
75,11,14,73,69,62,16,87,59,38,23,52,25,22,55,21,42,34,85,18,37
31,26,17,39,97,36,13,65,89,29,64
39,97,74,17,91,29,36,27,84,54,45,11,14,76,73,69,62,87,59
65,44,32,66,97,78,57,91,36,27,54,48,45,75,11
31,74,78,57,29,84,45,75,62
52,25,22,55,79,21,42,34,89,85,18,37,13,65,33,44,68,32,31,66,39
21,62,18,25,69,55,26,65,85,79,33,34,89,42,13,59,22,87,38
91,29,27,69,38,25,55
27,84,48,75,11,76,73,69,62,16,87,59,38,23,52,25,55,21,42
34,32,37,55,44,52,22,42,23,26,66,85,25
65,33,93,44,68,32,66,39,97,74,78,17,57,29,36,84,54,48,45,75,11`,N2=`....#.....
.........#
..........
..#.......
.......#..
..........
.#..^.....
........#.
#.........
......#...`,z2=`..........##.....................................#............#........................#.....#........#...........#...............
...........#.............#.....#....................#...........#.#..............#.#......................................#.......
.#..............#...............................#.......#.#...................#...............#...............#..#...........#....
.#............................#.............................................................................#.#...................
...............#..........#............#...........................................#....#...#..........................#..........
..##.#..#......#.....................#..#......#................#..........................................#................#.....
.......#.....#...........................................#........#...............................#.#.............................
.........#...............#......#............#...................#...........#.........#..#...#...................................
#.....#.#....................................#.......................................................##..#...##..#..#.............
.............................#...#.......#...............................#.#...............#......................................
.....#................................#..........................#....................#...........................................
.......#............#..#................................................................................#..........#...#..........
...........#.............................................................#...............#................................#.....#.
.....................................................#.........#.....#..#.....#..................#.......#.....#...........#......
.#..........#................#..................#........#..............................................#....#..................#.
.....................#......#..........#...........#................#..#..#............................#...##.........#...........
.................#.....................................................................................#..........................
..........................#.....................................#.#..................................................#.#..........
............#....#........#...................................#...................................................#...............
............#........................#........##..............#....#.............#............#......#........#...................
....................#.#........#..........................#...........#.............#...............#.............##.......#......
...............................................#..................................#...................................#....##.....
...#.....#.......................................#..........#......................#.............#.............#.##.......#.......
........#......##...................................................................................#.............................
...#.................................#.....................................#......................................#.........#.....
....#.................#......#.........#.........................................................................#........#....#..
..........................#..#.......#............................##.............................................#.........##..#..
......................#......................................#......................#................#.........#..#...............
....#.....................................#...................#..............#..........................#...........#...#.........
...............#........#...............#..........#.....#..............................#....................................#.#..
......#......................#.......#.#...................#.............#...#.........#.....#....................................
.....#..#...............##....................................................#..#...#........................#..................#
......#.#..........#...#.................#...............#..........................................#...#.#.......................
..........#.......................................................................................................##..............
......................#..#...#......#.....................................................#.........#.........#...................
...................................................#...#.........#.....#......................#...............................#...
........................#...................................^..............................#.............#..........#...#.........
........#............................#.....................#......#...........##...........#......................................
..........#..................#........#...........................................................................................
.....#......................#.....#.............#....................#...............#...........##.......#..................##...
........#......................................#................................................#.....................#...........
......#.........#..............#.................................................................#.......##..#.#..................
........#......................................#...................#......................#.......................................
..#...............#....##.....#........................#.#.........#........#....#...................#.............#...#.........#
.............#..............#....#....#................#.....................................#...............#..................#.
..............#...........................................................................#..##..#...#.......#..........#.........
#...........#........................#..#......#..#.........#........#...#..............#............#.....#.................#...#
.....................#........................................#.................#.#..................#.............#.........#....
.............#.....................................................#.#....................................#.......................
.............#....#.............#.........................................................................#...........#...........
#.................#...#...#...............#..........#.........................##......#.....#..#.............................#...
#................#........#.......#.....#...............#..................................#.#.............................#......
.........#.......#.............#...................................................................................#..........#...
......#..............................................................................##............................#..........#...
..............#..................................................#...................................#..........................#.
.................................................................#.#...........#................#..........#..........#.......#.#.
...................................#.....................#..#...........................................................#.........
......................................................................................#.............#.............................
.....#......................................................................#......#....#.........#....#..#.......................
..................#.............................................................#.........................#.......................
......................#......#..........#..#............................#....#.........#.........#................................
..#...........#.......................#....#....................................#.......#.................................#.......
...................#.......................................................................................#..............#.......
.....#....................................#......#............#...##........#...............#......................#...........#..
......................................#.......................#.........#.#.........................................#.............
...#..............................................#................................................##...........................#.
.......................#.................................................................#.......................................#
.#...........#..#...................#.#......#................#......................................................#............
.......................................................................##..........#......#................#.......#.......#......
#..#...#...........................................#......#...............#.......................................................
....#.....#...........................#...........#...............##..............................................................
...#.......#.......................................................................................#............#.................
.............................................................................#...#.....................#...#......................
...................#.................................#.......#...........................#.....#.................................#
.........................................#........#....#.............#.............#...........................#..................
....#.....................................................................................#.#.#.......................#.#.........
..............................................................#..........#............................................#...........
.........#.#.............................#...#..........................#....................#....................................
......................................#.#......#..................................................................................
.................................................................................................................#................
..............#...................................................................................................................
...................................................#....................................................................##........
................#........................................#..............................................#...............#.........
.........#....#...#......#....................#.#.......................................#.............#.....#..............#....#.
.............................................................................................................##.....#..#..........
....#.............................#......#.....................................................#......................#.......#...
..#.................#........................#....#...##...................................#...............#......................
.........#..................................#.................#...#..#..........##................................................
......##.......................................................#...........#......................................................
......#..............................#...................##....#..................................................................
..................#.........#.................................................#.......#..................#........................
.........................#...........................................#.......#...........................................#........
............#.#...................#.#....#.................................#......##...........................................#..
..#....................#.....................#.........................#..............#.....#.........#...........................
..#............................................#.........................#....................#..................................#
...........................#......#...............................................................#......#..........#..........#..
.......................#.....#..................#...................................#.............#....#.....................#....
....................................................................#.....#....#..................................................
..#................#...#..........................................................................................................
.........................##.....#.................#.............#....................#...............#..............#......#.#....
.......................#...................##......................................#....#...............#........#.........#......
......#..#.........#............................................................#................................#......#.........
#........................#..................#...............................................#.#........#..........................
..........#................#...#.....................................................#............#...............................
............#................................................#.#...............#............#................................#....
..#............................................#....#....#.#.#................................#....................#..............
.........#...........................##.............#..#.................#........................#............................#..
..........................##......................#..............................#..................#.............................
.........#........#.......#..........#...........#.............................#...........................#.......#..............
..........................#................#......................................................................................
..........................#...............#..................#....................................#.........#....#..........#.....
..................#..#..................................................................#........#................................
##..#.......#..............#..#..............##.............#...#..#.........##.......................................#......#....
.............#.........#........#....................................................#................#.....#.....................
......#...................................#.....#................#..........................#.....................................
..#.......................#...#.#...#...........#..........#...................................#.............#.....#..............
..........#...#......................##...........................................................................................
....#............................#.#...................#....................#................#...........#..................#.....
.......#......#................#......................#......#........##..#....................#..................................
.......#..................#....#.....................................................................................#............
..................#......#................................#.........................#....#.............................#...#......
.................#.............#..........#....#.........................#..................................#.....##...........##.
............#..#............................................................................##...#.#....#....#.......##.#.......#.
......................#............................#.........#.....#.#.......##........................#..........................
...........#........................#..##........#....#.......#....#.#.....##.....................#.......#......#...............#
.................#...........#.......#..........#................................................#......................#.........
................#.......#.#.....................................................................................#.................
........................................#...#......#.......................................#...........#..........................
....#........##...............#...........#..................................................................#....................
#....................#...................#.........#....................................................................#.........`,D2=`190: 10 19
3267: 81 40 27
83: 17 5
156: 15 6
7290: 6 8 6 15
161011: 16 10 13
192: 17 8 14
21037: 9 7 18 13
292: 11 6 16 20`,F2=`29833: 1 50 15 39
458991049840: 17 598 378 2 69 40
224381: 120 66 66 890 5 96
5003: 852 662 973 8 3 3 2 1 1
441496: 6 60 835 62 9 2 4 8 40
93163572: 38 40 6 375 896 61 40
567402848327: 28 4 23 886 813 3 77 6
109878300: 9 306 2 66 2 5 67 5 525
169262: 77 3 1 7 2 2 9 6 764 1 5 4
515489: 281 771 7 7 9
100112: 927 74 15
150540585: 86 10 175 40 588
56371421566: 6 565 9 503 77 8 2 8
20411640: 506 42 10 16 2 60
1571: 29 88 9 509 9
337815942: 2 143 7 5 7 3 3 75 1 9 4 4
6714: 5 8 74 4 9 8 1 1 319 6
1114: 8 8 3 11 585
2556260: 71 1 62 31 620
9081072: 308 52 1 63 1 9
11006423: 60 438 48 23 5 92 2 1
213414366: 3 7 3 414 369
53385783: 852 9 1 53 2 71 851 33
119464247: 698 8 9 1 2 377 212 2 4
735632: 13 943 725 318 92 4
1059561: 4 9 4 6 86 9 8 3 375
22598196635: 5 644 5 5 4 9 4 62 3 9 1
448714: 4 48 71 4
12876000: 58 37 80 25 3
41576858681: 131 978 4 122 8 665
500750682: 500 74 99 95 67 618
418780: 504 82 548 1 1 1
79194751192: 395 2 7 73 5 2 5 1 18 8 5
2404852348: 1 8 79 516 9 8 515 8 50
17581536: 2 4 67 8 3 2 866 9 9 38 6
17966299992: 6 174 9 6 2 956 6 2 70 9
653: 3 5 4 4 94 3
60598364: 312 8 1 5 9 7 8 7 3 4 6 1
120116073: 816 4 4 92 8 76
202633925: 39 1 5 232 998 470 5
203156491: 3 4 350 25 292 723 23
97549292: 79 50 686 4 4 9 3 6 47
6363055357: 5 1 50 630 55 353 2
122461385: 7 65 9 342 92 1 4 3 3 7 1
2550188: 3 249 2 3 32 686 6
4577175: 255 4 6 433 3 53 43
33759306506: 8 975 2 34 6 8 253 6 28
1561680: 6 636 522 90 4
30522: 16 286 85 3 227 7
526616: 4 76 7 6 2 9 6 9 3 147 6 3
65889600992: 40 65 37 32 530 989
1534478: 55 7 9 9 3 3 53 6 77
15191672: 53 450 7 2 77 7 62 8
1210940886: 954 55 3 3 52 21 4
13860: 6 4 4 495
64545283: 4 9 993 5 280
1987: 8 862 5 948 4 160
1120117: 373 3 96 5 149
71097: 6 5 842 7 6
52576450: 15 35 40 29 7 447
46339200: 4 1 7 11 45 991 18 80 5
5238824: 3 5 10 8 1 5 2 2 5 2 810 5
317724633833: 5 6 94 64 6 3 85 788 3 3
31608179: 31 608 17 2 8
20232744: 981 54 6 543 5 6 534
220815607: 3 450 20 6 8 1 302 8 4
11546010: 2 9 8 89 3 67 2 925 3 2 5
3636108701235: 25 424 9 98 35 1 232
315302: 8 285 38 8 464
5924: 94 53 2 7 933
849765642: 242 2 8 51 5 7 644
826611952: 7 6 30 5 631 2 239 50
108360853247: 393 2 6 8 892 9 19 1 45
14207: 7 4 4 5 7
171388095: 515 47 139 9 704
40312641: 34 2 71 349 831
4514720105307: 12 94 680 4 105 305
2141175: 17 594 8 5 6 2 690 97 8
39677923295: 2 85 805 57 2 694 2 95
773731310: 152 509 5 46 25 2 56
107992570: 6 32 78 928 97 60 3 70
274256274439: 4 5 7 6 562 740 4 32 8 1
715414749: 91 64 7 984 78
1197417200: 532 1 5 829 97 1 9 8 2 5
2161553468: 2 5 7 198 7 2 2 68 7 2 92
49243431: 879 2 599 95 28
918935325: 72 703 1 7 531 319
33335385362: 8 81 23 8 9 1 527 69
684178: 2 1 342 148 28
8469183: 2 539 491 2 8 53 6 356
122: 9 32 72 9 1
26266280341: 18 380 6 8 1 7 78 8 343
5970: 5 967 2 306 827
3403360: 33 20 7 3 6 5 6 617 59
27381127: 655 3 9 3 4 9 43 8 95
52476534: 31 6 997 22 623 282
4696755: 463 6 67 50 7
62787547: 3 71 5 4 7 2 7 70 8 283 6
5291265684: 550 13 3 5 9 74 6 3 14 4
2121: 595 3 187 85 67
138880: 9 459 50 4 7 711 2 56
54817849: 394 239 866 49 2
1563601289: 781 2 6 72 929 190 99
140227804: 933 5 9 208 48 3 8 3 7 6
637023080: 6 6 4 2 9 854 6 2 6 7 74 4
12140494: 8 92 8 7 3 90 4 96
995580: 6 30 612 460 9
11403: 6 131 7 62 43 712 19 7
330447882: 811 9 16 4 5 93 9 3 94
2343762: 9 81 64 5 6 1 938 8 1 5
391889880: 820 9 9 2 59 79
186310: 9 72 2 8 8 131 5 9 3 8 6 7
4933119: 65 6 376 1 2
15179: 7 8 976 539 1
312257399: 9 9 70 588 65
1320813: 213 7 9 81 6 9 71
273549927: 3 733 93 39 6 5 7 9 68 3
12291702279714: 82 59 4 88 1 9 477 78
2436240674: 8 2 87 7 60 4 6 76
10785445: 9 9 3 3 7 4 99 4 6 7 9 2
12335116: 1 30 11 5 793
18950033: 23 6 87 54 8
7549236817: 233 324 368 1 9
15898468: 183 2 4 9 506 71 578 2
60233561: 9 9 17 5 663 8
17320: 92 184 20 367 5
6039115: 44 6 46 7 246 2 3 6 7 4 5
6633798094: 22 8 619 92 907 94
107587: 95 24 9 4 87
1797: 17 79 424 1 30
15547949: 36 501 862 26 891
1879637864: 84 4 715 978 13 2 4
8274: 80 5 6 8 6 7 2 5 5 6 66 6
3486989908: 9 2 4 795 41 731 5 4 7
41375463: 2 575 60 6 5 922 5 46 3
2631690387: 44 20 514 8 5 5 380 1 4
2400: 16 14 2 25 3
5168317: 608 4 5 425 308 9
305764573: 804 6 27 7 9 5 146 573
21250160: 1 5 2 3 1 6 1 6 5 576 4 92
39682564: 4 4 7 43 11 9 1 5 6 8 4 1
276353: 996 1 134 13 946 25
4537378161: 5 53 3 388 820
9954471: 99 27 7 6 167 600
273138: 9 74 20 4 6 8 641 23 49
94662: 834 832 87 6 9
93397851736: 81 923 4 93 1 19 22 1 6
9198920550: 6 5 393 7 55 7 2 5 4 3 9 5
321566102: 2 5 5 2 6 1 974 710 5 3 2
13685: 263 4 124 7 5
790133: 1 8 2 14 4 29 5 3 9 5 729
7252134456: 4 22 71 9 658 5 25 7 7 4
8154320: 8 7 43 4 9 1 910 9 1 20 4
18338919: 5 735 347 72 745 4
17820: 74 4 75 8 8 21 6 134 9 6
69483: 6 8 1 91 90
931: 1 2 213 4 74
1366330766: 30 809 3 13 970 7 58
676: 1 4 4 8 648
3133329640: 13 3 504 9 4 9 79 4 6 42
171083286625: 891 4 2 31 4 1 1 8 3 6 28
246966: 4 21 8 756 958 129 60
20297648: 6 6 7 3 44 6 4 9 5 8 508 7
5225057: 68 212 773 344 41
14027179994: 6 4 1 5 955 16 289 459
103990080: 8 4 727 745 6
671302: 8 3 694 219 8
65699608894: 733 25 456 896 321
1105635: 6 9 4 899 504 3 7 69
570870: 6 63 6 2 86 5
578: 82 6 8 79
129225002999: 3 5 7 2 687 45 5 2 5 12 2
103359403: 96 848 50 475 4 542 3
769845: 676 93 74 9 96
657218: 43 90 4 19 4 8 42
83665893: 1 929 621 9 3
1194505835: 701 9 27 2 1 9 900 7 9 3
108162065: 6 9 3 6 2 575 3 6 2 6 95 5
244720: 535 1 6 9 3 2 4 5 640
2556742499: 2 872 10 75 39 1
655752931828: 69 4 5 282 841 9 9 25
6498: 1 4 218 491 8 9
99340: 87 2 2 94 7 38
311694: 2 9 645 6 8 1 1 463 558
475029631657: 484 23 981 1 658
33497633: 3 72 19 9 5 30
131459408: 34 5 4 895 4 17 6 9 890
232750424: 6 345 8 7 899 8 5 9 2 5 5
3223413568: 7 84 17 4 85 4 43 92 70
23827264489857: 3 5 2 230 1 80 6 8 98 54
31532868368: 5 4 7 4 5 55 1 7 733 3 5
1409788800: 7 60 16 270 777
117061444: 927 98 38 14 31 92
37920196: 372 554 46 4 4
1444763880: 2 86 5 666 559 5 84 1 6
18249887: 4 11 4 3 9 22 36 4 943
6671: 63 31 89 218 34
13303940615: 6 1 1 85 9 81 1 4 206 9
59444: 813 4 83 39 9 8 7 9 222
228315: 5 58 72 4 63
27915301332101: 858 40 4 1 271 2 6 100
4146: 7 31 87 840
6249600: 6 310 4 840
1272468: 513 759 4 64 7
116754: 26 8 49 368 95
442633: 50 392 6 3 3
63911286832: 638 5 4 57 2 867 2 4 7 2
1735680960: 75 3 8 2 5 6 2 24 928 31
7251: 9 2 47 5 25
9478640: 2 4 722 6 2 6 14 5 218
60044752: 3 70 544 4 14 7 27 8 6 5
2150471689359: 3 7 64 20 892 4 8 93 60
49985412: 555 9 3 531 2 98
61783: 1 32 9 52 8
645625404: 14 61 7 5 5 20 6 39 2 9 2
832940787: 1 29 7 37 586 255 8 78
304578945006: 4 8 5 4 3 625 36 649 6
2922148: 374 836 5 7 69
4196627: 4 1 96 62 8
884701: 7 1 3 8 6 46 2 1 65 9 6 3
1621920: 423 8 9 4 861 7 339 4 4
36881320: 9 8 378 3 89 464 6 70
14468935: 6 96 6 3 4 5 4 68 4 1 937
17690: 4 9 1 6 7 4 36 9 65 3 7 1
365512: 1 585 78 59 8
3446721: 7 3 609 3 50 204 5 8 22
46965674: 2 472 59 6 3 7 8 7 1 11
79473417: 7 947 3 1 2 4 52 1 7 5
41543073: 20 4 91 5 2 562 30 4 7 5
527881386: 72 3 4 7 813 85
4918082720: 48 279 901 82 720
694983565: 63 3 5 39 540 7 28 62
894023100: 3 9 4 2 9 4 29 4 590 90
804741197: 41 630 4 4 6 2 604 74 8
1368306: 3 2 73 91 102 3
58759: 30 61 645 60 4
5252: 7 53 6 729 5
2946133318: 943 74 52 8 5 5 312
19506: 127 9 9 65 16 31
22670139: 307 8 5 8 181 92 7 6 7 8
5038087: 3 1 3 3 7 97 813 1 79 9
25718497: 5 3 813 72 90 320 9 88
556: 8 66 83 399
72912: 25 90 630 459 1
157824203: 9 188 28 2 8 2 6 5 5 59 9
38172933: 5 79 16 755 8 68 3 55 7
36789690: 91 991 8 344 2 890 49
2173205801: 1 8 429 59 7 477
78959322: 51 9 9 16 7 1 80 9 4 34
1432: 3 5 6 89 90 3 5 44 37 4
1069353: 211 32 5 237 8 5 25 3
1587962: 6 10 5 9 6 9 7 6 77 7 4
38758381653: 758 47 39 71 5 511
135999705: 81 29 7 7 95 6 459 87
6306566550: 74 1 1 8 832 653 4 6 3 8
636867401: 7 9 1 9 2 3 655 36 3 9 1 3
285959479412: 519 1 926 32 6 2 55
54923: 8 36 8 19 48
1958: 5 8 15 5 3
24264745: 3 37 72 64 8 97
8242976: 4 7 81 3 98 751
26307830922: 625 2 772 317 86 922
1083: 859 2 211 4 7
402346069: 5 4 4 5 5 8 950 8 5 6 9 1
1185694: 210 86 413 4 42
31620827: 1 33 95 5 265 731 93
11777482: 8 15 9 81 4 8 6 9 7 474 4
1276080722: 73 5 5 4 818 722
13040: 4 3 1 11 4 1 3 723 7 5 8 2
3843: 9 44 84 8 3
124818575: 69 7 11 273 9 62 6 925
8298060: 5 1 542 9 47 873 3
333432288: 93 2 997 5 2 5 69 816
10180: 99 51 2 82 1
453822898666: 2 7 56 6 9 2 3 9 8 9 866 6
80157: 80 1 57
1791368: 43 27 96 494 9 4 6 4
99851232: 6 1 6 984 74 9 68 231
9428: 1 88 2 50 5
2963: 79 4 204 6 16 821 404
303881: 1 365 829 18 449
21182: 18 80 232 6 2
165488471: 1 78 435 369 21 72
123238516: 3 17 7 7 12 40 964 759
112534350: 8 8 9 4 3 7 74 9 96 9 8 78
215628810: 344 5 2 1 7 179 1 5 7 2 4
56226: 1 9 9 694 9
30: 5 4 5 7 1
3903698047: 85 60 4 60 586 1 44 9
327731040: 5 8 5 18 82 2 28 61
344484: 28 208 59 2 866
148035889: 4 5 2 8 1 25 528 553 3 1
851572: 9 3 9 8 9 5 45 244 4 4 3 3
165467563: 97 5 1 2 92 7 737 5 1 5 3
222169: 6 659 8 7 4 741
451952: 98 499 4 94 8
9631924: 3 321 19 2 5
2159303: 557 6 41 65 55
149959662: 54 9 952 4 25 96 65
458369654: 9 502 65 696 54
8007682481: 8 685 122 922
5280132984: 617 383 76 7 7 6
999672: 9 99 652 16 7
70678080: 4 50 94 535 2 55 3
316848391599: 5 280 8 6 391 49 6 1 3 6
1161615051: 1 850 3 805 2 26
10085844711: 881 53 7 4 66 36 54 4
2878911772: 9 126 314 3 8 5 14 846
42768993609: 86 2 7 8 443 7 5 2 1 8 2 2
24396335828: 8 8 946 317 4 791 4 2 5
1665: 2 1 3 8 11 2 9 37 81 4 1 9
714237: 3 34 4 269 1 6 572 1 4 7
18838245: 8 37 931 61 449
232736596858: 4 66 702 68 8 431 8 4 3
3107149347: 641 31 969 5 239 6
548767: 74 44 4 463 578
91616: 2 7 3 36 63 1 2 40 91 8 8
2400557185: 4 3 7 5 432 3 2 7 1 5 247
53910: 6 7 90 408 54
164941432740: 8 5 48 8 961 53 55 40
538959617: 335 7 5 7 9 61 1 5 4 2 3 5
328142: 572 573 385
1169035: 7 7 88 161 7 635
110043089: 3 854 1 7 767 2 8 7 4 3 2
3916465: 4 89 55 8 8
331500: 73 8 5 9 145 4 4 912 85
12804048811094: 277 72 642 8 110 9 4
3144: 5 8 8 3 6 519 221 3 753
267232470303: 8 64 83 6 515 30 4
1116681984: 9 27 6 396 304
28758659017: 732 41 3 54 44 65 91
479159: 72 46 812 5 79
61254284: 7 7 7 71 2 4 4 3 9 8 8 919
9375: 1 545 17 37 76
929495: 52 11 866 475 20
577679969: 639 645 473 2 3 8 70
200299662: 71 587 9 89 6
257143040448: 542 56 6 73 5 518 224
2166: 5 303 646 5
62124934: 887 498 9 7 11
289: 25 9 64
28038: 6 84 3 46 3
4388325866: 5 55 7 8 722 4 5 79 6 71
11873804: 3 537 1 11 67
139650: 5 2 6 665 5
3357: 968 98 7 3 8 1 5 124
142833599: 555 5 2 130 981
198440: 9 689 4 8 8
4536289506: 7 400 146 613 8
8364: 7 9 8 6 9 41 37 5 5 158 1
419862: 278 824 381
37696: 8 29 699
96549948: 2 8 9 7 553 1 1 2 9 4 67 9
182740: 905 861 8 606 2
36686601000: 2 8 7 8 529 3 43 4 90 5 4
794803: 10 316 10 2 6 9 25 79
2376796767: 27 44 3 9 4 5 16 5 2 6 1 5
18373592473: 99 3 10 4 908 681
8415488: 2 3 2 7 23 515 7 3 3 8
1751: 901 8 51 787 4
194616: 5 556 2 7
13111: 6 35 24 56 7
887627111: 74 85 851 2 41 1 8 8
1217662897: 2 42 417 557 9 6 2 9 9
10859940: 7 153 169 60
15881: 74 9 62 102 2 3 87 9 35
1097951128: 83 6 5 8 7 7 9 4 1 111 1 5
396944: 8 5 11 27 9 6 688 7
234367648: 3 56 25 558 7 7 4 756 5
21211: 1 6 6 1 7 8 9 426 7 5 6 7
4310184255: 1 27 716 474 72 2 57
360694: 1 19 124 45 6 56
107043843915: 4 5 92 808 8 9 73 5 4 6
4542060: 8 32 2 7 40 9 7 4 8 4 915
47372214: 666 2 7 94 644 216
21933258: 7 5 578 3 527 5 807 1 2
64801487209154: 4 914 56 492 984 134
5371301: 53 7 1 302
470: 38 51 3 2 5
589298: 39 30 29 216 6
75856: 750 8 31 22 3
296359: 2 35 94 1 45 259
1163647626: 5 26 5 799 465 87 6
22673304: 9 474 51 589 377 4 8 9
237576549: 9 18 133 796 11
2805396096: 6 6 5 96 17 9 5 4 6 4 562
371253119: 81 84 81 2 5 77 14 28 1
143753291258: 2 683 39 6 22 3 14 8 57
155: 7 81 69
461262213147: 508 44 6 70 8 6 6 3 54
18146520: 9 813 62 9 8 5
7078875: 698 9 8 87 5
4584649: 2 5 15 218 2 61 765 1
76872668: 825 7 2 49 95
2380657716148: 9 71 6 970 27 7 350
1303324792: 6 4 9 960 81 3 4 79 3 1
1460405: 1 448 1 1 3 7 398 5
6162: 3 5 770 3
5354101577: 53 1 75 68 745 345 23
70159078: 26 4 1 95 955 7
3191471037: 90 5 5 16 2 2 7 17 506 5
3107702724: 908 870 562 12 7
832273: 61 93 8 670 275
982: 89 60 2 6 76
476: 12 2 4 424 24
2953251: 64 2 46 5 1 2
8211110: 3 8 279 91 8
432768580: 28 224 1 69 419 160
453159760: 904 88 8 5 679 763
23117061: 7 8 2 1 94 8 1 530 3 48
6649: 44 3 9 5 3
71397820: 841 51 4 5 2 2 8 2 9 5 4 2
921585: 9 6 7 67 131
20095142: 9 5 552 56 26 884
1902730: 13 871 28 63 6 7 81
79546: 9 5 57 1 31
1687628: 4 2 6 1 4 8 9 6 14 40 5 28
485832571: 432 53 82 7 5 571
9789951: 815 7 5 8 3 3 8 4 8 1 779
1049020059: 161 387 7 65 9
376580: 5 7 2 7 243 8 4 80 4 4 4 1
8682088462: 56 517 7 3 8 2 4 4 9 16
10977511: 8 707 21 83 39 3 631 4
3515635: 8 77 3 5 5 1 3 2 5 688 1 8
5355467256901: 432 8 269 46 568 6 4 1
66606466523: 1 4 5 65 785 8 9 545 20
20712: 613 250 3 2 4
2800704: 365 99 503 3 4
100830939546: 283 8 5 50 6 15 8 69 34
87151669425: 87 1 516 6 9 415 7
15704889: 2 507 22 88 8 57
895536: 980 6 3 2 7 664 6 3 3 2 6
3984235528: 204 279 7 8 9 5 2 8 7 2 6
65724939: 7 88 61 901 162 21 81
948: 7 7 2 6 4 2 25 8 4 69 6
1713100623320: 515 9 56 7 66 32 87 36
170019969: 425 8 325 57 50 868
93: 13 6 5
67212: 2 3 17 65 2
28473271: 536 5 32 332 458 493
1014918744: 6 8 4 7 6 798 353 84 38
25595: 1 9 69 7 32 92
162166399920: 2 6 3 621 303 9 1 38 70
701: 28 65 611
162141: 5 6 79 64 8 1 1 41
50852: 737 769 5 7 67 4 8 132
1626457: 21 65 45 7 1 60 1 989 7
102: 9 2 1 2 7
1759: 57 6 8 5 9
30362: 10 12 6 5
41746898: 4 1 36 671 75 893 5 1
6772: 47 4 36 5
190284: 11 29 7 571 4
69308585561: 6 15 770 8 585 558
30670489: 2 30 70 1 832 8 1 1 8 8
991101696: 82 2 9 807 86 4 6 832
138642: 294 3 812 25 5 17
9036: 372 88 3 39 2 9
33025904352: 101 658 408 42 29
6992002556: 72 2 3 1 1 4 22 6 9 44
70225: 70 693 92 8 21
297477534328: 6 1 2 766 737 382 326
50224735355: 157 457 62 7 459 896
3825: 2 77 73 5 4 17 768
2851: 80 17 2 92 39 1
262586522: 3 6 7 61 64 865 23
13822325: 7 9 664 613 91 8
325657: 495 6 65 1 9
865928337: 95 808 35 13 5 696 91
8127778: 812 7 7 71 7
38769284588881: 7 6 7 823 24 67 181 6 1
2131021: 3 71 10 18 1
14857925: 5 5 98 4 4 2 255 6 389 7
1600130081: 4 2 660 70 1 6 6 520 4
203305584: 83 945 81 9 8 6 9 429 4
59498459286: 5 949 845 921 7 7
42526316: 63 750 1 46 9
539839141: 3 3 8 1 9 2 486 363 6 56
239360: 5 84 668 4 55
565651373: 56 5 6 505 8 70
1143378721: 2 3 796 798 4 8 2 4 5 9 1
280842: 42 34 2 98 954
10709754541: 5 8 2 6 9 5 66 5 5 2 3 898
6422: 625 9 9 5 711 1
11462: 1 3 186 1 60
33372937: 3 36 2 9 99 37
2479: 8 28 23 6 1
7397: 11 17 3 88 5
158451447576: 7 53 7 8 307 3 7 577
19064999: 21 914 4 95 1 4 2 124
413447: 1 95 9 1 79 471 9 6 557
11285120: 53 2 916 56 4
3246608415: 8 2 8 607 3 476 747 4 3
2328776: 3 8 69 8 441 2 44 6 5 5 8
382541280: 8 4 18 501 7 636 40
8869392: 5 82 8 2 6 478 5 48 49
1287517498: 1 6 5 916 97 1 8 7 926 7
420466098: 6 6 9 635 9 514 34 425
620681230: 78 583 313 7 3 1 1 2 7
12454368: 56 8 678 21 41
245298381: 61 9 8 7 989 688 573 8
351018: 6 4 9 9 466 8 38 4 7 8 4 9
4093997: 33 2 8 23 67 216 882
534600: 88 675 9
26508882: 4 100 1 3 3 6 72 1 86 51
9784837: 3 8 5 595 8 5 7 7 64 8 5
2958: 55 6 3 3 631 5 8 2 1 1 4 3
6439: 153 9 4 477 9
27467895: 27 4 1 666 8 2 3 1 3 252
174337649: 12 9 7 921 5 5 2 97 4 19
5134608: 4 3 834 99 4 527 82
9050257575: 3 291 275 75 68 7
5879928820: 86 4 2 8 4 171 83 7 37 6
789693: 7 1 8 7 626 4 3 1 923 3 6
10070069: 5 1 76 1 5 315 55 77 9
4060932: 70 58 775 87 72
2001586498: 68 56 977 5 538
15898454: 167 4 238 46 8
7488: 67 57 7 67 8 5
723672311498: 723 6 7 23 114 1 9 1
14043700944: 18 27 524 78 707
33552700029: 2 8 19 5 790 35 4 3 21 7
4876613295: 43 18 7 454 9 46 95
25219: 76 39 79 8 814 51 6 1
50959: 41 9 959
16484: 4 8 9 2 675 897 3 8 43 9
1700392: 56 6 55 73 7 2 35 25
1782: 491 5 241 79 965
5932765: 657 288 990 909 9 9
6523039529: 652 303 839 50 63 6
1578: 12 9 33 19 9 543
155450400: 38 60 974 70
66010180: 3 5 584 5 1 58 1 2 190
6495610543: 6 495 603 6 1 14 41
37446382: 7 8 48 57 96 1 36 8 540
594950978: 2 5 539 30 8 6 8 82 97 6
625118: 4 528 509 86 6
21605: 6 61 5 300 5
6330045: 419 213 87 5 8 1 1 32
6746911: 9 4 668 8 23 1
3087024: 6 254 4 9 9 5 4 5 329 8 9
16535367: 31 698 5 764 7 65 43
7149716: 6 6 4 1 8 31 871 1 1 507
799003105: 5 5 75 91 509 23 353 2
14185157: 4 56 9 82 890 39 34 1 7
6575526: 2 936 7 9 523
4304408: 1 7 491 2 6 4 9 5 421 1 4
97419: 89 4 123 98 31 1 76
138041695: 417 7 1 9 9 4 14 182 6 9
285043637736: 2 97 898 93 507 68
909: 6 14 17 3 3
11698: 1 875 938 527 5
2214: 517 4 8 1 1 8 4 7 4 19 94
2097920: 51 4 596 8 8
4897932: 7 7 20 212 7 83 5 8 9 6
3878881777: 6 651 27 86 216
52158: 86 7 7 80 78
23304: 430 3 2 9 83 1
4243659: 400 8 6 221 399 55 5
140494108418: 570 20 11 3 31 7 96 8
471859: 7 1 174 6 1 58 46 9 1 8 3
340507379: 37 8 8 492 2 7 881
17353039300: 948 78 6 919 168 91 9
443456: 40 51 609 4 9 8
7800578: 7 799 1 57 8
126307883: 59 576 212 670 6 8 52
17505960: 7 47 6 8 6 8 184 926 3 6
295005: 3 8 57 3 7 6 979 5 670 7
5971233880: 399 2 277 54 8 6 6 8 2
54974592: 7 570 7 6 5 508 32 27
297463168093: 9 2 1 7 9 4 3 8 685 4 8 93
278598: 7 630 8 1 1 9 7 7 5 146 1
4522732: 81 8 5 36 81 65 99
710531: 710 529 4
8125226: 25 1 18 81 62 652
11972351: 2 4 5 93 4 345 8
38021570720: 692 1 5 876 8 4 8 139 7
5086640: 23 873 53 67 80
10116724: 5 4 10 374 3 5 4 2
606: 5 98 97 3 6
52567399: 6 6 60 88 761 62 7 5 9
41902: 3 7 9 16 120 21 1 1
201364: 6 9 3 29 10 3 64
49541: 688 9 2 4 5
1790: 2 257 99 5
1241759: 153 783 81 3 407
7883273373: 27 85 618 1 91 70
503: 358 1 9 78 58
365868977: 8 4 3 271 205 5 9 2 3 72
6887: 5 840 34 6 92 1 5 7 8 5
918599: 528 701 9 742 3
1843120864580: 4 8 9 185 229 721 6 7
15912846: 10 56 20 6 6 2 6 381
23795606629: 552 7 6 5 21 410 86 29
8867: 42 8 5 1 7 11 5 62
66356409: 818 2 8 900 409
84171143: 64 777 71 14 3
54180206992239: 3 487 6 2 3 83 59 8 4 39
8810079608: 17 93 1 259 95 8 9
66049863205: 16 9 8 491 6 76 87 205
5399021: 8 6 8 2 602 63 8 8
8506485: 50 378 7 9 1 9 7 215 9 5
20598790155: 50 28 1 512 8 1 3 48 54
45665: 32 846 52 1 9
2012551695: 36 748 387 1 6 9 737
83887148644: 792 127 834 92 644
1524819977: 1 3 8 5 36 43 26 3 47 9
839835367036: 981 5 78 780 5 2 7 36
4585138: 25 7 262 1 38
998: 17 4 12 2 488 6
1734480: 7 6 647 73 36
19088: 1 1 72 23 10
49240: 38 5 104 3 40
39100208207: 290 2 786 186 565 57
936031626118: 3 1 3 603 1 2 4 261 5 9 2
8928848124: 55 6 729 933 73 6 449
422326175: 57 70 74 10 77 21 5
12237480: 4 6 2 9 975 6 8 9 1 64 2 8
22630070: 3 4 4 5 8 4 1 819 3 356 3
69544973: 1 9 248 2 2 94 7 2
656880: 1 45 5 952 1 3
239: 1 3 8 34 7 95 39 32 6 2
7657248674: 6 15 5 3 1 1 6 83 660 5 9
1665: 5 64 24 1 8
1042148517: 11 558 4 210 276 4 9
1896138357138: 9 1 594 3 7 348 6 8 4 2 3
16636534: 8 8 189 4 531
1890763745: 9 2 738 5 6 9 2 2 4 50 9 5
5542542: 3 7 227 6 5 5 3 7 7 91 1 4
31211: 4 8 3 6 3 7 3 3 32 869 6
122025580: 9 173 896 549 75 579
26321360: 569 6 1 6 96 694 3 10 8
22924: 46 497 62
8634935898204: 6 388 998 9 155 244 1
52363955628036: 392 632 925 27 89 6 6
74576: 7 45 4 4 59
19299992787: 691 754 2 93 1 3 86 3
476016479: 4 6 28 89 9 6 47 9
250650658926: 6 34 7 46 398 9 993
10272872826: 19 4 9 2 1 2 6 87 282 6
12382719: 634 15 7 2 93 80 6 613
414849674: 52 38 8 99 74
6356057770: 1 9 80 546 60 57 76 8
1792217744: 8 96 2 2 114 63 4 2
708680: 801 7 62 125 55
86488566: 9 60 984 9 1 8
722465: 9 111 2 8 2 9 159 190 5
1498968: 311 43 1 7 2 97 38 8
1834803: 278 66 4 25 3
88279: 3 291 3 6 17 24 36 3
69002777: 35 51 805 77 346
16345119: 250 8 5 8 7 2 1 5 17 8 9 6
1449: 3 6 4 8 69
180612: 81 70 554 4 29
2423844: 4 855 5 1 5 814 4 9 6 6 2
29768: 5 832 35 20 453
11188320941: 7 81 8 6 286 5 1 4 79 5 5
71320475996: 33 72 6 7 5 2 52 759 96
324367: 510 318 2 1 7
9914: 9 5 708
1278883203: 970 4 103 8 2 8 2 320 3
1662015663: 400 37 784 7 35 693
122683056: 8 7 815 8 2 7 32 5 6 1 6 8
618433: 7 479 29 30 6 3 4
26375184: 6 3 6 7 493 3 6 1 61 2 72
16352: 424 71 16 4 8
127253012797: 3 1 7 790 52 3 3 9 9 84
237447056881: 905 298 90 279 940
3510371662: 3 90 9 3 716 63
6810091257: 9 843 68 48 55 5 57
13160: 97 752 91 2 7
9072: 27 9 38 899 757 3
141048429: 5 2 89 5 239 91 2 449
86840: 92 9 7 55 8
2590403191: 8 536 742 5 604
5280114601677: 41 4 383 5 333 2 1 680
6720768237: 26 1 9 32 1 27 6 2 60 36
142690: 55 5 82 30 4 9 9 1 9 3 10
1350: 56 94 9
6705005763: 32 8 4 2 5 7 7 5 456 8 3
105818400: 355 8 276 5 27
508269: 5 85 83 5 4 82 25 67 1 7
81889214674: 28 9 162 5 601 6 3 1 97
1633868160: 807 2 6 1 9 8 63 2 2 8 2 3
1612491937: 445 6 85 7 3 7 2 5 203 7
66097871677437: 922 7 870 28 1 8 8 160
1868983236: 981 6 10 40 789 6 6
33278882: 615 6 76 534 2
1623: 5 25 314 4 782
1236416273: 32 7 462 88 8 9 1 93 18
87745140: 941 3 74 15 5 84
2937158: 2 3 1 3 3 5 44 886 833
2654: 3 9 3 3 84 1 4 956 390 1
56114675: 7 287 44 18 77
185087886: 7 376 4 8 7 778 2 77 30
279563776: 5 2 168 2 644 92 16
35161621577: 6 1 5 564 28 7 997 9 73
5569997161: 2 3 95 8 511 971 59
31907809880: 59 676 762 35 8
14666927700: 13 245 307 5 8 99 3
10224058621: 2 2 64 6 8 526 3 3 832
209124641523: 774 5 3 5 4 3 15 7 7 9 2 4
7627287: 11 99 3 68 7 451 7 9
31847: 97 8 8 8 9 72 6 8 4 54 5 2
3557400: 5 3 196 242 5
10372128542842: 215 6 6 516 8 542 842
161406296569: 2 3 7 405 8 4 96 55 7 11
69429538310: 9 10 9 2 48 7 762 737 2
7349070388: 5 9 4 8 87 3 29 702 9 9 8
124109: 591 70 3
275223: 1 8 25 985 27 5 1 1 2 93
93181: 90 68 587 430 5
9218419685: 78 924 46 2 196 86
1043342438655: 3 87 3 8 43 46 8 6 28 8 4
3025113: 302 405 33 1 735
193655182003: 3 8 91 7 1 1 7 8 7 8 200 1
328798: 6 6 721 4 18 5 94 385 8
13952103: 8 930 9 4 78 3 5 8 5 38 4
68085249: 5 7 474 6 9 5 4 445 83 3
47989: 7 9 4 895 52 396 1 4 8 1
11418200500: 763 999 35 230 805
58: 8 45 5
12543: 557 7 3 831 15
1102632749: 9 122 75 388 2 1 749
440190: 68 78 67 5 9
244416253136: 2 9 5 7 3 8 2 48 2 5 3 137
539203788574: 5 8 8 14 48 8 9 612 8 9 9
3898931632: 7 913 69 12 61
6986920: 8 54 144 13 7 3 6
5183: 2 418 8 2 899
71028585: 4 402 54 818 9
55702470: 556 751 224 9 4 484 3
1593352: 4 5 526 8 42 5 8
16808673: 26 4 56 1 7 67 5
418948995: 6 23 65 9 1 371 6 8 308
42558707: 1 581 99 6 73
1114: 90 3 8 8 304 1
7624594: 35 41 8 9 59 360 136
1879869419: 4 7 19 296 75 572 367
105392107: 9 5 2 3 7 38 2 7 15 6 10
39425: 61 1 28 6 415
946: 58 5 3 5 5 4 1 4 63 75 3 4
26503137: 907 195 65 5 74 4 33
121640265997: 149 2 33 29 81 347
1336050312157: 469 3 581 29 49 59
196079121: 818 932 700 989 8 1
2572786: 7 5 81 91 38 3 8 3 4 3
6066829632: 8 75 6 673 9 96 30
45479102449: 805 9 17 83 7 9 369 4 7
1881087780: 3 414 2 475 76 715
564128512: 40 3 525 757 41 32
2062811875: 5 77 728 926 49 7 8
33632: 155 7 31
6069707: 2 3 70 29 130 7
57566793: 8 1 7 8 24 739 3 788 7
740946416: 4 32 54 941 86 8 959
152224: 628 241 6 71 3 796
2495: 24 78 3 3 9 2
1133974: 78 4 292 3 8 1 8 9 165 3
176823308: 9 61 3 63 12 93 51 6
1194161597: 90 964 4 7 197 6 32 43
53023851518: 6 174 7 634 85 151 5
145124352: 91 90 72 128 87
368188110675: 763 35 173 805 99
15018: 1 10 69 432 5
61075469: 3 4 6 1 187 3 2 9 7 3 1 94
64801192912: 80 81 1 116 3 1 2 911
4528048: 12 132 2 14 8 9 16 28
175718418351: 21 876 5 883 8 1 835 1
298575945: 2 98 575 9 44
391194: 33 44 7 9 44 38 469 9 4
66714: 66 57 8 9 55
146426934034: 76 20 5 283 5 9 2 963
1462: 4 1 727 2
27980088578: 81 62 59 27 7 83 81
168341241: 3 27 9 8 789 91 5 9 23 9
2353029: 9 5 3 9 4 9 54 6 2 3 5 9
5596: 80 478 4 6 8
1759: 96 1 6 792
13820532: 47 65 7 5 58
3282: 78 5 2 40 93 3 390
39641: 6 29 9 2 7
6221202216626: 481 489 67 2 271 976
3695923017: 307 993 580 2 1 8 6 9
639779588830: 7 1 4 32 1 27 1 4 7 833
460677118880: 1 921 35 423 7 76 5
1136300244: 981 261 579 2 3
15930: 2 3 5 88 15 6
138736991: 60 97 839 8 494 2 2
1215654185: 1 6 7 6 6 4 47 9 66 176 6
163048: 113 7 41 160 5 61 6 26
12547: 697 18 1
106568000: 813 59 8 692 175
42382561: 32 637 98 2 6 69 8 3
2570994: 9 8 6 3 4 18 110 9 8 3 9 6
945: 33 1 1 3 9
271349811: 83 3 829 578 77 9 57
40876: 1 751 4 700 8 11
100195832: 4 9 77 95 6 1 84 51
499013366: 5 284 7 50 50 7 9 8 2 5 4
48314: 212 2 58 6 482 82 2 11
2105198: 1 2 35 6 41 37 2 950 2
1059993: 4 6 59 99 4
17687160103: 91 71 99 24 795 30 72
47880503208643: 57 840 503 208 641
692869: 68 8 4 867 4
7838019: 3 915 317 726 9
663157956382: 685 1 2 5 684 378 374
12977701: 80 63 28 521 4 717
577084: 3 2 8 7 84 6
44949960: 15 725 476 90 44
18835663769: 87 202 6 83 5 4 9 8 77 3
1587871: 5 26 3 3 870
1097: 1 99 8 402 37 2 3
521926131: 869 868 5 2 81 8 6
4276474815: 555 956 806 4 13
703290455: 966 4 220 591 455
22985142332: 1 32 477 98 9 745 2 3 5
1143: 1 5 3 3 9 5 5 8 6 4 3 9
93605483394: 1 197 782 827 1 3 3 93
5679: 7 78 28 57 9
5197478: 3 77 8 5 819 4 2 22 221
2740652543: 12 434 64 84 41
26523: 332 6 7 8 5 9 6 4 4 3 87
264220: 429 4 2 5 625 41 93 7
331: 295 3 1 5 5 21
1041: 5 50 5 92 3
3080648: 3 9 9 1 5 4 16 8 62 6 42 5
28887040: 1 78 8 5 4 32 2 13 80
17084: 3 1 610 7 4
44090434: 7 29 9 96 8 7 9 38 7 80
304601158410771: 600 1 616 824 107 7 4
54890328: 8 736 60 6 9 758 518
102297857: 12 7 3 347 6 862 4 865
971: 64 555 4 23 14 225 86
29308: 3 84 6 5 399 7
3028880328: 9 662 5 493 5 803 26 2
13007976: 4 228 9 635 85
20407: 2 4 4 3 55 39 1 4 35 560
43686567836: 51 86 1 815 8 29 971 4
1724327218: 918 8 541 434 82
128448: 85 51 2 81 4 4 48 3
1285: 52 251 1 4 54 15
13726063210: 4 8 673 8 7 7 2 6 13
3464299: 1 23 37 7 6 8 215 645 3
45742500285: 535 475 180 28 3
2034580: 77 3 4 793 457 4 4
109418200850: 1 4 488 6 6 2 75 8 8 3 9 8
1688245068: 779 97 333 65
89633: 4 40 9 500 3 2`,Z2=`............
........0...
.....0......
.......0....
....0.......
......A.....
............
............
........A...
.........A..
............
............`,Q2=`..................................................
................2.................................
......6.........x.0..G............................
..............x5......0..................S........
.....0............................................
..................................y..............e
..........................G...............O.......
.....................0........GO...............d..
.........................8..........e.............
.........6....................................e...
......z6..5...N..x...................eY...........
................6.........5..........Y.E..........
.........X.....N....................E.a...S.....4.
...........................N.2......d.............
...s..................92.....a...................4
............s....................GO........4......
...........................................d.....S
.....................X....N.......................
.........A........................................
.s.....................A....E.......a.........Y...
.....g....s..................E.....Y..............
.............o....................................
...............................3...............O..
.g.................F.3.y..........................
.......F................y.....................d...
..................................X...............
..8....5............X..Z..........................
..g.....8.....na..................................
......................................3...........
.............J.......x............S.Z.............
..2J....h.A...............Z.......................
......A.............................3.............
............J.......n.............................
.8......o....n...........Z........................
..................o..............y................
..F.........................D...............9H....
.................................1.............9..
..................................................
.........h.....n......................f...........
.h....................z..........j.........9......
.......oF............................j............
..........h......z...........7.....1.f............
........................7.......1...H...j........f
........................................f.........
...........................7.......H..............
................................H.................
.............z...........D........................
..............J....................Dj.............
....................................D.............
....................7.......1.....................`,U2="2333133121414131402",x2="1234649462611144453037831447782650154199904444418754393298142370965884849434468499632063186430373758261212246131269638862289982851199328376799168279795582765623726611801673866318448765341351918267349387295549369963783564627765549860288311622270652081331623303731394493363460181979845515387736964680867096758640946958543414346463705165538262546526685849633195972999203924932643729445403458944247195584523184579232961688214927991948214243724569175730583448284484356119292376162160636186866757817916638763541026228667687927489441312075616548246159384499118447986765804592228974577999418391558734571116287259842867478993963973808062272431173355709666156660615438628445554337897396311549911271914241808044129428431013727079642843477779848864247460711054698795421574452859693757769492604050285036418375879396146592482886487267502614288379508991976559251137771025201035238469498254706163746249664583352686888394389962528661423479377440882368727364852965181763743977304890783444241225367841815365615725373765909460767574983268599041248598298646246882925390333193758336614690606376229859977310952436193516243080142820736246797310504828128333142361961778395099418618769953521649497664886644853689964663439758873464151691988132858144867284958978962955808961183763417212216914927661207061698591644829513170478583448638771115917064791335345120696018156487311920831393667218862462828326378011177233463334414662167970933057637415104521428620171316583459805679855062302436487679508343616574352086477239525111898869755286883051481119247467698574572384843757198728737986321228982587952472519175188921187624567951396763394457786070692212852723244718893056488771519282915396222383964626402733754319192066624738216044945259379798266586195364878622624637701638932230139050603997272731932497316870102557444918199992601683572281921124755356293933564519462473215475729757934498602638582772881959496297271881909070486577451021976055772858475453196515216251924813398442755457684812611981656263259174656792437636372376213499942632258249978296218071178526497765836854834048629598968832652544893314561390614249526577284538916319273787723790619949495473517758716258234618353889749029227213746556982318987250869548462666124998253324231131502429378227848470323268162811262919415565497828579972282462311275737630184921206640284613845450135558338253976668476684759514421262733714843476976079144082858834376275451589896419311023486017685922427499385958861011112529695496899583601313766434263574866514284834451578432730477057327451819973418921194417879030654879945977556395855647794984824077896084248144248377475978169279597945104535933033538345154065962932153364492141267067547293921419856646889639117928768380492089575936888766423618211820459759164944608498513354769993392527363490525813214742786249129029618420443873127481937287728561146178342324935038274511517041666114561752702689702258497859619910792945773477433871324444431521732849908619134635748068931595575724763542359229429510973368217447511092804395326177727365989459398173125426738416694452553389206023877841571785555892491949632144373168895386557753619517684745967678725180291655383735568247954317411776264289229657393810344351517189194088589393165750472861165386595047291071456764214881794485175713274627283234523582343884305732478110125711297241746282361427905787166647974194156695297917744728986072776562623066144375358240927772158817551847216892308073898678128626418245344982127369572315531224268810964066259571984851415346908437426038381612816794929316252687267789263777858038875766339015559812293973867935504325429648571562995816605275619999957092856836307059515983613710179075979569868795191350653132838120722312976542663628482917108631329073222562457791926868149698254426946935451238694223453931387896798751239881935395854748492239272034854919384814888057947717382132434020691221934751479277277488381924725915627532635491417639815780893778169064391249299295961391242973897059321222431952669398107359364749247066963899412458493588475851618149811481738570622410741172283240882535228433612290827311518950568654755622818774595613899438405828503591817580378564226643395995909667539714934279146798901976844041843757348894968491751966983325803548156339127051266777943213196946443685147924101736771537126616867472648750915937969376713819404443987456834538499725447029553244467479941638276481321773611758618017954012345236262287882629661651184360217037388620264740406945544570961969439324827723389371576177441792524882783425205310642840393449536313181829908155322642906538923327183337566748261638651153339081288688754570832098771166148667195983395217796366324354117432877437946495139245484548619623121939221279817485372067452674324453976887546435631418382763557184396342836454571423905055892587918887749615509794173638669092345511447263956156414193204688831184714665889259451439259332311845368943513782263123753777696231694194205495704959922723863880432298413636168381616078573062891598315112918219446554845576533892998692325370594474488539426448814429319426521784182769355925546782632073126961818820906590487395948846166059333927649267297696564965543543947669578590562797409937638871106839913865254341245622412121471859998754578132908841667541892012245858521478756969929316422343942158112797752033183928934658142924752050331176202193334788576912574998658539251115539850283720677650854320576562811551173174578775833328416399162054304788347188291756761439376174388945361219433952335731331821396862218232571525612441251632111848598489974740278692731094122916338949484827142750121531675742965367664641411215414977764115388531647726882037293924637143339974272693733161329484435818123411792184988060974583376955921262599899798211923411428461503498359139894628353480323514903211371414868338889037113959618044305359691573337691109965243588528174194180469092705227532616895293628795765668614773534262141057283252953280472752816169227820629710137797844689886847471636687470336478161230636994287399152051504784202946479867156397644210979880186022878788359828251638383974102549761783143734946341195567965634439759146574513251144937969611361249537917121372414247972591798856129814212926346780449724205525637578952290971474136849879738496771728812252071152898776643786732575294105085665738568074607091191283124971896828783299216714398933508987444845687236538244919298383420637051455094528433138730494627177864361713888977647594843636863317479195475629241971697915947726187830636564114098823729843453743461176752844733713545946539141275604894958278308574593424912829229060391133968790787239888747321781532263733749869585143690721342984578234314138614219443741964162918192511776832307690816985214682826410429113433787575317177081795481623259194420753679905138459037544569162935785886994669122850597696389272946729461351613281911162944812417039904767335394611377936922968695541632214837766439787678309195835518662020544561175329341966194572391843719670973031909794252461657162466559118389525946683914729646204585238287215015856124793234672117822717976787185988389052378159892627129540797921702264906257978611257662924043538394716288231727801998187187227545435152579280644629885225697915598946894373494552184543586517474216755926346294581650628813909257673552914519272495581035816539773930958365491741897244555191289966856363614457944142104028159215274555547615795612282959706667958517156783288251367492826848161218955073602427427613866547424122779329827650419258475355528732104767154285734878232072113972557231629537666041754763208932564176315965371571383181346549876030691828952495268968552072988533919895554730738974972372786236634325509460741682123451746919691525537131894351712995427360325069963468615981429463369178879194958216319775496929998671128072275162382737436456495646683993224992449941366156151414324975676576872522428391202716503172565829321488954682824062501920887040764724758196973087523652269198535721157255732641526649609085347729336341408962914068474252322526895938397461729641429980421181955991429017225932178199739658878987489079502213396990782166303645391029191076297572799271438728949662124867565670859790248322321236718646925336247691113181901650314485848572184556276915306733817135286642638378951375485373189842268454101510974096511347766786745747794875723724881223172731475438554113499294969230499896345364273670256198206361788627735155643452404863439889102496402539898169831597788727256514363910936734802416426149697927797183906033235567413213114286602774426463944329826735551766127960729197555261383539342258852893509229687442528542892468292876505980844924717071681184235250353062141872606939592119818063699734998822637498327818971632322191142252765521191882302148619947798440996859987270864334885820529015606841758773115545802669996133895872649425269641769212338078713611157794446098135242912651414750938184643032408516186418218310825119971251884154566626451040465935791155267664965212982379967351582094996554946459503559976317356932677133292693914278258419209666809193139471362474128491715612842727186119275974722714538464947322932735687149316356125722776428705977516372408861301634138532147866826450181780358498121536279382774438451183535084522947251888472178724244728889782974787079372974867189866494314499638174957259498495953236455076783826294773845029255446696373885569187688314133635866751826572757791714719332648826835032975434899567438180539277412871625177258362716798569982193080853747635666229795587060815759883462799662999279281879889544447846998895121317163697327374623366365494312795131669887078122750964953833171135613156691477326906946915144503239794448344065795016443772969723225530602183164373388284243658719982359081337784544756152882542982248296171996642513454369528658681478664696491045608030172999575312369037303249921484625747173199419882954733117690704926834630584514198542204474193666742247122171655737153171159027681876466734656327278732217893868563149033231793843566344620958028773480981963599535348195704851936829898797882956834618671828864326738830352590847228572746184857143063699191381176809359302352278667589233728977142373127065492574875940238282782968328121455963321288107435401882629725448916276575713760423065787750889229626255811896697863305261308256591062193592365073177790111316928237336250615778303925497222349815447666623691882856521963422160416526905590205654818379481079832676895893516482919098764532765884754140636867697828879918743336295180363016636236554343569157783196458934494242767416427230112632265114358942258939467212335456246142915087939322721885507959525338944694102064423525345877641263544618974894262130974888835426839893144845124061466953249766799754867161993468646637226936342238463268159027531420438573125422181067839858894584651032483726128792645244444587857165471714164430522077509558906410145557497776706768664945661987284613938937966858361365958432955693463573964610831827659182288944736688257279732159219389395343654886953252935763528931501753883851419288867394324422949986212483187026529690533244118174472897696529444842312748845940393277102367571891231253993883793538532382138160465617573716926448591122659290612496583451943215966591536875995057382768169219819846513334183940952663237176554280561472164358123554759949165632443698949857299892249787861662462741789978508818568295126549621593912961256298688249657995496325177665344470129177795561631322891270958612808375683533445653922751355556527997399410403045505310227740132655461049557455757716918371662021522040264347781289236560314910729567774042917294466026232041338426268356414666696685618831128947696830192726342727659063167573358598463282853362891416137852368249578331165749498863177755377179271688145726904738738775913328718248907524647034611183528360986383988789146143131221465233244463795429165699288721628353225078899212116263685478256572762427535699363946563736571660761916816356501740772287761381648478644521443563953891156320236488296157463385186992589615191765352938737714735186567044283819446960576428733969595551489270233391965248743919826934397334724083291232757360766811988674258762595131309434533034173773362060107866462021178362333612636665775088122528546161939944881556513613185432793742955868622916704261788240453061539847774927648113792187652621182946526129438440793058323497149197348339101668237436337863854262345870426293999529441396908147223135289276646634234359848169247211307221485513834587612520118381491989233378338592493584912437519388862098874538247876102371134692177497956989315568485873834869526884729692873984257737156350396433321469694823324639117237895583489785306476695336677490871019704876455928998481724442655661912947346891752622133978196185707040762820189760556431461318739674241357759961726398635792176215833577217385765520798268513850858528855617541178359118456771205355446886836279396677368214701968834319616520362811555127225924941878204865772895662856835950307483968248842148769435637545271491339887999517271334113166313630674335913788856855806171113579143711281382672434113294853827828534435910284883729080247711887487164672196612413356974530834818796014636870735431338419854590689778431376714961729462727565822830141467898762247348731220354284508736114448419919898655912358313893774883851156663629482347537228236931837184806621583425239473677899963370735839439569395381139294651014735147997144635199955631313270823235651767588848987632989334499857191126888656516492237592582872312229976650429432298789223289912459172578827517519949514979974990467568877685375264826470636664785878951492886848357043172833183081404537626279577045938921671219761557124310816435418856762936577210623382746676916878247231224034871663999696886967133780556811351178734157535963948558179225146834193780497919211074392022992876615823299183601156314748926642563679601270186612718133977063984198876161315871835940178889765872903751747680959637952696449848408760317099583025516486831191451168144625261697663322682335545386919314146736213874669877626689672687273398416466542662555252404142422160213942856844858580167073876174381893288268555398628470281294357633363187567269267741511370722017779859164720978515401819733127882032321824145143839353597274937062166718657982399622995777799946162620655525845835197711708389815790283178956622318615846329219011269748755869174665584877361468845834785872181772722488938288369952865678982321607894811523912426637732991352455290436411158642467661306110494589431756694615451643558055307742745264394064339637876076514161588480401656364618803990367995924896802765811954757273416269443881528439391962809838452561613433259520658643544884283962148841216423188095878698479572984182929124606971252436494493396324826828328050125535707665152524608649662257923840701526101567644743698244788177168514294855721356454441862763105515877483483047109253312650946425686237743272179936476617735219747363125154506771613181226797935789744560603274682072817876849196714014175430916017449393256028246734647851749047737216923496449459375198966656459629518666541152411522299519399950714755453072653978469616276763553231567998525816523439933397942562407253535193488181371756865421388568738590619895473958886776651694198087245641962766149747113729378614667877332429678760529138617060528470136948299577573791442662428859329450301916191415387879356227407914897057246745598788784385925091691662603624309916752343244843559870136826526668709967119934242745313312996195717019405045451143494133406924893827683741484553653797274527782614751561694783748066621491723567734015325941863235113821774975135398589041732918744425248956671348739984473456229660894661881180798487492442355224141669948823541914702862519339491198616420589411819762854248287363651523474376125238955392374548799765606877969272371236322373997923823733791374477793866565616131966191464879546239796264141136829092733784333977364344637220715568406513561667195051693879729250583313941694556527355741388164249844335018789312968081845692312278666363129769793243809226722986756136245657467888688174748239951587781910662791286030658070255984926769297632545321994756844250993032504883929095248719454066973246632247191651758056286838496854479287678743257811504685112084706647292338754337277680831295332166431256422450944365476747722688973461594552702226236026606656645682856850201670227472185119594651653039334072279791545032432442351386167834705255839913681383944649128446253871558915957727591054771714429050591119862444847144362618963436523325168690619540925395437220113839909267461254147882567147495696433972571075698856348171649160267532445889259123177293832393457959444257683031256147654256656319999192467120772791396339541923417072721412166830345334572675829561584978563176125119801296341430105963462968121971903755649119986743184826135571503559785329318654244354868842882628121353689619967775868242723455733042354311234886555272833251834878259138306481282664453636599536641947672611306039465257701732513637334057746218481224225575591791938846519474145560263562211251345395753813104593753282302225127062694692527091751575213316922254709813155548514460916072991862183496644915781565588693502995942547263746493876994058836364328369575937417513166234467243711695702034205977161553984134802280667098478659311989577538605085118499415692211878286962769624317639352398144786248593466090852322834689443045892664171598547527783987649511662934577942818534687091202090359081719620963651506483374545518162837725229791862632524088968372667333562269349522312751614283506136241330364855821169676038876343979972326989399865659027983985393452167011342295653565549087271335991189247939792418731983974292157558956887904184441770216671569549842986576116978341732428589216369240805626466573946728211644993198416290771279369198655412325548492213891558463834766515199316919680464312436863779818668765831657404628165417407488879422677445221764626620152366489926501837422884676961579595264455921977389268881777436934918110956012142067327319194011563863181694547988634690532986515073523693159657627859683458126049267778746099212990832262965836716163395489859529833597948521986876251471734834175423287055888814796138158981792198951645445140381591639696609396437054191460468872676287319598179428831762801673211385146530472217582533116182306925195029539390372767348531207741644991545568122282447059506581387748959919127355448017203477176552781834608249783580505952197197415440687665185943141831304030584890958268335753231655409471827570622932162266653333407188899611899021309334637063475630428739644086751585889065724775945232505762671574393131994911251964739814483282775834452797226935877529985177977655572849159871359626277732611224281416445422365460497683264160674370872225557331794518124964761787661393608339113973908420773046324686855742755747794982882252828141758130627448798492994445769050464366794320751254802993871032344188855770809649997897252845501528345195724088863511426847118247292264265740106190425237835622891865463565339999994281924835644165897688643958408437921896223212698819508186521292973772585522214355435313583922932368928767844054433317909321136593809767661759682612287462563774535580649180212950906248877326588097774848588450421294158155127055586345779028878816387336185921401484348858359515596935904860944621418269664529631782115289702183387751497943252993129558258450985384536396924869422058637542397685159314406765458578114631466690651932803740611233515540878886189987522582256441768965748425342040203013904454151669383948159867478248704761905329621586482058868473929398631291319013217947907082668362507280667291236434236614849557846356519821111338216849343330376961644273161037126785468422663714478098599769907158821060567740465450519324187775693753119867101221482354416753919174538341786852251013787167195433238619794149653913533268176678826064573386119072352243313435124941352796298520228411189814179052975270304327429018455813733818285211471177834814613063927063383878719949689196594491532718936418786563983423611085975595449375746289644245878540886557332155594235123711585466313388811282119241513091103492947917864765599815754752635525978359199966328540327360697172656186873575401867895472239956286383729518302830767224688143148210767093333761312077897",K2=`89010123
78121874
87430965
96549874
45678903
32019012
01329801
10456732`,E2=`101234653436698943210876543298108967890123211
900945762567787651028945054167211876965254300
812876851008632112987632167054340105874367891
743987945219541003456542108981233234567809892
657641434349898764565876232190543456452912763
898530125896701651698965945087612387301103454
101421056787672340789234876231201293219010989
012336765410589121470125960140340184678321670
987449870323431034561076054057653296501234521
876558901210120345665780143968934187410345438
034569821025001256676891232877065056309654589
125678438136789867589872301986174145218789678
678776569245234798434565432765289036785890541
589989478910135652329806567874376123896781030
431276321210023101210715432990145678765432121
120345290923412302345620121087230109650187656
098010187874503210989430101256521212341090347
187623456365694567876543232344560301032181298
012510589456787655469854741023478912345672107
143421674307897846988767858910890109852109856
231256014210978987671056967378765210763296705
140347123900389034502340191269854307894585014
051298034891276123216521780350123456765674323
565434540762345637897435615443210523456001298
876529651057850136988904306782107610987123367
985018782348943245077211216790108901278994453
123427890167654432106310345889299870122185432
010568921211234501215445432976387761233076541
129877432100235676301456701265456654394567650
431066523231145985490389876014012534585658969
302309012694046796781201078923453421673215678
213218906783459873212212562112969010984504301
304567815612163654304323453007878123435643210
412359854309072345323456894314365036521754965
563456743218781896210567765101254307810867874
694105678907690787890698989210345218987980123
787234563210581654321787876307896210898943321
894563454671410010987345665456987346787652450
763674589582323225676298767645459855898101067
652983673497654134570156958912378764306678998
341672102108987010987667843003569013215463210
030501012896109823478766542103454320176354501
125418923787210734569651033212169010083296101
654327654654323601234569124349078321190187632
789210125345434512103678765678767456783276543`,j2="125 17",T2="2 54 992917 5270417 2514 28561 0 990",H2=`AAAA
BBCD
BBCC
EEEC`,J2=`WWWWWWWHHHHHHHWHRRRRRJJBBJJGDDDDDDDDDDDDDDQQFFFFFFFFKFHHHHHEEEEEHHHKHHHHHHHUUUEEEEEEEEEEVVVVVVVVVVVRRRRRRRRUUUUNVVVVVVVVVVVVNNNNNNNNNNNNNYNN
WWWWWWWWHHHHHHHHRRRRJJJJJJJJDDDDDDDDDDDDDQQFFFFFFFFFFFHFHFEEEEEEHHHHHHHHHHHEUEEEEEEEEEEEVVDVVVVVRRRRRRRRRRRRUUUVVVVVVVVVVVVNNVNNNNNNNNNNNNNN
WWWWWWWHHHHHHHHHRRRJJJJJJJJDDDDDDDDDDDDDDDQFFFFFFFFFFFFFFFEEEEEEEHHHHHHHHHHEEEEEEEEEEEEEVVDVLVVLAARRRRRRRRRRUUUAVVVVVVVVVVVVVVNNNNNNNNNNNNNN
WWWWWWHHHHHHHHHHRRRRRJJJJJDDDDDDDDDDDDDDDDDDFFFFFFFFFFFFFFEEEEEEEHHHHHHHHHHEEEEEEEEEEEEEVVDVLLLLLLRRRRRRRRRUUUUVVVVVVVVVVVVVVNNNNNNNNNNNNNNN
WWWWWWWWWHHHHHHRRRRRJJJJJIDDDDDDDDDDDDDDDTTTFFFFFFFFFFFFFEEEEEEEEEIHHHHHHHHEEEEEEEEEEDTDVDDDDLLLLLRRRRRRRROOUUUVVVVVVVVVVVVVVNNNNNNNNNNNNNNN
WWWWWWWWWHHHHHHHRRRRJJJJJGYDDJDDDDDDDDVDDTTTFFFFFFFFFFFFFCEEEEEEEEEHHHHHHHHHEEEEEEEEEDDDDDDDDLLLLLRRRRRRRROOUUVVVVVVVVVVVVVNVNNNNNNNNNNNNNNN
WWWWWWWWWWWWHHRRRRRJJJJJXGYYGDDDDDDDDDDDTTTTFTTFFFFFFFFFFFFEEEEEEEEUUHHHHHHHEMMEEEEEDDDDDDDDDLLLLRRRRRRORROOUUVVVVVVVDVVVVVVVNNNNNNNNNNNNNNN
WWWWWWWWWWWBBRRRRRRRXXJJGGGGGGDDDVDDDDDTTTTPFTTFFFFFFFFFFFFEEEPPCCCCCCUHUUHSSMMEEEDDDDDDDDDDDLLLLTTRROROOOOOOUBBVVVDDDVVVVVVNNNNNNNNNNNNNNNN
WWYYWWWWWWWBBBRRRRRRRXXJAGGGGGGGDDDDDTTTTTTPTTTTTFFFFFFFFFEEEPPPCCCCCCCCCSSSSMMEEMMMMDDDDDDDDSLTTTTSTOOOOOOOOODDHDDDDDVVVVVVVVNNNNNNNNNNNPPP
YYYYYWWWWWBBBBBRRRRXXXXGGGGGGGGGGDDDDDTTTTTTTTTRFFFFFFFFFFEEEPPPCCCCCCCCCSSSSMMMMMMMMDDDDDDDDDLTTTTTTOOOOOOOOODDDDDDDDDVVVVVKKNNNNNNNNNPPPPP
YYYYWWWYBBBBBBBRRRRXXXXGGGGGGGGGGGGDDDQQQTTTTTTRRFFRFFFFFFFEPPPPCCCCCCCCCUUMMMMMMMMMMDDDDDDDDDLTTTTTTORORROROODDDDDDDDDDVVVVKKKNKNNNPPPPPPPP
YYYYYWYYDBBBZZBRRXXXXXXXXXGGGGGGGGGDDDQQTTTTTRRRRMFRFFFFFCCCCCCCCCCCCCCCCUUMMMMMMMMLLLDDDDDDDDDDTTTUTORORRRRRDDDDDDDDDDDVVVVKKKKKKPPPPPPPPPP
YYYYYYYYYBBBBBBRRXXXXXXXXXGGGGGGGGQDDQQQQQQTTRTRRRRRRFFFKCCCCCCCCCCCCCCCCUUUMMMMMMMLLLDDDDDDDDDSNTNTTORRRRRRRDUDDDDDDDDDVVKKKKKKKKKPPPPBBPPB
YYYYYYYYYYBBBBBXXXXXXXXXXXGGGGGGQQQQQQQQQQXTTTTRRRRRRFFFZCCCCCCCCCCCCCCCCUGUMMMMMMMLLLDDDDDDDDDDNNNNNORRRRPRRLUDDDDDDDDDKKKKKKKKKKPPPPPBBBBB
YYYYYYYYYYBBBBBXXXXXXXXXXGGGGGGQQQQQQQQQQQQTTTTTRRRRRSFFZCCCCCCCCCCCCCUUUGGMMMMMMMMLLLDDDDDDDDDDNNNNROORRRRRLLLLDLDDDDDKKKKKKKKKKKPPPPWBBBBI
YYYYYYYBBBBBBBBBXXXXXXXXXXGGGGGQQQQQQQQQQTTTTLRJRRRRRRRRZCCCCCCCCCCCCCCUGGGMMMMMMMMLLLDDDDDDDLDNNNNNRORRRRRRLLLLDLHDDDDKKKKKKKKKKKKPPPWBBBBB
YYYYYYYYBBBBBBXXXXXXXXXXXXXGGGGQQQQQQQQQQQTTTTRRRRRRRRRRRCCCCCCCCCCCCCCKGGGMMYYYMMMLLLDDDDDDDDNNNNNRRRRRRRRLLLLLLLLEDDKKKKKKKKKKKKKKPPWBBBBB
YYYYYYYBBBBBBBXXXXXXXXXXXXXGGGGQQQQQQQQQQRRRTRRRRRRRRRRRRCCCCCCCCCCCCCCKGGGGGYYYYYMLLLCDDDDDNNNNNNNNRRRRLRLLLLLLLLLEDDKKKKKKKKKKKWQQWWWBBBBB
YYYYYYYBBBBBBBXXXXXXXXXXGXXGGGGQQQQQQQDQQRRTTRRRRRRRRRRRRCCCCCCCCCCUCCCKZGGGYYYYYYMLLLDDDMMMMNNNNNNNNNULLLLLLLLLLLLEEDDKKKKKKKKKWWWWWWWWWBBB
LLYYYYYYBBBBBBXXXXXXXXXXGGGGGGGQQQQQQQDQQRRRRRRRRRRRRRRRRCCCCCCCCCCUUUKKZGGYRYYYYYYLLLMMDMMMMNNNNNNNLLLLLLLLLLLUULUEEDKKKKKKKKKWWWWWWWWWBBBB
IIYYYUYIIIIIBBBXXXXXXXXXMGGGGGGGQQQQQDDRRRRRRRRRMMRRRRRRRCCCCCCCCCCCCCCCZGGYYYYYYYUMMMMMMMMMMMNNNNNNLLLLLLLLLUUUUUUEUUKKKKKKWWWWWWWWWWWWBBBB
IIIIIIIIIIBBBBBBXXXXXMXMMGGGGGGGGGGGQUDDRRRRRRRMMMMMMRRRRRRRRUZCCCCCCCCCZZGYYYYYMYUMMMMMMMMMMNNNNNNNNNLLLLUULUUUUUUUUUKKKKBBJWWWWWWWWWWWBBBB
IIIIIIIIIIIIIMMBYXMMZZZZZZZGGGGGGGGGDUDDDDDRRRRRMMMMMMRRRRRRRUZCCCCCCCCCZGGYYYYYMMMMMMMMMMMMMNNNNNNNNNLLLOUUUUUUUUUUUUKKKBBBJJWWWWWWWWHWBBBB
IIIIIIIIIIIIIMMXXXXMZZZZZZZMGGGGGGGGDDDDDDDDRRRDDMMMMMRRRRRRJZZCCCCCCCCCZZGYYYYYMMMMMMMMMMMMMMNNNNNNNNNLLUUUUUUUUUUUPPBBKKBBJWWWBWWWWWHWBBBB
IIIIIIIIIIIIIMMMMMMMZZZZZZZMGGGGGXDDDDDDDDDDDDDDDMMMMMMRRRJJJZZCCCCCCCCCZZGGGGYYMMMMMMMMMMMMMMNNNNNNNNNNNUUUUUUUUUUUPPBBBBBBBBBWBNWWWWWWZBBB
IIIIIIIIIIIIIMMMMMMMZZZZZZZMGGGGXXXDDDDDDDDDDDVDMMMMMMMRRRJJJZZCCCCCCCCCZGGGGGGGMMMMMMMMMMMMMODDNNNNNNNNNNUUUUUUUUUUUPPBBBBBBBBBBNNNNNWUBBBB
IIIIIIIIIIIIIXMMMMMMZZZZZZZMMXXXXXDDDDDDDDDDDDDDMMMMMMMRRJJJZZZZZZZZZZSSSSSGGGGGMGMMMMMMMMMMMMMDNDNNNNNNNNUUUUUUUUUUPPPPPBBBBBBBBNNNNNNUBCCC
IIIIIIIIIIIIIXMMMMMMZZZZZZZMMXXXXXXDDDDDDDDDMMMMMMMMMMMMMJJJZZZZZZZZZSSSSSSSGGSGGGGMMMMMMCMMDDDDDDNNNNNNNNUUUUUUUUUUPPPPBBBBBBNBBNNNNNNNNCCC
IIIIIIIIIIIICMMMMMMMZZZZZZZMXXXXXXXXXDDDDDDDMMMMMMMMMMMJJJJJJJZZZZZZZSSSSSSSSSSSSGGMGGMMMMMMDDDDDDDYNNNNNNAAUUUUUUUUPPPPBBBBBBNNNNNNNNNNCCCC
IIIIIIIIIIFFMMMMMMMMZZZZZZZXXXXXXXXXDDDDDDDDDDDMMMMMMMMMJJJJJJZZZZZSSSSSSSSSSSSSSGGGGMMDDDDDDDDDYDDYNNNNNNAAAUUUUUUPPPPPBBBBNNNNNNNNNNNCCCCC
IIIIIIIIIIITTTTMMTMMZZZZZZZXXXXXXXXDDDDDDDDDDDDMMMMMMMMMJJJJJJZZZZZZSSSSSSSSSSSSGGSGGDDDDDDDDDDDYYYYNNNNNAAAUUUJJJUPPPPPPPPPNNNNNNNNNNNNNCCC
IIIIIIIIITTTTTTTTTTTTTXXXXXXXXXXXXXDDDDDDDDDDDDMMMMMMMMMMJJJJJZZZZZZZSSSSSSSSSSSSSSGGDDDDDDDDDDDYYYYYNNNNYYUUUUUJPPPPPPPPPPPNNNNNNNNNNNNNCCC
IIIIIIIIINTNTTTTTTTTTTXXXXXXXXXXXXDDDDDDDDDGDMMMMMMMMMMJJJJJJJZZZZZZGSUSSSSSSSSSSSGGGDDGDDDDDDDDDDJJJNNNNYYUUUUJJJPPPJPPPPPPPNNNNNNNNNNNNNCC
IIIIIIIIINNNTTTTTTTTTTXXXXXXXXXXXXJDDDDDNDGGMMMMMMMMMMMJMMMJJZZZZZZSSSSSSSSSSSSSSSGGGDAYYDDDDDDDDQQJJJJNYYYYYUUJJJJJJJVVPPPPPNNNNNNNNNNNNNCC
IIIIIIIIINNNNTTTTTTTTXXXXXXXXXXXXXDDDDDDGGGGMMMMMMMMMMMMMMJJJJJJZJZJSSSSSSSSSSSSGGGGGGYYYYDDDDMPPJJJJJJUYYYYYUJJJJJJJJPPPPPPRRRRNNNNNNNNCNCC
IIIIIIINNNNNNNTTTTTTTXXXXXXTXXXXXXDDDDDDDGGGGGMAAMMMMMMFMJJJJJJJJJJJSSSSSSSSSSSSSGGGYYYYYRDDDVMMMQQJJJJYYYYYJJJJJJJJJJPPPPPRRRRRRNNNNDNCCCCC
IIIIIINNNNNNNTTTTTTTTTTXXXXXCXXXXXDCTTGDGGGGGGGAAMMMMMMFMJEJJJJJJJJJJJJSSSSSSSSSGGGGYYYYYYDDDMMMMQQJJJJOYYYYYJJJJJJJJJJYPPPRRRRNNNNNNDNCCCCC
IIITTINNNNNNNTTTTTTTTTTTTWWWXXXXXXCCCTGGGGGGGGGAMMMMJMWEJJEJJJJJJJJIJJJSSSSSSSSSSGGGGYYYYYAAAAMMMMMYTTTYYYYCJJJJWJJJJJJJPPPRRRRRRRRNHHHCCCCC
IIIIIINNNNNNNNTTTTTTTTTTTTTTXXEXXXCCCCCGGGGGGAAAMJMJJJEEEEEEEEJJJIIIIIJSSSSSSSGSGGGYYYYYYYAAMMMMMMMYTTTYCCCCCJJJJJJJJJJJRRRRRRRRRHHHHHHHHCCC
IIIIIIIINNNNNNNTTTTTTTTTTTRRXHXXXXPCCDGGGGGGGAAJJJJJJJJEEEEEEEEJJIIIIIIIIISSSGGGGGYYYYYYYYAMMMMMMMYYTTTTCCCCCCJJJJJJJJJJJRRRHRHRHHHHHHHHHCCC
IIIIIIIINNNNNNTTTTTTTTTTARRRAHHHXXLLLLLLLGGGAAJJJJJJJJJJEEEEEEEJIIIIIIIIIIIISGGGYYYYYYYYYMMMMMMMMMYYYCTCCCCCJJJJJJJJJJJJRRRRHHHHHHHHHHHHHCCC
IIIIIINNNNNNNNTTTTTTTTTTARRRAAHHAVLLLLLLLLJJJJJJJJJJJJJJEEEEEEEJJIIIIIIIIIIISIGGYYYYYYYYYYMMMMMMMMMYYCCCCCCCCJJJJJJJJJJJRRRRRHHHHHHHHHHHHCCC
QIIIIINNNNNNNTTTTTTTTTTTAAAAAAAAALLLLLLLLLJYLJJJJSJJJJJEEEEEEEEJIINIIIIIIIIIIIIIYYYYYYYYYYMMMMMMMMMYYYCCCCCCCCJFFFFJJJJJRRRRRKHHHHHHHHHHHCCC
IIIIIINNNNNNNNTTTTTTTTTTAAAAAAAAAALLLLLLLLLLLJSSSSSSJJJJJEEEEEEJJJJIIIIIIIIIIIIIYYYYYYYYYYYYMMMMMMMNYYCCYCECCCCFFFZJJJJRRKKKRKKKHHHHHHHHHHCC
YIYIYYNNNNNNDDQTTTQQTTAAAAAAAAAAAALLLLLLLLLLLJVSSSSSSSSJJJJJJJJJJJJIIIIIIIIIIIIIYYYYYYYYYYYMMMMMMMMYYYYCYYCCCAAFFFZZZJJRKKKKRKKKHHHHHHHHHCCC
YYYYYYYYYNNNNNQQTQQQQTAAAAAAAAULLLLLLLLLLLLXLJVSSSSSSSJJJJJJJJJJJJJNNNNIIIIIIIIYYYYYYYYYYYMMMMMMMMMMYYYYYYCCCCCCFFFFJJJRKKKKKKKKHKHHHHHHHCCC
YYYYYYYYNNKKKWQQQQQQQTAAAAAAAAULLLLLLLLLLLLLLVVSSSSSSJJJJJJJJJJJNNNNNNNNIIIIIIIYYYYYYYYYGQQQQMMMMMMMYYYYYCCCCRRCFFFFFFJRKKKKKKKKKKKKHHRCCCCC
YYYYYYYYYNKKKKQQQRRRAAAAAAAAAAAAAAALLLLLLLLLVVSSSSSSSSSJJJJJJJJJNNNNNNNNIIIIIIIIIYYYYYGGGGQQQQMMMMMYYYYYYYYCCCRRFFFFFTTKKKKKKKKUKKKKHRRCCCCC
YYYYYYYYYYKKKKKKQQRRAAAAAAAAAAAAAAALLLLLLLLLVVVSSSSSSJJJJJJJJJJJNNNNNNNNNIIIIIIIIGYGYGGGGQQQQQMMMMYYYYYYYYYCCYFRFFKKKTKKKKKKKKKKKKKKKRRRCCCC
YYYYYYYYKKKKKKKQQRRRAAAAAAAAAAAAAAALLLLLLLXLXXSSSSSSSJJJJJJJJJJJJNNNNNNINIIIIIIIIGGGGGGGQQQQQQMMMYYYYYYYYYYYYYFFFFKKKKKKKKKKKKKKKKKRKKRRRCCC
YYYYYYYYKKKKKKKKPRRRRRWAAAAAAAAAAZZLLLLLLLXXXXSSSSSSMSJJSSJJJJJJJNNNNNNIIIIIIIIIIIGGGGGGGGGGQQGYYYYYYYYYYYYYYYFFFFFKKKKKKKKKKKKKKKKRRRRRRCCC
YYYYYIIYKKKKKKKPPRRRRAAAAAAAAARRAZZLLLLLLLXXXSSSSSSSSSSSSSJSJJJJNNNNNNNNIIIIIIIIIIGGGGGGGGGGQGGYYYYVVYYYYYYYYFFFFFFFKKKKKKKKKKKKRRKRRRRRRRRC
YYIIIIIYKKKKKKKPPRRRRRAAAAARRARAAAALCCLLLLXXXXSSSSSSESSSSSSSSSJJNNNNNNNNXXIIIIIIIIIGGGGGGGGGGGYYYYVVVVYVVYYYYKKKKKKKKKKSKKKKKKKKRRKRRRRRRCCC
IIIIIIIIIIIIKYRPRRRRRRAARARRRRRARACCCCLLLLXXXXSSTSSSSSSSSSSSSJJJJNNNNXXXXXXIIIIIIIIGGGGGGGGWWWWWWYVVVVVVVYKKKKKKKKKKKKKSKKKSSKSKRRRRRRRRRCCP
IIIIMIIIIIIIIRRRRRRRRRRRRRRRRRRRRGCCCGGLLLXXXXXTTSSSSSSSSSSSSJJJNNNNXXXXJJJJIIIIIIIGGGGGGGGWWWWWWYVVVVVVVVKKKKKKKKKKKKKSKKSSSSSSSRRRRRRRRCCP
IIIMMMIIIIIIRRRRRRRRRRRRRRRRRRRGGGCCCGGRRRQXQQXTSSSSSSSSSSSSSOOJJNXXXXXJJJJJIIIIIGGGGGGGGGGWWWWWWYVVVVVVVUKKKKKKKKKKKKKSKKSSSUSSRRRRRRRRRRPP
MMMMMMIIIIIIIIIRIRRRRRRRRRRRRRRGGGGGGGGRRQQQQYQQSSSSSSSSSSSSOOOCOOXXXXXXXJJJJIIIIIGGGGGGGGWWWWWWWQVVVVVVVVKKKKKKKKKKKKKSSSSSSSSRRRRRRRRRPPPP
MJJMMMMMIIIIIIIIIIIGRRRRRRRRRGGGGGGGGQRRQQQQQQQQQQSSSSSSSSOOOOOOOOXXXXXJJJJJAIIIIIIGGGGGGGGWWWWWWQVVVVVVVUKKKKKKKKKKKKKKKKKKSSRRRRRRRRRPPPPP
MMMMMMMMIIIIIIIIIIIGGRRRRRRRGGGGGGGGGQQQQQQQQQQQQQQSSSSSSSOOOOOOOOOXXXXJJJJJAIIIIIIIIVVVGGVWWWWWWVVVVVVVVVVZZKKKKKKKKKKKKKKKSSSRRRRRRRPPPPPP
UUUUMMMMIIIIIIIIIIGGGGGGGRRRGGGGGGGGGQQQQQQQQQQQQQSSSSSSSSOOOOOOOOXXXXXXJXXJAIIIIIAAIIVVVVVWWWWWWVVVVVVVVVVZZKKKKKKKKKKKKKKKDDSSDDRPRRPPPPPP
UUUMMMMMMMIIIIIIIIGGGGGGRRRGGGGGGGGGQQQQQQQQQQQQQQSSSSSSSSOOOOOOOXXXXXXXXXXXXRRIIIAAIIVVVVVWWWWWWVVVVVVVVVVZZKKKKKKKKKKKKKKKDDDPPDPPPPPPPPPP
UUUMMMMMMMMMIIIIIIIGRRGRRGRRGGGGGGGQQEQQQQQQQQQQQQQSSSSSSSOOOOOOOOOXXXXXXXXXXRAAAIAAVVVVVVVWWWWWWVVVVVVVVVVZZZZZZGKKKKKKKKKKDDDPPPPPPPPPPPPP
UUUMMMMMMMMMMMMIIIIGGGGGGGGGGGGGGGGQQGSQQQQQQQQQQQQSSSSSSSOOOOOOOOXXXXXXXXXXPAAAAAAAAVVVVVVWWWWWWVVVVVVVVVVZZZZGZZKKKKKKKKKKDDDDPPPPPPPPPPPP
UUUMVAMMMMMMMMMIIIIGGGGGGGGGGGGGGGGGGGQQQQQQQQQQQQQQQSSSSOOOOOOOOOOXXXXXXTXXPAAAAAAAVVAVVVVVVVVVVVVVVVVVVVVZZZGGGGKKKKKKKKKKDDPDPPPPPPPPPPPQ
UUUVVAMMMVVVMMMIIGGGGGGGGGGGGGGGGGGGGGGWQQQQQQQQQQQQQSSSSOOOOOOOOOVXXXUUTTTXPAAAAAAAAAAVVVVVVVVVVVVVVVVVVVVVGGGGGGKKKKKKKKKKDDPPPPPPPPPPPPPP
UUUVVAVMVVVVVMAAGGGGGGGGGGGGGGGGGGGGGGGWWWQQQQQQQQQQQSSSSOMOOOOOOOOOOXUUUUTTAAAAAAAAAAVVVVVVVVVVVVVVHVVVVVVVFGGGGGKKKKKKKKKKZDDPPPPPPPPPPPPV
UUUVVVVVVVVVVAAKKGGGGGGGGGGGGGGGGGGGGGGGWQQQQQQQQQQQQSSSSMMMMOMMOOOOXXXXUUUTAAAAAAAAAAAVVVVVVVVVVVCHHHHHHUUUHGGGGGGZZZZZZZZZZDPPPPVPPPPPVVPV
UUUUVVVVVVVVVVKKKKKTGGGGGGGGGMGGGGGGGGGQQQQQQQQBQQQIQSSSMMMMMMMMMMMOXXUUUUUUUAAAAAAAAAAAVVVVVVVVGHHHHHHHHUHHHHGGGGGZZZNZZZZZZZVVVVVPPPVPVVVV
UUVVVVVVVVVVKKKKKKKGGGGGGGGGGGGBBBBBGGQQQQQQQQQQQIIIQSIIMMMIMMMMMUUUUUUUUUUUSSSAAAAAAAAAWWVXVVVVGHHHHHHHHHHHHHGGGZZZZZZZZZZZZZZVVVVVPPVVVVVV
UUVVVVVVVVVVKKKKKKKKRGGGGGGGGBBBBBBBGGQQQQQQQQQQQIIIIIIIIIIIIMMMUUUUUUUUUUUUSSSSAAAAAAAAWVVVVVVLHHHHHHHHHHHHHGGGAZZZZZZZZZZZZZZVVVVVVVVVVVVV
MUUMVVMOOVVWWWKKKKKKRRGGGGGGGGBBBBBBBGQQQQQQQQQQQQIIIIIIIIIIMMMMUUUUUUUUUUUUUSSSSSAAAAAJVVVVVVLLHHHHHHHHHHHHGGGZZZZZZZZZZZZZZAAVVVVVVVVVVVVV
MUMMMMMMMMVWWKKKKKKKKGGBBBGGBBBBBBBQQQQQQQQQQQQQQQIIIIIIIIIMMMMMMUUUUUUUUUUUSSSSSSSAAAJJJVVLLLLLHHHHHHHHHHGGGGGZZZZZZZZZZZZUAAAAVVAVAAVVVVVV
MMMMMMMMMWWWWWKKXKKKUUGZBBBBBBBBBBBBBBBEQQQQQQQQQQQIIIIIIIIMMMMUUUUUUUUUUUUSSSSSSSSSSFFFFTVLLLLLLLZHXZHCHHHHGGGGGZZZZZZZZZZZAAAAAAAAAAVVVVVV
MMMMMMMMMMMWWWKXXXUUUUXZZBBBBBBBBBBBBBBBQQQQQQQQQQQIIBIIIIIMMMMUMUUUUUUUUUUSSSSSSSSSSFFFTTFFLLLLZLZZZZZCHGGHGGGGGGZZZZZZZZZAYYAAAAAAAAAVVVVV
MMMMMMMMMMMWWWXXXUUUXXXZZBBBBBBBBBBBBBBBQQQQQQBBBQBIIBIIMMMMMMMMMUUUUUUUUUUSSSSSSSFFFFFFFFFLLLLZZZZZZZZZZGGGGGGGGGZZZZZZZZAAYAAAAAAAMAVVVVVV
MZZZZZZZZMMMWWXXXUXXXXXBBBBBBBBBBBBBBBBBBBQQQQQQBBBIBBBMMMMMMMMMUUUUUUUUUUUUUSSSSLGFFFFFLLLLLLLLZZZZZZZZLGGGGGGGGGGZZZZZZZAAAAAAAAAAAAVAVVVV
AZZZZZZZZFFFXXXXXXXXXXXXBBBBBBBBBBBBBBBBBBBBEEBBBBBBBBMMMMMMMMMMUUUUUUUUUUUUUSHSSLLLFFFFFLLLLLLZZZZZZZZZLGQQGGGGGGGZZZZZZAAAAAAAAAAAAAAAAVVV
AZZZZZZZZZZZZXXXXXXXXXXXBBBBBBBBBBBBBBBBBBSEEEEEBBBBBBBMMBBMMMMMMUUUUUUUUUUUUUHHHSLLFPPFLLLLLLLZZZZZZZZZZQQGGGGGSSZZZGZZGAAAAAAAAAAAAAAAXVVV
AZZZZZZZZZZZZFFXXXXXXXXXBBBXBBXXXBBXXBBBXXEEEEEEEBBBBBGMBBBMMMMMUUUUUUUUTUUUUTHHHSLLPPPFLLLLLLZZZZZZZNNNNNNNNNNSSSZGZGGGGAGGGGAAAAAAAAAAAVVV
AZZZZZZZZZZZZXXXXXXXXXXXBBXXXBXXXXXXXBBXXAEEEEEEEBBBGGGGGBBMMBMMUUUUUUUUUUUUHHHHHHLLLLLFLLLUUUMZUZZZZNNNNNNNNNNSSSGGGGGGGGGGGGAAAAAAAAAAJJVV
AZZZZZZZZZZZZSSXXXXXXXXXXXXXXXXXXXXXXXXXAAEEEEEEEEBGGGGGGGBMBBMMGGGUUXUUUUUUHHHHLLLLLLLLLLUUUUUUUUHHZNNNNNNNNNNSGGGGGGGGGGGGGGAAAAAAAAAAAVVV
AZZZZZZZZZZZZSSHHHHXXXXXXGGGGXXGGXXXXXAAAAEEEEEEBBBGGGGGGGBBBBBMMMUUUUUUUWWUHPPHWLLLLLLLLLUUUUUUUUHHZNNNNNNNNNNSGGGGGGGGGGGGGGAAAAAAAAALVVVV
AZZZZZZZZZZZZSSHIHHHHHHHXXGGGGGGGGXXXXAAAAAEEEEEEGGGGGGGGGGBBBBBBUUUUUUUUWWUHHHHWWLLLLLLUUUUUUUUUUHHZNNNNNNNNNNYYGGGGGGGGGGGGGAYAAAAGAALVVVV
AZZZZZZZZZZZZZZZZHHHHHHXXGGGGGGGXXXXXAAAAAAEEEEEEGGGGGGGGCBBCBBBBBBUUUUUUTWWWHWWWWLLLLLLRUUUUUUUHHHHZNNNNNNNNNNYYYYGGGGGGGGGGGQYAAAAGALLVVVL
AZZZZZZZZZZZZZZZZIHHHHHGGGGGGGGGXGGXGAAAAAAAEKEEEGGGGGGGYCBBCCCBBBBUUUUUUTWWWWWXXWLLLLLLNNNNNNNNNNNNNNNNNNNNNNNYYXXXGGBBGGGGGGQQGGAAGAALLLLL
AZZZZZZZZZZZZZZZZZZZZZZZZGGGGGGGGGGGGAAAAAAAAAMMMMMGGGGGCCCCCCBBBBBAAAUUUTWWTWWWXXXOOOOVNNNNNNNNNNNNNNNNNNNNNNNYYXXXXXQBGGGGGGQAAGGGGGGLLLLL
AZZZZZZZZZZZZZZZZZZZZZZZZGGGGGGGGGGGGAAAAAAAAMMMGGGGGGCCCCCCCCBBBBBBBAUUUTWTTWXWXXVOOOOONNNNNNNNNNNNNNNNNNNNNNNNNXXXXXQGGQQGGQQAAGGGGAGGLLLL
AZZZZZZZZZZIIIIZZZZZZZZZZGGGGGGRRGGKGAAAAAAAAMMMGMGGTGVVCCCCCCCCBAAAAAAUUTTTTTXXXOVVOOOOOHUUUUHNNNNNNNNNNNNNNNNNNXXXXXQQQQQQGQAAAGGGGAGGLLLL
AZZZZZZZZZZIIIIZZZZZZZZZZGGGGGGRBBRKGAAAAAAAAAMMMMTTTGVVCCCCCCCCBBBAAAAUUTTTTTTXXOOOOOOOOOKUUUHNNNNNNNNNNNNNNNNNNXXXQQQQQQQQQQAAAGGGAALLLLLL
AAAAAAAACIIIIIIZZZZZZZZZZGGEGRRRRRRRAAAAAAAAAAMMMMMMTGGGCCCCCCCCBBBAAAATTTTTTTTTTOOOOOOOOKKKUPPPPHPHHHHHNNNNNNNNNXXQQQQQQQQQQQQAAAAAAAALLLLL
AAAAAAAAAQQIIIIZZZZZZZZZZGGEEERRRRRAAAAAAAAMMMMMMTMTTTTTCCCCCCCCCCBAAAAQQTTTTTTTOCOOOOOOOKKKPPPPPPPHHPHHNNNNNNNNNNNNQQQQQQQQQQQQQQAAAAAAAALL
AAAAAAAAAQQIIIIZZZZZZZZZZEEEEEERRMMAMMAAAPAMMMMMMTTTTTTTCCCCCCCCAAAAAAQQQTTTTTTTOOOOOOOOOKKPPPPPPPPPPPPLNNNNNNNNNNNNQQQQQQQQQQQQQQAAAAAAAAAA
AAAAAAAAAQQIIIIZZZZZZZZZZEEEEEERRMMMMMAAAAMMMMMTTTTTTTTTGCCCCCCCAIIAAATTTTTTTTTTOOOOOOOOOOOHPPPPPPPPPPPPPPNNNNNNNNNNQQQQQQQQQQQAQAAAAAAAAAAA
AAAAAAAQQQQQQIIZZZZZZZZZZEEEEEEEEMMMMMMAMMMMMMTTTTTTTTTTTTDDTIIIIIIAARTTTTTTTTTTOOOOOOOOOHHHPPPPPPPPPPPPPPXXXBBBBEBBGBBQBQBQQQQAQAAAAAAAAAAA
EAAGASSPQQQQQQIZZZZZZZZZZEEEEEEMMMMMDMMMMDMMMMMTTTTTTTTTTTTTTTIIIIAAARTTTTTTTTOOOOOOOOOOHHHPPPXPPPPPPXXXXXXXBBBBBBBBBBBBBBBQQQQAAAAAAAAAAAAA
EAAGPPSPPPPQQQQQQQEEEQQEEEEEEEEEMMDMDMMDDDDMMMMTTTTTTTTTTTTTTIIIIIIAITTTIITTTLLOOOOOOOOOYYYMMMPPPPPPPXXXXXXBBBBBBBBBBBBBBBBQQQQAAAAAAAAAAAAA
EPAPPPPPPPPPQQUQQQEEEEEEEEEEEEEMMMDDDDDDDDDMMMTTTTTTTTTTTTTTIIIIIIIIIIIIIITTTTLLOOLLYYOYYYYYYPPPPPPMPXXXXXXBBBBBBBBBBBBBBBQQQQQKAACCAAAXAAAA
PPSPPPPPPPPAUUUQQQEEEEEEEEEEEEEMMMMDDDDDDDDDTTTTHTTTTTTTTTTTIIPIIIIIIIIILIIILLLLLJLLLYYYYYYYPPNNPPPMXXXXXXXBBBBBBBBBBBBBBPPQQQQAACCCAAAAAAAA
PPPPPPPPPPPPUUUQEEETTEEEEEEEEEMMMMDDDDDDDDDDTUEPTTTTTTTTTTTTIIPPIPIPIIIILLILLLLLLLLLLLYYYYYYYPPPPPPXXXXXXXBBBBBBBBBBBBBBBBBQQQCCCCCCAACAAKKU
PPPPPPPPPUPUUUEEDEETTTEEEEEEEEMMMMMDDDDDDDDDNEEEKTTTTTTTTTTPPPPPPPPPIIIILLLLLLLLLLLLLLYYYYYYYMZPPZZZXXXXXXBBPPPBBBBBBBBBBNNPPPCCCCCCACCCKKKU
PPPPPPPPUUPUUEEEEEEEEEMEENXXEEMXMDDDDDDDDDDDDDEKKJTTTTWTTTTPPPPIIIIIIIIIIILLLLLLLLLLLLYYYYYQQYZZPZZZZZZXXXPPPPPPBBBBBBBBBNNNPPPPCCCCCCCCCCCC
PPPPPPPPPUUUUEEEEEEEEEEEEXXXXXXXXDDDDDDDDDDDDEEEJJVTTWWTTTPPPPPPPIIIIIIIIILLLLLLLLLLLLYYYYYYYYYZPZZZZZZZXZEPPEEPBBBBBNBBNNNNPPPPPPPCCCCCCCCC
PPPPPPPPUUUEEEEEEEEEEEEAAXXXXXXXXXDDDDDDDDDDDEEELJJJJWWTWTYYPPPPIIIIIIIIIQLLLKKLLLLLLLYYYYYYYYYZZZZZZZZZZZEEEEEEEBBNNNNNNNNNPPPPPPPCCCCCCCCC
PPPPPPPUUUUUUEEEEEEEEEEAAXXXXXXXMMDDDDDDDDDDDEEEJJJJWWWWWPPPHPPPPPIIIIIQQQQKKKKLLLYYYYYYYYYYYYYYZZZZZZZZZEEEEEEEEEBNFFNPPPPPPPPPPPPPPCCCCCCC
PPPPPPUUUUUUUEEEEEEEEEAAAXXXXXXXXXDDDDDDDDDDDEEEJJJJJJWWWPPPPPPPPPPPIIIIQQQQKKKKLEYYYYYYYYYYZZZZZZZZZZZZZZZZGEEEEAFFFFNPPPPPPPPPPPPPPPPCCCCC
PPPPPPJJUUUUUUUEEEEEEAAAAXXXXXXXXXBDDDDDDDDDEEJJJJJJWWWWWPPPPPPPPPPPPIIQQKQQKKKKBBYYYYYYYYFFZZZZRZZZZZZZZZZZZEEEFFFFFNNNPPPPPPPPPPPPPPPCCCCR
PPPPPRJJJJJUUUUEEEEEEEAAXXXXXXXXXXBDDDDIDDDEEEJJJEJJWWWWWPPPPPPPPPPPIIIIQKKQKBKKBBYYFFYYYYFZZZZZRRZZZZZZZHZZZHEFFFFFFFFPPPPPPPPPPPPPPPCCCCCR
KKPPPRRRJCCUUUUUEEEEEEAAXXXXXXXXXXXXDDDKWDDDEEJJJEJJWWWWWWWPPPPPFPPPPIDDKKKKKBBBBBYYYFYYYFFFZZZZZRZZZZZZZHZHHHHFFFFFFFFFPPPPPPJPPPPPPPPCCCRR
KKPPPGGGJJCUUUUUEEEEEEAXXXXXXKKKXXXXKJKKKEEEEEJJEEJJWWFWWWPPWPPPPPPPPIDDKKBBKBBBBBFFYFYYFFFFZZZZZRZZZYZHHHHHHHFFFFFFFFFFEQPPPPCPPPCPPCCCRCRR
KKPPGGGGJJCUUUUUEEUUUUXXXXXBBKOKKKKKKKKKEEEEEEEEEEFKFFFFWWPPWPPPPPPWDDDDKKBBBBBBBBFFFFYFFFFFZZOZZRZZZYHHYYHHHHCCCFFFFZFEEQQCCCCPCCCPCCCCRRRR
GGGGGGGGCCCCUUUUUEUUUUUUUUXBBKKKKKKKKKKKEEEEEEEEEEFFFFFFWWPWWPPPPPPWDDDKKKKBBBBBBBFFFFFFFFFFFZOZZHZZYYHYYYYYHHCCCCFFFOOEEQQQQQCCCCCCCCCCRFRR
NGGGGGGGCCCCOUUUUUUUUUUUUUXBBKKKKKKKKKKKEEEEEEEEEFFFFFFFWWWWWPWPPWWWDDDKKKKBBBBBBBBFBFFFFFFFFFHHHHYYYYYYYYYYCCCCCCCCOOOEQQQQQQCCCCCCCCFFFFFR
NGGGGGGGCCCCOOUUUUUUUUUUUBBBBBKKKKKKKKKKEEEEEEEEEFFFFFFWWWWWWWWPWWDDDDDDDKBBBBBBBBBBBBBFFFFFFFHHHHYYYYYYYYYYYCCCCCOOOOQQQQQQQQCCCCCCCFFBFFFF
GGGGGGGCCCOOOOOOUUUUUUUUUBBBBKKKKKKKKKKRKEEEEEEFFFFFFFFFFWWWWWWWWWWDDDDDKKBJBBBBBBBBBBFFFFFFFFFHHHYYYYYYYYYCCCCOOOOOOOQQQQQQQQQCCCCCFFFFFFFF
GGGGGGGCCCCOOOOOUUUUUUUUBBBBBKKKKKKKKKKKKEEEEEEFFFFFFFFFFWWWWWZZWTTDDDDDDKBBBBBBBBBBFFFFFFFFFFFFHHHYYOOOYYYCCCCCOOOOOQQQQQQQQGGCCCCCFFFFFFFF
GGGGGGGGGCCOOOOOOOOOUBUUUBBBBBBKKKKKKKKKKEEEEFFFFFFFFFFFFZZZZZZZTTTTDDDDBBBBBBBBBBBFFFFFFFFFFFFHHHHHHHHHCCCCCOOOOOOOOQQQQQQQQGCCCCCCFFFFFFFF
ZGIGGIJGCCCOOOOOOOOOBBUBBBBOBBKKKKKKKKKKKEEEEEFFFFFFFFFFFZZZZZZZTTTTDTDWWBWBBBBBBBFFFFFFFFFFFFFSFHHHHHHHHDCCCOOOOOOOOQQQFFQQQQACCCCCCPPFFFFP
IIIIIIIICCOOOOOOOOOOBBBBOBOOOKKKKKKKKKKKKEEEEEFFFFFFFFFFZZZZZZZTTTTTTTWWWWWBBFBBBBFFFFFFFFFFFFFFFHHHHHHBHCCCAAAOOOOOOOOOQQQQQQCCCCCCCCPPPPPP
IIIIIIICCCOOOOOOOOOOOBBIOBBOOOOXKKKKKKKKKKEEEFFFFFFFFFFKZZZZZZZPPPTTTTTWWWWWBFBBBBFFFFFFFFFFFFFHHHHHHHHHHCCCCCOOOOOOOOOOOQQQQACCCCCSCCPPPPPP
IIIIIIICCCOOOOOOOIOIIBIIOOOOOOOXKKKKKKKKKKEEEFFFFBBFFFFFZZZZZZZZPPTPTPTWWWWWFFFFBFJJFFFFFFFFFFFHHHHHHHHHHHCWWMOOOOOOOOOOOQQAAACCCYCCCPPPPPPP
IIIIIIICCCCOOOOOIIIIIIIIIOOOOOOOKKKKKKKKKKEEEFFFFFBBBFBZTZZZZZZJPPPPPPPWWWFWFFFFFFFFFFFFFFFFFFFFFFHHHHXHHWWWMMMOOOOOOOOOOOCACACCCYCCPPPPPPPP
IIIIIIIICCOOOOOIIIIIIIIIIOOOOOOKKMKKHKHKKKKKEFEZFFBBBFBZZZZZZZZPPPPPPPPPPWFFFFFFFFFFFFFFFFFFFFFFFFHHHXXXXWWMMMMMOOOOOOOOOOCCCCCCCCCPPPPPPPPP
IIIIIIICCCCOOIIIIIIIIIIIIOOOOOOOOHHHHHHHHHHHEEEBBBBBBBBZZZQQZQQPPPPPPPPPPWSFFFFFFFFFFFFFFFFFFFFFPHHHHHXWWWWWWQMMMOOOOOOORRCCCCCCCCCPPPPPPPPP
IIIIICCCCCCCIIIIIIIIIIIIIIOOOOOOHHHHHHHHHHHHHEEBBBUUUUUUQQQQZQPPPPPPPPPPSWSFFFFFFFFFHFFFFFFFFFFFPHHHHXXWWWWYQQQQMOOOOOOYCCCCCCCCCCCCCPPPPPPP
IIIIIIIICCCCIIIIIIIIIIIIIIOOOOOOHHHHHHHHHHHQQQBBBBUUUUUUQQSQQQPPPPPPPPPPSSSFFFFFFFFFFFPPFPPFPPFFPPPPWWWWWYYYQQBQMOOOOOOOOPPCCCCCCCCCCCCCCPCC
IQIIIIIICCCCCIIIIIIIIIIIIOOOOOOHHHHHHHHHHHRQQQQBBBUUUUUUSSSSSSAPPPPPPPPPSSJFFFFFFFFFFFPPPPPPPPPPPPPPPPWPPPYYYQQYYLOOOOOOPPPPCCCCCCCCCCCCCCCC
QQIIIIICCCCCCCIIIIIIIIIIIICOOOOHHHHHHHHRRRRQQQQBBBUUUUUUSSSSSSPPPPPPPPSPSSJFSPPPFFFFFFPPPPPPPPPPPPPPPPPPPPPYYYYYYLPPPPPOPPPPCCCECCCCCCCCCCCC
IIIIICCCCCCCCCIIIIIIIIIIIICCOOHHHHHHHHHRRRRQQQQBBBUUUUUUSSSSSSSPSSPPPSSSSSSSSCPPFFFFFFPPPPPPPPPPPPPPPPPPPPYYYYYYUYPPPPPPPPPPPPEEECCCCCCCOOCC
IIIICCCCRRRRRRIIIIIIICCCIICCOOOHQQHHHHHHRRRRRRRBBBUUUUUUUUUSSSSSSSSSPSSSSSSSHHGPFFFFFFPPPJPPPPPJPPPPPPPYYYYYYYYYYYHPPPPPPPPPPEEEEEECCCOOOOOV
CICCCCCRRRRRRRIIMIIIIICCCCCCCOQHQQQHHRHRRRRRRRBBBBBBUUUUUUUSSSSSSSSSSSSSSSSHHHFFFFFFFFPJPJPJJJJJJPPPPPPYYYYYYYYYNPPPPPPPPPPEEEEEEEECOCOOOOOO
CICCCCCRRRCRRIRIMMIIVVCCCCCCCOQQQQQHHRRRRRRRRRNBBBBUUUUUUUUSSSSSSSSSSSSSSSSHHHHFFFFFFFJJPJJJJJJJJPPPTTTTYYYYYYYYYPPFPPPPPPPPPEEEEEEEOOOOOOOO
CCCCRRRRRRRRRRRRRMIVVCCCCICJCQQQQQQRRRRRRRRRRRNRBBBUUUUUUUUUUUUUUSSSSSSSSSSHHHHFFFFFMMJJPJJJJJJJPPPPTTTTYYYYYYYYYFFFFPPPPPPPPEETEEEOOOOOOOOO
CCCCRRRRRRRRRRRRRRVVVCCCCQQQQQQQQQQQRRRRRRRRRRNRRBBUUUUUUUUUUUUUUSSSSSSSSHHHHHHFFFFFMMJJJJJJJJJJPPTTTTTTTZYYYYYYYFFFPPQPPPPPPEOOOOOOOOOOOOOO
CCCCRRRRRRRRRRRRRRRVVVVVQQQQQQQQQQQQRRRRRRRRRRRRCCCBCUUUUUUUUUUUUSSSSSSSSHHHHHHFFFFMMMJJJJJJJJJJJPTTTTTTTZYQYFYYFFFFPQQQQQQPPOOOOOOOOOOOOOOO
CCCCRRRRRRRRRRRRRRVVVVVVQVQQQQQQQQQQQRRRRRRRRRRRCCCCCCUUUUUUUUUUUSSSSSSSHHHHHHHHHFFJJJJJJJJJJJJJTTTTTTTTTTTTFFFFFFFFQQQQQQPPPOOOOOOOOOOOOOOO
CCCCRRRRRRRRRRRRRRVRVVVVQQQQQQQQQQQQQRRRRRRRRRRRRCCCCCUUUUUUUUUUUSCTTCSHHHHHHHHHHFUJJJJJJJJJJJJJTWTTTTTTTTFFFFFFFQQQQQQQPIPPPDOOOOOOOOOOOOOO
CCCCCCRRRRRRRRRRRRRRVVVVQQQQQQQQQQQQQRRRRRRRRRRRRRCCCCCCUUUUUUUUUCCCTCHHHHHHHHHHHFUUJVJJJJWJJJJJFTTTTFTTTTFFFFFFFQQQQQQPPPPPPDOZOOKOOOOOOOOO
CCCCCCRRRRCRRRRRRVRVVVVVVVQQQQQQQQQQQRRRRRRRRRRRRRRRCCCCUUUUUUUUUCCCCCHHHHHHHHHHHFUUJJJJJJJJJJJJFFFFFFTTTFFFFFFFFFQFQQFPPPPKKKZZZZOOOOOOOOOO
CCCCCRRCCRCCRRRRRVVVVVVVVVVVQQQQQQQQQRRRRRRRRRRRRRRCCCCCUUUUUUUUUCCCOOHHHWWHHHUUUUUUJUUUUUJJJJJJFFFFFFTTFFFFFFFFFFQFFQFFKKKKKKKZZOOHHOOOOOOO
CCCCCCCCCCCCRWWRRVVVVVVVVVVVQQQQQQQQQRRRRRRRRRRRRRCCCCCCUUUUUUUUUCCCOHHHHWHHHHHUUUUUUUUUUUUJJUJJJFFFFFFFFFFFFFFFFFFFFFFFKQKKKKZZZZZOOOFOOOOO`,V2=`Button A: X+94, Y+34
Button B: X+22, Y+67
Prize: X=8400, Y=5400

Button A: X+26, Y+66
Button B: X+67, Y+21
Prize: X=12748, Y=12176

Button A: X+17, Y+86
Button B: X+84, Y+37
Prize: X=7870, Y=6450

Button A: X+69, Y+23
Button B: X+27, Y+71
Prize: X=18641, Y=10279`,k2=`Button A: X+79, Y+26
Button B: X+61, Y+99
Prize: X=7544, Y=9586

Button A: X+14, Y+42
Button B: X+29, Y+17
Prize: X=10404, Y=2252

Button A: X+13, Y+42
Button B: X+71, Y+29
Prize: X=6289, Y=6091

Button A: X+62, Y+24
Button B: X+17, Y+64
Prize: X=4947, Y=9224

Button A: X+44, Y+15
Button B: X+75, Y+89
Prize: X=9101, Y=7860

Button A: X+13, Y+48
Button B: X+70, Y+26
Prize: X=2261, Y=7246

Button A: X+18, Y+27
Button B: X+67, Y+25
Prize: X=5772, Y=2316

Button A: X+47, Y+15
Button B: X+19, Y+72
Prize: X=5516, Y=11333

Button A: X+17, Y+11
Button B: X+15, Y+43
Prize: X=5371, Y=14835

Button A: X+17, Y+74
Button B: X+77, Y+11
Prize: X=11297, Y=11282

Button A: X+94, Y+21
Button B: X+35, Y+90
Prize: X=11019, Y=7146

Button A: X+62, Y+60
Button B: X+77, Y+14
Prize: X=5942, Y=4540

Button A: X+54, Y+99
Button B: X+51, Y+24
Prize: X=3273, Y=3012

Button A: X+55, Y+97
Button B: X+49, Y+24
Prize: X=4073, Y=5498

Button A: X+33, Y+52
Button B: X+43, Y+12
Prize: X=14969, Y=6036

Button A: X+92, Y+35
Button B: X+40, Y+87
Prize: X=10804, Y=7484

Button A: X+17, Y+32
Button B: X+58, Y+29
Prize: X=2516, Y=3373

Button A: X+42, Y+11
Button B: X+14, Y+35
Prize: X=7046, Y=13019

Button A: X+14, Y+74
Button B: X+57, Y+11
Prize: X=3609, Y=3691

Button A: X+27, Y+15
Button B: X+17, Y+96
Prize: X=963, Y=1314

Button A: X+36, Y+11
Button B: X+12, Y+27
Prize: X=8168, Y=14068

Button A: X+63, Y+16
Button B: X+11, Y+54
Prize: X=11445, Y=2472

Button A: X+35, Y+98
Button B: X+57, Y+20
Prize: X=4926, Y=9186

Button A: X+68, Y+30
Button B: X+11, Y+71
Prize: X=4881, Y=2881

Button A: X+85, Y+83
Button B: X+54, Y+11
Prize: X=6646, Y=3193

Button A: X+73, Y+16
Button B: X+20, Y+72
Prize: X=5556, Y=15000

Button A: X+14, Y+64
Button B: X+80, Y+26
Prize: X=6090, Y=19498

Button A: X+17, Y+78
Button B: X+73, Y+15
Prize: X=3809, Y=17741

Button A: X+30, Y+11
Button B: X+43, Y+67
Prize: X=14802, Y=16661

Button A: X+17, Y+53
Button B: X+71, Y+33
Prize: X=17282, Y=3940

Button A: X+28, Y+53
Button B: X+45, Y+12
Prize: X=6300, Y=8182

Button A: X+12, Y+88
Button B: X+39, Y+43
Prize: X=2142, Y=3558

Button A: X+61, Y+25
Button B: X+14, Y+58
Prize: X=7361, Y=4313

Button A: X+82, Y+43
Button B: X+12, Y+43
Prize: X=1774, Y=3096

Button A: X+83, Y+41
Button B: X+11, Y+39
Prize: X=15983, Y=15843

Button A: X+68, Y+30
Button B: X+14, Y+39
Prize: X=5810, Y=4193

Button A: X+56, Y+25
Button B: X+21, Y+40
Prize: X=9160, Y=13745

Button A: X+11, Y+44
Button B: X+64, Y+33
Prize: X=17901, Y=18767

Button A: X+48, Y+13
Button B: X+36, Y+65
Prize: X=9032, Y=11066

Button A: X+72, Y+25
Button B: X+12, Y+41
Prize: X=12560, Y=5088

Button A: X+82, Y+46
Button B: X+11, Y+48
Prize: X=6595, Y=3090

Button A: X+16, Y+60
Button B: X+77, Y+36
Prize: X=16811, Y=16532

Button A: X+88, Y+49
Button B: X+46, Y+81
Prize: X=3240, Y=3798

Button A: X+82, Y+33
Button B: X+52, Y+95
Prize: X=2760, Y=3407

Button A: X+37, Y+71
Button B: X+52, Y+11
Prize: X=8171, Y=3428

Button A: X+63, Y+23
Button B: X+13, Y+28
Prize: X=18763, Y=16893

Button A: X+66, Y+99
Button B: X+85, Y+13
Prize: X=11532, Y=9054

Button A: X+44, Y+75
Button B: X+35, Y+14
Prize: X=12765, Y=7417

Button A: X+65, Y+28
Button B: X+13, Y+38
Prize: X=14706, Y=4720

Button A: X+14, Y+71
Button B: X+77, Y+40
Prize: X=2072, Y=3498

Button A: X+79, Y+67
Button B: X+16, Y+81
Prize: X=7060, Y=10438

Button A: X+60, Y+24
Button B: X+22, Y+61
Prize: X=12672, Y=14484

Button A: X+25, Y+11
Button B: X+49, Y+71
Prize: X=4140, Y=4788

Button A: X+38, Y+16
Button B: X+43, Y+61
Prize: X=7545, Y=19375

Button A: X+84, Y+40
Button B: X+19, Y+96
Prize: X=5965, Y=5536

Button A: X+73, Y+26
Button B: X+12, Y+67
Prize: X=13737, Y=1939

Button A: X+34, Y+41
Button B: X+11, Y+97
Prize: X=2298, Y=6288

Button A: X+61, Y+24
Button B: X+12, Y+64
Prize: X=4802, Y=13712

Button A: X+13, Y+31
Button B: X+61, Y+20
Prize: X=6184, Y=16632

Button A: X+30, Y+12
Button B: X+58, Y+74
Prize: X=8310, Y=8380

Button A: X+11, Y+49
Button B: X+53, Y+20
Prize: X=5924, Y=17968

Button A: X+16, Y+47
Button B: X+37, Y+19
Prize: X=2190, Y=3425

Button A: X+15, Y+71
Button B: X+95, Y+58
Prize: X=10390, Y=10796

Button A: X+16, Y+63
Button B: X+78, Y+14
Prize: X=9150, Y=17035

Button A: X+88, Y+24
Button B: X+64, Y+76
Prize: X=7360, Y=4876

Button A: X+77, Y+53
Button B: X+38, Y+98
Prize: X=3127, Y=6463

Button A: X+12, Y+39
Button B: X+71, Y+37
Prize: X=15142, Y=12024

Button A: X+50, Y+11
Button B: X+21, Y+61
Prize: X=843, Y=2046

Button A: X+60, Y+33
Button B: X+28, Y+56
Prize: X=3096, Y=4681

Button A: X+37, Y+12
Button B: X+35, Y+71
Prize: X=929, Y=13048

Button A: X+64, Y+14
Button B: X+11, Y+38
Prize: X=337, Y=7186

Button A: X+16, Y+85
Button B: X+43, Y+26
Prize: X=4955, Y=9926

Button A: X+58, Y+63
Button B: X+15, Y+91
Prize: X=3982, Y=10003

Button A: X+59, Y+19
Button B: X+31, Y+67
Prize: X=14822, Y=6354

Button A: X+99, Y+97
Button B: X+25, Y+94
Prize: X=9667, Y=13503

Button A: X+15, Y+68
Button B: X+54, Y+22
Prize: X=4800, Y=5050

Button A: X+24, Y+49
Button B: X+59, Y+31
Prize: X=6645, Y=19358

Button A: X+51, Y+13
Button B: X+13, Y+68
Prize: X=9050, Y=17488

Button A: X+32, Y+12
Button B: X+39, Y+74
Prize: X=18255, Y=11730

Button A: X+39, Y+12
Button B: X+17, Y+28
Prize: X=3992, Y=1456

Button A: X+22, Y+95
Button B: X+53, Y+12
Prize: X=6047, Y=10281

Button A: X+19, Y+92
Button B: X+73, Y+74
Prize: X=2432, Y=6466

Button A: X+11, Y+27
Button B: X+45, Y+11
Prize: X=11911, Y=12225

Button A: X+16, Y+78
Button B: X+81, Y+21
Prize: X=5430, Y=19640

Button A: X+49, Y+18
Button B: X+36, Y+58
Prize: X=1846, Y=8732

Button A: X+26, Y+53
Button B: X+57, Y+30
Prize: X=2553, Y=1743

Button A: X+83, Y+25
Button B: X+52, Y+69
Prize: X=6651, Y=6697

Button A: X+51, Y+30
Button B: X+12, Y+25
Prize: X=11357, Y=13995

Button A: X+64, Y+84
Button B: X+56, Y+20
Prize: X=4376, Y=5048

Button A: X+31, Y+57
Button B: X+51, Y+17
Prize: X=6682, Y=5914

Button A: X+77, Y+20
Button B: X+89, Y+97
Prize: X=1850, Y=1441

Button A: X+24, Y+61
Button B: X+61, Y+23
Prize: X=16107, Y=12476

Button A: X+31, Y+65
Button B: X+42, Y+13
Prize: X=6535, Y=8362

Button A: X+52, Y+11
Button B: X+35, Y+63
Prize: X=7388, Y=5121

Button A: X+67, Y+11
Button B: X+63, Y+99
Prize: X=4175, Y=4675

Button A: X+43, Y+85
Button B: X+48, Y+11
Prize: X=16795, Y=16138

Button A: X+75, Y+12
Button B: X+56, Y+77
Prize: X=6374, Y=6395

Button A: X+12, Y+50
Button B: X+78, Y+30
Prize: X=3494, Y=3750

Button A: X+47, Y+37
Button B: X+24, Y+89
Prize: X=5854, Y=11549

Button A: X+65, Y+20
Button B: X+30, Y+46
Prize: X=2385, Y=1984

Button A: X+76, Y+25
Button B: X+15, Y+54
Prize: X=2142, Y=8934

Button A: X+92, Y+15
Button B: X+38, Y+78
Prize: X=6570, Y=7749

Button A: X+24, Y+80
Button B: X+70, Y+11
Prize: X=4154, Y=6261

Button A: X+38, Y+43
Button B: X+80, Y+12
Prize: X=8514, Y=2881

Button A: X+17, Y+34
Button B: X+53, Y+12
Prize: X=2274, Y=4774

Button A: X+16, Y+60
Button B: X+74, Y+25
Prize: X=7284, Y=4590

Button A: X+11, Y+30
Button B: X+50, Y+31
Prize: X=6247, Y=1497

Button A: X+16, Y+54
Button B: X+74, Y+17
Prize: X=15282, Y=12831

Button A: X+31, Y+60
Button B: X+43, Y+22
Prize: X=4686, Y=3192

Button A: X+72, Y+29
Button B: X+20, Y+56
Prize: X=696, Y=568

Button A: X+13, Y+43
Button B: X+79, Y+38
Prize: X=12295, Y=2599

Button A: X+16, Y+70
Button B: X+73, Y+13
Prize: X=19079, Y=12407

Button A: X+29, Y+61
Button B: X+63, Y+30
Prize: X=1067, Y=12482

Button A: X+55, Y+30
Button B: X+11, Y+23
Prize: X=6843, Y=4304

Button A: X+51, Y+21
Button B: X+29, Y+53
Prize: X=4813, Y=19321

Button A: X+12, Y+35
Button B: X+83, Y+48
Prize: X=5641, Y=5002

Button A: X+34, Y+15
Button B: X+18, Y+51
Prize: X=2022, Y=2313

Button A: X+96, Y+14
Button B: X+21, Y+93
Prize: X=5553, Y=1979

Button A: X+24, Y+51
Button B: X+70, Y+44
Prize: X=3858, Y=5275

Button A: X+51, Y+84
Button B: X+47, Y+16
Prize: X=1905, Y=1848

Button A: X+49, Y+16
Button B: X+22, Y+69
Prize: X=2403, Y=1341

Button A: X+68, Y+12
Button B: X+11, Y+84
Prize: X=14490, Y=11660

Button A: X+19, Y+48
Button B: X+40, Y+23
Prize: X=14088, Y=1658

Button A: X+94, Y+25
Button B: X+34, Y+77
Prize: X=8474, Y=3409

Button A: X+12, Y+91
Button B: X+57, Y+25
Prize: X=1482, Y=7166

Button A: X+57, Y+29
Button B: X+22, Y+42
Prize: X=7941, Y=6373

Button A: X+35, Y+75
Button B: X+76, Y+21
Prize: X=6669, Y=8049

Button A: X+68, Y+39
Button B: X+11, Y+37
Prize: X=816, Y=10769

Button A: X+88, Y+18
Button B: X+25, Y+63
Prize: X=3374, Y=3816

Button A: X+59, Y+99
Button B: X+99, Y+20
Prize: X=8385, Y=8225

Button A: X+72, Y+38
Button B: X+11, Y+73
Prize: X=5417, Y=7361

Button A: X+55, Y+25
Button B: X+25, Y+48
Prize: X=3490, Y=4444

Button A: X+51, Y+18
Button B: X+11, Y+60
Prize: X=8601, Y=7328

Button A: X+39, Y+80
Button B: X+49, Y+16
Prize: X=14134, Y=18048

Button A: X+11, Y+35
Button B: X+68, Y+16
Prize: X=13551, Y=18687

Button A: X+16, Y+38
Button B: X+57, Y+29
Prize: X=14197, Y=4793

Button A: X+93, Y+18
Button B: X+29, Y+40
Prize: X=4959, Y=3642

Button A: X+13, Y+45
Button B: X+64, Y+21
Prize: X=4904, Y=18254

Button A: X+14, Y+25
Button B: X+23, Y+11
Prize: X=19135, Y=10219

Button A: X+13, Y+42
Button B: X+57, Y+34
Prize: X=13251, Y=6998

Button A: X+33, Y+70
Button B: X+90, Y+31
Prize: X=8517, Y=6393

Button A: X+56, Y+23
Button B: X+14, Y+30
Prize: X=5380, Y=13846

Button A: X+21, Y+84
Button B: X+96, Y+46
Prize: X=2790, Y=7104

Button A: X+13, Y+80
Button B: X+72, Y+11
Prize: X=17096, Y=16347

Button A: X+81, Y+24
Button B: X+14, Y+61
Prize: X=17781, Y=12394

Button A: X+45, Y+17
Button B: X+36, Y+73
Prize: X=18548, Y=17739

Button A: X+21, Y+66
Button B: X+85, Y+11
Prize: X=2277, Y=4851

Button A: X+18, Y+99
Button B: X+74, Y+36
Prize: X=4656, Y=3348

Button A: X+65, Y+98
Button B: X+92, Y+31
Prize: X=8597, Y=6930

Button A: X+14, Y+57
Button B: X+81, Y+37
Prize: X=19567, Y=13477

Button A: X+54, Y+16
Button B: X+12, Y+73
Prize: X=3444, Y=3451

Button A: X+22, Y+89
Button B: X+26, Y+24
Prize: X=1790, Y=5293

Button A: X+47, Y+17
Button B: X+31, Y+57
Prize: X=11850, Y=17566

Button A: X+27, Y+96
Button B: X+97, Y+69
Prize: X=4487, Y=7953

Button A: X+41, Y+53
Button B: X+89, Y+17
Prize: X=11105, Y=5825

Button A: X+71, Y+49
Button B: X+11, Y+94
Prize: X=2508, Y=9162

Button A: X+53, Y+36
Button B: X+11, Y+38
Prize: X=10288, Y=2718

Button A: X+83, Y+29
Button B: X+13, Y+57
Prize: X=9843, Y=17143

Button A: X+18, Y+49
Button B: X+40, Y+17
Prize: X=8472, Y=10274

Button A: X+15, Y+55
Button B: X+75, Y+34
Prize: X=6215, Y=9604

Button A: X+30, Y+58
Button B: X+52, Y+19
Prize: X=5712, Y=17904

Button A: X+36, Y+84
Button B: X+46, Y+28
Prize: X=3040, Y=5824

Button A: X+26, Y+11
Button B: X+21, Y+32
Prize: X=10596, Y=7065

Button A: X+70, Y+31
Button B: X+11, Y+36
Prize: X=8534, Y=8904

Button A: X+95, Y+19
Button B: X+44, Y+75
Prize: X=3640, Y=1059

Button A: X+29, Y+67
Button B: X+68, Y+27
Prize: X=8255, Y=7883

Button A: X+84, Y+33
Button B: X+25, Y+84
Prize: X=4049, Y=4632

Button A: X+17, Y+78
Button B: X+51, Y+15
Prize: X=3621, Y=3036

Button A: X+82, Y+25
Button B: X+13, Y+67
Prize: X=4537, Y=14506

Button A: X+28, Y+16
Button B: X+23, Y+67
Prize: X=3341, Y=4225

Button A: X+62, Y+41
Button B: X+17, Y+36
Prize: X=18861, Y=723

Button A: X+70, Y+25
Button B: X+26, Y+73
Prize: X=16688, Y=16884

Button A: X+85, Y+92
Button B: X+48, Y+14
Prize: X=909, Y=870

Button A: X+29, Y+74
Button B: X+50, Y+11
Prize: X=18891, Y=8058

Button A: X+23, Y+63
Button B: X+50, Y+18
Prize: X=5056, Y=3024

Button A: X+29, Y+43
Button B: X+40, Y+19
Prize: X=10544, Y=716

Button A: X+46, Y+96
Button B: X+86, Y+46
Prize: X=9694, Y=7684

Button A: X+75, Y+70
Button B: X+49, Y+11
Prize: X=9283, Y=6337

Button A: X+25, Y+11
Button B: X+27, Y+52
Prize: X=638, Y=1043

Button A: X+15, Y+56
Button B: X+47, Y+15
Prize: X=18007, Y=16959

Button A: X+61, Y+25
Button B: X+24, Y+67
Prize: X=15079, Y=1237

Button A: X+56, Y+11
Button B: X+17, Y+40
Prize: X=17394, Y=17724

Button A: X+30, Y+68
Button B: X+33, Y+13
Prize: X=9923, Y=5571

Button A: X+61, Y+39
Button B: X+12, Y+43
Prize: X=15896, Y=13259

Button A: X+26, Y+51
Button B: X+39, Y+17
Prize: X=5723, Y=12807

Button A: X+59, Y+17
Button B: X+85, Y+93
Prize: X=8930, Y=6204

Button A: X+99, Y+42
Button B: X+30, Y+40
Prize: X=7461, Y=3738

Button A: X+65, Y+30
Button B: X+13, Y+29
Prize: X=3643, Y=11834

Button A: X+13, Y+93
Button B: X+86, Y+30
Prize: X=1633, Y=3489

Button A: X+70, Y+38
Button B: X+17, Y+37
Prize: X=8175, Y=1579

Button A: X+24, Y+47
Button B: X+87, Y+38
Prize: X=8892, Y=6294

Button A: X+25, Y+67
Button B: X+64, Y+13
Prize: X=4549, Y=5692

Button A: X+71, Y+39
Button B: X+22, Y+67
Prize: X=6883, Y=6252

Button A: X+32, Y+66
Button B: X+85, Y+26
Prize: X=3078, Y=4258

Button A: X+21, Y+64
Button B: X+31, Y+13
Prize: X=19329, Y=2923

Button A: X+34, Y+73
Button B: X+57, Y+20
Prize: X=14763, Y=4648

Button A: X+97, Y+29
Button B: X+82, Y+89
Prize: X=3610, Y=2240

Button A: X+65, Y+44
Button B: X+15, Y+34
Prize: X=6290, Y=9534

Button A: X+89, Y+46
Button B: X+22, Y+51
Prize: X=9045, Y=6379

Button A: X+52, Y+32
Button B: X+26, Y+54
Prize: X=19230, Y=13894

Button A: X+12, Y+75
Button B: X+79, Y+11
Prize: X=11466, Y=10336

Button A: X+12, Y+49
Button B: X+56, Y+14
Prize: X=13172, Y=7347

Button A: X+15, Y+44
Button B: X+69, Y+13
Prize: X=8261, Y=13915

Button A: X+63, Y+26
Button B: X+28, Y+61
Prize: X=15145, Y=2335

Button A: X+42, Y+14
Button B: X+21, Y+63
Prize: X=4410, Y=4270

Button A: X+95, Y+46
Button B: X+33, Y+75
Prize: X=4701, Y=7116

Button A: X+34, Y+11
Button B: X+21, Y+47
Prize: X=18003, Y=7794

Button A: X+19, Y+39
Button B: X+47, Y+19
Prize: X=8505, Y=1141

Button A: X+17, Y+66
Button B: X+64, Y+55
Prize: X=3070, Y=7469

Button A: X+50, Y+16
Button B: X+33, Y+59
Prize: X=2446, Y=8024

Button A: X+16, Y+57
Button B: X+47, Y+12
Prize: X=415, Y=18149

Button A: X+23, Y+48
Button B: X+52, Y+14
Prize: X=2972, Y=814

Button A: X+62, Y+26
Button B: X+15, Y+31
Prize: X=3279, Y=6843

Button A: X+31, Y+52
Button B: X+34, Y+17
Prize: X=1358, Y=15065

Button A: X+95, Y+93
Button B: X+26, Y+99
Prize: X=5782, Y=9117

Button A: X+49, Y+15
Button B: X+14, Y+39
Prize: X=18967, Y=16094

Button A: X+76, Y+32
Button B: X+65, Y+92
Prize: X=8236, Y=5536

Button A: X+37, Y+16
Button B: X+24, Y+64
Prize: X=1646, Y=3232

Button A: X+22, Y+43
Button B: X+28, Y+16
Prize: X=5438, Y=5495

Button A: X+86, Y+63
Button B: X+30, Y+77
Prize: X=8148, Y=10976

Button A: X+51, Y+65
Button B: X+73, Y+11
Prize: X=5137, Y=2035

Button A: X+25, Y+52
Button B: X+64, Y+37
Prize: X=13289, Y=4649

Button A: X+16, Y+70
Button B: X+69, Y+16
Prize: X=9895, Y=10980

Button A: X+14, Y+65
Button B: X+84, Y+32
Prize: X=10434, Y=2379

Button A: X+14, Y+61
Button B: X+86, Y+48
Prize: X=3052, Y=4150

Button A: X+32, Y+50
Button B: X+36, Y+18
Prize: X=4264, Y=4138

Button A: X+82, Y+38
Button B: X+14, Y+24
Prize: X=4188, Y=2256

Button A: X+61, Y+20
Button B: X+15, Y+38
Prize: X=7687, Y=18234

Button A: X+37, Y+14
Button B: X+61, Y+85
Prize: X=8114, Y=7776

Button A: X+90, Y+19
Button B: X+66, Y+75
Prize: X=9474, Y=3771

Button A: X+47, Y+67
Button B: X+43, Y+20
Prize: X=4175, Y=5417

Button A: X+56, Y+11
Button B: X+30, Y+75
Prize: X=10350, Y=16515

Button A: X+86, Y+17
Button B: X+38, Y+94
Prize: X=4804, Y=5620

Button A: X+34, Y+18
Button B: X+26, Y+57
Prize: X=17426, Y=13637

Button A: X+62, Y+21
Button B: X+30, Y+65
Prize: X=18144, Y=8552

Button A: X+17, Y+37
Button B: X+47, Y+23
Prize: X=9243, Y=18155

Button A: X+53, Y+90
Button B: X+91, Y+12
Prize: X=2433, Y=1566

Button A: X+14, Y+68
Button B: X+81, Y+20
Prize: X=12501, Y=11304

Button A: X+85, Y+28
Button B: X+13, Y+70
Prize: X=12080, Y=12422

Button A: X+79, Y+11
Button B: X+12, Y+76
Prize: X=6071, Y=1299

Button A: X+12, Y+92
Button B: X+99, Y+47
Prize: X=2640, Y=3152

Button A: X+30, Y+62
Button B: X+39, Y+12
Prize: X=8291, Y=4558

Button A: X+14, Y+42
Button B: X+34, Y+16
Prize: X=276, Y=11052

Button A: X+21, Y+85
Button B: X+23, Y+11
Prize: X=2544, Y=7588

Button A: X+83, Y+57
Button B: X+23, Y+86
Prize: X=8707, Y=10262

Button A: X+43, Y+32
Button B: X+21, Y+86
Prize: X=1304, Y=2026

Button A: X+97, Y+46
Button B: X+46, Y+92
Prize: X=5722, Y=8188

Button A: X+35, Y+65
Button B: X+54, Y+17
Prize: X=12560, Y=18125

Button A: X+72, Y+21
Button B: X+11, Y+42
Prize: X=2813, Y=7466

Button A: X+38, Y+19
Button B: X+28, Y+48
Prize: X=9660, Y=12772

Button A: X+11, Y+36
Button B: X+65, Y+30
Prize: X=16768, Y=1838

Button A: X+92, Y+35
Button B: X+35, Y+75
Prize: X=8778, Y=5190

Button A: X+45, Y+44
Button B: X+11, Y+58
Prize: X=4444, Y=6424

Button A: X+12, Y+80
Button B: X+52, Y+11
Prize: X=6020, Y=12049

Button A: X+12, Y+36
Button B: X+84, Y+55
Prize: X=632, Y=19349

Button A: X+60, Y+12
Button B: X+25, Y+56
Prize: X=17500, Y=15636

Button A: X+18, Y+36
Button B: X+76, Y+33
Prize: X=4856, Y=2334

Button A: X+85, Y+17
Button B: X+24, Y+39
Prize: X=975, Y=1221

Button A: X+94, Y+19
Button B: X+39, Y+84
Prize: X=6280, Y=2335

Button A: X+18, Y+65
Button B: X+63, Y+21
Prize: X=8576, Y=12683

Button A: X+16, Y+51
Button B: X+55, Y+26
Prize: X=8810, Y=13090

Button A: X+62, Y+22
Button B: X+20, Y+58
Prize: X=16494, Y=18220

Button A: X+19, Y+44
Button B: X+34, Y+20
Prize: X=14642, Y=9800

Button A: X+82, Y+30
Button B: X+29, Y+52
Prize: X=1463, Y=1570

Button A: X+85, Y+38
Button B: X+39, Y+60
Prize: X=5882, Y=5524

Button A: X+43, Y+15
Button B: X+12, Y+34
Prize: X=17651, Y=19411

Button A: X+35, Y+53
Button B: X+49, Y+24
Prize: X=11435, Y=4935

Button A: X+39, Y+22
Button B: X+16, Y+36
Prize: X=17783, Y=3722

Button A: X+13, Y+51
Button B: X+72, Y+35
Prize: X=12052, Y=508

Button A: X+75, Y+40
Button B: X+18, Y+55
Prize: X=4286, Y=9900

Button A: X+16, Y+98
Button B: X+82, Y+66
Prize: X=1776, Y=7388

Button A: X+93, Y+37
Button B: X+61, Y+79
Prize: X=6529, Y=4951

Button A: X+35, Y+65
Button B: X+47, Y+12
Prize: X=5647, Y=13037

Button A: X+59, Y+24
Button B: X+28, Y+68
Prize: X=18621, Y=14556

Button A: X+67, Y+45
Button B: X+14, Y+31
Prize: X=7578, Y=17547

Button A: X+42, Y+95
Button B: X+87, Y+22
Prize: X=6594, Y=10021

Button A: X+22, Y+60
Button B: X+59, Y+46
Prize: X=4156, Y=4440

Button A: X+12, Y+55
Button B: X+73, Y+21
Prize: X=2911, Y=7816

Button A: X+75, Y+90
Button B: X+34, Y+11
Prize: X=2185, Y=1430

Button A: X+43, Y+23
Button B: X+16, Y+95
Prize: X=1738, Y=3350

Button A: X+25, Y+40
Button B: X+44, Y+21
Prize: X=6285, Y=18135

Button A: X+44, Y+73
Button B: X+51, Y+20
Prize: X=14033, Y=4199

Button A: X+18, Y+38
Button B: X+27, Y+11
Prize: X=7127, Y=17935

Button A: X+14, Y+43
Button B: X+40, Y+18
Prize: X=3792, Y=4202

Button A: X+23, Y+60
Button B: X+34, Y+21
Prize: X=846, Y=1530

Button A: X+16, Y+70
Button B: X+43, Y+23
Prize: X=3982, Y=5202

Button A: X+61, Y+64
Button B: X+21, Y+90
Prize: X=6949, Y=13000

Button A: X+54, Y+31
Button B: X+16, Y+44
Prize: X=2470, Y=4415

Button A: X+99, Y+13
Button B: X+24, Y+40
Prize: X=9234, Y=2318

Button A: X+85, Y+50
Button B: X+11, Y+40
Prize: X=6489, Y=10360

Button A: X+51, Y+13
Button B: X+26, Y+76
Prize: X=7438, Y=19338

Button A: X+11, Y+68
Button B: X+32, Y+29
Prize: X=617, Y=2126

Button A: X+99, Y+80
Button B: X+95, Y+11
Prize: X=7340, Y=2906

Button A: X+26, Y+58
Button B: X+69, Y+32
Prize: X=9172, Y=7506

Button A: X+76, Y+44
Button B: X+38, Y+99
Prize: X=2698, Y=3795

Button A: X+36, Y+12
Button B: X+11, Y+49
Prize: X=6858, Y=17182

Button A: X+86, Y+29
Button B: X+15, Y+64
Prize: X=2037, Y=4636

Button A: X+14, Y+63
Button B: X+83, Y+30
Prize: X=1922, Y=1229

Button A: X+16, Y+29
Button B: X+57, Y+25
Prize: X=5755, Y=8140

Button A: X+47, Y+15
Button B: X+24, Y+40
Prize: X=5056, Y=13920

Button A: X+13, Y+50
Button B: X+88, Y+18
Prize: X=7126, Y=4014

Button A: X+13, Y+31
Button B: X+61, Y+31
Prize: X=2431, Y=1333

Button A: X+63, Y+23
Button B: X+29, Y+74
Prize: X=9863, Y=4263

Button A: X+16, Y+70
Button B: X+75, Y+36
Prize: X=6117, Y=3684

Button A: X+40, Y+29
Button B: X+11, Y+88
Prize: X=3643, Y=8483

Button A: X+12, Y+46
Button B: X+78, Y+29
Prize: X=7970, Y=2455

Button A: X+53, Y+15
Button B: X+11, Y+37
Prize: X=12738, Y=19550

Button A: X+66, Y+27
Button B: X+63, Y+89
Prize: X=11400, Y=10607

Button A: X+50, Y+37
Button B: X+17, Y+57
Prize: X=2857, Y=3047

Button A: X+42, Y+19
Button B: X+22, Y+35
Prize: X=1582, Y=9101

Button A: X+23, Y+44
Button B: X+60, Y+34
Prize: X=13006, Y=13498

Button A: X+37, Y+17
Button B: X+41, Y+61
Prize: X=3960, Y=3000

Button A: X+13, Y+47
Button B: X+68, Y+20
Prize: X=3872, Y=16008

Button A: X+17, Y+99
Button B: X+87, Y+73
Prize: X=2973, Y=3003

Button A: X+25, Y+14
Button B: X+23, Y+50
Prize: X=1746, Y=19292

Button A: X+15, Y+88
Button B: X+91, Y+98
Prize: X=9099, Y=10230

Button A: X+85, Y+13
Button B: X+20, Y+22
Prize: X=3575, Y=2081

Button A: X+45, Y+14
Button B: X+30, Y+59
Prize: X=18890, Y=7858

Button A: X+49, Y+18
Button B: X+23, Y+47
Prize: X=6869, Y=8829

Button A: X+14, Y+62
Button B: X+19, Y+18
Prize: X=2943, Y=6882`,q2=`p=0,4 v=3,-3
p=6,3 v=-1,-3
p=10,3 v=-1,2
p=2,0 v=2,-1
p=0,0 v=1,3
p=3,0 v=-2,-2
p=7,6 v=-1,-3
p=3,0 v=-1,-2
p=9,3 v=2,3
p=7,3 v=-1,2
p=2,4 v=2,-3
p=9,5 v=-3,-3`,_2=`p=91,23 v=98,-65
p=100,68 v=-43,14
p=33,76 v=55,34
p=83,21 v=14,67
p=59,43 v=-65,77
p=2,89 v=-53,61
p=22,83 v=44,85
p=54,82 v=13,72
p=72,70 v=-81,43
p=9,89 v=42,-76
p=80,10 v=-79,-19
p=65,86 v=-38,-35
p=67,41 v=-87,72
p=39,82 v=-20,-80
p=76,20 v=-4,98
p=44,22 v=56,63
p=91,13 v=-74,19
p=48,56 v=-15,69
p=61,30 v=99,74
p=10,38 v=55,80
p=24,61 v=59,-72
p=98,50 v=74,95
p=17,33 v=3,87
p=91,70 v=17,-7
p=79,92 v=31,-49
p=8,30 v=-73,-95
p=9,34 v=-83,-34
p=62,17 v=21,29
p=47,51 v=-56,38
p=57,64 v=86,96
p=92,1 v=18,43
p=16,72 v=89,-69
p=85,96 v=-23,-91
p=7,25 v=95,-50
p=95,71 v=30,-47
p=23,5 v=19,-91
p=79,40 v=87,73
p=12,84 v=63,6
p=30,79 v=-92,85
p=64,36 v=91,70
p=63,6 v=26,50
p=64,76 v=-41,-80
p=61,6 v=-10,-22
p=54,65 v=41,-68
p=95,101 v=-33,19
p=90,18 v=77,19
p=46,40 v=-91,66
p=11,10 v=-7,43
p=9,23 v=33,-48
p=72,59 v=-95,4
p=10,40 v=-98,-54
p=85,80 v=-3,82
p=56,45 v=-50,76
p=66,8 v=-55,67
p=34,101 v=75,-84
p=57,31 v=66,25
p=1,98 v=-78,71
p=95,62 v=-4,-85
p=68,34 v=6,4
p=64,83 v=-96,64
p=59,93 v=43,24
p=41,37 v=40,-37
p=53,71 v=-90,6
p=6,54 v=-38,-27
p=14,78 v=-98,-35
p=62,72 v=-19,-49
p=70,52 v=96,-83
p=8,71 v=-18,-4
p=75,67 v=-50,96
p=93,49 v=37,-30
p=37,67 v=-51,-10
p=41,19 v=-30,-23
p=10,13 v=79,-84
p=22,83 v=-26,-38
p=68,79 v=-85,-52
p=78,72 v=-65,-73
p=66,53 v=-60,-19
p=84,79 v=-99,-87
p=12,67 v=34,-10
p=77,17 v=67,-71
p=9,41 v=-93,-58
p=87,42 v=43,-23
p=88,90 v=27,16
p=11,28 v=-82,-19
p=44,68 v=56,58
p=1,89 v=-58,-87
p=6,68 v=85,-55
p=37,41 v=55,52
p=4,102 v=-47,-56
p=30,42 v=-77,-51
p=14,34 v=74,11
p=91,68 v=72,-28
p=28,6 v=-23,74
p=75,30 v=66,34
p=66,69 v=50,-79
p=92,86 v=-26,-82
p=67,32 v=82,80
p=44,80 v=-61,-28
p=86,55 v=22,-45
p=18,44 v=-11,56
p=41,76 v=25,5
p=81,1 v=80,-52
p=3,64 v=-83,-93
p=3,30 v=-83,1
p=100,86 v=-88,44
p=41,31 v=45,70
p=60,21 v=-65,-23
p=4,0 v=54,98
p=24,68 v=-98,-93
p=5,25 v=79,-81
p=39,44 v=26,-51
p=65,5 v=-49,81
p=50,2 v=-40,-25
p=96,100 v=-43,88
p=21,95 v=34,2
p=38,42 v=15,97
p=90,102 v=74,64
p=29,66 v=-58,-54
p=86,32 v=7,12
p=57,83 v=-50,-90
p=25,35 v=-77,11
p=97,102 v=47,-95
p=81,12 v=-54,-98
p=6,56 v=23,-51
p=80,102 v=-79,16
p=93,26 v=-83,83
p=32,86 v=23,-43
p=24,84 v=-52,-97
p=20,52 v=23,79
p=51,95 v=-96,88
p=23,89 v=69,3
p=42,23 v=-66,53
p=96,69 v=-28,65
p=23,50 v=99,41
p=97,77 v=94,-80
p=10,92 v=-63,19
p=70,32 v=92,1
p=7,66 v=-96,-67
p=77,14 v=-34,-37
p=99,46 v=41,25
p=61,39 v=-45,-27
p=76,80 v=-19,93
p=57,36 v=52,32
p=62,53 v=38,-67
p=83,11 v=39,-45
p=37,92 v=-46,23
p=81,39 v=-69,73
p=48,63 v=-5,-24
p=14,15 v=74,36
p=48,35 v=81,-30
p=31,50 v=-21,-10
p=87,93 v=-83,33
p=46,101 v=-55,35
p=79,96 v=-94,54
p=71,31 v=1,-23
p=14,51 v=44,76
p=42,20 v=-91,14
p=0,21 v=-48,87
p=61,24 v=-28,-26
p=48,27 v=-91,8
p=84,78 v=-49,-90
p=35,66 v=-77,13
p=81,30 v=52,39
p=66,76 v=85,5
p=19,45 v=80,-78
p=51,77 v=-55,-79
p=59,2 v=82,36
p=22,83 v=22,-65
p=82,17 v=52,15
p=84,61 v=-49,52
p=19,46 v=80,90
p=35,81 v=71,-13
p=94,24 v=78,91
p=19,33 v=8,61
p=47,25 v=69,-96
p=6,8 v=-2,-60
p=9,20 v=-22,-19
p=68,0 v=21,-5
p=30,15 v=-97,84
p=9,59 v=-19,-84
p=77,35 v=57,35
p=91,54 v=-13,-31
p=53,69 v=81,-69
p=27,41 v=-54,33
p=28,69 v=-67,65
p=23,58 v=60,-48
p=35,16 v=35,36
p=39,84 v=-84,-18
p=41,82 v=45,71
p=34,48 v=16,61
p=22,1 v=39,-87
p=42,85 v=-76,68
p=5,52 v=18,-34
p=19,58 v=-62,-34
p=60,4 v=-30,26
p=32,43 v=4,-92
p=10,38 v=-78,1
p=54,76 v=-46,6
p=9,93 v=-17,-39
p=93,27 v=-61,-89
p=39,89 v=93,6
p=23,69 v=8,55
p=23,8 v=-52,43
p=29,96 v=4,57
p=88,49 v=2,93
p=37,49 v=20,-36
p=48,84 v=85,82
p=62,101 v=6,16
p=79,82 v=-39,-4
p=10,71 v=-12,-4
p=35,42 v=-31,-61
p=2,95 v=-50,53
p=44,26 v=-97,-13
p=2,36 v=84,-89
p=3,64 v=-25,-39
p=35,23 v=4,67
p=38,102 v=-26,-53
p=11,70 v=-22,-4
p=41,42 v=-97,55
p=59,76 v=52,-82
p=39,23 v=29,53
p=7,46 v=-47,1
p=82,27 v=-84,32
p=56,20 v=26,-5
p=76,33 v=16,-58
p=87,46 v=-74,-68
p=63,3 v=97,2
p=71,15 v=-30,22
p=37,6 v=80,5
p=39,66 v=60,51
p=85,62 v=-40,94
p=26,97 v=41,-51
p=84,63 v=-86,69
p=23,59 v=-97,-96
p=93,32 v=77,-47
p=88,1 v=-23,64
p=14,36 v=-67,-49
p=40,94 v=-25,78
p=54,54 v=-47,1
p=96,31 v=93,90
p=91,21 v=-94,-57
p=88,23 v=25,21
p=12,64 v=16,-8
p=75,17 v=-73,70
p=32,9 v=38,-36
p=37,2 v=80,64
p=72,69 v=66,62
p=52,98 v=-23,42
p=10,74 v=36,38
p=33,6 v=-42,-87
p=83,55 v=22,-48
p=59,80 v=-80,76
p=1,32 v=-70,-30
p=34,49 v=33,-58
p=28,25 v=34,74
p=57,43 v=50,23
p=7,12 v=53,9
p=54,30 v=-95,-9
p=11,91 v=28,37
p=70,38 v=-9,-92
p=30,15 v=25,77
p=88,63 v=-98,39
p=40,15 v=-51,-19
p=100,26 v=28,-88
p=68,30 v=-90,66
p=44,80 v=-56,54
p=11,58 v=39,42
p=62,85 v=67,13
p=92,6 v=2,-88
p=71,98 v=-30,-5
p=99,33 v=-69,-13
p=90,84 v=-87,76
p=23,71 v=24,27
p=62,61 v=16,-35
p=42,57 v=-86,-34
p=28,66 v=-16,-7
p=88,94 v=-99,78
p=95,42 v=51,-82
p=82,50 v=52,4
p=1,69 v=-53,-21
p=37,21 v=91,-37
p=30,2 v=-32,-81
p=18,59 v=-7,-96
p=40,28 v=-56,94
p=45,66 v=50,-31
p=39,79 v=-41,-42
p=75,68 v=97,-42
p=27,22 v=-21,-33
p=6,15 v=-34,-68
p=28,94 v=-65,-7
p=48,25 v=-15,63
p=77,51 v=-85,-54
p=36,53 v=-48,-7
p=15,38 v=-73,-41
p=24,73 v=-23,2
p=17,15 v=-37,63
p=12,59 v=-33,57
p=45,66 v=-96,10
p=27,98 v=-67,71
p=88,66 v=-14,79
p=59,12 v=91,36
p=7,29 v=3,15
p=44,90 v=-76,47
p=77,45 v=67,-23
p=14,62 v=-47,-86
p=28,90 v=-77,-80
p=65,17 v=-80,70
p=63,47 v=62,-99
p=47,30 v=-71,97
p=7,47 v=-58,83
p=2,57 v=12,-3
p=57,71 v=70,47
p=56,26 v=94,55
p=66,97 v=-71,45
p=41,54 v=-30,-86
p=31,85 v=-26,47
p=63,55 v=-39,48
p=6,84 v=28,-66
p=64,62 v=-50,86
p=51,49 v=91,-82
p=19,95 v=44,30
p=54,98 v=96,-32
p=71,65 v=54,42
p=97,72 v=83,-21
p=71,19 v=-95,-9
p=59,45 v=51,83
p=85,18 v=37,-53
p=59,58 v=-60,86
p=96,63 v=68,-89
p=53,25 v=58,-22
p=95,72 v=52,7
p=10,0 v=-83,16
p=48,50 v=-16,-44
p=25,27 v=-30,45
p=79,33 v=73,44
p=40,3 v=-36,-70
p=68,85 v=-64,-72
p=86,73 v=-9,-72
p=25,53 v=50,90
p=64,41 v=68,-76
p=85,42 v=-69,-61
p=84,57 v=-10,-73
p=36,53 v=-89,22
p=24,55 v=54,-17
p=1,97 v=-43,93
p=29,1 v=95,-49
p=19,22 v=28,90
p=73,59 v=18,-7
p=65,36 v=41,48
p=22,50 v=-57,-72
p=61,36 v=11,56
p=18,96 v=-68,-1
p=88,18 v=-89,5
p=73,2 v=36,68
p=24,99 v=49,88
p=43,50 v=-5,-20
p=34,99 v=95,-56
p=9,2 v=48,-52
p=68,39 v=-55,-30
p=33,99 v=-42,12
p=80,26 v=52,-23
p=31,70 v=19,-7
p=75,27 v=23,-69
p=41,8 v=40,-22
p=2,36 v=-28,-89
p=13,92 v=49,-38
p=25,60 v=-82,96
p=7,33 v=-83,11
p=58,63 v=56,-65
p=62,85 v=-85,68
p=97,16 v=-18,-50
p=48,34 v=-47,43
p=43,82 v=-71,20
p=63,55 v=-60,-17
p=28,62 v=-75,-70
p=7,52 v=-12,47
p=72,73 v=66,-4
p=98,33 v=68,-64
p=87,51 v=-79,-89
p=98,63 v=-58,-72
p=57,22 v=-15,87
p=11,20 v=42,-63
p=72,10 v=66,-67
p=28,20 v=-87,1
p=22,5 v=-90,29
p=23,30 v=66,30
p=38,26 v=-21,32
p=90,87 v=-28,58
p=71,94 v=22,13
p=32,32 v=24,-71
p=9,30 v=69,29
p=34,64 v=-11,17
p=80,35 v=78,63
p=39,93 v=72,-8
p=63,94 v=-42,96
p=85,26 v=-69,-31
p=5,100 v=-22,5
p=96,37 v=99,-85
p=55,51 v=43,5
p=20,58 v=84,93
p=1,29 v=41,82
p=83,73 v=-79,-62
p=71,98 v=21,23
p=49,72 v=-87,-38
p=0,63 v=-50,62
p=69,50 v=68,34
p=94,37 v=48,38
p=5,28 v=-53,63
p=99,58 v=-15,44
p=1,86 v=-78,34
p=25,25 v=69,-91
p=15,13 v=-57,-19
p=68,59 v=92,-17
p=7,65 v=-58,72
p=90,88 v=-83,83
p=31,60 v=69,-40
p=83,60 v=52,-55
p=16,63 v=86,-5
p=21,19 v=-82,-85
p=4,74 v=-12,-1
p=51,76 v=-73,-63
p=71,67 v=26,41
p=3,86 v=-88,6
p=5,65 v=73,31
p=79,66 v=-44,-96
p=80,79 v=39,49
p=24,66 v=-25,64
p=0,1 v=2,-49
p=40,21 v=-25,97
p=97,47 v=-28,90
p=97,70 v=-61,-99
p=12,42 v=-38,-44
p=42,39 v=-86,42
p=17,28 v=94,-16
p=68,50 v=37,4
p=31,46 v=-81,-89
p=95,74 v=-23,-28
p=24,35 v=-82,-23
p=53,27 v=54,27
p=26,17 v=95,-57
p=77,92 v=37,54
p=99,33 v=68,-30
p=46,100 v=20,19
p=64,22 v=-95,43
p=9,94 v=-88,6
p=44,78 v=70,-52
p=100,67 v=38,-66
p=31,79 v=90,16
p=57,67 v=40,-86
p=79,48 v=67,-96
p=46,100 v=73,44
p=26,18 v=-7,80
p=60,84 v=21,-59
p=18,16 v=64,17
p=48,81 v=91,-35
p=54,9 v=-10,43
p=34,58 v=-16,31
p=33,0 v=-77,-63
p=90,1 v=-36,-27
p=53,68 v=71,34
p=37,60 v=75,-93
p=49,8 v=30,-40
p=10,102 v=94,19
p=78,54 v=60,-21
p=42,52 v=35,48
p=98,69 v=66,-32
p=89,98 v=-47,80
p=44,8 v=56,70
p=67,8 v=97,26
p=7,81 v=65,39
p=87,38 v=23,97
p=95,11 v=87,-5
p=23,13 v=14,80
p=98,13 v=84,34
p=1,57 v=-22,3
p=22,10 v=81,-8
p=75,14 v=-44,-26
p=7,75 v=3,-80
p=1,20 v=-58,84
p=20,12 v=79,-60
p=80,8 v=78,-36
p=41,66 v=64,-33
p=82,30 v=-59,63
p=95,50 v=53,-84
p=27,0 v=-87,40
p=58,18 v=-25,53
p=50,34 v=65,22
p=6,41 v=50,37
p=3,72 v=-56,-25
p=85,1 v=67,-15
p=63,52 v=34,-93
p=28,72 v=4,-35
p=59,102 v=-71,-39
p=26,16 v=24,49
p=10,97 v=-3,90
p=22,82 v=-32,88
p=47,25 v=-96,-16
p=58,102 v=72,-78
p=26,92 v=76,-72
p=28,22 v=34,-2`,L2=`##########
#..O..O.O#
#......O.#
#.OO..O.O#
#..O@..O.#
#O#..O...#
#O..O..O.#
#.OO.O.OO#
#....O...#
##########

<vv>^<v^>v>^vv^v>v<>v^v<v<^vv<<<^><<><>>v<vvv<>^v^>^<<<><<v<<<v^vv^v>^
vvv<<^>^v^^><<>>><>^<<><^vv^^<>vvv<>><^^v>^>vv<>v<<<<v<^v>^<^^>>>^<v<v
><>vv>v^v^<>><>>>><^^>vv>v<^^^>>v^v^<^^>v^^>v^<^v>v<>>v^v^<v>v^^<^^vv<
<<v<^>>^^^^>>>v^<>vvv^><v<<<>^^^vv^<vvv>^>v<^^^^v<>^>vvvv><>>v^<<^^^^^
^><^><>>><>^^<<^^v>>><^<v>^<vv>>v>>>^v><>^v><<<<v>>v<v<v>vvv>^<><<>^><
^>><>^v<><^vvv<^^<><v<<<<<><^v<<<><<<^^<v<^^^><^>>^<v^><<<^>>^v<v^v<v^
>^>>^v>vv>^<<^v<>><<><<v<<v><>v<^vv<<<>^^v^>^^>>><<^v>>v^v><^^>>^<>vv^
<><^^>^^^<><vvvvv^v<v<<>^v<v>v<<^><<><<><<<^^<<<^<<>><<><^^^>^^<>^>v<>
^^>vv<^v^v<vv>^<><v<^v>^^^>>>^^vvv^>vvv<>>>^<^>>>>>^<<^v>^vvv<>^<><<v>
v^^>>><<^^<>>^v^<v^vv<>v^<<>^<^v^v><^<<<><<^<v><v<>vv>>v><v^<vv<>v^<<^`,W2=`##################################################
#OO..OO..O....O##O....O..#...O..O..............OO#
#.OO.O.O.......O..O.....#O....#O#.......O.O...O.##
#OO..O..O..O......OO.....O#..OOO..O.....#....O...#
#...O......#O.O##.#..O.O#..O.O....O.#.#.OO#O.OO#O#
#...#...O..OO.....O.........OO.OO.O........O...#.#
#...#....O...O##O...O.....O....#.....O..O.O.O.OOO#
#.O...O..#.#OO.O.##...#...##O....O...#...#....O..#
##.###.O......#..O...O....#....O....#O.....O#..O.#
#...#O.O...#O..O.O............OO.O..O..#.##..O.OO#
#...OOO............#OO....O.O.O#.......O......O#.#
##............#O.....O......O..O.O.#.OO.O.O......#
#O...O..#...O....O..O...OO#.#OO#.........##.#O..##
#O...O..O#O..O#.#.O.O...O.O..OOO.O....O....O.O...#
#....#...#.O.O#O..O..OOO..O....O.....#...O...O.#.#
#..O...#...OO.O.O.OOO.OO..#..O..OO...O......O#..O#
#O.....O.O...O.O.#.O....O.....O...O....O...O.....#
#.O..O..O.#O..O...O.O..O..OO.OO#...O.O....#.#.O..#
#O..#O...O.O.....O#OO..O.......#.OO.OOOOOOO#..O..#
#O#O...O..#...O#O.O......O..OO...O.....O...O.....#
#O......O##....O#....O..#.OOOO.O.O..#OO........O.#
#O..OO....#.#........O....O..O#.OO.....#.O.OO....#
#.....O.....OO#OO....O.O...#.....OO.O...O.....O..#
#.....O.O....#......O..O..O...O.....O....O.....O.#
#.O.O#.......#O....O..OO@#...O#.O...OO...OO.#.O..#
#OO...OO..#.#...OO.....#....O.....OO....O#..#....#
#.O.#.O.......#.....O.O.......O...O....#...O.....#
#.OOO.O..#...O...O..#O......O..O.O##..#.##.O.....#
#O.O#..OO......OO..OO..O#..#O.O...#O#........#.OO#
#..O.O.....#...OOO..OO.#.....OO#.......#OOO..O..O#
#O.O..OO...O..O.O....OO...O.O...O..O......OO.....#
##...O....#O..OOO.O.#.OO.#......O#..O.#O...#.....#
#...O...O....O.#...O...........OO.OOO..O.O..#.#OO#
#.O.#....#.O#..#O..O....#..OO.O..O..O.#........O.#
#O#O...O.....O.O......#OOO.O#.......O....#O.#.#O##
#O.O#..O...OO....O......O.O.....O......O.OOO....O#
#....#OO...O.......#OO.O.O..#.O......#.....O..O..#
#....O.....OO....OOO..O.OO..#OO..O.....OOO.#.....#
##..OOO.#.O.........#..O..O..O..O.O.OOOO..#....O.#
#...OO....OOO......O.......O.......#........O.O..#
#O.O...#OOO....O.#...O...OO...O....OO.......#....#
#.......O.O..#...OOO..#..O..OO..O..O.OOOO.O..OO..#
#..O..O..O..O.##.OO...#..O#..O.#...OOO..O......O.#
#.....OO..OO...O.#.O..OOO..OOO....OO.........#.O.#
#..O.....O.O..O...O..##OO....O...O....#.O.O..#.OO#
#..OO.......O..O#.OOO.....O....O...#..O.O.....#O##
#...O..#...O..O........#...OO.O.O...#.O.....O....#
#O....O.O#...OO......OO.OO..O.......#..#.#..OO...#
#..#.#.....##.##O....O...O.......O..OO....O...OO.#
##################################################

^v^<>>vv<<<^v>v>>^<v<>vvv^<<>^><^^vv>^>>>>>>v^<v^>v^>>>^v>vv<^<<vv>^<^>v>v>>>v<^>^^^>^><v^<>v<<^^vv^>><>^v>><<>v<vvv^^^v^<^><<^^v>v^>v^^^^v>^^>^>v>>vv^^>>v^v<<^vvv<v<v<>v>v^^<^v<^v<<v^>>^>v^<v>^vvv><><<vv><<>^<>^v><>^>^^>v<>v^<>v^<^v^v><>>>^>vvv<^>^v<^<>vvvv><v><<^^>^><<>^vv>^>>^<<><v>><>^<^vv^<vvvv>^<<^^v<v<^^^<^>v>^><^>^<><<><vv^^<v^>^^<v<^>>><<^>v^>^v>^^<>v<>>v^<<<^v^<<^v>^<^^v^^^v>>^>^v^^v>>v>>vv<^^^<<^v<^^v<^^>^v<v<>>^^<<^<v<^>>>>^<>><<>^><^<vv>>>vv^>^><>v<^v><>><v>><v^<v^<<^^vv^>>>v^<>v<<^<^<^^<>^^>v^<^v^<>vv^^<>^v>^^<<v^>vv^>^<v<<vv>^<<>>v<<^^><>>>^<>^v><vvvvvv>>^v^^>v^^vvv^^v^<<v^><<^>>^^<vv>v><>>^<>^vv>v^vv<<v>^<^<^<<<<v<>v^>vvv^><v>^<>>v^<>^^<^vv^<>^v<>v^^v<v>^<>v<v>^><><v<>v<v<<v^><^<v>v>^>>^>^^<><<v^^vv<v^<v><>vv^^vv>><v<<^>v>><^v<^v>vv<v>>^vv>>^<^<>^v>v>^>v^<<v>vv<<^^<^<^<>>>>^^><<v>>^>^>v><v^<vvv^<v^v>vv^vv^vvvv<<<^v^vv><^<^>^^<v<<vv>^^vv<>>>^>^><>v>^<^<vv<<>v>vv<>>^vv<v<^<<^<<><v<v<<>>^<^>>>^>>^>v^<^^v<v^><vv><^>^v^>v>vv<^v<<v<<v^^<^vv^<vvv<<><>v>v^v>vv<^v<vv<^^>v^><<v>>
v<>>^^vv<>^v^<<^>><><>^vvvv^^><<<<^>v<>v>>>^>^>>>v>>>^^<>><<^^^^v<>><>v^>>vv^><<v<^><^^v^<v>v^>>>v><v><v>v<<v<>>v^<^<^vv>^v>vvv<^><><<>^^>v^v>vvv<^>>>>^^^^vv<>^vv>^<v<>^v>v^<>v<v<>>><v><vvvv^vv^^<<v>>>>v^vvvv^^><^^^<v^>><<^>^^><>^<v^<<v^v<^<^<vvv<<>>v>>^v>><^v<v<<^^><>>vv<><^<^^^>^v^^>v<^<^><<^v<v<v>v^>^<<<<>v^^^><>vv>^>v^>^>vvv>>><^>^<<><><>v>^<v>><>^^>v>^><^^vvv^^^>>vv<vv>vv><^<>>vvv^^><<>>vvvv^^><<>><>vv^^>v^^vv<><^>^>^<<><>>v^^<^^>>^<v>>^<^^v>^^^<v^v<<><v<v>><vvv>>v<>v>v^<<^v>>><>v><v<<v^v>^v^<^<>>v^vv>^<v><<<^v^>><^^>^^v><>^>^<>^<<^>v<^<<^v<v<>>v^^>^^>v<v>^v<<>^>v<><^<v>>v><v><^>vv<<v^^^^^<<><>>><v>>v>vvv<>v>^>^vvv><>^^^>v^<<<v>>v>^>>>>v^^v>v>>v^<^v<^v><<^v^>>^>^<<><<<<>^<v>^^>^^v^>><<^<^v>v>v<v>>>>v><>v<<v^^v>^>><^<^^v^>><>v^v^vv^^^><<^<>^vv>v<<>^v^^<>><>^^<v^v>v<v^<^>vvv><^^><^^>v<v^>^<<>^v<<<>>v<^<>^v^<^>vvvv<v>v>>^^vv^<^v><<>^^v>^<<>v^vv^<>><^^v^^^v^^<<<>v>^<>>>>vv^^>^>^v><<^^<>^^<<<<<<^^<^v<>^v><v^^>>vv^^vvv^v^>^v<>v>v^<v^v<^>^^v>^^v^vv<>v^><<v<<^<^^v<>^>^v<^vvvv>><>v<vvv>>><
>v<^<^<>v><^<<<<v>^^<<v<^>^>v<<^><v>v<<<^^<<v^v<^>^v<><>^^>^^<<v<<vvv^^^>^v<vv><v>>v>v>^<v^<^^><v>^v^<^v<v<v>^>^><><^<<^><v<>>^vv>^<>v><v^v<<^<v><v^<^>v^><<<><<<<>v^>>^>>>^<vvvv>v<>^v^<>>vv<^^v^v^^^>v>^>><<^>v^<^v^^v<<<<>v>v<>v>^vv><^^v>^^v^^<^v^<<^<><<vv>v<>>v^<<><>v<v>v<<><<^<<<<vvv><>vv^>^^v^^^>>vv>^v<<v^>^vv<^v<><v<vv<>v^^v<^^v>vv<>>^^>^><v<vvvv><^<<>vvvv<<>^vv<vv<>^^<^><>v^<><v>v<^>v^v<<^vv^>v^^<v^^<v<v^v<<^vv^vv^^v<vv>^<><<^>v^>><<<><^<><><^>>>><v><<><<vv>v^>v<<^vv^><v^^<v>v<>v<v>v^vv><v^><v>>^><<<<v>^<<vv^<>v><v<^>^^^><^^<><v^<^>^^<v><<^<^>v>v>^^^^^^v^^^vv>^>^><><<<vv<vvvv^><v>v^<>^^>^<^v^>vv^<<<^v<>^>v<^vv<vv<<>v>^^vv^v^^^vv><<<>>><^v^<<^<>v^v<^<^<^^>v<<>>^<v^^>><v<v^v^^>^><v<<><>vvv<<^^^>>>v<<<>^<^<v>v>><v<<<v<><v>>>>v<^v>><^<^^<>>vv><^^v>><>^<v^><v^^vv^>^^^<>v<^>^<<<^>v^<^^>^v>^<^v^vv^><^>vvv>><<<v>><^>^^<^^<v<><>v^vvv><^<<v^<>v^<v^v^>v^vv<^vv>>^v<^^^>v>vv>vvvvvvv<^<<vvv<vv<>^<v^>vv<vv^^^^^<>>^^<vvv^^^>vvv<v>^<v>^<^>v<>^v>^<<<^>v>^<<>vvvvv><<^v>>>^v>^^<>><>>v^<>^^^><<vv<v<<^^
v>v>v<<^>v^^>>>v><v><v>vv<^^<^>vv>v>><v^<<<v<<vv<>vv^<>v^v^v<vv^><>v>>^^v><<^^<^^><^v^vv><<^v><<<<<<^><^^^<^>><^v>><<<>^vv<^^v>^v>^v<v<<^<^<v^^><v<vv>>^>^>vv>>^>^<^vv^vv><<<^>^<>^><<v>^<vv^<>^<^<<>^^><<>>>v><v<<<v^<<><^^><<v<>^^^^>v>>^>>^v>vvvvv^v^vv<v>^^^<v^><v^>^<v>><^><^vv^v><^^<<v^<v>^>>>><v<>v<>v^^^v><^^v^^^><<^^>^>>^^v<^>^<v^v>>>>vv^^v>v^^><>v^^^>^^^>>>^>^<^vv>v><v>^^>>>^<^>vv<<vvv^v>v><>^<>^<vv^><vv>v^^^^vv<^><^<<<<>v<^>vvv<v^^v<vv^<v<>>^<<>v<v>>>v<<v^<vv<^>>^v^>vv<><>vv>v^^v>>v>^<>^<v>>^<>><v>>^<<><^>^>><^^^v><v^<>^^^<^v<><^^>^<v^<^v>^vv<^^v^^<><^<^vv^vv<^^vv<v^<v^>v<>vv^>^>vv><vv<<><<<>><v>><^<<<<v<>v<v^vv^<>v<^^<<^>>vv>v><>vv^<^<v^>>^v>>vv>^^><<>^>vvv<^>^>^<v><^^>^>^<><v>^<<>>v>v>vvv>^^^>>>^><^<>>>>><vv<^<>v>v><vvv<vv>^><<v><^^<vv^<v^>vvv<<><>v<>><v^><v<<vv<>^^v<v<v^><^<vvv>vv^><>vv>>>>v<><<v>>v^^<<>>>>v^><<v>><^v^<v^v<v>^v^<^^>v><<<vv^<^^v<<vv<v<^>v^<>v^<v>v<<vv^>><>^^>^vv^><v^^<vvv^vv>><^^v<><>^<>>><^<>v<>>^^<^<v<<<><>v^^vv>>>v^<v<^^^<v>>v<v<<vv<>><vv^v^>>>vv^^<^^>><>^v<>^v
>^><>^vvv<^vv<>v^>^>^<^v>><>^vv^<vvv>>v<v<v^<^v>^<vv^^<v^^^^^^v<v><v>^^^^<>v<>v<<><>>><>>v<^<>>v^vvv<<vv^^^^<>>^>v<<v<^>>>vvv>>^v<^v<<vv^<v^v^<v<vv>v>^^>v<>^>v>>^>vv><<>v<v>>>v<^>^v^v^><>^v^v>^^>vvvvv>^vv^v>>v>v^v>>>vvvvv>>v^>^>^vv<>vvvv>>^^<<v>^>>v>v>^v<v<<v<<^^>^vv><>^v^<^^^<vv>^<vv><^<<<v<v><<<^<^v^<^<<^<v>^v^^<><>>>^>>^vv>^>v><v^<v<<<>>v^vv^>v>>^vvv<<>>^^^>vvv>>^^><v>^>><<>v^<>^>^<^^^v>>><<^v>>^><>>vv<>v<><<<<vvv^^<<^^<^v<><v^^^>v>>^^<v<>^<^<<v>>>v<vv>>^<>^v<^^^><<^<<^<<>vv<><v^^v><<<<v>v<<vvvvv^v><v^^v^>v<^<>^>^<^v<>><<^^^^>>^^>^<><v<<v^vv>^>v>^^^>v^<<^v<v>vv^><><v<^^v^<><>v<v>^^<v>><<>><^^<^^<<v>v<v^<^>><<<v<<><v><><v>vv<^>v<<^<^^<<<v>><<v>^>><^><v><>v><>v<<>^v>>^<v>v<<v<^^>><<vvvv^<v<v^<^>v<<>vv>^<>^<>><vv<^<>><v>^<<<v>>>vv<>^v>v>^v^>>vv<vv>>v^<><>^<<^<><<vv^<<><>v>^<<>^^^>>v><v><>><^v><<vv<<v>^<^vv^v><>>v^^^^vv><>^>>>^^><v><v><^v^vv^v<>>^<vv^v><<<^^>v<v^<^>>><v<>vv>>^<v<^vv<>>>v>><^v>v<><><^<<v>vv<^<>>>v^><<>^vv^^><>v^>v<>vv<v>^>><<><^>^^>vvv><<vv<v^v^^^>v^<^v>^v>^<<<>^vv<<<v><
<<^^>^v>v^v^vv><>^>><<>v>>><<<><>>vv^<<>>>^^v^vvv>v>v^^v^^vvv<>^<v^^vv<^v^>v>>vv>v>><^><<<<<<>>v<>>^^><<<>^^v<<<^<v^^>><<^v><<v><^vv<vv>v>^^<v^>v>>><v>^<^<v^^<><v<>>^^<>>v>^<<vv>^>v<>>v>^<v<<<<<>vv^v<>>^^vv<^<v^<^vv<^vv>><vv><^<<>v^v^^><v^vv<<<v^<v><><v><^>><>><<^^^v<><<>v^<^vv^>v^^<^<^^^<vvvv<^<^v^<>><><<<vvv><>^<^v>^>v^vvv<^^v<>><<^^^<v>vv>>vvv<v>^^v<v^^v^>>^^<<v>><>v<vv^<>v^>v>vvv<^^>^><^>^v<v^vv<><>v>>v<<v>>^v>>vv^>>^^<<<>v^^>^v>>>^<>v<><<^<v^>>>vv<^>vv>v><<^>^>>>>><v<><v>v<<>v<^^^<<vv^<<v^^>>^^>v><<<>>^<>v<vv^^vv^v^vv^^<<v>v><><^><^v>^<v^v>v^>^^>^^^<v<>>v<<^^><<<^>v>v>>^<><^>vv>^v^<>v^^^v>v^vv><<<><<><<v^^v^>>>^><>>>v><<<<^<>><v^^^<>><v>^v^vv^v>^v<^<<vv^<v^v<^<vv<v^<^^><^<<>>><><v^^^v>^^v<><<<^>^<^>v<^vv>>>><<v^^><>v<v<<v^<^>><>vv^>^vvv<^^<^vv>^vv^v<<<><>v<>v<^^^v^<^><^<^<><>>^<>v<>>>^v^>>v^v><^<v<v<v><^>>v>v^v>^<^><<<>^<<>v^v^<v^v^vv>^^<v^<<<<<<^<^v^v<<^<>vv<>^<^<^<^><^^<^><^v><^<vv>^v^>v<vv<>v^^<<<>^<^<v^<^<^>v<^><^<>>vv>>vv<><^<^>>^^v^^><>>><<<>v>v^<<<<v>>v^<v>v>>^v^<^vvvv^^v><
v<^v>v>^v^^<^>v^<>v^>^>v<<vvv^^<v<v^^^vv^>v>>^^>><^v<<>v<>><^v<<^<^<vvvv<>v<<<<<v^v<<vvvvvvv<>v>><>^^^vvv^><^<v<>^>vv>v>>^<><>^v<^<^vvvv<v<<><>v>^><<v^v>^>vvvv<<>>v^v>><v<v>v>>>v<>>^>^v<<^><<^<<>^<^<v^<<>v<<vv<<v><v^v>^v<<<>vv>vv^^><vvv<^<>^<<^>^^<<^>^<>>v^^>vv^<<>v<v>>v^^vv<^><^<vv>>v><vv^>^<v^v^<^vv<<^<v<<v>^>^v>>v^v<<vv^<>vvv>^v<>^^<^<^<^<^<vv^>>v<^v>^v^<>^^<>>><<>><<<^>^^<v><<<v^v^<<>^<<v<v<^>>>^vv<<><^><^v<<^<^^^<>v>^v<>v<^<^<<v<v<v<^><<>><<^vvv<^<<^<^^>v^^^vv>><>^^>v>v<v<><^vv<v^^v>^<<><><^<v<^^>>><<<<v>^v><^>>^<<^^<^>^v^>>><^>^^>v<>v<><<^^>^>^<v><vvv>^>>^^>>>>^><^^>vv<>^^>>>v<<<vv<^<<v^vv<v<<^^v<^v<v><<v><><><v^>^v<vv>v><v^<>><<>^>^<v^>^v>vvv>^v><vv^v^v<v>^>^vv<v<^^<<<^v^v>^^>^^^<v^v<^v<vv><<>^v>^><v^>v^vvv<^>vv>^<^<^vv^<>>vv>v>>^<v<v<<>^>>v<>><>^<<^^^vv<<<^v^^v^<^><v^v<>><^><<^><<^<>v^v^><v^^>v^><>^>><v>><<^v>^<>vv>>v^<<<v^<<v^v^^^<^<v<><>v<^vv<>vv<v^<>^><^<>>>^v^^>>v<>^^v>>>vv^<<>vv^<^^<<^<v><^^>vv^vv^<>^v<<>^<>^>>vv^vv^^>>v^v><<<>>>^><vv^>v<>v^^><<v^>v<<>^>>^>v>^<^>v^v^><^^v>
^>vv^<><^^<>vvvvv<^<v^^v^<vv<^^^<<<>><^v><<<><<v<<<^^<vv>^v^^>^v^<>v<^>v^<<<^v^^^<v<v<v^<<<^v<<<<^^<^v>^>v^v<^^v>>>v^<<^<<><>^<>^<v<^<v<^^<v><v<v^>vvvvv>><^>v^^<vv<^^^>>^<><>^^<>vv>v<vv^><>^v^^v<^v^<^^<^<vvv<v>v>v>>^<^>>vv^<^><><>^^v^v^>^<>><vv>>v^vvv>^>^v>v>v^^<^>>v^v><<>><^<v><<>^><^<vv<<v^><^v<<><><<^>><v^<^<v<><<^v>vv<v>^>v<vvvv>>^>v<^^<>vv^<>v>>><^v^>>vv>>^v^vv^>>>>^vv>v>><<>><v^<>v><v^><^^>>>><^<<<v^<v>><v^v^^<^<^>><^vv><><<<vv<v><v^>vv>v>>>v^<>^><v<<<^<v>vv^^>^<<v<<<^^<<>^v<><<>vv<^>v<^^v<v>v^<v^vv<^vv<^^v^>v><^vv<v<><v>>v>v>^>^<v^<v>v>^^<v><^^<v^v^>>^<^^^^<vv<v><v<<>v^^>^<^^<<>v>vv<<^^<>^v>>>^<<^<v>>v>>^v<<><^<<<>^>>^>>^>v>^>v<><vv<^^^^vv>^v><><<vvv>vvvv^v>^><v^<^<v^>v^>><<v<v<^^><vvv^>>>v<>v<v^<vvvv^>^v>>^<v<^^><vv<>v^^><v^>^>v>^><>>>^>^>><^<v>>vv<>vv>^vv<>><><>^v^<<<<vv^v<<^><<vv<v<^>>>v<v<>><vv><<v^^v^<vv<>>v<>^v^>^^<<v<v<^<^>v^>v>^><^v>^^v>^^^<v><^vv<v<v>>^>v>^>^<<>v<vv>^v^<<<>v>^^v^>^vvv<<vvv>><^v<v<><^^>><v^v<vv^<v>v<vv^v<<v^>^^>><<>><v<^>vvv><v^^><^>>^v>v^v>>>^<^<<<v^^^v
v<<v^<>vv><<v<<v^^>>v>^><<v^><<><>>vv<>>^<<<v>^<v>>^><<>>^>^^<vv>v^>v^<>>>^<v<<<v^<<^v^<>^<v^<>v<<<<<<>v<>><<>vv^^<>vvv^>^v>^<v^v^<v<^<>v^v^^^><v>^^><>^^v^^<^v<v^vv<^v>>^<vv<<v><v><v<><^^>><^v<>v^>v^^>>^^<^>><^v>vv<<^v>v^^<v^vv^>>^>^<^>><v<<v<<><^>>v>>^<^>>^>>>^^^>v<>^>>v<>><<^vvv><v^>>^^vvvv<v<>vv>>>v><<^v^<<vvv^><<<<v>^<<><>v><v<v^v>>^^>>v>^<<<v^^<<v>>v><>v<><^vv>^^>>v^^><^^>>>^>vv>^<>^^<^^v<<<<<^^v^v<>>^^v>><>>v><^v><<<<^<><>><><vv<^<<^<>>^<><<^>v>v<>^<<^>^<^^^>^v<<vv^<>>>v^<<^^>v>^vv>^^<vv<v^^>v><vvvv^^^v<>vv<v<^v^<^<^vv>^<v<><<<>^><v>v^^v>><<^v<^^>vv<v^>^>v^^><v<vv^^vv<^v>^><^^vv^<^^^vvv^v<<><vvv^<v>><<>>>>v>^v^vv<v>^>v>v<>v>^>^<^>^><>v^^<^<^<vvv^>^v<>><<<<^><><>^v^v^vvvv<<<<v<^^><vv^<^<^<^^vvv^>v^v>>^>v>^^^<^v<<<><>v>>v><>vv>^v>^^<<>^<<<>^><>>v^v<v><^^<<^^<>>><vv>v>^<<^<>>^vv^^^>^vv>>>v^>^>^<v^v<<<^<<v>^vv>vv^^v><<<<v><<v^vv^<><^<>vv<<v>>>v<v<<^<^^^v^v<<^>^<^>vv>^^<><v^v^<<^^<<>>><><<v<<><vv^vv>^v<>>v^^<>>^>>>v<^<^><v^v^>v>>^>>^v^^vv^<v>^><v>vvv>v><>^><<v>v^><><v^v<^v>v<v>>v>v>>^
vv<<^v><<v^<^v<>>v<v^<^v^>v^^vvv^>vv>>^^>^<^>^^^v^v><vv<v^<<v^^>v^>^<>><^^v<<vv>v^<v>v^<^v^<<^^><v<>v^>^^<<^>>>^<v^>>vv<^^^^^^^<^<v^^>v^<^vv<^>vv<^vv>^<^<><^<<>>v><<>^<<^v^><<v^v^^>v^^>^>><v>v>^^<>><^>^^>^v^v<v>>vvv^>>^v^>><>><<^vvv<^^>v^<<v><>><>>^v^>^<<^<<^v<v>v<^^v>><v^<v<<v^<^v^v>^>v^<>>>vv^v^^vv^^<^vv<><<>v>>>^>^^<<^<><>><^>>>^v^<><>^^>>>><v<<vv^v<<><^>v>v>^<<v<vv<v<>vv^^<v>^^<>^><v>v^>^><^><^^^^v^v<v^><v>vvvv<><<<><v^^^^^v<<v>>>vv<v<>>^<>><<<v<^>^>>^<<<<^>^<^^v>><^v>>v^v><<^<^<<v>>>>^v^v<v^v<vv^^v<<>v>^>v<<v>^^v><><>^<v^><<<<>^^^^<<vv^^v<^<v^<<v^>^vvv<>>v>>>>v><^>v>^v>v<>>><>v^<<<<>v>^vv<^<<<>^>><^>v>v<<>>><^v><<<>v^v<v^><>^^><<<v^^>^v^^<vvv<v<<>v<^v^^^^<^v<<v<<vv<^<^>vvv><><^v>><><vv^<^^^<<v>>^v>>^<vvvv^^^>>^v>^v^<v^>^<^^^^^^<>v<>v>^<>v^v>^<^v>^<v<<^>vvvvv>^vvv<<>^v>>v>v^v<<v<^^>v^v<vv>^>vv<^>>vv^^>v^>v><v<<>>>^<>vv<>^^^v^<v><>^v<<>>v>vv<vv^^<>vv<<<>v>>^^^^v>^^>>><<^^>v>>^v<v>^<v<v<>v>><v>v>><>^^>>^<<v>^<<<vvv>vvv<>^^v><<<<<>^<vv^vv^>v^v^<>>^^>vv<><<<<v^<^vv^^^^v<v<>>^<<<>>>>^v>
v<v^v^><vv<^v<v<^<v^vvvv^^v>^^<><vv<>>^vvv^v>^v>^vvv>>^<v^>^^>^^<>v>^^v>v^^vv><>>v<<><<<>^<^v>>^^^v><>^<^<<<^<^<v<<>><<^v^<<<^>>><v<><>^>>v<>>v>v<v><<<<^>^<^v>^<>^<v>v>v^^^><^>>><<v^><^<<v<v^<v<^v<<^>>>>vv^<>>>v<v<>^<^>v^<v^>vv<^><><v^^v<><^<<<><^v^>>^<^v^<><^>v^>><<v^<><^v>^<<vv>v<><<^^<^<<v>^^><^v><<>^<<>^>v<>v>v^<<^v^v><>>>v^v<v><^^<>><^v^<vv^<vv^<<><>v>^<v<>^<>>v^^<^<<>v<^^<>^^^v>^^v^^^<><v^v>v>>>><>v<v>>v><<^<>v^vv>v^<v<vv<v^^^^<^v^>v><^><^>>v<>^>^^^^^<<><^^v>v<><<vvv<^>^<>vv>v<>><^^<><>><v<v^v^<^^v<vv<<v<<<vv<v><v>v^>v^^<vv^^v<vvv>><vvvv>>v<v<<<><<v^^v<>^>^v>^^^>>^v^^>><<<v^><>^<v<^^^>>vvvv^><<^^^<>>^<v^vvvv^v^v<><<v<^^^vvv><>^<vv<>v<v<^v>vv<vv>>>>>^^vv^<^<<<>^><vv<^vvv>^^>><<<^><^v<v>v><>v<v<v^^v>^^<<v<^^^v<v<^>>^<><v^v<><<<><vv^^^^v><>vvv<v>>vv><vvv^<<^>v>v>>v<>^v^>vv>^>>v>^>>><><<>>^^<>>^><^<<^>^>vvv>>^vvv<>v><v>^vv<<>v<<>>^v<<^>>v>><>^^>v^^<^>>v><>v^>v<^<>>vv<^^>><vv<<v<>^^>vv^>^<v<v>vv<v^^^<>^><^^^>^v>^v<v<><><^<^<^<^v>v>^^><v>^>>>^v^v<>vv<v<>^^^^v>>v^>>><^>>v<<<^^<^>><v^v^v
<<v>><v^v^^<<><v^<v<<><>vv^^<^v>^v>v><>v<><<v>^^^^^>>><<vv^v^<>vvvv><v>v>v<>>v^>^v<^v>>v<^<vv^v<>^<^^^>v^v^>>^>^vv^^^vv>^v>><>^><><^>v^^>v<>>^v<v^v^^>>^^>>v>^>>v^>^^^>^v<><^v<v><<^>vv<<><vv<v^v<^v><v^^^<<<v^<<>^>^<v<vv<<>^>v<<vv><^>vv<<^vv<^<>>>^<>>v>v>>><^v^<v<<<^^v^v^>^^<v<^<>v^^>vv^v^<^^>><^v<<>><><v^^><^^<<>>>^><^>v^<v^^><<<^<<v>v<>>><^>><<>>v^<^vv<><v>v^v<^><<v>v>><<^><><^^>><<>^^>v<^<vvv<vvv^^<v^>>^v<>v^vv^^v^vv^vv>v<^>v^<v<vv<<vv<^^>v^><^v<^^><vv>^v<v>>>>v^>>vv><v<v<v<^v>v><^><<<<<vv>v<<<>v>v<v><>^<v<^>vvv<<v><>^^<^<^<<v^v^^v<><^><v>^<^<^v>^<>>><v><v>v>v^<v>><vv>^>><^v>v<^^<><v>><<><^<<<>^vv>><<<v<^v^<v^>^<v<>^<>^^<v><^vv>><<><>v>v>>>>^<>v<vvv>vv^^^v^>>v><<^>>><>^v^v<>><<<>v>>><<<<><v>><^v><><^v<^><<<^vv<^vvv^<<<vvvvvvv>>vvv^<<<v^>^<<^<>v^<><<>>^<v<<<^><v^<>>>>^>v>^>^><<<^vv><^<<<^^<>>v^v<v^v><v>^v<^><^vvv<<^^^^vv>><vv<<><^>vv<v<^<^v<<^<v<v^<><v>>vvvv<^^<<^v<>^>^^v^v>v^^<v>>><>vv<v^v<^><><>^^^^^v^>^vv<^<^<v>^^>^<v<v<><>vv^<v^v^vvv>v^^v<<<v^v<v^><v^v<<<>^>v^><<v>>>vv>v^>><>^v>>v^
<>^>><v^>v>v<<>^v>^>><<>^>v>^<v>v>v>v<v^v><<<<v<>>^^v^>v><<^^v<^^>><^vv><<^<v^><v>>v^<v^v<^>v^>^v^>v^v^>>>^<><<<>^>>>v<vvvv<<>>vvv<v><^^<<><^vvvvvv<<^v>^^^v^^>vvv>>v>^v^vvv^><>><^<^v<<>^^>vv<<<^<><^^v<^><>v^v<><>v>vv<v^>v>^^>^v<>><>vvv<^<v><<^>><^v^vvv><^><<^<^<v^v<v<<^vv<>v^^><v>>>>v^v<<><^><v^<<>v^^>^^<>^<>^^v<^<>>v>v>^<<v^^^v^>^^<<<vv>^^>>vv^^<>>^^<>v>>^>^v>^>v>v>>vv<>v^v>v^v>><<vv><>^^<><>^><v<<<v>v^<<<v>>>>vv^vv><^^>>v<v^<vv<^<>>>vv^<^<>^vv>vv<>v<^>^>vv^v<<<<>^>vv<<^v^v><^>vv^<><>^><v<>v<vvv^>v^^v<v^^v^^<<v<<vv>><v>>>^vv>>^>vv^><v^^^<vv><vv^^<^><vv^^<>><<<<<v<<v<v^>^<v><^<^^>v<<>v<<vv^<>v><<<>^<vvv>><^<^>^v><>>>>>^<<^<>v>^<^<<v><v>v<>^v<<^><<<^^>>vv>^<v><<><>v^<^<><><vvv><^^^<vvv>v>^v><v^^v^v<<^<^>>v^^>vv<^><><><>^^>^v>v<v^^<>^v^<><^<>>^^<>v<^v^^>^v<<<v<<v>v<>^<v>>^>v^vv<^^<v^>>^>><^><^v<v>v<>^v>^v<v>^<<<>>v>v<<>v^<<vv<^><^^^vv>^<<vv<^<v><v><^^^v<v^<<v<^^<>>^<<v>^<><^<vv^v<<<><<v>v>v><v>v<^^v<<v<<v^v^<<vv^vv^v>^^<<<<<vv^vv<^^><^^v><>v<^^^>>vvv<><^>^v<v<<^v<<^>^>^v>^^v>>vv>>v^><>^>
v^><v^v<<<v<v<<<<<<v>^>>^><<v><><>v<<v>>><>v>^>^^<><<^<^>^^^^<<^vv<^<vvvv>^^vv^><<>>>vvv<>>^v>vv>>^^<vvv>v<<^<^>v<v^><>^<>^^vv^v><v<^>^<v<vv^>^^><>>>v^v<<><vv<<^^><>v^<^>v^^><<vv>v><>>^v>v<v>^<v^v^^<^<v<^^^<^<>v^<v<<>v>v^>v>v^>>^^^^^>^<<vvv<>^>^^vv<^^>>v^v<^><>vvv^^>^<v<<<>^<^^>>>v>>v<<^>v>><>^<>^v>^<<^<<>>>v^<>^<^v<<v^^vv<v><^^v><^vvv<v^<>><v<v^v<vv^^<^v^<v<>>>>>vvv^^^<vv^<^^>><^<><>v^><^<<v^v>^^<>>v^>^v>^>v<vv^>v<>^v<>><vvv><>^><^v<v^v^^><^<>^^v^>>>v^^vv>v^^<^>>^^^<>v^><<>^^<v><v^<<><><^v>^vv<<^<^<v>^<vv<<^^<>^v<vvv<>><v<>^^>>>^^><v><^vv<^v<<<<^vvvv^v<^v<>^vv^<^<<^<>v<v^v^^>^v^>>^>^>v<<^^vvv><><vv^v>v<v<<v><>>v^<>v^<v>v<<^<<^^>^v^^v<^<^vv^v>v^v<v<^>v<>v^^<^<^vv^^<^<^><v>>><>^<<v>^v^>^>v<>^><v<>^^v<<^<^^><^v>vv^<^<v>>>v>><vv^^>^^^>>><>v<<<^<^<vv^<>^v<^>>^>v^<<<<v^v>^<v<v^<>^<^v^>^>><<<v^vv^^^v<^>^>^<^^<v<^^^vv<>>>^>vv^<>>^^<><^^vv<>><>^><>^vv><^v>v^>vv>v^>v<^v>v^v>>v^vvvvvvv^<><vvvv^>v^>^^>v>^vvv^>v>v<><<<>><v><<<v<^^<>v^<>>^<<^^v>v>^v>v^^>^>^^^^^>v^<>^vvv><>vvv<<>^>v>vv^vv^v^>>^v><v^
>v>v>vv^><^<><v^<^^>v<>^><^>v^<v^<^^^<^vv<v<>>>><<v><vvvvv<>v^>vv<v^^vv^v<>v^<>><<^v<>vvv^v>^<v>^>v<^^>><>^<<>v<^><v<^><<v>^v^<<^v<<<><^<><<<v^v^<>^<v^<^^^v<vvvv^vv^>^<vv>^>v<<>>^<<v^^^v^<vvv^v^v<<>vvvv>v^><v^v<<^<vv^v<<<>v^vv>^><v^<v>^^><^^v<>^<>v^v>^v<>^>>^v<^vvvv^>>><><<<>vvv>vvv<>>>v<vv>v>v<<v^<<<<^^<^^v^<>^<v>>^>v>^^>^^^v^^v<^>>>v^<vvv<vv<>v>>><v^><>^vv><v<^vv<v^^^^^vv<vv<<<>^^vvv>>v<^v><<^v>v<^<>^<vv>vv<^^^^v<><><<<<^>>v>v^>>><>vvv>>><<<>^<v><^><v><v^<>v<>^>^vv<^<^vvv^>^>>^<^^vv>^v^<>v><v<^^>v^<<v<<>><v><>>^^^v<>^^^vv^>^<<>^>v><>vv>>^<<>>v<<^vvv<<>^^><<>>v<^v><<>v><><<<v^^^vvv<<<v^><>>vvv<^<^>^^<^<>><v<v><<v><vv<>v<<^>vvv>>v<v<^><v>v^><vv^^><<<^><<>v<<<^^v<<v<>^^<>>>^v>v>>>^>><<<^^^^>>v^<^^<<^>>v><<^>>>^^^^^<>^<^<vv^>^<<^v<v^v<^>>v>>v>^v^v<>^>^^>v<>v<<^v>^<<v><^<v>>>v<vvv^<<^<^>^v><>><<^^vvv^v>v>^<v<><<<v>v^<vv>^<<<>^><>^<v^>>vvv^>^>>^v>><^v>v<^>^^><^<v^vvv<<<>v^vv<^^<>v<>^<<>v>>^<^^vv<<<>^^^^<v>^<>>v^vv^v<>>><<>^^<^vvvv^>v<^<<><<^>^^v^<<^<v><^v^^v>><v^^v<v>><>>>vv^>>>^<>^^<<^^^>
^^<v<>>>>vv^^<<>v>^^v><<<>^<<><<vv<v<<>v>vv^>^<<<<>><^^^v<^v><><^<>^^v><<<vv<<v^>^v^>>^<>^<<>>>>>^>v<<v^>^<v^^^><>>>^v<v<^^v>^>v><<^^<<v><><^vvvvv^<<v>^>>><^<<><^>^<^><<><<v^vv><<^^<v><^vv<>>^^>^v<><>vv^v<^<<><<><<><v^vvv^vv<^<<<v>>><<^><^vv<<^v>>><><v^^^v<>>^v<<>v>vvv<>^>^v<v>^v>v>v<>v>><><^<^v^<v<v^>>>^>v>>>^^>>>v^<<^v<<^^>v>v<^<v<<>^<><>vv>>>^^<^^<<>vv<<<v<><<^^^<vv<^>^>>>^v^^<>><<^v^<>v^^v<^^<v^>>v>>v>><>v<^^v<<<<>v^v><>>^>^>>^v><^><>^>^<<^v<v<^<<vv^^<>>><^><^^<<<^^>v>^>><<<vv^^v^<^<>^v^<>>>>^vvv><^v^v<v<^<v^><v^^><vvv<<>^>^vv<>v>v><<>>vv<^vv^v^<<<><^><vv>v^<^<v^v<vvvvv>vv^>><^>><>>>>^vv^^>><v>>>^<>^^^<><vv>vv<^<v>><<^<^v<>^<<<^vvv>>><<v^^<vv>>>v^v>^>^><v>^vv<><^v>^^>^<v>v<>>>v>v<<vv>^><v>><v^>v>^<^v^<^v<>>vvv>^^^<v^<<<^<><v^^>^<<vv^<^^^^>><^>^><>^^^>>>^^vv>^<v>v^<<>>v^^<<><^v^>>^<v>>v^>^<>><^><<>^<v>vv<vv>^>>vvv^<<vv>v<>>><>vvv>v<><^>>>v^^^^>>>>^v<^vvv<^vvvv>>^><v^>>^<^<>^<<^><v<v>^v^<^>v^^^v<v>><v<>^v^v<><v>>^^v^<^^^^><v<^^v>^<<^<>><^v><v^<<<>v<^^^vv<v>^<^v<>vv>^<^>v<<v^v^<>v^v<v
^^<<<vv^>>^<v<<>v>>v^>>v><vvvv<v<><v^v^^<>v>>^^<^v<>v<>>>v<^v^<v>^^^<<<^>^^v^vv>^<<v><><>vv<^^^v^^vv>^vv^^>vvvv^vv<vv>v<>v^^v<<>^<>^v<<>vv^>><v<<^vv<>v^^>>><><^^<v<<vvv^>^<>^<>^<><^><<<v><>^v^^v>^<><^><<^>^v<<>^><>^>vv^^<<vvv<v^v<<<>><v>^v^^^>v>^<<^<v<v^<^<v>>v^<^^^>>^>v<^<><^v><^^v<v^<><<>>vv>v<<<v^vv>^^><>^<^>v^^<^^<<<<<^v^>v<>v^<>>>>v<>>v><<^^^>><>^v^^v^><^^v<^v>vv>v<^v<<v<vvvvv^<><v^<><<<^<<v<v^^<^v^>><>>><>^v^>>v<>>v^>^<^^<v^>v><^v^^vv>^<vv<>>vvv<>^^<<vv^v<v<<vv>><v^<vv^<v<<><v<vv<^v>>^^>>^>v^<v<vvvv<>^v>v^<^v<^><<^v<>>^^<>v><>v^>vvv>vv^^<v>^^^<^v^^v>v<v>>^v^v^v^<<v>>^><v<>^vv><^><>>>^<^>^^vv<v^^^^v>>>^^^><v^><v^^^v<>v>^>vv^^v^>v><<^>v><vv^v^>^v<<vv^^<^v>vv><<v<v><v^v^v><^>^^^^><>v<<v^^v>v><><>><>>^^>>><<<>v<^^vv^>vv^v^>^^>>^^<<>vvv<<<v><vv>><<vv^vv<>^^<^v^v>^^<^v>>>^<^<>^^<>^<<<<>><^<v><<^>^^v>^><<v^>>^^^v><<<vvvv^<v>^v<><^>>vv><^>>>^<>v^<<<>^^v^v><^><^^v<^vvvv<><<^>>>^<v^^<<vv>><<><<><<^>v<>>^><^^^vv^^v<^>v>><^^<^>^<v>^v^<^><<>^v><><^v^<^v^>><v>^v<vv<^v^^v^^vv>vv>>^>>><v<><>><v<
>^<v<v<<<<^v^vv>><^>^^<^vv>^>v>^^<^^<v^>>^vvv><^v>^v>vvv>v>^<^^v^vv^v^v>><<vv>vv<vvv>>>^^>^><<^>^<vv^>v<^^v^>vv<^v<>>vvv^^<>>^v^>^^>^^><>^>v>><^<^><v<^<^v^><v><<<^v>^>^<^>v<vv<>^v^^>>>><v>>^>^><^>^>>^vv^<vv><v^^^>^^v>^v<>>v<><<vv><^^^^^<v^>v>^^<<<>^<><^>^v<<>^^>^^^v<>v><>^<<>^v^<<vv>^<v<^<v^><vvvv<<>><vv<<>v>vvv^^^^v<^^<^<>>^><>v<^^>^^^^v^<>><^>^^^<^vv>^>^^^>v^v>^v><>^^<>v^<>^^<>v^^v^<><^<v^>>^<<<<vv>v><<<vvv>^<^<^>^^<<v<><>^<v<^^>>^^>v^<<<vv>v>^>>^^>^>>>>v>>^<<>vv<^v^>^>>>>^<v><<<><v>><>v<><>>v^v>v^^<v^<vv<<<v>^^v>>>^<^vvv^vvv^>v>>^>v<>>v^<^v><><<vv^^<>v>^v>v>><v^<v^v>^<^v>vv^<<>>>^vv>><>^<v<<<<v^^>><<<^><^><^v>><<^^^v<<^vv^^><<<v^<><<^<>^><v>v^v^v>^<>vvvvvvv^>^>^^>v<><^><<>^vv<>^v<v^v<>v<<><v<><v^vv>v<^v^^<vv^>>vv<v<<>>^^>v>^^vv^>><^v^^^^<v<vv^v^<<<>v<<^^^vv>^^vv>>>^^<<^v<>>v<vv>>>vv<^^<>>^>vv^>>><<>^>v>vv<^<>vv>v^^<<^^^vv<>^^v^<^>^^>>>v>>^>^v<^><^<>v^v<v^<>>><^<^^<^^>^^>vv^>^><<<v^>^^^vv>><vvv^v>>^vv^<<v>vv>^<>^><v>vvv>^>>><v<^<<>vv>>>^<v^v<v<^^^<v^vvvv^^^^v<>><vv^vv<>vv<<<<<<v^^^^^
<<^vv^^vv^><><<>>><<<^>^<^v>v>^><>>>^>vv>v^<<<vv>>^^^v<>v>vv<<<vv<<^v>v<^<v<^>^>v><^<>v><<><v<>>>v>v^v>v>v^^^v^v>vv^^>^><v^<<v^v>>^><v^^<<v^^^<^^^vvv<<^>^^<^^<^<<^^<v<<v<>v><v<>v^^^<vv^vvvvv>^v>vv^^>>vv><<^<v<^^>^<><v>><^^^^v>^>v^><v^>v>>><>^^v^<><>^><<<>^<^^>^>vv<>>^v<<^<>>>v>vv<vv><<vvv<<v<<<>^>>>v<<^^v^v<vv<v^^<>^^^<<^^v<^v^^><^^^>vvv<v<v>v^vv>><<><><vv><<><v>^<<>^^^>^^<^<^>^<><>v^^><^<^vvvv>v<v<>^^v<^>v><><^^^>>>>v^<<<<vvv>><>v<v<>^><^v>>v^>v^><v<v><^<>^^^<^<<>^<<<v<v^<>^^>v<^>^<^<^^vv>v<vv>><^<v^v^v<>vv^>v<^^^<v<v<>>>v<>>^^^<<^^v<<v><<>vvv^>^^<^>^vv>v><^<^<>>><<v<<>v>^>v<<>>^<^>v>^^<^><<<<v^v^<^>^^>>v<v><>>>^^>^>>vv>v^v^<v<<<><>>^^>v<^^>v<v<<<^v^^>v<v<v<>^<^v^vvv<<>^<>^v><vvv^^^v>v<<^v<>>vv^^^v^<vv^<<><^^^v^>>><<<v^<<^v<<v<><^>vv><<><v<v><<v><<>^v<>v^><v^v^<>v^>>^>><v<v<<<>v<^>^<v<^<v>v<><<<^^>^>^v<<v>^<<v>><^><^^<<^>>>>>^>^><^<^^^<v^^v<v<v^^v>vv^<^v<><>^><<>^<^^vv<><>>>^<v<^v>vvv<>^<<<>^^<^^^v<v<><<^>^>vv>>^vv^^>^^<^vv<<>>>vv<^<<^vvv^<^^v^<v>vv<v><><>^>^^<<<^<v<v^^>><v^^vv>><>>^>
>vv^>v<<<>^>>>^^>><>vv<vv>^>^v^^^^v^v^>^><<v<v>>^<>v>vv>v^>^<<vv^<^v>vv^v><>>>>>^^<^><>v>vv>v<^>vvv><^^^>^^>><>>^^vv><v^v^<^<v^^v^><<^<v<<v^<>^^v^v^<>vvvvv<^vv><<vv<<<vv>^^^>vv<><><^v<><v<v<<v>>v>^^vvv<^^<<<><>^^><^v>^^<^>v<v><v<v^<^^>>>><<v><<>>^>vv>><vv<^>v>^<<v>><vv^>^v^<^>>><><v^<><^v>^^>vvv><vv^><v<vv^><<^v^^^vvv>>^>^v<vv<^<^^v>^<v^^v<<^v>^<<>>v^<^<^>>^^<v>v^^v^<>^v<v<>><^>>>>>>v<<<<>^^v><<>v^vv<<>^<^>>v>><^vv>^>vv^<v>^^<v^^>>^>>>v^^>^^><^v<><>^^>>>^v>^><<^<>^^^>^v>><v><>>v^>vv^^v<<><v^^^^^vv>^<^<v^<vv><>v><v^vv>v<<>v><<vv<^<v^<^>>^>^><^v^v>^v>><v^v>v<v<^v^vv>v<^vv<vvv<v^>^<^>vv<^^>^<^<v><^><<<>>^<<^^<^<v<vv<<^>v<v>>v^>^>^><<>^<>^^>v<<>><^v>>v>>>>>>>v^v<<^<^><^^<<v<vvv^>>v<<><><<v^^vvvv^<^<<>^<>><v>>^><^v<^>v<^><><<<>>><>v^^<<^<<<>^^<^^^^>^<>>v^^vv<vvv><>vv>>>>>>^v<>v^^<<>^<^><v^<^^><v>v^<<^<^>vv>^^>vv^>^v>vvv^>^>>>>><<<>vvvv<^>>>>v>^<v>v<v>^<^^v<<><^v<<>>v<v<v^^>vv>vvv<><>vv<<<^^>>>>v<>^>^v<v^vv^v^<^>vvv>v>^^v^v<>vv>>><^<>>v>vvv^>vv<<v>^^>>^^^>><><v^<^^v>vv<^^v^<v^v^v<<<^^v<v>^<>`,$2=`#################
#...#...#...#..E#
#.#.#.#.#.#.#.#.#
#.#.#.#...#...#.#
#.#.#.#.###.#.#.#
#...#.#.#.....#.#
#.#.#.#.#.#####.#
#.#...#.#.#.....#
#.#.#####.#.###.#
#.#.#.......#...#
#.#.###.#####.###
#.#.#...#.....#.#
#.#.#.#####.###.#
#.#.#.........#.#
#.#.#.#########.#
#S#.............#
#################`,n5=`#############################################################################################################################################
#...#.................................#...#...#...............#...............#.........#...............#...#.....#.........#.....#........E#
#.###.#.#####.###########.#.#.#####.#.#.#.#.#.#.###.#####.#.###.#########.#.#.#.#.#####.###.#######.#####.#.#.#.#.#######.#.#.#.###.###.###.#
#.........#...#.........#.#.#.........#.#...#.....#.....#.#.....#.........#.#...#.#...#...#.....#...#.........................#.....#...#.#.#
#######.###.#####.###.###.#########.#.#.###############.###.#####.#########.#.###.###.###.#####.#.#.#.#########.###.#.#.#.###.#######.###.#.#
#.........#.....#...#.#...#.........#...#...#...#.............#...#.#.....#.#...#...#...#.......#...#.....#...#...#...#.#...#.....#...#...#.#
#.#######.#.###.#.#.###.###.#######.#.#.#.#.#.###.###.#.#####.#.###.#.#.#.#.#.#.###.#.#.#.#######.#.#####.#.#.###.#####.###.###.###.###.#.#.#
#.#...#.#.....#.#.....................#...#...#...#.#.#...#...#.#.....#.#.#...#...#.#.........#...#.....#.#.#...#.....#.....................#
#.#.#.#.#####.#.#####.#.###.#.#.#.#.#.#.#######.###.#.###.#.#.#.###.###.#####.###.#.#.#.#.#.###.###.###.#.#.###.#####.###.#####.#.###.#.#####
#.#.#.#.......#.....#.#.....#.#.#...#...#.........................#...#.........#.#.#.#...#.#.....#.#...#.#...#.#.....#.#.....#.#.#.......#.#
#.#.#.#######.#####.#.#######.#.###.#.###.#######.#######.#.#.#.#.###.#######.###.#.###.#.###.#####.#.###.#.#.###.#####.#####.###.#######.#.#
#...#.......#.......................#.#...#.....#...#...#.#...#.#.#.......#.......#...#.#.#...#...#.#.....#.#...#...#.............#...#.#...#
#.###.#####.#########.###.#.#####.#.#.#.#####.#.###.#.#.###.#.###.#########.#.#######.#.#.#.###.#.#.###########.###.#.#########.###.#.#.###.#
#...#.....#.#...#.........#.#...#...#...#.....#...#.#.#.....#...#...#.......#.......#.#.#.#.#.........................#.......#.#...#.#...#.#
#####.###.#.#.#.#.###.#####.#.#.###.#####.#########.#.#####.###.#.#.#.#######.#.#.###.#.#.#.#.###.#.###.#########.#.###.#####.#.#.###.#.#.#.#
#.....#.....#.#.#...#.#.....#.#.#.......#...........#.....#.....#.#.#.#.#.......#.#...#.#...#...#...#...#.......#.#.....#...#.#.#.#...#.#...#
#.###.#######.#####.#.#.#####.###.#######.###.###########.#####.###.#.#.#.###.###.#.###.#######.#.#.#.###.###.###.#######.###.#.#.#.#########
#.#.......#...#.......#.#...........#.....#.............#.....#.#...#.#.....#.#...#...#.#.#...#.#.#...#.#.#.#.............#...#.#.#.#.......#
#.#.#.###.#.#.#.#######.#.#####.#####.#######.#########.#####.#.#.#.#.#######.#######.#.#.#.#.#.#.###.#.#.#.#############.#.#####.#.#.#####.#
#.#.....#.#.#...#...#...#.#...#.#.....#.....#.....#...#.#.....#.#.#.#.....#...#.......#.#.#.#...#.#...#.#.....#.#...#...#.#.......#...#...#.#
#.###.#.#.#####.#.#.#.###.#.#.###.#####.###.###.#.#.#.#.#.#####.#.#######.#.#.#.#######.#.#.#####.#.#.#.#####.#.#.#.###.#.#########.###.#.#.#
#.......#.....#.#.#...#...#.#.#...#...#...#.#.....#.#...#.#...#.#.#.......#.#.#...#...#...#.......#.#.....#.....#.#...#...#.............#.#.#
#.###.#######.#.#.#########.#.#.###.#.###.#.#.#####.#####.#.#.#.#.#.#######.#.###.#.#.#.#.#######.#.#######.#####.###.#.#.#.#####.#########.#
#.....#.....#.#.#.........#.#...#...#...#.#...#...#.#.....#.#.#.#.#...#...#.#...#.#.#.#.......#.........#...#.#...#...#.#...#...#.#.....#...#
#####.#.###.#.#.#.#######.#.#####.#.###.#.#####.###.###.###.#.#.#.#.#.#.#.#.###.#.#.#.###.#####.#######.#.###.#.###.###.#.#.#.###.#.###.#.###
#...#.#...#.....#.#.....#.#.#...#.#.#.........#...#.....#.#.#...#.#...#.#...#...#.#.#.....#.......#...#.#.#...#.#.......#.#.#.....#.#.#.#...#
#.#.#.###.#.###.#.###.###.#.#.#.#.#.#######.#.#.#.#######.#.#####.#.###.#.#######.#.#######.#####.#.###.#.#.###.#.###.#####.#######.#.#.#.#.#
#.#.#.#...#.....#...#...#...#.#...#...#...#.#...#...#.....#...#...#.#...#.#...#...#...#.....#...#.#...#.....#...#...#.......#.......#.#.#.#.#
#.#.#.#.#.#####.###.###.#####.#######.###.#.#####.###.###.###.#.###.#.#.###.#.#.###.###.#####.#.#.###.#######.#####.#######.#.#######.#.#.#.#
#.#.#...#.#.....#.....#.............#...#...#...#.....#.#.......#...#.#.#...#...#...........#.#.#.....#.......#.....#...#...#.#.......#...#.#
#.###.###.#.#########.#.###########.###.#.###.#.###.###.#########.#####.#.#########.#.#######.#.#.#####.#######.#####.#.#.###.###.#######.#.#
#.....#...#.........#.#...#.......#...#.#.....#...#.......#.....#...#...#.....#...#.#.#.#.....#.#.#...........#...#.......#.#.#...#.......#.#
#.###.#.###########.#.###.#.#####.#####.#########.#.###.###.###.###.#.###.###.#.#.#.#.#.#.#####.###.#####.#.###.#.#.#######.#.#.###.###.#.#.#
#...#...#.....#.....#.#...#.#...#.#...#.....#...#.......#...#.....#...#.....#.#.#.#.#.#.#.#...#.....#.....#.#...#.....#.....#.......#...#...#
###.#####.#.###.#####.#####.###.#.#.#.#####.#.#.#####.###.###.#####.###.###.#.#.#.###.#.#.###.#######.#####.#.#######.#.#.#.#.#####.#.#.#.###
#.........#.#...#...#.#.....#...#.#.#...#...#.#.#.....#...#...#.....#...#...#...#...#...#...#.......#...#...#.#...#...#.#.#.#.....#.#.#.....#
#.#########.#.#####.#.#.#####.###.#.###.#.#####.#.#####.###.#.#.#####.###.#########.###.###.#####.#####.#.###.#.#.#.#####.#######.#.#.#.#.#.#
#...#.......#.#.....#...#...#.#...#.#.#.#.....#.#.#...#.#.#.#.#...#...#...#...#...#.......#.....#.....#.#...#.#.#.#.....#.#...............#.#
###.#.#######.#.###.#####.#.#.#.###.#.#.###.#.#.#.#.###.#.#.#####.#.###.###.#.#.#.#.###########.#.#.#.#.###.#.#.#.###.#.#.#.#.#.###.#.#.#.#.#
#.....#...#...#.#.....#...#...#.#...#.#...#.#.#.....#...#.#.....#.#.#.......#...#.#.#.#.......#.#.#.#.#.#.#.#...#.#...#.#...#.#.#.#.#.#.#...#
#.#####.#.#.###.#######.#.#####.#.###.###.###.#.#####.###.#####.#.#.#####.#######.#.#.#.###.#.#.#.#.###.#.#.#####.#.#.#.#.###.#.#.#.#.#.###.#
#.........#.#...........#.....#...#.....#...#.#.#.....#.......#...#...#.......#...#.#.#.#...#...#.#.......#...........#.#.#...#.............#
#.#.#####.#.#.###############.#######.#.###.#.#.#.#####.#.###.#######.#.#.###.#.###.#.#.#.#######.###.###.#########.###.###.#.#.#.#.#.#.#.#.#
#.#.#...#...#.#.............#.#.......#...#.#.#.#...#...#.#.#.......#.#.#.#.#.#.#.#...#.#.......#...#...#...#...........#...#.#.#.#...#...#.#
#.#.#.#.#####.#########.###.#.#.###.#.#.#.#.#.#.###.#.###.#.#####.###.#.#.#.#.#.#.###.#.#.###.#.###.#.#####.#.#########.#.###.#.###.#.#.###.#
#.#.#.#.....#.#.......#...#.#...#.#.#.#.#.....#.#...#.#.#.#.....#.#...#.#.#...#.#.......#.#...#.#...#.....#...#.......#...#...#.......#.#.#.#
#.#.#.#######.#.#####.#####.#####.#.###.#########.###.#.#.###.###.#.###.#.#.###.#.#####.#.#.###.#.#####.###.###.#####.###.#######.###.#.#.#.#
#.#.#.......#...#.#...#.......#...#.....#...#.....#.#...#...#.#...#.#...#.#.....#.....#.#.#.#...#.....#...#.#...#...#.#...#.....#.#.....#.#.#
#.#.#.#####.#####.#.###.#####.###.#######.###.#####.#.#.###.#.#.###.#####.#.#.#######.#.#.#.#########.###.#.#.#####.#.#####.###.#.#.#.#.#.#.#
#.#...#.....#.....#.....#...#...#...#.......#.#.#.....#.....#.....#.....#.#.#...#.....#.#.#.........#.#.#.#...#.....#.#.....#...#.#...#.....#
#.###.#.#####.###.#######.#.###.#.#.#.#.###.#.#.#.#####.#.#############.#.#.###.#.#####.#.#######.###.#.#.###.#.#.#.#.#.#####.###.###.#####.#
#...#.#...#.....#...#.....#...#.#.#...#.#...#.#.....#...#.#.............#.......#.#.....#...#.....#...#.#.....#.#.#.#.#...#.#.#...#.#.....#.#
###.#.###.#.#######.#.#.#.###.#.#.#####.#.###.#######.###.#.#############.#########.#.#.#.###.#.###.#.#.#.#####.#.#.#.###.#.#.#.###.#.###.#.#
#...#...#...#.....#.#.#...#.#.....#...#.#...#.#.......#...#.#...#.......#.....#.....#...#.#...#.#...#...#.....#.#.#.#.....#.#...............#
#.###.#.#####.###.#.#.#####.#######.#.#.###.#.#.#.#.#######.#.###.#####.#####.#.###########.#.###.#####.###.#.#.#.#########.#.#####.#.#.#.#.#
#.#...#.#.......#.#.#.#.....#...#...#.#.#...#.#.#...........#.#...#...#...#...#.#.....#.......#...#.......#.#...#.......#...#...#.#.#...#.#.#
#.#.#.#.#.#######.#.#.###.#.###.#.###.#.#.###.#.###.#.###.#.#.#.###.#.#.###.###.#.#.#.#.#####.#.###.#####.#.#######.#.###.#.###.#.#.#.###.#.#
#.....#.#.....#...#...#...#.....#...#.#...#...#...#.#...#...#...#...#.#.#...#...#.#.#...#.....#.#...#...#.........#.#.#...#.....#.....#...#.#
###.#.#.#.#.#.#.###.###.#####.###.#.#.#####.###.#.#.###.#####.###.###.#.#.#####.#.#.#######.###.#.###.#.#.#.#.###.#.###.#############.#.###.#
#...#.#.#...#.#.#.#.....#.........#.#.#.....#.#.#.#.#.#...#.#...#.#...#.#.#.....#.#.......#.#.#.......#...#.#...#.#...#.....#.......#...#...#
#.#.#.#.###.###.#.###.#########.###.#.#.#####.#.#.#.#.###.#.###.###.#.#.#.###.###.#.#####.#.#.#.###.#.#####.#.#.#.###.#.###.#.#####.#.###.###
#.#...#.....#...#.....#.............#.....#...#.#.#.#...#.#...#...#.#.#.#.#...#.#.#.......#.#.....#.#.#...#...#.#.#.#.....#...#...#.#.#.....#
#.#.#.#######.#.#######.#############.###.#.#.#.#.#.###.#.#.#####.#.#.#.#.#.###.#.#.#######.#.#####.#.#.#.#####.#.#.#####.#######.#.#.#####.#
#.............#.#...#.....#...#.......#.#.#.#...#.#.....#.#.....#.#.#.#.....#.....#.#...#.....#.....#.........#.#.#.....#.........#.#.....#.#
#.###.#######.###.#.#.#####.#.#.#####.#.#.#.#####.#######.#.###.#.#.#.#######.#####.###.#.#####.#######.###.#.#.#.#####.#####.#.###.#.###.#.#
#.#.......#...#...#...#.#...#.....#...#...#.#.....#.....#.#.#.#.......#...#.#...#.#...#...#.....#.#.....#...#...#...........#.#.#...#...#.#.#
#.#.#####.#.###.#######.#.#######.#.###.#####.#.###.###.#.#.#.#########.#.#.###.#.###.#.###.#####.#.#.###.###########.#######.#.#.###.###.#.#
#...#.....#...#.#.......#.#...#...#.#.........#.#...#.#...#.#.#...#...#.#.#...#.....#.#.#...#.....#.#.....#.......#...#...................#.#
#.###.#########.#.###.###.#.#.#.###.#############.#.#.#####.#.#.#.#.#.#.#.###.#.#.###.#.#.###.#.#.#.###.###.#####.#.###.###.#####.###.#.###.#
#...#.....#.....#...#.#...#.#.#.....#...#.......#.#.....#.....#.#...#...#.#...#.#...#.#.#.#...#.#.#.#...#...#...#.#...#.#...#.....#.....#...#
#########.#.#######.#.#.###.#.#####.#.#.#.#####.#.#.###.#.#####.#########.#.###.#.#.#.#.#.#.###.#.#.###.#.###.#.#.#.###.#.###.#####.#.#######
#.........#.......#.#.#.....#.....#.#.#...#...#...#...#.#...#...#.....#...#...#.#.#.....#.#.#...#.#.......#...#.#...#...#...#.#.......#.....#
#.###############.#.#############.#.#.###.#.#.#####.#.#####.#.###.###.#####.#.#.#.#######.#.#.###.#########.###.#####.#####.#.#.#####.#.###.#
#...#.........#...#.............#.#...#...#.#.#.....#.....#.#.#...#.#.....#.#.#.#.......#.#.#...#.#.....#.....#...#...#.#...#.#.#.#...#.#...#
###.#.###.#####.#.#.###.###.###.#.#.#######.#.#####.#####.#.#.#.###.###.#.###.#.#######.#.#.###.#.###.#.#####.###.#.###.#.###.#.#.#.###.#.#.#
#...#.#.#.....#.#.#.#.#.......#.#.#.........#.....#.....#...#.#.....#...#...#.#...#...#...#...#.#.......#...#...#.#.#.....#...#...#.#...#.#.#
#.#.#.#.#####.#.#.#.#.#######.###.#.#############.#.###.#.###.#.###.#.#####.#.###.###.#######.#.#.#.###.#.#.###.#.#.#######.#####.#.#.###.#.#
#.#.#.#.....#...#.#...#...#.#...#...#.#.....#...#.....#.#...#...#...#.....#.....#.....#.......#.#.......#.#.....#.#.........#.#...#...#...#.#
#.###.#.#########.###.#.#.#.###.#####.#.#.###.#.#######.#.#####.#.#######.#####.#####.###.#####.#.#######.#######.###########.#.###.#.#.#####
#.....#.......#.....#...#.............#.#.....#.........#.#.....#.......#.#...#...#.#...#.#.....#.#.........#...#.......#...#...#.#...#.....#
#.###########.#.#.#########.#.#####.###.#######.###.#.#.###.#########.###.#.#.###.#.###.###.#####.#.#######.###.#######.#.#.#.###.#########.#
#...........#...#.#.......#.#.........#.#...#.......#.#.#...#.......#.#...#.#.........#.#...#.#...#...#.....#.........#...#.#.#.....#.....#.#
#########.#.#.###.#.#.#####.#.###.###.#.#.###.#.#.#.#.#.#.#####.#.#.###.###############.#.#.#.#.#####.#.#####.#####.#.#####.#.#.###.#####.#.#
#...#.......#...#...#.......#...#...#.....#...#.#...#.#.......#.#.#.....#.............#...#...#...#.#.#...#.........#.......#...#.#.#.....#.#
#.###.###.###############.#.###.###.#######.###.#.#.#.#######.#.#.###.#.#.###########.#####.#####.#.#.###.#.#######.#############.#.#.###.#.#
#...#.#...#.....#...#...#.#...#.#...#.....#.#.#...#.#.........#.#.#.#.#...#...........#.....#.....#.#.#.......#...#.#.............#...#...#.#
#.#.#.#.#.#.###.#.#.#.#.###.#.#.#.###.###.#.#.#####.#############.#.#.#####.#######.###.#.#.#.#####.#.#.#######.#.###.#######.#####.#####.#.#
#.#.#.#.#...#.#...#...#.....#...#.....#...#.#...#...#.....#.......#.#...........#...#...#.#...#...#...#...#.....#...#.....#.#.......#.......#
###.#.#.#.###.#####.#######.###########.###.#.###.#######.#.###.###.#####.#.###.###.#.###.#.#.#.#.#####.#.#.#######.#####.#.#######.#.#####.#
#...#.#...#.............#...#...#.......#...#.............#...#...#.....#.#...#...#.#...#.#.#...#.......#.....#.....#.#.........#...#.....#.#
#.#.#.###.###.#.#########.###.#.#.#######.###################.###.#.###.#.###.###.#####.#.#############.#.#####.###.#.#.#######.###.#####.#.#
#.#.#.#...#...#.#...#.....#...#.#.........#.........#...#.....#...#.#.#.#.#.#.#.#.....#.#...#.........#.#...#...#.....#.#.#...#.......#...#.#
#.###.#.###.###.#.#.#.#####.###.###########.#######.#.#.#.###.#.###.#.#.#.#.#.#.###.###.###.#.#######.#.###.#.###.#####.#.#.#.#####.#.#.#####
#...#.#...#.......#.....#.....#...........#.......#...#...#...#.#.#.#.#...#.#.............#.#.#.#...#.#...#.#.....#...#.#.#.#...............#
###.#.#.#.#.###########.#.###.###########.#######.#########.###.#.#.#.#####.#####.#######.#.#.#.#.#.#.###.###.#####.#.#.#.#.#######.###.###.#
#...#.#.............#.#.#...#...#.....#.#.......#...........#...#.#...#.........#.#...#...#.....#.#...#.#.#...#.....#.#...#.#...#.#...#...#.#
#.#.#.###.#.#.#.###.#.#.###.#.#.###.#.#.#.#####.#########.###.###.###.#######.#.#.#.#.###########.###.#.#.#.#.#.#####.###.#.#.#.#.#.#.#.###.#
#.#.#...#.#.#.....#.#.#.#...#.#.....#...#.....#...#...#...#...#.#.....#.....#.....#.#...#.........#.#...#.#.#.#.#...#.....#...........#.#...#
#.#####.#.#.#######.#.#.#.###.#########.#####.#####.#.#.###.###.#.#####.###.#######.###.#.#########.###.#.#.###.###.###########.#.#.#####.#.#
#.......#.....#.....#.#.#.#.....#.....#.#...#.......#.....#.#...#...#...#.#.#.........#.#...#.#.........#.#...#...#.......#.....#.......#.#.#
#.###.#####.#.#.#####.#.#.#####.###.#.#.###.###############.#.#####.#.###.#.#.#.#####.#.###.#.#.#.#######.#.#.#.#.#.###.#.#.#####.#.#.#.#.###
#.#...........#.#...#...#.#...#.#...#.#.#.....#...#...#...#.#.....#.#.#...#...#.#...#.#.....#.#.#.#.......#.#.......#...#.#.#.#...#.#...#...#
#.###.#####.###.#.#.#####.#.#.#.#.###.#.#.###.#.#.#.###.#.#.#.###.#.#.#.#.#####.#.#.#.###.#.#.#.#.#.###########.###.#.#####.#.#.#.#.#.#.###.#
#...#.....#.....#.#.........#...#.#.....#.#.....#...#...#.#...#.#.#...#.#.#.....#.#.#.............#...#.......#.....#...#...#...#.#...#...#.#
###.#.###.#.#####.#######.#######.#.###.#.#######.###.###.#.#.#.#.#####.#.#.#####.#.###.#######.#.###.#.#####.###.#.###.#.###.###.#######.#.#
#...#.#.#.#.......#.....#...#.....#...#.#...#.....#...#.....#...#...#...#...#...#.#...#...#.....#.#...#.....#...#.#.....#.#.....#.#.......#.#
#.###.#.#.#.#######.###.#.#.###.#######.###.#.#####.###.#######.#.#.#.#########.#.#.#.###.#.###.###.#######.###.#.###.#.#.#.#####.#.#######.#
#.....#.#.#.........#...#.#...#...#...#...#.#...#...#.........#.#.#.#...#.....#...#.#.#.#.#...#...#.....#...#...#.......#.#.#...#.#.#.......#
#####.#.#.#.#######.#.###.###.#.#.#.#.###.#.#.#.#.#####.#.#.###.#.#####.#.###.#.#.#.#.#.#.###.###.#####.#.#.#.###.#######.#.#.#.#.#.###.#####
#.#...#...#.........#.....#...#.#...#...#...#.#...#...#.#.......#...#...#.#.....#...#.#.....#.#.#.....#.#...#.#...#.......#.#.#.#.#...#.....#
#.#.#.#.###.#########.#####.###.#####.#.#.###.###.#.#.###.#.#######.#.###.#######.#.#.#.#####.#.#####.#.#.#.#.#####.#######.#.#.#.###.#.###.#
#...#...#.#...#.....#.#...#...#.#...#.#.#.#...#.....#...#.#.......#...#.......#.....#...#.....#.....#...#.#.#.....#.#...#...#.#.....#.#.#.#.#
#.###.###.#.#.#.###.###.#.###.###.#.###.#.#.###.#######.#.###.#.#########.###.#.#####.###.#########.#######.#####.#.#.###.###.###.#.#.#.#.#.#
#...........#...#.#.........#.....#...#.#.#.#...#...#.#.#...#.#.........#...#.#.....#.....#.......#.........#...#...#.....#.#.....#.#.#...#.#
#.###.#.###.#####.#########.#########.#.#.#.#.###.#.#.#.###.#.###.#####.#.#.#.#####.#######.#####.###.###.#####.#####.#####.#####.###.#.#.#.#
#.#...#.#.............#...#.#.....#...#...#.#.....#...#.....#.....#.....#.#.#...#...#.......#...#...#.#.#.#.......#...#.....#...#.....#...#.#
#.#.###.#.#.###########.#.#.###.#.#.#######.#########.###.#.###.###.#####.#.#.#.#.#####.#.###.#####.#.#.#.#.#.#####.###.###.#.#.#.#####.###.#
#.#...#.#.#.#...........#...#.....#.......#.......#...#.#.#.#...#.#...#.....#...#...#...#.#.....#...#...#.#.#.......#...#...#.#.........#.#.#
#.###.#.#.###.#.#############.###.#######.#.###.###.###.#.#.#.###.###.#######.#.###.#.###.#.###.#.#.#####.#.###########.#.###.###.#####.#.#.#
#...#.#.#.#...#.#...#.#.......#...#.....#.........#.#...#.#...#.....#.......#.#.#...#.#.....#.#.#.#...........#.........#.#.#.#...........#.#
###.#.#.#.#.#####.#.#.#.#####.#.###.#########.###.#.###.#.#####.###########.#.#.#.###.#.#####.#.#.#.#########.#.#.#######.#.#.#.#######.###.#
#...#.#.#.#.#.....#.#...#.....#...#.........#...#.......#.#.......#...#.....#.#.#...#.#...#...#...#.#.......#.#.#.......#.#.....#.....#...#.#
#.###.#.#.#.#.#####.###.#.###.###.#####.#######.#.#####.#.###.###.#.#.#.#####.#.###.#.###.#.#.#####.###.#.#.#.###.#####.#.#.#####.###.#.#.#.#
#.#.....#.#.......#...#.#.......#.#...#.....#...#.#...#.#...#.#.#...#.#.......#...#.#...#...#.#.......#.#.#.#...#.....#.#.#.#...#...#...#.#.#
#.#.#####.#########.#.#########.#.#.#.#.#.#.#.#####.#.#.###.#.#.#####.#.###.#####.#.###.###.#.#.#####.#.#.#####.#####.#.#.###.#.###.###.#.#.#
#.............#...#.#.#.....#...#...#.#...#.#.#.....#.#...#.#.....#.#.#.....#.#...#...#.#...#.#.#.....#.#.....#...#...#.#.....#.....#.....#.#
#.#.#####.#.###.#.###.#.###.#.#######.#.###.#.###.###.#.###.#####.#.#.#######.#.#####.#.#.#.#.#.###.#.#######.###.#.###.#############.#.###.#
#.#.......#.#...#...#.#...#...#...#...#...#.#.....#.#.#.#...#...#.#.#.#.........#.....#...#.#.#.#...#.#.........#.#...#.#.......#...#...#...#
#.###.#######.#####.#.###.#####.#.#.#######.#######.#.###.###.#.#.#.#.#.###.#####.###.#.###.#.#.#.###.#.#########.#####.#.#####.#.#.###.#.#.#
#.....................#...#...#.#...............#.#...#...#...#.#.#.#.#.........#.#...#.#...#.#...#...#.........#.#.....#.#.......#...#...#.#
###.###.#######.###.#.#.#.#.#.#.#########.#####.#.#.###.###.###.#.#.#.###.#.#####.#.#.###.###.#.###.###.#######.#.#.#####.#.#######.#######.#
#.#.....#.........#...#.......................#...#.....#.....#.#...#.....#.....#.#.#.....#...#.....#.....#...#.#...#.....#.....#.........#.#
#.###############.#####.###.#.###.#.#.###.###.#######.#.#.#####.#####.#####.###.#.#.#######.#####.#######.#.###.#######.#.#####.#.#.#.#####.#
#.#.............#.......#...#...#...#.#.....#...#...#.#...#...#.....#...#...#.............#.#...#.....#...#.#.........#.#...#...............#
#.#.#.#########.###.#####.#####.###.#.###.#.###.#.#.#.#####.#.#####.###.#.#.#.###.#.#.#.###.#.#.#####.#.###.#.#######.#####.#.###.#.#########
#.#.#.#...#.........#...#.#...#.#...#.....#.#.#.#.#.#.#.....#.......................#.#.#...#.#.......#.#...#.#.............#.#...#.......#.#
#.#.#.#.#.###########.#.#.#.###.#########.#.#.#.#.#.#.#.#############.###.#.#######.###.#.###.#########.#.#.#.#####.#######.###.###.#.###.#.#
#...............#...#.#...#...#.......#...#.#.#.#.#...#.#...........#.#...#.........#...#.#...#...#...#.#.#.#.#...#.#...#...#...#...#...#...#
#.###.#.#.#.###.#.#.#.#######.#######.#.#.#.#.#.#.#####.#.###.#######.#.#####.#######.###.#.###.#.#.#.#.###.#.#.#.###.#.#####.###.#.###.#.#.#
#S..#...#.....#...#.................#...#.....#.........#...#.........#.........................#...#.......#...#.....#...........#.....#...#
#############################################################################################################################################`,M5=`Register A: 729
Register B: 0
Register C: 0

Program: 0,1,5,4,3,0`,u5=`Register A: 2024
Register B: 0
Register C: 0

Program: 0,3,5,4,3,0`,r5=`Register A: 48744869
Register B: 0
Register C: 0

Program: 2,4,1,2,7,5,1,3,4,4,5,5,0,3,3,0`,v5=`5,4
4,2
4,5
3,0
2,1
6,3
2,4
1,5
0,6
3,3
2,6
5,1
1,2
5,5
2,5
6,5
1,4
0,4
6,4
1,1
6,1
1,0
0,5
1,6
2,0`,A5=`67,67
67,52
27,69
27,3
3,24
16,3
7,14
36,67
9,20
33,5
15,8
1,1
22,7
21,19
9,47
30,11
19,32
13,7
21,68
69,53
12,21
21,21
17,27
18,45
53,65
23,13
15,25
29,65
28,25
57,49
63,69
14,31
59,63
5,37
35,61
21,18
43,67
10,49
15,41
10,29
1,3
33,1
63,43
31,2
17,49
35,15
23,23
10,11
65,68
13,26
4,33
29,4
5,7
7,18
29,59
19,43
27,21
31,55
22,39
33,0
47,57
13,36
31,7
23,33
7,21
8,39
23,16
9,38
27,28
26,15
70,69
31,67
3,10
23,45
1,25
1,19
49,61
1,38
25,57
35,59
24,55
17,40
8,13
3,1
67,62
17,17
17,21
63,49
69,67
15,19
66,63
23,66
5,20
32,21
13,45
31,61
13,15
11,27
17,51
68,69
14,39
1,20
57,55
5,43
9,10
69,52
67,59
37,3
47,50
19,33
37,9
17,1
25,61
53,69
57,61
17,31
20,5
33,60
56,47
13,29
3,27
11,19
37,59
26,29
4,35
62,67
23,57
55,70
11,37
3,6
7,40
16,23
1,5
54,55
19,38
9,25
1,8
15,39
10,31
1,56
11,39
33,65
58,63
33,69
15,32
55,44
25,11
4,41
5,13
63,47
25,10
61,53
21,30
16,47
7,17
31,1
3,21
8,33
17,50
5,26
1,13
50,69
54,65
6,41
8,11
17,42
9,42
25,41
5,29
7,7
3,49
1,16
29,21
41,63
19,39
51,60
26,17
35,3
61,52
20,27
60,65
23,19
5,34
17,47
21,23
30,9
25,55
7,30
17,44
24,27
29,57
25,4
41,57
19,45
46,61
57,63
64,55
52,63
17,14
59,53
44,61
9,34
1,11
17,19
11,7
7,36
27,23
31,27
39,10
11,15
3,46
15,30
11,25
35,12
25,62
55,63
1,37
51,63
23,62
23,37
12,3
54,59
39,67
65,55
23,2
60,59
2,31
68,61
8,21
45,54
13,33
19,31
17,48
48,57
63,62
59,55
61,54
40,23
17,36
6,11
48,59
29,62
2,29
27,70
31,58
21,45
5,5
26,57
25,65
28,9
20,43
6,5
4,21
69,55
63,64
9,26
40,67
37,63
42,55
17,15
9,31
35,4
3,31
19,42
13,10
43,6
55,69
31,21
29,7
23,41
19,35
47,69
0,25
58,61
53,68
66,55
45,70
19,6
5,19
40,69
3,43
12,7
25,19
4,47
17,7
62,65
57,44
25,3
58,69
65,66
7,2
21,9
23,3
26,7
5,35
56,51
18,21
45,63
65,63
0,51
13,37
6,15
57,67
43,55
11,43
69,63
3,23
13,16
15,28
11,5
33,66
23,58
11,41
61,61
13,25
27,61
16,9
17,11
27,20
51,61
37,66
4,31
7,3
29,61
27,59
13,9
3,9
35,6
25,64
1,49
1,15
13,5
60,55
5,41
9,27
69,54
60,63
27,15
22,43
22,23
11,9
49,62
23,60
27,43
61,63
21,39
5,2
7,0
25,29
7,8
29,6
15,29
33,68
9,33
3,14
25,37
16,33
19,17
49,59
27,7
19,9
17,37
13,27
15,16
43,4
41,64
9,24
9,5
26,41
68,57
27,66
11,26
9,36
21,25
19,36
15,36
8,3
23,36
40,7
51,69
28,61
18,27
21,10
61,56
42,57
9,3
69,69
31,5
25,44
8,43
34,67
35,1
35,69
2,45
69,49
21,27
5,22
47,62
25,21
35,62
69,65
16,21
69,61
25,17
27,57
43,61
59,67
29,58
14,13
1,34
38,63
64,57
27,8
24,41
5,17
27,64
35,67
20,21
23,63
57,66
37,69
3,4
47,56
25,47
5,25
19,11
31,66
18,5
29,63
70,49
30,57
11,23
17,33
23,56
2,43
7,24
29,67
35,65
17,35
37,5
32,15
29,68
3,45
9,29
7,28
53,64
19,25
45,69
22,31
9,23
36,5
18,29
32,63
45,67
30,19
28,17
26,37
1,33
15,23
67,60
24,33
37,67
25,26
25,7
7,13
13,13
13,24
49,60
10,5
63,67
21,65
16,11
26,55
4,37
22,45
15,34
33,2
29,20
12,29
61,45
26,39
27,25
23,59
15,33
69,47
70,59
17,30
21,5
23,18
29,56
68,67
21,16
8,29
11,24
28,35
41,66
1,39
15,11
1,41
22,3
30,31
4,43
25,42
29,17
64,59
17,46
29,66
24,69
1,6
60,69
11,11
30,23
16,7
58,53
21,17
27,39
25,1
29,15
29,9
51,58
14,37
25,53
15,31
16,5
1,42
3,11
33,63
27,45
42,61
33,3
58,65
21,37
55,67
35,63
33,18
55,52
33,15
17,29
11,35
53,67
9,37
5,3
41,65
23,39
4,1
17,38
30,39
17,23
49,63
25,45
19,23
19,29
63,65
50,65
21,15
26,23
59,52
24,23
68,33
19,40
29,69
24,47
29,27
69,56
29,22
28,29
21,35
21,41
26,59
23,6
37,7
19,16
63,63
31,60
30,25
16,39
13,11
19,7
11,14
25,67
21,33
65,49
25,43
22,21
13,28
17,25
27,63
9,39
5,39
61,57
18,13
59,57
18,11
67,69
54,63
39,64
23,21
47,65
46,67
31,16
66,57
29,19
5,9
61,68
9,7
31,23
55,61
40,57
3,3
10,15
15,26
64,65
5,23
65,67
56,59
25,66
54,57
59,56
20,29
42,69
62,43
21,29
67,61
48,69
26,1
32,69
14,17
32,11
36,69
25,24
11,32
29,14
7,9
29,64
57,56
24,3
27,38
30,1
5,4
21,7
9,19
43,69
28,1
14,41
6,9
3,37
21,69
44,69
27,11
55,60
69,57
21,13
22,69
25,68
11,40
11,18
20,9
14,11
27,44
37,60
34,63
45,59
44,67
69,66
7,39
65,57
7,31
15,7
13,42
3,19
3,15
14,7
19,34
7,1
31,69
5,6
3,8
13,19
15,15
13,41
67,57
11,17
9,35
29,25
41,59
21,4
67,51
29,23
56,67
1,22
7,33
3,40
17,9
47,55
31,64
23,35
7,11
5,45
10,27
21,34
28,3
1,17
19,48
13,17
25,23
1,31
7,37
36,15
11,29
53,66
23,69
12,37
27,68
53,57
31,18
3,29
61,67
13,23
65,65
39,62
8,7
64,61
27,62
7,43
52,61
19,19
31,59
37,65
22,25
17,41
57,58
20,45
15,13
28,59
18,9
11,21
15,35
23,5
1,40
69,50
36,13
59,61
19,12
21,26
65,59
22,35
25,9
57,57
1,21
29,43
55,65
1,2
63,52
19,21
27,37
25,34
23,43
64,69
59,58
31,65
1,23
26,19
3,33
30,41
9,41
15,9
43,65
15,17
25,60
1,43
57,69
5,15
5,1
47,60
9,9
9,13
31,63
63,59
25,59
17,5
1,45
23,46
30,69
29,16
38,69
23,11
31,25
49,49
41,69
62,57
3,28
14,23
10,19
35,10
9,16
61,55
1,9
53,59
6,33
39,69
23,9
23,40
5,28
7,25
59,59
18,25
69,64
2,37
13,39
3,16
62,61
23,25
21,36
21,42
2,35
13,48
67,55
29,8
25,18
14,19
25,14
3,39
6,37
20,23
25,5
42,63
26,5
15,21
31,17
19,13
7,41
19,41
61,65
5,11
24,37
51,68
21,47
17,43
69,59
23,47
24,21
5,31
27,65
3,17
8,49
6,23
19,37
36,27
3,25
25,63
31,62
47,63
7,35
56,63
2,27
21,38
7,22
39,63
27,2
10,45
25,69
46,13
33,7
43,14
27,27
65,69
33,4
21,11
9,21
31,57
24,9
5,27
19,27
23,61
33,21
28,43
67,53
2,19
53,63
7,26
23,17
51,65
47,67
26,25
16,19
1,35
3,41
52,55
31,3
66,67
61,59
13,20
12,5
18,23
4,11
21,64
27,12
7,15
1,32
9,46
29,26
10,37
51,66
30,37
16,15
7,23
17,13
27,67
19,15
7,5
5,8
4,13
17,18
9,4
14,21
27,19
31,10
12,9
41,61
7,29
1,12
20,19
35,64
63,57
24,45
7,27
41,67
39,65
10,41
38,67
50,63
11,22
23,29
31,19
51,54
6,43
61,69
27,41
25,39
1,10
67,65
22,11
5,18
10,7
57,62
5,30
65,61
27,56
55,56
17,28
27,22
5,33
69,51
21,67
23,28
3,7
33,24
23,12
29,5
47,68
1,27
3,5
24,15
20,13
15,27
14,5
36,63
18,33
64,47
1,4
12,33
12,13
12,17
59,60
45,61
2,3
4,17
32,5
49,57
21,8
24,7
10,9
2,23
62,59
49,69
1,14
67,64
1,18
32,7
30,5
1,26
7,19
15,37
51,67
15,5
12,39
59,66
29,1
57,65
24,13
59,69
0,37
3,35
21,14
9,15
40,61
19,47
61,70
9,11
5,38
66,59
30,13
18,17
27,17
1,7
21,62
27,5
23,20
29,3
45,64
55,68
16,25
4,25
21,32
34,29
44,35
41,18
21,59
67,35
5,60
55,9
58,29
7,65
65,14
19,2
41,5
63,8
11,62
37,39
45,37
20,57
44,33
0,47
57,39
45,35
31,47
38,27
48,25
31,39
32,47
13,1
10,47
13,31
69,7
7,52
43,21
29,51
45,22
59,32
63,44
33,17
21,53
9,68
17,53
43,41
29,46
13,52
66,43
69,41
11,63
13,55
44,57
65,5
40,1
47,51
1,61
31,43
46,57
16,69
53,9
55,13
5,57
11,68
44,39
64,1
43,11
35,27
66,13
15,49
66,9
3,57
39,5
15,65
39,51
36,21
33,55
47,53
65,21
57,54
49,14
15,47
55,7
65,24
35,19
33,47
53,12
39,49
40,51
2,49
3,64
18,59
21,1
59,29
35,36
3,51
39,21
45,41
33,27
59,51
55,31
53,37
65,39
16,1
11,52
41,11
45,58
13,59
13,56
55,45
67,18
11,47
45,17
45,9
39,28
57,48
37,24
62,39
59,9
66,11
61,37
47,27
17,52
42,9
39,57
67,16
37,11
52,21
33,29
13,65
49,66
68,3
36,49
49,20
43,27
59,23
62,27
51,37
43,47
63,12
59,45
43,31
68,23
47,29
69,42
65,43
63,25
52,17
27,55
39,1
70,25
69,16
29,55
29,32
68,49
13,64
33,37
42,17
66,49
65,34
36,45
67,25
45,53
55,1
64,53
61,20
63,5
47,3
68,19
27,13
8,59
35,47
63,3
38,11
31,9
17,60
43,66
41,35
34,41
66,25
39,18
53,31
21,51
49,16
34,15
51,36
47,19
37,42
20,53
61,42
50,27
37,4
57,26
43,7
47,9
45,40
47,33
9,62
25,33
69,27
60,43
43,15
48,45
35,49
5,53
69,5
54,61
50,9
66,47
38,43
35,51
62,29
37,45
63,50
59,39
49,39
66,39
23,55
49,38
47,61
43,20
61,2
69,3
66,33
64,21
43,60
67,15
5,55
28,51
55,26
47,48
23,67
23,7
47,23
41,37
3,61
13,49
55,21
61,39
29,36
55,49
37,30
59,47
59,19
63,54
0,65
33,58
37,16
40,49
45,57
58,11
61,31
61,15
21,61
60,29
31,41
61,23
56,17
29,49
23,1
40,13
49,6
31,49
43,9
36,39
49,24
41,25
43,22
25,49
15,55
39,46
19,53
65,7
31,30
25,13
6,13
31,54
47,11
41,2
69,30
38,55
43,19
57,19
46,65
1,57
33,59
63,31
49,54
12,69
69,34
32,27
69,15
15,59
45,11
61,29
14,55
35,13
37,31
53,17
36,57
65,41
33,13
55,53
56,37
3,53
33,33
19,57
49,37
65,53
68,9
51,49
67,0
45,4
15,70
37,32
42,29
51,44
42,49
1,55
12,67
37,15
53,11
41,7
57,36
69,37
32,39
12,1
12,65
49,45
35,38
27,35
39,59
55,32
35,56
45,33
45,12
55,38
39,29
63,10
39,33
51,23
53,1
33,40
64,11
42,15
35,31
56,49
61,14
55,5
67,45
51,8
11,33
44,29
31,53
65,9
45,55
35,33
29,42
7,54
57,59
50,15
41,15
16,63
65,29
45,10
8,61
47,41
32,33
29,45
43,29
35,26
26,35
65,51
49,33
41,51
49,35
1,68
45,24
41,36
3,62
49,46
46,1
54,5
26,11
42,35
42,41
1,69
39,38
43,17
54,1
32,13
47,38
41,1
51,22
29,39
33,41
67,31
48,55
61,6
61,24
26,47
46,27
17,56
47,7
4,57
47,21
39,27
50,41
45,36
53,25
11,49
39,11
13,53
9,55
48,29
61,9
21,55
35,25
15,57
63,23
51,9
2,61
25,15
19,65
45,13
57,23
61,33
57,16
29,29
39,19
41,4
33,51
65,13
47,42
39,13
19,60
67,13
62,15
62,47
49,31
60,41
42,1
60,25
65,6
41,49
40,37
55,33
65,33
35,57
60,21
62,19
2,59
11,50
59,1
58,27
69,12
53,28
51,11
39,8
41,31
34,23
51,27
43,59
51,51
27,30
53,42
42,11
35,39
49,29
23,64
52,43
44,17
64,29
41,9
11,12
44,1
35,21
46,51
63,55
55,42
25,30
63,19
55,59
37,61
51,21
8,55
48,37
57,47
69,46
53,27
64,41
13,58
47,35
35,37
55,37
55,25
41,43
47,17
57,1
61,32
41,58
31,13
2,53
37,40
51,12
57,43
45,27
55,28
29,31
47,47
55,46
28,45
39,23
61,41
61,43
47,5
1,66
13,60
57,7
37,49
69,1
32,23
59,65
47,45
7,68
68,25
60,17
67,49
7,70
65,32
67,17
45,1
42,33
59,11
61,46
9,61
61,25
57,15
61,5
57,13
21,43
21,49
20,67
29,37
51,4
35,55
9,1
33,61
66,29
46,39
53,33
37,37
57,10
39,39
38,1
27,47
43,25
60,49
67,3
53,13
59,6
53,6
59,33
33,23
17,55
41,29
56,21
1,51
17,0
68,13
43,53
57,35
30,45
57,21
51,7
15,63
48,49
15,3
3,59
45,3
57,31
55,17
40,17
18,67
58,23
65,37
57,34
59,3
69,10
36,51
53,50
61,13
9,59
43,8
7,57
43,23
31,36
49,11
46,53
26,33
21,63
59,8
43,37
51,5
31,35
13,47
65,47
49,41
67,37
13,21
58,15
67,7
33,56
38,19
21,66
1,63
65,27
59,27
43,51
50,5
52,15
68,37
1,59
23,65
52,37
39,16
39,4
67,40
9,65
68,41
33,31
32,37
55,39
6,49
9,64
19,5
5,52
33,39
5,63
59,14
59,25
31,45
69,22
61,19
51,39
36,9
62,49
52,19
53,3
35,2
27,29
61,1
13,69
22,55
57,25
9,43
69,19
56,13
59,41
61,47
61,12
32,31
51,32
13,61
27,9
23,31
16,67
69,38
45,49
11,3
19,52
23,49
67,54
16,53
11,55
41,23
9,45
57,11
63,1
51,24
47,31
57,45
7,53
41,13
11,45
63,17
26,49
69,23
46,25
59,15
20,51
41,32
15,45
45,31
31,29
15,1
14,67
56,5
20,3
61,4
69,9
39,48
47,43
5,61
43,26
27,53
65,17
13,43
53,15
49,65
63,61
55,8
39,15
39,40
61,51
37,1
57,29
66,19
63,33
29,13
51,38
2,67
31,33
55,4
12,45
60,1
41,27
47,37
13,67
19,59
47,25
51,33
1,62
48,13
10,65
53,23
37,47
25,52
11,1
49,53
55,51
25,51
60,9
39,55
58,51
57,33
15,54
18,3
2,55
49,1
43,48
31,28
51,41
11,34
66,51
32,43
69,35
37,25
39,17
33,25
47,10
67,43
63,45
17,59
61,49
56,3
37,41
39,31
49,17
25,27
19,63
60,37
7,49
17,45
49,23
64,15
36,1
22,51
63,32
5,68
13,35
33,8
69,31
50,11
7,69
17,3
69,45
49,25
59,5
55,11
1,53
10,61
35,54
11,57
35,53
37,19
19,55
43,12
33,43
36,53
59,38
63,11
59,7
39,45
27,31
65,30
15,42
52,39
36,59
28,49
21,0
69,28
23,54
44,45
7,61
65,25
34,47
39,12
45,47
45,5
49,2
29,47
9,49
58,43
39,47
51,25
9,52
51,1
42,39
69,25
19,67
23,15
63,40
15,52
51,29
33,52
7,66
51,40
7,51
45,18
55,15
47,52
28,33
40,41
5,49
56,7
36,35
55,29
58,35
53,5
44,51
59,44
56,29
57,27
34,21
11,58
15,69
47,22
35,28
61,34
3,47
54,49
70,43
46,15
49,26
58,7
17,39
41,10
63,15
45,21
35,7
24,31
7,48
53,7
49,44
43,49
51,19
37,33
47,16
37,53
43,38
32,55
47,39
39,35
35,9
55,3
7,63
55,14
69,11
57,5
41,21
6,57
67,44
59,35
67,47
41,52
38,23
51,53
13,63
69,43
63,41
8,17
33,11
43,63
49,21
49,19
38,37
19,50
48,9
57,18
59,34
44,63
47,32
53,48
45,65
50,29
37,57
50,3
67,63
61,27
49,47
29,52
21,3
43,5
17,65
59,46
39,37
9,66
37,21
19,61
9,56
11,31
47,59
14,49
53,21
10,1
63,9
51,55
50,21
48,5
16,57
43,13
67,8
33,34
9,53
37,27
29,35
46,7
37,36
63,53
69,26
17,61
69,21
50,51
41,47
41,53
11,65
64,7
3,48
19,51
35,42
23,27
47,15
29,53
50,47
65,2
51,35
39,61
68,45
51,50
37,13
63,39
29,48
49,55
68,5
29,33
35,17
53,47
55,35
21,31
22,49
14,63
19,68
11,59
49,27
53,45
59,31
25,35
10,43
33,45
1,58
45,30
39,7
51,47
38,51
1,65
60,27
41,39
55,43
41,17
24,51
43,35
11,13
57,51
52,7
23,51
46,33
41,55
11,69
69,29
35,29
51,15
49,34
67,28
6,61
7,45
66,3
55,57
39,6
47,13
23,53
63,21
59,4
67,19
25,31
41,6
57,17
66,37
18,55
52,31
59,21
11,53
33,46
5,59
40,35
15,50
7,64
49,51
5,54
30,47
43,45
45,45
43,43
51,17
3,55
59,50
50,57
45,25
44,3
63,35
63,27
15,61
9,17
3,67
33,57
41,28
4,63
45,29
64,37
5,51
34,59
19,62
61,11
67,9
39,60
40,43
65,23
48,19
54,21
59,43
13,51
43,3
39,41
9,67
44,27
51,59
54,17
43,1
49,52
36,23
59,37
12,53
59,22
37,50
15,51
36,31
19,3
67,41
8,45
49,3
54,53
14,1
67,29
6,45
1,67
57,40
53,41
37,29
45,15
19,69
34,35
5,21
39,34
61,21
53,24
37,55
56,31
69,14
44,55
51,43
45,7
53,61
9,51
47,8
63,37
15,43
40,31
55,20
54,39
37,43
5,47
68,1
35,5
63,22
66,5
39,25
54,19
51,31
34,43
24,49
34,49
19,49
29,41
7,67
12,31
45,42
31,11
69,39
49,13
54,9
39,43
47,2
31,31
67,39
41,41
55,19
15,58
9,57
53,39
37,48
5,66
37,51
64,43
58,39
63,29
55,24
26,51
7,59
15,67
11,54
49,15
5,65
67,27
45,43
34,9
68,31
35,20
33,19
39,26
17,67
18,57
57,3
33,67
42,53
49,5
41,45
69,20
65,22
39,54
5,67
29,54
56,41
65,11
5,50
32,51
53,19
66,41
62,17
53,43
0,53
59,20
53,49
57,53
19,1
64,27
68,7
47,36
52,11
44,43
59,13
61,7
41,33
57,37
45,48
67,23
13,3
41,44
15,53
7,58
37,46
38,57
55,55
27,54
22,59
65,45
19,54
2,51
57,41
59,49
44,13
4,53
54,33
57,12
42,43
45,6
60,39
51,48
65,19
51,0
27,33
38,7
33,26
6,47
65,15
17,63
15,60
38,33
67,33
63,51
18,65
55,22
45,39
57,2
37,17
53,51
43,33
49,7
46,31
49,9
33,35
52,3
64,5
61,16
14,3
9,63
20,59
41,20
53,53
3,69
41,46
35,11
52,27
59,0
17,62
63,13
55,10
69,17
31,37
45,19
55,47
7,55
48,41
11,61
39,30
36,17
3,63
12,47
9,69
67,5
37,35
53,2
69,33
63,36
13,44
65,48
11,60
43,46
7,47
52,45
37,23
4,59
31,51
49,30
61,30
61,3
34,17
39,14
1,29
51,13
21,57
51,45
21,48
51,57
28,13
50,35
1,47
35,41
35,23
46,17
53,55
38,21
32,49
27,51
65,1
43,57
39,53
13,62
17,69
33,53
54,15
47,1
34,51
64,17
67,1
6,63
70,3
49,18
65,46
40,55
34,13
65,35
55,41
57,9
41,3
58,31
34,55
53,26
48,23
34,7
69,18
55,27
58,19
17,57
5,56
64,25
63,4
39,3
65,31
8,51
54,35
47,44
67,11
47,49
33,9
25,25
51,3
43,39
61,36
31,15
43,24
29,11
39,9
69,13
65,3
33,49
11,67
58,3
53,29
3,65
53,30
63,7
67,21
61,17
3,13
33,44
62,7
58,25
37,44
67,36
41,22
11,51
51,52
10,57
19,64
61,10
30,51
45,23
47,4
4,67
43,30
42,51
48,65
41,19
55,23
34,33
28,39
53,35
35,43
54,13
40,25
53,34
27,1
15,44
49,67
64,19
53,46
13,57
35,45
47,28
59,48
66,21
15,66
62,23
36,19
46,45
47,34
45,51
61,35
3,70
59,17
50,33
27,49
69,36
35,35
42,25
5,69
45,20
44,49
34,31
63,34
49,43
24,6
28,6
10,21
17,2
8,67
53,60
50,52
62,69
67,4
38,29
35,16
10,34
68,44
17,20
36,11
66,35
2,2
18,2
70,53
46,30
26,13
41,16
10,62
32,4
16,4
26,48
46,49
67,50
65,38
69,8
69,44
18,4
8,27
42,36
55,36
27,6
47,26
64,22
34,37
64,12
58,55
52,24
66,26
68,14
10,0
61,28
70,31
70,15
16,41
64,67
32,61
60,36
54,31
57,60
15,24
8,47
58,52
56,25
48,42
11,30
26,6
4,12
2,66
38,42
68,30
31,44
52,1
37,58
44,40
52,30
66,4
14,25
13,12
68,32
40,18
58,66
62,1
70,44
34,68
8,9
9,60
8,1
70,42
44,66
7,20
6,7
59,68
42,60
60,11
49,36
8,15
28,41
28,14
58,9
26,56
6,50
70,33
46,41
30,10
10,16
5,10
50,13
35,22
44,37
39,44
64,10
0,64
39,58
6,21
54,3
12,12
70,2
50,62
0,62
63,2
56,45
20,4
58,41
54,11
13,30
64,34
16,44
70,10
14,14
52,20
33,28
7,32
11,56
38,50
30,26
54,50
63,6
7,46
62,11
18,18
60,46
25,12
13,4
68,42
46,26
68,34
46,14
38,54
34,25
58,16
62,22
4,65
52,9
58,2
60,38
37,26
63,30
16,10
5,16
66,2
37,12
12,15
58,47
6,48
36,14
70,26
52,50
12,34
58,10
0,54
69,58
60,35
8,8
52,12
64,13
12,64
34,14
14,47
6,24
50,61
44,19
56,12
53,40
32,58
46,23
33,54
51,56
10,58
28,42
16,50
44,0
70,20
66,27
54,47
38,14
22,20
48,50
61,18
8,23
39,56
26,34
62,70
24,40
0,41
12,10
56,28
34,19
38,56
64,36
55,34
52,59
54,52
64,39
18,6
48,20
5,62
54,45
46,28
60,31
20,18
38,58
44,32
12,22
46,38
40,22
54,20
21,52
48,70
14,20
10,60
68,6
38,22
44,26
30,20
17,8
66,7
8,24
40,54
2,34
5,24
22,37
50,18
39,20
69,40
6,26
28,62
28,67
43,42
68,38
32,30
40,0
18,8
65,12
15,12
8,28
46,29
62,48
38,9
58,22
65,40
62,54
70,6
59,10
0,28
7,56
44,28
42,4
46,47
42,20
36,20
57,8
18,22
8,60
48,7
31,34
64,26
42,10
32,42
6,54
38,47
4,10
38,35
65,26
34,0
67,56
54,56
60,16
41,0
24,57
60,56
40,44
51,62
12,36
3,56
57,70
65,44
70,19
48,39
54,8
58,32
18,24
66,18
13,0
34,3
54,34
46,2
60,26
67,48
62,53
7,12
24,12
59,36
38,70
4,62
43,64
28,19
40,10
70,1
8,22
8,54
46,34
5,48
52,44
28,4
22,0
36,24
42,32
44,24
28,0
15,0
68,22
46,66
55,12
14,4
6,58
67,6
60,54
21,22
70,61
16,18
40,33
58,12
9,70
4,23
42,12
52,57
44,31
32,10
11,48
38,39
26,3
0,67
63,56
60,34
32,6
68,58
4,66
44,11
54,22
50,1
2,10
38,62
13,40
57,46
8,68
5,44
70,7
53,32
56,33
47,66
66,52
42,16
43,16
60,4
54,40
44,36
56,35
12,4
60,14
28,23
48,46
65,70
10,33
34,56
0,69
70,51
70,11
65,54
41,38
20,28
22,19
32,62
64,28
4,19
25,0
67,42
10,24
8,53
13,6
54,42
16,13
31,40
70,38
62,40
27,34
32,18
34,24
20,69
4,6
33,6
14,24
46,5
36,4
48,63
0,52
42,5
30,55
46,4
38,45
10,10
46,19
56,61
41,68
12,41
70,12
33,20
54,7
54,16
44,64
30,54
7,60
67,58
56,8
52,26
44,7
2,18
10,50
0,61
19,4
50,20
12,8
56,27
3,52
29,18
50,44
38,59
10,32
38,17
39,42
67,30
38,60
22,17
45,52
42,58
30,15
32,35
52,34
44,9
50,55
39,22
53,0
14,26
32,60
34,2
12,50
66,14
15,48
46,37
30,7
22,15
70,46
50,49
30,46
51,26
61,22
60,5
6,16
55,58
48,61
64,2
64,9
45,2
12,11
68,55
64,56
40,27
32,54
56,53
41,24
36,68
28,15
51,34
60,45
32,17
64,44
12,63
2,20
52,46
24,19
59,40
9,50
33,30
18,7
60,2
18,60
0,60
24,30
25,32
47,58
9,58
7,44
65,16
39,0
1,54
14,34
40,66
30,28
48,18
63,0
3,54
48,67
56,22
10,22
10,17
16,30
63,48
34,10
30,60
22,57
70,48
56,46
58,33
28,52
20,50
60,42
58,48
14,0
2,39
0,13
4,51
0,66
6,55
0,21
52,51
38,66
6,70
39,52
31,8
58,34
54,67
14,38
65,42
26,16
37,70
50,26
4,28
13,50
35,46
31,46
12,18
0,33
48,0
70,63
44,47
50,54
40,50
65,10
10,13
10,36
14,45
34,61
35,68
52,41
30,33
21,2
61,0
25,46
31,70
70,8
6,34
28,18
42,13
59,28
68,16
8,10
36,18
52,48
4,2
39,50
24,0
42,62
44,54
69,6
48,68
50,28
30,22
8,35
24,38
54,0
64,51
14,58
52,25
44,65
64,3
0,2
40,8
10,23
6,6
29,24
56,40
48,22
52,66
50,43
30,50
4,61
10,3
35,40
56,64
31,22
28,47
0,1
34,27
39,2
61,66
44,30
40,4
46,21
57,24
30,66
39,36
19,24
30,30
6,4
48,21
9,48
11,46
22,64
17,66
59,70
26,69
32,57
14,46
8,26
43,2
56,1
64,20
56,52
15,56
31,14
10,68
46,6
65,20
30,38
48,3
62,12
4,38
42,54
30,53
58,50
47,12
60,68
56,65
40,11
27,40
40,2
22,4
53,20
4,34
43,52
61,60
1,28
29,38
50,70
63,28
33,62
40,32
21,40
17,58
10,67
16,42
6,31
15,22
8,37
40,39
17,22
21,60
49,48
68,35
4,69
18,66
2,33
26,36
69,48
16,48
14,12
34,30
26,67
2,17
41,70
18,37
10,8
49,40
48,17
42,59
67,20
22,62
47,30
10,66
62,4
32,0
50,50
38,52
60,48
20,12
20,30
53,36
23,8
24,44
46,35
12,48
53,52
16,51
24,10
68,50
46,70
7,34
3,22
10,63
10,70
61,8
12,28
24,61
0,38
65,56
54,32
6,66
6,46
0,50
32,67
70,30
8,2
30,6
26,0
12,23
47,70
24,26
66,68
42,52
38,65
2,41
2,65
56,54
29,30
65,28
37,22
46,56
32,16
42,65
20,65
16,27
30,2
52,54
35,58
60,30
8,48
14,9
30,27
31,42
23,52
36,25
50,34
51,18
6,20
26,10
26,53
54,60
14,64
44,15
52,6
51,70
2,62
3,44
18,34
2,8
60,10
60,24
11,10
67,46
70,23
42,23
24,5
56,32
54,27
15,10
13,8
28,34
31,24
5,36
24,58
22,12
62,64
56,57
13,14
33,48
64,46
11,66
52,5
44,48
19,30
48,36
64,40
17,10
48,44
28,66
31,26
12,42
22,32
20,22
5,32
69,68
38,32
46,55
16,35
64,63
18,58
13,38
36,22
64,23
62,24
64,62
36,16
36,2
49,4
22,50
30,3
61,48
9,2
8,34
4,40
32,65
50,37
13,70
58,49
65,0
23,48
24,39
18,52
14,62
65,62
0,16
12,30
32,44
11,0
50,23
64,18
8,32
25,20
54,25
70,28
43,34
2,25
19,56
20,68
54,62
0,18
35,44
2,1
48,11
41,14
28,48
18,36
10,18
68,43
34,44
10,12
36,3
13,34
50,39
9,6
36,54
44,18
42,14
14,36
32,34
62,18
68,70
6,12
18,49
9,44
34,66
57,22
24,42
34,69
48,34
70,50
0,58
50,67
0,14
0,40
44,12
22,27
19,8
8,63
33,14
10,59
32,22
19,46
48,47
20,70
52,47
20,20
6,18
70,35
70,64
20,39
35,52
2,52
0,29
68,29
25,16
12,38
12,60
16,26
12,16
0,8
36,8
32,28
68,53
22,28
44,4
1,30
52,13
66,8
52,64
40,40
21,6
16,64
50,40
26,24
32,3
0,44
2,14
59,12
56,34
8,16
2,11
0,32
45,8
5,14
49,12
58,30
70,54
12,32
63,16
60,66
30,64
36,41
40,15
62,9
2,26
38,40
16,36
10,39
18,43
56,39
66,23
23,4
58,6
0,30
58,4
37,2
32,45
28,37
2,22
11,44
6,62
49,70
30,59
28,69
68,12
52,23
32,1
31,6
44,10
27,10
22,6
43,18
32,56
33,64
15,64
18,14
35,18
54,41
66,58
12,61
69,24
16,70
21,50
40,46
34,28
34,50
18,44
3,12
38,41
17,6`,w5=`r, wr, b, g, bwu, rb, gb, br

brwrr
bggr
gbbr
rrbgbr
ubwu
bwurrg
brgr
bbrgwb`,X5=`bwb, wrrbg, ubwg, rwg, urbbgrr, wugr, rububww, rbrw, ggw, grgwu, wb, gwuuubw, gbr, ugur, rug, ugw, rg, uru, wgrbgug, buwwrwu, bbbuw, urbug, rrbr, uwbr, wurr, wbwrw, bug, rggwguru, brrgub, uuwg, gww, gwb, ubrb, wgrg, rubbgwu, bbb, buu, gbgrwg, rwuwbg, uubwbu, buuu, uwurwgu, gwbugwgw, guru, brww, bwgrugb, rbbgrw, ruubg, wub, wbw, bgww, bgugg, rru, urrwuw, bwwgw, brbww, gwug, bwwwbwb, uubggg, gbgb, rbgub, bwuwgg, wrbb, buwrw, gbbwrrg, gug, wuww, u, ru, gbbbu, ugwrwgb, rgb, rwwuwuwb, ruugwrb, rgruw, wwuwwbbw, urrrbu, bwg, ub, urg, ruwg, bwr, wbwb, brbwrwww, rbwgrgub, gbb, grwwb, bwggw, urwr, rrrug, buw, gbbgrguu, rbgg, brbwur, ububwb, bur, wruru, buurbu, ggb, ggr, rggwrub, uwbbbbgb, rrrb, uwr, bwwrr, brgw, urrwug, gub, rwwb, wgw, ggur, bbrb, uwrbgbu, buubu, urb, bg, gguubbrg, gg, rwr, uubb, wwb, uwgbub, brbgrrb, ubbbrwb, ugr, ggwwug, wbgbu, grw, wrb, brr, rub, gr, guwb, ggrgr, rrb, uuurb, brw, wrg, guw, uggr, uuurgw, wrrgu, wwuu, uruuu, bwrr, wwg, bwguu, rugww, rbw, wur, buuuw, rwb, bbg, gbu, rurw, brwbbb, wbbgguw, rrrr, bwbbb, bgu, uurbb, gwrbwb, wgwrgbwg, wgrw, gugw, urrbb, rww, ruu, uwbrbb, bbbrwb, bugw, wug, wgg, rwru, r, uwg, wggr, brbwgb, uwbuwg, ubr, rbgwrrw, grwbur, grrrbb, wgr, rrbw, uurw, wbgg, buwg, wru, ruwwu, wbbbrg, grgbgbr, uuu, wrr, ubwr, rubbgb, gbrw, gbug, uwrur, ugru, uruggr, ubu, uwgg, wrgb, wbg, ug, guu, bgw, wbu, wuru, rur, wwbwwr, wbugg, wrwgwwb, rrgu, uuugg, bgbb, gb, uwugwgu, bguw, ugwgwugb, brburg, grrbw, brb, bguwb, bwugu, ubwgg, rbr, wwrb, bwgrug, rbww, gwg, rgrgu, bwbgrgb, wwbu, bwugw, uguu, uubuggwb, uwb, gbg, uubur, urwbub, uggrr, wrurb, bbr, uggg, gur, wrwrw, bbbrug, bbuw, b, wbgw, bubgubg, ggg, bru, gbuwr, ruw, wgu, ubb, gru, bb, uwbug, ugbrgu, uruwrrbb, rrug, bgbu, ggwgbrr, rwuuuuu, bgr, rrwu, ruub, burw, bbww, uuuu, gwwb, wrur, grb, br, bwwgg, gburg, ugubw, gbwbwbb, gwrgubrg, bguwwr, grgugbw, rugw, guww, brrrr, uguurb, uwwbbw, guwgu, guguubr, rwu, bbbwb, wggru, bub, rwrg, gw, bw, wrgbrb, ggbru, gwbw, wuwgu, rwgurr, gugr, rbu, wrbguww, uuww, rbuwu, uwu, rburgwu, wgbbuu, rggrur, wbr, buubb, rgwb, bgg, rwurbg, urgrg, rbrrr, rbur, wr, uwuruggr, buug, wubw, uubbbu, gwu, ubgg, rgu, uwwr, brgrgw, uuw, wwr, wu, grgwbbb, rgrbr, bbu, wuwgr, rrg, urw, urgbgr, bwwb, gurgu, rr, rgr, rbg, rgrr, uwgug, gwggbw, rgg, ubgr, ggww, gugggr, rrbgrw, rrr, ubw, uw, gbw, wrww, uwwwrwbu, bgwrugu, guur, grrruuw, ubrgg, ggrb, grg, bgrru, rurrb, ugg, wwgr, uwbrg, wuw, ubbu, rbb, www, wwubgu, ur, bububg, gwr, grgguwg, bubr, wwu, ggru, ugu, rgrru, uburu, wuu, wbugrwu, uur, urwgrwg, bwgwgwg, ubgru, burugw, wgbwrr, urr, wgb, g, ruwggg, wbb, bbrrg, wbuw, uubwugw, rwrr, uubgr, uww, gu, uubu, rrw, ugb, buuwr, uug, rbwbubgb, wgwburur, rrurr, uguw, wbrw, ggu, ruwgwb, rgw, ubrbgu, ururb, rb, ruuu, ubg, rbbbggwu, wg, wbrbbg, gwwwuu, bugg, uu, rbgwrwu, gggbbu, rbggu, wbwwr, uwbbu, ggrwu, brg, buub, bggguu, bu, gbrubgwr, wrwwb, bbw, wubrbb, bbwbbur, bww, uwwuuw

wgurrgbbgwuuwwbwwuwggwrbggrbrwrgbbwwwbbbubuuwbwuuguwr
bwuuubbguuuurgwrrrrgguugurwbubbrrgugbuwurgu
wrguubgwbgrwubrbbgbrbuburugugbrgwruwrrgwgbgwubrgrgg
rbbbwbruubwruurbbbrbbbwwgrurgrgwugbbrwgwwuwgwwb
wrwrbrgrubguurbubbgbwubrgbbwrwwwburbwrrubbgruwrwrgubbgwwu
brwrbuwbgugubwbuwgwbguwugbuwwurwurgwrurbrgwgwwwbrb
bwrrbbruwrgggurgwuwuubuwubbwwwwgbwubwbrguwwbrugurwgrru
burrwrgrbuwwwrwbuurrbwgbgwburrwwugubuggbguwrgurbggurwrw
bbwrgubwgwgrwubggbrgbrgwuwggwgrbbwbbuuuugwrgbubgurgwgwbbww
ruwbuwwgwwgubuguurbbwggugwwwugrubwbwgbggwgrr
wuubwguggguwrwgbrrwbgubuwgrgbugrwubugggwru
rrugrbrwrgruwbwwrbwwubbuubwrrggwruruwbbwrwbbgw
wruubuwrgwbrwgbbwrbrbwruubrbuurbbguwubwuuguwwrrgggub
bgugwguwgrrbwbuugwgwruwugwugugbuuwwgggwgrggbu
bgwrbgugrgwwururrrbrwrwugwwbgrrubrgbburwrrr
buuwbggrbrwwbgugwwugbwbbbrurgrrwrwbuubgrruwggbwbrugwr
rwbguwuubururbugrwbguuwuubbbbwrrurgbwubwgwwwgwbgbwggrrwb
wbbururwuuwuwrrgbgwgrubggbrburrbrgrugwuwbwrburwwb
buubuggrbbuwbgwuwgwbwbgwrggbbbgguurwrrrubwgwrrurgruubu
uwbwwggrrrubwbbgrwgwgwgwguurwrwwrrwwwggrwwbwrgwuuwgw
rubbgbbrrbrubgbbggwgrrbrrurwrguggwwbuggbbgbwrwwbuwr
wuwbruwgugrgbwgbrgrbrbwbubgbrurbgurrurggbwgwguuwgrugwubwbg
bubgbgbwuwbggwuwgbrwbwrbuwrugwubwbwrwggwrggbbur
uwuwurrrbwubbbwgbbgwbuuurggwrwgbwwuuwwbwwgburburbruurwugrg
brwrrbuguuuugbrugbwggggwuuuwguubbwuurwububwgwwuggrwr
uburugwgwruuruuugwrwrwuggrrgguubwgrbbbrrwwgruwbrurgg
ruguwgguubbbgwbrwbggbuwrruwgrrbbbgurwgbwwwgrguurrbbuwwggu
wbwrwbbrrgwgbuguwggrrwwuruwbuwuurruurrbruurwuuwrgu
buuubgbwugbubrbbgwurbuuuwuwgugbrrurwgbbgrwbrrgwgww
rugubbrbguurwrruburrubwwrubrugwwbbrwrgwrbrwwubwwrbu
gwruuwbbgrubruubgwuwwgbrguurrwwrrrwbrrgguurbb
rgwguuwrwbbgruwrbuwbwbbwwgbwggwubwuwwbwruwrruubrbrburrr
rbbwurrrbwugwbburwwwrbgggbggwbwrgubrbwrwwww
bgrwrwuwrwgrwgrrwgwrrugurrbrrrggggbwguwrwwbbrb
rwrrbwgrbgwbrruwbuwrruwwwgrguwgggbrbrwggwbwgwbrr
buurugugugbrugbugbwwubgwrrubruuurgwurbrrrr
ugbrbbrwbwgguwwrbbuwwgurbuuurgwrbrgbwwgbwurrrggrwwurur
gwgbubrbgwrrgrgrrgwrwbrurgurugguruwgwubbbrbbb
ububbbrbrgrrgwrurgwwwbuuggwwwrwrwwugruwuuwgbwurru
rrururggwgbrrubbbwwwwuuguubugggwrggurbgurgguwgubbgbbrg
rgwbbgbgrgrbuuwgubgurbggbbggwgbuggwrugbwuuruugbwuuwg
uubgbwgguuubugbwrwgwggwbuwubrrubbwbwwuubbgwbb
ubugrgwwbgbuurgbbggwggruubrwguuruubuwrbuggbgrrrrguuu
brrgggrrbuugbbbrbgbbbbwgwrugwgbrbuwbuubrbgr
rgburwuwbwgrrbwgwgbgguugrrwwbgwuwubbbwwwbbuguw
bbgrrwrwwuuwrgrubrwbgrbuuuwuwbbbbgbwbuuwrbbrwrw
guuwbwwwrgbgwrwwbbrwruruggburuwrbguwwwwuuuwbw
rurwuubwwrggbuwrrgbgwwbbuuwbubgbbrurwbgwbbgwruuwgb
grrrwuruwrgwgggugwbbrugrgggbbgwwbuwbrwuwubwbbrwugrugugw
ubgubrggrwgugguruuruwuguwwbrbuwubwubrbugrwr
rrrwbubburgguurwbgubrggrgwrrurwuruwrrbburrgbwurwgbbwwrrb
bubbbuwrgwbbgrgugbbrgbubrrubbbrwbbwuwrggggubwbrr
ruwgwguwbbwrbbuuuwgrgwrbgrgurruwbgrggwbgbugruwwwrrbb
guwrwgbuubwurbwrbbugrrwwggbugwgwugbugbgbgbub
rbwwubrgbgwrwrrgbuwrbwuubgwrugbrubwgburbugbrwwuwuwbwwrw
rguuubwbwgbbbububugrguurwrwgwrgbwggugwrw
grbgbrggwubbbwbrbrwbbbwbwubuuggrruuruurbgrr
uwrubgbwuwrurrbbguubrbwbururwgrggbwwbgbbrwrubggwrbbbggwuuwrw
brrwbrbugubrbrwgruurwbbbgrwwwgbrugwbgrrrbrwugurruuuuwb
ugbrwbgrbuugwrguwrbbwwrwrrbbrurwbggggwruguwbwbwuuw
rrbrwbrbbrgrbbwwggugrwgbgugrgubggwrwrwrubwrgugbwwgbgwbu
ggwrgwrbwggrbbugugbrwrgrrrurbrwbwrbbbwbbgrwgbbr
rbwggrwguwwwwgubgbggbuwwwubrbbrbgbwrbrggburrrwwuwurwg
uuwguuwwrrgurugbbbwruuuruwugrbrrgrwrgbbbuggwwrubgw
uwwbrgguwbbbburrrbbubrbrurrbbwggurrguguwgbrurwbbbgu
gwbrgbbbbgrwurbguwruggbrgrbbbrrbgwgrugbuuruwgwugwwb
wrrwwwurrubwbrgbwwggurwruwubggbuurgwbwbwugugbbbwr
ggbubrwbwbuuuurguuruwbbruwugwgwugbrgbuwwwwgrbwrw
wguubbbwgbbbwbgrrburbgwrrrrrrbbgwwuwuurrwbrrw
wwuubwwburbrrgrubwgggwguubwrgwgbubuuuguburbrrwurgw
wrruugwuuuruubwrbrburuwwbwugwuwrwbwuwuurbwggwbgrbr
bwugwggrrrwrbbwbbruurugrrbgbwurburgwrwrrbruguubuwgrgb
wbubwgwwwrbbuurbbwwwwbwugrwbrurrruwuwugrrwugubwrbgrrgrr
wbgbggrggwgurugurwgrwwuuurgbrggurwurwwgurrbwrbgwrw
ubruugbbrrgwrbuuguwgruuwggururwrururugwbbrwburrur
wwbgbuuggugrrrwwurbgbgbwwgwubgrrruurbubbgwgbrwggurbb
rgurrurrwbrgbrbrgbguuguwugwwbggbwubgwrbbuwbrgbbrbrgbwb
wuuuugwwwrwurbbugwguuubrguwggrgwrguwubbgrwwgrgbbgrguuwguwrw
ugggbrubrbuwbruwguwrrguwgwrwgwrbgbuguubgggugrbwubugrr
grbbggbrbuuurugruwbrrgrubgrbruuubwwbgwwbguwwgwwuwggrr
bbgrgwbruguwrggwwrwwrrggwbbwgugrgbrwurwurgrubuwgr
brurwguurrrrubbuubggbrbwwrrbrugwrbuguwbgbgwubg
wbguwbgbrubgwrwbbgrgrbuwbgubruwbbguwwbbwugwwwwrw
gbuuuuruwgbwubgguwgrwggbwbrrwrugrgwbwruuwrr
wwrrugrbgrrwwrbbubgwbguuguwrgwuguwuuurguwwuwgbgg
gguugwwrrbubwrggbbbuugubbwwrubggbbbwrgggbwguww
gwurrgbrrbrurgbgwbgwrrgbbggrwwwbbuugrbbugrwubwb
bbwbgrbbrbgrrruuubwwrrbwgwgwrrrrggguggbrrrubggbrrgwbubr
gwgbbuguuuwurbggrrwrrgwbwbgbwurwgrugrwgurrwgrubwr
ugubbgbgrwwrbgwrbwrbbbrbwurgbuurbuwrgguugrrugwbbrr
grggbbuubwbgugguwuburrubwuubuugrgbwgurrwbubrrwburg
rwgwggurrbwurbgwbbgugrgrrggbrugrwwrgbbwrburwgrg
uwwrbwbrwbgubuugbgbbrbbgbwgbwbgbruwrwuwgbbw
guwrgwrgbbguuubbburuburrbrubugrrbwgrbwbwrgwrrgrbruw
buwwgrwuwwuuuuugwubwwggbguurbgbbuggrbwuubbbw
rbggrbuuugrwwrwbrgrgugrbgwbuwrbuugbrbgwwurwrbwwrbggwrbburg
ubwbrwrubbrubbgrwbwbwwugrbbgrgwgbrbwwwruwuuuuurrbuwwg
rwwgubgwggrbgbrbgurubbbrwurrgrubrgbgrggggbgbwwwgwrg
rugbbwwwwuwgbugubbrrggbwgbgbruguguwgubrguwwb
rwurrrgggbrwwrrbubbwrbbbgwugwwbuuwgrbgrbrwwrubgbrwbrrgwrwg
gbuwwbruguuubbubrbwubrruurrrrugbbrrwuggwbggw
rbubggbgwgruwugbggwgbuubugurwrubuugrrwwwgugwuuw
grrubbguubrbwugbubguuugbrurubgurrrbrubguwrbrrbwwuw
bbruggrubwrbgwubbrrrrbwrrbgbuwbuguburrrgwwrwgggrbbugwubww
uuwgubwgguwuurrbugbgrwrbwwwgburuuguwguwrwgbgrgguuwrugbr
wggrgbrrugbgrugbrrubbbbrwwwugubrurgwwubwbggwuwgwwwwgwbgwb
ggubuwrggbuwwwrrgrwwgururbuuwuguubrrwuubugrwugburugbbrurgw
wgrrwubuugrbbbburgbwubwurwbwgrgwgrrrbggbgrwbwguwwg
bggubgbuuwbrurwuwguuguwrgwgbbwugubwuwrggrrr
bggbbwbugbwggwgurubwrwgbbggrwwwrrggwbgrrrwgrrrgbwubgrbuurw
gbwugruwubgbuubrgbrgwggbgbrrbrbwubbbuwrgubbgwggbgbbbgubrr
rwgubwrguurbbrwbrrgwgggbwugbbrwwuuwbguwbuwguuwbwuurwbburr
ruwbrubububggwuuwbruwubgruurrwuwruurbuuuuwwrubruugw
wbrrrrgbuwgruwwrbrrggwgggrbugggbgbbrruwrrwbwbggwg
rrgbwuwugurwwbrgbrwuguburbrbbururgwbwgruuubg
brwubwuugrruurrbgrwugubuwuurwrwggubrrbrbgbggwugurgwuubuuu
wgburgrbwurruwbuuwbuuwwbgwrggrbguwwbuuubgw
wwrrgwrbwwuurrgbgwwruwurbgwuuuwgbrwggugbwrubbwrgrg
uuurbbrbgbrbbruruwurwrubrbwgrgubwbuguuurrrwgwwrw
wwrgrwuubuurgbuwgrbwbguubbbruwbuwgrwururrrbbbggwurwbwwrbww
bgwrwubgrbwbbwuurgbgwuubuggwbgwurrbgwgrgwguubrubwrw
rwwgbbrrrruggbwgugurwuwgggwgwubgbrugggrbwgguugw
uwbrrbrwruuurbuwgrurbbrgguubbrgbwrwwwwrw
bgwwgugrrbwwwbwgwbbgrbrggwrbwrbrwuubbgrrbwbgwurgwugwur
rgwurwrubgrgrgruwwrbrbgwbuwggbrbrrgwguggrgwgbwubwgru
bwgrgugggugrugwrwbuuwgburbbgurwwwurrgruubggw
gwuggrbgubgrrugrbubrgbwuugbwbbbwbwuwrubwuuuwbgwuwgguuwr
bbgubbwrbugrwrwgburruruwbwrugwugwwwgwguguwwrgwurrrgww
wrwgggrrbgwwggugbbbuwurggbbgbruwbbbbguuwgguubg
rbwubgrrbrwuwrrruuruubbrurwrrubuugrrbubrbbbbrbgrwuur
grrrguuwuruggrwgrgguuuwgbggwurwbwbwbbwruruurubugubbgr
wgurgbuuugruubgwrrbbbbrburuwrruwggggruurugbbugrrb
urburbwgrgubbwgubrbubbgbgrgruugwbwwburrurbuubgrguwrg
wrrwugrrbrgwrwwuwrbggbrbgwggrbrbgrgubgrbbbbbwrggu
wuubuguugggugwbrwbbuwgurwwgrggububrgrbguwwgbuwrr
gwrgwubrwgwrbugurwwrbububrubggbwwgwbubbbuwrb
rbrgubgwruwwgwurgbubbggbwrbwrgrgwbguurwwub
rwuwbgugbuugwbgwgrwrrggwrrugrwugwgwruurwgbrgwrubrruub
rrwgguwrgrwugugbwrrggguuwguwwgwwbbbuwbwwuuurubub
bbwwwgbuwwrgbrugwugwuwgwwwbrwgbruububwrwrbugrwgwwuugb
ubrurrgwgbrwgrubbbuuwuruggbwwbguwrbbwbwugwbugurbrguubur
grugwbuwrwgrwubbbguuwgrrurggbuwbrwruwguggubgwwggrggbw
gbuuwrwugwgrburbrwbrggbbuuwuggrwbruuururguuwwwwgrbwwruwrr
brruururbggrbgurbrugrbrrrrgbwgggwgburrugwurrw
rgbwuggwrugrwrbbrwbbrwwbbwbrbwurruuwrubgwrgbuugww
wwbgrwbugrrbwrrbwrwubrwuurwgbgugbrwgwruwbugrbgugbwrrbrr
ububuwwgbgrguuguruwugwbubgwbwgrbbwbbbrgwgbuuuwwwwgwrburu
rgrguwrgwruuggubwwbbbbbggbrwwurrrubgwgurbbgbubwwguurgbrwr
uggwuwgrggurgwwrugrrgguururbuwbuuuugruwwgbrubruru
bubwuuuwurbggubbbwrgwuugwwrwubbrbbgwggggwg
rrugubbugwugbwrbrbuuwbrrgbubbguwrwgrrwbguurwwubbwur
gguuugggwuggbbgugwggwuguwrurrrwguwugwuubbruggurg
ugrbwwbuuugrgwurbbrbruwgrgwrrwrugggbbgrguugwwrwgwbubrbgwgb
ugubgubbggrggrbrwuwuugbrurggrguwbwuwuwwwbr
wgwuwbbbwbwgurbuugggrbwbuuwwrrwuwrbbwbgrbbrrurgugwgur
grgbbugurrwgurrbbbburbuwwggburgbrgwubwbbrruuugbruuwbrguguu
rrbwrwugrggbggwbubgbbugruuwuwwgrurggbwbrruuruuburwugurr
rbgruwrgbggggrguubruwbrwgrwgguubruruwrwwrwwgbbubgwg
uurwwbguuubbugggwuuwgubrggrgwbwugurrrwrgwugurwrrubbguuuu
wrugbbgrgbwgwwrwwrbgrwurbgburgbburgbrgbbrguwruubwbrgrgwuw
wgrggwrrwrggwgurubburwbwrwgrgwwrbbbwbbrwrr
bbbrgrbbbggrrubbwgbwwgururgbbbggrgwgbggrrbguuwgwrgwwbwugu
bbbbbbrwwgwgrgbgrbwuurrruuuuggrbrubuurgrwbgbwuwgurwb
rubrgwrgubrgbrgwrgbbbwrbuwurbuubbgbbrwgwbrguggwbbuwrrbuwgr
rurbuuugbwwuuuuwbbbbgbgwurrbubwrgugubgwgruguggbburuwbgg
bbggwbbrggruwwwbgbuugbguruwrgbrwwurburgbbrruuggurg
uwrururrguubwwgurrurrwbrrbggugrrwwgrrrbubuuwbwruu
bburgggwrrgrwwwuguwrwwrubuwrrbgrbuuugwuwrwgw
bggggbugbwwubwgrgwubrbbwugbwuwbbbbuwgbgubrwbbgu
guwrrgggwgugubrguwugburugugrruwurgbwuwgbbwbg
bguwwwbbwbruuuwbwwgrbwwggbbggurugurrgbwwgu
rgrbbbbgrrwurwbrwrrggrgrugwurwbrrruruubbbwubuwburubwgb
brurubrrwrgwrgubrgbgubgbbbuwwrgugwrbruwuwrrguwrw
rgrurwbrgggbrrwbbuguggugwgubrbgbrugbbwrgbrgbrbgwrgwbw
wggbgwgggbbbbuuugwbgbrrwbbbruwgwuubbrburgwggugbubwrwggrrwr
ugwgbugwbbbugrrgbrguwgbuguwbwgrgwrgrbrgggwggwbrrgg
bgwbugwgwbgrgrbrubuwwrrrwrbbwuurggbbwurwrw
urrruurgbgubwgubrrbuwwwbwgruurrwbuwgwguwrrbuwwgwuwb
rugwbgwbwguuuubbwwuugwrwurwrrwggruwrbugwuuurwg
gwrubwrwrwbwbgwurgurbrrbbwwugwbbbuggrrrbbwwrbuwwuuwugwgg
rwbbrwgrbwugwwbwuwgwwugrrgwgrgrbbrwbwwbguugwuugbwrw
uuburwrbrrrbbwrwbrrbggbgbugguuuurbwrrbrbwgggruwwbrgwuggwgr
gubrrruuwubgbruwugugburbwbubgbrburrbwuuuwuwrw
bwgwuuwbuwgbwuuwbrbbugrgburrurwurrbwguwbbwubgubruug
brbggwbwggbwwrwwbwbuwburgwbrbbrubwbugrwwwwrbrbwwrw
brbrugrburugbgwrgruwuuwwbbwuwbwbruggwguuwwrwrbg
wwwbuwubgurwuuurgwwrgurgwbuwuwgbbuwbuugwuurrbwwgwwb
wbgrwgrubbugbubuwugrgbgbwuwwguruurggrgwubrugrrbbgbbgb
rurbgwrrguugugwbugwgwrgrbbwurguwbggwwrwrrwwurgbwu
ururuububuugwuwugrrwuwrgrgurbwgrgbbwburuuugrbrwgr
gbruggubbgrwubrwwbrgwbruwgrbbwwbuubugruuuwuw
wwwbbgbruurrbbbwrgggrggbbgrwbbwbwuurguwuwuubgugwguwwgb
rurbbbgwubrrrgbrruugurggbrwguugurrrggurwrguburbrwwrw
gubggrrwbrurwurugubuubgrrbbwguuguwbwrbuuwubggbrbgwrrb
wggburgrrbrruruurbwwrwuurruuwrrwbuwgbrwubggwwrubwggb
rgwwwwuubgwbuubbuuubrbugwgrbbrgubwrgbwgwwubbbbbbwbbgwgw
wwubwgubrrugbububwwbbrugbbwurruruggurbuuruuwwrw
bwgbbrrbwrbuuuugwgrbgggwbubgbgwrgggggwrrbwugrbwbuwubbg
gbwwuwgbgubbrubrruwwwbgwrwgrrwubuwbbwwgurrubwbr
gwuwrgwubwrwrggburwggrruggbubwbbggbrugwgbburgugrrggwrw
uwuuuurrrubwbwrwwrubuuuuwuugruggwbburwgrbr
grurbggrbrggbgubwrrgwuruuwuwurwurburrubgbugwbrwu
burbbggrrggbbubrrrbwwwwburwuuwrruwgruwwgwwrgwbwuwubururwub
buwbrguuurrwuwbwwbuggggbbwwwwbuwbggurwuburugrguuugub
uwububuwgbrubbwguuwurrgrurrwbggrrwwrrrgrbubwuwgwrrgbububgr
gwuwgrbwrwwugbbgbwwuuwwrbggrruubwwwrgrrwrbrrgrbwwbgbbrw
bwbbwrwrgguurbwgrggbrburubgwrrgubwbbgbuugwgbbbgb
rguubugwuugbrbbuggwbwgwggwguwbrwuwgrwgugwwwrrwgbw
bwruuggrrgbubuggwbrwwbrbwuwwugwbuwuwbubwuwuggb
bggwwubbbbwrgburuwbwgbubbwwbrugbgwrggbrwbbbuwrubwgburgruw
urwbbbruwbgurrruugggrbbbbwrbubwwggubgurggwbggbgwwgw
rwwrrruwrrwuuubwburggbugwrugbgrwgbgrgggurrwbwrwguwwrwg
wbuuuuggbbrgurgwurbrruwrrugwuuggbbwbggwugugrrgwgwrwwrg
uurguggwrwwubgwgrggruwwuurububwwuurguuwbubgrgbuw
uurguwuruggrbbgurgbbubrrrwwurguruugbwggwgrgwgrrwrw
burrbwrggwgwwwwbwgbwwrwwwrurubguwwuurrgrgbbgg
ggbrbwbwuuuurrwuwrrrrwuubgbrwwrrgubrwbrurbwrw
wwwwggbugwrwgwuugbuuwubbgggrguuuwbbbbrrrgbgbubggrwww
rbwwrugbwrrgrbgbgruwgwbururuurwgbrbrurwrw
uwggbrrubrugbbbrgbwwrbubwbgwbuguwgbgbuubuggwbwbrggwbuuwu
rbwgwrwgwuruwuruwwuwwbbwbgwgrbrwruuwrguwrw
buruwrbgwrrwwurwubgbgggubbugwwugwbgwubbwbrwgrbuug
wbubrgubuurbgbgguwubbgwrwrrrrwbwurbgggwbug
brrgugbbwwbwrwrwuggbugrgrwwbbwubwuwubgrwbruggw
rbugggrgbubuwggggruwugbwubwruwgbrgrguggbuwbwbwbwrwwr
grubrwrbrwbubbbrbbggrrburwruwbrgbbbwuguubbrwrgrwbrgururb
rbwrbgwrgwbrrbbwuggwuwgwwrurwubgbrwuuuubwrbwurwwurugbrwbgwrw
uuwruurggwbbubwgrgrurwwrggrgrwwguugwwbbbgurbwbru
uruuwrbbubrugwwwgwbgwwwbrggrbwubwrbggugwugwwrrrwg
rwburguuwrwbbbrwrgbgrgrwgrrurwugrgrurwgbbwr
uwrwggwuuwwbbgwgwubwggurwuuwgwwrwbubrbrubwugrrugbuwgwgbr
wugubwuwwbrwgwuurruwwrbwwgrrwgbbbburbggbrbugubbgw
wgrrwbrgbbbrbwuurrgwbuuurubggwrbwuwrgurgbbwrguugubwrrub
rwugbrrwgwgbbbrwgbwruuurgubuwggbugguurrurgurgrrg
bgwugwuruugbwrurggwuwgbbwwruburuuwwuwwbbwuwbrrbg
bgruwbbbbguwugrrbbgbwgwwburwwbwwbbwrgwbbgurwrw
wwbguwuwuubbbgrggrgruuurwwrbrurbgwurbruwrbgugwwguwuruwb
wbbubbbuwrbwrwbguwgggbuwbrwrburwrbugrrwgbwwu
ruruubwuwubrgwwuwbruugwubrgwrwbgrrbrgwrwbwg
wgbuwrgubguruwugggruuwugbwwwbwuguuggwbwrubugbruwr
rwrbrrrurgwbwgbbggwgwrgubbbrwbrrrgubwruurwrrbbwwrbbgrgw
wgugrggwgwbggrwwuuuwbgwggbrbuguwwbgbruubwrru
wwrwwguuuwguwrrgrrubggwggggwgurwwwbggruururr
wwgbbrwuuwrrgrrwgwugbwrwbgbuurbggruwubgggwu
grrbbgrgruwrubgbbrbgugbwgbrrbwwbubrubbguwrrgwrrug
gwrbubgggwgbgguugwrwwwuwgurwrburwgrbgrubuuwwwwwrurg
guguwgrwbuwgwgbuwgrurugrgwrbuugbuburuurrgrburubrgrbg
wbgwbbuwubrgbuwwrggrwwwrugbgurwgbwubggwurgwbrwrwbgw
wrbgrgburgwugrwubugwrwuwrggbwbgwrgbwbgbbbururgwrw
brurwgwbgwwgurwugggrgubbwbwurbrbguuuruuuuuwgrwrrwwwrwu
grbgbbbrbgubuwbubbbwrurgggwgwurwbubwuwbgugbgurbggwwguguwwb
urubggbbwururggburbwububugbbwbgwbbubgggruggrgrww
bwwbbwbwwrrwbwwbbgbgrburuwruwwrbrrbbwgrrwrgwrrbrubuggbr
rbwruuwrwurwgubbgrwrwbwuugbrurbuwruwurwgubggrru
grrwwrrugwwrubwbuuubrubgwgbrgugbubrurwuuuurrbug
wgrbwggbbrwuburubbbrbbwwwgrugbbwwbrbwwuwwuuw
ruuurbwruubbuwwbrrgwburbwugwbbwrwbrurwbuugguwww
wbwurbubgrrbubwwgrugwwwwubwrbgrwgurwugrgguuwgrubbubwgg
uwuuubuwggwrwuggbguwrbrbbgrbwrwwrubgrggubbwwgrrbwg
wuuwugbgubwwubbbwggguwrgwuwrrrbuugwwubuwubgrwrr
uggrbbgbrgrwuugbgbugbggrbgwbugwbgbgwbrrbrgruwgrbwrgr
ruugbwrubrgwwwgwrrrwuwgbrgbrbbrurwrbruuwwrgug
bbubbgbwrwbrbwbbgwbgrggbwguggrgwuwwurwwbruwu
urgrrbugwwwurgbggwggugrbbuwwgbgggugubbubgr
wwgbuwgwgwubbuwgrugwggwurburrwrrrwruggwuwrr
brrwrwrwuwuugbgbwbguwrruubrwggubbrgwwggwwr
ugbbwwgrbgugbwwugwruggwgrggugwruggwrbbubwbguuuwuwugrrbb
urwwuubbgwuururbwbwgwgrwbuwrwbwugwrubwbwwruubgwbubgbg
ubbbuwuuggguwrgggwuguuurbbruwbwgrbgbwgrbuubwurbrug
wgwbwbwgruubgwbgurwuburrbbbgruuuggwwgbrurrwgrwuww
uggrwrgwgubgrbbgwbrgwrbbbbuwbbugrgwuwubuurrbbgrwgbr
uwrrwgguuruuubrwuugubugruurguwwuubrrrgbbbwrbuguuwrwgb
uguugbwbuwbrwbbwbrgbrrwrwrwrggwuubrubbgbrrbrgwuguguuw
gbgruuwrrububurguruuwuubwrurugwuruuwgwgbrgbrbb
guwbgruwuggrubbuubuuubuurwuubururrbuggwruggr
wuurwrbgguuugrwgbrubgwrwubwwuwguwwgbbbbbbgrwgwr
wbgrgrwbwrwbruwruburuwwburwwbgrgrburwrgwbgwr
wwuwuuurgrrrgguuwbrwgbuuuuuwrggugrwgrguuuuuubw
gwwggggbrgwrrwubbrrbrwbgwuwwuwrrgrguwurrbburubbr
rgguwgwggguurwrgwuururrbrgguugwgrbwwurgwuuuurr
rwuwbguwgrbwbgggbuwwbwuubrwuwrwbbbuwwubrgw
wwrwuurrbuuwbgburrggbrrbbrubwwgbwwrrwubgwuwwrrruugururruww
rbrbwugrrugbugwggwurugrruwrubrgrubbrgugrgbbuggbgbbgrrgwrr
uuwggwgbrrrgbrrbuburugburuwwggbrguwbuwbwuub
gwburgbuwwruwbruggwruruubbuwbbwrrgrgrrwggug
buuuubbrwgwwwbwrbubrbubgruuruwugbggguuurbrwrrgbrugwgbuu
ububrwwwuwuuwuwubbbrbrwrrwbbrgrwggbugbbgrrugbgr
uggwwruwwbbwbrrrubrbugwbuwbgbgbgrrguwgwgrurwwgggb
gbguwugrwubwwwubwrbwuwbuwbuuugurgwwgrbbrrbrgwrbrgggrurguwg
rrbwuuguggwbgwrwbrgwrrwbgwubbgrrwgurgrrbrbbrwrubuwwrbgub
gburubbruwggrbggrrbbgrurrubgrwurwrgrguurrrgggbwrr
bwrwubgwwrrrbwuwbuuwwurggwugbguubgwbrwgbbggwggu
ubugwbbrbrrwbuwbrbrggbrwrurugrrrrrgubrrurrbr
urrurrwuugbuwggbbguuwugwwrbbbwggbwurrgwwggurbgugrguwurrwwb
wbbrgwurwrggrbrgwgugwuurrubgrgrugrrbwbrguguburrbgbgb
uwwurbuubwwruwrwbrbubbruuwburrwrbrbwggbbbgurrggwbgguu
wrbwbbgurwbwgrubbgrgbubgbubrrgrbuwggrwruwgurbwwwggrgguugg
brrbubrbbwwbbbwwubwgubbwbuwwwbrggrggwrugrwgwgwbrrrgwwugr
uwuruwwwrrbrwgrubggbugwrbuuuubwwugurwwrugrwbrrbbubb
brbbbgrbuwggbrbgbuwwurwbbgggrrugrwbgbgbrrgrgwwbru
wuuwrrubrbwuguubwwgwggrwwwwwgwuurbwbbwburgbrwwbwrgrgbgguu
rrruuwbbrubbrrrburrurbwrrbwgbuggubgubwrugrrwbuwubwub
rbgbuurgruuwrgwwrrbrugbuwrrwbbrggguurwgrrbrrgrgwuug
brrruuwwwrgwbwbgrwuuubwwrbwuruwrwbwwbgbrwgggwb
gwrruwburbrugwwgbgubrbwrburrggbrrwrwwrubwrwwrg
wrrgbbbwwbgbgwgurrubrguuuwbuuurwugwrwugrwbrwb
ggbgrrbbrgrgbgugrbbruwruuwbwgggrwruuugrwug
rrrbwuwruggwguwrwwurggruwwwrwrrrgrbrubbbwbrbuuugrbggbbgbbu
ggwbwgubwbggbggrruwwbwuwwrbbbggwwbgguurrurrwug
bwbugwwrburgbwuwuwwbugwwbrgbgbwbguwubwuwbrb
wrgbubuwgwwwwuwrrgubwubggbwwrwwruubgrrbbugwuugbwrw
rruwuwuuugrggrrguurubwbrrrruwbguwwurwbgwbwwbwbuu
rbbbrbbgwrbwguwgwwbwburbrrwruwwurgbgrbrrgbugwrwwrggb
bgwruuwubrguuuuwbgrbggubbrgrbbrruwugugwbuuwbr
wubruuggwugwbubbbrgrugwrrbgwbgrwurrgruwgbwgubbbw
wuuwbruwrwwwbwuwwbwrbrwwggbgrbgwwwwggwwggwrgguubbrguwu
wbbruwuwggbbbubgbuuwbrwbgrrwurugubrguuurbgrwguug
gbggubwgguuruguuurwbgrrbwguwrbugbwbbuuuwurwwgwgbbbb
rurrgbgwbwwubuwgubbwwrurgbrwbrbubrurwggbgrb
gwugbwbuuwwrruggrggguruubgbwugbrruggbbbrwrgwu
gbrwurwbbuuurubbbbgbbbrurwwbbbbwurrbwgbwurbwrwuwbur
brgurwbwrrbwgbugbwwggburwubbwbbugurrbwwubgrgbwb
ggugwwwrgbwbubrrgrbwwrbuwuwwwrwbuwggugbrugrrrwgrwwrrwrrggu
rrubrwwurwrwbrrgbwruwbbwbgguubwuwrwurwruuguwwrugbwb
uwbburrrbgburguurbuubrbbwrbuwuggwwugwgruwurguwwruuguugbbrb
uwrggbrrubrgrrbubwwguuuwggrburrwuwruuuubrrrbgb
uubruguwgurgwbbwrrrwgubwwbwrbrggguurrrugwwbuubgrb
grwwgurrrbgbrwuuwbubwwbrwrgrggrbugrbbbrrwuwgrwwbrbwru
rbgwwbbggwrbbwbbuuugrwrrrggggrrurubgwbgbrwbgbwwr
gbrwurbrrwbgrurwuubwwrbuurgrrwgwrgrurruuubggbbbggg
wrwbuuggrgbwrurwgubgrbruuugrubwgwrrwbrgurbrwb
grbgwbwrrrbgwbbrugrugwwbuuwrbuwbgrgrgrrwwuwuwburrbubgbww
wwbrbwbbubbgrbbguwwuurrbgbbguuuurbbguurgbrgwg
uwgwbugrbrgwgrgbrrbbugbwrbrbbuubuwbwwwrubwwrbwgggurwwgu
urgwuuuurrbrbwguurubgrwwrbrgwurwuubwruwrrggrbg
wrbwwbrgbrgrrurbgrrrbwbwurgrbwgrrbrrbggrrwgu
rbgrggbrggrgbwgwbbgwgwbubuwgrrbwbubggbbwugugww
uubgwurrubrbbrbgrbgbubwrubgwwwruburgbgrrwrgwwuwuggrrrguugr
bguubwrwgggbgwuwruwbgwwgrbbbbwwrguwggwbrwwbg
wrwurwubbgrurbbuugurggrgugggrbwgwwwrugbuwb
uuwwrubgurrgbwgrbbrgrurrwgwrgbwgruwrbuwrrrrgur
wbugbgbbubgwugggbwbrbgrgrrggwrwgrwrurbwbwbbbwr
urgburwrbwgguuurubgbrwrgwbuburguwwuwwubrwgb
ruggurbuwgruuggruurwbwbgbgbgbubrbbrgubgwrw
rggbbrgbrgubuuubwwwgbrugggugwggubwrrwrgwrrwb
grwugwrbubbggurbwwuwggugubwwrgrbguurwuwurrwrruu
bubuwuugbbuurbbgugbuuuwubuwrubgrgurrbburbrbgwbwgbrwgwrwu
ruwrubuuugwrgbrwurbbwubuwgrrbbwbwuwrwuwrbwbgrbgbbbgb
wubrgwuubugrwgrbbgbgbwgrrubuuuwruwuurbbruuwrurrru
gggbrbbwgbubbgbgwwggrbrgwwwgbrubgwrbrbrwugrggburwrbbbbgb
wubbbruurwrbwubwugwwwbwbggurburbwurwggbbuwrbrrgburbbrbbwgw
gwuugggrrbbgwbrrrbbubrrbwguwbwguwbwbbbuwuugbwgrruwb
gbwrrruggbugrrgrbgrrbwwrubrwugwbrgrbgbbgrbwgbg
bbbruruwrrbburbbrbwggbrbwruwrgwwwrburuggbwruurrgrguuwrw
gwrrggugruwrggrgwwubruwwrwubwgwwrurwbgbgwwbwbgbwb
ugbuuwrrwuuwgggbgugrwbrwurbrgurrrrggbuurbrgugwububbg
ugrbrrguwuwbuwwrgrrbgburgwugwrggurgguruugwubwwgbruuugbr
rggwwwgbuwwgggbrrubwrwbubrbwrbgbgrgbwwbuwwrrurgubbrbrb
gwrburgugwubuubbwwgwuurwbuwrwuwurbbbwgggwbbwwub
rugbrguwrgubbbrbuwuwwbwwbbggbrurwwbguguwrurgwurubbgwrrrbw
ugubbwwgguruguwgrwwuwwrgbuwruwwwbgwwbgwbrr
gbuwbggwrugrrrrgwurguwrgugggggguguuugbuubuwgugwg
grwbgurbbbgbwgbgwbubrbguuubwbwbgrbrguwbrrwwggggbbwb
rbgwwgguburbbgrubbuuwwgwgbbrrwwbwwwurbrbbbrbwuuruuub
wgwubrurrwwwrwgwrgrwuuuggwrggrwrugubrgbrwbgubrbw
bbrurrubwrwguurwwbggrbwgruugbuuurbbuuruguwgrwg
rbwwwubgubrwwgbbbbbubwbgubggbubwbggbwurbgggugbwgwrwwuruwuu
brwrubggrurbwwbruuwuburrbwwbgwwuwruwugwuurwgburb
rbruuuwwbbuurbguubwwwruuuwwgwuugwuwgbrbwbrbwrruwgbwuww
rrrbrbbuuuurgrwbbuwwubuwbrgbrrwwwggbgbugbbbuwubwrrgw
ubbgbbwgurruubbubggrrbgurrwgbrguuwuguurwubgwbwrrurbwugbbu
bwwwbgguwbuuggrrggbbwgrrbbgbubrbrbbguwwrruwrbbugugu
gwuwwwubwuwubwbrggrgugbwwbbrwgbwuwwbwrggrr
wrrrurwwwuurbbgwubbgwuubuwrgbbrbwbbbruuugrgwwbwbuwbgwbrw
guuugbrbrggbwrwwbwwwbbbbrgrruubggrbwrwrugrugrrugb
rrgwwbrgbwuwwgrugrgurbgwuwurwuwwgbgurrgrurwbgrrurbwgu
rgrrgwbrugugbugggbrbrrgrwrwuuugwgbwubruwgrwggwgwbururug
bbbwggwbuwgwbwrrbuuwwrgbguubuubwgubuwrbbgwrwbgw
wgubwwrubwguubuwburuuuubbbwgbrgruuguuububbuwb
rbwbwrrgruwwbwrwgbbbgbrrrrgrwbbburgruwruwgggrbwwwuugwg
buburgwrubugbwrugwbwbwbgrburrgubwbwbubuwwu
bgwgwwuggububwwrurgurbrububruwgurwbwbgbbrrwgbrugbrrrr
wggugwwubuubrgwbwbgwrrggubrrbggubwugwwggwbbbrbgrwwr
ubbwwrggbgbrgbrwuwwrrrguwuwwrgrbuwrgrbbbbbwbu
gbwuggrgbuwrbbrurwruurrgubrwwgrwrubrbwbrubugbwuurggwbgruw
gwguwbwgrgwwgrubbwggrrurbubrugrrwuwggguwwgbw
wwgwrgrbrgrrgrurrbwwuugurwbbbwubrbwububggub
rbwwwgubwwubgruwuurrubburwbgurururgrwgbguub
wgbggrugurrbgbgwgbgrugwubrbgbwrwrrwwbrbgbwugwwrbgurbr
guggbgbgurgbubwrgwwubuwbbgbgwbruwwgwwrwugrwgurwwwg
wwbrwrguwwbgbrgrbwugbgbwwgurbggwbbrrggwwbwugguggugbr
wwuuuguggrubbgubbrgbwgwbruwwrbuuwwwwbrbrwbwbbwuggbwr
wuwbggbugrurgurgurbruwurubuuugwwgwgwrbrgrwgwwwrug
gwwgubwuuugubwrwbwgurruwrbuuuurwugbrrurbwwuwgru
buggbrurggbggwgrrubwurgrwwwbwwbgwuuuugwugubgugbbbwugw
wwwgrbwuwbubuwuwuruurrgwurbwwbgbuuuuuubwbrrgubgbuuwbbur
brwrbwbgbugwbbbuwuubrrrwrwwrrururbrrggurwuuuurbuurgubugb
uuwrbrrugurwwrbuwbuggbbbwrugbrbwrwwwwwbgrbu
uwbgugurrrgwwrugbgwgruwwgbbbwwwrrbubwrwuwguurgwwbg
rwgbwwgwgwruwbgwbrwubuubbgbggbbubwwbbrwuggwgrrubgr`,b5=`###############
#...#...#.....#
#.#.#.#.#.###.#
#S#...#.#.#...#
#######.#.#.###
#######.#.#...#
#######.#.###.#
###..E#...#...#
###.#######.###
#...###...#...#
#.#####.#.###.#
#.#...#.#.#...#
#.#.#.#.#.#.###
#...#...#...###
###############`,g5=`#############################################################################################################################################
#...#...#.................#...#.....#.....#...###...###...#.........#...###...........#.....#...#######...#.....#.............#.......###...#
#.#.#.#.#.###############.#.#.#.###.#.###.#.#.###.#.###.#.#.#######.#.#.###.#########.#.###.#.#.#######.#.#.###.#.###########.#.#####.###.#.#
#.#.#.#.#...#.........#...#.#.#.#...#.#...#.#.#...#.#...#.#.....#...#.#.....#.........#.#...#.#...###...#.#...#.#.....#.....#...#.....#...#.#
#.#.#.#.###.#.#######.#.###.#.#.#.###.#.###.#.#.###.#.###.#####.#.###.#######.#########.#.###.###.###.###.###.#.#####.#.###.#####.#####.###.#
#.#...#...#.#.#.....#.#.###.#...#.#...#.#...#.#...#.#...#.#.....#...#.......#.#...#.....#...#...#...#.#...#...#.#...#.#...#.#.....#.....#...#
#.#######.#.#.#.###.#.#.###.#####.#.###.#.###.###.#.###.#.#.#######.#######.#.#.#.#.#######.###.###.#.#.###.###.#.#.#.###.#.#.#####.#####.###
#.#.......#...#...#...#.#...#.....#...#.#.#...#...#...#.#.#.......#...#...#.#.#.#.#.#.......###...#.#.#.###.#...#.#...#...#...#...#.....#...#
#.#.#############.#####.#.###.#######.#.#.#.###.#####.#.#.#######.###.#.#.#.#.#.#.#.#.###########.#.#.#.###.#.###.#####.#######.#.#####.###.#
#.#.#...#...#...#.....#...#...###...#.#.#.#...#...#...#.#.#...###...#...#...#...#...#...###...#...#...#.....#...#...#...###...#.#.#...#.#...#
#.#.#.#.#.#.#.#.#####.#####.#####.#.#.#.#.###.###.#.###.#.#.#.#####.###################.###.#.#.###############.###.#.#####.#.#.#.#.#.#.#.###
#.#.#.#.#.#...#.....#.....#.#...#.#.#.#.#...#.....#.....#...#.#.....#.........#...#.....#...#.#.#.........#.....#...#.#...#.#.#.#...#...#...#
#.#.#.#.#.#########.#####.#.#.#.#.#.#.#.###.#################.#.#####.#######.#.#.#.#####.###.#.#.#######.#.#####.###.#.#.#.#.#.###########.#
#.#.#.#.#.......#...#.....#.#.#.#.#.#.#.###.......#.........#.#...#...#...###...#...#...#...#.#.#.......#...#...#.#...#.#.#.#...#.........#.#
#.#.#.#.#######.#.###.#####.#.#.#.#.#.#.#########.#.#######.#.###.#.###.#.###########.#.###.#.#.#######.#####.#.#.#.###.#.#.#####.#######.#.#
#.#...#.###...#.#...#.....#...#.#.#...#...#...###...#...###.#.###.#...#.#...#.........#.#...#...#...#...#...#.#.#.#.#...#...#.....#...###...#
#.#####.###.#.#.###.#####.#####.#.#######.#.#.#######.#.###.#.###.###.#.###.#.#########.#.#######.#.#.###.#.#.#.#.#.#.#######.#####.#.#######
#.#...#.....#...#...#.....#.....#.....#...#.#.#.....#.#.#...#...#.#...#.#...#.#.........#.......#.#...#...#.#.#.#.#.#.#.......#.....#.#...###
#.#.#.###########.###.#####.#########.#.###.#.#.###.#.#.#.#####.#.#.###.#.###.#.###############.#.#####.###.#.#.#.#.#.#.#######.#####.#.#.###
#.#.#.#...#.....#.###.....#.#...#.....#...#.#.#...#.#.#.#.#...#...#...#.#...#.#...#...#.....#...#...###.#...#.#.#.#.#.#...#...#.#.....#.#...#
#.#.#.#.#.#.###.#.#######.#.#.#.#.#######.#.#.###.#.#.#.#.#.#.#######.#.###.#.###.#.#.#.###.#.#####.###.#.###.#.#.#.#.###.#.#.#.#.#####.###.#
#...#...#.#.#...#...#...#.#.#.#.#.......#.#.#...#.#...#.#...#...#.....#...#...#...#.#.#...#...#.....#...#...#.#...#...#...#.#.#.#.#...#...#.#
#########.#.#.#####.#.#.#.#.#.#.#######.#.#.###.#.#####.#######.#.#######.#####.###.#.###.#####.#####.#####.#.#########.###.#.#.#.#.#.###.#.#
#.........#.#.....#...#...#.#.#...#...#.#.#...#.#.....#.......#.#...#.....#.....#...#...#.....#.#...#.#.....#.#...#.....#...#...#...#.....#.#
#.#########.#####.#########.#.###.#.#.#.#.###.#.#####.#######.#.###.#.#####.#####.#####.#####.#.#.#.#.#.#####.#.#.#.#####.#################.#
#...#.......#...#.#.......#...#...#.#.#.#.#...#.#...#.......#.#.#...#...#...#...#.....#.#...#.#.#.#...#.#...#.#.#.#.....#...#...........#...#
###.#.#######.#.#.#.#####.#####.###.#.#.#.#.###.#.#.#######.#.#.#.#####.#.###.#.#####.#.#.#.#.#.#.#####.#.#.#.#.#.#####.###.#.#########.#.###
#...#.#.......#.#...#...#.....#...#.#.#.#.#...#...#.#...#...#...#.#...#.#.###.#.#.....#.#.#...#.#.#.....#.#.#.#.#...#...#...#.........#.#.###
#.###.#.#######.#####.#.#####.###.#.#.#.#.###.#####.#.#.#.#######.#.#.#.#.###.#.#.#####.#.#####.#.#.#####.#.#.#.###.#.###.###########.#.#.###
#.....#.......#.....#.#.#...#...#...#...#...#.#...#...#.#...#.....#.#.#.#.#...#.#.....#.#.#.....#.#.###...#...#...#...###.#...#.......#.#...#
#############.#####.#.#.#.#.###.###########.#.#.#.#####.###.#.#####.#.#.#.#.###.#####.#.#.#.#####.#.###.#########.#######.#.#.#.#######.###.#
#...#...#...#.....#.#.#...#.....#.......#...#...#...#...#...#.#...#.#.#.#.#.#...#...#.#...#...#...#...#...#.......#...#...#.#...###...#.....#
#.#.#.#.#.#.#####.#.#.###########.#####.#.#########.#.###.###.#.#.#.#.#.#.#.#.###.#.#.#######.#.#####.###.#.#######.#.#.###.#######.#.#######
#.#...#...#.....#.#.#.............#...#.#.#...#...#.#.###...#.#.#.#.#.#.#.#.#.###.#.#.....#...#...#...#...#.......#.#.#.#...###...#.#.......#
#.#############.#.#.###############.#.#.#.#.#.#.#.#.#.#####.#.#.#.#.#.#.#.#.#.###.#.#####.#.#####.#.###.#########.#.#.#.#.#####.#.#.#######.#
#.............#...#.#...#...#...#...#...#.#.#.#.#.#.#.....#.#.#.#.#.#.#.#...#...#.#.#...#.#...#...#.#...#.......#.#.#...#.......#...#.......#
#############.#####.#.#.#.#.#.#.#.#######.#.#.#.#.#.#####.#.#.#.#.#.#.#.#######.#.#.#.#.#.###.#.###.#.###.#####.#.#.#################.#######
#.......#...#.....#...#...#...#.#.......#.#.#.#.#.#...#...#.#.#.#.#.#.#.....###.#.#.#.#.#...#.#...#...###.....#...#...#.........#...#...#...#
#.#####.#.#.#####.#############.#######.#.#.#.#.#.###.#.###.#.#.#.#.#.#####.###.#.#.#.#.###.#.###.###########.#######.#.#######.#.#.###.#.#.#
#.....#.#.#.......#.....#.....#.#.......#.#.#.#.#...#.#.#...#.#.#.#.#.#...#...#.#.#.#.#.#...#...#.#.........#.#...###.#.......#.#.#.....#.#.#
#####.#.#.#########.###.#.###.#.#.#######.#.#.#.###.#.#.#.###.#.#.#.#.#.#.###.#.#.#.#.#.#.#####.#.#.#######.#.#.#.###.#######.#.#.#######.#.#
#...#.#.#...........#...#.#...#.#.......#.#.#.#.#...#.#...###.#.#...#.#.#.#...#.#.#.#.#.#.....#...#.......#.#...#.....#.......#...###.....#.#
#.#.#.#.#############.###.#.###.#######.#.#.#.#.#.###.#######.#.#####.#.#.#.###.#.#.#.#.#####.###########.#.###########.#############.#####.#
#.#...#...........###...#.#...#.........#.#.#...#...#.#.......#.....#.#.#.#.#...#.#.#.#.....#...#.........#...........#.....#...#...#.#.....#
#.###############.#####.#.###.###########.#.#######.#.#.###########.#.#.#.#.#.###.#.#.#####.###.#.###################.#####.#.#.#.#.#.#.#####
#.#...#.........#.#...#...###...........#.#...#...#.#.#.#.....#.....#...#.#.#.#...#.#.#.....#...#.#.......#.........#.#...#...#...#...#.....#
#.#.#.#.#######.#.#.#.#################.#.###.#.#.#.#.#.#.###.#.#########.#.#.#.###.#.#.#####.###.#.#####.#.#######.#.#.#.#################.#
#...#...#...#...#...#...###...#.........#.....#.#...#.#.#.#...#.........#...#.#...#.#.#.#...#...#.#.#.....#.#.......#...#.#...#...#.........#
#########.#.#.#########.###.#.#.###############.#####.#.#.#.###########.#####.###.#.#.#.#.#.###.#.#.#.#####.#.###########.#.#.#.#.#.#########
###.......#...#...#...#.....#.#...........###...#...#.#.#.#.#.....#...#...###.....#.#.#.#.#.....#...#.#...#.#...........#.#.#.#.#.#.........#
###.###########.#.#.#.#######.###########.###.###.#.#.#.#.#.#.###.#.#.###.#########.#.#.#.###########.#.#.#.###########.#.#.#.#.#.#########.#
#...#...........#...#...#...#.....#.....#...#.....#.#.#.#.#.#.###.#.#.#...#...#...#...#.#...#...#...#...#...#...........#.#.#.#.#.....#.....#
#.###.#################.#.#.#####.#.###.###.#######.#.#.#.#.#.###.#.#.#.###.#.#.#.#####.###.#.#.#.#.#########.###########.#.#.#.#####.#.#####
#.....#...............#...#.#...#...#...#...#...###.#.#.#.#.#.#...#.#.#.....#...#.###...#...#.#...#...###...#...........#...#...###...#.....#
#######.#############.#####.#.#.#####.###.###.#.###.#.#.#.#.#.#.###.#.###########.###.###.###.#######.###.#.###########.###########.#######.#
#.....#.......#.....#.#...#.#.#.#...#...#.#...#...#...#...#...#...#.#...#.....#...#...#...###.......#.#...#...........#...###.......#...#...#
#.###.#######.#.###.#.#.#.#.#.#.#.#.###.#.#.#####.###############.#.###.#.###.#.###.###.###########.#.#.#############.###.###.#######.#.#.###
#.#...###...#...#...#.#.#.#.#.#...#...#...#.#.....###.....###.....#.#...#...#...###...#...#...#...#.#.#.............#...#...#...#...#.#.#...#
#.#.#####.#.#####.###.#.#.#.#.#######.#####.#.#######.###.###.#####.#.#####.#########.###.#.#.#.#.#.#.#############.###.###.###.#.#.#.#.###.#
#.#...#...#...###...#.#.#.#...#.......#...#.#.###...#.#...#...#...#.#.#...#.........#.#...#.#...#...#...............###.....###...#.#.#.#...#
#.###.#.#####.#####.#.#.#.#####.#######.#.#.#.###.#.#.#.###.###.#.#.#.#.#.#########.#.#.###.#######################################.#.#.#.###
#...#.#.....#...#...#...#.......#.......#...#.....#...#...#...#.#...#.#.#.#...#...#.#.#.#...#...#.............................###...#.#.#...#
###.#.#####.###.#.###############.#######################.###.#.#####.#.#.#.#.#.#.#.#.#.#.###.#.#.###########################.###.###.#.###.#
###.#.###...#...#.....#...#.......#...............#...#...#...#.#.....#.#...#...#.#.#.#.#.#...#.#.#.............#...#...#...#...#.....#...#.#
###.#.###.###.#######.#.#.#.#######.#############.#.#.#.###.###.#.#####.#########.#.#.#.#.#.###.#.#.###########.#.#.#.#.#.#.###.#########.#.#
#...#.....#...#...#...#.#.#.#.....#.............#...#...###.#...#.....#.....#.....#.#...#...###...#...........#.#.#...#.#.#.....###.....#...#
#.#########.###.#.#.###.#.#.#.###.#############.###########.#.#######.#####.#.#####.#########################.#.#.#####.#.#########.###.#####
#.#...#...#.#...#...#...#.#.#...#.....#...#...#...........#.#.#.......#.....#.......#...#...###...###...#.....#...#...#...#.......#...#.....#
#.#.#.#.#.#.#.#######.###.#.###.#####.#.#.#.#.###########.#.#.#.#######.#############.#.#.#.###.#.###.#.#.#########.#.#####.#####.###.#####.#
#...#...#.#...#...#...#...#.#...#...#...#.#.#.#...........#...#.......#.........#.....#.#.#.#...#.....#...#.........#.....#.....#.###.#.....#
#########.#####.#.#.###.###.#.###.#.#####.#.#.#.#####################.#########.#.#####.#.#.#.#############.#############.#####.#.###.#.#####
#.........#...#.#.#.###.#...#.....#.#...#...#...#...#...#...#.........#.....#...#.....#.#.#.#...#.........#...#...........#...#.#...#.#.....#
#.#########.#.#.#.#.###.#.#########.#.#.#########.#.#.#.#.#.#.#########.###.#.#######.#.#.#.###.#.#######.###.#.###########.#.#.###.#.#####.#
#.#.....#...#.#.#.#...#...#.........#.#.#.........#...#...#.#.......#...###...#...#...#...#.....#.###...#...#.#.............#.#...#...#...#.#
#.#.###.#.###.#.#.###.#####.#########.#.#.#################.#######.#.#########.#.#.#############.###.#.###.#.###############.###.#####.#.#.#
#.#...#...###...#.....###...#...#.....#...#################......S#...#...#...#.#.#.........#.....#...#.....#.#...............#...#.....#.#.#
#.###.###################.###.#.#.#####################################.#.#.#.#.#.#########.#.#####.#########.#.###############.###.#####.#.#
#...#...###...#...###.....#...#...#...#############################...#.#...#.#.#.#.....###...#...#...........#...#...###...###.#...#...#...#
###.###.###.#.#.#.###.#####.#######.#.#############################.#.#.#####.#.#.#.###.#######.#.###############.#.#.###.#.###.#.###.#.#####
#...#...#...#...#.....#...#.#.......#.#######################.......#.#.....#.#.#.#...#.#...###.#.#.............#...#.....#.....#.....#.#...#
#.###.###.#############.#.#.#.#######.#######################.#######.#####.#.#.#.###.#.#.#.###.#.#.###########.#######################.#.#.#
#.....###.......#...#...#...#.......#.#.....#################...#...#.....#.#...#.....#...#.....#.#.#.........#.........................#.#.#
###############.#.#.#.#############.#.#.###.###################.#.#.#####.#.#####################.#.#.#######.###########################.#.#
###...#...#...#...#...#.............#...#...#E###...#####...###...#.#.....#.............#.......#.#...#.......###...#...#...#...#...#...#.#.#
###.#.#.#.#.#.#########.#################.###.###.#.#####.#.#######.#.#################.#.#####.#.#####.#########.#.#.#.#.#.#.#.#.#.#.#.#.#.#
#...#...#...#.#.......#.................#.....#...#...#...#...###...#.###...#...#...###...###...#...###.....#...#.#...#.#.#...#...#...#...#.#
#.###########.#.#####.#################.#######.#####.#.#####.###.###.###.#.#.#.#.#.#########.#####.#######.#.#.#.#####.#.#################.#
#.#...#.....#...#...#...#.........#.....#.....#.#...#.#.....#.#...#...#...#.#.#.#.#.......#...#...#.........#.#.#.#.....#...#.......#...#...#
#.#.#.#.###.#####.#.###.#.#######.#.#####.###.#.#.#.#.#####.#.#.###.###.###.#.#.#.#######.#.###.#.###########.#.#.#.#######.#.#####.#.#.#.###
#.#.#.#...#.......#...#...#.....#...#...#.#...#.#.#...#...#.#.#...#...#...#.#.#...#...#...#.....#.........#...#...#.#.......#.....#.#.#.#...#
#.#.#.###.###########.#####.###.#####.#.#.#.###.#.#####.#.#.#.###.###.###.#.#.#####.#.#.#################.#.#######.#.###########.#.#.#.###.#
#.#.#.....###...###...#.....###.......#...#.....#...#...#...#...#.#...#...#.#...#...#...#.......###.......#.#.....#.#.#...#...#...#...#.....#
#.#.#########.#.###.###.###########################.#.#########.#.#.###.###.###.#.#######.#####.###.#######.#.###.#.#.#.#.#.#.#.#############
#...#...###...#.....#...###.............#.......#...#.......#...#.#...#...#.#...#.......#.....#...#...#.....#...#.#...#.#...#.#.....#...#...#
#####.#.###.#########.#####.###########.#.#####.#.#########.#.###.###.###.#.#.#########.#####.###.###.#.#######.#.#####.#####.#####.#.#.#.#.#
#.....#.....#.....#...#...#.........###.#.#...#...#.....#...#...#...#.....#...#.........#.....#...#...#.#.......#.....#.....#.#...#.#.#.#.#.#
#.###########.###.#.###.#.#########.###.#.#.#.#####.###.#.#####.###.###########.#########.#####.###.###.#.###########.#####.#.#.#.#.#.#.#.#.#
#...........#.###.#.#...#.........#...#...#.#...###...#...#.....###...........#.......#...#...#...#.....#.........###.......#...#...#.#.#.#.#
###########.#.###.#.#.###########.###.#####.###.#####.#####.#################.#######.#.###.#.###.###############.###################.#.#.#.#
###.........#.#...#.#...#...#...#.#...#...#.#...#...#.....#...#...###...#...#.#.......#.....#.#...#...#.........#.........###...###...#.#.#.#
###.#########.#.###.###.#.#.#.#.#.#.###.#.#.#.###.#.#####.###.#.#.###.#.#.#.#.#.#############.#.###.#.#.#######.#########.###.#.###.###.#.#.#
#...#...#...#.#.....###...#...#.#.#...#.#.#.#...#.#.....#.#...#.#.#...#.#.#...#.....#...#.....#...#.#.#.......#.#...#...#...#.#...#...#...#.#
#.###.#.#.#.#.#################.#.###.#.#.#.###.#.#####.#.#.###.#.#.###.#.#########.#.#.#.#######.#.#.#######.#.#.#.#.#.###.#.###.###.#####.#
#.....#...#...#...#######...#...#.....#.#.#.#...#...#...#.#.###.#.#...#.#.....#.....#.#.#.....#...#.#.###...#.#.#.#.#.#.....#.#...#...#...#.#
###############.#.#######.#.#.#########.#.#.#.#####.#.###.#.###.#.###.#.#####.#.#####.#.#####.#.###.#.###.#.#.#.#.#.#.#######.#.###.###.#.#.#
#...#...#.......#...###...#...#...#...#.#...#.#.....#.#...#...#.#...#.#.#...#.#...#...#.#...#.#...#.#.#...#...#...#.#.........#.....#...#.#.#
#.#.#.#.#.#########.###.#######.#.#.#.#.#####.#.#####.#.#####.#.###.#.#.#.#.#.###.#.###.#.#.#.###.#.#.#.###########.#################.###.#.#
#.#...#.#.....#...#...#.........#...#.#...#...#...#...#...#...#.#...#.#.#.#...#...#.#...#.#.#...#.#.#.#...........#...#...#...#...#...###...#
#.#####.#####.#.#.###.###############.###.#.#####.#.#####.#.###.#.###.#.#.#####.###.#.###.#.###.#.#.#.###########.###.#.#.#.#.#.#.#.#########
#.#...#.......#.#...#...#...###.......#...#...#...#...#...#...#.#.....#.#.....#.#...#.....#.#...#...#...#.....#...#...#.#.#.#...#.#.........#
#.#.#.#########.###.###.#.#.###.#######.#####.#.#####.#.#####.#.#######.#####.#.#.#########.#.#########.#.###.#.###.###.#.#.#####.#########.#
#.#.#...#...#...###...#...#.....#.....#.....#.#.#...#.#.....#.#.###.....#...#.#...#.........#.......#...#.###...###.....#.#.....#...#.....#.#
#.#.###.#.#.#.#######.###########.###.#####.#.#.#.#.#.#####.#.#.###.#####.#.#.#####.###############.#.###.###############.#####.###.#.###.#.#
#.#.#...#.#.#...#.....#...#.....#.###...#...#.#...#.#.#.....#...#...#...#.#.#.....#...#.......#...#.#...#.....#.........#.#...#...#...###...#
#.#.#.###.#.###.#.#####.#.#.###.#.#####.#.###.#####.#.#.#########.###.#.#.#.#####.###.#.#####.#.#.#.###.#####.#.#######.#.#.#.###.###########
#...#...#.#.....#.....#.#...###.#.....#.#...#...#...#.#.###.......#...#.#.#.#...#.#...#.#.....#.#...###.#...#...#...#...#.#.#...#...........#
#######.#.###########.#.#######.#####.#.###.###.#.###.#.###.#######.###.#.#.#.#.#.#.###.#.#####.#######.#.#.#####.#.#.###.#.###.###########.#
#.......#.#...#.......#.###.....#.....#.#...#...#.#...#...#.......#.###...#.#.#...#.....#.....#.......#.#.#.#...#.#...###.#...#.#...........#
#.#######.#.#.#.#######.###.#####.#####.#.###.###.#.#####.#######.#.#######.#.###############.#######.#.#.#.#.#.#.#######.###.#.#.###########
#.#.......#.#.#.......#.#...#...#...#...#.#...#...#...#...#.......#...#.....#...........#.....#...#...#...#.#.#.#.#...#...#...#.#...........#
#.#.#######.#.#######.#.#.###.#.###.#.###.#.###.#####.#.###.#########.#.###############.#.#####.#.#.#######.#.#.#.#.#.#.###.###.###########.#
#...#.......#.........#.#...#.#...#.#.#...#.#...#...#.#...#.#...#...#.#...#...#...#...#.#.#...#.#...#...#...#.#.#...#.#.....###.....#.....#.#
#####.#################.###.#.###.#.#.#.###.#.###.#.#.###.#.#.#.#.#.#.###.#.#.#.#.#.#.#.#.#.#.#.#####.#.#.###.#.#####.#############.#.###.#.#
#.....#...#...........#...#...#...#.#.#.#...#...#.#...#...#.#.#.#.#.#...#.#.#...#.#.#...#...#.#.....#.#.#.#...#.#...#...........###...#...#.#
#.#####.#.#.#########.###.#####.###.#.#.#.#####.#.#####.###.#.#.#.#.###.#.#.#####.#.#########.#####.#.#.#.#.###.#.#.###########.#######.###.#
#.#...#.#.#.#.........#...###...#...#.#.#.#...#.#...#...###...#.#.#.#...#.#...#...#.#.........#.....#.#.#...#...#.#...#...#...#.......#.....#
#.#.#.#.#.#.#.#########.#####.###.###.#.#.#.#.#.###.#.#########.#.#.#.###.###.#.###.#.#########.#####.#.#####.###.###.#.#.#.#.#######.#######
#...#...#...#.........#.#.....#...#...#.#...#...###.#.....###...#.#.#...#...#.#...#.#.....#...#.......#.....#.#...#...#.#.#.#...#...#.......#
#####################.#.#.#####.###.###.###########.#####.###.###.#.###.###.#.###.#.#####.#.#.#############.#.#.###.###.#.#.###.#.#.#######.#
#.....................#.#...#...###...#.#...#.......#...#...#.#...#...#.#...#...#.#...###...#...#...#...#...#.#...#...#.#.#...#.#.#.#.....#.#
#.#####################.###.#.#######.#.#.#.#.#######.#.###.#.#.#####.#.#.#####.#.###.#########.#.#.#.#.#.###.###.###.#.#.###.#.#.#.#.###.#.#
#.........#...#...#...#.###.#...#.....#...#.#.....#...#.#...#.#.....#.#.#...#...#.#...#.........#.#...#.#...#.#...#...#.#.#...#.#.#...###.#.#
#########.#.#.#.#.#.#.#.###.###.#.#########.#####.#.###.#.###.#####.#.#.###.#.###.#.###.#########.#####.###.#.#.###.###.#.#.###.#.#######.#.#
#.........#.#...#...#.#.#...#...#.......#...#.....#...#.#...#.#.....#.#.#...#...#.#...#.#.......#.....#.#...#...###...#.#.#.#...#.......#.#.#
#.#########.#########.#.#.###.#########.#.###.#######.#.###.#.#.#####.#.#.#####.#.###.#.#.#####.#####.#.#.###########.#.#.#.#.#########.#.#.#
#.....#.....#.........#.#.#...#.........#.#...#...#...#.#...#.#.....#.#.#.......#.#...#...#.....#.....#.#.....#...#...#.#.#.#...#.......#.#.#
#####.#.#####.#########.#.#.###.#########.#.###.#.#.###.#.###.#####.#.#.#########.#.#######.#####.#####.#####.#.#.#.###.#.#.###.#.#######.#.#
#.....#.#.....#...#...#.#.#...#.#...#...#.#.#...#.#.#...#.#...#...#.#.#.....#.....#.....#...#...#.....#.#...#...#.#...#.#.#.#...#.......#.#.#
#.#####.#.#####.#.#.#.#.#.###.#.#.#.#.#.#.#.#.###.#.#.###.#.###.#.#.#.#####.#.#########.#.###.#.#####.#.#.#.#####.###.#.#.#.#.#########.#.#.#
#.......#.......#...#...#.....#...#...#...#...###...#.....#.....#...#.......#...........#.....#.......#...#.......###...#...#...........#...#
#############################################################################################################################################`,t5=`029A
980A
179A
456A
379A`,S5=`129A
540A
789A
596A
582A`,e5=`1
10
100
2024`,o5=`4080909
2254738
8155901
7477951
16431099
5408639
5157077
6843017
7343391
2516192
12286948
6805409
3330250
10938366
14374017
10957655
168758
5016772
2875289
9954275
8573337
12925507
12561359
14243976
2884223
428102
3248277
860940
15841288
13887317
6901633
7623423
3284294
14627437
16250818
13250706
6157588
6419581
1357452
6810417
11905247
163700
7127512
13449599
2282345
5558515
14163958
2136577
6713087
10042179
9873822
6425428
13878989
3967264
11792741
15545765
16340909
956959
6561178
2718465
12238209
7445788
9852068
191993
3991138
5605377
6714142
1594412
936933
6242706
6318558
7668085
13409399
3949685
8789051
12664487
16300624
4197308
9822144
13052208
11233910
4598392
4786565
3568973
4955243
14152345
8138308
7110676
1601907
8881468
11011123
7849771
1747179
16722201
4131945
10264257
4447491
918586
5398680
6629665
5507085
4038232
12977280
13355820
7312882
6013577
7531615
7216104
1457831
7662244
14501470
7696532
7533897
3204827
3108760
1595310
12073783
6429038
4981285
14916035
7042772
14590737
4422416
11176998
3594679
8657371
10924514
14998838
4895148
9948114
5083618
13799758
16413359
5679393
12305338
15077436
3773683
6906383
11599823
2695871
10008897
14041931
7934436
3550081
5901912
1456614
1892687
13642949
12798887
14553261
8945970
8327474
4249469
10644421
3016151
7589921
16115949
5431198
15989333
10181155
10039007
2059840
15689810
11636392
10763850
16122788
6208936
16512293
14268500
3840143
6290763
3707040
5418480
9727184
10341561
13383930
8562892
3759880
6326721
4825118
2445499
2192227
15519815
14946053
6797403
3333274
4528417
5461290
6079366
14003569
687350
5247557
12852533
12791205
2718818
11598594
594069
8695211
1246324
15655825
4983230
2671139
3080133
5174342
11416810
14337025
6069327
4032953
3919672
1973901
15284264
3264844
1138906
2736706
12947242
13138318
10149432
2196573
2255991
6154617
3154633
13721704
10004644
6149978
1336702
5352627
5223212
11015649
11348575
12789180
8132497
1550554
8406854
12001508
4022109
3746041
4145696
4765058
8265183
13632577
4555951
13160073
7457882
8580276
5799086
15468368
12718282
10079829
10688092
12465616
1768014
7785918
8217254
10316998
16205732
11030315
13201628
11797149
8831456
7333953
9448804
12013514
5415671
7522972
1944330
11076183
6269017
4319203
5163674
9653758
6574379
2842344
4154343
1653194
2986309
5773917
11895808
15974291
15098232
14004649
12328227
5464084
15314432
8270187
6796821
14799142
2593119
10381468
13747934
12858628
14950215
5406309
3670064
10691033
8817761
12849470
11317453
16321239
5095465
13365075
772052
16404559
5935409
14348256
11467856
10054845
9143658
9618106
13420692
5900989
1252135
8860717
12386972
8457497
8961996
15975681
12761455
5509037
9357853
16664243
4778395
14227423
14836540
9500578
12374006
10688177
4869766
804988
14277010
5154562
3749977
10731533
12261658
15323564
14981871
16413511
3206448
8087647
8229212
14690677
6045444
10494167
10225571
6278749
8326437
5998088
10534608
9724509
746187
14822703
16675006
15180198
6647761
11309929
10032169
8350763
4796528
6776456
6857306
14956025
2518327
5022503
5164951
8122521
9126630
6118357
9019931
4769584
3915459
310053
12627001
9199164
1789342
15601133
9474259
16716320
399878
10657198
3819781
6277888
1986650
15906402
6290044
10984939
5004543
610320
4252287
11512028
7821751
8848813
8353347
5621188
10369557
6416557
10494119
2823816
6491192
8361278
9073630
4955571
1538388
1507310
12250664
10978188
13580607
2274235
16711406
14684756
15170574
11837675
225594
10583137
5665986
707333
10165409
13703484
3716994
12765273
8344120
12173575
3703841
16083252
9122650
7498986
2052761
7823750
16154467
1459655
5503475
1011515
2336661
16721138
6617687
4604645
5804244
813951
1388591
4067674
15303870
6258775
8411182
10743066
13226772
6920756
7020925
7810829
4695112
1863082
9198769
9093335
16699984
1275456
9921055
1315236
5197992
7586302
8702174
1180051
1049526
5580261
1419325
15718959
11984262
8693038
13764491
16010362
7658984
11111063
4649724
12243177
4463064
7438227
5275669
16657537
10507524
15920825
10776369
8610258
8379413
8235685
4395766
16197132
13386304
7960105
16562197
13818784
1389659
11094950
7432271
6026775
12173978
695652
1114582
9371570
8391587
4920524
6889487
250433
5376908
12009609
3218265
3545914
9446102
8269581
3328717
12859576
1939528
9371909
14877711
9681723
8421364
1590283
3987950
7557214
16311677
8220222
5968441
9311893
4612876
14058792
224573
10877727
7353617
7017219
8410486
6947525
3004481
5284450
16518021
8556009
9373407
2782987
14549238
15643010
10151834
14280944
12970839
369436
5379814
7422290
16136238
13471466
7552723
5977903
16021636
6532603
1295600
9696672
13015149
14770535
6356209
7477492
1325694
13227760
12766496
476423
2181417
6964726
262869
14431432
4466472
342559
3288180
562844
2636893
12209405
12834690
7092247
10536262
11330357
15134630
281415
12818406
12080487
16304734
16426477
1526028
2937550
13991543
4672740
1310750
3820827
12552482
4673845
8064264
16710512
4307154
11974285
15444907
7419792
15653555
4448540
356588
15103361
3141328
1298775
6539219
12076194
6921130
15631258
12140380
469796
14704655
2375240
12502063
5823308
15692990
2353070
6898528
7794274
11895387
15987674
13081627
7062913
12652237
310869
13348241
10374549
3855147
13677265
7480261
10724297
1754053
2709206
15552662
3902342
551651
4506551
14073388
8026314
15005477
6647900
10261539
5825040
8842339
14232509
3584248
4945522
15162448
7016568
11289850
4892627
10731217
11146589
1804918
16203750
12745848
2560912
1581089
4985555
15909673
190078
3390886
15961321
6867277
13582799
9182941
11281259
14740102
10251114
5158830
16483550
11302201
2357396
14426255
4441232
16659869
301924
15286665
6177053
14361958
1764857
13342482
7233468
10860917
9226526
5111902
6598587
7888186
13580668
2904507
1508480
12667074
6590196
10049092
6785402
8601242
15376974
14445187
16766239
11949301
13333528
6669543
16725763
16508317
735578
4567188
4041496
818538
7546263
8143579
2382632
10240511
2783893
16036539
10278939
11671236
6040433
439290
3293508
1825784
16553624
14337006
16615754
9156570
5062556
16377009
9873521
13331914
7543572
719728
10265648
232780
3004977
657294
4345284
11183795
6420021
5130693
12777063
7460902
336796
2802675
340272
7849862
9225840
1196796
148039
5738393
8866582
1074247
15784512
15864992
10915284
12531319
7083162
3711300
4734253
3055998
15850335
13718660
16594282
12489682
10051765
8306438
9823161
10545500
818115
8895941
14078628
5272561
11903472
9178329
2586097
6016066
5032383
9884299
4085367
1860845
8434389
11031722
5958919
1408753
16277658
11973479
4207393
16535260
1027078
8497595
13463292
3279892
4056725
12349107
2464554
10776371
15003195
6723700
8220436
7401706
10858845
14466369
2507180
16449468
6290502
8659761
6119573
8482815
12064893
9926787
9501045
14493140
5569412
16310275
12330564
12772404
3065617
4776450
2176507
9125383
11506364
11964129
3073608
6475277
12900185
3313474
6571723
8028060
15954099
12743482
16029650
10826891
2468959
8812787
14363491
9390908
11273610
11837312
3177815
12927618
16537430
14370689
5051156
9060162
7269168
14496899
379809
15059123
7528423
4555492
5439990
8020963
7150315
14703158
2882434
12942486
14417930
3262171
567667
5400748
7888730
4352719
16429434
9923370
1232298
2000965
13584508
5112982
816086
12020920
1557536
861858
13395370
1463281
351474
11997484
2880436
15829844
6666125
15578454
3143050
15972989
4396359
12316917
14720307
13877787
13566365
14694343
883283
7100573
10077945
7092405
11304359
1335541
10262616
12294948
7550181
13014648
11547605
12020378
8412587
9991268
14068033
12811535
14232949
8901720
3939751
4053511
13579742
15822703
7005666
7054630
7809348
968302
13995349
15566334
12359182
11122889
16027483
10692609
8793935
9813215
5720058
3530712
11188793
5435446
7297096
13002532
11477542
1212639
4207103
527198
6195799
11789482
13980093
766128
5639810
8735500
13293013
7548137
5763928
9586448
1009071
16204073
4954081
13902540
6875458
10604946
4712765
2304332
351892
14866757
5334463
2863592
2523615
14968099
5043136
7687264
14690688
8321283
13606301
7488288
11513550
6750428
3369065
12526654
14605717
10494204
7229326
10698227
1008434
5154207
878227
10898229
14754055
1522240
8012898
1244506
2884213
11086772
5262133
7398019
6537606
15299737
11851308
3431082
9860332
4053420
1811433
4657411
14336864
12683935
10380613
14070121
11038946
7383945
6072854
7828585
14993431
2910811
4625789
2784317
5347731
14801612
7143605
1109277
13269704
8110333
10274981
6551236
7027499
14823286
774282
15642652
2207263
9426781
6571291
8285059
6668366
15272361
13332557
15269352
3999034
3902648
2105481
14024883
7177015
6875895
13469611
7946489
3169830
5311612
15425661
3732001
545276
12750339
14552452
15968702
14140012
5249926
11521039
6697436
3924735
479888
6071129
4104587
5136205
7047336
14394163
13788402
232480
256915
13345115
6660499
10679585
4746191
15325685
15801593
11195562
12309615
8431604
12918346
8604297
1535670
13471546
2689689
4648870
12786153
11517265
12471111
11042258
14309742
13254717
3584213
446841
15891201
1040057
4685580
9473090
9473189
9220973
10476633
10381694
3132734
5537602
3731899
1316019
9564926
14728930
7785846
7048590
4188042
1093292
7042357
12466230
2179680
2746374
10788636
416529
10231367
14849254
6789270
15173899
2631055
7496621
13435010
8337045
16749223
7901218
11496600
6960584
6428145
3356479
10474167
4073613
15089395
9213153
7852488
15404007
13978841
12526878
7710432
11148081
11321554
422115
14277910
6982299
3556146
16164868
16545119
10515212
15493678
4866929
8876732
6491174
1160682
756332
11940237
8429909
13310172
777949
3259115
11602313
15668468
16031942
16193889
5088395
5880978
4184241
16025421
11839960
6136388
775837
5491623
1372521
15157850
5361524
6497219
12463089
10179995
14293080
3230474
2421699
2368530
7003761
11755630
2836219
4708735
14920893
10035127
4668490
766483
5462380
5826166
12868445
7185724
12602101
5227717
4294100
7410855
9681840
15670407
4275086
11097939
14590754
7567916
6619684
8153692
7223143
5833609
10383745
12583714
8595790
3239803
14209994
12464098
11961248
10520461
5583609
12723244
6798285
2295571
9781281
14529909
14838010
3392609
15578259
3299549
5846974
6335774
11729399
8031627
5971535
13283541
10565841
13559333
1652713
7956737
15657712
14757845
11651169
6588202
595445
12014782
1381259
14674812
10164010
7918375
9068768
9442457
13236977
2504841
14269527
12674880
4234283
2472056
11266755
6348163
8321343
13394380
11424835
8518966
9134522
15452288
6630237
5420857
7751405
284608
5717337
10875173
13228169
16743710
5251347
8002517
7883167
461622
458548
4863747
7215211
13408032
8004135
8851505
11421919
9646017
4695893
12858537
9950449
5183618
4386693
1111908
1909640
11376952
15614714
11128606
11007274
13591241
6822131
205517
758149
14047981
6601387
13370939
1908836
7614606
8376736
16404772
12900554
4207994
307488
9141486
14436258
6449373
7259500
13410958
14182846
7741297
16519339
4544446
4135097
3375744
9412837
6671155
13014256
14116071
13609953
6936300
9461159
4805833
15650656
14451017
13400410
11008276
7585689
6225102
1413178
1297167
5993486
8406811
15558659
16131327
4668925
289979
10313597
13760349
906385
3523840
15091529
11844996
3118034
7633456
14453267
6715522
7556324
13101763
1310113
2849431
10162853
6364024
10962417
12652321
14448149
4785011
10000665
12577048
12342278
1449606
357272
3445953
14641840
13290014
6145639
8175645
15647618
3054152
16060494
5853093
15336785
11362664
6305745
14492171
3147397
12591662
4374632
9557340
13408066
10146699
1497532
12157265
7549648
11320598
6807598
3560901
15787665
7435175
5644327
10780722
16231854
11471975
1986406
3620752
10830993
6626546
2315756
15676012
14296984
12610447
6955287
14333667
1195820
10215350
7316484
12298016
13136237
5184418
6454917
5000763
7917808
14299036
9077922
11964622
5825014
13552211
2187774
2087200
15140173
12261960
7177069
1654991
3648466
4976399
5722999
13305811
12175330
6320312
10455473
2226970
7593350
8295519
2950806
14140038
4982607
8331621
11829945
14935737
3460810
5320552
12492582
15659591
11629946
2835620
11067968
7048909
7043036
9183920
12285570
8555820
9961642
12161094
9667621
5179243
9672929
14185708
16089618
8278759
3318372
13175526
2980421
12802381
307486
4333594
13955155
11841112
12735109
6023924
10922685
11523727
2789158
11806867
11745152
16295994
6868595
12816611
3513949
12806769
15121579
4482910
435817
10403469
11302360
3112849
6720674
13489518
4665893
2399871
4099456
16698317
14598103
4069703
3117049
7542398
16619497
12716401
14568359
15397022
6798627
7453542
916128
2621934
9626616
11151263
2420690
6334976
179425
13866540
4129253
15480222
6380824
4520446
16365054
12314031
6323143
9785756
6316834
8862212
9631089
16144530
12544920
11664836
12207715
2700276
2507559
437969
13338706
9789472
6536400
10226740
10954990
12194236
939645
6283675
5623896
8799158
1413613
7536211
305320
12505823
1793588
8395859
12248207
9701718
10156336
10237923
13210641
11848662
10564243
9853182
1225930
14345338
13999946
16084195
7682308
3181906
2945663
11851640
9328339
14744745
10784245
16490661
15712527
11542640
5274572
13193643
12386214
7895523
10669507
11792465
3249657
13494500
1052258
12663303
6176099
11840530
12754339
849527
3768805
12360228
977256
4100011
14250008
15404620
12597289
12004540
12173305
4509710
7458647
9659143
6658336
5358097
13997109
2865227
8479735
14544629
11971370
15738206
352824
10480215
15086576
3900706
9396411
12972713
3477138
7425286
2602740
14748033
8841911
1473495
1640181
6866786
4189788
9156536
488650
4534559
15042557
12317935
10295085
14396181
2351088
13796311
11439957
12217757
11242167
14701672
422740
12183853
2893861
2808064
7639046
16147358
3630663
1044361
14425592
15074846
796986
11028426
10064355
4427850
9795479
5572259
14911074
11346907
13380418
3344388
1557385
9177414
12357194
3519437
11805348
14158744
5117896
6319196
12849950
259210
3138477
8861509
8391156
4578538
16682761
11887040
11071828
9845726
5340766
786827
15639371
13755824
4766323
5161051
13242934
10369841
2119492
15286995
11177382
7510469
6778322
1282949
11516899
1266827
13965788
892658
6334697
9503998
3442149
4869511
11898089
12021711
5836651
2813004
235447
16278888
6684845
13704079
7187810
13727765
15378973
12360704
8729670
14737220
5572929
9911721
8918921
16573390
12728996
9539787
9978752
13529025
4988533
16082462
3673587
868459
9281622
8045022
12596085
9070314
10000669
8237854
8384268
14980562
15546729
13635109
11592569
8111305
8201276
3986683
11886355
11616592
2555461
13114424
16602599
6019381
276192
1794789
4275002
13607751
16418952
5835388
1293539
5536082
8998156
16400254
13365776
6661715
14928827
5638804
13997344
5636399
8354407
5455384
4306676
10601003
2521941
11651791
9663230
10169233
7470852
11008265
3706782
4106219
6651646
4900756
8767483
1805647
16368659
15988964
2520208
278801
10120124
7685757
14694367
14497116
10294213
3206137
2074235
11277789
16170493
10933305
5379723
1611217
14646564
6798586
15397969
13929307
9405982
13542850
11688156
1535522
3449409
10606357
2160438
2864332
941669
12268830
2598032
1700301
5614702
8312180
803567
9809834
12572436
12441899
14564495
7264926
14831581
14826345
10564357
9940234
10619526
16707496
9390219
3897599
13739371
5153332
15881794
11921035
12697854
6977541
354413
11151418
4370152
6686891
6456248
5752989
10973462
14136620
5219680
6672463
15996832
1286332
8740348
2398036
14385013
4625344
12559362
9589298
5943411
2004485
10121921
10731134
12740038
993812
4226201
13098765
11158616
9230460
7880320
8706373
5103241
14724686
10670005
15355500
700278
2553190
2696535
11028748
15194295
374518
4099898
232159
893121
6584471
12643278
15331025
3328994
9666931
6128941
13312004
4332371
14102336
9528237
4867518
10816190
15946147
4121399
15390837
9415252
7140648
7395978
16300338
7464884
6931738
13768527
6630812
6047670
4551878
14573895
12360707
1959047
11807797
14664562
3018470
6239135
15167985
10304793
13017633
6601610
16622226
1116111
8993105
419776
5625505
9944159
5187945
1234572
14596106
1265763
2030543
257892
1820816
5128916
15727064
1948906
2818767
5474396
8837245
7879316
16420373
6138474
16281831
8136679
5499584
10155849
9369129
11567114
13498401
8130393
11224893
8569297
11232669
10231140
2476321
421694
3827367
15779759
11357047
8526328
6435623
10528254
8175055
14471538
10112097
10330094
13404241
11209996
3895249
8321133
13959950
2835942
16012857
11173883
7165906
14468840
3083301
8393053
13948360
15860507
854596
5592319
1106128
2005086
11132519
2433035
7070406
11367526
13160860
9995879
9987956
16261376
826271
8905790
12875583
4499613
520193
2905524
1357066
15581832
16714916
11991917
15158291
8442933
5958552
14766652
1222351
5634263
14437191
7482642
3586872
10331783
16078494
8618908
14266104
14681893
11647787
11294585
3023445
6676392
14470262
2037483
1359546
225377
12896633
11067409
8198397
1012099
11027177
1848439
12692353
16246366
7030277
10320785
11269264
9602190
13406193
11545887
14724376
3588295
11362298
11846655
5887807
12908006
15610866
13658126
4263425
3121782
325549
11166687
5782308
13783583
661426
6906599
11113138
5617959`,l5=`kh-tc
qp-kh
de-cg
ka-co
yn-aq
qp-ub
cg-tb
vc-aq
tb-ka
wh-tc
yn-cg
kh-ub
ta-co
de-co
tc-td
tb-wq
wh-td
ta-ka
td-qp
aq-cg
wq-ub
ub-vc
de-ta
wq-aq
wq-vc
wh-yn
ka-de
kh-ta
co-tc
wh-qp
tb-vc
td-yn`,s5=`mi-qh
ow-ys
qc-at
ou-bf
eb-id
gy-dc
dh-ja
li-ji
dc-ci
ni-xr
db-zg
ou-iq
qk-qx
kx-is
ek-ey
sj-uj
jv-ry
om-li
ri-ct
po-oq
nk-qs
av-eo
gb-or
vu-vw
ld-az
ex-oh
ci-ej
ag-mv
qu-xy
zg-rw
uv-rz
id-st
hg-in
wk-kb
ht-ab
zc-cv
gn-yy
jp-og
pz-to
gh-ud
zm-mv
gi-sq
ef-id
lt-zp
fu-ie
mi-nz
ck-tm
yu-fu
ge-tn
wp-vh
cb-uf
av-no
fu-ul
pk-hp
we-qc
ox-rz
li-my
gm-ut
yt-bn
fl-ri
ab-io
wg-ng
sg-cu
he-ll
vq-sq
ld-nh
jg-kx
tl-gj
yk-xf
ls-yt
ld-yg
tt-ot
wm-ob
pc-zz
jp-oc
pt-dr
nh-pc
yt-mx
kk-lm
ci-ti
ie-xa
dc-jv
rv-ep
jf-yn
yt-pd
mv-li
fu-ot
xg-dw
ed-ce
zz-yg
wq-ff
cm-oc
cu-qo
mt-vr
pw-vg
gh-xe
im-sx
ym-fs
ph-kr
qo-fu
zj-hb
em-rz
hu-qx
bg-qk
nn-pa
hj-yx
va-yz
az-it
ej-nw
lb-kt
uc-ic
bv-ru
uc-mz
zv-bc
ng-ds
rh-le
xt-ny
fs-gq
nl-fe
nq-lq
cr-sq
hz-pc
id-gv
dl-qu
nv-ew
jp-ce
pe-ys
ak-by
fl-hd
fx-pk
wm-lb
gh-kn
il-xv
sz-kr
pc-td
np-wt
hl-yq
bt-pm
ng-eg
pn-ra
gy-nw
cw-ez
zb-bi
zm-ji
ff-nd
ti-bz
gu-sy
rb-cr
xl-rb
xx-iq
po-xr
ws-yo
wl-vk
ws-dd
gy-va
eh-gi
im-fv
px-xc
ra-kc
xt-yi
ug-gj
ed-ty
pf-ww
yx-br
zg-yv
cq-oo
jt-my
vq-eh
ze-uv
mz-ki
jv-ej
fo-vs
gr-xl
ig-ol
he-oj
ki-bm
db-wi
tl-su
fx-pg
av-ll
rk-nd
at-lu
bc-gi
fs-vv
aw-bj
yu-xa
hv-cs
as-na
qy-bs
qs-rr
ub-jf
ev-um
kl-yb
bu-us
kc-pm
ra-ge
vu-yi
zs-br
rb-oo
by-yk
pz-vo
ub-ki
mo-sv
kq-dn
bi-ue
ew-sw
xt-et
dm-nx
tp-ja
pw-ax
hz-az
be-bw
fi-eh
ea-qe
pv-cm
ls-uj
gm-wo
kz-dx
nw-xj
pc-ty
ki-ys
mq-tl
tt-xa
ah-ql
dh-ib
qp-dk
hf-hc
bn-ts
jx-rc
og-oc
lt-uw
uc-gm
vy-sx
he-ng
ck-wr
fe-zb
gc-tt
at-gl
wk-gh
pg-ev
nx-gx
bf-nn
aj-as
xc-yi
bt-kc
dn-dy
sh-sj
da-ht
lh-zl
rb-cq
rp-in
al-ez
dq-if
ts-nh
gb-lt
ts-mx
re-qx
lv-mp
tb-qw
gd-mv
gn-uv
lg-qn
xg-fl
kt-ob
yh-ob
lr-id
vj-ut
az-bk
oq-nc
nq-rt
jx-sn
zn-rp
fj-ro
sw-ym
mh-si
cm-br
va-ci
fd-oz
ch-yv
ti-ej
qz-co
fx-ea
xu-ig
hu-vg
wi-rh
ml-lc
yd-xu
zk-bk
rj-ro
xe-lx
mo-ug
vu-xc
hv-dq
xg-ri
xh-py
ew-qw
sr-kt
vr-tk
vu-kk
lu-fv
xc-lm
mx-ls
le-db
aw-ff
vh-zg
kr-cb
rt-ne
ny-et
df-vx
sm-mg
lu-bl
zk-nc
an-gu
lb-dx
xw-vv
ul-bs
ub-pe
og-wt
pg-wz
mb-is
pf-dq
mp-eh
an-vd
qs-py
oz-ex
cq-mg
ne-cv
ui-ro
ly-qh
hs-br
sg-qh
xw-fs
sg-xt
ib-mb
sp-lm
yb-av
ao-qk
gh-cw
uj-ts
kq-pf
gh-ez
ch-jq
tl-xf
gu-xv
by-up
bi-yd
sy-an
ca-lc
cu-hg
eg-ai
gb-oq
qw-ym
jo-kb
so-su
nu-xr
ja-rh
xf-dp
wl-bg
ru-ny
xf-ic
yr-ex
uw-gb
vo-vb
fi-lv
ql-nq
eo-no
le-yv
cw-nn
qm-ou
uc-si
ja-np
oa-ys
nk-gu
jc-vr
yb-eo
vw-sp
no-kl
yn-bs
fl-dn
we-lk
hv-if
zf-wh
hv-jb
rh-jq
up-yl
xp-fy
px-iw
ue-xu
gr-lb
uf-wz
bc-ey
dg-mt
nf-zj
yx-ou
oa-bm
nq-ah
oh-id
qs-zb
mf-vy
rh-de
hx-hl
mo-mq
iu-pt
oq-nu
zh-dt
ul-gc
pa-zv
in-eg
vf-he
xe-ez
gd-zm
ry-ci
yo-dd
xn-tm
vn-yl
ry-wh
uj-sh
az-zz
sj-mx
yb-oj
us-zt
wt-fa
sw-wh
ne-vg
be-ij
vx-mc
tm-gx
jc-dg
hb-dg
nh-ux
jo-wk
iq-yi
ci-kc
gd-qn
qy-ul
sn-ew
xi-ga
gr-fj
lu-nr
up-hg
fo-zl
hf-pm
bx-co
oh-st
mt-nf
ow-bm
oj-ll
ji-qn
sg-ny
cl-dg
mp-pe
ux-ty
dm-jg
dl-ur
jl-sd
bs-fu
zl-kz
dn-vd
pc-it
yr-gv
qs-ue
jb-dq
jx-vx
lg-jt
rh-wv
iu-ta
qe-ff
lh-kz
my-mv
sa-yl
xw-nl
bk-dq
mo-fj
io-kq
yg-wc
ct-bz
zw-bx
aw-qe
wq-fx
sd-on
vb-wr
yu-vi
pr-ry
tw-rj
cw-xk
zs-nd
lh-ob
wg-qz
ds-kl
li-lg
qw-rl
sf-hl
gq-au
gx-xn
zh-fp
eg-hg
bu-vc
zk-hq
hd-cj
bk-cf
ot-mr
rs-rt
rc-qj
pw-le
ae-or
mf-tj
qe-nd
nr-im
yx-ey
ma-fa
gb-zp
ga-sy
cb-zq
fa-np
wh-rl
nd-fx
ed-ux
ra-hf
eg-up
cb-pg
ae-nu
mo-xf
ej-xw
xl-rj
cj-ri
gr-mj
zi-dr
wn-vb
ge-bt
ab-kq
np-hs
nb-da
yx-ir
xq-bu
xw-as
tb-wh
fs-nl
yu-gc
zc-jr
iv-yt
av-vf
an-il
yi-ks
ci-gy
bi-mh
cm-ma
rr-vk
kf-fs
po-gb
fj-zh
bt-ju
xe-hw
ha-sh
zp-uw
bj-pk
ou-ir
zg-wi
br-fa
qd-jg
bt-hc
py-ig
wc-ux
bs-tt
qy-yu
xp-al
ex-vl
fh-dl
sa-hq
kb-ub
tw-ml
ws-hb
em-vq
lt-nc
qc-mf
zb-ol
zc-td
gg-ev
ch-wv
rb-bv
zy-mv
vx-mk
ih-vg
fa-og
xk-sk
hc-ra
ca-yu
px-vw
xy-dl
lv-eh
wi-rw
mv-lg
sb-ui
cn-xq
nq-jr
iw-vw
ww-hb
ib-is
aj-jn
sx-qc
ox-mp
us-ht
br-np
lb-sr
xv-lc
go-sa
dr-cw
yn-ys
jb-oc
sz-rq
zz-nh
ro-tw
yz-ry
ka-ep
gj-sv
pt-mg
yd-mh
gr-fp
lu-it
kc-xh
fz-kx
fu-xa
mi-sg
tj-nr
ls-ha
el-hs
xw-na
zm-vt
vh-wi
xg-js
ox-vq
pk-rk
wc-zz
nu-po
sb-mj
ef-oh
qn-jt
vv-au
tn-xh
fv-tj
zf-ij
po-uw
we-jb
yx-ek
om-my
zn-up
qb-cb
ue-wl
zp-oq
ze-et
ah-cv
sw-ij
dk-nz
ha-ts
ru-xt
dy-ri
kq-us
yd-zb
vr-qp
yk-so
vn-ei
rc-mk
xe-kn
bg-fw
fo-dx
np-pv
qu-gk
ab-bu
qq-ai
qe-lj
jw-fo
vn-hg
we-bk
nw-pr
fl-vd
qq-kt
ui-mj
lj-ea
zm-jt
vt-zt
af-ks
dq-cs
sv-tl
nb-xq
ue-rr
gl-mf
cw-xe
dg-nf
tm-wr
hp-nz
hb-vr
du-pv
yl-eg
ky-ur
pe-my
dm-pz
kd-dg
dc-jj
as-fe
yr-oh
gb-ae
es-gx
go-hv
eg-vn
lh-sr
ej-ry
mq-xf
ur-xy
jw-yh
ch-wp
hx-mk
vv-kf
ry-dc
sd-ut
og-np
aj-au
ru-nz
ll-yb
ev-qb
kt-wm
rk-ea
bn-gp
zy-in
nn-qm
hd-bz
qb-sz
ir-hj
vl-fd
rw-ch
wt-hs
uc-fq
rw-db
oe-ir
ui-vi
lg-ji
fq-xi
nv-be
ml-il
yy-vc
yq-ku
qm-bm
sz-ev
qk-re
bi-wl
em-eh
hc-rv
fy-sk
gu-ca
ii-cv
qw-be
fa-pv
fp-cl
xi-gm
ze-ny
ob-jw
mb-dh
at-st
yk-su
sh-jz
vk-xu
tw-cl
ml-xv
lc-gu
bx-fh
fv-oi
wz-zq
lh-dw
fn-tl
ki-gq
ka-ju
cs-cf
at-tj
df-qj
ns-qk
wv-rw
jx-qj
ee-ri
pe-kb
no-ll
sp-vu
rz-ol
kf-aj
yy-ml
up-ei
vv-qy
um-mb
np-ma
rc-sf
sk-qb
gg-ph
qo-nz
on-vj
fs-as
fl-dy
yu-tt
cf-zk
ck-xn
ub-oa
au-jn
ed-az
nf-ws
oq-ae
ae-ni
pe-wk
ys-ur
dp-su
cl-dt
ao-ih
ma-sh
dt-fp
um-jg
hj-ek
pn-pl
dy-cj
ky-co
vv-aj
vb-es
ud-fy
pu-ii
ko-fz
hp-fx
ab-us
my-gd
dv-as
xu-wl
gk-ww
sn-vx
rq-kr
vl-lw
yy-gu
mx-jz
uz-fh
nm-yu
bi-rr
mp-gn
pm-ra
gd-om
ma-jp
xk-lx
mj-ro
ud-al
ee-fl
ju-ge
yq-qj
xd-cq
gj-yk
vo-nx
kr-wz
hx-mc
pm-xh
uf-qb
gc-qy
dp-sv
fw-bj
rl-zf
vx-yq
ld-eb
uw-du
jr-rt
zf-nv
gq-na
lc-ga
ci-jj
ef-oz
dn-xg
na-aj
kd-tk
tp-jg
yh-sr
fe-dv
jq-vh
dm-es
hh-bv
zk-lk
sd-wn
rb-sm
ov-kr
br-ce
lu-mf
hv-lk
ak-yl
mp-cr
ob-dx
dn-dw
my-ag
yq-sn
yd-ig
vi-ot
cf-sa
kn-hw
up-rp
on-ut
fz-ae
hh-oo
jm-zf
ub-wk
vs-vc
ka-xh
dg-yh
wr-dm
np-oc
yo-kd
fp-rj
gd-zt
lq-cv
it-zz
jv-ti
ck-pz
jp-br
au-nl
sy-il
um-ja
gp-hl
aw-lj
hb-kd
dv-nl
cq-hh
bc-ek
fq-wn
kr-gg
rq-dq
ez-sk
dr-cq
ur-qu
ht-xq
an-ml
gi-vq
ne-jr
af-xx
zm-lg
vj-ic
sq-fi
xn-pt
et-ru
kk-px
sn-df
hl-mk
ii-nq
mt-dd
et-mi
mf-im
zn-eg
ep-ju
li-vt
li-qn
ow-mz
fh-qz
td-ld
zq-pg
nq-ne
yy-ca
gp-yt
sb-hd
bk-if
kk-xc
ah-pd
uz-co
hq-go
fw-xb
gv-ef
zs-wq
ct-fl
mf-ih
qz-uz
si-gm
wh-nv
bn-sh
gs-xf
im-gl
vc-xv
ni-zp
oe-bc
pd-ql
bw-jm
ro-xl
tk-jc
jn-kf
um-mu
qs-mh
bl-oi
zn-ie
jv-va
dd-tk
lq-ii
ds-no
pm-zi
zc-pd
fu-nm
kl-he
ll-ep
bk-sa
zw-qz
il-vc
yk-vs
qd-mb
vw-xx
go-lk
ax-ao
cs-lk
nu-uw
dg-yo
zb-ue
iq-xc
zm-ag
wq-pk
cn-ze
zm-ex
ux-yv
dy-ct
uf-jr
yv-wp
pu-jr
tw-dt
zz-hu
iu-zi
dy-hd
ex-lr
zh-rj
or-nu
jc-dd
ns-hu
qp-dd
mg-bv
sh-gp
on-wo
yx-pa
bz-ri
sg-nz
sf-sn
lk-if
wt-br
hu-pw
gj-gs
mh-xu
kc-ep
yk-mq
ig-ue
dl-qz
rp-yl
yv-de
ae-du
ko-kx
na-vv
xv-nk
db-ch
mx-uj
xd-pa
rq-pg
dk-ny
zl-sr
bs-ot
cv-jr
sp-xc
hg-ei
ie-yu
nx-tm
xi-jl
ev-wz
jc-hb
ib-fz
fs-au
ur-qz
gs-fn
gv-vl
dh-tp
rk-lj
sf-wq
xb-qx
du-gb
lg-jj
ca-vc
yl-in
zk-we
pk-ff
ck-nx
lq-ah
yd-qs
ti-jj
dl-uz
oe-hj
xk-ud
tb-sw
yy-ga
lq-rs
ey-zv
gk-pf
vv-as
ux-zz
ro-dt
tl-cr
pl-qz
ao-re
sr-fo
kl-ll
vx-rz
gx-vb
hw-gh
ym-bw
ed-ld
yn-ub
gh-xp
vu-iw
lm-iw
zn-by
sm-cq
ce-ma
eh-rz
zt-zm
ig-wl
ws-mt
rw-de
wp-de
xu-qs
gi-rz
pv-og
zl-kt
ld-hz
wz-qb
fa-vh
nf-hb
vx-hx
pg-kr
wg-av
sn-mk
ai-yl
tb-ij
gq-as
px-si
dh-fz
yz-ma
co-fh
le-de
qd-mu
hs-ma
wn-xi
dn-bz
oj-no
ns-ao
bj-ea
es-wr
re-ns
hs-fa
ud-xp
qx-kb
cj-fl
jq-db
bj-hp
gq-xg
dc-nw
xv-ca
wn-wo
bw-sw
yg-nh
vi-fu
pk-zs
pm-ju
fy-xe
qb-ph
fz-um
zh-tw
ne-ii
im-oi
bk-lk
nn-hj
jt-zt
ds-ki
vo-xn
ww-us
zv-oe
vb-ho
gh-fy
to-dm
mv-jt
cc-wg
ze-dk
oj-cc
ub-bm
ie-ul
cu-nz
fp-fj
lr-oh
rh-wp
iq-px
rc-hx
hz-it
sk-al
rc-go
gc-nm
lv-em
ns-ae
nr-ah
qj-vx
ir-ey
mr-qy
br-el
jv-pr
re-pw
hq-cs
eo-cc
iv-gp
xk-xe
ql-rs
oc-pv
dk-qo
ru-dk
jb-bk
pz-ho
cu-mi
zf-ym
ow-wk
xp-xk
ic-si
pv-br
gx-pz
cf-dq
oi-tj
zp-or
ug-dp
gr-zh
wt-pv
tw-gr
cr-gn
vr-ws
ck-gx
jf-kb
ut-wn
oo-xd
qx-fw
qz-xy
oo-mg
fn-mo
yo-qp
nn-oe
pl-co
ws-kd
gu-oo
fi-uv
gq-xw
rp-ak
tj-lu
bf-ek
kx-qd
xj-ej
xv-sy
zp-po
zl-ob
ts-jz
pd-jr
dk-sg
xj-jv
ck-ho
dv-kf
tt-vi
kf-sd
lw-if
wk-ki
ku-df
ez-pl
tm-as
kb-yn
oo-sm
kz-kt
yx-oe
pz-xn
xr-nc
zb-mh
bm-mz
hh-mg
ef-kr
ak-in
ld-pc
ww-bu
ni-uw
vj-jl
cb-ph
kq-da
mx-iv
rp-ei
jz-wx
mk-qj
hp-zs
vh-rh
sd-gm
qe-pk
dr-ta
rv-pm
gy-jv
xy-pl
da-cn
cu-dk
yv-rw
ew-wh
ja-jg
gm-ju
xd-bv
ue-yd
to-ck
dn-cj
ru-cu
kb-ow
jx-sf
gi-gn
xv-nu
mu-wm
hv-we
pv-ma
qq-dx
ah-zc
bv-ta
nv-bw
yr-ef
hl-jx
ts-sh
ne-pu
at-vy
zk-jb
ch-le
mq-jc
zi-oo
ak-ei
uz-qu
mt-tk
dh-qd
jn-na
lq-ne
kk-kt
ai-ht
lg-my
bs-mr
rp-zy
ao-bg
wi-le
wv-jq
dt-ui
hs-cv
co-jn
jg-ko
ks-iw
eb-oz
li-av
wi-mc
gk-ht
dc-va
qh-sy
fl-ws
na-kf
lb-fo
fz-is
vw-ks
uv-sq
yz-nw
tn-ka
jo-bm
ls-im
vy-im
st-ef
oh-lw
ce-el
ry-ti
zm-my
sj-ts
xj-bu
ai-hg
ku-rc
qc-gl
xb-re
vq-ut
oc-ma
zg-lk
zs-ff
vt-ag
ry-nw
zy-by
mb-tp
nb-gk
gp-mx
jp-hs
yh-zl
ub-nw
ph-zq
rc-mc
kn-xk
ag-ct
sz-ov
gc-bs
vw-af
ut-jl
at-fv
vq-lv
yd-py
fp-xq
tl-yk
xw-au
ux-az
eo-vf
oq-xr
gy-xj
pl-uz
mi-dk
ov-qb
zy-ai
jl-ic
dl-co
vn-up
nz-ny
zl-jw
dc-lh
sr-jw
jw-lh
zp-xr
nm-tt
ck-vb
zq-qj
ow-oa
su-mo
an-xv
ut-ic
iv-ha
yt-uj
po-nc
ao-hu
pt-oo
mh-rr
ch-rh
wo-jl
hz-td
jt-ji
zg-wv
by-vn
lm-yi
zi-ta
bx-ur
kc-tn
fu-gc
wc-ld
ei-af
zq-qb
ui-zh
yk-mo
ed-yg
hv-cf
td-it
mt-qp
tl-dp
mb-fz
vs-ca
ef-ex
ey-au
eo-ng
jf-ys
pt-xd
if-hq
hj-ey
pf-da
kc-rv
is-tp
cc-kl
pe-jo
qw-nv
ku-qj
he-eo
ta-cq
dk-xt
ko-dh
qx-vg
df-jx
wm-dx
we-sa
zz-ld
wk-yn
ta-hh
bm-yn
cm-og
vu-iq
fn-xf
hc-ep
ra-bt
qh-qo
ju-rv
ui-xl
ab-ob
dy-ee
ih-re
gs-jw
ls-gp
oz-lw
sr-ob
ge-kc
ir-nn
ph-rq
vw-iq
nm-xa
gi-lv
ls-sj
ki-jf
nk-sy
lv-uv
ty-az
gp-ts
zc-lq
sg-et
vy-de
jm-rl
vn-zy
vl-ef
cl-ui
ij-ym
nb-ng
ee-et
xj-dc
ey-bf
ui-fp
xj-ti
ev-rq
hg-by
xh-ge
jz-iv
gs-su
fv-zp
il-yy
hw-ka
hf-rv
bk-go
hu-bg
ky-fh
kr-qb
kn-na
cs-if
ao-vx
qd-ko
wx-ts
jb-lk
fn-mq
hq-jb
pn-fh
pn-qu
zg-le
nu-zp
yb-wg
gm-ic
du-or
eh-uv
xb-ns
sf-ku
rl-be
xv-sp
cb-ev
hw-cw
gq-fe
zh-mj
qw-bw
ja-mb
np-ce
zh-cl
bw-wh
xq-pf
ih-bg
hq-fz
zk-go
lr-yr
yg-ux
pt-hh
il-nk
av-oj
mc-jx
hc-xh
va-ti
nv-ij
kk-xx
yo-zj
xy-co
pl-ky
ce-og
bk-cs
kq-ht
el-og
ib-um
nl-gq
ee-yt
gn-sq
fu-tt
iv-tt
my-zt
if-jb
nv-jm
ox-lv
kn-cw
nb-pf
tk-yo
hz-yg
sk-xp
jm-dy
io-nb
tm-dm
de-ch
hu-qk
gq-aj
il-rp
gs-mo
ks-sp
xj-ry
tb-nv
ma-og
ri-dw
ce-pv
xk-fy
ga-an
ht-nb
as-nl
he-ds
sj-gp
jm-ym
be-vt
by-rp
gr-dt
dv-gq
qp-hb
jz-dh
wh-jm
ou-hj
st-lw
lg-zt
oi-sx
yt-sh
rr-zb
fj-mj
gs-tl
hj-qm
zf-nm
ej-yz
po-ff
gl-fv
ho-vo
wt-el
nb-us
bg-re
ji-ag
qw-jm
az-wc
xj-ci
ns-bg
wp-rw
id-ex
xp-ez
zi-mg
rz-vq
on-fq
hp-lj
ch-mx
sa-zk
cu-et
in-ai
eb-lw
ph-xr
qe-hp
vl-wq
tn-ey
uz-ky
sv-gs
uw-oq
xq-us
va-jj
pe-yn
kk-sp
vb-nx
ha-wx
ub-ow
ds-oj
uf-kr
af-yi
zv-ir
ta-xd
jq-yv
lj-bj
sn-qj
jj-gy
jz-bn
yr-nq
vl-st
st-lr
pt-zi
df-sf
ou-zv
dr-rb
xr-gb
ff-bj
xn-wr
xu-ol
oz-yr
ds-wg
ui-tw
cn-ab
tm-vo
on-ic
hl-mc
vh-db
bw-rl
mu-is
if-sa
jz-ha
va-xj
lq-jr
ol-mh
ed-td
lx-ud
dt-sb
sj-lw
fp-xl
mk-hz
sz-cb
rs-rk
ov-uf
qs-wl
fn-sv
lc-an
zc-pu
wt-gv
um-kx
dx-sr
lg-om
fh-ur
xx-xc
kf-xw
vi-gc
ej-gy
id-oz
qm-ek
fq-yo
ez-hw
sj-bn
mc-qj
ir-ek
ql-xh
ne-ql
sz-uf
jj-nw
pw-xb
rq-gg
fo-lh
ib-jg
fv-sx
dq-sa
cv-nq
si-jl
tn-bt
wv-de
js-dw
fd-id
zt-om
eo-kl
nd-wq
jb-sa
il-lc
xe-em
rr-oa
bf-hj
xl-fj
ni-oq
ri-vd
lb-ji
yb-kf
zy-up
og-hu
zy-ak
ri-kl
ws-zj
bi-ij
mc-sn
vn-rp
gq-jn
gc-gy
ql-rt
vf-oj
ce-cm
kd-zj
ww-nb
fe-au
nq-zc
as-kf
ml-gu
as-au
fz-mu
rs-ne
eb-st
af-sp
lc-nk
ly-et
mk-yq
jp-wt
ul-mr
tm-to
ge-nl
om-aj
xl-zh
hq-dq
ni-du
vk-nn
lm-ks
yb-he
cs-jb
yi-px
dv-jn
iv-uj
ew-zf
fa-cm
vh-le
tp-qd
df-yq
qu-pl
mq-su
wx-sj
gh-xk
xe-al
da-bu
zh-jt
lc-sy
nr-bl
jt-vt
fd-lw
az-nh
af-px
cm-jp
nz-qh
yz-ci
vv-jn
wn-on
hd-ct
ni-lt
cj-ct
hb-tk
kr-zq
wc-hz
ro-jv
cb-jp
ur-zw
xv-yy
mr-gc
jo-oa
rv-ge
gl-bl
qm-pa
cw-fy
ug-yk
pe-mz
zk-if
ts-yt
gd-jt
da-gk
ts-iv
bi-py
fl-js
ux-pc
al-cw
xd-zi
qo-mi
rc-sn
jx-hx
fq-ut
rv-ka
oj-ng
fn-gj
dp-so
sf-hx
bk-hv
qo-ru
io-gk
gr-ui
ex-st
zn-yl
dw-ee
mk-sf
gx-ho
wt-ce
ew-jm
az-yg
ax-qx
qw-wh
ha-sj
hl-qj
ck-dm
tb-bw
xg-ct
tj-gl
dk-qh
sd-ly
vq-cr
zg-wp
oe-bf
bl-fv
ir-pa
da-ab
sb-fj
sg-ze
ht-ww
bv-oo
pl-fh
oc-el
ni-nc
ae-nc
nb-ab
sj-iv
ld-it
zk-dq
nb-kq
pr-ti
gp-uj
ee-dn
ds-vf
qq-zl
ll-ng
lx-fy
qz-qu
td-nh
kz-wm
ug-su
xb-ax
lj-zs
uw-xr
ca-il
db-yv
ni-nu
el-cm
ev-ph
zb-xu
ls-wx
ct-ee
dv-vv
ho-tm
wg-he
vg-ao
xp-ig
sb-tw
jw-dx
sx-tj
el-np
ks-kk
jm-sw
vx-hl
mt-sm
lj-nd
ae-uw
hz-nh
cc-no
ff-lj
yt-wx
ji-mv
yq-mc
qp-kd
pz-tm
yq-tj
gn-fi
nk-ga
sm-bv
gr-cl
uf-rq
ii-rt
be-jm
ld-ty
ol-py
dm-xn
zq-rq
ut-uc
lx-kn
cn-pf
pf-ab
zk-hv
qk-xb
ti-xy
tn-ra
be-ym
xd-dr
tn-ju
sm-ta
vi-xa
dd-eh
rz-gn
dp-xp
vj-fq
va-pr
sp-yi
eg-ei
ug-gs
fz-jg
nr-fv
ak-zn
vn-ai
bu-nb
gv-ex
ff-ea
mk-ku
so-ug
jn-nl
dc-pr
vv-fe
mo-tl
oa-yn
kd-in
tp-kx
ag-jt
rt-pd
ol-wl
ai-zn
kc-ju
jg-is
vy-fv
ha-mx
tb-rv
wg-ll
wn-vj
ii-ah
vk-ol
im-qc
lw-lr
yn-ki
yl-by
gm-fq
bl-at
mc-df
es-xn
nm-bs
yt-jz
hx-df
bj-wq
jm-tb
zv-qm
rt-lq
nl-kf
nc-gb
iu-cq
ej-jj
zc-rs
mx-bn
ax-hu
wc-it
cc-he
vf-cc
mq-gs
sd-fq
iu-dx
jc-yo
ih-ax
ed-hz
ra-ep
sz-pg
ot-ul
tp-mu
bf-ir
ez-xk
cv-su
kb-mz
kl-ng
ti-yz
jo-yn
pm-hc
ie-ot
uc-on
jf-ow
yr-uw
dh-kx
cf-go
mh-wl
vt-gd
tb-zf
om-zm
vv-nl
na-fs
vg-qk
nr-sx
ek-gj
xx-ks
vl-lr
oh-fd
il-ga
qn-om
vd-cj
gi-em
hf-bt
fi-em
xc-vw
ro-sb
ph-ov
jz-gp
qm-bf
hp-nd
in-zn
ee-bz
np-cm
nn-yx
ww-xq
nv-ym
so-gs
va-ry
ir-ur
ly-qo
ch-wi
on-jl
zg-jq
gy-pr
po-du
hq-lk
ow-ki
fw-ax
nc-du
mj-rj
kx-mu
jn-as
ek-nn
tb-ew
gv-lw
bm-kb
dd-hb
mj-dt
dw-ct
hp-rk
no-he
fs-dv
kk-vw
og-br
dl-pn
ov-ev
sz-gg
cs-go
xh-ju
nl-na
dp-mq
oo-ta
pr-ej
zw-xy
wz-lu
fv-qc
bx-qz
bu-ht
fz-qd
fq-si
kz-jw
re-hu
af-iw
wi-de
kn-ud
pw-ns
at-nr
tp-ax
ns-ax
bn-gb
tt-mr
nf-qp
eo-ds
qh-xt
cf-lk
zy-ei
ae-lt
lj-hv
ys-ub
et-qh
nz-xt
vr-ol
eg-rp
aw-zs
mz-jo
vy-oi
ze-xt
rk-aw
qx-ao
dy-vd
vc-an
bm-pe
rb-pt
dt-rj
sq-mp
yl-hg
mo-gj
gi-cr
ty-hz
hc-kc
ly-ru
um-dh
wx-cs
js-dn
vd-js
sk-xe
el-jp
al-gh
ws-jc
or-ni
bt-ep
jo-ki
xn-vb
yy-sy
zy-hg
um-ko
vs-lc
im-lu
ko-hx
dn-ri
py-wl
yy-an
qu-fh
bn-wx
st-gv
sh-ls
lr-ef
cl-xl
pc-wc
vn-in
dp-gj
cn-io
cm-hs
pg-ph
mq-sv
ou-nn
fn-yk
ne-ah
yg-oq
so-sv
mq-ug
sw-nv
pg-ov
qo-et
fe-kf
rz-sq
nd-vu
dq-we
gd-li
go-if
cr-lv
ii-pd
vt-my
sf-yq
pc-yg
gn-em
pe-oa
em-mp
qw-sw
hh-zi
so-mi
bs-ie
xc-cq
gl-oi
yz-jj
zj-tk
or-jx
vh-wv
xa-qn
al-lx
aw-nd
pa-oe
av-cc
hd-dn
dr-mg
dg-qp
vd-xg
ci-pr
mk-jx
ea-nd
tb-be
ew-ij
hw-sk
gu-ga
dl-bx
tt-qy
dy-bz
hf-ju
yi-iw
bw-ew
lt-po
kn-xp
io-ht
vh-de
xu-rr
yz-gy
yq-hx
rr-ig
iq-lm
fo-ob
lx-ez
it-yg
fo-kz
lr-fd
lj-pk
du-lt
zh-ro
gi-ox
om-mv
sv-su
vk-mh
vw-yi
wk-jf
kd-jc
zg-ch
bg-pw
zh-sb
qe-fx
fl-bz
ns-qx
hh-xd
wg-vf
at-oi
xq-io
jf-jo
vh-ch
tj-vy
vr-dd
sb-fp
qd-ja
rr-wl
kt-fo
pk-jq
hp-ea
uz-pn
io-pf
wx-mx
df-rc
ks-px
qh-ny
tw-fj
nv-hj
es-vo
xp-xe
gp-ha
lr-gv
kf-au
fi-rz
bx-pl
po-ni
js-cj
oa-jf
iw-xc
rs-pu
ju-ra
ak-hg
yx-bc
hc-ju
xa-gc
mo-dp
mr-xa
jq-wi
xy-ky
nq-rs
gl-vy
ny-zl
vk-zb
cl-ro
ib-ja
gj-xf
at-sx
tw-mj
ge-ep
oe-ek
by-in
fx-ff
kt-lh
to-nx
sh-mx
ka-ge
bz-xg
yx-zv
vu-ks
oa-wk
hu-ih
ne-zc
az-pc
ta-rb
zy-eg
uz-bx
hd-vd
cn-nb
vr-dg
rl-al
mr-fu
ie-vi
zc-ii
is-dh
jg-dh
vs-gu
fx-zs
ii-ql
zt-mv
wx-uj
lh-wm
ph-de
kb-ki
nf-ud
ud-ez
ul-nm
cu-ny
id-fw
nf-yo
ym-ck
xy-pn
it-nh
wn-si
xg-ee
jf-mz
iu-oo
ic-fq
mv-qn
fq-jl
hh-rb
ou-ey
hc-ge
ef-eb
qq-ob
ov-gg
rj-cl
st-fd
ff-hp
eb-ex
pl-zw
rk-wq
ib-qd
cn-kq
fx-rk
wn-ic
tw-xl
es-ho
ks-iq
vt-ji
ja-is
lm-vu
cn-ht
vb-pz
vt-qn
jq-le
eb-lr
eh-gn
ij-rl
lx-cw
dx-zl
bu-pf
rc-hl
no-ng
ev-zq
rt-ku
vk-qs
xq-da
vr-nf
pd-lq
ov-cb
gs-dp
oo-dr
by-eg
dm-ho
hj-bc
yi-xx
dt-fj
ee-vd
mo-so
oh-eb
uz-qw
mu-dh
hx-sn
fl-dw
kz-lb
dd-zj
ot-qy
ml-ga
pl-ur
ea-aw
is-qd
re-ha
jp-fa
df-oz
ei-ai
gl-lu
wk-ys
ax-vg
bu-kq
qq-kz
mf-bl
gk-mr
nu-gb
xr-or
ci-nw
up-ky
bw-ij
jo-pz
ka-ra
vs-ga
el-ma
ho-to
ug-ta
og-hs
pw-qx
jz-uj
vo-vf
kl-oj
fe-jn
ny-qo
bg-ax
sw-zf
nf-jc
py-ue
ig-zb
dr-hh
cj-xg
oh-vl
we-cs
rw-vh
gu-il
lt-nu
yq-jx
iu-mg
ys-bm
gr-ro
ko-is
uv-gi
rc-yq
wm-sr
lm-px
su-gj
wr-gx
ur-co
sh-wx
on-hh
at-im
aw-hp
ko-ja
eg-ak
cj-ie
ng-yb
rs-cv
wm-yh
lx-sk
my-qn
cv-ql
qc-vy
ww-da
lr-kx
ah-rs
bc-qm
qu-zw
qo-sg
xb-sz
bv-cq
dv-zp
zi-qs
hq-we
ph-sz
yg-ty
gg-wz
lu-qc
ku-mc
iq-kk
vd-bz
oq-or
jz-sj
bc-bf
wz-cb
ih-fw
sq-ox
cr-fi
sm-hh
xa-ul
lj-wq
hz-zz
jl-uc
xj-yz
fi-ox
ot-gc
bz-js
yd-wl
sx-gl
in-up
yr-id
zk-cs
zf-qw
vo-dm
mv-vt
by-ai
ol-yd
wn-jl
ut-si
sd-ic
or-uw
bn-ha
rs-pd
jj-jv
ll-eo
fw-ao
qk-lk
xk-al
eh-ox
zm-li
dy-xg
ls-ts
ov-wz
pa-bc
xi-vj
gp-wx
sz-zq
vo-gx
yd-vk
yg-td
aw-pk
yh-lh
ie-qy
ku-jx
ez-fy
pu-pd
ra-ow
fj-ui
vf-no
wg-oj
py-xu
td-az
oz-gv
pv-hs
td-wc
mu-ja
hd-ri
om-vb
hw-lx
pm-ep
zq-uf
sk-kn
rj-ui
vf-yb
zt-ag
oc-br
ey-pa
pu-wp
ef-lw
wo-sd
kd-mt
ct-js
in-ei
de-db
wr-nx
zp-du
oz-lr
fn-xx
zf-be
om-jt
to-vo
dc-yz
qq-sr
tn-hc
fe-na
kt-yh
tt-ie
ge-pm
qy-nm
vl-eb
mg-rb
rt-pu
to-xn
zw-dl
bf-yx
hg-rp
fd-ef
es-to
gn-lv
wv-yv
no-yb
bg-vg
ot-xa
gd-fh
zj-vr
ne-pd
cs-sa
wk-mz
cm-bl
dt-xl
wr-pz
kd-dd
nq-pu
rw-mj
xb-hu
on-si
io-vw
xb-vg
vu-xx
mg-ta
ox-gn
qj-sf
um-qd
eb-gv
eo-oj
qp-zj
ie-mr
yo-hb
cu-ze
tm-es
dd-nf
em-cr
cv-pd
is-um
xr-du
ib-kx
pg-gg
jf-pe
oq-lt
le-wv
is-sx
bn-ls
xl-mj
jt-li
fz-tp
ue-ol
uz-zw
bi-vk
xq-ab
uc-sd
jo-ow
vl-oz
fs-jn
lm-xx
rv-ra
yh-qq
xb-ih
ni-ii
lq-pu
wr-to
ep-tn
ek-zv
nw-jv
uc-wn
mp-vq
cb-gg
tl-so
dc-ti
gh-sk
lq-cf
oe-qm
ai-rp
qn-zm
va-he
fp-tw
ax-qk
py-rr
oq-du
iv-bn
ed-it
pr-ak
dg-zj
rc-vx
vn-ak
ho-wr
lt-xr
mf-sx
qh-ru
ed-zz
dw-dy
kk-yi
db-lt
yk-sv
sr-nm
oi-lu
eb-yr
rl-nv
gh-lx
cn-us
mu-jg
iu-xd
hd-dw
bg-xb
nk-ca
rk-qe
ir-qm
qe-bj
yh-kz
ji-gd
ig-bi
mj-fp
pf-us
an-ca
vl-id
wh-be
ls-iv
nu-du
bv-pt
kb-ys
bu-io
gq-vv
db-rh
zf-bw
de-zg
qm-yx
jr-ql
ls-jz
vo-ck
dx-yh
nd-bj
hd-xg
uf-gg
no-rj
jl-oe
aw-fx
gk-cn
vb-to
gn-vq
zv-hj
zj-mt
gd-lg
rl-ew
ji-hc
hp-wq
ed-nh
fs-fe
zy-zn
bu-cn
rh-zg
oi-qe
oi-mf
xf-sv
mi-ny
ct-dn
ux-hz
ue-es
xd-sm
gg-zq
sb-cl
mz-ys
al-kn
gj-mq
we-if
ce-fa
re-ax
wo-si
dq-go
wt-ma
ds-yb
ry-jj
vi-ul
qw-ij
mk-mc
im-bl
wo-xi
xr-ae
lh-qq
ph-uf
lj-fx
bt-lv
ww-io
lt-or
wk-bm
sp-zj
ot-nm
qe-wq
vn-zn
rq-wz
ko-mu
ny-ly
ru-ro
nx-es
xc-af
nw-va
ag-lg
kl-vf
ir-bc
xa-qy
gs-gx
jw-lb
bc-nn
wl-zb
so-fn
iq-af
vk-ig
cq-zi
pu-mb
mj-cl
rh-yv
ej-dc
oh-cc
oe-ou
ky-qu
zc-ql
pw-fw
vj-wo
iu-rb
ly-sg
ty-td
xi-on
vf-ul
xq-kq
pt-cq
ut-wo
tl-ug
gm-on
oi-nr
mz-yn
fn-dp
ze-qo
ho-nx
vc-lc
kn-fy
jp-pv
zt-li
rq-cb
qb-rq
sp-iq
hf-tm
ov-rq
mb-jg
be-sw
qu-bx
ed-wc
nx-fy
bx-ot
dl-ky
bx-xy
ol-bi
ji-my
hc-ka
st-oz
jf-tb
uf-pg
zn-ei
df-hl
ni-gb
ko-ib
ti-nw
ag-li
sy-ca
iv-sh
vw-lm
wi-yv
cu-qh
nc-zp
mq-so
nr-qc
sm-zi
ml-vs
zs-ea
ka-bt
ns-ih
bv-zi
fs-aj
fd-yr
xw-jn
fu-qy
ka-hf
mb-mu
nx-pz
aw-wq
pw-ih
vr-kd
gl-nr
ha-yt
yz-pr
it-ux
xn-ho
cu-xt
it-ty
jp-np
mh-ue
nh-ty
wv-wi
lx-xp
qc-oi
ao-xb
sm-dr
lk-sa
pu-ah
fh-zw
mp-rz
ml-sy
nl-aj
xi-si
yy-lc
rv-xh
vt-lg
oa-ki
rv-bt
jc-mt
ud-hw
sp-iw
xu-px
sq-lv
rw-rh
ej-va
vr-yo
gk-xq
kc-ka
oc-wt
yd-rr
ew-be
rb-xd
cw-ud
uj-ha
al-fy
av-ds
sq-eh
cr-eh
sd-vj
ww-cn
kk-iw
zy-yl
pn-zw
oe-ey
kl-av
ot-yu
po-or
ql-pu
xw-fe
tk-nf
pk-ea
lh-dx
fi-vq
ce-hs
fa-el
dl-pl
gi-fi
jf-bm
ru-sg
ty-zz
sy-vc
ex-fd
iw-iq
bl-tj
iu-bv
xj-pr
vy-nr
ii-jr
jc-qp
so-xf
rt-zc
ty-ib
sj-ov
wc-ty
wx-iv
ck-es
pk-nd
ng-av
ow-yn
tj-im
xx-sp
ab-gk
up-ak
gy-sg
tk-ws
cj-dw
uj-bn
ex-lw
lm-fp
ul-tt
hf-ep
mz-oa
qq-jw
ky-zw
dd-sx
mp-gi
bk-hq
mk-df
jo-ub
ku-el
yu-ul
ml-ca
ku-hl
dp-yk
px-xx
fn-su
xa-bs
lc-tk
dv-na
vs-nk
rl-ym
tj-qc
zl-lb
gk-us
eo-wg
jl-gm
ub-mz
lb-yh
zv-bf
js-ri
ox-em
vg-fw
hq-hv
om-vt
wh-ym
id-lw
jc-zj
mt-hb
gg-wc
ah-rt
hf-xh
qk-fw
iu-dr
yh-fo
ll-vf
pz-es
mi-ze
sq-iw
ww-kq
hw-fy
ib-tp
mr-vi
fd-jq
ib-mu
ka-pm
rv-tn
oc-hs
xf-su
em-uv
hd-js
fx-bj
up-ai
vu-px
zl-wm
gr-sb
ig-mh
js-ak
us-io
cl-fj
gx-dm
zt-ji
sf-vx
gu-vc
xw-dv
oc-ce
kd-nf
et-nz
ou-ek
mr-nm
pm-tn
mp-uv
qs-bi
uz-ur
dg-ws
hf-ge
ut-xi
lb-ob
ih-qk
fw-ns
cf-we
qh-ze
hf-tn
ko-tp
el-pv
qb-pg
ez-kn
vj-xk
hw-xp
dx-kt
ee-cj
iu-sm
vk-py
xh-ep
yr-vl
ug-sv
ou-bc
he-av
wo-fq
wi-wp
mt-yo
ho-dl
sw-eo
vd-dw
nz-ly
ta-pt
so-gj
cf-jb
nn-zv
bj-rk
ky-bx
vj-gm
lb-qq
ag-om
rk-zs
jb-go
hq-cf
wm-fo
aj-xw
ca-ga
xh-bt
wo-ic
qn-zt
vb-dm
cc-ng
ue-vk
dk-et
hg-zn
xt-mi
py-mh
nc-nu
nc-or
ao-pw
ah-jr
sn-hl
lv-rz
ou-pa
qj-hx
xv-ga
gl-wo
vg-re
ks-lx
sm-pt
fd-gv
hd-pn
ag-qn
au-na
vj-si
nq-pd
qq-fo
wh-ij
sv-yd
sb-xl
to-gx
vd-ct
ee-js
yy-nk
bj-zs
cf-if
wt-cm
em-sq
lm-af
ig-qs
ze-ly
eb-fd
uj-ea
tk-qp
ed-pc
yl-ei
jr-rs
rs-ii
zb-py
vs-sy
wo-uc
yr-st
xt-ly
ug-fn
ld-ux
pf-ht
rw-jq
vq-uv
cr-ox
da-io
fe-aj
sr-kz
ag-gd
zw-co
uv-ox
mf-nr
rj-sb
we-go
gr-rj
rl-tb
wv-db
pn-qz
ky-pn
ew-ym
mg-wz
mi-ly
mc-sf
rr-ol
qx-ih
ql-lq
nk-vc
bl-sx
pa-ek
to-fi
xn-nx
rl-sw
pe-ow
cc-ll
vi-nm
uc-vj
xy-uz
kb-oa
ry-gy
qu-co
oc-fa
hw-al
ev-kr
il-vs
cw-sk
ds-ll
xe-ud
pw-qk
vs-an
nc-uw
wv-wp
rw-le
wp-le
ws-qp
kl-wg
bz-dw
xc-ks
af-kk
yu-bs
jj-xj
aj-dv
jq-wp
da-us
pn-bx
ze-nz
cv-rt
ov-zq
vn-dt
bf-oj
aw-pc
ev-uf
dk-ly
gk-kq
vc-ml
fw-re
sz-wz
bv-dr
xf-ug
vu-af
bf-pa
wr-zv
xt-qo
wr-vo
ei-by
qx-bg
iu-hh
vs-yy
uc-xi
ky-qz
hv-sa
yv-vh
zw-wv
kz-ox
ff-rk
vy-lu
vy-bl
jv-ci
qb-gg
xu-bi
jw-wm
xx-iw
hf-kc
kx-ja
dg-tk
nk-an
zz-td
wm-qq
ko-mb
ud-sk
qm-ey
mi-ru
ku-hx
vi-qy
ds-cc
yu-mr
fh-xy
dv-au
jj-pr
cr-uv
xk-hw
nh-wc
jw-kt
oz-oh
qc-bl
bs-vi
wn-gm
kx-mb
oh-gv
fi-mp
dy-js
ob-kz
db-wp
tp-um
at-mf
ly-cu
fv-mf
ku-sn
jv-yz
bz-cj
ys-jo
ml-nk
qd-ea
sd-xi
fj-rj
ga-vc
ij-jm
ie-gc
ae-po
td-ux
ic-xi
hj-pa
wg-no
zs-qe
cc-yb
pn-co
xd-mg
bw-da
ww-ab
vg-ns`,i5=`x00: 1
x01: 0
x02: 1
x03: 1
x04: 0
y00: 1
y01: 1
y02: 1
y03: 1
y04: 1

ntg XOR fgs -> mjb
y02 OR x01 -> tnw
kwq OR kpj -> z05
x00 OR x03 -> fst
tgd XOR rvg -> z01
vdt OR tnw -> bfw
bfw AND frj -> z10
ffh OR nrd -> bqk
y00 AND y03 -> djm
y03 OR y00 -> psh
bqk OR frj -> z08
tnw OR fst -> frj
gnj AND tgd -> z11
bfw XOR mjb -> z00
x03 OR x00 -> vdt
gnj AND wpb -> z02
x04 AND y00 -> kjc
djm OR pbm -> qhw
nrd AND vdt -> hwm
kjc AND fst -> rvg
y04 OR y02 -> fgs
y01 AND x02 -> pbm
ntg OR kjc -> kwq
psh XOR fgs -> tgd
qhw XOR tgd -> z09
pbm OR djm -> kpj
x03 XOR y03 -> ffh
x00 XOR y04 -> ntg
bfw OR bqk -> z06
nrd XOR fgs -> wpb
frj XOR qhw -> z04
bqk OR frj -> z07
y03 OR x01 -> nrd
hwm AND bqk -> z03
tgd XOR rvg -> z12
tnw OR pbm -> gnj`,h5=`x00: 1
x01: 0
x02: 0
x03: 1
x04: 1
x05: 0
x06: 0
x07: 0
x08: 0
x09: 0
x10: 0
x11: 1
x12: 0
x13: 0
x14: 1
x15: 1
x16: 1
x17: 0
x18: 0
x19: 0
x20: 1
x21: 1
x22: 0
x23: 1
x24: 0
x25: 1
x26: 1
x27: 0
x28: 0
x29: 0
x30: 0
x31: 0
x32: 1
x33: 0
x34: 0
x35: 1
x36: 1
x37: 0
x38: 0
x39: 1
x40: 1
x41: 1
x42: 0
x43: 0
x44: 1
y00: 1
y01: 0
y02: 0
y03: 1
y04: 1
y05: 1
y06: 0
y07: 0
y08: 0
y09: 1
y10: 0
y11: 0
y12: 0
y13: 0
y14: 1
y15: 1
y16: 1
y17: 1
y18: 1
y19: 0
y20: 1
y21: 0
y22: 0
y23: 1
y24: 1
y25: 0
y26: 0
y27: 1
y28: 1
y29: 0
y30: 1
y31: 1
y32: 0
y33: 0
y34: 1
y35: 1
y36: 0
y37: 0
y38: 0
y39: 0
y40: 0
y41: 0
y42: 1
y43: 0
y44: 1

y44 XOR x44 -> dfp
shn OR nmv -> pvg
hgv AND ckv -> vrf
rpn AND vjh -> bmn
fkr AND pvg -> ggp
fhf AND trb -> vcd
kkq OR vvs -> trb
dgm OR ctf -> kvn
phq OR kbq -> gvs
sqv OR wmm -> mwn
y08 AND x08 -> rmf
ktm OR fsb -> htt
x14 AND y14 -> ctf
y20 XOR x20 -> kgm
vcd OR fsh -> btb
x22 XOR y22 -> dds
y17 XOR x17 -> cwj
y34 XOR x34 -> mbr
y20 AND x20 -> vgd
mks OR cdk -> z45
x33 AND y33 -> dgb
ckv XOR hgv -> z42
bmp XOR bcb -> z31
mwg XOR hrf -> z39
y33 XOR x33 -> kvq
cvj OR ftw -> rvd
hrf AND mwg -> jkn
y32 XOR x32 -> fhf
rkj OR gsd -> ppm
y40 XOR x40 -> hkg
vjh XOR rpn -> z02
kgg AND jrg -> bwq
y22 AND x22 -> qnd
dnq XOR rpv -> z19
ghk OR qhj -> crn
cwj XOR gvs -> z17
x35 XOR y35 -> bhv
y39 XOR x39 -> hrf
mbr XOR wbd -> z34
kfb AND nkh -> cvj
pvn AND tmp -> phq
kvn XOR prg -> z15
dtr OR jtr -> jrg
vsv OR jnt -> z06
hkj OR fjp -> ckv
y23 AND x23 -> ggt
dfp AND rvd -> mks
ftr XOR mqt -> z30
y05 AND x05 -> ptv
y26 XOR x26 -> tbj
y34 AND x34 -> fhv
x28 XOR y28 -> rqt
ppm XOR dds -> z22
whw AND grc -> spr
jjs XOR cfp -> z36
x19 XOR y19 -> dnq
qjh OR qns -> msm
tmp XOR pvn -> z16
x08 XOR y08 -> tpb
fkr XOR pvg -> z04
tpb AND rgt -> wvn
x21 XOR y21 -> tvs
x03 XOR y03 -> jqs
x02 XOR y02 -> vjh
x25 XOR y25 -> vgk
hqk OR bvg -> cfp
x42 AND y42 -> gwf
x30 XOR y30 -> ftr
jrg XOR kgg -> z27
x17 AND y17 -> qch
tvs AND dtm -> rkj
rqt XOR cgr -> z28
y41 XOR x41 -> jvt
y12 XOR x12 -> sfq
gnf OR gjb -> rpv
y29 XOR x29 -> grc
bck XOR rdm -> z01
y26 AND x26 -> jtr
x15 XOR y15 -> prg
hwc OR hsn -> rnc
y36 XOR x36 -> jjs
rgq OR rfb -> mwg
y27 XOR x27 -> kgg
sdm XOR wfs -> z38
dgb OR cgn -> wbd
jrh OR rnj -> rmd
tcd OR qkm -> qwd
x37 XOR y37 -> hmp
rmd AND nmm -> z11
cjr OR dsn -> rpn
x09 AND y09 -> hwc
y14 XOR x14 -> ghf
htt AND jvt -> hkj
x00 XOR y00 -> z00
gdb XOR tgc -> z05
dhb XOR hmp -> z37
gdb AND tgc -> pws
qwd XOR scq -> z13
sfq AND crn -> qkm
y21 AND x21 -> gsd
wvp AND pck -> hsn
x06 AND y06 -> jnt
btb XOR kvq -> z33
x31 XOR y31 -> bcb
y13 AND x13 -> fpf
kgm AND mwn -> qfr
cff OR fhv -> kwj
cmv OR qch -> kjh
y41 AND x41 -> fjp
rdm AND bck -> dsn
rmm OR npc -> sdm
y03 AND x03 -> nmv
fhf XOR trb -> z32
y40 AND x40 -> ktm
x11 AND y11 -> ghk
jdd OR spr -> mqt
dtm XOR tvs -> z21
msm XOR tbj -> z26
hkg AND mtb -> fsb
wpp OR fpf -> rvj
vgk XOR sjq -> z25
x01 XOR y01 -> bck
nkh XOR kfb -> z43
hfd OR bmn -> qpp
x16 XOR y16 -> pvn
x01 AND y01 -> cjr
scp AND vkd -> vsv
pns AND fhc -> dbr
msm AND tbj -> dtr
nrv AND kjh -> gjb
ggt AND ftg -> pdp
y38 AND x38 -> rgq
rnc XOR vms -> z10
y44 AND x44 -> cdk
y10 AND x10 -> rnj
ggp OR wgc -> gdb
vnb OR qnd -> ftg
y37 AND x37 -> npc
dds AND ppm -> vnb
cfp AND jjs -> krr
y32 AND x32 -> fsh
mqt AND ftr -> qhr
y23 XOR x23 -> mwh
y18 XOR x18 -> nrv
sjq AND vgk -> qns
y19 AND x19 -> sqv
gwf OR vrf -> nkh
x39 AND y39 -> prq
y09 XOR x09 -> wvp
mtb XOR hkg -> z40
rmd XOR nmm -> qhj
x06 XOR y06 -> vkd
gvs AND cwj -> cmv
nrv XOR kjh -> z18
y29 AND x29 -> jdd
rgt XOR tpb -> z08
qpp AND jqs -> shn
htt XOR jvt -> z41
dfp XOR rvd -> z44
y43 AND x43 -> ftw
y30 AND x30 -> sjd
qrh XOR mbg -> z24
pck XOR wvp -> z09
grc XOR whw -> z29
x27 AND y27 -> dbk
mmd OR krr -> dhb
sfq XOR crn -> z12
y04 AND x04 -> wgc
y38 XOR x38 -> wfs
y04 XOR x04 -> fkr
sjd OR qhr -> bmp
ggt XOR ftg -> z23
x05 XOR y05 -> tgc
y02 AND x02 -> hfd
mwn XOR kgm -> z20
dbr OR tsr -> rgt
x07 XOR y07 -> pns
qfr OR vgd -> dtm
y18 AND x18 -> gnf
x15 AND y15 -> rtq
dnq AND rpv -> wmm
gnk OR rtq -> tmp
y35 AND x35 -> z35
x07 AND y07 -> tsr
rvj AND ghf -> dgm
x25 AND y25 -> qjh
kvq AND btb -> cgn
kwj XOR bhv -> hqk
jkn OR prq -> mtb
qwd AND scq -> wpp
y24 XOR x24 -> qrh
prg AND kvn -> gnk
y28 AND x28 -> cnw
x13 XOR y13 -> scq
wrp OR dgv -> sjq
vkd XOR scp -> fhc
mwh OR pdp -> mbg
y00 AND x00 -> rdm
ghf XOR rvj -> z14
y11 XOR x11 -> nmm
bhv AND kwj -> bvg
dbk OR bwq -> cgr
bmp AND bcb -> vvs
fhc XOR pns -> z07
y10 XOR x10 -> vms
y16 AND x16 -> kbq
y42 XOR x42 -> hgv
rnc AND vms -> jrh
x36 AND y36 -> mmd
wfs AND sdm -> rfb
x43 XOR y43 -> kfb
rqt AND cgr -> mph
y31 AND x31 -> kkq
x12 AND y12 -> tcd
x24 AND y24 -> wrp
ptv OR pws -> scp
mbg AND qrh -> dgv
hmp AND dhb -> rmm
wvn OR rmf -> pck
cnw OR mph -> whw
wbd AND mbr -> cff
jqs XOR qpp -> z03`,m5=`#####
.####
.####
.####
.#.#.
.#...
.....

#####
##.##
.#.##
...##
...#.
...#.
.....

.....
#....
#....
#...#
#.#.#
#.###
#####

.....
.....
#.#..
###..
###.#
###.#
#####

.....
.....
.....
#....
#.#..
#.#.#
#####`,c5=`.....
.....
.....
...#.
.#.##
.#.##
#####

.....
.....
...#.
.#.#.
.####
#####
#####

#####
#.###
#.###
#..#.
#....
#....
.....

.....
....#
#...#
#..##
#..##
#.###
#####

.....
.#...
.#...
.##..
####.
####.
#####

.....
.....
#..#.
#.###
#####
#####
#####

.....
.....
.#..#
.#.##
##.##
##.##
#####

#####
#.###
#.##.
#.##.
#.##.
#..#.
.....

.....
.....
.#.#.
.#.#.
.#.#.
.####
#####

#####
##.##
##..#
#....
.....
.....
.....

#####
#####
##.##
##.##
##.##
#..#.
.....

.....
....#
#..##
#..##
#.###
#.###
#####

#####
##.##
#...#
.....
.....
.....
.....

#####
.#.##
.#..#
.#..#
....#
....#
.....

#####
###.#
#.#..
..#..
..#..
..#..
.....

.....
.....
.....
..#..
..##.
.####
#####

#####
####.
####.
.###.
.#.#.
.#.#.
.....

#####
#.###
#.###
#.##.
#..#.
...#.
.....

#####
###.#
#.#.#
#...#
.....
.....
.....

.....
...#.
...#.
..##.
#.##.
####.
#####

.....
#.#..
#.#..
#.##.
#.###
#.###
#####

#####
###.#
###.#
.##.#
.##.#
..#.#
.....

#####
.####
.####
.####
.#.##
....#
.....

.....
.#...
###..
####.
####.
#####
#####

#####
#####
#.###
#.#.#
#...#
#....
.....

.....
.#...
.#...
.#...
.#.#.
.#.##
#####

.....
.#.#.
.###.
####.
#####
#####
#####

.....
.....
#....
#....
#.#..
####.
#####

#####
###.#
###.#
###..
##...
.#...
.....

#####
.##.#
.#..#
....#
....#
....#
.....

.....
#..#.
#..#.
##.##
##.##
##.##
#####

.....
.....
.#.#.
.#.#.
##.#.
####.
#####

#####
###.#
###.#
###.#
.#..#
.#..#
.....

.....
....#
..#.#
.##.#
.##.#
.####
#####

.....
.#...
.#.#.
.#.#.
.#.#.
.###.
#####

#####
#####
###.#
#.#.#
#...#
.....
.....

#####
.####
.####
..##.
..#..
..#..
.....

.....
.#...
.#...
.#..#
.#..#
###.#
#####

#####
####.
####.
####.
#.#..
#.#..
.....

#####
#####
##.##
##.##
##..#
.#...
.....

#####
#####
.####
.##.#
..#.#
..#.#
.....

.....
.....
...#.
..###
.####
.####
#####

.....
.....
...#.
.#.#.
.#.#.
.#.##
#####

#####
#####
##.##
##.##
##.##
.#.#.
.....

.....
#....
##...
##...
###..
####.
#####

.....
.....
.#...
##..#
##.##
##.##
#####

#####
####.
###..
.##..
.#...
.....
.....

.....
.#.#.
##.#.
##.##
##.##
#####
#####

.....
#...#
#.#.#
###.#
###.#
#####
#####

.....
.....
..#..
..#.#
.##.#
#####
#####

#####
#####
.####
.#.#.
.#.#.
.#...
.....

#####
#.#.#
#...#
#....
#....
.....
.....

#####
#####
####.
#.#..
#.#..
#....
.....

.....
.#..#
##.##
##.##
#####
#####
#####

#####
#.#.#
#.#.#
#.#.#
.....
.....
.....

.....
..#..
..#..
.##.#
.##.#
#####
#####

#####
#####
#####
#####
#.##.
#.#..
.....

#####
#####
.####
.##.#
.#..#
.#...
.....

.....
#..#.
#..#.
#.##.
#.##.
#.###
#####

.....
.....
.....
.#...
.#.#.
##.#.
#####

.....
.....
.#...
.#.#.
.####
.####
#####

.....
.....
...#.
...#.
...##
#.###
#####

#####
.##.#
.##.#
.#..#
.#...
.#...
.....

.....
#....
##..#
###.#
#####
#####
#####

#####
##.##
#..#.
#..#.
#....
.....
.....

.....
.....
...#.
..##.
..###
.####
#####

#####
####.
##.#.
##.#.
.#.#.
.#...
.....

.....
....#
#...#
#...#
#.#.#
#.#.#
#####

#####
###.#
.##.#
.#...
.....
.....
.....

#####
###.#
###.#
.##.#
..#.#
.....
.....

#####
.####
.####
.#.##
.#.##
.#..#
.....

.....
.#...
.##..
.##..
.##.#
###.#
#####

#####
#####
.####
..#.#
....#
.....
.....

.....
.#...
.#...
.#.#.
.###.
.####
#####

.....
.....
.....
.#.#.
.#.#.
.###.
#####

#####
.###.
.##..
.##..
.#...
.#...
.....

#####
####.
##.#.
#..#.
#..#.
.....
.....

#####
#####
#.##.
..##.
..##.
..#..
.....

#####
####.
#.#..
#....
#....
.....
.....

#####
.####
.####
.#.##
.#.#.
.....
.....

.....
.#...
.##..
.##..
###.#
###.#
#####

#####
.###.
.#.#.
...#.
...#.
...#.
.....

#####
###.#
##...
##...
##...
#....
.....

.....
.#.#.
.###.
####.
####.
#####
#####

.....
..#..
.##..
####.
####.
####.
#####

#####
###.#
###..
#.#..
#.#..
#....
.....

.....
....#
....#
..#.#
.##.#
.####
#####

#####
#####
#####
####.
##.#.
#..#.
.....

#####
#.#.#
#.#.#
#.#.#
....#
.....
.....

#####
#####
####.
####.
#.#..
.....
.....

#####
##.##
##.##
#..#.
#..#.
.....
.....

.....
.....
#...#
##.##
#####
#####
#####

.....
#...#
#..##
##.##
##.##
#####
#####

.....
.....
#....
#....
#...#
##.##
#####

#####
.#.##
...##
...##
....#
....#
.....

#####
#####
###.#
.#..#
....#
.....
.....

#####
.####
.#.##
....#
.....
.....
.....

.....
..#..
..#.#
..#.#
#.#.#
#.#.#
#####

#####
###.#
#.#.#
#.#.#
#...#
.....
.....

.....
....#
.#..#
##..#
##.##
#####
#####

#####
.##.#
.##.#
.##.#
..#..
..#..
.....

#####
#####
#.#.#
#.#.#
#.#.#
.....
.....

#####
#.###
..##.
..#..
.....
.....
.....

.....
#....
##...
##.#.
####.
####.
#####

.....
#.#..
#.#..
####.
#####
#####
#####

.....
.....
#....
#..#.
#.###
#.###
#####

.....
..#..
.###.
####.
#####
#####
#####

#####
.####
.###.
..#..
..#..
..#..
.....

#####
.####
.#.#.
.#.#.
...#.
.....
.....

#####
#####
##.##
#..##
#..#.
.....
.....

#####
.####
.###.
.###.
.##..
..#..
.....

.....
.#...
.#...
.##..
.##..
####.
#####

#####
#####
##.##
##.##
#..#.
.....
.....

.....
..#.#
..#.#
..###
.####
.####
#####

.....
.....
.....
..#..
..##.
#.###
#####

#####
####.
#.#..
#.#..
..#..
.....
.....

.....
....#
....#
#...#
#.#.#
###.#
#####

#####
####.
#.##.
#..#.
.....
.....
.....

#####
#####
#####
##.#.
#..#.
#..#.
.....

#####
##.##
.#.#.
.#.#.
.#.#.
.#.#.
.....

#####
#####
####.
#.##.
#.#..
#.#..
.....

#####
#####
.####
.####
.#.##
.#.#.
.....

#####
#####
#####
##.##
#..#.
.....
.....

#####
#####
#####
#####
#.###
..#.#
.....

.....
.....
#....
#....
##...
###.#
#####

.....
....#
#...#
#.#.#
#.#.#
###.#
#####

.....
.....
..#..
#.#..
####.
#####
#####

.....
#.#..
###..
###..
####.
#####
#####

#####
##.##
.#..#
.....
.....
.....
.....

.....
...#.
...#.
.#.##
.#.##
.####
#####

#####
#.###
#..##
#..#.
#..#.
...#.
.....

.....
.#...
.#..#
##.##
#####
#####
#####

#####
##.##
##.##
#..#.
#....
#....
.....

#####
##.##
#..##
#..#.
#..#.
.....
.....

#####
.#.##
.#.##
.#..#
....#
.....
.....

#####
.####
.####
.#.##
.#.#.
...#.
.....

.....
.#.#.
.#.#.
.###.
#####
#####
#####

.....
.....
...#.
...#.
...#.
#.###
#####

.....
...#.
#..#.
#..#.
#..#.
##.#.
#####

#####
#.###
#.#.#
#.#.#
..#..
.....
.....

.....
.#..#
.#..#
##..#
##..#
###.#
#####

#####
.##.#
.##.#
.##..
.#...
.....
.....

.....
.#..#
.##.#
###.#
###.#
###.#
#####

#####
##.##
##.##
#..##
....#
....#
.....

#####
##.##
#..##
#..#.
#....
#....
.....

.....
..#..
..#..
.##..
####.
#####
#####

#####
###.#
#.#.#
#.#.#
#.#.#
....#
.....

#####
####.
#.##.
#.##.
..##.
...#.
.....

#####
###.#
.##.#
.##..
.#...
.....
.....

#####
#.##.
..#..
.....
.....
.....
.....

.....
..#..
.##.#
.##.#
.####
#####
#####

.....
.#.#.
.#.##
.#.##
##.##
#####
#####

#####
#####
#.###
#.##.
#..#.
...#.
.....

#####
#####
####.
###..
###..
.#...
.....

#####
###.#
###.#
.##.#
.#...
.....
.....

#####
.####
.####
.####
..#.#
..#..
.....

#####
##.##
##.##
##..#
##..#
.#..#
.....

#####
#####
.###.
.##..
..#..
.....
.....

.....
.....
.....
..#..
.##.#
.####
#####

.....
#.#..
#.##.
#.##.
####.
#####
#####

#####
#####
.#.##
.#.#.
.#.#.
.#...
.....

#####
#####
###.#
#.#.#
#.#..
#.#..
.....

#####
##.#.
#..#.
#..#.
.....
.....
.....

.....
..#..
..#..
..#..
..#..
#.#.#
#####

.....
..#..
..#..
.##.#
.####
#####
#####

.....
.....
.....
.#...
##..#
##.##
#####

.....
..#.#
#.#.#
#.#.#
#.#.#
#.#.#
#####

#####
#####
.#.#.
...#.
...#.
.....
.....

.....
#.#..
#.##.
#.##.
#.##.
####.
#####

.....
....#
.#.##
.#.##
.####
#####
#####

.....
.....
#...#
#...#
#..##
##.##
#####

#####
###.#
###.#
.##.#
.##.#
..#..
.....

.....
#....
#.#..
#.##.
#.##.
####.
#####

#####
#####
.##.#
.#..#
.#...
.....
.....

#####
####.
####.
##.#.
.#.#.
.#...
.....

#####
####.
####.
#.##.
#.#..
#....
.....

.....
....#
....#
.#.##
.####
#####
#####

.....
....#
.#..#
.##.#
###.#
#####
#####

#####
####.
####.
##.#.
##.#.
#....
.....

#####
.####
.#.##
.#.##
.#..#
....#
.....

.....
....#
#...#
#.#.#
#####
#####
#####

.....
.....
....#
#...#
#.#.#
#.#.#
#####

#####
##.##
#..#.
#....
.....
.....
.....

.....
.....
.#..#
.#..#
##..#
##.##
#####

#####
#.###
#.###
#.#.#
#....
#....
.....

#####
.##.#
..#.#
..#.#
..#.#
..#..
.....

.....
.....
#....
##.#.
#####
#####
#####

.....
...#.
.#.#.
.#.#.
##.#.
####.
#####

.....
#.#.#
#.#.#
#.#.#
#.#.#
#.###
#####

#####
##.##
#..##
#..##
....#
.....
.....

.....
....#
....#
..#.#
..###
.####
#####

.....
..#..
..##.
.####
.####
#####
#####

#####
#####
.####
.####
..##.
..#..
.....

#####
#####
#####
####.
#.#..
..#..
.....

.....
..#.#
..#.#
..###
#.###
#####
#####

#####
#####
####.
.###.
.###.
.#.#.
.....

.....
.....
..#.#
..#.#
.####
.####
#####

#####
.##.#
.##.#
.##.#
..#.#
.....
.....

.....
#...#
#...#
##..#
###.#
###.#
#####

.....
..#..
.##.#
.##.#
#####
#####
#####

#####
#.##.
#.##.
#.#..
#.#..
..#..
.....

.....
#....
#....
##..#
##..#
##.##
#####

.....
.....
#....
##...
##.#.
##.##
#####

#####
.##.#
.##.#
.#...
.#...
.....
.....

#####
#####
#####
.#.##
....#
.....
.....

#####
##.##
##.#.
##.#.
##.#.
.#.#.
.....

.....
#..#.
#..##
##.##
##.##
##.##
#####

.....
.#...
.##.#
.##.#
.####
.####
#####

.....
#....
#....
#..#.
#..#.
#.###
#####

#####
###.#
.##.#
..#..
..#..
..#..
.....

#####
#####
#####
#.###
#.#.#
..#..
.....

.....
...#.
#.##.
#.##.
####.
#####
#####

.....
#.#..
#.#..
###..
####.
#####
#####

#####
#####
##.#.
##.#.
##...
#....
.....

#####
.#.##
.#..#
.#..#
.#..#
.....
.....

.....
.....
.....
....#
.#..#
.#.##
#####

.....
.#..#
.#..#
.#..#
##.##
#####
#####

.....
.....
..#..
.##..
.##.#
.####
#####

.....
.....
.#...
.#..#
.##.#
.##.#
#####

.....
.#...
##.#.
##.#.
####.
####.
#####

.....
...#.
..##.
.###.
####.
####.
#####

.....
.....
..#..
#.#..
#.#.#
###.#
#####

#####
#####
#####
###.#
###..
#.#..
.....

.....
.....
.....
#.#.#
#.#.#
#.#.#
#####

.....
.#...
.##..
.##.#
.####
.####
#####

.....
...#.
...#.
...##
.#.##
.####
#####

.....
.#.#.
.#.#.
.#.#.
.###.
.###.
#####

.....
.....
#.#.#
#.#.#
#.#.#
#.###
#####

.....
.....
..#.#
.##.#
.##.#
.##.#
#####

#####
#####
.###.
.#.#.
.....
.....
.....

#####
####.
.###.
.###.
.#.#.
...#.
.....

#####
#####
#####
##.##
##..#
#...#
.....

.....
#....
#....
##...
###.#
#####
#####

.....
..#..
..#.#
.####
#####
#####
#####

.....
.....
..#..
.##..
####.
####.
#####

.....
..#..
..#..
..#.#
.####
.####
#####

.....
....#
....#
#...#
#...#
#.#.#
#####

#####
.###.
.##..
.##..
..#..
.....
.....

.....
....#
....#
....#
.#.##
.#.##
#####

.....
#....
#..#.
##.#.
##.#.
#####
#####

.....
.....
#....
#...#
##.##
#####
#####

#####
###.#
#.#..
#.#..
..#..
.....
.....

.....
...#.
.#.##
.#.##
##.##
##.##
#####

.....
..#..
..#..
..#..
..##.
#.##.
#####

#####
.##.#
..#..
..#..
.....
.....
.....

.....
...#.
.#.#.
.###.
#####
#####
#####

.....
#....
#....
##...
##..#
##.##
#####

.....
.....
#....
#.#.#
#.###
#.###
#####

.....
.....
.#...
.##..
.###.
.###.
#####

.....
#..#.
#..#.
##.#.
##.##
##.##
#####

.....
.#...
.#...
.#...
.#.#.
.#.#.
#####

#####
#####
##.##
#..##
#...#
#....
.....

.....
....#
#..##
#..##
#..##
#.###
#####

.....
...#.
...##
...##
..###
#.###
#####

#####
#.###
#..##
#..##
#..##
....#
.....

#####
###.#
#.#.#
#...#
#....
.....
.....

#####
####.
###..
.##..
.##..
.#...
.....

#####
###.#
##..#
##..#
.#..#
....#
.....

#####
.####
.####
.####
..##.
..#..
.....

#####
.####
.####
.##.#
.##..
.#...
.....

#####
###.#
###.#
###.#
###.#
.#...
.....

.....
.....
..#..
..#..
.##.#
#####
#####

#####
#####
.###.
.###.
..#..
.....
.....

#####
#####
##.##
.#.##
...##
....#
.....

.....
...#.
#..#.
#..##
#.###
#####
#####

.....
..#..
..#..
..#..
.##..
###.#
#####

.....
.....
#.#..
#.##.
#####
#####
#####

.....
.....
..#..
..##.
#.##.
#####
#####

#####
####.
.##..
.#...
.#...
.....
.....

#####
#####
##.#.
.#.#.
.....
.....
.....

#####
#####
##.##
#..##
#..#.
#..#.
.....

#####
#####
.####
.##.#
.##.#
.#...
.....

.....
#....
#..#.
#..#.
##.#.
#####
#####

#####
#####
#####
#.###
#.#.#
#...#
.....

#####
#####
.####
.####
.#.#.
.#...
.....

.....
.....
.....
....#
.#.##
#####
#####

#####
##.#.
##.#.
.#...
.#...
.....
.....

#####
##.#.
##...
##...
#....
#....
.....

#####
####.
####.
##.#.
#..#.
.....
.....

#####
.#.#.
.#.#.
.#...
.....
.....
.....

#####
##.##
##.##
.#.##
.#.#.
.#.#.
.....

#####
####.
#.##.
#.##.
..#..
.....
.....

#####
##.##
#..#.
#..#.
.....
.....
.....

#####
####.
.###.
.###.
.##..
.#...
.....

.....
.....
.....
.....
#..#.
#.###
#####

#####
#####
#.##.
..#..
..#..
.....
.....

#####
##.##
.#.##
.#..#
.#...
.#...
.....

.....
..#..
..#..
.##..
.##.#
#####
#####

#####
###.#
#.#..
#.#..
#.#..
..#..
.....

#####
#.###
#.#.#
#.#.#
#.#.#
#...#
.....

.....
....#
....#
.#..#
.#.##
#####
#####

.....
#.#..
#.#..
#.#..
#.#.#
#.###
#####

.....
...#.
.#.#.
.###.
.###.
#####
#####

#####
##.##
##.#.
##.#.
.#.#.
.#.#.
.....

#####
###.#
###..
.##..
..#..
.....
.....

#####
#.##.
#..#.
#..#.
#....
.....
.....

.....
.....
.....
#..#.
##.#.
####.
#####

.....
..#..
#.##.
#.###
#####
#####
#####

#####
####.
####.
##.#.
.#...
.#...
.....

.....
.....
#...#
#...#
##.##
##.##
#####

#####
####.
##.#.
#..#.
#..#.
#..#.
.....

#####
#.##.
#..#.
#..#.
#....
#....
.....

#####
###.#
##..#
#...#
#...#
....#
.....

#####
####.
####.
###..
#.#..
#.#..
.....

#####
###.#
.#..#
....#
....#
.....
.....

#####
#.##.
#..#.
#..#.
#..#.
.....
.....

#####
#.###
#.###
#.###
#.#.#
..#.#
.....

.....
...#.
...#.
#..#.
#..#.
##.#.
#####

.....
.....
#...#
#..##
##.##
##.##
#####

#####
#.##.
#..#.
...#.
...#.
.....
.....

#####
#####
#.#.#
#.#.#
..#.#
..#.#
.....

.....
#....
#...#
#..##
##.##
##.##
#####

#####
##.##
##.#.
##.#.
.#...
.#...
.....

.....
.....
#....
#....
#.#..
###.#
#####

.....
..#..
.##..
.##.#
.####
#####
#####

#####
#.###
..#.#
..#.#
..#.#
....#
.....

#####
.###.
..##.
..##.
...#.
...#.
.....

.....
..#.#
..#.#
..#.#
#.###
#.###
#####

#####
#####
###.#
##...
#....
.....
.....

#####
#####
#.###
#.#.#
..#..
..#..
.....

.....
...#.
...##
.#.##
.####
#####
#####

#####
#####
##.##
.#..#
....#
....#
.....

#####
#.###
...##
....#
.....
.....
.....

.....
..#..
..#..
#.#..
#.#.#
###.#
#####

.....
.#.#.
.#.#.
.#.#.
.####
.####
#####

#####
####.
####.
#.#..
.....
.....
.....

.....
#..#.
#..#.
#..#.
##.#.
##.##
#####

#####
###.#
##..#
##..#
#...#
.....
.....

#####
#.#.#
#...#
....#
....#
.....
.....

#####
#####
###.#
.##.#
..#.#
....#
.....

#####
#####
#.##.
..##.
..#..
..#..
.....

.....
...#.
...#.
..###
.####
#####
#####

.....
.....
.....
#....
#.#.#
#.###
#####

#####
##.#.
##.#.
#..#.
#..#.
#....
.....

.....
#....
#....
#....
#..#.
##.##
#####

#####
.####
.####
.####
.##.#
..#..
.....

#####
#####
#.###
#.#.#
..#.#
.....
.....

.....
.....
....#
....#
..#.#
.##.#
#####

.....
.#...
.#...
.#..#
.#..#
.##.#
#####

.....
....#
.#..#
.#..#
.#..#
###.#
#####

.....
#....
#....
#....
#.#.#
#####
#####

.....
#....
#....
#..#.
#..#.
##.##
#####

#####
.####
..#.#
..#.#
....#
....#
.....

.....
...#.
...##
.#.##
.#.##
##.##
#####

.....
.#..#
.##.#
.##.#
.####
.####
#####

#####
##.##
.#.##
...##
....#
.....
.....

#####
#####
##.##
##..#
.#...
.....
.....

.....
.....
...#.
...#.
#.##.
#.##.
#####

#####
#####
#####
###.#
###.#
#.#..
.....

.....
#.#..
#.#..
#.#..
###..
####.
#####

.....
.....
.#...
.#.#.
##.##
#####
#####

#####
#####
.####
..###
..###
...#.
.....

#####
#.###
#.###
#.#.#
..#..
.....
.....

#####
###.#
###.#
.#...
.....
.....
.....

.....
..#..
..#.#
..#.#
#.#.#
###.#
#####

.....
#....
#.#..
#.#..
#.#..
#.##.
#####

.....
.....
.....
.....
.#...
.#.#.
#####

.....
.....
#.#.#
#.#.#
###.#
#####
#####

#####
###.#
.##..
..#..
..#..
..#..
.....

.....
#....
#....
#.#..
#.#..
###.#
#####

.....
....#
#..##
#.###
#.###
#.###
#####

.....
.....
.....
...#.
...#.
.#.#.
#####

#####
###.#
###..
##...
#....
.....
.....

.....
....#
..#.#
..#.#
#.###
#.###
#####

#####
##.##
##.#.
#..#.
.....
.....
.....

.....
....#
...##
#.###
#.###
#####
#####

.....
#..#.
##.##
##.##
##.##
#####
#####

.....
.#...
.#...
##.#.
##.#.
##.##
#####

.....
.....
.#.#.
.#.#.
.#.#.
.###.
#####

.....
.....
..#..
.##..
.###.
#####
#####

#####
#####
#####
#.##.
..##.
..#..
.....

#####
#####
.#.##
.#..#
.#...
.....
.....

#####
#.###
..###
..###
...#.
...#.
.....

#####
#####
.###.
..#..
..#..
.....
.....

#####
.##.#
.##.#
.##.#
.#..#
....#
.....

.....
.....
#..#.
#.##.
#.##.
#####
#####

.....
.....
.....
....#
#.#.#
#.#.#
#####

#####
####.
.###.
.#.#.
.#.#.
.#.#.
.....

.....
..#..
.##.#
#####
#####
#####
#####

.....
...#.
..##.
..##.
.###.
####.
#####

.....
#..#.
#.##.
####.
####.
#####
#####

#####
#####
#####
.####
.#.##
...#.
.....

.....
.....
.#.#.
.#.#.
##.##
#####
#####

.....
.....
.#...
.##.#
.##.#
###.#
#####

.....
.....
#.#..
#.##.
####.
####.
#####

.....
.#...
.#...
.#.#.
##.##
##.##
#####

.....
#....
#.#..
#.##.
####.
#####
#####

#####
####.
#.##.
#.#..
..#..
..#..
.....

#####
.#.##
.#.##
.#.##
....#
....#
.....

#####
#####
#####
###.#
.##.#
.#...
.....

.....
....#
....#
.#..#
##..#
###.#
#####

#####
#####
#####
#.##.
#..#.
#..#.
.....

#####
#####
###.#
#.#..
..#..
..#..
.....

.....
....#
..#.#
#.#.#
#.#.#
#.###
#####

#####
#####
####.
#.##.
..##.
...#.
.....

#####
.####
..###
...#.
.....
.....
.....

#####
#.###
#.###
#.##.
#.##.
#..#.
.....

#####
#.###
#.###
#.#.#
..#.#
..#..
.....

#####
.###.
.#.#.
.#.#.
.#.#.
.#...
.....

.....
....#
....#
#.#.#
#.#.#
#.###
#####

#####
##.##
.#.##
.#..#
.....
.....
.....

.....
#....
#.#..
#.#..
#.#.#
#.###
#####

.....
.....
.#..#
.#.##
.#.##
.####
#####

#####
#.##.
..##.
..##.
..##.
...#.
.....

#####
####.
####.
#.##.
#.#..
..#..
.....

#####
##.##
##.#.
##.#.
#....
#....
.....

.....
..#..
.##..
.##.#
.##.#
.####
#####

#####
#####
#####
##.#.
.#.#.
.#.#.
.....

.....
....#
....#
....#
.#.##
.####
#####

#####
#####
#.###
#..##
#..##
#...#
.....

#####
#####
###.#
##..#
##..#
.#...
.....

#####
.##.#
.##..
.##..
..#..
..#..
.....

#####
##.##
#..##
#...#
....#
....#
.....

.....
..#..
..#..
#.#..
###..
####.
#####

.....
.....
...#.
#..#.
##.#.
####.
#####

.....
...#.
#..##
#..##
##.##
##.##
#####

#####
#####
.##.#
.##.#
..#.#
....#
.....

#####
#.###
..#.#
..#..
..#..
.....
.....

#####
#####
##.##
##..#
##..#
#....
.....

.....
.#...
.##.#
.##.#
.##.#
.####
#####

#####
##.##
##.##
##.##
##.##
.#.#.
.....

.....
..#..
..#.#
#.#.#
#####
#####
#####

#####
#####
.####
.####
.##.#
..#..
.....

#####
#.###
#.###
#.###
#.#.#
#....
.....

.....
..#.#
.##.#
.##.#
.##.#
.####
#####

#####
#####
####.
##.#.
##...
.#...
.....

.....
....#
.#.##
.#.##
#####
#####
#####

.....
.....
.....
..#..
#.##.
####.
#####

#####
#####
#####
##.##
.#.##
....#
.....

#####
#####
.#.##
.#.#.
.#...
.....
.....

.....
.....
...#.
..##.
#.##.
#.###
#####

.....
...#.
...##
..###
..###
.####
#####

.....
.....
.....
..#.#
.##.#
.####
#####

.....
.....
...#.
#.##.
#.##.
#####
#####

.....
.....
....#
...##
.#.##
.####
#####

#####
.####
.##.#
..#.#
..#..
..#..
.....

.....
#..#.
#..#.
##.#.
##.#.
##.##
#####

.....
#....
#.#.#
#.#.#
#.#.#
#####
#####

#####
#.###
#.#.#
#.#.#
#...#
#...#
.....

#####
#.##.
#.#..
#.#..
..#..
..#..
.....

.....
...#.
...#.
#..#.
##.#.
####.
#####

.....
....#
.#..#
.#..#
.#.##
.####
#####

.....
#.#.#
#.#.#
#####
#####
#####
#####

#####
#.###
#..#.
#..#.
#....
#....
.....

#####
.####
.##.#
.##.#
..#.#
.....
.....

.....
.....
..#..
..#..
.##..
.##.#
#####

.....
.....
..#..
..##.
..###
.####
#####

.....
..#..
..#..
..#..
..#.#
#.#.#
#####

.....
...#.
...##
#.###
#####
#####
#####

#####
#####
.####
.###.
..#..
..#..
.....

#####
#####
.####
.##.#
..#.#
.....
.....

.....
#....
#..#.
#..#.
#.##.
####.
#####

.....
....#
#.#.#
#.#.#
#.#.#
###.#
#####

#####
#.###
#..##
#..##
...##
...#.
.....

#####
.####
..###
..###
...#.
.....
.....

#####
#.#.#
#...#
....#
.....
.....
.....

.....
.#..#
.#.##
.#.##
##.##
#####
#####

.....
#....
#....
#..#.
##.#.
#####
#####

.....
.....
#.#..
#.#.#
#.#.#
#####
#####

#####
##.##
##.##
##.##
#..#.
...#.
.....

.....
.#.#.
.#.#.
.####
.####
#####
#####

#####
#####
#.##.
..##.
..#..
.....
.....

#####
#.#.#
#.#.#
#.#.#
#...#
....#
.....

.....
...#.
.#.#.
.####
#####
#####
#####

.....
...#.
...#.
#..##
#.###
#####
#####

#####
#####
#.###
#..##
....#
....#
.....

.....
.#...
##...
##..#
###.#
###.#
#####

.....
...#.
...#.
#..##
##.##
#####
#####

#####
#####
#.##.
#.#..
#....
#....
.....

.....
.....
.....
.#..#
.#.##
.#.##
#####

.....
.....
....#
...##
..###
#.###
#####

.....
.#..#
.##.#
.##.#
###.#
#####
#####

.....
...#.
#..#.
#..#.
#.###
#####
#####

.....
....#
.#..#
.#.##
.#.##
##.##
#####

#####
.###.
.#.#.
.#.#.
.#.#.
...#.
.....

.....
.#.#.
.#.#.
.#.#.
#####
#####
#####

#####
##.##
.#.##
.#.##
.#.#.
.#...
.....

.....
.....
.....
#....
#.#..
#.#.#
#####

#####
.####
..###
...##
...##
....#
.....

.....
.....
..#..
#.##.
#.###
#####
#####

#####
#.#.#
#.#.#
#...#
#....
#....
.....

#####
#####
#####
.#.#.
.#.#.
...#.
.....

#####
####.
####.
.#.#.
.#.#.
...#.
.....

#####
#####
##.##
.#.##
...#.
...#.
.....

#####
.####
.#.##
.#.##
.#.#.
.....
.....

.....
.....
.#.#.
.#.##
##.##
##.##
#####

#####
###.#
###..
#.#..
#....
#....
.....

.....
.#...
.#...
.#...
.##.#
###.#
#####

.....
.#...
.#...
.#.#.
#####
#####
#####

#####
#####
.####
.####
..#.#
..#..
.....

.....
#..#.
#..#.
#.###
#####
#####
#####

.....
.....
....#
....#
.#.##
##.##
#####

.....
.....
.#..#
##.##
#####
#####
#####

#####
#####
###.#
###.#
##...
#....
.....

#####
###.#
###.#
###..
#.#..
#.#..
.....

.....
.....
.....
#..#.
#..#.
#.###
#####

.....
.....
#....
#....
#..#.
##.#.
#####

.....
....#
....#
..#.#
..###
#.###
#####

.....
.....
.....
#..#.
##.#.
##.#.
#####

#####
#####
###.#
###.#
.##..
.#...
.....`,B5=Object.assign({"../advent/day01/solution.ts":P1,"../advent/day02/solution.ts":C1,"../advent/day03/solution.ts":I1,"../advent/day04/solution.ts":F1,"../advent/day05/solution.ts":x1,"../advent/day06/solution.ts":T1,"../advent/day07/solution.ts":k1,"../advent/day08/solution.ts":W1,"../advent/day09/solution.ts":u3,"../advent/day10/solution.ts":w3,"../advent/day11/solution.ts":t3,"../advent/day12/solution.ts":l3,"../advent/day13/solution.ts":h3,"../advent/day14/solution.ts":a3,"../advent/day15/solution.ts":P3,"../advent/day16/solution.ts":C3,"../advent/day17/solution.ts":N3,"../advent/day18/solution.ts":E3,"../advent/day19/solution.ts":J3,"../advent/day20/solution.ts":L3,"../advent/day21/solution.ts":v2,"../advent/day22/solution.ts":b2,"../advent/day23/solution.ts":e2,"../advent/day24/solution.ts":h2,"../advent/day25/solution.ts":a2}),a5=Object.assign({"../advent/day01/input-test.md":p2,"../advent/day01/input.md":Y2,"../advent/day02/input-test.md":O2,"../advent/day02/input.md":P2,"../advent/day03/input-test.md":f2,"../advent/day03/input-test2.md":d2,"../advent/day03/input.md":R2,"../advent/day04/input-test.md":C2,"../advent/day04/input.md":y2,"../advent/day05/input-test.md":G2,"../advent/day05/input.md":I2,"../advent/day06/input-test.md":N2,"../advent/day06/input.md":z2,"../advent/day07/input-test.md":D2,"../advent/day07/input.md":F2,"../advent/day08/input-test.md":Z2,"../advent/day08/input.md":Q2,"../advent/day09/input-test.md":U2,"../advent/day09/input.md":x2,"../advent/day10/input-test.md":K2,"../advent/day10/input.md":E2,"../advent/day11/input-test.md":j2,"../advent/day11/input.md":T2,"../advent/day12/input-test.md":H2,"../advent/day12/input.md":J2,"../advent/day13/input-test.md":V2,"../advent/day13/input.md":k2,"../advent/day14/input-test.md":q2,"../advent/day14/input.md":_2,"../advent/day15/input-test.md":L2,"../advent/day15/input.md":W2,"../advent/day16/input-test.md":$2,"../advent/day16/input.md":n5,"../advent/day17/input-test.md":M5,"../advent/day17/input-test2.md":u5,"../advent/day17/input.md":r5,"../advent/day18/input-test.md":v5,"../advent/day18/input.md":A5,"../advent/day19/input-test.md":w5,"../advent/day19/input.md":X5,"../advent/day20/input-test.md":b5,"../advent/day20/input.md":g5,"../advent/day21/input-test.md":t5,"../advent/day21/input.md":S5,"../advent/day22/input-test.md":e5,"../advent/day22/input.md":o5,"../advent/day23/input-test.md":l5,"../advent/day23/input.md":s5,"../advent/day24/input-test.md":i5,"../advent/day24/input.md":h5,"../advent/day25/input-test.md":m5,"../advent/day25/input.md":c5}),p5=Object.freeze(Object.defineProperty({__proto__:null,inputMods:a5,solutionMods:B5},Symbol.toStringTag,{value:"Module"})),Wn=M=>parseInt(M.split("day")[1]||"1"),Y5=(M,n)=>{const u=(M.match(/input-?(.+)\.md$/)||[])[1]||"Real";return{day:Wn(M),name:u,raw:n}},O5=(M,n)=>{const u=!!(n.part1||n.part2),A=n.part1||(()=>"-"),w=n.part2||(()=>"-"),r=n.answers||[["",""]];return{day:Wn(M),part1:A,part2:w,answers:r,hasSolution:u}},[en,P5]=y([]),[D,f5]=y([]),[Mn,$n]=y(1),[L,n1]=y(0),[M1,u1]=y(""),[d5,R5]=y({value:"",time:0,knownGood:!1}),[C5,y5]=y({value:"",time:0,knownGood:!1}),[r1,W]=y(!1),[v1,G5]=y(!0),An=()=>en().filter(M=>M.day===Mn()),A1=()=>D().find(M=>M.day===Mn()),F=(M,n="",u=0,A=!1)=>{M===1&&R5({value:n,time:u,knownGood:A}),M===2&&y5({value:n,time:u,knownGood:A})},on=()=>[F(1),F(2)],I5=()=>{t1(()=>{if(L()>=An().length)return n1(An().length-1);const M=An()[L()],n=A1();if(!M||!n)return on();u1(M.raw)})},x=async()=>{const M=A1(),n=M1();if(!M||!n)return on();const u=M.answers[L()]||["",""];F(1),F(2),setTimeout(Pn,0,1,M.part1,n,u[0]),await N5(10),setTimeout(Pn,5,2,M.part2,n,u[1])},N5=M=>new Promise(n=>setTimeout(n,M)),Pn=async(M,n,u,A)=>{if(r1())return;W(!0);const{output:w,dt:r}=await w1(n,u,v1());F(M,w,r,w===A),W(!1)},w1=async(M,n,u)=>{const A=performance.now();return{output:(()=>{if(!u)return String(M(n));try{return String(M(n))}catch(r){return`Error: ${r}`}})(),dt:performance.now()-A}},z5=async()=>{if(r1())return;W(!0),on();const M=[],n=["",""],u=[0,0],A=[!0,!0];for(let w=0;w<D().length;w++){const r=D()[w],X=en().filter(v=>v.day===w+1)[0].raw;for(let v=0;v<2;v++){const{output:b,dt:g}=await w1(v===0?r.part1:r.part2,X,!0);M.push({dt:g,name:`Day ${r.day} part ${v+1}`}),u[v]+=g;const t=b===r.answers[0][v];A[v]&&=t,n[v]+=t?"★":"-",w===D().length-1&&(n[v]+=" done!"),F(v+1,n[v],u[v],A[v]),await new Promise(S=>setTimeout(S,0))}}M.sort((w,r)=>w.dt-r.dt),console.table(M.map(({name:w,dt:r})=>({name:w,ms:Math.round(r*10)/10}))),W(!1)},D5=M=>{P5(Object.keys(M.inputMods).map(n=>Y5(n,M.inputMods[n])).sort((n,u)=>n.name.localeCompare(u.name))),f5(Object.keys(M.solutionMods).map(n=>O5(n,M.solutionMods[n])).filter(n=>n.hasSolution).sort((n,u)=>n.day-u.day)),x()};D5(p5);$n(D().at(-1)?.day||1);setTimeout(x,0);var F5=N("<div class=label><h4>Part <!>:</h4><div class=time>(<!>ms)"),Z5=N("<textarea class=output disabled>");const Q5=(M="")=>{const n=M.split(`
`).length;return Math.min(n,Math.max(n,1,10))},fn=({part:M=1})=>{const n=M===1?d5:C5;return[(()=>{var u=F5(),A=u.firstChild,w=A.firstChild,r=w.nextSibling;r.nextSibling;var X=A.nextSibling,v=X.firstChild,b=v.nextSibling;return b.nextSibling,f(A,M,r),f(X,()=>n().time.toFixed(0),b),u})(),(()=>{var u=Z5();return I(A=>{var w=!!n().knownGood,r=Q5(n().value);return w!==A.e&&u.classList.toggle("correct-answer",A.e=w),r!==A.t&&m1(u,"rows",A.t=r),A},{e:void 0,t:void 0}),I(()=>u.value=n().value),u})()]};var U5=N("<button>");const un=M=>{const n=()=>({...M.classes,button:!0,toggled:M.isToggled});return(()=>{var u=U5();return c1(u,"click",M.onClick),f(u,()=>M.label),I(A=>B1(u,n(),A)),u})()};zn(["click"]);var x5=N("<div class=label style=align-self:flex-start;><h4>Input:</h4><br>");const K5=()=>{const M=()=>en().filter(n=>n.day===Mn()).map((n,u)=>({label:n.name,isToggled:u===L(),onClick:()=>{n1(u),x()},classes:{"input-toggle":!0}}));return(()=>{var n=x5(),u=n.firstChild;return u.nextSibling,f(n,()=>M().map(A=>d(un,A)),null),n})()},E5=()=>D().map(M=>d(un,{get label(){return M.day.toString().padStart(2,"0")},get isToggled(){return M.day===Mn()},onClick:()=>{$n(M.day),x()}}));var j5=N("<textarea rows=14>");const T5=M=>(()=>{var n=j5();return n.$$input=u=>{M.onUpdate(u.target.value),x()},I(()=>n.value=M.value),n})(),H5=()=>d(T5,{get value(){return M1()},onUpdate:u1});zn(["input"]);var J5=N("<div class=catch-area>Catch errors");const V5=()=>(()=>{var M=J5();return M.firstChild,f(M,d(un,{label:"x",classes:{"input-toggle":!0,"catch-button":!0},get isToggled(){return v1()},onClick:()=>G5(n=>!n)}),null),M})(),k5=()=>d(un,{label:"Run all",classes:{"input-toggle":!1,"run-all-button":!0},isToggled:!1,onClick:()=>z5()});var q5=N("<main><header><h2>Advent 2024</h2></header><article class=layout><div class=label><h4>Days:</h4></div><div><br></div><div>");const _5=()=>(I5(),(()=>{var M=q5(),n=M.firstChild,u=n.nextSibling,A=u.firstChild,w=A.nextSibling,r=w.firstChild,X=w.nextSibling;return f(w,d(E5,{}),r),f(w,d(k5,{}),null),f(u,d(fn,{part:1}),X),f(u,d(fn,{part:2}),X),f(u,d(K5,{}),X),f(u,d(H5,{}),X),f(u,d(V5,{}),null),M})()),L5=document.getElementById("root");h1(_5,L5);
//# sourceMappingURL=index-DC-UAGxb.js.map
