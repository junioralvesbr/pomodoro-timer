import { ThemeProvider } from 'styled-components'
import { GlobalStyles, ResetCss, defaultTheme } from './styles/'
import { RouterProvider } from 'react-router-dom'
import { routes } from './routes'
import { CyclesContextProvider } from './contexts/CyclesContainer'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <ResetCss />
      <GlobalStyles />
      <CyclesContextProvider>
        <RouterProvider router={routes} />
      </CyclesContextProvider>
    </ThemeProvider>
  )
}

export default App
