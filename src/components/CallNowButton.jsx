import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import "../assets/css/call-now-button.css";
import { PHONE } from "../db/constants.js";

const CallNowButton = () => {
  return (
    <a href={`tel:${PHONE}`} className="call-fab" title="Call us now">
      <span className="call-ring"></span>
      <FaPhoneAlt />
    </a>
  );
};

export default CallNowButton;
