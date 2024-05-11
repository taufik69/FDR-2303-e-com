import React, { useEffect, useState } from "react";
import BreadCrumb from "../../Component/CommonConponent/BreadCrumb/BreadCrumb";
import { useDispatch, useSelector } from "react-redux";
import { FetcherProduct } from "../../Redux/AllSlice/ProductSlice/ProductSlice";
import ProductDeatailsTop from "../../Component/ProductDetailsComponent/ProductDeatailsTop";
import Loading from "../../Component/CommonConponent/Loading";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const [EachProduct, setEachProduct] = useState({});
  useEffect(() => {
    dispatch(FetcherProduct("https://dummyjson.com/products/1"));
  }, []);
  const { data, status } = useSelector((state) => state.prouduct);

  useEffect(() => {
    if (status.payload === "IDLE") {
      setEachProduct(data.payload);
    }
  }, [status.payload, data.payload]);

  console.log(status);

  return (
    <div className="py-14">
      <div className="container">
        <div>
          <BreadCrumb />
        </div>
        {status.payload === "LOADING" ? (
          <div className="flex justify-between">
            <Loading />
            <Loading />
            <Loading />
            <Loading />
          </div>
        ) : status.payload === "ERROR" ? (
          "Error"
        ) : (
          <ProductDeatailsTop EachProductImage={EachProduct} />
        )}

        <div>
          <h1>{EachProduct.title ? EachProduct.title : "Proudcts"} </h1>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
