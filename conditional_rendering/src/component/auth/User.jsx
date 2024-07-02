import React from "react";

const User = ({ name, age, company, role }) => {
  switch (role) {
    case "admin":
      return (
        <section style={{ background: "#eee", color: "#333", padding: 10 }}>
          <h1>Admin Panel</h1>
          <h1>{name}</h1>
          <p>{role}</p>
        </section>
      );
    case "user":
      return (
        <section style={{ background: "orange", color: "#fff", padding: 20 }}>
          <h1>User Panel</h1>
          <h1>{name}</h1>
          <p>{role}</p>
        </section>
      );
    default:
      return (
        <section style={{ background: "fff", color: "blue" }}>
          <h1>Default Panel</h1>
        </section>
      );
  }
};

export default User;
