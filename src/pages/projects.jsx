import React from "react";
import SectionContainer from "../components/sectionContainer";
import { faExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Projects = () => {
  return (
    <SectionContainer>
      <div className="space-y-15 px-[20px] md:px-0">
      <div className="space-y-2">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-Text dark:text-DText">
          Projects
        </h1>
        <h2 className=" text-Text dark:text-DText text-[20px]">
          Exciting projects are on the way. Stay tuned for updates{" "}
        </h2>
      </div>

      <div className="flex flex-col items-center gap-7">
        <div className="w-12 h-12 rounded-full bg-Accent dark:bg-DAccent flex items-center justify-center p-2">
          <FontAwesomeIcon
            icon={faExclamation}
            className="text-4xl text-Primary dark:text-DText"
          />
        </div>
        <h2 className="text-center text-lg font-medium max-w-lg dark:text-DPrimary text-Primary">
        Coming Soon
        </h2>
        <h2 className="text-center text-lg font-medium max-w-lg dark:text-DPrimary text-Primary">
          I am working on some amazing projects. Check back soon for updates on
          our latest work and innovations.
        </h2>
      </div>
      </div>
     
    </SectionContainer>
  );
};

export default Projects;
