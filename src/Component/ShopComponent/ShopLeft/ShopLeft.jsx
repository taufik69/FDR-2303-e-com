import React from "react";
import { catagories, shopByColor } from "../../../../Data/Data.js";
import ShopCatagories from "../../CommonConponent/ShopLeftitem/ShopCatagories";
import ShopByColor from "../../CommonConponent/ShopLeftitem/ShopByColor.jsx";
const ShopLeft = ({ className }) => {
  return (
    <div className={className}>
      <ShopCatagories
        catagoresData={catagories ? catagories : []}
        shopLeftTitle={"Shop by Category"}
      />
      <ShopByColor
        shopLeftTitle={"Shop by color"}
        shopCatagoryItem={shopByColor ? shopByColor : []}
      />
    </div>
  );
};

export default ShopLeft;
