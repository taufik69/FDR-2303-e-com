import React from "react";

const Loading = ({ perItem, className }) => {
  console.log(perItem);
  return (
    <div className="flex flex-wrap justify-between gap-y-4 py-10">
      {[...new Array(perItem).map((_, index) => index)].map((item) => (
        <div
          className={`${className ? className : "w-[32%]"} rounded-md border border-blue-100 p-4 shadow`}
          key={item + ""}
        >
          <div key={item + ""}>
            <div className="relative h-[450px] w-full animate-pulse rounded-lg bg-gray-200">
              <div className=" my-4 flex h-full animate-pulse flex-col items-center justify-center gap-y-5">
                <div className=" h-3 w-[80%]  rounded-md bg-gray-500 py-3"></div>
                <div className="  h-3 w-[80%]  rounded-md bg-gray-400 py-3"></div>
                <div className="  h-3 w-[80%]  rounded-md bg-gray-300 py-3"></div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Loading;
