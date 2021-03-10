import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: #F8F8F8;
    color: #11273a;
    -webkit-font-smoothing : antialised;
  }

  input:-webkit-autofill {
    background-color: #FAFFBD !important;
  }

  body, html, input, button {
    font-family: 'Montserrat', "Open Sans", 'Roboto Slab', serif;
  }


    h1, h2, h3,h4,h5,h6, strong {
      font-weight: 500;

    }

  li, ol {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }`
  ;