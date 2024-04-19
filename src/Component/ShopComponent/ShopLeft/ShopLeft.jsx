import React, { useState } from "react";
import ShopLeftItem from "../../CommonConponent/ShopLeftitem/ShopLeftItem";

const ShopLeft = ({ className }) => {
  return (
    <div className={className}>
      <ShopLeftItem />
      <ShopLeftItem />
      <ShopLeftItem />
      <ShopLeftItem />
    </div>
  );
};

export default ShopLeft;
