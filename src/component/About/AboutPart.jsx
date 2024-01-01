import React from "react";

const AboutPart = () => {
  return (
    <div>
      <div>
        <div className="relative py-[120px]">
          <div className="min:w-[667px] xl:w-[1140px] grid grid-cols-12 mx-auto">
            <div className="col-span-12 xl:col-span-4 mb-[30px] ps-3 pe-3">
              <div
                className="relative text-xs leading-3 tracking-widest font-normal text-[#1b1b1b] border-bottom 
             flex items-center pt-[5px] pb-[15px] ps-[15px]"
              >
                {" "}
                <span
                  className="before:content-[''] top-[4o%] block w-[5px] h-[5px] absolute left-0 rounded-full 
            bg-[#c5a47e] "
                ></span>
                ABOUT
              </div>
            </div>

            <div className="col-span-12 xl:col-span-4 mb-[30px] ps-3 pe-3">
              <div className="font-heading text-[#c5a47e] text-4xl font-normal mb-7 leading-6 tracking-wider [word-spacing:5px]">
                ARCSA <span className="text-[#1b1b1b]">ABOUT</span>
              </div>
              <p className=" text-[15px] leading-7 text-[#777] font-normal mb-5">
                Architecture viverra tristique justo duis vitae iaminte neque
                nivamus aestan ateuene artines aringianu the ateliten finibus
                viverra nec lacus in the nedana mis erodino setlie suscipe no
                curabit tristue.
              </p>
              <p className=" text-[15px] leading-7 text-[#777] font-normal mb-5">
                Design nila iman the finise viverra nec a lacus themo the
                seneoice misuscipit non sagie the fermen.
              </p>
              <p className=" text-[15px] leading-7 text-[#777] font-normal mb-5">
                Planner inilla duiman at elit finibus viverra nec a acus themo
                the drudea seneoice misuscipit nonie the fermen miverra the
                ivite dianne onen nivam.
              </p>

              <div className="pt-5 w-full">
                <ul className="flex">
                  <li className="flex items-center">
                    <div>
                      <h1 className="text-6xl text-[#c5a47e] mr-[15px] font-heading font-normal leading-6">
                        24
                      </h1>
                    </div>
                    <div className="text-[15px] leading-6 pt-[5px] text-[#1b1b1b] tracking-wider">
                      YEARS <br />
                      OF EXPERIENCE
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-span-12 xl:col-span-4 ps-3 pe-3">
              <div className="flex flex-wrap pb-[30px] ps-[40px] overflow-hidden">
                <div className="relative inline-block w-full mb-5 align-middle">
                  <img
                    className="h-auto max-w-full"
                    src="https://shtheme.com/demosd/archsan/wp-content/uploads/2023/03/about.jpg"
                    alt=""
                  />

                  <div className="absolute -left-[7px] bottom-0 origin-bottom-left -rotate-90">
                    <h4 className="flex items-center text-[15px] font-normal [word-spacing:5px] ps-[15px] ms-[10px] text-[#777] tracking-wider">
                      <span
                        className="before:content-[''] top-[55%] left-[5px] -translate-y-[50%] w-[5px] h-[5px] absolute rounded-full 
            bg-[#c5a47e] "
                      ></span>
                      STELLA ATHENA
                    </h4>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap pb-[30px] ps-[40px] overflow-hidden">
                <div className="relative inline-block w-full mb-5 align-middle">
                  <img
                    className="h-auto max-w-full"
                    src="https://shtheme.com/demosd/archsan/wp-content/uploads/2023/03/about2.jpg"
                    alt=""
                  />

                  <div className="absolute -left-[7px] bottom-0 origin-bottom-left -rotate-90">
                    <h4 className="flex items-center text-[15px] font-normal [word-spacing:5px] ps-[15px] ms-[10px] text-[#777] tracking-wider">
                      <span
                        className="before:content-[''] top-[55%] left-[5px] -translate-y-[50%] w-[5px] h-[5px] absolute rounded-full 
            bg-[#c5a47e] "
                      ></span>
                      MARTIN DAN
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className=" xl:w-[1140px] grid grid-cols-12 mx-auto">
            <div className="col-span-12 xl:col-span-4"></div>
            <div className="col-span-12 xl:col-span-8 mt-5">
              <div className="grid grid-cols-12">
                <div className="col-span-12 relative ps-3 pe-3">
                  <div className="mt-5">
                    <h6 className="text-[15px] text-[#1b1b1b] font-normal mb-2.5 z-10 relative flex justify-between">
                      Architectural Design
                      <i className="text-[10px] me-2.5 not-italic tracking-widest">
                        (90%)
                      </i>
                    </h6>

                    <div className="relative bg-[#ececec]">
                      <div
                        className="bg-[#c5a47e] relative h-[0.5px] rounded-[5px] "
                        style={{ width: "90%" }}
                      >
                        {" "}
                        <span
                          className=" after:content-[''] w-[3px] h-[3px] rounded-full absolute bg-[#c5a47e]
                          -top-[1px] -right-[5px]"
                        ></span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-5">
                    <h6 className="text-[15px] text-[#1b1b1b] font-normal mb-2.5 z-10 relative flex justify-between">
                      3D Modelling
                      <i className="text-[10px] me-2.5 not-italic tracking-widest">
                        (80%)
                      </i>
                    </h6>

                    <div className="relative bg-[#ececec]">
                      <div
                        className="bg-[#c5a47e] relative h-[1px] rounded-[5px] "
                        style={{ width: "80%" }}
                      >
                        {" "}
                        <span className=" after:content-[''] w-[3px] h-[3px] rounded-full absolute bg-[#c5a47e] -top-[1px] -right-[5px]"></span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-5">
                    <h6 className="text-[15px] text-[#1b1b1b] font-normal mb-2.5 z-10 relative flex justify-between">
                      Motion Graphics
                      <i className="text-[10px] me-2.5 not-italic tracking-widest">
                        (90%)
                      </i>
                    </h6>

                    <div className="relative bg-[#ececec]">
                      <div
                        className="bg-[#c5a47e] relative h-[1px] rounded-[5px] "
                        style={{ width: "90%" }}
                      >
                        {" "}
                        <span className=" after:content-[''] w-[3px] h-[3px] rounded-full absolute bg-[#c5a47e] -top-[1px] -right-[5px]"></span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-5">
                    <h6 className="text-[15px] text-[#1b1b1b] font-normal mb-2.5 z-10 relative flex justify-between">
                      Interior Design
                      <i className="text-[10px] me-2.5 not-italic tracking-widest">
                        (70%)
                      </i>
                    </h6>

                    <div className="relative bg-[#ececec]">
                      <div
                        className="bg-[#c5a47e] relative h-[0.5px] rounded-[5px] "
                        style={{ width: "70%" }}
                      >
                        {" "}
                        <span className=" after:content-[''] w-[3px] h-[3px] rounded-full absolute bg-[#c5a47e] -top-[1.5px] -right-[5px]"></span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        <div>
          <div>
            <div className="relative py-[120px]">
              <div className="min-w-[667px] xl:w-[1140px] mx-auto">
                <div className="mb-6 grid grid-cols-12 mx-auto">
                  <div className="col-span-12 xl:col-span-4 ps-3 pe-3">
                    <div
                      className="relative text-xs leading-3 tracking-widest font-normal text-[#1b1b1b] border-bottom 
             flex items-center pt-[5px] pb-[15px] ps-[15px]"
                    >
                      {" "}
                      <span
                        className="before:content-[''] top-[4o%] block w-[5px] h-[5px] absolute left-0 rounded-full 
            bg-[#c5a47e] "
                      ></span>
                      CREATIVE THINKERS
                    </div>
                  </div>

                  <div className="col-span-12 xl:col-span-8 mt-4 xl:mt-0 ps-3 pe-3">
                    <div className="font-heading text-[#c5a47e] text-4xl font-normal mb-7 leading-6 tracking-wider [word-spacing:5px]">
                      TEAM <span className="text-[#1b1b1b]">MEMBERS</span>
                    </div>
                    <p className=" text-[15px] leading-7 text-[#777]  font-normal mb-5">
                      Architecture viverra tristique justo duis vitae diaminte
                      neque nivamus aestan ateuene artines ariianu the ateliten
                      finibus viverra nec lacus in the nedana mis erodino.
                    </p>
                  </div>
                </div>

                {/* Card carousel */}

                <div>
                  <div className="relative z-[1] block">
                    <div className="relative overflow-hidden">
                      <div className="min-w-[667px] lg:w-[4545px] block lg:flex relative [translate3d:(-1136px,0px,0px)] ease-in-out	">
                        <div className="w-[300px] lg:w-358.667px  me-5 float-left">
                          <div className="ps-10 pb-[30px] overflow-hidden">
                            <div className="relative inline-block align-middle w-full mb-5">
                              <img
                                className="h-auto"
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

                        <div className="w-[300px] lg:w-358.667px  me-5 float-left">
                          <div className="ps-10 pb-[30px] overflow-hidden">
                            <div className="relative inline-block align-middle w-full mb-5">
                              <img
                                className="h-auto"
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

                        <div className="w-[300px] lg:w-358.667px me-5 float-left">
                          <div className="ps-10 pb-[30px] overflow-hidden">
                            <div className="relative inline-block align-middle w-full mb-5">
                              <img
                                className="h-auto"
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
                      </div>
                    </div>
                  </div>

                  <div className="block text-center leading-3">
                    <div className="inline-block cursor-pointer active">
                      <span className="bg-[#c5a47e] border border-[#c5a47e] block w-3 h-3 rounded-full mx-[3px]"></span>
                    </div>
                    <div className="inline-block cursor-pointer active">
                      <span className="bg-transparent border border-[#c5a47e] block w-3 h-3 rounded-full mx-[3px]"></span>
                    </div>
                  </div>
                </div>

                {/* <div
                  id="default-carousel"
                  className="relative w-full"
                  data-carousel="slide"
                > */}
                {/* Carousel wrapper */}
                {/* <div className="relative h-56 overflow-hidden rounded-lg md:h-96"> */}
                {/* Item 1 */}
                {/* <div
                      className=" duration-700 ease-in-out"
                      data-carousel-item
                    >
                      <img
                        src="https://duruthemes.com/demo/html/archsan/light/images/team/10.jpg"
                        className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                        alt="..."
                      />
                    </div> */}

                {/* Item 2 */}
                {/* <div
                      className="hidden duration-700 ease-in-out"
                      data-carousel-item
                    >
                      <img
                        src="/docs/images/carousel/carousel-2.svg"
                        className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                        alt="..."
                      />
                    </div> */}
                {/* Item 3 */}
                {/* <div
                      className="hidden duration-700 ease-in-out"
                      data-carousel-item
                    >
                      <img
                        src="/docs/images/carousel/carousel-3.svg"
                        className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                        alt="..."
                      />
                    </div> */}
                {/* Item 4 */}
                {/* <div
                      className="hidden duration-700 ease-in-out"
                      data-carousel-item
                    >
                      <img
                        src="/docs/images/carousel/carousel-4.svg"
                        className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                        alt="..."
                      />
                    </div> */}
                {/* Item 5 */}
                {/* <div
                      className="hidden duration-700 ease-in-out"
                      data-carousel-item
                    >
                      <img
                        src="/docs/images/carousel/carousel-5.svg"
                        className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                        alt="..."
                      />
                    </div>
                  </div> */}

                {/* Slider indicators */}
                {/* <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                    <button
                      type="button"
                      className="w-3 h-3 rounded-full"
                      aria-current="true"
                      aria-label="Slide 1"
                      data-carousel-slide-to={0}
                    />
                    <button
                      type="button"
                      className="w-3 h-3 rounded-full"
                      aria-current="false"
                      aria-label="Slide 2"
                      data-carousel-slide-to={1}
                    />
                    <button
                      type="button"
                      className="w-3 h-3 rounded-full"
                      aria-current="false"
                      aria-label="Slide 3"
                      data-carousel-slide-to={2}
                    />
                    <button
                      type="button"
                      className="w-3 h-3 rounded-full"
                      aria-current="false"
                      aria-label="Slide 4"
                      data-carousel-slide-to={3}
                    />
                    <button
                      type="button"
                      className="w-3 h-3 rounded-full"
                      aria-current="false"
                      aria-label="Slide 5"
                      data-carousel-slide-to={4}
                    />
                  </div> */}
                {/* Slider controls */}
                {/* <button
                    type="button"
                    className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                    data-carousel-prev
                  >
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                      <svg
                        className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 6 10"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 1 1 5l4 4"
                        />
                      </svg>
                      <span className="sr-only">Previous</span>
                    </span>
                  </button>
                  <button
                    type="button"
                    className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                    data-carousel-next
                  >
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                      <svg
                        className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 6 10"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="m1 9 4-4-4-4"
                        />
                      </svg>
                      <span className="sr-only">Next</span>
                    </span>
                  </button>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPart;
