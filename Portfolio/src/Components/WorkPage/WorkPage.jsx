import React from "react";
import { motion as m } from "framer-motion";

const WorkPage = () => {
  return (
    <div className="bg-[#1a1818] text-[#ece7e1] w-full h-full xl1100:h-screen flex flex-col xl1100:flex-row pb-28 xl1100:pb-0 pt-28 md:pt-60 xl1100:pt-0 justify-start xl1100:justify-between items-center gap-8 sm500:gap-12 md:gap-12 xl1100:gap-20 px-8 md:px-20">
      {/* Left section with text */}
      <div className="w-full xl1100:w-[35%] h-auto xl1100:h-full flex justify-start md:justify-center xl1100:justify-end items-end xl1100:items-center">
        <div className="w-full sm350:w-3/4 h-auto flex flex-col justify-center items-start gap-4 mt-0 xl1100:mt-[50%]">
          {/* "WORK" title animation */}
          <div className="overflow-hidden mb-2">
            <m.div
              initial={{ transform: "translateY(100%)" }}
              animate={{ transform: "translateY(0%)" }}
              transition={{
                duration: 0.5,
                delay: 0.5,
              }}
              className="uppercase font-medium tracking-wider text-sm sm500:text-base"
            >
              WORK
            </m.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkPage;
