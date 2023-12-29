import React from "react";

const AboutPart = () => {
  return (
    <div>
      <div>
        <div className="relative py-[120px]">
          <div className="w-[1140px] grid grid-cols-12 mx-auto">
            <div className="col-span-4 mb-[30px] ps-3 pe-3">
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

            <div className="col-span-4 mb-[30px] ps-3 pe-3">
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

            <div className="col-span-4 ps-3 pe-3">
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

          <div className="w-[1140px] grid grid-cols-12 mx-auto">
            <div className="col-span-4"></div>
            <div className="col-span-8 mt-5">
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
              <div className="w-[1140px] mx-auto">
                <div className="mb-6 grid grid-cols-12 mx-auto">
                  <div className="col-span-4 ps-3 pe-3">
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

                  <div className="col-span-8 ps-3 pe-3">
                    <div className="font-heading text-[#c5a47e] text-4xl font-normal mb-7 leading-6 tracking-wider [word-spacing:5px]">
                      TEAM <span className="text-[#1b1b1b]">MEMBERS</span>
                    </div>
                    <p className=" text-[15px] leading-7 text-[#777] font-normal mb-5">
                      Architecture viverra tristique justo duis vitae diaminte
                      neque nivamus aestan ateuene artines ariianu the ateliten
                      finibus viverra nec lacus in the nedana mis erodino.
                    </p>
                  </div>
                </div>

                {/* Card carousel */}

                <div>
                  <div className="relative z-[1]">
                    <div className="relative overflow-hidden">
                      <div className="max-w-[4545px] relative [translate3d:(-1136px,0px,0px)] ease-in-out	">
                        <div className="w-358.667px me-5 float-left">
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

                            <ul>
                              <li>
                                <a href="#">
                                  <i className=""></i>
                                </a>
                              </li>
                              <li></li>
                              <li></li>
                              <li></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPart;
