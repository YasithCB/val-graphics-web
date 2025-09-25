import React from "react";
import ServiceCard from "./ServiceCard.jsx";
import "../assets/css/card-grid.css";
import { SERVICES_DATA_ALL } from "../db/data.js";
import { Link } from "react-router-dom";
import { AOS_CONFIG } from "../db/aosAnimations.js";
import "../assets/css/card-grid.css";

export default function ServicesSection() {
  return (
    <div className="card-grid container vw-100 p-0 mt-5">
      <div className="mb-5  ">
        <h2 className="text-regular-custom" {...AOS_CONFIG.FADE_LEFT}>
          <span className="text-primary-custom">All</span> Creative Solutions
          Under One Roof
        </h2>
        <p className="text-white-50" {...AOS_CONFIG.FADE_LEFT}>
          From design to execution, we provide complete creative solutions in
          one place — saving you time, cost, and effort
        </p>
      </div>

      <div className="custom-grid h-100 m-0">
        {SERVICES_DATA_ALL.categories.map((service, i) => (
          <Link
            key={i}
            className={`service-item ${i === 0 ? "span-2-rows" : ""}`}
            to={`/services/${service.name.toLowerCase().replace(/\s+/g, "-")}`}
          >
            <ServiceCard
              title={service.name}
              description={service.description}
              image={service.image}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
