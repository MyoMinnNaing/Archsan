import React from "react";
import Faq from "./Faq";
import LineWrapper from "../UI/LineWrapper";
import ToDiscuss from "../Contact/ToDiscuss";
import Footer from "../Contact/Footer";
import Header from "../UI/Header";

const FaqPage = () => {
  return (
    <div className=" relative">
      <LineWrapper />
      <Header />
      <Faq />
      <ToDiscuss />
      <Footer />
    </div>
  );
};

export default FaqPage;
