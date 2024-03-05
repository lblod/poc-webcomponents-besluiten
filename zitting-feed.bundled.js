/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=globalThis,e=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,r=Symbol(),i=new WeakMap;class a{constructor(t,e,i){if(this._$cssResult$=!0,i!==r)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const r=this.t;if(e&&void 0===t){const e=void 0!==r&&1===r.length;e&&(t=i.get(r)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&i.set(r,t))}return t}toString(){return this.cssText}}const s=(t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,r,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+t[i+1]),t[0]);return new a(i,t,r)},o=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const r of t.cssRules)e+=r.cssText;return(t=>new a("string"==typeof t?t:t+"",void 0,r))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,{is:n,defineProperty:l,getOwnPropertyDescriptor:c,getOwnPropertyNames:u,getOwnPropertySymbols:h,getPrototypeOf:d}=Object,g=globalThis,v=g.trustedTypes,f=v?v.emptyScript:"",b=g.reactiveElementPolyfillSupport,p=(t,e)=>t,m={toAttribute(t,e){switch(e){case Boolean:t=t?f:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let r=t;switch(e){case Boolean:r=null!==t;break;case Number:r=null===t?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch(t){r=null}}return r}},y=(t,e)=>!n(t,e),w={attribute:!0,type:String,converter:m,reflect:!1,hasChanged:y};Symbol.metadata??=Symbol("metadata"),g.litPropertyMetadata??=new WeakMap;class $ extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=w){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const r=Symbol(),i=this.getPropertyDescriptor(t,r,e);void 0!==i&&l(this.prototype,t,i)}}static getPropertyDescriptor(t,e,r){const{get:i,set:a}=c(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get(){return i?.call(this)},set(e){const s=i?.call(this);a.call(this,e),this.requestUpdate(t,s,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??w}static _$Ei(){if(this.hasOwnProperty(p("elementProperties")))return;const t=d(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(p("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(p("properties"))){const t=this.properties,e=[...u(t),...h(t)];for(const r of e)this.createProperty(r,t[r])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,r]of e)this.elementProperties.set(t,r)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const r=this._$Eu(t,e);void 0!==r&&this._$Eh.set(r,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const t of r)e.unshift(o(t))}else void 0!==t&&e.push(o(t));return e}static _$Eu(t,e){const r=e.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const r of e.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const r=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((r,i)=>{if(e)r.adoptedStyleSheets=i.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const e of i){const i=document.createElement("style"),a=t.litNonce;void 0!==a&&i.setAttribute("nonce",a),i.textContent=e.cssText,r.appendChild(i)}})(r,this.constructor.elementStyles),r}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,r){this._$AK(t,r)}_$EC(t,e){const r=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,r);if(void 0!==i&&!0===r.reflect){const a=(void 0!==r.converter?.toAttribute?r.converter:m).toAttribute(e,r.type);this._$Em=t,null==a?this.removeAttribute(i):this.setAttribute(i,a),this._$Em=null}}_$AK(t,e){const r=this.constructor,i=r._$Eh.get(t);if(void 0!==i&&this._$Em!==i){const t=r.getPropertyOptions(i),a="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:m;this._$Em=i,this[i]=a.fromAttribute(e,t.type),this._$Em=null}}requestUpdate(t,e,r){if(void 0!==t){if(r??=this.constructor.getPropertyOptions(t),!(r.hasChanged??y)(this[t],e))return;this.P(t,e,r)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(t,e,r){this._$AL.has(t)||this._$AL.set(t,e),!0===r.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,r]of t)!0!==r.wrapped||this._$AL.has(e)||void 0===this[e]||this.P(e,this[e],r)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach((t=>t.hostUpdate?.())),this.update(e)):this._$EU()}catch(e){throw t=!1,this._$EU(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach((t=>this._$EC(t,this[t]))),this._$EU()}updated(t){}firstUpdated(t){}}$.elementStyles=[],$.shadowRootOptions={mode:"open"},$[p("elementProperties")]=new Map,$[p("finalized")]=new Map,b?.({ReactiveElement:$}),(g.reactiveElementVersions??=[]).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const x=globalThis,_=x.trustedTypes,O=_?_.createPolicy("lit-html",{createHTML:t=>t}):void 0,k="$lit$",S=`lit$${(Math.random()+"").slice(9)}$`,z="?"+S,E=`<${z}>`,A=document,T=()=>A.createComment(""),P=t=>null===t||"object"!=typeof t&&"function"!=typeof t,j=Array.isArray,I="[ \t\n\f\r]",L=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,R=/-->/g,C=/>/g,N=RegExp(`>|${I}(?:([^\\s"'>=/]+)(${I}*=${I}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),D=/'/g,M=/"/g,X=/^(?:script|style|textarea|title)$/i,F=(t=>(e,...r)=>({_$litType$:t,strings:e,values:r}))(1),U=Symbol.for("lit-noChange"),B=Symbol.for("lit-nothing"),V=new WeakMap,q=A.createTreeWalker(A,129);function W(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==O?O.createHTML(e):e}const H=(t,e)=>{const r=t.length-1,i=[];let a,s=2===e?"<svg>":"",o=L;for(let e=0;e<r;e++){const r=t[e];let n,l,c=-1,u=0;for(;u<r.length&&(o.lastIndex=u,l=o.exec(r),null!==l);)u=o.lastIndex,o===L?"!--"===l[1]?o=R:void 0!==l[1]?o=C:void 0!==l[2]?(X.test(l[2])&&(a=RegExp("</"+l[2],"g")),o=N):void 0!==l[3]&&(o=N):o===N?">"===l[0]?(o=a??L,c=-1):void 0===l[1]?c=-2:(c=o.lastIndex-l[2].length,n=l[1],o=void 0===l[3]?N:'"'===l[3]?M:D):o===M||o===D?o=N:o===R||o===C?o=L:(o=N,a=void 0);const h=o===N&&t[e+1].startsWith("/>")?" ":"";s+=o===L?r+E:c>=0?(i.push(n),r.slice(0,c)+k+r.slice(c)+S+h):r+S+(-2===c?e:h)}return[W(t,s+(t[r]||"<?>")+(2===e?"</svg>":"")),i]};class Z{constructor({strings:t,_$litType$:e},r){let i;this.parts=[];let a=0,s=0;const o=t.length-1,n=this.parts,[l,c]=H(t,e);if(this.el=Z.createElement(l,r),q.currentNode=this.el.content,2===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(i=q.nextNode())&&n.length<o;){if(1===i.nodeType){if(i.hasAttributes())for(const t of i.getAttributeNames())if(t.endsWith(k)){const e=c[s++],r=i.getAttribute(t).split(S),o=/([.?@])?(.*)/.exec(e);n.push({type:1,index:a,name:o[2],strings:r,ctor:"."===o[1]?Q:"?"===o[1]?tt:"@"===o[1]?et:K}),i.removeAttribute(t)}else t.startsWith(S)&&(n.push({type:6,index:a}),i.removeAttribute(t));if(X.test(i.tagName)){const t=i.textContent.split(S),e=t.length-1;if(e>0){i.textContent=_?_.emptyScript:"";for(let r=0;r<e;r++)i.append(t[r],T()),q.nextNode(),n.push({type:2,index:++a});i.append(t[e],T())}}}else if(8===i.nodeType)if(i.data===z)n.push({type:2,index:a});else{let t=-1;for(;-1!==(t=i.data.indexOf(S,t+1));)n.push({type:7,index:a}),t+=S.length-1}a++}}static createElement(t,e){const r=A.createElement("template");return r.innerHTML=t,r}}function G(t,e,r=t,i){if(e===U)return e;let a=void 0!==i?r._$Co?.[i]:r._$Cl;const s=P(e)?void 0:e._$litDirective$;return a?.constructor!==s&&(a?._$AO?.(!1),void 0===s?a=void 0:(a=new s(t),a._$AT(t,r,i)),void 0!==i?(r._$Co??=[])[i]=a:r._$Cl=a),void 0!==a&&(e=G(t,a._$AS(t,e.values),a,i)),e}class J{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:r}=this._$AD,i=(t?.creationScope??A).importNode(e,!0);q.currentNode=i;let a=q.nextNode(),s=0,o=0,n=r[0];for(;void 0!==n;){if(s===n.index){let e;2===n.type?e=new Y(a,a.nextSibling,this,t):1===n.type?e=new n.ctor(a,n.name,n.strings,this,t):6===n.type&&(e=new rt(a,this,t)),this._$AV.push(e),n=r[++o]}s!==n?.index&&(a=q.nextNode(),s++)}return q.currentNode=A,i}p(t){let e=0;for(const r of this._$AV)void 0!==r&&(void 0!==r.strings?(r._$AI(t,r,e),e+=r.strings.length-2):r._$AI(t[e])),e++}}class Y{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,r,i){this.type=2,this._$AH=B,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=r,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=G(this,t,e),P(t)?t===B||null==t||""===t?(this._$AH!==B&&this._$AR(),this._$AH=B):t!==this._$AH&&t!==U&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>j(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}_(t){this._$AH!==B&&P(this._$AH)?this._$AA.nextSibling.data=t:this.T(A.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:r}=t,i="number"==typeof r?this._$AC(t):(void 0===r.el&&(r.el=Z.createElement(W(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===i)this._$AH.p(e);else{const t=new J(i,this),r=t.u(this.options);t.p(e),this.T(r),this._$AH=t}}_$AC(t){let e=V.get(t.strings);return void 0===e&&V.set(t.strings,e=new Z(t)),e}k(t){j(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let r,i=0;for(const a of t)i===e.length?e.push(r=new Y(this.S(T()),this.S(T()),this,this.options)):r=e[i],r._$AI(a),i++;i<e.length&&(this._$AR(r&&r._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class K{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,r,i,a){this.type=1,this._$AH=B,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=a,r.length>2||""!==r[0]||""!==r[1]?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=B}_$AI(t,e=this,r,i){const a=this.strings;let s=!1;if(void 0===a)t=G(this,t,e,0),s=!P(t)||t!==this._$AH&&t!==U,s&&(this._$AH=t);else{const i=t;let o,n;for(t=a[0],o=0;o<a.length-1;o++)n=G(this,i[r+o],e,o),n===U&&(n=this._$AH[o]),s||=!P(n)||n!==this._$AH[o],n===B?t=B:t!==B&&(t+=(n??"")+a[o+1]),this._$AH[o]=n}s&&!i&&this.j(t)}j(t){t===B?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Q extends K{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===B?void 0:t}}class tt extends K{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==B)}}class et extends K{constructor(t,e,r,i,a){super(t,e,r,i,a),this.type=5}_$AI(t,e=this){if((t=G(this,t,e,0)??B)===U)return;const r=this._$AH,i=t===B&&r!==B||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,a=t!==B&&(r===B||i);i&&this.element.removeEventListener(this.name,this,r),a&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class rt{constructor(t,e,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){G(this,t)}}const it=x.litHtmlPolyfillSupport;it?.(Z,Y),(x.litHtmlVersions??=[]).push("3.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class at extends ${constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,r)=>{const i=r?.renderBefore??e;let a=i._$litPart$;if(void 0===a){const t=r?.renderBefore??null;i._$litPart$=a=new Y(e.insertBefore(T(),t),t,void 0,r??{})}return a._$AI(t),a})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return U}}at._$litElement$=!0,at.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:at});const st=globalThis.litElementPolyfillSupport;st?.({LitElement:at}),(globalThis.litElementVersions??=[]).push("4.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ot=t=>(e,r)=>{void 0!==r?r.addInitializer((()=>{customElements.define(t,e)})):customElements.define(t,e)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,nt={attribute:!0,type:String,converter:m,reflect:!1,hasChanged:y},lt=(t=nt,e,r)=>{const{kind:i,metadata:a}=r;let s=globalThis.litPropertyMetadata.get(a);if(void 0===s&&globalThis.litPropertyMetadata.set(a,s=new Map),s.set(r.name,t),"accessor"===i){const{name:i}=r;return{set(r){const a=e.get.call(this);e.set.call(this,r),this.requestUpdate(i,a,t)},init(e){return void 0!==e&&this.P(i,void 0,t),e}}}if("setter"===i){const{name:i}=r;return function(r){const a=this[i];e.call(this,r),this.requestUpdate(i,a,t)}}throw Error("Unsupported decorator location: "+i)};function ct(t){return(e,r)=>"object"==typeof r?lt(t,e,r):((t,e,r)=>{const i=e.hasOwnProperty(r);return e.constructor.createProperty(r,i?{...t,wrapped:!0}:t),i?Object.getOwnPropertyDescriptor(e,r):void 0})(t,e,r)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}function ut(t){return ct({...t,state:!0,attribute:!1})}var ht=function(t,e,r,i){for(var a,s=arguments.length,o=s<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i,n=t.length-1;n>=0;n--)(a=t[n])&&(o=(s<3?a(o):s>3?a(e,r,o):a(e,r))||o);return s>3&&o&&Object.defineProperty(e,r,o),o};let dt=class extends at{constructor(){super(...arguments),this.header="",this.subheader=""}render(){return F`
            <h2 class="au-c-heading--3 closed ${this.subheader?"":"no-margin"}">${this.header}</h2>
            ${this.subheader?F`<h3>${this.subheader}</h3>`:""}
        `}};dt.styles=s`
        :host {
            flex-grow: 1;
            color: var(--header-color);
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
    `,ht([ct()],dt.prototype,"header",void 0),ht([ct()],dt.prototype,"subheader",void 0),dt=ht([ot("card-header")],dt);var gt=function(t,e,r,i){for(var a,s=arguments.length,o=s<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i,n=t.length-1;n>=0;n--)(a=t[n])&&(o=(s<3?a(o):s>3?a(e,r,o):a(e,r))||o);return s>3&&o&&Object.defineProperty(e,r,o),o};let vt=class extends at{constructor(){super(...arguments),this.body=""}render(){return F`${this.body}`}};vt.styles=s`
        :host {
            flex-grow: 2;
            overflow: hidden;
            text-overflow: ellipsis;
            color: var(--text) !important;
        }
    `,gt([ct()],vt.prototype,"body",void 0),vt=gt([ot("card-body")],vt);var ft=function(t,e,r,i){for(var a,s=arguments.length,o=s<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i,n=t.length-1;n>=0;n--)(a=t[n])&&(o=(s<3?a(o):s>3?a(e,r,o):a(e,r))||o);return s>3&&o&&Object.defineProperty(e,r,o),o};let bt=class extends at{constructor(){super(...arguments),this.footer=""}render(){return F`${this.footer}`}};bt.styles=s`
        :host {
            color: var(--au-gray-700) !important;
        }
    `,ft([ct()],bt.prototype,"footer",void 0),bt=ft([ot("card-footer")],bt);var pt=function(t,e,r,i){for(var a,s=arguments.length,o=s<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i,n=t.length-1;n>=0;n--)(a=t[n])&&(o=(s<3?a(o):s>3?a(e,r,o):a(e,r))||o);return s>3&&o&&Object.defineProperty(e,r,o),o};let mt=class extends at{constructor(){super(...arguments),this.buttonLabel="",this.subtitle="",this.isContentVisible=!1}toggleContent(){this.isContentVisible=!this.isContentVisible}render(){return F`
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
    `}};mt.styles=s`
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
  `,pt([ct()],mt.prototype,"buttonLabel",void 0),pt([ct()],mt.prototype,"subtitle",void 0),pt([ct({type:Boolean})],mt.prototype,"isContentVisible",void 0),mt=pt([ot("au-accordion")],mt);var yt=function(t,e,r,i){for(var a,s=arguments.length,o=s<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i,n=t.length-1;n>=0;n--)(a=t[n])&&(o=(s<3?a(o):s>3?a(e,r,o):a(e,r))||o);return s>3&&o&&Object.defineProperty(e,r,o),o};let wt=class extends at{constructor(){super(...arguments),this.href="",this.skin="",this.icon=""}render(){return F`
      <a class="au-c-link ${this.skin}" href="${this.href}" target="_blank" rel="noopener noreferrer">
        <i class="${this.icon}"></i>
        <slot></slot>
      </a>
    `}};wt.styles=s`
    .au-c-link {
        color: var(--text)!important;
        text-decoration-color: var(--text)!important;
        font-weight: 500
    }

    .au-c-link:hover {
        color: var(--primary-color)!important;
        text-decoration-color: var(--primary-color)!important
    }
  `,yt([ct()],wt.prototype,"href",void 0),yt([ct()],wt.prototype,"skin",void 0),yt([ct()],wt.prototype,"icon",void 0),wt=yt([ot("au-link")],wt);var $t=function(t,e,r,i){for(var a,s=arguments.length,o=s<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i,n=t.length-1;n>=0;n--)(a=t[n])&&(o=(s<3?a(o):s>3?a(e,r,o):a(e,r))||o);return s>3&&o&&Object.defineProperty(e,r,o),o};let xt=class extends at{constructor(){super(...arguments),this.skin="",this.icon="",this.message=""}render(){return F`
      <div class="au-alert au-u-margin-top ${this.skin}">
        <i class="${this.icon}"></i>
        <span>${this.message}</span>
        <slot></slot>
      </div>
    `}};xt.styles=s`
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

  `,$t([ct()],xt.prototype,"skin",void 0),$t([ct()],xt.prototype,"icon",void 0),$t([ct()],xt.prototype,"message",void 0),xt=$t([ot("au-alert")],xt);var _t=function(t,e,r,i){for(var a,s=arguments.length,o=s<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i,n=t.length-1;n>=0;n--)(a=t[n])&&(o=(s<3?a(o):s>3?a(e,r,o):a(e,r))||o);return s>3&&o&&Object.defineProperty(e,r,o),o};let Ot=class extends at{constructor(){super(...arguments),this.skin=""}render(){return F`
      <div class="au-content ${this.skin}">
        <slot></slot>
      </div>
    `}};Ot.styles=s`
    /* Add your CSS here */
  `,_t([ct()],Ot.prototype,"skin",void 0),Ot=_t([ot("au-content")],Ot);var kt=function(t,e,r,i){for(var a,s=arguments.length,o=s<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i,n=t.length-1;n>=0;n--)(a=t[n])&&(o=(s<3?a(o):s>3?a(e,r,o):a(e,r))||o);return s>3&&o&&Object.defineProperty(e,r,o),o};let St=class extends at{constructor(){super(...arguments),this.pdf="",this.motivation=""}get resolution(){return{motivation:this.motivation,value:this.pdf}}render(){return F`
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
    `}};St.styles=s`
    /* Add your CSS here */
  `,kt([ct()],St.prototype,"pdf",void 0),kt([ct()],St.prototype,"motivation",void 0),St=kt([ot("decision-card-details-besluit")],St);var zt=function(t,e,r,i){for(var a,s=arguments.length,o=s<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i,n=t.length-1;n>=0;n--)(a=t[n])&&(o=(s<3?a(o):s>3?a(e,r,o):a(e,r))||o);return s>3&&o&&Object.defineProperty(e,r,o),o};let Et=class extends at{get totalVoters(){return Number(this.vote.aantalOnthouders)+Number(this.vote.aantalTegenstanders)+Number(this.vote.aantalVoorstanders)}updated(){this.style.setProperty("--value-proponents",String(this.vote.aantalVoorstanders)),this.style.setProperty("--value-opponents",String(this.vote.aantalTegenstanders)),this.style.setProperty("--value-abstentions",String(this.vote.aantalOnthouders)),this.style.setProperty("--total-voters",String(this.totalVoters))}render(){return this.vote?this.totalVoters?F`
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
            
                `:F`<p>Geen stemming beschikbaar</p>`:F`<p>Loading...</p>`}};Et.styles=s`
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
    `,zt([ct({type:Object})],Et.prototype,"vote",void 0),Et=zt([ot("au-voting-overview")],Et);var At=function(t,e,r,i){for(var a,s=arguments.length,o=s<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i,n=t.length-1;n>=0;n--)(a=t[n])&&(o=(s<3?a(o):s>3?a(e,r,o):a(e,r))||o);return s>3&&o&&Object.defineProperty(e,r,o),o};let Tt=class extends at{constructor(){super(...arguments),this.uri="",this._state={voting:[]},this._loading=!1}connectedCallback(){super.connectedCallback(),this.fetchData()}async fetchData(){this._loading=!0;try{const t=`PREFIX besluit: <http://data.vlaanderen.be/ns/besluit#>\n      PREFIX schema: <http://data.europa.eu/eli/ontology#>\n      PREFIX prov: <http://www.w3.org/ns/prov#>\n      PREFIX dc: <http://purl.org/dc/terms/>\n      PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n      PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\n\n      SELECT ?uri ?geheim ?aantalOnthouders ?aantalTegenstanders ?aantalVoorstanders ?gevolg ?onderwerp\n      WHERE {    \n        ?behanding dc:subject <${this.uri}>.\n        OPTIONAL {\n          ?behanding besluit:heeftStemming ?uri.\n        }\n        OPTIONAL {\n          ?uri besluit:geheim ?geheim.\n        }\n        OPTIONAL {\n          ?uri besluit:aantalOnthouders ?aantalOnthouders.\n        }\n        OPTIONAL {\n          ?uri besluit:aantalTegenstanders ?aantalTegenstanders.\n        }\n        OPTIONAL {\n          ?uri besluit:aantalVoorstanders ?aantalVoorstanders.\n        }\n        OPTIONAL {\n          ?uri besluit:gevolg ?gevolg.\n        }\n        OPTIONAL {\n          ?uri besluit:onderwerp ?onderwerp.\n        }\n      }`,e=`https://sint-lievens-houtem.lblod-local-dev.s.redhost.be/sparql?query=${encodeURIComponent(t)}`,r=await fetch(e),i=await r.json(),a=this.formatResponse(i.results.bindings);this._state={voting:a}}catch(t){console.error("Failed to fetch data:",t)}finally{this._loading=!1}}render(){return this._loading?F`<p>Loading...</p>`:F`
      <!-- <p>${JSON.stringify(this._state.voting,null,2)}</p> -->
      ${this._state.voting&&this._state.voting.length>0?this._state.voting.map((t=>t.vote.available?F`
        <au-accordion buttonLabel="Stemming" subtitle="${t.vote.subject}">
            ${"true"===t.vote.geheim?F`
            <p class="au-u-h6 au-u-flex au-u-flex--spaced-tiny au-u-flex--vertical-center au-u-margin-top">
                  Geheime stemming
              </p>
            `:F`
              <p class="au-u-h6 au-u-flex au-u-flex--spaced-tiny au-u-flex--vertical-center au-u-margin-top">
                  Openbare stemming
              </p>
            `}
          <au-voting-overview .vote="${t.vote}"></au-voting-overview>
        </au-accordion>
      `:"")):F`
        <au-alert skin="warning" message="Stemming niet beschikbaar" class="au-u-margin-top au-u-margin-bottom"></au-alert>
      `}
    `}formatResponse(t){return t.map((t=>({uri:t.uri?.value,vote:{subject:t.onderwerp?.value,available:!!t.uri,geheim:t.geheim?.value,aantalOnthouders:t.aantalOnthouders?.value,aantalTegenstanders:t.aantalTegenstanders?.value,aantalVoorstanders:t.aantalVoorstanders?.value,gevolg:t.gevolg?.value}})))}};Tt.styles=s`
    /* Add your CSS here */

    p{
      padding: 0 0.6rem;
      font-size: var(--au-para);
      font-weight: var(--au-light);
      text-decoration: underline;
      text-decoration-color: var(--primary-color);
    }
  `,At([ct()],Tt.prototype,"uri",void 0),At([ut()],Tt.prototype,"_state",void 0),At([ut()],Tt.prototype,"_loading",void 0),Tt=At([ot("decision-card-details-voting")],Tt);var Pt=function(t,e,r,i){for(var a,s=arguments.length,o=s<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i,n=t.length-1;n>=0;n--)(a=t[n])&&(o=(s<3?a(o):s>3?a(e,r,o):a(e,r))||o);return s>3&&o&&Object.defineProperty(e,r,o),o};let jt=class extends at{constructor(){super(...arguments),this.uri="",this.pdf=""}render(){return F`
            <decision-card-details-besluit .pdf="${this.pdf}"></decision-card-details-besluit>
            <decision-card-details-voting .uri="${this.uri}"></decision-card-details-voting>
            <!-- <decision-card-details-agenda .url="${this.uri}"></decision-card-details-agenda> -->
        `}};jt.styles=s`
    `,Pt([ct()],jt.prototype,"uri",void 0),Pt([ct()],jt.prototype,"pdf",void 0),jt=Pt([ot("decision-card-details")],jt);var It=function(t,e,r,i){for(var a,s=arguments.length,o=s<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i,n=t.length-1;n>=0;n--)(a=t[n])&&(o=(s<3?a(o):s>3?a(e,r,o):a(e,r))||o);return s>3&&o&&Object.defineProperty(e,r,o),o};let Lt=class extends at{constructor(){super(...arguments),this.header="",this.subheader="",this.body="",this.footer="",this.pdf="",this.uri="",this.detailsVisible=!1}toggleDetails(){this.detailsVisible=!this.detailsVisible}render(){return F`
            <card-header .header="${this.header}" .subheader="${this.subheader}" @click="${this.toggleDetails}"></card-header>
            <card-body .body="${this.body}" @click="${this.toggleDetails}"></card-body>
            <card-footer .footer="${this.footer}"></card-footer>
            ${this.detailsVisible?F`<decision-card-details .pdf="${this.pdf}" .uri="${this.uri}"></decision-card-details>`:""}
        `}};Lt.styles=s`
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
        card-header {
            --header-color: var(--card-header-color);
            cursor: pointer;
        }

        card-body {
            --body-color: var(--card-body-color);
            cursor: pointer;
        }
        card-footer {
            --footer-color: var(--card-footer-color);
        }
    `,It([ct()],Lt.prototype,"header",void 0),It([ct()],Lt.prototype,"subheader",void 0),It([ct()],Lt.prototype,"body",void 0),It([ct()],Lt.prototype,"footer",void 0),It([ct()],Lt.prototype,"pdf",void 0),It([ct()],Lt.prototype,"uri",void 0),It([ut()],Lt.prototype,"detailsVisible",void 0),Lt=It([ot("decision-card")],Lt);var Rt=function(t,e,r,i){for(var a,s=arguments.length,o=s<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i,n=t.length-1;n>=0;n--)(a=t[n])&&(o=(s<3?a(o):s>3?a(e,r,o):a(e,r))||o);return s>3&&o&&Object.defineProperty(e,r,o),o};let Ct=class extends at{constructor(){super(...arguments),this.uri="",this._state={agendapunten:[]}}connectedCallback(){super.connectedCallback(),this.fetchAgendapunten()}async fetchAgendapunten(){const t=`\n            PREFIX besluit: <http://data.vlaanderen.be/ns/besluit#>\n            PREFIX schema: <http://data.europa.eu/eli/ontology#>\n            PREFIX prov: <http://www.w3.org/ns/prov#>\n            PREFIX dc: <http://purl.org/dc/terms/>\n            PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n            PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\n\n            SELECT ?uri ?behandeling ?link ?titel ?beschrijving ?bestuursOrgaanLabel ?datumPublicatie\n            WHERE {      \n                <${this.uri}> besluit:behandelt ?uri;\n                             besluit:isGehoudenDoor ?bestuursOrgaan.\n\n                ?bestuursOrgaan <http://www.w3.org/2004/02/skos/core#prefLabel> ?bestuursOrgaanLabel.\n          \n                ?uri a besluit:Agendapunt;\n                      dc:title ?titel;\n                      dc:description ?beschrijving.\n\n                ?behandeling dc:subject ?uri;\n                             prov:generated ?besluit.\n\n                ?besluit schema:date_publication ?datumPublicatie;\n                         prov:value ?link.\n            }\n            ORDER BY DESC(?datumStart) LIMIT 10`,e=`https://sint-lievens-houtem.lblod-local-dev.s.redhost.be/sparql?query=${encodeURIComponent(t)}`,r=await fetch(e),i=await r.json(),a=this.formatResponse(i.results.bindings);this._state={agendapunten:a}}render(){return F`
            <!-- <h3 class ="au-c-heading--3">Agendapunten:</h3> -->
            ${this._state.agendapunten.map((t=>{const e=t.title,r=t.content,i=t.pubDate+" - "+t.creator,a=t.link;return F`
          <decision-card 
            .header="${e}"
            .subheader="${""}"
            .body="${r}"
            .footer="${i}"
            .pdf="${a}"
            .uri="${"https://lblod.sint-lievens-houtem.be/LBLODWeb/id/agendapunt/69ba40f1941948649c7b7746df5f7d1d-36845"}"
          ></decision-card>
        `}))}
    <div class="divider"></div>
        `}formatResponse(t){return t.map((t=>({uri:t.uri.value,behandeling:t.behandeling.value,title:t.titel.value,link:t.link.value,pubDate:new Date(t.datumPublicatie.value).toLocaleDateString("nl-BE"),creator:t.bestuursOrgaanLabel.value,content:t.beschrijving.value})))}};Ct.styles=s`
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
            margin-bottom: 3rem;
        }
    `,Rt([ct()],Ct.prototype,"uri",void 0),Rt([ut()],Ct.prototype,"_state",void 0),Ct=Rt([ot("zitting-card-details")],Ct);var Nt=function(t,e,r,i){for(var a,s=arguments.length,o=s<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i,n=t.length-1;n>=0;n--)(a=t[n])&&(o=(s<3?a(o):s>3?a(e,r,o):a(e,r))||o);return s>3&&o&&Object.defineProperty(e,r,o),o};let Dt=class extends at{constructor(){super(...arguments),this.startedAtTime="",this.endedAtTime="",this.source="",this.uri="",this.detailsVisible=!1}toggleDetails(){this.detailsVisible=!this.detailsVisible}render(){const t=this.endedAtTime?`Zitting ${this.startedAtTime} - ${this.endedAtTime}`:`Zitting ${this.startedAtTime}`,e=this.source;return F`
            <card-header .header="${t} - ${e}" @click="${this.toggleDetails}"></card-header>
            ${this.detailsVisible?F`<zitting-card-details .uri="${this.uri}"></zitting-card-details>`:""}
        `}};Dt.styles=s`
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
        card-header {
            --header-color: var(--card-header-color);
            cursor: pointer;
        }

        card-body {
            --body-color: var(--card-body-color);
            cursor: pointer;
        }
        card-footer {
            --footer-color: var(--card-footer-color);
        }
    `,Nt([ct()],Dt.prototype,"startedAtTime",void 0),Nt([ct()],Dt.prototype,"endedAtTime",void 0),Nt([ct()],Dt.prototype,"source",void 0),Nt([ct()],Dt.prototype,"uri",void 0),Nt([ut()],Dt.prototype,"detailsVisible",void 0),Dt=Nt([ot("zitting-card")],Dt);var Mt=function(t,e,r,i){for(var a,s=arguments.length,o=s<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i,n=t.length-1;n>=0;n--)(a=t[n])&&(o=(s<3?a(o):s>3?a(e,r,o):a(e,r))||o);return s>3&&o&&Object.defineProperty(e,r,o),o};let Xt=class extends at{constructor(){super(...arguments),this.count=10,this.height="2000px",this._state={zittingen:[]}}connectedCallback(){super.connectedCallback(),this.fetchData()}render(){return F`
      <h1 class="au-c-heading au-c-heading--2">De laatste zittingen:</h1>
      <div style="overflow-y: auto; height: ${this.height};">
        ${this._state.zittingen.slice(0,this.count).map((t=>{const e=t.startTime,r=t.endTime,i=t.bestuursOrgaanLabel,a=t.zitting;return F`
              <zitting-card 
                .startedAtTime="${e}"
                .endedAtTime="${r}"
                .source="${i}"
                .uri="${a}"
              ></zitting-card>
            `}))}
      </div>
    `}async fetchData(){const t=`https://sint-lievens-houtem.lblod-local-dev.s.redhost.be/sparql?query=${encodeURIComponent("\n    PREFIX besluit: <http://data.vlaanderen.be/ns/besluit#>\n    PREFIX schema: <http://data.europa.eu/eli/ontology#>\n    PREFIX prov: <http://www.w3.org/ns/prov#>\n    PREFIX dc: <http://purl.org/dc/terms/>\n    PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n    PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\n\n    SELECT *\n    WHERE {\n      ?zitting a besluit:Zitting .\n      OPTIONAL { ?zitting besluit:geplandeStart ?start . }\n      OPTIONAL { ?zitting prov:startedAtTime ?startTime . }\n      OPTIONAL { ?zitting prov:endedAtTime ?endTime . }\n      OPTIONAL { ?zitting besluit:heeftAanwezigeBijStart ?aanwezige . }\n      OPTIONAL { ?zitting besluit:heeftNotulen ?notulen . }\n      OPTIONAL { ?zitting besluit:heeftSecretaris ?secretaris . }\n      OPTIONAL { ?zitting besluit:heeftVoorzitter ?voorzitter . }\n      OPTIONAL { ?zitting besluit:heeftZittingsverslag ?zittingsverslag . }\n      OPTIONAL { ?zitting besluit:isGehoudenDoor ?gehoudenDoor . }\n      OPTIONAL { ?gehoudenDoor <http://www.w3.org/2004/02/skos/core#prefLabel> ?bestuursOrgaanLabel.}\n      OPTIONAL { ?zitting prov:atLocation ?location . }\n    }\n    ORDER BY DESC(?startTime)\n    LIMIT 10")}`,e=await fetch(t),r=await e.json(),i=this.formatResponse(r.results.bindings);this._state={zittingen:i}}formatResponse(t){return t.map((t=>({zitting:t.zitting.value,start:t.start?new Date(t.start.value).toLocaleDateString("nl-BE"):"",startTime:t.startTime?new Date(t.startTime.value).toLocaleDateString("nl-BE"):"",endTime:t.endTime?new Date(t.endTime.value).toLocaleDateString("nl-BE"):"",aanwezige:t.aanwezige?t.aanwezige.value:"",notulen:t.notulen?t.notulen.value:"",secretaris:t.secretaris?t.secretaris.value:"",voorzitter:t.voorzitter?t.voorzitter.value:"",zittingsverslag:t.zittingsverslag?t.zittingsverslag.value:"",gehoudenDoor:t.gehoudenDoor?t.gehoudenDoor.value:"",bestuursOrgaanLabel:t.bestuursOrgaanLabel?t.bestuursOrgaanLabel.value:"",location:t.location?t.location.value:""})))}};Xt.styles=s`
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

        text-decoration: underline;
        text-decoration-color: var(--primary-color);

        margin-top: 0;
    }

    @media (min-width: 47.9375em) {
        .au-c-heading--2 {
            line-height: var(--au-global-line-height)
        }
    }


  `,Mt([ct({type:Number})],Xt.prototype,"count",void 0),Mt([ct({type:String})],Xt.prototype,"height",void 0),Mt([ut()],Xt.prototype,"_state",void 0),Xt=Mt([ot("zitting-feed")],Xt);export{Xt as ZittingFeedElement};
