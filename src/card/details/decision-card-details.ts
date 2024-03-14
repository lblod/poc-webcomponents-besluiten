import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import "./decision-card-details-besluit";
import "./decision-card-details-voting";

/**
 * @customElement decision-card-details
 * @class DecisionCardDetailsElement
 * @extends {LitElement}
 * 
 * @property {string} uri - The URI of the decision
 * @property {string} pdf - The URL to the PDF document associated with the decision
 * @property {string} harvesterEndpoint - The endpoint of the harvester to fetch data from  
 * 
 * This class represents a custom element that displays the details of a decision card.
 */
@customElement('decision-card-details')
export class DecisionCardDetailsElement extends LitElement {
    // CSS styles for the custom element
    static override styles = css`
    `;

    // Properties of the custom element
    @property({type:String}) uri = '';
    @property({type:String}) pdf = '';
    @property({type:String}) harvesterEndpoint = '';

    // Render method that returns a template literal
    override render() {
        return html`
            <decision-card-details-besluit .pdf="${this.pdf}"></decision-card-details-besluit>
            <decision-card-details-voting .uri="${this.uri}" .harvesterEndpoint="${this.harvesterEndpoint}"></decision-card-details-voting>
            <!-- <decision-card-details-agenda .url="${this.uri}"></decision-card-details-agenda> -->
        `;
    }
}

// Global declaration for the custom element
declare global {
    interface HTMLElementTagNameMap {
        'decision-card-details': DecisionCardDetailsElement;
    }
}