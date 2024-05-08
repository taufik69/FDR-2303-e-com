import React from "react";
import BreadCrumb from "../../Component/CommonConponent/BreadCrumb/BreadCrumb";
import ShopLeft from "../../Component/ShopComponent/ShopLeft/ShopLeft";
import Flex from "../../Component/CommonConponent/Flex";
import ShopRight from "../../Component/ShopComponent/ShopRight/ShopRight.jsx";

const Shop = () => {
  return (
    <>
      <div className="container">
        <div className="py-6 md:py-20">
          <div className="px-2 xl:px-0">
            <h1 className=" font-DMsans text-[49px] font-bold  text-main_font_color">
              Products
            </h1>
            <BreadCrumb />
          </div>
          <div className="py-20">
            <Flex
              className={
                "items-center gap-y-10  md:flex-col md:items-center lg:flex-row lg:items-start lg:gap-y-0"
              }
            >
              <ShopLeft className="w-full px-3 lg:w-[35%]  xl:w-[25%] " />
              <ShopRight className="w-[90%] sm:w-full md:w-[95%]  lg:ml-7 lg:w-[75%]  " />
            </Flex>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
