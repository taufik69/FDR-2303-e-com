import React from "react";
import {
  catagories,
  shopByColor,
  shopByBrand,
  shopByPrice,
} from "../../../../Data/Data.js";
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
        color={true}
        dropdownis={true}
        dropdownExpandIs={false}
      />
      <ShopByColor
        shopLeftTitle={"Shop by Brand"}
        shopCatagoryItem={shopByBrand ? shopByBrand : []}
        color={false}
        dropdownis={true}
        dropdownExpandIs={false}
      />
      <ShopByColor
        shopLeftTitle={"Shop by Price"}
        shopCatagoryItem={shopByPrice ? shopByPrice : []}
        color={false}
        dropdownis={false}
        dropdownExpandIs={true}
      />
    </div>
  );
};

export default ShopLeft;
