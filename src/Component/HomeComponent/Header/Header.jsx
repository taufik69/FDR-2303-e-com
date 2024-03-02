import React, { useEffect, useState } from "react";
import Logo from "../../../assets/Logo.png";
import Flex from "../../CommonConponent/Flex";
import { FaBars } from "react-icons/fa";
const Header = () => {
  const [showNav, setshowNav] = useState(true);
  const [togglebtn, setTogglebtn] = useState(true);
  const HandleBar = () => {
    setTogglebtn(!togglebtn);
  };

  useEffect(() => {
    const resiezeWindow = () => {
      console.log(window.innerWidth);
      if (window.innerWidth > 800) {
        setshowNav(true);
      } else {
        setshowNav(false);
      }
    };

    window.addEventListener("resize", resiezeWindow);
  }, [showNav]);
  return (
    <>
      <div className="py-8 bg-main_bg_color">
        <div className="container ">
          <Flex className="justify-between items-center ">
            <div>
              <picture>
                <img src={Logo} alt={Logo} />
              </picture>
            </div>
            {showNav && (
              <div>
                <Flex className={" flex flex-row gap-x-10"}>
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
            )}
            <div className="" onClick={HandleBar}>
              <FaBars />
            </div>
          </Flex>

          {togglebtn && (
            <div>
              <Flex className={" flex-col gap-x-10"}>
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
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
