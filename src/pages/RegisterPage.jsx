import img1 from "../assets/images/view/uae-buildings-2.png";
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { registerUser } from "../api/auth.js";
import { toast } from "react-toastify";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    fName: "",
    lName: "",
    tel: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    try {
      await registerUser({
        username: `${formData.fName} ${formData.lName}`,
        email: formData.email,
        password: formData.password,
      });

      toast.success("Registration successful! Redirecting...");
      setTimeout(() => navigate("/user/login"), 1500);
    } catch (err) {
      toast.error(`${err.message}`);
    }
  };

  return (
    <div className="container-fluid vh-100">
      <div className="row h-100">
        {/* Left Column - Image */}
        <div className="col-md-6 d-none d-md-block p-0">
          <img
            src={img1}
            alt="Register Illustration"
            className="img-fluid h-100 w-100"
            style={{ objectFit: "cover" }}
          />
        </div>

        {/* Right Column - Register Form */}
        <div className="col-md-6 d-flex align-items-center justify-content-center">
          <div className="w-75" style={{ maxWidth: "400px" }}>
            <h2 className="mb-4 text-center text-regular-custom">
              <span className="text-primary-custom">Create</span> Account
            </h2>
            <p className="text-regular-custom text-center mb-4">
              Join us and explore all features
            </p>

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="fName"
                  placeholder="First Name"
                  value={formData.fName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="lName"
                  placeholder="Last Name"
                  value={formData.lName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <input
                  type="tel"
                  className="form-control"
                  id="tel"
                  placeholder="Mobile Number"
                  value={formData.tel}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="E-mail"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="confirmPassword"
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="btn-primary-custom w-100">
                Register
              </button>
            </form>

            <p className="text-center mt-3 text-regular-custom-50">
              Already have an account?{" "}
              <Link className="text-regular-custom" to={`/user/login`}>
                Login Now
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
