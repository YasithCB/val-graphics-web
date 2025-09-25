import React, { useContext } from "react";
import "../assets/css/header.css";
import logoWhite from "../assets/images/logo-white-horiz.png";
import { FaPhoneAlt, FaUser } from "react-icons/fa";
import { PHONE } from "../db/constants.js";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext.jsx";
import { AOS_CONFIG } from "../db/aosAnimations.js";

export default function Header() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/"); // 👈 redirect to home (or "/user/login")
  };

  return (
    <header className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
      <div className="container">
        {/* Logo */}
        <a className="navbar-brand" href="#home" {...AOS_CONFIG.FADE_RIGHT}>
          <img
            src={logoWhite}
            alt="val-logo"
            height={50}
            // style={{
            //   filter: "drop-shadow(0 0 1px rgba(255,255,255,1))",
            // }}
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
          {...AOS_CONFIG.FADE_LEFT}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu Links */}
        <div
          className="collapse navbar-collapse"
          id="mainNav"
          {...AOS_CONFIG.FADE_LEFT}
        >
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
          </ul>

          <div className="d-flex flex-column flex-md-row justify-content-center gap-2">
            {/* Inquiry Button */}
            <a href="#inquiry" className="btn-primary-custom ms-lg-3">
              INQUIRY NOW →
            </a>
            <a
              href={`tel:${PHONE}`}
              title="Call us now"
              className="btn-primary-outline-custom ms-lg-2"
            >
              <FaPhoneAlt className="call-icon" />
            </a>

            {user ? (
              <button
                className="btn-primary-outline-custom ms-lg-1"
                onClick={handleLogout}
              >
                <FaUser className="logout-icon" /> Logout
              </button>
            ) : (
              <Link
                className="btn-primary-outline-custom ms-lg-1"
                to="/user/login"
              >
                <FaUser className="user-icon" /> Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
