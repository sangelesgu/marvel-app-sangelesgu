import React from "react";
import { Link, NavLink } from "react-router-dom";
import marvel from "./marvel.svg";
import "./styles/Navbar.css";

export const Navbar = () => {
  //
  return (
    <nav>
      <input type="checkbox" id="check" />
      <label htmlFor="check" className="checkbtn">
        <i className="fas fa-bars"></i>
      </label>
      <Link className="navbar-brand" to="/">
        <img
          className="d-inline-block align-text-top"
          src={marvel}
          alt=""
          width="120"
          height="40"
        />
      </Link>
      <ul>
        <li>
          <NavLink to="/characters">Characters</NavLink>
        </li>
      </ul>
    </nav>
  );
};
