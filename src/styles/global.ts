import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    margin: 0px;
    padding: 0px;
    box-sizing: inherit;
  }
  html {
      font-size: 62.5%; /* = 10/16 */
  }
  html, body, #__next {
    height: 100%;
  }
  body {
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, 
    'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 
    'Open Sans', 'Helvetica Neue', sans-serif
  }
`

export default GlobalStyles
