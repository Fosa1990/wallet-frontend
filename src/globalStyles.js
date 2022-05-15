import { createGlobalStyle } from 'styled-components';
import ellipseUp from './images/ellipse-up.png';
import ellipseDown from './images/ellipse-down.png';

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
  background-color: #e7eaf2;
  height: 100vh;
}

@media screen and (min-width: 768px) {
  body {
    background-image: url(${ellipseUp}),
      url(${ellipseDown});
    background-repeat: no-repeat, no-repeat;
    background-position: top right -175px, bottom left;
  }
}
@media screen and (min-width: 1280px) {
  body {
    background-position: top right, bottom left;
  }
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

`;
