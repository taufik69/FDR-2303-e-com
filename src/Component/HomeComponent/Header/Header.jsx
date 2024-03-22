import React, { useState } from "react";
import Logo from "../../../assets/Logo.png";
import Flex from "../../CommonConponent/Flex";
import { FaBars } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
const Header = () => {
  const [isShow, setisShow] = useState(false);

  // cHandleNavIcon funtionality
  const HandleNavIcon = () => {
    setisShow(!isShow);
  };

  return (
    <>
      <div className="py-8 bg-main_bg_color px-4 px-sm-0">
        <div className="container ">
          <Flex className="justify-between items-center ">
            <div>
              <picture>
                <img src={Logo} alt={Logo} />
              </picture>
            </div>

            <div>
              <Flex
                className={`absolute    sm:static flex-col  sm:flex-row sm:gap-x-5 ${
                  isShow
                    ? "left-0  bg-gray-300 w-full z-10 text-center top-[72px] transition-all"
                    : " left-[-100%]  w-full z-10 text-center top-[72px]"
                }`}
              >
                <li>
                  <a
                    href="#"
                    className="menuItem transition-all hover:text-main_font_color hover:font-bold"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="menuItem  ">
                    Shop
                  </a>
                </li>
                <li>
                  <a href="#" className="menuItem  ">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="menuItem ">
                    Contacts
                  </a>
                </li>
                <li>
                  <a href="#" className="menuItem ">
                    Journal
                  </a>
                </li>
              </Flex>
            </div>

            <div className=" cursor-pointer  sm:hidden" onClick={HandleNavIcon}>
              {isShow === true ? <RxCross2 /> : <FaBars />}
            </div>
          </Flex>
        </div>
      </div>
    </>
  );
};

export default Header;
