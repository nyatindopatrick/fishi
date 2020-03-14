import React from "react";
import { Link } from "react-router-dom";
import "./styles/style.css";

export default function Procucts({ data }) {
  return (
    <div>
      <div className="filters">
        <div className="input position-relative">
          <span>
            <i className="fas fa-search position-absolute mt-3"></i>
          </span>
          <input
            className="form-control w-25"
            type="search"
            name="search"
            placeholder="search..."
          />
        </div>
      </div>
      <div className="mx-5 row" id="ads">
        {data &&
          data.map(({ title, body, image, link, price }, i) => (
            <div className="col-md-4 my-3" key={i}>
              <div className="card rounded">
                <div className="card-image">
                  <img
                    className="img-fluid"
                    src={
                      image.slice(0, 4) === "http"
                        ? image
                        : require(`../../static/images/${image}`)
                    }
                    alt="Alternate Text"
                  />
                </div>
                <div className="card-image-overlay m-auto">
                  <strong className="card-detail-badge">{`Ksh. ${price} /${
                    title.toLowerCase().includes("feeds") ? "Kg" : "fish"
                  }`}</strong>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5>{title}</h5>
                  </div>
                  <div className="d-flex">
                    <a className="ad-btn" href="#">
                      View
                    </a>
                    <a className="ad-btn" href="#">
                      Add to cart <span><i className="fas fa-shopping-cart"></i></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
