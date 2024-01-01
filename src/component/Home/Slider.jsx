import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

const Slider = ({ info }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      className="slide  relative"
      style={{ backgroundImage: `url(${info.bgImage})` }}
    >
      <div className=" w-full h-full bg-black opacity-50 absolute top-0 left-0"></div>
      <div className="container relative">
        <div className=" grid grid-cols-12 text-white -mt-[15px] ">
          <div className=" col-span-7  ">
            <div
              className=" mb-[20px] "
              data-aos="fade-up"
              data-aos-delay="50"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
            >
              <span className=" inline-block w-[7px] h-[7px] bg-[#c5a47efc] rounded-full mr-2"></span>
              <h4 className=" inline-block uppercase text-[12px] tracking-[3px]">
                {info.project}
              </h4>
            </div>

            <h1
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              className=" text-[48px] font-heading uppercase leading-[1.2em] tracking-[3px] mb-[20px]"
            >
              {info.title}
            </h1>

            <p
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              className=" text-[15px] leading-[1.75em]  mb-[30px]"
            >
              {info.description}
            </p>

            <div
              data-aos="fade-up"
              data-aos-delay="250"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <a
                href="#"
                className="button-light  text-[15px] px-[30px] py-[14px] border rounded-full duration-300 hover:bg-white hover:text-black "
              >
                View Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
