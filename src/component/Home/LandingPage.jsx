import React from "react";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const LandingPage = () => {
  return (
    <Splide
      hasTrack={false}
      options={{
        type: "fade",
        rewind: true,
        gap: "1rem",
        speed: 3000,
        pagination: false,
      }}
    >
      <SplideTrack>
        <SplideSlide>
          <div className="slide-1  relative">
            <div className=" w-full h-full bg-black opacity-50 absolute top-0 left-0"></div>
            <div className="container relative">
              <div className=" grid grid-cols-12 text-white -mt-[15px] ">
                <div className=" col-span-7  ">
                  <div className=" mb-[20px]  animate__animated animate__fadeInUp animate__faster ">
                    <span className=" inline-block w-[7px] h-[7px] bg-[#c5a47efc] rounded-full mr-2"></span>
                    <h4 className=" inline-block uppercase text-[12px] tracking-[3px]">
                      Project P.01
                    </h4>
                  </div>

                  <h1 className=" animate__animated animate__fadeInUp animate__fast text-[48px] font-heading uppercase leading-[1.2em] tracking-[3px] mb-[20px]">
                    Ultra-Modern House Design
                  </h1>

                  <p className=" animate__animated animate__fadeInUp animate__delay-1s text-[15px] leading-[1.75em]  mb-[30px]">
                    Architecture viverra tristique justo duis vitae diaminte
                    neque nivamus aestan ateuene artine aringianu the miss
                    finibus viverra lacus fermen.
                  </p>

                  <a
                    href=""
                    className="button-light  animate__animated animate__fadeInUp animate__delay-2s text-[15px] px-[30px] py-[14px] border rounded-full duration-300 hover:bg-white hover:text-black "
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
          </div>
        </SplideSlide>

        <SplideSlide>
          <div className="slide-2  relative">
            <div className=" w-full h-full bg-black opacity-50 absolute top-0 left-0"></div>
            <div className="container relative">
              <div className=" grid grid-cols-12 text-white -mt-[15px] ">
                <div className=" col-span-7  ">
                  <div className=" mb-[20px]  animate__animated animate__fadeInUp">
                    <span className=" inline-block w-[7px] h-[7px] bg-[#c5a47efc] rounded-full mr-2"></span>
                    <h4 className=" inline-block uppercase text-[12px] tracking-[3px]">
                      Project P.02
                    </h4>
                  </div>

                  <h1 className=" animate__animated animate__fadeInUp text-[48px] font-heading uppercase leading-[1.2em] tracking-[3px] mb-[20px]">
                    ULTRA-LUXURIOUS VILLA
                  </h1>

                  <p className=" animate__animated animate__fadeInUp text-[15px] leading-[1.75em]  mb-[30px]">
                    Architecture viverra tristique justo duis vitae diaminte
                    neque nivamus aestan ateuene artine aringianu the miss
                    finibus viverra lacus fermen.
                  </p>

                  <a
                    href=""
                    className="button-light  animate__animated animate__fadeInUp text-[15px] px-[30px] py-[14px] border rounded-full duration-300 hover:bg-white hover:text-black "
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
          </div>
        </SplideSlide>

        <SplideSlide>
          <div className="slide-3  relative">
            <div className=" w-full h-full bg-black opacity-50 absolute top-0 left-0"></div>
            <div className="container relative">
              <div className=" grid grid-cols-12 text-white -mt-[15px] ">
                <div className=" col-span-7  ">
                  <div className=" mb-[20px] animate__animated animate__fadeInUp">
                    <span className=" inline-block w-[7px] h-[7px] bg-[#c5a47efc] rounded-full mr-2"></span>
                    <h4 className=" inline-block uppercase text-[12px] tracking-[3px]">
                      Project P.02
                    </h4>
                  </div>

                  <h1 className=" animate__animated animate__fadeInUp text-[48px] font-heading uppercase leading-[1.2em] tracking-[3px] mb-[20px]">
                    MODERNITY IN THE NATURE
                  </h1>

                  <p className=" animate__animated animate__fadeInUp text-[15px] leading-[1.75em]  mb-[30px]">
                    Architecture viverra tristique justo duis vitae diaminte
                    neque nivamus aestan ateuene artine aringianu the miss
                    finibus viverra lacus fermen.
                  </p>

                  <a
                    href=""
                    className="button-light  animate__animated animate__fadeInUp text-[15px] px-[30px] py-[14px] border rounded-full duration-300 hover:bg-white hover:text-black "
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
          </div>
        </SplideSlide>
      </SplideTrack>
    </Splide>
  );
};

export default LandingPage;
