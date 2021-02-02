import { createGlobalStyle } from 'styled-components';

import yBackground from '../assets/y.png';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #F0F0F5;
    background-image: url(${yBackground});
    background-repeat: no-repeat;
    background-size: 30%;
    height: 100vh;
    background-position: bottom right;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 16px ibm-plex-sans, sans-serif;
  }

  #root {
    margin: 0 auto;
    //padding: 5px 2px;
  }

  button {
    cursor: pointer;
  }
`;