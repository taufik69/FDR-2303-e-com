import React, { useState, useEffect } from "react";
import pimg from "../../assets/p4.png";
import BreadCrumb from "../../Component/CommonConponent/BreadCrumb/BreadCrumb.jsx";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { MdCancel } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import {
  RemoveItemCart,
  ProductIncrement,
  productDecrement,
  getTotal,
} from "../../Redux/AllSlice/AddToCart/AddtocartSlice.js";
const Cart = () => {
  const dispatch = useDispatch();
  const { CartTtem, TotalAmount, totoalCartItem } = useSelector(
    (state) => state.cart,
  );

  useEffect(() => {
    dispatch(getTotal());
  }, [dispatch, CartTtem]);

  /**
   * todo: handleRemove funtionality added
   * @params ({item})
   */
  const handleRemove = (item) => {
    dispatch(RemoveItemCart(item));
  };

  /**
   * todo : handleIncrementProduct funtionality
   * motive : increase item qunatity
   * @param({item})
   *
   */

  const handleIncrementProduct = (item) => {
    dispatch(ProductIncrement(item));
  };

  /**
   * todo : handleDcrementProduct funtionality
   * motive : DcrementProduct item qunatity
   * @param({item})
   *
   */
  const handleDcrementProduct = (item) => {
    dispatch(productDecrement(item));
  };

  return (
    <div className="py-[124px]">
      <div className="container">
        <div className=" flex flex-col justify-start gap-y-3">
          <h1 className="font-DMsans text-[49px] font-bold text-main_font_color">
            Cart
          </h1>
          <BreadCrumb />
        </div>

        <div className="mt-[136px] flex  items-center justify-between bg-secondary_bg_color  py-8">
          <div className="shrink grow basis-60 pl-10 ">
            <h2 className="font-DMsans text-base font-bold text-main_font_color">
              Product
            </h2>
          </div>
          <div className="flex grow basis-60 justify-center">
            <h2 className="font-DMsans text-base font-bold text-main_font_color">
              Price
            </h2>
          </div>

          <div className="flex grow basis-60 justify-center">
            <h2 className="font-DMsans text-base font-bold text-main_font_color">
              Quantity
            </h2>
          </div>
          <div className="flex grow basis-60 justify-center">
            <h2 className="font-DMsans text-base font-bold text-main_font_color">
              Total
            </h2>
          </div>
        </div>

        <div className="h-[500px] overflow-y-scroll scrollbar-thin scrollbar-track-secondary_bg_color scrollbar-thumb-main_font_color ">
          {CartTtem?.length > 0
            ? CartTtem?.map((item) => (
                <div className="flex items-center justify-between  py-10">
                  <div className="flex    shrink  grow basis-60 items-center gap-x-5">
                    <span onClick={() => handleRemove(item)}>
                      <MdCancel className="cursor-pointer text-2xl" />
                    </span>
                    <div className="h-20 w-20 rounded-md  shadow-xl">
                      <picture>
                        <img
                          src={item.thumbnail ? item.thumbnail : pimg}
                          alt={item.thumbnail ? item.thumbnail : pimg}
                          className="h-full w-full rounded-md object-cover"
                        />
                      </picture>
                    </div>
                    <h2 className="font-DMsans text-base font-semibold text-main_font_color">
                      {item.title ? item.title : "xyz"}
                    </h2>
                  </div>

                  <div className="flex  shrink grow basis-60 justify-center">
                    <p className="font-DMsans text-base font-bold text-main_font_color">
                      {item.price ? `$${item.price}` : "$0.00"}
                    </p>
                  </div>

                  <div className="flex  shrink grow basis-60 justify-center">
                    <div className=" flex items-center">
                      <div className="flex items-center justify-around gap-x-8 border-2 border-gray-300 px-4 py-2">
                        <span
                          className="cursor-pointer"
                          onClick={() => handleDcrementProduct(item)}
                        >
                          <FaMinus />
                        </span>
                        <p> {item.cartQuantity}</p>
                        <span
                          className="cursor-pointer"
                          onClick={() => handleIncrementProduct(item)}
                        >
                          <FaPlus />
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex  shrink grow basis-60 justify-center">
                    <p className="font-DMsans text-base font-bold text-main_font_color">
                      {`$${item.cartQuantity * item.price}`}
                    </p>
                  </div>
                </div>
              ))
            : "kico nai"}
        </div>

        <div className="flex justify-end  py-10 text-end">
          <div className="flex  basis-6/12 flex-col gap-y-5">
            <h2 className="font-DMsans text-xl font-bold text-main_font_color">
              Cart totals : {totoalCartItem}
            </h2>
            <div>
              <div className="flex">
                <div className="flex w-full justify-start border-2 border-secondary_bg_color py-3">
                  <h2 className="text-md pl-4 font-DMsans font-bold capitalize text-main_font_color">
                    total
                  </h2>
                </div>
                <div className="flex w-full justify-start  border-2 border-secondary_bg_color py-3">
                  <h2 className="text-md pl-4 font-DMsans font-bold text-main_font_color opacity-70">
                    {TotalAmount} $
                  </h2>
                </div>
              </div>
              <div className="flex">
                <div className="flex w-full justify-start border-2 border-secondary_bg_color py-3">
                  <h2 className="text-md pl-4 font-DMsans font-bold text-main_font_color">
                    Subtotal
                  </h2>
                </div>
                <div className="flex w-full justify-start  border-2 border-secondary_bg_color py-3">
                  <h2 className="text-md pl-4 font-DMsans font-bold text-main_font_color opacity-70">
                    {TotalAmount} $
                  </h2>
                </div>
              </div>
            </div>

            <button className="flex items-center justify-center rounded-sm bg-main_font_color px-[16px] py-[32px] text-main_bg_color">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
