import React, { useEffect, useRef, useState } from "react";
import Flex from "../../CommonConponent/Flex";
import { HiOutlineBars3BottomLeft } from "react-icons/hi2";
import Serach from "../../CommonConponent/Serach";
import { FaUser, FaShoppingCart } from "react-icons/fa";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import Button from "../../CommonConponent/Button.jsx";
import { useDispatch, useSelector } from "react-redux";
import { getTotal } from "../../../Redux/AllSlice/AddToCart/AddtocartSlice.js";

const MenuBar = () => {
  const [showCatagories, setshowCatagories] = useState(false);
  const [showAccount, setshowAccount] = useState(false);
  const [cart, setcart] = useState(false);
  const MenuRef = useRef();
  const CartRef = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const HandleCatagory = () => {
    setshowAccount(false);
    setshowAccount(false);
    setshowCatagories(!showCatagories);
  };

  const HandleAccount = () => {
    setshowCatagories(false);
    setcart(false);
    setshowAccount(!showAccount);
  };

  // HanldeCart function implement
  const HanldeCart = () => {
    setshowCatagories(false);
    setshowAccount(false);
    setcart(true);
  };

  // Menu Ref funtionality

  useEffect(() => {
    window.addEventListener("click", (e) => {
      if (!MenuRef.current.contains(e.target)) {
        setshowCatagories(false);
        setshowAccount(false);
        setcart(false);
      }
    });
  }, []);

  /**
   * todo : take all product from redux
   */
  const { TotalAmount, totoalCartItem, CartTtem } = useSelector(
    (state) => state.cart,
  );

  const handleCartChange = () => {
    navigate("/cart");
  };

  useEffect(() => {
    dispatch(getTotal());
  }, [CartTtem]);

  /**
   * todo : handleCancelCartItem funtionality
   * @param({item})
   */
  const handleCancelCartItem = (event, item) => {
    console.log(CartRef.current.contains(event.target));
    if (CartRef.current.contains(event.target)) {
      setcart(false);
    }
  };
  return (
    <>
      <div className="px-sm-0 bg-secondary_bg_color px-4 py-5" ref={MenuRef}>
        <div className="container">
          <Flex className={"items-center justify-between gap-x-3"}>
            <Flex className={"gap-x-2"}>
              <div onClick={HandleCatagory}>
                <HiOutlineBars3BottomLeft
                  className={`cursor-pointer text-2xl  ${
                    showCatagories && "text-green-400 "
                  }`}
                />
              </div>
              <p className="sm:menuItem hidden cursor-pointer text-[14px] text-main_font_color sm:block">
                Shop by Category
              </p>

              <div>
                <ul
                  className={`absolute left-[-100%] top-[200px] z-10 w-full  divide-y divide-[#ffffff23] bg-black py-4 text-center text-white transition-all ${
                    showCatagories ? "left-[0%]" : ""
                  }`}
                >
                  <li>
                    <Link to={"/"} className="py-4">
                      <a href="#">Accesories</a>
                    </Link>
                  </li>

                  <li>
                    <Link to={"/"} className="py-4">
                      <a href="#">Accesories</a>
                    </Link>
                  </li>

                  <li>
                    <Link to={"/"} className="py-4">
                      <a href="#">Accesories</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </Flex>
            <Serach placeHolder="Search Products" />

            <Flex className={"gap-x-5"}>
              <div onClick={HandleAccount}>
                <Flex className={"cursor-pointer items-center gap-x-2"}>
                  <div>
                    <FaUser />
                  </div>
                  <div>{showAccount ? <FaChevronUp /> : <FaChevronDown />}</div>
                </Flex>

                <div>
                  <ul
                    className={`absolute left-[-100%] top-[200px] z-10 w-full divide-y  divide-[#ffffff23] bg-black py-4 text-center text-white transition-all  sm:w-[200px] ${
                      showAccount ? "left-[0%]" : null
                    }`}
                  >
                    <li className="py-4">
                      <Link to={"/"}>My Account</Link>
                    </li>
                    <li className="py-4">
                      <Link to={"/"}>Log Out</Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="cursor-pointer" onClick={HanldeCart}>
                <div className="relative">
                  <FaShoppingCart className={`${cart && "text-blue-600"}`} />
                  <span class="absolute -top-3 left-3 flex h-10  w-10 items-center justify-center rounded-full bg-blue-300 font-bold text-white">
                    {totoalCartItem}
                  </span>
                </div>

                <div
                  className={`absolute left-[-100%] top-[200px] z-10 w-full bg-black bg-secondary_bg_color text-white transition-all lg:w-[20%] ${
                    cart ? "left-[75%]" : null
                  }`}
                >
                  <div
                    className="h-[50vh] overflow-y-scroll scrollbar-thin scrollbar-track-secondary_bg_color scrollbar-thumb-main_font_color"
                    ref={CartRef}
                  >
                    {CartTtem?.map((item) => (
                      <div className="flex items-center justify-around py-5">
                        <div className="h-[80px] w-[80px] border-2 border-main_font_color bg-secondary_bg_color object-cover">
                          <img src={item.thumbnail} alt={item.thumbnail} />
                        </div>

                        <div className="font-DMsans text-sm font-bold text-black">
                          <h2>
                            {item.title
                              ? `${item.title.slice(0, 15)}...`
                              : "Title Missing"}
                          </h2>
                          <span>
                            {" "}
                            {item.price ? `$${item.price}` : "$44.00"}{" "}
                          </span>
                        </div>

                        <div
                          className="text-main_font_color"
                          onClick={(event) => handleCancelCartItem(event, item)}
                        >
                          <span>
                            <RxCross2 />
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="bg-main_bg_color py-5">
                    <h2 className="text-md ml-4 font-DMsans font-normal text-secondary_font_color">
                      Subtotal:
                      <span className="ml-1 font-bold text-main_font_color">
                        ${TotalAmount}
                      </span>
                    </h2>
                    <div className="py-6">
                      <Flex className={"justify-around"}>
                        <Button
                          oncartChange={handleCartChange}
                          title={"View Cart"}
                          className={
                            "font-sm border-2 border-main_font_color px-10 py-4 font-DMsans font-bold text-black"
                          }
                        ></Button>

                        <Button
                          className={
                            "font-sm bg-black  px-10 py-4 font-DMsans font-bold text-white"
                          }
                          title={"Checkout"}
                        ></Button>
                      </Flex>
                    </div>
                  </div>
                </div>
              </div>
            </Flex>
          </Flex>
        </div>
      </div>
    </>
  );
};

export default MenuBar;
