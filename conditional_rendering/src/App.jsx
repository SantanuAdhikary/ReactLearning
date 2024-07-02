//!  using 'if' statement

import { useState } from "react";

// import React, { useState } from 'react';

// const App = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(true);

//   if (isLoggedIn) {
//     return <h1>Welcome back!</h1>;
//   } else {
//     return <h1>Please sign in.</h1>;
//   }
// };

// export default App;

//! using ternary operator

// import React, { useState } from 'react';

// const App = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   return (
//     <div>
//       {isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please sign in.</h1>}
//     </div>
//   );
// };

// export default App;

//!  using logical && operator

// import React, { useState } from 'react';

// const App = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(true);

//   return (
//     <div>
//       {isLoggedIn && <h1>Welcome back!</h1>}
//     </div>
//   );
// };

// export default App;

//!  inline conditional Rendering with variable

// import React, { useState } from 'react';

// const App = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(true);

//   let message;
//   if (isLoggedIn) {
//     message = <h1>Welcome back!</h1>;
//   } else {
//     message = <h1>Please sign in.</h1>;
//   }

//   return (
//     <div>
//       {message}
//     </div>
//   );
// };

// export default App;

//!  Conditional Rendering With Swtich Statement

// import React, { useState } from 'react';
// const App = () => {
//   const [status, setStatus] = useState('loaded'); // can be 'loading', 'loaded', 'error'

//   let content;
//   switch (status) {
//     case 'loading':
//       content = <h1>Loading...</h1>;
//       break;
//     case 'loaded':
//       content = <h1>Data Loaded!</h1>;
//       break;
//     case 'error':
//       content = <h1>Error Loading Data</h1>;
//       break;
//     default:
//       content = <h1>Unknown Status</h1>;
//   }

//   return (
//     <div>
//       {content}
//     </div>
//   );
// };
// export default App;

//!  Conditional Rendering With IIFE

// import React, { useState } from 'react';

// const App = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   return (
//     <div>
//       {(() => {
//         if (isLoggedIn) {
//           return <h1>Welcome back!</h1>;
//         } else {
//           return <h1>Please sign in.</h1>;
//         }
//       })()}
//     </div>
//   );
// };

// export default App;

//!  Example : 1  login and logout

// import  { useState } from 'react'
// import Navbar from './component/navbar/Navbar'

// const App = () => {
//   const [loggedIn, SetisLoggedIn] = useState(false);
//   return (
//     <div>
//        <Navbar data={{loggedIn,SetisLoggedIn}}/>
//     </div>
//   )
// }

// export default App

//! Example 2 : Products

// import React, { useState } from 'react'
// import Products from './component/products/Products'
// import DATA from './data.json'

// const App = () => {
//   let [state,setState] = useState(DATA)
//   return (
//     <section id="productsBlock">

//       <article className='container'>
//         <Products state={state}/>
//       </article>

//     </section>
//   )
// }

// export default App

//! Example 3 : else-if in conditional rendering

// const App = () => {

//   const[mode,setMode] = useState('b');
//   const [color,setColor] = useState('green');

//   if(mode=== 'a' && color==='red')
//     {
//       return <h1 style={{color:color}}>Mode is A</h1>
//     }
//     else if(mode=== 'b' && color==='green')
//     {
//       return <h1 style={{color:color}}>Mode is B</h1>
//     }
//     else if(mode=== 'c' && color==='yellow')
//     {
//       return <h1 style={{color:color}}>Mode is C</h1>
//     }
//     else{
//       return <h1> No Matching keyword</h1>
//     }
// }

// export default App

//! Example 4 : using Switch Statement

// import React from 'react'

// const App = () => {
//   const[mode,setMode] = useState('c');
//   const [color,setColor] = useState('yellow');
//    switch((mode,color))
//    {

//     case "a" && "red":
//         return <h1 style={{color}}>You have selected A</h1>
//     case "b" && "green":
//         return <h1 style={{color}}>You have selected B</h1>
//     case "c" && "yellow":
//         return <h1 style={{color:color}}>You have selected C</h1>
//     default:
//         return <h1>No mode is selected here...</h1>
//    }

// }

// export default App

//! Example 5

// import Users from "./component/auth/Users"

// const App = () => {
//   let [state,setState] = useState([
//     {
//       id:1,
//       name:"vk",
//       age:20,
//       company:"bcci",
//       role:"user"
//     },
//     {
//       id:2,
//       name:"rohit",
//       age:21,
//       company:"bcci",
//       role:"admin"
//     }
//   ])
//   return (
//     <div>
//       <Users data={state}/>
//     </div>
//   )
// }
// export default App

//!               Using IIFE In Conditional Rendering

// import Notification from "./component/messages/Notification";
// const App = () => {
//   let [state, setState] = useState([
//     {
//       text: "info text",
//       status: "info",
//     },
//     {
//       text: "warning text",
//       status: "warning",
//     },
//     {
//       text: "error text",
//       status: "error",
//     },
//   ]);
//   return (
//     <div>
//       <Notification state={state}/>
//     </div>
//   );
// };
// export default App;

//! using Short-Circuit AND Operator &&

// const App = () => {
//   let data = ["hello", "hi"];

//   let [message, setMessage] = useState(data);
//   return (
//     <>
//       <div>
//         Notifications
//         {message.length >= 1 && <sup>{message.length}</sup>}
//       </div>
//                  //! with ternary
//       <div>
//         Notifications
//         {message.length >= 1 ? <sup>{message.length}</sup>:""}
//       </div>
//     </>
//   );
// };

// export default App;




//!  when there is null how prevent from rendering



// const App = () => {
//   let [data,setData] = useState(null);

//   (async function(){
//     let res = await window.fetch("https://api.github.com/users");
//     let finalVal = await res.json();
//     setData(finalVal);
//   })();
//   return (
//     <div>
//       {
//         data===null
//         ? "loading..." 
//         : data.map(user=>(
//           <div key={user.id}>
//             <li>{user.login} </li>
//           </div>
//         ))
//       }
//     </div>
//   )
// }

// export default App