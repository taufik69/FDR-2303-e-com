import React, { useState } from "react";
import Product from "../../CommonConponent/Product";
import Button from "../../CommonConponent/Button";
import { ProductData } from "/Data/Data.js";

const NewArival = () => {
  const [Allproduct, setAllproduct] = useState(ProductData);

  return (
    <>
      <div className="py-[128px]">
        <div className="container">
          <h1 className="font-bold text-main_font_color font-DMsans text-[39px]">
            New Arrivals
          </h1>

          <div className="flex justify-between">
            {Allproduct?.map((item) => (
              <div key={item.id}>
                <Product
                  colorVariant={item.color === true ? true : false}
                  bagze={
                    item.bazge == true ? (
                      <Button
                        title={"10%"}
                        className={"py-2 px-8 bg-black text-white "}
                      />
                    ) : null
                  }
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default NewArival;
