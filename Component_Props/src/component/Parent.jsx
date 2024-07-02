
//!  sending premetive data as props

// import React from 'react'
// import Child from './Child'

// const Parent = () => {
//   return (
//     <>
//         //! except string every thing should be passed as expression
//       <Child 
//       name="shami"
//       salary={1000000}
//       isAvailable={false}
//       isNull={null}
//       isUndefined={undefined}
//       />     
//     </>
//   )
// }
// export default Parent





//! sending object as props

// import React from 'react'
// import Child from './Child';

// const Parent = () => {

//   return (
//     <div>
//       <Child objectProps = {{
//       name:"shami",
//       salary:1000000,
//       isAvailable:false,
//       isNull:null,
//       isUndefined:undefined
//   }}/>
//     </div>
//   )
// }

// export default Parent


//! sending nested object as props

// import React from 'react'
// import Child from './Child'

// const Parent = () => {
//   let course = {
//     frontend:{
//       libraries:{
//         facebook:"react",
//         google:"angular"
//       }
//     }
//   }
//   return (
//     <>
//       <Child data={course}/>
//     </>
//   )
// }

// export default Parent


//! sending array as props 

// import React from 'react'
// import Child from './Child'

// const Parent = () => {
//   return (
//     <div>
//       <Child data={["react","node","express","mongodb"]}/>
//     </div>
//   )
// }

// export default Parent


//! sending array of objects 

import React from 'react'
import Child from './Child'

const Parent = () => {

  let courses = [
    {
      course_id:1,
      course_name:"java",
      trainer:['salt'],
      duration:3,
      price:20000,
      branch :["btr","btm"],
      languages:["java","spring"]
    },
    {
      course_id:2,
      course_name:"javascript",
      trainer:['salt','narayan'],
      duration:1,
      price:10000,
      branch :["kolkata","chennai"],
      languages:["javascript","html","css"]
    },
    {
      course_id:3,
      course_name:"reactjs",
      trainer:['venky','russel'],
      duration:2,
      price:25000,
      branch :["mumbai","punjub"],
      languages:["react","mongodb","node"]
    }
  ]
  return (
    <div>
      <Child data={courses}/>
    </div>
  )
}

export default Parent


//! sending function as props 


// import React from 'react';
// import Child from './Child';

// const Parent = () => {
//   const handleClick = (message) => {
//     alert(`Message from Child: ${message}`);
//   };

//   return (
//     <div>
//       <Child handleClick={handleClick} />
//     </div>
//   );
// };

// export default Parent;


//! sending json as props 

// import React from 'react'
// import JSON from './data.json'
// import Child from './Child'

// const Parent = () => {
//   return (
//     <div>
//       <Child jsonData={JSON}/>
//     </div>
//   )
// }

// export default Parent


// !  object sending 


// import React from 'react'
// import Child from './Child'



// const Parent = () => {

//   let obj={
//     name: "javaFullStack",
//     duration:3,
//     trainer:"vk",
//     details: {
//       branch :"btr",
//       price:2000,
//       discount:{
//         percent:{
//           btr_branch:80
//         }
//       }
//     }
//   }
//   return (
//     <>
//       <Child {...obj} />
//     </>
//   )
// }

// export default Parent




