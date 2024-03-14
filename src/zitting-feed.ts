import { css, html, LitElement } from 'lit';
import { customElement, property, state, query, queryAll } from 'lit/decorators.js';
import {ZittingCardElement} from "./card/zitting-card";
import "./card/zitting-card";

/**
 * @customElement zitting-feed
 * @class ZittingFeedElement
 * @extends {LitElement}
 * 
 * @property {string} harvesterEndpoint - The endpoint of the harvester to fetch data from
 * @property {string} height - The height of the scrollable div
 * @property {number} batchSize - The number of preview cards to display
 * @property {number} searchRange - The maximum number of zittingen to fetch
 * @property {number} scrollOffset - The offset from the bottom of the scrollable div at which to fetch more zittingen
 * 
 * 
 * @state {Object} _state - The state object that holds the zittingen array
 * @state {number} loaded - The number of zittingen that have been loaded
 * 
 * This class represents a custom element that displays a collection of zitting article cards.
 */
@customElement('zitting-feed')
export class ZittingFeedElement extends LitElement {
  static override styles = css`
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

  `;

  @property({ type: String }) harvesterEndpoint = 'https://sint-lievens-houtem.lblod-local-dev.s.redhost.be/sparql';
  @property({ type: String }) height = '1000px';
  @property({ type: Number }) batchSize = 10;
  @property({ type: Number }) searchRange = 100;
  @property({ type: Number }) scrollOffset = 50;

  @query('#date-from') private startDateInput!: HTMLInputElement;
  @query('#date-to') private endDateInput!: HTMLInputElement;
  @query('.infinite-scroll') private scrollableDiv!: HTMLElement;

  @queryAll('zitting-card') private zittingCards!: NodeListOf<ZittingCardElement>;

  @state() private _state: { zittingen: ZittingResult[] } = { zittingen: []};
  @state() private selectedBestuursOrganen: string[] = ["College"];
  @state() private loaded = 10;

  @state() private startDate = new Date(2024,0,1).toISOString();
  @state() private endDate = new Date().toISOString();


  override connectedCallback() {
    super.connectedCallback();
    this.fetchData();
  }

  override disconnectedCallback() {
    super.disconnectedCallback();
    this.scrollableDiv.removeEventListener('scroll', this.handleScroll);
  }

  override firstUpdated() {
    this.scrollableDiv.addEventListener('scroll', this.handleScroll);
    this.startDateInput.addEventListener('change', this.handleStartDateChange);
    this.endDateInput.addEventListener('change', this.handleEndDateChange);
  }

  private handleStartDateChange = (event: Event) => {
    this.startDate = (event.target as HTMLInputElement).value;
    this.fetchData();
  }
  
  private handleEndDateChange = (event: Event) => {
    this.endDate = (event.target as HTMLInputElement).value;
    this.fetchData();
  }

  private handleScroll = (event: Event) => {
    const target = event.target as HTMLElement;

    if (target.scrollHeight - target.scrollTop <= target.clientHeight + this.scrollOffset) {
      this.loaded += this.batchSize;
      
    }
  }

private handleFilterClick(bestuursOrgaanLabel: string) {
    const index = this.selectedBestuursOrganen.indexOf(bestuursOrgaanLabel);
    if (index === -1) {
        // bestuursOrgaanLabel is not in the array, add it
        this.selectedBestuursOrganen = [...this.selectedBestuursOrganen, bestuursOrgaanLabel];
      } else {
        // bestuursOrgaanLabel is in the array, remove it
        this.selectedBestuursOrganen = this.selectedBestuursOrganen.filter(label => label !== bestuursOrgaanLabel);
      }
    // reset the details of all zitting cards to hide them
    this.zittingCards.forEach(card => card.resetDetails());
}


  override render() {

    const uniqueBestuursOrgaanLabels = [...new Set(this._state.zittingen.map(zitting => zitting.bestuursOrgaanLabel))];

    const filteredZittingen = this.selectedBestuursOrganen.length
    ? this._state.zittingen.filter(zitting => this.selectedBestuursOrganen.includes(zitting.bestuursOrgaanLabel))
    : this._state.zittingen;


    console.log(this.selectedBestuursOrganen);
    console.log(this.loaded + " / " + filteredZittingen.length);

    return html`

      <h1 class="au-c-heading au-c-heading--2">De laatste zittingen:</h1>
      <div class="au-controls au-controls--row">
      <label class="au-c-label" for="date-from">
            Kies één of meer besturen
          </label>

        <ul class="au-tags">
        ${uniqueBestuursOrgaanLabels.map(label => html`
          <button class="au-filter ${this.selectedBestuursOrganen.includes(label) ? 'au-filter--active' : ''}" @click="${() => this.handleFilterClick(label)}">${label}</button>
        `)}
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
        ${filteredZittingen
          .slice(0, this.loaded)
          .map(zitting => {
            const startedAtTime = zitting.startTime;
            const endedAtTime = zitting.endTime;
            const source = zitting.bestuursOrgaanLabel;
            const uri = zitting.zitting;
            return html`
              <zitting-card 
                data-id="${source}"
                .startedAtTime="${startedAtTime}"
                .endedAtTime="${endedAtTime}"
                .source="${source}"
                .uri="${uri}"
                .harvesterEndpoint="${this.harvesterEndpoint}"
              ></zitting-card>
            `;
          })
        }
      </div>
    `;
  }


