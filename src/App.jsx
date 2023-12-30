import React from "react";
import Home from "./component/Home/Home";
import Contact from "./component/Contact/Contact";
import Blog from "./component/Blog/Blog";
import { Route, Routes } from "react-router-dom";
import About from "./component/About/About";
import Service from "./component/Service/Service";
import Project from "./component/Project/Project";
import Gallery from "./component/Gallery/Gallery";
import Page from "./component/Page/Page";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/project" element={<Project />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/page" element={<Page />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default App;
