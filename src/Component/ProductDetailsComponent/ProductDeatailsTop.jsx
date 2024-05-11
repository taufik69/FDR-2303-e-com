import React from "react";

const ProductDeatailsTop = ({ EachProductImage }) => {
  return (
    <>
      <div className="py-10">
        <div className="flex flex-wrap items-center justify-between gap-y-8 ">
          {EachProductImage.images?.slice(0, 4).map((img) => (
            <div
              className="h-[450px] w-[49%]  cursor-pointer rounded-lg bg-green-200 shadow-xl"
              key={img}
            >
              <picture>
                <img
                  src={img}
                  alt={img}
                  className="h-full w-full rounded-lg object-cover "
                />
              </picture>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductDeatailsTop;
