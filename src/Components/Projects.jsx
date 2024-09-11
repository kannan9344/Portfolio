import React from "react";
import hotelImage from "../assets/hotel_bg.png";
const Projects = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-3/4 md:w-11/12 grid grid-cols-1 md:grid-cols-2 grid-rows-mobile md:grid-rows-3 gap-2 h-96 md:h-5/6 overflow-y-auto">
      <div className="overflow-hidden group relative rounded flex items-center justify-center bg-white">
        <img src={hotelImage} alt="hotel landing page image" className="w-full h-full" />
        <a href="https://kannan9344.github.io/Hotel/" target="_blank" className="absolute w-8 h-8 text-center leading-8 rounded-full bg-white top-1 group-hover:right-1 right-1 md:-right-10 duration-500">
        <i className="fa-solid fa-eye text-[13px] text-[#ff006e]"></i>
        </a>
      </div>
      <div className="overflow-hidden group relative rounded flex items-center justify-center bg-white">
        <img src={hotelImage} alt="" className="w-full h-full" />
        <a href="https://kannan9344.github.io/Hotel/" target="_blank" className="absolute w-8 h-8 text-center leading-8 rounded-full bg-white top-1 group-hover:right-1 right-1 md:-right-10 duration-500">
        <i className="fa-solid fa-eye text-[13px] text-[#ff006e]"></i>
        </a>
      </div>
      <div className="overflow-hidden group relative rounded flex items-center justify-center bg-white">
        <img src={hotelImage} alt="" className="w-full h-full" />
        <a href="https://kannan9344.github.io/Hotel/" target="_blank" className="absolute w-8 h-8 text-center leading-8 rounded-full bg-white top-1 group-hover:right-1 right-1 md:-right-10 duration-500">
        <i className="fa-solid fa-eye text-[13px] text-[#ff006e]"></i>
        </a>
      </div>
      <div className="overflow-hidden group relative rounded flex items-center justify-center bg-white">
        <img src={hotelImage} alt="" className="w-full h-full" />
        <a href="https://kannan9344.github.io/Hotel/" target="_blank" className="absolute w-8 h-8 text-center leading-8 rounded-full bg-white top-1 group-hover:right-1 right-1 md:-right-10 duration-500">
        <i className="fa-solid fa-eye text-[13px] text-[#ff006e]"></i>
        </a>
      </div>
      <div className="overflow-hidden group relative rounded flex items-center justify-center bg-white">
        <img src={hotelImage} alt="" className="w-full h-full" />
        <a href="https://kannan9344.github.io/Hotel/" target="_blank" className="absolute w-8 h-8 text-center leading-8 rounded-full bg-white top-1 group-hover:right-1 right-1 md:-right-10 duration-500">
        <i className="fa-solid fa-eye text-[13px] text-[#ff006e]"></i>
        </a>
      </div>
      <div className="overflow-hidden group relative rounded flex items-center justify-center bg-white">
        <img src={hotelImage} alt="" className="w-full h-full" />
        <a href="https://kannan9344.github.io/Hotel/" target="_blank" className="absolute w-8 h-8 text-center leading-8 rounded-full bg-white top-1 group-hover:right-1 right-1 md:-right-10 duration-500">
        <i className="fa-solid fa-eye text-[13px] text-[#ff006e]"></i>
        </a>
      </div>
      
      
      </div>
    </div>
  );
};

export default Projects;
