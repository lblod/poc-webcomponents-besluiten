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
 */,{is:n,defineProperty:c,getOwnPropertyDescriptor:l,getOwnPropertyNames:u,getOwnPropertySymbols:h,getPrototypeOf:d}=Object,f=globalThis,v=f.trustedTypes,g=v?v.emptyScript:"",p=f.reactiveElementPolyfillSupport,b=(t,e)=>t,m={toAttribute(t,e){switch(e){case Boolean:t=t?g:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let r=t;switch(e){case Boolean:r=null!==t;break;case Number:r=null===t?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch(t){r=null}}return r}},y=(t,e)=>!n(t,e),w={attribute:!0,type:String,converter:m,reflect:!1,hasChanged:y};Symbol.metadata??=Symbol("metadata"),f.litPropertyMetadata??=new WeakMap;class _ extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=w){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const r=Symbol(),i=this.getPropertyDescriptor(t,r,e);void 0!==i&&c(this.prototype,t,i)}}static getPropertyDescriptor(t,e,r){const{get:i,set:a}=l(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get(){return i?.call(this)},set(e){const s=i?.call(this);a.call(this,e),this.requestUpdate(t,s,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??w}static _$Ei(){if(this.hasOwnProperty(b("elementProperties")))return;const t=d(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(b("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(b("properties"))){const t=this.properties,e=[...u(t),...h(t)];for(const r of e)this.createProperty(r,t[r])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,r]of e)this.elementProperties.set(t,r)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const r=this._$Eu(t,e);void 0!==r&&this._$Eh.set(r,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const t of r)e.unshift(o(t))}else void 0!==t&&e.push(o(t));return e}static _$Eu(t,e){const r=e.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const r of e.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const r=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((r,i)=>{if(e)r.adoptedStyleSheets=i.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const e of i){const i=document.createElement("style"),a=t.litNonce;void 0!==a&&i.setAttribute("nonce",a),i.textContent=e.cssText,r.appendChild(i)}})(r,this.constructor.elementStyles),r}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,r){this._$AK(t,r)}_$EC(t,e){const r=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,r);if(void 0!==i&&!0===r.reflect){const a=(void 0!==r.converter?.toAttribute?r.converter:m).toAttribute(e,r.type);this._$Em=t,null==a?this.removeAttribute(i):this.setAttribute(i,a),this._$Em=null}}_$AK(t,e){const r=this.constructor,i=r._$Eh.get(t);if(void 0!==i&&this._$Em!==i){const t=r.getPropertyOptions(i),a="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:m;this._$Em=i,this[i]=a.fromAttribute(e,t.type),this._$Em=null}}requestUpdate(t,e,r){if(void 0!==t){if(r??=this.constructor.getPropertyOptions(t),!(r.hasChanged??y)(this[t],e))return;this.P(t,e,r)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(t,e,r){this._$AL.has(t)||this._$AL.set(t,e),!0===r.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,r]of t)!0!==r.wrapped||this._$AL.has(e)||void 0===this[e]||this.P(e,this[e],r)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach((t=>t.hostUpdate?.())),this.update(e)):this._$EU()}catch(e){throw t=!1,this._$EU(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach((t=>this._$EC(t,this[t]))),this._$EU()}updated(t){}firstUpdated(t){}}_.elementStyles=[],_.shadowRootOptions={mode:"open"},_[b("elementProperties")]=new Map,_[b("finalized")]=new Map,p?.({ReactiveElement:_}),(f.reactiveElementVersions??=[]).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const $=globalThis,x=$.trustedTypes,k=x?x.createPolicy("lit-html",{createHTML:t=>t}):void 0,S="$lit$",O=`lit$${(Math.random()+"").slice(9)}$`,j="?"+O,E=`<${j}>`,A=document,C=()=>A.createComment(""),P=t=>null===t||"object"!=typeof t&&"function"!=typeof t,R=Array.isArray,T="[ \t\n\f\r]",I=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,L=/-->/g,z=/>/g,N=RegExp(`>|${T}(?:([^\\s"'>=/]+)(${T}*=${T}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),M=/'/g,U=/"/g,F=/^(?:script|style|textarea|title)$/i,X=(t=>(e,...r)=>({_$litType$:t,strings:e,values:r}))(1),D=Symbol.for("lit-noChange"),B=Symbol.for("lit-nothing"),V=new WeakMap,W=A.createTreeWalker(A,129);function q(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==k?k.createHTML(e):e}const H=(t,e)=>{const r=t.length-1,i=[];let a,s=2===e?"<svg>":"",o=I;for(let e=0;e<r;e++){const r=t[e];let n,c,l=-1,u=0;for(;u<r.length&&(o.lastIndex=u,c=o.exec(r),null!==c);)u=o.lastIndex,o===I?"!--"===c[1]?o=L:void 0!==c[1]?o=z:void 0!==c[2]?(F.test(c[2])&&(a=RegExp("</"+c[2],"g")),o=N):void 0!==c[3]&&(o=N):o===N?">"===c[0]?(o=a??I,l=-1):void 0===c[1]?l=-2:(l=o.lastIndex-c[2].length,n=c[1],o=void 0===c[3]?N:'"'===c[3]?U:M):o===U||o===M?o=N:o===L||o===z?o=I:(o=N,a=void 0);const h=o===N&&t[e+1].startsWith("/>")?" ":"";s+=o===I?r+E:l>=0?(i.push(n),r.slice(0,l)+S+r.slice(l)+O+h):r+O+(-2===l?e:h)}return[q(t,s+(t[r]||"<?>")+(2===e?"</svg>":"")),i]};class G{constructor({strings:t,_$litType$:e},r){let i;this.parts=[];let a=0,s=0;const o=t.length-1,n=this.parts,[c,l]=H(t,e);if(this.el=G.createElement(c,r),W.currentNode=this.el.content,2===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(i=W.nextNode())&&n.length<o;){if(1===i.nodeType){if(i.hasAttributes())for(const t of i.getAttributeNames())if(t.endsWith(S)){const e=l[s++],r=i.getAttribute(t).split(O),o=/([.?@])?(.*)/.exec(e);n.push({type:1,index:a,name:o[2],strings:r,ctor:"."===o[1]?Q:"?"===o[1]?tt:"@"===o[1]?et:Y}),i.removeAttribute(t)}else t.startsWith(O)&&(n.push({type:6,index:a}),i.removeAttribute(t));if(F.test(i.tagName)){const t=i.textContent.split(O),e=t.length-1;if(e>0){i.textContent=x?x.emptyScript:"";for(let r=0;r<e;r++)i.append(t[r],C()),W.nextNode(),n.push({type:2,index:++a});i.append(t[e],C())}}}else if(8===i.nodeType)if(i.data===j)n.push({type:2,index:a});else{let t=-1;for(;-1!==(t=i.data.indexOf(O,t+1));)n.push({type:7,index:a}),t+=O.length-1}a++}}static createElement(t,e){const r=A.createElement("template");return r.innerHTML=t,r}}function J(t,e,r=t,i){if(e===D)return e;let a=void 0!==i?r._$Co?.[i]:r._$Cl;const s=P(e)?void 0:e._$litDirective$;return a?.constructor!==s&&(a?._$AO?.(!1),void 0===s?a=void 0:(a=new s(t),a._$AT(t,r,i)),void 0!==i?(r._$Co??=[])[i]=a:r._$Cl=a),void 0!==a&&(e=J(t,a._$AS(t,e.values),a,i)),e}class Z{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:r}=this._$AD,i=(t?.creationScope??A).importNode(e,!0);W.currentNode=i;let a=W.nextNode(),s=0,o=0,n=r[0];for(;void 0!==n;){if(s===n.index){let e;2===n.type?e=new K(a,a.nextSibling,this,t):1===n.type?e=new n.ctor(a,n.name,n.strings,this,t):6===n.type&&(e=new rt(a,this,t)),this._$AV.push(e),n=r[++o]}s!==n?.index&&(a=W.nextNode(),s++)}return W.currentNode=A,i}p(t){let e=0;for(const r of this._$AV)void 0!==r&&(void 0!==r.strings?(r._$AI(t,r,e),e+=r.strings.length-2):r._$AI(t[e])),e++}}class K{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,r,i){this.type=2,this._$AH=B,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=r,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=J(this,t,e),P(t)?t===B||null==t||""===t?(this._$AH!==B&&this._$AR(),this._$AH=B):t!==this._$AH&&t!==D&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>R(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}_(t){this._$AH!==B&&P(this._$AH)?this._$AA.nextSibling.data=t:this.T(A.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:r}=t,i="number"==typeof r?this._$AC(t):(void 0===r.el&&(r.el=G.createElement(q(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===i)this._$AH.p(e);else{const t=new Z(i,this),r=t.u(this.options);t.p(e),this.T(r),this._$AH=t}}_$AC(t){let e=V.get(t.strings);return void 0===e&&V.set(t.strings,e=new G(t)),e}k(t){R(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let r,i=0;for(const a of t)i===e.length?e.push(r=new K(this.S(C()),this.S(C()),this,this.options)):r=e[i],r._$AI(a),i++;i<e.length&&(this._$AR(r&&r._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class Y{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,r,i,a){this.type=1,this._$AH=B,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=a,r.length>2||""!==r[0]||""!==r[1]?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=B}_$AI(t,e=this,r,i){const a=this.strings;let s=!1;if(void 0===a)t=J(this,t,e,0),s=!P(t)||t!==this._$AH&&t!==D,s&&(this._$AH=t);else{const i=t;let o,n;for(t=a[0],o=0;o<a.length-1;o++)n=J(this,i[r+o],e,o),n===D&&(n=this._$AH[o]),s||=!P(n)||n!==this._$AH[o],n===B?t=B:t!==B&&(t+=(n??"")+a[o+1]),this._$AH[o]=n}s&&!i&&this.j(t)}j(t){t===B?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Q extends Y{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===B?void 0:t}}class tt extends Y{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==B)}}class et extends Y{constructor(t,e,r,i,a){super(t,e,r,i,a),this.type=5}_$AI(t,e=this){if((t=J(this,t,e,0)??B)===D)return;const r=this._$AH,i=t===B&&r!==B||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,a=t!==B&&(r===B||i);i&&this.element.removeEventListener(this.name,this,r),a&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class rt{constructor(t,e,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){J(this,t)}}const it=$.litHtmlPolyfillSupport;it?.(G,K),($.litHtmlVersions??=[]).push("3.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class at extends _{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,r)=>{const i=r?.renderBefore??e;let a=i._$litPart$;if(void 0===a){const t=r?.renderBefore??null;i._$litPart$=a=new K(e.insertBefore(C(),t),t,void 0,r??{})}return a._$AI(t),a})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return D}}at._$litElement$=!0,at.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:at});const st=globalThis.litElementPolyfillSupport;st?.({LitElement:at}),(globalThis.litElementVersions??=[]).push("4.0.4");
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
 */,nt={attribute:!0,type:String,converter:m,reflect:!1,hasChanged:y},ct=(t=nt,e,r)=>{const{kind:i,metadata:a}=r;let s=globalThis.litPropertyMetadata.get(a);if(void 0===s&&globalThis.litPropertyMetadata.set(a,s=new Map),s.set(r.name,t),"accessor"===i){const{name:i}=r;return{set(r){const a=e.get.call(this);e.set.call(this,r),this.requestUpdate(i,a,t)},init(e){return void 0!==e&&this.P(i,void 0,t),e}}}if("setter"===i){const{name:i}=r;return function(r){const a=this[i];e.call(this,r),this.requestUpdate(i,a,t)}}throw Error("Unsupported decorator location: "+i)};function lt(t){return(e,r)=>"object"==typeof r?ct(t,e,r):((t,e,r)=>{const i=e.hasOwnProperty(r);return e.constructor.createProperty(r,i?{...t,wrapped:!0}:t),i?Object.getOwnPropertyDescriptor(e,r):void 0})(t,e,r)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}function ut(t){return lt({...t,state:!0,attribute:!1})}var ht=function(t,e,r,i){for(var a,s=arguments.length,o=s<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i,n=t.length-1;n>=0;n--)(a=t[n])&&(o=(s<3?a(o):s>3?a(e,r,o):a(e,r))||o);return s>3&&o&&Object.defineProperty(e,r,o),o};let dt=class extends at{constructor(){super(...arguments),this.header="",this.subheader=""}render(){return X`
            <h2 class="au-c-heading--3">${this.header}</h2>
            <h3>${this.subheader}</h3>
        `}};dt.styles=s`
        :host {
            flex-grow: 1;
            color: var(--decision-header-color);
        }
        .au-c-heading--3  {
            font-size: var(--au-h3);
            line-height: var(--au-global-line-height);
            color: var(--au-gray-900);
            font-weight: var(--au-medium);
        }
    `,ht([lt()],dt.prototype,"header",void 0),ht([lt()],dt.prototype,"subheader",void 0),dt=ht([ot("decision-card-header")],dt);var ft=function(t,e,r,i){for(var a,s=arguments.length,o=s<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i,n=t.length-1;n>=0;n--)(a=t[n])&&(o=(s<3?a(o):s>3?a(e,r,o):a(e,r))||o);return s>3&&o&&Object.defineProperty(e,r,o),o};let vt=class extends at{constructor(){super(...arguments),this.body=""}render(){return X`${this.body}`}};vt.styles=s`
        :host {
            flex-grow: 2;
            overflow: hidden;
            text-overflow: ellipsis;
            color: var(--text) !important;
        }
    `,ft([lt()],vt.prototype,"body",void 0),vt=ft([ot("decision-card-body")],vt);var gt=function(t,e,r,i){for(var a,s=arguments.length,o=s<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i,n=t.length-1;n>=0;n--)(a=t[n])&&(o=(s<3?a(o):s>3?a(e,r,o):a(e,r))||o);return s>3&&o&&Object.defineProperty(e,r,o),o};let pt=class extends at{constructor(){super(...arguments),this.footer=""}render(){return X`${this.footer}`}};pt.styles=s`
        :host {
            color: var(--au-gray-700) !important;
        }
    `,gt([lt()],pt.prototype,"footer",void 0),pt=gt([ot("decision-card-footer")],pt);var bt=function(t,e,r,i){for(var a,s=arguments.length,o=s<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i,n=t.length-1;n>=0;n--)(a=t[n])&&(o=(s<3?a(o):s>3?a(e,r,o):a(e,r))||o);return s>3&&o&&Object.defineProperty(e,r,o),o};let mt=class extends at{constructor(){super(...arguments),this.buttonLabel="",this.subtitle="",this.isContentVisible=!1}toggleContent(){this.isContentVisible=!this.isContentVisible}render(){return X`
      <section class="c-accordion-holder">
        <span class="au-c-badge au-c-badge--brand" aria-hidden="true"></span>
        <div class="au-c-accordion au-c-accordion--reverse">
          <div class="au-c-toolbar au-c-toolbar--reverse au-c-toolbar--nowrap" @click="${this.toggleContent}">
            <div class="au-c-toolbar__group">
              <div class ="au-c-toolbar_button_with_title">
                <button class="au-c-button au-c-button--link" aria-expanded="${this.isContentVisible?"true":"false"}">
                  ${this.buttonLabel}
                </button>
                ${this.subtitle?X`<div class="accordion-subtitle">${this.subtitle}</div>`:""}
              </div>
            </div>
            <div class="au-c-toolbar__group"></div>
          </div>
          ${this.isContentVisible?X`
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
        font-size: var(--au-h4);
        line-height: var(--au-global-line-height)

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
      font-size: var(--au-para);
      font-weight: var(--au-light);

    }
  `,bt([lt()],mt.prototype,"buttonLabel",void 0),bt([lt()],mt.prototype,"subtitle",void 0),bt([lt({type:Boolean})],mt.prototype,"isContentVisible",void 0),mt=bt([ot("au-accordion")],mt);var yt=function(t,e,r,i){for(var a,s=arguments.length,o=s<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i,n=t.length-1;n>=0;n--)(a=t[n])&&(o=(s<3?a(o):s>3?a(e,r,o):a(e,r))||o);return s>3&&o&&Object.defineProperty(e,r,o),o};let wt=class extends at{constructor(){super(...arguments),this.href="",this.skin="",this.icon=""}render(){return X`
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
  `,yt([lt()],wt.prototype,"href",void 0),yt([lt()],wt.prototype,"skin",void 0),yt([lt()],wt.prototype,"icon",void 0),wt=yt([ot("au-link")],wt);var _t=function(t,e,r,i){for(var a,s=arguments.length,o=s<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i,n=t.length-1;n>=0;n--)(a=t[n])&&(o=(s<3?a(o):s>3?a(e,r,o):a(e,r))||o);return s>3&&o&&Object.defineProperty(e,r,o),o};let $t=class extends at{constructor(){super(...arguments),this.skin="",this.icon="",this.message=""}render(){return X`
      <div class="au-alert au-u-margin-top ${this.skin}">
        <i class="${this.icon}"></i>
        <span>${this.message}</span>
        <slot></slot>
      </div>
    `}};$t.styles=s`
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

  `,_t([lt()],$t.prototype,"skin",void 0),_t([lt()],$t.prototype,"icon",void 0),_t([lt()],$t.prototype,"message",void 0),$t=_t([ot("au-alert")],$t);var xt=function(t,e,r,i){for(var a,s=arguments.length,o=s<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i,n=t.length-1;n>=0;n--)(a=t[n])&&(o=(s<3?a(o):s>3?a(e,r,o):a(e,r))||o);return s>3&&o&&Object.defineProperty(e,r,o),o};let kt=class extends at{constructor(){super(...arguments),this.skin=""}render(){return X`
      <div class="au-content ${this.skin}">
        <slot></slot>
      </div>
    `}};kt.styles=s`
    /* Add your CSS here */
  `,xt([lt()],kt.prototype,"skin",void 0),kt=xt([ot("au-content")],kt);var St=function(t,e,r,i){for(var a,s=arguments.length,o=s<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i,n=t.length-1;n>=0;n--)(a=t[n])&&(o=(s<3?a(o):s>3?a(e,r,o):a(e,r))||o);return s>3&&o&&Object.defineProperty(e,r,o),o};let Ot=class extends at{constructor(){super(...arguments),this.pdf="",this.motivation=""}get resolution(){return{motivation:this.motivation,value:this.pdf}}render(){return X`
      <au-accordion buttonLabel="Besluit">
        ${this.resolution.value?X`
          <au-alert skin="success" icon="sign">
            ${this.resolution.value.endsWith(".pdf")?X`
              <au-link href="${this.resolution.value}" skin="small" icon="pdf">
                open besluit
              </au-link>
            `:this.resolution.value}
          </au-alert>
        `:X`
          <au-alert skin="warning" title="Besluit niet beschikbaar"></au-alert>
        `}
        ${this.resolution.motivation?X`
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
    `}};Ot.styles=s`
    /* Add your CSS here */
  `,St([lt()],Ot.prototype,"pdf",void 0),St([lt()],Ot.prototype,"motivation",void 0),Ot=St([ot("decision-card-details-besluit")],Ot);var jt=function(t,e,r,i){for(var a,s=arguments.length,o=s<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i,n=t.length-1;n>=0;n--)(a=t[n])&&(o=(s<3?a(o):s>3?a(e,r,o):a(e,r))||o);return s>3&&o&&Object.defineProperty(e,r,o),o};let Et=class extends at{get totalVoters(){return Number(this.vote.aantalOnthouders)+Number(this.vote.aantalTegenstanders)+Number(this.vote.aantalVoorstanders)}updated(){this.style.setProperty("--value-proponents",String(this.vote.aantalVoorstanders)),this.style.setProperty("--value-opponents",String(this.vote.aantalTegenstanders)),this.style.setProperty("--value-abstentions",String(this.vote.aantalOnthouders)),this.style.setProperty("--total-voters",String(this.totalVoters))}render(){return this.vote?this.totalVoters?X`
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
                    ${this.vote.gevolg?X`<li>Gevolg: ${this.vote.gevolg}</li>`:""}
                </div>
            
                `:X`<p>Geen stemming beschikbaar</p>`:X`<p>Loading...</p>`}};Et.styles=s`
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
    `,jt([lt({type:Object})],Et.prototype,"vote",void 0),Et=jt([ot("au-voting-overview")],Et);var At=function(t,e,r,i){for(var a,s=arguments.length,o=s<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i,n=t.length-1;n>=0;n--)(a=t[n])&&(o=(s<3?a(o):s>3?a(e,r,o):a(e,r))||o);return s>3&&o&&Object.defineProperty(e,r,o),o};let Ct=class extends at{constructor(){super(...arguments),this.uri="",this._state={voting:[]},this._loading=!1}connectedCallback(){super.connectedCallback(),this.fetchData()}async fetchData(){this._loading=!0;try{const t=`PREFIX besluit: <http://data.vlaanderen.be/ns/besluit#>\n      PREFIX schema: <http://data.europa.eu/eli/ontology#>\n      PREFIX prov: <http://www.w3.org/ns/prov#>\n      PREFIX dc: <http://purl.org/dc/terms/>\n      PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n      PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\n\n      SELECT ?uri ?geheim ?aantalOnthouders ?aantalTegenstanders ?aantalVoorstanders ?gevolg ?onderwerp\n      WHERE {    \n        ?behanding dc:subject <${this.uri}>.\n        OPTIONAL {\n          ?behanding besluit:heeftStemming ?uri.\n        }\n        OPTIONAL {\n          ?uri besluit:geheim ?geheim.\n        }\n        OPTIONAL {\n          ?uri besluit:aantalOnthouders ?aantalOnthouders.\n        }\n        OPTIONAL {\n          ?uri besluit:aantalTegenstanders ?aantalTegenstanders.\n        }\n        OPTIONAL {\n          ?uri besluit:aantalVoorstanders ?aantalVoorstanders.\n        }\n        OPTIONAL {\n          ?uri besluit:gevolg ?gevolg.\n        }\n        OPTIONAL {\n          ?uri besluit:onderwerp ?onderwerp.\n        }\n      }`,e=`https://sint-lievens-houtem.lblod-local-dev.s.redhost.be/sparql?query=${encodeURIComponent(t)}`,r=await fetch(e),i=await r.json(),a=this.formatResponse(i.results.bindings);this._state={voting:a}}catch(t){console.error("Failed to fetch data:",t)}finally{this._loading=!1}}render(){return this._loading?X`<p>Loading...</p>`:X`
      <!-- <p>${JSON.stringify(this._state.voting,null,2)}</p> -->
      ${this._state.voting&&this._state.voting.length>0?this._state.voting.map((t=>t.vote.available?X`
        <au-accordion buttonLabel="Stemming" subtitle="${t.vote.subject}">
            ${"true"===t.vote.geheim?X`
            <p class="au-u-h6 au-u-flex au-u-flex--spaced-tiny au-u-flex--vertical-center au-u-margin-top">
                  Geheime stemming
              </p>
            `:X`
              <p class="au-u-h6 au-u-flex au-u-flex--spaced-tiny au-u-flex--vertical-center au-u-margin-top">
                  Openbare stemming
              </p>
            `}
          <au-voting-overview .vote="${t.vote}"></au-voting-overview>
        </au-accordion>
      `:"")):X`
        <au-alert skin="warning" message="Stemming niet beschikbaar" class="au-u-margin-top au-u-margin-bottom"></au-alert>
      `}
    `}formatResponse(t){return t.map((t=>({uri:t.uri?.value,vote:{subject:t.onderwerp?.value,available:!!t.uri,geheim:t.geheim?.value,aantalOnthouders:t.aantalOnthouders?.value,aantalTegenstanders:t.aantalTegenstanders?.value,aantalVoorstanders:t.aantalVoorstanders?.value,gevolg:t.gevolg?.value}})))}};Ct.styles=s`
    /* Add your CSS here */

    p{
      padding: 0 0.6rem;
      font-size: var(--au-para);
      font-weight: var(--au-light);
      text-decoration: underline;
      text-decoration-color: var(--primary-color);
    }
  `,At([lt()],Ct.prototype,"uri",void 0),At([ut()],Ct.prototype,"_state",void 0),At([ut()],Ct.prototype,"_loading",void 0),Ct=At([ot("decision-card-details-voting")],Ct);var Pt=function(t,e,r,i){for(var a,s=arguments.length,o=s<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i,n=t.length-1;n>=0;n--)(a=t[n])&&(o=(s<3?a(o):s>3?a(e,r,o):a(e,r))||o);return s>3&&o&&Object.defineProperty(e,r,o),o};let Rt=class extends at{constructor(){super(...arguments),this.uri="",this.pdf=""}render(){return X`
            <decision-card-details-besluit .pdf="${this.pdf}"></decision-card-details-besluit>
            <decision-card-details-voting .uri="${this.uri}"></decision-card-details-voting>
            <!-- <decision-card-details-agenda .url="${this.uri}"></decision-card-details-agenda> -->
        `}};Rt.styles=s`
    `,Pt([lt()],Rt.prototype,"uri",void 0),Pt([lt()],Rt.prototype,"pdf",void 0),Rt=Pt([ot("decision-card-details")],Rt);var Tt=function(t,e,r,i){for(var a,s=arguments.length,o=s<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i,n=t.length-1;n>=0;n--)(a=t[n])&&(o=(s<3?a(o):s>3?a(e,r,o):a(e,r))||o);return s>3&&o&&Object.defineProperty(e,r,o),o};let It=class extends at{constructor(){super(...arguments),this.header="",this.subheader="",this.body="",this.footer="",this.pdf="",this.uri=""}render(){return X`
            <decision-card-header .header="${this.header}" .subheader="${this.subheader}"></decision-card-header>
            <decision-card-body .body="${this.body}"></decision-card-body>
            <decision-card-footer .footer="${this.footer}"></decision-card-footer>
            <decision-card-details .pdf="${this.pdf}" .uri="${this.uri}"></decision-card-details>
        `}};It.styles=s`
        :host {
            display: flex;
            flex-direction: column;
            gap: 1em;
            background-color: var(--decision-card-background-color, white);
            border: var(--decision-card-border, solid 1px lightgray);
            border-radius: var(--decision-card-border-radius, 3px);
            padding: 1em;
        }
        decision-card-header {
            --decision-header-color: var(--decision-card-header-color);
        }
        decision-card-body {
            --decision-body-color: var(--decision-card-body-color);
        }
        decision-card-footer {
            --decision-footer-color: var(--decision-card-footer-color);
        }
    `,Tt([lt()],It.prototype,"header",void 0),Tt([lt()],It.prototype,"subheader",void 0),Tt([lt()],It.prototype,"body",void 0),Tt([lt()],It.prototype,"footer",void 0),Tt([lt()],It.prototype,"pdf",void 0),Tt([lt()],It.prototype,"uri",void 0),It=Tt([ot("decision-card")],It);var Lt=function(t,e,r,i){for(var a,s=arguments.length,o=s<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i,n=t.length-1;n>=0;n--)(a=t[n])&&(o=(s<3?a(o):s>3?a(e,r,o):a(e,r))||o);return s>3&&o&&Object.defineProperty(e,r,o),o};let zt=class extends at{constructor(){super(...arguments),this.count=10,this._state={agendapunten:[]}}connectedCallback(){super.connectedCallback(),this.fetchData()}render(){return X`${this._state.agendapunten.slice(0,this.count).map((t=>{const e=t.title,r=t.content,i=t.pubDate+" - "+t.creator,a=t.link;return X`
          <decision-card 
            .header="${e}"
            .subheader="${""}"
            .body="${r}"
            .footer="${i}"
            .pdf="${a}"
            .uri="${"https://lblod.sint-lievens-houtem.be/LBLODWeb/id/agendapunt/69ba40f1941948649c7b7746df5f7d1d-36845"}"
          ></decision-card>
        `}))}`}async fetchData(){const t=`https://sint-lievens-houtem.lblod-local-dev.s.redhost.be/sparql?query=${encodeURIComponent("\n    PREFIX besluit: <http://data.vlaanderen.be/ns/besluit#>\n    PREFIX schema: <http://data.europa.eu/eli/ontology#>\n    PREFIX prov: <http://www.w3.org/ns/prov#>\n    PREFIX dc: <http://purl.org/dc/terms/>\n    PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n    PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\n\n    SELECT ?uri ?behandeling ?link ?titel ?beschrijving ?bestuursOrgaanLabel ?datumStart\n    WHERE {    \n        ?uri a besluit:Agendapunt;\n            <http://purl.org/dc/terms/title> ?titel;\n            <http://purl.org/dc/terms/description> ?beschrijving.\n        \n        ?behandeling <http://purl.org/dc/terms/subject>  ?uri;\n                   <http://www.w3.org/ns/prov#generated> ?besluit.\n\n        ?besluit <http://data.europa.eu/eli/ontology#date_publication> ?datumPublicatie;\n                   <http://www.w3.org/ns/prov#value> ?link.\n        \n        ?zitting besluit:behandelt ?uri;\n                 besluit:isGehoudenDoor ?bestuursOrgaan;\n                 besluit:geplandeStart ?datumStart.\n                 \n        ?bestuursOrgaan <http://www.w3.org/2004/02/skos/core#prefLabel> ?bestuursOrgaanLabel.\n      \n\n    }ORDER BY DESC(?datumStart) LIMIT 10")}`,e=await fetch(t),r=await e.json(),i=this.formatResponse(r.results.bindings);this._state={agendapunten:i}}formatResponse(t){return t.map((t=>({uri:t.uri.value,behandeling:t.behandeling.value,title:t.titel.value,link:t.link.value,pubDate:new Date(t.datumStart.value).toLocaleDateString("nl-BE"),creator:t.bestuursOrgaanLabel.value,content:t.beschrijving.value})))}};zt.styles=s`
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
      --au-para: 1.2rem;
      --au-para-small: 1.2rem;
      --au-lead: 2.2rem;
      --au-lead-medium: 2rem;
      --au-lead-small: 1.8rem;
      --au-small: 1.4rem;
      --au-tiny: 1.3rem;
      --au-h-functional-small: 1.3rem;
      --au-h-functional: 1.5rem;
      --au-h6: 1rem;
      --au-h5: 1.8rem;
      --au-h4: 1.4rem;
      --au-h3-small: 2.2rem;
      --au-h3: 1.8rem;
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
      --au-z-index-gamma: 3;
      

    }
  `,Lt([lt({type:Number})],zt.prototype,"count",void 0),Lt([ut()],zt.prototype,"_state",void 0),zt=Lt([ot("decision-feed")],zt);export{zt as DecisionFeedElement};
