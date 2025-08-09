"use client";
import Image from "next/image";
import Img1 from "../../../public/image/fredoWeb.png";
import Img2 from "../../../public/image/AIWeb.png";
import Img3 from "../../../public/image/opticalsWeb.png";
import React from "react";
import { useScroll, useTransform } from "motion/react";
import { motion } from "motion/react";
import Link from "next/link";

const Projects = () => {
  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 2000], [5, 1]);
  const opacity = useTransform(scrollY, [2950, 3500], [1, 0]);
  const y = useTransform(scrollY, [0, 2050], [2000, 0]);
  return (
    <>
      <div className="flex flex-col  ">
        {/* project tag */}
        <div className="  pt-5 z-20 inset-0 text-center h-[100vh]  flex flex-col items-center  sticky ">
          <p
            className="font-raleway bg-amber-200/0 h-fit py-2 px-4 flex backdrop-blur-[15px] rounded-[2.1rem] 
               border-1 border-blue-500/20  shadow-[0px_0px_8px_1px_#1e47ff30] text-[1.5rem]
               bg-gradient-to-br from-blue-500 to-red-500 bg-clip-text text-transparent"
          >
            PROJECTS
          </p>
          <motion.p className="-z-20 font-raleway w-[100vh] flex justify-start text-gray-700 text-[2.5rem] text-left tracking-wide pt-4 sm:pt-10"
          style={{opacity}}>
            Here are some of my recent projects that showcase my skills and creativity in web development:
          </motion.p>
        </div>

        {/* first project  */}
        <motion.div
          style={{ y }}
          className="w-full  flex justify-center  pt-10
          h-[90vh]  sticky top-0 max-sm:h-[90vh]"
        >

          <div
            className="bg-amber-600/0 border-1 border-blue-500/20  shadow-[0px_0px_8px_1px_#1e47ff30] 
              backdrop-blur-[10px] rounded-[2.1rem] h-full  w-full grid grid-cols-2 overflow-hidden"
          >
            <div className="col-span-1 flex bg-gradient-to-bl from-[#f0f5ff] via-blue-500/60 to-[#a4d0f260] p-4 overflow-hidden">
              <motion.div
                style={{ scale }}
                className="flex justify-center items-center"
              >
                <Image src={Img1} alt="" className="object-contain" />
              </motion.div>
            </div>

            <div
              className="colspan-1 flex flex-col justify-center items-start pl-4 gap-4
                  backdrop-blur-[10px] bg-[#ffffff40] font-raleway relative"
            >
              <p className=" w-[22rem] -z-1 h-[1.5rem] bg-[#bed0f1] absolute flex top-66 "></p>
              <p
                className="font-semibold text-[2rem] 
                      "
              >
                E-Commerce Platform
              </p>
              <p className="pt-4 text-gray-600 text-[1.2rem] ">
                A working prototype of an E-commerce platform build using MERN
                stack
              </p>
              <Link
                href={"/sdz"}
                className=" text-gray-600 text-[1rem] hover:text-violet-500 cursor-none"
              >
                View github repository -{">"}
              </Link>
            </div>
          </div>
        </motion.div>

        {/* second project  */}
        <div
          className="w-full flex justify-center items-center pt-10
          h-[90vh]  sticky top-0 max-sm:h-[90vh]"
        >
          {/* project tag */}

          <div
            className=" border-1 border-blue-500/20  
              backdrop-blur-[14px] rounded-[2.1rem] h-full  w-full grid grid-cols-2 overflow-hidden"
          >
            <div className="col-span-1 flex bg-gradient-to-bl from-[#f0f5ff] via-blue-500/60 to-[#a4d0f260] p-4 overflow-hidden">
              <motion.div
                style={{ scale }}
                className="flex justify-center items-center"
              >
                <Image src={Img2} alt="" className="object-contain" />
              </motion.div>
            </div>

            <div
              className="colspan-1 flex flex-col justify-center items-start pl-4 gap-4
                  backdrop-blur-[10px] bg-[#ffffff40] font-raleway relative"
            >
              <p className=" w-[22rem] -z-1 h-[1.5rem] bg-[#bed0f1] absolute flex top-66 "></p>
              <p
                className="font-semibold text-[2rem] 
                      "
              >
                AI text generator
              </p>
              <p className="pt-4 text-gray-600 text-[1.2rem] ">
                A working prototype of an AI text generator built using Next.js
                and Tailwind CSS
              </p>
              <Link
                href={"/sdz"}
                className=" text-gray-600 text-[1rem] hover:text-violet-500 cursor-none"
              >
                View github repository -{">"}
              </Link>
            </div>
          </div>
        </div>

        {/* third project  */}
        <div
          className="w-full flex justify-center items-center pt-10
          h-[90vh]  sticky top-0 max-sm:h-[90vh]"
        >
          {/* project tag */}

          <div
            className=" border-1 border-blue-500/20  
              backdrop-blur-[16px] rounded-[2.1rem] h-full  w-full grid grid-cols-2 overflow-hidden"
          >
            <div className="col-span-1 flex bg-gradient-to-bl from-[#f0f5ff] via-blue-500/60 to-[#a4d0f260] p-4 overflow-hidden">
              <motion.div
                style={{ scale }}
                className="flex justify-center items-center"
              >
                <Image src={Img3} alt="" className="object-contain" />
              </motion.div>
            </div>

            <div
              className="colspan-1 flex flex-col justify-center items-start pl-4 gap-4
                  backdrop-blur-[10px] bg-[#ffffff40] font-raleway relative"
            >
              <p className=" w-[22rem] -z-1 h-[1.5rem] bg-[#bed0f1] absolute flex top-66 "></p>
              <p
                className="font-semibold text-[2rem] 
                      "
              >
                Emirates Opticals Landing page
              </p>
              <p className="pt-4 text-gray-600 text-[1.2rem] ">
                A working prototype of an Emirates Opticals landing page built
                using Next.js and Tailwind CSS
              </p>
              <Link
                href={"/sdz"}
                className=" text-gray-600 text-[1rem] hover:text-violet-500 cursor-none"
              >
                View github repository -{">"}
              </Link>
            </div>

          </div>
        </div>

        <div className="h-[30vh] "></div>
      </div>
    </>
  );
};

export default Projects;
