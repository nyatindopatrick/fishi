import React from "react";
import "./styles/login.css";

export default function Login() {
  return (
    <div className="d-flex login justify-content-center p-0 m-0">
      <div className="container login-container">
        <div className="left position-relative">
          <h2>VICTORIA AQUACULTURE</h2>
          <p>Get quality fingerlings verified by the experts.</p>
          <div className="center-circle position-absolute">
            <img
              className="w-100"
              src="https://i.dlpng.com/static/png/4764040-fish-logo-png-99-images-in-collection-page-2-fish-logo-png-512_512_preview.png"
              alt="logo"
            />
          </div>
        </div>
        <div className="login-main w-100 h-100">
          <h2 className="text-center">Login</h2>
          <div className="login-details">
            <input
              className="form-control w-50 my-3"
              type="email"
              name="email"
              placeholder="Email"
            />
            <input
              className="form-control w-50 my-2"
              type="password"
              name="password"
              placeholder="Password"
            />
            <button type="submit" className="btn btn-primary btn-fishi">
              SIGN IN
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
