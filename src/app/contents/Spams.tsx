import Image from 'next/image'
import React from 'react'
import img from '../../../public/image/myPic.jpeg'

const Spams = () => {
  return (
    <div>
      
    <div
              className={cn(
                "relative  col-span-1 row-span-2 flex items-center justify-center rounded-[1rem] shadow-[0px_0px_5px_3px_#e2e8f0]",
                { "md:row-span-1 row-span-2": i == 2 || i == 3 }
              )}
            >
              <div className="relative w-full h-full overflow-hidden rounded-[1rem]">
                <Image
                  src={img}
                  alt="img1"
                  className="h-full w-full object-cover rounded-[1rem] absolute filter grayscale hover:grayscale-0 hover:scale-105 transition-transform duration-300"
                  fill
                />
              </div>
              <div
                className={cn(
                  "absolute bg-red-800 hover:bg-red-700 md:px-7 sm:px-5 px-4 md:py-2 py-2 text-gray-200 md:text-2xl sm:text-[1.2rem] text-[0.9rem] rounded-xs shadow-xs hover:shadow-xl",
                  { "bg-white text-black": i == 0 }
                )}
              >
                name
              </div>
            </div>

    </div>
  )
}

export default Spams
