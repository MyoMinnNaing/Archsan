import React from "react";
import LineWrapper from "../UI/LineWrapper";
import GetInTouch from "./GetInTouch";
import Header from "../UI/Header";
import GoggleMap from "./GoggleMap";
import ToDiscuss from "./ToDiscuss";
import Footer from "./Footer";

function Contact() {
  return (
    <div className=" min-h-screen">
      <LineWrapper />
      <Header />
      <GetInTouch />
      <GoggleMap />
      {/* <ToDiscuss /> */}
      <Footer />
    </div>
  );
}

export default Contact;
