import React from "react";
import Flex from "../CommonConponent/Flex";
import ShipingItem from "../CommonConponent/ShipingItem";
import { FaTruck } from "react-icons/fa6";
const Shipping = () => {
  return (
    <>
      <div>
        <div className="container">
          <Flex className={"justify-between items-center"}>
            {[...Array(3)].map((_, index) => (
              <ShipingItem className={"flex gap-x-3 items-center"} key={index}>
                <span>
                  <FaTruck />
                </span>
                <p>Two years warranty</p>
              </ShipingItem>
            ))}
          </Flex>
        </div>
      </div>
    </>
  );
};

export default Shipping;
