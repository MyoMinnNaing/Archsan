import React from "react";
import LineWrapper from "./component/UI/LineWrapper";
import Home from "./component/Home/Home";
import GalleryPage from "./component/Gallery/GalleryPage";
import Contact from "./component/Contact/Contact";
import FaqPage from "./component/Page/FaqPage";
import ProcessPage from "./component/Page/ProcessPage";


const App = () => {
  return (
    <>
      <Home />
      {/* <FaqPage/> */}
      <ProcessPage />
    </>
  );
};

export default App;
