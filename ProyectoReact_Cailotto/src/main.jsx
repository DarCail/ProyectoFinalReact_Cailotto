import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import CartContent from './components/CartContent/CartContent.jsx'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx'
 
import App from './App.jsx'
import './index.css'

const router = createBrowserRouter([
  { 
    path: '/',
    element: <App />,
  },
  { 
    path: '/cart',
    element: <CartContent />,
  },
  { 
    path: '/producto/:id',
    element: <ItemDetailContainer />,
  }
])
  

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
