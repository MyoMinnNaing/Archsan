import React from "react";
import ProcessPage from "./ProcessPage";
import LineWrapper from "../UI/LineWrapper";
import Header from "../UI/Header";

const Page = () => {
  return (
    <div className=" relative">
      <LineWrapper />
      <Header />
      <ProcessPage />
    </div>
  );
};

export default Page;
