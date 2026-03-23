import React from "react";
import { motion } from "framer-motion";

export default function VerticalJapaneseText({ 
  text = "日本語を学ぶ旅へようこそ", 
  position = "left", // "left" or "right"
  className = "" 
}) {
  const positionClass = position === "left" 
    ? "left-4 md:left-8" 
    : "right-4 md:right-8";

  return (
    <motion.div
      className={`fixed ${positionClass} top-1/4 z-10 pointer-events-none select-none hidden lg:block ${className}`}
      initial={{ opacity: 0, x: position === "left" ? -20 : 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
    >
      <div 
        className="text-gray-500 font-serif tracking-[0.5em]"
        style={{
          writingMode: "vertical-rl",
          textOrientation: "upright",
          fontSize: "clamp(12px, 1.2vw, 16px)",
          letterSpacing: "0.3em"
        }}
      >
        {text.split('').map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.5, 
              delay: 0.8 + index * 0.1,
              ease: "easeOut" 
            }}
          >
            {char}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}
