import React from "react";
import JavaScript from "../_skillIcons/JavaScript";
import Html from "../_skillIcons/Html";
import Css from "../_skillIcons/Css";
import ReactIcon from "../_skillIcons/ReactIcon";
import NextIcon from "../_skillIcons/NextIcon";
import Nodejs from "../_skillIcons/Nodejs";
import MongoDBicon from "../_skillIcons/MongoDBicon";
import Expressjs from "../_skillIcons/Expressjs";
import TailwindIcon from "../_skillIcons/TailwindIcon";
import GitIcon from "../_skillIcons/GitIcon";
import Framer from "../_skillIcons/Framer";
import Vercel from "../_skillIcons/Vercel";

const Skills = () => {
  return (
    <>
      <div className="flex flex-col gap-2 text-blue-600">
        <div className="flex gap-2 justify-center">
          <div className=" px-10 py-2 rounded-[0.5rem] border-[0.05rem] border-gray-400 border-r-0">
            <JavaScript className="size-14 hover:scale-140 transition-all" />
          </div>
          <div className=" px-10 py-2 rounded-[0.5rem] border-[0.05rem] border-gray-400 border-r-0">
            <ReactIcon className="size-14 hover:scale-140 transition-all" />
          </div>
          <div className=" px-10 py-2 rounded-[0.5rem] border-[0.05rem] border-gray-400 border-r-0">
            <NextIcon className="size-14 hover:scale-140 transition-all" />
          </div>
          <div className=" px-10 py-2 rounded-[0.5rem] border-[0.05rem] border-gray-400 border-r-0">
            <Nodejs className="size-14 hover:scale-140 transition-all" />
          </div>
          <div className=" px-10 py-2 rounded-[0.5rem] border-[0.05rem] border-gray-400 border-r-0">
            <Css className="size-14 hover:scale-140 transition-all" />
          </div>
          <div className=" px-10 py-2 rounded-[0.5rem] border-[0.05rem] border-gray-400 border-r-0">
            <Html className="size-14 hover:scale-140 transition-all" />
          </div>
          

        </div>
        <div className="flex gap-2 justify-center">
          <div className=" px-10 py-2 rounded-[0.5rem] border-[0.05rem] border-gray-400 border-l-0">
          <MongoDBicon className="size-14 hover:scale-140 transition-all" />
          </div>
          <div className=" px-10 py-2 rounded-[0.5rem] border-[0.05rem] border-gray-400 border-l-0 ">
          <TailwindIcon className="size-14 hover:scale-140 transition-all" />
          </div>
          <div className=" px-10 py-2 rounded-[0.5rem] border-[0.05rem] border-gray-400 border-l-0">
          <GitIcon className="size-14 hover:scale-140 transition-all" />
          </div>
          <div className=" px-10 py-2 rounded-[0.5rem] border-[0.05rem] border-gray-400 border-l-0">
          <Framer className="size-14 hover:scale-140 transition-all" />
          </div>
          <div className=" px-10 py-2 rounded-[0.5rem] border-[0.05rem] border-gray-400 border-l-0">
          <Vercel className="size-14 hover:scale-140 transition-all" />
          </div>


        </div>
      </div>

    </>
  );
};

export default Skills;
