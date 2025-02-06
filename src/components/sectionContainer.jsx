import React from "react";

const sectioncontainer = ({ children }) => {
  return (
    <section className="mx-auto max-w-2xl px-2 sm:px-6 xl:max-w-5xl xl:px-10">
      {children}
    </section>
  );
};

export default sectioncontainer;
