import React from "react";

const New = ({ new: { id, title, date, description, img, category } }) => {
  return (
    <div>
      <img src={img} className=" object-cover" alt="image" />
      <div className="pt-[30px] pb-[60px]">
        <p className=" date text-[13px] space-x-3 text-[#777] mb-3 text-right ">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-[13px] h-[13px] inline-block"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>

            {date}
          </span>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-[13px] h-[13px] inline-block"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
              />
            </svg>

            {category}
          </span>
        </p>
        <h1 className=" mb-5 text-[30px] font-heading text-[#1b1b1b] tracking-[2px] leading-[1.5em]">
          {title}
        </h1>
        <p className=" text-[15px] text-[#777] leading-6  mb-5">
          {description}
        </p>
        <a
          href="#"
          className=" block w-fit px-3 py-1 text-[#777] bg-transparent duration-300 hover:text-black group "
        >
          <span className=" text-[15px] mr-1 ">Read More</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-[15px] h-[15px] inline-block"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>

          <span className=" block h-[2px] w-full bg-slate-300 ">
            {/* <span className=" block h-[2px] w-full relative bg-[#c5a47efc] -translate-x-full opacity-0 duration-300 group-hover:translate-x-0 group-hover:opacity-100"></span> */}
          </span>
        </a>
      </div>
    </div>
  );
};

export default New;
