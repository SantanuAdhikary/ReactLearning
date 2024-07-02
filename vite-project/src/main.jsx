//! to create react application we need two important modules
//! 1. react ,  2. reactDOM

import React from "react"
import ReactDOM from "react-dom"

import {createRoot} from "react-dom/client"

console.log("React Library",React)     //? returns object
// console.log("ReactDOM Library",ReactDom) //? returns object





//! deprecated

// ReactDOM.render(<h1>hello react</h1>,document.getElementById("root"),()=>{
//     console.log('successfully dom connected')
// })

//! using ReactDOM.createRoot()

// ReactDOM.createRoot(document.getElementById("root"))
//        .render(<h1>React18 onwards use createRoot function...</h1>)

//! using createRoot()

createRoot(document.getElementById("root"))
       .render(<h1>React18 onwards use createRoot function...</h1>)
