import React from 'react'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Layouts from './components/pages/navbar/Layouts'
import Home from './components/pages/Home'
import NotFound from './components/pages/NotFound'
import CreateCourse from './components/courses/CreateCourse'
import AllCourse from './components/courses/AllCourse'
import CourseDetails from './components/courses/CourseDetails'
import EditCourse from './components/courses/EditCourse'

const router = createBrowserRouter([
  {
    path:"/",
    element: <Layouts/>,
    children:[
      {
        path:"/",
        element: <Home/>,
        children:[
          {
            index:true,
            element: <AllCourse/>
          },
          {
            path:'/create-course',
            element: <CreateCourse/>
          },
          {
            path:":id",
            element:<CourseDetails/>
          },
          {
            path:"edit/:id",
            element: <EditCourse/>
          }
        ]
      },
      {
        path: "*",
        element: <NotFound/>
      }
    ]
  }
])

const App = () => {
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App