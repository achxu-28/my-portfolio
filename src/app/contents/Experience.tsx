import React from "react";

const Experience = () => {
  return (
    <>
      <div className=" font-poppins-light mt-10 text-[0.9rem] sm:text-[1rem] flex justify-between text-blue-600/80 border-b-1 border-blue-600/50">
        <h3 className="">03</h3>
        <h3 className="">//EXPERIENCE</h3>
        <h3 className="">3 PHASES</h3>
      </div>

      <div className="grid grid-cols-5">
        <div className="col-span-2 border-r-1 border-blue-600/50">
          <p className="text-[3.5rem] mt-20 hidden sm:block ">EXPERIENCE</p>
        </div>
        <div className="col-span-3 mt-10 sm:mt-20 sm:pt-20 pl-5 flex flex-col gap-1">
          <p className="font-bold text-[1.2rem]">URBANHUB INNOVATIONS</p>
          <p className="font-semibold">MERN stack developer Intern</p>
          <p className="text-gray-400 font-poppins-light">
            Collaborated with senior developers and designers to launch e
            commerce platform utilizing HTML, Tailwind, JavaScript, and MongoDB.
          </p>
        </div>
      </div>
    </>
  );
};

export default Experience;
