import React from 'react'
import ReactDOM from 'react-dom/client'

//! this is normal element . 
//! createElement is used to create any element (native react)

// const element = React.createElement("h1",null,"I'm react without jsx");

//! this is jsx element 

// const elementWithJsx = <h1>I am jsx</h1>

//! here we are rendering jsx element 

// ReactDOM.createRoot(document.getElementById('root')).render(elementWithJsx);

//! here we are rendering normal element 

// ReactDOM.createRoot(document.getElementById('root')).render(element);

// console.log(element) //? object 
// console.log(elementWithJsx) //? object 

//! React element Object consists of 
  //? $$typeof => it's a special property in reactjs for safety and security purpose
  //? props
  //? key, ref, type                                                                               

//! when we are returning more than one element we have to use () 

// const List =()=>{
//   return <ul>
//     <li>rs</li>
//     <li>vk</li>
//     <li>kl</li>
//     </ul> 
// }

//! we have to give parent element for same level elements

// ReactDOM.createRoot(document.getElementById("root")).render(<List/>)

// ReactDOM.createRoot(document.getElementById("root")).render(
//  <div className='container'>                    //? it will add extra node
//   <li>hello</li>    
//   <li>hi</li>
//   <li>Bye</li>
//  </div>
// )

//! we can use Fragment , it won't add extra node to the DOM
//! here we can add only property (key).
//! we can't use id,className etc.

// ReactDOM.createRoot(document.getElementById("root")).render(
//  <React.Fragment key="1">                    //? it won't add extra node
//   <li>hello</li>    
//   <li>hi</li>
//   <li>Bye</li>
//  </React.Fragment>
// )

//! we can use fragment short hand for this <> is used , but here we can't use any property

// ReactDOM.createRoot(document.getElementById("root")).render(
//  <>                    
//   <li>hello</li>    
//   <li>hi</li>
//   <li>Bye</li>
//  </>
// )


  

// ! jsx expression 


// let num1 = 10;
// let num2 = 20;

// let fname='virat';
// let lname='kohli'
// let des='he is an Indian Cricket player. In IPL he plays for RCB'


// ReactDOM.createRoot(document.getElementById("root")).render(
//   <>
//   <h1>addition is : {num1+num2}</h1>
//   <h1> Player name is {fname} </h1>
//   <h2> last name is {lname}</h2>        //! we can use any method also
//   <p> {des.slice(0,10)} </p>

//   <p> {var x="san"}</p>              //! we can't declare variable
//   </>
// )


//! we can't use loop or if else in jsx expression

// let arr= ['a','b','c','d']


// ReactDOM.createRoot(document.getElementById("root")).render(
//   <>
//             {
//               for(let i=0;i<arr.length;i++)
//                 {
//                      //! not possible
//                 }
//             }
//   </>
// )

//! to overcome this we have to use higher order function 

// let arr= ['rohit','vk','shami','bumrah']


// ReactDOM.createRoot(document.getElementById("root")).render(
//   <>
//            {
//             arr.map(x=>{
//               return(
//                 <>
//                 <li>{x}</li>
//                 </>
//               )
//             })
//            }
//   </>
// )


//! we can't use if-else in jsx for that we have to use ternary operator

// let isAvailable = true 

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <>
//   {isAvailable? "I am available":"I'm not available"}
//   </>
// )

//! we can't use null,undefined,boolean value in jsx 

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <>
//   {true}  //! it won't give anything
//   </>
// )

//! in this way we can use them 

let isAvailable = true 
let isNullValue = null
let isUndefinedValue = undefined

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
  {isAvailable? "I am available":"I'm not available"}
  {isNullValue? "I am null":"I'm not null"}
  {isUndefinedValue? "I am undefined":"I'm not undefined"}
  </>
)