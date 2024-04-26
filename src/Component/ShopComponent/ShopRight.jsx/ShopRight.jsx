import React, { useEffect } from "react";
import ProductRightTop from "../../CommonConponent/ShopRightComponent/ProductRightTop";
import ShopRightBottom from "../../CommonConponent/ShopRightComponent/ShopRightBottom";
const ShopRight = ({ className }) => {
  return (
    <div className={className}>
      <ProductRightTop />
      <ShopRightBottom />
    </div>
  );
};

export default ShopRight;
