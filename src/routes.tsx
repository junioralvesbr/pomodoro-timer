import { createBrowserRouter } from 'react-router-dom'
import { Home } from './pages/Home'
import { History } from './pages/History'
import { LayoutDefault } from './layout/Default'

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <LayoutDefault />,
    errorElement: <div>Não foi possivel encontrar essa pagina</div>,
    children: [
      {
        path: '/',
        element: <Home />,
        errorElement: <div>Não foi possivel encontrar essa pagina</div>,
      },
      {
        path: '/history',
        element: <History />,
        errorElement: <div>Não foi possivel encontrar essa pagina</div>,
      },
    ],
  },
])
