import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * @customElement au-voting-overview
 * @class AuVotingOverviewElement
 * @extends {LitElement}
 * 
 * @property {Vote} vote - The voting results
 * 
 * This class represents a custom element that displays a voting overview of a decision card.
 */
@customElement('au-voting-overview')
export class AuVotingOverviewElement extends LitElement {
    // CSS styles for the custom element
    static override styles = css`
                .c-chart__pie {
            margin: 0 auto;
            transform: rotate(-90deg);
            border-radius: 50%;
            display: block;
            height: auto;
            flex-shrink: 0;
            width: 200px
        }

        .c-chart__pie circle {
            width: 100%;
            height: 100%
        }

        .c-chart__legend {
            font-size: var(--au-h6);
            line-height: var(--au-global-line-height);
            color: var(--au-gray-700);
            flex-shrink: 0;
            width: 200px
        }

        @media (min-width: 47.9375em) {
            .c-chart__legend {
                width:calc(100% - 200px)
            }
        }

        .c-chart__legend-item {
            list-style-type: none;
            display: flex;
            align-items: center
        }

        .c-chart__legend-item::before {
            content: "";
            display: block;
            width: 1.2rem;
            height: 1.2rem;
            background-color: var(--au-gray-500);
            border-radius: .3rem;
            margin-bottom: .1rem;
            margin-right: 1.2rem
        }

        .c-chart__legend-item--proponents::before {
            background-color: var(--au-green-500)
        }

        .c-chart__legend-item--opponents::before {
            background-color: var(--au-red-600)
        }

        .c-chart__legend-item--abstentions::before {
            background-color: var(--au-gray-400)
        }

        .c-pie {
            fill: transparent;
            stroke-width: 50;
            stroke-dasharray: 0 158;
            transform: rotate(var(--offset));
            transform-origin: center center
        }

        .c-pie--proponents {
            stroke: var(--au-green-500);
            stroke-dasharray: calc(var(--value-proponents) * 158 / var(--total-voters)) 158;
        }

        .c-pie--opponents {
            --offset: calc(var(--value-proponents) * 360 / var(--total-voters) * 1deg);
            stroke: var(--au-red-600);
            stroke-dasharray: calc(var(--value-opponents) * 158 / var(--total-voters)) 158;
        }

        .c-pie--abstentions {
            --offset: calc((var(--value-proponents) + var(--value-opponents)) * 360 / var(--total-voters) * 1deg);
            stroke: var(--au-gray-400);
            stroke-dasharray: calc(var(--value-abstentions) * 158 / var(--total-voters)) 158;
        }
    `;

    // Properties of the custom element
    @property({ type: Object }) vote!: Vote;

    // Getter that calculates the total number of voters
    get totalVoters() {
        return Number(this.vote.aantalOnthouders) + Number(this.vote.aantalTegenstanders) + Number(this.vote.aantalVoorstanders);
    }

    // Lifecycle method that is called when the element's properties are updated
    override updated() {
        this.style.setProperty('--value-proponents', String(this.vote.aantalVoorstanders));
        this.style.setProperty('--value-opponents', String(this.vote.aantalTegenstanders));
        this.style.setProperty('--value-abstentions', String(this.vote.aantalOnthouders));
        this.style.setProperty('--total-voters', String(this.totalVoters));
    }

    // Render method that returns a template literal
    override render() {
        if (!this.vote) {
            return html`<p>Loading...</p>`;
        }

        if (this.totalVoters){
            return html`
                <div class="c-chart">
                    <svg
                        viewBox="0 0 100 100"
                        class="c-chart__pie"
                        aria-hidden="true"
                        focusable="false"
                    >
                        <circle r="25" cx="50" cy="50" class="c-pie c-pie--proponents" />
                        <circle r="25" cx="50" cy="50" class="c-pie c-pie--opponents" />
                        <circle r="25" cx="50" cy="50" class="c-pie c-pie--abstentions" />
                    </svg>
                    <ul class="c-chart__legend">
                        <li class="c-chart__legend-item c-chart__legend-item--proponents">Voor (${this.vote.aantalVoorstanders})</li>
                        <li class="c-chart__legend-item c-chart__legend-item--opponents">Tegen (${this.vote.aantalTegenstanders})</li>
                        <li class="c-chart__legend-item c-chart__legend-item--abstentions">Onthouden (${this.vote.aantalOnthouders})</li>
                    </ul>
                    ${this.vote.gevolg ? html`<li>Gevolg: ${this.vote.gevolg}</li>` : ''}
                </div>
            
                `;
        }

        return html`<p>Geen stemming beschikbaar</p>`;
    }
}

// Interface that represents the structure of a vote
interface Vote {
    subject: string;
    available: boolean;
    geheim: string;
    aantalOnthouders: number;
    aantalTegenstanders: number;
    aantalVoorstanders: number;
    gevolg: string;
}

// Global declaration for the custom element
declare global {
    interface HTMLElementTagNameMap {
        'au-voting-overview': AuVotingOverviewElement;
    }
}