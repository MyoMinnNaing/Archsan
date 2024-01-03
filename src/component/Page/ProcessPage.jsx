import React from "react";
import LineWrapper from "../UI/LineWrapper";
import Process from "./Process";
import ToDiscuss from "../Contact/ToDiscuss";
import Footer from "../Contact/Footer";
import Header from "../UI/Header";

const ProcessPage = () => {
  return (
    <div className=" relative">
      <LineWrapper />
      <Header />
      <Process />
      <ToDiscuss />
      <Footer />
    </div>
  );
};

export default ProcessPage;
