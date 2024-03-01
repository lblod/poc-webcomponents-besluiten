import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * @customElement au-link
 * @class AuLinkElement
 * @extends {LitElement}
 * 
 * @property {string} href - The URL of the link
 * @property {string} skin - The skin type of the link
 * @property {string} icon - The icon to use in the link
 * 
 * This class represents a custom element that displays a link.
 */
@customElement('au-link')
export class AuLinkElement extends LitElement {
  // CSS styles for the custom element
  static override styles = css`
    .au-c-link {
        color: var(--text)!important;
        text-decoration-color: var(--text)!important;
        font-weight: 500
    }

    .au-c-link:hover {
        color: var(--primary-color)!important;
        text-decoration-color: var(--primary-color)!important
    }
  `;

  // Properties of the custom element
  @property() href = '';
  @property() skin = '';
  @property() icon = '';

  // Render method that returns a template literal
  override render() {
    return html`
      <a class="au-c-link ${this.skin}" href="${this.href}" target="_blank" rel="noopener noreferrer">
        <i class="${this.icon}"></i>
        <slot></slot>
      </a>
    `;
  }
}

// Global declaration for the custom element
declare global {
  interface HTMLElementTagNameMap {
    'au-link': AuLinkElement;
  }
}