import React, { useEffect } from "react";
import ProductRightTop from "../../CommonConponent/ShopLeftitem/ProductRightTop";
const ShopRight = ({ className }) => {
<<<<<<< HEAD
  useEffect(() => {
    const DataFetcher = async () => {
      const data = await axios.get("https://dummyjson.com/products");
    };

    DataFetcher();
  }, []);
  return <div className={className}>ShopRight</div>;
=======
  return (
    <div className={className}>
      <ProductRightTop />
    </div>
  );
>>>>>>> main
};

export default ShopRight;
