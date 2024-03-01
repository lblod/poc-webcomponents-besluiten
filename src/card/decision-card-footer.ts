import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * @customElement decision-card-footer
 * @class DecisionCardFooterElement
 * @extends {LitElement}
 * 
 * @property {string} footer - The footer text to display at the bottom of the card
 * 
 * This class represents a custom element that displays the footer of a decision card.
 */
@customElement('decision-card-footer')
export class DecisionCardFooterElement extends LitElement {
    // CSS styles for the custom element
    static override styles = css`
        :host {
            color: var(--au-gray-700) !important;
        }
    `;

    // Property of the custom element
    @property() footer = '';

    // Render method that returns a template literal
    override render() {
        return html`${this.footer}`;
    }
}

// Global declaration for the custom element
declare global {
    interface HTMLElementTagNameMap {
        'decision-card-footer': DecisionCardFooterElement;
    }
}