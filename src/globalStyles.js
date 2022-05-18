import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
   * {
  margin: 0 ;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: 'Roboto', sans-serif;
  font-size: 12px;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

a:visited {
  color: inherit;
    text-decoration: none;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin-top: 0;
}

ul,
ol,
li {
  list-style: none;
  margin: 0;
  padding: 0;
}

.visually-hidden {
  position: absolute;
  border: 0;
  padding: 0;
  width: 1px;
  height: 1px;
  margin: -1px;

  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
}

input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input:focus-visible {
    outline: none;
  }

textarea:focus-visible {
    outline: none;
  }

`;
