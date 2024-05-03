import { ShopRightPageNumberContext } from "../../ShopComponent/ShopRight/ShopRight.jsx";
import React, { useEffect, useState, useContext } from "react";
import Product from "../Product";
import Button from "../Button";
import axios from "axios";
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";

const ShopRightBottom = () => {
  const value = useContext(ShopRightPageNumberContext);
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
    if (
      pageNumber > 0 &&
      pageNumber <= Math.floor(allProducts.length / value) + 1
    ) {
      setpage(pageNumber);
    }
  };

  return (
    <>
      <div className="mt-10">
        <div className="flex flex-wrap justify-between gap-y-7">
          {allProducts
            ?.slice(page * value - value, page * value)
            .map((productItem) => (
              <div className={"w-[32%]"} key={productItem.id}>
                <Product
                  imga={productItem.thumbnail}
                  colorVariant={"balck"}
                  productName={productItem.title}
                  procutPrice={
                    productItem.price - productItem.discountPercentage
                  }
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
              <p
                className={`w-[36px] h-[36px] bg-red-100 text-black flex  justify-center items-center cursor-pointer rounded-sm `}
                onClick={() => handlePagination(page - 1)}
              >
                <MdKeyboardDoubleArrowLeft />
              </p>
              {[...new Array(Math.floor(allProducts.length / value) + 1)].map(
                (item, index) => (
                  <div key={index}>
                    <p
                      className={`w-[36px] h-[36px] bg-black text-main_bg_color flex  justify-center items-center cursor-pointer rounded-sm ${
                        index + 1 === page &&
                        "bg-blue-400 text-main_font_color rounded-sm"
                      }`}
                      onClick={() => handlePagination(index + 1)}
                    >
                      {index + 1}
                    </p>
                  </div>
                )
              )}
              <p
                className={`w-[36px] h-[36px] bg-red-100 text-black flex  justify-center items-center cursor-pointer rounded-sm `}
                onClick={() => handlePagination(page + 1)}
              >
                <MdKeyboardDoubleArrowRight />
              </p>
            </div>

            <div>
              <p>{`Products from ${
                page == 1 ? page * value - value + 1 : page * value - value
              } to ${
                page === Math.floor(allProducts.length / value) + 1
                  ? allProducts.length
                  : page * value
              } of ${allProducts.length}`}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopRightBottom;
