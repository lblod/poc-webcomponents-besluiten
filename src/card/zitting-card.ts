import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import "./card-header";
import "./card-body";
import "./card-footer";
import "./details/zitting-card-details";

/**
 * @customElement zitting-card
 * @class ZittingCardElement
 * @extends {LitElement}
 * 
 * @property {string} startedAtTime - The start time of the zitting
 * @property {string} endedAtTime - The end time of the zitting
 * @property {string} source - The source of the zitting
 * @property {string} uri - The zitting's URI
 * 
 * This class represents a custom element that displays a zitting card.
 */
@customElement('zitting-card')
export class ZittingCardElement extends LitElement {
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

    @property() startedAtTime = '';
    @property() endedAtTime = '';
    @property() source = '';
    @property() uri = '';

    @state() private detailsVisible = false;

    private toggleDetails() {
        this.detailsVisible = !this.detailsVisible;
    }

    override render() {
        const header = this.endedAtTime 
            ? `Zitting ${this.startedAtTime} - ${this.endedAtTime}` 
            : `Zitting ${this.startedAtTime}`;

        const footer = this.source;
        return html`
            <card-header .header="${header} - ${footer}" @click="${this.toggleDetails}"></card-header>
            ${this.detailsVisible ? html`<zitting-card-details .uri="${this.uri}"></zitting-card-details>` : ''}
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'zitting-card': ZittingCardElement;
    }
}