import React from "react";
import LineWrapper from "../UI/LineWrapper";
import Header from "../UI/Header";
import LandingPage from "./LandingPage";

const Home = () => {
  return (
    <div className="  min-h-screen relative">
      <LineWrapper />
      <Header />
      <LandingPage />
    </div>
  );
};

export default Home;
