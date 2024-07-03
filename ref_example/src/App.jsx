// import React, { Component } from "react";

// export default class App extends Component {
//   constructor() {
//     super();
//     this.divRef = React.createRef();
//     this.pRef = React.createRef();
//   }
 
//   componentDidMount()
//   {
//     //! using ref 
//     this.pRef.current.style.background = "red";
//     this.pRef.current.style.color = "white";
//     this.pRef.current.style.padding = "10px";

//     //! using getElementById
//     let para = document.getElementById('para');
//     para.style.background = "purple";
//     para.style.color="white";
//     para.style.padding = "10px"
//   }

//   render() {
//     return (
//       <div ref={this.divRef}>
//         <p ref={this.pRef}>this is paragraph</p>
//         <p id="para">hello para</p>
//       </div>
//     );
//   }
// }



//!  second example with fbc

// import React, { useState, useRef } from 'react';

// const App = () => {
//   const [val, setVal] = useState("");
//   const inputRef = useRef(null);

//   const changeInputColor = () => {
//     setVal("san");
//     if (inputRef.current) {
//       inputRef.current.style.background = "purple";
//       inputRef.current.style.color = "white";
//     }
//   };

//   return (
//     <div>
//       <input 
//         type="text"
//         placeholder='change my color'
//         ref={inputRef}
//         value={val}
//         onChange={(e) => setVal(e.target.value)} //! Handle input change to keep state in sync
//       />
//       <button onClick={changeInputColor}>Change input color</button>
//     </div>
//   );
// };
// export default App;



//! third example with fbc 

// import React, { createRef , useRef} from 'react'
// const App = () => {
//   // let usernameRef = createRef();
//   // let passwordRef = createRef();

//             //! in fbc we can use useRef instead of createRef()
//   let usernameRef = useRef();
//   let passwordRef = useRef();

//   let getData =(e)=>{
//     e.preventDefault();
//     let username = usernameRef.current.value;
//     let password = passwordRef.current.value;
//     console.log({username,password})
//   }
//   return (
//     <div>
//       <form >
//         <input 
//         type="text"
//         placeholder='enter your name' 
//         ref={usernameRef}/>
//         <input 
//         type="text"
//         placeholder='enter your password' 
//         ref={passwordRef}/>
//         <button type="submit" onClick={getData}>submit</button>
//       </form>
//     </div>
//   )}
// export default App



//!   media play back 


import React from 'react'
import Video from './components/Video'

const App = () => {
  return (
    <div>
      <Video/>
    </div>
  )
}

export default App


