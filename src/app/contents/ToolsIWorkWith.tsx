"use client"
import React from 'react'

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
import Html1 from '../_skillIcons/Html';


const ToolsIWorkWith = () => {
  return (
    <>
    
      <div className='flex flex-col h-[100vh] justify-center '>
        <div className='flex justify-center items-center mb-10'>
            <h2 className='font-raleway bg-amber-200/0 h-fit py-2 px-4 w-fit flex backdrop-blur-[15px] rounded-[2.1rem]
             border-1 border-blue-500/20  shadow-[0px_0px_8px_1px_#1e47ff30] text-[1.5rem]
             bg-gradient-to-br from-blue-500 to-red-500 bg-clip-text text-transparent
             '>tools I work with:</h2>
        </div>
        <div className='wrapper '>
            <div className='item item1  flex backdrop-blur-[10px]'>
                <Html1 className='size-15 text-gray-700/60'/>
            </div>

            <div className='item item2'>
                <Css className='size-15 text-gray-700/60'/>
            </div>

            <div className='item item3'>
                <TailwindIcon className='size-15 text-gray-700/60'/>
            </div>
            <div className='item item4'>
                <JavaScript className='size-15 text-gray-700/60'/>
            </div>
            <div className='item item5'>
                <Framer className='size-15 text-gray-700/60'/>
            </div>
            <div className='item item6'>
                <NextIcon className='size-15 text-gray-700/60'/>
            </div>
        </div>

        
        <div className='wrapper '>
            <div className='itemRight item1  flex backdrop-blur-[10px]'>
                <Nodejs className='size-15 text-gray-700/60'/>
            </div>

            <div className='itemRight item2'>
                <ReactIcon className='size-15 text-gray-700/60'/>
            </div>

            <div className='itemRight item3'>
                <Vercel className='size-15 text-gray-700/60'/>
            </div>
            <div className='itemRight item4'>
                <GitIcon className='size-15 text-gray-700/60'/>
            </div>
            <div className='itemRight item5'>
                <Framer className='size-15 text-gray-700/60'/>
            </div>
            <div className='itemRight item6'>
                <MongoDBicon className='size-15 text-gray-700/60'/>
            </div>
        </div>

        
      </div>
    </>
  )
}

export default ToolsIWorkWith
