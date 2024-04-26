import React, { useEffect, useState } from "react";
import Product from "../Product";
import p3 from "../../../assets/p3.png";
import Button from "../Button";

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
                className={"py-2 px-8 bg-black text-white "}
              />
            }
          />
        </div>
      ))}
    </div>
  );
};

export default ProductRightBottom;
