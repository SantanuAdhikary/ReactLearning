import React from 'react'
import NavbarContainer from './NavbarContainer'
import { Outlet } from 'react-router-dom'
import {Toaster} from 'react-hot-toast'

const Layouts = () => {
  return (
    <section id="main-block">
        <article className='container'>
          <NavbarContainer/>
          <Toaster/>
          <Outlet/>

        </article>
    </section>
  )
}

export default Layouts