import React from "react";
import * as motion from "motion/react-client";


const Header = () => {
  return (
    <>
      <div className=" flex justify-between items-center w-full ">
        <div className="flex flex-col text-[0.9rem] sm:flex-row sm:text-[1rem] font-poppins-light ">
            {/* <h2 className="text-gray-400">LOCALTIME/</h2>
            <h2 className="text-blue-600/80">21:40:33</h2> */}
        </div>

        {/* <div className="flex items-center justify-center ">
          <p className="font-serif text-[1.5rem] font-bold cursor-pointer hover:text-blue-600/80 hover:rotate-45 hover:text-[1.7rem] transition-all">
            ::
          </p>
        </div> */}

        <a href="#contact">
          <motion.h2 
          whileHover={{scale:1.05, color: "#155dfc", backgroundColor: "blue"}}
          whileTap={{scale:0.8,color:"blue" ,backgroundColor: "oklch(62.3% 0.214 259.815)", }}
          transition={{duration: 0.3}}
          className="border-1 px-3 text-[0.9rem] sm:text-[1rem] shadow-[0px_0px_8px_-1px_#1e47ff30] backdrop-blur-[10px]
           sm:px-4 py-2 rounded-full cursor-pointer font-poppins-light border-blue-600/20
           bg-gradient-to-br from-blue-500 to-red-500 bg-clip-text text-transparent">
            CONTACT ME
          </motion.h2>
        </a>
      </div>
    </>
  );
};

export default Header;
