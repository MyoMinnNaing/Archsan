import React from "react";

const AboutArchsan = () => {
  return (
    <section className=" py-[120px] relative">
      <div className=" container">
        <div className=" grid grid-cols-12 gap-3">
          <div className="   col-span-12 md:col-span-4 px-[15px] pt-[5px]  pb-[15px] relative">
            <span className=" w-[90%] h-[1px] border-bottom absolute bottom-0"></span>
            <span className=" inline-block w-[7px] h-[7px] bg-[#c5a47efc] rounded-full mr-2"></span>
            <p className=" inline-block uppercase text-[12px] tracking-[3px]">
              Who we are ?
            </p>
          </div>
          <div className=" col-span-12 md:col-span-8 px-[15px]">
            <h1 className=" uppercase text-[36px]  font-heading leading-[54px] tracking-[3px] mb-[20px]">
              About <span className=" text-[#c5a47efc] ">Archan</span>
            </h1>

            <p className=" mb-[20px] text-[15px] text-[#777] leading-[1.75em] ">
              Architecture viverra tristique justo duis vitae diaminte neque
              nivamus aestan ateuene artines aringianu the ateliten finibus
              viverra nec in the nedana. Design nila iman the finise viverra nec
              a lacus themo the seneoice misuscipit drana miss non sagie the
              fermen.
            </p>

            <p className=" mb-[60px] text-[15px] text-[#777] leading-[1.75em]">
              Planner inilla duiman at elit finibus viverra a lacus themo the
              drudea seneoice misuscipit nonie the fermen miverration tristique
              jusio the ivite dianne onen nivami acsestion augue artine.
            </p>

            <div className=" grid grid-cols-12">
              <div className=" col-span-4">
                <div className=" flex flex-col items-center gap-3">
                  <img
                    className=" w-[50px] h-[30px]"
                    src="https://shtheme.com/demosd/archsan/wp-content/uploads/2023/03/icon-1.png"
                    alt=""
                  />
                  <h5 className=" text-[13px] uppercase tracking-[5px] font-heading">
                    Architecture
                  </h5>
                </div>
              </div>
              <div className=" col-span-4">
                <div className=" flex flex-col items-center gap-3">
                  <img
                    className=" w-[50px] h-[30px]"
                    src="https://shtheme.com/demosd/archsan/wp-content/uploads/2023/03/icon-2.png"
                    alt=""
                  />
                  <h5 className=" text-[13px] uppercase tracking-[5px] font-heading">
                    INTERIOR
                  </h5>
                </div>
              </div>
              <div className=" col-span-4">
                <div className=" flex flex-col items-center gap-3">
                  <img
                    className=" w-[50px] h-[30px]"
                    src="https://shtheme.com/demosd/archsan/wp-content/uploads/2023/03/icon-3.png"
                    alt=""
                  />
                  <h5 className=" text-[13px] uppercase tracking-[5px] font-heading">
                    PLANING
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutArchsan;
