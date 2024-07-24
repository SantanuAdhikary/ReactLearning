// import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import PageNotFound from "./components/PageNotFound";
// import Navbar from "./components/Navbar";

// import { BrowserRouter, Routes, Route } from "react-router-dom";

// const App = () => {
//   return (
//     <BrowserRouter>
//       <Navbar/>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="*" element={<PageNotFound />} />
//       </Routes>
//     </BrowserRouter>
//   );
// };

// export default App;


//!  if we need data api follow this syntax

import React from 'react'

import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Layout from "./components/layouts/Layout";

//! createBrowserRouter enables data api's like loaders,actions, fetcher and many more 

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      {
        path:"/",
        element: <Home/>
    },
      {
        path:"/about",
        element: <About/>
      },
      {
        path:"/contact",
        element: <Contact/>
      }
    ]
  },
  
])

const App = () => {
  return (
    <RouterProvider router={router}>
      
    </RouterProvider>
  )
}

export default App