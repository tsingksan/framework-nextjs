import { css } from "@linaria/core";

export const globals = css`
  :global() {
    :root {
      --colors-primary: tomato;
    }

    html {
      box-sizing: border-box;
      font-size: 20px;
    }

    *,
    *:before,
    *:after {
      box-sizing: inherit;
    }
  }
`;
