import React from "react";
import LineWrapper from "./component/UI/LineWrapper";
import Home from "./component/Home/Home";
import Contact from "./component/Contact/Contact";
import Header from "./component/UI/Header";
import Blog from "./component/Blog/Blog";

const App = () => {
  return (
    <>
      <Header />
      <LineWrapper />
      {/* <Home /> */}
      {/* <Contact /> */}
      <Blog />
    </>
  );
};

export default App;
