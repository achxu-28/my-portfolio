import AboutMe from "./contents/AboutMe";
import Experience from "./contents/Experience";
import Footer from "./contents/Footer";
import Header from "./contents/Header";
import Hero from "./contents/Hero";
import PortfolioImage from "./contents/PortfolioImage";
import Projects from "./contents/Projects";

import Tags from "./contents/Tags";
import ToolsIWorkWith from "./contents/ToolsIWorkWith";
import VisionPage from "./contents/VisionPage";
import { CustomCursor, HoverProvider } from "./motion/CustomCursor";


export default function Home() {
  return (
    <HoverProvider>
      <CustomCursor />

      {/* bg-[#c1caf60f] */}
      <div className=" flex flex-col scroll-smooth">
       
       
        <div className="flex flex-col gap-2 p-4 sm:p-8 sm:px 
        bg-gradient-to-tr to-[#f0f2ff9f] via-[#a4d0f280] from-[#749bff30] overflow-hidden ">
          <Header />
          <Hero />
        </div>

        <div className="flex flex-col gap-2 px-4 pb-4 sm:px-16 sm:pb-8
        bg-gradient-to-br to-[#f0f2ff9f] via-[#a4d0f280] from-[#749bff30] overflow-hidden">
          <><Tags /></>
          <PortfolioImage />
          </div>
          <div className="flex flex-col gap-2 px-4 pb-4 sm:px-16 sm:pb-8
        bg-gradient-to-tr to-[#f0f2ff9f] via-[#a4d0f280] from-[#749bff30] overflow-hidden">
            <VisionPage />
            <ToolsIWorkWith />
          </div>
        

        <div className="flex flex-col gap-2 px-4 pb-4 sm:px-16 sm:pb-8
        bg-gradient-to-br to-[#f0f2ff9f] via-[#a4d0f280] from-[#749bff30] relative">
          
          <Projects />
          {/* <StickyDemo/> */}
          
        </div>

        <div className="flex flex-col gap-2 px-4 pb-4 sm:px-8 sm:pb-8
        bg-gradient-to-tr to-[#f0f2ff9f] via-[#a4d0f280] from-[#749bff30] relative">
          <Footer/>
         </div>
       

        {/* <AboutMe/> */}
        {/* <ScrollLinked/> */}
        {/* <Experience/> */}
        {/* <Spams/> */}
      </div>
    </HoverProvider>
  );
}
