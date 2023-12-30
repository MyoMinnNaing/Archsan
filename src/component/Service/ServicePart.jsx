import React from "react";

const ServicePart = () => {
  return (
    <div>
      <div className="w-[1140px] grid grid-cols-12 mx-auto mb-12">
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
            DISCOVER
          </div>
        </div>

        <div className="col-span-8 mb-[30px] ps-3 pe-3">
          <div className="font-heading text-[#1b1b1b] text-4xl font-normal mb-7 leading-6 tracking-wider [word-spacing:5px]">
            CREATIVE <span className="text-[#c5a47e]">PROJECTS</span>
          </div>
          <p className=" text-[15px] leading-7 text-[#777] font-normal mb-5">
            Architecture viverra tristique justo duis vitae diaminte neque
            nivamus aestan ateuene artines ariianu the ateliten finibus viverra
            nec lacus in the nedana mis erodino. Design nila iman the finise
            viverra nec a lacus miss viventa in the setlien suscipe no curabit
            tristue the seneoice misuscipit non sagie the fermen.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicePart;
