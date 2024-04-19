import React, { useState } from "react";
import { FaCaretDown } from "react-icons/fa";
import Flex from "../Flex";

const ShopLeftItem = ({}) => {
  const [show, setShow] = useState(false);
  const HanldeCatagorei = () => {
    setShow(!show);
  };
  return (
    <>
      <div>
        <div onClick={HanldeCatagorei}>Shop by Category</div>
        {show && (
          <div>
            <p>Catagori one</p>
            <p>Catagori one</p>
            <p>Catagori one</p>
            <p>Catagori one</p>
          </div>
        )}
      </div>
    </>
  );
};

export default ShopLeftItem;
