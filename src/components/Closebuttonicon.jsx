
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

const Closebuttonicon = ({ onClick }) => {
  return (
    <button onClick={onClick} className="text-black dark:text-white ">
      <FontAwesomeIcon icon={faClose} className="text-2xl " />
    </button>
  );
};

export default Closebuttonicon;
