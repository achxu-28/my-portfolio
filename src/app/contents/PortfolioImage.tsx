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
      <div className="flex w-full py-13 ">
        <motion.div
          style={{ scale, opacity, y }}
          className="border-1 bg-[#ffffff40] border-blue-500/0 flex shadow-[0px_0px_8px_-1px_#1e47ff30] backdrop-blur-[10px] rounded-[2.1rem]"
        >
          <div className="">
            <Image
              src={me}
              alt=""
              className="rounded-[2rem] h-full shadow-[0 25 25 20] shadow-blue-400 grayscale-100 object-cover"
            />
          </div>
          <div
            className=" h-full text-[1rem] sm:text-[3rem] font-semibold text-center sm:text-left px-10
          text-gray-900 flex flex-col justify-center relative py-30"
          >
            <p className="w-[36rem] -z-1 h-[3rem] bg-[#bed0f1] absolute flex top-52 "></p>
            <h2 className="font-raleway flex">
              I'M <p className="bg-gradient-to-br from-blue-500 to-red-500 bg-clip-text text-transparent"> &nbsp; AKASH MAMENHOLY</p>
            </h2>
            <h2 className="-mt-5 font-raleway">BASED IN KERALA, INDIA.</h2>
            <p className="font-raleway font-thin text-[1.7rem]  pt-4 sm:pt-10  text-gray-700">
              "I'm a full-stack developer with a strong focus on frontend
              development, crafting intuitive and visually striking user
              experiences. Passionate about clean code, responsive design, and
              seamless interactivity, I bring ideas to life with modern web
              technologies."
            </p>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default PortfolioImage;
