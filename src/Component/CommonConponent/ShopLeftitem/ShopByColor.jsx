import React, { useState } from "react";
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
          <h1 className="font-DMsans text-xl font-bold">
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
        <div className="divide-y-2 divide-solid divide-[#F0F0F0] ">
          {shopCatagoryItem?.map(
            (item) =>
              item.title !== undefined && (
                <div className="px-2 py-5">
                  <Flex className={"items-center gap-x-2"}>
                    {color && (
                      <div
                        className="mt-[3px] h-[11px] w-[11px] rounded-full bg-red-500"
                        style={{ backgroundColor: `${item.colorCode}` }}
                      ></div>
                    )}

                    <h2 className="text-base font-normal text-secondary_font_color  ">
                      {item.title}
                    </h2>
                  </Flex>
                </div>
              ),
          )}
        </div>
      )}
    </div>
  );
};

export default ShopByColor;
