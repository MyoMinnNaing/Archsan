import React from "react";
import Home from "./component/Home/Home";
import GalleryPage from "./component/Gallery/GalleryPage";
import Contact from "./component/Contact/Contact";
import About from "./component/About/About";
import Project from "./component/Project/Project";
import Project03 from "./component/Project/Project03";
import ProjectPage from "./component/Project/ProjectPage";
import Blog from "./component/Blog/Blog";
import { Route, Routes } from "react-router-dom";
import Service from "./component/Service/Service";
import Page from "./component/Page/Page";
import FaqPage from "./component/Page/FaqPage";
import ProcessPage from "./component/Page/ProcessPage";

const App = () => {
  return (
    <>
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/project" element={<Project />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/faq-page" element={<FaqPage />} />
        <Route path="/process-page" element={<ProcessPage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default App;
