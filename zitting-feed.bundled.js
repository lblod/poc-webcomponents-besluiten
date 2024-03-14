/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e=globalThis,t=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,r=Symbol(),i=new WeakMap;class o{constructor(e,t,i){if(this._$cssResult$=!0,i!==r)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const r=this.t;if(t&&void 0===e){const t=void 0!==r&&1===r.length;t&&(e=i.get(r)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),t&&i.set(r,e))}return e}toString(){return this.cssText}}const a=(e,...t)=>{const i=1===e.length?e[0]:t.reduce(((t,r,i)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+e[i+1]),e[0]);return new o(i,e,r)},s=t?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const r of e.cssRules)t+=r.cssText;return(e=>new o("string"==typeof e?e:e+"",void 0,r))(t)})(e):e
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,{is:n,defineProperty:l,getOwnPropertyDescriptor:c,getOwnPropertyNames:d,getOwnPropertySymbols:u,getPrototypeOf:h}=Object,p=globalThis,g=p.trustedTypes,b=g?g.emptyScript:"",m=p.reactiveElementPolyfillSupport,v=(e,t)=>e,f={toAttribute(e,t){switch(t){case Boolean:e=e?b:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=null!==e;break;case Number:r=null===e?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch(e){r=null}}return r}},w=(e,t)=>!n(e,t),y={attribute:!0,type:String,converter:f,reflect:!1,hasChanged:w};Symbol.metadata??=Symbol("metadata"),p.litPropertyMetadata??=new WeakMap;class x extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=y){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const r=Symbol(),i=this.getPropertyDescriptor(e,r,t);void 0!==i&&l(this.prototype,e,i)}}static getPropertyDescriptor(e,t,r){const{get:i,set:o}=c(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get(){return i?.call(this)},set(t){const a=i?.call(this);o.call(this,t),this.requestUpdate(e,a,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??y}static _$Ei(){if(this.hasOwnProperty(v("elementProperties")))return;const e=h(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(v("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(v("properties"))){const e=this.properties,t=[...d(e),...u(e)];for(const r of t)this.createProperty(r,e[r])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,r]of t)this.elementProperties.set(e,r)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const r=this._$Eu(e,t);void 0!==r&&this._$Eh.set(r,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const e of r)t.unshift(s(e))}else void 0!==e&&t.push(s(e));return t}static _$Eu(e,t){const r=t.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((e=>e(this)))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const r of t.keys())this.hasOwnProperty(r)&&(e.set(r,this[r]),delete this[r]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const r=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((r,i)=>{if(t)r.adoptedStyleSheets=i.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(const t of i){const i=document.createElement("style"),o=e.litNonce;void 0!==o&&i.setAttribute("nonce",o),i.textContent=t.cssText,r.appendChild(i)}})(r,this.constructor.elementStyles),r}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((e=>e.hostConnected?.()))}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach((e=>e.hostDisconnected?.()))}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$EC(e,t){const r=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,r);if(void 0!==i&&!0===r.reflect){const o=(void 0!==r.converter?.toAttribute?r.converter:f).toAttribute(t,r.type);this._$Em=e,null==o?this.removeAttribute(i):this.setAttribute(i,o),this._$Em=null}}_$AK(e,t){const r=this.constructor,i=r._$Eh.get(e);if(void 0!==i&&this._$Em!==i){const e=r.getPropertyOptions(i),o="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:f;this._$Em=i,this[i]=o.fromAttribute(t,e.type),this._$Em=null}}requestUpdate(e,t,r){if(void 0!==e){if(r??=this.constructor.getPropertyOptions(e),!(r.hasChanged??w)(this[e],t))return;this.P(e,t,r)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(e,t,r){this._$AL.has(e)||this._$AL.set(e,t),!0===r.reflect&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,r]of e)!0!==r.wrapped||this._$AL.has(t)||void 0===this[t]||this.P(t,this[t],r)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach((e=>e.hostUpdate?.())),this.update(t)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach((e=>this._$EC(e,this[e]))),this._$EU()}updated(e){}firstUpdated(e){}}x.elementStyles=[],x.shadowRootOptions={mode:"open"},x[v("elementProperties")]=new Map,x[v("finalized")]=new Map,m?.({ReactiveElement:x}),(p.reactiveElementVersions??=[]).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const k=globalThis,$=k.trustedTypes,S=$?$.createPolicy("lit-html",{createHTML:e=>e}):void 0,O="$lit$",_=`lit$${(Math.random()+"").slice(9)}$`,z="?"+_,E=`<${z}>`,A=document,T=()=>A.createComment(""),P=e=>null===e||"object"!=typeof e&&"function"!=typeof e,L=Array.isArray,I="[ \t\n\f\r]",j=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,C=/-->/g,R=/>/g,N=RegExp(`>|${I}(?:([^\\s"'>=/]+)(${I}*=${I}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),M=/'/g,D=/"/g,U=/^(?:script|style|textarea|title)$/i,F=(e=>(t,...r)=>({_$litType$:e,strings:t,values:r}))(1),X=Symbol.for("lit-noChange"),B=Symbol.for("lit-nothing"),V=new WeakMap,H=A.createTreeWalker(A,129);function G(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==S?S.createHTML(t):t}const W=(e,t)=>{const r=e.length-1,i=[];let o,a=2===t?"<svg>":"",s=j;for(let t=0;t<r;t++){const r=e[t];let n,l,c=-1,d=0;for(;d<r.length&&(s.lastIndex=d,l=s.exec(r),null!==l);)d=s.lastIndex,s===j?"!--"===l[1]?s=C:void 0!==l[1]?s=R:void 0!==l[2]?(U.test(l[2])&&(o=RegExp("</"+l[2],"g")),s=N):void 0!==l[3]&&(s=N):s===N?">"===l[0]?(s=o??j,c=-1):void 0===l[1]?c=-2:(c=s.lastIndex-l[2].length,n=l[1],s=void 0===l[3]?N:'"'===l[3]?D:M):s===D||s===M?s=N:s===C||s===R?s=j:(s=N,o=void 0);const u=s===N&&e[t+1].startsWith("/>")?" ":"";a+=s===j?r+E:c>=0?(i.push(n),r.slice(0,c)+O+r.slice(c)+_+u):r+_+(-2===c?t:u)}return[G(e,a+(e[r]||"<?>")+(2===t?"</svg>":"")),i]};class Z{constructor({strings:e,_$litType$:t},r){let i;this.parts=[];let o=0,a=0;const s=e.length-1,n=this.parts,[l,c]=W(e,t);if(this.el=Z.createElement(l,r),H.currentNode=this.el.content,2===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(i=H.nextNode())&&n.length<s;){if(1===i.nodeType){if(i.hasAttributes())for(const e of i.getAttributeNames())if(e.endsWith(O)){const t=c[a++],r=i.getAttribute(e).split(_),s=/([.?@])?(.*)/.exec(t);n.push({type:1,index:o,name:s[2],strings:r,ctor:"."===s[1]?Q:"?"===s[1]?ee:"@"===s[1]?te:K}),i.removeAttribute(e)}else e.startsWith(_)&&(n.push({type:6,index:o}),i.removeAttribute(e));if(U.test(i.tagName)){const e=i.textContent.split(_),t=e.length-1;if(t>0){i.textContent=$?$.emptyScript:"";for(let r=0;r<t;r++)i.append(e[r],T()),H.nextNode(),n.push({type:2,index:++o});i.append(e[t],T())}}}else if(8===i.nodeType)if(i.data===z)n.push({type:2,index:o});else{let e=-1;for(;-1!==(e=i.data.indexOf(_,e+1));)n.push({type:7,index:o}),e+=_.length-1}o++}}static createElement(e,t){const r=A.createElement("template");return r.innerHTML=e,r}}function q(e,t,r=e,i){if(t===X)return t;let o=void 0!==i?r._$Co?.[i]:r._$Cl;const a=P(t)?void 0:t._$litDirective$;return o?.constructor!==a&&(o?._$AO?.(!1),void 0===a?o=void 0:(o=new a(e),o._$AT(e,r,i)),void 0!==i?(r._$Co??=[])[i]=o:r._$Cl=o),void 0!==o&&(t=q(e,o._$AS(e,t.values),o,i)),t}class Y{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:r}=this._$AD,i=(e?.creationScope??A).importNode(t,!0);H.currentNode=i;let o=H.nextNode(),a=0,s=0,n=r[0];for(;void 0!==n;){if(a===n.index){let t;2===n.type?t=new J(o,o.nextSibling,this,e):1===n.type?t=new n.ctor(o,n.name,n.strings,this,e):6===n.type&&(t=new re(o,this,e)),this._$AV.push(t),n=r[++s]}a!==n?.index&&(o=H.nextNode(),a++)}return H.currentNode=A,i}p(e){let t=0;for(const r of this._$AV)void 0!==r&&(void 0!==r.strings?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}}class J{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,r,i){this.type=2,this._$AH=B,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=q(this,e,t),P(e)?e===B||null==e||""===e?(this._$AH!==B&&this._$AR(),this._$AH=B):e!==this._$AH&&e!==X&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):(e=>L(e)||"function"==typeof e?.[Symbol.iterator])(e)?this.k(e):this._(e)}S(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}_(e){this._$AH!==B&&P(this._$AH)?this._$AA.nextSibling.data=e:this.T(A.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:r}=e,i="number"==typeof r?this._$AC(e):(void 0===r.el&&(r.el=Z.createElement(G(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===i)this._$AH.p(t);else{const e=new Y(i,this),r=e.u(this.options);e.p(t),this.T(r),this._$AH=e}}_$AC(e){let t=V.get(e.strings);return void 0===t&&V.set(e.strings,t=new Z(e)),t}k(e){L(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let r,i=0;for(const o of e)i===t.length?t.push(r=new J(this.S(T()),this.S(T()),this,this.options)):r=t[i],r._$AI(o),i++;i<t.length&&(this._$AR(r&&r._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class K{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,r,i,o){this.type=1,this._$AH=B,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=o,r.length>2||""!==r[0]||""!==r[1]?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=B}_$AI(e,t=this,r,i){const o=this.strings;let a=!1;if(void 0===o)e=q(this,e,t,0),a=!P(e)||e!==this._$AH&&e!==X,a&&(this._$AH=e);else{const i=e;let s,n;for(e=o[0],s=0;s<o.length-1;s++)n=q(this,i[r+s],t,s),n===X&&(n=this._$AH[s]),a||=!P(n)||n!==this._$AH[s],n===B?e=B:e!==B&&(e+=(n??"")+o[s+1]),this._$AH[s]=n}a&&!i&&this.j(e)}j(e){e===B?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Q extends K{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===B?void 0:e}}class ee extends K{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==B)}}class te extends K{constructor(e,t,r,i,o){super(e,t,r,i,o),this.type=5}_$AI(e,t=this){if((e=q(this,e,t,0)??B)===X)return;const r=this._$AH,i=e===B&&r!==B||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,o=e!==B&&(r===B||i);i&&this.element.removeEventListener(this.name,this,r),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class re{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){q(this,e)}}const ie=k.litHtmlPolyfillSupport;ie?.(Z,J),(k.litHtmlVersions??=[]).push("3.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class oe extends x{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,r)=>{const i=r?.renderBefore??t;let o=i._$litPart$;if(void 0===o){const e=r?.renderBefore??null;i._$litPart$=o=new J(t.insertBefore(T(),e),e,void 0,r??{})}return o._$AI(e),o})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return X}}oe._$litElement$=!0,oe.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:oe});const ae=globalThis.litElementPolyfillSupport;ae?.({LitElement:oe}),(globalThis.litElementVersions??=[]).push("4.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const se=e=>(t,r)=>{void 0!==r?r.addInitializer((()=>{customElements.define(e,t)})):customElements.define(e,t)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,ne={attribute:!0,type:String,converter:f,reflect:!1,hasChanged:w},le=(e=ne,t,r)=>{const{kind:i,metadata:o}=r;let a=globalThis.litPropertyMetadata.get(o);if(void 0===a&&globalThis.litPropertyMetadata.set(o,a=new Map),a.set(r.name,e),"accessor"===i){const{name:i}=r;return{set(r){const o=t.get.call(this);t.set.call(this,r),this.requestUpdate(i,o,e)},init(t){return void 0!==t&&this.P(i,void 0,e),t}}}if("setter"===i){const{name:i}=r;return function(r){const o=this[i];t.call(this,r),this.requestUpdate(i,o,e)}}throw Error("Unsupported decorator location: "+i)};function ce(e){return(t,r)=>"object"==typeof r?le(e,t,r):((e,t,r)=>{const i=t.hasOwnProperty(r);return t.constructor.createProperty(r,i?{...e,wrapped:!0}:e),i?Object.getOwnPropertyDescriptor(t,r):void 0})(e,t,r)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}function de(e){return ce({...e,state:!0,attribute:!1})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ue=(e,t,r)=>(r.configurable=!0,r.enumerable=!0,r)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;function he(e,t){return(r,i,o)=>{const a=t=>t.renderRoot?.querySelector(e)??null;if(t){const{get:e,set:t}="object"==typeof i?r:o??(()=>{const e=Symbol();return{get(){return this[e]},set(t){this[e]=t}}})();return ue(0,0,{get(){let r=e.call(this);return void 0===r&&(r=a(this),(null!==r||this.hasUpdated)&&t.call(this,r)),r}})}return ue(0,0,{get(){return a(this)}})}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let pe;var ge=function(e,t,r,i){for(var o,a=arguments.length,s=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i,n=e.length-1;n>=0;n--)(o=e[n])&&(s=(a<3?o(s):a>3?o(t,r,s):o(t,r))||s);return a>3&&s&&Object.defineProperty(t,r,s),s};let be=class extends oe{constructor(){super(...arguments),this.header="",this.subheader=""}render(){return F`
            <h2 class="au-c-heading--3 closed ${this.subheader?"":"no-margin"}">${this.header}</h2>
            ${this.subheader?F`<h3>${this.subheader}</h3>`:""}
        `}};be.styles=a`
        :host {
            flex-grow: 1;
         }
        .au-c-heading--3  {
            font-size: var(--au-h5);
            line-height: var(--au-global-line-height);
            color: var(--au-gray-900);
            font-weight: var(--au-medium);
            text-decoration: underline;
            text-decoration-color: var(--text);
        }
        .au-c-heading--3:hover {
            color: var(--primary-color); 
            text-decoration: underline;
            text-decoration-color: var(--primary-color);
        }

        .no-margin {
                margin-bottom: 0;
            }
    `,ge([ce()],be.prototype,"header",void 0),ge([ce()],be.prototype,"subheader",void 0),be=ge([se("card-header")],be);var me=function(e,t,r,i){for(var o,a=arguments.length,s=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i,n=e.length-1;n>=0;n--)(o=e[n])&&(s=(a<3?o(s):a>3?o(t,r,s):o(t,r))||s);return a>3&&s&&Object.defineProperty(t,r,s),s};let ve=class extends oe{constructor(){super(...arguments),this.body=""}render(){return F`${this.body}`}};ve.styles=a`
        :host {
            flex-grow: 2;
            overflow: hidden;
            text-overflow: ellipsis;
            color: var(--text) !important;
        }
    `,me([ce()],ve.prototype,"body",void 0),ve=me([se("card-body")],ve);var fe=function(e,t,r,i){for(var o,a=arguments.length,s=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i,n=e.length-1;n>=0;n--)(o=e[n])&&(s=(a<3?o(s):a>3?o(t,r,s):o(t,r))||s);return a>3&&s&&Object.defineProperty(t,r,s),s};let we=class extends oe{constructor(){super(...arguments),this.footer=""}render(){return F`${this.footer}`}};we.styles=a`
        :host {
            color: var(--au-gray-700) !important;
        }
    `,fe([ce()],we.prototype,"footer",void 0),we=fe([se("card-footer")],we);var ye=function(e,t,r,i){for(var o,a=arguments.length,s=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i,n=e.length-1;n>=0;n--)(o=e[n])&&(s=(a<3?o(s):a>3?o(t,r,s):o(t,r))||s);return a>3&&s&&Object.defineProperty(t,r,s),s};let xe=class extends oe{constructor(){super(...arguments),this.buttonLabel="",this.subtitle="",this.isContentVisible=!1}toggleContent(){this.isContentVisible=!this.isContentVisible}render(){return F`
      <section class="c-accordion-holder">
        <span class="au-c-badge au-c-badge--brand" aria-hidden="true"></span>
        <div class="au-c-accordion au-c-accordion--reverse">
          <div class="au-c-toolbar au-c-toolbar--reverse au-c-toolbar--nowrap" @click="${this.toggleContent}">
            <div class="au-c-toolbar__group">
              <div class ="au-c-toolbar_button_with_title">
                <button class="au-c-button au-c-button--link" aria-expanded="${this.isContentVisible?"true":"false"}">
                  ${this.buttonLabel}
                </button>
                ${this.subtitle?F`<div class="accordion-subtitle">${this.subtitle}</div>`:""}
              </div>
            </div>
            <div class="au-c-toolbar__group"></div>
          </div>
          ${this.isContentVisible?F`
            <div class="au-c-content" tabindex="0">
              <slot></slot>
            </div>
          `:""}
        </div>
      </section>
    `}};xe.styles=a`
    .c-accordion-holder:first-of-type {
        margin-top: 1.2rem;
        padding-top: 1.2rem;
        border-top: 0.1rem solid var(--au-gray-200);
    }


    .c-accordion-holder--top>.au-c-accordion>.au-c-content {
        margin-left: 0
    }
      .au-c-toolbar {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
          font-size: var(--au-h6);
      }

      .au-c-toolbar__group {
          display: flex;
          justify-content: flex-start;
          align-items: baseline;
          
      }
      .au-c-toolbar_button_with_title{
        display: flex;
        align-items: baseline;
        cursor: pointer;
      }


      .au-c-accordion .au-c-button--link {
        text-decoration: none;
        font-weight: var(--au-medium);
        font-size: var(--au-h5);
        line-height: var(--au-global-line-height);

        padding-left: 0;
        text-align: left;
        white-space: initial;
        overflow: visible;
        height: auto;
        

        background-color: transparent;
        border-color: transparent;
        padding: 0 0.6rem;

        cursor: pointer;
    }

    .au-c-accordion .au-c-button--link:hover {
        color: var(--primary-color);

    }


    .accordion-subtitle {
      font-size: var(--au-base);
      font-weight: var(--au-light);

    }
  `,ye([ce()],xe.prototype,"buttonLabel",void 0),ye([ce()],xe.prototype,"subtitle",void 0),ye([ce({type:Boolean})],xe.prototype,"isContentVisible",void 0),xe=ye([se("au-accordion")],xe);var ke=function(e,t,r,i){for(var o,a=arguments.length,s=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i,n=e.length-1;n>=0;n--)(o=e[n])&&(s=(a<3?o(s):a>3?o(t,r,s):o(t,r))||s);return a>3&&s&&Object.defineProperty(t,r,s),s};let $e=class extends oe{constructor(){super(...arguments),this.href="",this.skin="",this.icon=""}render(){return F`
      <a class="au-c-link ${this.skin}" href="${this.href}" target="_blank" rel="noopener noreferrer">
        <i class="${this.icon}"></i>
        <slot></slot>
      </a>
    `}};$e.styles=a`
    .au-c-link {
        color: var(--text)!important;
        text-decoration-color: var(--text)!important;
        font-weight: 500
    }

    .au-c-link:hover {
        color: var(--primary-color)!important;
        text-decoration-color: var(--primary-color)!important
    }
  `,ke([ce()],$e.prototype,"href",void 0),ke([ce()],$e.prototype,"skin",void 0),ke([ce()],$e.prototype,"icon",void 0),$e=ke([se("au-link")],$e);var Se=function(e,t,r,i){for(var o,a=arguments.length,s=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i,n=e.length-1;n>=0;n--)(o=e[n])&&(s=(a<3?o(s):a>3?o(t,r,s):o(t,r))||s);return a>3&&s&&Object.defineProperty(t,r,s),s};let Oe=class extends oe{constructor(){super(...arguments),this.skin="",this.icon="",this.message=""}render(){return F`
      <div class="au-alert au-u-margin-top ${this.skin}">
        <i class="${this.icon}"></i>
        <span>${this.message}</span>
        <slot></slot>
      </div>
    `}};Oe.styles=a`
      .au-alert {
        color: var(--au-gray-900);
        display: flex;
        font-family: var(--au-font);
        font-size: var(--au-h6);
        padding: 2.4rem;
        margin-bottom: 2.4rem;
        background-color: var(--au-gray-200);
        border-radius: var(--au-radius);
        border: .1rem solid var(--au-gray-300);
      }

      .au-alert>:last-child {
        margin-bottom: 0;
      }

      .au-alert .au-c-link {
        flex-shrink: 0;
      }

      .au-alert__icon {
        background-color: var(--au-white);
        border-radius: 4.8rem;
        height: 4.7rem;
        width: 4.8rem;
        margin-right: 2.4rem;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
      }

      .au-alert__icon .au-c-icon {
        height: 1.9rem;
        width: 2rem;
        bottom: 0;
      }

      .au-alert__content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        flex-grow: 1;
      }

      .au-alert__title {
        font-weight: var(--au-medium);
      }

      .au-alert__close {
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        appearance: none;
        border: 0;
        padding: 0;
        height: 2.4rem;
        width: 2.4rem;
        text-align: center;
        color: var(--au-gray-700);
        transition: color var(--au-transition);
      }

      .au-alert__close:focus, .au-alert__close:hover {
        color: var(--au-gray-600);
      }

      .au-alert.warning {
        background-color: var(--au-orange-200);
        border-color: var(--au-orange-300);
      }

      .au-alert.warning .au-alert__icon {
        background-color: var(--au-orange-500);
      }

      .au-alert.success {
        background-color: var(--au-green-200);
        border-color: var(--au-green-300);
      }

      .au-alert.success .au-alert__icon {
        background-color: var(--au-green-500);
      }

      .au-alert.error {
        background-color: var(--au-red-200);
        border-color: var(--au-red-300);
      }

      .au-alert.error .au-alert__icon {
        background-color: var(--au-red-600);
      }
      .au-u-margin-top {
        margin-top: 2.4rem!important
    }

  `,Se([ce()],Oe.prototype,"skin",void 0),Se([ce()],Oe.prototype,"icon",void 0),Se([ce()],Oe.prototype,"message",void 0),Oe=Se([se("au-alert")],Oe);var _e=function(e,t,r,i){for(var o,a=arguments.length,s=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i,n=e.length-1;n>=0;n--)(o=e[n])&&(s=(a<3?o(s):a>3?o(t,r,s):o(t,r))||s);return a>3&&s&&Object.defineProperty(t,r,s),s};let ze=class extends oe{constructor(){super(...arguments),this.skin=""}render(){return F`
      <div class="au-content ${this.skin}">
        <slot></slot>
      </div>
    `}};ze.styles=a`
    /* Add your CSS here */
  `,_e([ce()],ze.prototype,"skin",void 0),ze=_e([se("au-content")],ze);var Ee=function(e,t,r,i){for(var o,a=arguments.length,s=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i,n=e.length-1;n>=0;n--)(o=e[n])&&(s=(a<3?o(s):a>3?o(t,r,s):o(t,r))||s);return a>3&&s&&Object.defineProperty(t,r,s),s};let Ae=class extends oe{constructor(){super(...arguments),this.pdf="",this.motivation=""}get resolution(){return{motivation:this.motivation,value:this.pdf}}render(){return F`
      <au-accordion buttonLabel="Besluit">
        ${this.resolution.value?F`
          <au-alert skin="success" icon="sign">
            ${this.resolution.value.endsWith(".pdf")?F`
              <au-link href="${this.resolution.value}" skin="small" icon="pdf">
                open besluit
              </au-link>
            `:this.resolution.value}
          </au-alert>
        `:F`
          <au-alert skin="warning" title="Besluit niet beschikbaar"></au-alert>
        `}
        ${this.resolution.motivation?F`
          <div class="c-accordion-holder c-accordion-holder--top">
            <au-accordion buttonLabel="Motivering">
              <au-content skin="small" class="au-u-padding">
                <p class="au-u-muted">
                  ${this.resolution.motivation}
                </p>
              </au-content>
            </au-accordion>
          </div>
        `:""}
      </au-accordion>
    `}};Ae.styles=a`
    /* Add your CSS here */
  `,Ee([ce()],Ae.prototype,"pdf",void 0),Ee([ce()],Ae.prototype,"motivation",void 0),Ae=Ee([se("decision-card-details-besluit")],Ae);var Te=function(e,t,r,i){for(var o,a=arguments.length,s=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i,n=e.length-1;n>=0;n--)(o=e[n])&&(s=(a<3?o(s):a>3?o(t,r,s):o(t,r))||s);return a>3&&s&&Object.defineProperty(t,r,s),s};let Pe=class extends oe{get totalVoters(){return Number(this.vote.aantalOnthouders)+Number(this.vote.aantalTegenstanders)+Number(this.vote.aantalVoorstanders)}updated(){this.style.setProperty("--value-proponents",String(this.vote.aantalVoorstanders)),this.style.setProperty("--value-opponents",String(this.vote.aantalTegenstanders)),this.style.setProperty("--value-abstentions",String(this.vote.aantalOnthouders)),this.style.setProperty("--total-voters",String(this.totalVoters))}render(){return this.vote?this.totalVoters?F`
                <div class="c-chart">
                    <svg
                        viewBox="0 0 100 100"
                        class="c-chart__pie"
                        aria-hidden="true"
                        focusable="false"
                    >
                        <circle r="25" cx="50" cy="50" class="c-pie c-pie--proponents" />
                        <circle r="25" cx="50" cy="50" class="c-pie c-pie--opponents" />
                        <circle r="25" cx="50" cy="50" class="c-pie c-pie--abstentions" />
                    </svg>
                    <ul class="c-chart__legend">
                        <li class="c-chart__legend-item c-chart__legend-item--proponents">Voor (${this.vote.aantalVoorstanders})</li>
                        <li class="c-chart__legend-item c-chart__legend-item--opponents">Tegen (${this.vote.aantalTegenstanders})</li>
                        <li class="c-chart__legend-item c-chart__legend-item--abstentions">Onthouden (${this.vote.aantalOnthouders})</li>
                    </ul>
                    ${this.vote.gevolg?F`<li>Gevolg: ${this.vote.gevolg}</li>`:""}
                </div>
            
                `:F`<p>Geen stemming beschikbaar</p>`:F`<p>Loading...</p>`}};Pe.styles=a`
        
        .c-chart__pie {
            margin: 0 auto;
            transform: rotate(-90deg);
            border-radius: 50%;
            display: block;
            height: auto;
            flex-shrink: 0;
            width: 200px
        }

        .c-chart__pie circle {
            width: 100%;
            height: 100%
        }

        .c-chart__legend {
            font-size: var(--au-h6);
            line-height: var(--au-global-line-height);
            color: var(--au-gray-700);
            flex-shrink: 0;
            width: 200px
        }

        @media (min-width: 47.9375em) {
            .c-chart__legend {
                width:calc(100% - 200px)
            }
        }

        .c-chart__legend-item {
            list-style-type: none;
            display: flex;
            align-items: center
        }

        .c-chart__legend-item::before {
            content: "";
            display: block;
            width: 1.2rem;
            height: 1.2rem;
            background-color: var(--au-gray-500);
            border-radius: .3rem;
            margin-bottom: .1rem;
            margin-right: 1.2rem
        }

        .c-chart__legend-item--proponents::before {
            background-color: var(--au-green-500)
        }

        .c-chart__legend-item--opponents::before {
            background-color: var(--au-red-600)
        }

        .c-chart__legend-item--abstentions::before {
            background-color: var(--au-gray-400)
        }

        .c-pie {
            fill: transparent;
            stroke-width: 50;
            stroke-dasharray: 0 158;
            transform: rotate(var(--offset));
            transform-origin: center center
        }

        .c-pie--proponents {
            stroke: var(--au-green-500);
            stroke-dasharray: calc(var(--value-proponents) * 158 / var(--total-voters)) 158;
        }

        .c-pie--opponents {
            --offset: calc(var(--value-proponents) * 360 / var(--total-voters) * 1deg);
            stroke: var(--au-red-600);
            stroke-dasharray: calc(var(--value-opponents) * 158 / var(--total-voters)) 158;
        }

        .c-pie--abstentions {
            --offset: calc((var(--value-proponents) + var(--value-opponents)) * 360 / var(--total-voters) * 1deg);
            stroke: var(--au-gray-400);
            stroke-dasharray: calc(var(--value-abstentions) * 158 / var(--total-voters)) 158;
        }
    `,Te([ce({type:Object})],Pe.prototype,"vote",void 0),Pe=Te([se("au-voting-overview")],Pe);var Le=function(e,t,r,i){for(var o,a=arguments.length,s=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i,n=e.length-1;n>=0;n--)(o=e[n])&&(s=(a<3?o(s):a>3?o(t,r,s):o(t,r))||s);return a>3&&s&&Object.defineProperty(t,r,s),s};let Ie=class extends oe{constructor(){super(...arguments),this.uri="",this.harvesterEndpoint="",this._state={voting:[]},this._loading=!1}connectedCallback(){super.connectedCallback(),this.fetchData()}async fetchData(){this._loading=!0;try{const e=`PREFIX besluit: <http://data.vlaanderen.be/ns/besluit#>\n      PREFIX schema: <http://data.europa.eu/eli/ontology#>\n      PREFIX prov: <http://www.w3.org/ns/prov#>\n      PREFIX dc: <http://purl.org/dc/terms/>\n      PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n      PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\n\n      SELECT ?uri ?geheim ?aantalOnthouders ?aantalTegenstanders ?aantalVoorstanders ?gevolg ?onderwerp\n      WHERE {    \n        ?behanding dc:subject <${this.uri}>.\n        OPTIONAL {\n          ?behanding besluit:heeftStemming ?uri.\n        }\n        OPTIONAL {\n          ?uri besluit:geheim ?geheim.\n        }\n        OPTIONAL {\n          ?uri besluit:aantalOnthouders ?aantalOnthouders.\n        }\n        OPTIONAL {\n          ?uri besluit:aantalTegenstanders ?aantalTegenstanders.\n        }\n        OPTIONAL {\n          ?uri besluit:aantalVoorstanders ?aantalVoorstanders.\n        }\n        OPTIONAL {\n          ?uri besluit:gevolg ?gevolg.\n        }\n        OPTIONAL {\n          ?uri besluit:onderwerp ?onderwerp.\n        }\n      }`,t=`${this.harvesterEndpoint}?query=${encodeURIComponent(e)}`,r=await fetch(t),i=await r.json(),o=this.formatResponse(i.results.bindings);this._state={voting:o}}catch(e){console.error("Failed to fetch data:",e)}finally{this._loading=!1}}render(){return this._loading?F`<p>Loading...</p>`:F`
      <!-- <p>${JSON.stringify(this._state.voting,null,2)}</p> -->
      ${this._state.voting&&this._state.voting.length>0?this._state.voting.map((e=>e.vote.available?F`
        <au-accordion buttonLabel="Stemming" subtitle="${e.vote.subject}">
            ${"true"===e.vote.geheim?F`
            <p class="au-u-h6 au-u-flex au-u-flex--spaced-tiny au-u-flex--vertical-center au-u-margin-top">
                  Geheime stemming
              </p>
            `:F`
              <p class="au-u-h6 au-u-flex au-u-flex--spaced-tiny au-u-flex--vertical-center au-u-margin-top">
                  Openbare stemming
              </p>
            `}
          <au-voting-overview .vote="${e.vote}"></au-voting-overview>
        </au-accordion>
      `:"")):F`
        <au-alert skin="warning" message="Stemming niet beschikbaar" class="au-u-margin-top au-u-margin-bottom"></au-alert>
      `}
    `}formatResponse(e){return e.map((e=>({uri:e.uri?.value,vote:{subject:e.onderwerp?.value,available:!!e.uri,geheim:e.geheim?.value,aantalOnthouders:e.aantalOnthouders?.value,aantalTegenstanders:e.aantalTegenstanders?.value,aantalVoorstanders:e.aantalVoorstanders?.value,gevolg:e.gevolg?.value}})))}};Ie.styles=a`
    /* Add your CSS here */

    p{
      padding: 0 0.6rem;
      font-size: var(--au-para);
      font-weight: var(--au-light);
      text-decoration: underline;
      text-decoration-color: var(--primary-color);
    }
  `,Le([ce({type:String})],Ie.prototype,"uri",void 0),Le([ce({type:String})],Ie.prototype,"harvesterEndpoint",void 0),Le([de()],Ie.prototype,"_state",void 0),Le([de()],Ie.prototype,"_loading",void 0),Ie=Le([se("decision-card-details-voting")],Ie);var je=function(e,t,r,i){for(var o,a=arguments.length,s=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i,n=e.length-1;n>=0;n--)(o=e[n])&&(s=(a<3?o(s):a>3?o(t,r,s):o(t,r))||s);return a>3&&s&&Object.defineProperty(t,r,s),s};let Ce=class extends oe{constructor(){super(...arguments),this.uri="",this.pdf="",this.harvesterEndpoint=""}render(){return F`
            <decision-card-details-besluit .pdf="${this.pdf}"></decision-card-details-besluit>
            <decision-card-details-voting .uri="${this.uri}" .harvesterEndpoint="${this.harvesterEndpoint}"></decision-card-details-voting>
            <!-- <decision-card-details-agenda .url="${this.uri}"></decision-card-details-agenda> -->
        `}};Ce.styles=a`
    `,je([ce({type:String})],Ce.prototype,"uri",void 0),je([ce({type:String})],Ce.prototype,"pdf",void 0),je([ce({type:String})],Ce.prototype,"harvesterEndpoint",void 0),Ce=je([se("decision-card-details")],Ce);var Re=function(e,t,r,i){for(var o,a=arguments.length,s=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i,n=e.length-1;n>=0;n--)(o=e[n])&&(s=(a<3?o(s):a>3?o(t,r,s):o(t,r))||s);return a>3&&s&&Object.defineProperty(t,r,s),s};let Ne=class extends oe{constructor(){super(...arguments),this.header="",this.subheader="",this.body="",this.footer="",this.pdf="",this.uri="",this.harvesterEndpoint="",this.detailsVisible=!1}toggleDetails(){this.detailsVisible=!this.detailsVisible}render(){return F`
            <card-header .header="${this.header}" .subheader="${this.subheader}" @click="${this.toggleDetails}"></card-header>
            <card-body .body="${this.body}" @click="${this.toggleDetails}"></card-body>
            <card-footer .footer="${this.footer}"></card-footer>
            ${this.detailsVisible?F`<decision-card-details .pdf="${this.pdf}" .uri="${this.uri}" .harvesterEndpoint="${this.harvesterEndpoint}"></decision-card-details>`:""}
        `}};Ne.styles=a`
        :host {
            display: flex;
            flex-direction: column;
            gap: 1em;
            background-color: var(--card-background-color, white);
            border: var(--card-border, solid 1px lightgray);
            border-radius: var(--card-border-radius, 3px);
            font-size: var(--au-global-font-size);
            padding: 1em;
        }
        card-header, card-body  {
            cursor: pointer;
        }

    `,Re([ce({type:String})],Ne.prototype,"header",void 0),Re([ce({type:String})],Ne.prototype,"subheader",void 0),Re([ce({type:String})],Ne.prototype,"body",void 0),Re([ce({type:String})],Ne.prototype,"footer",void 0),Re([ce({type:String})],Ne.prototype,"pdf",void 0),Re([ce({type:String})],Ne.prototype,"uri",void 0),Re([ce({type:String})],Ne.prototype,"harvesterEndpoint",void 0),Re([de()],Ne.prototype,"detailsVisible",void 0),Ne=Re([se("decision-card")],Ne);var Me=function(e,t,r,i){for(var o,a=arguments.length,s=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i,n=e.length-1;n>=0;n--)(o=e[n])&&(s=(a<3?o(s):a>3?o(t,r,s):o(t,r))||s);return a>3&&s&&Object.defineProperty(t,r,s),s};let De=class extends oe{constructor(){super(...arguments),this.uri="",this.harvesterEndpoint="",this._state={agendapunten:[]}}connectedCallback(){super.connectedCallback(),this.fetchAgendapunten()}async fetchAgendapunten(){const e=`\n            PREFIX besluit: <http://data.vlaanderen.be/ns/besluit#>\n            PREFIX schema: <http://data.europa.eu/eli/ontology#>\n            PREFIX prov: <http://www.w3.org/ns/prov#>\n            PREFIX dc: <http://purl.org/dc/terms/>\n            PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n            PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\n\n            SELECT ?uri ?behandeling ?link ?titel ?beschrijving ?bestuursOrgaanLabel ?datumPublicatie\n            WHERE {      \n                <${this.uri}> besluit:behandelt ?uri;\n                             besluit:isGehoudenDoor ?bestuursOrgaan.\n\n                ?bestuursOrgaan <http://www.w3.org/2004/02/skos/core#prefLabel> ?bestuursOrgaanLabel.\n          \n                ?uri a besluit:Agendapunt;\n                      dc:title ?titel;\n                      dc:description ?beschrijving.\n\n                ?behandeling dc:subject ?uri;\n                             prov:generated ?besluit.\n\n                ?besluit schema:date_publication ?datumPublicatie;\n                         prov:value ?link.\n            }\n            ORDER BY DESC(?datumStart) LIMIT 10`,t=`${this.harvesterEndpoint}?query=${encodeURIComponent(e)}`,r=await fetch(t),i=await r.json(),o=this.formatResponse(i.results.bindings);this._state={agendapunten:o}}render(){return F`
            <!-- <h3 class ="au-c-heading--3">Agendapunten:</h3> -->
            ${this._state.agendapunten.map((e=>{const t=e.title,r=e.content,i=e.pubDate+" - "+e.creator,o=e.link,a=e.uri;return F`
                    <decision-card 
                        .header="${t}"
                        .subheader="${""}"
                        .body="${r}"
                        .footer="${i}"
                        .pdf="${o}"
                        .uri="${a}"
                        .harvesterEndpoint="${this.harvesterEndpoint}"
                    ></decision-card>
                    `}))}
            <div class="divider"></div>
            `}formatResponse(e){return e.map((e=>({uri:e.uri.value,behandeling:e.behandeling.value,title:e.titel.value,link:e.link.value,pubDate:new Date(e.datumPublicatie.value).toLocaleDateString("nl-BE"),creator:e.bestuursOrgaanLabel.value,content:e.beschrijving.value})))}};De.styles=a`
        /* Add your styles here */

        .au-c-heading--3  {
            font-size: var(--au-h5);
            line-height: var(--au-global-line-height);
            color: var(--au-gray-900);
            font-weight: var(--au-bold);
            text-decoration: underline;
            text-decoration-color: var(--primary-color);
        }

        .divider {
            margin-bottom: 5rem;
        }
    `,Me([ce({type:String})],De.prototype,"uri",void 0),Me([ce({type:String})],De.prototype,"harvesterEndpoint",void 0),Me([de()],De.prototype,"_state",void 0),De=Me([se("zitting-card-details")],De);var Ue=function(e,t,r,i){for(var o,a=arguments.length,s=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i,n=e.length-1;n>=0;n--)(o=e[n])&&(s=(a<3?o(s):a>3?o(t,r,s):o(t,r))||s);return a>3&&s&&Object.defineProperty(t,r,s),s};let Fe=class extends oe{constructor(){super(...arguments),this.startedAtTime="",this.endedAtTime="",this.source="",this.uri="",this.harvesterEndpoint="",this.detailsVisible=!1}toggleDetails(){this.detailsVisible=!this.detailsVisible}resetDetails(){this.detailsVisible=!1}render(){const e=this.endedAtTime?`Zitting ${this.startedAtTime} - ${this.endedAtTime}`:`Zitting ${this.startedAtTime}`,t=this.source;return F`
            <card-header .header="${e} - ${t}" @click="${this.toggleDetails}"></card-header>
            ${this.detailsVisible?F`<zitting-card-details .uri="${this.uri}" .harvesterEndpoint="${this.harvesterEndpoint}"></zitting-card-details>`:""}
        `}};Fe.styles=a`
        :host {
            display: flex;
            flex-direction: column;
            gap: 1em;
            background-color: var(--card-background-color, white);
            border: var(--card-border, solid 1px lightgray);
            border-radius: var(--card-border-radius, 3px);
            font-size: var(--au-global-font-size);
            padding: 1em;
        }
        
        card-header, card-body {
            cursor: pointer;
        }
    `,Ue([ce()],Fe.prototype,"startedAtTime",void 0),Ue([ce()],Fe.prototype,"endedAtTime",void 0),Ue([ce()],Fe.prototype,"source",void 0),Ue([ce()],Fe.prototype,"uri",void 0),Ue([ce()],Fe.prototype,"harvesterEndpoint",void 0),Ue([de()],Fe.prototype,"detailsVisible",void 0),Fe=Ue([se("zitting-card")],Fe);var Xe=function(e,t,r,i){for(var o,a=arguments.length,s=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i,n=e.length-1;n>=0;n--)(o=e[n])&&(s=(a<3?o(s):a>3?o(t,r,s):o(t,r))||s);return a>3&&s&&Object.defineProperty(t,r,s),s};let Be=class extends oe{constructor(){super(...arguments),this.harvesterEndpoint="https://sint-lievens-houtem.lblod-local-dev.s.redhost.be/sparql",this.height="1000px",this.batchSize=10,this.searchRange=100,this.scrollOffset=50,this._state={zittingen:[]},this.selectedBestuursOrganen=["College"],this.loaded=10,this.startDate=new Date(2024,0,1).toISOString(),this.endDate=(new Date).toISOString(),this.handleStartDateChange=e=>{this.startDate=e.target.value,this.fetchData()},this.handleEndDateChange=e=>{this.endDate=e.target.value,this.fetchData()},this.handleScroll=e=>{const t=e.target;t.scrollHeight-t.scrollTop<=t.clientHeight+this.scrollOffset&&(this.loaded+=this.batchSize)}}connectedCallback(){super.connectedCallback(),this.fetchData()}disconnectedCallback(){super.disconnectedCallback(),this.scrollableDiv.removeEventListener("scroll",this.handleScroll)}firstUpdated(){this.scrollableDiv.addEventListener("scroll",this.handleScroll),this.startDateInput.addEventListener("change",this.handleStartDateChange),this.endDateInput.addEventListener("change",this.handleEndDateChange)}handleFilterClick(e){const t=this.selectedBestuursOrganen.indexOf(e);this.selectedBestuursOrganen=-1===t?[...this.selectedBestuursOrganen,e]:this.selectedBestuursOrganen.filter((t=>t!==e)),this.zittingCards.forEach((e=>e.resetDetails()))}render(){const e=[...new Set(this._state.zittingen.map((e=>e.bestuursOrgaanLabel)))],t=this.selectedBestuursOrganen.length?this._state.zittingen.filter((e=>this.selectedBestuursOrganen.includes(e.bestuursOrgaanLabel))):this._state.zittingen;return console.log(this.selectedBestuursOrganen),console.log(this.loaded+" / "+t.length),F`

      <h1 class="au-c-heading au-c-heading--2">De laatste zittingen:</h1>
      <div class="au-controls au-controls--row">
      <label class="au-c-label" for="date-from">
            Kies één of meer besturen
          </label>

        <ul class="au-tags">
        ${e.map((e=>F`
          <button class="au-filter ${this.selectedBestuursOrganen.includes(e)?"au-filter--active":""}" @click="${()=>this.handleFilterClick(e)}">${e}</button>
        `))}
        </ul>

<!--         <div class="au-c-form-row">
          <label class="au-c-label" for="municipality">
            Kies één of meer besturen
          </label>
          <div id="municipality" class="ember-view ember-basic-dropdown-trigger ember-power-select-trigger ember-power-select-multiple-trigger au-u-1-1" tabindex="-1" aria-owns="ember-basic-dropdown-content-ember7" role="button" data-ebd-id="ember7-trigger" aria-controls="ember-basic-dropdown-content-ember7" aria-expanded="false" aria-disabled="false">
            <ul id="ember-power-select-multiple-options-ember7" class="ember-power-select-multiple-options">
              <li>
                <input class="ember-power-select-trigger-multiple-input" aria-haspopup="listbox" aria-expanded="false" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" id="ember-power-select-trigger-multiple-input-ember7" style="width: 100%;" placeholder="Alle besturen" form="power-select-fake-form" type="search">
              </li>
            </ul>
            <span class="ember-power-select-status-icon"></span>
          </div>
          <div id="ember-basic-dropdown-content-ember7" class="ember-basic-dropdown-content-placeholder" style="display: none;"></div>
        </div> -->
        <div class="au-c-form-row">
          <div class="au-c-form-column ">
            <label class="au-c-label   " for="date-from">
              Startdatum
            </label>
            <input class="au-c-input au-c-input--block " min="2015-01-01" max="2100-12-31" id="date-from" type="date">  
          </div>

          <div class="au-c-form-column ">
            <label class="au-c-label   " for="date-to">
              Einddatum 
            </label>
            <input class="au-c-input au-c-input--block " min="2015-01-01" max="2100-12-31" id="date-to" type="date">  
          </div>
        </div>

      </div>
      
      <div class="infinite-scroll" style="overflow-y: auto; height: ${this.height};">
        ${t.slice(0,this.loaded).map((e=>{const t=e.startTime,r=e.endTime,i=e.bestuursOrgaanLabel,o=e.zitting;return F`
              <zitting-card 
                data-id="${i}"
                .startedAtTime="${t}"
                .endedAtTime="${r}"
                .source="${i}"
                .uri="${o}"
                .harvesterEndpoint="${this.harvesterEndpoint}"
              ></zitting-card>
            `}))}
      </div>
    `}async fetchData(){const e=`\n    PREFIX besluit: <http://data.vlaanderen.be/ns/besluit#>\n    PREFIX schema: <http://data.europa.eu/eli/ontology#>\n    PREFIX prov: <http://www.w3.org/ns/prov#>\n    PREFIX dc: <http://purl.org/dc/terms/>\n    PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n    PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\n\n    SELECT DISTINCT ?zitting (SAMPLE(?start) AS ?start) (SAMPLE(?startTime) AS ?startTime) (SAMPLE(?endTime) AS ?endTime) \n                    (SAMPLE(?notulen) AS ?notulen) (SAMPLE(?secretaris) AS ?secretaris) (SAMPLE(?voorzitter) AS ?voorzitter) \n                    (SAMPLE(?zittingsverslag) AS ?zittingsverslag) (SAMPLE(?gehoudenDoor) AS ?gehoudenDoor) \n                    (SAMPLE(?bestuursOrgaanLabel) AS ?bestuursOrgaanLabel) (SAMPLE(?location) AS ?location)\n    WHERE {\n      ?zitting a besluit:Zitting .\n      OPTIONAL { ?zitting besluit:geplandeStart ?start . }\n      OPTIONAL { ?zitting prov:startedAtTime ?startTime . }\n      OPTIONAL { ?zitting prov:endedAtTime ?endTime . }\n      OPTIONAL { ?zitting besluit:heeftNotulen ?notulen . }\n      OPTIONAL { ?zitting besluit:heeftSecretaris ?secretaris . }\n      OPTIONAL { ?zitting besluit:heeftVoorzitter ?voorzitter . }\n      OPTIONAL { ?zitting besluit:heeftZittingsverslag ?zittingsverslag . }\n      OPTIONAL { ?zitting besluit:isGehoudenDoor ?gehoudenDoor . }\n      OPTIONAL { ?gehoudenDoor <http://www.w3.org/2004/02/skos/core#prefLabel> ?bestuursOrgaanLabel.}\n      OPTIONAL { ?zitting prov:atLocation ?location . }\n      FILTER (?startTime >= "${this.startDate}"^^xsd:dateTime && ?startTime <= "${this.endDate}"^^xsd:dateTime)\n\n    }\n    GROUP BY ?zitting\n    ORDER BY DESC(?startTime)\n    LIMIT ${this.searchRange}`;console.log(encodeURIComponent(e));const t=`${this.harvesterEndpoint}?query=${encodeURIComponent(e)}`,r=await fetch(t),i=await r.json(),o=this.formatResponse(i.results.bindings);this._state={zittingen:[...o]}}formatResponse(e){return e.map((e=>({zitting:e.zitting.value,start:e.start?new Date(e.start.value).toLocaleDateString("nl-BE"):"",startTime:e.startTime?new Date(e.startTime.value).toLocaleDateString("nl-BE"):"",endTime:e.endTime?new Date(e.endTime.value).toLocaleDateString("nl-BE"):"",notulen:e.notulen?e.notulen.value:"",secretaris:e.secretaris?e.secretaris.value:"",voorzitter:e.voorzitter?e.voorzitter.value:"",zittingsverslag:e.zittingsverslag?e.zittingsverslag.value:"",gehoudenDoor:e.gehoudenDoor?e.gehoudenDoor.value:"",bestuursOrgaanLabel:e.bestuursOrgaanLabel?e.bestuursOrgaanLabel.value.replace(" Gemeente","").replace("Sint-Lievens-Houtem","").trim():"",location:e.location?e.location.value:""})))}};Be.styles=a`
    :host {
      display: flex;
      flex-direction: column;
      font-family: var(--au-font);

      --primary-color: #99a215;
      --primary-color-hover: #737925;
      --primary-color-translucent: #fbfaf4;
      --secondary: #fff;
      --text: black;


      --au-white: #ffffff;
    --au-gray-100: #f7f9fc;
    --au-gray-200: #e8ebee;
    --au-gray-300: #cfd5dd;
    --au-gray-400: #afb9c5;
    --au-gray-500: #8695a8;
    --au-gray-600: #7f8b99;
    --au-gray-700: #687483;
    --au-gray-800: #4f5864;
    --au-gray-900: #333332;
    --au-gray-1000: #000000;
    --au-blue-100: #f4f7fb;
    --au-blue-200: #e4ebf5;
    --au-blue-300: #b2ccef;
    --au-blue-500: #5990de;
    --au-blue-600: #3779d7;
    --au-blue-700: #0055cc;
    --au-blue-800: #004ab2;
    --au-blue-900: #003b8e;
    --au-yellow-100: #fff9d5;
    --au-yellow-200: #fff29b;
    --au-yellow-300: #ffe615;
    --au-yellow-400: #ffc515;
    --au-yellow-600: #7f6e3b;
    --au-yellow-900: #473d21;
    --au-orange-200: #fff9e8;
    --au-orange-300: #ffeeb9;
    --au-orange-400: #ffe49c;
    --au-orange-500: #ffa10a;
    --au-orange-600: #d07b06;
    --au-orange-700: #9f5804;
    --au-red-100: #fdf7f7;
    --au-red-200: #fbeded;
    --au-red-300: #f4c8c9;
    --au-red-400: #f1aeae;
    --au-red-500: #e77474;
    --au-red-600: #d2373c;
    --au-red-700: #aa2729;
    --au-red-900: #470000;
    --au-green-100: #f8fcf9;
    --au-green-200: #ecf6ee;
    --au-green-300: #c5e5cc;
    --au-green-400: #b1dcbb;
    --au-green-500: #009e47;
    --au-green-700: #007a37;
    --au-green-900: #323d08;
    --vl-white: #ffffff;
    --vl-grey-05: #f7f9fc;
    --vl-grey-10: #e8ebee;
    --vl-grey-20: #cfd5dd;
    --vl-grey-50: #8695a8;
    --vl-grey-70: #687483;
    --vl-grey-100: #333332;
    --vl-grey-110: #000000;
    --vl-yellow-100: #ffe615;
    --vl-blue-15: #e4ebf5;
    --vl-blue-30: #b2ccef;
    --vl-blue-65: #5990de;
    --vl-blue-100: #0055cc;
    --vl-blue-110: #003b8e;
    --vl-green-10: #ecf6ee;
    --vl-green-30: #c5e5cc;
    --vl-green-40: #b1dcbb;
    --vl-green-100: #009e47;
    --vl-green-130: #007a37;
    --vl-red-10: #fbeded;
    --vl-red-30: #f4c8c9;
    --vl-red-40: #f1aeae;
    --vl-red-100: #d2373c;
    --vl-red-130: #aa2729;
    --vl-orange-10: #fff9e8;
    --vl-orange-30: #ffeeb9;
    --vl-orange-40: #ffe49c;
    --vl-orange-100: #ffa10a;
    --vl-orange-110: #d07b06;
    --vl-orange-120: #9f5804;
    --vl-lime-100: #a3cc00;
    --vl-lime-120: #6f8b00;
    --vl-brick-100: #d53d5e;
    --vl-brick-120: #85273b;
    --vl-chocolate-100: #d26e25;
    --vl-chocolate-120: #904e1d;
    --vl-picton-100: #32b1e9;
    --vl-picton-120: #16465b;
    --au-page-bg: #ffffff;
    --au-select-text-color: #333332;
    --au-select-text-bg: #e4ebf5;
    --au-divider-color: #e8ebee;
    --au-outline-color: #5990de;
    --au-global-font-size: 1.5rem;
    --au-global-line-height: 1.5;
    --au-font: "flanders-sans", BlinkMacSystemFont, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    --au-font-secondary: "flanders-serif";
    --au-font-tertiary: courier, monospace;
    --au-light: 300;
    --au-regular: 400;
    --au-medium: 500;
    --au-bold: 700;
    --au-base: 1.5rem;
    --au-para: 1.8rem;
    --au-para-small: 1.6rem;
    --au-lead: 2.2rem;
    --au-lead-medium: 2rem;
    --au-lead-small: 1.8rem;
    --au-small: 1.4rem;
    --au-tiny: 1.3rem;
    --au-h-functional-small: 1.3rem;
    --au-h-functional: 1.5rem;
    --au-h6: 1.6rem;
    --au-h5: 1.8rem;
    --au-h4: 2rem;
    --au-h3-small: 2.2rem;
    --au-h3: 2.6rem;
    --au-h2-small: 2.6rem;
    --au-h2: 3.2rem;
    --au-h1-small: 3rem;
    --au-h1-medium: 4rem;
    --au-h1: 4.4rem;
    --au-icon-size: 1.3rem;
    --au-icon-size-medium: 1.6rem;
    --au-icon-size-large: 1.9rem;
    --au-radius: 0.3rem;
    --au-border: 0.2rem;
    --au-outline-border: 0.3rem;
    --au-outline-border-style: solid;
    --au-outline: #5990de 0.3rem solid;
    --au-outline-offset: 0.2rem;
    --au-outline-offset-negative: -0.3rem;
    --au-duration: 0.125s;
    --au-easing: cubic-bezier(0.19, 1, 0.22, 1);
    --au-transition: 0.125s cubic-bezier(0.19, 1, 0.22, 1);
    --au-z-index-alpha: 1;
    --au-z-index-beta: 2;
    --au-z-index-gamma: 3
    }


    .au-c-heading {
        color: var(--au-gray-900);
        font-family: var(--au-font);
        font-weight: var(--au-medium)
    }

    .au-c-heading--1 {
        font-size: var(--au-h1-small);
        line-height: var(--au-global-line-height)
    }

    @media (min-width: 47.9375em) {
        .au-c-heading--1 {
            font-size:var(--au-h1-medium);
            line-height: var(--au-global-line-height)
        }
    }

    @media (min-width: 63.9375em) {
        .au-c-heading--1 {
            font-size:var(--au-h1);
            line-height: var(--au-global-line-height)
        }
    }

    .au-c-heading--2 {
        font-size: var(--au-lead-small);
        font-weight: var(--au-medium);
        line-height: var(--au-global-line-height);

        font-family: "Maven Pro", Arial, Helvetica, "Helvetica Neue", sans-serif;

        text-decoration: underline;
        text-decoration-color: var(--primary-color);

        margin-top: 0;
    }

    @media (min-width: 47.9375em) {
        .au-c-heading--2 {
            line-height: var(--au-global-line-height)
        }
    }

    .au-filter {
      background-color: white;
      border: 1px solid var(--au-gray-900);
      cursor: pointer;

      font-size: var(--au-base);
      font-weight: var(--au-medium);

      margin:0.1rem;
    }

    .au-filter:hover, .au-filter--active {
      border-color: var(--primary-color);
      color: var(--primary-color);

    } 

    .ember-basic-dropdown {
    position: relative;
    box-sizing: border-box
}

.ember-basic-dropdown-content,.ember-basic-dropdown-content * {
    box-sizing: border-box
}

.ember-basic-dropdown-content {
    position: absolute;
    width: auto;
    z-index: 99;
    background-color: #fff
}

.ember-basic-dropdown-content--left {
    left: 0
}

.ember-basic-dropdown-content--right {
    right: 0
}

.ember-basic-dropdown-overlay {
    position: fixed;
    background: rgba(33,35,38,.5);
    width: 100%;
    height: 100%;
    z-index: 9;
    top: 0;
    left: 0;
    pointer-events: none
}

.ember-basic-dropdown-content-wormhole-origin {
    display: inline
}

.ember-power-select-dropdown * {
    box-sizing: border-box;
    font-family: var(--au-font)
}

.ember-power-select-trigger {
    position: relative;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: var(--au-h6);
    line-height: 1.25;
    min-height: 3.6rem;
    padding: .72rem 3rem .72rem .6rem!important;
    user-select: none;
    color: inherit;
    background-color: #fff;
    border-top: .1rem solid var(--au-gray-300);
    border-bottom: .1rem solid var(--au-gray-300);
    border-right: .1rem solid var(--au-gray-300);
    border-left: .1rem solid var(--au-gray-300);
    border-radius: .3rem
}

.ember-power-select-trigger--active,.ember-power-select-trigger:focus {
    outline: 0;
    border-width: .1rem!important;
    border-color: var(--au-outline-color)!important;
    box-shadow: inset 0 0 0 .2rem var(--au-outline-color)!important
}

.ember-basic-dropdown-trigger--below.ember-power-select-trigger[aria-expanded=true],.ember-basic-dropdown-trigger--in-place.ember-power-select-trigger[aria-expanded=true] {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0
}

.ember-basic-dropdown-trigger--above.ember-power-select-trigger[aria-expanded=true] {
    border-top-left-radius: 0;
    border-top-right-radius: 0
}

.ember-power-select-placeholder {
    color: var(--au-gray-700);
    display: block;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis
}

.ember-power-select-status-icon {
    position: absolute;
    display: block;
    top: 0;
    bottom: 0;
    margin: auto;
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><g class="nav-down"><path d="M12 17L3 8.429 4.5 7l7.5 7.143L19.5 7 21 8.429 12 17z" class="Vector"/></g></svg>');
    background-size: contain;
    height: 1.2rem;
    width: 1.2rem;
    transform: rotate(0deg)!important
}

.ember-power-select-option[aria-current=true]:before,.ember-power-select-option[aria-selected=true]:before,.ember-power-select-status-icon:after {
    display: none
}

.ember-basic-dropdown-trigger[aria-expanded=true] .ember-power-select-status-icon {
    transform: rotate(180deg)!important
}

.ember-power-select-clear-btn {
    position: absolute;
    cursor: pointer;
    top: 50%;
    transform: translateY(-50%);
    width: 2rem;
    height: 2rem;
    line-height: 0;
    font-size: .1rem;
    color: transparent;
    background-color: var(--au-gray-200);
    border-radius: 100%;
    transition: opacity var(--au-transition);
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="%23545961"><polygon points="7 8.414 1.707 13.707 .293 12.293 5.586 7 .293 1.707 1.707 .293 7 5.586 12.293 .293 13.707 1.707 8.414 7 13.707 12.293 12.293 13.707" transform="translate(2 2)"/></svg>');
    background-size: 1.2rem 1.2rem;
    background-repeat: no-repeat;
    background-position: center center;
    overflow: hidden
}

.ember-power-select-clear-btn:hover {
    color: transparent;
    opacity: .8
}

.ember-power-select-trigger-multiple-input {
    font-family: inherit;
    font-size: inherit;
    border: 0;
    display: inline-block;
    line-height: inherit;
    -webkit-appearance: none;
    outline: 0;
    padding: 0;
    background-color: transparent;
    text-indent: 2px
}

.ember-power-select-trigger-multiple-input:disabled {
    background-color: var(--au-gray-100)
}

.ember-power-select-trigger-multiple-input::placeholder {
    opacity: 1;
    color: var(--au-gray-700)
}

.ember-power-select-trigger-multiple-input::-webkit-input-placeholder {
    opacity: 1;
    color: var(--au-gray-700)
}

.ember-power-select-trigger-multiple-input::-moz-placeholder {
    opacity: 1;
    color: var(--au-gray-700)
}

.ember-power-select-trigger-multiple-input::-ms-input-placeholder {
    opacity: 1;
    color: var(--au-gray-700)
}

.ember-power-select-multiple-options {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding: 0;
    margin: 0 .6rem;
    height: 100%;
    max-height: 10rem;
    overflow: auto
}

.ember-power-select-multiple-option {
    font-size: var(--au-base);
    line-height: var(--au-global-line-height);
    display: inline-flex;
    font-family: var(--au-font);
    font-weight: var(--au-medium);
    line-height: 2.4rem;
    min-height: 2.4rem;
    color: var(--au-gray-700);
    background-color: var(--au-gray-200);
    border: .1rem solid var(--au-gray-300);
    padding: 0 .6rem;
    border-radius: .6rem;
    margin-right: .6rem;
    margin-top: .3rem;
    margin-bottom: .3rem;
    gap: .6rem
}

.ember-power-select-multiple-remove-btn {
    position: relative;
    font-size: .1rem;
    font-weight: var(--au-regular);
    width: 2rem;
    cursor: pointer;
    text-align: center;
    color: transparent;
    background-color: var(--au-gray-200);
    transition: color var(--au-transition);
    padding-right: .6rem;
    padding-left: .6rem;
    margin-left: -.6rem;
    border-right: .1rem dotted var(--au-gray-300);
    border-top-left-radius: var(--au-radius);
    border-bottom-left-radius: var(--au-radius);
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="%23545961"><polygon points="7 8.414 1.707 13.707 .293 12.293 5.586 7 .293 1.707 1.707 .293 7 5.586 12.293 .293 13.707 1.707 8.414 7 13.707 12.293 12.293 13.707" transform="translate(2 2)"/></svg>');
    background-size: 1.2rem 1.2rem;
    background-repeat: no-repeat;
    background-position: center center;
    overflow: hidden
}

.ember-power-select-multiple-remove-btn:hover {
    color: transparent;
    opacity: .8
}

.ember-power-select-search {
    padding: .6rem
}

.ember-power-select-search-input {
    position: relative;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: var(--au-h6);
    line-height: 3.6rem;
    height: 3.6rem;
    padding: 0 .6rem .1ex;
    user-select: none;
    color: inherit;
    background-color: #fff;
    border: .1rem solid var(--au-gray-300);
    border-radius: .3rem;
    width: 100%
}

.ember-power-select-search-input:focus {
    outline: 0;
    border-color: var(--au-outline-color);
    box-shadow: inset 0 0 0 .2rem var(--au-outline-color)
}

.ember-power-select-search-input::-webkit-input-placeholder {
    color: var(--au-gray-600);
    font-style: italic;
    font-weight: 300
}

.ember-power-select-search-input::-moz-placeholder {
    color: var(--au-gray-600);
    font-style: italic;
    font-weight: 300
}

.ember-power-select-search-input:-ms-input-placeholder {
    color: var(--au-gray-600);
    font-style: italic;
    font-weight: 300
}

.ember-power-select-search-input:-moz-placeholder {
    color: var(--au-gray-600);
    font-style: italic;
    font-weight: 300
}

.ember-power-select-dropdown {
    border-left: .1rem solid var(--au-gray-300);
    border-right: .1rem solid var(--au-gray-300);
    line-height: 1.75;
    border-radius: .3rem;
    box-shadow: 0 0 12px rgba(33,35,38,.15),0 0 2px rgba(33,35,38,.1);
    overflow: hidden;
    color: inherit;
    z-index: 10000
}

.ember-power-select-dropdown.ember-basic-dropdown-content--above {
    border-top: .1rem solid var(--au-gray-300);
    border-bottom: none;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0
}

.ember-power-select-dropdown.ember-basic-dropdown-content--below,.ember-power-select-dropdown.ember-basic-dropdown-content--in-place {
    border-top: none;
    border-bottom: .1rem solid var(--au-gray-300);
    border-top-left-radius: 0;
    border-top-right-radius: 0
}

.ember-power-select-dropdown.ember-basic-dropdown-content--in-place {
    width: 100%;
    z-index: auto
}

.ember-power-select-options {
    list-style: none;
    margin: 0;
    padding: 0;
    user-select: none;
    -webkit-user-select: none;
    border-top: .1rem solid var(--au-divider-color)
}

.ember-power-select-options[role=listbox] {
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    max-height: 12.25em
}

.ember-power-select-option {
    cursor: pointer;
    font-size: var(--au-h6);
    line-height: 2.2rem;
    padding: .6rem .6rem .6rem 2.4rem;
    position: relative
}

.ember-power-select-option:hover {
    text-decoration: underline
}

.ember-power-select-group[aria-disabled=true] {
    color: var(--au-gray-200);
    cursor: not-allowed
}

.ember-power-select-group[aria-disabled=true] .ember-power-select-option,.ember-power-select-option[aria-disabled=true] {
    color: var(--au-gray-200);
    pointer-events: none;
    cursor: not-allowed
}

.ember-power-select-option[aria-current=true],.ember-power-select-option[aria-selected=true] {
    color: var(--au-blue-700);
    background-color: var(--au-gray-200);
    text-decoration: underline;
    position: relative
}

.ember-power-select-option[aria-current=true]:after,.ember-power-select-option[aria-selected=true]:after {
    content: "";
    position: absolute;
    top: 0;
    left: .15rem;
    display: block;
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="%230E5EB8" viewBox="0 0 24 24"><g class="check"><path d="M10.695 17L5 12.553l1.424-1.872 3.796 3.042L17.102 6 19 7.404 10.695 17z" class="Vector"/></g></svg>');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    height: 100%;
    width: 1.8rem
}

.ember-power-select-option--loading-message,.ember-power-select-option--no-matches-message,.ember-power-select-option--search-message {
    font-style: italic;
    color: var(--au-gray-600);
    padding: .6rem 0 .6rem .6rem!important
}

.ember-power-select-option--loading-message:hover,.ember-power-select-option--no-matches-message:hover,.ember-power-select-option--search-message:hover {
    text-decoration: none
}

.ember-power-select-group-name {
    cursor: default;
    font-weight: 700
}

.ember-power-select-trigger[aria-disabled=true] {
    background-color: var(--au-gray-100)
}

.ember-power-select--error .ember-power-select-trigger {
    border: .3rem solid var(--au-red-600)
}

.ember-power-select--error .ember-power-select-trigger.ember-power-select-trigger--active,.ember-power-select--error .ember-power-select-trigger:focus {
    outline: 0;
    border-width: .1rem!important;
    border-color: var(--au-outline-color)!important;
    box-shadow: inset 0 0 0 .2rem var(--au-outline-color)!important
}

.ember-power-select-trigger {
    padding: 0 16px 0 0
}

.ember-power-select-placeholder,.ember-power-select-selected-item {
    margin-left: 0;
    padding-right: 2.4rem
}

.ember-power-select-status-icon {
    right: 1.2rem
}

.ember-power-select-clear-btn {
    right: 3rem
}

.ember-power-select-group .ember-power-select-group .ember-power-select-group-name,.ember-power-select-group .ember-power-select-option {
    padding-left: 1.8rem
}

.ember-power-select-group .ember-power-select-group .ember-power-select-option {
    padding-left: 3rem
}

.ember-power-select-group .ember-power-select-group-name {
    padding-left: .6rem
}

.ember-power-select-trigger[dir=rtl] {
    padding: 0 0 0 16px
}

.ember-power-select-trigger[dir=rtl] .ember-power-select-placeholder,.ember-power-select-trigger[dir=rtl] .ember-power-select-selected-item {
    margin-right: 0
}

.ember-power-select-trigger[dir=rtl] .ember-power-select-multiple-option,.ember-power-select-trigger[dir=rtl] .ember-power-select-trigger-multiple-input {
    float: right
}

.ember-power-select-trigger[dir=rtl] .ember-power-select-status-icon {
    left: 1.2rem;
    right: initial
}

.ember-power-select-trigger[dir=rtl] .ember-power-select-clear-btn {
    left: 3rem;
    right: initial
}

.ember-power-select-dropdown[dir=rtl] .ember-power-select-group .ember-power-select-group .ember-power-select-group-name,.ember-power-select-dropdown[dir=rtl] .ember-power-select-group .ember-power-select-option {
    padding-right: 1.8rem
}

.ember-power-select-dropdown[dir=rtl] .ember-power-select-group .ember-power-select-group .ember-power-select-option {
    padding-right: 3rem
}

.ember-power-select-dropdown[dir=rtl] .ember-power-select-group .ember-power-select-group-name {
    padding-right: .6rem
}


    .au-c-label {
        font-size: var(--au-h6);
        line-height: var(--au-global-line-height);
        color: var(--au-gray-900);
        font-family: var(--au-font);
        font-weight: var(--au-medium);
        margin-bottom: 0.6rem;
        display: flex;
        align-items: center;
    }

    .au-c-input {
      border: 0.1rem solid var(--au-gray-300);
      color: var(--au-gray-1000);
      font-size: var(--au-h6);
      font-weight: var(--au-regular);
      font-family: var(--au-font);
      height: 3.6rem;
      max-width: 100%;
      padding: 0 1.2rem .1ex;
      border-radius: 0.3rem;
  }
  .au-c-form-row{
    display: flex;
  }
  .au-c-form-column{
    margin-bottom: 1.2rem;
    margin-right: 1.2rem;
  }

  .au-tags{
    padding: 0;
  }

  `,Xe([ce({type:String})],Be.prototype,"harvesterEndpoint",void 0),Xe([ce({type:String})],Be.prototype,"height",void 0),Xe([ce({type:Number})],Be.prototype,"batchSize",void 0),Xe([ce({type:Number})],Be.prototype,"searchRange",void 0),Xe([ce({type:Number})],Be.prototype,"scrollOffset",void 0),Xe([he("#date-from")],Be.prototype,"startDateInput",void 0),Xe([he("#date-to")],Be.prototype,"endDateInput",void 0),Xe([he(".infinite-scroll")],Be.prototype,"scrollableDiv",void 0),Xe([function(e){return(t,r)=>ue(0,0,{get(){return(this.renderRoot??(pe??=document.createDocumentFragment())).querySelectorAll(e)}})}("zitting-card")],Be.prototype,"zittingCards",void 0),Xe([de()],Be.prototype,"_state",void 0),Xe([de()],Be.prototype,"selectedBestuursOrganen",void 0),Xe([de()],Be.prototype,"loaded",void 0),Xe([de()],Be.prototype,"startDate",void 0),Xe([de()],Be.prototype,"endDate",void 0),Be=Xe([se("zitting-feed")],Be);export{Be as ZittingFeedElement};
