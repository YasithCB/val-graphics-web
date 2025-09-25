import React, { useEffect, useRef, useState } from "react";
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

  console.log("footerHeight:", footerHeight);

  return (
    <div
      className="light-container"
      style={{ paddingBottom: footerHeight + 150 }}
    >
      <Header />
      <HeroSection />
      <HowWeDo />
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
