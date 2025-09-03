import React from "react";
import Skills from "./Skills";

const AboutMe = () => {
  return (
    <>
      <div className="mt-10 ">
        <div className="flex font-poppins-light justify-between text-[0.9rem] sm:text-[1rem] text-blue-600/80 border-b-1 border-blue-600/50">
          <h3>02</h3>
          <h3>{'// MORE ABOUT ME'}</h3>
          <h3>SINCE 2002</h3>
        </div>

        <div className="flex flex-col font-poppins-light sm:items-center justify-center h-full mt-30 sm:mt-55 ">
          <h1 className=" text-[3.5rem] sm:text-[4rem]">
            more about
          </h1>
          <h1 className="-mt-8 sm:-mt-9 text-blue-600  font-semibold text-[4rem]">
            AKASH.
          </h1>
        </div>
      </div>

      <div className="flex flex-col justify-center mt-5 sm:mt-55 ">
        <p className="text-[0.9rem] sm:text-[1.2rem] font-poppins-light sm:mx-50 text-gray-300 ">
          I&apos;m a self-taught mern stack developer with expertise in react,
          next.js, node.js, and mongodb. skilled in building scalable web
          applications, developing effficient APIs, and optimizing performance
          for seamless user experiences...
        </p>
        <br />
        <br />
        <div className="hidden">
          <Skills />
        </div>{" "}

      </div>
    </>
  );
};

export default AboutMe;
