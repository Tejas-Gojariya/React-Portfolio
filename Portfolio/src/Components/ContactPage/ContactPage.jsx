import { motion as m } from "framer-motion";

const ContactPage = () => {
  return (
    <div className="bg-[#1a1818] text-[#ece7e1] w-full h-screen flex justify-start items-start md:items-center pt-28 md:pt-0 px-8 md:px-20">
      <div className="w-full xl1100:w-[50%] h-auto xl1100:h-full flex justify-start md:justify-center xl1100:justify-end items-end xl1100:items-center">
        <div className="w-full sm350:w-3/4 h-auto flex flex-col justify-center items-start gap-4">
          <div className="overflow-hidden sm:-ml-1 mb-8 sm500:mb-4 xl1100:-mb-[10%]">
            <m.div
              initial={{ transform: "translateY(100%)" }}
              animate={{ transform: "translateY(0%)" }}
              transition={{
                duration: 0.5,
                delay: 1,
              }}
              className="text-[19vw] sm500:text-[21vw] md:text-[16vw] xl1100:text-[14vw] Avegas-Royale-Regular"
            >
              Hello.
            </m.div>
          </div>
          <div className="overflow-hidden xl1100:pt-10 -mt-10 relative z-30 bg-[#1a1818]">
            <m.div
              initial={{ transform: "translateY(100%)" }}
              animate={{ transform: "translateY(0%)" }}
              transition={{
                duration: 0.5,
                delay: 0.75,
              }}
              className="w-full sm:w-[85%] flex flex-col gap-4"
            >
              <div className="text-[12px] leading-5 sm500:text-[14px] sm500:leading-7">
                Need a Front-End Developer who is eager to bring creativity and
                dedication to a dynamic organisation? Get in touch.
              </div>

              <div className="text-[12px] leading-5 sm500:text-[14px] sm500:leading-7 flex flex-col gap-2">
                <div className="flex gap-2">
                  <span>Email:</span>
                  <a
                    href="mailto:tejasgojariya036@gmail.com"
                    className="underline underline-offset-4 underline-[#ece7e194] hover:opacity-50"
                  >
                    tejasgojariya036@gmail.com
                  </a>
                </div>
                <div className="flex gap-2">
                  <span>On the Internet:</span>
                  <a
                    href="https://www.linkedin.com/in/tejas-gojariya/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-2 underline-[#ece7e194] hover:opacity-50"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </m.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
