import React from "react";
import ServiceCard from "./ServiceCard.jsx";
import '../assets/css/card-grid.css'
import {SERVICES} from "../db/Constants.js";

export default function CardGrid() {
    return (
        <div className="container card-grid vw-100 p-0">
            <div className="row row-cols-3 g-4 h-100 m-0">
                {SERVICES.map((c, i) => (
                    <div key={i} className="col d-flex">
                        <ServiceCard title={c.title} description={c.description} image={c.image} />
                    </div>
                ))}
            </div>
        </div>
    );
}
