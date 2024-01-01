import React from "react";
import GetInTouch from "./GetInTouch";
import GoggleMap from "./GoggleMap";
import Footer from "./Footer";
import ToDiscuss from "./ToDiscuss";
import Header from "../UI/Header";
import LineWrapper from "../UI/LineWrapper";

function Contact() {
  return (
    <div className=" min-h-screen">
      <LineWrapper />
      {/* <Header /> */}
      <GetInTouch />
      <GoggleMap />
      <ToDiscuss />
      <Footer />
    </div>
  );
}

export default Contact;
