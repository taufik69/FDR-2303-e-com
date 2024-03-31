import React, { useState } from "react";
import Flex from "../../CommonConponent/Flex";
import { HiOutlineBars3BottomLeft } from "react-icons/hi2";
import Serach from "../../CommonConponent/Serach";
import { FaUser, FaShoppingCart } from "react-icons/fa";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import cartItem from "../../../assets/p4.png";

const MenuBar = () => {
  const [showCatagories, setshowCatagories] = useState(false);
  const [showAccount, setshowAccount] = useState(false);
  const [cart, setcart] = useState(false);
  // HandleCatagory function implement
  const HandleCatagory = () => {
    setshowCatagories(!showCatagories);
  };

  // HandleAccount function implement
  const HandleAccount = () => {
    setshowAccount(!showAccount);
  };

  // HanldeCart function implement
  const HanldeCart = () => {
    setcart(!cart);
  };
  return (
    <>
      <div className="bg-secondary_bg_color py-5 px-4 px-sm-0">
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

              {showCatagories && (
                <div>
                  <ul
                    className={` text-white  absolute z-10 text-center py-4 divide-y divide-[#ffffff23] ${
                      showCatagories ? " w-full bg-black left-0 top-1/3" : null
                    }`}
                  >
                    <li className="py-4">
                      <a href="#">Accesories</a>
                    </li>

                    <li className="py-4">
                      <a href="#">Furniture</a>
                    </li>

                    <li className="py-4">
                      <a href="#">Electronics</a>
                    </li>

                    <li className="py-4">
                      <a href="#">Clothes</a>
                    </li>

                    <li className="py-4">
                      <a href="#">Bags</a>
                    </li>

                    <li className="py-4">
                      <a href="#">Home appliances</a>
                    </li>
                  </ul>
                </div>
              )}
            </Flex>
            <Serach placeHolder="Search Products" />

            <Flex className={"gap-x-5"}>
              <div onClick={HandleAccount}>
                <Flex className={"gap-x-2 cursor-pointer items-center"}>
                  <div>
                    <FaUser
                      className={`${showAccount ? "text-green-500" : null}`}
                    />
                  </div>
                  <div>{showAccount ? <FaChevronUp /> : <FaChevronDown />}</div>
                </Flex>
                {showAccount && (
                  <div>
                    <ul className="w-full left-0 top-[200px] z-10 text-center  sm:w-[200px] bg-black absolute text-white py-4 divide-y divide-[#ffffff23]">
                      <li className="py-4">
                        <a href="#">My Account</a>
                      </li>
                      <li className="py-4">
                        <a href="#">Log Out</a>
                      </li>
                    </ul>
                  </div>
                )}
              </div>

              <div className="cursor-pointer" onClick={HanldeCart}>
                <FaShoppingCart />

                <div className="bg-black text-white absolute top-1/2 left-0 w-full sm:w-fit">
                  <div className="w-[80px] h-[80px] object-cover">
                    <img src={cartItem} alt={cartItem} />
                  </div>

                  <div>
                    <h1>Black Smart Watch</h1>
                    <span>$44.0</span>
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
