"use client";
import React, {
  useState,
  useEffect,
  useContext,
  createContext,
  ReactNode,
} from "react";
import { motion, AnimatePresence } from "framer-motion";

// ---------------------------------------------------------------------------
// 1. CURSOR CONTEXT & PROVIDER
// ---------------------------------------------------------------------------
type HoverContextType = {
  isHovered: boolean;
  setIsHovered: (value: boolean) => void;
};

const HoverContext = createContext<HoverContextType>({
  isHovered: false,
  setIsHovered: () => {
    throw new Error("setIsHovered called outside of HoverProvider");
  },
});

type HoverProviderProps = {
  children: ReactNode;
};

export const HoverProvider = ({ children }: HoverProviderProps) => {
  const [isHovering, setIsHovering] = useState(false);
  return (
    <HoverContext.Provider value={{ isHovered: isHovering, setIsHovered: setIsHovering }}>
      {children}
    </HoverContext.Provider>
  );
};

// ---------------------------------------------------------------------------
// 2. CUSTOM HOOK
// ---------------------------------------------------------------------------
export const useHover = (): HoverContextType => {
  const context = useContext(HoverContext);
  if (!context) {
    throw new Error("useHover must be used within a HoverProvider");
  }
  return context;
};

// ---------------------------------------------------------------------------
// 3. HOVERABLE AREA COMPONENT
// ---------------------------------------------------------------------------
type HoverableAreaProps = {
  children: ReactNode;
};

export const HoverableArea = ({ children }: HoverableAreaProps) => {
  const { setIsHovered } = useHover();
  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </div>
  );
};

// ---------------------------------------------------------------------------
// 4. CUSTOM CURSOR COMPONENT
// ---------------------------------------------------------------------------
export const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { isHovered } = useHover();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const cursorVariants = {
    default: {
      x: mousePosition.x - 12,
      y: mousePosition.y - 12,
      backgroundColor: "#3B82F6",
      height: 24,
      width: 24,
      mixBlendMode: "multiply",
    },
    text: {
      x: mousePosition.x - 12,
      y: mousePosition.y - 12,
      backgroundColor: "#3B82F6",
      opacity: 0.8,
      height: 80,
      width: 80,
      mixBlendMode: "normal",
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.1 } },
  };

  return (
    <motion.div
      className="scroll-smooth fixed top-0 left-0 rounded-full pointer-events-none z-50 flex items-center justify-center"
      variants={cursorVariants}
      animate={isHovered ? "text" : "default"}
      transition={{ type: "spring", stiffness: 500, damping: 30 }}
    >
      <AnimatePresence>
        {isHovered && (
          <motion.span
            className="text-[16px] font-bold text-white"
            variants={textVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            hi, I&apos;m..
          </motion.span>
        )}
      </AnimatePresence>
    </motion.div>
  );
};