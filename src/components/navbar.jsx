import React, { Component } from "react";
import { Link } from "react-router-dom";

const headerStyle = {
  background: "#111",
  color: "#FFF",
  textAlign: "center",
  padding: "7px"
};

function NavBar() {
  return (
    <div style={headerStyle}>
      <h2 style={{ margin: "0px", padding: "0px" }}>Todo List</h2>
      <small>
        <Link to="/" style={{ color: "#FFF" }}>
          Home
        </Link>{" "}
        |{" "}
        <Link to="/about-us" style={{ color: "#FFF" }}>
          About Us
        </Link>
      </small>
    </div>
  );
}

export default NavBar;
