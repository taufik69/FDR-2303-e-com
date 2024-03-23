import React, { useState } from "react";
import Flex from "../../CommonConponent/Flex";
import { HiOutlineBars3BottomLeft } from "react-icons/hi2";
import Serach from "../../CommonConponent/Serach";
import { FaUser, FaShoppingCart } from "react-icons/fa";
import { BiChevronDown } from "react-icons/bi";
import { BiChevronUp } from "react-icons/bi";

const MenuBar = () => {
  const [shopCatagory, setShopCatagory] = useState(false);
  const [HumanCatagoriesShow, setHumanCatagoriesShow] = useState(false);
  const [cartCatagoryShow, setcartCatagoryShow] = useState(false);

  const HandleClick = () => {
    if (HumanCatagoriesShow) {
      setHumanCatagoriesShow(false);
    }
    setShopCatagory(!shopCatagory);
  };

  // HanldeAcount funtionality
  const HanldeAcount = (e) => {
    e.stopPropagation();
    if (shopCatagory) {
      setShopCatagory(false);
    }
    setHumanCatagoriesShow(!HumanCatagoriesShow);
  };

  // HandleCart funtionality
  const HandleCart = (e) => {
    e.stopPropagation();
    if (shopCatagory || HumanCatagoriesShow) {
      setHumanCatagoriesShow(false);
      setShopCatagory(false);
    }
    setcartCatagoryShow(!cartCatagoryShow);
  };
  return (
    <>
      <div className="bg-secondary_bg_color py-5 px-4 sm:px-0">
        <div className="container">
          <Flex className={"gap-x-3 justify-between items-center"}>
            <Flex className={"gap-x-2"}>
              <div onClick={HandleClick}>
                <HiOutlineBars3BottomLeft
                  className={`text-2xl cursor-pointer hover:scale-105 transition ${
                    shopCatagory && "text-red-300"
                  }`}
                />
              </div>
              <p className="hidden md:block menuItem cursor-pointer text-main_font_color">
                Shop by Category
              </p>

              {shopCatagory && (
                <ul
                  className={`absolute  ${
                    shopCatagory
                      ? "top-40 text-center  bg-red-300 z-10 w-full rounded-sm md:w-1/3"
                      : null
                  }`}
                >
                  {[...new Array(5)].map((_, id) => (
                    <li key={id}>Home</li>
                  ))}
                </ul>
              )}
            </Flex>
            <Serach placeHolder="Search Products" />

            <Flex className={"gap-x-2 sm:gap-x-5"}>
              <div onClick={HanldeAcount}>
                <Flex
                  className={"gap-x-1 sm:gap-x-2 cursor-pointer items-center"}
                >
                  <div>
                    <FaUser
                      className={`${
                        HumanCatagoriesShow
                          ? "text-blue-500 scale-105"
                          : "text-black-500"
                      }`}
                    />
                  </div>
                  <div>
                    {HumanCatagoriesShow ? <BiChevronUp /> : <BiChevronDown />}
                  </div>
                </Flex>
                {HumanCatagoriesShow && (
                  <ul
                    className={`absolute  ${
                      HumanCatagoriesShow
                        ? "top-40 text-center left-0 bg-blue-300 z-10 w-full rounded-sm md:w-1/3"
                        : null
                    }`}
                  >
                    {[...new Array(3)].map((_, id) => (
                      <li key={id}>HumanCatagoryo</li>
                    ))}
                  </ul>
                )}
              </div>
              <div className="cursor-pointer" onClick={HandleCart}>
                <FaShoppingCart />
                {cartCatagoryShow && (
                  <ul
                    className={`absolute  ${
                      cartCatagoryShow
                        ? "top-40 text-center right-0 bg-purple-300 z-10 w-full rounded-sm md:w-1/3"
                        : null
                    }`}
                  >
                    {[...new Array(3)].map((_, id) => (
                      <li key={id}>cart</li>
                    ))}
                  </ul>
                )}
              </div>
            </Flex>
          </Flex>
        </div>
      </div>
    </>
  );
};

export default MenuBar;
