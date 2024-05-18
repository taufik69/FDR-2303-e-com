import React, { useState } from "react";
import { TiPlus, TiMinus } from "react-icons/ti";

const ProductDetails = ({ title = "Title Missing" }) => {
  const [dropDown, setDropDown] = useState(false);
  const handleDropDown = () => {
    setDropDown(!dropDown);
  };

  return (
    <div>
      <div>
        <div
          className="flex cursor-pointer justify-between"
          onClick={handleDropDown}
        >
          <h1 className="font-DMsans text-lg font-bold text-main_font_color">
            {title}
          </h1>
          <span>{dropDown ? <TiMinus /> : <TiPlus />}</span>
        </div>
        {dropDown && (
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              reiciendis natus mollitia tempore aliquid nobis nam, deleniti
              praesentium, ullam ab est non sunt, odio officiis possimus odit
              perferendis consequatur illum? Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Excepturi earum laudantium fuga
              nisi? Blanditiis reprehenderit esse consequuntur voluptatem illum
              exercitationem velit sunt, porro possimus perferendis, consequatur
              assumenda, nemo doloremque voluptas?
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
