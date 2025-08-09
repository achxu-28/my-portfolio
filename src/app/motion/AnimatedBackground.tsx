// // components/AnimatedBackground.js
// 'use client';

// import { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';

// // This helper function generates the random box-shadow value
// const generateShadows = (count, color) => {
//   const spacing = 2560; // Corresponds to $spacing in your CSS
//   let value = '';
//   for (let i = 0; i < count; i++) {
//     value += `${Math.random() * spacing}px ${Math.random() * spacing}px 0 ${color}${i < count - 1 ? ',' : ''}`;
//   }
//   return value;
// };

// const AnimatedBackground = ({ children }) => {
//   // We use state to store the generated shadows so they are only created once
//   const [shadows1, setShadows1] = useState('');
//   const [shadows1After, setShadows1After] = useState('');
//   const [shadows2, setShadows2] = useState('');
//   const [shadows2After, setShadows2After] = useState('');
//   const [shadows3After, setShadows3After] = useState('');
//   const [shadows4, setShadows4] = useState('');
//   const [shadows4After, setShadows4After] = useState('');

//   // Generate the shadows on component mount
//   useEffect(() => {
//     const color = 'grey'; // Corresponds to $color-particle
//     setShadows1(generateShadows(800, color));
//     setShadows1After(generateShadows(590, color));
//     setShadows2(generateShadows(680, color));
//     setShadows2After(generateShadows(510, color));
//     setShadows3After(generateShadows(530, color));
//     setShadows4(generateShadows(1720, color));
//     setShadows4After(generateShadows(770, color));
//   }, []);

//   const particleBase = "absolute rounded-full";

//   return (
//     <div className="relative w-full -z-10">
//       {/* Static background layer */}
//       <div className="fixed top-0 left-0 w-full h-full bg-gradient-to-b from-[#c0c0c000] to-[#02032b00] -z-10" />

//       {/* Animation Wrapper */}
//       <div className="fixed top-0 left-0 w-full h-full">
//         {/* Particle 1 */}
//         <motion.div
//           className={`${particleBase} w-[4px] h-[4px]`}
//           style={{ boxShadow: shadows1 }}
//           animate={{ y: -2560 }}
//           transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
//         >
//           {/* Replicating ::after pseudo-element */}
//           <div
//             className={`${particleBase} w-[4px] h-[4px] `}
//             style={{ boxShadow: shadows1After }}
//           />
//         </motion.div>

//         {/* Particle 2 */}
//         <motion.div
//           className={`${particleBase} w-[2px] h-[2px]`}
//           style={{ boxShadow: shadows2 }}
//           animate={{ y: -2560 }}
//           transition={{ duration: 120, repeat: Infinity, ease: 'linear' }}
//         >
//           <div
//             className={`${particleBase} w-[3px] h-[3px] `}
//             style={{ boxShadow: shadows2After }}
//           />
//         </motion.div>
        
//         {/* Particle 3 (only has ::after styles) */}
//         <motion.div
//           className={particleBase}
//           animate={{ y: -2560 }}
//           transition={{ duration: 180, repeat: Infinity, ease: 'linear' }}
//         >
//            <div
//             className={`${particleBase} w-[3px] h-[3px] `}
//             style={{ boxShadow: shadows3After }}
//           />
//         </motion.div>

//         {/* Particle 4 */}
//         <motion.div
//           className={`${particleBase} w-[2px] h-[2px]`}
//           style={{ boxShadow: shadows4 }}
//           animate={{ y: -2560 }}
//           transition={{ duration: 200, repeat: Infinity, ease: 'linear' }}
//         >
//           <div
//             className={`${particleBase} w-[2px] h-[2px] `}
//             style={{ boxShadow: shadows4After }}
//           />
//         </motion.div>
//       </div>

//       {/* Page Content */}
//       <div className="relative z-10 flex w-full h-full">
//         {children}
//       </div>
//     </div>
//   );
// };

// export default AnimatedBackground;