import React from "react";

const Contact = () => {
  return (
    <div className="w-full h-full flex flex-col gap-3 items-center justify-center py-2">
      <h2 className="text-[18px] font-medium py-2 md:py-3">Contact Us</h2>
      <form className="w-full md:w-3/4 px-4 md:p-3 flex flex-col items-center gap-2">
        <input
          type="text"
          placeholder="Your Name"
          className="p-4 focus:outline-[#ff006e] rounded w-full text-[13px]"
        />
        <input
          type="text"
          placeholder="Your Email"
          className="p-4 focus:outline-[#ff006e] rounded w-full text-[13px]"
        />
        <input
          type="text"
          placeholder="Subject"
          className="p-4 focus:outline-[#ff006e] rounded w-full text-[13px]"
        />
        <textarea
          rows="5"
          className="p-4 focus:outline-[#ff006e] rounded w-full resize-none text-[13px]"
          placeholder="Message"
        ></textarea>
        <button className="w-fit px-4 py-2 text-[13px] text-white rounded my-2 md:my-3 bg-[#ff006e]">Contact me</button>
      </form>
    </div>
  );
};
export default Contact;
