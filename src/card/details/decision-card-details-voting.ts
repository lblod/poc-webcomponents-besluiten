import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import "./components/au-voting-overview";

interface Vote {
  subject: string;
  available: boolean;
  geheim: string;
  aantalOnthouders: number;
  aantalTegenstanders: number;
  aantalVoorstanders: number;
  gevolg: string
}

interface VoteResult {
  uri: string;
  vote: Vote;
}


/**
 * @customElement decision-card-details-voting
 * @class DecisionCardDetailsSVotingElement
 * @extends {LitElement}
 * 
 * @property {string} uri - The URI of the decision
 * 
 * @state {Object} _state - The state object that holds the voting results
 * @state {boolean} _loading - The loading state of the component
 * 
 * This class represents a custom element that displays the voting details of a decision card.
 */
@customElement('decision-card-details-voting')
export class DecisionCardDetailsVotingElement extends LitElement {
  static override styles = css`
    /* Add your CSS here */

    p{
      padding: 0 0.6rem;
      font-size: var(--au-para);
      font-weight: var(--au-light);
      text-decoration: underline;
      text-decoration-color: var(--primary-color);
    }
  `;

  @property() uri = '';


  @state() private _state: { voting: VoteResult[] } = { voting: [] };
  @state() private _loading = false;

  override connectedCallback() {
    super.connectedCallback();
    this.fetchData();
  }


  private async fetchData() {

    this._loading = true;

    try {

      const query = `PREFIX besluit: <http://data.vlaanderen.be/ns/besluit#>
      PREFIX schema: <http://data.europa.eu/eli/ontology#>
      PREFIX prov: <http://www.w3.org/ns/prov#>
      PREFIX dc: <http://purl.org/dc/terms/>
      PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
      PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>

      SELECT ?uri ?geheim ?aantalOnthouders ?aantalTegenstanders ?aantalVoorstanders ?gevolg ?onderwerp
      WHERE {    
        ?behanding dc:subject <${this.uri}>.
        OPTIONAL {
          ?behanding besluit:heeftStemming ?uri.
        }
        OPTIONAL {
          ?uri besluit:geheim ?geheim.
        }
        OPTIONAL {
          ?uri besluit:aantalOnthouders ?aantalOnthouders.
        }
        OPTIONAL {
          ?uri besluit:aantalTegenstanders ?aantalTegenstanders.
        }
        OPTIONAL {
          ?uri besluit:aantalVoorstanders ?aantalVoorstanders.
        }
        OPTIONAL {
          ?uri besluit:gevolg ?gevolg.
        }
        OPTIONAL {
          ?uri besluit:onderwerp ?onderwerp.
        }
      }`;

      const requestUrl = `https://sint-lievens-houtem.lblod-local-dev.s.redhost.be/sparql?query=${encodeURIComponent(query)}`;

      const response = await fetch(requestUrl);
      const json = await response.json();
      const voting = this.formatResponse(json.results.bindings);

      this._state = { voting };

    } catch (error) {
        console.error('Failed to fetch data:', error);

    } finally {
        this._loading = false;
        
    }

  }


  override render() {
    if (this._loading) {
      return html`<p>Loading...</p>`;  // Replace with your loading message or spinner
    }

    return html`
      <!-- <p>${JSON.stringify(this._state.voting, null, 2)}</p> -->
      ${this._state.voting && this._state.voting.length > 0 ? this._state.voting.map(voteResult => voteResult.vote.available ? html`
        <au-accordion buttonLabel="Stemming" subtitle="${voteResult.vote.subject}">
            ${voteResult.vote.geheim === "true" ? html`
            <p class="au-u-h6 au-u-flex au-u-flex--spaced-tiny au-u-flex--vertical-center au-u-margin-top">
                  Geheime stemming
              </p>
            ` : html`
              <p class="au-u-h6 au-u-flex au-u-flex--spaced-tiny au-u-flex--vertical-center au-u-margin-top">
                  Openbare stemming
              </p>
            `}
          <au-voting-overview .vote="${voteResult.vote}"></au-voting-overview>
        </au-accordion>
      ` : '') : html`
        <au-alert skin="warning" message="Stemming niet beschikbaar" class="au-u-margin-top au-u-margin-bottom"></au-alert>
      `}
    `;
  }

  private formatResponse(sparqlResults: any): VoteResult[] {
    return sparqlResults.map((result: any) => ({
      uri: result.uri?.value,
      vote: {
        subject: result.onderwerp?.value,
        available: result.uri ? true : false,
        geheim: result.geheim?.value,
        aantalOnthouders: result.aantalOnthouders?.value,
        aantalTegenstanders: result.aantalTegenstanders?.value,
        aantalVoorstanders: result.aantalVoorstanders?.value,
        gevolg: result.gevolg?.value
      },
    }));
  }

}

declare global {
  interface HTMLElementTagNameMap {
    'decision-card-details-voting': DecisionCardDetailsVotingElement;
  }
}