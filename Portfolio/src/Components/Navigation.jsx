import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useCursorContext } from "../context/CursorContext";
import useDimension from "../hooks/useDimension";

const Navigation = () => {
  const location = useLocation();

  const dimension = useDimension();

  const { mouseOverEvent, mouseOutEvent } = useCursorContext();

  const textColorClass =
    location.pathname === "/work" || location.pathname === "/contact"
      ? "text-[#ece7e1]"
      : "";

  return (
    <div className={`${textColorClass} z-40 relative`}>
      {location.pathname !== "/" ? (
        <div className="z-50 w-full md:w-24 h-20 md:h-screen flex flex-row md:flex-col justify-start items-center pb-10 pt-10 md:pt-16 absolute md:fixed text-[11px] sm500:text-xs font-medium">
          <div className="md:w-16 md:mb-8 ml-8 md:ml-0 mr-8 md:mr-16 md:pt-16 md:-rotate-90">
            {location.pathname === "/game-Hub" ||
            location.pathname === "/huepalette" ||
            location.pathname === "/multi-media" ? (
              <Link
                to="/work"
                onMouseOver={mouseOverEvent}
                onMouseOut={mouseOutEvent}
                className="uppercase py-2 hover:opacity-50 duration-300 ease-in-out"
              >
                W o r k
              </Link>
            ) : (
              <Link
                to="/"
                onMouseOver={mouseOverEvent}
                onMouseOut={mouseOutEvent}
                className="uppercase py-2 hover:opacity-50 duration-300 ease-in-out"
              >
                H o m e
              </Link>
            )}
          </div>

          <div
            className={`${
              location.pathname === "/work" || location.pathname === "/contact"
                ? "bg-[#ece7e1]"
                : "bg-[#1a1818]"
            } w-0 sm350:w-12 sm500:w-24 md:w-[1px] h-[1px] md:h-24 -mt-1 md:mt-2 md:mb-20 opacity-75`}
          ></div>

          <div className="md:mb-16 md:pl-10 md:pr-16 md:-rotate-90 w-28 absolute right-8 md:right-auto md:top-auto md:bottom-5">
            <div className="text-center flex justify-end md:justify-center items-center gap-1 text-[10px] md:text-[11px]">
              <span>©</span>
              <span>/</span>
              <span>2</span>
              <span>0</span>
              <span>2</span>
              <span>4</span>
            </div>
          </div>
        </div>
      ) : (
        <div className="z-50 w-full md:w-24 h-20 md:h-screen flex flex-row md:flex-col justify-start items-center pb-10 pt-10 md:pt-16 fixed text-[11px] sm500:text-xs font-medium">
          <div className="ml-6 md:ml-0 mr-4 md:mr-16 md:pt-16 md:-rotate-90">
            <Link
              to="mailto:tejasgojariya036@gmail.com"
              onMouseOver={mouseOverEvent}
              onMouseOut={mouseOutEvent}
              className="py-2 hover:opacity-50 duration-300 ease-in-out"
            >
              {dimension.width < 500 ? "G M" : "Gmail"}
            </Link>
          </div>
          <div className="mr-4 md:mr-16 md:pt-16 md:-rotate-90">
            <Link
              to="https://github.com/Tejas-Gojariya"
              target="_blank"
              onMouseOver={mouseOverEvent}
              onMouseOut={mouseOutEvent}
              className="py-2 hover:opacity-50 duration-300 ease-in-out"
            >
              {dimension.width < 500 ? "G H" : "GitHub"}
            </Link>
          </div>
          <div className="md:mb-8 mr-8 md:mr-16 md:pt-16 md:-rotate-90">
            <Link
              to="https://www.linkedin.com/in/tejas-gojariya/"
              target="_blank"
              onMouseOver={mouseOverEvent}
              onMouseOut={mouseOutEvent}
              className="py-2 hover:opacity-50 duration-300 ease-in-out"
            >
              {dimension.width < 500 ? "L I" : "LinkedIn"}
            </Link>
          </div>

          <div className="w-0 sm500:w-12 sm:w-24 md:w-[1px] h-[1px] md:h-24 opacity-75 bg-[#1a1818] -mt-1 md:mt-2 md:mb-20"></div>

          <div className="md:mb-16 md:pl-10 md:pr-16 md:-rotate-90 w-28 absolute right-8 md:right-auto md:top-auto md:bottom-5">
            <div className="text-center flex justify-end md:justify-center items-center gap-1 text-[10px] md:text-[11px]">
              <span>©</span>
              <span>/</span>
              <span>2</span>
              <span>0</span>
              <span>2</span>
              <span>4</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navigation;
