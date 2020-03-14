import React from "react";
import "./styles/style.css";

export default function Footer() {
  return (
    <div className="footer">
      <div>
        <h2>VICTORIA AQUACULTURE</h2>
        <p>
          Prosperity is the leading financial establishment providing
          high-quality international banking services. We are always ready to
          partner with you by offering full financial support to individuals and
          companies worldwide.
        </p>
      </div>
      <div>
        <h5>Contact Information</h5>
        <ul>
          <li>
            <span>
              <i className="fas fa-map-marker">&nbsp;</i>
              Nyalenda, Kisumu
            </span>
          </li>
          <li>
            <span>
              <i className="fas fa-phone"></i>
              &nbsp; 0703827300
            </span>
          </li>
          <li>
            <span>
              <i className="fas fa-at">&nbsp;</i>
              mail@victoria-fisheries.com
            </span>
          </li>
        </ul>
      </div>
      <div>
        <h5>Newsletter</h5>
        <p>
          Subscribe to our newsletter to get updates about our latest products.
        </p>
        <div className="input d-flex justify-content-center w-100">
          <span>
            <input
              className="form-control"
              type="email"
              name="email"
              autoComplete="off"
              placeholder="Enter your email"
            />
          </span>
          <button className="btn btn-info mx-1">Submit</button>
        </div>
      </div>
    </div>
  );
}
