import React from "react";
import { Link } from "react-router-dom";
import "./styles/style.css";

export default function NotFound() {
  return (
    <div className="main">
      <div className="error-content">
        <h1 className="font-italic">OOPS!</h1>
        <h1>Page Not Found</h1>
        <p>The page you are looking for either moved or does not exist.</p>
        <Link className="btn" to="/app">
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
