// import React from 'react'
// import ClassComp from '../component/ClassComp'
// import FunctionalComp from '../hooks/FunctionalComp'

// const App = () => {
//   return (
//     <div>

//       <ClassComp/>
//       <hr />
//       <FunctionalComp/>
//     </div>
//   )
// }

// export default App

//!  example for axios and useEffect

import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  let [product, setProduct] = useState(null);

  //! with window.fetch()
  // let fetchProducts = async()=>{
  //   let data = await window.fetch("https://fakestoreapi.com/products");
  //   let finalProduct = await data.json();
  //   setProduct(finalProduct);
  // }
  //! with axios
  let fetchProducts = async () => {
    let { data } = await axios.get("https://fakestoreapi.com/products");
    setProduct(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div className="flex-container">
      {product === null ? (
        <h1>Loading...</h1>
      ) : (
        product.map((p) => (
          <div className="container" key={p.id}>
            <img src={p.image} alt={p.title} height={200} width={200} />
            <h3>{p.title}</h3>
          </div>
        ))
      )}
    </div>
  );
};

export default App;


