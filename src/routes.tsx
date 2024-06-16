
import Contato from './pages/contato/index.tsx'
import Inicial from './pages/inicial/index.tsx'
import Home from './pages/home/index.tsx'
import Sobre from './pages/sobre/index.tsx'
import Taref from './pages/taref/index.tsx'
import NotFound from './pages/not-found/index.tsx'
import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([

  { path: '/taref', element: <Taref />},
  { path: '/inicial', element: <Inicial />},
  { path: '/contato', element: <Contato />},
  { path: '/', element: <Home />, errorElement: <NotFound />},
  { path: '/sobre', element: <Sobre />}
])

export default router