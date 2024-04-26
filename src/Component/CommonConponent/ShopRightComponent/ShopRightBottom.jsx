import React, { useEffect, useState } from "react";
import Product from "../Product";
import p4 from "../../../assets/p4.png";
import Button from "../Button";
import axios from "axios";
const ShopRightBottom = () => {
  const [allProducts, setallProducts] = useState([]);
  const [page, setpage] = useState(1);

  useEffect(() => {
    const ProudtDataFetcher = async () => {
      const products = await axios.get("https://dummyjson.com/products");
      setallProducts(products.data.products);
    };

    ProudtDataFetcher();
  }, []);

  //   handlePagination function implementaion
  const handlePagination = (pageNumber) => {
    setpage(pageNumber);
  };

  return (
    <>
      <div className="mt-10">
        <div className="flex flex-wrap justify-between gap-y-7">
          {allProducts?.slice(page * 9 - 9, page * 9).map((productItem) => (
            <div className={"w-[32%]"} key={productItem.id}>
              <Product
                imga={productItem.thumbnail}
                colorVariant={"balck"}
                productName={productItem.title}
                procutPrice={productItem.price - productItem.discountPercentage}
                bagze={
                  <Button
                    title={
                      productItem.discountPercentage
                        ? `$${productItem.discountPercentage}`
                        : productItem.stock === 0
                        ? "Stock Out"
                        : "New"
                    }
                    className={"py-2 px-8 bg-black text-white "}
                  />
                }
              />
            </div>
          ))}
        </div>

        <div className="mt-10">
          <div className="flex items-center justify-between">
            <div className="flex gap-x-2">
              {[...new Array(Math.floor(allProducts.length / 9) + 1)].map(
                (item, index) => (
                  <div key={index}>
                    <p
                      className="w-[36px] h-[36px] bg-black text-main_bg_color flex  justify-center items-center cursor-pointer"
                      onClick={() => handlePagination(index + 1)}
                    >
                      {index + 1}
                    </p>
                  </div>
                )
              )}
            </div>

            <div>
              <p>{`Products from ${
                page == 1 ? page * 9 - 9 + 1 : page * 9 - 9
              } to ${
                page === Math.floor(allProducts.length / 9) + 1
                  ? allProducts.length
                  : page * 9
              } of ${allProducts.length}`}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopRightBottom;
