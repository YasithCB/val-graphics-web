import React from "react";
import "../assets/css/header.css";
import logoWhite from '../assets/images/logo-white.svg'

export default function Header() {
  return (
      <header className="navbar navbar-expand-lg navbar-light shadow-sm">
          <div className="container">
              {/* Logo */}
              <a
                  className={`navbar-brand ms-5`}
                  href="#"
              >
                  <img
                      src={logoWhite}
                      alt="MediaStore Logo"
                      height="50" // Adjust to desired header size
                  />
              </a>

              {/* Mobile Toggle */}
              <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#mainNav"
                  aria-controls="mainNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
              >
                  <span className="navbar-toggler-icon"></span>
              </button>

              {/* Menu Links */}
              <div className="collapse navbar-collapse" id="mainNav">
                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-2">
                      <li className="nav-item">
                          <a className="nav-link" href="#home">
                              Home
                          </a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link" href="#services">
                              Services
                          </a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link" href="#about">
                              About
                          </a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link" href="#contact">
                              Contact Us
                          </a>
                      </li>
                  </ul>

                  {/* Inquiry Button */}
                  <a
                      href="#"
                      className="btn-primary-custom ms-lg-3"
                  >
                      INQUIRY NOW →
                  </a>
              </div>
          </div>
      </header>
  );
}
