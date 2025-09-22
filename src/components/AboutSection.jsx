import React from "react";
import "../assets/css/about-section.css";
import img from "../assets/images/view/indoor-signage.png"; // replace with your image
import imgGif from "../assets/images/gif/logo-white.gif"; // replace with your image

export default function AboutSection() {
    return (
        <section className="about-section container-fluid py-5">
            <div className="row align-items-center">
                {/* Left Image */}
                <div className="col-md-6 p-0 about-img-wrapper">
                    <img src={img} alt="About" className="img-fluid about-img" />
                    <div className="about-img-overlay"></div>
                </div>

                {/* Right Text */}
                <div className="col-md-6 p-5 text-white">
                    <img src={imgGif} alt=""/>
                    <h2 className="mb-4"><span className='text-primary-custom'>About</span> Our Company</h2>
                    <p className="mb-4 text-white-50">
                        We specialize in providing high-quality branding, signage, and
                        creative solutions that bring your ideas to life. Our team
                        combines innovation, craftsmanship, and modern technology to
                        deliver results that exceed expectations.
                    </p>
                    <button className="btn-primary-custom">Explore More</button>
                </div>
            </div>
        </section>
    );
}
