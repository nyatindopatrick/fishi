import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import "./styles/styles.css";

export default function Navbar() {
  return (
    <nav className="navigation">
      <div className="top-nav">
        <Link to="/">
          <img className="logo mx-3" src={logo} alt="logo" />
        </Link>
        <ul className="ml-auto">
          <li>
            <a
              className="w-100"
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img
                src="https://image.flaticon.com/icons/svg/145/145802.svg"
                alt=""
              />
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img
                src="https://image.flaticon.com/icons/svg/145/145807.svg"
                alt=""
              />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img
                src="https://image.flaticon.com/icons/svg/145/145812.svg"
                alt=""
              />
            </a>
          </li>
        </ul>
      </div>
      <div className="bottom-nav">
        <ul className="my-auto mx-auto" id="collapse">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/app/about">About</Link>
          </li>
          <li>
            <Link to="/app/products">Products</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/app/register">Register</Link>
          </li>
          <li>
            <Link to="/app/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
