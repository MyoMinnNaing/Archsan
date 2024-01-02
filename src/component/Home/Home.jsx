import React from "react";
import LineWrapper from "../UI/LineWrapper";
import Header from "../UI/Header";
import LandingPage from "./LandingPage";
import AboutArchsan from "./AboutArchsan";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <div className="  min-h-screen relative">
      <LineWrapper />
      <Header />
      <LandingPage />
      <AboutArchsan />
      <Testimonials />
    </div>
  );
};

export default Home;
