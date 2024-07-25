import React from 'react'
import NavbarContainer from '../pages/sidenavbar/NavbarContainer'
import { Outlet } from 'react-router-dom'

const Root = () => {
  return (
    <section id='dashboard'>
        <article className="container">
            <aside className="sidebar">
                <NavbarContainer/>
            </aside>
            <aside className="content">
                <Outlet/>
            </aside>
        </article>
    </section>
  )
}

export default Root