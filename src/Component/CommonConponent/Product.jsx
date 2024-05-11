import React from "react";

import Flex from "./Flex";
import { FaHeart } from "react-icons/fa";

const Product = ({
  colorVariant,
  bagze,
  imga,
  productName,
  procutPrice,
  bazgeIsStay,
}) => {
  return (
    <div className="w-full   sm:px-0">
      <div className="group relative cursor-pointer  overflow-hidden pb-6 sm:w-[98%] ">
        <div className="absolute left-4 top-4 rounded-sm">{bagze}</div>

        <img
          src={imga}
          alt={imga}
          className="h-[290px] w-full rounded-md object-cover"
        />
        {/* -----------overlay--------  */}
        <div className="absolute -bottom-[40%] left-0 w-full  bg-gray-200 transition-all group-hover:bottom-6">
          <div className="flex flex-col items-end justify-end p-6">
            <div>
              <Flex className={"items-center gap-x-5"}>
                <h5>Add to Wish List</h5>
                <span>
                  <FaHeart />
                </span>
              </Flex>
            </div>

            <div>
              <Flex className={"items-center gap-x-5"}>
                <h5>Add to Wish List</h5>
                <span>
                  <FaHeart />
                </span>
              </Flex>
            </div>

            <div>
              <Flex className={"items-center gap-x-5"}>
                <h5>Add to Wish List</h5>
                <span>
                  <FaHeart />
                </span>
              </Flex>
            </div>
          </div>
        </div>
        {/* -----------overlay--------  */}
      </div>
      <Flex className={"justify-between pr-4"}>
        <h3>{productName ? productName : "Basic Crew Neck Tee"}</h3>
        <p> {procutPrice ? `$${procutPrice}` : "$44.00"}</p>
      </Flex>
      {colorVariant && <span>Black</span>}
    </div>
  );
};

export default Product;
