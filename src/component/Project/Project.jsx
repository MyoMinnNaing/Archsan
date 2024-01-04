import React from "react";
import LineWrapper from "../UI/LineWrapper";
import Header from "../UI/Header";
import ToDiscuss from "../Contact/ToDiscuss";
import Footer from "../Contact/Footer";
import Project02 from "./Project02";
import ProjectPage from "./ProjectPage";

const Project = () => {
  return (
    <div className="min-h-screen">
      <LineWrapper />
      <Header />
      <Project02 />
      <ToDiscuss />
      <Footer />
    </div>
  );
};
export default Project;
