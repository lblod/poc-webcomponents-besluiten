import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * @customElement decision-card-header
 * @class DecisionCardHeaderElement
 * @extends {LitElement}
 * 
 * @property {string} header - The larger header to use at the top of the card
 * @property {string} subheader - The smaller header to use at the top of the card
 * 
 * This class represents a custom element that displays the header of a decision card.
 */
@customElement('decision-card-header')
export class DecisionCardHeaderElement extends LitElement {
    // CSS styles for the custom element
    static override styles = css`
        :host {
            flex-grow: 1;
            color: var(--decision-header-color);
        }
        .au-c-heading--3  {
            font-size: var(--au-h3);
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
    `;

    // Properties of the custom element
    @property() header = '';
    @property() subheader = '';

    // Render method that returns a template literal
    override render() {
        return html`
            <h2 class="au-c-heading--3 closed">${this.header}</h2>
            <h3>${this.subheader}</h3>
        `;
    }
}

// Global declaration for the custom element
declare global {
    interface HTMLElementTagNameMap {
        'decision-card-header': DecisionCardHeaderElement;
    }
}