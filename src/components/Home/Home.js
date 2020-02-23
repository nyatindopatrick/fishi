import React from "react";
import { Link } from "react-router-dom";
import "./styles/style.css";

export default function Home() {
  return (
    <div className="homepage">
      <div className="hero">
        <div className="quality">
          <h5>WE PROVIDE</h5>
          <h2>BEST QUALITY FINGERLINGS</h2>
          <button className="btn">Order now</button>
        </div>
      </div>
      <div className="steps">
        <h3 className="text-center py-3">
          MAKE YOUR ORDER IN THESE EASY STEPS
        </h3>
        <div className="step-details container">
          <div>
            <h5>Explore</h5>
            <img
              className="p-2"
              src="https://image.flaticon.com/icons/svg/889/889844.svg"
              alt=""
            />
            <p>Explore the fantastic products and services we provide.</p>
            <Link to="/app/products">
              <button className="btn btn-primary">View Products</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
