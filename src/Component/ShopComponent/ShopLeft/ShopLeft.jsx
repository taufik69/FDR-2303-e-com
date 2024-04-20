import React, { useState } from "react";
import ShopCatagories from "../../CommonConponent/ShopLeftitem/ShopCatagories";
import { catagories } from "../../../../Data/Data.js";

const ShopLeft = ({ className }) => {
  return (
    <div className={className}>
      <ShopCatagories
        catagoresData={catagories ? catagories : []}
        shopLeftTitle={"Shop by Category"}
      />
    </div>
  );
};

export default ShopLeft;
