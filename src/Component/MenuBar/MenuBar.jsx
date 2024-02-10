import React from "react";
import Flex from "../CommonConponent/Flex";
import { HiOutlineBars3BottomLeft } from "react-icons/hi2";
import Serach from "../CommonConponent/Serach";
import { FaUser, FaShoppingCart } from "react-icons/fa";
import { TiArrowSortedDown } from "react-icons/ti";

const MenuBar = () => {
  return (
    <>
      <div className="bg-secondary_bg_color py-5">
        <div className="container">
          <Flex className={"gap-x-3 justify-between"}>
            <Flex className={"gap-x-2"}>
              <HiOutlineBars3BottomLeft className="text-2xl " />
              <p className="menuItem cursor-pointer text-main_font_color">
                Shop by Category
              </p>
            </Flex>
            <Serach placeHolder="Search Products" />

            <Flex className={"gap-x-5"}>
              <Flex className={"gap-x-2"}>
                <div>
                  <FaUser />
                </div>
                <div>
                  <TiArrowSortedDown />
                </div>
              </Flex>
              <div>
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
