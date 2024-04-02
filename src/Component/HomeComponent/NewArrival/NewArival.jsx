import React, { useState } from "react";
import Product from "../../CommonConponent/Product";
import Button from "../../CommonConponent/Button";

import { HiArrowLongLeft, HiArrowLongRight } from "react-icons/hi2";
import Slider from "react-slick";

// SampleNextArrow funtionality
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#979797",
        width: "40px",
        height: "40px",
        borderRadius: "50%",
        position: "absolute",
        left: "20px",
        top: "50%",
        transform: "translateY(-100%)",
        zIndex: "2",
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      <div className="flex items-center justify-center h-full ">
        <HiArrowLongLeft className="text-white" />
      </div>
    </div>
  );
}

// dample prev arrow
function SamplePrevArrow(props) {
  const { style, onClick } = props;
  return (
    <div
      style={{
        ...style,
        display: "block",
        background: "#979797",
        width: "40px",
        height: "40px",
        borderRadius: "50%",
        position: "absolute",
        right: "20px",
        top: "50%",
        transform: "translateY(-100%)",
        zIndex: "2",
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      <div className="flex items-center justify-center h-full  ">
        <HiArrowLongRight className="text-white" />
      </div>
    </div>
  );
}

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  arrows: true,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const NewArival = ({ headingTitle, pdata }) => {
  const [Allproduct, setAllproduct] = useState(pdata);

  return (
    <>
      <div className="py-4 lg:py-14 xl:py-[128px] px-4 ">
        <div className="container">
          <h1 className="font-bold text-main_font_color font-DMsans text-[39px] mb-12">
            {headingTitle ? headingTitle : "Title Missing"}
          </h1>
          <Slider {...settings}>
            {Allproduct?.map((item) => (
              <div key={item.id}>
                <Product
                  imga={item.img}
                  colorVariant={item.color === true ? true : false}
                  bagze={
                    item.bazge == true ? (
                      <Button
                        title={
                          item.bazgeitem == true ? "New" : item.discountOffter
                        }
                        className={"py-2 px-8 bg-black text-white "}
                      />
                    ) : null
                  }
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default NewArival;
