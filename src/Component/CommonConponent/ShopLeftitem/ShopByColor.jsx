import React, { useState } from "react";
<<<<<<< HEAD
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import Flex from "../Flex";

const ShopByColor = ({ color, shopColor, title }) => {
  const [coloritem, setcolorItem] = useState(shopColor);
  const [show, setShow] = useState(false);
  const HanldeDropDown = () => {
    setShow(!show);
  };

  return (
    <div>
      <div onClick={HanldeDropDown}>
        <Flex className={"items-center justify-between px-5 cursor-pointer"}>
          <h1>{title ? title : "missing"}</h1>
          <TiArrowSortedDown />
        </Flex>
      </div>
      {show &&
        coloritem?.map((item) => (
          <div className="px-5">
            <Flex className={"items-center gap-x-3"}>
              {color && (
                <div
                  className={`h-4 w-4 rounded-full `}
                  style={{ backgroundColor: `#${item.color}` }}
                ></div>
              )}

              <h1>{item.title}</h1>
            </Flex>
          </div>
        ))}
=======
import { BiSolidUpArrow, BiSolidDownArrow } from "react-icons/bi";
import Flex from "../Flex";

const ShopByColor = ({
  shopLeftTitle,
  shopCatagoryItem,
  color,
  dropdownis,
  dropdownExpandIs,
}) => {
  const [shopColorShow, setshopColorShow] = useState(dropdownExpandIs);
  // HandleColor funciton implementation
  const HandleColor = () => {
    setshopColorShow(!shopColorShow);
  };

  return (
    <div className="mt-10">
      <div className="mb-7 cursor-pointer" onClick={HandleColor}>
        <Flex className={"items-center justify-between"}>
          <h1 className="font-DMsans font-bold text-xl">
            {shopLeftTitle ? shopLeftTitle : "Title Missing"}
          </h1>
          {dropdownis && (
            <div>
              {shopColorShow ? (
                <BiSolidUpArrow className="mr-2" />
              ) : (
                <BiSolidDownArrow className="mr-2" />
              )}
            </div>
          )}
        </Flex>
      </div>

      {shopColorShow && (
        <div className="divide-y-2 divide-[#F0F0F0] divide-solid ">
          {shopCatagoryItem?.map((item) => (
            <div className="px-2 py-5">
              <Flex className={"items-center gap-x-2"}>
                {color && (
                  <div
                    className="h-[11px] w-[11px] rounded-full mt-[3px] bg-red-500"
                    style={{ backgroundColor: `${item.colorCode}` }}
                  ></div>
                )}

                <h2 className="text-secondary_font_color font-normal text-base  ">
                  {item.title}
                </h2>
              </Flex>
            </div>
          ))}
        </div>
      )}
>>>>>>> main
    </div>
  );
};

export default ShopByColor;
