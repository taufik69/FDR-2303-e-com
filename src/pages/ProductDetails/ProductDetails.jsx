import React, { useEffect, useState } from "react";
import BreadCrumb from "../../Component/CommonConponent/BreadCrumb/BreadCrumb";
import { useDispatch, useSelector } from "react-redux";
import { FetcherProduct } from "../../Redux/AllSlice/ProductSlice/ProductSlice";
import ProductDeatailsTop from "../../Component/ProductDetailsComponent/ProductDeatailsTop";
import Loading from "../../Component/CommonConponent/Loading";
import RatingStar from "../../Component/ProductDetailsComponent/RatingStar";
import ProductInfo from "../../Component/ProductDetailsComponent/ProductInfo";
import { addtoCart } from "../../Redux/AllSlice/AddToCart/AddtocartSlice";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const [EachProduct, setEachProduct] = useState({});
  const { productId } = useParams();

  useEffect(() => {
    dispatch(FetcherProduct(`https://dummyjson.com/products/${productId}`));
  }, []);
  const { data, status } = useSelector((state) => state.prouduct);

  useEffect(() => {
    if (status.payload === "IDLE") {
      setEachProduct(data.payload);
    }
  }, [status.payload, data.payload]);

  // HandleCart
  const HandleCart = () => {
    dispatch(addtoCart(EachProduct));
  };
  return (
    <div className="py-14">
      <div className="container">
        <div>
          <BreadCrumb />
        </div>
        {status.payload === "LOADING" ? (
          <Loading className={"w-[49%]"} perItem={4} />
        ) : status.payload === "ERROR" ? (
          "Error"
        ) : (
          <ProductDeatailsTop EachProductImage={EachProduct} />
        )}

        <div>
          <h1 className="font-DMsans text-[39px] font-bold text-main_font_color">
            {EachProduct.title ? EachProduct.title : "Proudcts"}{" "}
          </h1>
          <RatingStar rating={EachProduct.rating} />

          <div className="mt-5 flex items-center gap-x-5">
            <span className="font-DMsans text-[16px] font-normal text-secondary_font_color line-through">
              ${EachProduct.price}
            </span>

            <span className="font-DMsans text-[20px] font-bold text-main_font_color">
              $
              {Math.round(
                EachProduct.price -
                  (EachProduct.price * EachProduct.discountPercentage) / 100,
              )}
            </span>
          </div>
        </div>

        <div>
          <ProductInfo
            productStock={EachProduct.stock}
            onAddtoCart={HandleCart}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
