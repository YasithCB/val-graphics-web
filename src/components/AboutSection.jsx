import React from "react";
import "../assets/css/about-section.css";
import img from "../assets/images/view/eye-design.jpg"; // replace with your image
import imgGif from "../assets/images/logo-anim.gif";
import { AOS_CONFIG } from "../db/aosAnimations.js";

export default function AboutSection() {
  return (
    <section id="about" className="about-section container-fluid py-2">
      <div className="row align-items-center">
        {/* Left Image */}
        <div
          className="col-lg-6 p-0 about-img-wrapper"
          {...AOS_CONFIG.FADE_RIGHT}
        >
          <img src={img} alt="About" className="img-fluid about-img" />
          <div className="about-img-overlay"></div>
        </div>

        {/* Right Text */}
        <div className="col-lg-6 p-5 text-white">
          <img src={imgGif} alt="logo-animation" {...AOS_CONFIG.ZOOM_IN} />
          <h2 className="mb-4" {...AOS_CONFIG.FADE_LEFT}>
            <span className="text-primary-custom">About</span> Our Company
          </h2>
          <p className="mb-4 text-white-50" {...AOS_CONFIG.FADE_LEFT}>
            We are a creative studio dedicated to delivering world-class
            branding, signage, and visual solutions that bring ideas to life
            with unmatched precision. By blending innovation, craftsmanship, and
            advanced technology, we design experiences that not only capture
            attention but also leave a lasting impression. Every project we take
            on is an opportunity to push boundaries and redefine excellence.
            <br /> <br />
            Our approach is rooted in creativity, quality, and sophistication.
            From bespoke signage to complete branding strategies, we provide
            solutions that elevate businesses and transform spaces. With a
            passion for detail and a commitment to premium standards, we help
            brands shine brighter, connect deeper, and stand apart in today’s
            competitive market.
          </p>
          <button className="btn-primary-custom" {...AOS_CONFIG.FADE_LEFT}>
            Explore More
          </button>
        </div>
      </div>
    </section>
  );
}
