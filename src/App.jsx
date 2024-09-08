import React, { useState } from "react";
import Sidebar from "./Components/Sidebar";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import User from "./Components/User";
const App = () => {
  const [active, setActive] = useState(false);
  return (
    <div className="h-screen w-full flex items-center relative bg-[#F5F3EB] overflow-x-hidden">
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Skills" element={<Skills />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <User active={active} setActive={setActive}/>
      <i className="fa-solid fa-bars absolute text-[13px] top-2 right-2 px-3 py-2 rounded text-[#ff006e] md:hidden bg-white" onClick={()=>setActive(!active)} ></i>
    </div>
  );
};

export default App;
