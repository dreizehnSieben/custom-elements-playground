import { LitElement, html } from "lit";
import { styles } from "./styles.js";

const Typography = {
    H1: 'h1',
    OVERLINE: 'overline',
};

export class SomeTypography extends LitElement {
    static properties = {
        variant: {},
    };

    static styles = [ styles ];

    constructor() {
        super();
        this.variant = Typography.COPY;
    }

    render() {
        const { variant } = this;

        switch (variant) {
            case Typography.H1:
                return html`<h1><slot></slot></h1>`;

            case Typography.OVERLINE:
                return html`<span class="overline"><slot></slot></span>`;

            default:
                return html`<p class="copy"><slot></slot></p>`;
        }
    }
}
customElements.define('some-typography', SomeTypography);