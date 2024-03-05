import { css, html, LitElement } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import "./card/zitting-card";


/**
 * @customElement zitting-feed
 * @class ZittingFeedElement
 * @extends {LitElement}
 * 
 * @property {number} count - The number of preview cards to display
 * 
 * @state {Object} _state - The state object that holds the zittingen array
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

        text-decoration: underline;
        text-decoration-color: var(--primary-color);

        margin-top: 0;
    }

    @media (min-width: 47.9375em) {
        .au-c-heading--2 {
            line-height: var(--au-global-line-height)
        }
    }


  `;

  @property({ type: Number }) count = 10;
  @property({ type: String }) height = '2000px';

  @state()
  private _state: { zittingen: ZittingResult[] } = { zittingen: [] };

  override connectedCallback() {
    super.connectedCallback();
    this.fetchData();
  }


  override render() {
    return html`
      <h1 class="au-c-heading au-c-heading--2">De laatste zittingen:</h1>
      <div style="overflow-y: auto; height: ${this.height};">
        ${this._state.zittingen
          .slice(0, this.count)
          .map(zitting => {
            const startedAtTime = zitting.startTime;
            const endedAtTime = zitting.endTime;
            const source = zitting.bestuursOrgaanLabel;
            const uri = zitting.zitting;
            return html`
              <zitting-card 
                .startedAtTime="${startedAtTime}"
                .endedAtTime="${endedAtTime}"
                .source="${source}"
                .uri="${uri}"
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

    SELECT *
    WHERE {
      ?zitting a besluit:Zitting .
      OPTIONAL { ?zitting besluit:geplandeStart ?start . }
      OPTIONAL { ?zitting prov:startedAtTime ?startTime . }
      OPTIONAL { ?zitting prov:endedAtTime ?endTime . }
      OPTIONAL { ?zitting besluit:heeftAanwezigeBijStart ?aanwezige . }
      OPTIONAL { ?zitting besluit:heeftNotulen ?notulen . }
      OPTIONAL { ?zitting besluit:heeftSecretaris ?secretaris . }
      OPTIONAL { ?zitting besluit:heeftVoorzitter ?voorzitter . }
      OPTIONAL { ?zitting besluit:heeftZittingsverslag ?zittingsverslag . }
      OPTIONAL { ?zitting besluit:isGehoudenDoor ?gehoudenDoor . }
      OPTIONAL { ?gehoudenDoor <http://www.w3.org/2004/02/skos/core#prefLabel> ?bestuursOrgaanLabel.}
      OPTIONAL { ?zitting prov:atLocation ?location . }
    }
    ORDER BY DESC(?startTime)
    LIMIT 10`;

    const requestUrl = `https://sint-lievens-houtem.lblod-local-dev.s.redhost.be/sparql?query=${encodeURIComponent(query)}`;

    const response = await fetch(requestUrl);
    const json = await response.json();
    const zittingen = this.formatResponse(json.results.bindings);

    this._state = { zittingen };
  }

  private formatResponse(sparqlResults: any): ZittingResult[] {
    return sparqlResults.map((result: any) => ({
      zitting: result.zitting.value,
      start: result.start ? new Date(result.start.value).toLocaleDateString("nl-BE") : '',
      startTime: result.startTime ? new Date(result.startTime.value).toLocaleDateString("nl-BE") : '',
      endTime: result.endTime ? new Date(result.endTime.value).toLocaleDateString("nl-BE") : '',
      aanwezige: result.aanwezige ? result.aanwezige.value : '',
      notulen: result.notulen ? result.notulen.value : '',
      secretaris: result.secretaris ? result.secretaris.value : '',
      voorzitter: result.voorzitter ? result.voorzitter.value : '',
      zittingsverslag: result.zittingsverslag ? result.zittingsverslag.value : '',
      gehoudenDoor: result.gehoudenDoor ? result.gehoudenDoor.value : '',
      bestuursOrgaanLabel: result.bestuursOrgaanLabel ? result.bestuursOrgaanLabel.value : '',
      location: result.location ? result.location.value : '',
    }));
  }
}

  interface ZittingResult {
    zitting: string;
    start: string;
    startTime: string;
    endTime: string;
    aanwezige: string;
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