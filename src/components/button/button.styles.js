import {css} from 'lit';

export default css`
  .button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-weight: 400;
    font-family: 'Oxanium', sans-serif;
    line-height: 1.5;
    color: #212529;
    text-align: center;
    text-decoration: none;
    vertical-align: middle;
    cursor: pointer;
    user-select: none;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    border-radius: 0.25rem;
    /* transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out; */
    border: 1px solid #fff;
    background: linear-gradient(
        318deg,
        rgba(0, 0, 0, 0.4) 0%,
        rgba(255, 255, 255, 0.4) 105.18%
      ),
      #e7ebf0;
    background-blend-mode: soft-light, normal;
    box-shadow: 2.5px 2.5px 5px 0px #a6abbd, -2.5px -2.5px 5px 0px #fafbff;
  }

  button:hover {
    background-blend-mode: screen, normal;
  }

  button.active,
  button:active {
    background: linear-gradient(
        318deg,
        rgba(0, 0, 0, 0.4) 0%,
        rgba(255, 255, 255, 0.4) 105.18%
      ),
      #e7ebf0;
    background-blend-mode: soft-light, normal;
    box-shadow: 2.5px 2.5px 5px 0px #a6abbd inset,
      -2.5px -2.5px 5px 0px #fafbff inset;
  }

  .button:disabled {
    cursor: none;
    opacity: 0.5;
    pointer-events: none;
  }

  .button:not([disabled]),
  .button[disabled='false'] {
    cursor: pointer;
    opacity: 1;
    pointer-events: initial;
  }
`;
