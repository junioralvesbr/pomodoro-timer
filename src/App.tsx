import { ThemeProvider } from 'styled-components'
import { GlobalStyles, ResetCss, defaultTheme } from './styles/'
import { RouterProvider } from 'react-router-dom'
import { routes } from './routes'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <ResetCss />
      <GlobalStyles />
      <RouterProvider router={routes} />
    </ThemeProvider>
  )
}

export default App
