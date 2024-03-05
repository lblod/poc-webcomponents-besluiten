import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * @customElement card-body
 * @class CardBodyElement
 * @extends {LitElement}
 * 
 * @property {string} body - The body text to display in the middle of the card
 * 
 * This class represents a custom element that displays the body of a card.
 */
@customElement('card-body')
export class CardBodyElement extends LitElement {
    // CSS styles for the custom element
    static override styles = css`
        :host {
            flex-grow: 2;
            overflow: hidden;
            text-overflow: ellipsis;
            color: var(--text) !important;
        }
    `;

    // Property of the custom element
    @property() body = '';

    // Render method that returns a template literal
    override render() {
        return html`${this.body}`;
    }
}

// Global declaration for the custom element
declare global {
    interface HTMLElementTagNameMap {
        'card-body': CardBodyElement;
    }
}