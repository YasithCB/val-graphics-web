import React from "react";
import ServiceCard from "./ServiceCard.jsx";
import "../assets/css/card-grid.css";
import { SERVICES_DATA_ALL } from "../db/data.js";
import { Link } from "react-router-dom";

export default function CardGrid() {
  return (
    <div className="card-grid container vw-100 p-0 mt-3">
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
