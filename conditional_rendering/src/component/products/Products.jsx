//! using if-else

// import Item from './Item'
// const Products = ({state }) => {
//     console.log(state)

//     //! checking data is coming or not
//     if(!state)
//         {
//             return <h1>Loading....</h1>
//         }
//     //! checking data present or not
//     if(!state.length){
//         return <h1>Sorry, the product is empty</h1>
//     }
//     else{
//         return(
//             <ul>
//                 {
//                     state.map(product=>(
//                         <div key={product.id}>
//                             {/* <Item key={product.id} product={product}/> */}
//                             <Item key={product.id} {...product}/>
//                         </div>
//                     ))
//                 }
//             </ul>) }}
// export default Products

//! using Ternary operator

import React from "react";

const Products = ({ state }) => {
  return (
    <div>
      {!state ? (
        <h1>Loading...</h1>
      ) : !state.length ? (
        <h1>Sorry, the product is empty</h1>
      ) : (
        <ul>
          {state.map((product) => (
            <div key={product.id}>             
              <Item key={product.id} {...product} />
            </div>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Products;
