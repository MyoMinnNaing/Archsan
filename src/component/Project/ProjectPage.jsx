import React from "react";

import { Splide, SplideSlide } from "@splidejs/react-splide";

import "@splidejs/react-splide/css";

const ProjectPage = () => {
  return (
    <div>
      <section>
        <div className="container relative py-[120px]">
          <div className="grid grid-rows-12">
            <div className="row-span-12 px-3">
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
                    <span className="text-[#c5a47e] tracking-wider">
                      PROJECTS
                    </span>
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
                    <div className=" w-358.667px float-left me-5 min-h-[1px]">
                      <div className="mb-6 w-full">
                        <div className="relative overflow-hidden group">
                          <div className="relative inline-block align-middle  w-full mb-5">
                            <img
                              className="h-full text-[#c5a47e] w-full object-cover  object-center ease-in-out duration-500 block hover:scale-105"
                              src="https://duruthemes.com/demo/html/archsan/light/images/projects/07.jpg"
                              alt=""
                            />
                          </div>

                          <div
                            className="absolute bg-[#fff] py-[25px] p3-[25px] ps-[15px] left-0 bottom-5 ease-in-out duration-500
                         translate-x-[-110%] group-hover:translate-x-0 "
                          >
                            <p
                              className="flex items-center relative text-[11px] font-normal [word-spacing:5px] ps-[15px]
                                 ms-[5px] text-[#1b1b1b] tracking-wider mt-[5px]"
                            >
                              <span
                                className="before:content-[''] top-[55%] left-[5px] -translate-y-[50%] w-[5px] h-[5px] 
                                    absolute rounded-full bg-[#c5a47e] "
                              >
                                PROJECT P.01
                              </span>
                            </p>
                            <h4 className="text-[20px] tracking-[2px] text-[#1b1b1b]">
                              <a href="#">INTERMEDIATE HALL</a>
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SplideSlide>

                  <SplideSlide>
                    {/* Item 2 */}
                    <div className="w-358.667px float-left me-5 min-h-[1px]">
                      <div className="mb-6 w-full">
                        <div className="relative overflow-hidden">
                          <div className="relative inline-block align-middle w-full mb-5">
                            <img
                              className="h-full text-[#c5a47e] w-full object-cover object-center ease-in-out duration-500 block hover:scale-105"
                              src="https://duruthemes.com/demo/html/archsan/light/images/projects/07.jpg"
                              alt=""
                            />
                          </div>

                          <div
                            className="absolute bg-[#fff] py-[25px] p3-[25px] ps-[15px] left-0 bottom-5 ease-in-out duration-500
                         translate-x-[-110%] hover:translate-x-10"
                          >
                            <p
                              className="flex items-center text-[11px] font-normal [word-spacing:5px] ps-[15px]
                                 ms-[5px] text-[#1b1b1b] tracking-wider"
                            >
                              <span
                                className="before:content-[''] top-[55%] left-[5px] -translate-y-[50%] w-[5px] h-[5px] 
                                    absolute rounded-full bg-[#c5a47e] "
                              >
                                PROJECT P.01
                              </span>
                            </p>
                            <h4 className="text-[20px] tracking-[2px] text-[#1b1b1b]">
                              <a href="#">INTERMEDIATE HALL</a>
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SplideSlide>

                  <SplideSlide>
                    {/* Item 3 */}
                    <div className="w-358.667px float-left me-5 min-h-[1px]">
                      <div className="mb-6 w-full">
                        <div className="relative overflow-hidden">
                          <div className="relative inline-block align-middle w-full mb-5">
                            <img
                              className="h-full text-[#c5a47e] w-full object-cover object-center ease-in-out duration-500 block hover:scale-105"
                              src="https://duruthemes.com/demo/html/archsan/light/images/projects/07.jpg"
                              alt=""
                            />
                          </div>

                          <div
                            className="absolute bg-[#fff] py-[25px] p3-[25px] ps-[15px] left-0 bottom-5 ease-in-out duration-500
                         translate-x-[-110%] hover:translate-x-10"
                          >
                            <p
                              className="flex items-center text-[11px] font-normal [word-spacing:5px] ps-[15px]
                                 ms-[5px] text-[#1b1b1b] tracking-wider"
                            >
                              <span
                                className="before:content-[''] top-[55%] left-[5px] -translate-y-[50%] w-[5px] h-[5px] 
                                    absolute rounded-full bg-[#c5a47e] "
                              >
                                PROJECT P.01
                              </span>
                            </p>
                            <h4 className="text-[20px] tracking-[2px] text-[#1b1b1b]">
                              <a href="#">INTERMEDIATE HALL</a>
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SplideSlide>

                  <SplideSlide>
                    {/* Item 1 */}
                    <div className="lg:w-358.667px  me-5 float-left">
                      <div className="ps-10 pb-[30px] overflow-hidden">
                        <div className="relative inline-block align-middle w-full mb-5">
                          <img
                            className="h-[316px]"
                            src="https://duruthemes.com/demo/html/archsan/light/images/projects/11.jpg"
                            alt=""
                          />

                          <div className="absolute -left-[7px] bottom-0 origin-bottom-left -rotate-90">
                            <h4
                              className="flex items-center text-[15px] font-normal [word-spacing:5px] ps-[15px]
                                 ms-[10px] text-[#777] tracking-wider"
                            >
                              <span
                                className="before:content-[''] top-[55%] left-[5px] -translate-y-[50%] w-[5px] h-[5px] 
                                    absolute rounded-full bg-[#c5a47e] "
                              ></span>
                              STELLA ATHENA
                            </h4>
                          </div>
                        </div>

                        <ul className=" text-center mb-2.5">
                          <li className="inline-block px-[5px]">
                            <a href="#" className="text-[#c5a47e]">
                              <i className="bi bi-dribbble"></i>
                            </a>
                          </li>
                          <li className="inline-block px-[5px]">
                            <a href="#" className="text-[#c5a47e]">
                              <i className="bi bi-twitter"></i>
                            </a>
                          </li>
                          <li className="inline-block px-[5px]">
                            <a href="#" className="text-[#c5a47e]">
                              <i className="bi bi-instagram"></i>
                            </a>
                          </li>
                          <li className="inline-block px-[5px]">
                            <a href="#" className="text-[#c5a47e]">
                              <i className="bi bi-linkedin"></i>
                            </a>
                          </li>
                        </ul>

                        <p className="text-center text-[15px] font-normal text-[#777] mb-5 leading-7">
                          dipl. Arch ETH/SIA
                        </p>
                      </div>
                    </div>
                  </SplideSlide>

                  <SplideSlide>
                    {/* Item 2 */}
                    <div className="lg:w-358.667px  me-5 float-left">
                      <div className="ps-10 pb-[30px] overflow-hidden">
                        <div className="relative inline-block align-middle w-full mb-5">
                          <img
                            className="h-[316px]"
                            src="https://duruthemes.com/demo/html/archsan/light/images/projects/08.jpg"
                            alt=""
                          />

                          <div className="absolute -left-[7px] bottom-0 origin-bottom-left -rotate-90">
                            <h4
                              className="flex items-center text-[15px] font-normal [word-spacing:5px] ps-[15px]
                                 ms-[10px] text-[#777] tracking-wider"
                            >
                              <span
                                className="before:content-[''] top-[55%] left-[5px] -translate-y-[50%] w-[5px] h-[5px] 
                                    absolute rounded-full bg-[#c5a47e] "
                              ></span>
                              OLIVIA BROWN
                            </h4>
                          </div>
                        </div>

                        <ul className=" text-center mb-2.5">
                          <li className="inline-block px-[5px]">
                            <a href="#" className="text-[#c5a47e]">
                              <i className="bi bi-dribbble"></i>
                            </a>
                          </li>
                          <li className="inline-block px-[5px]">
                            <a href="#" className="text-[#c5a47e]">
                              <i className="bi bi-twitter"></i>
                            </a>
                          </li>
                          <li className="inline-block px-[5px]">
                            <a href="#" className="text-[#c5a47e]">
                              <i className="bi bi-instagram"></i>
                            </a>
                          </li>
                          <li className="inline-block px-[5px]">
                            <a href="#" className="text-[#c5a47e]">
                              <i className="bi bi-linkedin"></i>
                            </a>
                          </li>
                        </ul>

                        <p className="text-center text-[15px] font-normal text-[#777] mb-5 leading-7">
                          M.A. FH in Architecture
                        </p>
                      </div>
                    </div>
                  </SplideSlide>

                  <SplideSlide>
                    {/* Item 3 */}
                    <div className="lg:w-358.667px me-5 float-left">
                      <div className="ps-10 pb-[30px] overflow-hidden">
                        <div className="relative inline-block align-middle w-full mb-5">
                          <img
                            className="h-[316px]"
                            src="https://duruthemes.com/demo/html/archsan/light/images/projects/09.jpg"
                            alt=""
                          />

                          <div className="absolute -left-[7px] bottom-0 origin-bottom-left -rotate-90">
                            <h4
                              className="flex items-center text-[15px] font-normal [word-spacing:5px] ps-[15px]
                                 ms-[10px] text-[#777] tracking-wider"
                            >
                              <span
                                className="before:content-[''] top-[55%] left-[5px] -translate-y-[50%] w-[5px] h-[5px] 
                                    absolute rounded-full bg-[#c5a47e] "
                              ></span>
                              YVONNE COLM
                            </h4>
                          </div>
                        </div>

                        <ul className="text-center mb-2.5">
                          <li className="inline-block px-[5px]">
                            <a href="#" className="text-[#c5a47e]">
                              <i className="bi bi-dribbble"></i>
                            </a>
                          </li>
                          <li className="inline-block px-[5px]">
                            <a href="#" className="text-[#c5a47e]">
                              <i className="bi bi-twitter"></i>
                            </a>
                          </li>
                          <li className="inline-block px-[5px]">
                            <a href="#" className="text-[#c5a47e]">
                              <i className="bi bi-instagram"></i>
                            </a>
                          </li>
                          <li className="inline-block px-[5px]">
                            <a href="#" className="text-[#c5a47e]">
                              <i className="bi bi-linkedin"></i>
                            </a>
                          </li>
                        </ul>

                        <p className="text-center text-[15px] font-normal text-[#777] mb-5 leading-7">
                          Interior Designer
                        </p>
                      </div>
                    </div>
                  </SplideSlide>
                </Splide>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default ProjectPage;
