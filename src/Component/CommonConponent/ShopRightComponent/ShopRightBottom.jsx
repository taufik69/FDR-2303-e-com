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

const ShopRightBottom = () => {
  const dispatch = useDispatch();

  const value = useContext(ShopRightPageNumberContext);
  const { perPageItem, GridLayout } = value;
  const [allProducts, setallProducts] = useState([]);
  const [page, setpage] = useState(1);
  console.log(perPageItem, GridLayout);

  useEffect(() => {
    dispatch(FetcherProduct());
  }, []);

  const { data, status } = useSelector((state) => state.prouduct);
  useEffect(() => {
    if (status.payload === "IDLE") {
      setallProducts(data.payload);
    }
  }, [status.payload, data.payload]);

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
        {status.payload == "LOADING" ? (
          <div className="flex justify-center items-center h-[100vh]">
            <div class="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
              <div class="animate-pulse flex space-x-4">
                <div class="rounded-full bg-slate-200 h-10 w-10"></div>
                <div class="flex-1 space-y-6 py-1">
                  <div class="h-2 bg-slate-200 rounded"></div>
                  <div class="space-y-3">
                    <div class="grid grid-cols-3 gap-4">
                      <div class="h-2 bg-slate-200 rounded col-span-2"></div>
                      <div class="h-2 bg-slate-200 rounded col-span-1"></div>
                    </div>
                    <div class="h-2 bg-slate-200 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : status.payload === "ERROR" ? (
          <h1 className="flex justify-center items-center h-[100vh] bg-red-700 text-white text-4xl">
            Eroor
          </h1>
        ) : (
          allProducts && (
            <div>
              <div className=" flex flex-wrap justify-between gap-y-7">
                {allProducts
                  ?.slice(page * perPageItem - perPageItem, page * perPageItem)
                  .map((productItem) => (
                    <div
                      className={`${GridLayout ? "w-full " : "w-[32%]"}`}
                      key={productItem.id}
                    >
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
                    {[
                      ...new Array(
                        Math.floor(allProducts.length / perPageItem) + 1
                      ),
                    ].map((item, index) => (
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
                    ))}
                    <p
                      className={`w-[36px] h-[36px] bg-red-100 text-black flex  justify-center items-center cursor-pointer rounded-sm `}
                      onClick={() => handlePagination(page + 1)}
                    >
                      <MdKeyboardDoubleArrowRight />
                    </p>
                  </div>

                  <div>
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
