import React, { useState } from "react";
import AppPages from "../data/app_pages";
import appText from "../data/appText";
import HanburgerIcon from "./HanburgerIcon";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav>
      <div className=" flex justify-between px-[16px] md:max-w-2xl xl:max-w-5xl mx-auto py-4">
        <div className="   md:text-[22px] font-serif font-semibold">
          {appText.author}
        </div>

        <HanburgerIcon onClick={() => setIsOpen(!isOpen)} />

        {/* this is the desktop view of the nav items  */}
        <div className="  hidden md:flex  font-serif space-x-6 ">
          {AppPages.map((link, index) => (
            <a
              key={index}
              href={link.path}
              className="p-2  text-black font-medium">
              {link.title}
            </a>
          ))}
        </div>
      </div>

      {/* this is the menu opened when the hambuger is clicked  */}
      {isOpen && (
  <div
    className="fixed inset-0 bg-transparent bg-opacity-10 z-50 transition-opacity duration-500 ease-in-out"
    onClick={() => setIsOpen(false)}
  >
    <div
      className={`w-full h-full bg-white p-5 absolute right-0 top-0 transform transition-transform duration-700 ease-[cubic-bezier(0.4, 0, 0.2, 1)] ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
      onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
    >
      <button
        className="text-black text-2xl absolute top-4 right-4"
        onClick={() => setIsOpen(false)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 30 30"
          width="30px"
          height="30px"
        >
          <path d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z" />
        </svg>
      </button>

      {/* Dynamically render links */}
      <ul className="mt-10 space-y-6">
        {AppPages.map((link, index) => (
          <li key={index}>
            <a
              href={link.path} // Regular anchor tag
              className="block p-4 text-[22px] font-serif font-semibold text-black hover:bg-blue-500 hover:text-white rounded transition duration-300 ease-in-out"
              onClick={() => setIsOpen(false)} // Close menu on click
            >
              {link.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  </div>
)}

    </nav>
  );
};

export default Navbar;
