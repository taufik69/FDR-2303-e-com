import React from "react";
import Flex from "../CommonConponent/Flex";
import { FcSearch } from "react-icons/fc";
const Serach = ({ placeHolder }) => {
  return (
    <>
      <Flex className={""}>
        <div className="relative">
          <input
            type="text"
            className="ml-3 sm:ml-0 px-3 max-w-[601px] py-5  sm:px-5 rounded-sm"
            placeholder={placeHolder}
          />

          <div className="  absolute top-1/2 -translate-y-2/4 right-5 text-2xl ">
            <FcSearch />
          </div>
        </div>
      </Flex>
    </>
  );
};

export default Serach;
