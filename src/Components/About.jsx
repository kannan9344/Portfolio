import React from "react";
import image from "../assets/kannan.jpg";
const About = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-3/4 flex flex-col items-center gap-3">
        <img src={image} alt="user image" className="w-44 md:w-60 h-44 md:h-60 rounded-full object-cover object-top shadow-md" />
        <p className="text-[13px] capitalize text-center">
          i am a passionate front end developer with a strong foundation in
          creating responsive , dynamic and visually appealing websites . my
          expertise lies in leveraging modern web technologies like Html5 ,Css3
          , javascript ,React js to transform creative designs into functional
          and user-friendly interfaces.
        </p>
        <div className="flex items-center w-fit cursor-pointer px-3 md:px-4 py-2 md:py-3 rounded bg-[#ff006e] text-white gap-2">
          <h2 className="text-[13px]">Download Cv</h2>
          <i className="fa-solid fa-file-pdf"></i>
        </div>
      </div>
    </div>
  );
};

export default About;
