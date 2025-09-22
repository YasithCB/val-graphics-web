import React, { useState } from "react";
import "../assets/css/estimator-section.css";
import {SERVICES_DATA_ALL} from "../db/Constants.js";

export default function EstimatorSection() {
    const [category, setCategory] = useState("");
    const [subcategory, setSubcategory] = useState("");
    const [material, setMaterial] = useState("");
    const [qty, setQty] = useState("");
    const [price, setPrice] = useState(null);
    const [processType, setProcessType] = useState("");

    // find current category + subcategory
    const currentCategory = SERVICES_DATA_ALL.categories.find(c => c.name === category);
    const currentSubcategory = currentCategory?.subcategories.find(s => s.name === subcategory);
    const currentMaterial = currentSubcategory?.materials.find(m => m.name === material);

    const handleCalculate = () => {
        if (currentMaterial && qty) {
            setPrice(currentMaterial.rate * qty);
        }

        console.log(currentMaterial);
        console.log(qty);
    };

    return (
        <section className="estimator-section container py-5">
            <div className="row justify-content-center text-center mb-4">
                <div className="col-lg-8 text-white">
                    <h2 className="mb-3"><span className='text-primary-custom'>Project</span> Cost Estimator</h2>
                    <p className="text-white-50">
                        Select your service category, choose the material, and enter the
                        quantity to get an instant cost estimate for your project.
                    </p>
                </div>
            </div>

            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="p-4">
                        <div className="row">
                            {/* Category */}
                            <div className="mb-3 col text-start">
                                <label className="form-label">Service Category</label>
                                <select
                                    className="form-select"
                                    value={category}
                                    onChange={(e) => {
                                        setCategory(e.target.value);
                                        setSubcategory("");
                                        setMaterial("");
                                    }}
                                >
                                    <option value="">Select Category</option>
                                    {SERVICES_DATA_ALL.categories.map((cat) => (
                                        <option key={cat.name} value={cat.name}>
                                            {cat.name}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* Process Type */}
                            <div className="mb-3 col text-start">
                                <label className="form-label">Process Type</label>
                                <select
                                    className="form-select"
                                    value={processType}
                                    onChange={(e) => setProcessType(e.target.value)}
                                >
                                    <option value="">Select Process</option>
                                    {SERVICES_DATA_ALL.serviceMethods
                                        .filter((method) => !method.applicableTo || method.applicableTo.includes(category))
                                        .map((method) => (
                                            <option key={method.name} value={method.name}>
                                                {method.name}
                                            </option>
                                        ))}
                                </select>

                            </div>
                        </div>

                        {/* Subcategory */}
                        {category && (
                            <div className="mb-3 text-start">
                                <label className="form-label">Sub Category</label>
                                <select
                                    className="form-select"
                                    value={subcategory}
                                    onChange={(e) => {
                                        setSubcategory(e.target.value);
                                        setMaterial("");
                                    }}
                                >
                                    <option value="">Select Subcategory</option>
                                    {currentCategory?.subcategories.map((sub) => (
                                        <option key={sub.name} value={sub.name}>
                                            {sub.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        )}

                        {/* Material */}
                        {subcategory && (
                            <div className="mb-3 text-start">
                                <label className="form-label">Material</label>
                                <select
                                    className="form-select"
                                    value={material}
                                    onChange={(e) => setMaterial(e.target.value)}
                                >
                                    <option value="">Select Material</option>
                                    {currentSubcategory?.materials.map((mat) => (
                                        <option key={mat.name} value={mat.name}>
                                            {mat.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        )}

                        {/* Quantity */}
                        {material && (
                            <div className="mb-3 text-start">
                                <label className="form-label">Quantity (Length in Meter)</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    min="1"
                                    value={qty}
                                    onChange={(e) => setQty(e.target.value)}
                                />
                            </div>
                        )}

                        {/* Button */}
                        <div className="d-grid">
                            <button
                                className="btn-primary-custom"
                                onClick={handleCalculate}
                                disabled={!material || !qty}
                            >
                                Calculate Cost
                            </button>
                        </div>

                        {/* Result */}
                        {price !== null && (
                            <div className="alert alert-success mt-4">
                                Estimated Cost: <strong>${price}</strong>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
