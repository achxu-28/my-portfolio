"use client"
import React, { useState, useEffect, useContext, createContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// ---------------------------------------------------------------------------
// 1. CURSOR CONTEXT & PROVIDER
// This sets up the global state for hover detection.
// ---------------------------------------------------------------------------

const HoverContext = createContext();

/**
 * HoverProvider
 * Wrap your application's layout or a specific page with this component.
 * It provides the hover state to all its children.
 */
export const HoverProvider = ({ children }) => {
  const [isHovering, setIsHovering] = useState(false);
  return (
    <HoverContext.Provider value={{ isHovering, setIsHovering }}>
      {children}
    </HoverContext.Provider>
  );
};

// ---------------------------------------------------------------------------
// 2. CUSTOM HOOK
// A convenience hook to access the hover state and setter.
// ---------------------------------------------------------------------------

/**
 * useHover
 * A custom hook to easily access the hover context.
 * Throws an error if used outside of a HoverProvider.
 */
export const useHover = () => {
    const context = useContext(HoverContext);
    if (context === undefined) {
        throw new Error('useHover must be used within a HoverProvider');
    }
    return context;
};

// ---------------------------------------------------------------------------
// 3. HOVERABLE AREA COMPONENT
// A wrapper component to make any element trigger the hover effect.
// ---------------------------------------------------------------------------

/**
 * HoverableArea
 * Wrap any component or element with this to trigger the custom cursor
 * animation on mouse enter and leave.
 */
export const HoverableArea = ({ children }) => {
    const { setIsHovering } = useHover();
    return (
        <div 
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
        >
            {children}
        </div>
    );
};

// ---------------------------------------------------------------------------
// 4. CUSTOM CURSOR COMPONENT
// The visual part of the cursor that follows the mouse.
// ---------------------------------------------------------------------------

/**
 * CustomCursor
 * This component renders the animated cursor.
 * Place it once in your main layout file (e.g., _app.js or layout.js).
 */
export const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { isHovering } = useHover();

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const cursorVariants = {
    default: {
      x: mousePosition.x - 12,
      y: mousePosition.y - 12,
      backgroundColor: '#3B82F6',
      height: 24,
      width: 24,
      mixBlendMode: 'multiply',
    },
    text: {
      x: mousePosition.x - 12,
      y: mousePosition.y - 12,
      backgroundColor: '#3B82F6',
      opacity: 0.8,
      height: 80,
      width: 80,
      mixBlendMode: 'normal',
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
      animate={isHovering ? 'text' : 'default'}
      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
    >
      <AnimatePresence>
        {isHovering && (
          <motion.span
            className="text-[16px] font-bold text-white"
            variants={textVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            hi, I'm..
          </motion.span>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
