import React, { useState } from "react";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import Flex from "../Flex";

const ShopByColor = ({ color, shopColor, title }) => {
  const [coloritem, setcolorItem] = useState(shopColor || []);
  const [show, setShow] = useState(false);
  const HanldeDropDown = () => {
    setShow(!show);
  };

  console.log(coloritem);
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
              <div
                className={`h-4 w-4 rounded-full `}
                style={{ backgroundColor: `#${item.color}` }}
              ></div>
              <h1>{item.title}</h1>
            </Flex>
          </div>
        ))}
    </div>
  );
};

export default ShopByColor;
