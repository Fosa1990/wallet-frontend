import { createGlobalStyle } from 'styled-components';
import circeRegular from '../assets/fonts/Circe-Regular.otf';
import circeBold from '../assets/fonts/Circe-Bold.otf';
import segoe from '../assets/fonts/segoeui.ttf';
import segoeBold from '../assets/fonts/segoeuib.ttf';
import ellipseUp from '../assets/images/ellipse-up.png';
import ellipseDown from '../assets/images/ellipse-down.png';

export default createGlobalStyle`

@font-face {
  font-family: 'Segoe UI';
  src: local('Segoe UI'), url(${segoe}) format('truetype');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Segoe UI';
  src: local('Segoe UI'), url(${segoeBold}) format('truetype');
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Circe';
  src: local('Circe'), local('Circe-Regular'),
    url(${circeRegular}) format('truetype');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Circe';
  src: local('Circe'), local('Circe-Bold'),
    url(${circeBold}) format('truetype');
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}

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
   display: flex;
   flex-direction: column;
  margin: 0;
  font-family: 'Circle', sans-serif;
  font-size: 12px;
  background-color: #e7eaf2;
  min-height: 100vh;
}


@media screen and (min-width: 768px) {
  body {
     background-color: #E7EAF2;
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

 #root{
    display: flex;
    flex-direction: column;
    height: 100%;
    flex-grow: 1;
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
