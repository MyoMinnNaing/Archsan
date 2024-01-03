import React from "react";
import LineWrapper from "../UI/LineWrapper";
import Header from "../UI/Header";
import Footer from "../Contact/Footer";

const BlogTwo = () => {
  return (
    <div>
      <LineWrapper />
      <Header />

      <div className=" py-[108px]">
      <div className=" container">
        <div className=" flex flex-row h-20 items-center mb-12">
          <div className=" basis-1/3 ">
            <div className="flex items-center mb-[5px]">
              <div className=" w-[5px] h-[5px] rounded mx-4 bg-[#c5a47e]"></div>
              <span className=" tracking-widest text-gray-500 text-[13px]">BLOG</span>
            </div>
            <div className=" h-2 w-[355px] ms-3 border-b border-transparent]"></div>
          </div>
          <div className=" basic-1/2 ps-3 text-[#c5a47e] text-[36px] font-heading tracking-widest">
            LATEST NEWS
          </div>
        </div>

        <div className=" grid grid-cols-3 gap-7 mx-3">
          <div className="">
            <img
              src="https://shtheme.com/demosd/archsan/wp-content/uploads/2022/12/9.jpg"
              alt=""
            />
            <div className=" flex flex-col justify-between bg-white w-[335px] h-[115px] px-5 py-6 translate-y-[-50%]">
              <h4 className=" font-heading text-2xl tracking-normal">
                <a href="#">HOME DECORATING INSPIRATION</a>
              </h4>
              <div className=" flex flex-row text-xs items-center">
                <a href="#">Architecture </a>
                <div className=" w-1 h-1 rounded bg-gray-500 mx-4 "></div>
                <a href="#">December 19, 2022 </a>
              </div>
            </div>
          </div>
          <div className="">
            <img
              src="https://shtheme.com/demosd/archsan/wp-content/uploads/2022/12/10.jpg"
              alt=""
            />
            <div className=" flex flex-col justify-between bg-white w-[335px] h-[115px] px-5 py-6 translate-y-[-50%]">
              <h4 className=" font-heading text-2xl tracking-normal">
                <a href="#">ULTRA HOUSE DESIGNS</a>
              </h4>
              <div className=" flex flex-row text-xs items-center">
                <a href="#">Interior Design</a>
                <div className=" w-1 h-1 rounded bg-gray-500 mx-4 "></div>
                <a href="#">December 19, 2022 </a>
              </div>
            </div>
          </div>
          <div className="">
            <img
              src="https://shtheme.com/demosd/archsan/wp-content/uploads/2022/12/7.jpg"
              alt=""
            />
            <div className=" flex flex-col justify-between bg-white w-[335px] h-[115px] px-5 py-6 translate-y-[-50%]">
              <h4 className=" font-heading text-2xl tracking-normal">
                <a href="#">MODERNISM IN ARCHITECTURE</a>
              </h4>
              <div className=" flex flex-row text-xs items-center">
                <a href="#">Graphic Design </a>
                <div className=" w-1 h-1 rounded bg-gray-500 mx-4 "></div>
                <a href="#">December 19, 2022 </a>
              </div>
            </div>
          </div>
          <div className="">
            <img
              src="https://shtheme.com/demosd/archsan/wp-content/uploads/2022/12/3-1.jpg"
              alt=""
            />
            <div className=" flex flex-col justify-between bg-white w-[335px] h-[115px] px-5 py-6 translate-y-[-50%]">
              <h4 className=" font-heading text-2xl tracking-normal">
                <a href="#">DECORATING INSPIRATION</a>
              </h4>
              <div className=" flex flex-row text-xs items-center">
                <a href="#">Building</a>
                <div className=" w-1 h-1 rounded bg-gray-500 mx-4 "></div>
                <a href="#">December 19, 2022 </a>
              </div>
            </div>
          </div>
          <div className="">
            <img
              src="https://shtheme.com/demosd/archsan/wp-content/uploads/2022/12/2-1.jpg"
              alt=""
            />
            <div className=" flex flex-col justify-between bg-white w-[335px] h-[115px] px-5 py-6 translate-y-[-50%]">
              <h4 className=" font-heading text-2xl tracking-normal">
                <a href="#">ULTRA HOUSE DESIGNS</a>
              </h4>
              <div className=" flex flex-row text-xs items-center">
                <a href="#">Exterior Design</a>
                <div className=" w-1 h-1 rounded bg-gray-500 mx-4 "></div>
                <a href="#">December 19, 2022 </a>
              </div>
            </div>
          </div>
          <div className="">
            <img
              src="https://shtheme.com/demosd/archsan/wp-content/uploads/2022/12/1-1.jpg"
              alt=""
            />
            <div className=" flex flex-col justify-between bg-white w-[335px] h-[115px] px-5 py-6 translate-y-[-50%]">
              <h4 className=" font-heading text-2xl tracking-normal">
                <a href="#">MODERNISM IN ARCHITECTURE</a>
              </h4>
              <div className=" flex flex-row text-xs items-center">
                <a href="#">Architecture </a>
                <div className=" w-1 h-1 rounded bg-gray-500 mx-4 "></div>
                <a href="#">December 19, 2022 </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>

      <Footer />
    </div>
  );
};

export default BlogTwo;
