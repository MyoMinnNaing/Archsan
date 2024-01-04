import React from "react";
import News from "./News";
import Footer from "../Contact/Footer";
import LineWrapper from "../UI/LineWrapper";
import Header from "../UI/Header";

const Blog = () => {
  return (
    <main id="blog1-section ">
      <LineWrapper />
      <Header />
      <section className=" py-[120px] border-bottom">
        <News />
      </section>

      <Footer />
    </main>
  );
};

export default Blog;
