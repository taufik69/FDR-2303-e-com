import React, { useEffect, useState } from "react";
import Flex from "../../CommonConponent/Flex";
import ShipingItem from "../../CommonConponent/ShipingItem";
import { FaTruck } from "react-icons/fa6";
import { SlReload } from "react-icons/sl";
import { PiFlowArrowDuotone } from "react-icons/pi";
const Shipping = () => {
  const data = [
    { id: 1, icon: <PiFlowArrowDuotone />, title: "Two years warranty" },
    { id: 1, icon: <FaTruck />, title: "Return policy in 30 days" },
    { id: 1, icon: <SlReload />, title: "Free shipping" },
  ];
  return (
    <>
      <div className="mt-5 px-5  px-sm-0 ">
        <div className="container">
          <Flex
            className={
              "flex-col sm:flex-row gap-y-3 justify-between items-center"
            }
          >
            {data?.map((item) => (
              <ShipingItem
                className={
                  "flex gap-x-3 items-center sm:text-[13px] cursor-pointer"
                }
                key={item.id}
              >
                <span>{item.icon}</span>
                <p>{item.title}</p>
              </ShipingItem>
            ))}
          </Flex>
        </div>
      </div>
    </>
  );
};

export default Shipping;