  private async fetchData() {
    const query = `
    PREFIX besluit: <http://data.vlaanderen.be/ns/besluit#>
    PREFIX schema: <http://data.europa.eu/eli/ontology#>
    PREFIX prov: <http://www.w3.org/ns/prov#>
    PREFIX dc: <http://purl.org/dc/terms/>
    PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
    PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>

    SELECT DISTINCT ?zitting (SAMPLE(?start) AS ?start) (SAMPLE(?startTime) AS ?startTime) (SAMPLE(?endTime) AS ?endTime) 
                    (SAMPLE(?notulen) AS ?notulen) (SAMPLE(?secretaris) AS ?secretaris) (SAMPLE(?voorzitter) AS ?voorzitter) 
                    (SAMPLE(?zittingsverslag) AS ?zittingsverslag) (SAMPLE(?gehoudenDoor) AS ?gehoudenDoor) 
                    (SAMPLE(?bestuursOrgaanLabel) AS ?bestuursOrgaanLabel) (SAMPLE(?location) AS ?location)
    WHERE {
      ?zitting a besluit:Zitting .
      OPTIONAL { ?zitting besluit:geplandeStart ?start . }
      OPTIONAL { ?zitting prov:startedAtTime ?startTime . }
      OPTIONAL { ?zitting prov:endedAtTime ?endTime . }
      OPTIONAL { ?zitting besluit:heeftNotulen ?notulen . }
      OPTIONAL { ?zitting besluit:heeftSecretaris ?secretaris . }
      OPTIONAL { ?zitting besluit:heeftVoorzitter ?voorzitter . }
      OPTIONAL { ?zitting besluit:heeftZittingsverslag ?zittingsverslag . }
      OPTIONAL { ?zitting besluit:isGehoudenDoor ?gehoudenDoor . }
      OPTIONAL { ?gehoudenDoor <http://www.w3.org/2004/02/skos/core#prefLabel> ?bestuursOrgaanLabel.}
      OPTIONAL { ?zitting prov:atLocation ?location . }
      FILTER (?startTime >= "${this.startDate}"^^xsd:dateTime && ?startTime <= "${this.endDate}"^^xsd:dateTime)

    }
    GROUP BY ?zitting
    ORDER BY DESC(?startTime)
    LIMIT ${this.searchRange}`;


    console.log(encodeURIComponent(query));
    const requestUrl = `${this.harvesterEndpoint}?query=${encodeURIComponent(query)}`;

    const response = await fetch(requestUrl);
    const json = await response.json();
    const zittingen = this.formatResponse(json.results.bindings);

    
    this._state = { zittingen: [...zittingen] };
  }

  private formatResponse(sparqlResults: any): ZittingResult[] {
    return sparqlResults.map((result: any) => ({
      zitting: result.zitting.value,
      start: result.start ? new Date(result.start.value).toLocaleDateString("nl-BE") : '',
      startTime: result.startTime ? new Date(result.startTime.value).toLocaleDateString("nl-BE") : '',
      endTime: result.endTime ? new Date(result.endTime.value).toLocaleDateString("nl-BE") : '',
      notulen: result.notulen ? result.notulen.value : '',
      secretaris: result.secretaris ? result.secretaris.value : '',
      voorzitter: result.voorzitter ? result.voorzitter.value : '',
      zittingsverslag: result.zittingsverslag ? result.zittingsverslag.value : '',
      gehoudenDoor: result.gehoudenDoor ? result.gehoudenDoor.value : '',
      bestuursOrgaanLabel: result.bestuursOrgaanLabel ? result.bestuursOrgaanLabel.value.replace(' Gemeente','').replace('Sint-Lievens-Houtem', '').trim() : '',
      location: result.location ? result.location.value : '',
    }));
  }
}

  interface ZittingResult {
    zitting: string;
    start: string;
    startTime: string;
    endTime: string;
    notulen: string;
    secretaris: string;
    voorzitter: string;
    zittingsverslag: string;
    gehoudenDoor: string;
    bestuursOrgaanLabel: string;
    location: string;
  }

declare global {
  interface HTMLElementTagNameMap {
    'zitting-feed': ZittingFeedElement;
  }
}