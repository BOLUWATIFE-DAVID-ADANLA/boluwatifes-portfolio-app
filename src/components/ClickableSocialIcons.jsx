
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ClickableSocialIcons = ({ onClick, socialicon }) => {
  return (
    <button onClick={onClick} className="text-black dark:text-white ">
      <FontAwesomeIcon icon={socialicon} className="text-2xl " />
    </button>
  );
};

export default ClickableSocialIcons;
