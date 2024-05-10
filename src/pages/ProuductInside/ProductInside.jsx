import React, { useEffect } from "react";
import BreadCrumb from "../../Component/CommonConponent/BreadCrumb/BreadCrumb";
import { useSelector, useDispatch } from "react-redux";
import { FetcherProduct } from "../../Redux/AllSlice/ProductSlice/ProductSlice";

const ProductInside = () => {
  const dispatch = useDispatch();

  return (
    <div className="py-10">
      <div className="container">
        <BreadCrumb />
      </div>
      <div>
        <div className="max-w-[50%]">
          <picture>{start}</picture>
        </div>
      </div>
    </div>
  );
};

export default ProductInside;
