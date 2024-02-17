import React from "react";
import Flex from "../CommonConponent/Flex.jsx";
import saleLeft from "../../assets/Image1.png";
import electronic from "../../assets/electronicImage.png";
import FurnitureImage from "../../assets/FurnitureImage.png";
import Overlay from "../CommonConponent/Overlay.jsx";

const SaleInfo = () => {
  return (
    <>
      <div className="py-32">
        <div className="container">
          <Flex className={"gap-x-10"}>
            <div className="w-full relative">
              <picture>
                <img src={saleLeft} alt={saleLeft} />
              </picture>
              <Overlay
                className={"bottom-16  left-16"}
                title="Phones Sale"
                discountDetilsFast={` Up to`}
                discountDetilsLast={` sale for all phones!`}
                discountAmount="30%"
                btnTitle="Shop Now"
              />
            </div>
            <div className="w-full ">
              <Flex className={"flex-col gap-y-11"}>
                <div className="w-full relative ">
                  <picture>
                    <img src={electronic} alt={electronic} />
                  </picture>
                  <Overlay
                    className={" top-1/2 -translate-y-1/2  left-16"}
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
                    className={" top-1/2 -translate-y-1/2  left-16"}
                    title="Furniture Offer"
                    discountDetilsFast={` Up to`}
                    discountDetilsLast={`sale for all electronics! `}
                    discountAmount="50%"
                    btnTitle="Shop Now"
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
