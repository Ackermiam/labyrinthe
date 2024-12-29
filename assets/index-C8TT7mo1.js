var oh=Object.defineProperty;var ah=(n,e,t)=>e in n?oh(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var ot=(n,e,t)=>ah(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function il(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const ct={},tr=[],Sn=()=>{},lh=()=>!1,qs=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),rl=n=>n.startsWith("onUpdate:"),St=Object.assign,sl=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},ch=Object.prototype.hasOwnProperty,et=(n,e)=>ch.call(n,e),Oe=Array.isArray,nr=n=>Ys(n)==="[object Map]",xu=n=>Ys(n)==="[object Set]",Ve=n=>typeof n=="function",_t=n=>typeof n=="string",li=n=>typeof n=="symbol",ht=n=>n!==null&&typeof n=="object",mu=n=>(ht(n)||Ve(n))&&Ve(n.then)&&Ve(n.catch),_u=Object.prototype.toString,Ys=n=>_u.call(n),uh=n=>Ys(n).slice(8,-1),gu=n=>Ys(n)==="[object Object]",ol=n=>_t(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Dr=il(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),$s=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},fh=/-(\w)/g,ri=$s(n=>n.replace(fh,(e,t)=>t?t.toUpperCase():"")),hh=/\B([A-Z])/g,Ii=$s(n=>n.replace(hh,"-$1").toLowerCase()),vu=$s(n=>n.charAt(0).toUpperCase()+n.slice(1)),fo=$s(n=>n?`on${vu(n)}`:""),ti=(n,e)=>!Object.is(n,e),ho=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},zu=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},dh=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let Bl;const Ks=()=>Bl||(Bl=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function js(n){if(Oe(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=_t(i)?_h(i):js(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(_t(n)||ht(n))return n}const ph=/;(?![^(]*\))/g,xh=/:([^]+)/,mh=/\/\*[^]*?\*\//g;function _h(n){const e={};return n.replace(mh,"").split(ph).forEach(t=>{if(t){const i=t.split(xh);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function al(n){let e="";if(_t(n))e=n;else if(Oe(n))for(let t=0;t<n.length;t++){const i=al(n[t]);i&&(e+=i+" ")}else if(ht(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const gh="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",vh=il(gh);function Mu(n){return!!n||n===""}const Su=n=>!!(n&&n.__v_isRef===!0),Lr=n=>_t(n)?n:n==null?"":Oe(n)||ht(n)&&(n.toString===_u||!Ve(n.toString))?Su(n)?Lr(n.value):JSON.stringify(n,Eu,2):String(n),Eu=(n,e)=>Su(e)?Eu(n,e.value):nr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,r],s)=>(t[po(i,s)+" =>"]=r,t),{})}:xu(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>po(t))}:li(e)?po(e):ht(e)&&!Oe(e)&&!gu(e)?String(e):e,po=(n,e="")=>{var t;return li(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Yt;class zh{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Yt,!e&&Yt&&(this.index=(Yt.scopes||(Yt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=Yt;try{return Yt=this,e()}finally{Yt=t}}}on(){Yt=this}off(){Yt=this.parent}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function Mh(){return Yt}let lt;const xo=new WeakSet;class yu{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Yt&&Yt.active&&Yt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,xo.has(this)&&(xo.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||bu(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Hl(this),Au(this);const e=lt,t=fn;lt=this,fn=!0;try{return this.fn()}finally{wu(this),lt=e,fn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)ul(e);this.deps=this.depsTail=void 0,Hl(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?xo.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){ia(this)&&this.run()}get dirty(){return ia(this)}}let Tu=0,Ir,Ur;function bu(n,e=!1){if(n.flags|=8,e){n.next=Ur,Ur=n;return}n.next=Ir,Ir=n}function ll(){Tu++}function cl(){if(--Tu>0)return;if(Ur){let e=Ur;for(Ur=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;Ir;){let e=Ir;for(Ir=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function Au(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function wu(n){let e,t=n.depsTail,i=t;for(;i;){const r=i.prevDep;i.version===-1?(i===t&&(t=r),ul(i),Sh(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}n.deps=e,n.depsTail=t}function ia(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Ru(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function Ru(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Br))return;n.globalVersion=Br;const e=n.dep;if(n.flags|=2,e.version>0&&!n.isSSR&&n.deps&&!ia(n)){n.flags&=-3;return}const t=lt,i=fn;lt=n,fn=!0;try{Au(n);const r=n.fn(n._value);(e.version===0||ti(r,n._value))&&(n._value=r,e.version++)}catch(r){throw e.version++,r}finally{lt=t,fn=i,wu(n),n.flags&=-3}}function ul(n,e=!1){const{dep:t,prevSub:i,nextSub:r}=n;if(i&&(i.nextSub=r,n.prevSub=void 0),r&&(r.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let s=t.computed.deps;s;s=s.nextDep)ul(s,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function Sh(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let fn=!0;const Cu=[];function ci(){Cu.push(fn),fn=!1}function ui(){const n=Cu.pop();fn=n===void 0?!0:n}function Hl(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=lt;lt=void 0;try{e()}finally{lt=t}}}let Br=0;class Eh{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class fl{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!lt||!fn||lt===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==lt)t=this.activeLink=new Eh(lt,this),lt.deps?(t.prevDep=lt.depsTail,lt.depsTail.nextDep=t,lt.depsTail=t):lt.deps=lt.depsTail=t,Pu(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=lt.depsTail,t.nextDep=void 0,lt.depsTail.nextDep=t,lt.depsTail=t,lt.deps===t&&(lt.deps=i)}return t}trigger(e){this.version++,Br++,this.notify(e)}notify(e){ll();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{cl()}}}function Pu(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)Pu(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const ra=new WeakMap,wi=Symbol(""),sa=Symbol(""),Hr=Symbol("");function wt(n,e,t){if(fn&&lt){let i=ra.get(n);i||ra.set(n,i=new Map);let r=i.get(t);r||(i.set(t,r=new fl),r.map=i,r.key=t),r.track()}}function Nn(n,e,t,i,r,s){const o=ra.get(n);if(!o){Br++;return}const a=l=>{l&&l.trigger()};if(ll(),e==="clear")o.forEach(a);else{const l=Oe(n),c=l&&ol(t);if(l&&t==="length"){const u=Number(i);o.forEach((f,d)=>{(d==="length"||d===Hr||!li(d)&&d>=u)&&a(f)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),c&&a(o.get(Hr)),e){case"add":l?c&&a(o.get("length")):(a(o.get(wi)),nr(n)&&a(o.get(sa)));break;case"delete":l||(a(o.get(wi)),nr(n)&&a(o.get(sa)));break;case"set":nr(n)&&a(o.get(wi));break}}cl()}function Fi(n){const e=Qe(n);return e===n?e:(wt(e,"iterate",Hr),tn(n)?e:e.map(Rt))}function Zs(n){return wt(n=Qe(n),"iterate",Hr),n}const yh={__proto__:null,[Symbol.iterator](){return mo(this,Symbol.iterator,Rt)},concat(...n){return Fi(this).concat(...n.map(e=>Oe(e)?Fi(e):e))},entries(){return mo(this,"entries",n=>(n[1]=Rt(n[1]),n))},every(n,e){return wn(this,"every",n,e,void 0,arguments)},filter(n,e){return wn(this,"filter",n,e,t=>t.map(Rt),arguments)},find(n,e){return wn(this,"find",n,e,Rt,arguments)},findIndex(n,e){return wn(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return wn(this,"findLast",n,e,Rt,arguments)},findLastIndex(n,e){return wn(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return wn(this,"forEach",n,e,void 0,arguments)},includes(...n){return _o(this,"includes",n)},indexOf(...n){return _o(this,"indexOf",n)},join(n){return Fi(this).join(n)},lastIndexOf(...n){return _o(this,"lastIndexOf",n)},map(n,e){return wn(this,"map",n,e,void 0,arguments)},pop(){return Mr(this,"pop")},push(...n){return Mr(this,"push",n)},reduce(n,...e){return Vl(this,"reduce",n,e)},reduceRight(n,...e){return Vl(this,"reduceRight",n,e)},shift(){return Mr(this,"shift")},some(n,e){return wn(this,"some",n,e,void 0,arguments)},splice(...n){return Mr(this,"splice",n)},toReversed(){return Fi(this).toReversed()},toSorted(n){return Fi(this).toSorted(n)},toSpliced(...n){return Fi(this).toSpliced(...n)},unshift(...n){return Mr(this,"unshift",n)},values(){return mo(this,"values",Rt)}};function mo(n,e,t){const i=Zs(n),r=i[e]();return i!==n&&!tn(n)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.value&&(s.value=t(s.value)),s}),r}const Th=Array.prototype;function wn(n,e,t,i,r,s){const o=Zs(n),a=o!==n&&!tn(n),l=o[e];if(l!==Th[e]){const f=l.apply(n,s);return a?Rt(f):f}let c=t;o!==n&&(a?c=function(f,d){return t.call(this,Rt(f),d,n)}:t.length>2&&(c=function(f,d){return t.call(this,f,d,n)}));const u=l.call(o,c,i);return a&&r?r(u):u}function Vl(n,e,t,i){const r=Zs(n);let s=t;return r!==n&&(tn(n)?t.length>3&&(s=function(o,a,l){return t.call(this,o,a,l,n)}):s=function(o,a,l){return t.call(this,o,Rt(a),l,n)}),r[e](s,...i)}function _o(n,e,t){const i=Qe(n);wt(i,"iterate",Hr);const r=i[e](...t);return(r===-1||r===!1)&&pl(t[0])?(t[0]=Qe(t[0]),i[e](...t)):r}function Mr(n,e,t=[]){ci(),ll();const i=Qe(n)[e].apply(n,t);return cl(),ui(),i}const bh=il("__proto__,__v_isRef,__isVue"),Du=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(li));function Ah(n){li(n)||(n=String(n));const e=Qe(this);return wt(e,"has",n),e.hasOwnProperty(n)}class Lu{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw")return i===(r?s?Fh:Fu:s?Nu:Uu).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=Oe(e);if(!r){let l;if(o&&(l=yh[t]))return l;if(t==="hasOwnProperty")return Ah}const a=Reflect.get(e,t,Ct(e)?e:i);return(li(t)?Du.has(t):bh(t))||(r||wt(e,"get",t),s)?a:Ct(a)?o&&ol(t)?a:a.value:ht(a)?r?Ou(a):Js(a):a}}class Iu extends Lu{constructor(e=!1){super(!1,e)}set(e,t,i,r){let s=e[t];if(!this._isShallow){const l=Ci(s);if(!tn(i)&&!Ci(i)&&(s=Qe(s),i=Qe(i)),!Oe(e)&&Ct(s)&&!Ct(i))return l?!1:(s.value=i,!0)}const o=Oe(e)&&ol(t)?Number(t)<e.length:et(e,t),a=Reflect.set(e,t,i,Ct(e)?e:r);return e===Qe(r)&&(o?ti(i,s)&&Nn(e,"set",t,i):Nn(e,"add",t,i)),a}deleteProperty(e,t){const i=et(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&i&&Nn(e,"delete",t,void 0),r}has(e,t){const i=Reflect.has(e,t);return(!li(t)||!Du.has(t))&&wt(e,"has",t),i}ownKeys(e){return wt(e,"iterate",Oe(e)?"length":wi),Reflect.ownKeys(e)}}class wh extends Lu{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const Rh=new Iu,Ch=new wh,Ph=new Iu(!0);const oa=n=>n,Qr=n=>Reflect.getPrototypeOf(n);function Dh(n,e,t){return function(...i){const r=this.__v_raw,s=Qe(r),o=nr(s),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=r[n](...i),u=t?oa:e?aa:Rt;return!e&&wt(s,"iterate",l?sa:wi),{next(){const{value:f,done:d}=c.next();return d?{value:f,done:d}:{value:a?[u(f[0]),u(f[1])]:u(f),done:d}},[Symbol.iterator](){return this}}}}function es(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function Lh(n,e){const t={get(r){const s=this.__v_raw,o=Qe(s),a=Qe(r);n||(ti(r,a)&&wt(o,"get",r),wt(o,"get",a));const{has:l}=Qr(o),c=e?oa:n?aa:Rt;if(l.call(o,r))return c(s.get(r));if(l.call(o,a))return c(s.get(a));s!==o&&s.get(r)},get size(){const r=this.__v_raw;return!n&&wt(Qe(r),"iterate",wi),Reflect.get(r,"size",r)},has(r){const s=this.__v_raw,o=Qe(s),a=Qe(r);return n||(ti(r,a)&&wt(o,"has",r),wt(o,"has",a)),r===a?s.has(r):s.has(r)||s.has(a)},forEach(r,s){const o=this,a=o.__v_raw,l=Qe(a),c=e?oa:n?aa:Rt;return!n&&wt(l,"iterate",wi),a.forEach((u,f)=>r.call(s,c(u),c(f),o))}};return St(t,n?{add:es("add"),set:es("set"),delete:es("delete"),clear:es("clear")}:{add(r){!e&&!tn(r)&&!Ci(r)&&(r=Qe(r));const s=Qe(this);return Qr(s).has.call(s,r)||(s.add(r),Nn(s,"add",r,r)),this},set(r,s){!e&&!tn(s)&&!Ci(s)&&(s=Qe(s));const o=Qe(this),{has:a,get:l}=Qr(o);let c=a.call(o,r);c||(r=Qe(r),c=a.call(o,r));const u=l.call(o,r);return o.set(r,s),c?ti(s,u)&&Nn(o,"set",r,s):Nn(o,"add",r,s),this},delete(r){const s=Qe(this),{has:o,get:a}=Qr(s);let l=o.call(s,r);l||(r=Qe(r),l=o.call(s,r)),a&&a.call(s,r);const c=s.delete(r);return l&&Nn(s,"delete",r,void 0),c},clear(){const r=Qe(this),s=r.size!==0,o=r.clear();return s&&Nn(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Dh(r,n,e)}),t}function hl(n,e){const t=Lh(n,e);return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(et(t,r)&&r in i?t:i,r,s)}const Ih={get:hl(!1,!1)},Uh={get:hl(!1,!0)},Nh={get:hl(!0,!1)};const Uu=new WeakMap,Nu=new WeakMap,Fu=new WeakMap,Fh=new WeakMap;function Oh(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Bh(n){return n.__v_skip||!Object.isExtensible(n)?0:Oh(uh(n))}function Js(n){return Ci(n)?n:dl(n,!1,Rh,Ih,Uu)}function Hh(n){return dl(n,!1,Ph,Uh,Nu)}function Ou(n){return dl(n,!0,Ch,Nh,Fu)}function dl(n,e,t,i,r){if(!ht(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=r.get(n);if(s)return s;const o=Bh(n);if(o===0)return n;const a=new Proxy(n,o===2?i:t);return r.set(n,a),a}function ir(n){return Ci(n)?ir(n.__v_raw):!!(n&&n.__v_isReactive)}function Ci(n){return!!(n&&n.__v_isReadonly)}function tn(n){return!!(n&&n.__v_isShallow)}function pl(n){return n?!!n.__v_raw:!1}function Qe(n){const e=n&&n.__v_raw;return e?Qe(e):n}function Vh(n){return!et(n,"__v_skip")&&Object.isExtensible(n)&&zu(n,"__v_skip",!0),n}const Rt=n=>ht(n)?Js(n):n,aa=n=>ht(n)?Ou(n):n;function Ct(n){return n?n.__v_isRef===!0:!1}function en(n){return Gh(n,!1)}function Gh(n,e){return Ct(n)?n:new kh(n,e)}class kh{constructor(e,t){this.dep=new fl,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:Qe(e),this._value=t?e:Rt(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||tn(e)||Ci(e);e=i?e:Qe(e),ti(e,t)&&(this._rawValue=e,this._value=i?e:Rt(e),this.dep.trigger())}}function yt(n){return Ct(n)?n.value:n}const Wh={get:(n,e,t)=>e==="__v_raw"?n:yt(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return Ct(r)&&!Ct(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function Bu(n){return ir(n)?n:new Proxy(n,Wh)}class Xh{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new fl(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Br-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&lt!==this)return bu(this,!0),!0}get value(){const e=this.dep.track();return Ru(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function qh(n,e,t=!1){let i,r;return Ve(n)?i=n:(i=n.get,r=n.set),new Xh(i,r,t)}const ts={},Fs=new WeakMap;let Mi;function Yh(n,e=!1,t=Mi){if(t){let i=Fs.get(t);i||Fs.set(t,i=[]),i.push(n)}}function $h(n,e,t=ct){const{immediate:i,deep:r,once:s,scheduler:o,augmentJob:a,call:l}=t,c=y=>r?y:tn(y)||r===!1||r===0?Qn(y,1):Qn(y);let u,f,d,p,v=!1,S=!1;if(Ct(n)?(f=()=>n.value,v=tn(n)):ir(n)?(f=()=>c(n),v=!0):Oe(n)?(S=!0,v=n.some(y=>ir(y)||tn(y)),f=()=>n.map(y=>{if(Ct(y))return y.value;if(ir(y))return c(y);if(Ve(y))return l?l(y,2):y()})):Ve(n)?e?f=l?()=>l(n,2):n:f=()=>{if(d){ci();try{d()}finally{ui()}}const y=Mi;Mi=u;try{return l?l(n,3,[p]):n(p)}finally{Mi=y}}:f=Sn,e&&r){const y=f,L=r===!0?1/0:r;f=()=>Qn(y(),L)}const m=Mh(),h=()=>{u.stop(),m&&m.active&&sl(m.effects,u)};if(s&&e){const y=e;e=(...L)=>{y(...L),h()}}let A=S?new Array(n.length).fill(ts):ts;const b=y=>{if(!(!(u.flags&1)||!u.dirty&&!y))if(e){const L=u.run();if(r||v||(S?L.some((P,w)=>ti(P,A[w])):ti(L,A))){d&&d();const P=Mi;Mi=u;try{const w=[L,A===ts?void 0:S&&A[0]===ts?[]:A,p];l?l(e,3,w):e(...w),A=L}finally{Mi=P}}}else u.run()};return a&&a(b),u=new yu(f),u.scheduler=o?()=>o(b,!1):b,p=y=>Yh(y,!1,u),d=u.onStop=()=>{const y=Fs.get(u);if(y){if(l)l(y,4);else for(const L of y)L();Fs.delete(u)}},e?i?b(!0):A=u.run():o?o(b.bind(null,!0),!0):u.run(),h.pause=u.pause.bind(u),h.resume=u.resume.bind(u),h.stop=h,h}function Qn(n,e=1/0,t){if(e<=0||!ht(n)||n.__v_skip||(t=t||new Set,t.has(n)))return n;if(t.add(n),e--,Ct(n))Qn(n.value,e,t);else if(Oe(n))for(let i=0;i<n.length;i++)Qn(n[i],e,t);else if(xu(n)||nr(n))n.forEach(i=>{Qn(i,e,t)});else if(gu(n)){for(const i in n)Qn(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&Qn(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Xr(n,e,t,i){try{return i?n(...i):n()}catch(r){Qs(r,e,t)}}function Tn(n,e,t,i){if(Ve(n)){const r=Xr(n,e,t,i);return r&&mu(r)&&r.catch(s=>{Qs(s,e,t)}),r}if(Oe(n)){const r=[];for(let s=0;s<n.length;s++)r.push(Tn(n[s],e,t,i));return r}}function Qs(n,e,t,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||ct;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](n,l,c)===!1)return}a=a.parent}if(s){ci(),Xr(s,null,10,[n,l,c]),ui();return}}Kh(n,t,r,i,o)}function Kh(n,e,t,i=!0,r=!1){if(r)throw n;console.error(n)}const Ut=[];let pn=-1;const rr=[];let Zn=null,Ji=0;const Hu=Promise.resolve();let Os=null;function jh(n){const e=Os||Hu;return n?e.then(this?n.bind(this):n):e}function Zh(n){let e=pn+1,t=Ut.length;for(;e<t;){const i=e+t>>>1,r=Ut[i],s=Vr(r);s<n||s===n&&r.flags&2?e=i+1:t=i}return e}function xl(n){if(!(n.flags&1)){const e=Vr(n),t=Ut[Ut.length-1];!t||!(n.flags&2)&&e>=Vr(t)?Ut.push(n):Ut.splice(Zh(e),0,n),n.flags|=1,Vu()}}function Vu(){Os||(Os=Hu.then(ku))}function Jh(n){Oe(n)?rr.push(...n):Zn&&n.id===-1?Zn.splice(Ji+1,0,n):n.flags&1||(rr.push(n),n.flags|=1),Vu()}function Gl(n,e,t=pn+1){for(;t<Ut.length;t++){const i=Ut[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;Ut.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Gu(n){if(rr.length){const e=[...new Set(rr)].sort((t,i)=>Vr(t)-Vr(i));if(rr.length=0,Zn){Zn.push(...e);return}for(Zn=e,Ji=0;Ji<Zn.length;Ji++){const t=Zn[Ji];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Zn=null,Ji=0}}const Vr=n=>n.id==null?n.flags&2?-1:1/0:n.id;function ku(n){try{for(pn=0;pn<Ut.length;pn++){const e=Ut[pn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Xr(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;pn<Ut.length;pn++){const e=Ut[pn];e&&(e.flags&=-2)}pn=-1,Ut.length=0,Gu(),Os=null,(Ut.length||rr.length)&&ku()}}let vn=null,Wu=null;function Bs(n){const e=vn;return vn=n,Wu=n&&n.type.__scopeId||null,e}function Qh(n,e=vn,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&jl(-1);const s=Bs(e);let o;try{o=n(...r)}finally{Bs(s),i._d&&jl(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function di(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(ci(),Tn(l,t,8,[n.el,a,n,e]),ui())}}const ed=Symbol("_vte"),td=n=>n.__isTeleport;function ml(n,e){n.shapeFlag&6&&n.component?(n.transition=e,ml(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}/*! #__NO_SIDE_EFFECTS__ */function eo(n,e){return Ve(n)?St({name:n.name},e,{setup:n}):n}function Xu(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function Hs(n,e,t,i,r=!1){if(Oe(n)){n.forEach((v,S)=>Hs(v,e&&(Oe(e)?e[S]:e),t,i,r));return}if(Nr(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Hs(n,e,t,i.component.subTree);return}const s=i.shapeFlag&4?zl(i.component):i.el,o=r?null:s,{i:a,r:l}=n,c=e&&e.r,u=a.refs===ct?a.refs={}:a.refs,f=a.setupState,d=Qe(f),p=f===ct?()=>!1:v=>et(d,v);if(c!=null&&c!==l&&(_t(c)?(u[c]=null,p(c)&&(f[c]=null)):Ct(c)&&(c.value=null)),Ve(l))Xr(l,a,12,[o,u]);else{const v=_t(l),S=Ct(l);if(v||S){const m=()=>{if(n.f){const h=v?p(l)?f[l]:u[l]:l.value;r?Oe(h)&&sl(h,s):Oe(h)?h.includes(s)||h.push(s):v?(u[l]=[s],p(l)&&(f[l]=u[l])):(l.value=[s],n.k&&(u[n.k]=l.value))}else v?(u[l]=o,p(l)&&(f[l]=o)):S&&(l.value=o,n.k&&(u[n.k]=o))};o?(m.id=-1,qt(m,t)):m()}}}Ks().requestIdleCallback;Ks().cancelIdleCallback;const Nr=n=>!!n.type.__asyncLoader,qu=n=>n.type.__isKeepAlive;function nd(n,e){Yu(n,"a",e)}function id(n,e){Yu(n,"da",e)}function Yu(n,e,t=Nt){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(to(e,i,t),t){let r=t.parent;for(;r&&r.parent;)qu(r.parent.vnode)&&rd(i,e,t,r),r=r.parent}}function rd(n,e,t,i){const r=to(e,n,i,!0);Ku(()=>{sl(i[e],r)},t)}function to(n,e,t=Nt,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...o)=>{ci();const a=qr(t),l=Tn(e,t,n,o);return a(),ui(),l});return i?r.unshift(s):r.push(s),s}}const kn=n=>(e,t=Nt)=>{(!kr||n==="sp")&&to(n,(...i)=>e(...i),t)},sd=kn("bm"),$u=kn("m"),od=kn("bu"),ad=kn("u"),ld=kn("bum"),Ku=kn("um"),cd=kn("sp"),ud=kn("rtg"),fd=kn("rtc");function hd(n,e=Nt){to("ec",n,e)}const dd=Symbol.for("v-ndc");function ju(n,e,t,i){let r;const s=t,o=Oe(n);if(o||_t(n)){const a=o&&ir(n);let l=!1;a&&(l=!tn(n),n=Zs(n)),r=new Array(n.length);for(let c=0,u=n.length;c<u;c++)r[c]=e(l?Rt(n[c]):n[c],c,void 0,s)}else if(typeof n=="number"){r=new Array(n);for(let a=0;a<n;a++)r[a]=e(a+1,a,void 0,s)}else if(ht(n))if(n[Symbol.iterator])r=Array.from(n,(a,l)=>e(a,l,void 0,s));else{const a=Object.keys(n);r=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];r[l]=e(n[u],u,l,s)}}else r=[];return r}const la=n=>n?gf(n)?zl(n):la(n.parent):null,Fr=St(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>la(n.parent),$root:n=>la(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>_l(n),$forceUpdate:n=>n.f||(n.f=()=>{xl(n.update)}),$nextTick:n=>n.n||(n.n=jh.bind(n.proxy)),$watch:n=>Ud.bind(n)}),go=(n,e)=>n!==ct&&!n.__isScriptSetup&&et(n,e),pd={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=n;let c;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(go(i,e))return o[e]=1,i[e];if(r!==ct&&et(r,e))return o[e]=2,r[e];if((c=n.propsOptions[0])&&et(c,e))return o[e]=3,s[e];if(t!==ct&&et(t,e))return o[e]=4,t[e];ca&&(o[e]=0)}}const u=Fr[e];let f,d;if(u)return e==="$attrs"&&wt(n.attrs,"get",""),u(n);if((f=a.__cssModules)&&(f=f[e]))return f;if(t!==ct&&et(t,e))return o[e]=4,t[e];if(d=l.config.globalProperties,et(d,e))return d[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return go(r,e)?(r[e]=t,!0):i!==ct&&et(i,e)?(i[e]=t,!0):et(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,propsOptions:s}},o){let a;return!!t[o]||n!==ct&&et(n,o)||go(e,o)||(a=s[0])&&et(a,o)||et(i,o)||et(Fr,o)||et(r.config.globalProperties,o)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:et(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function kl(n){return Oe(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let ca=!0;function xd(n){const e=_l(n),t=n.proxy,i=n.ctx;ca=!1,e.beforeCreate&&Wl(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:d,beforeUpdate:p,updated:v,activated:S,deactivated:m,beforeDestroy:h,beforeUnmount:A,destroyed:b,unmounted:y,render:L,renderTracked:P,renderTriggered:w,errorCaptured:U,serverPrefetch:E,expose:M,inheritAttrs:C,components:Q,directives:Y,filters:ne}=e;if(c&&md(c,i,null),o)for(const J in o){const V=o[J];Ve(V)&&(i[J]=V.bind(t))}if(r){const J=r.call(t,t);ht(J)&&(n.data=Js(J))}if(ca=!0,s)for(const J in s){const V=s[J],fe=Ve(V)?V.bind(t,t):Ve(V.get)?V.get.bind(t,t):Sn,ge=!Ve(V)&&Ve(V.set)?V.set.bind(t):Sn,ye=ip({get:fe,set:ge});Object.defineProperty(i,J,{enumerable:!0,configurable:!0,get:()=>ye.value,set:Pe=>ye.value=Pe})}if(a)for(const J in a)Zu(a[J],i,t,J);if(l){const J=Ve(l)?l.call(t):l;Reflect.ownKeys(J).forEach(V=>{Sd(V,J[V])})}u&&Wl(u,n,"c");function Z(J,V){Oe(V)?V.forEach(fe=>J(fe.bind(t))):V&&J(V.bind(t))}if(Z(sd,f),Z($u,d),Z(od,p),Z(ad,v),Z(nd,S),Z(id,m),Z(hd,U),Z(fd,P),Z(ud,w),Z(ld,A),Z(Ku,y),Z(cd,E),Oe(M))if(M.length){const J=n.exposed||(n.exposed={});M.forEach(V=>{Object.defineProperty(J,V,{get:()=>t[V],set:fe=>t[V]=fe})})}else n.exposed||(n.exposed={});L&&n.render===Sn&&(n.render=L),C!=null&&(n.inheritAttrs=C),Q&&(n.components=Q),Y&&(n.directives=Y),E&&Xu(n)}function md(n,e,t=Sn){Oe(n)&&(n=ua(n));for(const i in n){const r=n[i];let s;ht(r)?"default"in r?s=ys(r.from||i,r.default,!0):s=ys(r.from||i):s=ys(r),Ct(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[i]=s}}function Wl(n,e,t){Tn(Oe(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function Zu(n,e,t,i){let r=i.includes(".")?hf(t,i):()=>t[i];if(_t(n)){const s=e[n];Ve(s)&&Ts(r,s)}else if(Ve(n))Ts(r,n.bind(t));else if(ht(n))if(Oe(n))n.forEach(s=>Zu(s,e,t,i));else{const s=Ve(n.handler)?n.handler.bind(t):e[n.handler];Ve(s)&&Ts(r,s,n)}}function _l(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=n.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(c=>Vs(l,c,o,!0)),Vs(l,e,o)),ht(e)&&s.set(e,l),l}function Vs(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&Vs(n,s,t,!0),r&&r.forEach(o=>Vs(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=_d[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const _d={data:Xl,props:ql,emits:ql,methods:Cr,computed:Cr,beforeCreate:Dt,created:Dt,beforeMount:Dt,mounted:Dt,beforeUpdate:Dt,updated:Dt,beforeDestroy:Dt,beforeUnmount:Dt,destroyed:Dt,unmounted:Dt,activated:Dt,deactivated:Dt,errorCaptured:Dt,serverPrefetch:Dt,components:Cr,directives:Cr,watch:vd,provide:Xl,inject:gd};function Xl(n,e){return e?n?function(){return St(Ve(n)?n.call(this,this):n,Ve(e)?e.call(this,this):e)}:e:n}function gd(n,e){return Cr(ua(n),ua(e))}function ua(n){if(Oe(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Dt(n,e){return n?[...new Set([].concat(n,e))]:e}function Cr(n,e){return n?St(Object.create(null),n,e):e}function ql(n,e){return n?Oe(n)&&Oe(e)?[...new Set([...n,...e])]:St(Object.create(null),kl(n),kl(e??{})):e}function vd(n,e){if(!n)return e;if(!e)return n;const t=St(Object.create(null),n);for(const i in e)t[i]=Dt(n[i],e[i]);return t}function Ju(){return{app:null,config:{isNativeTag:lh,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let zd=0;function Md(n,e){return function(i,r=null){Ve(i)||(i=St({},i)),r!=null&&!ht(r)&&(r=null);const s=Ju(),o=new WeakSet,a=[];let l=!1;const c=s.app={_uid:zd++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:rp,get config(){return s.config},set config(u){},use(u,...f){return o.has(u)||(u&&Ve(u.install)?(o.add(u),u.install(c,...f)):Ve(u)&&(o.add(u),u(c,...f))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,f){return f?(s.components[u]=f,c):s.components[u]},directive(u,f){return f?(s.directives[u]=f,c):s.directives[u]},mount(u,f,d){if(!l){const p=c._ceVNode||En(i,r);return p.appContext=s,d===!0?d="svg":d===!1&&(d=void 0),f&&e?e(p,u):n(p,u,d),l=!0,c._container=u,u.__vue_app__=c,zl(p.component)}},onUnmount(u){a.push(u)},unmount(){l&&(Tn(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,f){return s.provides[u]=f,c},runWithContext(u){const f=sr;sr=c;try{return u()}finally{sr=f}}};return c}}let sr=null;function Sd(n,e){if(Nt){let t=Nt.provides;const i=Nt.parent&&Nt.parent.provides;i===t&&(t=Nt.provides=Object.create(i)),t[n]=e}}function ys(n,e,t=!1){const i=Nt||vn;if(i||sr){const r=sr?sr._context.provides:i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&n in r)return r[n];if(arguments.length>1)return t&&Ve(e)?e.call(i&&i.proxy):e}}const Qu={},ef=()=>Object.create(Qu),tf=n=>Object.getPrototypeOf(n)===Qu;function Ed(n,e,t,i=!1){const r={},s=ef();n.propsDefaults=Object.create(null),nf(n,e,r,s);for(const o in n.propsOptions[0])o in r||(r[o]=void 0);t?n.props=i?r:Hh(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function yd(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=n,a=Qe(r),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let d=u[f];if(no(n.emitsOptions,d))continue;const p=e[d];if(l)if(et(s,d))p!==s[d]&&(s[d]=p,c=!0);else{const v=ri(d);r[v]=fa(l,a,v,p,n,!1)}else p!==s[d]&&(s[d]=p,c=!0)}}}else{nf(n,e,r,s)&&(c=!0);let u;for(const f in a)(!e||!et(e,f)&&((u=Ii(f))===f||!et(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(r[f]=fa(l,a,f,void 0,n,!0)):delete r[f]);if(s!==a)for(const f in s)(!e||!et(e,f))&&(delete s[f],c=!0)}c&&Nn(n.attrs,"set","")}function nf(n,e,t,i){const[r,s]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(Dr(l))continue;const c=e[l];let u;r&&et(r,u=ri(l))?!s||!s.includes(u)?t[u]=c:(a||(a={}))[u]=c:no(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=Qe(t),c=a||ct;for(let u=0;u<s.length;u++){const f=s[u];t[f]=fa(r,l,f,c[f],n,!et(c,f))}}return o}function fa(n,e,t,i,r,s){const o=n[t];if(o!=null){const a=et(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Ve(l)){const{propsDefaults:c}=r;if(t in c)i=c[t];else{const u=qr(r);i=c[t]=l.call(null,e),u()}}else i=l;r.ce&&r.ce._setProp(t,i)}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===Ii(t))&&(i=!0))}return i}const Td=new WeakMap;function rf(n,e,t=!1){const i=t?Td:e.propsCache,r=i.get(n);if(r)return r;const s=n.props,o={},a=[];let l=!1;if(!Ve(n)){const u=f=>{l=!0;const[d,p]=rf(f,e,!0);St(o,d),p&&a.push(...p)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return ht(n)&&i.set(n,tr),tr;if(Oe(s))for(let u=0;u<s.length;u++){const f=ri(s[u]);Yl(f)&&(o[f]=ct)}else if(s)for(const u in s){const f=ri(u);if(Yl(f)){const d=s[u],p=o[f]=Oe(d)||Ve(d)?{type:d}:St({},d),v=p.type;let S=!1,m=!0;if(Oe(v))for(let h=0;h<v.length;++h){const A=v[h],b=Ve(A)&&A.name;if(b==="Boolean"){S=!0;break}else b==="String"&&(m=!1)}else S=Ve(v)&&v.name==="Boolean";p[0]=S,p[1]=m,(S||et(p,"default"))&&a.push(f)}}const c=[o,a];return ht(n)&&i.set(n,c),c}function Yl(n){return n[0]!=="$"&&!Dr(n)}const sf=n=>n[0]==="_"||n==="$stable",gl=n=>Oe(n)?n.map(mn):[mn(n)],bd=(n,e,t)=>{if(e._n)return e;const i=Qh((...r)=>gl(e(...r)),t);return i._c=!1,i},of=(n,e,t)=>{const i=n._ctx;for(const r in n){if(sf(r))continue;const s=n[r];if(Ve(s))e[r]=bd(r,s,i);else if(s!=null){const o=gl(s);e[r]=()=>o}}},af=(n,e)=>{const t=gl(e);n.slots.default=()=>t},lf=(n,e,t)=>{for(const i in e)(t||i!=="_")&&(n[i]=e[i])},Ad=(n,e,t)=>{const i=n.slots=ef();if(n.vnode.shapeFlag&32){const r=e._;r?(lf(i,e,t),t&&zu(i,"_",r,!0)):of(e,i)}else e&&af(n,e)},wd=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,o=ct;if(i.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:lf(r,e,t):(s=!e.$stable,of(e,r)),o=e}else e&&(af(n,e),o={default:1});if(s)for(const a in r)!sf(a)&&o[a]==null&&delete r[a]},qt=Gd;function Rd(n){return Cd(n)}function Cd(n,e){const t=Ks();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:d,setScopeId:p=Sn,insertStaticContent:v}=n,S=(T,_,X,K=null,q=null,G=null,se=void 0,$=null,g=!!_.dynamicChildren)=>{if(T===_)return;T&&!Sr(T,_)&&(K=he(T),Pe(T,q,G,!0),T=null),_.patchFlag===-2&&(g=!1,_.dynamicChildren=null);const{type:x,ref:R,shapeFlag:N}=_;switch(x){case io:m(T,_,X,K);break;case Pi:h(T,_,X,K);break;case bs:T==null&&A(_,X,K,se);break;case ln:Q(T,_,X,K,q,G,se,$,g);break;default:N&1?L(T,_,X,K,q,G,se,$,g):N&6?Y(T,_,X,K,q,G,se,$,g):(N&64||N&128)&&x.process(T,_,X,K,q,G,se,$,g,Fe)}R!=null&&q&&Hs(R,T&&T.ref,G,_||T,!_)},m=(T,_,X,K)=>{if(T==null)i(_.el=a(_.children),X,K);else{const q=_.el=T.el;_.children!==T.children&&c(q,_.children)}},h=(T,_,X,K)=>{T==null?i(_.el=l(_.children||""),X,K):_.el=T.el},A=(T,_,X,K)=>{[T.el,T.anchor]=v(T.children,_,X,K,T.el,T.anchor)},b=({el:T,anchor:_},X,K)=>{let q;for(;T&&T!==_;)q=d(T),i(T,X,K),T=q;i(_,X,K)},y=({el:T,anchor:_})=>{let X;for(;T&&T!==_;)X=d(T),r(T),T=X;r(_)},L=(T,_,X,K,q,G,se,$,g)=>{_.type==="svg"?se="svg":_.type==="math"&&(se="mathml"),T==null?P(_,X,K,q,G,se,$,g):E(T,_,q,G,se,$,g)},P=(T,_,X,K,q,G,se,$)=>{let g,x;const{props:R,shapeFlag:N,transition:B,dirs:O}=T;if(g=T.el=o(T.type,G,R&&R.is,R),N&8?u(g,T.children):N&16&&U(T.children,g,null,K,q,vo(T,G),se,$),O&&di(T,null,K,"created"),w(g,T,T.scopeId,se,K),R){for(const oe in R)oe!=="value"&&!Dr(oe)&&s(g,oe,null,R[oe],G,K);"value"in R&&s(g,"value",null,R.value,G),(x=R.onVnodeBeforeMount)&&dn(x,K,T)}O&&di(T,null,K,"beforeMount");const le=Pd(q,B);le&&B.beforeEnter(g),i(g,_,X),((x=R&&R.onVnodeMounted)||le||O)&&qt(()=>{x&&dn(x,K,T),le&&B.enter(g),O&&di(T,null,K,"mounted")},q)},w=(T,_,X,K,q)=>{if(X&&p(T,X),K)for(let G=0;G<K.length;G++)p(T,K[G]);if(q){let G=q.subTree;if(_===G||pf(G.type)&&(G.ssContent===_||G.ssFallback===_)){const se=q.vnode;w(T,se,se.scopeId,se.slotScopeIds,q.parent)}}},U=(T,_,X,K,q,G,se,$,g=0)=>{for(let x=g;x<T.length;x++){const R=T[x]=$?Jn(T[x]):mn(T[x]);S(null,R,_,X,K,q,G,se,$)}},E=(T,_,X,K,q,G,se)=>{const $=_.el=T.el;let{patchFlag:g,dynamicChildren:x,dirs:R}=_;g|=T.patchFlag&16;const N=T.props||ct,B=_.props||ct;let O;if(X&&pi(X,!1),(O=B.onVnodeBeforeUpdate)&&dn(O,X,_,T),R&&di(_,T,X,"beforeUpdate"),X&&pi(X,!0),(N.innerHTML&&B.innerHTML==null||N.textContent&&B.textContent==null)&&u($,""),x?M(T.dynamicChildren,x,$,X,K,vo(_,q),G):se||V(T,_,$,null,X,K,vo(_,q),G,!1),g>0){if(g&16)C($,N,B,X,q);else if(g&2&&N.class!==B.class&&s($,"class",null,B.class,q),g&4&&s($,"style",N.style,B.style,q),g&8){const le=_.dynamicProps;for(let oe=0;oe<le.length;oe++){const ae=le[oe],Le=N[ae],ie=B[ae];(ie!==Le||ae==="value")&&s($,ae,Le,ie,q,X)}}g&1&&T.children!==_.children&&u($,_.children)}else!se&&x==null&&C($,N,B,X,q);((O=B.onVnodeUpdated)||R)&&qt(()=>{O&&dn(O,X,_,T),R&&di(_,T,X,"updated")},K)},M=(T,_,X,K,q,G,se)=>{for(let $=0;$<_.length;$++){const g=T[$],x=_[$],R=g.el&&(g.type===ln||!Sr(g,x)||g.shapeFlag&70)?f(g.el):X;S(g,x,R,null,K,q,G,se,!0)}},C=(T,_,X,K,q)=>{if(_!==X){if(_!==ct)for(const G in _)!Dr(G)&&!(G in X)&&s(T,G,_[G],null,q,K);for(const G in X){if(Dr(G))continue;const se=X[G],$=_[G];se!==$&&G!=="value"&&s(T,G,$,se,q,K)}"value"in X&&s(T,"value",_.value,X.value,q)}},Q=(T,_,X,K,q,G,se,$,g)=>{const x=_.el=T?T.el:a(""),R=_.anchor=T?T.anchor:a("");let{patchFlag:N,dynamicChildren:B,slotScopeIds:O}=_;O&&($=$?$.concat(O):O),T==null?(i(x,X,K),i(R,X,K),U(_.children||[],X,R,q,G,se,$,g)):N>0&&N&64&&B&&T.dynamicChildren?(M(T.dynamicChildren,B,X,q,G,se,$),(_.key!=null||q&&_===q.subTree)&&cf(T,_,!0)):V(T,_,X,R,q,G,se,$,g)},Y=(T,_,X,K,q,G,se,$,g)=>{_.slotScopeIds=$,T==null?_.shapeFlag&512?q.ctx.activate(_,X,K,se,g):ne(_,X,K,q,G,se,g):re(T,_,g)},ne=(T,_,X,K,q,G,se)=>{const $=T.component=Zd(T,K,q);if(qu(T)&&($.ctx.renderer=Fe),Jd($,!1,se),$.asyncDep){if(q&&q.registerDep($,Z,se),!T.el){const g=$.subTree=En(Pi);h(null,g,_,X)}}else Z($,T,_,X,q,G,se)},re=(T,_,X)=>{const K=_.component=T.component;if(Hd(T,_,X))if(K.asyncDep&&!K.asyncResolved){J(K,_,X);return}else K.next=_,K.update();else _.el=T.el,K.vnode=_},Z=(T,_,X,K,q,G,se)=>{const $=()=>{if(T.isMounted){let{next:N,bu:B,u:O,parent:le,vnode:oe}=T;{const Ee=uf(T);if(Ee){N&&(N.el=oe.el,J(T,N,se)),Ee.asyncDep.then(()=>{T.isUnmounted||$()});return}}let ae=N,Le;pi(T,!1),N?(N.el=oe.el,J(T,N,se)):N=oe,B&&ho(B),(Le=N.props&&N.props.onVnodeBeforeUpdate)&&dn(Le,le,N,oe),pi(T,!0);const ie=zo(T),de=T.subTree;T.subTree=ie,S(de,ie,f(de.el),he(de),T,q,G),N.el=ie.el,ae===null&&Vd(T,ie.el),O&&qt(O,q),(Le=N.props&&N.props.onVnodeUpdated)&&qt(()=>dn(Le,le,N,oe),q)}else{let N;const{el:B,props:O}=_,{bm:le,m:oe,parent:ae,root:Le,type:ie}=T,de=Nr(_);if(pi(T,!1),le&&ho(le),!de&&(N=O&&O.onVnodeBeforeMount)&&dn(N,ae,_),pi(T,!0),B&&ke){const Ee=()=>{T.subTree=zo(T),ke(B,T.subTree,T,q,null)};de&&ie.__asyncHydrate?ie.__asyncHydrate(B,T,Ee):Ee()}else{Le.ce&&Le.ce._injectChildStyle(ie);const Ee=T.subTree=zo(T);S(null,Ee,X,K,T,q,G),_.el=Ee.el}if(oe&&qt(oe,q),!de&&(N=O&&O.onVnodeMounted)){const Ee=_;qt(()=>dn(N,ae,Ee),q)}(_.shapeFlag&256||ae&&Nr(ae.vnode)&&ae.vnode.shapeFlag&256)&&T.a&&qt(T.a,q),T.isMounted=!0,_=X=K=null}};T.scope.on();const g=T.effect=new yu($);T.scope.off();const x=T.update=g.run.bind(g),R=T.job=g.runIfDirty.bind(g);R.i=T,R.id=T.uid,g.scheduler=()=>xl(R),pi(T,!0),x()},J=(T,_,X)=>{_.component=T;const K=T.vnode.props;T.vnode=_,T.next=null,yd(T,_.props,K,X),wd(T,_.children,X),ci(),Gl(T),ui()},V=(T,_,X,K,q,G,se,$,g=!1)=>{const x=T&&T.children,R=T?T.shapeFlag:0,N=_.children,{patchFlag:B,shapeFlag:O}=_;if(B>0){if(B&128){ge(x,N,X,K,q,G,se,$,g);return}else if(B&256){fe(x,N,X,K,q,G,se,$,g);return}}O&8?(R&16&&Se(x,q,G),N!==x&&u(X,N)):R&16?O&16?ge(x,N,X,K,q,G,se,$,g):Se(x,q,G,!0):(R&8&&u(X,""),O&16&&U(N,X,K,q,G,se,$,g))},fe=(T,_,X,K,q,G,se,$,g)=>{T=T||tr,_=_||tr;const x=T.length,R=_.length,N=Math.min(x,R);let B;for(B=0;B<N;B++){const O=_[B]=g?Jn(_[B]):mn(_[B]);S(T[B],O,X,null,q,G,se,$,g)}x>R?Se(T,q,G,!0,!1,N):U(_,X,K,q,G,se,$,g,N)},ge=(T,_,X,K,q,G,se,$,g)=>{let x=0;const R=_.length;let N=T.length-1,B=R-1;for(;x<=N&&x<=B;){const O=T[x],le=_[x]=g?Jn(_[x]):mn(_[x]);if(Sr(O,le))S(O,le,X,null,q,G,se,$,g);else break;x++}for(;x<=N&&x<=B;){const O=T[N],le=_[B]=g?Jn(_[B]):mn(_[B]);if(Sr(O,le))S(O,le,X,null,q,G,se,$,g);else break;N--,B--}if(x>N){if(x<=B){const O=B+1,le=O<R?_[O].el:K;for(;x<=B;)S(null,_[x]=g?Jn(_[x]):mn(_[x]),X,le,q,G,se,$,g),x++}}else if(x>B)for(;x<=N;)Pe(T[x],q,G,!0),x++;else{const O=x,le=x,oe=new Map;for(x=le;x<=B;x++){const De=_[x]=g?Jn(_[x]):mn(_[x]);De.key!=null&&oe.set(De.key,x)}let ae,Le=0;const ie=B-le+1;let de=!1,Ee=0;const we=new Array(ie);for(x=0;x<ie;x++)we[x]=0;for(x=O;x<=N;x++){const De=T[x];if(Le>=ie){Pe(De,q,G,!0);continue}let Re;if(De.key!=null)Re=oe.get(De.key);else for(ae=le;ae<=B;ae++)if(we[ae-le]===0&&Sr(De,_[ae])){Re=ae;break}Re===void 0?Pe(De,q,G,!0):(we[Re-le]=x+1,Re>=Ee?Ee=Re:de=!0,S(De,_[Re],X,null,q,G,se,$,g),Le++)}const ze=de?Dd(we):tr;for(ae=ze.length-1,x=ie-1;x>=0;x--){const De=le+x,Re=_[De],tt=De+1<R?_[De+1].el:K;we[x]===0?S(null,Re,X,tt,q,G,se,$,g):de&&(ae<0||x!==ze[ae]?ye(Re,X,tt,2):ae--)}}},ye=(T,_,X,K,q=null)=>{const{el:G,type:se,transition:$,children:g,shapeFlag:x}=T;if(x&6){ye(T.component.subTree,_,X,K);return}if(x&128){T.suspense.move(_,X,K);return}if(x&64){se.move(T,_,X,Fe);return}if(se===ln){i(G,_,X);for(let N=0;N<g.length;N++)ye(g[N],_,X,K);i(T.anchor,_,X);return}if(se===bs){b(T,_,X);return}if(K!==2&&x&1&&$)if(K===0)$.beforeEnter(G),i(G,_,X),qt(()=>$.enter(G),q);else{const{leave:N,delayLeave:B,afterLeave:O}=$,le=()=>i(G,_,X),oe=()=>{N(G,()=>{le(),O&&O()})};B?B(G,le,oe):oe()}else i(G,_,X)},Pe=(T,_,X,K=!1,q=!1)=>{const{type:G,props:se,ref:$,children:g,dynamicChildren:x,shapeFlag:R,patchFlag:N,dirs:B,cacheIndex:O}=T;if(N===-2&&(q=!1),$!=null&&Hs($,null,X,T,!0),O!=null&&(_.renderCache[O]=void 0),R&256){_.ctx.deactivate(T);return}const le=R&1&&B,oe=!Nr(T);let ae;if(oe&&(ae=se&&se.onVnodeBeforeUnmount)&&dn(ae,_,T),R&6)ue(T.component,X,K);else{if(R&128){T.suspense.unmount(X,K);return}le&&di(T,null,_,"beforeUnmount"),R&64?T.type.remove(T,_,X,Fe,K):x&&!x.hasOnce&&(G!==ln||N>0&&N&64)?Se(x,_,X,!1,!0):(G===ln&&N&384||!q&&R&16)&&Se(g,_,X),K&&je(T)}(oe&&(ae=se&&se.onVnodeUnmounted)||le)&&qt(()=>{ae&&dn(ae,_,T),le&&di(T,null,_,"unmounted")},X)},je=T=>{const{type:_,el:X,anchor:K,transition:q}=T;if(_===ln){ee(X,K);return}if(_===bs){y(T);return}const G=()=>{r(X),q&&!q.persisted&&q.afterLeave&&q.afterLeave()};if(T.shapeFlag&1&&q&&!q.persisted){const{leave:se,delayLeave:$}=q,g=()=>se(X,G);$?$(T.el,G,g):g()}else G()},ee=(T,_)=>{let X;for(;T!==_;)X=d(T),r(T),T=X;r(_)},ue=(T,_,X)=>{const{bum:K,scope:q,job:G,subTree:se,um:$,m:g,a:x}=T;$l(g),$l(x),K&&ho(K),q.stop(),G&&(G.flags|=8,Pe(se,T,_,X)),$&&qt($,_),qt(()=>{T.isUnmounted=!0},_),_&&_.pendingBranch&&!_.isUnmounted&&T.asyncDep&&!T.asyncResolved&&T.suspenseId===_.pendingId&&(_.deps--,_.deps===0&&_.resolve())},Se=(T,_,X,K=!1,q=!1,G=0)=>{for(let se=G;se<T.length;se++)Pe(T[se],_,X,K,q)},he=T=>{if(T.shapeFlag&6)return he(T.component.subTree);if(T.shapeFlag&128)return T.suspense.next();const _=d(T.anchor||T.el),X=_&&_[ed];return X?d(X):_};let Ae=!1;const Ie=(T,_,X)=>{T==null?_._vnode&&Pe(_._vnode,null,null,!0):S(_._vnode||null,T,_,null,null,null,X),_._vnode=T,Ae||(Ae=!0,Gl(),Gu(),Ae=!1)},Fe={p:S,um:Pe,m:ye,r:je,mt:ne,mc:U,pc:V,pbc:M,n:he,o:n};let at,ke;return{render:Ie,hydrate:at,createApp:Md(Ie,at)}}function vo({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function pi({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function Pd(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function cf(n,e,t=!1){const i=n.children,r=e.children;if(Oe(i)&&Oe(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=Jn(r[s]),a.el=o.el),!t&&a.patchFlag!==-2&&cf(o,a)),a.type===io&&(a.el=o.el)}}function Dd(n){const e=n.slice(),t=[0];let i,r,s,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=t[t.length-1],n[r]<c){e[i]=r,t.push(i);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,n[t[a]]<c?s=a+1:o=a;c<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}function uf(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:uf(e)}function $l(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}const Ld=Symbol.for("v-scx"),Id=()=>ys(Ld);function Ts(n,e,t){return ff(n,e,t)}function ff(n,e,t=ct){const{immediate:i,deep:r,flush:s,once:o}=t,a=St({},t),l=e&&i||!e&&s!=="post";let c;if(kr){if(s==="sync"){const p=Id();c=p.__watcherHandles||(p.__watcherHandles=[])}else if(!l){const p=()=>{};return p.stop=Sn,p.resume=Sn,p.pause=Sn,p}}const u=Nt;a.call=(p,v,S)=>Tn(p,u,v,S);let f=!1;s==="post"?a.scheduler=p=>{qt(p,u&&u.suspense)}:s!=="sync"&&(f=!0,a.scheduler=(p,v)=>{v?p():xl(p)}),a.augmentJob=p=>{e&&(p.flags|=4),f&&(p.flags|=2,u&&(p.id=u.uid,p.i=u))};const d=$h(n,e,a);return kr&&(c?c.push(d):l&&d()),d}function Ud(n,e,t){const i=this.proxy,r=_t(n)?n.includes(".")?hf(i,n):()=>i[n]:n.bind(i,i);let s;Ve(e)?s=e:(s=e.handler,t=e);const o=qr(this),a=ff(r,s.bind(i),t);return o(),a}function hf(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}const Nd=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${ri(e)}Modifiers`]||n[`${Ii(e)}Modifiers`];function Fd(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||ct;let r=t;const s=e.startsWith("update:"),o=s&&Nd(i,e.slice(7));o&&(o.trim&&(r=t.map(u=>_t(u)?u.trim():u)),o.number&&(r=t.map(dh)));let a,l=i[a=fo(e)]||i[a=fo(ri(e))];!l&&s&&(l=i[a=fo(Ii(e))]),l&&Tn(l,n,6,r);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,Tn(c,n,6,r)}}function df(n,e,t=!1){const i=e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let o={},a=!1;if(!Ve(n)){const l=c=>{const u=df(c,e,!0);u&&(a=!0,St(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!a?(ht(n)&&i.set(n,null),null):(Oe(s)?s.forEach(l=>o[l]=null):St(o,s),ht(n)&&i.set(n,o),o)}function no(n,e){return!n||!qs(e)?!1:(e=e.slice(2).replace(/Once$/,""),et(n,e[0].toLowerCase()+e.slice(1))||et(n,Ii(e))||et(n,e))}function zo(n){const{type:e,vnode:t,proxy:i,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:f,data:d,setupState:p,ctx:v,inheritAttrs:S}=n,m=Bs(n);let h,A;try{if(t.shapeFlag&4){const y=r||i,L=y;h=mn(c.call(L,y,u,f,p,d,v)),A=a}else{const y=e;h=mn(y.length>1?y(f,{attrs:a,slots:o,emit:l}):y(f,null)),A=e.props?a:Od(a)}}catch(y){Or.length=0,Qs(y,n,1),h=En(Pi)}let b=h;if(A&&S!==!1){const y=Object.keys(A),{shapeFlag:L}=b;y.length&&L&7&&(s&&y.some(rl)&&(A=Bd(A,s)),b=cr(b,A,!1,!0))}return t.dirs&&(b=cr(b,null,!1,!0),b.dirs=b.dirs?b.dirs.concat(t.dirs):t.dirs),t.transition&&ml(b,t.transition),h=b,Bs(m),h}const Od=n=>{let e;for(const t in n)(t==="class"||t==="style"||qs(t))&&((e||(e={}))[t]=n[t]);return e},Bd=(n,e)=>{const t={};for(const i in n)(!rl(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function Hd(n,e,t){const{props:i,children:r,component:s}=n,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?Kl(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const d=u[f];if(o[d]!==i[d]&&!no(c,d))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Kl(i,o,c):!0:!!o;return!1}function Kl(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==n[s]&&!no(t,s))return!0}return!1}function Vd({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const pf=n=>n.__isSuspense;function Gd(n,e){e&&e.pendingBranch?Oe(n)?e.effects.push(...n):e.effects.push(n):Jh(n)}const ln=Symbol.for("v-fgt"),io=Symbol.for("v-txt"),Pi=Symbol.for("v-cmt"),bs=Symbol.for("v-stc"),Or=[];let Kt=null;function gt(n=!1){Or.push(Kt=n?null:[])}function kd(){Or.pop(),Kt=Or[Or.length-1]||null}let Gr=1;function jl(n,e=!1){Gr+=n,n<0&&Kt&&e&&(Kt.hasOnce=!0)}function xf(n){return n.dynamicChildren=Gr>0?Kt||tr:null,kd(),Gr>0&&Kt&&Kt.push(n),n}function It(n,e,t,i,r,s){return xf(it(n,e,t,i,r,s,!0))}function As(n,e,t,i,r){return xf(En(n,e,t,i,r,!0))}function mf(n){return n?n.__v_isVNode===!0:!1}function Sr(n,e){return n.type===e.type&&n.key===e.key}const _f=({key:n})=>n??null,ws=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?_t(n)||Ct(n)||Ve(n)?{i:vn,r:n,k:e,f:!!t}:n:null);function it(n,e=null,t=null,i=0,r=null,s=n===ln?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&_f(e),ref:e&&ws(e),scopeId:Wu,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:vn};return a?(vl(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=_t(t)?8:16),Gr>0&&!o&&Kt&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&Kt.push(l),l}const En=Wd;function Wd(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===dd)&&(n=Pi),mf(n)){const a=cr(n,e,!0);return t&&vl(a,t),Gr>0&&!s&&Kt&&(a.shapeFlag&6?Kt[Kt.indexOf(n)]=a:Kt.push(a)),a.patchFlag=-2,a}if(np(n)&&(n=n.__vccOpts),e){e=Xd(e);let{class:a,style:l}=e;a&&!_t(a)&&(e.class=al(a)),ht(l)&&(pl(l)&&!Oe(l)&&(l=St({},l)),e.style=js(l))}const o=_t(n)?1:pf(n)?128:td(n)?64:ht(n)?4:Ve(n)?2:0;return it(n,e,t,i,r,o,s,!0)}function Xd(n){return n?pl(n)||tf(n)?St({},n):n:null}function cr(n,e,t=!1,i=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:l}=n,c=e?$d(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&_f(c),ref:e&&e.ref?t&&s?Oe(s)?s.concat(ws(e)):[s,ws(e)]:ws(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==ln?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&cr(n.ssContent),ssFallback:n.ssFallback&&cr(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&ml(u,l.clone(u)),u}function qd(n=" ",e=0){return En(io,null,n,e)}function Yd(n,e){const t=En(bs,null,n);return t.staticCount=e,t}function xn(n="",e=!1){return e?(gt(),As(Pi,null,n)):En(Pi,null,n)}function mn(n){return n==null||typeof n=="boolean"?En(Pi):Oe(n)?En(ln,null,n.slice()):mf(n)?Jn(n):En(io,null,String(n))}function Jn(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:cr(n)}function vl(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Oe(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),vl(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!tf(e)?e._ctx=vn:r===3&&vn&&(vn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else Ve(e)?(e={default:e,_ctx:vn},t=32):(e=String(e),i&64?(t=16,e=[qd(e)]):t=8);n.children=e,n.shapeFlag|=t}function $d(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=al([e.class,i.class]));else if(r==="style")e.style=js([e.style,i.style]);else if(qs(r)){const s=e[r],o=i[r];o&&s!==o&&!(Oe(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=i[r])}return e}function dn(n,e,t,i=null){Tn(n,e,7,[t,i])}const Kd=Ju();let jd=0;function Zd(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||Kd,s={uid:jd++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new zh(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:rf(i,r),emitsOptions:df(i,r),emit:null,emitted:null,propsDefaults:ct,inheritAttrs:i.inheritAttrs,ctx:ct,data:ct,props:ct,attrs:ct,slots:ct,refs:ct,setupState:ct,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=Fd.bind(null,s),n.ce&&n.ce(s),s}let Nt=null,Gs,ha;{const n=Ks(),e=(t,i)=>{let r;return(r=n[t])||(r=n[t]=[]),r.push(i),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};Gs=e("__VUE_INSTANCE_SETTERS__",t=>Nt=t),ha=e("__VUE_SSR_SETTERS__",t=>kr=t)}const qr=n=>{const e=Nt;return Gs(n),n.scope.on(),()=>{n.scope.off(),Gs(e)}},Zl=()=>{Nt&&Nt.scope.off(),Gs(null)};function gf(n){return n.vnode.shapeFlag&4}let kr=!1;function Jd(n,e=!1,t=!1){e&&ha(e);const{props:i,children:r}=n.vnode,s=gf(n);Ed(n,i,s,e),Ad(n,r,t);const o=s?Qd(n,e):void 0;return e&&ha(!1),o}function Qd(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,pd);const{setup:i}=t;if(i){ci();const r=n.setupContext=i.length>1?tp(n):null,s=qr(n),o=Xr(i,n,0,[n.props,r]),a=mu(o);if(ui(),s(),(a||n.sp)&&!Nr(n)&&Xu(n),a){if(o.then(Zl,Zl),e)return o.then(l=>{Jl(n,l,e)}).catch(l=>{Qs(l,n,0)});n.asyncDep=o}else Jl(n,o,e)}else vf(n,e)}function Jl(n,e,t){Ve(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:ht(e)&&(n.setupState=Bu(e)),vf(n,t)}let Ql;function vf(n,e,t){const i=n.type;if(!n.render){if(!e&&Ql&&!i.render){const r=i.template||_l(n).template;if(r){const{isCustomElement:s,compilerOptions:o}=n.appContext.config,{delimiters:a,compilerOptions:l}=i,c=St(St({isCustomElement:s,delimiters:a},o),l);i.render=Ql(r,c)}}n.render=i.render||Sn}{const r=qr(n);ci();try{xd(n)}finally{ui(),r()}}}const ep={get(n,e){return wt(n,"get",""),n[e]}};function tp(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,ep),slots:n.slots,emit:n.emit,expose:e}}function zl(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Bu(Vh(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Fr)return Fr[t](n)},has(e,t){return t in e||t in Fr}})):n.proxy}function np(n){return Ve(n)&&"__vccOpts"in n}const ip=(n,e)=>qh(n,e,kr),rp="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let da;const ec=typeof window<"u"&&window.trustedTypes;if(ec)try{da=ec.createPolicy("vue",{createHTML:n=>n})}catch{}const zf=da?n=>da.createHTML(n):n=>n,sp="http://www.w3.org/2000/svg",op="http://www.w3.org/1998/Math/MathML",Un=typeof document<"u"?document:null,tc=Un&&Un.createElement("template"),ap={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e==="svg"?Un.createElementNS(sp,n):e==="mathml"?Un.createElementNS(op,n):t?Un.createElement(n,{is:t}):Un.createElement(n);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>Un.createTextNode(n),createComment:n=>Un.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Un.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const o=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{tc.innerHTML=zf(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=tc.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},lp=Symbol("_vtc");function cp(n,e,t){const i=n[lp];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const nc=Symbol("_vod"),up=Symbol("_vsh"),fp=Symbol(""),hp=/(^|;)\s*display\s*:/;function dp(n,e,t){const i=n.style,r=_t(t);let s=!1;if(t&&!r){if(e)if(_t(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&Rs(i,a,"")}else for(const o in e)t[o]==null&&Rs(i,o,"");for(const o in t)o==="display"&&(s=!0),Rs(i,o,t[o])}else if(r){if(e!==t){const o=i[fp];o&&(t+=";"+o),i.cssText=t,s=hp.test(t)}}else e&&n.removeAttribute("style");nc in n&&(n[nc]=s?i.display:"",n[up]&&(i.display="none"))}const ic=/\s*!important$/;function Rs(n,e,t){if(Oe(t))t.forEach(i=>Rs(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=pp(n,e);ic.test(t)?n.setProperty(Ii(i),t.replace(ic,""),"important"):n[i]=t}}const rc=["Webkit","Moz","ms"],Mo={};function pp(n,e){const t=Mo[e];if(t)return t;let i=ri(e);if(i!=="filter"&&i in n)return Mo[e]=i;i=vu(i);for(let r=0;r<rc.length;r++){const s=rc[r]+i;if(s in n)return Mo[e]=s}return e}const sc="http://www.w3.org/1999/xlink";function oc(n,e,t,i,r,s=vh(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(sc,e.slice(6,e.length)):n.setAttributeNS(sc,e,t):t==null||s&&!Mu(t)?n.removeAttribute(e):n.setAttribute(e,s?"":li(t)?String(t):t)}function ac(n,e,t,i,r){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?zf(t):t);return}const s=n.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=Mu(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(r||e)}function xp(n,e,t,i){n.addEventListener(e,t,i)}function mp(n,e,t,i){n.removeEventListener(e,t,i)}const lc=Symbol("_vei");function _p(n,e,t,i,r=null){const s=n[lc]||(n[lc]={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=gp(e);if(i){const c=s[e]=Mp(i,r);xp(n,a,c,l)}else o&&(mp(n,a,o,l),s[e]=void 0)}}const cc=/(?:Once|Passive|Capture)$/;function gp(n){let e;if(cc.test(n)){e={};let i;for(;i=n.match(cc);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Ii(n.slice(2)),e]}let So=0;const vp=Promise.resolve(),zp=()=>So||(vp.then(()=>So=0),So=Date.now());function Mp(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;Tn(Sp(i,t.value),e,5,[i])};return t.value=n,t.attached=zp(),t}function Sp(n,e){if(Oe(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const uc=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,Ep=(n,e,t,i,r,s)=>{const o=r==="svg";e==="class"?cp(n,i,o):e==="style"?dp(n,t,i):qs(e)?rl(e)||_p(n,e,t,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):yp(n,e,i,o))?(ac(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&oc(n,e,i,o,s,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!_t(i))?ac(n,ri(e),i,s,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),oc(n,e,i,o))};function yp(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&uc(e)&&Ve(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return uc(e)&&_t(t)?!1:e in n}const Tp=["ctrl","shift","alt","meta"],bp={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>Tp.some(t=>n[`${t}Key`]&&!e.includes(t))},Wn=(n,e)=>{const t=n._withMods||(n._withMods={}),i=e.join(".");return t[i]||(t[i]=(r,...s)=>{for(let o=0;o<e.length;o++){const a=bp[e[o]];if(a&&a(r,e))return}return n(r,...s)})},Ap=St({patchProp:Ep},ap);let fc;function wp(){return fc||(fc=Rd(Ap))}const Rp=(...n)=>{const e=wp().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=Pp(i);if(!r)return;const s=e._component;!Ve(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=t(r,!1,Cp(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function Cp(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function Pp(n){return _t(n)?document.querySelector(n):n}const Dp="/labyrinthe/assets/cmd-mhC-JnsN.png";/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ml="171",Lp=0,hc=1,Ip=2,Mf=1,Up=2,In=3,si=0,Ht=1,Fn=2,ni=0,or=1,dc=2,pc=3,xc=4,Np=5,yi=100,Fp=101,Op=102,Bp=103,Hp=104,Vp=200,Gp=201,kp=202,Wp=203,pa=204,xa=205,Xp=206,qp=207,Yp=208,$p=209,Kp=210,jp=211,Zp=212,Jp=213,Qp=214,ma=0,_a=1,ga=2,ur=3,va=4,za=5,Ma=6,Sa=7,Sl=0,ex=1,tx=2,ii=0,nx=1,ix=2,rx=3,sx=4,ox=5,ax=6,lx=7,Sf=300,fr=301,hr=302,Ea=303,ya=304,ro=306,Ta=1e3,bi=1001,ba=1002,hn=1003,cx=1004,ns=1005,zn=1006,Eo=1007,Ai=1008,Vn=1009,Ef=1010,yf=1011,Wr=1012,El=1013,Di=1014,On=1015,Yr=1016,yl=1017,Tl=1018,dr=1020,Tf=35902,bf=1021,Af=1022,un=1023,wf=1024,Rf=1025,ar=1026,pr=1027,Cf=1028,bl=1029,Pf=1030,Al=1031,wl=1033,Cs=33776,Ps=33777,Ds=33778,Ls=33779,Aa=35840,wa=35841,Ra=35842,Ca=35843,Pa=36196,Da=37492,La=37496,Ia=37808,Ua=37809,Na=37810,Fa=37811,Oa=37812,Ba=37813,Ha=37814,Va=37815,Ga=37816,ka=37817,Wa=37818,Xa=37819,qa=37820,Ya=37821,Is=36492,$a=36494,Ka=36495,Df=36283,ja=36284,Za=36285,Ja=36286,ux=3200,fx=3201,Lf=0,hx=1,ei="",Qt="srgb",xr="srgb-linear",ks="linear",rt="srgb",Oi=7680,mc=519,dx=512,px=513,xx=514,If=515,mx=516,_x=517,gx=518,vx=519,_c=35044,gc="300 es",Bn=2e3,Ws=2001;class _r{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],yo=Math.PI/180,Qa=180/Math.PI;function $r(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(bt[n&255]+bt[n>>8&255]+bt[n>>16&255]+bt[n>>24&255]+"-"+bt[e&255]+bt[e>>8&255]+"-"+bt[e>>16&15|64]+bt[e>>24&255]+"-"+bt[t&63|128]+bt[t>>8&255]+"-"+bt[t>>16&255]+bt[t>>24&255]+bt[i&255]+bt[i>>8&255]+bt[i>>16&255]+bt[i>>24&255]).toLowerCase()}function We(n,e,t){return Math.max(e,Math.min(t,n))}function zx(n,e){return(n%e+e)%e}function To(n,e,t){return(1-t)*n+t*e}function Er(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ot(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Ke{constructor(e=0,t=0){Ke.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(We(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(We(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class He{constructor(e,t,i,r,s,o,a,l,c){He.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],d=i[2],p=i[5],v=i[8],S=r[0],m=r[3],h=r[6],A=r[1],b=r[4],y=r[7],L=r[2],P=r[5],w=r[8];return s[0]=o*S+a*A+l*L,s[3]=o*m+a*b+l*P,s[6]=o*h+a*y+l*w,s[1]=c*S+u*A+f*L,s[4]=c*m+u*b+f*P,s[7]=c*h+u*y+f*w,s[2]=d*S+p*A+v*L,s[5]=d*m+p*b+v*P,s[8]=d*h+p*y+v*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,d=a*l-u*s,p=c*s-o*l,v=t*f+i*d+r*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/v;return e[0]=f*S,e[1]=(r*c-u*i)*S,e[2]=(a*i-r*o)*S,e[3]=d*S,e[4]=(u*t-r*l)*S,e[5]=(r*s-a*t)*S,e[6]=p*S,e[7]=(i*l-c*t)*S,e[8]=(o*t-i*s)*S,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(bo.makeScale(e,t)),this}rotate(e){return this.premultiply(bo.makeRotation(-e)),this}translate(e,t){return this.premultiply(bo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const bo=new He;function Uf(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Xs(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Mx(){const n=Xs("canvas");return n.style.display="block",n}const vc={};function Qi(n){n in vc||(vc[n]=!0,console.warn(n))}function Sx(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function Ex(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function yx(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const zc=new He().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Mc=new He().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Tx(){const n={enabled:!0,workingColorSpace:xr,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===rt&&(r.r=Hn(r.r),r.g=Hn(r.g),r.b=Hn(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===rt&&(r.r=lr(r.r),r.g=lr(r.g),r.b=lr(r.b))),r},fromWorkingColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},toWorkingColorSpace:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ei?ks:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[xr]:{primaries:e,whitePoint:i,transfer:ks,toXYZ:zc,fromXYZ:Mc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Qt},outputColorSpaceConfig:{drawingBufferColorSpace:Qt}},[Qt]:{primaries:e,whitePoint:i,transfer:rt,toXYZ:zc,fromXYZ:Mc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Qt}}}),n}const Ye=Tx();function Hn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function lr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Bi;class bx{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Bi===void 0&&(Bi=Xs("canvas")),Bi.width=e.width,Bi.height=e.height;const i=Bi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Bi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Xs("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Hn(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Hn(t[i]/255)*255):t[i]=Hn(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Ax=0;class Nf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ax++}),this.uuid=$r(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Ao(r[o].image)):s.push(Ao(r[o]))}else s=Ao(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Ao(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?bx.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let wx=0;class Vt extends _r{constructor(e=Vt.DEFAULT_IMAGE,t=Vt.DEFAULT_MAPPING,i=bi,r=bi,s=zn,o=Ai,a=un,l=Vn,c=Vt.DEFAULT_ANISOTROPY,u=ei){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:wx++}),this.uuid=$r(),this.name="",this.source=new Nf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ke(0,0),this.repeat=new Ke(1,1),this.center=new Ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Sf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ta:e.x=e.x-Math.floor(e.x);break;case bi:e.x=e.x<0?0:1;break;case ba:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ta:e.y=e.y-Math.floor(e.y);break;case bi:e.y=e.y<0?0:1;break;case ba:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Vt.DEFAULT_IMAGE=null;Vt.DEFAULT_MAPPING=Sf;Vt.DEFAULT_ANISOTROPY=1;class st{constructor(e=0,t=0,i=0,r=1){st.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],p=l[5],v=l[9],S=l[2],m=l[6],h=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-S)<.01&&Math.abs(v-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+S)<.1&&Math.abs(v+m)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(c+1)/2,y=(p+1)/2,L=(h+1)/2,P=(u+d)/4,w=(f+S)/4,U=(v+m)/4;return b>y&&b>L?b<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(b),r=P/i,s=w/i):y>L?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=P/r,s=U/r):L<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(L),i=w/s,r=U/s),this.set(i,r,s,t),this}let A=Math.sqrt((m-v)*(m-v)+(f-S)*(f-S)+(d-u)*(d-u));return Math.abs(A)<.001&&(A=1),this.x=(m-v)/A,this.y=(f-S)/A,this.z=(d-u)/A,this.w=Math.acos((c+p+h-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this.z=We(this.z,e.z,t.z),this.w=We(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this.z=We(this.z,e,t),this.w=We(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(We(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Rx extends _r{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new st(0,0,e,t),this.scissorTest=!1,this.viewport=new st(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Vt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Nf(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Li extends Rx{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Ff extends Vt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=hn,this.minFilter=hn,this.wrapR=bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Cx extends Vt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=hn,this.minFilter=hn,this.wrapR=bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Kr{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const d=s[o+0],p=s[o+1],v=s[o+2],S=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=d,e[t+1]=p,e[t+2]=v,e[t+3]=S;return}if(f!==S||l!==d||c!==p||u!==v){let m=1-a;const h=l*d+c*p+u*v+f*S,A=h>=0?1:-1,b=1-h*h;if(b>Number.EPSILON){const L=Math.sqrt(b),P=Math.atan2(L,h*A);m=Math.sin(m*P)/L,a=Math.sin(a*P)/L}const y=a*A;if(l=l*m+d*y,c=c*m+p*y,u=u*m+v*y,f=f*m+S*y,m===1-a){const L=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=L,c*=L,u*=L,f*=L}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[o],d=s[o+1],p=s[o+2],v=s[o+3];return e[t]=a*v+u*f+l*p-c*d,e[t+1]=l*v+u*d+c*f-a*p,e[t+2]=c*v+u*p+a*d-l*f,e[t+3]=u*v-a*f-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(s/2),d=l(i/2),p=l(r/2),v=l(s/2);switch(o){case"XYZ":this._x=d*u*f+c*p*v,this._y=c*p*f-d*u*v,this._z=c*u*v+d*p*f,this._w=c*u*f-d*p*v;break;case"YXZ":this._x=d*u*f+c*p*v,this._y=c*p*f-d*u*v,this._z=c*u*v-d*p*f,this._w=c*u*f+d*p*v;break;case"ZXY":this._x=d*u*f-c*p*v,this._y=c*p*f+d*u*v,this._z=c*u*v+d*p*f,this._w=c*u*f-d*p*v;break;case"ZYX":this._x=d*u*f-c*p*v,this._y=c*p*f+d*u*v,this._z=c*u*v-d*p*f,this._w=c*u*f+d*p*v;break;case"YZX":this._x=d*u*f+c*p*v,this._y=c*p*f+d*u*v,this._z=c*u*v-d*p*f,this._w=c*u*f-d*p*v;break;case"XZY":this._x=d*u*f-c*p*v,this._y=c*p*f-d*u*v,this._z=c*u*v+d*p*f,this._w=c*u*f+d*p*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],d=i+a+f;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(We(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=o*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class H{constructor(e=0,t=0,i=0){H.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Sc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Sc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*t-s*r),f=2*(s*i-o*t);return this.x=t+l*c+o*f-a*u,this.y=i+l*u+a*c-s*f,this.z=r+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this.z=We(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this.z=We(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(We(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return wo.copy(this).projectOnVector(e),this.sub(wo)}reflect(e){return this.sub(wo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(We(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const wo=new H,Sc=new Kr;class oi{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(sn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(sn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=sn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,sn):sn.fromBufferAttribute(s,o),sn.applyMatrix4(e.matrixWorld),this.expandByPoint(sn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),is.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),is.copy(i.boundingBox)),is.applyMatrix4(e.matrixWorld),this.union(is)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,sn),sn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(yr),rs.subVectors(this.max,yr),Hi.subVectors(e.a,yr),Vi.subVectors(e.b,yr),Gi.subVectors(e.c,yr),Xn.subVectors(Vi,Hi),qn.subVectors(Gi,Vi),xi.subVectors(Hi,Gi);let t=[0,-Xn.z,Xn.y,0,-qn.z,qn.y,0,-xi.z,xi.y,Xn.z,0,-Xn.x,qn.z,0,-qn.x,xi.z,0,-xi.x,-Xn.y,Xn.x,0,-qn.y,qn.x,0,-xi.y,xi.x,0];return!Ro(t,Hi,Vi,Gi,rs)||(t=[1,0,0,0,1,0,0,0,1],!Ro(t,Hi,Vi,Gi,rs))?!1:(ss.crossVectors(Xn,qn),t=[ss.x,ss.y,ss.z],Ro(t,Hi,Vi,Gi,rs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,sn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(sn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Rn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Rn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Rn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Rn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Rn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Rn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Rn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Rn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Rn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Rn=[new H,new H,new H,new H,new H,new H,new H,new H],sn=new H,is=new oi,Hi=new H,Vi=new H,Gi=new H,Xn=new H,qn=new H,xi=new H,yr=new H,rs=new H,ss=new H,mi=new H;function Ro(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){mi.fromArray(n,s);const a=r.x*Math.abs(mi.x)+r.y*Math.abs(mi.y)+r.z*Math.abs(mi.z),l=e.dot(mi),c=t.dot(mi),u=i.dot(mi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Px=new oi,Tr=new H,Co=new H;class Rl{constructor(e=new H,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Px.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Tr.subVectors(e,this.center);const t=Tr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Tr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Co.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Tr.copy(e.center).add(Co)),this.expandByPoint(Tr.copy(e.center).sub(Co))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Cn=new H,Po=new H,os=new H,Yn=new H,Do=new H,as=new H,Lo=new H;class Dx{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Cn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Cn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Cn.copy(this.origin).addScaledVector(this.direction,t),Cn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Po.copy(e).add(t).multiplyScalar(.5),os.copy(t).sub(e).normalize(),Yn.copy(this.origin).sub(Po);const s=e.distanceTo(t)*.5,o=-this.direction.dot(os),a=Yn.dot(this.direction),l=-Yn.dot(os),c=Yn.lengthSq(),u=Math.abs(1-o*o);let f,d,p,v;if(u>0)if(f=o*l-a,d=o*a-l,v=s*u,f>=0)if(d>=-v)if(d<=v){const S=1/u;f*=S,d*=S,p=f*(f+o*d+2*a)+d*(o*f+d+2*l)+c}else d=s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;else d<=-v?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+c):d<=v?(f=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+c);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Po).addScaledVector(os,d),p}intersectSphere(e,t){Cn.subVectors(e.center,this.origin);const i=Cn.dot(this.direction),r=Cn.dot(Cn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Cn)!==null}intersectTriangle(e,t,i,r,s){Do.subVectors(t,e),as.subVectors(i,e),Lo.crossVectors(Do,as);let o=this.direction.dot(Lo),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Yn.subVectors(this.origin,e);const l=a*this.direction.dot(as.crossVectors(Yn,as));if(l<0)return null;const c=a*this.direction.dot(Do.cross(Yn));if(c<0||l+c>o)return null;const u=-a*Yn.dot(Lo);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ft{constructor(e,t,i,r,s,o,a,l,c,u,f,d,p,v,S,m){ft.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,u,f,d,p,v,S,m)}set(e,t,i,r,s,o,a,l,c,u,f,d,p,v,S,m){const h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=l,h[2]=c,h[6]=u,h[10]=f,h[14]=d,h[3]=p,h[7]=v,h[11]=S,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ft().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/ki.setFromMatrixColumn(e,0).length(),s=1/ki.setFromMatrixColumn(e,1).length(),o=1/ki.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=o*u,p=o*f,v=a*u,S=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=p+v*c,t[5]=d-S*c,t[9]=-a*l,t[2]=S-d*c,t[6]=v+p*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*u,p=l*f,v=c*u,S=c*f;t[0]=d+S*a,t[4]=v*a-p,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=p*a-v,t[6]=S+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*u,p=l*f,v=c*u,S=c*f;t[0]=d-S*a,t[4]=-o*f,t[8]=v+p*a,t[1]=p+v*a,t[5]=o*u,t[9]=S-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*u,p=o*f,v=a*u,S=a*f;t[0]=l*u,t[4]=v*c-p,t[8]=d*c+S,t[1]=l*f,t[5]=S*c+d,t[9]=p*c-v,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,p=o*c,v=a*l,S=a*c;t[0]=l*u,t[4]=S-d*f,t[8]=v*f+p,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*f+v,t[10]=d-S*f}else if(e.order==="XZY"){const d=o*l,p=o*c,v=a*l,S=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=d*f+S,t[5]=o*u,t[9]=p*f-v,t[2]=v*f-p,t[6]=a*u,t[10]=S*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Lx,e,Ix)}lookAt(e,t,i){const r=this.elements;return Wt.subVectors(e,t),Wt.lengthSq()===0&&(Wt.z=1),Wt.normalize(),$n.crossVectors(i,Wt),$n.lengthSq()===0&&(Math.abs(i.z)===1?Wt.x+=1e-4:Wt.z+=1e-4,Wt.normalize(),$n.crossVectors(i,Wt)),$n.normalize(),ls.crossVectors(Wt,$n),r[0]=$n.x,r[4]=ls.x,r[8]=Wt.x,r[1]=$n.y,r[5]=ls.y,r[9]=Wt.y,r[2]=$n.z,r[6]=ls.z,r[10]=Wt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],d=i[9],p=i[13],v=i[2],S=i[6],m=i[10],h=i[14],A=i[3],b=i[7],y=i[11],L=i[15],P=r[0],w=r[4],U=r[8],E=r[12],M=r[1],C=r[5],Q=r[9],Y=r[13],ne=r[2],re=r[6],Z=r[10],J=r[14],V=r[3],fe=r[7],ge=r[11],ye=r[15];return s[0]=o*P+a*M+l*ne+c*V,s[4]=o*w+a*C+l*re+c*fe,s[8]=o*U+a*Q+l*Z+c*ge,s[12]=o*E+a*Y+l*J+c*ye,s[1]=u*P+f*M+d*ne+p*V,s[5]=u*w+f*C+d*re+p*fe,s[9]=u*U+f*Q+d*Z+p*ge,s[13]=u*E+f*Y+d*J+p*ye,s[2]=v*P+S*M+m*ne+h*V,s[6]=v*w+S*C+m*re+h*fe,s[10]=v*U+S*Q+m*Z+h*ge,s[14]=v*E+S*Y+m*J+h*ye,s[3]=A*P+b*M+y*ne+L*V,s[7]=A*w+b*C+y*re+L*fe,s[11]=A*U+b*Q+y*Z+L*ge,s[15]=A*E+b*Y+y*J+L*ye,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],p=e[14],v=e[3],S=e[7],m=e[11],h=e[15];return v*(+s*l*f-r*c*f-s*a*d+i*c*d+r*a*p-i*l*p)+S*(+t*l*p-t*c*d+s*o*d-r*o*p+r*c*u-s*l*u)+m*(+t*c*f-t*a*p-s*o*f+i*o*p+s*a*u-i*c*u)+h*(-r*a*u-t*l*f+t*a*d+r*o*f-i*o*d+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],p=e[11],v=e[12],S=e[13],m=e[14],h=e[15],A=f*m*c-S*d*c+S*l*p-a*m*p-f*l*h+a*d*h,b=v*d*c-u*m*c-v*l*p+o*m*p+u*l*h-o*d*h,y=u*S*c-v*f*c+v*a*p-o*S*p-u*a*h+o*f*h,L=v*f*l-u*S*l-v*a*d+o*S*d+u*a*m-o*f*m,P=t*A+i*b+r*y+s*L;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/P;return e[0]=A*w,e[1]=(S*d*s-f*m*s-S*r*p+i*m*p+f*r*h-i*d*h)*w,e[2]=(a*m*s-S*l*s+S*r*c-i*m*c-a*r*h+i*l*h)*w,e[3]=(f*l*s-a*d*s-f*r*c+i*d*c+a*r*p-i*l*p)*w,e[4]=b*w,e[5]=(u*m*s-v*d*s+v*r*p-t*m*p-u*r*h+t*d*h)*w,e[6]=(v*l*s-o*m*s-v*r*c+t*m*c+o*r*h-t*l*h)*w,e[7]=(o*d*s-u*l*s+u*r*c-t*d*c-o*r*p+t*l*p)*w,e[8]=y*w,e[9]=(v*f*s-u*S*s-v*i*p+t*S*p+u*i*h-t*f*h)*w,e[10]=(o*S*s-v*a*s+v*i*c-t*S*c-o*i*h+t*a*h)*w,e[11]=(u*a*s-o*f*s-u*i*c+t*f*c+o*i*p-t*a*p)*w,e[12]=L*w,e[13]=(u*S*r-v*f*r+v*i*d-t*S*d-u*i*m+t*f*m)*w,e[14]=(v*a*r-o*S*r-v*i*l+t*S*l+o*i*m-t*a*m)*w,e[15]=(o*f*r-u*a*r+u*i*l-t*f*l-o*i*d+t*a*d)*w,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,f=a+a,d=s*c,p=s*u,v=s*f,S=o*u,m=o*f,h=a*f,A=l*c,b=l*u,y=l*f,L=i.x,P=i.y,w=i.z;return r[0]=(1-(S+h))*L,r[1]=(p+y)*L,r[2]=(v-b)*L,r[3]=0,r[4]=(p-y)*P,r[5]=(1-(d+h))*P,r[6]=(m+A)*P,r[7]=0,r[8]=(v+b)*w,r[9]=(m-A)*w,r[10]=(1-(d+S))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=ki.set(r[0],r[1],r[2]).length();const o=ki.set(r[4],r[5],r[6]).length(),a=ki.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],on.copy(this);const c=1/s,u=1/o,f=1/a;return on.elements[0]*=c,on.elements[1]*=c,on.elements[2]*=c,on.elements[4]*=u,on.elements[5]*=u,on.elements[6]*=u,on.elements[8]*=f,on.elements[9]*=f,on.elements[10]*=f,t.setFromRotationMatrix(on),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=Bn){const l=this.elements,c=2*s/(t-e),u=2*s/(i-r),f=(t+e)/(t-e),d=(i+r)/(i-r);let p,v;if(a===Bn)p=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===Ws)p=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Bn){const l=this.elements,c=1/(t-e),u=1/(i-r),f=1/(o-s),d=(t+e)*c,p=(i+r)*u;let v,S;if(a===Bn)v=(o+s)*f,S=-2*f;else if(a===Ws)v=s*f,S=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=S,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const ki=new H,on=new ft,Lx=new H(0,0,0),Ix=new H(1,1,1),$n=new H,ls=new H,Wt=new H,Ec=new ft,yc=new Kr;class bn{constructor(e=0,t=0,i=0,r=bn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],d=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(We(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-We(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(We(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-We(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(We(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-We(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Ec.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ec,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return yc.setFromEuler(this),this.setFromQuaternion(yc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}bn.DEFAULT_ORDER="XYZ";class Of{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ux=0;const Tc=new H,Wi=new Kr,Pn=new ft,cs=new H,br=new H,Nx=new H,Fx=new Kr,bc=new H(1,0,0),Ac=new H(0,1,0),wc=new H(0,0,1),Rc={type:"added"},Ox={type:"removed"},Xi={type:"childadded",child:null},Io={type:"childremoved",child:null};class Gt extends _r{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ux++}),this.uuid=$r(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Gt.DEFAULT_UP.clone();const e=new H,t=new bn,i=new Kr,r=new H(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ft},normalMatrix:{value:new He}}),this.matrix=new ft,this.matrixWorld=new ft,this.matrixAutoUpdate=Gt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Of,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Wi.setFromAxisAngle(e,t),this.quaternion.multiply(Wi),this}rotateOnWorldAxis(e,t){return Wi.setFromAxisAngle(e,t),this.quaternion.premultiply(Wi),this}rotateX(e){return this.rotateOnAxis(bc,e)}rotateY(e){return this.rotateOnAxis(Ac,e)}rotateZ(e){return this.rotateOnAxis(wc,e)}translateOnAxis(e,t){return Tc.copy(e).applyQuaternion(this.quaternion),this.position.add(Tc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(bc,e)}translateY(e){return this.translateOnAxis(Ac,e)}translateZ(e){return this.translateOnAxis(wc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Pn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?cs.copy(e):cs.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),br.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pn.lookAt(br,cs,this.up):Pn.lookAt(cs,br,this.up),this.quaternion.setFromRotationMatrix(Pn),r&&(Pn.extractRotation(r.matrixWorld),Wi.setFromRotationMatrix(Pn),this.quaternion.premultiply(Wi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Rc),Xi.child=e,this.dispatchEvent(Xi),Xi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ox),Io.child=e,this.dispatchEvent(Io),Io.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Pn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Pn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Pn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Rc),Xi.child=e,this.dispatchEvent(Xi),Xi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(br,e,Nx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(br,Fx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),d=o(e.skeletons),p=o(e.animations),v=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),v.length>0&&(i.nodes=v)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Gt.DEFAULT_UP=new H(0,1,0);Gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const an=new H,Dn=new H,Uo=new H,Ln=new H,qi=new H,Yi=new H,Cc=new H,No=new H,Fo=new H,Oo=new H,Bo=new st,Ho=new st,Vo=new st;class cn{constructor(e=new H,t=new H,i=new H){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),an.subVectors(e,t),r.cross(an);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){an.subVectors(r,t),Dn.subVectors(i,t),Uo.subVectors(e,t);const o=an.dot(an),a=an.dot(Dn),l=an.dot(Uo),c=Dn.dot(Dn),u=Dn.dot(Uo),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const d=1/f,p=(c*l-a*u)*d,v=(o*u-a*l)*d;return s.set(1-p-v,v,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Ln)===null?!1:Ln.x>=0&&Ln.y>=0&&Ln.x+Ln.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Ln)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ln.x),l.addScaledVector(o,Ln.y),l.addScaledVector(a,Ln.z),l)}static getInterpolatedAttribute(e,t,i,r,s,o){return Bo.setScalar(0),Ho.setScalar(0),Vo.setScalar(0),Bo.fromBufferAttribute(e,t),Ho.fromBufferAttribute(e,i),Vo.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Bo,s.x),o.addScaledVector(Ho,s.y),o.addScaledVector(Vo,s.z),o}static isFrontFacing(e,t,i,r){return an.subVectors(i,t),Dn.subVectors(e,t),an.cross(Dn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return an.subVectors(this.c,this.b),Dn.subVectors(this.a,this.b),an.cross(Dn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return cn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return cn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return cn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return cn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return cn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;qi.subVectors(r,i),Yi.subVectors(s,i),No.subVectors(e,i);const l=qi.dot(No),c=Yi.dot(No);if(l<=0&&c<=0)return t.copy(i);Fo.subVectors(e,r);const u=qi.dot(Fo),f=Yi.dot(Fo);if(u>=0&&f<=u)return t.copy(r);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(qi,o);Oo.subVectors(e,s);const p=qi.dot(Oo),v=Yi.dot(Oo);if(v>=0&&p<=v)return t.copy(s);const S=p*c-l*v;if(S<=0&&c>=0&&v<=0)return a=c/(c-v),t.copy(i).addScaledVector(Yi,a);const m=u*v-p*f;if(m<=0&&f-u>=0&&p-v>=0)return Cc.subVectors(s,r),a=(f-u)/(f-u+(p-v)),t.copy(r).addScaledVector(Cc,a);const h=1/(m+S+d);return o=S*h,a=d*h,t.copy(i).addScaledVector(qi,o).addScaledVector(Yi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Bf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Kn={h:0,s:0,l:0},us={h:0,s:0,l:0};function Go(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class $e{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Qt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ye.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Ye.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ye.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Ye.workingColorSpace){if(e=zx(e,1),t=We(t,0,1),i=We(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Go(o,s,e+1/3),this.g=Go(o,s,e),this.b=Go(o,s,e-1/3)}return Ye.toWorkingColorSpace(this,r),this}setStyle(e,t=Qt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Qt){const i=Bf[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Hn(e.r),this.g=Hn(e.g),this.b=Hn(e.b),this}copyLinearToSRGB(e){return this.r=lr(e.r),this.g=lr(e.g),this.b=lr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Qt){return Ye.fromWorkingColorSpace(At.copy(this),e),Math.round(We(At.r*255,0,255))*65536+Math.round(We(At.g*255,0,255))*256+Math.round(We(At.b*255,0,255))}getHexString(e=Qt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ye.workingColorSpace){Ye.fromWorkingColorSpace(At.copy(this),t);const i=At.r,r=At.g,s=At.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Ye.workingColorSpace){return Ye.fromWorkingColorSpace(At.copy(this),t),e.r=At.r,e.g=At.g,e.b=At.b,e}getStyle(e=Qt){Ye.fromWorkingColorSpace(At.copy(this),e);const t=At.r,i=At.g,r=At.b;return e!==Qt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Kn),this.setHSL(Kn.h+e,Kn.s+t,Kn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Kn),e.getHSL(us);const i=To(Kn.h,us.h,t),r=To(Kn.s,us.s,t),s=To(Kn.l,us.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const At=new $e;$e.NAMES=Bf;let Bx=0;class jr extends _r{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Bx++}),this.uuid=$r(),this.name="",this.type="Material",this.blending=or,this.side=si,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=pa,this.blendDst=xa,this.blendEquation=yi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $e(0,0,0),this.blendAlpha=0,this.depthFunc=ur,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=mc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Oi,this.stencilZFail=Oi,this.stencilZPass=Oi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==or&&(i.blending=this.blending),this.side!==si&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==pa&&(i.blendSrc=this.blendSrc),this.blendDst!==xa&&(i.blendDst=this.blendDst),this.blendEquation!==yi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ur&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==mc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Oi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Oi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Oi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Hf extends jr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.combine=Sl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const mt=new H,fs=new Ke;class yn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=_c,this.updateRanges=[],this.gpuType=On,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)fs.fromBufferAttribute(this,t),fs.applyMatrix3(e),this.setXY(t,fs.x,fs.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)mt.fromBufferAttribute(this,t),mt.applyMatrix3(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)mt.fromBufferAttribute(this,t),mt.applyMatrix4(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)mt.fromBufferAttribute(this,t),mt.applyNormalMatrix(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)mt.fromBufferAttribute(this,t),mt.transformDirection(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Er(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ot(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Er(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Er(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Er(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Er(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),i=Ot(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),i=Ot(i,this.array),r=Ot(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),i=Ot(i,this.array),r=Ot(r,this.array),s=Ot(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==_c&&(e.usage=this.usage),e}}class Vf extends yn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Gf extends yn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Ri extends yn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Hx=0;const Jt=new ft,ko=new Gt,$i=new H,Xt=new oi,Ar=new oi,Mt=new H;class Ui extends _r{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Hx++}),this.uuid=$r(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Uf(e)?Gf:Vf)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new He().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Jt.makeRotationFromQuaternion(e),this.applyMatrix4(Jt),this}rotateX(e){return Jt.makeRotationX(e),this.applyMatrix4(Jt),this}rotateY(e){return Jt.makeRotationY(e),this.applyMatrix4(Jt),this}rotateZ(e){return Jt.makeRotationZ(e),this.applyMatrix4(Jt),this}translate(e,t,i){return Jt.makeTranslation(e,t,i),this.applyMatrix4(Jt),this}scale(e,t,i){return Jt.makeScale(e,t,i),this.applyMatrix4(Jt),this}lookAt(e){return ko.lookAt(e),ko.updateMatrix(),this.applyMatrix4(ko.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($i).negate(),this.translate($i.x,$i.y,$i.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ri(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new oi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Xt.setFromBufferAttribute(s),this.morphTargetsRelative?(Mt.addVectors(this.boundingBox.min,Xt.min),this.boundingBox.expandByPoint(Mt),Mt.addVectors(this.boundingBox.max,Xt.max),this.boundingBox.expandByPoint(Mt)):(this.boundingBox.expandByPoint(Xt.min),this.boundingBox.expandByPoint(Xt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Rl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(e){const i=this.boundingSphere.center;if(Xt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Ar.setFromBufferAttribute(a),this.morphTargetsRelative?(Mt.addVectors(Xt.min,Ar.min),Xt.expandByPoint(Mt),Mt.addVectors(Xt.max,Ar.max),Xt.expandByPoint(Mt)):(Xt.expandByPoint(Ar.min),Xt.expandByPoint(Ar.max))}Xt.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Mt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Mt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Mt.fromBufferAttribute(a,c),l&&($i.fromBufferAttribute(e,c),Mt.add($i)),r=Math.max(r,i.distanceToSquared(Mt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new yn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let U=0;U<i.count;U++)a[U]=new H,l[U]=new H;const c=new H,u=new H,f=new H,d=new Ke,p=new Ke,v=new Ke,S=new H,m=new H;function h(U,E,M){c.fromBufferAttribute(i,U),u.fromBufferAttribute(i,E),f.fromBufferAttribute(i,M),d.fromBufferAttribute(s,U),p.fromBufferAttribute(s,E),v.fromBufferAttribute(s,M),u.sub(c),f.sub(c),p.sub(d),v.sub(d);const C=1/(p.x*v.y-v.x*p.y);isFinite(C)&&(S.copy(u).multiplyScalar(v.y).addScaledVector(f,-p.y).multiplyScalar(C),m.copy(f).multiplyScalar(p.x).addScaledVector(u,-v.x).multiplyScalar(C),a[U].add(S),a[E].add(S),a[M].add(S),l[U].add(m),l[E].add(m),l[M].add(m))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let U=0,E=A.length;U<E;++U){const M=A[U],C=M.start,Q=M.count;for(let Y=C,ne=C+Q;Y<ne;Y+=3)h(e.getX(Y+0),e.getX(Y+1),e.getX(Y+2))}const b=new H,y=new H,L=new H,P=new H;function w(U){L.fromBufferAttribute(r,U),P.copy(L);const E=a[U];b.copy(E),b.sub(L.multiplyScalar(L.dot(E))).normalize(),y.crossVectors(P,E);const C=y.dot(l[U])<0?-1:1;o.setXYZW(U,b.x,b.y,b.z,C)}for(let U=0,E=A.length;U<E;++U){const M=A[U],C=M.start,Q=M.count;for(let Y=C,ne=C+Q;Y<ne;Y+=3)w(e.getX(Y+0)),w(e.getX(Y+1)),w(e.getX(Y+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new yn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new H,s=new H,o=new H,a=new H,l=new H,c=new H,u=new H,f=new H;if(e)for(let d=0,p=e.count;d<p;d+=3){const v=e.getX(d+0),S=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,v),s.fromBufferAttribute(t,S),o.fromBufferAttribute(t,m),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,S),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(S,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Mt.fromBufferAttribute(e,t),Mt.normalize(),e.setXYZ(t,Mt.x,Mt.y,Mt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,d=new c.constructor(l.length*u);let p=0,v=0;for(let S=0,m=l.length;S<m;S++){a.isInterleavedBufferAttribute?p=l[S]*a.data.stride+a.offset:p=l[S]*u;for(let h=0;h<u;h++)d[v++]=c[p++]}return new yn(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ui,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const d=c[u],p=e(d,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let d=0,p=f.length;d<p;d++)u.push(f[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Pc=new ft,_i=new Dx,hs=new Rl,Dc=new H,ds=new H,ps=new H,xs=new H,Wo=new H,ms=new H,Lc=new H,_s=new H;class Bt extends Gt{constructor(e=new Ui,t=new Hf){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){ms.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(Wo.fromBufferAttribute(f,e),o?ms.addScaledVector(Wo,u):ms.addScaledVector(Wo.sub(t),u))}t.add(ms)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),hs.copy(i.boundingSphere),hs.applyMatrix4(s),_i.copy(e.ray).recast(e.near),!(hs.containsPoint(_i.origin)===!1&&(_i.intersectSphere(hs,Dc)===null||_i.origin.distanceToSquared(Dc)>(e.far-e.near)**2))&&(Pc.copy(s).invert(),_i.copy(e.ray).applyMatrix4(Pc),!(i.boundingBox!==null&&_i.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,_i)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,d=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,S=d.length;v<S;v++){const m=d[v],h=o[m.materialIndex],A=Math.max(m.start,p.start),b=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let y=A,L=b;y<L;y+=3){const P=a.getX(y),w=a.getX(y+1),U=a.getX(y+2);r=gs(this,h,e,i,c,u,f,P,w,U),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const v=Math.max(0,p.start),S=Math.min(a.count,p.start+p.count);for(let m=v,h=S;m<h;m+=3){const A=a.getX(m),b=a.getX(m+1),y=a.getX(m+2);r=gs(this,o,e,i,c,u,f,A,b,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,S=d.length;v<S;v++){const m=d[v],h=o[m.materialIndex],A=Math.max(m.start,p.start),b=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=A,L=b;y<L;y+=3){const P=y,w=y+1,U=y+2;r=gs(this,h,e,i,c,u,f,P,w,U),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const v=Math.max(0,p.start),S=Math.min(l.count,p.start+p.count);for(let m=v,h=S;m<h;m+=3){const A=m,b=m+1,y=m+2;r=gs(this,o,e,i,c,u,f,A,b,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function Vx(n,e,t,i,r,s,o,a){let l;if(e.side===Ht?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===si,a),l===null)return null;_s.copy(a),_s.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(_s);return c<t.near||c>t.far?null:{distance:c,point:_s.clone(),object:n}}function gs(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,ds),n.getVertexPosition(l,ps),n.getVertexPosition(c,xs);const u=Vx(n,e,t,i,ds,ps,xs,Lc);if(u){const f=new H;cn.getBarycoord(Lc,ds,ps,xs,f),r&&(u.uv=cn.getInterpolatedAttribute(r,a,l,c,f,new Ke)),s&&(u.uv1=cn.getInterpolatedAttribute(s,a,l,c,f,new Ke)),o&&(u.normal=cn.getInterpolatedAttribute(o,a,l,c,f,new H),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new H,materialIndex:0};cn.getNormal(ds,ps,xs,d.normal),u.face=d,u.barycoord=f}return u}class ai extends Ui{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let d=0,p=0;v("z","y","x",-1,-1,i,t,e,o,s,0),v("z","y","x",1,-1,i,t,-e,o,s,1),v("x","z","y",1,1,e,i,t,r,o,2),v("x","z","y",1,-1,e,i,-t,r,o,3),v("x","y","z",1,-1,e,t,i,r,s,4),v("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Ri(c,3)),this.setAttribute("normal",new Ri(u,3)),this.setAttribute("uv",new Ri(f,2));function v(S,m,h,A,b,y,L,P,w,U,E){const M=y/w,C=L/U,Q=y/2,Y=L/2,ne=P/2,re=w+1,Z=U+1;let J=0,V=0;const fe=new H;for(let ge=0;ge<Z;ge++){const ye=ge*C-Y;for(let Pe=0;Pe<re;Pe++){const je=Pe*M-Q;fe[S]=je*A,fe[m]=ye*b,fe[h]=ne,c.push(fe.x,fe.y,fe.z),fe[S]=0,fe[m]=0,fe[h]=P>0?1:-1,u.push(fe.x,fe.y,fe.z),f.push(Pe/w),f.push(1-ge/U),J+=1}}for(let ge=0;ge<U;ge++)for(let ye=0;ye<w;ye++){const Pe=d+ye+re*ge,je=d+ye+re*(ge+1),ee=d+(ye+1)+re*(ge+1),ue=d+(ye+1)+re*ge;l.push(Pe,je,ue),l.push(je,ee,ue),V+=6}a.addGroup(p,V,E),p+=V,d+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ai(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function mr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Lt(n){const e={};for(let t=0;t<n.length;t++){const i=mr(n[t]);for(const r in i)e[r]=i[r]}return e}function Gx(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function kf(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ye.workingColorSpace}const kx={clone:mr,merge:Lt};var Wx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Xx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Gn extends jr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Wx,this.fragmentShader=Xx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=mr(e.uniforms),this.uniformsGroups=Gx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Wf extends Gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ft,this.projectionMatrix=new ft,this.projectionMatrixInverse=new ft,this.coordinateSystem=Bn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const jn=new H,Ic=new Ke,Uc=new Ke;class $t extends Wf{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Qa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(yo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Qa*2*Math.atan(Math.tan(yo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){jn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(jn.x,jn.y).multiplyScalar(-e/jn.z),jn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(jn.x,jn.y).multiplyScalar(-e/jn.z)}getViewSize(e,t){return this.getViewBounds(e,Ic,Uc),t.subVectors(Uc,Ic)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(yo*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ki=-90,ji=1;class qx extends Gt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new $t(Ki,ji,e,t);r.layers=this.layers,this.add(r);const s=new $t(Ki,ji,e,t);s.layers=this.layers,this.add(s);const o=new $t(Ki,ji,e,t);o.layers=this.layers,this.add(o);const a=new $t(Ki,ji,e,t);a.layers=this.layers,this.add(a);const l=new $t(Ki,ji,e,t);l.layers=this.layers,this.add(l);const c=new $t(Ki,ji,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===Bn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ws)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const S=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=S,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(f,d,p),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class Xf extends Vt{constructor(e,t,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:fr,super(e,t,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Yx extends Li{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Xf(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:zn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ai(5,5,5),s=new Gn({name:"CubemapFromEquirect",uniforms:mr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ht,blending:ni});s.uniforms.tEquirect.value=t;const o=new Bt(r,s),a=t.minFilter;return t.minFilter===Ai&&(t.minFilter=zn),new qx(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}class Nc extends Gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new bn,this.environmentIntensity=1,this.environmentRotation=new bn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Xo=new H,$x=new H,Kx=new He;class Si{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Xo.subVectors(i,t).cross($x.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Xo),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Kx.getNormalMatrix(e),r=this.coplanarPoint(Xo).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const gi=new Rl,vs=new H;class Cl{constructor(e=new Si,t=new Si,i=new Si,r=new Si,s=new Si,o=new Si){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Bn){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],f=r[6],d=r[7],p=r[8],v=r[9],S=r[10],m=r[11],h=r[12],A=r[13],b=r[14],y=r[15];if(i[0].setComponents(l-s,d-c,m-p,y-h).normalize(),i[1].setComponents(l+s,d+c,m+p,y+h).normalize(),i[2].setComponents(l+o,d+u,m+v,y+A).normalize(),i[3].setComponents(l-o,d-u,m-v,y-A).normalize(),i[4].setComponents(l-a,d-f,m-S,y-b).normalize(),t===Bn)i[5].setComponents(l+a,d+f,m+S,y+b).normalize();else if(t===Ws)i[5].setComponents(a,f,S,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),gi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),gi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(gi)}intersectsSprite(e){return gi.center.set(0,0,0),gi.radius=.7071067811865476,gi.applyMatrix4(e.matrixWorld),this.intersectsSphere(gi)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(vs.x=r.normal.x>0?e.max.x:e.min.x,vs.y=r.normal.y>0?e.max.y:e.min.y,vs.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(vs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class zs extends Gt{constructor(){super(),this.isGroup=!0,this.type="Group"}}class qf extends Vt{constructor(e,t,i,r,s,o,a,l,c,u=ar){if(u!==ar&&u!==pr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===ar&&(i=Di),i===void 0&&u===pr&&(i=dr),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:hn,this.minFilter=l!==void 0?l:hn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class so extends Ui{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=e/a,d=t/l,p=[],v=[],S=[],m=[];for(let h=0;h<u;h++){const A=h*d-o;for(let b=0;b<c;b++){const y=b*f-s;v.push(y,-A,0),S.push(0,0,1),m.push(b/a),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let A=0;A<a;A++){const b=A+c*h,y=A+c*(h+1),L=A+1+c*(h+1),P=A+1+c*h;p.push(b,y,P),p.push(y,L,P)}this.setIndex(p),this.setAttribute("position",new Ri(v,3)),this.setAttribute("normal",new Ri(S,3)),this.setAttribute("uv",new Ri(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new so(e.width,e.height,e.widthSegments,e.heightSegments)}}class Fc extends jr{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new $e(16777215),this.specular=new $e(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Lf,this.normalScale=new Ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.combine=Sl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class jx extends jr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ux,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Zx extends jr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Jx extends Gt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new $e(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const qo=new ft,Oc=new H,Bc=new H;class Qx{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ke(512,512),this.map=null,this.mapPass=null,this.matrix=new ft,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Cl,this._frameExtents=new Ke(1,1),this._viewportCount=1,this._viewports=[new st(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Oc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Oc),Bc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Bc),t.updateMatrixWorld(),qo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(qo),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(qo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Hc=new ft,wr=new H,Yo=new H;class em extends Qx{constructor(){super(new $t(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ke(4,2),this._viewportCount=6,this._viewports=[new st(2,1,1,1),new st(0,1,1,1),new st(3,1,1,1),new st(1,1,1,1),new st(3,0,1,1),new st(1,0,1,1)],this._cubeDirections=[new H(1,0,0),new H(-1,0,0),new H(0,0,1),new H(0,0,-1),new H(0,1,0),new H(0,-1,0)],this._cubeUps=[new H(0,1,0),new H(0,1,0),new H(0,1,0),new H(0,1,0),new H(0,0,1),new H(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),wr.setFromMatrixPosition(e.matrixWorld),i.position.copy(wr),Yo.copy(i.position),Yo.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Yo),i.updateMatrixWorld(),r.makeTranslation(-wr.x,-wr.y,-wr.z),Hc.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Hc)}}class tm extends Jx{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new em}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class nm extends Wf{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class im extends $t{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class rm{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Vc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Vc();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Vc(){return performance.now()}function Gc(n,e,t,i){const r=sm(i);switch(t){case bf:return n*e;case wf:return n*e;case Rf:return n*e*2;case Cf:return n*e/r.components*r.byteLength;case bl:return n*e/r.components*r.byteLength;case Pf:return n*e*2/r.components*r.byteLength;case Al:return n*e*2/r.components*r.byteLength;case Af:return n*e*3/r.components*r.byteLength;case un:return n*e*4/r.components*r.byteLength;case wl:return n*e*4/r.components*r.byteLength;case Cs:case Ps:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ds:case Ls:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case wa:case Ca:return Math.max(n,16)*Math.max(e,8)/4;case Aa:case Ra:return Math.max(n,8)*Math.max(e,8)/2;case Pa:case Da:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case La:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ia:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ua:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Na:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Fa:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Oa:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Ba:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Ha:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Va:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Ga:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case ka:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Wa:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Xa:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case qa:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Ya:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Is:case $a:case Ka:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Df:case ja:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Za:case Ja:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function sm(n){switch(n){case Vn:case Ef:return{byteLength:1,components:1};case Wr:case yf:case Yr:return{byteLength:2,components:1};case yl:case Tl:return{byteLength:2,components:4};case Di:case El:case On:return{byteLength:4,components:1};case Tf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ml}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ml);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Yf(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function om(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,f=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l.updateRanges;if(n.bindBuffer(c,a),f.length===0)n.bufferSubData(c,0,u);else{f.sort((p,v)=>p.start-v.start);let d=0;for(let p=1;p<f.length;p++){const v=f[d],S=f[p];S.start<=v.start+v.count+1?v.count=Math.max(v.count,S.start+S.count-v.start):(++d,f[d]=S)}f.length=d+1;for(let p=0,v=f.length;p<v;p++){const S=f[p];n.bufferSubData(c,S.start*u.BYTES_PER_ELEMENT,u,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var am=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,lm=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,cm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,um=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,hm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,dm=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,pm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,xm=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,mm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,_m=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,gm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,vm=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,zm=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Mm=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Sm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Em=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ym=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Tm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,bm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Am=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,wm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Rm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Cm=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Pm=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Dm=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Lm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Im=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Um=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Nm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Fm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Om=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Bm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Hm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Vm=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Gm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,km=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Wm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Xm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,qm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ym=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,$m=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Km=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,jm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Zm=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Jm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Qm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,e_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,t_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,n_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,i_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,r_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,s_=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,o_=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,a_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,l_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,c_=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,u_=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,f_=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,h_=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,d_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,p_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,x_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,m_=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,__=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,g_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,v_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,z_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,M_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,S_=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,E_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,y_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,T_=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,b_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,A_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,w_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,R_=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,C_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,P_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,D_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,L_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,I_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,U_=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,N_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,F_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,O_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,B_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,H_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,V_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,G_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,k_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,W_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,X_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,q_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Y_=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,$_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,K_=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,j_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Z_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,J_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Q_=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,eg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,tg=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,ng=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ig=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,rg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,sg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const og=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ag=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ug=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,dg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,pg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,xg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,mg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_g=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,vg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,zg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Mg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Eg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Tg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Ag=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,wg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Rg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Pg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Lg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ig=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Ug=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ng=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Fg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Og=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Bg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ge={alphahash_fragment:am,alphahash_pars_fragment:lm,alphamap_fragment:cm,alphamap_pars_fragment:um,alphatest_fragment:fm,alphatest_pars_fragment:hm,aomap_fragment:dm,aomap_pars_fragment:pm,batching_pars_vertex:xm,batching_vertex:mm,begin_vertex:_m,beginnormal_vertex:gm,bsdfs:vm,iridescence_fragment:zm,bumpmap_pars_fragment:Mm,clipping_planes_fragment:Sm,clipping_planes_pars_fragment:Em,clipping_planes_pars_vertex:ym,clipping_planes_vertex:Tm,color_fragment:bm,color_pars_fragment:Am,color_pars_vertex:wm,color_vertex:Rm,common:Cm,cube_uv_reflection_fragment:Pm,defaultnormal_vertex:Dm,displacementmap_pars_vertex:Lm,displacementmap_vertex:Im,emissivemap_fragment:Um,emissivemap_pars_fragment:Nm,colorspace_fragment:Fm,colorspace_pars_fragment:Om,envmap_fragment:Bm,envmap_common_pars_fragment:Hm,envmap_pars_fragment:Vm,envmap_pars_vertex:Gm,envmap_physical_pars_fragment:Qm,envmap_vertex:km,fog_vertex:Wm,fog_pars_vertex:Xm,fog_fragment:qm,fog_pars_fragment:Ym,gradientmap_pars_fragment:$m,lightmap_pars_fragment:Km,lights_lambert_fragment:jm,lights_lambert_pars_fragment:Zm,lights_pars_begin:Jm,lights_toon_fragment:e_,lights_toon_pars_fragment:t_,lights_phong_fragment:n_,lights_phong_pars_fragment:i_,lights_physical_fragment:r_,lights_physical_pars_fragment:s_,lights_fragment_begin:o_,lights_fragment_maps:a_,lights_fragment_end:l_,logdepthbuf_fragment:c_,logdepthbuf_pars_fragment:u_,logdepthbuf_pars_vertex:f_,logdepthbuf_vertex:h_,map_fragment:d_,map_pars_fragment:p_,map_particle_fragment:x_,map_particle_pars_fragment:m_,metalnessmap_fragment:__,metalnessmap_pars_fragment:g_,morphinstance_vertex:v_,morphcolor_vertex:z_,morphnormal_vertex:M_,morphtarget_pars_vertex:S_,morphtarget_vertex:E_,normal_fragment_begin:y_,normal_fragment_maps:T_,normal_pars_fragment:b_,normal_pars_vertex:A_,normal_vertex:w_,normalmap_pars_fragment:R_,clearcoat_normal_fragment_begin:C_,clearcoat_normal_fragment_maps:P_,clearcoat_pars_fragment:D_,iridescence_pars_fragment:L_,opaque_fragment:I_,packing:U_,premultiplied_alpha_fragment:N_,project_vertex:F_,dithering_fragment:O_,dithering_pars_fragment:B_,roughnessmap_fragment:H_,roughnessmap_pars_fragment:V_,shadowmap_pars_fragment:G_,shadowmap_pars_vertex:k_,shadowmap_vertex:W_,shadowmask_pars_fragment:X_,skinbase_vertex:q_,skinning_pars_vertex:Y_,skinning_vertex:$_,skinnormal_vertex:K_,specularmap_fragment:j_,specularmap_pars_fragment:Z_,tonemapping_fragment:J_,tonemapping_pars_fragment:Q_,transmission_fragment:eg,transmission_pars_fragment:tg,uv_pars_fragment:ng,uv_pars_vertex:ig,uv_vertex:rg,worldpos_vertex:sg,background_vert:og,background_frag:ag,backgroundCube_vert:lg,backgroundCube_frag:cg,cube_vert:ug,cube_frag:fg,depth_vert:hg,depth_frag:dg,distanceRGBA_vert:pg,distanceRGBA_frag:xg,equirect_vert:mg,equirect_frag:_g,linedashed_vert:gg,linedashed_frag:vg,meshbasic_vert:zg,meshbasic_frag:Mg,meshlambert_vert:Sg,meshlambert_frag:Eg,meshmatcap_vert:yg,meshmatcap_frag:Tg,meshnormal_vert:bg,meshnormal_frag:Ag,meshphong_vert:wg,meshphong_frag:Rg,meshphysical_vert:Cg,meshphysical_frag:Pg,meshtoon_vert:Dg,meshtoon_frag:Lg,points_vert:Ig,points_frag:Ug,shadow_vert:Ng,shadow_frag:Fg,sprite_vert:Og,sprite_frag:Bg},pe={common:{diffuse:{value:new $e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},envMapRotation:{value:new He},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new Ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new $e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new $e(16777215)},opacity:{value:1},center:{value:new Ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},_n={basic:{uniforms:Lt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:Lt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new $e(0)}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:Lt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new $e(0)},specular:{value:new $e(1118481)},shininess:{value:30}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:Lt([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new $e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:Lt([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new $e(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:Lt([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:Lt([pe.points,pe.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:Lt([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:Lt([pe.common,pe.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:Lt([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:Lt([pe.sprite,pe.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new He}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distanceRGBA:{uniforms:Lt([pe.common,pe.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distanceRGBA_vert,fragmentShader:Ge.distanceRGBA_frag},shadow:{uniforms:Lt([pe.lights,pe.fog,{color:{value:new $e(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};_n.physical={uniforms:Lt([_n.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new Ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new $e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new Ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new $e(0)},specularColor:{value:new $e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new Ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};const Ms={r:0,b:0,g:0},vi=new bn,Hg=new ft;function Vg(n,e,t,i,r,s,o){const a=new $e(0);let l=s===!0?0:1,c,u,f=null,d=0,p=null;function v(b){let y=b.isScene===!0?b.background:null;return y&&y.isTexture&&(y=(b.backgroundBlurriness>0?t:e).get(y)),y}function S(b){let y=!1;const L=v(b);L===null?h(a,l):L&&L.isColor&&(h(L,1),y=!0);const P=n.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(b,y){const L=v(y);L&&(L.isCubeTexture||L.mapping===ro)?(u===void 0&&(u=new Bt(new ai(1,1,1),new Gn({name:"BackgroundCubeMaterial",uniforms:mr(_n.backgroundCube.uniforms),vertexShader:_n.backgroundCube.vertexShader,fragmentShader:_n.backgroundCube.fragmentShader,side:Ht,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,w,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),vi.copy(y.backgroundRotation),vi.x*=-1,vi.y*=-1,vi.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(vi.y*=-1,vi.z*=-1),u.material.uniforms.envMap.value=L,u.material.uniforms.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Hg.makeRotationFromEuler(vi)),u.material.toneMapped=Ye.getTransfer(L.colorSpace)!==rt,(f!==L||d!==L.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,f=L,d=L.version,p=n.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):L&&L.isTexture&&(c===void 0&&(c=new Bt(new so(2,2),new Gn({name:"BackgroundMaterial",uniforms:mr(_n.background.uniforms),vertexShader:_n.background.vertexShader,fragmentShader:_n.background.fragmentShader,side:si,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=L,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=Ye.getTransfer(L.colorSpace)!==rt,L.matrixAutoUpdate===!0&&L.updateMatrix(),c.material.uniforms.uvTransform.value.copy(L.matrix),(f!==L||d!==L.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,f=L,d=L.version,p=n.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function h(b,y){b.getRGB(Ms,kf(n)),i.buffers.color.setClear(Ms.r,Ms.g,Ms.b,y,o)}function A(){u!==void 0&&(u.geometry.dispose(),u.material.dispose()),c!==void 0&&(c.geometry.dispose(),c.material.dispose())}return{getClearColor:function(){return a},setClearColor:function(b,y=1){a.set(b),l=y,h(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,h(a,l)},render:S,addToRenderList:m,dispose:A}}function Gg(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,o=!1;function a(M,C,Q,Y,ne){let re=!1;const Z=f(Y,Q,C);s!==Z&&(s=Z,c(s.object)),re=p(M,Y,Q,ne),re&&v(M,Y,Q,ne),ne!==null&&e.update(ne,n.ELEMENT_ARRAY_BUFFER),(re||o)&&(o=!1,y(M,C,Q,Y),ne!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(ne).buffer))}function l(){return n.createVertexArray()}function c(M){return n.bindVertexArray(M)}function u(M){return n.deleteVertexArray(M)}function f(M,C,Q){const Y=Q.wireframe===!0;let ne=i[M.id];ne===void 0&&(ne={},i[M.id]=ne);let re=ne[C.id];re===void 0&&(re={},ne[C.id]=re);let Z=re[Y];return Z===void 0&&(Z=d(l()),re[Y]=Z),Z}function d(M){const C=[],Q=[],Y=[];for(let ne=0;ne<t;ne++)C[ne]=0,Q[ne]=0,Y[ne]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:Q,attributeDivisors:Y,object:M,attributes:{},index:null}}function p(M,C,Q,Y){const ne=s.attributes,re=C.attributes;let Z=0;const J=Q.getAttributes();for(const V in J)if(J[V].location>=0){const ge=ne[V];let ye=re[V];if(ye===void 0&&(V==="instanceMatrix"&&M.instanceMatrix&&(ye=M.instanceMatrix),V==="instanceColor"&&M.instanceColor&&(ye=M.instanceColor)),ge===void 0||ge.attribute!==ye||ye&&ge.data!==ye.data)return!0;Z++}return s.attributesNum!==Z||s.index!==Y}function v(M,C,Q,Y){const ne={},re=C.attributes;let Z=0;const J=Q.getAttributes();for(const V in J)if(J[V].location>=0){let ge=re[V];ge===void 0&&(V==="instanceMatrix"&&M.instanceMatrix&&(ge=M.instanceMatrix),V==="instanceColor"&&M.instanceColor&&(ge=M.instanceColor));const ye={};ye.attribute=ge,ge&&ge.data&&(ye.data=ge.data),ne[V]=ye,Z++}s.attributes=ne,s.attributesNum=Z,s.index=Y}function S(){const M=s.newAttributes;for(let C=0,Q=M.length;C<Q;C++)M[C]=0}function m(M){h(M,0)}function h(M,C){const Q=s.newAttributes,Y=s.enabledAttributes,ne=s.attributeDivisors;Q[M]=1,Y[M]===0&&(n.enableVertexAttribArray(M),Y[M]=1),ne[M]!==C&&(n.vertexAttribDivisor(M,C),ne[M]=C)}function A(){const M=s.newAttributes,C=s.enabledAttributes;for(let Q=0,Y=C.length;Q<Y;Q++)C[Q]!==M[Q]&&(n.disableVertexAttribArray(Q),C[Q]=0)}function b(M,C,Q,Y,ne,re,Z){Z===!0?n.vertexAttribIPointer(M,C,Q,ne,re):n.vertexAttribPointer(M,C,Q,Y,ne,re)}function y(M,C,Q,Y){S();const ne=Y.attributes,re=Q.getAttributes(),Z=C.defaultAttributeValues;for(const J in re){const V=re[J];if(V.location>=0){let fe=ne[J];if(fe===void 0&&(J==="instanceMatrix"&&M.instanceMatrix&&(fe=M.instanceMatrix),J==="instanceColor"&&M.instanceColor&&(fe=M.instanceColor)),fe!==void 0){const ge=fe.normalized,ye=fe.itemSize,Pe=e.get(fe);if(Pe===void 0)continue;const je=Pe.buffer,ee=Pe.type,ue=Pe.bytesPerElement,Se=ee===n.INT||ee===n.UNSIGNED_INT||fe.gpuType===El;if(fe.isInterleavedBufferAttribute){const he=fe.data,Ae=he.stride,Ie=fe.offset;if(he.isInstancedInterleavedBuffer){for(let Fe=0;Fe<V.locationSize;Fe++)h(V.location+Fe,he.meshPerAttribute);M.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let Fe=0;Fe<V.locationSize;Fe++)m(V.location+Fe);n.bindBuffer(n.ARRAY_BUFFER,je);for(let Fe=0;Fe<V.locationSize;Fe++)b(V.location+Fe,ye/V.locationSize,ee,ge,Ae*ue,(Ie+ye/V.locationSize*Fe)*ue,Se)}else{if(fe.isInstancedBufferAttribute){for(let he=0;he<V.locationSize;he++)h(V.location+he,fe.meshPerAttribute);M.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let he=0;he<V.locationSize;he++)m(V.location+he);n.bindBuffer(n.ARRAY_BUFFER,je);for(let he=0;he<V.locationSize;he++)b(V.location+he,ye/V.locationSize,ee,ge,ye*ue,ye/V.locationSize*he*ue,Se)}}else if(Z!==void 0){const ge=Z[J];if(ge!==void 0)switch(ge.length){case 2:n.vertexAttrib2fv(V.location,ge);break;case 3:n.vertexAttrib3fv(V.location,ge);break;case 4:n.vertexAttrib4fv(V.location,ge);break;default:n.vertexAttrib1fv(V.location,ge)}}}}A()}function L(){U();for(const M in i){const C=i[M];for(const Q in C){const Y=C[Q];for(const ne in Y)u(Y[ne].object),delete Y[ne];delete C[Q]}delete i[M]}}function P(M){if(i[M.id]===void 0)return;const C=i[M.id];for(const Q in C){const Y=C[Q];for(const ne in Y)u(Y[ne].object),delete Y[ne];delete C[Q]}delete i[M.id]}function w(M){for(const C in i){const Q=i[C];if(Q[M.id]===void 0)continue;const Y=Q[M.id];for(const ne in Y)u(Y[ne].object),delete Y[ne];delete Q[M.id]}}function U(){E(),o=!0,s!==r&&(s=r,c(s.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:U,resetDefaultState:E,dispose:L,releaseStatesOfGeometry:P,releaseStatesOfProgram:w,initAttributes:S,enableAttribute:m,disableUnusedAttributes:A}}function kg(n,e,t){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,f){f!==0&&(n.drawArraysInstanced(i,c,u,f),t.update(u,i,f))}function a(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let p=0;for(let v=0;v<f;v++)p+=u[v];t.update(p,i,1)}function l(c,u,f,d){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let v=0;v<c.length;v++)o(c[v],u[v],d[v]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,f);let v=0;for(let S=0;S<f;S++)v+=u[S]*d[S];t.update(v,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Wg(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(w){return!(w!==un&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){const U=w===Yr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==Vn&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==On&&!U)}function l(w){if(w==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),h=n.getParameter(n.MAX_VERTEX_ATTRIBS),A=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),L=v>0,P=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:v,maxTextureSize:S,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:A,maxVaryings:b,maxFragmentUniforms:y,vertexTextures:L,maxSamples:P}}function Xg(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new Si,a=new He,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const p=f.length!==0||d||i!==0||r;return r=d,i=f.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){t=u(f,d,0)},this.setState=function(f,d,p){const v=f.clippingPlanes,S=f.clipIntersection,m=f.clipShadows,h=n.get(f);if(!r||v===null||v.length===0||s&&!m)s?u(null):c();else{const A=s?0:i,b=A*4;let y=h.clippingState||null;l.value=y,y=u(v,d,b,p);for(let L=0;L!==b;++L)y[L]=t[L];h.clippingState=y,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=A}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,p,v){const S=f!==null?f.length:0;let m=null;if(S!==0){if(m=l.value,v!==!0||m===null){const h=p+S*4,A=d.matrixWorldInverse;a.getNormalMatrix(A),(m===null||m.length<h)&&(m=new Float32Array(h));for(let b=0,y=p;b!==S;++b,y+=4)o.copy(f[b]).applyMatrix4(A,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,m}}function qg(n){let e=new WeakMap;function t(o,a){return a===Ea?o.mapping=fr:a===ya&&(o.mapping=hr),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ea||a===ya)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Yx(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const er=4,kc=[.125,.215,.35,.446,.526,.582],Ti=20,$o=new nm,Wc=new $e;let Ko=null,jo=0,Zo=0,Jo=!1;const Ei=(1+Math.sqrt(5))/2,Zi=1/Ei,Xc=[new H(-Ei,Zi,0),new H(Ei,Zi,0),new H(-Zi,0,Ei),new H(Zi,0,Ei),new H(0,Ei,-Zi),new H(0,Ei,Zi),new H(-1,1,-1),new H(1,1,-1),new H(-1,1,1),new H(1,1,1)];class qc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Ko=this._renderer.getRenderTarget(),jo=this._renderer.getActiveCubeFace(),Zo=this._renderer.getActiveMipmapLevel(),Jo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Kc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$c(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ko,jo,Zo),this._renderer.xr.enabled=Jo,e.scissorTest=!1,Ss(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===fr||e.mapping===hr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ko=this._renderer.getRenderTarget(),jo=this._renderer.getActiveCubeFace(),Zo=this._renderer.getActiveMipmapLevel(),Jo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:zn,minFilter:zn,generateMipmaps:!1,type:Yr,format:un,colorSpace:xr,depthBuffer:!1},r=Yc(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Yc(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Yg(s)),this._blurMaterial=$g(s,e,t)}return r}_compileMaterial(e){const t=new Bt(this._lodPlanes[0],e);this._renderer.compile(t,$o)}_sceneToCubeUV(e,t,i,r){const a=new $t(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(Wc),u.toneMapping=ii,u.autoClear=!1;const p=new Hf({name:"PMREM.Background",side:Ht,depthWrite:!1,depthTest:!1}),v=new Bt(new ai,p);let S=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,S=!0):(p.color.copy(Wc),S=!0);for(let h=0;h<6;h++){const A=h%3;A===0?(a.up.set(0,l[h],0),a.lookAt(c[h],0,0)):A===1?(a.up.set(0,0,l[h]),a.lookAt(0,c[h],0)):(a.up.set(0,l[h],0),a.lookAt(0,0,c[h]));const b=this._cubeSize;Ss(r,A*b,h>2?b:0,b,b),u.setRenderTarget(r),S&&u.render(v,a),u.render(e,a)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=d,u.autoClear=f,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===fr||e.mapping===hr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Kc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$c());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Bt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Ss(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,$o)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Xc[(r-s-1)%Xc.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Bt(this._lodPlanes[r],c),d=c.uniforms,p=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Ti-1),S=s/v,m=isFinite(s)?1+Math.floor(u*S):Ti;m>Ti&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ti}`);const h=[];let A=0;for(let w=0;w<Ti;++w){const U=w/S,E=Math.exp(-U*U/2);h.push(E),w===0?A+=E:w<m&&(A+=2*E)}for(let w=0;w<h.length;w++)h[w]=h[w]/A;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=h,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:b}=this;d.dTheta.value=v,d.mipInt.value=b-i;const y=this._sizeLods[r],L=3*y*(r>b-er?r-b+er:0),P=4*(this._cubeSize-y);Ss(t,L,P,3*y,2*y),l.setRenderTarget(t),l.render(f,$o)}}function Yg(n){const e=[],t=[],i=[];let r=n;const s=n-er+1+kc.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-er?l=kc[o-n+er-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,v=6,S=3,m=2,h=1,A=new Float32Array(S*v*p),b=new Float32Array(m*v*p),y=new Float32Array(h*v*p);for(let P=0;P<p;P++){const w=P%3*2/3-1,U=P>2?0:-1,E=[w,U,0,w+2/3,U,0,w+2/3,U+1,0,w,U,0,w+2/3,U+1,0,w,U+1,0];A.set(E,S*v*P),b.set(d,m*v*P);const M=[P,P,P,P,P,P];y.set(M,h*v*P)}const L=new Ui;L.setAttribute("position",new yn(A,S)),L.setAttribute("uv",new yn(b,m)),L.setAttribute("faceIndex",new yn(y,h)),e.push(L),r>er&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Yc(n,e,t){const i=new Li(n,e,t);return i.texture.mapping=ro,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ss(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function $g(n,e,t){const i=new Float32Array(Ti),r=new H(0,1,0);return new Gn({name:"SphericalGaussianBlur",defines:{n:Ti,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Pl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ni,depthTest:!1,depthWrite:!1})}function $c(){return new Gn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Pl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ni,depthTest:!1,depthWrite:!1})}function Kc(){return new Gn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Pl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ni,depthTest:!1,depthWrite:!1})}function Pl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Kg(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Ea||l===ya,u=l===fr||l===hr;if(c||u){let f=e.get(a);const d=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new qc(n)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&r(p)?(t===null&&(t=new qc(n)),f=c?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function jg(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Qi("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Zg(n,e,t,i){const r={},s=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const v in d.attributes)e.remove(d.attributes[v]);d.removeEventListener("dispose",o),delete r[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(f,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,t.memory.geometries++),d}function l(f){const d=f.attributes;for(const p in d)e.update(d[p],n.ARRAY_BUFFER)}function c(f){const d=[],p=f.index,v=f.attributes.position;let S=0;if(p!==null){const A=p.array;S=p.version;for(let b=0,y=A.length;b<y;b+=3){const L=A[b+0],P=A[b+1],w=A[b+2];d.push(L,P,P,w,w,L)}}else if(v!==void 0){const A=v.array;S=v.version;for(let b=0,y=A.length/3-1;b<y;b+=3){const L=b+0,P=b+1,w=b+2;d.push(L,P,P,w,w,L)}}else return;const m=new(Uf(d)?Gf:Vf)(d,1);m.version=S;const h=s.get(f);h&&e.remove(h),s.set(f,m)}function u(f){const d=s.get(f);if(d){const p=f.index;p!==null&&d.version<p.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function Jg(n,e,t){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,p){n.drawElements(i,p,s,d*o),t.update(p,i,1)}function c(d,p,v){v!==0&&(n.drawElementsInstanced(i,p,s,d*o,v),t.update(p,i,v))}function u(d,p,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,d,0,v);let m=0;for(let h=0;h<v;h++)m+=p[h];t.update(m,i,1)}function f(d,p,v,S){if(v===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<d.length;h++)c(d[h]/o,p[h],S[h]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,d,0,S,0,v);let h=0;for(let A=0;A<v;A++)h+=p[A]*S[A];t.update(h,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function Qg(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function e1(n,e,t){const i=new WeakMap,r=new st;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let d=i.get(a);if(d===void 0||d.count!==f){let M=function(){U.dispose(),i.delete(a),a.removeEventListener("dispose",M)};var p=M;d!==void 0&&d.texture.dispose();const v=a.morphAttributes.position!==void 0,S=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,h=a.morphAttributes.position||[],A=a.morphAttributes.normal||[],b=a.morphAttributes.color||[];let y=0;v===!0&&(y=1),S===!0&&(y=2),m===!0&&(y=3);let L=a.attributes.position.count*y,P=1;L>e.maxTextureSize&&(P=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const w=new Float32Array(L*P*4*f),U=new Ff(w,L,P,f);U.type=On,U.needsUpdate=!0;const E=y*4;for(let C=0;C<f;C++){const Q=h[C],Y=A[C],ne=b[C],re=L*P*4*C;for(let Z=0;Z<Q.count;Z++){const J=Z*E;v===!0&&(r.fromBufferAttribute(Q,Z),w[re+J+0]=r.x,w[re+J+1]=r.y,w[re+J+2]=r.z,w[re+J+3]=0),S===!0&&(r.fromBufferAttribute(Y,Z),w[re+J+4]=r.x,w[re+J+5]=r.y,w[re+J+6]=r.z,w[re+J+7]=0),m===!0&&(r.fromBufferAttribute(ne,Z),w[re+J+8]=r.x,w[re+J+9]=r.y,w[re+J+10]=r.z,w[re+J+11]=ne.itemSize===4?r.w:1)}}d={count:f,texture:U,size:new Ke(L,P)},i.set(a,d),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let v=0;for(let m=0;m<c.length;m++)v+=c[m];const S=a.morphTargetsRelative?1:1-v;l.getUniforms().setValue(n,"morphTargetBaseInfluence",S),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:s}}function t1(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const $f=new Vt,jc=new qf(1,1),Kf=new Ff,jf=new Cx,Zf=new Xf,Zc=[],Jc=[],Qc=new Float32Array(16),eu=new Float32Array(9),tu=new Float32Array(4);function gr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Zc[r];if(s===void 0&&(s=new Float32Array(r),Zc[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function vt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function zt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function oo(n,e){let t=Jc[e];t===void 0&&(t=new Int32Array(e),Jc[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function n1(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function i1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;n.uniform2fv(this.addr,e),zt(t,e)}}function r1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(vt(t,e))return;n.uniform3fv(this.addr,e),zt(t,e)}}function s1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;n.uniform4fv(this.addr,e),zt(t,e)}}function o1(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(vt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),zt(t,e)}else{if(vt(t,i))return;tu.set(i),n.uniformMatrix2fv(this.addr,!1,tu),zt(t,i)}}function a1(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(vt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),zt(t,e)}else{if(vt(t,i))return;eu.set(i),n.uniformMatrix3fv(this.addr,!1,eu),zt(t,i)}}function l1(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(vt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),zt(t,e)}else{if(vt(t,i))return;Qc.set(i),n.uniformMatrix4fv(this.addr,!1,Qc),zt(t,i)}}function c1(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function u1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;n.uniform2iv(this.addr,e),zt(t,e)}}function f1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vt(t,e))return;n.uniform3iv(this.addr,e),zt(t,e)}}function h1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;n.uniform4iv(this.addr,e),zt(t,e)}}function d1(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function p1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;n.uniform2uiv(this.addr,e),zt(t,e)}}function x1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vt(t,e))return;n.uniform3uiv(this.addr,e),zt(t,e)}}function m1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;n.uniform4uiv(this.addr,e),zt(t,e)}}function _1(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(jc.compareFunction=If,s=jc):s=$f,t.setTexture2D(e||s,r)}function g1(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||jf,r)}function v1(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Zf,r)}function z1(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Kf,r)}function M1(n){switch(n){case 5126:return n1;case 35664:return i1;case 35665:return r1;case 35666:return s1;case 35674:return o1;case 35675:return a1;case 35676:return l1;case 5124:case 35670:return c1;case 35667:case 35671:return u1;case 35668:case 35672:return f1;case 35669:case 35673:return h1;case 5125:return d1;case 36294:return p1;case 36295:return x1;case 36296:return m1;case 35678:case 36198:case 36298:case 36306:case 35682:return _1;case 35679:case 36299:case 36307:return g1;case 35680:case 36300:case 36308:case 36293:return v1;case 36289:case 36303:case 36311:case 36292:return z1}}function S1(n,e){n.uniform1fv(this.addr,e)}function E1(n,e){const t=gr(e,this.size,2);n.uniform2fv(this.addr,t)}function y1(n,e){const t=gr(e,this.size,3);n.uniform3fv(this.addr,t)}function T1(n,e){const t=gr(e,this.size,4);n.uniform4fv(this.addr,t)}function b1(n,e){const t=gr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function A1(n,e){const t=gr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function w1(n,e){const t=gr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function R1(n,e){n.uniform1iv(this.addr,e)}function C1(n,e){n.uniform2iv(this.addr,e)}function P1(n,e){n.uniform3iv(this.addr,e)}function D1(n,e){n.uniform4iv(this.addr,e)}function L1(n,e){n.uniform1uiv(this.addr,e)}function I1(n,e){n.uniform2uiv(this.addr,e)}function U1(n,e){n.uniform3uiv(this.addr,e)}function N1(n,e){n.uniform4uiv(this.addr,e)}function F1(n,e,t){const i=this.cache,r=e.length,s=oo(t,r);vt(i,s)||(n.uniform1iv(this.addr,s),zt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||$f,s[o])}function O1(n,e,t){const i=this.cache,r=e.length,s=oo(t,r);vt(i,s)||(n.uniform1iv(this.addr,s),zt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||jf,s[o])}function B1(n,e,t){const i=this.cache,r=e.length,s=oo(t,r);vt(i,s)||(n.uniform1iv(this.addr,s),zt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Zf,s[o])}function H1(n,e,t){const i=this.cache,r=e.length,s=oo(t,r);vt(i,s)||(n.uniform1iv(this.addr,s),zt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Kf,s[o])}function V1(n){switch(n){case 5126:return S1;case 35664:return E1;case 35665:return y1;case 35666:return T1;case 35674:return b1;case 35675:return A1;case 35676:return w1;case 5124:case 35670:return R1;case 35667:case 35671:return C1;case 35668:case 35672:return P1;case 35669:case 35673:return D1;case 5125:return L1;case 36294:return I1;case 36295:return U1;case 36296:return N1;case 35678:case 36198:case 36298:case 36306:case 35682:return F1;case 35679:case 36299:case 36307:return O1;case 35680:case 36300:case 36308:case 36293:return B1;case 36289:case 36303:case 36311:case 36292:return H1}}class G1{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=M1(t.type)}}class k1{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=V1(t.type)}}class W1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const Qo=/(\w+)(\])?(\[|\.)?/g;function nu(n,e){n.seq.push(e),n.map[e.id]=e}function X1(n,e,t){const i=n.name,r=i.length;for(Qo.lastIndex=0;;){const s=Qo.exec(i),o=Qo.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){nu(t,c===void 0?new G1(a,n,e):new k1(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new W1(a),nu(t,f)),t=f}}}class Us{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);X1(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function iu(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const q1=37297;let Y1=0;function $1(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const ru=new He;function K1(n){Ye._getMatrix(ru,Ye.workingColorSpace,n);const e=`mat3( ${ru.elements.map(t=>t.toFixed(4))} )`;switch(Ye.getTransfer(n)){case ks:return[e,"LinearTransferOETF"];case rt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function su(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+$1(n.getShaderSource(e),o)}else return r}function j1(n,e){const t=K1(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Z1(n,e){let t;switch(e){case nx:t="Linear";break;case ix:t="Reinhard";break;case rx:t="Cineon";break;case sx:t="ACESFilmic";break;case ax:t="AgX";break;case lx:t="Neutral";break;case ox:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Es=new H;function J1(){Ye.getLuminanceCoefficients(Es);const n=Es.x.toFixed(4),e=Es.y.toFixed(4),t=Es.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Q1(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Pr).join(`
`)}function e0(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function t0(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Pr(n){return n!==""}function ou(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function au(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const n0=/^[ \t]*#include +<([\w\d./]+)>/gm;function el(n){return n.replace(n0,r0)}const i0=new Map;function r0(n,e){let t=Ge[e];if(t===void 0){const i=i0.get(e);if(i!==void 0)t=Ge[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return el(t)}const s0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function lu(n){return n.replace(s0,o0)}function o0(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function cu(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function a0(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Mf?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Up?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===In&&(e="SHADOWMAP_TYPE_VSM"),e}function l0(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case fr:case hr:e="ENVMAP_TYPE_CUBE";break;case ro:e="ENVMAP_TYPE_CUBE_UV";break}return e}function c0(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case hr:e="ENVMAP_MODE_REFRACTION";break}return e}function u0(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Sl:e="ENVMAP_BLENDING_MULTIPLY";break;case ex:e="ENVMAP_BLENDING_MIX";break;case tx:e="ENVMAP_BLENDING_ADD";break}return e}function f0(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function h0(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=a0(t),c=l0(t),u=c0(t),f=u0(t),d=f0(t),p=Q1(t),v=e0(s),S=r.createProgram();let m,h,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Pr).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Pr).join(`
`),h.length>0&&(h+=`
`)):(m=[cu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Pr).join(`
`),h=[cu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ii?"#define TONE_MAPPING":"",t.toneMapping!==ii?Ge.tonemapping_pars_fragment:"",t.toneMapping!==ii?Z1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,j1("linearToOutputTexel",t.outputColorSpace),J1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Pr).join(`
`)),o=el(o),o=ou(o,t),o=au(o,t),a=el(a),a=ou(a,t),a=au(a,t),o=lu(o),a=lu(a),t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",t.glslVersion===gc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===gc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const b=A+m+o,y=A+h+a,L=iu(r,r.VERTEX_SHADER,b),P=iu(r,r.FRAGMENT_SHADER,y);r.attachShader(S,L),r.attachShader(S,P),t.index0AttributeName!==void 0?r.bindAttribLocation(S,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(S,0,"position"),r.linkProgram(S);function w(C){if(n.debug.checkShaderErrors){const Q=r.getProgramInfoLog(S).trim(),Y=r.getShaderInfoLog(L).trim(),ne=r.getShaderInfoLog(P).trim();let re=!0,Z=!0;if(r.getProgramParameter(S,r.LINK_STATUS)===!1)if(re=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,S,L,P);else{const J=su(r,L,"vertex"),V=su(r,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(S,r.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+Q+`
`+J+`
`+V)}else Q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Q):(Y===""||ne==="")&&(Z=!1);Z&&(C.diagnostics={runnable:re,programLog:Q,vertexShader:{log:Y,prefix:m},fragmentShader:{log:ne,prefix:h}})}r.deleteShader(L),r.deleteShader(P),U=new Us(r,S),E=t0(r,S)}let U;this.getUniforms=function(){return U===void 0&&w(this),U};let E;this.getAttributes=function(){return E===void 0&&w(this),E};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(S,q1)),M},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(S),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Y1++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=L,this.fragmentShader=P,this}let d0=0;class p0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new x0(e),t.set(e,i)),i}}class x0{constructor(e){this.id=d0++,this.code=e,this.usedTimes=0}}function m0(n,e,t,i,r,s,o){const a=new Of,l=new p0,c=new Set,u=[],f=r.logarithmicDepthBuffer,d=r.vertexTextures;let p=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(E){return c.add(E),E===0?"uv":`uv${E}`}function m(E,M,C,Q,Y){const ne=Q.fog,re=Y.geometry,Z=E.isMeshStandardMaterial?Q.environment:null,J=(E.isMeshStandardMaterial?t:e).get(E.envMap||Z),V=J&&J.mapping===ro?J.image.height:null,fe=v[E.type];E.precision!==null&&(p=r.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));const ge=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,ye=ge!==void 0?ge.length:0;let Pe=0;re.morphAttributes.position!==void 0&&(Pe=1),re.morphAttributes.normal!==void 0&&(Pe=2),re.morphAttributes.color!==void 0&&(Pe=3);let je,ee,ue,Se;if(fe){const nt=_n[fe];je=nt.vertexShader,ee=nt.fragmentShader}else je=E.vertexShader,ee=E.fragmentShader,l.update(E),ue=l.getVertexShaderID(E),Se=l.getFragmentShaderID(E);const he=n.getRenderTarget(),Ae=n.state.buffers.depth.getReversed(),Ie=Y.isInstancedMesh===!0,Fe=Y.isBatchedMesh===!0,at=!!E.map,ke=!!E.matcap,T=!!J,_=!!E.aoMap,X=!!E.lightMap,K=!!E.bumpMap,q=!!E.normalMap,G=!!E.displacementMap,se=!!E.emissiveMap,$=!!E.metalnessMap,g=!!E.roughnessMap,x=E.anisotropy>0,R=E.clearcoat>0,N=E.dispersion>0,B=E.iridescence>0,O=E.sheen>0,le=E.transmission>0,oe=x&&!!E.anisotropyMap,ae=R&&!!E.clearcoatMap,Le=R&&!!E.clearcoatNormalMap,ie=R&&!!E.clearcoatRoughnessMap,de=B&&!!E.iridescenceMap,Ee=B&&!!E.iridescenceThicknessMap,we=O&&!!E.sheenColorMap,ze=O&&!!E.sheenRoughnessMap,De=!!E.specularMap,Re=!!E.specularColorMap,tt=!!E.specularIntensityMap,D=le&&!!E.transmissionMap,xe=le&&!!E.thicknessMap,j=!!E.gradientMap,te=!!E.alphaMap,ve=E.alphaTest>0,_e=!!E.alphaHash,Be=!!E.extensions;let dt=ii;E.toneMapped&&(he===null||he.isXRRenderTarget===!0)&&(dt=n.toneMapping);const Tt={shaderID:fe,shaderType:E.type,shaderName:E.name,vertexShader:je,fragmentShader:ee,defines:E.defines,customVertexShaderID:ue,customFragmentShaderID:Se,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:Fe,batchingColor:Fe&&Y._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&Y.instanceColor!==null,instancingMorph:Ie&&Y.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:he===null?n.outputColorSpace:he.isXRRenderTarget===!0?he.texture.colorSpace:xr,alphaToCoverage:!!E.alphaToCoverage,map:at,matcap:ke,envMap:T,envMapMode:T&&J.mapping,envMapCubeUVHeight:V,aoMap:_,lightMap:X,bumpMap:K,normalMap:q,displacementMap:d&&G,emissiveMap:se,normalMapObjectSpace:q&&E.normalMapType===hx,normalMapTangentSpace:q&&E.normalMapType===Lf,metalnessMap:$,roughnessMap:g,anisotropy:x,anisotropyMap:oe,clearcoat:R,clearcoatMap:ae,clearcoatNormalMap:Le,clearcoatRoughnessMap:ie,dispersion:N,iridescence:B,iridescenceMap:de,iridescenceThicknessMap:Ee,sheen:O,sheenColorMap:we,sheenRoughnessMap:ze,specularMap:De,specularColorMap:Re,specularIntensityMap:tt,transmission:le,transmissionMap:D,thicknessMap:xe,gradientMap:j,opaque:E.transparent===!1&&E.blending===or&&E.alphaToCoverage===!1,alphaMap:te,alphaTest:ve,alphaHash:_e,combine:E.combine,mapUv:at&&S(E.map.channel),aoMapUv:_&&S(E.aoMap.channel),lightMapUv:X&&S(E.lightMap.channel),bumpMapUv:K&&S(E.bumpMap.channel),normalMapUv:q&&S(E.normalMap.channel),displacementMapUv:G&&S(E.displacementMap.channel),emissiveMapUv:se&&S(E.emissiveMap.channel),metalnessMapUv:$&&S(E.metalnessMap.channel),roughnessMapUv:g&&S(E.roughnessMap.channel),anisotropyMapUv:oe&&S(E.anisotropyMap.channel),clearcoatMapUv:ae&&S(E.clearcoatMap.channel),clearcoatNormalMapUv:Le&&S(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ie&&S(E.clearcoatRoughnessMap.channel),iridescenceMapUv:de&&S(E.iridescenceMap.channel),iridescenceThicknessMapUv:Ee&&S(E.iridescenceThicknessMap.channel),sheenColorMapUv:we&&S(E.sheenColorMap.channel),sheenRoughnessMapUv:ze&&S(E.sheenRoughnessMap.channel),specularMapUv:De&&S(E.specularMap.channel),specularColorMapUv:Re&&S(E.specularColorMap.channel),specularIntensityMapUv:tt&&S(E.specularIntensityMap.channel),transmissionMapUv:D&&S(E.transmissionMap.channel),thicknessMapUv:xe&&S(E.thicknessMap.channel),alphaMapUv:te&&S(E.alphaMap.channel),vertexTangents:!!re.attributes.tangent&&(q||x),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,pointsUvs:Y.isPoints===!0&&!!re.attributes.uv&&(at||te),fog:!!ne,useFog:E.fog===!0,fogExp2:!!ne&&ne.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:Ae,skinning:Y.isSkinnedMesh===!0,morphTargets:re.morphAttributes.position!==void 0,morphNormals:re.morphAttributes.normal!==void 0,morphColors:re.morphAttributes.color!==void 0,morphTargetsCount:ye,morphTextureStride:Pe,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:n.shadowMap.enabled&&C.length>0,shadowMapType:n.shadowMap.type,toneMapping:dt,decodeVideoTexture:at&&E.map.isVideoTexture===!0&&Ye.getTransfer(E.map.colorSpace)===rt,decodeVideoTextureEmissive:se&&E.emissiveMap.isVideoTexture===!0&&Ye.getTransfer(E.emissiveMap.colorSpace)===rt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Fn,flipSided:E.side===Ht,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Be&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Be&&E.extensions.multiDraw===!0||Fe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Tt.vertexUv1s=c.has(1),Tt.vertexUv2s=c.has(2),Tt.vertexUv3s=c.has(3),c.clear(),Tt}function h(E){const M=[];if(E.shaderID?M.push(E.shaderID):(M.push(E.customVertexShaderID),M.push(E.customFragmentShaderID)),E.defines!==void 0)for(const C in E.defines)M.push(C),M.push(E.defines[C]);return E.isRawShaderMaterial===!1&&(A(M,E),b(M,E),M.push(n.outputColorSpace)),M.push(E.customProgramCacheKey),M.join()}function A(E,M){E.push(M.precision),E.push(M.outputColorSpace),E.push(M.envMapMode),E.push(M.envMapCubeUVHeight),E.push(M.mapUv),E.push(M.alphaMapUv),E.push(M.lightMapUv),E.push(M.aoMapUv),E.push(M.bumpMapUv),E.push(M.normalMapUv),E.push(M.displacementMapUv),E.push(M.emissiveMapUv),E.push(M.metalnessMapUv),E.push(M.roughnessMapUv),E.push(M.anisotropyMapUv),E.push(M.clearcoatMapUv),E.push(M.clearcoatNormalMapUv),E.push(M.clearcoatRoughnessMapUv),E.push(M.iridescenceMapUv),E.push(M.iridescenceThicknessMapUv),E.push(M.sheenColorMapUv),E.push(M.sheenRoughnessMapUv),E.push(M.specularMapUv),E.push(M.specularColorMapUv),E.push(M.specularIntensityMapUv),E.push(M.transmissionMapUv),E.push(M.thicknessMapUv),E.push(M.combine),E.push(M.fogExp2),E.push(M.sizeAttenuation),E.push(M.morphTargetsCount),E.push(M.morphAttributeCount),E.push(M.numDirLights),E.push(M.numPointLights),E.push(M.numSpotLights),E.push(M.numSpotLightMaps),E.push(M.numHemiLights),E.push(M.numRectAreaLights),E.push(M.numDirLightShadows),E.push(M.numPointLightShadows),E.push(M.numSpotLightShadows),E.push(M.numSpotLightShadowsWithMaps),E.push(M.numLightProbes),E.push(M.shadowMapType),E.push(M.toneMapping),E.push(M.numClippingPlanes),E.push(M.numClipIntersection),E.push(M.depthPacking)}function b(E,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),E.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),E.push(a.mask)}function y(E){const M=v[E.type];let C;if(M){const Q=_n[M];C=kx.clone(Q.uniforms)}else C=E.uniforms;return C}function L(E,M){let C;for(let Q=0,Y=u.length;Q<Y;Q++){const ne=u[Q];if(ne.cacheKey===M){C=ne,++C.usedTimes;break}}return C===void 0&&(C=new h0(n,M,E,s),u.push(C)),C}function P(E){if(--E.usedTimes===0){const M=u.indexOf(E);u[M]=u[u.length-1],u.pop(),E.destroy()}}function w(E){l.remove(E)}function U(){l.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:y,acquireProgram:L,releaseProgram:P,releaseShaderCache:w,programs:u,dispose:U}}function _0(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function g0(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function uu(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function fu(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f,d,p,v,S,m){let h=n[e];return h===void 0?(h={id:f.id,object:f,geometry:d,material:p,groupOrder:v,renderOrder:f.renderOrder,z:S,group:m},n[e]=h):(h.id=f.id,h.object=f,h.geometry=d,h.material=p,h.groupOrder=v,h.renderOrder=f.renderOrder,h.z=S,h.group=m),e++,h}function a(f,d,p,v,S,m){const h=o(f,d,p,v,S,m);p.transmission>0?i.push(h):p.transparent===!0?r.push(h):t.push(h)}function l(f,d,p,v,S,m){const h=o(f,d,p,v,S,m);p.transmission>0?i.unshift(h):p.transparent===!0?r.unshift(h):t.unshift(h)}function c(f,d){t.length>1&&t.sort(f||g0),i.length>1&&i.sort(d||uu),r.length>1&&r.sort(d||uu)}function u(){for(let f=e,d=n.length;f<d;f++){const p=n[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function v0(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new fu,n.set(i,[o])):r>=s.length?(o=new fu,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function z0(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new H,color:new $e};break;case"SpotLight":t={position:new H,direction:new H,color:new $e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new H,color:new $e,distance:0,decay:0};break;case"HemisphereLight":t={direction:new H,skyColor:new $e,groundColor:new $e};break;case"RectAreaLight":t={color:new $e,position:new H,halfWidth:new H,halfHeight:new H};break}return n[e.id]=t,t}}}function M0(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let S0=0;function E0(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function y0(n){const e=new z0,t=M0(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new H);const r=new H,s=new ft,o=new ft;function a(c){let u=0,f=0,d=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let p=0,v=0,S=0,m=0,h=0,A=0,b=0,y=0,L=0,P=0,w=0;c.sort(E0);for(let E=0,M=c.length;E<M;E++){const C=c[E],Q=C.color,Y=C.intensity,ne=C.distance,re=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)u+=Q.r*Y,f+=Q.g*Y,d+=Q.b*Y;else if(C.isLightProbe){for(let Z=0;Z<9;Z++)i.probe[Z].addScaledVector(C.sh.coefficients[Z],Y);w++}else if(C.isDirectionalLight){const Z=e.get(C);if(Z.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const J=C.shadow,V=t.get(C);V.shadowIntensity=J.intensity,V.shadowBias=J.bias,V.shadowNormalBias=J.normalBias,V.shadowRadius=J.radius,V.shadowMapSize=J.mapSize,i.directionalShadow[p]=V,i.directionalShadowMap[p]=re,i.directionalShadowMatrix[p]=C.shadow.matrix,A++}i.directional[p]=Z,p++}else if(C.isSpotLight){const Z=e.get(C);Z.position.setFromMatrixPosition(C.matrixWorld),Z.color.copy(Q).multiplyScalar(Y),Z.distance=ne,Z.coneCos=Math.cos(C.angle),Z.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),Z.decay=C.decay,i.spot[S]=Z;const J=C.shadow;if(C.map&&(i.spotLightMap[L]=C.map,L++,J.updateMatrices(C),C.castShadow&&P++),i.spotLightMatrix[S]=J.matrix,C.castShadow){const V=t.get(C);V.shadowIntensity=J.intensity,V.shadowBias=J.bias,V.shadowNormalBias=J.normalBias,V.shadowRadius=J.radius,V.shadowMapSize=J.mapSize,i.spotShadow[S]=V,i.spotShadowMap[S]=re,y++}S++}else if(C.isRectAreaLight){const Z=e.get(C);Z.color.copy(Q).multiplyScalar(Y),Z.halfWidth.set(C.width*.5,0,0),Z.halfHeight.set(0,C.height*.5,0),i.rectArea[m]=Z,m++}else if(C.isPointLight){const Z=e.get(C);if(Z.color.copy(C.color).multiplyScalar(C.intensity),Z.distance=C.distance,Z.decay=C.decay,C.castShadow){const J=C.shadow,V=t.get(C);V.shadowIntensity=J.intensity,V.shadowBias=J.bias,V.shadowNormalBias=J.normalBias,V.shadowRadius=J.radius,V.shadowMapSize=J.mapSize,V.shadowCameraNear=J.camera.near,V.shadowCameraFar=J.camera.far,i.pointShadow[v]=V,i.pointShadowMap[v]=re,i.pointShadowMatrix[v]=C.shadow.matrix,b++}i.point[v]=Z,v++}else if(C.isHemisphereLight){const Z=e.get(C);Z.skyColor.copy(C.color).multiplyScalar(Y),Z.groundColor.copy(C.groundColor).multiplyScalar(Y),i.hemi[h]=Z,h++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=pe.LTC_FLOAT_1,i.rectAreaLTC2=pe.LTC_FLOAT_2):(i.rectAreaLTC1=pe.LTC_HALF_1,i.rectAreaLTC2=pe.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=d;const U=i.hash;(U.directionalLength!==p||U.pointLength!==v||U.spotLength!==S||U.rectAreaLength!==m||U.hemiLength!==h||U.numDirectionalShadows!==A||U.numPointShadows!==b||U.numSpotShadows!==y||U.numSpotMaps!==L||U.numLightProbes!==w)&&(i.directional.length=p,i.spot.length=S,i.rectArea.length=m,i.point.length=v,i.hemi.length=h,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=A,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=y+L-P,i.spotLightMap.length=L,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=w,U.directionalLength=p,U.pointLength=v,U.spotLength=S,U.rectAreaLength=m,U.hemiLength=h,U.numDirectionalShadows=A,U.numPointShadows=b,U.numSpotShadows=y,U.numSpotMaps=L,U.numLightProbes=w,i.version=S0++)}function l(c,u){let f=0,d=0,p=0,v=0,S=0;const m=u.matrixWorldInverse;for(let h=0,A=c.length;h<A;h++){const b=c[h];if(b.isDirectionalLight){const y=i.directional[f];y.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),f++}else if(b.isSpotLight){const y=i.spot[p];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),p++}else if(b.isRectAreaLight){const y=i.rectArea[v];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(m),o.identity(),s.copy(b.matrixWorld),s.premultiply(m),o.extractRotation(s),y.halfWidth.set(b.width*.5,0,0),y.halfHeight.set(0,b.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),v++}else if(b.isPointLight){const y=i.point[d];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(m),d++}else if(b.isHemisphereLight){const y=i.hemi[S];y.direction.setFromMatrixPosition(b.matrixWorld),y.direction.transformDirection(m),S++}}}return{setup:a,setupView:l,state:i}}function hu(n){const e=new y0(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function T0(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new hu(n),e.set(r,[a])):s>=o.length?(a=new hu(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const b0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,A0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function w0(n,e,t){let i=new Cl;const r=new Ke,s=new Ke,o=new st,a=new jx({depthPacking:fx}),l=new Zx,c={},u=t.maxTextureSize,f={[si]:Ht,[Ht]:si,[Fn]:Fn},d=new Gn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ke},radius:{value:4}},vertexShader:b0,fragmentShader:A0}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const v=new Ui;v.setAttribute("position",new yn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new Bt(v,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Mf;let h=this.type;this.render=function(P,w,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||P.length===0)return;const E=n.getRenderTarget(),M=n.getActiveCubeFace(),C=n.getActiveMipmapLevel(),Q=n.state;Q.setBlending(ni),Q.buffers.color.setClear(1,1,1,1),Q.buffers.depth.setTest(!0),Q.setScissorTest(!1);const Y=h!==In&&this.type===In,ne=h===In&&this.type!==In;for(let re=0,Z=P.length;re<Z;re++){const J=P[re],V=J.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;r.copy(V.mapSize);const fe=V.getFrameExtents();if(r.multiply(fe),s.copy(V.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/fe.x),r.x=s.x*fe.x,V.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/fe.y),r.y=s.y*fe.y,V.mapSize.y=s.y)),V.map===null||Y===!0||ne===!0){const ye=this.type!==In?{minFilter:hn,magFilter:hn}:{};V.map!==null&&V.map.dispose(),V.map=new Li(r.x,r.y,ye),V.map.texture.name=J.name+".shadowMap",V.camera.updateProjectionMatrix()}n.setRenderTarget(V.map),n.clear();const ge=V.getViewportCount();for(let ye=0;ye<ge;ye++){const Pe=V.getViewport(ye);o.set(s.x*Pe.x,s.y*Pe.y,s.x*Pe.z,s.y*Pe.w),Q.viewport(o),V.updateMatrices(J,ye),i=V.getFrustum(),y(w,U,V.camera,J,this.type)}V.isPointLightShadow!==!0&&this.type===In&&A(V,U),V.needsUpdate=!1}h=this.type,m.needsUpdate=!1,n.setRenderTarget(E,M,C)};function A(P,w){const U=e.update(S);d.defines.VSM_SAMPLES!==P.blurSamples&&(d.defines.VSM_SAMPLES=P.blurSamples,p.defines.VSM_SAMPLES=P.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Li(r.x,r.y)),d.uniforms.shadow_pass.value=P.map.texture,d.uniforms.resolution.value=P.mapSize,d.uniforms.radius.value=P.radius,n.setRenderTarget(P.mapPass),n.clear(),n.renderBufferDirect(w,null,U,d,S,null),p.uniforms.shadow_pass.value=P.mapPass.texture,p.uniforms.resolution.value=P.mapSize,p.uniforms.radius.value=P.radius,n.setRenderTarget(P.map),n.clear(),n.renderBufferDirect(w,null,U,p,S,null)}function b(P,w,U,E){let M=null;const C=U.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(C!==void 0)M=C;else if(M=U.isPointLight===!0?l:a,n.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const Q=M.uuid,Y=w.uuid;let ne=c[Q];ne===void 0&&(ne={},c[Q]=ne);let re=ne[Y];re===void 0&&(re=M.clone(),ne[Y]=re,w.addEventListener("dispose",L)),M=re}if(M.visible=w.visible,M.wireframe=w.wireframe,E===In?M.side=w.shadowSide!==null?w.shadowSide:w.side:M.side=w.shadowSide!==null?w.shadowSide:f[w.side],M.alphaMap=w.alphaMap,M.alphaTest=w.alphaTest,M.map=w.map,M.clipShadows=w.clipShadows,M.clippingPlanes=w.clippingPlanes,M.clipIntersection=w.clipIntersection,M.displacementMap=w.displacementMap,M.displacementScale=w.displacementScale,M.displacementBias=w.displacementBias,M.wireframeLinewidth=w.wireframeLinewidth,M.linewidth=w.linewidth,U.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const Q=n.properties.get(M);Q.light=U}return M}function y(P,w,U,E,M){if(P.visible===!1)return;if(P.layers.test(w.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&M===In)&&(!P.frustumCulled||i.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,P.matrixWorld);const Y=e.update(P),ne=P.material;if(Array.isArray(ne)){const re=Y.groups;for(let Z=0,J=re.length;Z<J;Z++){const V=re[Z],fe=ne[V.materialIndex];if(fe&&fe.visible){const ge=b(P,fe,E,M);P.onBeforeShadow(n,P,w,U,Y,ge,V),n.renderBufferDirect(U,null,Y,ge,P,V),P.onAfterShadow(n,P,w,U,Y,ge,V)}}}else if(ne.visible){const re=b(P,ne,E,M);P.onBeforeShadow(n,P,w,U,Y,re,null),n.renderBufferDirect(U,null,Y,re,P,null),P.onAfterShadow(n,P,w,U,Y,re,null)}}const Q=P.children;for(let Y=0,ne=Q.length;Y<ne;Y++)y(Q[Y],w,U,E,M)}function L(P){P.target.removeEventListener("dispose",L);for(const U in c){const E=c[U],M=P.target.uuid;M in E&&(E[M].dispose(),delete E[M])}}}const R0={[ma]:_a,[ga]:Ma,[va]:Sa,[ur]:za,[_a]:ma,[Ma]:ga,[Sa]:va,[za]:ur};function C0(n,e){function t(){let D=!1;const xe=new st;let j=null;const te=new st(0,0,0,0);return{setMask:function(ve){j!==ve&&!D&&(n.colorMask(ve,ve,ve,ve),j=ve)},setLocked:function(ve){D=ve},setClear:function(ve,_e,Be,dt,Tt){Tt===!0&&(ve*=dt,_e*=dt,Be*=dt),xe.set(ve,_e,Be,dt),te.equals(xe)===!1&&(n.clearColor(ve,_e,Be,dt),te.copy(xe))},reset:function(){D=!1,j=null,te.set(-1,0,0,0)}}}function i(){let D=!1,xe=!1,j=null,te=null,ve=null;return{setReversed:function(_e){if(xe!==_e){const Be=e.get("EXT_clip_control");xe?Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.ZERO_TO_ONE_EXT):Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.NEGATIVE_ONE_TO_ONE_EXT);const dt=ve;ve=null,this.setClear(dt)}xe=_e},getReversed:function(){return xe},setTest:function(_e){_e?he(n.DEPTH_TEST):Ae(n.DEPTH_TEST)},setMask:function(_e){j!==_e&&!D&&(n.depthMask(_e),j=_e)},setFunc:function(_e){if(xe&&(_e=R0[_e]),te!==_e){switch(_e){case ma:n.depthFunc(n.NEVER);break;case _a:n.depthFunc(n.ALWAYS);break;case ga:n.depthFunc(n.LESS);break;case ur:n.depthFunc(n.LEQUAL);break;case va:n.depthFunc(n.EQUAL);break;case za:n.depthFunc(n.GEQUAL);break;case Ma:n.depthFunc(n.GREATER);break;case Sa:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}te=_e}},setLocked:function(_e){D=_e},setClear:function(_e){ve!==_e&&(xe&&(_e=1-_e),n.clearDepth(_e),ve=_e)},reset:function(){D=!1,j=null,te=null,ve=null,xe=!1}}}function r(){let D=!1,xe=null,j=null,te=null,ve=null,_e=null,Be=null,dt=null,Tt=null;return{setTest:function(nt){D||(nt?he(n.STENCIL_TEST):Ae(n.STENCIL_TEST))},setMask:function(nt){xe!==nt&&!D&&(n.stencilMask(nt),xe=nt)},setFunc:function(nt,nn,An){(j!==nt||te!==nn||ve!==An)&&(n.stencilFunc(nt,nn,An),j=nt,te=nn,ve=An)},setOp:function(nt,nn,An){(_e!==nt||Be!==nn||dt!==An)&&(n.stencilOp(nt,nn,An),_e=nt,Be=nn,dt=An)},setLocked:function(nt){D=nt},setClear:function(nt){Tt!==nt&&(n.clearStencil(nt),Tt=nt)},reset:function(){D=!1,xe=null,j=null,te=null,ve=null,_e=null,Be=null,dt=null,Tt=null}}}const s=new t,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let u={},f={},d=new WeakMap,p=[],v=null,S=!1,m=null,h=null,A=null,b=null,y=null,L=null,P=null,w=new $e(0,0,0),U=0,E=!1,M=null,C=null,Q=null,Y=null,ne=null;const re=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,J=0;const V=n.getParameter(n.VERSION);V.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(V)[1]),Z=J>=1):V.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),Z=J>=2);let fe=null,ge={};const ye=n.getParameter(n.SCISSOR_BOX),Pe=n.getParameter(n.VIEWPORT),je=new st().fromArray(ye),ee=new st().fromArray(Pe);function ue(D,xe,j,te){const ve=new Uint8Array(4),_e=n.createTexture();n.bindTexture(D,_e),n.texParameteri(D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(D,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Be=0;Be<j;Be++)D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY?n.texImage3D(xe,0,n.RGBA,1,1,te,0,n.RGBA,n.UNSIGNED_BYTE,ve):n.texImage2D(xe+Be,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ve);return _e}const Se={};Se[n.TEXTURE_2D]=ue(n.TEXTURE_2D,n.TEXTURE_2D,1),Se[n.TEXTURE_CUBE_MAP]=ue(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Se[n.TEXTURE_2D_ARRAY]=ue(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Se[n.TEXTURE_3D]=ue(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),he(n.DEPTH_TEST),o.setFunc(ur),K(!1),q(hc),he(n.CULL_FACE),_(ni);function he(D){u[D]!==!0&&(n.enable(D),u[D]=!0)}function Ae(D){u[D]!==!1&&(n.disable(D),u[D]=!1)}function Ie(D,xe){return f[D]!==xe?(n.bindFramebuffer(D,xe),f[D]=xe,D===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=xe),D===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=xe),!0):!1}function Fe(D,xe){let j=p,te=!1;if(D){j=d.get(xe),j===void 0&&(j=[],d.set(xe,j));const ve=D.textures;if(j.length!==ve.length||j[0]!==n.COLOR_ATTACHMENT0){for(let _e=0,Be=ve.length;_e<Be;_e++)j[_e]=n.COLOR_ATTACHMENT0+_e;j.length=ve.length,te=!0}}else j[0]!==n.BACK&&(j[0]=n.BACK,te=!0);te&&n.drawBuffers(j)}function at(D){return v!==D?(n.useProgram(D),v=D,!0):!1}const ke={[yi]:n.FUNC_ADD,[Fp]:n.FUNC_SUBTRACT,[Op]:n.FUNC_REVERSE_SUBTRACT};ke[Bp]=n.MIN,ke[Hp]=n.MAX;const T={[Vp]:n.ZERO,[Gp]:n.ONE,[kp]:n.SRC_COLOR,[pa]:n.SRC_ALPHA,[Kp]:n.SRC_ALPHA_SATURATE,[Yp]:n.DST_COLOR,[Xp]:n.DST_ALPHA,[Wp]:n.ONE_MINUS_SRC_COLOR,[xa]:n.ONE_MINUS_SRC_ALPHA,[$p]:n.ONE_MINUS_DST_COLOR,[qp]:n.ONE_MINUS_DST_ALPHA,[jp]:n.CONSTANT_COLOR,[Zp]:n.ONE_MINUS_CONSTANT_COLOR,[Jp]:n.CONSTANT_ALPHA,[Qp]:n.ONE_MINUS_CONSTANT_ALPHA};function _(D,xe,j,te,ve,_e,Be,dt,Tt,nt){if(D===ni){S===!0&&(Ae(n.BLEND),S=!1);return}if(S===!1&&(he(n.BLEND),S=!0),D!==Np){if(D!==m||nt!==E){if((h!==yi||y!==yi)&&(n.blendEquation(n.FUNC_ADD),h=yi,y=yi),nt)switch(D){case or:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case dc:n.blendFunc(n.ONE,n.ONE);break;case pc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case xc:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case or:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case dc:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case pc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case xc:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}A=null,b=null,L=null,P=null,w.set(0,0,0),U=0,m=D,E=nt}return}ve=ve||xe,_e=_e||j,Be=Be||te,(xe!==h||ve!==y)&&(n.blendEquationSeparate(ke[xe],ke[ve]),h=xe,y=ve),(j!==A||te!==b||_e!==L||Be!==P)&&(n.blendFuncSeparate(T[j],T[te],T[_e],T[Be]),A=j,b=te,L=_e,P=Be),(dt.equals(w)===!1||Tt!==U)&&(n.blendColor(dt.r,dt.g,dt.b,Tt),w.copy(dt),U=Tt),m=D,E=!1}function X(D,xe){D.side===Fn?Ae(n.CULL_FACE):he(n.CULL_FACE);let j=D.side===Ht;xe&&(j=!j),K(j),D.blending===or&&D.transparent===!1?_(ni):_(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),s.setMask(D.colorWrite);const te=D.stencilWrite;a.setTest(te),te&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),se(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?he(n.SAMPLE_ALPHA_TO_COVERAGE):Ae(n.SAMPLE_ALPHA_TO_COVERAGE)}function K(D){M!==D&&(D?n.frontFace(n.CW):n.frontFace(n.CCW),M=D)}function q(D){D!==Lp?(he(n.CULL_FACE),D!==C&&(D===hc?n.cullFace(n.BACK):D===Ip?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ae(n.CULL_FACE),C=D}function G(D){D!==Q&&(Z&&n.lineWidth(D),Q=D)}function se(D,xe,j){D?(he(n.POLYGON_OFFSET_FILL),(Y!==xe||ne!==j)&&(n.polygonOffset(xe,j),Y=xe,ne=j)):Ae(n.POLYGON_OFFSET_FILL)}function $(D){D?he(n.SCISSOR_TEST):Ae(n.SCISSOR_TEST)}function g(D){D===void 0&&(D=n.TEXTURE0+re-1),fe!==D&&(n.activeTexture(D),fe=D)}function x(D,xe,j){j===void 0&&(fe===null?j=n.TEXTURE0+re-1:j=fe);let te=ge[j];te===void 0&&(te={type:void 0,texture:void 0},ge[j]=te),(te.type!==D||te.texture!==xe)&&(fe!==j&&(n.activeTexture(j),fe=j),n.bindTexture(D,xe||Se[D]),te.type=D,te.texture=xe)}function R(){const D=ge[fe];D!==void 0&&D.type!==void 0&&(n.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function N(){try{n.compressedTexImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function B(){try{n.compressedTexImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function O(){try{n.texSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function le(){try{n.texSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function oe(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ae(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Le(){try{n.texStorage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ie(){try{n.texStorage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function de(){try{n.texImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ee(){try{n.texImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function we(D){je.equals(D)===!1&&(n.scissor(D.x,D.y,D.z,D.w),je.copy(D))}function ze(D){ee.equals(D)===!1&&(n.viewport(D.x,D.y,D.z,D.w),ee.copy(D))}function De(D,xe){let j=c.get(xe);j===void 0&&(j=new WeakMap,c.set(xe,j));let te=j.get(D);te===void 0&&(te=n.getUniformBlockIndex(xe,D.name),j.set(D,te))}function Re(D,xe){const te=c.get(xe).get(D);l.get(xe)!==te&&(n.uniformBlockBinding(xe,te,D.__bindingPointIndex),l.set(xe,te))}function tt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},fe=null,ge={},f={},d=new WeakMap,p=[],v=null,S=!1,m=null,h=null,A=null,b=null,y=null,L=null,P=null,w=new $e(0,0,0),U=0,E=!1,M=null,C=null,Q=null,Y=null,ne=null,je.set(0,0,n.canvas.width,n.canvas.height),ee.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:he,disable:Ae,bindFramebuffer:Ie,drawBuffers:Fe,useProgram:at,setBlending:_,setMaterial:X,setFlipSided:K,setCullFace:q,setLineWidth:G,setPolygonOffset:se,setScissorTest:$,activeTexture:g,bindTexture:x,unbindTexture:R,compressedTexImage2D:N,compressedTexImage3D:B,texImage2D:de,texImage3D:Ee,updateUBOMapping:De,uniformBlockBinding:Re,texStorage2D:Le,texStorage3D:ie,texSubImage2D:O,texSubImage3D:le,compressedTexSubImage2D:oe,compressedTexSubImage3D:ae,scissor:we,viewport:ze,reset:tt}}function P0(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ke,u=new WeakMap;let f;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(g,x){return p?new OffscreenCanvas(g,x):Xs("canvas")}function S(g,x,R){let N=1;const B=$(g);if((B.width>R||B.height>R)&&(N=R/Math.max(B.width,B.height)),N<1)if(typeof HTMLImageElement<"u"&&g instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&g instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&g instanceof ImageBitmap||typeof VideoFrame<"u"&&g instanceof VideoFrame){const O=Math.floor(N*B.width),le=Math.floor(N*B.height);f===void 0&&(f=v(O,le));const oe=x?v(O,le):f;return oe.width=O,oe.height=le,oe.getContext("2d").drawImage(g,0,0,O,le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+B.width+"x"+B.height+") to ("+O+"x"+le+")."),oe}else return"data"in g&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+B.width+"x"+B.height+")."),g;return g}function m(g){return g.generateMipmaps}function h(g){n.generateMipmap(g)}function A(g){return g.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:g.isWebGL3DRenderTarget?n.TEXTURE_3D:g.isWebGLArrayRenderTarget||g.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(g,x,R,N,B=!1){if(g!==null){if(n[g]!==void 0)return n[g];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+g+"'")}let O=x;if(x===n.RED&&(R===n.FLOAT&&(O=n.R32F),R===n.HALF_FLOAT&&(O=n.R16F),R===n.UNSIGNED_BYTE&&(O=n.R8)),x===n.RED_INTEGER&&(R===n.UNSIGNED_BYTE&&(O=n.R8UI),R===n.UNSIGNED_SHORT&&(O=n.R16UI),R===n.UNSIGNED_INT&&(O=n.R32UI),R===n.BYTE&&(O=n.R8I),R===n.SHORT&&(O=n.R16I),R===n.INT&&(O=n.R32I)),x===n.RG&&(R===n.FLOAT&&(O=n.RG32F),R===n.HALF_FLOAT&&(O=n.RG16F),R===n.UNSIGNED_BYTE&&(O=n.RG8)),x===n.RG_INTEGER&&(R===n.UNSIGNED_BYTE&&(O=n.RG8UI),R===n.UNSIGNED_SHORT&&(O=n.RG16UI),R===n.UNSIGNED_INT&&(O=n.RG32UI),R===n.BYTE&&(O=n.RG8I),R===n.SHORT&&(O=n.RG16I),R===n.INT&&(O=n.RG32I)),x===n.RGB_INTEGER&&(R===n.UNSIGNED_BYTE&&(O=n.RGB8UI),R===n.UNSIGNED_SHORT&&(O=n.RGB16UI),R===n.UNSIGNED_INT&&(O=n.RGB32UI),R===n.BYTE&&(O=n.RGB8I),R===n.SHORT&&(O=n.RGB16I),R===n.INT&&(O=n.RGB32I)),x===n.RGBA_INTEGER&&(R===n.UNSIGNED_BYTE&&(O=n.RGBA8UI),R===n.UNSIGNED_SHORT&&(O=n.RGBA16UI),R===n.UNSIGNED_INT&&(O=n.RGBA32UI),R===n.BYTE&&(O=n.RGBA8I),R===n.SHORT&&(O=n.RGBA16I),R===n.INT&&(O=n.RGBA32I)),x===n.RGB&&R===n.UNSIGNED_INT_5_9_9_9_REV&&(O=n.RGB9_E5),x===n.RGBA){const le=B?ks:Ye.getTransfer(N);R===n.FLOAT&&(O=n.RGBA32F),R===n.HALF_FLOAT&&(O=n.RGBA16F),R===n.UNSIGNED_BYTE&&(O=le===rt?n.SRGB8_ALPHA8:n.RGBA8),R===n.UNSIGNED_SHORT_4_4_4_4&&(O=n.RGBA4),R===n.UNSIGNED_SHORT_5_5_5_1&&(O=n.RGB5_A1)}return(O===n.R16F||O===n.R32F||O===n.RG16F||O===n.RG32F||O===n.RGBA16F||O===n.RGBA32F)&&e.get("EXT_color_buffer_float"),O}function y(g,x){let R;return g?x===null||x===Di||x===dr?R=n.DEPTH24_STENCIL8:x===On?R=n.DEPTH32F_STENCIL8:x===Wr&&(R=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Di||x===dr?R=n.DEPTH_COMPONENT24:x===On?R=n.DEPTH_COMPONENT32F:x===Wr&&(R=n.DEPTH_COMPONENT16),R}function L(g,x){return m(g)===!0||g.isFramebufferTexture&&g.minFilter!==hn&&g.minFilter!==zn?Math.log2(Math.max(x.width,x.height))+1:g.mipmaps!==void 0&&g.mipmaps.length>0?g.mipmaps.length:g.isCompressedTexture&&Array.isArray(g.image)?x.mipmaps.length:1}function P(g){const x=g.target;x.removeEventListener("dispose",P),U(x),x.isVideoTexture&&u.delete(x)}function w(g){const x=g.target;x.removeEventListener("dispose",w),M(x)}function U(g){const x=i.get(g);if(x.__webglInit===void 0)return;const R=g.source,N=d.get(R);if(N){const B=N[x.__cacheKey];B.usedTimes--,B.usedTimes===0&&E(g),Object.keys(N).length===0&&d.delete(R)}i.remove(g)}function E(g){const x=i.get(g);n.deleteTexture(x.__webglTexture);const R=g.source,N=d.get(R);delete N[x.__cacheKey],o.memory.textures--}function M(g){const x=i.get(g);if(g.depthTexture&&(g.depthTexture.dispose(),i.remove(g.depthTexture)),g.isWebGLCubeRenderTarget)for(let N=0;N<6;N++){if(Array.isArray(x.__webglFramebuffer[N]))for(let B=0;B<x.__webglFramebuffer[N].length;B++)n.deleteFramebuffer(x.__webglFramebuffer[N][B]);else n.deleteFramebuffer(x.__webglFramebuffer[N]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[N])}else{if(Array.isArray(x.__webglFramebuffer))for(let N=0;N<x.__webglFramebuffer.length;N++)n.deleteFramebuffer(x.__webglFramebuffer[N]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let N=0;N<x.__webglColorRenderbuffer.length;N++)x.__webglColorRenderbuffer[N]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[N]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const R=g.textures;for(let N=0,B=R.length;N<B;N++){const O=i.get(R[N]);O.__webglTexture&&(n.deleteTexture(O.__webglTexture),o.memory.textures--),i.remove(R[N])}i.remove(g)}let C=0;function Q(){C=0}function Y(){const g=C;return g>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+g+" texture units while this GPU supports only "+r.maxTextures),C+=1,g}function ne(g){const x=[];return x.push(g.wrapS),x.push(g.wrapT),x.push(g.wrapR||0),x.push(g.magFilter),x.push(g.minFilter),x.push(g.anisotropy),x.push(g.internalFormat),x.push(g.format),x.push(g.type),x.push(g.generateMipmaps),x.push(g.premultiplyAlpha),x.push(g.flipY),x.push(g.unpackAlignment),x.push(g.colorSpace),x.join()}function re(g,x){const R=i.get(g);if(g.isVideoTexture&&G(g),g.isRenderTargetTexture===!1&&g.version>0&&R.__version!==g.version){const N=g.image;if(N===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(N.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ee(R,g,x);return}}t.bindTexture(n.TEXTURE_2D,R.__webglTexture,n.TEXTURE0+x)}function Z(g,x){const R=i.get(g);if(g.version>0&&R.__version!==g.version){ee(R,g,x);return}t.bindTexture(n.TEXTURE_2D_ARRAY,R.__webglTexture,n.TEXTURE0+x)}function J(g,x){const R=i.get(g);if(g.version>0&&R.__version!==g.version){ee(R,g,x);return}t.bindTexture(n.TEXTURE_3D,R.__webglTexture,n.TEXTURE0+x)}function V(g,x){const R=i.get(g);if(g.version>0&&R.__version!==g.version){ue(R,g,x);return}t.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+x)}const fe={[Ta]:n.REPEAT,[bi]:n.CLAMP_TO_EDGE,[ba]:n.MIRRORED_REPEAT},ge={[hn]:n.NEAREST,[cx]:n.NEAREST_MIPMAP_NEAREST,[ns]:n.NEAREST_MIPMAP_LINEAR,[zn]:n.LINEAR,[Eo]:n.LINEAR_MIPMAP_NEAREST,[Ai]:n.LINEAR_MIPMAP_LINEAR},ye={[dx]:n.NEVER,[vx]:n.ALWAYS,[px]:n.LESS,[If]:n.LEQUAL,[xx]:n.EQUAL,[gx]:n.GEQUAL,[mx]:n.GREATER,[_x]:n.NOTEQUAL};function Pe(g,x){if(x.type===On&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===zn||x.magFilter===Eo||x.magFilter===ns||x.magFilter===Ai||x.minFilter===zn||x.minFilter===Eo||x.minFilter===ns||x.minFilter===Ai)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(g,n.TEXTURE_WRAP_S,fe[x.wrapS]),n.texParameteri(g,n.TEXTURE_WRAP_T,fe[x.wrapT]),(g===n.TEXTURE_3D||g===n.TEXTURE_2D_ARRAY)&&n.texParameteri(g,n.TEXTURE_WRAP_R,fe[x.wrapR]),n.texParameteri(g,n.TEXTURE_MAG_FILTER,ge[x.magFilter]),n.texParameteri(g,n.TEXTURE_MIN_FILTER,ge[x.minFilter]),x.compareFunction&&(n.texParameteri(g,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(g,n.TEXTURE_COMPARE_FUNC,ye[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===hn||x.minFilter!==ns&&x.minFilter!==Ai||x.type===On&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const R=e.get("EXT_texture_filter_anisotropic");n.texParameterf(g,R.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function je(g,x){let R=!1;g.__webglInit===void 0&&(g.__webglInit=!0,x.addEventListener("dispose",P));const N=x.source;let B=d.get(N);B===void 0&&(B={},d.set(N,B));const O=ne(x);if(O!==g.__cacheKey){B[O]===void 0&&(B[O]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,R=!0),B[O].usedTimes++;const le=B[g.__cacheKey];le!==void 0&&(B[g.__cacheKey].usedTimes--,le.usedTimes===0&&E(x)),g.__cacheKey=O,g.__webglTexture=B[O].texture}return R}function ee(g,x,R){let N=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(N=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(N=n.TEXTURE_3D);const B=je(g,x),O=x.source;t.bindTexture(N,g.__webglTexture,n.TEXTURE0+R);const le=i.get(O);if(O.version!==le.__version||B===!0){t.activeTexture(n.TEXTURE0+R);const oe=Ye.getPrimaries(Ye.workingColorSpace),ae=x.colorSpace===ei?null:Ye.getPrimaries(x.colorSpace),Le=x.colorSpace===ei||oe===ae?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le);let ie=S(x.image,!1,r.maxTextureSize);ie=se(x,ie);const de=s.convert(x.format,x.colorSpace),Ee=s.convert(x.type);let we=b(x.internalFormat,de,Ee,x.colorSpace,x.isVideoTexture);Pe(N,x);let ze;const De=x.mipmaps,Re=x.isVideoTexture!==!0,tt=le.__version===void 0||B===!0,D=O.dataReady,xe=L(x,ie);if(x.isDepthTexture)we=y(x.format===pr,x.type),tt&&(Re?t.texStorage2D(n.TEXTURE_2D,1,we,ie.width,ie.height):t.texImage2D(n.TEXTURE_2D,0,we,ie.width,ie.height,0,de,Ee,null));else if(x.isDataTexture)if(De.length>0){Re&&tt&&t.texStorage2D(n.TEXTURE_2D,xe,we,De[0].width,De[0].height);for(let j=0,te=De.length;j<te;j++)ze=De[j],Re?D&&t.texSubImage2D(n.TEXTURE_2D,j,0,0,ze.width,ze.height,de,Ee,ze.data):t.texImage2D(n.TEXTURE_2D,j,we,ze.width,ze.height,0,de,Ee,ze.data);x.generateMipmaps=!1}else Re?(tt&&t.texStorage2D(n.TEXTURE_2D,xe,we,ie.width,ie.height),D&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ie.width,ie.height,de,Ee,ie.data)):t.texImage2D(n.TEXTURE_2D,0,we,ie.width,ie.height,0,de,Ee,ie.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Re&&tt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,xe,we,De[0].width,De[0].height,ie.depth);for(let j=0,te=De.length;j<te;j++)if(ze=De[j],x.format!==un)if(de!==null)if(Re){if(D)if(x.layerUpdates.size>0){const ve=Gc(ze.width,ze.height,x.format,x.type);for(const _e of x.layerUpdates){const Be=ze.data.subarray(_e*ve/ze.data.BYTES_PER_ELEMENT,(_e+1)*ve/ze.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,_e,ze.width,ze.height,1,de,Be)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,0,ze.width,ze.height,ie.depth,de,ze.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,j,we,ze.width,ze.height,ie.depth,0,ze.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Re?D&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,0,ze.width,ze.height,ie.depth,de,Ee,ze.data):t.texImage3D(n.TEXTURE_2D_ARRAY,j,we,ze.width,ze.height,ie.depth,0,de,Ee,ze.data)}else{Re&&tt&&t.texStorage2D(n.TEXTURE_2D,xe,we,De[0].width,De[0].height);for(let j=0,te=De.length;j<te;j++)ze=De[j],x.format!==un?de!==null?Re?D&&t.compressedTexSubImage2D(n.TEXTURE_2D,j,0,0,ze.width,ze.height,de,ze.data):t.compressedTexImage2D(n.TEXTURE_2D,j,we,ze.width,ze.height,0,ze.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Re?D&&t.texSubImage2D(n.TEXTURE_2D,j,0,0,ze.width,ze.height,de,Ee,ze.data):t.texImage2D(n.TEXTURE_2D,j,we,ze.width,ze.height,0,de,Ee,ze.data)}else if(x.isDataArrayTexture)if(Re){if(tt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,xe,we,ie.width,ie.height,ie.depth),D)if(x.layerUpdates.size>0){const j=Gc(ie.width,ie.height,x.format,x.type);for(const te of x.layerUpdates){const ve=ie.data.subarray(te*j/ie.data.BYTES_PER_ELEMENT,(te+1)*j/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,te,ie.width,ie.height,1,de,Ee,ve)}x.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,de,Ee,ie.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,we,ie.width,ie.height,ie.depth,0,de,Ee,ie.data);else if(x.isData3DTexture)Re?(tt&&t.texStorage3D(n.TEXTURE_3D,xe,we,ie.width,ie.height,ie.depth),D&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,de,Ee,ie.data)):t.texImage3D(n.TEXTURE_3D,0,we,ie.width,ie.height,ie.depth,0,de,Ee,ie.data);else if(x.isFramebufferTexture){if(tt)if(Re)t.texStorage2D(n.TEXTURE_2D,xe,we,ie.width,ie.height);else{let j=ie.width,te=ie.height;for(let ve=0;ve<xe;ve++)t.texImage2D(n.TEXTURE_2D,ve,we,j,te,0,de,Ee,null),j>>=1,te>>=1}}else if(De.length>0){if(Re&&tt){const j=$(De[0]);t.texStorage2D(n.TEXTURE_2D,xe,we,j.width,j.height)}for(let j=0,te=De.length;j<te;j++)ze=De[j],Re?D&&t.texSubImage2D(n.TEXTURE_2D,j,0,0,de,Ee,ze):t.texImage2D(n.TEXTURE_2D,j,we,de,Ee,ze);x.generateMipmaps=!1}else if(Re){if(tt){const j=$(ie);t.texStorage2D(n.TEXTURE_2D,xe,we,j.width,j.height)}D&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,de,Ee,ie)}else t.texImage2D(n.TEXTURE_2D,0,we,de,Ee,ie);m(x)&&h(N),le.__version=O.version,x.onUpdate&&x.onUpdate(x)}g.__version=x.version}function ue(g,x,R){if(x.image.length!==6)return;const N=je(g,x),B=x.source;t.bindTexture(n.TEXTURE_CUBE_MAP,g.__webglTexture,n.TEXTURE0+R);const O=i.get(B);if(B.version!==O.__version||N===!0){t.activeTexture(n.TEXTURE0+R);const le=Ye.getPrimaries(Ye.workingColorSpace),oe=x.colorSpace===ei?null:Ye.getPrimaries(x.colorSpace),ae=x.colorSpace===ei||le===oe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ae);const Le=x.isCompressedTexture||x.image[0].isCompressedTexture,ie=x.image[0]&&x.image[0].isDataTexture,de=[];for(let te=0;te<6;te++)!Le&&!ie?de[te]=S(x.image[te],!0,r.maxCubemapSize):de[te]=ie?x.image[te].image:x.image[te],de[te]=se(x,de[te]);const Ee=de[0],we=s.convert(x.format,x.colorSpace),ze=s.convert(x.type),De=b(x.internalFormat,we,ze,x.colorSpace),Re=x.isVideoTexture!==!0,tt=O.__version===void 0||N===!0,D=B.dataReady;let xe=L(x,Ee);Pe(n.TEXTURE_CUBE_MAP,x);let j;if(Le){Re&&tt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,xe,De,Ee.width,Ee.height);for(let te=0;te<6;te++){j=de[te].mipmaps;for(let ve=0;ve<j.length;ve++){const _e=j[ve];x.format!==un?we!==null?Re?D&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,ve,0,0,_e.width,_e.height,we,_e.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,ve,De,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Re?D&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,ve,0,0,_e.width,_e.height,we,ze,_e.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,ve,De,_e.width,_e.height,0,we,ze,_e.data)}}}else{if(j=x.mipmaps,Re&&tt){j.length>0&&xe++;const te=$(de[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,xe,De,te.width,te.height)}for(let te=0;te<6;te++)if(ie){Re?D&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,de[te].width,de[te].height,we,ze,de[te].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,De,de[te].width,de[te].height,0,we,ze,de[te].data);for(let ve=0;ve<j.length;ve++){const Be=j[ve].image[te].image;Re?D&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,ve+1,0,0,Be.width,Be.height,we,ze,Be.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,ve+1,De,Be.width,Be.height,0,we,ze,Be.data)}}else{Re?D&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,we,ze,de[te]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,De,we,ze,de[te]);for(let ve=0;ve<j.length;ve++){const _e=j[ve];Re?D&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,ve+1,0,0,we,ze,_e.image[te]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,ve+1,De,we,ze,_e.image[te])}}}m(x)&&h(n.TEXTURE_CUBE_MAP),O.__version=B.version,x.onUpdate&&x.onUpdate(x)}g.__version=x.version}function Se(g,x,R,N,B,O){const le=s.convert(R.format,R.colorSpace),oe=s.convert(R.type),ae=b(R.internalFormat,le,oe,R.colorSpace),Le=i.get(x),ie=i.get(R);if(ie.__renderTarget=x,!Le.__hasExternalTextures){const de=Math.max(1,x.width>>O),Ee=Math.max(1,x.height>>O);B===n.TEXTURE_3D||B===n.TEXTURE_2D_ARRAY?t.texImage3D(B,O,ae,de,Ee,x.depth,0,le,oe,null):t.texImage2D(B,O,ae,de,Ee,0,le,oe,null)}t.bindFramebuffer(n.FRAMEBUFFER,g),q(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,N,B,ie.__webglTexture,0,K(x)):(B===n.TEXTURE_2D||B>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&B<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,N,B,ie.__webglTexture,O),t.bindFramebuffer(n.FRAMEBUFFER,null)}function he(g,x,R){if(n.bindRenderbuffer(n.RENDERBUFFER,g),x.depthBuffer){const N=x.depthTexture,B=N&&N.isDepthTexture?N.type:null,O=y(x.stencilBuffer,B),le=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,oe=K(x);q(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,oe,O,x.width,x.height):R?n.renderbufferStorageMultisample(n.RENDERBUFFER,oe,O,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,O,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,le,n.RENDERBUFFER,g)}else{const N=x.textures;for(let B=0;B<N.length;B++){const O=N[B],le=s.convert(O.format,O.colorSpace),oe=s.convert(O.type),ae=b(O.internalFormat,le,oe,O.colorSpace),Le=K(x);R&&q(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Le,ae,x.width,x.height):q(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Le,ae,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,ae,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ae(g,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,g),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const N=i.get(x.depthTexture);N.__renderTarget=x,(!N.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),re(x.depthTexture,0);const B=N.__webglTexture,O=K(x);if(x.depthTexture.format===ar)q(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,B,0,O):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,B,0);else if(x.depthTexture.format===pr)q(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,B,0,O):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,B,0);else throw new Error("Unknown depthTexture format")}function Ie(g){const x=i.get(g),R=g.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==g.depthTexture){const N=g.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),N){const B=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,N.removeEventListener("dispose",B)};N.addEventListener("dispose",B),x.__depthDisposeCallback=B}x.__boundDepthTexture=N}if(g.depthTexture&&!x.__autoAllocateDepthBuffer){if(R)throw new Error("target.depthTexture not supported in Cube render targets");Ae(x.__webglFramebuffer,g)}else if(R){x.__webglDepthbuffer=[];for(let N=0;N<6;N++)if(t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[N]),x.__webglDepthbuffer[N]===void 0)x.__webglDepthbuffer[N]=n.createRenderbuffer(),he(x.__webglDepthbuffer[N],g,!1);else{const B=g.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,O=x.__webglDepthbuffer[N];n.bindRenderbuffer(n.RENDERBUFFER,O),n.framebufferRenderbuffer(n.FRAMEBUFFER,B,n.RENDERBUFFER,O)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=n.createRenderbuffer(),he(x.__webglDepthbuffer,g,!1);else{const N=g.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,B=x.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,B),n.framebufferRenderbuffer(n.FRAMEBUFFER,N,n.RENDERBUFFER,B)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Fe(g,x,R){const N=i.get(g);x!==void 0&&Se(N.__webglFramebuffer,g,g.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),R!==void 0&&Ie(g)}function at(g){const x=g.texture,R=i.get(g),N=i.get(x);g.addEventListener("dispose",w);const B=g.textures,O=g.isWebGLCubeRenderTarget===!0,le=B.length>1;if(le||(N.__webglTexture===void 0&&(N.__webglTexture=n.createTexture()),N.__version=x.version,o.memory.textures++),O){R.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(x.mipmaps&&x.mipmaps.length>0){R.__webglFramebuffer[oe]=[];for(let ae=0;ae<x.mipmaps.length;ae++)R.__webglFramebuffer[oe][ae]=n.createFramebuffer()}else R.__webglFramebuffer[oe]=n.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){R.__webglFramebuffer=[];for(let oe=0;oe<x.mipmaps.length;oe++)R.__webglFramebuffer[oe]=n.createFramebuffer()}else R.__webglFramebuffer=n.createFramebuffer();if(le)for(let oe=0,ae=B.length;oe<ae;oe++){const Le=i.get(B[oe]);Le.__webglTexture===void 0&&(Le.__webglTexture=n.createTexture(),o.memory.textures++)}if(g.samples>0&&q(g)===!1){R.__webglMultisampledFramebuffer=n.createFramebuffer(),R.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,R.__webglMultisampledFramebuffer);for(let oe=0;oe<B.length;oe++){const ae=B[oe];R.__webglColorRenderbuffer[oe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,R.__webglColorRenderbuffer[oe]);const Le=s.convert(ae.format,ae.colorSpace),ie=s.convert(ae.type),de=b(ae.internalFormat,Le,ie,ae.colorSpace,g.isXRRenderTarget===!0),Ee=K(g);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ee,de,g.width,g.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+oe,n.RENDERBUFFER,R.__webglColorRenderbuffer[oe])}n.bindRenderbuffer(n.RENDERBUFFER,null),g.depthBuffer&&(R.__webglDepthRenderbuffer=n.createRenderbuffer(),he(R.__webglDepthRenderbuffer,g,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(O){t.bindTexture(n.TEXTURE_CUBE_MAP,N.__webglTexture),Pe(n.TEXTURE_CUBE_MAP,x);for(let oe=0;oe<6;oe++)if(x.mipmaps&&x.mipmaps.length>0)for(let ae=0;ae<x.mipmaps.length;ae++)Se(R.__webglFramebuffer[oe][ae],g,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,ae);else Se(R.__webglFramebuffer[oe],g,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);m(x)&&h(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(le){for(let oe=0,ae=B.length;oe<ae;oe++){const Le=B[oe],ie=i.get(Le);t.bindTexture(n.TEXTURE_2D,ie.__webglTexture),Pe(n.TEXTURE_2D,Le),Se(R.__webglFramebuffer,g,Le,n.COLOR_ATTACHMENT0+oe,n.TEXTURE_2D,0),m(Le)&&h(n.TEXTURE_2D)}t.unbindTexture()}else{let oe=n.TEXTURE_2D;if((g.isWebGL3DRenderTarget||g.isWebGLArrayRenderTarget)&&(oe=g.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(oe,N.__webglTexture),Pe(oe,x),x.mipmaps&&x.mipmaps.length>0)for(let ae=0;ae<x.mipmaps.length;ae++)Se(R.__webglFramebuffer[ae],g,x,n.COLOR_ATTACHMENT0,oe,ae);else Se(R.__webglFramebuffer,g,x,n.COLOR_ATTACHMENT0,oe,0);m(x)&&h(oe),t.unbindTexture()}g.depthBuffer&&Ie(g)}function ke(g){const x=g.textures;for(let R=0,N=x.length;R<N;R++){const B=x[R];if(m(B)){const O=A(g),le=i.get(B).__webglTexture;t.bindTexture(O,le),h(O),t.unbindTexture()}}}const T=[],_=[];function X(g){if(g.samples>0){if(q(g)===!1){const x=g.textures,R=g.width,N=g.height;let B=n.COLOR_BUFFER_BIT;const O=g.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,le=i.get(g),oe=x.length>1;if(oe)for(let ae=0;ae<x.length;ae++)t.bindFramebuffer(n.FRAMEBUFFER,le.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ae,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,le.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ae,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,le.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,le.__webglFramebuffer);for(let ae=0;ae<x.length;ae++){if(g.resolveDepthBuffer&&(g.depthBuffer&&(B|=n.DEPTH_BUFFER_BIT),g.stencilBuffer&&g.resolveStencilBuffer&&(B|=n.STENCIL_BUFFER_BIT)),oe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,le.__webglColorRenderbuffer[ae]);const Le=i.get(x[ae]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Le,0)}n.blitFramebuffer(0,0,R,N,0,0,R,N,B,n.NEAREST),l===!0&&(T.length=0,_.length=0,T.push(n.COLOR_ATTACHMENT0+ae),g.depthBuffer&&g.resolveDepthBuffer===!1&&(T.push(O),_.push(O),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,_)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,T))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),oe)for(let ae=0;ae<x.length;ae++){t.bindFramebuffer(n.FRAMEBUFFER,le.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ae,n.RENDERBUFFER,le.__webglColorRenderbuffer[ae]);const Le=i.get(x[ae]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,le.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ae,n.TEXTURE_2D,Le,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,le.__webglMultisampledFramebuffer)}else if(g.depthBuffer&&g.resolveDepthBuffer===!1&&l){const x=g.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function K(g){return Math.min(r.maxSamples,g.samples)}function q(g){const x=i.get(g);return g.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function G(g){const x=o.render.frame;u.get(g)!==x&&(u.set(g,x),g.update())}function se(g,x){const R=g.colorSpace,N=g.format,B=g.type;return g.isCompressedTexture===!0||g.isVideoTexture===!0||R!==xr&&R!==ei&&(Ye.getTransfer(R)===rt?(N!==un||B!==Vn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",R)),x}function $(g){return typeof HTMLImageElement<"u"&&g instanceof HTMLImageElement?(c.width=g.naturalWidth||g.width,c.height=g.naturalHeight||g.height):typeof VideoFrame<"u"&&g instanceof VideoFrame?(c.width=g.displayWidth,c.height=g.displayHeight):(c.width=g.width,c.height=g.height),c}this.allocateTextureUnit=Y,this.resetTextureUnits=Q,this.setTexture2D=re,this.setTexture2DArray=Z,this.setTexture3D=J,this.setTextureCube=V,this.rebindTextures=Fe,this.setupRenderTarget=at,this.updateRenderTargetMipmap=ke,this.updateMultisampleRenderTarget=X,this.setupDepthRenderbuffer=Ie,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=q}function D0(n,e){function t(i,r=ei){let s;const o=Ye.getTransfer(r);if(i===Vn)return n.UNSIGNED_BYTE;if(i===yl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Tl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Tf)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Ef)return n.BYTE;if(i===yf)return n.SHORT;if(i===Wr)return n.UNSIGNED_SHORT;if(i===El)return n.INT;if(i===Di)return n.UNSIGNED_INT;if(i===On)return n.FLOAT;if(i===Yr)return n.HALF_FLOAT;if(i===bf)return n.ALPHA;if(i===Af)return n.RGB;if(i===un)return n.RGBA;if(i===wf)return n.LUMINANCE;if(i===Rf)return n.LUMINANCE_ALPHA;if(i===ar)return n.DEPTH_COMPONENT;if(i===pr)return n.DEPTH_STENCIL;if(i===Cf)return n.RED;if(i===bl)return n.RED_INTEGER;if(i===Pf)return n.RG;if(i===Al)return n.RG_INTEGER;if(i===wl)return n.RGBA_INTEGER;if(i===Cs||i===Ps||i===Ds||i===Ls)if(o===rt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Cs)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ps)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ds)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ls)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Cs)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ps)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ds)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ls)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Aa||i===wa||i===Ra||i===Ca)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Aa)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===wa)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ra)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ca)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Pa||i===Da||i===La)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Pa||i===Da)return o===rt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===La)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ia||i===Ua||i===Na||i===Fa||i===Oa||i===Ba||i===Ha||i===Va||i===Ga||i===ka||i===Wa||i===Xa||i===qa||i===Ya)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Ia)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ua)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Na)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Fa)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Oa)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ba)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ha)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Va)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ga)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ka)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Wa)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Xa)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===qa)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ya)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Is||i===$a||i===Ka)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Is)return o===rt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===$a)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ka)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Df||i===ja||i===Za||i===Ja)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Is)return s.COMPRESSED_RED_RGTC1_EXT;if(i===ja)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Za)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ja)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===dr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const L0={type:"move"};class ea{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new zs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new zs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new zs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const S of e.hand.values()){const m=t.getJointPose(S,i),h=this._getHandJoint(c,S);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),p=.02,v=.005;c.inputState.pinching&&d>p+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(L0)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new zs;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const I0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,U0=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class N0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new Vt,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Gn({vertexShader:I0,fragmentShader:U0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Bt(new so(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class F0 extends _r{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,d=null,p=null,v=null;const S=new N0,m=t.getContextAttributes();let h=null,A=null;const b=[],y=[],L=new Ke;let P=null;const w=new $t;w.viewport=new st;const U=new $t;U.viewport=new st;const E=[w,U],M=new im;let C=null,Q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let ue=b[ee];return ue===void 0&&(ue=new ea,b[ee]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(ee){let ue=b[ee];return ue===void 0&&(ue=new ea,b[ee]=ue),ue.getGripSpace()},this.getHand=function(ee){let ue=b[ee];return ue===void 0&&(ue=new ea,b[ee]=ue),ue.getHandSpace()};function Y(ee){const ue=y.indexOf(ee.inputSource);if(ue===-1)return;const Se=b[ue];Se!==void 0&&(Se.update(ee.inputSource,ee.frame,c||o),Se.dispatchEvent({type:ee.type,data:ee.inputSource}))}function ne(){r.removeEventListener("select",Y),r.removeEventListener("selectstart",Y),r.removeEventListener("selectend",Y),r.removeEventListener("squeeze",Y),r.removeEventListener("squeezestart",Y),r.removeEventListener("squeezeend",Y),r.removeEventListener("end",ne),r.removeEventListener("inputsourceschange",re);for(let ee=0;ee<b.length;ee++){const ue=y[ee];ue!==null&&(y[ee]=null,b[ee].disconnect(ue))}C=null,Q=null,S.reset(),e.setRenderTarget(h),p=null,d=null,f=null,r=null,A=null,je.stop(),i.isPresenting=!1,e.setPixelRatio(P),e.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){s=ee,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){a=ee,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ee){c=ee},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(ee){if(r=ee,r!==null){if(h=e.getRenderTarget(),r.addEventListener("select",Y),r.addEventListener("selectstart",Y),r.addEventListener("selectend",Y),r.addEventListener("squeeze",Y),r.addEventListener("squeezestart",Y),r.addEventListener("squeezeend",Y),r.addEventListener("end",ne),r.addEventListener("inputsourceschange",re),m.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(L),r.renderState.layers===void 0){const ue={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,ue),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),A=new Li(p.framebufferWidth,p.framebufferHeight,{format:un,type:Vn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ue=null,Se=null,he=null;m.depth&&(he=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ue=m.stencil?pr:ar,Se=m.stencil?dr:Di);const Ae={colorFormat:t.RGBA8,depthFormat:he,scaleFactor:s};f=new XRWebGLBinding(r,t),d=f.createProjectionLayer(Ae),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),A=new Li(d.textureWidth,d.textureHeight,{format:un,type:Vn,depthTexture:new qf(d.textureWidth,d.textureHeight,Se,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),je.setContext(r),je.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function re(ee){for(let ue=0;ue<ee.removed.length;ue++){const Se=ee.removed[ue],he=y.indexOf(Se);he>=0&&(y[he]=null,b[he].disconnect(Se))}for(let ue=0;ue<ee.added.length;ue++){const Se=ee.added[ue];let he=y.indexOf(Se);if(he===-1){for(let Ie=0;Ie<b.length;Ie++)if(Ie>=y.length){y.push(Se),he=Ie;break}else if(y[Ie]===null){y[Ie]=Se,he=Ie;break}if(he===-1)break}const Ae=b[he];Ae&&Ae.connect(Se)}}const Z=new H,J=new H;function V(ee,ue,Se){Z.setFromMatrixPosition(ue.matrixWorld),J.setFromMatrixPosition(Se.matrixWorld);const he=Z.distanceTo(J),Ae=ue.projectionMatrix.elements,Ie=Se.projectionMatrix.elements,Fe=Ae[14]/(Ae[10]-1),at=Ae[14]/(Ae[10]+1),ke=(Ae[9]+1)/Ae[5],T=(Ae[9]-1)/Ae[5],_=(Ae[8]-1)/Ae[0],X=(Ie[8]+1)/Ie[0],K=Fe*_,q=Fe*X,G=he/(-_+X),se=G*-_;if(ue.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(se),ee.translateZ(G),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert(),Ae[10]===-1)ee.projectionMatrix.copy(ue.projectionMatrix),ee.projectionMatrixInverse.copy(ue.projectionMatrixInverse);else{const $=Fe+G,g=at+G,x=K-se,R=q+(he-se),N=ke*at/g*$,B=T*at/g*$;ee.projectionMatrix.makePerspective(x,R,N,B,$,g),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}}function fe(ee,ue){ue===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(ue.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(r===null)return;let ue=ee.near,Se=ee.far;S.texture!==null&&(S.depthNear>0&&(ue=S.depthNear),S.depthFar>0&&(Se=S.depthFar)),M.near=U.near=w.near=ue,M.far=U.far=w.far=Se,(C!==M.near||Q!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),C=M.near,Q=M.far),w.layers.mask=ee.layers.mask|2,U.layers.mask=ee.layers.mask|4,M.layers.mask=w.layers.mask|U.layers.mask;const he=ee.parent,Ae=M.cameras;fe(M,he);for(let Ie=0;Ie<Ae.length;Ie++)fe(Ae[Ie],he);Ae.length===2?V(M,w,U):M.projectionMatrix.copy(w.projectionMatrix),ge(ee,M,he)};function ge(ee,ue,Se){Se===null?ee.matrix.copy(ue.matrixWorld):(ee.matrix.copy(Se.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(ue.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(ue.projectionMatrix),ee.projectionMatrixInverse.copy(ue.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=Qa*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(ee){l=ee,d!==null&&(d.fixedFoveation=ee),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=ee)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(M)};let ye=null;function Pe(ee,ue){if(u=ue.getViewerPose(c||o),v=ue,u!==null){const Se=u.views;p!==null&&(e.setRenderTargetFramebuffer(A,p.framebuffer),e.setRenderTarget(A));let he=!1;Se.length!==M.cameras.length&&(M.cameras.length=0,he=!0);for(let Ie=0;Ie<Se.length;Ie++){const Fe=Se[Ie];let at=null;if(p!==null)at=p.getViewport(Fe);else{const T=f.getViewSubImage(d,Fe);at=T.viewport,Ie===0&&(e.setRenderTargetTextures(A,T.colorTexture,d.ignoreDepthValues?void 0:T.depthStencilTexture),e.setRenderTarget(A))}let ke=E[Ie];ke===void 0&&(ke=new $t,ke.layers.enable(Ie),ke.viewport=new st,E[Ie]=ke),ke.matrix.fromArray(Fe.transform.matrix),ke.matrix.decompose(ke.position,ke.quaternion,ke.scale),ke.projectionMatrix.fromArray(Fe.projectionMatrix),ke.projectionMatrixInverse.copy(ke.projectionMatrix).invert(),ke.viewport.set(at.x,at.y,at.width,at.height),Ie===0&&(M.matrix.copy(ke.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),he===!0&&M.cameras.push(ke)}const Ae=r.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")){const Ie=f.getDepthInformation(Se[0]);Ie&&Ie.isValid&&Ie.texture&&S.init(e,Ie,r.renderState)}}for(let Se=0;Se<b.length;Se++){const he=y[Se],Ae=b[Se];he!==null&&Ae!==void 0&&Ae.update(he,ue,c||o)}ye&&ye(ee,ue),ue.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ue}),v=null}const je=new Yf;je.setAnimationLoop(Pe),this.setAnimationLoop=function(ee){ye=ee},this.dispose=function(){}}}const zi=new bn,O0=new ft;function B0(n,e){function t(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,kf(n)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,A,b,y){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(m,h):h.isMeshToonMaterial?(s(m,h),f(m,h)):h.isMeshPhongMaterial?(s(m,h),u(m,h)):h.isMeshStandardMaterial?(s(m,h),d(m,h),h.isMeshPhysicalMaterial&&p(m,h,y)):h.isMeshMatcapMaterial?(s(m,h),v(m,h)):h.isMeshDepthMaterial?s(m,h):h.isMeshDistanceMaterial?(s(m,h),S(m,h)):h.isMeshNormalMaterial?s(m,h):h.isLineBasicMaterial?(o(m,h),h.isLineDashedMaterial&&a(m,h)):h.isPointsMaterial?l(m,h,A,b):h.isSpriteMaterial?c(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,t(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===Ht&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,t(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===Ht&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,t(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,t(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const A=e.get(h),b=A.envMap,y=A.envMapRotation;b&&(m.envMap.value=b,zi.copy(y),zi.x*=-1,zi.y*=-1,zi.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(zi.y*=-1,zi.z*=-1),m.envMapRotation.value.setFromMatrix4(O0.makeRotationFromEuler(zi)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,m.aoMapTransform))}function o(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform))}function a(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,A,b){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*A,m.scale.value=b*.5,h.map&&(m.map.value=h.map,t(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function f(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function d(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,A){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Ht&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=A.texture,m.transmissionSamplerSize.value.set(A.width,A.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,h){h.matcap&&(m.matcap.value=h.matcap)}function S(m,h){const A=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(A.matrixWorld),m.nearDistance.value=A.shadow.camera.near,m.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function H0(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(A,b){const y=b.program;i.uniformBlockBinding(A,y)}function c(A,b){let y=r[A.id];y===void 0&&(v(A),y=u(A),r[A.id]=y,A.addEventListener("dispose",m));const L=b.program;i.updateUBOMapping(A,L);const P=e.render.frame;s[A.id]!==P&&(d(A),s[A.id]=P)}function u(A){const b=f();A.__bindingPointIndex=b;const y=n.createBuffer(),L=A.__size,P=A.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,L,P),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,y),y}function f(){for(let A=0;A<a;A++)if(o.indexOf(A)===-1)return o.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(A){const b=r[A.id],y=A.uniforms,L=A.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let P=0,w=y.length;P<w;P++){const U=Array.isArray(y[P])?y[P]:[y[P]];for(let E=0,M=U.length;E<M;E++){const C=U[E];if(p(C,P,E,L)===!0){const Q=C.__offset,Y=Array.isArray(C.value)?C.value:[C.value];let ne=0;for(let re=0;re<Y.length;re++){const Z=Y[re],J=S(Z);typeof Z=="number"||typeof Z=="boolean"?(C.__data[0]=Z,n.bufferSubData(n.UNIFORM_BUFFER,Q+ne,C.__data)):Z.isMatrix3?(C.__data[0]=Z.elements[0],C.__data[1]=Z.elements[1],C.__data[2]=Z.elements[2],C.__data[3]=0,C.__data[4]=Z.elements[3],C.__data[5]=Z.elements[4],C.__data[6]=Z.elements[5],C.__data[7]=0,C.__data[8]=Z.elements[6],C.__data[9]=Z.elements[7],C.__data[10]=Z.elements[8],C.__data[11]=0):(Z.toArray(C.__data,ne),ne+=J.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,Q,C.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(A,b,y,L){const P=A.value,w=b+"_"+y;if(L[w]===void 0)return typeof P=="number"||typeof P=="boolean"?L[w]=P:L[w]=P.clone(),!0;{const U=L[w];if(typeof P=="number"||typeof P=="boolean"){if(U!==P)return L[w]=P,!0}else if(U.equals(P)===!1)return U.copy(P),!0}return!1}function v(A){const b=A.uniforms;let y=0;const L=16;for(let w=0,U=b.length;w<U;w++){const E=Array.isArray(b[w])?b[w]:[b[w]];for(let M=0,C=E.length;M<C;M++){const Q=E[M],Y=Array.isArray(Q.value)?Q.value:[Q.value];for(let ne=0,re=Y.length;ne<re;ne++){const Z=Y[ne],J=S(Z),V=y%L,fe=V%J.boundary,ge=V+fe;y+=fe,ge!==0&&L-ge<J.storage&&(y+=L-ge),Q.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),Q.__offset=y,y+=J.storage}}}const P=y%L;return P>0&&(y+=L-P),A.__size=y,A.__cache={},this}function S(A){const b={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(b.boundary=4,b.storage=4):A.isVector2?(b.boundary=8,b.storage=8):A.isVector3||A.isColor?(b.boundary=16,b.storage=12):A.isVector4?(b.boundary=16,b.storage=16):A.isMatrix3?(b.boundary=48,b.storage=48):A.isMatrix4?(b.boundary=64,b.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),b}function m(A){const b=A.target;b.removeEventListener("dispose",m);const y=o.indexOf(b.__bindingPointIndex);o.splice(y,1),n.deleteBuffer(r[b.id]),delete r[b.id],delete s[b.id]}function h(){for(const A in r)n.deleteBuffer(r[A]);o=[],r={},s={}}return{bind:l,update:c,dispose:h}}class V0{constructor(e={}){const{canvas:t=Mx(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const v=new Uint32Array(4),S=new Int32Array(4);let m=null,h=null;const A=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Qt,this.toneMapping=ii,this.toneMappingExposure=1;const y=this;let L=!1,P=0,w=0,U=null,E=-1,M=null;const C=new st,Q=new st;let Y=null;const ne=new $e(0);let re=0,Z=t.width,J=t.height,V=1,fe=null,ge=null;const ye=new st(0,0,Z,J),Pe=new st(0,0,Z,J);let je=!1;const ee=new Cl;let ue=!1,Se=!1;const he=new ft,Ae=new ft,Ie=new H,Fe=new st,at={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ke=!1;function T(){return U===null?V:1}let _=i;function X(z,I){return t.getContext(z,I)}try{const z={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ml}`),t.addEventListener("webglcontextlost",te,!1),t.addEventListener("webglcontextrestored",ve,!1),t.addEventListener("webglcontextcreationerror",_e,!1),_===null){const I="webgl2";if(_=X(I,z),_===null)throw X(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(z){throw console.error("THREE.WebGLRenderer: "+z.message),z}let K,q,G,se,$,g,x,R,N,B,O,le,oe,ae,Le,ie,de,Ee,we,ze,De,Re,tt,D;function xe(){K=new jg(_),K.init(),Re=new D0(_,K),q=new Wg(_,K,e,Re),G=new C0(_,K),q.reverseDepthBuffer&&d&&G.buffers.depth.setReversed(!0),se=new Qg(_),$=new _0,g=new P0(_,K,G,$,q,Re,se),x=new qg(y),R=new Kg(y),N=new om(_),tt=new Gg(_,N),B=new Zg(_,N,se,tt),O=new t1(_,B,N,se),we=new e1(_,q,g),ie=new Xg($),le=new m0(y,x,R,K,q,tt,ie),oe=new B0(y,$),ae=new v0,Le=new T0(K),Ee=new Vg(y,x,R,G,O,p,l),de=new w0(y,O,q),D=new H0(_,se,q,G),ze=new kg(_,K,se),De=new Jg(_,K,se),se.programs=le.programs,y.capabilities=q,y.extensions=K,y.properties=$,y.renderLists=ae,y.shadowMap=de,y.state=G,y.info=se}xe();const j=new F0(y,_);this.xr=j,this.getContext=function(){return _},this.getContextAttributes=function(){return _.getContextAttributes()},this.forceContextLoss=function(){const z=K.get("WEBGL_lose_context");z&&z.loseContext()},this.forceContextRestore=function(){const z=K.get("WEBGL_lose_context");z&&z.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(z){z!==void 0&&(V=z,this.setSize(Z,J,!1))},this.getSize=function(z){return z.set(Z,J)},this.setSize=function(z,I,k=!0){if(j.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=z,J=I,t.width=Math.floor(z*V),t.height=Math.floor(I*V),k===!0&&(t.style.width=z+"px",t.style.height=I+"px"),this.setViewport(0,0,z,I)},this.getDrawingBufferSize=function(z){return z.set(Z*V,J*V).floor()},this.setDrawingBufferSize=function(z,I,k){Z=z,J=I,V=k,t.width=Math.floor(z*k),t.height=Math.floor(I*k),this.setViewport(0,0,z,I)},this.getCurrentViewport=function(z){return z.copy(C)},this.getViewport=function(z){return z.copy(ye)},this.setViewport=function(z,I,k,W){z.isVector4?ye.set(z.x,z.y,z.z,z.w):ye.set(z,I,k,W),G.viewport(C.copy(ye).multiplyScalar(V).round())},this.getScissor=function(z){return z.copy(Pe)},this.setScissor=function(z,I,k,W){z.isVector4?Pe.set(z.x,z.y,z.z,z.w):Pe.set(z,I,k,W),G.scissor(Q.copy(Pe).multiplyScalar(V).round())},this.getScissorTest=function(){return je},this.setScissorTest=function(z){G.setScissorTest(je=z)},this.setOpaqueSort=function(z){fe=z},this.setTransparentSort=function(z){ge=z},this.getClearColor=function(z){return z.copy(Ee.getClearColor())},this.setClearColor=function(){Ee.setClearColor.apply(Ee,arguments)},this.getClearAlpha=function(){return Ee.getClearAlpha()},this.setClearAlpha=function(){Ee.setClearAlpha.apply(Ee,arguments)},this.clear=function(z=!0,I=!0,k=!0){let W=0;if(z){let F=!1;if(U!==null){const ce=U.texture.format;F=ce===wl||ce===Al||ce===bl}if(F){const ce=U.texture.type,me=ce===Vn||ce===Di||ce===Wr||ce===dr||ce===yl||ce===Tl,Me=Ee.getClearColor(),Te=Ee.getClearAlpha(),Ue=Me.r,Ne=Me.g,be=Me.b;me?(v[0]=Ue,v[1]=Ne,v[2]=be,v[3]=Te,_.clearBufferuiv(_.COLOR,0,v)):(S[0]=Ue,S[1]=Ne,S[2]=be,S[3]=Te,_.clearBufferiv(_.COLOR,0,S))}else W|=_.COLOR_BUFFER_BIT}I&&(W|=_.DEPTH_BUFFER_BIT),k&&(W|=_.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),_.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",te,!1),t.removeEventListener("webglcontextrestored",ve,!1),t.removeEventListener("webglcontextcreationerror",_e,!1),Ee.dispose(),ae.dispose(),Le.dispose(),$.dispose(),x.dispose(),R.dispose(),O.dispose(),tt.dispose(),D.dispose(),le.dispose(),j.dispose(),j.removeEventListener("sessionstart",Dl),j.removeEventListener("sessionend",Ll),fi.stop()};function te(z){z.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function ve(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const z=se.autoReset,I=de.enabled,k=de.autoUpdate,W=de.needsUpdate,F=de.type;xe(),se.autoReset=z,de.enabled=I,de.autoUpdate=k,de.needsUpdate=W,de.type=F}function _e(z){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",z.statusMessage)}function Be(z){const I=z.target;I.removeEventListener("dispose",Be),dt(I)}function dt(z){Tt(z),$.remove(z)}function Tt(z){const I=$.get(z).programs;I!==void 0&&(I.forEach(function(k){le.releaseProgram(k)}),z.isShaderMaterial&&le.releaseShaderCache(z))}this.renderBufferDirect=function(z,I,k,W,F,ce){I===null&&(I=at);const me=F.isMesh&&F.matrixWorld.determinant()<0,Me=th(z,I,k,W,F);G.setMaterial(W,me);let Te=k.index,Ue=1;if(W.wireframe===!0){if(Te=B.getWireframeAttribute(k),Te===void 0)return;Ue=2}const Ne=k.drawRange,be=k.attributes.position;let Xe=Ne.start*Ue,Ze=(Ne.start+Ne.count)*Ue;ce!==null&&(Xe=Math.max(Xe,ce.start*Ue),Ze=Math.min(Ze,(ce.start+ce.count)*Ue)),Te!==null?(Xe=Math.max(Xe,0),Ze=Math.min(Ze,Te.count)):be!=null&&(Xe=Math.max(Xe,0),Ze=Math.min(Ze,be.count));const xt=Ze-Xe;if(xt<0||xt===1/0)return;tt.setup(F,W,Me,k,Te);let pt,qe=ze;if(Te!==null&&(pt=N.get(Te),qe=De,qe.setIndex(pt)),F.isMesh)W.wireframe===!0?(G.setLineWidth(W.wireframeLinewidth*T()),qe.setMode(_.LINES)):qe.setMode(_.TRIANGLES);else if(F.isLine){let Ce=W.linewidth;Ce===void 0&&(Ce=1),G.setLineWidth(Ce*T()),F.isLineSegments?qe.setMode(_.LINES):F.isLineLoop?qe.setMode(_.LINE_LOOP):qe.setMode(_.LINE_STRIP)}else F.isPoints?qe.setMode(_.POINTS):F.isSprite&&qe.setMode(_.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)qe.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(K.get("WEBGL_multi_draw"))qe.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const Ce=F._multiDrawStarts,Et=F._multiDrawCounts,Je=F._multiDrawCount,rn=Te?N.get(Te).bytesPerElement:1,Ni=$.get(W).currentProgram.getUniforms();for(let kt=0;kt<Je;kt++)Ni.setValue(_,"_gl_DrawID",kt),qe.render(Ce[kt]/rn,Et[kt])}else if(F.isInstancedMesh)qe.renderInstances(Xe,xt,F.count);else if(k.isInstancedBufferGeometry){const Ce=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,Et=Math.min(k.instanceCount,Ce);qe.renderInstances(Xe,xt,Et)}else qe.render(Xe,xt)};function nt(z,I,k){z.transparent===!0&&z.side===Fn&&z.forceSinglePass===!1?(z.side=Ht,z.needsUpdate=!0,Jr(z,I,k),z.side=si,z.needsUpdate=!0,Jr(z,I,k),z.side=Fn):Jr(z,I,k)}this.compile=function(z,I,k=null){k===null&&(k=z),h=Le.get(k),h.init(I),b.push(h),k.traverseVisible(function(F){F.isLight&&F.layers.test(I.layers)&&(h.pushLight(F),F.castShadow&&h.pushShadow(F))}),z!==k&&z.traverseVisible(function(F){F.isLight&&F.layers.test(I.layers)&&(h.pushLight(F),F.castShadow&&h.pushShadow(F))}),h.setupLights();const W=new Set;return z.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const ce=F.material;if(ce)if(Array.isArray(ce))for(let me=0;me<ce.length;me++){const Me=ce[me];nt(Me,k,F),W.add(Me)}else nt(ce,k,F),W.add(ce)}),b.pop(),h=null,W},this.compileAsync=function(z,I,k=null){const W=this.compile(z,I,k);return new Promise(F=>{function ce(){if(W.forEach(function(me){$.get(me).currentProgram.isReady()&&W.delete(me)}),W.size===0){F(z);return}setTimeout(ce,10)}K.get("KHR_parallel_shader_compile")!==null?ce():setTimeout(ce,10)})};let nn=null;function An(z){nn&&nn(z)}function Dl(){fi.stop()}function Ll(){fi.start()}const fi=new Yf;fi.setAnimationLoop(An),typeof self<"u"&&fi.setContext(self),this.setAnimationLoop=function(z){nn=z,j.setAnimationLoop(z),z===null?fi.stop():fi.start()},j.addEventListener("sessionstart",Dl),j.addEventListener("sessionend",Ll),this.render=function(z,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),j.enabled===!0&&j.isPresenting===!0&&(j.cameraAutoUpdate===!0&&j.updateCamera(I),I=j.getCamera()),z.isScene===!0&&z.onBeforeRender(y,z,I,U),h=Le.get(z,b.length),h.init(I),b.push(h),Ae.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),ee.setFromProjectionMatrix(Ae),Se=this.localClippingEnabled,ue=ie.init(this.clippingPlanes,Se),m=ae.get(z,A.length),m.init(),A.push(m),j.enabled===!0&&j.isPresenting===!0){const ce=y.xr.getDepthSensingMesh();ce!==null&&co(ce,I,-1/0,y.sortObjects)}co(z,I,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(fe,ge),ke=j.enabled===!1||j.isPresenting===!1||j.hasDepthSensing()===!1,ke&&Ee.addToRenderList(m,z),this.info.render.frame++,ue===!0&&ie.beginShadows();const k=h.state.shadowsArray;de.render(k,z,I),ue===!0&&ie.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=m.opaque,F=m.transmissive;if(h.setupLights(),I.isArrayCamera){const ce=I.cameras;if(F.length>0)for(let me=0,Me=ce.length;me<Me;me++){const Te=ce[me];Ul(W,F,z,Te)}ke&&Ee.render(z);for(let me=0,Me=ce.length;me<Me;me++){const Te=ce[me];Il(m,z,Te,Te.viewport)}}else F.length>0&&Ul(W,F,z,I),ke&&Ee.render(z),Il(m,z,I);U!==null&&(g.updateMultisampleRenderTarget(U),g.updateRenderTargetMipmap(U)),z.isScene===!0&&z.onAfterRender(y,z,I),tt.resetDefaultState(),E=-1,M=null,b.pop(),b.length>0?(h=b[b.length-1],ue===!0&&ie.setGlobalState(y.clippingPlanes,h.state.camera)):h=null,A.pop(),A.length>0?m=A[A.length-1]:m=null};function co(z,I,k,W){if(z.visible===!1)return;if(z.layers.test(I.layers)){if(z.isGroup)k=z.renderOrder;else if(z.isLOD)z.autoUpdate===!0&&z.update(I);else if(z.isLight)h.pushLight(z),z.castShadow&&h.pushShadow(z);else if(z.isSprite){if(!z.frustumCulled||ee.intersectsSprite(z)){W&&Fe.setFromMatrixPosition(z.matrixWorld).applyMatrix4(Ae);const me=O.update(z),Me=z.material;Me.visible&&m.push(z,me,Me,k,Fe.z,null)}}else if((z.isMesh||z.isLine||z.isPoints)&&(!z.frustumCulled||ee.intersectsObject(z))){const me=O.update(z),Me=z.material;if(W&&(z.boundingSphere!==void 0?(z.boundingSphere===null&&z.computeBoundingSphere(),Fe.copy(z.boundingSphere.center)):(me.boundingSphere===null&&me.computeBoundingSphere(),Fe.copy(me.boundingSphere.center)),Fe.applyMatrix4(z.matrixWorld).applyMatrix4(Ae)),Array.isArray(Me)){const Te=me.groups;for(let Ue=0,Ne=Te.length;Ue<Ne;Ue++){const be=Te[Ue],Xe=Me[be.materialIndex];Xe&&Xe.visible&&m.push(z,me,Xe,k,Fe.z,be)}}else Me.visible&&m.push(z,me,Me,k,Fe.z,null)}}const ce=z.children;for(let me=0,Me=ce.length;me<Me;me++)co(ce[me],I,k,W)}function Il(z,I,k,W){const F=z.opaque,ce=z.transmissive,me=z.transparent;h.setupLightsView(k),ue===!0&&ie.setGlobalState(y.clippingPlanes,k),W&&G.viewport(C.copy(W)),F.length>0&&Zr(F,I,k),ce.length>0&&Zr(ce,I,k),me.length>0&&Zr(me,I,k),G.buffers.depth.setTest(!0),G.buffers.depth.setMask(!0),G.buffers.color.setMask(!0),G.setPolygonOffset(!1)}function Ul(z,I,k,W){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[W.id]===void 0&&(h.state.transmissionRenderTarget[W.id]=new Li(1,1,{generateMipmaps:!0,type:K.has("EXT_color_buffer_half_float")||K.has("EXT_color_buffer_float")?Yr:Vn,minFilter:Ai,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ye.workingColorSpace}));const ce=h.state.transmissionRenderTarget[W.id],me=W.viewport||C;ce.setSize(me.z,me.w);const Me=y.getRenderTarget();y.setRenderTarget(ce),y.getClearColor(ne),re=y.getClearAlpha(),re<1&&y.setClearColor(16777215,.5),y.clear(),ke&&Ee.render(k);const Te=y.toneMapping;y.toneMapping=ii;const Ue=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),h.setupLightsView(W),ue===!0&&ie.setGlobalState(y.clippingPlanes,W),Zr(z,k,W),g.updateMultisampleRenderTarget(ce),g.updateRenderTargetMipmap(ce),K.has("WEBGL_multisampled_render_to_texture")===!1){let Ne=!1;for(let be=0,Xe=I.length;be<Xe;be++){const Ze=I[be],xt=Ze.object,pt=Ze.geometry,qe=Ze.material,Ce=Ze.group;if(qe.side===Fn&&xt.layers.test(W.layers)){const Et=qe.side;qe.side=Ht,qe.needsUpdate=!0,Nl(xt,k,W,pt,qe,Ce),qe.side=Et,qe.needsUpdate=!0,Ne=!0}}Ne===!0&&(g.updateMultisampleRenderTarget(ce),g.updateRenderTargetMipmap(ce))}y.setRenderTarget(Me),y.setClearColor(ne,re),Ue!==void 0&&(W.viewport=Ue),y.toneMapping=Te}function Zr(z,I,k){const W=I.isScene===!0?I.overrideMaterial:null;for(let F=0,ce=z.length;F<ce;F++){const me=z[F],Me=me.object,Te=me.geometry,Ue=W===null?me.material:W,Ne=me.group;Me.layers.test(k.layers)&&Nl(Me,I,k,Te,Ue,Ne)}}function Nl(z,I,k,W,F,ce){z.onBeforeRender(y,I,k,W,F,ce),z.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,z.matrixWorld),z.normalMatrix.getNormalMatrix(z.modelViewMatrix),F.onBeforeRender(y,I,k,W,z,ce),F.transparent===!0&&F.side===Fn&&F.forceSinglePass===!1?(F.side=Ht,F.needsUpdate=!0,y.renderBufferDirect(k,I,W,F,z,ce),F.side=si,F.needsUpdate=!0,y.renderBufferDirect(k,I,W,F,z,ce),F.side=Fn):y.renderBufferDirect(k,I,W,F,z,ce),z.onAfterRender(y,I,k,W,F,ce)}function Jr(z,I,k){I.isScene!==!0&&(I=at);const W=$.get(z),F=h.state.lights,ce=h.state.shadowsArray,me=F.state.version,Me=le.getParameters(z,F.state,ce,I,k),Te=le.getProgramCacheKey(Me);let Ue=W.programs;W.environment=z.isMeshStandardMaterial?I.environment:null,W.fog=I.fog,W.envMap=(z.isMeshStandardMaterial?R:x).get(z.envMap||W.environment),W.envMapRotation=W.environment!==null&&z.envMap===null?I.environmentRotation:z.envMapRotation,Ue===void 0&&(z.addEventListener("dispose",Be),Ue=new Map,W.programs=Ue);let Ne=Ue.get(Te);if(Ne!==void 0){if(W.currentProgram===Ne&&W.lightsStateVersion===me)return Ol(z,Me),Ne}else Me.uniforms=le.getUniforms(z),z.onBeforeCompile(Me,y),Ne=le.acquireProgram(Me,Te),Ue.set(Te,Ne),W.uniforms=Me.uniforms;const be=W.uniforms;return(!z.isShaderMaterial&&!z.isRawShaderMaterial||z.clipping===!0)&&(be.clippingPlanes=ie.uniform),Ol(z,Me),W.needsLights=ih(z),W.lightsStateVersion=me,W.needsLights&&(be.ambientLightColor.value=F.state.ambient,be.lightProbe.value=F.state.probe,be.directionalLights.value=F.state.directional,be.directionalLightShadows.value=F.state.directionalShadow,be.spotLights.value=F.state.spot,be.spotLightShadows.value=F.state.spotShadow,be.rectAreaLights.value=F.state.rectArea,be.ltc_1.value=F.state.rectAreaLTC1,be.ltc_2.value=F.state.rectAreaLTC2,be.pointLights.value=F.state.point,be.pointLightShadows.value=F.state.pointShadow,be.hemisphereLights.value=F.state.hemi,be.directionalShadowMap.value=F.state.directionalShadowMap,be.directionalShadowMatrix.value=F.state.directionalShadowMatrix,be.spotShadowMap.value=F.state.spotShadowMap,be.spotLightMatrix.value=F.state.spotLightMatrix,be.spotLightMap.value=F.state.spotLightMap,be.pointShadowMap.value=F.state.pointShadowMap,be.pointShadowMatrix.value=F.state.pointShadowMatrix),W.currentProgram=Ne,W.uniformsList=null,Ne}function Fl(z){if(z.uniformsList===null){const I=z.currentProgram.getUniforms();z.uniformsList=Us.seqWithValue(I.seq,z.uniforms)}return z.uniformsList}function Ol(z,I){const k=$.get(z);k.outputColorSpace=I.outputColorSpace,k.batching=I.batching,k.batchingColor=I.batchingColor,k.instancing=I.instancing,k.instancingColor=I.instancingColor,k.instancingMorph=I.instancingMorph,k.skinning=I.skinning,k.morphTargets=I.morphTargets,k.morphNormals=I.morphNormals,k.morphColors=I.morphColors,k.morphTargetsCount=I.morphTargetsCount,k.numClippingPlanes=I.numClippingPlanes,k.numIntersection=I.numClipIntersection,k.vertexAlphas=I.vertexAlphas,k.vertexTangents=I.vertexTangents,k.toneMapping=I.toneMapping}function th(z,I,k,W,F){I.isScene!==!0&&(I=at),g.resetTextureUnits();const ce=I.fog,me=W.isMeshStandardMaterial?I.environment:null,Me=U===null?y.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:xr,Te=(W.isMeshStandardMaterial?R:x).get(W.envMap||me),Ue=W.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Ne=!!k.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),be=!!k.morphAttributes.position,Xe=!!k.morphAttributes.normal,Ze=!!k.morphAttributes.color;let xt=ii;W.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(xt=y.toneMapping);const pt=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,qe=pt!==void 0?pt.length:0,Ce=$.get(W),Et=h.state.lights;if(ue===!0&&(Se===!0||z!==M)){const Pt=z===M&&W.id===E;ie.setState(W,z,Pt)}let Je=!1;W.version===Ce.__version?(Ce.needsLights&&Ce.lightsStateVersion!==Et.state.version||Ce.outputColorSpace!==Me||F.isBatchedMesh&&Ce.batching===!1||!F.isBatchedMesh&&Ce.batching===!0||F.isBatchedMesh&&Ce.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Ce.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Ce.instancing===!1||!F.isInstancedMesh&&Ce.instancing===!0||F.isSkinnedMesh&&Ce.skinning===!1||!F.isSkinnedMesh&&Ce.skinning===!0||F.isInstancedMesh&&Ce.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Ce.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Ce.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Ce.instancingMorph===!1&&F.morphTexture!==null||Ce.envMap!==Te||W.fog===!0&&Ce.fog!==ce||Ce.numClippingPlanes!==void 0&&(Ce.numClippingPlanes!==ie.numPlanes||Ce.numIntersection!==ie.numIntersection)||Ce.vertexAlphas!==Ue||Ce.vertexTangents!==Ne||Ce.morphTargets!==be||Ce.morphNormals!==Xe||Ce.morphColors!==Ze||Ce.toneMapping!==xt||Ce.morphTargetsCount!==qe)&&(Je=!0):(Je=!0,Ce.__version=W.version);let rn=Ce.currentProgram;Je===!0&&(rn=Jr(W,I,F));let Ni=!1,kt=!1,zr=!1;const ut=rn.getUniforms(),jt=Ce.uniforms;if(G.useProgram(rn.program)&&(Ni=!0,kt=!0,zr=!0),W.id!==E&&(E=W.id,kt=!0),Ni||M!==z){G.buffers.depth.getReversed()?(he.copy(z.projectionMatrix),Ex(he),yx(he),ut.setValue(_,"projectionMatrix",he)):ut.setValue(_,"projectionMatrix",z.projectionMatrix),ut.setValue(_,"viewMatrix",z.matrixWorldInverse);const Ft=ut.map.cameraPosition;Ft!==void 0&&Ft.setValue(_,Ie.setFromMatrixPosition(z.matrixWorld)),q.logarithmicDepthBuffer&&ut.setValue(_,"logDepthBufFC",2/(Math.log(z.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&ut.setValue(_,"isOrthographic",z.isOrthographicCamera===!0),M!==z&&(M=z,kt=!0,zr=!0)}if(F.isSkinnedMesh){ut.setOptional(_,F,"bindMatrix"),ut.setOptional(_,F,"bindMatrixInverse");const Pt=F.skeleton;Pt&&(Pt.boneTexture===null&&Pt.computeBoneTexture(),ut.setValue(_,"boneTexture",Pt.boneTexture,g))}F.isBatchedMesh&&(ut.setOptional(_,F,"batchingTexture"),ut.setValue(_,"batchingTexture",F._matricesTexture,g),ut.setOptional(_,F,"batchingIdTexture"),ut.setValue(_,"batchingIdTexture",F._indirectTexture,g),ut.setOptional(_,F,"batchingColorTexture"),F._colorsTexture!==null&&ut.setValue(_,"batchingColorTexture",F._colorsTexture,g));const Zt=k.morphAttributes;if((Zt.position!==void 0||Zt.normal!==void 0||Zt.color!==void 0)&&we.update(F,k,rn),(kt||Ce.receiveShadow!==F.receiveShadow)&&(Ce.receiveShadow=F.receiveShadow,ut.setValue(_,"receiveShadow",F.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(jt.envMap.value=Te,jt.flipEnvMap.value=Te.isCubeTexture&&Te.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&I.environment!==null&&(jt.envMapIntensity.value=I.environmentIntensity),kt&&(ut.setValue(_,"toneMappingExposure",y.toneMappingExposure),Ce.needsLights&&nh(jt,zr),ce&&W.fog===!0&&oe.refreshFogUniforms(jt,ce),oe.refreshMaterialUniforms(jt,W,V,J,h.state.transmissionRenderTarget[z.id]),Us.upload(_,Fl(Ce),jt,g)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Us.upload(_,Fl(Ce),jt,g),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&ut.setValue(_,"center",F.center),ut.setValue(_,"modelViewMatrix",F.modelViewMatrix),ut.setValue(_,"normalMatrix",F.normalMatrix),ut.setValue(_,"modelMatrix",F.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const Pt=W.uniformsGroups;for(let Ft=0,uo=Pt.length;Ft<uo;Ft++){const hi=Pt[Ft];D.update(hi,rn),D.bind(hi,rn)}}return rn}function nh(z,I){z.ambientLightColor.needsUpdate=I,z.lightProbe.needsUpdate=I,z.directionalLights.needsUpdate=I,z.directionalLightShadows.needsUpdate=I,z.pointLights.needsUpdate=I,z.pointLightShadows.needsUpdate=I,z.spotLights.needsUpdate=I,z.spotLightShadows.needsUpdate=I,z.rectAreaLights.needsUpdate=I,z.hemisphereLights.needsUpdate=I}function ih(z){return z.isMeshLambertMaterial||z.isMeshToonMaterial||z.isMeshPhongMaterial||z.isMeshStandardMaterial||z.isShadowMaterial||z.isShaderMaterial&&z.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(z,I,k){$.get(z.texture).__webglTexture=I,$.get(z.depthTexture).__webglTexture=k;const W=$.get(z);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=k===void 0,W.__autoAllocateDepthBuffer||K.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(z,I){const k=$.get(z);k.__webglFramebuffer=I,k.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(z,I=0,k=0){U=z,P=I,w=k;let W=!0,F=null,ce=!1,me=!1;if(z){const Te=$.get(z);if(Te.__useDefaultFramebuffer!==void 0)G.bindFramebuffer(_.FRAMEBUFFER,null),W=!1;else if(Te.__webglFramebuffer===void 0)g.setupRenderTarget(z);else if(Te.__hasExternalTextures)g.rebindTextures(z,$.get(z.texture).__webglTexture,$.get(z.depthTexture).__webglTexture);else if(z.depthBuffer){const be=z.depthTexture;if(Te.__boundDepthTexture!==be){if(be!==null&&$.has(be)&&(z.width!==be.image.width||z.height!==be.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");g.setupDepthRenderbuffer(z)}}const Ue=z.texture;(Ue.isData3DTexture||Ue.isDataArrayTexture||Ue.isCompressedArrayTexture)&&(me=!0);const Ne=$.get(z).__webglFramebuffer;z.isWebGLCubeRenderTarget?(Array.isArray(Ne[I])?F=Ne[I][k]:F=Ne[I],ce=!0):z.samples>0&&g.useMultisampledRTT(z)===!1?F=$.get(z).__webglMultisampledFramebuffer:Array.isArray(Ne)?F=Ne[k]:F=Ne,C.copy(z.viewport),Q.copy(z.scissor),Y=z.scissorTest}else C.copy(ye).multiplyScalar(V).floor(),Q.copy(Pe).multiplyScalar(V).floor(),Y=je;if(G.bindFramebuffer(_.FRAMEBUFFER,F)&&W&&G.drawBuffers(z,F),G.viewport(C),G.scissor(Q),G.setScissorTest(Y),ce){const Te=$.get(z.texture);_.framebufferTexture2D(_.FRAMEBUFFER,_.COLOR_ATTACHMENT0,_.TEXTURE_CUBE_MAP_POSITIVE_X+I,Te.__webglTexture,k)}else if(me){const Te=$.get(z.texture),Ue=I||0;_.framebufferTextureLayer(_.FRAMEBUFFER,_.COLOR_ATTACHMENT0,Te.__webglTexture,k||0,Ue)}E=-1},this.readRenderTargetPixels=function(z,I,k,W,F,ce,me){if(!(z&&z.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=$.get(z).__webglFramebuffer;if(z.isWebGLCubeRenderTarget&&me!==void 0&&(Me=Me[me]),Me){G.bindFramebuffer(_.FRAMEBUFFER,Me);try{const Te=z.texture,Ue=Te.format,Ne=Te.type;if(!q.textureFormatReadable(Ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!q.textureTypeReadable(Ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=z.width-W&&k>=0&&k<=z.height-F&&_.readPixels(I,k,W,F,Re.convert(Ue),Re.convert(Ne),ce)}finally{const Te=U!==null?$.get(U).__webglFramebuffer:null;G.bindFramebuffer(_.FRAMEBUFFER,Te)}}},this.readRenderTargetPixelsAsync=async function(z,I,k,W,F,ce,me){if(!(z&&z.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Me=$.get(z).__webglFramebuffer;if(z.isWebGLCubeRenderTarget&&me!==void 0&&(Me=Me[me]),Me){const Te=z.texture,Ue=Te.format,Ne=Te.type;if(!q.textureFormatReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!q.textureTypeReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(I>=0&&I<=z.width-W&&k>=0&&k<=z.height-F){G.bindFramebuffer(_.FRAMEBUFFER,Me);const be=_.createBuffer();_.bindBuffer(_.PIXEL_PACK_BUFFER,be),_.bufferData(_.PIXEL_PACK_BUFFER,ce.byteLength,_.STREAM_READ),_.readPixels(I,k,W,F,Re.convert(Ue),Re.convert(Ne),0);const Xe=U!==null?$.get(U).__webglFramebuffer:null;G.bindFramebuffer(_.FRAMEBUFFER,Xe);const Ze=_.fenceSync(_.SYNC_GPU_COMMANDS_COMPLETE,0);return _.flush(),await Sx(_,Ze,4),_.bindBuffer(_.PIXEL_PACK_BUFFER,be),_.getBufferSubData(_.PIXEL_PACK_BUFFER,0,ce),_.deleteBuffer(be),_.deleteSync(Ze),ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(z,I=null,k=0){z.isTexture!==!0&&(Qi("WebGLRenderer: copyFramebufferToTexture function signature has changed."),I=arguments[0]||null,z=arguments[1]);const W=Math.pow(2,-k),F=Math.floor(z.image.width*W),ce=Math.floor(z.image.height*W),me=I!==null?I.x:0,Me=I!==null?I.y:0;g.setTexture2D(z,0),_.copyTexSubImage2D(_.TEXTURE_2D,k,0,0,me,Me,F,ce),G.unbindTexture()};const rh=_.createFramebuffer(),sh=_.createFramebuffer();this.copyTextureToTexture=function(z,I,k=null,W=null,F=0,ce=null){z.isTexture!==!0&&(Qi("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,z=arguments[1],I=arguments[2],ce=arguments[3]||0,k=null),ce===null&&(F!==0?(Qi("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ce=F,F=0):ce=0);let me,Me,Te,Ue,Ne,be,Xe,Ze,xt;const pt=z.isCompressedTexture?z.mipmaps[ce]:z.image;if(k!==null)me=k.max.x-k.min.x,Me=k.max.y-k.min.y,Te=k.isBox3?k.max.z-k.min.z:1,Ue=k.min.x,Ne=k.min.y,be=k.isBox3?k.min.z:0;else{const Zt=Math.pow(2,-F);me=Math.floor(pt.width*Zt),Me=Math.floor(pt.height*Zt),z.isDataArrayTexture?Te=pt.depth:z.isData3DTexture?Te=Math.floor(pt.depth*Zt):Te=1,Ue=0,Ne=0,be=0}W!==null?(Xe=W.x,Ze=W.y,xt=W.z):(Xe=0,Ze=0,xt=0);const qe=Re.convert(I.format),Ce=Re.convert(I.type);let Et;I.isData3DTexture?(g.setTexture3D(I,0),Et=_.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(g.setTexture2DArray(I,0),Et=_.TEXTURE_2D_ARRAY):(g.setTexture2D(I,0),Et=_.TEXTURE_2D),_.pixelStorei(_.UNPACK_FLIP_Y_WEBGL,I.flipY),_.pixelStorei(_.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),_.pixelStorei(_.UNPACK_ALIGNMENT,I.unpackAlignment);const Je=_.getParameter(_.UNPACK_ROW_LENGTH),rn=_.getParameter(_.UNPACK_IMAGE_HEIGHT),Ni=_.getParameter(_.UNPACK_SKIP_PIXELS),kt=_.getParameter(_.UNPACK_SKIP_ROWS),zr=_.getParameter(_.UNPACK_SKIP_IMAGES);_.pixelStorei(_.UNPACK_ROW_LENGTH,pt.width),_.pixelStorei(_.UNPACK_IMAGE_HEIGHT,pt.height),_.pixelStorei(_.UNPACK_SKIP_PIXELS,Ue),_.pixelStorei(_.UNPACK_SKIP_ROWS,Ne),_.pixelStorei(_.UNPACK_SKIP_IMAGES,be);const ut=z.isDataArrayTexture||z.isData3DTexture,jt=I.isDataArrayTexture||I.isData3DTexture;if(z.isDepthTexture){const Zt=$.get(z),Pt=$.get(I),Ft=$.get(Zt.__renderTarget),uo=$.get(Pt.__renderTarget);G.bindFramebuffer(_.READ_FRAMEBUFFER,Ft.__webglFramebuffer),G.bindFramebuffer(_.DRAW_FRAMEBUFFER,uo.__webglFramebuffer);for(let hi=0;hi<Te;hi++)ut&&(_.framebufferTextureLayer(_.READ_FRAMEBUFFER,_.COLOR_ATTACHMENT0,$.get(z).__webglTexture,F,be+hi),_.framebufferTextureLayer(_.DRAW_FRAMEBUFFER,_.COLOR_ATTACHMENT0,$.get(I).__webglTexture,ce,xt+hi)),_.blitFramebuffer(Ue,Ne,me,Me,Xe,Ze,me,Me,_.DEPTH_BUFFER_BIT,_.NEAREST);G.bindFramebuffer(_.READ_FRAMEBUFFER,null),G.bindFramebuffer(_.DRAW_FRAMEBUFFER,null)}else if(F!==0||z.isRenderTargetTexture||$.has(z)){const Zt=$.get(z),Pt=$.get(I);G.bindFramebuffer(_.READ_FRAMEBUFFER,rh),G.bindFramebuffer(_.DRAW_FRAMEBUFFER,sh);for(let Ft=0;Ft<Te;Ft++)ut?_.framebufferTextureLayer(_.READ_FRAMEBUFFER,_.COLOR_ATTACHMENT0,Zt.__webglTexture,F,be+Ft):_.framebufferTexture2D(_.READ_FRAMEBUFFER,_.COLOR_ATTACHMENT0,_.TEXTURE_2D,Zt.__webglTexture,F),jt?_.framebufferTextureLayer(_.DRAW_FRAMEBUFFER,_.COLOR_ATTACHMENT0,Pt.__webglTexture,ce,xt+Ft):_.framebufferTexture2D(_.DRAW_FRAMEBUFFER,_.COLOR_ATTACHMENT0,_.TEXTURE_2D,Pt.__webglTexture,ce),F!==0?_.blitFramebuffer(Ue,Ne,me,Me,Xe,Ze,me,Me,_.COLOR_BUFFER_BIT,_.NEAREST):jt?_.copyTexSubImage3D(Et,ce,Xe,Ze,xt+Ft,Ue,Ne,me,Me):_.copyTexSubImage2D(Et,ce,Xe,Ze,Ue,Ne,me,Me);G.bindFramebuffer(_.READ_FRAMEBUFFER,null),G.bindFramebuffer(_.DRAW_FRAMEBUFFER,null)}else jt?z.isDataTexture||z.isData3DTexture?_.texSubImage3D(Et,ce,Xe,Ze,xt,me,Me,Te,qe,Ce,pt.data):I.isCompressedArrayTexture?_.compressedTexSubImage3D(Et,ce,Xe,Ze,xt,me,Me,Te,qe,pt.data):_.texSubImage3D(Et,ce,Xe,Ze,xt,me,Me,Te,qe,Ce,pt):z.isDataTexture?_.texSubImage2D(_.TEXTURE_2D,ce,Xe,Ze,me,Me,qe,Ce,pt.data):z.isCompressedTexture?_.compressedTexSubImage2D(_.TEXTURE_2D,ce,Xe,Ze,pt.width,pt.height,qe,pt.data):_.texSubImage2D(_.TEXTURE_2D,ce,Xe,Ze,me,Me,qe,Ce,pt);_.pixelStorei(_.UNPACK_ROW_LENGTH,Je),_.pixelStorei(_.UNPACK_IMAGE_HEIGHT,rn),_.pixelStorei(_.UNPACK_SKIP_PIXELS,Ni),_.pixelStorei(_.UNPACK_SKIP_ROWS,kt),_.pixelStorei(_.UNPACK_SKIP_IMAGES,zr),ce===0&&I.generateMipmaps&&_.generateMipmap(Et),G.unbindTexture()},this.copyTextureToTexture3D=function(z,I,k=null,W=null,F=0){return z.isTexture!==!0&&(Qi("WebGLRenderer: copyTextureToTexture3D function signature has changed."),k=arguments[0]||null,W=arguments[1]||null,z=arguments[2],I=arguments[3],F=arguments[4]||0),Qi('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(z,I,k,W,F)},this.initRenderTarget=function(z){$.get(z).__webglFramebuffer===void 0&&g.setupRenderTarget(z)},this.initTexture=function(z){z.isCubeTexture?g.setTextureCube(z,0):z.isData3DTexture?g.setTexture3D(z,0):z.isDataArrayTexture||z.isCompressedArrayTexture?g.setTexture2DArray(z,0):g.setTexture2D(z,0),G.unbindTexture()},this.resetState=function(){P=0,w=0,U=null,G.reset(),tt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Bn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Ye._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ye._getUnpackColorSpace()}}const ao=[{characterPlacement:{x:15,z:18},name:"Achermlan le Rouge",level:[{x:0,z:0},{x:0,z:23},{x:1,z:23},{x:2,z:0},{x:2,z:23},{x:3,z:0},{x:3,z:23},{x:4,z:0},{x:4,z:23},{x:5,z:0},{x:5,z:23},{x:6,z:0},{x:6,z:23},{x:7,z:0},{x:7,z:23},{x:8,z:0},{x:8,z:23},{x:9,z:0},{x:9,z:23},{x:10,z:0},{x:10,z:23},{x:11,z:0},{x:11,z:23},{x:12,z:0},{x:12,z:23},{x:13,z:0},{x:13,z:23},{x:14,z:0},{x:14,z:23},{x:15,z:0},{x:15,z:23},{x:16,z:0},{x:16,z:23},{x:17,z:0},{x:17,z:23},{x:18,z:0},{x:18,z:23},{x:19,z:0},{x:19,z:23},{x:20,z:0},{x:20,z:23},{x:21,z:0},{x:21,z:23},{x:22,z:0},{x:22,z:23},{x:23,z:0},{x:23,z:23},{x:0,z:1},{x:23,z:1},{x:0,z:2},{x:23,z:2},{x:0,z:3},{x:23,z:3},{x:0,z:4},{x:23,z:4},{x:0,z:5},{x:23,z:5},{x:0,z:6},{x:23,z:6},{x:0,z:7},{x:23,z:7},{x:0,z:8},{x:23,z:8},{x:0,z:9},{x:23,z:9},{x:0,z:10},{x:23,z:10},{x:0,z:11},{x:23,z:11},{x:0,z:12},{x:23,z:12},{x:0,z:13},{x:23,z:13},{x:0,z:14},{x:23,z:14},{x:0,z:15},{x:23,z:15},{x:0,z:16},{x:23,z:16},{x:0,z:17},{x:23,z:17},{x:0,z:18},{x:23,z:18},{x:0,z:19},{x:23,z:19},{x:0,z:20},{x:23,z:20},{x:0,z:21},{x:23,z:21},{x:0,z:22},{x:23,z:22},{x:13,z:18},{x:13,z:17},{x:13,z:16},{x:14,z:16},{x:13,z:20},{x:14,z:20},{x:15,z:20},{x:16,z:20},{x:17,z:20},{x:17,z:19},{x:17,z:18},{x:17,z:17},{x:17,z:16},{x:16,z:16},{x:15,z:16},{x:14,z:15},{x:14,z:14},{x:14,z:13},{x:13,z:13},{x:12,z:13},{x:12,z:12},{x:11,z:20},{x:11,z:19},{x:11,z:18},{x:11,z:17},{x:11,z:16},{x:11,z:15},{x:10,z:14},{x:10,z:13},{x:10,z:12},{x:10,z:11},{x:11,z:10},{x:12,z:9},{x:13,z:11},{x:14,z:10},{x:14,z:9},{x:12,z:7},{x:12,z:6},{x:13,z:6},{x:14,z:6},{x:14,z:7},{x:10,z:9},{x:10,z:8},{x:10,z:7},{x:10,z:6},{x:10,z:5},{x:10,z:4},{x:11,z:4},{x:12,z:4},{x:13,z:4},{x:14,z:4},{x:15,z:4},{x:16,z:6},{x:16,z:7},{x:16,z:8},{x:16,z:9},{x:16,z:10},{x:17,z:4},{x:16,z:4},{x:18,z:6},{x:17,z:3},{x:17,z:2},{x:6,z:11},{x:7,z:11},{x:8,z:11},{x:14,z:21},{x:16,z:22},{x:18,z:20},{x:19,z:20},{x:19,z:19},{x:19,z:18},{x:18,z:16},{x:19,z:16},{x:20,z:16},{x:18,z:15},{x:18,z:14},{x:17,z:14},{x:16,z:14},{x:18,z:13},{x:18,z:12},{x:18,z:11},{x:19,z:11},{x:20,z:11},{x:20,z:10},{x:20,z:9},{x:19,z:9},{x:18,z:9},{x:18,z:8},{x:19,z:5},{x:20,z:5},{x:21,z:5},{x:18,z:2},{x:19,z:2},{x:21,z:2},{x:22,z:2},{x:20,z:7},{x:21,z:7},{x:22,z:13},{x:21,z:13},{x:20,z:13},{x:20,z:15},{x:21,z:15},{x:11,z:22},{x:1,z:5},{x:2,z:5},{x:3,z:5},{x:3,z:6},{x:3,z:7},{x:2,z:7},{x:2,z:9},{x:3,z:9},{x:2,z:8},{x:4,z:9},{x:4,z:10},{x:4,z:11},{x:4,z:12},{x:4,z:13},{x:5,z:13},{x:6,z:13},{x:7,z:13},{x:9,z:6},{x:8,z:6},{x:7,z:6},{x:7,z:7},{x:7,z:8},{x:7,z:9},{x:6,z:9},{x:2,z:3},{x:2,z:2},{x:2,z:11},{x:2,z:12},{x:2,z:13},{x:2,z:14},{x:2,z:15},{x:2,z:16},{x:3,z:16},{x:4,z:16},{x:3,z:17},{x:3,z:19},{x:2,z:18},{x:6,z:14},{x:6,z:15},{x:6,z:17},{x:6,z:16},{x:8,z:14},{x:8,z:15},{x:8,z:16},{x:8,z:17},{x:9,z:17},{x:7,z:19},{x:7,z:20},{x:6,z:21},{x:5,z:21},{x:4,z:21},{x:3,z:21},{x:3,z:22},{x:9,z:19},{x:9,z:20},{x:9,z:21},{x:9,z:22},{x:5,z:19},{x:4,z:15},{x:5,z:6},{x:5,z:5},{x:5,z:4},{x:5,z:3},{x:6,z:3},{x:7,z:3},{x:6,z:2},{x:7,z:4},{x:8,z:2},{x:9,z:2},{x:10,z:2},{x:7,z:1},{x:1,z:3},{x:3,z:2},{x:1,z:20},{x:12,z:1},{x:12,z:2},{x:13,z:2},{x:14,z:2},{x:15,z:2},{x:20,z:22},{x:21,z:21},{x:21,z:20},{x:21,z:19},{x:21,z:18},{x:18,z:21},{x:17,z:12},{x:16,z:12}]},{characterPlacement:{x:10,z:11},name:"Vladeousse",level:[{x:0,z:0},{x:0,z:23},{x:1,z:0},{x:1,z:23},{x:2,z:0},{x:2,z:23},{x:3,z:0},{x:3,z:23},{x:4,z:0},{x:4,z:23},{x:5,z:0},{x:5,z:23},{x:6,z:0},{x:6,z:23},{x:7,z:0},{x:7,z:23},{x:8,z:0},{x:8,z:23},{x:9,z:0},{x:9,z:23},{x:10,z:0},{x:10,z:23},{x:11,z:0},{x:11,z:23},{x:12,z:0},{x:12,z:23},{x:13,z:0},{x:13,z:23},{x:14,z:0},{x:14,z:23},{x:15,z:0},{x:15,z:23},{x:16,z:0},{x:16,z:23},{x:17,z:0},{x:17,z:23},{x:18,z:0},{x:18,z:23},{x:19,z:0},{x:19,z:23},{x:20,z:0},{x:20,z:23},{x:21,z:0},{x:21,z:23},{x:22,z:0},{x:23,z:0},{x:23,z:23},{x:0,z:1},{x:23,z:1},{x:0,z:2},{x:23,z:2},{x:0,z:3},{x:23,z:3},{x:0,z:4},{x:23,z:4},{x:0,z:5},{x:23,z:5},{x:0,z:6},{x:23,z:6},{x:0,z:7},{x:23,z:7},{x:0,z:8},{x:23,z:8},{x:0,z:9},{x:23,z:9},{x:0,z:10},{x:23,z:10},{x:0,z:11},{x:23,z:11},{x:0,z:12},{x:23,z:12},{x:0,z:13},{x:23,z:13},{x:0,z:14},{x:23,z:14},{x:0,z:15},{x:23,z:15},{x:0,z:16},{x:23,z:16},{x:0,z:17},{x:23,z:17},{x:0,z:18},{x:23,z:18},{x:0,z:19},{x:23,z:19},{x:0,z:20},{x:23,z:20},{x:0,z:21},{x:23,z:21},{x:0,z:22},{x:23,z:22},{x:21,z:21},{x:21,z:20},{x:21,z:19},{x:21,z:18},{x:19,z:20},{x:19,z:19},{x:19,z:21},{x:22,z:16},{x:21,z:16},{x:20,z:16},{x:20,z:14},{x:21,z:14},{x:22,z:14},{x:21,z:11},{x:19,z:11},{x:18,z:11},{x:17,z:11},{x:16,z:11},{x:16,z:13},{x:16,z:14},{x:17,z:15},{x:16,z:15},{x:20,z:13},{x:18,z:13},{x:19,z:13},{x:17,z:16},{x:17,z:18},{x:17,z:17},{x:17,z:20},{x:17,z:22},{x:15,z:20},{x:15,z:19},{x:15,z:18},{x:16,z:18},{x:14,z:20},{x:13,z:20},{x:13,z:21},{x:21,z:1},{x:21,z:2},{x:20,z:5},{x:20,z:4},{x:17,z:5},{x:18,z:5},{x:18,z:2},{x:17,z:2},{x:17,z:3},{x:1,z:2},{x:2,z:2},{x:3,z:2},{x:3,z:3},{x:3,z:5},{x:3,z:4},{x:1,z:4},{x:5,z:2},{x:5,z:1},{x:7,z:2},{x:7,z:3},{x:7,z:5},{x:7,z:4},{x:8,z:4},{x:10,z:4},{x:11,z:4},{x:10,z:2},{x:10,z:3},{x:13,z:3},{x:12,z:4},{x:13,z:4},{x:13,z:2},{x:13,z:1},{x:11,z:2},{x:5,z:4},{x:5,z:5},{x:4,z:4},{x:1,z:7},{x:2,z:7},{x:4,z:7},{x:15,z:21},{x:1,z:21},{x:2,z:21},{x:3,z:21},{x:3,z:20},{x:4,z:8},{x:4,z:9},{x:4,z:11},{x:2,z:11},{x:3,z:11},{x:2,z:8},{x:2,z:9},{x:9,z:10},{x:9,z:12},{x:11,z:12},{x:11,z:10},{x:15,z:2},{x:14,z:2},{x:15,z:5},{x:15,z:4},{x:22,z:4},{x:21,z:7},{x:20,z:7},{x:18,z:7},{x:18,z:6},{x:15,z:6},{x:16,z:8},{x:15,z:8},{x:20,z:8},{x:20,z:9},{x:19,z:9},{x:14,z:8},{x:14,z:9},{x:14,z:10},{x:14,z:11},{x:15,z:13},{x:13,z:13},{x:12,z:13},{x:11,z:13},{x:9,z:13},{x:9,z:14},{x:9,z:16},{x:11,z:17},{x:10,z:17},{x:9,z:17},{x:12,z:15},{x:14,z:15},{x:14,z:16},{x:14,z:17},{x:14,z:18},{x:10,z:18},{x:10,z:19},{x:11,z:20},{x:10,z:20},{x:12,z:17},{x:2,z:13},{x:1,z:13},{x:4,z:13},{x:5,z:13},{x:5,z:11},{x:5,z:12},{x:6,z:8},{x:5,z:8},{x:11,z:8},{x:10,z:8},{x:9,z:8},{x:12,z:8},{x:12,z:9},{x:12,z:10},{x:14,z:6},{x:13,z:6},{x:12,z:6},{x:9,z:6},{x:11,z:6},{x:17,z:21},{x:3,z:15},{x:2,z:15},{x:2,z:16},{x:2,z:18},{x:2,z:17},{x:3,z:18},{x:5,z:18},{x:4,z:18},{x:6,z:18},{x:6,z:17},{x:6,z:16},{x:5,z:16},{x:7,z:11},{x:6,z:13},{x:8,z:16},{x:5,z:19},{x:5,z:20},{x:7,z:19},{x:8,z:19},{x:8,z:20},{x:8,z:21},{x:7,z:21},{x:7,z:18},{x:10,z:22},{x:5,z:22},{x:7,z:14},{x:7,z:13},{x:5,z:14},{x:9,z:15},{x:13,z:22},{x:18,z:12},{x:21,z:10},{x:21,z:9},{x:21,z:22},{x:19,z:16},{x:19,z:17},{x:20,z:21},{x:14,z:12},{x:14,z:13},{x:8,z:8},{x:7,z:9},{x:7,z:8},{x:18,z:8},{x:18,z:9},{x:4,z:10},{x:11,z:15},{x:11,z:16},{x:7,z:7},{x:6,z:7},{x:7,z:6},{x:10,z:6},{x:17,z:8},{x:17,z:4},{x:20,z:2},{x:19,z:5},{x:12,z:5},{x:13,z:9},{x:7,z:10},{x:7,z:16},{x:5,z:15}]},{characterPlacement:{x:22,z:22},name:"Pierre l'Aigle",level:[{x:0,z:0},{x:0,z:23},{x:1,z:0},{x:1,z:23},{x:2,z:0},{x:2,z:23},{x:3,z:0},{x:3,z:23},{x:4,z:0},{x:4,z:23},{x:5,z:0},{x:5,z:23},{x:6,z:0},{x:6,z:23},{x:7,z:0},{x:7,z:23},{x:8,z:0},{x:8,z:23},{x:9,z:23},{x:10,z:0},{x:10,z:23},{x:11,z:0},{x:11,z:23},{x:12,z:0},{x:12,z:23},{x:13,z:0},{x:13,z:23},{x:14,z:0},{x:14,z:23},{x:15,z:0},{x:15,z:23},{x:16,z:0},{x:16,z:23},{x:17,z:0},{x:17,z:23},{x:18,z:0},{x:18,z:23},{x:19,z:0},{x:19,z:23},{x:20,z:0},{x:20,z:23},{x:21,z:0},{x:21,z:23},{x:22,z:0},{x:22,z:23},{x:23,z:0},{x:23,z:23},{x:0,z:1},{x:23,z:1},{x:0,z:2},{x:23,z:2},{x:0,z:3},{x:23,z:3},{x:0,z:4},{x:23,z:4},{x:0,z:5},{x:23,z:5},{x:0,z:6},{x:23,z:6},{x:0,z:7},{x:23,z:7},{x:0,z:8},{x:23,z:8},{x:0,z:9},{x:23,z:9},{x:0,z:10},{x:23,z:10},{x:0,z:11},{x:23,z:11},{x:0,z:12},{x:23,z:12},{x:0,z:13},{x:23,z:13},{x:0,z:14},{x:23,z:14},{x:0,z:15},{x:23,z:15},{x:0,z:16},{x:23,z:16},{x:0,z:17},{x:23,z:17},{x:0,z:18},{x:23,z:18},{x:0,z:19},{x:23,z:19},{x:0,z:20},{x:23,z:20},{x:0,z:21},{x:23,z:21},{x:0,z:22},{x:23,z:22},{x:8,z:10},{x:7,z:10},{x:5,z:10},{x:6,z:10},{x:17,z:5},{x:17,z:7},{x:17,z:6},{x:16,z:7},{x:15,z:6},{x:14,z:5},{x:6,z:6},{x:6,z:7},{x:6,z:8},{x:7,z:8},{x:15,z:7},{x:15,z:5},{x:8,z:8},{x:9,z:8},{x:10,z:8},{x:10,z:9},{x:3,z:7},{x:1,z:7},{x:2,z:7},{x:2,z:9},{x:3,z:9},{x:3,z:12},{x:3,z:11},{x:4,z:12},{x:6,z:12},{x:5,z:12},{x:5,z:13},{x:5,z:14},{x:1,z:22},{x:3,z:22},{x:3,z:21},{x:3,z:20},{x:3,z:19},{x:1,z:20},{x:1,z:18},{x:4,z:19},{x:9,z:12},{x:10,z:12},{x:10,z:11},{x:10,z:10},{x:10,z:14},{x:11,z:8},{x:11,z:7},{x:11,z:6},{x:12,z:5},{x:11,z:5},{x:13,z:5},{x:17,z:4},{x:18,z:4},{x:19,z:4},{x:19,z:5},{x:20,z:6},{x:19,z:6},{x:21,z:6},{x:21,z:7},{x:22,z:7},{x:2,z:14},{x:3,z:14},{x:1,z:14},{x:4,z:14},{x:3,z:8},{x:5,z:8},{x:5,z:9},{x:17,z:16},{x:15,z:16},{x:21,z:22},{x:5,z:22},{x:5,z:21},{x:6,z:21},{x:8,z:21},{x:7,z:21},{x:9,z:21},{x:9,z:20},{x:11,z:21},{x:12,z:21},{x:12,z:22},{x:22,z:19},{x:21,z:21},{x:20,z:19},{x:20,z:18},{x:20,z:17},{x:19,z:19},{x:18,z:19},{x:17,z:19},{x:17,z:17},{x:18,z:18},{x:18,z:17},{x:18,z:16},{x:16,z:20},{x:16,z:19},{x:14,z:13},{x:15,z:13},{x:16,z:13},{x:16,z:12},{x:16,z:11},{x:17,z:11},{x:18,z:11},{x:19,z:11},{x:20,z:11},{x:21,z:11},{x:22,z:11},{x:13,z:19},{x:15,z:19},{x:14,z:19},{x:14,z:18},{x:13,z:18},{x:9,z:17},{x:10,z:17},{x:10,z:16},{x:9,z:16},{x:2,z:12},{x:2,z:11},{x:2,z:16},{x:3,z:16},{x:5,z:16},{x:4,z:17},{x:3,z:17},{x:5,z:17},{x:9,z:14},{x:8,z:14},{x:7,z:14},{x:13,z:16},{x:14,z:16},{x:19,z:21},{x:18,z:21},{x:18,z:22},{x:16,z:22},{x:15,z:22},{x:14,z:21},{x:14,z:22},{x:12,z:19},{x:15,z:18},{x:12,z:18},{x:9,z:19},{x:11,z:19},{x:13,z:13},{x:12,z:13},{x:12,z:14},{x:11,z:14},{x:11,z:15},{x:22,z:18},{x:22,z:16},{x:22,z:15},{x:21,z:15},{x:20,z:15},{x:20,z:14},{x:18,z:15},{x:16,z:14},{x:14,z:15},{x:18,z:13},{x:19,z:13},{x:20,z:13},{x:22,z:13},{x:11,z:17},{x:5,z:15},{x:7,z:16},{x:7,z:17},{x:6,z:17},{x:6,z:20},{x:6,z:19},{x:8,z:19},{x:12,z:11},{x:15,z:9},{x:15,z:8},{x:16,z:9},{x:17,z:9},{x:19,z:7},{x:21,z:9},{x:21,z:8},{x:19,z:9},{x:20,z:9},{x:12,z:7},{x:14,z:9},{x:14,z:7},{x:13,z:11},{x:14,z:11},{x:13,z:12},{x:12,z:9},{x:21,z:2},{x:5,z:5},{x:5,z:6},{x:3,z:5},{x:3,z:4},{x:1,z:4},{x:2,z:6},{x:2,z:2},{x:4,z:2},{x:3,z:2},{x:8,z:1},{x:8,z:2},{x:7,z:2},{x:5,z:2},{x:5,z:1},{x:5,z:4},{x:6,z:4},{x:8,z:5},{x:8,z:4},{x:7,z:4},{x:9,z:2},{x:10,z:2},{x:12,z:2},{x:12,z:3},{x:13,z:2},{x:10,z:4},{x:10,z:5},{x:8,z:6},{x:10,z:6},{x:13,z:1},{x:18,z:2},{x:20,z:2},{x:19,z:2},{x:21,z:4},{x:22,z:4},{x:19,z:3},{x:16,z:2},{x:15,z:3},{x:15,z:2},{x:14,z:2},{x:14,z:3},{x:7,z:12}]},{characterPlacement:{x:15,z:18},name:"AraLesPaquerettes",level:[{x:0,z:0},{x:0,z:23},{x:1,z:0},{x:1,z:23},{x:2,z:0},{x:3,z:0},{x:3,z:23},{x:4,z:0},{x:4,z:23},{x:6,z:0},{x:6,z:23},{x:7,z:0},{x:7,z:23},{x:8,z:0},{x:8,z:23},{x:9,z:0},{x:9,z:23},{x:10,z:0},{x:10,z:23},{x:11,z:0},{x:11,z:23},{x:12,z:0},{x:13,z:0},{x:13,z:23},{x:14,z:0},{x:14,z:23},{x:15,z:0},{x:15,z:23},{x:16,z:0},{x:16,z:23},{x:17,z:0},{x:17,z:23},{x:18,z:0},{x:18,z:23},{x:19,z:0},{x:19,z:23},{x:20,z:0},{x:20,z:23},{x:21,z:0},{x:21,z:23},{x:22,z:0},{x:22,z:23},{x:23,z:0},{x:23,z:23},{x:0,z:1},{x:23,z:1},{x:0,z:2},{x:23,z:2},{x:0,z:3},{x:23,z:3},{x:0,z:4},{x:23,z:4},{x:0,z:5},{x:23,z:5},{x:0,z:6},{x:23,z:6},{x:0,z:7},{x:23,z:7},{x:0,z:8},{x:23,z:8},{x:0,z:9},{x:23,z:9},{x:0,z:10},{x:23,z:10},{x:0,z:11},{x:23,z:11},{x:0,z:12},{x:23,z:12},{x:0,z:13},{x:23,z:13},{x:0,z:14},{x:23,z:14},{x:0,z:15},{x:23,z:15},{x:0,z:16},{x:23,z:16},{x:0,z:17},{x:23,z:17},{x:0,z:18},{x:23,z:18},{x:0,z:19},{x:23,z:19},{x:0,z:20},{x:23,z:20},{x:0,z:21},{x:23,z:21},{x:0,z:22},{x:23,z:22},{x:2,z:2},{x:4,z:1},{x:6,z:1},{x:4,z:3},{x:2,z:4},{x:2,z:7},{x:2,z:5},{x:2,z:6},{x:4,z:4},{x:3,z:4},{x:4,z:2},{x:6,z:6},{x:4,z:7},{x:5,z:4},{x:8,z:2},{x:8,z:3},{x:8,z:4},{x:6,z:4},{x:6,z:2},{x:21,z:4},{x:22,z:2},{x:7,z:2},{x:11,z:2},{x:10,z:2},{x:11,z:1},{x:9,z:4},{x:10,z:4},{x:10,z:5},{x:2,z:23},{x:5,z:23},{x:12,z:23},{x:13,z:17},{x:16,z:20},{x:14,z:19},{x:13,z:19},{x:14,z:17},{x:14,z:16},{x:18,z:17},{x:20,z:17},{x:18,z:20},{x:19,z:20},{x:21,z:17},{x:22,z:17},{x:21,z:19},{x:21,z:20},{x:17,z:21},{x:19,z:17},{x:20,z:19},{x:17,z:17},{x:15,z:16},{x:15,z:15},{x:16,z:15},{x:18,z:16},{x:19,z:15},{x:18,z:15},{x:16,z:14},{x:16,z:21},{x:18,z:21},{x:20,z:22},{x:13,z:20},{x:13,z:21},{x:14,z:21},{x:11,z:22},{x:12,z:20},{x:11,z:20},{x:17,z:18},{x:11,z:17},{x:11,z:18},{x:9,z:21},{x:9,z:20},{x:8,z:21},{x:7,z:22},{x:9,z:19},{x:8,z:19},{x:8,z:18},{x:10,z:17},{x:8,z:16},{x:10,z:16},{x:10,z:15},{x:12,z:15},{x:11,z:15},{x:7,z:16},{x:7,z:18},{x:19,z:13},{x:18,z:13},{x:18,z:12},{x:21,z:13},{x:21,z:14},{x:21,z:15},{x:19,z:12},{x:19,z:11},{x:20,z:11},{x:21,z:10},{x:21,z:8},{x:20,z:10},{x:20,z:9},{x:22,z:8},{x:20,z:8},{x:19,z:19},{x:15,z:13},{x:16,z:13},{x:14,z:11},{x:14,z:12},{x:12,z:11},{x:12,z:12},{x:12,z:13},{x:10,z:13},{x:11,z:13},{x:14,z:13},{x:12,z:10},{x:13,z:9},{x:12,z:9},{x:14,z:9},{x:15,z:9},{x:16,z:11},{x:16,z:10},{x:16,z:9},{x:8,z:15},{x:6,z:16},{x:5,z:17},{x:5,z:16},{x:5,z:18},{x:4,z:18},{x:6,z:20},{x:5,z:20},{x:8,z:22},{x:5,z:21},{x:3,z:21},{x:4,z:21},{x:3,z:18},{x:2,z:17},{x:2,z:16},{x:2,z:21},{x:1,z:20},{x:2,z:20},{x:1,z:14},{x:3,z:14},{x:3,z:15},{x:3,z:16},{x:2,z:18},{x:8,z:13},{x:7,z:13},{x:6,z:15},{x:7,z:15},{x:5,z:14},{x:5,z:15},{x:7,z:12},{x:4,z:11},{x:6,z:11},{x:6,z:9},{x:6,z:10},{x:1,z:12},{x:3,z:13},{x:3,z:12},{x:7,z:11},{x:2,z:9},{x:3,z:9},{x:18,z:9},{x:18,z:8},{x:18,z:7},{x:17,z:7},{x:18,z:6},{x:20,z:6},{x:19,z:6},{x:19,z:4},{x:20,z:4},{x:19,z:5},{x:22,z:6},{x:21,z:2},{x:19,z:3},{x:19,z:2},{x:17,z:1},{x:18,z:4},{x:16,z:4},{x:16,z:5},{x:15,z:7},{x:15,z:6},{x:14,z:7},{x:13,z:7},{x:7,z:6},{x:8,z:6},{x:5,z:7},{x:4,z:5},{x:10,z:6},{x:10,z:8},{x:10,z:7},{x:9,z:8},{x:8,z:8},{x:8,z:7},{x:6,z:7},{x:4,z:10},{x:4,z:12},{x:1,z:10},{x:3,z:10},{x:1,z:9},{x:16,z:12},{x:9,z:11},{x:9,z:10},{x:10,z:9},{x:10,z:10},{x:13,z:6},{x:13,z:5},{x:13,z:4},{x:14,z:3},{x:14,z:2},{x:16,z:3},{x:15,z:5},{x:13,z:3},{x:11,z:7},{x:12,z:4},{x:11,z:6}]},{characterPlacement:{x:2,z:21},name:"Araklette",level:[{x:0,z:0},{x:0,z:23},{x:1,z:0},{x:1,z:23},{x:2,z:0},{x:2,z:23},{x:3,z:0},{x:3,z:23},{x:4,z:0},{x:4,z:23},{x:5,z:23},{x:6,z:0},{x:6,z:23},{x:7,z:0},{x:7,z:23},{x:8,z:0},{x:8,z:23},{x:9,z:0},{x:9,z:23},{x:10,z:0},{x:10,z:23},{x:11,z:0},{x:11,z:23},{x:12,z:0},{x:12,z:23},{x:13,z:0},{x:13,z:23},{x:14,z:0},{x:14,z:23},{x:15,z:0},{x:15,z:23},{x:16,z:0},{x:16,z:23},{x:17,z:0},{x:17,z:23},{x:18,z:0},{x:18,z:23},{x:19,z:0},{x:19,z:23},{x:20,z:23},{x:21,z:0},{x:21,z:23},{x:22,z:0},{x:22,z:23},{x:23,z:0},{x:23,z:23},{x:0,z:1},{x:23,z:1},{x:0,z:2},{x:23,z:2},{x:0,z:3},{x:23,z:3},{x:0,z:4},{x:23,z:4},{x:0,z:5},{x:23,z:5},{x:0,z:6},{x:23,z:6},{x:0,z:7},{x:23,z:7},{x:0,z:8},{x:23,z:8},{x:0,z:9},{x:23,z:9},{x:0,z:10},{x:23,z:10},{x:0,z:11},{x:23,z:11},{x:0,z:12},{x:23,z:12},{x:0,z:13},{x:23,z:13},{x:0,z:14},{x:23,z:14},{x:0,z:15},{x:23,z:15},{x:0,z:16},{x:23,z:16},{x:0,z:17},{x:23,z:17},{x:0,z:18},{x:23,z:18},{x:0,z:19},{x:23,z:19},{x:0,z:20},{x:23,z:20},{x:0,z:21},{x:23,z:21},{x:0,z:22},{x:23,z:22},{x:3,z:20},{x:3,z:19},{x:3,z:18},{x:3,z:17},{x:3,z:16},{x:3,z:3},{x:3,z:4},{x:3,z:5},{x:3,z:6},{x:4,z:3},{x:5,z:3},{x:7,z:3},{x:6,z:3},{x:8,z:3},{x:5,z:5},{x:6,z:5},{x:7,z:5},{x:5,z:7},{x:5,z:8},{x:3,z:8},{x:3,z:7},{x:4,z:20},{x:5,z:20},{x:7,z:20},{x:8,z:20},{x:5,z:18},{x:6,z:18},{x:7,z:18},{x:5,z:17},{x:5,z:16},{x:8,z:18},{x:8,z:17},{x:8,z:15},{x:7,z:15},{x:6,z:15},{x:5,z:15},{x:9,z:20},{x:10,z:20},{x:10,z:19},{x:10,z:18},{x:10,z:17},{x:10,z:16},{x:10,z:15},{x:10,z:13},{x:9,z:13},{x:7,z:13},{x:8,z:13},{x:6,z:13},{x:5,z:13},{x:4,z:13},{x:3,z:13},{x:3,z:14},{x:3,z:15},{x:6,z:8},{x:8,z:8},{x:8,z:7},{x:8,z:6},{x:8,z:5},{x:9,z:3},{x:10,z:3},{x:10,z:5},{x:10,z:4},{x:10,z:6},{x:10,z:7},{x:10,z:9},{x:10,z:8},{x:10,z:10},{x:8,z:10},{x:7,z:10},{x:6,z:10},{x:5,z:10},{x:4,z:10},{x:3,z:10},{x:20,z:20},{x:19,z:20},{x:13,z:20},{x:14,z:20},{x:17,z:20},{x:18,z:20},{x:13,z:19},{x:13,z:18},{x:15,z:18},{x:16,z:18},{x:17,z:18},{x:18,z:18},{x:20,z:19},{x:20,z:18},{x:20,z:17},{x:20,z:16},{x:20,z:14},{x:20,z:15},{x:20,z:13},{x:13,z:13},{x:15,z:13},{x:16,z:13},{x:17,z:13},{x:18,z:13},{x:19,z:13},{x:13,z:14},{x:13,z:16},{x:13,z:15},{x:13,z:17},{x:15,z:17},{x:16,z:15},{x:15,z:15},{x:18,z:15},{x:17,z:15},{x:18,z:17},{x:18,z:16},{x:13,z:8},{x:13,z:6},{x:13,z:5},{x:13,z:4},{x:13,z:3},{x:14,z:3},{x:17,z:3},{x:16,z:3},{x:19,z:3},{x:20,z:3},{x:20,z:4},{x:20,z:5},{x:20,z:6},{x:20,z:7},{x:20,z:9},{x:20,z:8},{x:20,z:10},{x:19,z:10},{x:18,z:10},{x:17,z:10},{x:16,z:10},{x:15,z:10},{x:14,z:10},{x:15,z:5},{x:18,z:5},{x:18,z:6},{x:18,z:7},{x:18,z:8},{x:17,z:8},{x:16,z:8},{x:15,z:8},{x:15,z:6},{x:8,z:9},{x:10,z:11},{x:11,z:10},{x:13,z:11},{x:13,z:12},{x:11,z:13},{x:12,z:13},{x:8,z:11},{x:8,z:12},{x:11,z:15},{x:15,z:14},{x:15,z:11},{x:12,z:8},{x:11,z:8},{x:14,z:8},{x:9,z:15},{x:15,z:20},{x:18,z:3},{x:15,z:3},{x:1,z:2},{x:20,z:21},{x:13,z:10},{x:21,z:21},{x:21,z:22},{x:22,z:22},{x:21,z:1},{x:21,z:2},{x:20,z:2},{x:22,z:1},{x:7,z:2},{x:10,z:1},{x:15,z:2},{x:18,z:1},{x:4,z:1},{x:6,z:2},{x:17,z:5},{x:14,z:6},{x:3,z:2},{x:3,z:1}]},{characterPlacement:{x:2,z:17},name:"KerauChane",level:[{x:0,z:0},{x:0,z:23},{x:1,z:0},{x:1,z:23},{x:2,z:0},{x:2,z:23},{x:3,z:0},{x:3,z:23},{x:4,z:0},{x:4,z:23},{x:5,z:0},{x:5,z:23},{x:6,z:0},{x:6,z:23},{x:7,z:0},{x:7,z:23},{x:8,z:0},{x:8,z:23},{x:9,z:0},{x:9,z:23},{x:10,z:0},{x:10,z:23},{x:11,z:0},{x:11,z:23},{x:12,z:0},{x:12,z:23},{x:13,z:0},{x:13,z:23},{x:14,z:0},{x:14,z:23},{x:15,z:0},{x:15,z:23},{x:16,z:0},{x:16,z:23},{x:17,z:0},{x:17,z:23},{x:18,z:0},{x:18,z:23},{x:19,z:0},{x:19,z:23},{x:20,z:0},{x:20,z:23},{x:21,z:0},{x:22,z:0},{x:22,z:23},{x:23,z:0},{x:23,z:23},{x:0,z:1},{x:23,z:1},{x:0,z:2},{x:23,z:2},{x:0,z:3},{x:23,z:3},{x:0,z:4},{x:23,z:4},{x:0,z:5},{x:23,z:5},{x:0,z:6},{x:23,z:6},{x:0,z:7},{x:23,z:7},{x:0,z:8},{x:23,z:8},{x:0,z:9},{x:23,z:9},{x:0,z:10},{x:23,z:10},{x:0,z:11},{x:23,z:11},{x:0,z:12},{x:23,z:12},{x:0,z:13},{x:23,z:13},{x:0,z:14},{x:23,z:14},{x:0,z:15},{x:23,z:15},{x:0,z:16},{x:23,z:16},{x:0,z:17},{x:23,z:17},{x:0,z:18},{x:23,z:18},{x:0,z:19},{x:23,z:19},{x:0,z:20},{x:23,z:20},{x:0,z:21},{x:23,z:21},{x:0,z:22},{x:23,z:22},{x:20,z:22},{x:20,z:21},{x:20,z:20},{x:20,z:19},{x:21,z:19},{x:21,z:17},{x:18,z:21},{x:18,z:20},{x:20,z:17},{x:18,z:18},{x:18,z:17},{x:2,z:4},{x:2,z:3},{x:2,z:2},{x:2,z:5},{x:2,z:6},{x:2,z:7},{x:3,z:2},{x:4,z:2},{x:3,z:8},{x:2,z:8},{x:3,z:5},{x:4,z:8},{x:5,z:8},{x:4,z:5},{x:5,z:2},{x:8,z:2},{x:8,z:3},{x:9,z:5},{x:9,z:6},{x:9,z:7},{x:10,z:8},{x:11,z:7},{x:11,z:6},{x:11,z:5},{x:12,z:4},{x:12,z:3},{x:12,z:2},{x:14,z:8},{x:14,z:6},{x:14,z:7},{x:14,z:5},{x:15,z:4},{x:16,z:3},{x:15,z:3},{x:16,z:2},{x:17,z:3},{x:17,z:4},{x:18,z:5},{x:18,z:6},{x:18,z:7},{x:18,z:8},{x:15,z:6},{x:16,z:6},{x:17,z:6},{x:20,z:8},{x:21,z:8},{x:21,z:7},{x:20,z:7},{x:20,z:5},{x:21,z:5},{x:21,z:4},{x:20,z:4},{x:20,z:3},{x:21,z:3},{x:21,z:2},{x:20,z:2},{x:19,z:21},{x:16,z:20},{x:16,z:18},{x:16,z:16},{x:18,z:15},{x:19,z:15},{x:20,z:15},{x:21,z:15},{x:15,z:20},{x:14,z:20},{x:13,z:20},{x:12,z:20},{x:10,z:18},{x:11,z:20},{x:10,z:20},{x:9,z:18},{x:9,z:20},{x:9,z:19},{x:14,z:18},{x:15,z:18},{x:13,z:18},{x:12,z:18},{x:18,z:19},{x:16,z:15},{x:16,z:13},{x:17,z:13},{x:18,z:13},{x:19,z:13},{x:21,z:13},{x:21,z:12},{x:21,z:11},{x:21,z:10},{x:21,z:9},{x:21,z:6},{x:16,z:1},{x:18,z:9},{x:18,z:10},{x:18,z:11},{x:19,z:11},{x:16,z:11},{x:16,z:10},{x:16,z:9},{x:16,z:8},{x:15,z:10},{x:14,z:10},{x:13,z:10},{x:15,z:13},{x:13,z:13},{x:13,z:14},{x:13,z:15},{x:13,z:16},{x:12,z:16},{x:11,z:16},{x:10,z:16},{x:10,z:17},{x:12,z:17},{x:14,z:15},{x:13,z:11},{x:12,z:10},{x:11,z:10},{x:10,z:10},{x:10,z:9},{x:7,z:1},{x:7,z:2},{x:7,z:3},{x:7,z:4},{x:7,z:5},{x:7,z:6},{x:7,z:7},{x:7,z:8},{x:7,z:9},{x:8,z:9},{x:10,z:11},{x:9,z:11},{x:8,z:11},{x:7,z:11},{x:6,z:11},{x:5,z:11},{x:4,z:11},{x:4,z:10},{x:2,z:10},{x:2,z:9},{x:1,z:12},{x:1,z:13},{x:2,z:13},{x:3,z:13},{x:4,z:13},{x:6,z:6},{x:6,z:4},{x:3,z:3},{x:3,z:7},{x:5,z:9},{x:5,z:10},{x:17,z:16},{x:18,z:16},{x:12,z:13},{x:11,z:13},{x:8,z:12},{x:8,z:13},{x:8,z:14},{x:10,z:14},{x:8,z:16},{x:7,z:16},{x:5,z:16},{x:6,z:16},{x:7,z:18},{x:7,z:19},{x:7,z:20},{x:5,z:15},{x:5,z:17},{x:4,z:17},{x:4,z:18},{x:4,z:19},{x:4,z:20},{x:4,z:21},{x:6,z:21},{x:7,z:21},{x:10,z:21},{x:12,z:22},{x:14,z:21},{x:16,z:21},{x:14,z:13},{x:19,z:12},{x:21,z:14},{x:22,z:17},{x:21,z:21},{x:6,z:22},{x:6,z:14},{x:6,z:13},{x:7,z:12},{x:7,z:17},{x:2,z:16},{x:2,z:19}]},{characterPlacement:{x:4,z:22},name:"51 PR",level:[{x:0,z:0},{x:0,z:23},{x:1,z:0},{x:2,z:0},{x:3,z:0},{x:3,z:23},{x:4,z:0},{x:4,z:23},{x:5,z:0},{x:5,z:23},{x:6,z:0},{x:6,z:23},{x:7,z:0},{x:7,z:23},{x:8,z:0},{x:8,z:23},{x:9,z:0},{x:9,z:23},{x:10,z:0},{x:10,z:23},{x:11,z:0},{x:11,z:23},{x:12,z:0},{x:12,z:23},{x:13,z:0},{x:13,z:23},{x:14,z:0},{x:14,z:23},{x:15,z:0},{x:15,z:23},{x:16,z:0},{x:16,z:23},{x:17,z:0},{x:17,z:23},{x:18,z:0},{x:18,z:23},{x:19,z:0},{x:19,z:23},{x:20,z:0},{x:20,z:23},{x:21,z:0},{x:21,z:23},{x:22,z:0},{x:22,z:23},{x:23,z:0},{x:23,z:23},{x:0,z:1},{x:23,z:1},{x:0,z:2},{x:23,z:2},{x:0,z:3},{x:23,z:3},{x:0,z:4},{x:23,z:4},{x:0,z:5},{x:23,z:5},{x:0,z:6},{x:23,z:6},{x:0,z:7},{x:23,z:7},{x:0,z:8},{x:23,z:8},{x:0,z:9},{x:23,z:9},{x:0,z:10},{x:23,z:10},{x:0,z:11},{x:23,z:11},{x:0,z:12},{x:23,z:12},{x:0,z:13},{x:23,z:13},{x:0,z:14},{x:23,z:14},{x:0,z:15},{x:23,z:15},{x:0,z:16},{x:23,z:16},{x:0,z:17},{x:23,z:17},{x:0,z:18},{x:23,z:18},{x:0,z:19},{x:23,z:19},{x:0,z:20},{x:23,z:20},{x:0,z:21},{x:23,z:21},{x:0,z:22},{x:23,z:22},{x:1,z:23},{x:3,z:22},{x:3,z:21},{x:2,z:21},{x:1,z:19},{x:2,z:19},{x:4,z:19},{x:5,z:19},{x:5,z:20},{x:2,z:18},{x:4,z:18},{x:5,z:22},{x:7,z:20},{x:8,z:20},{x:8,z:19},{x:8,z:18},{x:7,z:18},{x:4,z:17},{x:2,z:16},{x:2,z:15},{x:2,z:14},{x:4,z:15},{x:1,z:14},{x:5,z:17},{x:5,z:15},{x:6,z:14},{x:5,z:14},{x:3,z:12},{x:2,z:12},{x:2,z:10},{x:4,z:10},{x:3,z:10},{x:5,z:10},{x:5,z:11},{x:5,z:12},{x:1,z:8},{x:2,z:8},{x:4,z:8},{x:4,z:7},{x:7,z:22},{x:9,z:20},{x:9,z:21},{x:2,z:6},{x:2,z:5},{x:3,z:5},{x:4,z:5},{x:1,z:3},{x:2,z:3},{x:2,z:1},{x:3,z:3},{x:4,z:1},{x:5,z:3},{x:6,z:3},{x:6,z:2},{x:8,z:1},{x:8,z:2},{x:8,z:3},{x:7,z:3},{x:6,z:4},{x:6,z:6},{x:6,z:8},{x:6,z:7},{x:7,z:8},{x:8,z:5},{x:8,z:8},{x:8,z:7},{x:7,z:16},{x:8,z:16},{x:8,z:15},{x:8,z:14},{x:9,z:15},{x:7,z:12},{x:7,z:11},{x:8,z:9},{x:9,z:8},{x:8,z:11},{x:10,z:5},{x:10,z:6},{x:10,z:4},{x:10,z:2},{x:11,z:2},{x:12,z:2},{x:12,z:3},{x:13,z:3},{x:14,z:3},{x:14,z:2},{x:14,z:1},{x:11,z:8},{x:11,z:9},{x:11,z:10},{x:10,z:10},{x:12,z:8},{x:12,z:7},{x:12,z:5},{x:13,z:5},{x:14,z:7},{x:16,z:3},{x:16,z:2},{x:17,z:2},{x:17,z:1},{x:15,z:5},{x:16,z:5},{x:17,z:5},{x:18,z:4},{x:18,z:5},{x:17,z:6},{x:15,z:7},{x:17,z:8},{x:17,z:9},{x:16,z:9},{x:15,z:9},{x:14,z:8},{x:14,z:9},{x:19,z:2},{x:20,z:2},{x:21,z:2},{x:21,z:3},{x:21,z:4},{x:22,z:4},{x:20,z:4},{x:22,z:6},{x:21,z:6},{x:20,z:6},{x:20,z:7},{x:19,z:7},{x:22,z:8},{x:22,z:9},{x:21,z:9},{x:20,z:9},{x:19,z:9},{x:20,z:10},{x:22,z:11},{x:22,z:12},{x:20,z:11},{x:22,z:13},{x:21,z:13},{x:14,z:11},{x:16,z:11},{x:18,z:11},{x:13,z:11},{x:11,z:12},{x:10,z:12},{x:11,z:13},{x:10,z:13},{x:16,z:12},{x:16,z:13},{x:16,z:14},{x:15,z:13},{x:17,z:14},{x:18,z:14},{x:18,z:13},{x:13,z:13},{x:17,z:11},{x:11,z:15},{x:11,z:16},{x:11,z:17},{x:10,z:17},{x:12,z:15},{x:10,z:18},{x:13,z:17},{x:13,z:18},{x:13,z:19},{x:12,z:19},{x:12,z:20},{x:11,z:20},{x:11,z:22},{x:12,z:22},{x:14,z:21},{x:14,z:22},{x:14,z:15},{x:16,z:16},{x:16,z:17},{x:15,z:17},{x:15,z:21},{x:16,z:21},{x:15,z:20},{x:15,z:19},{x:16,z:19},{x:18,z:19},{x:18,z:21},{x:19,z:21},{x:20,z:21},{x:21,z:20},{x:22,z:22},{x:20,z:20},{x:17,z:17},{x:19,z:17},{x:19,z:16},{x:21,z:16},{x:21,z:17},{x:20,z:16},{x:21,z:14},{x:20,z:14},{x:21,z:18},{x:22,z:17},{x:20,z:13}]},{characterPlacement:{x:1,z:1},name:"Ile de la Rage",level:[{x:0,z:0},{x:0,z:23},{x:1,z:0},{x:2,z:0},{x:3,z:0},{x:4,z:0},{x:5,z:0},{x:6,z:0},{x:7,z:0},{x:8,z:0},{x:9,z:0},{x:9,z:23},{x:10,z:0},{x:10,z:23},{x:11,z:0},{x:11,z:23},{x:12,z:0},{x:12,z:23},{x:13,z:0},{x:13,z:23},{x:14,z:0},{x:14,z:23},{x:15,z:0},{x:15,z:23},{x:16,z:0},{x:16,z:23},{x:17,z:0},{x:17,z:23},{x:18,z:0},{x:18,z:23},{x:19,z:0},{x:19,z:23},{x:20,z:0},{x:20,z:23},{x:21,z:0},{x:21,z:23},{x:22,z:0},{x:23,z:0},{x:0,z:1},{x:23,z:1},{x:0,z:2},{x:23,z:2},{x:0,z:3},{x:23,z:3},{x:0,z:4},{x:23,z:4},{x:0,z:5},{x:23,z:5},{x:0,z:6},{x:23,z:6},{x:0,z:7},{x:23,z:7},{x:0,z:8},{x:23,z:8},{x:0,z:9},{x:23,z:9},{x:0,z:10},{x:23,z:10},{x:0,z:11},{x:23,z:11},{x:0,z:12},{x:23,z:12},{x:23,z:13},{x:23,z:14},{x:0,z:15},{x:23,z:15},{x:0,z:16},{x:23,z:16},{x:0,z:17},{x:23,z:17},{x:0,z:18},{x:23,z:18},{x:0,z:19},{x:23,z:19},{x:0,z:20},{x:23,z:20},{x:0,z:21},{x:0,z:22},{x:23,z:21},{x:7,z:12},{x:1,z:12},{x:3,z:12},{x:4,z:12},{x:2,z:12},{x:6,z:12},{x:5,z:12},{x:8,z:12},{x:9,z:12},{x:10,z:12},{x:11,z:12},{x:12,z:12},{x:13,z:12},{x:14,z:12},{x:15,z:12},{x:16,z:12},{x:17,z:12},{x:18,z:12},{x:12,z:2},{x:12,z:4},{x:12,z:5},{x:12,z:6},{x:12,z:7},{x:12,z:9},{x:12,z:10},{x:12,z:11},{x:12,z:14},{x:12,z:13},{x:12,z:15},{x:12,z:16},{x:12,z:17},{x:12,z:18},{x:12,z:21},{x:12,z:22},{x:1,z:6},{x:2,z:6},{x:3,z:6},{x:4,z:6},{x:6,z:6},{x:7,z:6},{x:8,z:6},{x:9,z:6},{x:10,z:6},{x:6,z:1},{x:6,z:2},{x:6,z:4},{x:6,z:5},{x:6,z:10},{x:6,z:11},{x:6,z:3},{x:14,z:2},{x:15,z:3},{x:17,z:5},{x:22,z:11},{x:14,z:10},{x:15,z:9},{x:16,z:8},{x:19,z:5},{x:20,z:4},{x:21,z:3},{x:20,z:9},{x:19,z:8},{x:16,z:7},{x:16,z:6},{x:16,z:5},{x:18,z:5},{x:17,z:13},{x:17,z:15},{x:17,z:16},{x:17,z:17},{x:17,z:18},{x:17,z:20},{x:17,z:21},{x:13,z:17},{x:14,z:17},{x:16,z:17},{x:18,z:17},{x:21,z:17},{x:22,z:17},{x:1,z:13},{x:3,z:15},{x:4,z:16},{x:5,z:17},{x:6,z:18},{x:8,z:20},{x:9,z:21},{x:6,z:7},{x:11,z:4},{x:10,z:4},{x:10,z:3},{x:10,z:2},{x:6,z:8},{x:5,z:8},{x:4,z:8},{x:4,z:10},{x:4,z:9},{x:1,z:8},{x:3,z:8},{x:2,z:10},{x:2,z:11},{x:3,z:5},{x:3,z:4},{x:3,z:3},{x:2,z:3},{x:4,z:3},{x:8,z:8},{x:8,z:9},{x:8,z:10},{x:9,z:9},{x:10,z:8},{x:10,z:10},{x:10,z:9},{x:11,z:6},{x:11,z:9},{x:14,z:6},{x:14,z:8},{x:15,z:8},{x:14,z:5},{x:14,z:4},{x:15,z:4},{x:13,z:10},{x:13,z:2},{x:15,z:2},{x:17,z:1},{x:7,z:2},{x:9,z:2},{x:8,z:4},{x:9,z:4},{x:7,z:1},{x:19,z:2},{x:20,z:2},{x:21,z:2},{x:18,z:3},{x:17,z:3},{x:20,z:6},{x:21,z:6},{x:21,z:4},{x:18,z:8},{x:21,z:7},{x:20,z:11},{x:21,z:11},{x:20,z:10},{x:21,z:9},{x:17,z:10},{x:18,z:10},{x:19,z:10},{x:15,z:10},{x:19,z:14},{x:19,z:15},{x:20,z:15},{x:20,z:14},{x:20,z:13},{x:19,z:16},{x:21,z:14},{x:21,z:15},{x:21,z:13},{x:22,z:23},{x:23,z:23},{x:23,z:22},{x:16,z:15},{x:15,z:15},{x:14,z:15},{x:14,z:14},{x:14,z:18},{x:14,z:19},{x:15,z:19},{x:19,z:18},{x:19,z:19},{x:19,z:20},{x:19,z:21},{x:20,z:21},{x:21,z:21},{x:21,z:20},{x:21,z:19},{x:18,z:18},{x:12,z:20},{x:13,z:21},{x:14,z:21},{x:15,z:21},{x:1,z:22},{x:3,z:20},{x:5,z:18},{x:7,z:16},{x:8,z:15},{x:9,z:14},{x:10,z:13},{x:11,z:13},{x:5,z:16},{x:7,z:18},{x:9,z:22},{x:8,z:18},{x:9,z:18},{x:10,z:18},{x:11,z:20},{x:8,z:19},{x:9,z:20},{x:10,z:16},{x:10,z:17},{x:7,z:15},{x:7,z:14},{x:9,z:13},{x:0,z:13},{x:0,z:14},{x:5,z:13},{x:5,z:14},{x:2,z:13},{x:3,z:13},{x:2,z:18},{x:2,z:19},{x:2,z:20},{x:2,z:17},{x:2,z:15},{x:4,z:18},{x:4,z:19},{x:6,z:23},{x:7,z:23},{x:5,z:23},{x:2,z:22},{x:2,z:23},{x:1,z:23},{x:3,z:22},{x:5,z:21},{x:6,z:21},{x:7,z:21},{x:3,z:23},{x:4,z:23},{x:6,z:20}]},{characterPlacement:{x:1,z:12},name:"Dans le Soleil",level:[{x:0,z:0},{x:0,z:23},{x:1,z:0},{x:1,z:23},{x:2,z:0},{x:2,z:23},{x:3,z:0},{x:3,z:23},{x:4,z:0},{x:4,z:23},{x:5,z:0},{x:5,z:23},{x:6,z:0},{x:6,z:23},{x:7,z:0},{x:7,z:23},{x:8,z:0},{x:8,z:23},{x:9,z:0},{x:9,z:23},{x:10,z:0},{x:10,z:23},{x:11,z:0},{x:11,z:23},{x:12,z:0},{x:12,z:23},{x:13,z:0},{x:13,z:23},{x:14,z:0},{x:14,z:23},{x:15,z:0},{x:15,z:23},{x:16,z:0},{x:16,z:23},{x:17,z:0},{x:17,z:23},{x:18,z:0},{x:18,z:23},{x:19,z:0},{x:19,z:23},{x:20,z:0},{x:20,z:23},{x:21,z:0},{x:21,z:23},{x:22,z:0},{x:22,z:23},{x:23,z:0},{x:23,z:23},{x:0,z:1},{x:23,z:1},{x:0,z:2},{x:23,z:2},{x:0,z:3},{x:23,z:3},{x:0,z:4},{x:23,z:4},{x:0,z:5},{x:23,z:5},{x:0,z:6},{x:23,z:6},{x:0,z:7},{x:23,z:7},{x:0,z:8},{x:23,z:8},{x:0,z:9},{x:23,z:9},{x:0,z:10},{x:23,z:10},{x:0,z:11},{x:23,z:11},{x:0,z:12},{x:0,z:13},{x:23,z:13},{x:0,z:14},{x:23,z:14},{x:0,z:15},{x:23,z:15},{x:0,z:16},{x:23,z:16},{x:0,z:17},{x:23,z:17},{x:0,z:18},{x:23,z:18},{x:0,z:19},{x:23,z:19},{x:0,z:20},{x:23,z:20},{x:0,z:21},{x:23,z:21},{x:0,z:22},{x:23,z:22},{x:3,z:22},{x:3,z:21},{x:2,z:20},{x:3,z:20},{x:1,z:11},{x:2,z:11},{x:1,z:13},{x:2,z:13},{x:3,z:13},{x:3,z:14},{x:3,z:15},{x:2,z:15},{x:3,z:11},{x:3,z:10},{x:3,z:9},{x:2,z:9},{x:2,z:17},{x:3,z:17},{x:3,z:18},{x:2,z:18},{x:5,z:15},{x:6,z:15},{x:5,z:14},{x:5,z:13},{x:5,z:11},{x:5,z:10},{x:5,z:9},{x:6,z:9},{x:7,z:12},{x:7,z:11},{x:7,z:13},{x:8,z:13},{x:9,z:13},{x:9,z:11},{x:8,z:11},{x:5,z:20},{x:5,z:21},{x:6,z:20},{x:5,z:17},{x:5,z:18},{x:6,z:18},{x:6,z:17},{x:7,z:15},{x:8,z:15},{x:8,z:16},{x:8,z:17},{x:8,z:18},{x:9,z:18},{x:9,z:19},{x:7,z:20},{x:7,z:21},{x:7,z:22},{x:10,z:14},{x:10,z:13},{x:10,z:15},{x:10,z:16},{x:11,z:16},{x:11,z:17},{x:11,z:18},{x:9,z:22},{x:9,z:20},{x:10,z:20},{x:11,z:22},{x:11,z:20},{x:12,z:18},{x:13,z:18},{x:13,z:19},{x:13,z:20},{x:13,z:21},{x:13,z:22},{x:4,z:7},{x:3,z:7},{x:2,z:7},{x:2,z:6},{x:1,z:4},{x:2,z:4},{x:4,z:3},{x:4,z:4},{x:4,z:5},{x:5,z:7},{x:5,z:5},{x:6,z:5},{x:7,z:5},{x:3,z:2},{x:4,z:2},{x:2,z:2},{x:7,z:1},{x:7,z:2},{x:6,z:2},{x:6,z:3},{x:7,z:3},{x:8,z:3},{x:9,z:3},{x:11,z:3},{x:8,z:5},{x:9,z:5},{x:9,z:6},{x:9,z:7},{x:6,z:7},{x:7,z:7},{x:7,z:9},{x:9,z:8},{x:9,z:9},{x:10,z:9},{x:12,z:9},{x:11,z:9},{x:12,z:3},{x:12,z:4},{x:12,z:5},{x:11,z:5},{x:11,z:6},{x:11,z:7},{x:13,z:7},{x:12,z:7},{x:10,z:1},{x:13,z:1},{x:15,z:1},{x:15,z:2},{x:15,z:3},{x:15,z:4},{x:22,z:11},{x:22,z:13},{x:21,z:13},{x:21,z:11},{x:21,z:10},{x:19,z:10},{x:19,z:14},{x:19,z:13},{x:21,z:14},{x:19,z:11},{x:18,z:11},{x:18,z:13},{x:19,z:15},{x:19,z:16},{x:19,z:17},{x:18,z:17},{x:17,z:17},{x:17,z:16},{x:17,z:15},{x:16,z:15},{x:21,z:15},{x:21,z:16},{x:21,z:17},{x:21,z:18},{x:21,z:20},{x:21,z:21},{x:20,z:21},{x:19,z:21},{x:19,z:20},{x:20,z:20},{x:18,z:18},{x:17,z:21},{x:15,z:21},{x:15,z:22},{x:16,z:21},{x:15,z:19},{x:14,z:19},{x:16,z:19},{x:19,z:18},{x:10,z:10},{x:10,z:11},{x:12,z:11},{x:12,z:12},{x:12,z:13},{x:12,z:14},{x:13,z:15},{x:13,z:16},{x:14,z:16},{x:14,z:15},{x:14,z:14},{x:14,z:13},{x:14,z:11},{x:14,z:10},{x:13,z:11},{x:16,z:13},{x:16,z:14},{x:16,z:12},{x:17,z:11},{x:16,z:11},{x:14,z:7},{x:14,z:6},{x:15,z:6},{x:16,z:6},{x:15,z:8},{x:17,z:8},{x:16,z:8},{x:15,z:7},{x:19,z:8},{x:19,z:9},{x:19,z:7},{x:19,z:6},{x:20,z:6},{x:21,z:9},{x:21,z:8},{x:21,z:6},{x:21,z:5},{x:17,z:6},{x:17,z:5},{x:17,z:4},{x:17,z:3},{x:17,z:2},{x:19,z:4},{x:19,z:3},{x:20,z:3},{x:20,z:4},{x:20,z:1},{x:22,z:1},{x:21,z:1},{x:22,z:3},{x:20,z:5},{x:17,z:10}]},{characterPlacement:{x:17,z:18},name:"Chapel'hein",level:[{x:0,z:0},{x:0,z:23},{x:1,z:0},{x:1,z:23},{x:2,z:0},{x:2,z:23},{x:3,z:0},{x:3,z:23},{x:4,z:0},{x:4,z:23},{x:5,z:0},{x:5,z:23},{x:6,z:0},{x:6,z:23},{x:7,z:0},{x:7,z:23},{x:8,z:0},{x:8,z:23},{x:9,z:0},{x:9,z:23},{x:10,z:0},{x:10,z:23},{x:11,z:0},{x:11,z:23},{x:12,z:0},{x:12,z:23},{x:13,z:0},{x:13,z:23},{x:14,z:0},{x:14,z:23},{x:15,z:0},{x:15,z:23},{x:16,z:0},{x:16,z:23},{x:17,z:0},{x:17,z:23},{x:18,z:0},{x:18,z:23},{x:19,z:0},{x:19,z:23},{x:20,z:0},{x:20,z:23},{x:21,z:0},{x:21,z:23},{x:22,z:0},{x:23,z:0},{x:23,z:23},{x:0,z:1},{x:23,z:1},{x:0,z:2},{x:23,z:2},{x:0,z:3},{x:23,z:3},{x:0,z:4},{x:23,z:4},{x:0,z:5},{x:23,z:5},{x:0,z:6},{x:23,z:6},{x:0,z:7},{x:23,z:7},{x:0,z:8},{x:23,z:8},{x:0,z:9},{x:23,z:9},{x:0,z:10},{x:23,z:10},{x:0,z:11},{x:23,z:11},{x:0,z:12},{x:23,z:12},{x:0,z:13},{x:23,z:13},{x:0,z:14},{x:23,z:14},{x:0,z:15},{x:23,z:15},{x:0,z:16},{x:23,z:16},{x:0,z:17},{x:23,z:17},{x:0,z:18},{x:23,z:18},{x:0,z:19},{x:23,z:19},{x:0,z:20},{x:23,z:20},{x:0,z:21},{x:23,z:21},{x:0,z:22},{x:23,z:22},{x:14,z:1},{x:20,z:22},{x:20,z:21},{x:20,z:20},{x:20,z:19},{x:20,z:18},{x:21,z:19},{x:19,z:17},{x:20,z:17},{x:19,z:16},{x:19,z:15},{x:17,z:15},{x:14,z:15},{x:13,z:15},{x:17,z:17},{x:17,z:16},{x:17,z:19},{x:18,z:19},{x:18,z:21},{x:17,z:21},{x:17,z:22},{x:16,z:19},{x:15,z:21},{x:15,z:22},{x:15,z:19},{x:16,z:17},{x:14,z:18},{x:14,z:17},{x:16,z:15},{x:13,z:21},{x:13,z:20},{x:12,z:20},{x:12,z:19},{x:12,z:17},{x:13,z:17},{x:11,z:22},{x:6,z:22},{x:6,z:21},{x:7,z:20},{x:6,z:20},{x:5,z:20},{x:4,z:20},{x:4,z:21},{x:17,z:14},{x:17,z:13},{x:17,z:12},{x:16,z:12},{x:15,z:12},{x:15,z:11},{x:15,z:10},{x:15,z:9},{x:14,z:11},{x:13,z:11},{x:11,z:11},{x:13,z:10},{x:11,z:12},{x:12,z:13},{x:11,z:13},{x:10,z:13},{x:9,z:13},{x:9,z:14},{x:9,z:15},{x:14,z:14},{x:11,z:15},{x:11,z:16},{x:11,z:17},{x:10,z:17},{x:11,z:19},{x:8,z:20},{x:8,z:21},{x:9,z:21},{x:8,z:19},{x:9,z:19},{x:11,z:20},{x:1,z:2},{x:2,z:2},{x:2,z:3},{x:4,z:2},{x:4,z:1},{x:6,z:2},{x:5,z:2},{x:5,z:3},{x:4,z:4},{x:5,z:4},{x:6,z:4},{x:8,z:1},{x:8,z:2},{x:8,z:4},{x:9,z:4},{x:8,z:5},{x:13,z:3},{x:12,z:3},{x:12,z:4},{x:12,z:6},{x:11,z:4},{x:11,z:6},{x:13,z:6},{x:13,z:7},{x:13,z:8},{x:12,z:8},{x:11,z:10},{x:10,z:10},{x:9,z:7},{x:9,z:8},{x:10,z:8},{x:21,z:15},{x:21,z:17},{x:19,z:14},{x:18,z:12},{x:20,z:13},{x:20,z:12},{x:20,z:11},{x:20,z:10},{x:19,z:10},{x:18,z:10},{x:17,z:10},{x:17,z:9},{x:18,z:8},{x:17,z:7},{x:18,z:7},{x:15,z:7},{x:14,z:7},{x:17,z:6},{x:17,z:5},{x:17,z:4},{x:15,z:5},{x:14,z:5},{x:15,z:3},{x:16,z:3},{x:17,z:3},{x:16,z:2},{x:6,z:18},{x:6,z:17},{x:7,z:17},{x:9,z:17},{x:2,z:21},{x:2,z:20},{x:4,z:19},{x:4,z:18},{x:3,z:18},{x:1,z:18},{x:1,z:21},{x:12,z:2},{x:11,z:2},{x:10,z:2},{x:11,z:1},{x:19,z:12},{x:14,z:12},{x:16,z:13},{x:19,z:8},{x:20,z:8},{x:20,z:7},{x:22,z:12},{x:21,z:10},{x:22,z:15},{x:22,z:21},{x:18,z:1},{x:19,z:1},{x:19,z:2},{x:21,z:2},{x:22,z:2},{x:21,z:3},{x:19,z:4},{x:19,z:5},{x:18,z:5},{x:21,z:5},{x:22,z:5},{x:22,z:7},{x:22,z:8},{x:15,z:4},{x:9,z:10},{x:11,z:8},{x:8,z:11},{x:9,z:11},{x:8,z:7},{x:7,z:7},{x:7,z:8},{x:7,z:9},{x:7,z:12},{x:6,z:12},{x:6,z:10},{x:6,z:13},{x:8,z:15},{x:7,z:15},{x:6,z:16},{x:4,z:16},{x:3,z:16},{x:3,z:15},{x:5,z:14},{x:5,z:13},{x:2,z:15},{x:1,z:15},{x:1,z:17},{x:6,z:5},{x:6,z:7},{x:5,z:7},{x:5,z:8},{x:4,z:8},{x:4,z:5},{x:3,z:5},{x:2,z:5},{x:2,z:6},{x:3,z:8},{x:3,z:6},{x:1,z:9},{x:1,z:8},{x:2,z:10},{x:4,z:10},{x:4,z:11},{x:2,z:11},{x:1,z:13},{x:2,z:13},{x:4,z:13},{x:3,z:13},{x:5,z:10}]}],gn=en(0);let du,ta=en(0),Jf;const Ns=en(0),tl=en(""),nl=en(!1),Mn=Js([{mapIndex:0,duration:0,readableDuration:"",begin:!1,finished:!1},{mapIndex:1,duration:0,readableDuration:"",begin:!1,finished:!1},{mapIndex:4,duration:0,readableDuration:"",begin:!1,finished:!1},{mapIndex:7,duration:0,readableDuration:"",begin:!1,finished:!1},{mapIndex:8,duration:0,readableDuration:"",begin:!1,finished:!1}]),G0=()=>{Ns.value=0,du=performance.now(),Jf=setInterval(()=>{ta.value=performance.now()-du,Ns.value=Math.floor(ta.value),tl.value=Qf(ta.value),Mn[gn.value].duration=Ns.value,Mn[gn.value].readableDuration=tl.value},100)},k0=()=>{clearInterval(Jf)},Qf=n=>{const e=Math.floor(n/1e3),t=Math.floor(e/60),i=e%60,r=Math.floor(n%1e3);return`${t}m ${i<10?"0":""}${i}s ${r<100?"000":r}ms`};window.addEventListener("finishSpeedrunLevel",()=>{Mn[gn.value].duration=Ns.value,Mn[gn.value].readableDuration=tl.value,k0(),Mn[gn.value].finished=!0,gn.value++,gn.value===Mn.length&&(nl.value=!0)});window.addEventListener("beginSpeedrunLevel",()=>{G0()});const eh=()=>({selectedSpeedrunLevel:()=>{if(nl.value!==!0)return Mn[gn.value].mapIndex},resetSpeedrunData:()=>{gn.value=0,Mn.forEach(i=>{i.duration=0,i.readableDuration=""})},calculateAllTimeMap:()=>{let i=0;return Mn.forEach(r=>{i+=r.duration}),Qf(i)},isFinished:nl,currentIndexDataRun:gn,speedrunData:Mn}),{speedrunData:W0}=eh(),Rr=en("Home"),na=en(0),pu=en(!1),vr=()=>{const n=()=>Math.floor(Math.random()*ao.length),e=o=>{const a=o??n();na.value=a};return{display:Rr,chosenLevel:na,isSpeedrun:pu,triggerHome:()=>{Rr.value="Home"},triggerGame:o=>{e(o),Rr.value="Game"},triggerArcadeMode:()=>{Rr.value="Arcade"},selectedLevel:e,selectSpeedrun:()=>{pu.value=!0,na.value=W0[0].mapIndex,Rr.value="Game"},choseLevel:n}};class X0{constructor(e){ot(this,"mesh");ot(this,"meshsPlacement");ot(this,"boundingBoxes");ot(this,"groundBoundingBox");ot(this,"engine");this.mesh=new Bt,this.meshsPlacement=[],this.boundingBoxes=[],this.engine=e,this.setEnvironment()}tick(){}setEnvironment(){this.createGround(),this.createLevelPlacement(),this.createLevel()}createBlock(e,t){const i=new ai(1,2,1),r=new Fc({color:16777215,shininess:15,specular:52699}),s=new Bt(i,r);s.position.set(e,0,t),s.userData.typeOfBlock="obstacle";const o=new oi().setFromObject(s);this.boundingBoxes.push(o),this.mesh.add(s)}createGround(){const e=new ai(24,.5,24),t=new Fc({color:16777215}),i=new Bt(e,t);this.groundBoundingBox=new oi().setFromObject(i),i.userData.typeOfBlock="ground",i.position.y=-.75,this.mesh.add(i)}createLevelPlacement(){ao[this.engine.layer].level.forEach(e=>{const t={x:e.x,z:e.z};this.meshsPlacement.push(t)})}createLevel(){this.meshsPlacement.forEach(e=>{this.createBlock(e.x-11.5,e.z-11.5)})}}const{isSpeedrun:q0}=vr();class Y0{constructor(e){ot(this,"mesh");ot(this,"vecteur_mouvement");ot(this,"speed");ot(this,"engine");ot(this,"boundingBox");ot(this,"light");ot(this,"collideGround");ot(this,"canMove");this.collideGround=!0,this.canMove=!1,this.speed=4.5,this.mesh=new Bt,this.engine=e,this.createCharacter(),this.getEventMove(),this.vecteur_mouvement={x:0,y:0,z:0},this.boundingBox=new oi,this.light=new tm(16711892,.3,4),this.mesh.add(this.light)}tick(){this.collideGround?(this.updateCameraPosition(),this.updateBoundingBox(),this.checkGroundCollision(),this.canMove&&this.moveCharacter()):this.finishLevel()}createCharacter(){const{x:e,z:t}=ao[this.engine.layer].characterPlacement,i=new ai(.4,.4,.4),r=new Gn({transparent:!0,uniforms:{emissiveColor:{value:new H(9,4,1)},uInstanceCount:{value:40}},vertexShader:`
      void main() {
        vec4 mPosition = modelMatrix * vec4( position, 1.0);
        #ifdef USE_INSTANCING
        mPosition = modelMatrix * instanceMatrix * vec4(position, 1.0);
        #endif
        gl_Position = projectionMatrix * viewMatrix * mPosition;
        }
        `,fragmentShader:`
        uniform vec3 emissiveColor;

        void main() {
          gl_FragColor = vec4(emissiveColor, 1.);
          }
          `}),s=new Bt(i,r);s.userData.typeOfBlock="character",this.mesh.add(s),this.mesh.position.set(e-11.5,-.3,t-11.5)}getEventMove(){window.addEventListener("keydown",e=>{const t=e.key.toLowerCase();t=="z"&&(this.vecteur_mouvement.z=-1),t=="s"&&(this.vecteur_mouvement.z=1),t=="d"&&(this.vecteur_mouvement.x=1),t=="q"&&(this.vecteur_mouvement.x=-1)}),window.addEventListener("mobileTouch",e=>{const t=e.detail.toLowerCase();t=="z"&&(this.vecteur_mouvement.z=-1),t=="s"&&(this.vecteur_mouvement.z=1),t=="d"&&(this.vecteur_mouvement.x=1),t=="q"&&(this.vecteur_mouvement.x=-1)}),window.addEventListener("keyup",e=>{const t=e.key.toLowerCase();t==="z"&&(this.vecteur_mouvement.z=0),t==="q"&&(this.vecteur_mouvement.x=0),t==="s"&&(this.vecteur_mouvement.z=0),t==="d"&&(this.vecteur_mouvement.x=0)}),window.addEventListener("stopMobileTouch",e=>{const t=e.detail.toLowerCase();t==="z"&&(this.vecteur_mouvement.z=0),t==="q"&&(this.vecteur_mouvement.x=0),t==="s"&&(this.vecteur_mouvement.z=0),t==="d"&&(this.vecteur_mouvement.x=0)})}moveCharacter(){const e=this.mesh.position.clone();let t=this.mesh.position.clone();this.vecteur_mouvement.z!==0&&(e.z+=this.vecteur_mouvement.z*this.speed*this.engine.delta,this.checkObstacleCollision(e)?this.correctPosition(e,"z"):t.z=e.z),this.vecteur_mouvement.x!==0&&(e.x+=this.vecteur_mouvement.x*this.speed*this.engine.delta,this.checkObstacleCollision(e)?this.correctPosition(e,"x"):t.x=e.x),this.mesh.position.copy(t)}checkObstacleCollision(e){const t=this.boundingBox.clone();t.translate(e.clone().sub(this.mesh.position));for(const i of this.engine.environment.boundingBoxes)if(t.intersectsBox(i))return!0;return!1}checkGroundCollision(){this.boundingBox.intersectsBox(this.engine.environment.groundBoundingBox)?this.collideGround=!0:this.collideGround=!1}correctPosition(e,t){const i=this.boundingBox.clone();i.translate(e.clone().sub(this.mesh.position));for(const r of this.engine.environment.boundingBoxes)i.intersectsBox(r)&&(t==="z"&&(this.vecteur_mouvement.z>0?e.z=Math.min(e.z,r.min.z-this.boundingBox.max.z):this.vecteur_mouvement.z<0&&(e.z=Math.max(e.z,r.max.z-this.boundingBox.min.z))),t==="x"&&(this.vecteur_mouvement.x>0?e.x=Math.min(e.x,r.min.x-this.boundingBox.max.x):this.vecteur_mouvement.x<0&&(e.x=Math.max(e.x,r.max.x-this.boundingBox.min.x))));t==="z"?this.mesh.position.z=e.z:t==="x"&&(this.mesh.position.x=e.x)}updateCameraPosition(){this.engine.camera.position.x+=(this.mesh.position.x-this.engine.camera.position.x)*.04,this.engine.camera.position.z+=(this.mesh.position.z-this.engine.camera.position.z+3)*.04}updateBoundingBox(){this.boundingBox.setFromObject(this.mesh),this.boundingBox.expandByScalar(-.01)}finishLevel(){const e=new CustomEvent("finishSpeedrunLevel",{detail:"finishSpeedrunLevel"}),t=new CustomEvent("finishLevel",{detail:"finishLevel"});window.dispatchEvent(q0.value?e:t)}}const{chosenLevel:$0,isSpeedrun:K0}=vr();class j0{constructor(e){ot(this,"scene");ot(this,"renderer");ot(this,"camera");ot(this,"meshs");ot(this,"ref");ot(this,"pixelRatio");ot(this,"animationFrameId",null);ot(this,"mousePos");ot(this,"character",null);ot(this,"environment",null);ot(this,"layer");ot(this,"clock");ot(this,"delta");const{width:t,height:i}=e.getBoundingClientRect();this.meshs=[],this.mousePos={x:0,y:0},this.ref=e,this.scene=new Nc,this.camera=new $t(45,t/i),this.camera.position.set(0,7,8),this.camera.lookAt(0,-1.8,4.5),this.layer=$0.value,this.clock=new rm,this.delta=0,this.pixelRatio=t<900?Math.min(window.devicePixelRatio,1.5):window.devicePixelRatio,this.renderer=new V0({antialias:!0,powerPreference:"low-power"}),this.renderer.setClearColor(0,0),this.renderer.setPixelRatio(this.pixelRatio);const r=window.devicePixelRatio>1;this.renderer.setSize(t,i,r),e.appendChild(this.renderer.domElement),this.setup()}tick(){this.renderer.render(this.scene,this.camera),this.animationFrameId=requestAnimationFrame(()=>{this.tick(),this.delta=this.clock.getDelta(),this.tickChildren()})}setup(){this.environment=new X0(this),this.character=new Y0(this),this.meshs.push(this.environment,this.character),this.addChildren(),this.setView(),this.registerEventListeners(),this.tick(),K0.value&&this.sendBeginSpeedrunEvent(),setTimeout(()=>{this.character.canMove=!0},100)}restart(e){this.layer=e,this.scene=new Nc,this.setup()}stop(){this.animationFrameId!==null&&(cancelAnimationFrame(this.animationFrameId),this.animationFrameId=null),this.environment=null,this.character=null,this.meshs=[]}addChildren(){for(let e=0;e<this.meshs.length;e++)this.scene.add(this.meshs[e].mesh)}tickChildren(){for(let e=0;e<this.meshs.length;e++)this.meshs[e].tick(this)}setView(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)}sendBeginSpeedrunEvent(){const e=new CustomEvent("beginSpeedrunLevel",{detail:"begin"});window.dispatchEvent(e)}registerEventListeners(){window.onresize=()=>{this.setView()},window.addEventListener("mousemove",e=>{this.mousePos={x:e.clientX,y:e.clientY}}),window.addEventListener("finishLevel",()=>{this.stop()}),window.addEventListener("finishSpeedrunLevel",()=>{this.stop()})}}const Z0={class:"Home"},J0={key:0,class:"Popin"},Q0={key:1,class:"Home__win"},ev={class:"Home__win__menu"},tv={key:2,class:"Home__win"},nv={key:0},iv={class:"Home__win__menu"},rv={key:3,class:"timeSpeedrun"},sv={key:4,class:"controlsMobile"},ov={class:"controlsMobile__container"},av=eo({__name:"Game",setup(n){const{triggerHome:e,selectedLevel:t,isSpeedrun:i,chosenLevel:r}=vr(),{isFinished:s,selectedSpeedrunLevel:o,currentIndexDataRun:a,speedrunData:l,resetSpeedrunData:c,calculateAllTimeMap:u}=eh();let f;const d=en(),p=en(!1),v=en(!1),S=en(!1),m=()=>{c(),p.value=!1,i.value=!1,s.value=!1,e()},h=U=>new CustomEvent("mobileTouch",{detail:U}),A=U=>new CustomEvent("stopMobileTouch",{detail:U}),b=()=>{f.restart(r.value),p.value=!1},y=()=>{t(),f.restart(r.value),p.value=!1},L=()=>{const U=o();f.restart(U),p.value=!1};window.addEventListener("finishLevel",()=>{p.value=!0}),window.addEventListener("finishSpeedrunLevel",()=>{p.value=!0});const P=U=>{window.dispatchEvent(h(U))},w=U=>{window.dispatchEvent(A(U))};return Ts(s,U=>{setTimeout(()=>{alert(u())},100)}),$u(()=>{p.value=!1,f=new j0(d.value),S.value=window.innerWidth<1e3}),(U,E)=>(gt(),It("section",Z0,[it("div",{ref_key:"scene",ref:d,class:"Scene"},null,512),it("button",{class:"cmd",onClick:E[0]||(E[0]=M=>S.value=!S.value)},E[16]||(E[16]=[it("img",{src:Dp},null,-1)])),it("button",{class:"details",onClick:E[1]||(E[1]=M=>v.value=!v.value)},"?"),v.value?(gt(),It("div",J0,[E[17]||(E[17]=Yd('<div class="Popin__container" data-v-57aced83><div class="Popin__controls" data-v-57aced83><p data-v-57aced83>Z</p><span data-v-57aced83>Avancer</span></div><div class="Popin__controls" data-v-57aced83><p data-v-57aced83>Q</p><span data-v-57aced83>Gauche</span></div><div class="Popin__controls" data-v-57aced83><p data-v-57aced83>S</p><span data-v-57aced83>Reculer</span></div><div class="Popin__controls" data-v-57aced83><p data-v-57aced83>D</p><span data-v-57aced83>Droite</span></div></div>',1)),it("button",{onClick:E[2]||(E[2]=M=>m()),class:"menubutton"},"Menu")])):xn("",!0),p.value&&!yt(i)?(gt(),It("div",Q0,[E[18]||(E[18]=it("h2",null,"BRAVO !",-1)),it("div",ev,[it("button",{onClick:E[3]||(E[3]=M=>m()),class:"menubutton"},"Menu"),it("button",{onClick:E[4]||(E[4]=M=>b()),class:"menubutton"},"Recommencer"),it("button",{onClick:E[5]||(E[5]=M=>y()),class:"menubutton"},"Map aléatoire")])])):xn("",!0),p.value&&yt(i)?(gt(),It("div",tv,[E[19]||(E[19]=it("h2",null,"BRAVO !",-1)),yt(s)?(gt(),It("h3",nv,"Temps total: "+Lr(yt(u)()),1)):xn("",!0),it("div",iv,[it("button",{onClick:E[6]||(E[6]=M=>m()),class:"menubutton"},"Menu"),yt(s)===!1?(gt(),It("button",{key:0,onClick:E[7]||(E[7]=M=>L()),class:"menubutton"}," Suivant ")):xn("",!0)])])):xn("",!0),yt(i)?(gt(),It("div",rv,[(gt(!0),It(ln,null,ju(yt(l),(M,C)=>(gt(),It("p",{key:C,style:js(C===yt(a)?"color: white":"color: purple")}," Map "+Lr(C+1)+" : "+Lr(M.readableDuration),5))),128))])):xn("",!0),!p.value&&S.value&&!v.value?(gt(),It("div",sv,[it("div",ov,[it("button",{class:"controlsMobile--up",onTouchstart:E[8]||(E[8]=Wn(M=>P("z"),["prevent"])),onTouchend:E[9]||(E[9]=Wn(M=>w("z"),["prevent"]))}," Z ",32),it("button",{class:"controlsMobile--bottom",onTouchstart:E[10]||(E[10]=Wn(M=>P("s"),["prevent"])),onTouchend:E[11]||(E[11]=Wn(M=>w("s"),["prevent"]))}," S ",32),it("button",{class:"controlsMobile--left",onTouchstart:E[12]||(E[12]=Wn(M=>P("q"),["prevent"])),onTouchend:E[13]||(E[13]=Wn(M=>w("q"),["prevent"]))}," Q ",32),it("button",{class:"controlsMobile--right",onTouchstart:E[14]||(E[14]=Wn(M=>P("d"),["prevent"])),onTouchend:E[15]||(E[15]=Wn(M=>w("d"),["prevent"]))}," D ",32)])])):xn("",!0)]))}}),lo=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t},lv=lo(av,[["__scopeId","data-v-57aced83"]]),cv={class:"Home"},uv={class:"Home__Buttons"},fv=eo({__name:"Home",setup(n){const{triggerArcadeMode:e,triggerGame:t,selectSpeedrun:i}=vr();return(r,s)=>(gt(),It("div",cv,[s[3]||(s[3]=it("h1",null,"Labyrinthe",-1)),it("div",uv,[it("button",{onClick:s[0]||(s[0]=o=>yt(t)())},"Aleatoire"),it("button",{onClick:s[1]||(s[1]=o=>yt(e)())},"Arcade"),it("button",{onClick:s[2]||(s[2]=o=>yt(i)())},"Speedrun")])]))}}),hv=lo(fv,[["__scopeId","data-v-d167c027"]]),dv={class:"Home"},pv={class:"Home__levels"},xv=["onClick"],mv=eo({__name:"Arcade",setup(n){const{triggerGame:e}=vr();return(t,i)=>(gt(),It("div",dv,[i[0]||(i[0]=it("h1",null,"Mode Arcade",-1)),i[1]||(i[1]=it("h2",null,"Choisis ta map",-1)),it("div",pv,[(gt(!0),It(ln,null,ju(yt(ao),(r,s)=>(gt(),It("div",{class:"Home__levels__level",key:s},[it("button",{onClick:o=>yt(e)(s)},Lr(r.name),9,xv)]))),128))])]))}}),_v=lo(mv,[["__scopeId","data-v-8c38f265"]]),gv={class:"Home"},vv=eo({__name:"App",setup(n){const{display:e}=vr();return(t,i)=>(gt(),It("div",gv,[yt(e)==="Game"?(gt(),As(lv,{key:0})):xn("",!0),yt(e)==="Arcade"?(gt(),As(_v,{key:1})):xn("",!0),yt(e)==="Home"?(gt(),As(hv,{key:2})):xn("",!0)]))}}),zv=lo(vv,[["__scopeId","data-v-3fe1c5b2"]]);Rp(zv).mount("#app");