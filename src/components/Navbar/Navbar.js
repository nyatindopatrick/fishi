import React from "react";
import { Link } from "react-router-dom";
import "./styles/styles.css";

export default function Navbar() {
  return (
    <nav className="navigation">
      <Link to="/">FISHI</Link>
      <ul className="my-auto ml-auto" id="collapse">
        <li>
          <Link to="/">
            <span>
              <i className="fas fa-home"></i>
            </span>
            Home
          </Link>
        </li>
        <li>
          <Link to="/app/about">
            <span>
              <i className="fas fa-file-alt"></i>
            </span>
            About
          </Link>
        </li>
        <li>
          <Link to="/app/products">
            <span>
              <i className="fas fa-shopping-basket"></i>
            </span>
            Products
          </Link>
        </li>
        <li>
          <Link to="/login">
            <span>
              <i className="fas fa-sign-in-alt"></i>
            </span>
            Log in
          </Link>
        </li>
        <li>
          <Link to="/app/register">
            <span>
              <i className="fas fa-user-plus"></i>
            </span>
            Register
          </Link>
        </li>
        <li>
          <Link to="/app/contact">
            <span>
              <i className="fas fa-phone"></i>
            </span>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
