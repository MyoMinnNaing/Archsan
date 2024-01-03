import React from "react";
import LineWrapper from "../UI/LineWrapper";
import GetInTouch from "./GetInTouch";
import Header from "../UI/Header";
import GoggleMap from "./GoggleMap";
import Footer from "./Footer";
import ToDiscuss from "./ToDiscuss";

function Contact() {
  return (
    <div className=" min-h-screen">
      <LineWrapper />
      <Header />
      <GetInTouch />
      <GoggleMap />
      <ToDiscuss />
      <Footer />
    </div>
  );
}

export default Contact;
