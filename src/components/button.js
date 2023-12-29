import {LitElement, html} from 'lit';
import {classMap} from 'lit/directives/class-map.js';
import styles from './button.styles';

/**
 * Button Component.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class PhoenixButton extends LitElement {
  static get styles() {
    return styles;
  }

  static get properties() {
    return {
      /**
       * The button disabled - true,false.
       * @type {boolean}
       */
      disabled: {type: Boolean, reflect: true},
    };
  }

  constructor() {
    super();
    this.disabled = false;
  }

  render() {
    const buttonClass = {
      button: true,
    };
    return html`
      <button
        type="button"
        class=${classMap(buttonClass)}
        ?disabled=${this.disabled}
      >
        <slot name="icon-only"></slot>
        <slot name="start"></slot>
        <slot></slot>
        <slot name="end"></slot>
      </button>
    `;
  }
}

window.customElements.define('phoenix-button', PhoenixButton);
