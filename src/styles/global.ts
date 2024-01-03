import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  :root {
    box-sizing: border-box;
    line-height: 1.5;
    
    color-scheme: light dark;
    
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  body, input, textarea, button {
    font-family: "Roboto", sans-serif;
    font-size: 16px;
    font-weight: 400;
  }

  body {
    background-color: ${(props) => props.theme['--gray-900']};
    color: ${(props) => props.theme['--gray-100']};
  }

  :focus {
    outline: none;
    box-shadow: 0 0 0 2px ${(props) => props.theme['green-500']};
  }
`
