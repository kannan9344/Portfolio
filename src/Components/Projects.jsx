import React from "react";
import image from "../assets/portfolio.png";
const Projects = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-3/4 md:w-11/12 grid grid-cols-1 md:grid-cols-2 gap-2 h-5/6 overflow-y-auto">
      <div className="border border-red-600 overflow-hidden rounded flex items-center justify-center bg-white">
        <img src={image} alt="" className="object-contain" />
      </div>
      <div className="border border-red-600 overflow-hidden rounded flex items-center justify-center bg-white">
        <img src={image} alt="" className="object-contain" />
      </div>
      <div className="border border-red-600 overflow-hidden rounded flex items-center justify-center bg-white">
        <img src={image} alt="" className="object-contain" />
      </div>
      <div className="border border-red-600 overflow-hidden rounded flex items-center justify-center bg-white">
        <img src={image} alt="" className="object-contain" />
      </div>
      <div className="border border-red-600 overflow-hidden rounded flex items-center justify-center bg-white">
        <img src={image} alt="" className="object-contain" />
      </div>
      <div className="border border-red-600 overflow-hidden rounded flex items-center justify-center bg-white">
        <img src={image} alt="" className="object-contain" />
      </div>
      
      </div>
    </div>
  );
};

export default Projects;
