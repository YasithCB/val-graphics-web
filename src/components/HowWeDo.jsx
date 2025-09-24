import React from "react";
import { FaPaintBrush, FaPrint, FaTools, FaWrench } from "react-icons/fa";
import { AOS_CONFIG } from "../db/aosAnimations.js"; // icons

const HowWeDo = () => {
  const services = [
    {
      icon: <FaPaintBrush size={48} />,
      title: "Design",
      desc: "Our in-house design team has decades of experience, which means expert design and top-notch customer service.",
    },
    {
      icon: <FaPrint size={48} />,
      title: "Print",
      desc: "High-quality prints with premium materials to ensure vibrant colors and long-lasting durability.",
    },
    {
      icon: <FaTools size={48} />,
      title: "Install",
      desc: "Our skilled installers ensure a flawless, professional finish on every project we handle.",
    },
    {
      icon: <FaWrench size={48} />,
      title: "Service & Maintenance",
      desc: "Ongoing support and upkeep to stay fresh and long-lasting.",
    },
  ];

  return (
    <div className="container d-flex flex-wrap gap-4 justify-content-center mt-4">
      {services.map((service, index) => (
        <div
          key={index}
          className="service-box col-12 col-md p-1 p-md-4 text-center h-100"
          {...AOS_CONFIG.FADE_UP}
        >
          <div className="icon-wrapper text-primary-custom mb-3">
            {service.icon}
          </div>
          <h3 className="text-regular-custom">{service.title}</h3>
          <p className="text-regular-custom-50">{service.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default HowWeDo;
