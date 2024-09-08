import React from "react";
import image from "../assets/kannan.jpg";
const User = (props) => {
  const { active, setActive } = props;
  return (
    <div
      className={`w-full z-10 md:w-[600px] duration-500 absolute md:static ${
        active ? "left-0" : "left-full"
      } h-full flex items-center justify-center bg-black`}
    >
      <div className="flex items-center justify-center relative flex-col gap-3 text-white">
        <img
          src={image}
          alt="user image"
          className="w-32 md:w-40 h-32 md:h-40 rounded-full border-8 border-[#614617] object-cover object-top"
        />
        <h2 className="md:text-3xl text-2xl font-medium">Kannan</h2>
        <p className="text-center text-[13px] w-3/4 capitalize">
          A forntent focused web developer building the frontend of websites and
          web applications that leads to the success of the overall product
        </p>
        <div className="flex items-center gap-2">
          <a href="https://wa.me/9344026173" target="_blank">
            <i className="fa-solid fa-phone h-8 md:h-10 w-8 md:w-10 flex items-center justify-center text-[14px] bg-[#ff006e] text-white rounded-full"></i>
          </a>
          <a href="https://www.linkedin.com/in/kannan9344/" target="_blank">
            <i className="fa-brands fa-linkedin h-8 md:h-10 w-8 md:w-10 flex items-center justify-center text-[14px] text-white rounded-full"></i>
          </a>
          <a href="#">
            <i className="fa-brands fa-instagram h-8 md:h-10 w-8 md:w-10  flex items-center justify-center text-[14px] text-white rounded-full"></i>
          </a>
          <a href="https://wa.me/9344026173" target="_blank">
            <i className="fa-brands fa-whatsapp h-8 md:h-10 w-8 md:w-10  flex items-center justify-center text-[14px] text-white rounded-full"></i>
          </a>
        </div>
      </div>
      <i
        className="fa fa-close text-white h-8 w-8 text-center leading-8 rounded-md absolute top-2 cursor-pointer md:hidden right-2"
        onClick={() => setActive(!active)}
      ></i>
    </div>
  );
};

export default User;
