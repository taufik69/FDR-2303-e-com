import React, { useState } from "react";
import Catagories from "../../CommonConponent/ShopLeftitem/Catagories";
import { shopCatagories, shopColor, Brand } from "../../../../Data/Data.js";
import ShopByColor from "../../CommonConponent/ShopLeftitem/ShopByColor.jsx";

const ShopLeft = ({ className }) => {
  return (
    <div className={className}>
      <Catagories categoriesItem={shopCatagories} />
      <ShopByColor color={true} shopColor={shopColor} title={"Shop by Color"} />
      <ShopByColor color={true} shopColor={Brand} title={"Shop by Brand"} />
    </div>
  );
};

export default ShopLeft;
