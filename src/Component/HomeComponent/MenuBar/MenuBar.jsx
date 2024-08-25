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
import { getAuth, signOut } from "firebase/auth";

import {
  getTotal,
  RemoveItemCart,
} from "../../../Redux/AllSlice/AddToCart/AddtocartSlice.js";
import SearchResult from "../../CommonConponent/SeachResult/SearchResult.jsx";

const MenuBar = () => {
  const [showCatagories, setshowCatagories] = useState(false);
  const [showAccount, setshowAccount] = useState(false);
  const [cart, setcart] = useState(false);
  const auth = getAuth();

  const MenuRef = useRef();
  const CartRef = useRef();
  const acountRef = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  /**
   * todo : take all product from redux
   */
  const { TotalAmount, totoalCartItem, CartTtem } = useSelector(
    (state) => state.cart,
  );

  // Menu Ref funtionality

  useEffect(() => {
    window.addEventListener("click", (e) => {
      if (!MenuRef.current.contains(e.target)) {
        setshowCatagories(false);
        setshowAccount(false);
        setcart(false);
      }
      if (CartRef.current.contains(e.target)) {
        setcart(true);
      }
      if (acountRef.current.contains(e.target)) {
        setshowAccount(true);
        setcart(false);
      }
    });
    return () => {
      window.addEventListener("click", () => {});
    };
  }, []);
  const handleCartChange = () => {
    navigate("/cart");
  };
  useEffect(() => {
    dispatch(getTotal());
    return () => {
      dispatch(getTotal());
    };
  }, [CartTtem]);
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
    setcart(!cart);
  };

  /**
   * todo : HandleCartItem funtion implement
   * @param({item:{object}})
   *
   */

  const HandleCartItem = (item) => {
    setcart(true);
    dispatch(RemoveItemCart(item));
  };
  const [allproducts, setallproducts] = useState([]);
  const [searchResult, setsearchResult] = useState([]);
  const [searchInput, setsearchInput] = useState("");
  /**
   * todo: Takes a product data from store
   */
  const { data, status } = useSelector((state) => state.prouduct);

  useEffect(() => {
    if (status.payload === "IDLE") {
      setallproducts(data.payload.products);
    }
  }, [status.payload, data.payload]);
  /**
   * todo HanldeSearch funtion implenmentiation
   * params({event})
   */
  const handleSearch = (event) => {
    const { value } = event.target;
    setsearchInput(value);
    if (searchInput) {
      const searchResult = allproducts.filter((product) =>
        product.title.toLowerCase().includes(searchInput.toLowerCase()),
      );
      setsearchResult(searchResult);
    } else {
      setsearchResult([]);
    }
  };

  /**
   * todo : handleGoSearchProduct funtion implement
   * @param({id})
   */

  const handleGoSearchProduct = (productId) => {
    setsearchInput("");
    setsearchResult([]);
    navigate(`/product-details/${productId}`);
  };

  // log out
  const hanldeLogOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/login");
        setshowAccount(false);
      })
      .catch((error) => {
        console.error("error from log out");
      });
  };

  return (
    <>
      <div
        className="px-sm-0 relative bg-secondary_bg_color px-4 py-5"
        ref={MenuRef}
      >
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
            {/* search funtion */}
            <Serach
              placeHolder="Search Products"
              onSearch={handleSearch}
              searchInput={searchInput}
            />
            {searchResult.length > 0 && (
              <SearchResult
                className={
                  "absolute left-[28%] top-[100%] z-10 w-[37%] bg-gray-200 px-5 py-3"
                }
                searchResult={searchResult}
                onToProduct={handleGoSearchProduct}
              />
            )}
            <Flex className={"gap-x-5"}>
              <div onClick={HandleAccount}>
                <Flex className={"cursor-pointer items-center gap-x-2"}>
                  <div>
                    <FaUser />
                  </div>
                  <div>{showAccount ? <FaChevronUp /> : <FaChevronDown />}</div>
                </Flex>

                <div ref={acountRef}>
                  <ul
                    className={`absolute left-[-100%] top-[110px] z-10 w-full divide-y  divide-[#ffffff23] bg-black py-4 text-center text-white transition-all  sm:w-[200px] ${
                      showAccount ? "left-[83%] " : null
                    }`}
                  >
                    <li className="py-4">
                      <Link to={"/about"}>My Account</Link>
                    </li>
                    <li className="py-4" onClick={hanldeLogOut}>
                      Log Out
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
                    ref={CartRef}
                    className="h-[50vh] overflow-y-scroll scrollbar-thin scrollbar-track-secondary_bg_color scrollbar-thumb-main_font_color"
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
                          onClick={() => HandleCartItem(item)}
                        >
                          <RxCross2 />
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
