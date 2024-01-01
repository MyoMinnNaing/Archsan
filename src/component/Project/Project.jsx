import React from "react";
import Project03 from "./Project03";
import LineWrapper from "../UI/LineWrapper";
import Header from "../UI/Header";
import ToDiscuss from "../Contact/ToDiscuss";
import Footer from "../Contact/Footer";

const Project = () => {
  return (
    <div className="min-h-screen">
      <LineWrapper />
      <Header />
      <Project03 />
      <ToDiscuss />
      <Footer />
    </div>
  );


export default Project;
