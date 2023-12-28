import React from "react";

const Footer = () => {
  return (
    <footer className="  pt-[90px]">
      <div className=" container">
        <div className=" top">
          <div className=" grid grid-cols-12">
            <div className=" col-span-4 ps-[15px] pt-[5px]  pb-[15px] relative ">
              <span className=" w-[90%] h-[1px] border-bottom absolute bottom-0"></span>
              <span className=" inline-block w-[7px] h-[7px] bg-[#c5a47efc] rounded-full mr-2"></span>
              <p className=" inline-block uppercase text-[12px] tracking-[3px]">
                Contact Us
              </p>
            </div>
            <div className=" col-span-4 px-[15px]">
              <h1 className=" text-[24px] text-[#c5a47efc] tracking-[3px] font-heading">
                NEW YORK OFFICE
              </h1>
              <p className=" text-[15px] text-[#777] leading-6 mb-[20px]">
                1616 Broadway NY, New York 10001 United States of America.
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
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAXVJREFUSEvt1r9LlVEcx/GX0BCBQ0JL4KDS4miQDSoqODk6hiA0FEXgkBiIGA0iOugg5h8gjrW4SIlRW1C0NfRjMkcNatBF4sgjPHzxXiHO5V7qfrfnc87zfZ/P93zPeZ4WdYqWOnE1HHgC17CDj7WoynmO36GvBBvHRm54BN/DeoB8RnetwXN4GiC/0VprcD/eBsgm7tQanPLfxxNcx0vcRXKdNRruOP2tuzbcwA/sVUsSHXfge3hhDQ8L7TGWwvhVDCA1Zk9p7Be2kU7KQVxEDvAkVqq4+4pbOCzPyQE+wuUL9mYG87nBKd8JvmG/KHs0lK7dm7nByXG6Yj8UiQfxCpdKoLSwKzg+03KUehWPQqm3MBq01O1pv08jB3gMLwJkGanpytGL9znBI3gdILN4FrQhvKkE7iyapPzOczwohCkshoTD2A3aNBaa4Gapyz3w/zVXuuxvh2OQvq1fCq0dXWH8E34G7cJ5/8wfSDBe+bFujv8AzolyH+zRgxsAAAAASUVORK5CYII="
                  />
                </a>
              </div>
            </div>
            <div className=" col-span-4 px-[15px]">
              <h1 className=" text-[24px] text-[#c5a47efc] tracking-[3px] font-heading">
                DUBAI OFFICE
              </h1>
              <p className=" text-[15px] text-[#777] leading-6 mb-[20px]">
                Alfattan Marine Towers, P.O. Box 34521 Dubai UAE.
              </p>
              <p className=" text-[#1b1b1b] text-[20px] tracking-[2px] font-heading  mb-[20px]">
                +971 1 333 0606
              </p>

              <p className=" text-[#777] text-[15px] w-fit mb-[20px]">
                info@architect.com
                <span className=" border-b border-b-[#c5a47efc] w-full h-[1px] block"></span>
              </p>
            </div>
          </div>
        </div>

        <div className=" bottom mb-[30px] px-[15px]">
          <div className=" container">
            <div className=" grid grid-cols-12 items-center">
              <div className=" col-span-4">
                <p className=" text-[#777777fc] text-[15px]">
                  © 2023 Architect. All right reserved.
                </p>
              </div>
              <div className=" col-span-8 ">
                <p class="right float-right">
                  <a className=" text-[#777777fc] text-[15px]" href="#">
                    Terms &amp; Conditions
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
