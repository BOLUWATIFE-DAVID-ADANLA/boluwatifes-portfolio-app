import React from "react";
import AppPages from "../data/app_pages";

const Navbar = () => {
  return (
   <div className=" flex justify-between px-[200px] py-10">
   <div>Boluwatife David Adanla</div>

   {/* This houses all the clickable links in my app */}
   <div className="">
     {AppPages.map((link, index) => (
       <a key={index} href={link.path} className="p-2 text-blue-500 hover:underline">
         {link.title}
       </a>
     ))}
   </div>
 </div>
);
};

export default Navbar;
