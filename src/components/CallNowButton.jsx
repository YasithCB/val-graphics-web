import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import "../assets/css/call-now-button.css";

const CallNowButton = () => {
  const phone = "+971502303130"; // Replace with your number

  return (
    <a href={`tel:${phone}`} className="call-fab" title="Call us now">
      <span className="call-ring"></span>
      <FaPhoneAlt className="call-icon" />
    </a>
  );
};

export default CallNowButton;
