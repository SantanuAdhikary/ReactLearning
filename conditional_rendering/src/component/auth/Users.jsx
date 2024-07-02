import React from "react";
import User from "./User";

const Users = ({ data }) => {
  if (!data) {
    return <h1>Loading...</h1>;
  }
  if (!data.length) {
    return <h1>Sorry no user found</h1>;
  } else {
    return (
      <div>
        {data.map((user) => (
          <div key={user.id}>
            <User key={user.id} {...user} />
          </div>
        ))}
      </div>
    );
  }
};

export default Users;
