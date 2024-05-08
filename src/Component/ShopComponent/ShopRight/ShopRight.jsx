import React, { createContext, useState } from "react";
import ProductRightTop from "../../CommonConponent/ShopRightComponent/ProductRightTop";
import ShopRightBottom from "../../CommonConponent/ShopRightComponent/ShopRightBottom";

export const ShopRightPageNumberContext = createContext();

const ShopRight = ({ className }) => {
  const [perPageItem, setperPageItem] = useState(9);
  const [GridLayout, setGridLayout] = useState(false);
  // HandlePageOption function
  const HandlePageOption = (e) => {
    setperPageItem(e.target.value);
  };

  // handleChangelayout function implementaion
  const handleChangelayout = () => {
    setGridLayout(!GridLayout);
  };

  const shopRigtBottomItem = {
    perPageItem,
    GridLayout,
  };

  return (
    <div className={className}>
      <ProductRightTop
        onpageItem={HandlePageOption}
        onchageLayout={handleChangelayout}
        changeIcon = {GridLayout}
      />
      <ShopRightPageNumberContext.Provider value={shopRigtBottomItem}>
        <ShopRightBottom />
      </ShopRightPageNumberContext.Provider>
    </div>
  );
};

export default ShopRight;
