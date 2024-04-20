import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import Flex from "../Flex";

const ShopCatagories = ({ catagoresData, shopLeftTitle }) => {
  const [showCatagories, setshowCatagories] = useState(
    catagoresData.map(() => false)
  );

  const HanldeCatagoryToggle = (idx) => {
    setshowCatagories((previousState) => {
      return previousState.map((value, index) =>
        idx === index ? !value : false
      );
    });
  };

  return (
    <>
      <div>
        <h1 className="font-DMsans font-bold text-xl mb-9">
          {shopLeftTitle ? shopLeftTitle : "Title is Missing"}
        </h1>
      </div>

      <div>
        <div className="divide-y-2 divide-[#F0F0F0] divide-solid  ">
          {catagoresData?.map((item, index) =>
            item.subcatgores.length > 0 ? (
              <div>
                <div
                  className="py-5 px-2 cursor-pointer"
                  key={item.id}
                  onClick={() => HanldeCatagoryToggle(index)}
                >
                  <Flex className={"justify-between items-center "}>
                    <h2 className="text-secondary_font_color font-normal text-base ">
                      {item.title}
                    </h2>
                    <FaPlus className="text-secondary_font_color" />
                  </Flex>
                </div>

                <div className={`${showCatagories[index] && "mb-4"}`}>
                  {showCatagories[index] &&
                    item.subcatgores.map((subitem) => (
                      <div
                        className="px-3 py-2 cursor-pointer"
                        key={subitem.id}
                      >
                        <h2 className="text-secondary_font_color font-normal text-base ">
                          {subitem.title}
                        </h2>
                      </div>
                    ))}
                </div>
              </div>
            ) : (
              <div className="py-5 px-2 cursor-pointer">
                <h2 className="text-secondary_font_color font-normal text-base ">
                  {item.title}
                </h2>
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
};

export default ShopCatagories;
