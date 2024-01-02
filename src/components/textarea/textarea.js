import {LitElement, html} from 'lit';
import {classMap} from 'lit/directives/class-map.js';
import styles from './textarea.styles';

/**
 * Textarea Component.
 *
 * @slot - This element has a slot
 * @csspart Textarea - The Textarea
 */
export class PhoenixTextarea extends LitElement {
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
    const textareaClass = {
      textarea: true,
    };
    return html`
      <div class="label-container">
        <label for="input">
          <slot name="label"></slot>
        </label>
      </div>
      <div class="textarea-container">
        <slot name="start"></slot>
        <textarea
          placeholder=""
          class=${classMap(textareaClass)}
          ?disabled=${this.disabled}
          id="input"
        ></textarea>
        <slot name="end"></slot>
      </div>
      <div class="helper-container">
        <slot name="helper"></slot>
      </div>
    `;
  }
}

window.customElements.define('phoenix-textarea', PhoenixTextarea);
