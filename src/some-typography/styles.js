import { css } from 'lit';

export const styles = css`
    :host {
        display: inline-block;
        width: 100%;
        font-family: sans-serif;
    }
    :host, *, ::slotted(*) {
        box-sizing: border-box;
    }
    :host-context(refresh-infobox) ::slotted(p) {
        font-weight: bold;
    }
    h1 {
        color: #003264;
        font-size: 40px;
        text-align: center;
    }
    span.overline, p.copy {
        color: #28190a;
        font-size: 16px;
    }
    span.overline {
        text-transform: uppercase;
    }
`;