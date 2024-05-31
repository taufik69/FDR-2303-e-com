import React, { useState } from "react";
import pimg from "../../assets/p4.png";
import BreadCrumb from "../../Component/CommonConponent/BreadCrumb/BreadCrumb.jsx";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { MdCancel } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { RemoveItemCart } from "../../Redux/AllSlice/AddToCart/AddtocartSlice.js";
const Cart = () => {
  const dispatch = useDispatch();
  const { CartTtem } = useSelector((state) => state.cart);

  /**
   * todo: handleRemove funtionality added
   * @params ({item})
   */
  const handleRemove = (item) => {
    dispatch(RemoveItemCart(item));
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

        <div className="scrollbar-thumb-main_font_color scrollbar-track-secondary_bg_color scrollbar-thin h-[500px] overflow-y-scroll ">
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
                        <span className="cursor-pointer">
                          <FaMinus />
                        </span>
                        <p> {item.cartQuantity}</p>
                        <span className="cursor-pointer">
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
      </div>
    </div>
  );
};

export default Cart;
