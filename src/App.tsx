import { ThemeProvider } from "styled-components"
import { GlobalStyles, ResetCss, defaultTheme } from "./styles/"

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <ResetCss />
      <GlobalStyles />
      <h1>hello world</h1>
    </ThemeProvider>
  )
}

export default App
