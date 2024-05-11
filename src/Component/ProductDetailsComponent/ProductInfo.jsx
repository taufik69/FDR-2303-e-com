import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";
const ProductInfo = ({ productStock }) => {
  const colorItem = [
    { id: 1, colorcode: "#979797" },
    { id: 2, colorcode: "#FF8686" },
    { id: 3, colorcode: "#7ED321" },
    { id: 4, colorcode: "#B6B6B6" },
    { id: 5, colorcode: "#15CBA5" },
  ];
  return (
    <div className="mt-5 flex flex-col gap-y-10">
      <hr />
      <div>
        <div className="flex items-center gap-x-8">
          <h1 className="font-DMsans text-[16px] font-bold text-main_font_color">
            COLOR:
          </h1>
          <div className="flex items-center gap-x-3">
            {colorItem?.map((color) => (
              <div
                className={`h-[20px] w-[20px] transform-gpu  cursor-pointer rounded-full hover:scale-150`}
                style={{ background: color.colorcode }}
              ></div>
            ))}
          </div>
        </div>
      </div>
      <div>
        <div className="flex items-center gap-x-[50px]">
          <h1 className="font-DMsans text-[16px] font-bold text-main_font_color">
            SIZE::
          </h1>
          <select
            name="productSize"
            id="productSize"
            className="w-[9%] border-2  border-gray-200 px-3 py-2"
          >
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="Xl">XL</option>
            <option value="XXl">XXl</option>
          </select>
        </div>
      </div>
      {/* quantity  component */}
      <div>
        <div className="flex items-center gap-x-3">
          <h1 className="font-DMsans text-[16px] font-bold text-main_font_color">
            QUANTITY:
          </h1>
          <div className="flex w-[9%] items-center justify-around border-2 border-gray-300 py-2 ">
            <span className="cursor-pointer">
              <FaMinus />
            </span>
            <p>1</p>
            <span className="cursor-pointer">
              <FaPlus />
            </span>
          </div>
        </div>
      </div>
      {/* quantity  component */}
      {/* status  component */}
      <div>
        <div className="flex items-center gap-x-3">
          <h1 className="font-DMsans text-[16px] font-bold text-main_font_color">
            Stock:
          </h1>
          <div>
            <p>{productStock} in Stock</p>
          </div>
        </div>
      </div>
      {/* status  component */}
    </div>
  );
};

export default ProductInfo;
