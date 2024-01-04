import React from "react";
import ServicePart from "./ServicePart";
import Header from "../UI/Header";
import LineWrapper from "../UI/LineWrapper";
import Footer from "../Contact/Footer";
import ToDiscuss from "../Contact/ToDiscuss";

const Service = () => {
  return (
    <div>
    <LineWrapper/>
    <Header />
    <ServicePart />
    <ToDiscuss />
    <Footer />
</div>
  );
};
export default Service
