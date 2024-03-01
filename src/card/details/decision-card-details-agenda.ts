import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * @customElement decision-card-details-agenda
 * @class DecisionCardDetailsAgendaElement
 * @extends {LitElement}
 * 
 * @property {string} url - The URL to the agenda
 * 
 * This class represents a custom element that displays a link to the agenda in the details of a decision card.
 */
@customElement('decision-card-details-agenda')
export class DecisionCardDetailsAgendaElement extends LitElement {
  // CSS styles for the custom element
  static override styles = css`
    :host {
      /* Add your CSS here */
    }
  `;

  // Property of the custom element
  @property() url = '';

  // Render method that returns a template literal
  override render() {
    return html`
      <a href="${this.url}">Open agenda</a>
    `;
  }
}

// Global declaration for the custom element
declare global {
  interface HTMLElementTagNameMap {
    'decision-card-details-agenda': DecisionCardDetailsAgendaElement;
  }
}