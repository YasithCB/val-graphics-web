// pages/ServiceDetailsPage.jsx
import React from "react";
import { useParams } from "react-router-dom";
import { SERVICES_DATA_ALL } from "../db/data.js";

import "../assets/css/service-details-page.css";
import SubCategoryCard from "../components/service-category-page/SubCategoryCard.jsx";

export default function ServiceDetailsPage() {
  const { categoryName } = useParams();

  const category = SERVICES_DATA_ALL.categories.find(
    (c) => c.name.toLowerCase().replace(/\s+/g, "-") === categoryName,
  );

  console.log("category");
  console.log(category);

  // Split first word from the rest
  const [firstWord, ...rest] = category.name.split(" ");

  if (!category) {
    return <div className="container py-5">Service not found</div>;
  }

  return (
    <div className="pb-5">
      {/* Hero Section */}
      <section
        className="fullwidth-section d-flex align-items-center text-center text-white"
        style={{ backgroundImage: `url(${category.image})` }}
      >
        <div className="container">
          <h1 className="mb-3">
            <span className="text-primary-custom">{firstWord}</span>{" "}
            {rest.join(" ")}
          </h1>
          <p className="lead">{category.description}</p>
        </div>
      </section>

      {/* Subcategories */}
      <div className="container">
        <div className="d-flex justify-content-center gap-3">
          {category.subcategories.map((item, idx) => (
            <SubCategoryCard item={item} key={idx} />
          ))}
        </div>
      </div>
    </div>
  );
}
