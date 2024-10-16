import React from "react";
import { motion as m } from "framer-motion";

const AboutPage = () => {
  return (
    <>
      <div className="relative w-full h-auto flex justify-start items-start md:items-center pt-28 md:pt-0 px-8 md:px-20">
        <div className="w-full xl1100:w-[60%] h-auto flex flex-col justify-start md:justify-start items-start md:ml-20 xl1100:ml-60 pb-20 md:pt-20">
          <div className="overflow-hidden w-full xl1100:-mb-10">
            <m.div
              initial={{ transform: "translateY(100%)" }}
              animate={{ transform: "translateY(0%)" }}
              transition={{
                duration: 0.5,
                delay: 0.75,
              }}
              className="Avegas-Royale-Regular text-[20vw] sm500:text-[22vw] md:text-[15vw]"
            >
              About
            </m.div>
          </div>

          <div className="z-40 relative w-full bg-[#ece7e1]">
            <div className="w-full md:w-3/5 flex flex-col justify-center items-start gap-8">
              {/* Introduction */}
              <div className="Avegas-Royale-Regular ml-[5%] text-[5vw] md:text-[2.5vw] leading-6 sm350:leading-8 sm500:leading-10 xl:leading-[3rem]">
                I'm Tejas. A web developer, designer and problem solver.
              </div>

              {/* Personal Background */}
              <div className="w-[85%] text-xs leading-5 sm500:text-sm sm500:leading-7 mt-4  ">
                I see the web as my playground, where code and creativity meet
                to build experiences. Whether I’m bringing interfaces to life
                with React and Next.js, styling them with Tailwind CSS or
                Material-UI, or adding a little extra magic with Framer Motion,
                every line of code I write feels like sculpting art.
              </div>

              <div className="w-[85%] text-xs leading-5 sm500:text-sm sm500:leading-7">
                In just 6 months, I’ve embraced the thrill of figuring things
                out—whether it’s building seamless user flows, setting up
                real-time databases and authentication with Firebase, or
                managing backend services with Node.js. For me, no bug is too
                stubborn and no feature too ambitious—just puzzles waiting to be
                solved.
              </div>

              <div className="w-[85%] text-xs leading-5 sm500:text-sm sm500:leading-7">
                I believe in crafting not just functional applications, but ones
                that feel good to use, with subtle transitions, smooth
                animations, and thoughtful design choices. The web gives us a
                unique space to create something meaningful—and I’m here to make
                every project count.
              </div>
              <div className="w-[85%] text-xs leading-5 sm500:text-sm sm500:leading-7">
                Each day brings a new challenge, and I dive into it with
                curiosity and passion, constantly learning, growing, and coding
                my way towards becoming the best version of myself.
              </div>

              <div className="w-[85%] Avegas-Royale-Regular uppercase text-xl sm500:text-2xl sm500 mt-4 ml-[4%]">
                Skills
              </div>

              <div className="w-[85%] text-xs leading-5 sm500:text-sm sm500:leading-7">
                <div className="flex flex-col">
                  <div>
                    <span className="font-medium">Front-End Development:</span>
                    React, TypeScript, JavaScript, HTML, CSS, Tailwind CSS,
                  </div>
                  <div>
                    <span className="font-medium">Design & Tools:</span> Figma,
                    UX/UI Design, Graphic Design
                  </div>
                  <div>
                    <span className="font-medium">Back-End & Services:</span>
                    Node.js, Express.js, Git, Postman,
                  </div>
                  {/* <div>
                    <span className="font-medium">
                      Optimization & Methodologies:
                    </span>{" "}
                    SEO Optimization, Agile Methodologies, CMS Design &
                    Architecture
                  </div> */}
                </div>
              </div>

              <a
                target="_blank"
                rel="noreferrer"
              >
                <div className="w-auto py-2 px-10 bg-[#1a1818] text-[#ece7e1] Avegas-Royale-Regular text-[3vw] md:text-[1.5vw] text-center rounded-full hover:opacity-50 duration-300 ease-in-out">
                  My CV
                </div>
              </a>

              <div className="w-[85%] Avegas-Royale-Regular uppercase text-xl sm500:text-2xl sm500 ml-[4%]">
                Education
              </div>
              <div className="w-[85%] flex flex-col gap-4 text-xs leading-5 sm500:text-sm sm500:leading-7">
                <div className="flex flex-col">
                  <div className="font-medium leading-5 text-sm sm500:text-base">
                    Dr. Babasaheb Ambedkar Open University
                  </div>
                  <div className="opacity-75">
                    Master Of Computer Application
                  </div>
                  <div className="text-xs">Jul 2024 - Mar 2026</div>
                </div>
                <div className="flex flex-col">
                  <div className="font-medium leading-5 text-sm sm500:text-base">
                    Parul University
                  </div>
                  <div className="opacity-75">
                    Bachelor Of Computer Application
                  </div>
                  <div className="text-xs">Aug 2021 - Feb 2024</div>
                </div>
              </div>

              <a
                to="mailto:tejasgojariya036@gmail.com"
                className="w-auto py-2 px-10 bg-[#1a1818] text-[#ece7e1] Avegas-Royale-Regular text-[3vw] md:text-[1.5vw] text-center rounded-full hover:opacity-50 duration-300 ease-in-out"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
