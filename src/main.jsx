import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './components/Home/Home'
import MainLayout from './components/Layout/MainLayout'
import OrderReview from './components/Orders/OrderReview'

const router = createBrowserRouter([
  {
    path:"/",
    element:<MainLayout />,
    children:[
      {
        path:'/',
        element:<Home />
      },
      {
        path:'review',
        element:<OrderReview />
      }
    ]

  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
