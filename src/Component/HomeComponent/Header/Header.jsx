import React, { useEffect, useState } from "react";
import Logo from "../../../assets/Logo.png";
import Flex from "../../CommonConponent/Flex";
import { FaBars } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
const Header = () => {
  const [showNav, setShowNav] = useState(false);
  // andleNavToggle funtionality

  return (
    <>
      <div className="bg-main_bg_color px-5  py-8 ">
        <div className="container">
          <Flex className="items-center justify-between ">
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
                        ? " left-0 top-20 z-10 w-full bg-green-400 text-center transition-all"
                        : " left-[-100%] top-20 z-10  text-white lg:text-black"
                    }`}
                  >
                    <NavLink
                      to="/"
                      className={({ isActive, isPending }) =>
                        isPending
                          ? "menuItem transition-all hover:font-bold hover:text-main_font_color"
                          : isActive
                            ? "menuItem text-green-500 transition-all"
                            : ""
                      }
                    >
                      Home
                    </NavLink>
                    <NavLink
                      to="/shop"
                      className={({ isActive, isPending }) =>
                        isPending
                          ? "menuItem transition-all hover:font-bold hover:text-main_font_color"
                          : isActive
                            ? "menuItem text-green-500 transition-all"
                            : ""
                      }
                    >
                      shop
                    </NavLink>
                    <NavLink
                      to="/about"
                      className={({ isActive, isPending }) =>
                        isPending
                          ? "menuItem transition-all hover:font-bold hover:text-main_font_color"
                          : isActive
                            ? "menuItem text-green-500 transition-all"
                            : ""
                      }
                    >
                      About
                    </NavLink>
                    <NavLink
                      to="/Contacts"
                      className={({ isActive, isPending }) =>
                        isPending
                          ? "menuItem transition-all hover:font-bold hover:text-main_font_color"
                          : isActive
                            ? "menuItem text-green-500 transition-all"
                            : ""
                      }
                    >
                      Contacts
                    </NavLink>
                    <NavLink
                      to="/Journal"
                      className={({ isActive, isPending }) =>
                        isPending
                          ? "menuItem transition-all hover:font-bold hover:text-main_font_color"
                          : isActive
                            ? "menuItem text-green-500 transition-all"
                            : ""
                      }
                    >
                      Journal
                    </NavLink>
                  </ul>
                </Flex>
              </div>
            </div>
            <div>
              <span
                className="z-10 cursor-pointer md:hidden"
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
