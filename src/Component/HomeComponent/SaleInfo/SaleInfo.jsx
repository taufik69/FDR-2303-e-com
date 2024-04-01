import React from "react";
import Flex from "../../CommonConponent/Flex.jsx";
import saleLeft from "../../../assets/Image1.png";
import electronic from "../../../assets/electronicImage.png";
import FurnitureImage from "../../../assets/FurnitureImage.png";
import Overlay from "../../CommonConponent/Overlay.jsx";

const SaleInfo = () => {
  return (
    <>
      <div className="sm:py-10 py-10">
        <div className="container">
          <Flex
            className={
              "sm:gap-x-5 md:gap-x-6 lg:gap-x-10 flex-col sm:flex-row  gap-y-4"
            }
          >
            <div className="w-full relative">
              <picture>
                <img src={saleLeft} alt={saleLeft} />
              </picture>
              <Overlay
                className={"bottom-5 sm:bottom-5 md:bottom-16 left-5 "}
                title="Phones Sale"
                discountDetilsFast={` Up to`}
                discountDetilsLast={` sale for all phones!`}
                discountAmount="30%"
                btnTitle="Shop Now"
              />
            </div>
            <div className="w-full">
              <Flex className={"flex-col gap-y-4 lg:gap-y-6 xl:gap-y-10"}>
                <div className="w-full relative ">
                  <picture>
                    <img src={electronic} alt={electronic} />
                  </picture>
                  <Overlay
                    className={" bottom-3 sm:top-1 left-2 "}
                    title="Electronics Sale"
                    discountDetilsFast={` Up to`}
                    discountDetilsLast={`sale for all electronics! `}
                    discountAmount="70%"
                    btnTitle="Shop Now"
                  />
                </div>
                <div className="w-full  relative ">
                  <picture>
                    <img src={FurnitureImage} alt={FurnitureImage} />
                  </picture>
                  <Overlay
                    btnTitle="Shop Now"
                    className={"top-1/2 -translate-y-1/2   left-2"}
                    title="Furniture Offer"
                    discountDetilsFast={` Up to`}
                    discountDetilsLast={`sale for all electronics! `}
                    discountAmount="50%"
                  />
                </div>
              </Flex>
            </div>
          </Flex>
        </div>
      </div>
    </>
  );
};

export default SaleInfo;
