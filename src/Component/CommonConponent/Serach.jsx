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
            className="w-[230px] sm:w-[350px] md:w-[450px] lg:w-[700px] py-5 px-5 rounded-sm"
            placeholder={placeHolder}
          />

          <div className="absolute top-1/2 -translate-y-2/4 right-5 text-2xl hidden sm:block">
            <FcSearch />
          </div>
        </div>
      </Flex>
    </>
  );
};

export default Serach;
