"use client";
import Image from "next/image";
import Window1 from "../../../public/image/window1.jpeg";
import Window2 from "../../../public/image/window2.jpeg";
import Window3 from "../../../public/image/window3.jpeg";
import React from "react";
import { useScroll, useTransform, motion } from "motion/react";


const card = [
  {
    number: "01",
    title: "MASTERING RESPONSIVE DESIGN",
    desc: "Focus on building websites that adapt seamlessly to all devices.",
    image1: Window1,
    image2: Window2,
    image3: Window3,
  },
  {
    number: "02",
    title: "INNOVATING WITH STYLES & ANIMATIONS",
    desc: "Focus on building websites that adapt seamlessly to all devices.Push the boundaries of creativity by experimenting with dynamic animations, bold typography, and interactive elements.",
    image1: Window3,
    image2: Window1,
    image3: Window2,
  },
  {
    number: "03",
    title: "CRAFTING MODERN, AESTHETIC WEBSITES",
    desc: "Combine technical excellence with sleek, contemporary design principles.",
    image1: Window2,
    image2: Window3,
    image3: Window1,
  },
];
const VisionPage = () => {
  const { scrollY } = useScroll();
  // const smoothScrollY = useSpring(scrollY, {
  //   stiffness: 50,
  //   damping: 50,
  // });

  
  const x = useTransform(scrollY, [0, 1900], [1900, 0]);
  const opacity = useTransform(scrollY, [1500, 1750], [1, 0.3]);
  return (
    <>
      <div
        className="flex flex-col mt-10 sm:mt-30  relative
      "
      >
      <motion.h3 
      style={{ opacity }}
      className="text-[1.5rem]  sm:text-[2.5rem] font-raleway text-gray-700 pt-10 sm:pt-20 sm:pb-20 px-20 md:px-35 text-left sticky top-20">
        I believe in building websites that are not only functional but also beautiful and intuitive.
         My approach is guided by these three pillars.
      </motion.h3>

      
        

        <div className="flex flex-col lg:flex-row justify-between ">
          {card.map((items, i) => (
            <motion.div
              style={{ x }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.5, ease: "linear" }}
              key={i}
              className="flex flex-col items-center"
            >
              

              <div
                className="flex flex-col  px-4 items-center mt-15 sm:mt-15 sm:w-100 h-90 gap-2 py-3 
              rounded-[15px] shadow-[0px_2px_8px_-1px_#1e47ff60] backdrop-blur-[10px] bg-[#ffffff40]"
              >
                <div className="flex gap-1 ">
                  <p className="p-[0.3rem] bg-blue-600/80 w-fit rounded-full"></p>
                  <p className="p-[0.3rem] bg-gray-600 w-fit rounded-full"></p>
                  <p className="p-[0.3rem] bg-gray-600 w-fit rounded-full"></p>
                </div>

                <div className="flex gap-1 ">
                  <Image
                    src={items.image1}
                    alt=""
                    className="size-8 rounded-[0.3rem]"
                  />
                  <Image
                    src={items.image2}
                    alt=""
                    className="size-8 rounded-[0.3rem]"
                  />
                  <Image
                    src={items.image3}
                    alt=""
                    className="size-8 rounded-[0.3rem]"
                  />
                </div>

                <h2
                  className="text-[1.3rem] sm:text-[1.4rem] text-left pt-6 font-raleway 
                
                "
                >
                  {items.title}
                </h2>

                <p className="text-[1rem] sm:text-[1rem] font-raleway-light leading-7 tracking-wide pt-2 text-gray-900 text-left ">
                  {items.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default VisionPage;

/* My Core Principles
Sub-header:
I believe in building websites that are not only functional but also beautiful and intuitive. My approach is guided by these three pillars.

Option 2 (Benefit-Oriented)
Header:

Crafting Modern Web Experiences
Sub-header:
My focus is on combining technical excellence with a keen eye for design to create websites that stand out. */