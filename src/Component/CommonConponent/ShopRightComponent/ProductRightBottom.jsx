import React, { useEffect, useState } from "react";
import Product from "../Product";

import Button from "../Button";
import { useSelector } from "react-redux";

const ProductRightBottom = () => {
  const [product, setProducts] = useState([]);
  const [page, setpage] = useState(1);
  useEffect(() => {
    const DataFetcher = async () => {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      setProducts(data.products);
    };

    DataFetcher();
  }, []);
  const x = useSelector((state) => state.product);
  console.log(x);

  console.log(product);
  return (
    <div className=" mt-10 flex flex-wrap">
      {product?.slice(page * 12 - 12, 12).map((pitem) => (
        <div key={pitem.id} className="w-[33%]">
          <Product
            imga={pitem.thumbnail}
            colorVariant={"black"}
            bagze={
              <Button
                title={"New"}
                className={"bg-black px-8 py-2 text-white "}
              />
            }
          />
        </div>
      ))}
    </div>
  );
};

export default ProductRightBottom;
