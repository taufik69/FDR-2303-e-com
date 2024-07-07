import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import Flex from "../Flex";

const ShopCatagories = ({ catagoresData, shopLeftTitle }) => {
  const [showCatagories, setshowCatagories] = useState(
    catagoresData?.map(() => !true || false),
  );

  const HanldeCatagoryToggle = (idx) => {
    setshowCatagories((previousState) => {
      return previousState.map((value, index) =>
        idx === index ? !value : false,
      );
    });
  };
  console.log(showCatagories);
  return (
    <>
      <div>
        <h1 className="mb-9 font-DMsans text-xl font-bold">
          {shopLeftTitle ? shopLeftTitle : "Title is Missing"}
        </h1>
      </div>

      <div>
        <div className="divide-y-2 divide-solid divide-[#F0F0F0]  ">
          {catagoresData?.map((item, index) =>
            item.subcategories.length > 0 ? (
              <div>
                <div
                  className="cursor-pointer px-2 py-5"
                  key={item.id}
                  onClick={() => HanldeCatagoryToggle(index)}
                >
                  <Flex className={"items-center justify-between "}>
                    <h2 className="text-base font-normal text-secondary_font_color ">
                      {item.title}
                    </h2>
                    <FaPlus className="text-secondary_font_color" />
                  </Flex>
                </div>

                <div className={`${showCatagories[index] && "mb-4"}`}>
                  {showCatagories[index] &&
                    item.subcategories.map(
                      (subitem) =>
                        subitem !== item.title && (
                          <div
                            className="cursor-pointer px-3 py-2"
                            key={subitem}
                          >
                            <h2 className="text-base font-normal text-secondary_font_color ">
                              {subitem}
                            </h2>
                          </div>
                        ),
                    )}
                </div>
              </div>
            ) : (
              <div className="cursor-pointer px-2 py-5">
                <h2 className="text-base font-normal text-secondary_font_color ">
                  {item.title}
                </h2>
              </div>
            ),
          )}
        </div>
      </div>
    </>
  );
};

export default ShopCatagories;
