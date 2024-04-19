import React, { useEffect } from "react";
import axios from "axios";
const ShopRight = ({ className }) => {
  useEffect(() => {
    const DataFetcher = async () => {
      const data = await axios.get("https://dummyjson.com/products");
      console.log(data.data.products);
    };

    DataFetcher();
  }, []);
  return <div className={className}>ShopRight</div>;
};

export default ShopRight;
