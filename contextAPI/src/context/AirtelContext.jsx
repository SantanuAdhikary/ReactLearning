import React, { createContext } from 'react'


//! first step we have to create contextApi by using createContext() 
//! if we want to use Consumer then we hv to export this 

export const AirtelContextApi = createContext("")

//! now we need provider 

let {Provider} = AirtelContextApi;

//! now we have to use that 
//! in provider we have to give value 

const AirtelProvider = ({children})=>{
    return <Provider value={{name:"airtel", simType:"micro", price:500}}> 
        {children}
    </Provider>
}

export default AirtelProvider;

