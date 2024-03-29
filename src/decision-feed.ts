import { css, html, LitElement } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import "./card/decision-card";


/**
 * @customElement decision-feed
 * @class DecisionFeedElement
 * @extends {LitElement}
 * 
 * @property {number} count - The number of preview cards to display
 * @property {string} height - The height of the decision feed
 * @property {string} harvesterEndpoint - The endpoint of the harvester to fetch data from
 * 
 * @state {Object} _state - The state object that holds the agendapunten array
 * 
 * This class represents a custom element that displays a collection of decision article cards.
 */
@customElement('decision-feed')
export class DecisionFeedElement extends LitElement {
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


  `;

  @property({ type: Number }) count = 10;
  @property({ type: String }) height = '2000px';
  @property({ type: String }) harvesterEndpoint = '';

  @state()
  private _state: { agendapunten: DecisionResult[] } = { agendapunten: [] };

  override connectedCallback() {
    super.connectedCallback();
    this.fetchData();
  }

  override render() {
    
    return html`
    <h1 class="au-c-heading au-c-heading--2">De laatste agendapunten:</h1>
    <div style="overflow-y: auto; height: ${this.height};">
    ${this._state.agendapunten
      .slice(0, this.count)
      .map(agendapunt => {
        const header = agendapunt.title;
        const subheader = '';
        const body = agendapunt.content;
        const footer = agendapunt.pubDate + ' - ' + agendapunt.creator;
        const pdf = agendapunt.link;
        const uri = agendapunt.uri; //"https://lblod.sint-lievens-houtem.be/LBLODWeb/id/agendapunt/69ba40f1941948649c7b7746df5f7d1d-36845"
        return html`
          <decision-card 
            .header="${header}"
            .subheader="${subheader}"
            .body="${body}"
            .footer="${footer}"
            .pdf="${pdf}"
            .uri="${uri}"
          ></decision-card>
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

    SELECT DISTINCT ?uri (SAMPLE(?behandeling) AS ?behandeling) (SAMPLE(?link) AS ?link) (SAMPLE(?titel) AS ?titel) 
            (SAMPLE(?beschrijving) AS ?beschrijving) (SAMPLE(?bestuursOrgaanLabel) AS ?bestuursOrgaanLabel) 
            (SAMPLE(?datumStart) AS ?datumStart)
    WHERE {    
      ?uri a besluit:Agendapunt;
        dc:title ?titel;
        dc:description ?beschrijving.
      
      ?behandeling dc:subject ?uri;
             prov:generated ?besluit.

      ?besluit schema:date_publication ?datumPublicatie;
            prov:value ?link.
      
      ?zitting besluit:behandelt ?uri;
           besluit:isGehoudenDoor ?bestuursOrgaan;
           besluit:geplandeStart ?datumStart.
           
      ?bestuursOrgaan <http://www.w3.org/2004/02/skos/core#prefLabel> ?bestuursOrgaanLabel.
    }
    GROUP BY ?uri
    ORDER BY DESC(?datumStart)
    LIMIT 10`;
    
    
    const requestUrl = `${this.harvesterEndpoint}?query=${encodeURIComponent(query)}`;

    const response = await fetch(requestUrl);
    const json = await response.json();
    const agendapunten = this.formatResponse(json.results.bindings);

    this._state = { agendapunten };
  }

  private formatResponse(sparqlResults: any): DecisionResult[] {
    return sparqlResults.map((result: any) => ({
      uri: result.uri.value,
      behandeling: result.behandeling.value,
      title: result.titel.value,
      link: result.link.value,
      pubDate: new Date(result.datumStart.value).toLocaleDateString("nl-BE"),
      creator: result.bestuursOrgaanLabel.value,
      content: result.beschrijving.value,
    }));
  }
}

interface DecisionResult {
  uri: string;
  behandeling: string;
  title: string;
  link: string;
  pubDate: Date;
  creator: string;
  content: string;
}

declare global {
  interface HTMLElementTagNameMap {
    'decision-feed': DecisionFeedElement;
  }
}