import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const HamburgerIcon = ({ onClick }) => {
  return (
    <button onClick={onClick} className="text-black dark:text-white block lg:hidden">
      <FontAwesomeIcon icon={faBars} className="text-2xl " />
    </button>
  );
};

export default HamburgerIcon;
