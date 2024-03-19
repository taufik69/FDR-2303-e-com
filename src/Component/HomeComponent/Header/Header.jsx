import React, { useEffect, useState } from "react";
import Logo from "../../../assets/Logo.png";
import Flex from "../../CommonConponent/Flex";
import { FaBars } from "react-icons/fa6";
const Header = () => {
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    function resizeBody() {
      if (window.innerWidth > 730) {
        setShowNav(true);
      } else {
        setShowNav(false);
      }
    }
    window.addEventListener("resize", resizeBody);
    resizeBody();
  }, []);

  // HandleNavToggle funtionality
  const HandleNavToggle = () => {
    setShowNav(!showNav);
  };

  return (
    <>
      <div className="py-8 bg-main_bg_color  px-5  sm:px-0">
        <div className="container">
          <Flex className="justify-between items-center ">
            <div>
              <picture>
                <img src={Logo} alt={Logo} />
              </picture>
            </div>
            <div>
              {showNav && (
                <div>
                  <Flex>
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
                  </Flex>
                </div>
              )}
            </div>
            <div>
              <span
                className="cursor-pointer md:hidden z-10"
                onClick={HandleNavToggle}
              >
                <FaBars />
              </span>
            </div>
          </Flex>
        </div>
      </div>
    </>
  );
};

export default Header;
