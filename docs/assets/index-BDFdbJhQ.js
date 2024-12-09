(function(){const M=document.createElement("link").relList;if(M&&M.supports&&M.supports("modulepreload"))return;for(const X of document.querySelectorAll('link[rel="modulepreload"]'))S(X);new MutationObserver(X=>{for(const e of X)if(e.type==="childList")for(const t of e.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&S(t)}).observe(document,{childList:!0,subtree:!0});function A(X){const e={};return X.integrity&&(e.integrity=X.integrity),X.referrerPolicy&&(e.referrerPolicy=X.referrerPolicy),X.crossOrigin==="use-credentials"?e.credentials="include":X.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function S(X){if(X.ep)return;X.ep=!0;const e=A(X);fetch(X.href,e)}})();const j3=(n,M)=>n===M,A3={equals:j3};let o3=m3;const g=1,I=2,u3={owned:null,cleanups:null,context:null,owner:null};var a=null;let J=null,E3=null,w=null,i=null,_=null,R=0;function T3(n,M){const A=w,S=a,X=n.length===0,e=M===void 0?S:M,t=X?u3:{owned:null,cleanups:null,context:e?e.context:null,owner:e},l=X?n:()=>n(()=>W(()=>x(t)));a=t,w=null;try{return C(l,!0)}finally{w=A,a=S}}function p(n,M){M=M?Object.assign({},A3,M):A3;const A={value:n,observers:null,observerSlots:null,comparator:M.equals||void 0},S=X=>(typeof X=="function"&&(X=X(A.value)),r3(A,X));return[P3.bind(A),S]}function v(n,M,A){const S=s3(n,M,!1,g);H(S)}function x3(n,M,A){o3=z3;const S=s3(n,M,!1,g);S.user=!0,_?_.push(S):H(S)}function W(n){if(w===null)return n();const M=w;w=null;try{return n()}finally{w=M}}function P3(){if(this.sources&&this.state)if(this.state===g)H(this);else{const n=i;i=null,C(()=>B(this),!1),i=n}if(w){const n=this.observers?this.observers.length:0;w.sources?(w.sources.push(this),w.sourceSlots.push(n)):(w.sources=[this],w.sourceSlots=[n]),this.observers?(this.observers.push(w),this.observerSlots.push(w.sources.length-1)):(this.observers=[w],this.observerSlots=[w.sources.length-1])}return this.value}function r3(n,M,A){let S=n.value;return(!n.comparator||!n.comparator(S,M))&&(n.value=M,n.observers&&n.observers.length&&C(()=>{for(let X=0;X<n.observers.length;X+=1){const e=n.observers[X],t=J&&J.running;t&&J.disposed.has(e),(t?!e.tState:!e.state)&&(e.pure?i.push(e):_.push(e),e.observers&&h3(e)),t||(e.state=g)}if(i.length>1e6)throw i=[],new Error},!1)),M}function H(n){if(!n.fn)return;x(n);const M=R;C3(n,n.value,M)}function C3(n,M,A){let S;const X=a,e=w;w=a=n;try{S=n.fn(M)}catch(t){return n.pure&&(n.state=g,n.owned&&n.owned.forEach(x),n.owned=null),n.updatedAt=A+1,w3(t)}finally{w=e,a=X}(!n.updatedAt||n.updatedAt<=A)&&(n.updatedAt!=null&&"observers"in n?r3(n,S):n.value=S,n.updatedAt=A)}function s3(n,M,A,S=g,X){const e={fn:n,state:S,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:M,owner:a,context:a?a.context:null,pure:A};return a===null||a!==u3&&(a.owned?a.owned.push(e):a.owned=[e]),e}function L(n){if(n.state===0)return;if(n.state===I)return B(n);if(n.suspense&&W(n.suspense.inFallback))return n.suspense.effects.push(n);const M=[n];for(;(n=n.owner)&&(!n.updatedAt||n.updatedAt<R);)n.state&&M.push(n);for(let A=M.length-1;A>=0;A--)if(n=M[A],n.state===g)H(n);else if(n.state===I){const S=i;i=null,C(()=>B(n,M[0]),!1),i=S}}function C(n,M){if(i)return n();let A=!1;M||(i=[]),_?A=!0:_=[],R++;try{const S=n();return k3(A),S}catch(S){A||(_=null),i=null,w3(S)}}function k3(n){if(i&&(m3(i),i=null),n)return;const M=_;_=null,M.length&&C(()=>o3(M),!1)}function m3(n){for(let M=0;M<n.length;M++)L(n[M])}function z3(n){let M,A=0;for(M=0;M<n.length;M++){const S=n[M];S.user?n[A++]=S:L(S)}for(M=0;M<A;M++)L(n[M])}function B(n,M){n.state=0;for(let A=0;A<n.sources.length;A+=1){const S=n.sources[A];if(S.sources){const X=S.state;X===g?S!==M&&(!S.updatedAt||S.updatedAt<R)&&L(S):X===I&&B(S,M)}}}function h3(n){for(let M=0;M<n.observers.length;M+=1){const A=n.observers[M];A.state||(A.state=I,A.pure?i.push(A):_.push(A),A.observers&&h3(A))}}function x(n){let M;if(n.sources)for(;n.sources.length;){const A=n.sources.pop(),S=n.sourceSlots.pop(),X=A.observers;if(X&&X.length){const e=X.pop(),t=A.observerSlots.pop();S<X.length&&(e.sourceSlots[t]=S,X[S]=e,A.observerSlots[S]=t)}}if(n.tOwned){for(M=n.tOwned.length-1;M>=0;M--)x(n.tOwned[M]);delete n.tOwned}if(n.owned){for(M=n.owned.length-1;M>=0;M--)x(n.owned[M]);n.owned=null}if(n.cleanups){for(M=n.cleanups.length-1;M>=0;M--)n.cleanups[M]();n.cleanups=null}n.state=0}function N3(n){return n instanceof Error?n:new Error(typeof n=="string"?n:"Unknown error",{cause:n})}function w3(n,M=a){throw N3(n)}function f(n,M){return W(()=>n(M||{}))}function I3(n,M,A){let S=A.length,X=M.length,e=S,t=0,l=0,o=M[X-1].nextSibling,u=null;for(;t<X||l<e;){if(M[t]===A[l]){t++,l++;continue}for(;M[X-1]===A[e-1];)X--,e--;if(X===t){const r=e<S?l?A[l-1].nextSibling:A[e-l]:o;for(;l<e;)n.insertBefore(A[l++],r)}else if(e===l)for(;t<X;)(!u||!u.has(M[t]))&&M[t].remove(),t++;else if(M[t]===A[e-1]&&A[l]===M[X-1]){const r=M[--X].nextSibling;n.insertBefore(A[l++],M[t++].nextSibling),n.insertBefore(A[--e],r),M[X]=A[e]}else{if(!u){u=new Map;let s=l;for(;s<e;)u.set(A[s],s++)}const r=u.get(M[t]);if(r!=null)if(l<r&&r<e){let s=t,m=1,h;for(;++s<X&&s<e&&!((h=u.get(M[s]))==null||h!==r+m);)m++;if(m>r-l){const d=M[t];for(;l<r;)n.insertBefore(A[l++],d)}else n.replaceChild(A[l++],M[t++])}else t++;else M[t++].remove()}}}const S3="_$DX_DELEGATE";function L3(n,M,A,S={}){let X;return T3(e=>{X=e,M===document?n():c(M,n(),M.firstChild?null:void 0,A)},S.owner),()=>{X(),M.textContent=""}}function $(n,M,A){let S;const X=()=>{const t=document.createElement("template");return t.innerHTML=n,t.content.firstChild},e=()=>(S||(S=X())).cloneNode(!0);return e.cloneNode=e,e}function i3(n,M=window.document){const A=M[S3]||(M[S3]=new Set);for(let S=0,X=n.length;S<X;S++){const e=n[S];A.has(e)||(A.add(e),M.addEventListener(e,U3))}}function B3(n,M,A){A==null?n.removeAttribute(M):n.setAttribute(M,A)}function D3(n,M,A,S){Array.isArray(A)?(n[`$$${M}`]=A[0],n[`$$${M}Data`]=A[1]):n[`$$${M}`]=A}function F3(n,M,A={}){const S=Object.keys(M||{}),X=Object.keys(A);let e,t;for(e=0,t=X.length;e<t;e++){const l=X[e];!l||l==="undefined"||M[l]||(X3(n,l,!1),delete A[l])}for(e=0,t=S.length;e<t;e++){const l=S[e],o=!!M[l];!l||l==="undefined"||A[l]===o||!o||(X3(n,l,!0),A[l]=o)}return A}function c(n,M,A,S){if(A!==void 0&&!S&&(S=[]),typeof M!="function")return D(n,M,S,A);v(X=>D(n,M(),X,A),S)}function X3(n,M,A){const S=M.trim().split(/\s+/);for(let X=0,e=S.length;X<e;X++)n.classList.toggle(S[X],A)}function U3(n){let M=n.target;const A=`$$${n.type}`,S=n.target,X=n.currentTarget,e=o=>Object.defineProperty(n,"target",{configurable:!0,value:o}),t=()=>{const o=M[A];if(o&&!M.disabled){const u=M[`${A}Data`];if(u!==void 0?o.call(M,u,n):o.call(M,n),n.cancelBubble)return}return M.host&&typeof M.host!="string"&&!M.host._$host&&M.contains(n.target)&&e(M.host),!0},l=()=>{for(;t()&&(M=M._$host||M.parentNode||M.host););};if(Object.defineProperty(n,"currentTarget",{configurable:!0,get(){return M||document}}),n.composedPath){const o=n.composedPath();e(o[0]);for(let u=0;u<o.length-2&&(M=o[u],!!t());u++){if(M._$host){M=M._$host,l();break}if(M.parentNode===X)break}}else l();e(S)}function D(n,M,A,S,X){for(;typeof A=="function";)A=A();if(M===A)return A;const e=typeof M,t=S!==void 0;if(n=t&&A[0]&&A[0].parentNode||n,e==="string"||e==="number"){if(e==="number"&&(M=M.toString(),M===A))return A;if(t){let l=A[0];l&&l.nodeType===3?l.data!==M&&(l.data=M):l=document.createTextNode(M),A=E(n,A,S,l)}else A!==""&&typeof A=="string"?A=n.firstChild.data=M:A=n.textContent=M}else if(M==null||e==="boolean")A=E(n,A,S);else{if(e==="function")return v(()=>{let l=M();for(;typeof l=="function";)l=l();A=D(n,l,A,S)}),()=>A;if(Array.isArray(M)){const l=[],o=A&&Array.isArray(A);if(Z(l,M,A,X))return v(()=>A=D(n,l,A,S,!0)),()=>A;if(l.length===0){if(A=E(n,A,S),t)return A}else o?A.length===0?e3(n,l,S):I3(n,A,l):(A&&E(n),e3(n,l));A=l}else if(M.nodeType){if(Array.isArray(A)){if(t)return A=E(n,A,S,M);E(n,A,null,M)}else A==null||A===""||!n.firstChild?n.appendChild(M):n.replaceChild(M,n.firstChild);A=M}}return A}function Z(n,M,A,S){let X=!1;for(let e=0,t=M.length;e<t;e++){let l=M[e],o=A&&A[n.length],u;if(!(l==null||l===!0||l===!1))if((u=typeof l)=="object"&&l.nodeType)n.push(l);else if(Array.isArray(l))X=Z(n,l,o)||X;else if(u==="function")if(S){for(;typeof l=="function";)l=l();X=Z(n,Array.isArray(l)?l:[l],Array.isArray(o)?o:[o])||X}else n.push(l),X=!0;else{const r=String(l);o&&o.nodeType===3&&o.data===r?n.push(o):n.push(document.createTextNode(r))}}return X}function e3(n,M,A=null){for(let S=0,X=M.length;S<X;S++)n.insertBefore(M[S],A)}function E(n,M,A,S){if(A===void 0)return n.textContent="";const X=S||document.createTextNode("");if(M.length){let e=!1;for(let t=M.length-1;t>=0;t--){const l=M[t];if(X!==l){const o=l.parentNode===n;!e&&!t?o?n.replaceChild(X,l):n.insertBefore(X,A):o&&l.remove()}else e=!0}}else n.insertBefore(X,A);return[X]}const G3=[["1580061","23046913"],["11","31"]],R3=(n="")=>{const M=n.split(`
`).map(X=>X.split(/\s+/)),A=M.map(([X])=>+X).sort(),S=M.map(([,X])=>+X).sort();return A.reduce((X,e,t)=>X+Math.abs(e-S[t]),0)},H3=(n="")=>{const M=n.split(`
`).map(e=>e.split(/\s+/)),A=M.map(([e])=>+e),S=M.map(([,e])=>+e),X={...[0]};return S.forEach(e=>X[e]=(X[e]||0)+1),A.reduce((e,t)=>e+t*(X[t]||0),0)},V3=Object.freeze(Object.defineProperty({__proto__:null,answers:G3,part1:R3,part2:H3},Symbol.toStringTag,{value:"Module"})),Y3=[["341","404"],["2","4"]],J3=(n="")=>n.split(`
`).reduce((M,A)=>{const S=A.split(/ +/).map(l=>+l),X=(S.at(-1)||0)>S[0]?1:-1,e=[1,2,3].map(l=>l*X);return S.every((l,o,u)=>o===0?!0:e.includes(l-u[o-1]))?M+1:M},0),K3=(n="")=>{const M=(A,S)=>A.every((X,e,t)=>e===0?!0:S.includes(X-t[e-1]));return n.split(`
`).reduce((A,S)=>{const X=S.split(/ +/).map(o=>+o),e=(X.at(-1)||0)>X[0]?1:-1,t=[1,2,3].map(o=>o*e);return M(X,t)||X.find((o,u,r)=>{const s=[...r];return s.splice(u,1),M(s,t)})?A+1:A},0)},Z3=Object.freeze(Object.defineProperty({__proto__:null,answers:Y3,part1:J3,part2:K3},Symbol.toStringTag,{value:"Module"})),W3=[["187833789","94455185"],["161","161"],["161","48"]],a3=(n="")=>{let M=0;return n.matchAll(/mul\((\d{1,3},\d{1,3})\)/g)?.forEach(([,A])=>{const[S,X]=A.split(",").map(e=>+e);M+=S*X}),M},q3=(n="")=>{let M=0;return n="do()"+n,n.split("don't()").forEach(A=>{const[,...S]=A.split("do()");M+=a3(S.join(""))}),M},Q3=Object.freeze(Object.defineProperty({__proto__:null,answers:W3,part1:a3,part2:q3},Symbol.toStringTag,{value:"Module"})),M2=[["2575","2041"],["18","9"]],n2=(n="")=>{const M=n.split(`
`).map(e=>e.split("")),A=(e=0,t=0)=>M[e]&&M[e][t]||"-",S=[[1,0],[-1,0],[0,1],[0,-1],[1,1],[1,-1],[-1,1],[-1,-1]];let X=0;return M.forEach((e,t)=>{e.forEach((l,o)=>{l==="X"&&S.forEach(([u,r])=>{"XMAS".split("").every((m,h)=>A(t+h*u,o+h*r)===m)&&X++})})}),X},A2=(n="")=>{const M=n.split(`
`).map(e=>e.split("")),A=(e=0,t=0)=>M[e]&&M[e][t]||"-",S=[[1,1],[-1,-1],[1,-1],[-1,1]];let X=0;return M.forEach((e,t)=>{e.forEach((l,o)=>{if(l!=="A")return;const u=S.map(([r,s])=>A(t+r,o+s));u[0]!==u[1]&&u.sort().join("")==="MMSS"&&X++})}),X},S2=Object.freeze(Object.defineProperty({__proto__:null,answers:M2,part1:n2,part2:A2},Symbol.toStringTag,{value:"Module"})),X2=[["5964","4719"],["143","123"]],e2=(n="")=>q(n).total,q=(n="")=>{const[M,A]=n.split(`

`),S=new Map;M.split(`
`).forEach(t=>{const[l,o]=t.split("|");S.has(l)||S.set(l,[]),S.get(l).push(o)});let X=0;const e=A.split(`
`).map(t=>t.split(",").reverse()).filter(t=>{const l=new Set,o=t.every(u=>l.has(u)?!1:((S.get(u)||[]).forEach((r="")=>l.add(r)),!0));return o&&(X+=+t[t.length>>1]),!o});return{total:X,wrongSets:e,follows:S}},t2=(n="")=>{const{wrongSets:M,follows:A}=q(n);return M.reduce((S,X)=>(X.sort((e,t)=>A.has(e)&&A.get(e).includes(t)?-1:1),S+ +X[X.length>>1]),0)},l2=Object.freeze(Object.defineProperty({__proto__:null,answers:X2,part1:e2,part1_impl:q,part2:t2},Symbol.toStringTag,{value:"Module"})),o2=[["4789","1304"],["41","6"]],N=[[-1,0],[0,1],[1,0],[0,-1]],c3=(n="")=>{const M=n.split(`
`).map(u=>u.split("")),A=(u=0,r=0)=>M[u]&&M[u][r]||"-";let S=[0,0];M.find((u,r)=>u.find((s,m)=>s==="^"&&(S=[r,m])));const X=new Set,e=[];let t=0,[l,o]=S;for(;;){const[u,r]=N[t],s=l*M.length+o;X.has(s)||e.push([l,o]),X.add(s);const m=A(l+u,o+r);if(m==="-")break;m==="#"?t=(t+1)%4:[l,o]=[l+u,o+r]}return{visited:e,lines:M,start:S}},u2=(n="")=>c3(n).visited.length,r2=(n="")=>{const{visited:M,lines:A,start:S}=c3(n),X=[Array.from({length:A.length},()=>[]),Array.from({length:A.length},()=>[])],e=(r,s)=>{X[0][r].push(s),X[1][s].push(r)},t=(r,s)=>{X[0][r]=X[0][r].filter(m=>m!==s),X[1][s]=X[1][s].filter(m=>m!==r)},l=(r,s,m)=>{const[h,d]=N[m],y=h?1:0,[z,O]=y===0?[r,s]:[s,r],j=X[y][z],n3=Math.sign(h||d)>0?j.reduce((T,b)=>b>O&&b<T?b:T,1/0):j.reduce((T,b)=>b<O&&b>T?b:T,-1/0);return isFinite(n3)?Math.abs(n3-O)-1:-1};A.forEach((r,s)=>{r.forEach((m,h)=>{m==="#"&&e(s,h)})});const o=()=>{let[r,s]=S,m=0;const h=N.map(()=>new Set);for(;;){const[d,y]=N[m],z=h[m],O=r*A.length+s;if(z.has(O))return!0;z.add(O);const j=l(r,s,m);if(j===-1)return!1;[r,s]=[r+d*j,s+y*j],m=(m+1)%4}};let u=0;return o()&&u++,M.shift(),M.forEach(([r,s])=>{e(r,s),o()&&u++,t(r,s)}),u},s2=Object.freeze(Object.defineProperty({__proto__:null,answers:o2,part1:u2,part2:r2},Symbol.toStringTag,{value:"Module"})),m2=[["1298103531759","140575048428831"],["3749","11387"]],h2=(n="")=>{const M=(A=0,S=[0],X=0)=>X===0?A===S[0]:A<0||A!==Math.floor(A)?!1:M(A-S[X],S,X-1)||M(A/S[X],S,X-1);return n.split(`
`).reduce((A,S)=>{const[X,e]=S.split(":").map(o=>o.trim()),t=e.split(/ +/).map(o=>+o);return M(+X,t,t.length-1)?A+ +X:A},0)},w2=(n="")=>{const M=(A=0,S=[0],X=0)=>{if(X===0)return A===S[0];if(A<0||A!==Math.floor(A))return!1;const[e,t]=[""+A,""+S[X]];return e.endsWith(t)&&M(+e.slice(0,-t.length),S,X-1)?!0:M(A-S[X],S,X-1)||M(A/S[X],S,X-1)};return n.split(`
`).reduce((A,S)=>{const[X,e]=S.split(":").map(o=>o.trim()),t=e.split(/ +/).map(o=>+o);return M(+X,t,t.length-1)?A+ +X:A},0)},i2=Object.freeze(Object.defineProperty({__proto__:null,answers:m2,part1:h2,part2:w2},Symbol.toStringTag,{value:"Module"})),a2=[["249","905"],["14","34"]],f3=n=>{const M=new Map;let[A,S]=[0,0];return n.split(`
`).forEach((X,e)=>{X.trim().split("").forEach((t,l)=>{A=Math.max(A,e+1),S=Math.max(S,l+1),t!=="."&&(M.has(t)||M.set(t,[]),M.get(t).push([e,l]))})}),{nodes:M,si:A,sj:S}},c2=(n="")=>{const{nodes:M,si:A,sj:S}=f3(n),X=new Set,e=(t=0,l=0,o=0,u=0)=>{const[r,s]=[o-t,u-l],[m,h]=[t-r,l-s];m<0||m>=A||h<0||h>=S||X.add(`${m},${h}`)};return M.entries().forEach(([,t])=>{t.forEach(([l,o],u=0)=>{t.forEach(([r,s],m=0)=>{u!==m&&(e(l,o,r,s),e(r,s,l,o))})})}),X.size},f2=(n="")=>{const{nodes:M,si:A,sj:S}=f3(n),X=new Set,e=(t=0,l=0,o=0,u=0,r=1)=>{const[s,m]=[o-t,u-l];for(let h=1;;h++){const[d,y]=[t-s*r*h,l-m*r*h];if(d<0||d>=A||y<0||y>=S)return;X.add(`${d},${y}`)}};return M.entries().forEach(([,t])=>{t.forEach(([l,o],u=0)=>{t.forEach(([r,s],m=0)=>{u!==m&&(e(l,o,r,s,1),e(r,s,l,o,1),e(l,o,r,s,-1),e(r,s,l,o,-1))})})}),X.size},d2=Object.freeze(Object.defineProperty({__proto__:null,answers:a2,part1:c2,part2:f2},Symbol.toStringTag,{value:"Module"})),_2=[["6370402949053","6398096697992"],["1928","2858"]],p2=(n="")=>{const M=[],A=[];n.trim().split("").forEach((o,u)=>(u%2?A:M).push(+o));let S=0,X=0,e=M.length-1,t=M.length-1,l=0;for(let o=0;o<M.length;o++){let u=M[o];for(;u-- >0;)S+=X*l++;X++;let r=A[o]||0;for(;r-- >0;){for(;M[e]===0;)e--,t--;if(e<=o)break;S+=t*l,l++,M[e]--}}return S},y2=(n="")=>{const M=[],A=[];n.trim().split("").forEach((t,l)=>(l%2?A:M).push(+t));const S=M.map((t,l)=>l);for(let t=M.length-1;t>0;t--){const l=M[t];if(l===0)continue;const o=S[t];let u=0;for(;u<t&&!(A[u]>=l);u++);u>=t||(A[u]-=l,M[t]=0,S[t]=0,A[t]+=l,M.splice(u+1,0,l),S.splice(u+1,0,o),A.splice(u,0,0),t++)}let X=0,e=0;return M.forEach((t,l)=>{for(;t-- >0;)X+=S[l]*e,e++;e+=A[l]}),X},g2=Object.freeze(Object.defineProperty({__proto__:null,answers:_2,part1:p2,part2:y2},Symbol.toStringTag,{value:"Module"})),b2=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"})),v2=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"})),$2=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"})),O2=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"})),j2=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"})),E2=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"})),T2=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"})),x2=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"})),P2=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"})),C2=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"})),k2=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"})),z2=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"})),N2=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"})),I2=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"})),L2=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"})),B2=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"})),D2=`3   4
4   3
2   5
1   3
3   9
3   3`,F2=`77221   93653
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
19976   46609`,U2=`7 6 4 2 1
1 2 7 8 9
9 7 6 2 1
1 3 2 4 5
8 6 4 4 1
1 3 6 7 9`,G2=`66 67 68 71 72 69
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
40 42 44 46 49 51`,R2="xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))",H2="xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))",V2=`?% mul(948,148)why() %how(670,744)mul(590,32);where())#}from()>how()mul(611,372)}{~^?>from()^mul(835,665)who()]#^don't()select()select())mul(724,851)[>&mul(188,482)$mul(781,111)[who()<why(),!]mul(678,13)why()$#%who()mul(620,771)<!^}@^+what()mul(281,719)(]'what()where()>&from():!mul(147,678)how(){mul(938,510)where()!$?*['mul(103,563)where())mul(4,125)$*>>^mul(126,929)]& %~mul(161,418)who()>>do()]-''?mul(416,366)~?/where()]who()mul(459,47))>what(){@[(mul(219,400)+do()when()from():who()when()]&{{%mul(804,830)-select()what()*what()%}mul(861,992)who()!',mul(159,874)#<)''<mul(460,777)?mul(909,244)how()+what()]<do()?}mul(749,87)from()(who();why()mul(430,124)/$>how()@$%mul(214,139)&how()>mul(112,835)select()*from()@why()?[{mul(209,568)/; ~)mul(630,749):mul(841,589)/;who()>[mul(778,567)+when() how()<#mul(544,851)what(){+mul(327,103)from()what()/[~-mul(995,415)/when()-mul(880,153)}:}mul(368,920)'how()mul(864,419)from()what()@mul(208,291)who()<?}?what()',[{mul(575,454)*&(<{how()[mul(557,489){{why(){how()@who()~mul(423,703)mul(910,916)+what()^/<-*from()'mul(746,826),-*)/+>}^from()mul(154,571)++:>,mul(601,458)why()<;how()~from(172,16)mul(333,315)?[mul(513,260) {*mul(117,759)%]mul(77,644){($%>]&~mul(238,306)~select()from();-'who()'mul(460,352); ?select()>[[(from() mul(337,294)why()how()</$<where()don't()(?]{why()%}from()mul(367,653)~mul(910,873)^why()>mul(499,785)>what()[*:#where()*what()mul(765,210)*$[]mul(461,957)##)+}when()-@:mul(198,90)what()what()how()') )mul(258,966)]+(when()mul(535,417)where()!don't()@mul(939,319)?mul(751,538))! mul(758,675)~how()[how(),@>[where()when(29,965)mul(358,39){^what();/(where()how()mul(271,786)why():mul(792,761)do()$]%mul(740,232)>who(949,378)what()[(where()who(){who()#mul(595,343)%+mul(194,296)'mul(161,747): '{where(12,567),@mul(234,39)!+do()/who()[where()&'what()when()how())mul(138,925)),#;where()>{mul(738,864){mul(605,662)*when()%when()+( /~&mul(633,935)when()];mul(263/}*<!where(),- ~when()mul(512,798)]}where())when()who()mul(933,447)where()}mul(33,935*mul(15,975)mul(574,550)+#^;'$from(280,157)$^what()mul(919,849)@mul(18,160))$&^]how()what() when()where()mul(88,657):/from())+:/when()@]mul(71,74)from()'*:@{>mul(127,821)^how()$$select()select()@^{:mul(867,979)&%/>{%^how()what(499,657)+do()%what()(~;-:*mul(438,941)<]?]mul(208,834when()&^;]from()when(613,710)^}+$mul(809,573)mul^)*:from(379,983)mul(47,786)}when()-what()how(450,632)> where()how()mul(810,597 ;;{%(select()select()&,mul(356,249)from()/!{#&^mul(23,248)(!who()]-+,mul(873,987)]{what()<  )-{^mul(591,317)/mul(382,188)mul(476,338)*why()$]mul(865,625)who()})?select():*@[)don't()/ ,mul(737,418)select(318,357);+ what()<mul(41,445)mul(236,630)$}from()]$^$,(do()-select()mul(369,197)from()]#};^mul(561,752)+&#+}?}:mul(18,235)<'& ,(*mul(645,811)why()select()who()[>where()don't()%#>!>/@what()[mul(490,823)&^( ,'@ [do()@mul(855,491)*^why()[,mul(348,679)how()$who() '&how(16,459)/!;mul(43,422)#^from()![}select()mul(976,749)-}select()-where()select()mul(223,589)%[why()mul(868,881)mul(178,790)$,{who()from()#,mul(318,399):where()?[mul(182,864)where() mul(156,690) -]mul(857,353)#'%,},>?+@mul(914,528)where()$mul(785,748)<$who()[mul(453,859)%'@ mul(84,729)/{do()(?$<}mul(820,286)?:*?}#when()(%mul(245,958when()?from(),+mul(128,335)mul(463,102);:]@-~-%mul(914,398)
+mul(720,985)how(340,568)^!what()[),[mul(734,270)~')?who()]]mul(964,739)from()?who()$when() /mul(566,142)}*,?how()~mul(733,766)when()mul(319,914)when()mul(808,141)*@:&who();mul(736,736)where(){&!$when()]^mul(612,574)how()mul~]what()!!'[:mul(805,568),<^+~ #)&who()mul(810,729),[~/^<&mul(706,233)!-'{why(),(?&mul(28,746)%mul(127,170)-?} #don't()from(),[@,mul(282,734)mul(332,651)[:~mul(771,888)#who()^select(110,751)>who(){mul(655,334)why()+~&}mul(129,762)mul(597,498))*~-}who()who()~'$mul(235,859)where()^-,,@mul(661,707)[ ~,<-mul(502,445)?why(){why()from()-how()*>&mul(237,280)how()mul(669,512)#$< mul(426,417)[what()why()~select()*%,'where()mul(213,617)##>mul(148-how()&]mul(437,581)who()'<from()>%[:how()mul(985,24);mul(446,704)who(),mul(549#}%>[mul(58,502)%mul(55,502)~<where()''who()}<mul(678,579)mul(457,825)+how()from()'(*#+$$mul(266,507)mul(925,485)^why()mul(605,592)[}<>^<mul(173,922)@:<where()/-]'mul(110,899%select()why()why()>[%%;mul(63,642)>how())<*{mul(155,625)]mul(238,47)where()&@mul(630,112)who() mul(570,946)mul(299,320){({mul(307,251)%[]$%mul(621,739)^!}{^-+what())mul(350,650)!>who()what()]^,*mul(154,394)&?^mul(410,870)[-select()why()<who():+%don't()where()$]/when() how()when()mul(708from()]&?mul(589,972)*mul(167,814)[mul(807?%don't()])?'(who()mul(614,926)mul(404,930)'?+;mul(252how()^who(529,21)'who()%mul(675,37)mul(362*what(640,926)select()'?what(){'>mul(744,141)why():))from()^select()what()mul(991,854){-]+mul(64,859))~>>%>%select()#-mul(282,835)'select()'%<$!from(299,765)don't()-'mul(352,659),mul(366,409),when()mul(672,590)#@#}/(##  mul(550,937)$#/^~mul(458,447)mul#(,/<mul(538,275)}where()'?'!-)mul<^>(how(),mul(465,230)^select()$<from(595,221):mul(704,141)what()]when()^select()^)^%'mul(260,350)>how()what()#@};(from()~mul(716,318)from()+]<!?mul(625,41)#[,~ /mul(19}mul(760,4)@how()mul(508,977)@select())][[mul(261,452 $mul(11,905)how(731,838)[mul(823,988)?!?@&&'mul(929,818)(>mul(701,784)!;>do()'&)when()select()mul(945,704)mul(250,874)who()]@don't()why(51,895)-,how()*+{why()%/mul(964,293)&<^where()<select();&mul(900,32)]where()$from()&#from()who()({mul(755,539)mul(26,466)how()$when()%&$~)mul(926,673)$what()!select(),do()~select()#^mul(272,306)~%'mul(22,647)$mul(904,943)^>-from()mul(635,212)when()how()[mul(314,335)%(-  + ~mul(635,915)~[[do(){where(307,78)(who()(why()where();mul(450from()mul(903,662)>$mul(924,200),why()select()$mul(418,533)where()[where()mul(266,643):~^/#(:[from()mul(81,715),who()@:~+who()'%mul(79?who()select();# mul(436,105)#*why() #~[,where()'mulwho()[(~)[mul(119,92)]where(),select()why()?mul(639,691):+<why()why()mul(815,366)*where()-what()/?>mul(188,19)who()(select()what()mul(916,808));~mul(630,228)-)where()[~mul(586/[how()+~!>}>[how()mul(106,235)do()>why(416,339):mul(788,357)[when(442,691)what()how()where()$from()who()mul(471,832)]/*mul(837,328)<)>!mul(389,633)'from(),mul(70when()!from()select()$](when()*%mul(903,43)where(62,223)^from();@()mul(852,198)-when()?mulhow(168,455)(select()how();from()/mul(918,330)what()'how(215,263)$:{~how()*mul(136,552)from(363,441)-when()how()what()-+mul(229,899)!where()when()from(){mul(47,875)~mul(500,586)/&&where(),where()mul(571,252))%}^~when()mul(979,493)do()@!+~>^mul(568,461)]where()$who(){from();mul(743,403)@?[mul(117,954))/mul(382,589)<:what() mul(578,730)#/<,when()#)select()}mul(889,462){how(562,136)select()when()^>mul(150,815)/$from()?what()mul(842,604)**?'-^>;~'mul(622,493)
mul(901,810)[<,^$do()<#why()<why()},,select()mul(257,221)mul(393,412)-from()&$]mul(198,284)/>;/why()mul(296,969)@mul(224,163)#<$what():,what()mul(995,485)$~)who()mul(382,831)'&~mul(146,234)mul(228,532)mul(944,430)!!who()<;'$(%do()%'{mul(588,828)~$why():where()mul(753(select()/':~$[mul(785,897)/<(#$)@mul(821,858)$what()+@/*mul(545,209)where();what()mul-why()>mul(808,588),where()];;}mul(431,815)<<;how()?@why()(^don't()select()$)!mul(832,43)what()[where()mul(935,377)from()++where()$-]@mul(793,489)*&mul(910,985)mul(340,122);from(87,683)[[]]'mul(659>from()['from()~,;@:^mul(420,510)/mul{from()$ >! -mul(508,275)!()@+{!mul(134,503)how()?mul(717,994)@}what()}[@<do()~'[??from() #&}mul(443,258)){do()^mul(894,293),@from()mul(470,736)/select()where()from()how()mul(769,763)/-'mul(436,853)from()mul(955,870);#why()how()how()mul(807,205)#do()select()<@$when()*select()>mul(899,477)who(88,557){[?-mul[how()>>@mul(113,239)&;?what(825,719)from()}@mul(717,829)when()who()%@what()when()#':mul(644,495)]^$ >[~don't()!#mul(175,323)><$>do()[[$what()/>(#~mul(976,792))what()#{how()-$?mul(534,805))what()@mul(600from()'from()mul(859,367)from()mul(852,796)?{[]/'~mul(624,853($:;^mul(522,963)+mul(143,246)[,what()#*when()',why()mul(435,720)mul(812,909)'<? /;when()}*how()do()mul(49,504)how()when()/!mul(799,134)$mul(213,950)from(182,488)];]do()mul(325,689)(@mul(485,128)who()mul(376~when()(%-what()(mul(776,635)#: from(788,757)}mul(997,619)-from(919,426)where()where()how() mul(370,735)*what(),*%$mul(408,722)}#mul(990,90)(<where()*don't()*@:(;what()%:*#mul(804,562)mul(162,269)]mul mul(267,461)%#{(};^~[mul(124,671) ~-<$<from()<from()mul(401,89)>&!!who()how()/,who()>mul(179,82))]don't()@(}<who()where()%<from()]mul(950,333) }&mul(420,707)mul(293,223)what()(/mul(131,775)>@<mul(498,349)mul(416,808)*how(676,683)select()&@mul(100,528)'&from()/[<,%>!mul(224,804'}-mul(180,723)#+@mul(144,160 +#<]where()+!from()select()(mul(614,183)mul(123,655)*+##mul(744,352):#$when()~&,what(625,950)select()'mul(468,293)*]+#mul/$why()where(623,670)%@;mul(722,469)&(%;do()) from()mul(557,124)/}:mul(928,793>]how(){?who()'<mul(74,894)%mul(312,960)'(,]%^mul(560,307<where();when()}how()%>[mul(624,959)&mul(765,13):who()<),who()& mul(639,802)&;(@:why(988,378):mul(677,987)~@-! ;!^do()mul(29,935)mul(134,862)when()+{what()when()who()}~why()mul(541,335)who()@[<mul(342what()select()who();mul(833,47)when()%@}\${why()mul(891,370)(@*@[^mul(652,523)}why()&-(?'*mul(906,962) )mul(691,622)~(!<--when(506,845)</$mul(603,406)'how(83,339)mul(44,583)<:-^/why()mul(812,857$what()<-:$]what()?mul(226,418)!>'+why();when()&mul(127,948)$mul(485,474))?$mul(278,206)select()mul(641,623){} @{*where()'?mul}>mul(792,193) [#;*%->~what()mul(876,897)/@+'mul(341,837)^)why()?;@+^^~mul(718,922)[why()when()/,{}select()who())mul(941,117)/}/who()why(293,857))mul(414,482)what()! how()who()mul(910,766)!]what(),how()*mul(6,611)~;{who()who()[--mul(720,952)why(546,471)!)from()/?mul(971,461)}&/$@'mul(452,187)#who():(mul(44,298)mul(530,770)']:who()&$from()mul(544,752)mul(375,827))&@select()^;who()where()how()mulselect()^%^,/&mul(204,187)when()&,}$(who();mul(60,317)+who()$from()(how(942,734);@mul(239,338)!?:%)}@select()(mul(284,525)select()what()where()@^#~[mul(718,185)&!*{';when()@when()mul(272,161)how()%how()?mul(66,988)@)@,::>)mul(930,190)why(),~when()%<@&where(),mul(143,136)why()-,/*-what()+mul(73,408)~ who()%*select()'+where()#!/usr/bin/perlmul(379,680)
;@mul(257,25)[!mul(646,635)>?who()who()from()mul(25,275(select()+why()%mul(102,254)%}/where()$mul(608,18)when()*#mul(343,951) mul(337,866)*^?#@why(805,831)-mulwhen()from()mul(854,5)when()@$why()mul(896,11)^mul(451,271)'how()?who()?)<%[}don't()who()/[{]-?from()when()?mul(198,238)])mul(750,760)+/-!what()~?#mul(880,271)%?select();where()(<^select()mul(373@from()where(),mul(700,15),mul(406,120)mul(551,206)mul(636,315);+{mul(261,201)mul,:-/&mul(267,217)/,'mul(132,410)@@;;who()when()]do()why()mul(4,121)#from()/mul(242what()how(277,558)<how()from()+:who()from()what()when()mul(27,714)who()why()what()mul(676,758)+^@*'}mul(274,109)-}]),select()*when()]why()mul(60,516)when()when(708,630)%%where():mul(34,59)from()#]how()+who()%who()*don't()select()&~(;where()/mul(548,869)&mul(439,68)]@}%)~&mul(46,712)when()+[&]where(),+mul(940,261)^who()where()mul(655,165) >'how()how(){mul(12,537)&[>}mul(322,676)[#,do()@,mul(248,663),when()-do()^what()]when()who()what()how())mul(864,73)how()?]*mul(653,55)when()from()from()how()@ }mul(94,590)]~what()mul(164,505)]from()when()]mul(218,565)(from() why()[*when()}[mul(306,447)*]][> #mul(783,715?)+^~mul(308,994):<*~)>from()why()*mul(508,139)>from()@;+~#mul(652,903)#[/?mul(407,208]how(){when(),**@*:/mul(849,965)mul(69,198<'#%[?mul(236,808)what()from()%from()why()^/,don't()select()&where()@mul(888,101) mul(332,775)who()):select()),:-mul(119,209)%how()mulfrom()select()don't(){mul(838,613)why() '({*<!mul(372,376)mul(407,117$who()[ mul(171,741)where();mul(742,142)mul(34#^+:who()mul(157,514)>~>*mul(466,106)mul(883,754->(%%who()[!mul(587,792)'((!?select()&}<mul(791,734){how()&;+<(mul(655,63):why(){!{)mul(320,950)->-'#)why()#[mul(234,162),what(497,671)why()#mul(985,797)>}~;from()select()mul(117,492)&~+from()]%>*$&mul(451,669))}'/@how()?where()why(694,295)'mul(676,756){~;select()what()}what()^}mul(963,857);%/how()?mul(944,194);select()<&^how(){->mul(195,702))?select()why()&~%}why()#mul(90,304)@%why(673,634)*/where()- <:do(){}!mul;who()]where()]-@?<mul(919,817),>when()how()how()>mul(875,604)select()%do()%mul(790,136)*$,mul(853,95)[how()>!%?mul(246,573)&!what()/#from()!mul(382,307),!#[-mul(32,733)$+[*mul(192,47)(@who()mul(304,303)@mul(167,528):select())!:how(){what()(}mul(933,177))#>$#,$:mul(81,603)<mul(40,227)mul(717,937)mul(853,848)mul(66,164)where())^<>what()?how()when()mul(206,607)<where()[$)}when()how()select()*mul(265,447)*/what())%+'[ from()mul(358,747)what()+%how()#from():,what()@mul(791,401)~where()[mul(990,778)?~[!:>!'^mul(666,852)mul(651,206)!+]}from()don't():*]#what()mul(359*%who()^)'mul(190,764)who()when()}select()~(~mul(547,102)mul(406,618)%when()>)<mul(822,907)?/[/from()mul(945,506)>![#mul(890,746)#who()$'~%]',+mul(341,395)who()--mul(285,533)}how()@<}!mul(715}>+~ select()where()$ (mul(894,62)?]}who()&when(652,875)%:}from(24,82)mul(713,250))-^{*%mul(548,903)&]]<]why(){from()when() mul(796,100)-(how()$%~mul(589,969)  :who()  @mul(271,734)<}mul(761,8)}@['- ['$mul(178,28)who()who(282,161)@$from()mul(413,253)#when()?(mul(585,394))select():$?#?>who()?mul(245,344)who()^who()where()why()~@why()don't()why()how()who(450,27)who()(!mul(951,644):select()-)%?*don't(), mul(189,841)]* why()*>'mul(758,690)what()<select()~>@>mul(728,932)how()?select()what()}mul(716,985){where()who()+who():mul(840,772)%how()>:;where()mul(139,830)$select()),mul(730,4)when(305,277);[$!,)mul(278,740)who(856,922)who()#<where()*>mul(212,541)((]mul(689,475)mul(814,611)'}&~{~~mul(716,817)who()mul(21,315))don't())(why()')$<mul(541,349)
$)mul(257,544)+where()how()-[how()^+ mul(986,808){[<why()%!;mul(940,137)who()-+(from()**^mul{>)who()how()?%why()}!<mul(908,379)select(811,438)mul(15,196)from(623,826)-from()+!mul(38,667){>{<{mul(41,189)-<how()*%when()}what(539,203)]mul(813,528)who())why()( ]how()why()how(){mul(299,367)]{[(@^mul(131,889)?:&who())when()'why()$&mul(728,552)^}when()@~mul(842,113)from()),?{!mul(811,809)*how(15,189)#>&+from(544,351)~&mul(516,38)]?;-@?don't()@}*mul(792,426when();#~ >%why()(/$mul(755,392)*(#]where()@select(),^select()mul(630]>*who(267,517)why()-;(mul(176,492)select()from()}~:who()mul(761,226)&,((mul(750,451)@/%select()from()mul(345,75)what()/who(); ~mul(431<)&mul(693,289)?~/mul(693,335)'mul(475,545){(*+~ mul(668,535)how()don't()?,<@mul(980,251)*why()$when()*-)mul(886,969):?/':]}-who()(mul(686,683)#}+($why()mul*^*$){&-(mul(94,775)- @when()?%]{when()mul(376,100)''/,&]^<mul(853,752)when()%who(),[^@where()!do()who()when()how()when(474,246)mul(318,180)do()%~(mul(216,96) ;}]why(907,964)$+when(680,212)?mul(442,979)why()what();##select()%mul(34,342)mul(641,907)@]who()@^:^mul(648,605)how()<}]when()!mul(567,219)?where()$what()~+from(),%how()mul(549,85)$-&(mul(94,269)~how(811,581)who(596,80)-how()~mul(510,591)mul(586,482)who()?#-<[[select()*}mul(249]{%<,where()*~^mul(628,294)]+what())why()mul(312,879&,?+don't()mul(100,514)when()select()mul(621,918)@select(813,295)/{^'%+mul(239,859) ']<*)mul(868,763)where()[/when()@)#{^mul(209,999)how()do()*#}},},&>mul(70/:from(184,559)>mul(679,138))<mul(454,112)[@)-?*where()mul(573,473)[(-/mul(867,232)~]/^/!'&where()mul(391,655)[%'mul(73,32)/{->)(~mul(929,872)'%#)mul(563,750)>(mul(324,725)what()why()[@$mul(186,770)?mul(719,251)[mul(270,934)+>when()'$when()mul(647,486)how()from(947,190),!(?mul(113,517) %[select()what()^)!mul(299,591)]:@' *where(145,530)/mulwhen()mul(811,260)mul(80,605)  where(296,197))])>from()mul(324,361)select(){[/';/},mul(648,947&how(){who()/'-%*]mul(949,359){mul(288,162)&];&:^mul(188,899)select()where()]%mul(248,30)#[&+'why()'') don't()][}& mul(808,221)what()@>><;>*mul{;>what()what()+mul(646,752)select()<from()why(211,37)~~~:mul(196,842)}where(690,849)where()[$select(571,536)how()from()<mul(6,129)what()what()?]]how()mul(116,23)who(205,335)>)'where()!mul(748,585)>?<##mul(381,399)mul(597,746)) *mul(881,573)/:({why()'mul(527,57)@/what()?mul(395,551)%who()when()%'mul(713,766)[<mul(749,438)'(}^when();{mul(43,565)what()% #mul(653,209)what():!-mul(64,870)#from()select()from()mul(206,327)?(mul(678,256)^{mul(311,65)who()when()<(when()mul(552,622)*how()%?~;:;;)mul(767,192)--&$mul(512,806)['?')who()mul/({what()&/#'!mul(811,828)]select()~@!/(}$)mul(683,153)&}&~how()from()mul(815,380),?$*+mul(133,342)mul(867,908)!;&why()?(+!mul(915,100))when(895,91)&select()!({where(758,740)mul(759,261)-from()&])mul(365,436)from()&' &^mul(541,400)~from()-what()!mul(679,638)mul(107^#,%~#>[)*select()mul(313,218))when()when()mul(360,494<-select():::- [/mul(517,923)*from(),from()how()+]mul(870,559)}{*?do()>~mul(704,518)where()!)select()?from()where()&'do();mul(270,449)~[*mul(774,600)how():>why()[!when()mul(338,711){]mul(962,193)*where()#![-+mul(511,924):[who()why()}mul(252,534when())when()when()()'!why(230,750)-mul(543,358)~~ -mul(394,506){mul(176,192)who()from()%@mul(181,776)%[ don't()when()where(229,174)+}@who()where()]>mul(553,452)@{/mul(790,202)&&-]mul(783,999)'mul(123,410)<,#what()}how()when()from()$~mul(674,974)why()#>do()'[$]}when()mul(907,824)from()select(){what()mul(584,273)#<>>do()mul(767,778)how()how()from()[#<$from()how()>mul(133,565):mul(888,792)
who()where()don't()]mul(891,277)~mul(160,638)('don't()/@/%{mul(462,975)!^:+mul(317,407){who()/from()/mul(424,628) when()select()mul(415,352)!?[where(){?how()/mul(661^, -mul(141,973)(/where()!#who()(what()#$mul(916,889)when()$ )mul(945,846)why()+#where()@how()mul(147,694)%select()mul(414,149)< when(){)what()&[how()mul(903,731)~#mul(389,694)mul(72,447)mul(490,881)?++from()>+ ^(mul(703,722)mul(622,578)from() }@^)+mul(642,732)>from()where()@>\${who()mul(526,211$why()[why()mul(349,908)who(635,389)from()what()*$*>@mul(180,150)//: ^mul(622,131);[-^~-mul(32,430)mul(306,173)~where()how() (mul(292,552)<mul(422,363)^<<!#when(304,583)who()mul(348,963)': #select(875,567)#>'where()!do() why()~] who()@^mul(20,119)?[$+/$^mul(242,536)who()'-&'from()mul(351,640){,]~mul(152,587)@select(140,751)<+mul(387,212)[where()%when())how()& >mul(916,539)~]?[when()>!when()??mul(322,151)!]!]~!;mul(27,537); ##;^}}mul(538,277)why()mul(205,526)mul(412,826)^@?where()'mul(957from(193,394)from(863,680)!@how()mul(771,563)( who()mul(377,655) ]select();who()mul(360,272)-select()$what(){mul(291,618)})from()^when(),how()where()don't()why()+&mul(462,803)^$,mul(788,584)@ %?:![:mul(439,528)mul(129,761)]!~mul(321,102)mul(41,728){&what()how()mul(93,933))[ where()^*@+mul(553,965select() '&{-mul(712,817)/<why()[:>/&mul(482,328)when()'mul(957,978)-}{[>{@what()who()mul(48,186)?]how()$what()&,)mul(33,872)#mul(125,207):;mul(143,386)how(),select()don't()}#when()%]&^@?^mul(107,59)&%?don't()mul(183,332):{}/[(#%-+mul(766,627)from()who() what()-+$^mul(41,791)who()] ;-#select()~mul(939,288)[:(</{$how()%select()mul(624,973) ]%mul(780,706)why(677,630);don't()+mul(3,844)$)$$where(),!why()[:mul(506,60)( <>@what()who()?mul(210,210)?select()why()select()where()-how()^mul(755,497)+?^(mul(860,478)^}+$from()(mul(565,649)}mul(184,450) ;/+%[why()mul(752,488)$how()mul(349,56)#'%,+mul(571,637)(mul(186,674)?how() </~@:%mul(295,276)'~where()-&%!mul(72,565);mul(140,645)%#-#*mul(258,568)!/select()why():&}from()from()don't()mul(458,777)#>,'^#!mul(577,819)mul(767,490)how()@when(359,565)mul(97,67)when()?where()>,'(-mul(267,998)%where()why()where():mul(593,317)<mul(514,327)how()~$[{mul(942,232)how()(who() 'from())mul(752,235)?/!'/*#mul(291,995){who()%!,%mul(873,542)%mul(543,144)from())'select()mul(317,658)+mul(819,545)<&what()who()$#who()how()$*mul(849,792)<;-mul(401,327)select()^}?mul(184,612))(where()what()[where()where()@}'mul(532,791)how()how()from()$*~:mul(963,569)when()%- :}why()^~$mul(520,245))^):{do()!mul(900,510)$ %who(615,822)mul(374,872)''/ mul(808,426)select()mul(268,752)&why(),</%!:!/don't()who(){when()*(where()mul(403,172)^mul(185,447)}mul(233,330)why()/&&%who()#/^mul(705,506)?%from();mul(494,15)['}]-}mul(45,474)who()@who()@why()don't()mul(174,355)?what(),@*$+#&mul(9,768);:^mul(381,691)when()&$/]?what(564,603)^how()mul(468,953)[@when()}mul(702,659) where()?where(){**mul(535,116)~where()$('}^~from()mul(926,18)&who()$when()where()>from(),mul(541,30)/why()\${[from()who()  mul(732,465)[<!{mul(794,385)mul(676,776)who()]/mul(45,904)<~+who()@-!)&where()mul(49,63))mul(710,576)+mul(279,872)&<{what()-how(),&how()~`,Y2=`MMMSXXMASM
MSAMXMSMSA
AMXSXMAAMM
MSAMASMSMX
XMASAMXAMM
XXAMMXXAMA
SMSMSASXSS
SAXAMASAAA
MAMMMXMMMM
MXMXAXMASX`,J2=`XSXMAAXXSSMMMXMXSXMSXMXSAMXSXMASMMSSMMSASXSAAXAAMXMMAMAMXMXSMXSAMXAXSAMXSSSXMASAMXAAMXSXMASAMXXMAXXSAXAMXMMSAASMXMXMASMMAMXXXSAMMSMMSXMASXAA
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
AXXSSMSXMMMMMSMMSAMSSMXMSMASXSMXMASXMSSMXXMASXSXXXSAMXMAMXMMMMMXSSMXAXMASXMMMSAMXSXASMMMMMSAMXXMAXXXXSASMSXSAMXXMSAMSSSMASXMSMSMSSSMSSSXASMM`,K2=`47|53
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
97,13,75,29,47`,Z2=`39|57
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
65,33,93,44,68,32,66,39,97,74,78,17,57,29,36,84,54,48,45,75,11`,W2=`....#.....
.........#
..........
..#.......
.......#..
..........
.#..^.....
........#.
#.........
......#...`,q2=`..........##.....................................#............#........................#.....#........#...........#...............
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
#....................#...................#.........#....................................................................#.........`,Q2=`190: 10 19
3267: 81 40 27
83: 17 5
156: 15 6
7290: 6 8 6 15
161011: 16 10 13
192: 17 8 14
21037: 9 7 18 13
292: 11 6 16 20`,M1=`29833: 1 50 15 39
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
89633: 4 40 9 500 3 2`,n1=`............
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
............`,A1=`..................................................
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
....................7.......1.....................`,S1="2333133121414131402",X1="1234649462611144453037831447782650154199904444418754393298142370965884849434468499632063186430373758261212246131269638862289982851199328376799168279795582765623726611801673866318448765341351918267349387295549369963783564627765549860288311622270652081331623303731394493363460181979845515387736964680867096758640946958543414346463705165538262546526685849633195972999203924932643729445403458944247195584523184579232961688214927991948214243724569175730583448284484356119292376162160636186866757817916638763541026228667687927489441312075616548246159384499118447986765804592228974577999418391558734571116287259842867478993963973808062272431173355709666156660615438628445554337897396311549911271914241808044129428431013727079642843477779848864247460711054698795421574452859693757769492604050285036418375879396146592482886487267502614288379508991976559251137771025201035238469498254706163746249664583352686888394389962528661423479377440882368727364852965181763743977304890783444241225367841815365615725373765909460767574983268599041248598298646246882925390333193758336614690606376229859977310952436193516243080142820736246797310504828128333142361961778395099418618769953521649497664886644853689964663439758873464151691988132858144867284958978962955808961183763417212216914927661207061698591644829513170478583448638771115917064791335345120696018156487311920831393667218862462828326378011177233463334414662167970933057637415104521428620171316583459805679855062302436487679508343616574352086477239525111898869755286883051481119247467698574572384843757198728737986321228982587952472519175188921187624567951396763394457786070692212852723244718893056488771519282915396222383964626402733754319192066624738216044945259379798266586195364878622624637701638932230139050603997272731932497316870102557444918199992601683572281921124755356293933564519462473215475729757934498602638582772881959496297271881909070486577451021976055772858475453196515216251924813398442755457684812611981656263259174656792437636372376213499942632258249978296218071178526497765836854834048629598968832652544893314561390614249526577284538916319273787723790619949495473517758716258234618353889749029227213746556982318987250869548462666124998253324231131502429378227848470323268162811262919415565497828579972282462311275737630184921206640284613845450135558338253976668476684759514421262733714843476976079144082858834376275451589896419311023486017685922427499385958861011112529695496899583601313766434263574866514284834451578432730477057327451819973418921194417879030654879945977556395855647794984824077896084248144248377475978169279597945104535933033538345154065962932153364492141267067547293921419856646889639117928768380492089575936888766423618211820459759164944608498513354769993392527363490525813214742786249129029618420443873127481937287728561146178342324935038274511517041666114561752702689702258497859619910792945773477433871324444431521732849908619134635748068931595575724763542359229429510973368217447511092804395326177727365989459398173125426738416694452553389206023877841571785555892491949632144373168895386557753619517684745967678725180291655383735568247954317411776264289229657393810344351517189194088589393165750472861165386595047291071456764214881794485175713274627283234523582343884305732478110125711297241746282361427905787166647974194156695297917744728986072776562623066144375358240927772158817551847216892308073898678128626418245344982127369572315531224268810964066259571984851415346908437426038381612816794929316252687267789263777858038875766339015559812293973867935504325429648571562995816605275619999957092856836307059515983613710179075979569868795191350653132838120722312976542663628482917108631329073222562457791926868149698254426946935451238694223453931387896798751239881935395854748492239272034854919384814888057947717382132434020691221934751479277277488381924725915627532635491417639815780893778169064391249299295961391242973897059321222431952669398107359364749247066963899412458493588475851618149811481738570622410741172283240882535228433612290827311518950568654755622818774595613899438405828503591817580378564226643395995909667539714934279146798901976844041843757348894968491751966983325803548156339127051266777943213196946443685147924101736771537126616867472648750915937969376713819404443987456834538499725447029553244467479941638276481321773611758618017954012345236262287882629661651184360217037388620264740406945544570961969439324827723389371576177441792524882783425205310642840393449536313181829908155322642906538923327183337566748261638651153339081288688754570832098771166148667195983395217796366324354117432877437946495139245484548619623121939221279817485372067452674324453976887546435631418382763557184396342836454571423905055892587918887749615509794173638669092345511447263956156414193204688831184714665889259451439259332311845368943513782263123753777696231694194205495704959922723863880432298413636168381616078573062891598315112918219446554845576533892998692325370594474488539426448814429319426521784182769355925546782632073126961818820906590487395948846166059333927649267297696564965543543947669578590562797409937638871106839913865254341245622412121471859998754578132908841667541892012245858521478756969929316422343942158112797752033183928934658142924752050331176202193334788576912574998658539251115539850283720677650854320576562811551173174578775833328416399162054304788347188291756761439376174388945361219433952335731331821396862218232571525612441251632111848598489974740278692731094122916338949484827142750121531675742965367664641411215414977764115388531647726882037293924637143339974272693733161329484435818123411792184988060974583376955921262599899798211923411428461503498359139894628353480323514903211371414868338889037113959618044305359691573337691109965243588528174194180469092705227532616895293628795765668614773534262141057283252953280472752816169227820629710137797844689886847471636687470336478161230636994287399152051504784202946479867156397644210979880186022878788359828251638383974102549761783143734946341195567965634439759146574513251144937969611361249537917121372414247972591798856129814212926346780449724205525637578952290971474136849879738496771728812252071152898776643786732575294105085665738568074607091191283124971896828783299216714398933508987444845687236538244919298383420637051455094528433138730494627177864361713888977647594843636863317479195475629241971697915947726187830636564114098823729843453743461176752844733713545946539141275604894958278308574593424912829229060391133968790787239888747321781532263733749869585143690721342984578234314138614219443741964162918192511776832307690816985214682826410429113433787575317177081795481623259194420753679905138459037544569162935785886994669122850597696389272946729461351613281911162944812417039904767335394611377936922968695541632214837766439787678309195835518662020544561175329341966194572391843719670973031909794252461657162466559118389525946683914729646204585238287215015856124793234672117822717976787185988389052378159892627129540797921702264906257978611257662924043538394716288231727801998187187227545435152579280644629885225697915598946894373494552184543586517474216755926346294581650628813909257673552914519272495581035816539773930958365491741897244555191289966856363614457944142104028159215274555547615795612282959706667958517156783288251367492826848161218955073602427427613866547424122779329827650419258475355528732104767154285734878232072113972557231629537666041754763208932564176315965371571383181346549876030691828952495268968552072988533919895554730738974972372786236634325509460741682123451746919691525537131894351712995427360325069963468615981429463369178879194958216319775496929998671128072275162382737436456495646683993224992449941366156151414324975676576872522428391202716503172565829321488954682824062501920887040764724758196973087523652269198535721157255732641526649609085347729336341408962914068474252322526895938397461729641429980421181955991429017225932178199739658878987489079502213396990782166303645391029191076297572799271438728949662124867565670859790248322321236718646925336247691113181901650314485848572184556276915306733817135286642638378951375485373189842268454101510974096511347766786745747794875723724881223172731475438554113499294969230499896345364273670256198206361788627735155643452404863439889102496402539898169831597788727256514363910936734802416426149697927797183906033235567413213114286602774426463944329826735551766127960729197555261383539342258852893509229687442528542892468292876505980844924717071681184235250353062141872606939592119818063699734998822637498327818971632322191142252765521191882302148619947798440996859987270864334885820529015606841758773115545802669996133895872649425269641769212338078713611157794446098135242912651414750938184643032408516186418218310825119971251884154566626451040465935791155267664965212982379967351582094996554946459503559976317356932677133292693914278258419209666809193139471362474128491715612842727186119275974722714538464947322932735687149316356125722776428705977516372408861301634138532147866826450181780358498121536279382774438451183535084522947251888472178724244728889782974787079372974867189866494314499638174957259498495953236455076783826294773845029255446696373885569187688314133635866751826572757791714719332648826835032975434899567438180539277412871625177258362716798569982193080853747635666229795587060815759883462799662999279281879889544447846998895121317163697327374623366365494312795131669887078122750964953833171135613156691477326906946915144503239794448344065795016443772969723225530602183164373388284243658719982359081337784544756152882542982248296171996642513454369528658681478664696491045608030172999575312369037303249921484625747173199419882954733117690704926834630584514198542204474193666742247122171655737153171159027681876466734656327278732217893868563149033231793843566344620958028773480981963599535348195704851936829898797882956834618671828864326738830352590847228572746184857143063699191381176809359302352278667589233728977142373127065492574875940238282782968328121455963321288107435401882629725448916276575713760423065787750889229626255811896697863305261308256591062193592365073177790111316928237336250615778303925497222349815447666623691882856521963422160416526905590205654818379481079832676895893516482919098764532765884754140636867697828879918743336295180363016636236554343569157783196458934494242767416427230112632265114358942258939467212335456246142915087939322721885507959525338944694102064423525345877641263544618974894262130974888835426839893144845124061466953249766799754867161993468646637226936342238463268159027531420438573125422181067839858894584651032483726128792645244444587857165471714164430522077509558906410145557497776706768664945661987284613938937966858361365958432955693463573964610831827659182288944736688257279732159219389395343654886953252935763528931501753883851419288867394324422949986212483187026529690533244118174472897696529444842312748845940393277102367571891231253993883793538532382138160465617573716926448591122659290612496583451943215966591536875995057382768169219819846513334183940952663237176554280561472164358123554759949165632443698949857299892249787861662462741789978508818568295126549621593912961256298688249657995496325177665344470129177795561631322891270958612808375683533445653922751355556527997399410403045505310227740132655461049557455757716918371662021522040264347781289236560314910729567774042917294466026232041338426268356414666696685618831128947696830192726342727659063167573358598463282853362891416137852368249578331165749498863177755377179271688145726904738738775913328718248907524647034611183528360986383988789146143131221465233244463795429165699288721628353225078899212116263685478256572762427535699363946563736571660761916816356501740772287761381648478644521443563953891156320236488296157463385186992589615191765352938737714735186567044283819446960576428733969595551489270233391965248743919826934397334724083291232757360766811988674258762595131309434533034173773362060107866462021178362333612636665775088122528546161939944881556513613185432793742955868622916704261788240453061539847774927648113792187652621182946526129438440793058323497149197348339101668237436337863854262345870426293999529441396908147223135289276646634234359848169247211307221485513834587612520118381491989233378338592493584912437519388862098874538247876102371134692177497956989315568485873834869526884729692873984257737156350396433321469694823324639117237895583489785306476695336677490871019704876455928998481724442655661912947346891752622133978196185707040762820189760556431461318739674241357759961726398635792176215833577217385765520798268513850858528855617541178359118456771205355446886836279396677368214701968834319616520362811555127225924941878204865772895662856835950307483968248842148769435637545271491339887999517271334113166313630674335913788856855806171113579143711281382672434113294853827828534435910284883729080247711887487164672196612413356974530834818796014636870735431338419854590689778431376714961729462727565822830141467898762247348731220354284508736114448419919898655912358313893774883851156663629482347537228236931837184806621583425239473677899963370735839439569395381139294651014735147997144635199955631313270823235651767588848987632989334499857191126888656516492237592582872312229976650429432298789223289912459172578827517519949514979974990467568877685375264826470636664785878951492886848357043172833183081404537626279577045938921671219761557124310816435418856762936577210623382746676916878247231224034871663999696886967133780556811351178734157535963948558179225146834193780497919211074392022992876615823299183601156314748926642563679601270186612718133977063984198876161315871835940178889765872903751747680959637952696449848408760317099583025516486831191451168144625261697663322682335545386919314146736213874669877626689672687273398416466542662555252404142422160213942856844858580167073876174381893288268555398628470281294357633363187567269267741511370722017779859164720978515401819733127882032321824145143839353597274937062166718657982399622995777799946162620655525845835197711708389815790283178956622318615846329219011269748755869174665584877361468845834785872181772722488938288369952865678982321607894811523912426637732991352455290436411158642467661306110494589431756694615451643558055307742745264394064339637876076514161588480401656364618803990367995924896802765811954757273416269443881528439391962809838452561613433259520658643544884283962148841216423188095878698479572984182929124606971252436494493396324826828328050125535707665152524608649662257923840701526101567644743698244788177168514294855721356454441862763105515877483483047109253312650946425686237743272179936476617735219747363125154506771613181226797935789744560603274682072817876849196714014175430916017449393256028246734647851749047737216923496449459375198966656459629518666541152411522299519399950714755453072653978469616276763553231567998525816523439933397942562407253535193488181371756865421388568738590619895473958886776651694198087245641962766149747113729378614667877332429678760529138617060528470136948299577573791442662428859329450301916191415387879356227407914897057246745598788784385925091691662603624309916752343244843559870136826526668709967119934242745313312996195717019405045451143494133406924893827683741484553653797274527782614751561694783748066621491723567734015325941863235113821774975135398589041732918744425248956671348739984473456229660894661881180798487492442355224141669948823541914702862519339491198616420589411819762854248287363651523474376125238955392374548799765606877969272371236322373997923823733791374477793866565616131966191464879546239796264141136829092733784333977364344637220715568406513561667195051693879729250583313941694556527355741388164249844335018789312968081845692312278666363129769793243809226722986756136245657467888688174748239951587781910662791286030658070255984926769297632545321994756844250993032504883929095248719454066973246632247191651758056286838496854479287678743257811504685112084706647292338754337277680831295332166431256422450944365476747722688973461594552702226236026606656645682856850201670227472185119594651653039334072279791545032432442351386167834705255839913681383944649128446253871558915957727591054771714429050591119862444847144362618963436523325168690619540925395437220113839909267461254147882567147495696433972571075698856348171649160267532445889259123177293832393457959444257683031256147654256656319999192467120772791396339541923417072721412166830345334572675829561584978563176125119801296341430105963462968121971903755649119986743184826135571503559785329318654244354868842882628121353689619967775868242723455733042354311234886555272833251834878259138306481282664453636599536641947672611306039465257701732513637334057746218481224225575591791938846519474145560263562211251345395753813104593753282302225127062694692527091751575213316922254709813155548514460916072991862183496644915781565588693502995942547263746493876994058836364328369575937417513166234467243711695702034205977161553984134802280667098478659311989577538605085118499415692211878286962769624317639352398144786248593466090852322834689443045892664171598547527783987649511662934577942818534687091202090359081719620963651506483374545518162837725229791862632524088968372667333562269349522312751614283506136241330364855821169676038876343979972326989399865659027983985393452167011342295653565549087271335991189247939792418731983974292157558956887904184441770216671569549842986576116978341732428589216369240805626466573946728211644993198416290771279369198655412325548492213891558463834766515199316919680464312436863779818668765831657404628165417407488879422677445221764626620152366489926501837422884676961579595264455921977389268881777436934918110956012142067327319194011563863181694547988634690532986515073523693159657627859683458126049267778746099212990832262965836716163395489859529833597948521986876251471734834175423287055888814796138158981792198951645445140381591639696609396437054191460468872676287319598179428831762801673211385146530472217582533116182306925195029539390372767348531207741644991545568122282447059506581387748959919127355448017203477176552781834608249783580505952197197415440687665185943141831304030584890958268335753231655409471827570622932162266653333407188899611899021309334637063475630428739644086751585889065724775945232505762671574393131994911251964739814483282775834452797226935877529985177977655572849159871359626277732611224281416445422365460497683264160674370872225557331794518124964761787661393608339113973908420773046324686855742755747794982882252828141758130627448798492994445769050464366794320751254802993871032344188855770809649997897252845501528345195724088863511426847118247292264265740106190425237835622891865463565339999994281924835644165897688643958408437921896223212698819508186521292973772585522214355435313583922932368928767844054433317909321136593809767661759682612287462563774535580649180212950906248877326588097774848588450421294158155127055586345779028878816387336185921401484348858359515596935904860944621418269664529631782115289702183387751497943252993129558258450985384536396924869422058637542397685159314406765458578114631466690651932803740611233515540878886189987522582256441768965748425342040203013904454151669383948159867478248704761905329621586482058868473929398631291319013217947907082668362507280667291236434236614849557846356519821111338216849343330376961644273161037126785468422663714478098599769907158821060567740465450519324187775693753119867101221482354416753919174538341786852251013787167195433238619794149653913533268176678826064573386119072352243313435124941352796298520228411189814179052975270304327429018455813733818285211471177834814613063927063383878719949689196594491532718936418786563983423611085975595449375746289644245878540886557332155594235123711585466313388811282119241513091103492947917864765599815754752635525978359199966328540327360697172656186873575401867895472239956286383729518302830767224688143148210767093333761312077897",e1="",t1="",l1="",o1="",u1="",r1="",s1="",m1="",h1="",w1="",i1="",a1="",c1="",f1="",d1="",_1="",p1="",y1="",g1="",b1="",v1="",$1="",O1="",j1="",E1="",T1="",x1="",P1="",C1="",k1="",z1="",N1="",I1=Object.assign({"../advent/day01/solution.ts":V3,"../advent/day02/solution.ts":Z3,"../advent/day03/solution.ts":Q3,"../advent/day04/solution.ts":S2,"../advent/day05/solution.ts":l2,"../advent/day06/solution.ts":s2,"../advent/day07/solution.ts":i2,"../advent/day08/solution.ts":d2,"../advent/day09/solution.ts":g2,"../advent/day10/solution.ts":b2,"../advent/day11/solution.ts":v2,"../advent/day12/solution.ts":$2,"../advent/day13/solution.ts":O2,"../advent/day14/solution.ts":j2,"../advent/day15/solution.ts":E2,"../advent/day16/solution.ts":T2,"../advent/day17/solution.ts":x2,"../advent/day18/solution.ts":P2,"../advent/day19/solution.ts":C2,"../advent/day20/solution.ts":k2,"../advent/day21/solution.ts":z2,"../advent/day22/solution.ts":N2,"../advent/day23/solution.ts":I2,"../advent/day24/solution.ts":L2,"../advent/day25/solution.ts":B2}),L1=Object.assign({"../advent/day01/input-test.md":D2,"../advent/day01/input.md":F2,"../advent/day02/input-test.md":U2,"../advent/day02/input.md":G2,"../advent/day03/input-test.md":R2,"../advent/day03/input-test2.md":H2,"../advent/day03/input.md":V2,"../advent/day04/input-test.md":Y2,"../advent/day04/input.md":J2,"../advent/day05/input-test.md":K2,"../advent/day05/input.md":Z2,"../advent/day06/input-test.md":W2,"../advent/day06/input.md":q2,"../advent/day07/input-test.md":Q2,"../advent/day07/input.md":M1,"../advent/day08/input-test.md":n1,"../advent/day08/input.md":A1,"../advent/day09/input-test.md":S1,"../advent/day09/input.md":X1,"../advent/day10/input-test.md":e1,"../advent/day10/input.md":t1,"../advent/day11/input-test.md":l1,"../advent/day11/input.md":o1,"../advent/day12/input-test.md":u1,"../advent/day12/input.md":r1,"../advent/day13/input-test.md":s1,"../advent/day13/input.md":m1,"../advent/day14/input-test.md":h1,"../advent/day14/input.md":w1,"../advent/day15/input-test.md":i1,"../advent/day15/input.md":a1,"../advent/day16/input-test.md":c1,"../advent/day16/input.md":f1,"../advent/day17/input-test.md":d1,"../advent/day17/input.md":_1,"../advent/day18/input-test.md":p1,"../advent/day18/input.md":y1,"../advent/day19/input-test.md":g1,"../advent/day19/input.md":b1,"../advent/day20/input-test.md":v1,"../advent/day20/input.md":$1,"../advent/day21/input-test.md":O1,"../advent/day21/input.md":j1,"../advent/day22/input-test.md":E1,"../advent/day22/input.md":T1,"../advent/day23/input-test.md":x1,"../advent/day23/input.md":P1,"../advent/day24/input-test.md":C1,"../advent/day24/input.md":k1,"../advent/day25/input-test.md":z1,"../advent/day25/input.md":N1}),B1=Object.freeze(Object.defineProperty({__proto__:null,inputMods:L1,solutionMods:I1},Symbol.toStringTag,{value:"Module"})),d3=n=>parseInt(n.split("day")[1]||"1"),D1=(n,M)=>{const A=(n.match(/input-?(.+)\.md$/)||[])[1]||"Real";return{day:d3(n),name:A,raw:M}},F1=(n,M)=>{const A=!!(M.part1||M.part2),S=M.part1||(()=>"-"),X=M.part2||(()=>"-"),e=M.answers||[["",""]];return{day:d3(n),part1:S,part2:X,answers:e,hasSolution:A}},[Q,U1]=p([]),[P,G1]=p([]),[V,_3]=p(1),[F,p3]=p(0),[y3,g3]=p(""),[R1,H1]=p({value:"",time:0,knownGood:!1}),[V1,Y1]=p({value:"",time:0,knownGood:!1}),[b3,U]=p(!1),[v3,J1]=p(!0),K=()=>Q().filter(n=>n.day===V()),$3=()=>P().find(n=>n.day===V()),G=(n,M="",A=0,S=!1)=>{n===1&&H1({value:M,time:A,knownGood:S}),n===2&&Y1({value:M,time:A,knownGood:S})},M3=()=>[G(1),G(2)],K1=()=>{x3(()=>{if(F()>=K().length)return p3(K().length-1);const n=K()[F()],M=$3();if(!n||!M)return M3();g3(n.raw)})},k=async()=>{const n=$3(),M=y3();if(!n||!M)return M3();const A=n.answers[F()]||["",""];setTimeout(t3,0,1,n.part1,M,A[0]),setTimeout(t3,5,2,n.part2,M,A[1])},t3=async(n,M,A,S)=>{if(b3())return;U(!0);const{output:X,dt:e}=await O3(M,A,v3());G(n,X,e,X===S),U(!1)},O3=async(n,M,A)=>{const S=performance.now();return{output:(()=>{if(!A)return String(n(M));try{return String(n(M))}catch(e){return`Error: ${e}`}})(),dt:performance.now()-S}},Z1=async()=>{if(b3())return;U(!0),M3();const n=["",""],M=[0,0],A=[!0,!0];for(let S=0;S<P().length;S++){const X=P()[S],e=Q().filter(t=>t.day===S+1)[0].raw;for(let t=0;t<2;t++){const{output:l,dt:o}=await O3(t===0?X.part1:X.part2,e,!0);M[t]+=o;const u=l===X.answers[0][t];A[t]&&=u,n[t]+=u?"★":"-",G(t+1,n[t],M[t],A[t]),await new Promise(r=>setTimeout(r,0))}}U(!1)},W1=n=>{U1(Object.keys(n.inputMods).map(M=>D1(M,n.inputMods[M])).sort((M,A)=>M.name.localeCompare(A.name))),G1(Object.keys(n.solutionMods).map(M=>F1(M,n.solutionMods[M])).filter(M=>M.hasSolution).sort((M,A)=>M.day-A.day)),k()};W1(B1);_3(P().at(-1)?.day||1);setTimeout(k,0);var q1=$("<div class=label><h4>Part <!>:</h4><div class=time>(<!>ms)"),Q1=$("<textarea class=output disabled>");const M5=(n="")=>{const M=n.split(`
`).length;return Math.min(M,Math.max(M,1,10))},l3=({part:n=1})=>{const M=n===1?R1:V1;return[(()=>{var A=q1(),S=A.firstChild,X=S.firstChild,e=X.nextSibling;e.nextSibling;var t=S.nextSibling,l=t.firstChild,o=l.nextSibling;return o.nextSibling,c(S,n,e),c(t,()=>M().time.toFixed(0),o),A})(),(()=>{var A=Q1();return v(S=>{var X=!!M().knownGood,e=M5(M().value);return X!==S.e&&A.classList.toggle("correct-answer",S.e=X),e!==S.t&&B3(A,"rows",S.t=e),S},{e:void 0,t:void 0}),v(()=>A.value=M().value),A})()]};var n5=$("<button>");const Y=n=>{const M=()=>({...n.classes,button:!0,toggled:n.isToggled});return(()=>{var A=n5();return D3(A,"click",n.onClick),c(A,()=>n.label),v(S=>F3(A,M(),S)),A})()};i3(["click"]);var A5=$("<div class=label style=align-self:flex-start;><h4>Input:</h4><br>");const S5=()=>{const n=()=>Q().filter(M=>M.day===V()).map((M,A)=>({label:M.name,isToggled:A===F(),onClick:()=>{p3(A),k()},classes:{"input-toggle":!0}}));return(()=>{var M=A5(),A=M.firstChild;return A.nextSibling,c(M,()=>n().map(S=>f(Y,S)),null),M})()},X5=()=>P().map(n=>f(Y,{get label(){return n.day.toString().padStart(2,"0")},get isToggled(){return n.day===V()},onClick:()=>{_3(n.day),k()}}));var e5=$("<textarea rows=14>");const t5=n=>(()=>{var M=e5();return M.$$input=A=>{n.onUpdate(A.target.value),k()},v(()=>M.value=n.value),M})(),l5=()=>f(t5,{get value(){return y3()},onUpdate:g3});i3(["input"]);var o5=$("<div class=catch-area>Catch errors");const u5=()=>(()=>{var n=o5();return n.firstChild,c(n,f(Y,{label:"x",classes:{"input-toggle":!0,"catch-button":!0},get isToggled(){return v3()},onClick:()=>J1(M=>!M)}),null),n})(),r5=()=>f(Y,{label:"Run all",classes:{"input-toggle":!1,"run-all-button":!0},isToggled:!1,onClick:()=>Z1()});var s5=$("<main><header><h2>Advent 2024</h2></header><article class=layout><div class=label><h4>Days:</h4></div><div><br></div><div>");const m5=()=>(K1(),(()=>{var n=s5(),M=n.firstChild,A=M.nextSibling,S=A.firstChild,X=S.nextSibling,e=X.firstChild,t=X.nextSibling;return c(X,f(X5,{}),e),c(X,f(r5,{}),null),c(A,f(l3,{part:1}),t),c(A,f(l3,{part:2}),t),c(A,f(S5,{}),t),c(A,f(l5,{}),t),c(A,f(u5,{}),null),n})()),h5=document.getElementById("root");L3(m5,h5);
//# sourceMappingURL=index-BDFdbJhQ.js.map
