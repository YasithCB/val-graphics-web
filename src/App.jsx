import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";

import "./assets/css/font.css";
import "./assets/css/form.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import ServiceDetailsPage from "./pages/ServiceDetailsPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import { ToastContainer } from "react-toastify";
import { AuthProvider } from "./context/AuthContext.jsx";
import { AOS_CONFIG } from "./db/aosAnimations.js";
import AOS from "aos";
import "aos/dist/aos.css"; // ✅ important

function App() {
  useEffect(() => {
    AOS.init(AOS_CONFIG.global);
  }, []);

  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/val-graphics-web" element={<HomePage />} />
            <Route
              path="/services/:categoryName"
              element={<ServiceDetailsPage />}
            />
            <Route path="/user/login" element={<LoginPage />} />
            <Route path="/user/register" element={<RegisterPage />} />
          </Routes>

          <ToastContainer
            position="top-right"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark" // ✅ built-in dark mode
          />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
