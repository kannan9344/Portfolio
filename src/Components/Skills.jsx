import React from "react";
import Html from "../assets/icons/html.png";
import Css from "../assets/icons/css.png";
import Js from "../assets/icons/js.png";
import ReactImg from "../assets/icons/react.png";
import Redux from "../assets/icons/redux.png";
import Tailwind from "../assets/icons/tailwind.png";
import Bootstrap from "../assets/icons/bootstrap.png";
import Figma from "../assets/icons/figma.png";
import Git from "../assets/icons/git.png";
import GitHub from "../assets/icons/github.png";
const Skills = () => {
  const icons = [
    { id: 1, name: "html", img: Html },
    { id: 2, name: "css", img: Css },
    { id: 3, name: "javascript", img: Js },
    { id: 4, name: "react js", img: ReactImg },
    { id: 5, name: "redux", img: Redux },
    { id: 6, name: "tailwind css", img: Tailwind },
    { id: 7, name: "bootstrap", img: Bootstrap },
    { id: 8, name: "figma", img: Figma },
    { id: 9, name: "git", img: Git },
    { id: 10, name: "github", img: GitHub },
  ];
  return (
    <div className="w-full h-full flex  items-center justify-center">
      <div className="w-11/12 grid grid-cols-2 md:grid-cols-4 justify-center gap-6 overflow-y-scroll">
        {icons.map((icon) => {
          return (
            <div
              key={icon.id}
              className="flex flex-col justify-center py-3 rounded-lg items-center gap-3 bg-white"
            >
              <img
                src={icon.img}
                alt={icon.name + "image"}
                className="w-10 md:w-12"
              />
              <div className="text-[13px] px-5 py-2 rounded-3xl shadow-sm">
                {icon.name}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
