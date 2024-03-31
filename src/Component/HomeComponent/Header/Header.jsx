import React, { useEffect, useState } from "react";
import Logo from "../../../assets/Logo.png";
import Flex from "../../CommonConponent/Flex";
import { FaBars } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
const Header = () => {
  const [showNav, setShowNav] = useState(false);
  // andleNavToggle funtionality

  return (
    <>
      <div className="py-8 bg-main_bg_color  px-5 ">
        <div className="container">
          <Flex className="justify-between items-center ">
            <div>
              <picture>
                <img src={Logo} alt={Logo} />
              </picture>
            </div>
            <div className="mb-10 sm:mb-0">
              <div>
                <Flex>
                  <ul
                    className={`absolute md:static md:flex md:gap-x-5 ${
                      showNav
                        ? " top-20 left-0 bg-green-400 w-full text-center z-10 transition-all"
                        : " top-20 z-10 left-[-100%]  text-white "
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
                      <a href="#" className="menuItem">
                        Shop
                      </a>
                    </li>
                    <li>
                      <a href="#" className="menuItem">
                        About
                      </a>
                    </li>
                    <li>
                      <a href="#" className="menuItem">
                        Contacts
                      </a>
                    </li>
                    <li>
                      <a href="#" className="menuItem">
                        Journal
                      </a>
                    </li>
                  </ul>
                </Flex>
              </div>
            </div>
            <div>
              <span
                className="cursor-pointer md:hidden z-10"
                onClick={() => setShowNav(!showNav)}
              >
                {showNav ? <RxCross2 /> : <FaBars />}
              </span>
            </div>
          </Flex>
        </div>
      </div>
    </>
  );
};

export default Header;
