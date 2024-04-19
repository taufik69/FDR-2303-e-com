import React, { useState } from "react";
import Catagories from "../../CommonConponent/ShopLeftitem/Catagories";
import { shopCatagories } from "../../../../Data/Data.js";
const ShopLeft = ({ className }) => {
  return (
    <div className={className}>
      <Catagories categoriesItem={shopCatagories} />
    </div>
  );
};

export default ShopLeft;
