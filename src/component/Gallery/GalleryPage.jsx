import React from "react";
import LineWrapper from "../UI/LineWrapper";
import Gallery from "./Gallery";
import VideoGallery from "./VideoGallery";
import ToDiscuss from "../Contact/ToDiscuss";
import Footer from "../Contact/Footer";
import Header from "../UI/Header";

const GalleryPage = () => {
  return (
    <div className="  min-h-screen relative">
      <LineWrapper />
      <Header />
      <Gallery />
      <VideoGallery />
      <ToDiscuss />
      <Footer />
    </div>
  );
};

export default GalleryPage;
