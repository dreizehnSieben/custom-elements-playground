import { LitElement, html } from "lit";
import { styles } from "./styles.js";

export class SomeInfobox extends LitElement {
    static properties = {
        caption: {}
    };

    static styles = [ styles ];

    constructor() {
        super();
        this.caption = '';
    }

    render() {
        const { caption } = this;

        return html`
            <div class="wrapper">
                <some-typography variant="h1">${caption}</some-typography>
                <slot></slot>
            </div>
        `;
    }
}
customElements.define('some-infobox', SomeInfobox);