import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
  --text-color: #ffffff;
  --main-bg-color: #44475a;
  --pink: #ee88ad;
}

a {
  color: var(--text-color);
  &:hover {
    color: var(--text-color);
  }
}

body {
  background-color: var(--main-bg-color);
  font-family: "Source Code Pro", monospace;
  font-size: 16px;
}
`;
