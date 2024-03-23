import React, { useState } from "react";
import Slider from "react-slick";
import BannerImage from "../../../assets/banner.png";
import "slick-carousel/slick/slick.css";
const Banner = () => {
  const [currentSlide, setcurrentSlide] = useState(1);
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,

    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "5%",
          transform: "translateY(-50%)",
          borderRadius: "10px",
          padding: "10px",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    beforeChange: (currentslideNumber, nextCurrentNumver) => {
      setcurrentSlide(nextCurrentNumver + 1);
    },

    customPaging: (i) => (
      <>
        {i <= 3 && (
          <div
            style={
              i + 1 === currentSlide
                ? {
                    width: "30px",
                    padding: "30px 0",
                    borderRight: "3px solid green",
                  }
                : {
                    width: "30px",
                    padding: "30px 0",
                    borderRight: "3px solid #fff",
                  }
            }
          >
            {i + 1 === 4 ? `${i + 1}+` : `0${i + 1}`}
          </div>
        )}
      </>
    ),
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
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  return (
    <>
      <Slider {...settings}>
        <div>
          <img src={BannerImage} alt="" />
        </div>
        <div>
          <img src={BannerImage} alt="" />
        </div>

        <div>
          <img src={BannerImage} alt="" />
        </div>
        <div>
          <img src={BannerImage} alt="" />
        </div>

        <div>
          <img src={BannerImage} alt="" />
        </div>
        <div>
          <img src={BannerImage} alt="" />
        </div>

        <div>
          <img src={BannerImage} alt="" />
        </div>

        <div>
          <img src={BannerImage} alt="" />
        </div>

        <div>
          <img src={BannerImage} alt="" />
        </div>
      </Slider>
    </>
  );
};

export default Banner;
