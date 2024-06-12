import React, { useEffect } from "react";
import { shopByColor, shopByPrice } from "../../../../Data/Data.js";
import ShopCatagories from "../../CommonConponent/ShopLeftitem/ShopCatagories";
import ShopByColor from "../../CommonConponent/ShopLeftitem/ShopByColor.jsx";
import { useSelector } from "react-redux";

const ShopLeft = ({ className }) => {
  let products = useSelector((state) => state.prouduct);
  let par = products?.data?.payload?.products || [];
  let Catagoryarr = [];
  let brandarr = [];
  par.filter((item) => {
    Catagoryarr.some((cata) => cata.category == item.category)
      ? null
      : Catagoryarr.push(item);
  });

  par.filter((item) => {
    brandarr.some((bitem) => bitem.brand == item.brand)
      ? null
      : brandarr.push(item);
  });

  return (
    <div className={className}>
      <ShopCatagories
        catagoresData={Catagoryarr ? Catagoryarr : []}
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
        shopCatagoryItem={brandarr ? brandarr : []}
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
