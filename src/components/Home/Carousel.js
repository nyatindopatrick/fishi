import React from "react";
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView
} from "mdbreact";
import { Button } from "antd";
import { Link } from "react-router-dom";
import feeds from "../../static/images/feeds.jpg";
import consult from "../../static/images/consult.JPG";

export default function Carousels({ services }) {
  return (
    <div className="main-hero position-relative">
      <MDBCarousel
        activeItem={1}
        length={3}
        showControls={true}
        showIndicators={true}
        className="h-100 carousel_sliders"
      >
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <MDBView>
              <img
                className="d-block h-100"
                src="https://images.unsplash.com/photo-1527154300610-c1a126502eac?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="First slide"
              />
              <div className="carousel-overlay">
                <div className="carousel_text">
                  <h4>WE PROVIDE QUALITY FISH FINGERLINGS</h4>
                  <p>Site delivery also available</p>
                  <Link to="/app/products/fingerlings">
                    <Button type="primary">Order Now</Button>
                  </Link>
                </div>
              </div>
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
              <img className="d-block h-100" src={feeds} alt="Second slide" />
              <div className="carousel-overlay">
                <div className="carousel_text">
                  <h4>WE PROVIDE QUALITY FISH FINGERLINGS</h4>
                  <p>Site delivery also available</p>
                  <Button type="primary">Order Now</Button>
                </div>
              </div>
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBView>
              <img className="d-block h-100" src={consult} alt="Third slide" />
              <div className="carousel-overlay">
                <div className="carousel_text">
                  <h4>WE PROVIDE QUALITY FISH FINGERLINGS</h4>
                  <p>Site delivery also available</p>
                  <Button type="primary">Order Now</Button>
                </div>
              </div>
            </MDBView>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
      <div className="header-info h-100 position-absolute">
        {services.map(({ title, description }, i) => {
          return (
            <div key={i} className="px-3 py-3">
              <h5>{title}</h5>
              <p>{description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
