import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * @customElement au-alert
 * @class AuAlertElement
 * @extends {LitElement}
 * 
 * @property {string} skin - The skin type of the alert
 * @property {string} icon - The icon to use in the alert
 * @property {string} message - The message to display in the alert
 * 
 * This class represents a custom element that displays an alert.
 */
@customElement('au-alert')
export class AuAlertElement extends LitElement {
  // CSS styles for the custom element
  static override styles = css`
      .au-alert {
        color: var(--au-gray-900);
        display: flex;
        font-family: var(--au-font);
        font-size: var(--au-h6);
        padding: 2.4rem;
        margin-bottom: 2.4rem;
        background-color: var(--au-gray-200);
        border-radius: var(--au-radius);
        border: .1rem solid var(--au-gray-300);
      }

      .au-alert>:last-child {
        margin-bottom: 0;
      }

      .au-alert .au-c-link {
        flex-shrink: 0;
      }

      .au-alert__icon {
        background-color: var(--au-white);
        border-radius: 4.8rem;
        height: 4.7rem;
        width: 4.8rem;
        margin-right: 2.4rem;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
      }

      .au-alert__icon .au-c-icon {
        height: 1.9rem;
        width: 2rem;
        bottom: 0;
      }

      .au-alert__content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        flex-grow: 1;
      }

      .au-alert__title {
        font-weight: var(--au-medium);
      }

      .au-alert__close {
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        appearance: none;
        border: 0;
        padding: 0;
        height: 2.4rem;
        width: 2.4rem;
        text-align: center;
        color: var(--au-gray-700);
        transition: color var(--au-transition);
      }

      .au-alert__close:focus, .au-alert__close:hover {
        color: var(--au-gray-600);
      }

      .au-alert.warning {
        background-color: var(--au-orange-200);
        border-color: var(--au-orange-300);
      }

      .au-alert.warning .au-alert__icon {
        background-color: var(--au-orange-500);
      }

      .au-alert.success {
        background-color: var(--au-green-200);
        border-color: var(--au-green-300);
      }

      .au-alert.success .au-alert__icon {
        background-color: var(--au-green-500);
      }

      .au-alert.error {
        background-color: var(--au-red-200);
        border-color: var(--au-red-300);
      }

      .au-alert.error .au-alert__icon {
        background-color: var(--au-red-600);
      }
      .au-u-margin-top {
        margin-top: 2.4rem!important
    }

  `;

  // Properties of the custom element
  @property() skin = '';
  @property() icon = '';
  @property() message = '';

  // Render method that returns a template literal
  override render() {
    return html`
      <div class="au-alert au-u-margin-top ${this.skin}">
        <i class="${this.icon}"></i>
        <span>${this.message}</span>
        <slot></slot>
      </div>
    `;
  }
}

// Global declaration for the custom element
declare global {
  interface HTMLElementTagNameMap {
    'au-alert': AuAlertElement;
  }
}