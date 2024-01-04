import React from "react";
import AboutPart from "./AboutPart";
import Footer from "../Contact/Footer";
import ToDiscuss from "../Contact/ToDiscuss";
import Home from "../Home/Home";
import Header from "../UI/Header";
import LineWrapper from "../UI/LineWrapper";

const About = () => {
  return (
    <div className="relative">
      <LineWrapper />
      <Header />
      <AboutPart />
      <ToDiscuss />
      <Footer />
    </div>
  );
};

export default About;
