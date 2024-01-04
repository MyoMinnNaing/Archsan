import React from "react";

const ToDiscuss = () => {
  return (
    <section className="contact relative">
      <div className="discuss py-[120px] bg-center bg-fixed">
        <div className="  w-full h-full bg-black opacity-60 absolute top-0 left-0"></div>
        <div className=" relative container ">
          <div className="  grid grid-cols-12 items-start">
            <div className=" col-span-12 md:col-span-4 ps-[15px] pt-[5px]  pb-[15px] relative mb-[20px] md:mb-0 ">
              <span className=" w-[90%] h-[1px] border-b absolute bottom-0"></span>
              <span className=" inline-block w-[7px] h-[7px] bg-[#c5a47efc] rounded-full mr-2"></span>
              <p className=" inline-block  uppercase text-[12px] tracking-[3px] text-white">
                Contact Us
              </p>
            </div>
            <div className=" col-span-12 md:col-span-8">
              <h1 className=" uppercase text-[#c5a47efc] text-[36px] ps-[15px] font-heading leading-[54px] tracking-[3px] mb-[20px]">
                LET'S DISCUSS YOUR PROJECT
              </h1>
              <p className="  text-[15px] text-white leading-6 mb-[20px] ps-[15px]">
                Fill out the form and our manager will contact you for
                consultation.
              </p>

              {/* form */}
              <div className="  px-[15px]">
                <div className="  grid grid-cols-12 gap-3 items-center mb-[20px]">
                  <div className=" col-span-12 md:col-span-6 ">
                    <input
                      type="text"
                      placeholder="Full Name *"
                      className=" w-full bg-transparent  border-t-transparent  border-x-transparent focus:border-t-transparent focus:border-x-transparent focus:border-b-white focus:ring-0   placeholder:text-white font-normal text-white  py-[15px] mb-5 md:mb-0  text-[15px]  "
                    />
                  </div>
                  <div className=" col-span-12 md:col-span-3">
                    <input
                      type="text"
                      placeholder="Phone *"
                      className=" w-full bg-transparent  border-t-transparent  border-x-transparent focus:border-t-transparent focus:border-x-transparent focus:border-b-white focus:ring-0   placeholder:text-white font-normal text-white  py-[15px] mb-5 md:mb-0  text-[15px]  "
                    />
                  </div>
                  <div className=" col-span-12 md:col-span-3">
                    <button className=" px-[30px] py-[10px] border rounded-full text-[15px] bg-[#c5a47efc] text-white hover:bg-transparent  hover:border-[#c5a47efc] mb-5 md:mb-0 duration-300 hover:text-[#c5a47efc]">
                      Send
                    </button>
                  </div>
                </div>
              </div>

              <div className=" grid grid-cols-12 px-[15px] mt-[20px]">
                <div className=" col-span-12 ">
                  <div className=" flex items-center gap-3">
                    <input
                      id="teal-checkbox"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 text-teal-600 bg-gray-100 border-gray-300 rounded focus:ring-teal-500 dark:focus:ring-teal-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="teal-checkbox"
                      className=" text-white text-[15px]"
                    >
                      I agree with the {"  "}
                      <a href="#0" className="underline text-[#c5a47efc]">
                        privacy policy
                      </a>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToDiscuss;
