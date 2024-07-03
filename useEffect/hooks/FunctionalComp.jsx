import React, { useEffect } from 'react'
import { useState } from 'react'

const FunctionalComp = () => {
    let [count,setCount] = useState(0);

    //! syntax of useEffect
                // useEffect(setUp, dependencies?)
    
   //! without dependency useEffect is equal to render method in classbased component
    // useEffect(()=>{
    //     document.title = `from fbc ${count}`;
    //     console.log("useEffect also re-rendered");
    // })

  //! with empty array as dependency it will work as ComponentDidMount()
    useEffect(()=>{
        document.title = `from fbc ${count}`;
        console.log("check re-rendered or not");
    },[])
    
  //! with dependency it will work as ComponentDidUpdate()
    useEffect(()=>{
        document.title = `from fbc ${count}`;
        console.log("check re-rendered or not");
    },[count])
  return (
    <div>
        <h1>Functional Based Component</h1>
        <h1>{count}</h1>
        <button onClick={()=>setCount(count+1)}>Increase</button>
    </div>
  )
}

export default FunctionalComp