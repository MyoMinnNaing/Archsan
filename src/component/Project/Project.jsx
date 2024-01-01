import React, { useState } from "react";
// import Project03 from "./Project03";
import LineWrapper from "../UI/LineWrapper";
import Header from "../UI/Header";
import ToDiscuss from "../Contact/ToDiscuss";
import Footer from "../Contact/Footer";
import ProjectPage from "./ProjectPage";



const Project = () => {
  const images = [
    "./img/1.jpg",
    "./img/2.jpg",
    ".img/3.jpg",
    ".img/4.jpg",
    ".img/5.jpg",
    "./img/1.jpg",
    "./img/2.jpg",
    ".img/3.jpg",
    ".img/4.jpg",
    ".img/5.jpg",
    ".img/5.jpg",
  ];

  return (
    <div className="min-h-screen">
      <LineWrapper />
      <Header />
      <ProjectPage images={images}/>
      {/* <Project03 /> */}
      <ToDiscuss />
      <Footer />
    </div>
  );
};

export default Project;
