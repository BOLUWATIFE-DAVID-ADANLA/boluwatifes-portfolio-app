import React from "react";
import appText from "../data/appText";
import SectionContainer from "../components/sectionContainer"; // Ensure correct import
import me from "../assets/images/me.jpg";

const Home = () => {
  return (
    <SectionContainer>
      <div className="flex flex-col-reverse xl:flex-row space-y-6 md:space-y-2 md:space-x-6 items-center lg:justify-center lg:items-center px-[20px] sm:px-0 ">
        <div className="space-y-4 text-center lg:text-left align-middle">
          <h1 className=" text-2xl lg:text-4xl md:text-3xl xl:text-5xl text-center  font-bold text-Text dark:text-DText xl:text-left">
            {appText.MESSAGES.HomePageMessage}
          </h1>
          <p className="text-Text dark:text-DText text-[12px] md:text-[20px] lg:text-[23px] text-center lg:text-center xl:text-left">
            {appText.MESSAGES.HomePagesubMessage}
          </p>
        </div>
<div>
  
</div>
        <img
          src={me}
          alt="Profile Picture"
          className="w-[200px] h-[200px] lg:w-[250px] lg:h-[250px] xl:h-[400px] xl:w-[400px] rounded-full border-4 border-gradient-to-r from-blue-500 to-purple-500 shadow-lg object-cover"
        />
      </div>
    </SectionContainer>
  );
};

export default Home;
