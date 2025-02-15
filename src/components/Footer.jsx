import React from "react";
import ClickableSocialIcons from "./ClickableSocialIcons";
import appText from "../data/appText";
import {
  faGithub,
  faMedium,
  faInstagramSquare,
  faXTwitter,
  faLinkedin,
  faDev,
} from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Moved inside component

  return (
    <div className="flex flex-col items-center justify-center py-4 text-center ">
      {/* Social Icons */}
      <div className="space-x-4 mb-2">
        <ClickableSocialIcons onClick={"hello"} socialicon={faGithub} />
        <ClickableSocialIcons onClick={""} socialicon={faMedium} />
        <ClickableSocialIcons onClick={""} socialicon={faInstagramSquare} />
        <ClickableSocialIcons onClick={""} socialicon={faXTwitter} />
        <ClickableSocialIcons onClick={""} socialicon={faLinkedin} />
        <ClickableSocialIcons onClick={""} socialicon={faDev} />
      </div>

      {/* Author & Copyright */}
      <div className="flex items-center space-x-1 mb-2">
        <h3 className="dark:text-DText text-Text">{appText.author}</h3>
        <FontAwesomeIcon icon={faCopyright} className="text-[15px] dark:text-DText text-Text" />
        <h3 className="dark:text-DText text-Text">{currentYear}</h3>
      </div>

      {/* Extra Message */}
      <h3 className="dark:text-DText text-Text">Built with a lot of love... ❤️</h3>
    </div>
  );
};

export default Footer;
