import React from "react";
import {
  FaHandshake,
  FaInfoCircle,
  FaShoppingCart,
  FaUserTie,
} from "react-icons/fa";
import { AOS_CONFIG } from "../db/aosAnimations.js"; // icons
import "../assets/css/how-we-do.css";

const Departments = () => {
  const services = [
    {
      icon: <FaHandshake size={38} />,
      title: "Sales Department",
      desc: "Dedicated to understanding client needs, offering tailored solutions, and ensuring smooth project execution with a customer-first approach.",
    },
    {
      icon: <FaShoppingCart size={32} />,
      title: "Purchasing Department",
      desc: "Manages sourcing and procurement of high-quality materials and services, ensuring cost efficiency, reliability, and timely supply for all projects.",
    },
    {
      icon: <FaUserTie size={32} />,
      title: "Career Department",
      desc: "Focused on talent acquisition, employee growth, and training. Provides opportunities for career development and fosters a supportive work culture.",
    },
    {
      icon: <FaInfoCircle size={32} />,
      title: "Information Department",
      desc: "Handles communication, client queries, and knowledge sharing. Ensures accurate information flow internally and externally to support business operations.",
    },
  ];

  return (
    <div className="container d-flex flex-wrap gap-lg-4 justify-content-center mt-4">
      {services.map((service, index) => (
        <div
          key={index}
          className="service-box col-12 col-md-6 col-lg p-1 p-md-4 text-center h-100"
          {...AOS_CONFIG.FADE_UP}
        >
          <div className="icon-wrapper text-primary-custom mb-3">
            {service.icon}
          </div>
          <h4 className="text-regular-custom">{service.title}</h4>
          <p className="text-regular-custom-50">{service.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default Departments;
