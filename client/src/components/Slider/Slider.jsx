import React from "react";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import "./Slider.scss";
import { useState } from "react";
const data = [
  "https://wallpapershome.com/images/pages/pic_h/3474.jpg",
  "https://wallpapershome.com/images/pages/pic_h/3460.jpg",
  "https://wallpapershome.com/images/pages/pic_h/5594.jpg",
  "https://img.freepik.com/free-photo/handsome-smiling-hipster-model-sexy-unshaven-man-dressed-black-summer-tshirt-jeans-clothes-fashion-male-posing-near-white-wall-studio-sunny-day-isolated_158538-26920.jpg?w=2000",
];

const Slider = () => {
  const [currentSlide, setcurrentSlide] = useState(0);

  const prevSlide = () => {
    setcurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
  };
  const nextSlide = () => {
    setcurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
  };

  return (
    <div className="slider">
      <div
        className="container"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        <img src={data[0]} alt="" />
        <img src={data[1]} alt="" />
        <img src={data[2]} alt="" />
      </div>
      <div className="icons">
        <div className="icon" onClick={prevSlide}>
          <WestOutlinedIcon />
        </div>
        <div className="icon" onClick={nextSlide}>
          <EastOutlinedIcon />
        </div>
      </div>
    </div>
  );
};

export default Slider;
