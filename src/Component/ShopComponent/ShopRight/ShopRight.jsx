import React, { createContext, useState } from "react";
import ProductRightTop from "../../CommonConponent/ShopRightComponent/ProductRightTop";
import ShopRightBottom from "../../CommonConponent/ShopRightComponent/ShopRightBottom";

export const ShopRightPageNumberContext = createContext();

const ShopRight = ({ className }) => {
  const [perPageItem, setperPageItem] = useState(9);
  // HandlePageOption function
  const HandlePageOption = (e) => {
    setperPageItem(e.target.value);
  };

  return (
    <div className={className}>
      <ProductRightTop onpageItem={HandlePageOption} />
      <ShopRightPageNumberContext.Provider value={perPageItem}>
        <ShopRightBottom />
      </ShopRightPageNumberContext.Provider>
    </div>
  );
};

export default ShopRight;
