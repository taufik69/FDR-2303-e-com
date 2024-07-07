import React, { useEffect, useState } from "react";
import {
  catagories,
  shopByColor,
  shopByBrand,
  shopByPrice,
} from "../../../../Data/Data.js";
import ShopCatagories from "../../CommonConponent/ShopLeftitem/ShopCatagories";
import ShopByColor from "../../CommonConponent/ShopLeftitem/ShopByColor.jsx";
import { useSelector } from "react-redux";
const ShopLeft = ({ className }) => {
  const [allProducts, setallProducts] = useState([]);
  const { data, status } = useSelector((state) => state.prouduct);
  useEffect(() => {
    if (status.payload === "IDLE") {
      setallProducts(data.payload.products);
    }
  }, [status.payload, data.payload]);

  let Catagoryarr = [];
  let categoriesSet = new Set();

  allProducts.forEach((product) => {
    if (!categoriesSet.has(product.category)) {
      Catagoryarr.push({
        id: product.id,
        title: product.category,
        subcategories: product.tags,
      });
      categoriesSet.add(product.category);
    }
  });

  let Brandarr = [];
  let BrandarrSet = new Set();

  allProducts.forEach((product) => {
    if (!BrandarrSet.has(product.brand)) {
      Brandarr.push({
        id: product.id,
        title: product.brand,
      });
      categoriesSet.add(product.brand);
    }
  });

  console.log(Brandarr);

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
        shopCatagoryItem={Brandarr ? Brandarr : []}
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
