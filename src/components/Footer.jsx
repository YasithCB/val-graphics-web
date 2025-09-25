// src/components/Footer.jsx
import React, { forwardRef } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaSnapchatGhost,
  FaTwitter,
  FaPaperPlane,
} from "react-icons/fa";
import "../assets/css/footer.css";

import robotWhite from "../assets/images/view/robot-white-top.png";
import logoWhite from "../assets/images/logo-white-horiz.png";

const Footer = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="footer-container">
      {/*<img src={robotWhite} alt="robot-white" className="robot-white" />*/}
      <footer className="footer-wrapper text-light pt-5 pb-3">
        <div className="container">
          <div className="row gy-4">
            {/* Brand */}
            <div className="col-lg-3">
              <img
                src={logoWhite}
                alt="VAL"
                className="footer-logo col-md-9 mb-3 px-5 px-lg-0"
              />
              <p className="small px-3">
                Creative agency in Abu Dhabi delivering branding, signage, web
                development and event solutions that push your brand further.
              </p>
            </div>

            {/* Quick Links */}
            <div className="col-md-6 col-lg-3">
              <h5 className="footer-title text-center">Quick Links</h5>
              <ul className="footer-links text-center">
                <li>
                  <a href="/home">Home</a>
                </li>
                <li>
                  <a href="/about">About Us</a>
                </li>
                <li>
                  <a href="/services">Services</a>
                </li>
                <li>
                  <a href="/contact">Contact</a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="col-md-6 col-lg-3">
              <h5 className="footer-title text-center text-lg-start">
                Get in Touch
              </h5>
              <ul className="footer-contact text-center text-lg-start">
                <li>
                  <FaPhoneAlt /> 050 230 31 30
                </li>
                <li>
                  <FaWhatsapp /> 050 230 31 30
                </li>
                <li>
                  <FaEnvelope /> info@valgraphics.com
                </li>
                <li>
                  <FaMapMarkerAlt /> Abu Dhabi, UAE
                </li>
              </ul>
            </div>

            {/* Newsletter / CTA */}
            <div className="col-lg-3">
              <h5 className="footer-title">Stay Inspired</h5>
              <p className="small">Join our creative updates & design tips.</p>
              <form className="d-flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="form-control me-2"
                />
                <button className="btn-primary-custom">
                  <FaPaperPlane />
                </button>
              </form>

              <div className="footer-social mt-3 d-flex justify-content-lg-start justify-content-center gap-3">
                <a href="#">
                  <FaFacebookF />
                </a>
                <a href="#">
                  <FaInstagram />
                </a>
                <a href="#">
                  <FaTiktok />
                </a>
                <a href="#">
                  <FaSnapchatGhost />
                </a>
                <a href="#">
                  <FaTwitter />
                </a>
              </div>
            </div>
          </div>
          <hr className="footer-divider my-4" />
          <p className="text-center small mb-0">
            © {new Date().getFullYear()} Val Graphics · Crafted with creativity
            in Abu Dhabi
          </p>
        </div>
      </footer>
    </div>
  );
});

export default Footer;
