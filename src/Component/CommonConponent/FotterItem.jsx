import React, { useState } from "react";

const FotterItem = ({ allitem = ["one", "two", "three"], title }) => {
  return (
    <>
      <div className="w-1/4">
        <h2 className="text-main_font_color font-DMsans font-bold text-md mb-4">
          {title}
        </h2>
        <ul>
          {allitem?.map((item, index) => (
            <li
              className="text-footer_text_color font-DMsans text-sm py-2"
              key={index}
            >
              <a href="#">
                {title.toLocaleLowerCase() === "SHOP".toLocaleLowerCase()
                  ? item + (index + 1)
                  : item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default FotterItem;
