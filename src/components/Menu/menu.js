import React from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";

const Menu = () => {
  return (
    <ul>
      <li>
        {" "}
        <Link to="/">Home</Link>{" "}
      </li>
      <li>
        {" "}
        <Link to="/add/">Add user </Link>
      </li>
      <li>
        {" "}
        <Link to="/about/">About us </Link>
      </li>
    </ul>
  );
};

export default Menu;
