import React, { useRef, useState } from "react";
import Flex from "../../CommonConponent/Flex";
import { HiOutlineBars3BottomLeft } from "react-icons/hi2";
import Serach from "../../CommonConponent/Serach";
import { FaUser, FaShoppingCart } from "react-icons/fa";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import cartItem from "../../../assets/p4.png";
import { Link } from "react-router-dom";

import { RxCross2 } from "react-icons/rx";
import Button from "../../CommonConponent/Button.jsx";

const MenuBar = () => {
  const [showCatagories, setshowCatagories] = useState(false);
  const [showAccount, setshowAccount] = useState(false);
  const [cart, setcart] = useState(false);
  const menuRef = useRef();

  const HandleCatagory = () => {
    setshowAccount(false);
    setshowAccount(false);
    setshowCatagories(!showCatagories);
  };

  const HandleAccount = () => {
    setshowCatagories(false);
    setcart(false);
    setshowAccount(!showAccount);
  };

  // HanldeCart function implement
  const HanldeCart = () => {
    setshowCatagories(false);
    setshowAccount(false);
    setcart(!cart);
  };

  // funtionality with ref
  console.log(menuRef.current);
  return (
    <>
      <div className="bg-secondary_bg_color py-5 px-4 px-sm-0" ref={menuRef}>
        <div className="container">
          <Flex className={"gap-x-3 justify-between items-center"}>
            <Flex className={"gap-x-2"}>
              <div onClick={HandleCatagory}>
                <HiOutlineBars3BottomLeft
                  className={`text-2xl cursor-pointer  ${
                    showCatagories && "text-green-400 "
                  }`}
                />
              </div>
              <p className="text-[14px] sm:menuItem cursor-pointer text-main_font_color hidden sm:block">
                Shop by Category
              </p>

              <div>
                <ul
                  className={`absolute transition-all text-white w-full left-[-100%]  bg-black top-[200px] z-10 text-center py-4 divide-y divide-[#ffffff23] ${
                    showCatagories ? "left-[0%]" : ""
                  }`}
                >
                  <li>
                    <Link to={"/"} className="py-4">
                      <a href="#">Accesories</a>
                    </Link>
                  </li>

                  <li>
                    <Link to={"/"} className="py-4">
                      <a href="#">Accesories</a>
                    </Link>
                  </li>

                  <li>
                    <Link to={"/"} className="py-4">
                      <a href="#">Accesories</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </Flex>
            <Serach placeHolder="Search Products" />

            <Flex className={"gap-x-5"}>
              <div onClick={HandleAccount}>
                <Flex className={"gap-x-2 cursor-pointer items-center"}>
                  <div>
                    <FaUser />
                  </div>
                  <div>{showAccount ? <FaChevronUp /> : <FaChevronDown />}</div>
                </Flex>

                <div>
                  <ul
                    className={`w-full left-[-100%] top-[200px] transition-all z-10 text-center  sm:w-[200px] bg-black absolute text-white py-4 divide-y  divide-[#ffffff23] ${
                      showAccount ? "left-[0%]" : null
                    }`}
                  >
                    <li className="py-4">
                      <Link to={"/"}>My Account</Link>
                    </li>
                    <li className="py-4">
                      <Link to={"/"}>Log Out</Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="cursor-pointer" onClick={HanldeCart}>
                <FaShoppingCart className={`${cart && "text-blue-600"}`} />

                <div
                  className={`bg-black transition-all text-white bg-secondary_bg_color absolute top-[200px] z-10 left-[-100%] w-full ${
                    cart ? "left-[0%]" : null
                  }`}
                >
                  <div className="flex items-center justify-around py-5">
                    <div className="w-[80px] h-[80px] object-cover bg-secondary_bg_color border-2 border-main_font_color">
                      <img src={cartItem} alt={cartItem} />
                    </div>

                    <div className="text-black font-DMsans font-bold text-sm">
                      <h2> Black Smart Watch</h2>
                      <span>$44.00 </span>
                    </div>

                    <div className="text-main_font_color">
                      <RxCross2 />
                    </div>
                  </div>

                  <div className="bg-main_bg_color py-5">
                    <h2 className="text-secondary_font_color font-DMsans font-normal text-md ml-4">
                      Subtotal:
                      <span className="text-main_font_color font-bold ml-1">
                        $44.00
                      </span>
                    </h2>
                    <div className="py-6">
                      <Flex className={"justify-around"}>
                        <Button
                          title={"View Cart"}
                          className={
                            "py-4 px-10 font-sm font-bold font-DMsans text-black border-2 border-main_font_color"
                          }
                        ></Button>

                        <Button
                          className={
                            "py-4 px-10  font-sm font-bold font-DMsans bg-black text-white"
                          }
                          title={"Checkout"}
                        ></Button>
                      </Flex>
                    </div>
                  </div>
                </div>
              </div>
            </Flex>
          </Flex>
        </div>
      </div>
    </>
  );
};

export default MenuBar;
