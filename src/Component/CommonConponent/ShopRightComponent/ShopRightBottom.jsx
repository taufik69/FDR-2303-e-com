import { ShopRightPageNumberContext } from "../../ShopComponent/ShopRight/ShopRight.jsx";
import React, { useEffect, useState, useContext } from "react";
import Product from "../Product";
import Button from "../Button";
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";
import { FetcherProduct } from "../../../Redux/AllSlice/ProductSlice/ProductSlice.js";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const ShopRightBottom = () => {
  const dispatch = useDispatch();
  const value = useContext(ShopRightPageNumberContext);
  const { perPageItem, GridLayout } = value;
  const [allProducts, setallProducts] = useState([]);
  const [page, setpage] = useState(1);

  useEffect(() => {
    dispatch(FetcherProduct(import.meta.env.VITE_REACT_APP_PRODUCT_API));
  }, []);

  const { data, status } = useSelector((state) => state.prouduct);
  useEffect(() => {
    if (status.payload === "IDLE") {
      setallProducts(data.payload);
    }
  }, [status.payload, data.payload]);

  //   handlePagination function implementaion
  const handlePagination = (pageNumber) => {
    console.log(pageNumber);
    if (
      pageNumber > 0 &&
      pageNumber <= Math.floor(allProducts.length / perPageItem) + 1
    ) {
      setpage(pageNumber);
    }
  };

  return (
    <>
      <div className="mt-10">
        {status.payload == "LOADING" ? (
          <div className="flex h-[100vh] items-center justify-center">
            <div class="mx-auto w-full max-w-sm rounded-md border border-blue-300 p-4 shadow">
              <div class="flex animate-pulse space-x-4">
                <div class="h-10 w-10 rounded-full bg-slate-200"></div>
                <div class="flex-1 space-y-6 py-1">
                  <div class="h-2 rounded bg-slate-200"></div>
                  <div class="space-y-3">
                    <div class="grid grid-cols-3 gap-4">
                      <div class="col-span-2 h-2 rounded bg-slate-200"></div>
                      <div class="col-span-1 h-2 rounded bg-slate-200"></div>
                    </div>
                    <div class="h-2 rounded bg-slate-200"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : status.payload === "ERROR" ? (
          <h1 className="flex h-[100vh] items-center justify-center bg-red-700 text-4xl text-white">
            Eroor
          </h1>
        ) : (
          allProducts && (
            <div>
              <div className=" flex  flex-wrap justify-between gap-y-7">
                {allProducts
                  ?.slice(page * perPageItem - perPageItem, page * perPageItem)
                  .map((productItem) => (
                    <div
                      className={`w-full md:w-[49%] xl:w-[32%] ${GridLayout ? "w-full " : "w-[32%]"}`}
                      key={productItem.id}
                    >
                      <Link to={`/product-inside/${productItem.id}`}>
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
                              className={"bg-black px-8 py-2 text-white "}
                            />
                          }
                        />
                      </Link>
                    </div>
                  ))}
              </div>

              <div className="mt-10">
                <div className="flex flex-wrap items-center justify-between">
                  <div className="flex gap-x-2">
                    <p
                      className={`flex h-[36px] w-[36px] cursor-pointer items-center  justify-center rounded-sm bg-red-100 text-black `}
                      onClick={() => handlePagination(page - 1)}
                    >
                      <MdKeyboardDoubleArrowLeft />
                    </p>
                    {[
                      ...new Array(
                        Math.floor(allProducts.length / perPageItem) + 1,
                      ),
                    ].map((item, index) => (
                      <div key={index}>
                        <p
                          className={`flex h-[36px] w-[36px] cursor-pointer items-center  justify-center rounded-sm bg-black text-main_bg_color ${
                            index + 1 === page &&
                            "rounded-sm bg-blue-400 text-main_font_color"
                          }`}
                          onClick={() => handlePagination(index + 1)}
                        >
                          {index + 1}
                        </p>
                      </div>
                    ))}
                    <p
                      className={`flex h-[36px] w-[36px] cursor-pointer items-center  justify-center rounded-sm bg-red-100 text-black `}
                      onClick={() => handlePagination(page + 1)}
                    >
                      <MdKeyboardDoubleArrowRight />
                    </p>
                  </div>

                  <div className="mt-5 sm:mt-0">
                    <p>{`Products from ${
                      page == 1
                        ? page * perPageItem - perPageItem + 1
                        : page * perPageItem - perPageItem
                    } to ${
                      page === Math.floor(allProducts.length / perPageItem) + 1
                        ? allProducts.length
                        : page * perPageItem
                    } of ${allProducts.length}`}</p>
                  </div>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </>
  );
};

export default ShopRightBottom;
