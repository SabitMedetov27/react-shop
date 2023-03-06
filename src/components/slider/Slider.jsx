import React from "react";
import "./Slider.scss";
import { sliderImg } from "../../utils/images";
import Slick from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Slider() {
  let settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="slider">
      <div className="container">
        <div className="slider-cont">
          <Slick {...settings}>
            <div className="slider-item">
              <img src={sliderImg[0]} alt="" />
            </div>
            <div className="slider-item">
              <img src={sliderImg[1]} alt="" />
            </div>
          </Slick>
        </div>
      </div>
    </div>
  );
}

export default Slider;
