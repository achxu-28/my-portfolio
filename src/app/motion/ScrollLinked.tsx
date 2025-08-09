"use client";

import {
  animate,
  motion,
  MotionValue,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
} from "motion/react";
import { useRef } from "react";
import Html from "../_skillIcons/Html";
import Css from "../_skillIcons/Css";
import Nodejs from "../_skillIcons/Nodejs";
import NextIcon from "../_skillIcons/NextIcon";
import ReactIcon from "../_skillIcons/ReactIcon";
import JavaScript from "../_skillIcons/JavaScript";
import Vercel from "../_skillIcons/Vercel";
import Framer from "../_skillIcons/Framer";
import GitIcon from "../_skillIcons/GitIcon";
import TailwindIcon from "../_skillIcons/TailwindIcon";
import MongoDBicon from "../_skillIcons/MongoDBicon";

export default function ScrollLinked() {
  const ref = useRef(null);
  const { scrollXProgress } = useScroll({ container: ref });
  const maskImage = useScrollOverflowMask(scrollXProgress);

  return (
    <div id="example" className="">
      <svg id="progress" width="80" height="80" viewBox="0 0 100 100">
        <motion.circle
          cx="50"
          cy="50"
          r="30"
          className="indicator"
          style={{ pathLength: scrollXProgress }}
        />
      </svg>
      <motion.ul ref={ref} style={{ maskImage }} className="">
        <div className="flex gap-2 justify-center ">
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
      </motion.ul>
      <StyleSheet />
    </div>
  );
}

const left = `0%`;
const right = `100%`;
const leftInset = `20%`;
const rightInset = `80%`;
const transparent = `#0000`;
const opaque = `#000`;
function useScrollOverflowMask(scrollXProgress: MotionValue<number>) {
  const maskImage = useMotionValue(
    `linear-gradient(90deg, ${opaque}, ${opaque} ${left}, ${opaque} ${rightInset}, ${transparent})`
  );

  useMotionValueEvent(scrollXProgress, "change", (value) => {
    if (value === 0) {
      animate(
        maskImage,
        `linear-gradient(90deg, ${opaque}, ${opaque} ${left}, ${opaque} ${rightInset}, ${transparent})`
      );
    } else if (value === 1) {
      animate(
        maskImage,
        `linear-gradient(90deg, ${transparent}, ${opaque} ${leftInset}, ${opaque} ${right}, ${opaque})`
      );
    } else if (
      scrollXProgress.getPrevious() === 0 ||
      scrollXProgress.getPrevious() === 1
    ) {
      animate(
        maskImage,
        `linear-gradient(90deg, ${transparent}, ${opaque} ${leftInset}, ${opaque} ${rightInset}, ${transparent})`
      );
    }
  });

  return maskImage;
}

/**
 * ==============   Styles   ================
 */

function StyleSheet() {
  return (
    <style>{`
            #example {
              width: 100vw;
              max-width: 800px;
              position: relative;
            }

            #example #progress {
                position: absolute;
                top: -65px;
                left: -15px;
                transform: rotate(-90deg);
            }

            #example .bg {
                stroke: #0b1011;
            }

            #example #progress circle {
                stroke-dashoffset: 0;
                stroke-width: 10%;
                fill: none;
            }

            #progress .indicator {
                stroke: var(--accent);
            }

            #example ul {
                display: flex;
                list-style: none;
                height: fit;
                overflow-x: scroll;
                padding: 20px 0;
                flex: 0 0 600px;
                margin: 0 auto;
                gap: 20px;
            }

            #example ::-webkit-scrollbar {
                height: 5px;
                width: 5px;
                background: #fff3;
                -webkit-border-radius: 1ex;
            }

            #example ::-webkit-scrollbar-thumb {
                background: var(--accent);
                -webkit-border-radius: 1ex;
            }

            #example ::-webkit-scrollbar-corner {
                background: #fff3;
            }

            #example li {
                flex: 0 0 200px;
                background: var(--accent);
            }

    `}</style>
  );
}
