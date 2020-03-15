import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import logo from "../../static/images/logo.png";
import "./styles/styles.css";

export default function Navbar() {
  const [cart, setCart] = useState(0);
  useEffect(() => {
    loadCart();
  }, []);
  const loadCart = () => {
    const myCart = JSON.parse(localStorage.getItem("items"));
    return setCart(myCart?myCart.length:0);
  };
  return (
    <nav className="navigation">
      <div className="bottom-nav">
        <Link to="/app">
          <img className="logo mx-3" src={logo} alt="logo" />
        </Link>
        <ul className="my-auto mx-auto" id="collapse">
          <li>
            <Link to="/app">Home</Link>
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
          <Link to="/app/cart" className="position-relative">
            <i className="fas fa-shopping-cart"></i><p className="cart_items position-absolute">{cart}</p>
          </Link>
        </ul>
      </div>
    </nav>
  );
}
