import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const GetInTouch = () => {
  AOS.init();

  return (
    <section className=" relative z-50">
      <div className=" py-[120px]">
        <div className=" container">
          {/* Heading */}
          <div
            className=" heading  mb-[60px]"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
          >
            <div className=" grid grid-cols-12  ">
              <div className=" col-span-12 md:col-span-4 ps-[15px] pt-[5px]  pb-[15px] relative ">
                <span className=" w-[90%] h-[1px] border-bottom absolute bottom-0"></span>
                <span className=" inline-block w-[7px] h-[7px] bg-[#c5a47efc] rounded-full mr-2"></span>
                <p className=" inline-block uppercase text-[12px] tracking-[3px]">
                  Contact
                </p>
              </div>
              <div className=" col-span-12 md:col-span-8 ">
                <h1 className=" uppercase text-[#c5a47efc] text-[36px] ps-[15px] font-heading leading-[54px] tracking-[3px]">
                  Get In Touch
                </h1>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className=" grid grid-cols-12">
            <div className=" col-span-12  md:col-span-4"></div>
            <div
              className=" col-span-12 md:col-span-4 px-[15px]"
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-delay="150"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <p className=" text-[15px] text-[#777] leading-6 mb-[20px]">
                1616 Broadway NY, New York 10001
                <br />
                United States of America.
              </p>
              <p className=" text-[#1b1b1b] text-[20px] tracking-[2px] font-heading  mb-[20px]">
                +1 203-123-0606
              </p>

              <p className=" text-[#777] text-[15px] w-fit mb-[20px]">
                info@architect.com
                <span className=" border-b border-b-[#c5a47efc] w-full h-[1px] block"></span>
              </p>

              <div className=" flex gap-2 my-5">
                <a
                  href="#"
                  className=" w-8 h-8 duration-300 hover:border  hover:border-[#c5a47efc] rounded-full flex justify-center items-center"
                >
                  <img
                    className=" w-4 "
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAPdJREFUSEvt1j1KQ0EUxfHfQ+ws04gLEMHGHRhwA7Y2pjFZhH12oJggmM4dpAvqElIouIFgbARTiiBPLIagvA99bxTftPdy/3POXA6TiHSSSFx/FryCHaxhgUc84CXLye8o3scJ1pcgt9iuCtzBxRfDKwOvYoZW3eBdXC1B7zHG88c7n1Zh9SFGweA5NvCaBQvrZZari0Ew5AapC4VOGXAPZwHlGu1CVEoFSK3gO2zlVHWJg6zevFYXAfdxHAN8hPMY4D1MfgoczkkVDWNsdQOuLUAaqxurs7LjvZ43q39FgKS/ys3gJk+Y5pIZNJVRXJTxaf//A78BOAw2H9IcdF0AAAAASUVORK5CYII="
                  />
                </a>

                <a
                  href="#"
                  className=" w-8 h-8 duration-300 hover:border  hover:border-[#c5a47efc] rounded-full flex justify-center items-center"
                >
                  <img
                    className=" w-4 "
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAe5JREFUSEvt1kuozVEUx/HPjYEkz+KWV5SkxAATrzwiKQORDBQpA4UUZSAGd0ApCZGpibeMJBOFgcREhkwoSZlIeRet2vd077/zP3ufzsmZ3F27/2Cv/fvutfbaa/379Gj09YhrBPzfIt+NUE/AZSzHTPzAOZzGt+TJtPT9NOhZFTwWV7AXfwrcn46nmNPE9gOuYyHGY8VQmyp4G+7gHnYUwO9jc+aAb7ApReNxnccHcSEtPscuvK0RXooXBVF5h35sxYM68Go0ToWfOImL+F6BHML5AvDn5MDDVqEeg68YXRGMJLmLa3iFjziBgQLwGRyr2jXL6v0pS1tpfkHMWQXg4ziVA+/BIizGugLREpPQvJoDb8SwuyhRztjE+36WA8fdRhbP7gIwJOI6JuFvDhzrq9I7ntIF+E3sbKZTVzKjIh3BPozr4ABrKs+zIVUHPoDtWNIB+CWW1R26DrwArzGqA2/X41G74LDfghuIxtHuOIujrTbl2uJURNjXYmUh/Qk24Fcn4GhnkWSHU2vLsSNCu3PQEBnq8eRUsaKZz08zqle8w9yI9xql8VLOcHC9GurI5Kir8woFfuNWikrj76Jkb90dh6fR4OPPYgbmYiKixcV8n4rM7VSdSljDbHLJ1bZg6YYRcGmkOrbrWaj/AVe4TB8KwZmFAAAAAElFTkSuQmCC"
                  />
                </a>

                <a
                  href="#"
                  className=" w-8 h-8 duration-300 hover:border  hover:border-[#c5a47efc] rounded-full flex justify-center items-center"
                >
                  <img
                    className=" w-4 "
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAv9JREFUSEvl1lno5WMYB/DPWMo6FIlsaShJssRYRoylkX0rV7YLrjQNpqnBCKFkjUvhgrmyxYxIlrEb+5KtUSQiZQ3TxAx99fz+nX7Oe87552KUp07ndN73eb/P8v2+7zPDerIZ6wnXfx54B+yBDcZUaC1W4ZtxlRyV8fa4Gcdj63EH9dZ/wHIsxLfDfFvAp2ApNi+n1XgLf4wJYGPsj01q3884C0/0/YYBb4lPsR2ewlV4FSnjJLYhZmN+gX6J3bFm0HkY8HW4DMtw8iRII/Y8iWOxBNeOAk4gIUay3RVf/EvgWVW9z7HbKOCUJKwMYICH2Y4IBw7Fn3gFD+Prxv6UOj7b4rtuT7/UR2AF3i6S9M+6EDchPBi0kOhi3D0EPKTcD/vg/RbwCSWD53Bk75BLCzQgt+PNWj8AC7AFLsGtPb8XMKcI91oL+HQ8iJBi3sABifh1fF/Rf9U7fJcKZGZV6oOB9edxOA4pdfy91C/1aXgIj9fF0flfU8xM1rc0erkIN+AKRBmdpXVpYTgRPowE7mccaZ1Y8srvYdYFncDPGNjwbLUt5X6pBRzdPoJncPSAc1h7an2yPh3gnDW3yv1iC/gkPIqncczA6VfiaqScNzaAF+N6XF7f3bYu45GlbmW8Mz7Gb9gXfXJF85HgRtgL0W5nHasPxspWxnmJHkOiPKqX2UW4A7/gNryBPArRZzQcOUXnd/b8AnZQqeGdFvC4C+SCeiqHXSDR8F04p260ewvk3QoulfioBZzFaDB63abRy1x/Idph9WLl5QqTc2Weh3vKLwEE/EdshQwTUwNCX8eb4qcqYUQ/xcJGEP2/zx+4Ns/FZ8gFEvAksq6Vcf6/H2fiw+rNrxOCZtuB2LtK/UDddntW39P/KRv2Hu+ET7BZMTkOL09zEIh00u/MaRmD8j31MgW9Nfp0DO4izOgTufw+JvvIKaNPWtbZ2biv7zdq2MvkEJkcNyLAVhwZkzLs5V5Pj/9hk8zVYXFKNR17r5TR9JkEeDqAE+/9/wH/BdNRoh+bd+w4AAAAAElFTkSuQmCC"
                  />
                </a>

                <a
                  href="#"
                  className=" w-8 h-8 duration-300 hover:border  hover:border-[#c5a47efc] rounded-full flex justify-center items-center"
                >
                  <img
                    className=" w-4 "
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAXVJREFUSEvt1r9LlVEcx/GX0BCBQ0JL4KDS4miQDSoqODk6hiA0FEXgkBiIGA0iOugg5h8gjrW4SIlRW1C0NfRjMkcNatBF4sgjPHzxXiHO5V7qfrfnc87zfZ/P93zPeZ4WdYqWOnE1HHgC17CDj7WoynmO36GvBBvHRm54BN/DeoB8RnetwXN4GiC/0VprcD/eBsgm7tQanPLfxxNcx0vcRXKdNRruOP2tuzbcwA/sVUsSHXfge3hhDQ8L7TGWwvhVDCA1Zk9p7Be2kU7KQVxEDvAkVqq4+4pbOCzPyQE+wuUL9mYG87nBKd8JvmG/KHs0lK7dm7nByXG6Yj8UiQfxCpdKoLSwKzg+03KUehWPQqm3MBq01O1pv08jB3gMLwJkGanpytGL9znBI3gdILN4FrQhvKkE7iyapPzOczwohCkshoTD2A3aNBaa4Gapyz3w/zVXuuxvh2OQvq1fCq0dXWH8E34G7cJ5/8wfSDBe+bFujv8AzolyH+zRgxsAAAAASUVORK5CYII="
                  />
                </a>
              </div>
            </div>
            <div
              className=" col-span-12 md:col-span-4 px-[15px]"
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-delay="250"
              data-aos-duration="2000"
              data-aos-easing="ease-in-out"
            >
              <h1 className=" font-heading text-[20px] text-[#1b1b1b] tracking-[2px] mb-[30px]">
                HAVE A PROJECT? -
                <span className=" text-[#c5a47efc]">LETS TALK</span>
              </h1>
              <div className="">
                <input
                  type="email"
                  className=" mb-3 py-3 pe-0 ps-0 block w-full bg-transparent border-y-transparent  border-x-transparent text-[15px] focus:border-t-transparent focus:border-x-transparent focus:border-b-[#c5a47efc] focus:border-opacity-50 focus:ring-0 "
                  placeholder="Your Name *"
                />

                <input
                  type="email"
                  className=" mb-3 py-3 pe-0 ps-0 block w-full bg-transparent border-y-transparent  border-x-transparent text-[15px] focus:border-t-transparent focus:border-x-transparent focus:border-b-[#c5a47efc] focus:border-opacity-50 focus:ring-0 "
                  placeholder="Your Email *"
                />

                <input
                  type="email"
                  className=" mb-3 py-3 pe-0 ps-0 block w-full bg-transparent border-y-transparent  border-x-transparent text-[15px] focus:border-t-transparent focus:border-x-transparent focus:border-b-[#c5a47efc] focus:border-opacity-50 focus:ring-0 "
                  placeholder="Your Number *"
                />

                <input
                  type="email"
                  className=" mb-3 py-3 pe-0 ps-0 block w-full bg-transparent border-y-transparent  border-x-transparent text-[15px] focus:border-t-transparent focus:border-x-transparent focus:border-b-[#c5a47efc] focus:border-opacity-50 focus:ring-0 "
                  placeholder="Subject *"
                />

                <textarea
                  name=""
                  id=""
                  cols="10"
                  rows="4"
                  placeholder="Message *"
                  className="w-full mb-5  ps-0 bg-transparent border-y-transparent  border-x-transparent text-[15px] focus:border-t-transparent focus:border-x-transparent focus:border-b-[#c5a47efc] focus:border-opacity-50 focus:ring-0 "
                ></textarea>

                <button className=" px-[30px] py-[10px] rounded-full text-[15px] bg-[#c5a47efc] text-white hover:bg-white border hover:border-[#c5a47efc] duration-300 hover:text-[#c5a47efc]">
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
