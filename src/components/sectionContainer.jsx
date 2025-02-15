import React from "react";

const SectionContainer = ({ children }) => {
  return (
    <div className="items-center md:max-w-2xl xl:max-w-6xl mx-auto py-4">
      {children}
    </div>
  );
};

export default SectionContainer;
