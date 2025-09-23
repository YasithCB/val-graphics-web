import React from "react";
import Header from "../components/Header";
import WhatsAppButton from "../components/WhatsappButton";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection.jsx";
import AboutSection from "../components/AboutSection.jsx";
import EstimatorSection from "../components/EstimatorSection.jsx";
import InquiryAndBooking from "../components/InquiryAndBooking.jsx";
import HowWeDo from "../components/HowWeDo.jsx";
import ProductionPartners from "../components/ProductionPartners.jsx";

const HomePage = () => {
  return (
    <div className="light-container">
      <Header />
      <HeroSection />
      <HowWeDo />
      <AboutSection />
      <ProductionPartners />
      <EstimatorSection />
      <InquiryAndBooking />
      <Footer />

      <WhatsAppButton />
    </div>
  );
};

export default HomePage;
