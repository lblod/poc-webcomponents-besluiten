import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * @customElement au-accordion
 * @class AuAccordionElement
 * @extends {LitElement}
 * 
 * @property {string} buttonLabel - The label of the button that toggles the accordion
 * @property {string} subtitle - The subtitle of the accordion
 * @property {boolean} isContentVisible - The visibility state of the accordion content
 * 
 * This class represents a custom element that displays an accordion.
 */
@customElement('au-accordion')
export class AuAccordionElement extends LitElement {
  // CSS styles for the custom element
  static override styles = css`
    .c-accordion-holder:first-of-type {
        margin-top: 1.2rem;
        padding-top: 1.2rem;
        border-top: 0.1rem solid var(--au-gray-200);
    }


    .c-accordion-holder--top>.au-c-accordion>.au-c-content {
        margin-left: 0
    }
      .au-c-toolbar {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
          font-size: var(--au-h6);
      }

      .au-c-toolbar__group {
          display: flex;
          justify-content: flex-start;
          align-items: baseline;
          
      }
      .au-c-toolbar_button_with_title{
        display: flex;
        align-items: baseline;
        cursor: pointer;
      }


      .au-c-accordion .au-c-button--link {
        text-decoration: none;
        font-weight: var(--au-medium);
        font-size: var(--au-h5);
        line-height: var(--au-global-line-height);

        padding-left: 0;
        text-align: left;
        white-space: initial;
        overflow: visible;
        height: auto;
        

        background-color: transparent;
        border-color: transparent;
        padding: 0 0.6rem;

        cursor: pointer;
    }

    .au-c-accordion .au-c-button--link:hover {
        color: var(--primary-color);

    }


    .accordion-subtitle {
      font-size: var(--au-base);
      font-weight: var(--au-light);

    }
  `;

  // Properties of the custom element
  @property() buttonLabel = '';
  @property() subtitle = '';
  @property({ type: Boolean }) isContentVisible = false;

  // Method that toggles the visibility of the accordion content
  toggleContent() {
    this.isContentVisible = !this.isContentVisible;
  }

  // Render method that returns a template literal
  override render() {
    return html`
      <section class="c-accordion-holder">
        <span class="au-c-badge au-c-badge--brand" aria-hidden="true"></span>
        <div class="au-c-accordion au-c-accordion--reverse">
          <div class="au-c-toolbar au-c-toolbar--reverse au-c-toolbar--nowrap" @click="${this.toggleContent}">
            <div class="au-c-toolbar__group">
              <div class ="au-c-toolbar_button_with_title">
                <button class="au-c-button au-c-button--link" aria-expanded="${this.isContentVisible ? 'true' : 'false'}">
                  ${this.buttonLabel}
                </button>
                ${this.subtitle ? html`<div class="accordion-subtitle">${this.subtitle}</div>` : ''}
              </div>
            </div>
            <div class="au-c-toolbar__group"></div>
          </div>
          ${this.isContentVisible ? html`
            <div class="au-c-content" tabindex="0">
              <slot></slot>
            </div>
          ` : ''}
        </div>
      </section>
    `;
  }
}

// Global declaration for the custom element
declare global {
  interface HTMLElementTagNameMap {
    'au-accordion': AuAccordionElement;
  }
}