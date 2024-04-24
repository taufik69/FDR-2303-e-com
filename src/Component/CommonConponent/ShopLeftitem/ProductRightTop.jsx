import React, { useState } from "react";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { SortBy } from "../../../../Data/Data.js";
import { FaBars } from "react-icons/fa6";
import { BiSolidUpArrow, BiSolidDownArrow } from "react-icons/bi";
import Flex from "../Flex.jsx";

const ProductRightTop = () => {
  const [sortProduct, setSortProduct] = useState(SortBy);

  return (
    <Flex className="items-center justify-between">
      <div>
        <BsFillGrid3X3GapFill className="text-2xl" />
      </div>
      <div className="flex gap-x-6">
        <div>
          <Flex className=" items-center">
            <h2 className="text-secondary_font_color font-DMsans text-base font-normal mr-4">
              Sort by:
            </h2>
            <select
              name="sort"
              id="sort"
              className="custom-select min-w-[240px] py-2 border-2 border-[#F0F0F0] cursor-pointer"
            >
              <option
                value="Featured"
                className="text-secondary_font_color font-DMsans font-normal text-base"
              >
                Featured <FaBars />
              </option>

              {sortProduct?.map((sortItem) => (
                <option
                  value={sortItem.SortItem}
                  key={sortItem.SortItem}
                  className="text-secondary_font_color font-DMsans font-normal text-base "
                >
                  {sortItem.SortItem}
                </option>
              ))}
            </select>
          </Flex>
        </div>

        <div>
          <Flex className=" items-center">
            <h2 className="text-secondary_font_color font-DMsans text-base font-normal mr-4 cursor-pointer">
              Show:
            </h2>
            <select
              name="sort"
              id="sort"
              className="custom-select min-w-[140px] py-2 border-2 border-[#F0F0F0]"
            >
              <option
                value="20"
                className="text-secondary_font_color font-DMsans font-normal text-base"
              >
                20
              </option>

              <option
                value="20"
                className="text-secondary_font_color font-DMsans font-normal text-base"
              >
                20
              </option>

              <option
                value="20"
                className="text-secondary_font_color font-DMsans font-normal text-base"
              >
                20
              </option>
            </select>
          </Flex>
        </div>
      </div>
    </Flex>
  );
};

export default ProductRightTop;
