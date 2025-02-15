
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ClickableSocialIcons = ({ onClick, socialicon }) => {
  return (
    <button onClick={onClick} className="dark:text-DText text-Text">
      <FontAwesomeIcon icon={socialicon} className="text-2xl " />
    </button>
  );
};

export default ClickableSocialIcons;
