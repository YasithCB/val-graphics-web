import React from "react";

export default function ServiceCard({ title, image, description }) {
  return (
    <div className="card service-card h-100 w-100 p-0 text-white">
      {/* Background image */}
      <div
        className="card-img service-card-bg h-100"
        style={{ backgroundImage: `url(${image})` }}
      ></div>

      {/* Glass strip (title always visible, expands on hover) */}
      <div className="service-card-glass">
        <h4 className="mb-2 text-white">{title}</h4>
        <p className="mb-0 service-card-desc">{description}</p>
      </div>
    </div>
  );
}
