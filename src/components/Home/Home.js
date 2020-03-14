import React from "react";
import "./styles/style.css";
import { services, products } from "./data";
import { Link } from "react-router-dom";
import Carousel from "./Carousel";
export default function Home() {
  
  return (
    <div className="homepage">
      <Carousel services={services} />
      <div className="services">
        {products.map(({ title, image, link }, i) => {
          return (
            <Link to={link} className="product-listing" key={i}>
              <img
                src={
                  image.slice(0, 4) === "http"
                    ? image
                    : require(`../../static/images/${image}`)
                }
                alt=""
              />
              <div className="label d-flex">
                <h3>{title}</h3>
                <span>
                  <i className="fas fa-caret-right"></i>
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
