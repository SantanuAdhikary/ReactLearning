// import React, { Component } from 'react'
// import Child from './Child'

// export default class Parent extends Component {

//     state= {
//         count :0
//     }

//     Increment =()=>{
//         this.setState({
//            count : this.state.count+1
//         })
//     }
//   render() {
//     return (
//       <div>
//         <h1>{this.state.count} from parent </h1>
//         <Child name='vk' age='36' func={this.Increment}/>
//       </div>
//     )
//   }
// }

//! props.children 

// import React from 'react'
// import Child from './Child'

// const Parent = () => {
//   return (
//     <div>
//       <Child name='rohit'>
//         <h3>I am from mumbai</h3> //! this is children
//       </Child>
//       <Child name='virat'>
//         <h3>I am from bangalore</h3>
//       </Child>
//       <Child name='Gautam'>
        
//       </Child>
//     </div>
//   )
// }

// export default Parent



//! default props in fbc


// import React from 'react';
// import Child from './Child';

// const Parent = () => {
//   return (
//     <div>
//       <Child message="hello"/>
//       <Child />
//     </div>
//   );
// };

// export default Parent;



//! prop-types 


// import React from 'react';
// import Child from './Child';

// const Parent = () => {
//   return (
//     <div>
//       <Child
//         title="Hello, World!"
//         age={37}
//         user={{ name: 'vk', email: 'vk@example.com' }}
//         items={[1, 2, 3]}
//         onClick={() => alert('Button clicked!')}
//         isActive={true}
//         value="string"
//         tags={['react', 'node', 'express']}
//       />
//     </div>
//   );
// };

// export default Parent;



import React, { useState } from 'react'

const Parent = () => {

    let array = [undefined,function(){}];
    console.log(array[1])
   console.log(useState()[1]) 
  return (
    <div>
      
    </div>
  )
}

export default Parent






