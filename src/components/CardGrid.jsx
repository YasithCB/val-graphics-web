import React from "react";
import ServiceCard from "./ServiceCard.jsx";
import "../assets/css/card-grid.css";
import { SERVICES } from "../db/data.js";
import { Link } from "react-router-dom";

export default function CardGrid() {
  return (
    <div className="container card-grid vw-100 p-0">
      <div className="row row-cols-3 g-4 h-100 m-0">
        {SERVICES.map((service, i) => (
          <Link
            key={i}
            className="col d-flex"
            to={`/services/${service.title.toLowerCase().replace(/\s+/g, "-")}`}
          >
            <ServiceCard
              title={service.title}
              description={service.description}
              image={service.image}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
