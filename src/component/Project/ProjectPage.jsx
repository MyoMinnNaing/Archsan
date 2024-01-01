import React from "react";

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

          {/* Card carousel */}

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
                <div className=" lg:w-358.667px  me-5 float-left">
                  <div className="ps-10 pb-[30px] overflow-hidden">
                    <div className="relative inline-block align-middle w-full mb-5">
                      <img
                        className="h-[316px]"
                        src="https://shtheme.com/demosd/archsan/wp-content/uploads/2023/03/1.jpg"
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
                        src="https://duruthemes.com/demo/html/archsan/light/images/team/7.jpg"
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
                        src="https://duruthemes.com/demo/html/archsan/light/images/team/11.jpg"
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

              <SplideSlide>
                {/* Item 1 */}
                <div className="lg:w-358.667px  me-5 float-left">
                  <div className="ps-10 pb-[30px] overflow-hidden">
                    <div className="relative inline-block align-middle w-full mb-5">
                      <img
                        className="h-[316px]"
                        src="https://shtheme.com/demosd/archsan/wp-content/uploads/2023/03/3.jpg"
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
                        src="https://shtheme.com/demosd/archsan/wp-content/uploads/2023/03/5.jpg"
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
                        src="https://shtheme.com/demosd/archsan/wp-content/uploads/2023/03/12.jpg"
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
  );
};

export default ProjectPage;
