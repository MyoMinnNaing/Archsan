import React from "react";
import Faq from "./Faq";
import LineWrapper from "../UI/LineWrapper";
import ToDiscuss from "../Contact/ToDiscuss";
import Footer from "../Contact/Footer";

const FaqPage = () => {
  return (
    <div>
      <LineWrapper />
      <Faq />
      <ToDiscuss/>
      <Footer/>
    </div>
  );
};

export default FaqPage;
