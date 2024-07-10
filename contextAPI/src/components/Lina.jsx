import React from 'react'
import { AirtelContextApi } from '../context/AirtelContext'
import { useContext } from 'react'

const Lina = () => {

     //! we have to use useContext and we have to pass the context api
     //! and destructure the values

    let {name,price,simType} = useContext(AirtelContextApi)
  return (
    
    <div>
        <h1>Lina componet using useContext</h1>
        <h1>Name : {name}</h1>
        <h1>price : {price}</h1>
        <h1>simType : {simType}</h1>
    </div>
  )
}

export default Lina

