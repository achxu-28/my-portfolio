"use client";
import React from "react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "motion/react";
import { HoverableArea } from "../motion/CustomCursor";


const Hero = () => {
  
  const { scrollY } = useScroll();

  const scale = useTransform(scrollY, [0, 300], [1, 1.5]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.3]);
  const x = useTransform(scrollY, [0, 300], [0, 200]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    console.log("Page scroll:", latest);
  });
  return (
    <div className="">


  <motion.div
        style={{ scale, opacity, x }}
        className="flex flex-col py-20 md:py-15 lg:py-10
         
      "
      >
        <div className=" flex font-poppins-regular  w-full text-[clamp(4rem,14vw,12rem)] -mt-5 lg:-mt-10
        text-gray-900 relative">
          <HoverableArea>
            {/* <p className="w-[36rem] -z-1 h-[3rem] bg-[#bed0f1] absolute flex top-40"></p> */}
            <h1 className="font-raleway tracking-wide
            
            ">Akash</h1>
          </HoverableArea>

        </div>
        <div className="flex  font-poppins-regular  text-[clamp(4rem,14vw,12rem)] -mt-5 md:-mt-20 xl:-mt-[7.5rem] 
        text-gray-900 relative">
          <HoverableArea>
            <p className="w-[70vw] hidden  -z-1 h-[3rem] bg-[#bed0f1] absolute sm:flex top-[25vh] "></p>            
            <h2 className="z-20 font-raleway tracking-wide ">Mamenholy</h2>
          </HoverableArea>

        </div>
      </motion.div>

      

    </div>
  );
};

export default Hero;
