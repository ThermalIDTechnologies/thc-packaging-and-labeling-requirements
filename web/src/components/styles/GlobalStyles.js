import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    font-family: Raleway, sans-serif;
    font-size: 16px;
    line-height: 1.9;
    min-height: 100%;
    margin: 0;
    padding: 0;
  }

  h1,
  h2,
  h3 {
    ${"" /* font-family: 'Oswald', sans-serif;  */}
    ${"" /* font-weight: 600; */}
    line-height: 1.3;
  }

  td {
    font-size: 90%;
  }

  @media screen and (min-width: 480px) {
    body {
      font-size: 120%;
    }
    
    td {
      font-size: 100%;
    }
}
`

export default GlobalStyle
