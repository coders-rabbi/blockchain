import React from "react";
import "../../imgSource/Image.css";
import img1 from "../../assets/images/coinImage.jpg";

const HeroSection = () => {
  return (
    <div className="body_Image pt-20">
      <div className="bg-1 grid grid-cols-2 items-center">
        <div className="flex items-center justify-center">
          <img src={img1} alt="" srcset="" />
        </div>
        <div>
          <h1 className="text-7xl text-white leading-[100px] mb-10">
            Cryptocurrency <br />
            investments<span className="text-[#FFBA00]">.</span>
          </h1>
          <h3 className="text-5xl text-[#FFBA00] mb-14">
            Blockchain solutions
          </h3>
          <button className=" bg-transparent outline outline-white px-6 py-2 rounded-full text-white text-2xl font-semibold">
            Start Mining
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
