import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * @customElement au-content
 * @class AuContentElement
 * @extends {LitElement}
 * 
 * @property {string} skin - The skin type of the content
 * 
 * This class represents a custom element that displays content.
 */
@customElement('au-content')
export class AuContentElement extends LitElement {

  // CSS styles for the custom element
  static override styles = css`
    /* Add your CSS here */
  `;

  // Property of the custom element
  @property() skin = '';

  // Render method that returns a template literal
  override render() {
    return html`
      <div class="au-content ${this.skin}">
        <slot></slot>
      </div>
    `;
  }
}

// Global declaration for the custom element
declare global {
  interface HTMLElementTagNameMap {
    'au-content': AuContentElement;
  }
}