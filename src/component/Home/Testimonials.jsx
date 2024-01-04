import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const Testimonials = () => {
  const bgImage =
    "https://shtheme.com/demosd/archsan/wp-content/uploads/2022/12/4.jpg";
  return (
    <section className="contact relative">
      <div
        className=" py-[120px] bg-center bg-fixed"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="  w-full h-full bg-black opacity-50 absolute top-0 left-0"></div>
        <div className=" relative container ">
          <div className="  grid grid-cols-12 items-start">
            <div className=" col-span-12 md:col-span-4 ps-[15px] pt-[5px]  pb-[15px] relative mb-[20px] md:mb-0 ">
              <span className=" w-[90%] h-[1px] border-b  absolute bottom-0"></span>
              <span className=" inline-block w-[7px] h-[7px] bg-[#c5a47efc] rounded-full mr-2"></span>
              <p className=" inline-block  uppercase text-[12px] tracking-[3px] text-white">
                TESTIMONIALS
              </p>
            </div>
            <div className=" col-span-12 md:col-span-8 px-[15px] relative">
              <h1 className=" uppercase text-[#c5a47efc] text-[36px] ps-[15px] font-heading leading-[54px] tracking-[3px] mb-[20px]">
                WHAT CLIENT'S SAY?
              </h1>

              <Splide
                aria-label="My Favorite Images"
                options={{
                  type: "loop",
                  arrows: false,
                  pagination: false,
                  perPage: 1,
                  rewind: true,
                  gap: "1rem",
                  height: "auto",
                  drag: true,
                  //   autoplay: true,
                  speed: 1000,
                  interval: 5000,
                }}
              >
                <SplideSlide>
                  <div className=" slide-1 relative">
                    <div className="quote  absolute right-0 bottom-[17px]">
                      <img
                        className=" h-[69px]"
                        src="https://shtheme.com/demosd/archsan/wp-content/themes/archsan/images/quot.png"
                        alt=""
                      />
                    </div>
                    <p className="  text-[15px] text-white leading-6 mb-[20px] ps-[15px]">
                      Architecture viverra tristique justo duis vitae diam neque
                      nivamus aestan ateuene artines aringianu the ateliten
                      finibus viverra nec lacus. Nedana theme erodino setlie
                      suscipe no curabit tristique. Design nila iman the finise
                      viverra nec a lacus themo the seneoice misuscipit non
                      sagie the fermen.
                    </p>

                    <div className=" info flex gap-3 items-center mt-[30px] mb-[20px]">
                      <div className=" w-[60px] h-[60px]  rounded-full border ">
                        <img
                          className=" block w-full h-full rounded-full p-0.5  object-cover"
                          src="https://shtheme.com/demosd/archsan/wp-content/uploads/2023/03/4.jpg"
                          alt=""
                        />
                      </div>
                      <div>
                        <h6 className=" text-[15px] text-[#c5a47efc] leading-[1em] ">
                          Jessica Smith
                        </h6>
                        <span className=" text-[13px] text-white">
                          Alsa Manager
                        </span>
                      </div>
                    </div>
                  </div>
                </SplideSlide>

                <SplideSlide>
                  <div className=" slide-2 relative">
                    <div className="quote  absolute right-0 bottom-[17px]">
                      <img
                        className=" h-[69px]"
                        src="https://shtheme.com/demosd/archsan/wp-content/themes/archsan/images/quot.png"
                        alt=""
                      />
                    </div>
                    <p className="  text-[15px] text-white leading-6 mb-[20px] ps-[15px]">
                      Architecture viverra tristique justo duis vitae diam neque
                      nivamus aestan ateuene artines aringianu the ateliten
                      finibus viverra nec lacus. Nedana theme erodino setlie
                      suscipe no curabit tristique. Design nila iman the finise
                      viverra nec a lacus themo the seneoice misuscipit non
                      sagie the fermen.
                    </p>

                    <div className=" info flex gap-3 items-center mt-[30px] mb-[20px]">
                      <div className=" w-[60px] h-[60px]  rounded-full border ">
                        <img
                          className=" block w-full h-full rounded-full p-0.5  object-cover"
                          src="https://shtheme.com/demosd/archsan/wp-content/uploads/2023/03/1.jpg"
                          alt=""
                        />
                      </div>
                      <div>
                        <h6 className=" text-[15px] text-[#c5a47efc] leading-[1em] ">
                          Jason Brown
                        </h6>
                        <span className=" text-[13px] text-white">
                          Crowne Plaza Owner
                        </span>
                      </div>
                    </div>
                  </div>
                </SplideSlide>

                <SplideSlide>
                  <div className=" slide-2 relative">
                    <div className="quote  absolute right-0 bottom-[17px]">
                      <img
                        className=" h-[69px]"
                        src="https://shtheme.com/demosd/archsan/wp-content/themes/archsan/images/quot.png"
                        alt=""
                      />
                    </div>
                    <p className="  text-[15px] text-white leading-6 mb-[20px] ps-[15px]">
                      Architecture viverra tristique justo duis vitae diam neque
                      nivamus aestan ateuene artines aringianu the ateliten
                      finibus viverra nec lacus. Nedana theme erodino setlie
                      suscipe no curabit tristique. Design nila iman the finise
                      viverra nec a lacus themo the seneoice misuscipit non
                      sagie the fermen.
                    </p>

                    <div className=" info flex gap-3 items-center mt-[30px] mb-[20px]">
                      <div className=" w-[60px] h-[60px]  rounded-full border ">
                        <img
                          className=" block w-full h-full rounded-full p-0.5  object-cover"
                          src="https://shtheme.com/demosd/archsan/wp-content/uploads/2023/03/2.jpg"
                          alt=""
                        />
                      </div>
                      <div>
                        <h6 className=" text-[15px] text-[#c5a47efc] leading-[1em] ">
                          Emily White
                        </h6>
                        <span className=" text-[13px] text-white">
                          Armada Owner
                        </span>
                      </div>
                    </div>
                  </div>
                </SplideSlide>
              </Splide>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
