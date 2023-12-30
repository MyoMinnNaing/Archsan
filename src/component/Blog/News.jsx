import React from "react";
import New from "./New";

const News = () => {
  const news = [
    {
      id: 1,
      title: "MODERNISM IN ARCHITECTURE",
      date: " January 4, 2023",
      description: `Nam rhoncus euismod eros. Integer 
        fringilla varius leo, eget volutpat eros convalist. Nulla non nisl orci. Donec
         ornare ullamcorper nunc elementum placerat urabitur massa ante, 
        iaculis a enim porta, iaculis. Quisque gravida eros ut turpis interdum ornare.
         vel mi fringilla euismod. Suspendisse dapibus nec nisl a hendrerit.`,
      category: " Exterior Design",
      img: "https://shtheme.com/demosd/archsan/wp-content/uploads/2022/12/1.jpg",
    },

    {
      id: 2,
      title: "ULTRA HOUSE DESIGNS",
      date: " January 4, 2023",
      description: `Nam rhoncus euismod eros. Integer 
          fringilla varius leo, eget volutpat eros convalist. Nulla non nisl orci. Donec
           ornare ullamcorper nunc elementum placerat urabitur massa ante, 
          iaculis a enim porta, iaculis. Quisque gravida eros ut turpis interdum ornare.
           vel mi fringilla euismod. Suspendisse dapibus nec nisl a hendrerit.`,
      category: "  Graphic Design",
      img: "https://shtheme.com/demosd/archsan/wp-content/uploads/2022/12/2.jpg",
    },

    {
      id: 3,
      title: "DECORATING INSPIRATION",
      date: " January 4, 2023",
      description: `Nam rhoncus euismod eros. Integer 
            fringilla varius leo, eget volutpat eros convalist. Nulla non nisl orci. Donec
             ornare ullamcorper nunc elementum placerat urabitur massa ante, 
            iaculis a enim porta, iaculis. Quisque gravida eros ut turpis interdum ornare.
             vel mi fringilla euismod. Suspendisse dapibus nec nisl a hendrerit.`,
      category: " Architecture",
      img: "https://shtheme.com/demosd/archsan/wp-content/uploads/2022/12/3.jpg",
    },
  ];

  const categories = [
    "Architecture",
    "Building",
    "Exterior Design",
    "Graphic Design",
    " Interior Design",
  ];

  const tags = [
    "3D Modelling",
    " Architecture",
    "Building",
    "Exterior",
    "Interior",
    " Residental",
  ];
  return (
    <div className=" container relative">
      {/* Heading */}
      <div className=" heading  mb-[60px]">
        <div className=" grid grid-cols-12  ">
          <div className=" col-span-12 md:col-span-4 ps-[15px] pt-[5px]  pb-[15px] relative ">
            <span className=" w-[90%] h-[1px] border-bottom absolute bottom-0"></span>
            <span className=" inline-block w-[7px] h-[7px] bg-[#c5a47efc] rounded-full mr-2"></span>
            <p className=" inline-block uppercase text-[12px] tracking-[3px]">
              blog
            </p>
          </div>
          <div className=" col-span-12 md:col-span-8 ">
            <h1 className=" uppercase text-[#c5a47efc] text-[36px] ps-[15px] font-heading leading-[54px] tracking-[3px]">
              Latest news
            </h1>
          </div>
        </div>
      </div>

      <div className="news">
        <div className=" grid grid-cols-12">
          <div className=" col-span-12 md:col-span-8 px-[15px]">
            {news.map((el) => (
              <New key={el.id} new={el} />
            ))}

            {/* Pagination */}
            <div className=" pagination">
              <ul className=" pt-[30px] pb-[60px] flex gap-2 justify-center items-center ">
                <li className=" flex justify-center items-center w-[40px] h-[40px] rounded-full border border-[#777] ">
                  <a href="#" className=" text-[15px] text-[#777]">
                    1
                  </a>
                </li>

                <li className=" flex justify-center items-center w-[40px] h-[40px] rounded-full duration-300 hover:border hover:border-[#777] ">
                  <a href="#" className=" text-[15px] text-[#777]">
                    2
                  </a>
                </li>

                <li className=" flex justify-center items-center w-[40px] h-[40px] rounded-full duration-300 hover:border hover:border-[#777] ">
                  <a href="#" className=" text-[15px] text-[#777]">
                    3
                  </a>
                </li>

                <li className=" flex justify-center items-center w-[40px] h-[40px] rounded-full duration-300 hover:border hover:border-[#777] ">
                  <a href="#" className=" text-[15px] text-[#777]">
                    4
                  </a>
                </li>

                <li className=" flex justify-center items-center w-[40px] h-[40px] rounded-full duration-300 hover:border hover:border-[#777] ">
                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="#777"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m8.25 4.5 7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Side bar */}
          <div className=" col-span-12 md:col-span-4 px-[15px]">
            <div className="sidebar">
              <div className=" search relative">
                <input
                  type="text"
                  placeholder=" Search "
                  className=" block w-full placeholder:text-[15px] placeholder:text-[#777]  border border-[#c1bfbf] bg-transparent  px-3 py-2 focus-visible:outline-none"
                />
                <button className=" absolute top-0 right-3 bottom-0 m-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="#777"
                    className="w-5 h-5 pointer-events-none "
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                    />
                  </svg>
                </button>
              </div>

              <div className="category border mt-[45px] px-[30px] py-[45px]">
                <h1 className=" text-[24px] text-[#c5a47efc] tracking-[3px] font-heading mb-[25px]">
                  CATEGORIES
                </h1>
                <ul>
                  {categories.map((el, index) => (
                    <li
                      key={index}
                      className=" mb-[15px] text-[15px] text-[#777] leading-6 "
                    >
                      {" "}
                      <a href="#" className="  hover:text-[#c5a47efc]">
                        {el}
                      </a>{" "}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="latest-post border mt-[45px] px-[30px] py-[45px]">
                <h1 className=" text-[24px] text-[#c5a47efc] tracking-[3px] font-heading mb-[25px]">
                  LATEST POSTS
                </h1>

                <div className="latest-post-item">
                  {news.map((el) => {
                    return (
                      <div key={el.id} className=" flex mb-[30px] gap-3">
                        <img
                          src={el.img}
                          className=" w-[95px] h-[95px] object-cover"
                          alt=""
                        />
                        <div>
                          <h1 className=" text-[15px] text-[#1b1b1b] hover:text-[#c5a47efc] tracking-[2px] font-heading mb-3">
                            <a href="#">{el.title}</a>
                          </h1>
                          <p className=" text-[12px] text-[#777]">{el.date}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="tags border mt-[45px] px-[30px] py-[45px]">
                <h1 className=" text-[24px] text-[#c5a47efc] tracking-[3px] font-heading mb-[25px]">
                  TAGS
                </h1>

                <ul className=" tags-items space-y-2">
                  {tags.map((tag, index) => {
                    return (
                      <li
                        key={index}
                        className=" inline-block mr-2 hover:bg-[#c5a47efc] duration-300 "
                      >
                        <a
                          href="#"
                          className=" inline-block px-[15px] py-[8px] text-[13px] text-[#777] duration-300 hover:text-white border"
                        >
                          {tag}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
