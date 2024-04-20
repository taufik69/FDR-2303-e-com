import React from "react";
import { BiSolidUpArrow } from "react-icons/bi";
import Flex from "../Flex";

const ShopByColor = ({ shopLeftTitle, shopCatagoryItem }) => {
  return (
    <div className="mt-10">
      <div className="mb-7">
        <Flex className={"items-center justify-between"}>
          <h1 className="font-DMsans font-bold text-xl">
            {shopLeftTitle ? shopLeftTitle : "Title Missing"}
          </h1>
          <BiSolidUpArrow className="mr-2" />
        </Flex>
      </div>
      <div className="divide-y-2 divide-[#F0F0F0] divide-solid ">
        {shopCatagoryItem?.map((item) => (
          <div className="px-2 py-5">
            <Flex className={"items-center gap-x-2"}>
              <div
                className="h-[11px] w-[11px] rounded-full mt-[3px] bg-red-500"
                style={{ backgroundColor: `${item.colorCode}` }}
              ></div>
              <h2 className="text-secondary_font_color font-normal text-base  ">
                {item.title}
              </h2>
            </Flex>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopByColor;
