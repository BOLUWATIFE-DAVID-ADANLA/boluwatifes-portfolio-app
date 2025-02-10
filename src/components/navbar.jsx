import React, { useState } from "react";
import AppPages from "../data/app_pages";
import appText from "../data/appText";
import HanburgerIcon from "./HanburgerIcon";
import Closebuttonicon from "./Closebuttonicon";
import ThemeToggle from "./ThemeToggle";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav>
      <div className=" flex justify-between px-[16px] my-[20px] items-center md:max-w-2xl xl:max-w-5xl mx-auto py-4 sm:border-0 md:border-b-2 md:border-Primary dark:md:border-DPrimary ">
        <div className="  text-[16px] text-Text dark:text-DText md:text-2xl font-serif font-semibold">
          {appText.author}
        </div>

        <div className="flex space-x-6 items-center ">
          <HanburgerIcon onClick={() => setIsOpen(!isOpen)} />

          {/* this is the desktop view of the nav items  */}
          <div className="  hidden md:flex   space-x-6 ">
            {AppPages.map((link, index) => (
              <a
                key={index}
                href={link.path}
                className="p-2  text-Text  dark:text-DText font-serif font-medium hover:text-Secondary dark:hover:text-DSecondary">
                {link.title}
              </a>
            ))}
          </div>
          <ThemeToggle />
        </div>
      </div>

      {/* this is the menu opened when the hambuger is clicked  */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-transparent bg-opacity-10 z-50 transition-opacity duration-500 ease-in-out"
          onClick={() => setIsOpen(false)}>
          <div
            className={`w-full h-full bg-Background dark:bg-DBackground p-5 absolute right-0 top-0 transform transition-transform duration-700 ease-[cubic-bezier(0.4, 0, 0.2, 1)] ${
              isOpen ? "translate-x-0" : "translate-x-full"
            }`}
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
          >
            <button
              className="text-Text  dark:text-DText text-2xl absolute top-4 right-4"
              onClick={() => setIsOpen(false)}>
              <Closebuttonicon />
            </button>

            {/* Dynamically render links */}
            <ul className="mt-10 space-y-6">
              {AppPages.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.path} // Regular anchor tag
                    className="block p-4 text-[22px] font-serif font-semibold text-Text  dark:text-DText hover:bg-Accent dark:hover:bg-DAccent hover:text-white rounded transition duration-300 ease-in-out"
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
