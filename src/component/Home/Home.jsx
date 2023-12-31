import React from "react";
import Footer from "../Contact/Footer";
import Header from "../UI/Header";
import Gallery from "../Gallery/Gallery";
import Contact from "../Contact/Contact";
import LineWrapper from "../UI/LineWrapper";

const Home = () => {
  return (
    <div className=" relative">
      <LineWrapper/>
      <Header />
      <h1>home</h1>

      <Footer />
    </div>
  );
};

export default Home;
