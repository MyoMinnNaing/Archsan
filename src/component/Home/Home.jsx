import React from "react";
import Footer from "../Contact/Footer";
import Header from "../UI/Header";
 
import Service from "../Service/Service";

const Home = () => {
  return (
    <div className="  min-h-screen relative container">
      <Header />


import LandingPage from "./LandingPage";
import AboutArchsan from "./AboutArchsan";
import Testimonials from "./Testimonials";
import Gallery from "../Gallery/Gallery";
import Contact from "../Contact/Contact";
import LineWrapper from "../UI/LineWrapper";
import Project02 from "../Project/Project02";

const Home = () => {
  return (
    <div className=" relative">
      <LineWrapper />
      <Header />
      <LandingPage />
      <AboutArchsan />
      <Project02 />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
