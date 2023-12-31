import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Process = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className="container">
      <div className=" py-32">
        <div
          data-aos="fade-up"
          data-aos-once="true"
          className="flex items-start flex-col md:flex-row mb-20"
        >
          <div className=" w-full md:w-[34%]">
            <div className=" border-b-[1px] border-neutral-100 uppercase text-sm tracking-widest mb-4 mx-3 px-5 pt-2 pb-3 relative before:w-[6px] before:h-[6px] before:bg-theme-color before:absolute before:rounded-full before:top-[15px] before:left-1">
              Workflow
            </div>
          </div>
          <div className="w-full md:w-[66%] px-3">
            <h2 className=" uppercase text-4xl font-heading leading-[56px]  tracking-wider mb-7">
              Our <span className=" text-theme-color">Process</span>
            </h2>
          </div>
        </div>

        <div className="flex flex-col mx-3 items-center md:items-start lg:items-center gap-6 md:flex-row">
          <div
            data-aos="fade-right"
            data-aos-once="true"
            className="basis-full md:basis-1/2 lg:order-none order-1 "
          >
            <div className="overflow-hidden">
              <img
                src="https://shtheme.com/demosd/archsan/wp-content/uploads/2022/12/4.jpg"
                alt="archsan-img"
                className="cursor-pointer transition duration-500 ease-img-out-expo hover:scale-110"
              />
            </div>
          </div>

          <div
            data-aos="fade-left"
            data-aos-once="true"
            className="basis-full md:basis-1/2 lg:order-none order-2 "
          >
            <div className="p-8">
              <h1 className=" outline-num mb-5">01</h1>
              <div className="">
                <h3 className=" text-2xl uppercase font-heading tracking-wider mb-4">
                  Concept Design
                </h3>
                <p className=" text-neutral-500 leading-6">
                  Architecture viverra tristique justo duis vitae diam neque
                  nivamus aestan ateuene artines aringianu the ateliten finibus
                  viverra nec lacus. Nedana theme erodino setlie suscipe no
                  curabit tristique.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col mx-3 items-center md:items-start lg:items-center gap-6 md:flex-row">
          <div
            data-aos="fade-right"
            data-aos-once="true"
            className="basis-full md:basis-1/2 lg:order-none order-2 "
          >
            <div className="p-8">
              <h1 className=" outline-num mb-5">02</h1>
              <div className="">
                <h3 className=" text-2xl uppercase font-heading tracking-wider mb-4">
                  Preliminary Plans & Pricing
                </h3>
                <p className=" text-neutral-500 leading-6">
                  Architecture viverra tristique justo duis vitae diam neque
                  nivamus aestan ateuene artines aringianu the ateliten finibus
                  viverra nec lacus. Nedana theme erodino setlie suscipe no
                  curabit tristique.
                </p>
              </div>
            </div>
          </div>
          <div data-aos="fade-left" data-aos-once="true" className="basis-full md:basis-1/2 lg:order-none order-1 ">
            <div className="overflow-hidden">
              <img
                src="https://shtheme.com/demosd/archsan/wp-content/uploads/2022/12/3.jpg"
                alt="archsan-img"
                className="cursor-pointer transition duration-500 ease-img-out-expo hover:scale-110"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col mx-3 items-center md:items-start lg:items-center gap-6 md:flex-row">
          <div
            data-aos="fade-right"
            data-aos-once="true"
            className="basis-full md:basis-1/2 lg:order-none order-1 "
          >
            <div className="overflow-hidden">
              <img
                src="https://shtheme.com/demosd/archsan/wp-content/uploads/2022/12/2.jpg"
                alt="archsan-img"
                className="cursor-pointer transition duration-500 ease-img-out-expo hover:scale-110"
              />
            </div>
          </div>

          <div
            data-aos="fade-left"
            data-aos-once="true"
            className="basis-full md:basis-1/2 lg:order-none order-2  "
          >
            <div className="p-8">
              <h1 className=" outline-num mb-5">03</h1>
              <div className="">
                <h3 className=" text-2xl uppercase font-heading tracking-wider mb-4">
                  Working Drawings & Consents
                </h3>
                <p className=" text-neutral-500 leading-6">
                  Architecture viverra tristique justo duis vitae diam neque
                  nivamus aestan ateuene artines aringianu the ateliten finibus
                  viverra nec lacus. Nedana theme erodino setlie suscipe no
                  curabit tristique.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col mx-3 items-center md:items-start lg:items-center gap-6 md:flex-row">
          <div
            data-aos="fade-right"
            data-aos-once="true"
            className="basis-full md:basis-1/2 lg:order-none order-2  "
          >
            <div className="p-8">
              <h1 className=" outline-num mb-5">04</h1>
              <div className="">
                <h3 className=" text-2xl uppercase font-heading tracking-wider mb-4">
                  Chosing Your Builder
                </h3>
                <p className=" text-neutral-500 leading-6">
                  Architecture viverra tristique justo duis vitae diam neque
                  nivamus aestan ateuene artines aringianu the ateliten finibus
                  viverra nec lacus. Nedana theme erodino setlie suscipe no
                  curabit tristique.
                </p>
              </div>
            </div>
          </div>
          <div data-aos="fade-left" data-aos-once="true" className="basis-full md:basis-1/2 lg:order-none order-1 ">
            <div className="overflow-hidden">
              <img
                src="https://shtheme.com/demosd/archsan/wp-content/uploads/2022/12/1.jpg"
                alt="archsan-img"
                className="cursor-pointer transition duration-500 ease-img-out-expo hover:scale-110"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
