

import React, { useState } from 'react'

const Fbs = () => {

    //! Assigning object as Initial Value
 const[username,setUsername] = useState({name:"virat"})

   //! Assigning array as Initial Value
 const [language,setLanguage] = useState(['javascript','react','mongodb','node','express','redux'])

 


  return (
    <>
         <p>Name is : {username.name}</p>
        <button onClick={()=> setUsername({name:"rohit"})}>click</button>

        <h3>Languages are:</h3>

         {
            language.map((lang,index)=>(
                <li key={index}>{lang}</li>
            ))
         }
    </>)}

export default Fbs


