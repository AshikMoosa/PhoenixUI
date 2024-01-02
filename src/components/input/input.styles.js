import {css} from 'lit';

export default css`
  .label-container,
  .input-container,
  .helper-container {
    display: inline-flex;
    width: 100%;
  }

  .input {
    display: inline-flex;
    width: 100%;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    font-weight: 400;
    font-family: 'Oxanium', sans-serif;
    line-height: 1.5;
    color: #212529;
    background-clip: padding-box;
    appearance: none;
    border: 1px solid #fff;
    border-radius: 0.25rem;
    background: linear-gradient(
        318deg,
        rgba(0, 0, 0, 0.4) 0%,
        rgba(255, 255, 255, 0.4) 105.18%
      ),
      #e7ebf0;
    background-blend-mode: soft-light, normal;
    box-shadow: 2.5px 2.5px 5px 0px #a6abbd inset,
      -2.5px -2.5px 5px 0px #fafbff inset;
    /* transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out; */
  }
`;
