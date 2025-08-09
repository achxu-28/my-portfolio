// // components/ScatterText.tsx
// "use client";

// import { animate, hover } from "motion";
// import { splitText } from "motion-plus";
// import { useMotionValue } from "motion/react";
// import { useEffect, useRef } from "react";

// interface ScatterTextProps {
//   children: React.ReactNode;
// }

// /**
//  * A component that scatters its text children on pointer hover,
//  * with the movement constrained within its own boundaries.
//  */
// export default function ScatterText({ children }: ScatterTextProps) {
//   // Add a ref for the component's root container
//   const containerRef = useRef<HTMLDivElement>(null);
//   const textRef = useRef<HTMLHeadingElement>(null);
//   const velocityX = useMotionValue(0);
//   const velocityY = useMotionValue(0);
//   const prevEventTime = useRef(0);

//   useEffect(() => {
//     // Ensure both refs are connected before running the effect
//     if (!textRef.current || !containerRef.current) return;

//     // Calculate a maximum scatter distance based on the container's width.
//     // The letters won't be able to move further than this distance.
//     // We'll use 1/8th of the container's width as our limit.
//     const maxDistance = containerRef.current.offsetWidth / 8;

//     const { chars } = splitText(textRef.current);

//     const handlePointerMove = (event: PointerEvent) => {
//       const now = performance.now();
//       const timeSinceLastEvent = (now - prevEventTime.current) / 1000;
//       prevEventTime.current = now;

//       if (timeSinceLastEvent > 0) {
//         velocityX.set(event.movementX / timeSinceLastEvent);
//         velocityY.set(event.movementY / timeSinceLastEvent);
//       }
//     };

//     document.addEventListener("pointermove", handlePointerMove);

//     hover(chars, (element) => {
//       const speed = Math.sqrt(
//         velocityX.get() * velocityX.get() + velocityY.get() * velocityY.get()
//       );
//       const angle = Math.atan2(velocityY.get(), velocityX.get());
      
//       let distance = speed * 0.1;

//       // **HERE'S THE CONSTRAINT:**
//       // Clamp the calculated distance so it never exceeds our maxDistance.
//       distance = Math.min(distance, maxDistance);

//       animate(
//         element,
//         {
//           x: Math.cos(angle) * distance,
//           y: Math.sin(angle) * distance,
//         },
//         // A slightly softer spring for a smoother return
//         { type: "spring", stiffness: 50, damping: 100, drag: 0.8 }
//       );
//     });

//     return () => {
//       document.removeEventListener("pointermove", handlePointerMove);
//     };
//   }, []);

//   return (
//   <div ref={containerRef} className="scatter-text-container">
//     <h1
//       ref={textRef}
//       className="scatter-text-heading font-poppins-light
//        text-left cursor-pointer text-[clamp(6rem,15vw,12rem)]"
//     >
//       {children}
//     </h1>
//     <ComponentStyles />
//   </div>
// );
// }
    
// function ComponentStyles() {
//   return (

//     <style>{`
//       .scatter-text-container {
//         position: relative;
//         display: flex;
//         justify-content: left;
//         align-items: center;
//         width: 100%;
//       }

//       .split-char {
//         display: inline-block;
//         will-change: transform;
//       }
//     `}</style>
//   );
// }
