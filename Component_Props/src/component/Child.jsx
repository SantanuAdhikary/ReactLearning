//! taking premetive data as props

// import React from 'react'

// const Child = (props) => {
// let {name,salary,isAvailable,isNull,isUndefined} = props
// console.log(typeof name);
// console.log(typeof salary);
// console.log(typeof isAvailable);
// console.log(typeof isNull);
// console.log(typeof isUndefined);
//   return (
//     <>
//         <h1> {name}</h1>
//         <p>SALARY : {salary}</p>
//       <p>IsAvailable : {isAvailable}</p>
//        //! it won't show anything on the UI for that we have to use ternary operator

//       <p>IsAvailable : {isAvailable?"available":"not available"}</p>
//       <p>isNull : {isNull? "null":"not null"}</p>
//       <p>isUndefined: {isUndefined?"undefined":"not undefined"}</p>

//     </>
//   )
// }

// export default Child

//! taking object as props

// import React from "react";

// const Child = (props) => {
//   let { name, salary, isAvailable, isNull, isUndefined } = props.objectProps;
//   return (
//     <div>
//       <>
//         <h1> {name}</h1>
//         <p>SALARY : {salary}</p>
//         <p>IsAvailable : {isAvailable ? "available" : "not available"}</p>
//         <p>isNull : {isNull ? "null" : "not null"}</p>
//         <p>isUndefined: {isUndefined ? "undefined" : "not undefined"}</p>
//       </>
//     </div>
//   );
// };

// export default Child;


//! taking nested object as props

// import React from 'react'

// const Child = (props) => {
//     let {facebook,google} = props.data.frontend.libraries;
//   return (
//     <>
//       <p>Facebook : {facebook}</p>
//       <p>Google : {google} </p>
//     </>
//   )
// }

// export default Child


//! taking array as props 

// import React, { Fragment } from 'react'

// const Child = ({data}) => {
//     console.log(props.data)
//     console.log(typeof props.data) //object
//     console.log(Array.isArray(props.data))//true
//   return (
//     <div>
//       {
//        data.map((lang,index)=>{
//         return(
//             <Fragment key={index}>
//                 <p>{lang}</p>
//             </Fragment>
//         )
//        })
//       }
//     </div>
//   )
// }

// export default Child

//! second way 

// import React from 'react';

// const Child = ({ data }) => {
//   return (
//     <div>
//       {data.map((lang, index) => (
//         <p key={index}>{lang}</p>
//       ))}
//     </div>
//   );
// }

// export default Child;


//! taking array of object as props 


import React from 'react'

const Child = (props) => {

  // console.log(data);
  // console.log(typeof data)
    // console.log(props)
    // console.log(typeof props)
  return (
    <>
      {
        props.data.map(course=>
            (
                <div key={course.course_id}>
                    <p>CourseName: {course.course_name}</p>
                    <p>Duration: {course.duration} </p>
                    <p>Price: {course.price} </p>
                    <p>Language: {course.languages.map(lang=>(
                        <div key={course.course_id}>
                           <span>{lang}</span> 
                        </div>
                    ))}</p>

                    <p>trainer: {course.trainer.map(tutor=>(
                        <div key={course.course_id}>
                           <span>{tutor}</span> 
                        </div>
                    ))}</p>

                    <p>Branch: {course.branch.map(x=>(
                        <div key={course.course_id}>
                            <span>{x}</span>
                        </div>
                    ))} </p>
                    <hr/>
                </div>
            )
        )
      }
    </>
  )
}

export default Child

//! taking function as props 

// import React from 'react';

// const Child = ({ handleClick }) => {
//     console.log(typeof handleClick)    // function
//   const message = "Hello from Child!";

//   return (
//     <div>
//       <button onClick={() => handleClick(message)}>Click Me</button>
//     </div>
//   );
// };

// export default Child;

//! taking json as props

// import React from 'react'

// const Child = (props) => {
//     console.log(props)
//   return (
//     <>
//       {
//         props.jsonData.map(user=>(
//             <div key={user.id}>
//                 <img src={user.avatar_url} alt="avatar image" />
//             </div>
//         ))
//       }
//     </>
//   )
// }

// export default Child


//! object destructure in props


// import React from 'react'
// import { type } from './../../../conditional_rendering/node_modules/postcss/lib/node.d';

// const Child = ({
//     name,
//     duration,
//     trainer,
//     details:{
//         branch,
//         price,
//         discount: {
//             percent:{
//                 btr_branch
//             }
//         }
//     }
//   }) => {
//   return (  
//     <>
//       <h1>{name}</h1>
//       <p>Duration:{duration} </p>
//       <p>Trainer:{trainer} </p>
//       <p>Branch:{branch} </p>
//       <p>Price:{price} </p>
//       <p>Discount:{btr_branch} </p>
   
//     </>
//   )
// }

// export default Child
