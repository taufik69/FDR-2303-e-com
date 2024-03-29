import React, { useEffect, useRef, useState } from "react";
import Flex from "../../CommonConponent/Flex";
import { HiOutlineBars3BottomLeft } from "react-icons/hi2";
import Serach from "../../CommonConponent/Serach";
import { FaUser, FaShoppingCart } from "react-icons/fa";
import { BiChevronDown } from "react-icons/bi";
import { BiChevronUp } from "react-icons/bi";

const MenuBar = () => {
  // HandleBar funtionality implementation
  const HandleBar = () => {
    alert("aklshdf");
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
                  onClick={HandleBar}
                />
              </div>
              <p className="hidden md:block menuItem cursor-pointer text-main_font_color">
                Shop by Category
              </p>
            </Flex>
            <Serach placeHolder="Search Products" />

            <Flex className={"gap-x-2 sm:gap-x-5"}>
              <div>
                <Flex
                  className={"gap-x-1 sm:gap-x-2 cursor-pointer items-center"}
                >
                  <div>
                    <FaUser />
                  </div>
                  <div>
                    <BiChevronDown />
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
