import React from "react";

const sectioncontainer = ({ children }) => {
  return (
    <section className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
      {children}
    </section>
  );
};

export default sectioncontainer;


