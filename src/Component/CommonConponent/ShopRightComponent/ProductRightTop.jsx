import React, { useState } from "react";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { SortBy } from "../../../../Data/Data.js";
import { FaBars } from "react-icons/fa6";
import Flex from "../Flex.jsx";

const ProductRightTop = ({ onpageItem, onchageLayout, changeIcon }) => {
  const [sortProduct, setSortProduct] = useState(SortBy);

  return (
    <Flex className="items-center justify-between sm:px-3 md:px-0">
      <div onClick={onchageLayout}>
        {changeIcon ? (
          <FaBars className="cursor-pointer text-2xl" />
        ) : (
          <BsFillGrid3X3GapFill className="cursor-pointer text-2xl" />
        )}
      </div>
      <div className="flex gap-x-6">
        <div>
          <Flex className=" items-center">
            <h2 className="mr-4 hidden font-DMsans text-base font-normal text-secondary_font_color   sm:block ">
              Sort by:
            </h2>
            <select
              name="sort"
              id="sort"
              className="custom-select min-w-[120px] cursor-pointer border-2 border-[#F0F0F0]  py-2 sm:min-w-[240px]"
            >
              <option
                value="Featured"
                className="font-DMsans text-base font-normal text-secondary_font_color"
              >
                Featured <FaBars />
              </option>

              {sortProduct?.map((sortItem) => (
                <option
                  value={sortItem.SortItem}
                  key={sortItem.SortItem}
                  className="font-DMsans text-base font-normal text-secondary_font_color "
                >
                  {sortItem.SortItem}
                </option>
              ))}
            </select>
          </Flex>
        </div>

        <div>
          <Flex className=" items-center">
            <h2 className="sm:blo mr-4 hidden cursor-pointer font-DMsans text-base font-normal text-secondary_font_color">
              Show:
            </h2>
            <select
              onChange={onpageItem}
              name="sort"
              id="sort"
              className="custom-select min-w-[140px] border-2 border-[#F0F0F0] py-2"
            >
              <option className="font-DMsans text-base font-normal text-secondary_font_color">
                select Item
              </option>

              <option
                value="9"
                className="font-DMsans text-base font-normal text-secondary_font_color"
              >
                9
              </option>

              <option
                value="18"
                className="font-DMsans text-base font-normal text-secondary_font_color"
              >
                18
              </option>

              <option
                value="27"
                className="font-DMsans text-base font-normal text-secondary_font_color"
              >
                27
              </option>
            </select>
          </Flex>
        </div>
      </div>
    </Flex>
  );
};

export default ProductRightTop;
