import React from "react";
import ContactAnimation from "../Components/ContactPage/ContactAnimation";
import ContactPage from "../Components/ContactPage/ContactPage";

const contact = () => {
  return (
    <div className="z-30 relative">
      <ContactAnimation />
      <ContactPage />
    </div>
  );
};

export default contact;
