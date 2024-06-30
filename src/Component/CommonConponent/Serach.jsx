import React from "react";
import Flex from "../CommonConponent/Flex";
import { FcSearch } from "react-icons/fc";

const Serach = ({ placeHolder, onSearch }) => {
  return (
    <>
      <Flex className={""}>
        <div className="relative">
          <input
            type="text"
            className="w-[230px] rounded-sm px-5 py-5 sm:w-[350px] md:w-[450px] lg:w-[700px]"
            onChange={onSearch}
            placeholder={placeHolder}
          />

          <div className="absolute right-5 top-1/2 hidden -translate-y-2/4 text-2xl sm:block">
            <FcSearch />
          </div>
        </div>
      </Flex>
    </>
  );
};

export default Serach;
