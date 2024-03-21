import React, { useEffect, useState } from "react";
import Flex from "../../CommonConponent/Flex";
import ShipingItem from "../../CommonConponent/ShipingItem";
import { FaTruck } from "react-icons/fa6";

const Shipping = () => {
  const data = [
    { id: 1, icon: <FaTruck />, title: "Free shipping" },
    { id: 1, icon: <FaTruck />, title: "Return policy in 30 days" },
    { id: 1, icon: <FaTruck />, title: "Free shipping" },
  ];
  return (
    <>
      <div className="mt-5 px-5  px-sm-0 ">
        <div className="container">
          <Flex className={"justify-between items-center"}>
            {data?.map((item) => (
              <ShipingItem
                className={"flex gap-x-3 items-center text-[13px]"}
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
