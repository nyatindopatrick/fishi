import React from "react";
import { Link } from "react-router-dom";
import "./styles/style.css";
import fish from "../../assets/images/fish.png";
import { services, steps } from "./data";

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
      <div className="steps p-5">
        {steps.map(({ title, body, icon }, i) => {
          return (
            <div key={i}>
              <h5>
                <span>
                  <i className={`fas ${icon}`}></i>&nbsp;
                </span>
                {title}
              </h5>
              <p>{body}</p>
              <p></p>
            </div>
          );
        })}
      </div>

      <div className="description ">
        <div className="position-relative py-5">
          <h4 className="text-right">WHAT WE CAN DO FOR YOU</h4>
          <img className="position-absolute fish_pic w-75" src={fish} alt="" />
        </div>
        <div className="description-boxes py-5 mx-5 ml-5">
          {services.map(({ title, description }, i) => {
            return (
              <div key={i}>
                <h5>{title}</h5>
                <p>{description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
