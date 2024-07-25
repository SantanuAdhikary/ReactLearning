import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import AllUsers from './AllUsers'

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>

      <main className='dashboard-content'>
        <ul>
          <li>
            <Link to='/'>Users</Link>
            <Link to='/products'>Products</Link>
            <Link to='/players'>Players</Link>
          </li>
        </ul>
      </main>

      <Outlet/>

      {/* <AllUsers/> */}
      </div>
    
  )
}

export default Dashboard