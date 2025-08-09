import React from "react";
import Location from "../_icons/Location";
import ThumbsUp from "../_icons/ThumbsUp";
import World from "../_icons/World";

const Tags = () => {
  return (
    <>
      <div className="w-full ">
        <div className="flex w-full justify-between px-1 sm:px-8  shadow-[0px_0px_8px_-1px_#1e47ff30]
         rounded-[1.5rem] sm:rounded-full p-2 sm:p-0
        text-[0.7rem] sm:text-[0.8rem] backdrop-blur-[10px] bg-[#ffffff40]">
            <div className="flex flex-col sm:items-center py-2 gap-1 ml-10 sm:ml-0">
              <h3>
                <Location className="ml-3 sm:ml-0 size-5 sm:size-6 hover:scale-110" />
              </h3>
              <h3>BASED IN KERALA</h3>
              <h4 className="text-gray-400">INDIA</h4>
            </div>
      
            <div className="sm:flex flex-col sm:items-center py-2 gap-1 hidden ">
                <h3>
                  <World className="ml-6 sm:ml-0 size-5 sm:size-6 hover:scale-110" />
                </h3>
                <h3>AVAILABLE ALL AROUND</h3>
                <h4 className="text-gray-400">WORLDWIDE</h4>
            </div>
      
            <div className="flex flex-col sm:items-center py-2 gap-1 mr-10 sm:mr-0">
                <h3>
                  <ThumbsUp className="ml-8 sm:ml-0 size-5 sm:size-6 hover:scale-110" />
                </h3>
                <h3>FULL STACK DEVELOPER</h3>
                <h4 className="text-gray-400">+SPECIALIZED IN FRONTEND</h4>
            </div>
        </div>
      </div>
    </>
  );
};

export default Tags;
