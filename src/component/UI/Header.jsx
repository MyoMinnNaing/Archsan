import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(true);
  const [dropDownToggle, setDropDownToggle] = useState(false);

  const toggleHandler = () => {
    setToggle(!toggle);
    setOpenDrawer(!openDrawer);
  };

  const dropDownToggleHandler = (e) => {
    e.preventDefault();
    setDropDownToggle(!dropDownToggle);
    console.log("first");
  };
  return (
    <header className=" border-bottom fixed top-0 left-0 w-full bg-white z-[1000]">
      <div className="  container px-[15px] py-[22px]">
        <div className=" grid grid-cols-12">
          <div className=" col-span-6">
            <NavLink to="/">
              <img
                className=" w-[160px]"
                src="https://shtheme.com/demosd/archsan/wp-content/uploads/2023/03/logo.png"
                alt="logo"
              />
            </NavLink>
          </div>
          <div className=" col-span-6  flex justify-end">
            <button onClick={toggleHandler}>
              <div className=" w-[50px] h-[50px] flex flex-col gap-1 justify-center items-end  ">
                <span
                  className={`pointer-events-none block h-[2px] w-[30px] bg-slate-500 duration-300  ${
                    toggle && "rotate-[45deg] translate-y-[6px]"
                  }`}
                ></span>
                <span
                  className={`pointer-events-none block h-[2px] w-[25px] bg-slate-500 duration-200 ${
                    toggle && "  opacity-0"
                  }`}
                ></span>
                <span
                  className={`pointer-events-none block h-[2px] w-[30px] bg-slate-500 duration-300 ${
                    toggle && " rotate-[-45deg] -translate-y-[8px]"
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      <div
        className={`  w-[340px] bg-white   fixed z-50  right-0 min-h-screen px-[40px] duration-300 ${
          openDrawer && "translate-x-full"
        }`}
      >
        <nav className=" mt-10">
          <ul className=" text-[#777] font-heading text-[15px] uppercase tracking-[.25em]">
            <li className=" mb-[10px] pb-[10px] ">
              <NavLink to="/"> Home</NavLink>
            </li>
            <li className=" mb-[10px] pb-[10px]">
              <NavLink to="/about"> About</NavLink>
            </li>
            <li className=" mb-[10px] pb-[10px]">
              <NavLink to="/service"> Service</NavLink>
            </li>
            <li className=" mb-[10px] pb-[10px]">
              <NavLink to="/project"> Projects</NavLink>
            </li>
            <li className=" mb-[10px] pb-[10px]">
              <NavLink to="/gallery"> Gallery</NavLink>
            </li>
            <li
              onClick={dropDownToggleHandler}
              className=" mb-[10px] pb-[10px]"
            >
              <Link>
                <div className=" flex gap-2 items-center">
                  <h1>Pages</h1>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-3 h-3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </div>
              </Link>
              {dropDownToggle && (
                <div
                  className={`ps-2 flex flex-col gap-2 mt-3  duration-300 animate__animated animate__fadeInDown `}
                >
                  <NavLink to="/faq-page"> FAQ</NavLink>
                  <NavLink to="/process-page">Process</NavLink>
                </div>
              )}
            </li>
            <li className=" mb-[10px] pb-[10px]">
              <NavLink to="/blog"> Blog</NavLink>
            </li>
            <li className=" mb-[10px] pb-[10px]">
              <NavLink to="/contact"> Contact</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
