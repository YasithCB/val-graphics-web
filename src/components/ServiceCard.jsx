import React from "react";
import { AOS_CONFIG } from "../db/aosAnimations.js";

export default function ServiceCard({ title, image, description }) {
  return (
    <div
      className="card service-card h-100 w-100 p-0 text-regular-custom"
      {...(window.innerWidth >= 992 ? AOS_CONFIG.FLIP_LEFT : {})}
    >
      {/* Background image */}
      <div
        className="card-img service-card-bg h-100"
        style={{ backgroundImage: `url(${image})` }}
      ></div>

      {/* Glass strip (title always visible, expands on hover) */}
      <div className="service-card-glass">
        <h4 className="mb-2 text-regular-custom">{title}</h4>
        <p className="mb-0 service-card-desc text-regular-custom-50">
          {description}
        </p>
      </div>
    </div>
  );
}
