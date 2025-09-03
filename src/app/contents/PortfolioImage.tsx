"use client";
import Image from "next/image";
import me from "../../../public/image/myPic.jpeg";
import React from "react";
import { useScroll, useTransform } from "motion/react";
import { motion } from "motion/react";

const PortfolioImage = () => {
  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 200], [1.4, 1]);
  const opacity = useTransform(scrollY, [0, 550], [0, 1]);
  const y = useTransform(scrollY, [0, 450], [500, 0]);

  return (
    <>
      <div className="flex w-full md:py-13 py-1 ">
        <motion.div
          style={{ scale, opacity, y }}
          className="border-1 bg-[#ffffff40] border-blue-500/0 flex flex-col lg:flex-row shadow-[0px_0px_8px_-1px_#1e47ff30] backdrop-blur-[10px] rounded-[2.1rem]"
        >
          <div className="">
            <Image
              src={me}
              alt=""
              className="rounded-[2rem] h-full shadow-[0 25 25 20] shadow-blue-400 grayscale-100 object-cover"
            />
          </div>
          <div
            className=" h-full text-[clamp(1.7rem,6vw,3rem)]  font-semibold text-left sm:text-left md:px-10 px-5
          text-gray-900 flex flex-col justify-center relative md:py-30 py-10"
          >
            <p className="w-[36rem] -z-1 h-[3rem] bg-[#bed0f1] hidden absolute xl:flex top-52 "></p>
            <h2 className="font-raleway flex tracking-tight">
              I&apos;M <pre className="font-raleway bg-gradient-to-br from-blue-500 to-red-500 bg-clip-text text-transparent"> AKASH MAMENHOLY</pre>
            </h2>
            <h2 className="md:-mt-5 -mt-2 font-raleway tracking-tight">BASED IN KERALA, INDIA.</h2>
            <p className="font-raleway font-thin md:text-[1.7rem] text-[1.2rem]  pt-4 sm:pt-10  text-gray-700">
              &quot;I&apos;m a full-stack developer with a strong focus on frontend
              development, crafting intuitive and visually striking user
              experiences. Passionate about clean code, responsive design, and
              seamless interactivity, I bring ideas to life with modern web
              technologies.&quot;
            </p>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default PortfolioImage;
