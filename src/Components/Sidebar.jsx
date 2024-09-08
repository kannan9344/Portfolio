import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-full md:max-w-60  h-full flex items-end md:items-center justify-center fixed left-0 bottom-0 md:static ">
      <div className="bg-white md:rounded-[70px] w-full md:w-24 p-3 h-14 md:h-[90%] flex flex-row md:flex-col gap-4 shadow-lg justify-around items-center">
        <Link to={"/"}>
          <i className="fa-solid fa-house-user text-[15px] md:text-lg text-[#ff006e]"></i>
        </Link>
        <Link to={"/About"}>
          <i className="fa-solid fa-user text-[15px] md:text-lg"></i>
        </Link>
        <Link to={"/Skills"}>
          <i className="fa-solid fa-gear text-[15px] md:text-lg"></i>
        </Link>
        <Link to={"/Projects"}>
          <i className="fa-solid fa-book text-[15px] md:text-lg"></i>
        </Link>
        <Link to={"/Contact"}>
          <i className="fa-solid fa-phone text-[15px] md:text-lg"></i>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
