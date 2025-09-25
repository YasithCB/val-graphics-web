import React from "react";
import CardGrid from "./CardGrid.jsx";
import "../assets/css/card-grid.css";
import "../assets/css/hero-carousel.css";

export default function HeroSection() {
  return (
    <section id="home" className="pb-3">
      {/*<div id="heroCarousel" className="carousel slide" data-bs-ride="carousel">*/}
      {/*  /!* Indicators *!/*/}
      {/*  <div className="carousel-indicators">*/}
      {/*    <button*/}
      {/*      type="button"*/}
      {/*      data-bs-target="#heroCarousel"*/}
      {/*      data-bs-slide-to="0"*/}
      {/*      className="active"*/}
      {/*      aria-current="true"*/}
      {/*      aria-label="Slide 1"*/}
      {/*    ></button>*/}
      {/*    <button*/}
      {/*      type="button"*/}
      {/*      data-bs-target="#heroCarousel"*/}
      {/*      data-bs-slide-to="1"*/}
      {/*      aria-label="Slide 2"*/}
      {/*    ></button>*/}
      {/*    <button*/}
      {/*      type="button"*/}
      {/*      data-bs-target="#heroCarousel"*/}
      {/*      data-bs-slide-to="2"*/}
      {/*      aria-label="Slide 3"*/}
      {/*    ></button>*/}
      {/*  </div>*/}

      {/*  /!* Slides *!/*/}
      {/*  <div className="carousel-inner">*/}
      {/*    <div className="carousel-item active">*/}
      {/*      <img*/}
      {/*        src="https://picsum.photos/1200/400?random=1"*/}
      {/*        className="d-block w-100"*/}
      {/*        alt="First Slide"*/}
      {/*        style={{ height: "500px", objectFit: "cover" }}*/}
      {/*      />*/}
      {/*      <div className="carousel-caption d-none d-md-block">*/}
      {/*        <h5>First Slide</h5>*/}
      {/*        <p>Some quick example text.</p>*/}
      {/*      </div>*/}
      {/*    </div>*/}

      {/*    <div className="carousel-item">*/}
      {/*      <img*/}
      {/*        src="https://picsum.photos/1200/400?random=2"*/}
      {/*        className="d-block w-100"*/}
      {/*        alt="Second Slide"*/}
      {/*        style={{ height: "500px", objectFit: "cover" }}*/}
      {/*      />*/}
      {/*      <div className="carousel-caption d-none d-md-block">*/}
      {/*        <h5>Second Slide</h5>*/}
      {/*        <p>More text here.</p>*/}
      {/*      </div>*/}
      {/*    </div>*/}

      {/*    <div className="carousel-item">*/}
      {/*      <img*/}
      {/*        src="https://picsum.photos/1200/400?random=3"*/}
      {/*        className="d-block w-100"*/}
      {/*        alt="Third Slide"*/}
      {/*        style={{ height: "500px", objectFit: "cover" }}*/}
      {/*      />*/}
      {/*      <div className="carousel-caption d-none d-md-block">*/}
      {/*        <h5>Third Slide</h5>*/}
      {/*        <p>Even more text.</p>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </div>*/}

      {/*  /!* Controls *!/*/}
      {/*  <button*/}
      {/*    className="carousel-control-prev"*/}
      {/*    type="button"*/}
      {/*    data-bs-target="#heroCarousel"*/}
      {/*    data-bs-slide="prev"*/}
      {/*  >*/}
      {/*    <span*/}
      {/*      className="carousel-control-prev-icon"*/}
      {/*      aria-hidden="true"*/}
      {/*    ></span>*/}
      {/*    <span className="visually-hidden">Previous</span>*/}
      {/*  </button>*/}
      {/*  <button*/}
      {/*    className="carousel-control-next"*/}
      {/*    type="button"*/}
      {/*    data-bs-target="#heroCarousel"*/}
      {/*    data-bs-slide="next"*/}
      {/*  >*/}
      {/*    <span*/}
      {/*      className="carousel-control-next-icon"*/}
      {/*      aria-hidden="true"*/}
      {/*    ></span>*/}
      {/*    <span className="visually-hidden">Next</span>*/}
      {/*  </button>*/}
      {/*</div>*/}

      <CardGrid />
    </section>
  );
}
