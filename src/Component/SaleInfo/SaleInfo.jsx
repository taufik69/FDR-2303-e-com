import React from "react";
import Flex from "../CommonConponent/Flex.jsx";
import saleLeft from "../../assets/Image1.png";
import electronic from "../../assets/electronicImage.png";
import FurnitureImage from "../../assets/FurnitureImage.png";
import Button from "../CommonConponent/Button.jsx";

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
              
            </div>
            <div className="w-full ">
              <Flex className={"flex-col gap-y-11"}>
                <div className="w-full ">
                  <picture>
                    <img src={electronic} alt={electronic} />
                  </picture>
                </div>
                <div className="w-full  ">
                  <picture>
                    <img src={FurnitureImage} alt={FurnitureImage} />
                  </picture>
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
