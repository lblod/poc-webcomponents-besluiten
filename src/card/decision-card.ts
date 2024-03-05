import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import "./card-header";
import "./card-body";
import "./card-footer";
import "./details/decision-card-details";

/**
 * @customElement card
 * @class DecisionCardElement
 * @extends {LitElement}
 * 
 * @property {string} header - The larger header to use at the top of the card
 * @property {string} subheader - The smaller header to use at the top of the card
 * @property {string} body - The card's body content
 * @property {string} footer - The card's footer content
 * @property {string} pdf - The URL of the PDF document associated with the card
 * @property {string} uri - The card's Agendapunt URI
 * 
 * This class represents a custom element that displays a decision card.
 */
@customElement('decision-card')
export class DecisionCardElement extends LitElement {
    // CSS styles for the custom element
    static override styles = css`
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
    `;

    // Properties of the custom element
    @property() header = '';
    @property() subheader = '';
    @property() body = '';
    @property() footer = '';
    @property() pdf = '';
    @property() uri = '';


    @state() private detailsVisible = false;

    private toggleDetails() {
        this.detailsVisible = !this.detailsVisible;
    }

    // Render method that returns a template literal
    override render() {
        return html`
            <card-header .header="${this.header}" .subheader="${this.subheader}" @click="${this.toggleDetails}"></card-header>
            <card-body .body="${this.body}" @click="${this.toggleDetails}"></card-body>
            <card-footer .footer="${this.footer}"></card-footer>
            ${this.detailsVisible ? html`<decision-card-details .pdf="${this.pdf}" .uri="${this.uri}"></decision-card-details>` : ''}
        `;
    }
}

// Global declaration for the custom element
declare global {
    interface HTMLElementTagNameMap {
        'decision-card': DecisionCardElement;
    }
}