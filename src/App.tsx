import { ThemeProvider } from 'styled-components'
import { GlobalStyles, ResetCss, defaultTheme } from './styles/'
import { Header } from './components/Header'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <ResetCss />
      <GlobalStyles />
      <Header />
    </ThemeProvider>
  )
}

export default App
