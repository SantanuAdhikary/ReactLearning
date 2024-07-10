import React from "react";
import { AirtelContextApi } from "../context/AirtelContext";

const San = () => {
  let { Consumer } = AirtelContextApi;
  return (
    <>
      <h1>san component it will use context api </h1>

      <Consumer>
        {(value) => (
          <div>
            <h1>name : {value.name}</h1>
            <h1>simType : {value.simType} </h1>
            <h1>price : {value.price}</h1>
          </div>
        )}
      </Consumer>
    </>
  );
};

export default San;
