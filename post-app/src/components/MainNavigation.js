import React from "react";
import { Link } from "react-router-dom";
import "./MainNavigation.css";

function MainNavigation() {
  return (
    <nav className="main-navigation">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/add-post">Add Post</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
        <li>
          <Link to="/auth">Auth</Link>
        </li>
      </ul>
    </nav>
  );
}

export default MainNavigation;
