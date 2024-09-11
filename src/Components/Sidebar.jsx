import React, { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [tab, setTab] = useState(1);
  const setTabindex = (index) => {
    setTab(index);
  };
  return (
    <div className="w-full md:max-w-60  h-full flex items-end md:items-center justify-center fixed left-0 bottom-0 md:static ">
      <div className="bg-white md:rounded-[70px] w-full md:w-24 p-3 h-14 md:h-[90%] flex flex-row md:flex-col gap-4 shadow-lg justify-around items-center">
        <Link to={"/Portfolio"} onClick={() => setTabindex(1)}>
          <i
            className={`fa-solid fa-house-user text-[15px] md:text-lg ${
              tab == 1 ? "text-[#ff006e]" : ""
            }`}
          ></i>
        </Link>
        <Link to={"/Portfolio/About"} onClick={() => setTabindex(2)}>
          <i
            className={`fa-solid fa-user text-[15px] md:text-lg ${
              tab == 2 ? "text-[#ff006e]" : ""
            }`}
          ></i>
        </Link>
        <Link to={"/Portfolio/Skills"} onClick={() => setTabindex(3)}>
          <i
            className={`fa-solid fa-gear text-[15px] md:text-lg ${
              tab == 3 ? "text-[#ff006e]" : ""
            }`}
          ></i>
        </Link>
        <Link to={"/Portfolio/Projects"} onClick={() => setTabindex(4)}>
          <i
            className={`fa-solid fa-book text-[15px] md:text-lg ${
              tab == 4 ? "text-[#ff006e]" : ""
            }`}
          ></i>
        </Link>
        <Link to={"/Portfolio/Contact"} onClick={() => setTabindex(5)}>
          <i
            className={`fa-solid fa-phone text-[15px] md:text-l ${
              tab == 5 ? "text-[#ff006e]" : ""
            }`}
          ></i>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
