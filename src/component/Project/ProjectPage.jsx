import React from "react";

import { Splide, SplideSlide } from "@splidejs/react-splide";

import "@splidejs/react-splide/css";

const ProjectPage = () => {
  return (
    <div>
      <section>
        <div className="container relative py-[120px]">
          <div className="grid grid-cols-12">
            <div className="col-span-12 px-3">
              <h2 className="font-heading text-[#1b1b1b] text-4xl font-normal mb-5 leading-6 tracking-[3px] [word-spacing:5px]">
                ULTRA-MODERN HOUSE DESIGN
              </h2>
              <p className="text-[15px] leading-7 text-[#777] font-normal mb-5">
                Nam rhoncus euismod eros. Integer fringilla varius leo, eget
                volutpat eros convalist. Nulla non nisl orci. Donec ornare
                ullamcorper nunc elementum placerat urabitur massa ante, iaculis
                a enim porta, iaculis. Quisque gravida eros ut turpis interdum
                ornare. Interdum et malesu they adamale fames ac ante ipsum
                primis in faucibus curabitur arcu erosite feugiat in tortor in,
                volutpat sollicitudin libero maecenas nisl est conselur rhoncus
                loremir consequat et, finibus nec purus.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-12">
            <div className="col-span-12 px-3 ">
              <div className="block z-10">
                <div className="project_page_slide_container">
                  <Splide
                    options={{
                      rewind: true,
                      pagination: false,
                      perPage: 3,
                      arrows: true,
                      speed: 1000,

                      mediaQuery: "min",
                      breakpoints: {
                        // 375: {
                        //   perPage: 1,
                        // },
                        // 640: {
                        //   perPage: 2,
                        // },

                        1024: {
                          perPage: 1,
                        },
                      },
                    }}
                    aria-label="My Favorite Images"
                  >
                    <SplideSlide>
                      {/* Item 1 */}
                      <div className="overflow-hidden">
                        <div className=" w-[1116px]  me-[30px] float-left">
                          <div className="relative inline-block align-middle w-full mb-5">
                            <img
                              className="h-auto w-full"
                              src="https://duruthemes.com/demo/html/archsan/light/images/slider/4.jpg"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </SplideSlide>

                    <SplideSlide>
                      {/* Item 1 */}
                      <div className="overflow-hidden">
                        <div className=" w-[1116px]  me-[30px] float-left">
                          <div className="relative inline-block align-middle w-full mb-5">
                            <img
                              className="h-auto w-full"
                              src="https://duruthemes.com/demo/html/archsan/light/images/slider/5.jpg"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </SplideSlide>

                    <SplideSlide>
                      {/* Item 1 */}
                      <div className="overflow-hidden">
                        <div className=" w-[1116px]  me-[30px] float-left">
                          <div className="relative inline-block align-middle w-full mb-5">
                            <img
                              className="h-auto w-full"
                              src="https://duruthemes.com/demo/html/archsan/light/images/slider/6.jpg"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </SplideSlide>

                    <SplideSlide>
                      {/* Item 1 */}
                      <div className="overflow-hidden">
                        <div className=" w-[1116px]  me-[30px] float-left">
                          <div className="relative inline-block align-middle w-full mb-5">
                            <img
                              className="h-auto w-full"
                              src="https://duruthemes.com/demo/html/archsan/light/images/slider/7.jpg"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </SplideSlide>

                    <SplideSlide>
                      {/* Item 1 */}
                      <div className="overflow-hidden">
                        <div className=" w-[1116px]  me-[30px] float-left">
                          <div className="relative inline-block align-middle w-full mb-5">
                            <img
                              className="h-auto w-full"
                              src="https://duruthemes.com/demo/html/archsan/light/images/slider/8.jpg"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </SplideSlide>
                  </Splide>
                </div>
              </div>
            </div>

            <div className="col-span-8">
              <div className="relative z-20 p-[30px] bg-[#fff] mb-[60px] -mt-[70px] border-b border-[#0000000d]">
                <div className="grid grid-cols-12 text-left">
                  <div className="col-span-3 px-3">
                    <h5 className="text-[15px] text-[#c5a47e] font-normal mb-[5px]">
                      Year
                    </h5>
                    <h6 className="text-[15px] font-normal text-[#777] leading-6">
                      2020 - 2023
                    </h6>
                  </div>
                  <div className="col-span-3 px-3">
                    <h5 className="text-[15px] text-[#c5a47e] font-normal mb-[5px]">
                      Company
                    </h5>
                    <h6 className="text-[15px] font-normal text-[#777] leading-6">
                      Drana Inc.
                    </h6>
                  </div>
                  <div className="col-span-3 px-3">
                    <h5 className="text-[15px] text-[#c5a47e] font-normal mb-[5px]">
                      Name
                    </h5>
                    <h6 className="text-[15px] font-normal text-[#777] leading-6">
                      House Design
                    </h6>
                  </div>
                  <div className="col-span-3 px-3">
                    <h5 className="text-[15px] text-[#c5a47e] font-normal mb-[5px]">
                      Location
                    </h5>
                    <h6 className="text-[15px] font-normal text-[#777] leading-6">
                      New York, USA
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-12">
            <div className="col-span-12 px-3">
              <p className="text-[15px] leading-7 text-[#777] font-normal mb-5">
                Nam rhoncus euismod eros. Integer fringilla varius leo, eget
                volutpat eros convalist. Nulla non nisl orci. Donec ornare
                ullamcorper nunc elementum placerat urabitur massa ante, iaculis
                a enim porta, iaculis. Quisque gravida eros ut turpis interdum
                ornare. Interdum et malesu they adamale fames ac ante ipsum
                primis in faucibus curabitur arcu erosite feugiat in tortor in,
                volutpat sollicitudin libero maecenas nisl est conselur rhoncus
                loremir consequat et, finibus nec purus.
              </p>

              <p className="text-[15px] leading-7 text-[#777] font-normal mb-5">
                Quisque gravida eros ut turpis interdum ornare. Interdum et
                malesu they adamale fames ac ante ipsum primis in faucibus.
                Curabitur arcu erosite feugiat in tortor in, volutpat
                sollicitudin libero. Maecenas nisl est, conselur rhoncus loremir
                consequat et, finibus nec purus. Mauris urna libero, tincidunt
                non ligula aliquam, maximus dignissim lacus. Fusce ac neque
                nibh. Fusce pretium enim vel mi fringilla euismod. Suspendisse
                dapibus nec nisl a hendrerit.
              </p>
              <br />

              <ul className="relative block mb-[30px]">
                <li className="relative flex items-center">
                  <div className="flex items-center">
                    <span className="text-2.5 text-[#c5a47e] bg-transparent border border-[#0000000d] py-1 px-2 rounded-full">
                      <i className="bi bi-check2"></i>
                    </span>
                  </div>
                  <div className="ms-[15px]">
                    <p className="text-[#777] font-normal leading-7">
                      Over 15 years of experience
                    </p>
                  </div>
                </li>

                <li className="relative flex items-center mt-2.5">
                  <div className="flex items-center">
                    <span className="text-2.5 text-[#c5a47e] bg-transparent border border-[#0000000d] py-1 px-2 rounded-full">
                      <i className="bi bi-check2"></i>
                    </span>
                  </div>
                  <div className="ms-[15px]">
                    <p className="text-[#777] font-normal leading-7">
                      Over 15 years of experience
                    </p>
                  </div>
                </li>

                <li className="relative flex items-center mt-2.5">
                  <div className="flex items-center">
                    <span className="text-2.5 text-[#c5a47e] bg-transparent border border-[#0000000d] py-1 px-2 rounded-full">
                      <i className="bi bi-check2"></i>
                    </span>
                  </div>
                  <div className="ms-[15px]">
                    <p className="text-[#777] font-normal leading-7">
                      Over 15 years of experience
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/*Other Projects Card carousel */}

      <section className="relative py-[120px]">
        <div className="container">
          <div className="grid grid-cols-12 mb-14 mx-auto">
            <div className="col-span-12 md:col-span-4 px-3">
              <div
                className="relative text-xs leading-3 tracking-widest font-normal text-[#1b1b1b] border-bottom 
             flex items-center pt-[5px] pb-[15px] ps-[15px]"
              >
                {" "}
                <span
                  className="before:content-[''] top-[4o%] block w-[5px] h-[5px] absolute left-0 rounded-full 
            bg-[#c5a47e] "
                ></span>
                DISCOVER
              </div>
            </div>

            <div className="col-span-12 md:col-span-8 px-3 ">
              <div className="font-heading text-[#1b1b1b] text-4xl font-normal mb-5 leading-6 tracking-wider [word-spacing:5px]">
                OTHER{" "}
                <span className="text-[#c5a47e] tracking-wider">PROJECTS</span>
              </div>
            </div>
          </div>

          <div>
            <Splide
              options={{
                rewind: true,
                perPage: 3,
                arrows: false,
                speed: 1000,

                mediaQuery: "min",
                breakpoints: {
                  375: {
                    perPage: 1,
                  },
                  640: {
                    perPage: 2,
                  },

                  1024: {
                    perPage: 3,
                  },
                },
              }}
              aria-label="My Favorite Images"
            >
              <SplideSlide>
                {/* Item 1 */}
                <div className=" w-358.667px float-left me-5 relative">
                  <div className="mb-6 w-full">
                    <div className="relative overflow-hidden mb-5 group">
                      
                        <img
                          className="h-full text-[#c5a47e] w-full object-cover object-center ease-in-out duration-500 group-hover:scale-105"
                          src="https://duruthemes.com/demo/html/archsan/light/images/projects/07.jpg"
                          alt=""
                        />
                      

                      <div
                        className="absolute bg-[#fff] py-[25px] pe-[25px] ps-[15px] left-0 bottom-5 ease-in-out duration-500
                         translate-x-[-110%] group-hover:translate-x-0 "
                      >
                        <div
                          className="relative text-xs leading-3 tracking-widest font-normal text-[#c5a47e]
             flex items-center pt-[5px] pb-[15px] ps-[15px]"
                        >
                          {" "}
                          <span
                            className="before:content-[''] top-[4o%] block w-[5px] h-[5px] absolute left-0 rounded-full 
            bg-[#1b1b1b] "
                          ></span>
                          PROJECT P.01
                        </div>
                        <h4 className="text-[20px]  font-heading leading-6 mb-2 text-[#1b1b1b]">
                          <a href="#" className="tracking-[2px]">
                            INTERMEDIATE HALL
                          </a>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </SplideSlide>

              <SplideSlide>
                {/* Item 2 */}
                <div className=" w-358.667px float-left me-5 min-h-[1px] relative">
                  <div className="mb-6 w-full">
                    <div className="relative overflow-hidden mb-5 group">
                      
                        <img
                          className="h-full text-[#c5a47e] w-full object-cover  object-center ease-in-out duration-500 group-hover:scale-105"
                          src="https://duruthemes.com/demo/html/archsan/light/images/projects/12.jpg"
                          alt=""
                        />
                      

                      <div
                        className="absolute bg-[#fff] py-[25px] pe-[25px] ps-[15px] left-0 bottom-5 ease-in-out duration-500
                         translate-x-[-110%] group-hover:translate-x-0 "
                      >
                        <div
                          className="relative text-xs leading-3 tracking-widest font-normal text-[#c5a47e]
             flex items-center pt-[5px] pb-[15px] ps-[15px]"
                        >
                          {" "}
                          <span
                            className="before:content-[''] top-[4o%] block w-[5px] h-[5px] absolute left-0 rounded-full 
            bg-[#1b1b1b] "
                          ></span>
                          PROJECT P.01
                        </div>
                        <h4 className="text-[20px]  font-heading leading-6 mb-2 text-[#1b1b1b]">
                          <a href="#" className="tracking-[2px]">
                            INTERMEDIATE HALL
                          </a>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </SplideSlide>

              <SplideSlide>
                {/* Item 1 */}
                <div className=" w-358.667px float-left me-5 min-h-[1px] relative">
                  <div className="mb-6 w-full">
                    <div className="relative overflow-hidden mb-5 group">
                      
                        <img
                          className="h-full text-[#c5a47e] w-full object-cover  object-center ease-in-out duration-500 group-hover:scale-105"
                          src="https://duruthemes.com/demo/html/archsan/light/images/projects/10.jpg"
                          alt=""
                        />
                      

                      <div
                        className="absolute bg-[#fff] py-[25px] pe-[25px] ps-[15px] left-0 bottom-5 ease-in-out duration-500
                         translate-x-[-110%] group-hover:translate-x-0 "
                      >
                        <div
                          className="relative text-xs leading-3 tracking-widest font-normal text-[#c5a47e] 
             flex items-center pt-[5px] pb-[15px] ps-[15px]"
                        >
                          {" "}
                          <span
                            className="before:content-[''] top-[4o%] block w-[5px] h-[5px] absolute left-0 rounded-full 
            bg-[#1b1b1b] "
                          ></span>
                          PROJECT P.01
                        </div>
                        <h4 className="text-[20px]  font-heading leading-6 mb-2 text-[#1b1b1b]">
                          <a href="#" className="tracking-[2px]">
                            INTERMEDIATE HALL
                          </a>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </SplideSlide>

              <SplideSlide>
                {/* Item 1 */}
                <div className=" w-358.667px float-left me-5 min-h-[1px] relative">
                  <div className="mb-6 w-full">
                    <div className="relative overflow-hidden mb-5 group">
                      
                        <img
                          className="h-full text-[#c5a47e] w-full object-cover  object-center ease-in-out duration-500 group-hover:scale-105"
                          src="https://duruthemes.com/demo/html/archsan/light/images/projects/11.jpg"
                          alt=""
                        />
                      

                      <div
                        className="absolute bg-[#fff] py-[25px] pe-[25px] ps-[15px] left-0 bottom-5 ease-in-out duration-500
                         translate-x-[-110%] group-hover:translate-x-0 "
                      >
                        <div
                          className="relative text-xs leading-3 tracking-widest font-normal text-[#c5a47e] 
             flex items-center pt-[5px] pb-[15px] ps-[15px]"
                        >
                          {" "}
                          <span
                            className="before:content-[''] top-[4o%] block w-[5px] h-[5px] absolute left-0 rounded-full 
            bg-[#1b1b1b] "
                          ></span>
                          PROJECT P.01
                        </div>
                        <h4 className="text-[20px]  font-heading leading-6 mb-2 text-[#1b1b1b]">
                          <a href="#" className="tracking-[2px]">
                            INTERMEDIATE HALL
                          </a>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </SplideSlide>

              <SplideSlide>
                {/* Item 1 */}
                <div className=" w-358.667px float-left me-5 min-h-[1px] relative">
                  <div className="mb-6 w-full">
                    <div className="relative overflow-hidden mb-5 group">
                      
                        <img
                          className="h-full text-[#c5a47e] w-full object-cover  object-center ease-in-out duration-500 hover:scale-105"
                          src="https://duruthemes.com/demo/html/archsan/light/images/projects/08.jpg"
                          alt=""
                        />
                     

                      <div
                        className="absolute bg-[#fff] py-[25px] pe-[25px] ps-[15px] left-0 bottom-5 ease-in-out duration-500
                         translate-x-[-110%] group-hover:translate-x-0 "
                      >
                        <div
                          className="relative text-xs leading-3 tracking-widest font-normal text-[#c5a47e]
             flex items-center pt-[5px] pb-[15px] ps-[15px]"
                        >
                          {" "}
                          <span
                            className="before:content-[''] top-[4o%] block w-[5px] h-[5px] absolute left-0 rounded-full 
            bg-[#1b1b1b] "
                          ></span>
                          PROJECT P.01
                        </div>
                        <h4 className="text-[20px]  font-heading leading-6 mb-2 text-[#1b1b1b]">
                          <a href="#" className="tracking-[2px]">
                            INTERMEDIATE HALL
                          </a>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </SplideSlide>

              <SplideSlide>
                {/* Item 1 */}
                <div className=" w-358.667px float-left me-5 min-h-[1px] relative">
                  <div className="mb-6 w-full">
                    <div className="relative overflow-hidden mb-5 group">
                      
                        <img
                          className="h-full text-[#c5a47e] w-full object-cover  object-center ease-in-out duration-500 hover:scale-105"
                          src="https://duruthemes.com/demo/html/archsan/light/images/projects/09.jpg"
                          alt=""
                        />
                      

                      <div
                        className="absolute bg-[#fff] py-[25px] pe-[25px] ps-[15px] left-0 bottom-5 ease-in-out duration-500
                         translate-x-[-110%] group-hover:translate-x-0 "
                      >
                        <div
                          className="relative text-xs leading-3 tracking-widest font-normal text-[#c5a47e]
             flex items-center pt-[5px] pb-[15px] ps-[15px]"
                        >
                          {" "}
                          <span
                            className="before:content-[''] top-[4o%] block w-[5px] h-[5px] absolute left-0 rounded-full 
            bg-[#1b1b1b] "
                          ></span>
                          PROJECT P.01
                        </div>
                        <h4 className="text-[20px]  font-heading leading-6 mb-2 text-[#1b1b1b]">
                          <a href="#" className="tracking-[2px]">
                            INTERMEDIATE HALL
                          </a>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </SplideSlide>
            </Splide>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectPage;
