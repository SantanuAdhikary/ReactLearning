import React from 'react'
import Root from './components/Root'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './pages/Home'
import Dashboard from './components/users/Dashboard'
import AllUsers from './components/users/AllUsers'
import Products from './components/products/Products'
import Players from './components/players/Players'

const router = createBrowserRouter([
  {
    path:"/",
    element:<Root/>,
    children: [
      {
        path: "/",
        element: <Dashboard/>,
        children: [
          {
            index:true,
            element: <AllUsers/>          //! nested routing
          },
          {
            path:"/products",
            element: <Products/>          
          },
          {
            path:"/players",
            element: <Players/>          
          }
        ]
      },
      
    ]
  }
  
])

const App = () => {
  return (
    <RouterProvider router={router}>
    
    </RouterProvider>
  )
}

export default App