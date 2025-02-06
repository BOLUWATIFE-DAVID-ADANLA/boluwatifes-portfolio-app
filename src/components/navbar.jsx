import React from "react";
import AppPages from "../data/app_pages";

const Navbar = () => {
  return (
   <div className=" flex justify-between  max-w-2xl xl:max-w-5xl mx-auto py-4">
   <div className="text-[20px] font-serif font-semibold">Boluwatife David Adanla</div>

   {/* This houses all the clickable links in my app */}
   <div className="font-serif ">
     {AppPages.map((link, index) => (
       <a key={index} href={link.path} className="p-2 text-black font-medium">
         {link.title}
       </a>
     ))}
   </div>
 </div>
);
};

export default Navbar;
