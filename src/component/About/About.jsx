import React from "react";
import AboutPart from "./AboutPart";
import Footer from "../Contact/Footer";
import ToDiscuss from "../Contact/ToDiscuss";
import Home from "../Home/Home";
import LineWrapper from "../UI/LineWrapper";
import Header from "../UI/Header";

const About = () => {
  return (
    <div className="min-h-screen">
      <LineWrapper />
      <Header />
      <AboutPart />
      <ToDiscuss />
      <Footer />
    </div>
  );
};

export default About;
