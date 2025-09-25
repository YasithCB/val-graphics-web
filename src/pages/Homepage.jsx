import React, { useEffect, useRef, useState } from "react";
import Header from "../components/Header";
import WhatsAppButton from "../components/WhatsappButton";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection.jsx";
import AboutSection from "../components/AboutSection.jsx";
import EstimatorSection from "../components/EstimatorSection.jsx";
import InquiryAndBooking from "../components/InquiryAndBooking.jsx";
import Departments from "../components/Departments.jsx";
import ProductionPartners from "../components/ProductionPartners.jsx";

const HomePage = () => {
  const footerRef = useRef(null);
  const [footerHeight, setFooterHeight] = useState(0);

  useEffect(() => {
    const updateHeight = () => {
      if (footerRef.current) {
        setFooterHeight(footerRef.current.offsetHeight);
      }
    };

    // Run after first paint
    updateHeight();

    // Listen on resize
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  return (
    <div
      style={
        window.innerWidth <= 768
          ? { paddingBottom: footerHeight + 250 }
          : window.innerWidth <= 992
            ? { paddingBottom: footerHeight / 2 }
            : {}
      }
    >
      <Header />
      <HeroSection />
      <Departments />
      <AboutSection />
      <ProductionPartners />
      <EstimatorSection />
      <InquiryAndBooking />
      <Footer ref={footerRef} />

      <WhatsAppButton />
    </div>
  );
};

export default HomePage;
