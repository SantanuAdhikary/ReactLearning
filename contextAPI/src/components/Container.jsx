import React from 'react'
import { useContext } from 'react'
import { themeContextApi } from '../context/ThemeContext'

const Container = () => {

    let {theme, toggleTheme} = useContext(themeContextApi)
    // console.log(theme.background);

  return (
    <div style={{width:"100%",background:theme.background, color:theme.color,padding:'20px'}}>

            <button onClick={toggleTheme}>toggle</button>
            <h1> I am container Block</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil rem distinctio minima explicabo omnis beatae unde voluptate esse autem optio.</p>
    </div>
  )
}

export default Container