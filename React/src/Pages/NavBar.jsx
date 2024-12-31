import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <ul style={{ display: "flex", listStyleType: "none", padding: 0 }}>
        <li style={{ marginRight: "20px" }}>
          <Link to="/" style={{ textDecoration: "none", color: "blue" }}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" style={{ textDecoration: "none", color: "blue" }}>
            About
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
