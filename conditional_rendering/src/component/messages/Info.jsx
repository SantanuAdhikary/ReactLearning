import React from "react";

const Info = ({ text, status }) => {
  return (
    <>
      {(function () {
        switch (status) {
          case "info":
            return <p>{text}</p>;
          case "warning":
            return <p>{text}</p>;
          case "error":
            return <p>{text}</p>;
          default:
            return "no status found here";
        }
      })()}
    </>
  );
};

export default Info;
