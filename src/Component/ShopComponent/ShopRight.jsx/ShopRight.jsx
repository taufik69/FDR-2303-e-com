import React, { useEffect } from "react";
import ProductRightTop from "../../CommonConponent/ShopRightComponent/ProductRightTop";
import ProductRightBottom from "../../CommonConponent/ShopRightComponent/ProductRightBottom";
const ShopRight = ({ className }) => {
  return (
    <div className={className}>
      <ProductRightTop />
      <div className="">
        <ProductRightBottom />
      </div>
    </div>
  );
};

export default ShopRight;
