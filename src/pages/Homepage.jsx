import React from "react";
import Header from "../components/Header";
import WhatsAppButton from "../components/WhatsappButton";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection.jsx";
import AboutSection from "../components/AboutSection.jsx";
import EstimatorSection from "../components/EstimatorSection.jsx";

const HomePage = () => {
    return (
        <div className="light-container">
            <Header />
            <HeroSection/>
            <AboutSection/>
            <EstimatorSection/>
            <Footer />

            <WhatsAppButton />
        </div>
    );
};

export default HomePage;
