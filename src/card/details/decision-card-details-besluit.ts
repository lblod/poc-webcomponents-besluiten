import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import "./components/au-accordion";
import "./components/au-link";
import "./components/au-alert";
import "./components/au-content";

/**
 * @customElement decision-card-details-besluit
 * @class DecisionCardDetailsBesluitElement
 * @extends {LitElement}
 * 
 * @property {string} pdf - The URL to the PDF document associated with the decision
 * @property {string} motivation - The motivation text associated with the decision
 * 
 * This class represents a custom element that displays the decision details of a decision card.
 */
@customElement('decision-card-details-besluit')
export class DecisionCardDetailsBesluitElement extends LitElement {

  static override styles = css`
    /* Add your CSS here */
  `;
  
  // Properties of the custom element
  @property() pdf = '';
  @property() motivation = '';

  // Getter that returns an object with the motivation and value of the decision
  get resolution() {
    return { motivation: this.motivation, value: this.pdf };
  }

  // Render method that returns a template literal
  override render() {
    return html`
      <au-accordion buttonLabel="Besluit">
        ${this.resolution.value ? html`
          <au-alert skin="success" icon="sign">
            ${this.resolution.value.endsWith('.pdf') ? html`
              <au-link href="${this.resolution.value}" skin="small" icon="pdf">
                open besluit
              </au-link>
            ` : this.resolution.value}
          </au-alert>
        ` : html`
          <au-alert skin="warning" title="Besluit niet beschikbaar"></au-alert>
        `}
        ${this.resolution.motivation ? html`
          <div class="c-accordion-holder c-accordion-holder--top">
            <au-accordion buttonLabel="Motivering">
              <au-content skin="small" class="au-u-padding">
                <p class="au-u-muted">
                  ${this.resolution.motivation}
                </p>
              </au-content>
            </au-accordion>
          </div>
        ` : ''}
      </au-accordion>
    `;
  }
}

// Global declaration for the custom element
declare global {
  interface HTMLElementTagNameMap {
    'decision-card-details-besluit': DecisionCardDetailsBesluitElement;
  }
}