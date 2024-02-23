import React from "react";

import Flex from "./Flex";
import { FaHeart } from "react-icons/fa";
import WatchImg from "../../assets/p.png";
const Product = ({ colorVariant, bagze, image }) => {
  return (
    <div className="w-full">
      <div className="pb-6 relative  overflow-hidden group cursor-pointer ">
        <div className="absolute top-4 left-4 rounded-sm">{bagze}</div>
        <img src={WatchImg} alt={WatchImg} />
        {/* -----------overlay--------  */}
        <div className="absolute bg-purple-100 w-full -bottom-[40%]  transition-all left-0 group-hover:bottom-6">
          <div className="flex justify-end flex-col items-end p-6">
            <div>
              <Flex className={"gap-x-5 items-center"}>
                <h5>Add to Wish List</h5>
                <span>
                  <FaHeart />
                </span>
              </Flex>
            </div>

            <div>
              <Flex className={"gap-x-5 items-center"}>
                <h5>Add to Wish List</h5>
                <span>
                  <FaHeart />
                </span>
              </Flex>
            </div>

            <div>
              <Flex className={"gap-x-5 items-center"}>
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
      <Flex className={"justify-between"}>
        <h3>Basic Crew Neck Tee</h3>
        <p>$44.00</p>
      </Flex>
      {colorVariant && <span>Black</span>}
    </div>
  );
};

export default Product;
