import img1 from "../assets/images/view/uae-buildings.png";
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { loginUser } from "../api/auth.js";

export default function LoginPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await loginUser(formData);

      // ✅ Save token & user in localStorage
      localStorage.setItem("token", res.token);
      localStorage.setItem("user", JSON.stringify(res.user));

      toast.success("Login successful! Redirecting...");
      setTimeout(() => navigate("/"), 1500);
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
            alt="Login Illustration"
            className="img-fluid h-100 w-100"
            style={{ objectFit: "cover" }}
          />
        </div>

        {/* Right Column - Login Form */}
        <div className="col-md-6 d-flex align-items-center justify-content-center">
          <div className="w-75" style={{ maxWidth: "400px" }}>
            <h2 className="mb-4 text-center text-regular-custom">
              <span className="text-primary-custom">Welcome</span> Back
            </h2>
            <p className="text-regular-custom text-center mb-4">
              Sign in to continue to your account
            </p>

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="you@example.com"
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
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="btn-primary-custom w-100">
                Login
              </button>
            </form>

            <p className="text-center mt-3 text-regular-custom-50">
              Don’t have an account?{" "}
              <Link className="text-regular-custom" to={`/user/register`}>
                Sign up Now
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
