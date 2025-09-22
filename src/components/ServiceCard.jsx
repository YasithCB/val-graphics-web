import React from "react";

export default function ServiceCard({ title, image, description }) {
    // Split first word from the rest
    const [firstWord, ...rest] = title.split(" ");

    return (
        <div className="card service-card h-100 w-100 p-0 text-white">
            {/* Background image */}
            <div
                className="card-img service-card-bg h-100"
                style={{ backgroundImage: `url(${image})` }}
            ></div>

            {/* Glass strip (title always visible, expands on hover) */}
            <div className="service-card-glass">
                <h5 className="mb-2">
                    <span className="text-black">{firstWord}</span>{" "}
                    {rest.join(" ")}
                </h5>
                <p className="mb-0 service-card-desc">{description}</p>
            </div>
        </div>
    );
}
