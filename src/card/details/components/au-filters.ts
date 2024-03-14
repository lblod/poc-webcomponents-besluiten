import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * `au-filters` component is used to render a list of filter buttons.
 * Each button represents a label and when clicked, it triggers the `onFilterClick` callback with the label as an argument.
 */
@customElement('au-filters')
export class AuFiltersElement extends LitElement {

    static override styles = css`
        .au-controls {
            display: flex;
            justify-content: space-between;
            margin-bottom: 1rem;
        }`;

    /**
     * An array of labels to be displayed as filter buttons.
     */
    @property({ type: Array })
    labels: string[] = [];

    /**
     * A callback function that is triggered when a filter button is clicked.
     * The clicked label is passed as an argument to the callback.
     */
    @property({ attribute: false })
    onFilterClick: (label: string) => void = () => {};

    /**
     * Handles the click event of the filter buttons.
     * Calls the `onFilterClick` callback with the clicked label.
     */
    private handleClick(label: string) {
        this.onFilterClick(label);
    }

    /**
     * Renders a list of filter buttons.
     * Each button represents a label from the `labels` array.
     * When a button is clicked, the `handleClick` method is called with the clicked label.
     */
    override render() {
        return html`
            <div class="au-controls au-controls--row">
                <ul class="au-tags">
                ${this.labels.map(label => html`
                    <button class="au-filter" @click="${() => this.handleClick(label)}">${label}</button>
                `)}
                </ul>
            </div>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'au-filters': AuFiltersElement;
    }
}