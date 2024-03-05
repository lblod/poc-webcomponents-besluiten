import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import '../decision-card';

/**
 * @customElement zitting-card-details
 * @class ZittingCardDetailsElement
 * @extends {LitElement}
 * 
 * @property {string} uri - The zitting's URI
 * 
 * This class represents a custom element that displays a zitting card.
 */



@customElement('zitting-card-details')
export class ZittingCardDetailsElement extends LitElement {
    static override styles = css`
        /* Add your styles here */


        .au-c-heading--3  {
            font-size: var(--au-h5);
            line-height: var(--au-global-line-height);
            color: var(--au-gray-900);
            font-weight: var(--au-medium);
            text-decoration: underline;
            text-decoration-color: var(--primary-color);
        }
    `;

    @property() uri = '';

    @state()
    private _state: { agendapunten: DecisionResult[] } = { agendapunten: [] };

    override connectedCallback() {
        super.connectedCallback();
        this.fetchAgendapunten();
    }

    private async fetchAgendapunten() {
        const query = `
            PREFIX besluit: <http://data.vlaanderen.be/ns/besluit#>
            PREFIX schema: <http://data.europa.eu/eli/ontology#>
            PREFIX prov: <http://www.w3.org/ns/prov#>
            PREFIX dc: <http://purl.org/dc/terms/>
            PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
            PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>

            SELECT ?uri ?behandeling ?link ?titel ?beschrijving ?bestuursOrgaanLabel ?datumPublicatie
            WHERE {      
                <${this.uri}> besluit:behandelt ?uri;
                             besluit:isGehoudenDoor ?bestuursOrgaan.

                ?bestuursOrgaan <http://www.w3.org/2004/02/skos/core#prefLabel> ?bestuursOrgaanLabel.
          
                ?uri a besluit:Agendapunt;
                      dc:title ?titel;
                      dc:description ?beschrijving.

                ?behandeling dc:subject ?uri;
                             prov:generated ?besluit.

                ?besluit schema:date_publication ?datumPublicatie;
                         prov:value ?link.
            }
            ORDER BY DESC(?datumStart) LIMIT 10`;

        const requestUrl = `https://sint-lievens-houtem.lblod-local-dev.s.redhost.be/sparql?query=${encodeURIComponent(query)}`;

        const response = await fetch(requestUrl);
        const json = await response.json();
        const agendapunten = this.formatResponse(json.results.bindings);
        this._state = { agendapunten };
    }
    override render() {
        return html`
            <h3 class ="au-c-heading--3">Agendapunten:</h3>
            ${this._state.agendapunten
      .map(agendapunt => {
        const header = agendapunt.title;
        const subheader = '';
        const body = agendapunt.content;
        const footer = agendapunt.pubDate + ' - ' + agendapunt.creator;
        const pdf = agendapunt.link;
        const uri = "https://lblod.sint-lievens-houtem.be/LBLODWeb/id/agendapunt/69ba40f1941948649c7b7746df5f7d1d-36845"
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
        `;
    }
    private formatResponse(sparqlResults: any): DecisionResult[] {
        return sparqlResults.map((result: any) => ({
          uri: result.uri.value,
          behandeling: result.behandeling.value,
          title: result.titel.value,
          link: result.link.value,
          pubDate: new Date(result.datumPublicatie.value).toLocaleDateString("nl-BE"),
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
        'zitting-card-details': ZittingCardDetailsElement;
    }
}