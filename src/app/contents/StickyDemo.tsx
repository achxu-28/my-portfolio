import React from "react";

const StickyDemo = () => {
  return (
    <>


      {/* This container defines the scroll area for the sticky effect */}
      <div className=" mx-auto w-full flex justify-between  py-24">
        
        {/* Left Side Sticky Title */}
        <div className="flex flex-col h-[90vh] w-1/4 sticky top-10 rounded-l-[50px] shadow-[-6px_4px_12px_-2px_#1e47ff30]">
            <div className="w-full self-start h-[20vh] rounded-tl-[50px]  
            backdrop-blur-[15px] bg-[#e4f5fa5c] border-1 border-b-0 border-r-0 border-blue-500/20  ">
            </div>
            <div className="w-full self-start h-[70vh] rounded-bl-[50px]  
            backdrop-blur-[15px] bg-[#e4f5fa5c] border-1 border-t-0 border-blue-500/20  ">
            </div>
        </div>

        <div className="flex flex-col   w-3/4 gap-10">
            <div className="w-full h-[90vh] bg-red-400/0  sticky top-10"> 
                <div className="w-full h-[20vh] rounded-tr-[50px]
                 backdrop-blur-[15px] bg-[#e4f5fa5c] border-1 border-l-0 border-blue-500/20  -ml-[1px] shadow-[8px_4px_12px_-2px_#1e47ff30] ">

                 </div>
            </div>

            <div className="w-full flex flex-col items-center gap-8 pl-8 font-sans">
          {/* Each card needs to be sticky with the same 'top' value */}
          <div className="bg-red-200backdrop-blur-[10px] bg-[#e4f5fa5c] border-1 border-l-0 border-blue-500/20 shadow-[4px_4px_10px_0px_#1e47ff30] 
           w-full h-[450px] sticky top-56 rounded-br-[50px] p-8 grid place-content-center text-3xl ">
            Card 1
          </div>
          <div className=" w-full h-[450px] sticky top-56 
          backdrop-blur-[10px] bg-[#e4f5fa5c] border-1 border-l-0 border-blue-500/20  
          rounded-br-[50px] p-8 grid place-content-center text-3xl ">
            Card 2
          </div>
          <div className="bg-red-200backdrop-blur-[10px] bg-[#e4f5fa5c] border-1 border-l-0 border-blue-500/20  
           w-full h-[450px] sticky top-56 rounded-br-[50px] p-8 grid place-content-center text-3xl ">
            Card 3
          </div>
          <div className=" w-full h-[450px] sticky top-56 
          backdrop-blur-[10px] bg-[#e4f5fa5c] border-1 border-l-0 border-blue-500/20  
          rounded-br-[50px] p-8 grid place-content-center text-3xl ">
            Card 4
          </div>
          
        </div>
            
        </div>
       

        {/* Right Side: The column of cards that will stick sequentially */}
        {/* NOTE: This parent div is NOT sticky. Its children are. */}





        


      </div>
        <div className="h-[100vh]"></div>



    </>
  );
};

export default StickyDemo;



<div className="w-1/2 flex flex-col items-center gap-16 font-sans">
          {/* Each card needs to be sticky with the same 'top' value */}
          <div className="bg-red-200 w-full h-[300px] sticky top-32 rounded-lg p-8 grid place-content-center text-3xl shadow-xl">
            Card 1
          </div>
          <div className="bg-green-200 w-full h-[300px] sticky top-32 rounded-lg p-8 grid place-content-center text-3xl shadow-xl">
            Card 2
          </div>
          <div className="bg-yellow-200 w-full h-[300px] sticky top-32 rounded-lg p-8 grid place-content-center text-3xl shadow-xl">
            Card 3
          </div>
          <div className="bg-pink-200 w-full h-[300px] sticky top-32 rounded-lg p-8 grid place-content-center text-3xl shadow-xl">
            Card 4
          </div>
        </div>