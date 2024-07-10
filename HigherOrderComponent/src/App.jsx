// import Greeting from "./components/Greeting";
// import withMessage from "./components/withMessage";


// const GreetingWithMessage = withMessage(Greeting);

// const App = () => {
//   return (
//     <div>
//       <GreetingWithMessage name="John" />
//     </div>
//   );
// };

// export default App;


import React from 'react'
import San from './components/San'
import hoc from './components/hoc'

//! here we are calling the function hoc() and passing the component San as argument
let HocWithSan = hoc(San);

const App = () => {
  return (
    <div>
      {/* <San message="good morning"/> */}  
      <HocWithSan message="good morning"/>
    </div>
  )
}

export default App

