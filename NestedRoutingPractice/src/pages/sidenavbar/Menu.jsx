import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <div className='sideMenu'>
        <div className="logo">TestYantra</div>
        <div className="menu">
            <ul>
                <li>
                    <Link to="/">Dashboard</Link>
                </li>
                <li>
                    <Link to="/">User</Link>
                </li>
                <li>
                    <Link to="/products">Products</Link>
                </li>
                <li>
                    <Link to="/players">Players</Link>
                </li>
                
            </ul>
        </div>
    </div>
  )
}

export default Menu