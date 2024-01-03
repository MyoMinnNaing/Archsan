import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Project01 = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  const projects = [
    {
      img: "https://shtheme.com/demosd/archsan/wp-content/uploads/2022/12/07.jpg",
      name: "PROJECT P.01",
      title: "Intermediate Hall",
    },

    {
      img: "https://shtheme.com/demosd/archsan/wp-content/uploads/2022/12/12.jpg",
      name: "PROJECT P.02",
      title: "Modern Loft Kitchen",
    },

    {
      img: "https://shtheme.com/demosd/archsan/wp-content/uploads/2022/12/10-1.jpg",
      name: "PROJECT P.03",
      title: "Unique Stair Designs",
    },

    {
      img: "https://shtheme.com/demosd/archsan/wp-content/uploads/2022/12/11.jpg",
      name: "PROJECT P.04",
      title: "Best Kitchen Design",
    },

    {
      img: "https://shtheme.com/demosd/archsan/wp-content/uploads/2022/12/08.jpg",
      name: "PROJECT P.05",
      title: "Farm House Bedroom",
    },

    {
      img: "https://shtheme.com/demosd/archsan/wp-content/uploads/2022/12/09.jpg",
      name: "PROJECT P.06",
      title: "Lighting At Home",
    },
  ];

  return (
    <div className="container">
      <div className="py-32">
        <div
          data-aos="fade-up"
          data-aos-once="true"
          className="flex items-start flex-col md:flex-row mb-20"
        >
          <div className=" w-full md:w-[34%]">
            <div className=" border-b-[1px] border-neutral-100 uppercase text-sm tracking-widest mb-4 mx-3 px-5 pt-2 pb-3 relative before:w-[6px] before:h-[6px] before:bg-theme-color before:absolute before:rounded-full before:top-[15px] before:left-1">
              Discover
            </div>
          </div>
          <div className="w-full md:w-[66%] px-3">
            <h2 className=" uppercase text-4xl font-heading leading-[56px] tracking-wider mb-7">
              Creative <span className=" text-theme-color">Projects</span>
            </h2>
            <p className=" text-neutral-500">
              Architecture viverra tristique justo duis vitae diaminte neque
              nivamus aestan ateuene artines ariianu the ateliten finibus
              viverra nec lacus in the nedana mis erodino. Design nila iman the
              finise viverra nec a lacus miss viventa in the setlien suscipe no
              curabit tristue the seneoice misuscipit non sagie the fermen.
            </p>
          </div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-once="true"
          className="grid md:grid-cols-3 grid-flow-row gap-4 mx-3"
        >
          {projects.map(({ img, name, title }, index) => (
            <div key={index} className=" group">
              <div className="overflow-hidden relative">
                <img
                  src={img}
                  alt="project-1-img"
                  className=" transition-all duration-1000 ease-ease group-hover:scale-105"
                />

                <div className="absolute bottom-5 -translate-x-[110%] group-hover:translate-x-0 bg-white py-[25px] pe-[25px] ps-[15px] transition-all duration-[400ms]">
                  <div className=" uppercase text-xs [word-spacing:3px] tracking-[2px] mb-2 mt-1 ms-1 ps-4 relative before:w-[5px] before:h-[5px] before:bg-neutral-950 before:absolute before:rounded-full before:top-[6px] before:left-0 text-theme-color">
                    {name}
                  </div>
                  <h4 className=" text-xl uppercase font-heading tracking-widest mb-2 ">
                    <a href={img}>{title}</a>
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project01;
