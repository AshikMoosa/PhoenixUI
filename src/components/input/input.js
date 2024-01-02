import {LitElement, html} from 'lit';
import {classMap} from 'lit/directives/class-map.js';
import styles from './input.styles';

/**
 * Input Component.
 *
 * @slot - This element has a slot
 * @csspart input - The input
 */
export class PhoenixInput extends LitElement {
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
    const inputClass = {
      input: true,
    };
    return html`
      <div class="label-container">
        <label for="input">
          <slot name="label"></slot>
        </label>
      </div>
      <div class="input-container">
        <slot name="start"></slot>
        <input
          type="text"
          placeholder=""
          class=${classMap(inputClass)}
          ?disabled=${this.disabled}
          id="input"
        />
        <slot name="end"></slot>
      </div>
      <div class="helper-container">
        <slot name="helper"></slot>
      </div>
    `;
  }
}

window.customElements.define('phoenix-input', PhoenixInput);
