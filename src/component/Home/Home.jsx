import React from "react";
import Footer from "../Contact/Footer";
import Header from "../UI/Header";
import LandingPage from "./LandingPage";
import AboutArchsan from "./AboutArchsan";
import Testimonials from "./Testimonials";
import Gallery from "../Gallery/Gallery";
import Contact from "../Contact/Contact";
import LineWrapper from "../UI/LineWrapper";

const Home = () => {
  return (
    <div className=" relative">
      <LineWrapper/>
      <Header />
      <LandingPage />
      <AboutArchsan />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
