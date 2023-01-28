import { css } from 'lit';

export const styles = css`
    :host {
        display: block;
        width: 100%;
    }
    :host, *, ::slotted(*) {
        box-sizing: border-box;
    }
    .wrapper {
        max-width: 320px;
        padding: 1rem;
        background-color: #f9db7a;
        margin: 0 auto;
    }
`;