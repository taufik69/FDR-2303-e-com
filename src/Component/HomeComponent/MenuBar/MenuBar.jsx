import React, { useEffect, useRef, useState } from "react";
import Flex from "../../CommonConponent/Flex";
import { HiOutlineBars3BottomLeft } from "react-icons/hi2";
import Serach from "../../CommonConponent/Serach";
import { FaUser, FaShoppingCart } from "react-icons/fa";
import { BiChevronDown } from "react-icons/bi";
import { BiChevronUp } from "react-icons/bi";
import { Link } from "react-router-dom";

const MenuBar = () => {
  const [catagory, setcatagory] = useState(false);
  const [account, setaccount] = useState(false);

  const HanldeAccount = () => {
    setaccount(!account);
  };
  return (
    <>
      <div className="bg-secondary_bg_color py-5 px-4 sm:px-0">
        <div className="container">
          <Flex className={"gap-x-3 justify-between items-center"}>
            <Flex className={"gap-x-2"}>
              <div>
                <HiOutlineBars3BottomLeft
                  className="cursor-pointer tex-4xl"
                  onClick={() => setcatagory(!catagory)}
                />

                <div className="">
                  <ul
                    className={`absolute z-10 sm:static top-[170px]  transition-all bg-black w-[100vw] text-main_bg_color py-5 divide-y divide-solid ${
                      catagory ? "left-0" : "left-[-120%]"
                    }`}
                  >
                    <li className="p-5 ">
                      <Link to={"/"}> Accesories </Link>
                    </li>

                    <li className="p-5"> Accesories</li>

                    <li className="p-5"> Accesories</li>

                    <li className="p-5"> Accesories</li>
                    <li className="p-5"> Accesories</li>
                    <li className="p-5"> Accesories</li>
                  </ul>
                </div>
              </div>
              <p className="hidden md:block menuItem cursor-pointer text-main_font_color">
                Shop by Category
              </p>
            </Flex>
            <Serach placeHolder="Search Products" />

            <Flex className={"gap-x-2 sm:gap-x-5"}>
              <div className="relative">
                <Flex
                  className={"gap-x-1 sm:gap-x-2 cursor-pointer items-center"}
                >
                  <div onClick={HanldeAccount} className="flex">
                    <div>
                      <FaUser />
                    </div>
                    <div>
                      <BiChevronDown />
                    </div>
                  </div>

                  <div>
                    <ul
                      className={`w-[100vw] b text-white absolute lg:static top-10 left-[100%] text-center z-20  transition-all bg-black  text-main_bg_color py-5 divide-y divide-solid ${
                        account ? "right-[-40px]" : null
                      }`}
                    >
                      <li className="p-5">
                        <Link to={"/"}> My Account</Link>
                      </li>

                      <li className="p-5">
                        <Link to={"/"}> Log Out</Link>
                      </li>
                    </ul>
                  </div>
                </Flex>
              </div>
              <div className="cursor-pointer">
                <FaShoppingCart />
              </div>
            </Flex>
          </Flex>
        </div>
      </div>
    </>
  );
};

export default MenuBar;
