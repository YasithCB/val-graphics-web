import React, { useEffect } from "react";
import { Carousel as BsCarousel } from "bootstrap";

import img1 from "../assets/images/carousel/c1-truck.png";
import img2 from "../assets/images/carousel/c2-printer.jpg";
import img3 from "../assets/images/carousel/c3-interior design.webp";
import img4 from "../assets/images/carousel/c4-signage.webp";
import "../assets/css/carousel.css";

export default function Carousel() {
  useEffect(() => {
    const el = document.querySelector("#heroCarousel");
    if (el) {
      new BsCarousel(el, {
        interval: 3000, // autoplay speed
        ride: "carousel", // auto start
        wrap: true, // loop infinitely
      });
    }
  }, []);

  return (
    <section id="home" className="pb-3">
      <div id="heroCarousel" className="carousel slide">
        {/* Indicators */}
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#heroCarousel"
            data-bs-slide-to="0"
            className="active"
          ></button>
          <button
            type="button"
            data-bs-target="#heroCarousel"
            data-bs-slide-to="1"
          ></button>
          <button
            type="button"
            data-bs-target="#heroCarousel"
            data-bs-slide-to="2"
          ></button>
          <button
            type="button"
            data-bs-target="#heroCarousel"
            data-bs-slide-to="3"
          ></button>
        </div>

        {/* Slides */}
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={img1}
              className="d-block w-100"
              alt="Slide 1"
              style={{ height: "600px", objectFit: "cover" }}
            />
            <div className="carousel-overlay"></div>
            <div className="carousel-caption d-none d-md-block">
              <h5>Branding</h5>
              <p>
                Transform vehicles into moving billboards with eye-catching
                wraps that boost brand visibility.
              </p>
            </div>
          </div>

          <div className="carousel-item">
            <img
              src={img2}
              className="d-block w-100"
              alt="Slide 2"
              style={{ height: "600px", objectFit: "cover" }}
            />
            <div className="carousel-overlay"></div>
            <div className="carousel-caption d-none d-md-block">
              <h5>Digital Printing</h5>
              <p>
                We provide all kinds of digital printing services with vibrant
                quality and professional finishes.
              </p>
            </div>
          </div>

          <div className="carousel-item">
            <img
              src={img3}
              className="d-block w-100"
              alt="Slide 3"
              style={{ height: "600px", objectFit: "cover" }}
            />
            <div className="carousel-overlay"></div>
            <div className="carousel-caption d-none d-md-block">
              <h5>Interior Designing</h5>
              <p>
                Creative interior designing solutions blending style, comfort,
                and functionality to transform spaces beautifully.
              </p>
            </div>
          </div>

          <div className="carousel-item">
            <img
              src={img4}
              className="d-block w-100"
              alt="Slide 4"
              style={{ height: "600px", objectFit: "cover" }}
            />
            <div className="carousel-overlay"></div>
            <div className="carousel-caption d-none d-md-block">
              <h5>Billboards & Signages</h5>
              <p>
                High-impact billboards and signages designed to attract
                attention and effectively promote your brand.
              </p>
            </div>
          </div>
        </div>

        {/* Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
}
