import React from "react";
import Info from "./Info";

const Notification = ({ state }) => {
  return (
    <>
      {state.map((data, index) => (
        <Info key={index} {...data} />
      ))}
    </>
  );
};

export default Notification;
