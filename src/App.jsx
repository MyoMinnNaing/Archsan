import React from "react";
import LineWrapper from "./component/UI/LineWrapper";
import Home from "./component/Home/Home";
import { Route, Routes } from "react-router-dom";
import GalleryPage from "./component/Gallery/GalleryPage";

const App = () => {
  return (
    <>
      <Home />
      <Routes>
        <Route path="/gallery" element={<GalleryPage/>} />
      </Routes>
    </>
  );
};

export default App;
