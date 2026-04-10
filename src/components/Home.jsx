import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import FadeUp from "../animations/FadeUp";
import VerticalJapaneseText from "../animations/VerticalJapaneseText";
import EnsoCircle from "../animations/EnsoCircle";
import { breathingOpacity } from "../animations/variants";
import Heroimg from "../assets/Sample-hero.png";
import RoseFlower from "../assets/RoseFlower.png";
import "./Hero.css";

import { useModal } from '../context/ModalContext';

export default function Home() {
  const { openModal } = useModal();
  return (
    <div className="bg-[#F8F9FA] min-h-screen w-full overflow-x-hidden md:pt-8 hero-tab">
      <div className="hidden lg:block">
        <VerticalJapaneseText 
          text="日本語を学ぶ旅へようこそ" 
          position="left"
        />
      </div>
      
      <motion.div
        variants={breathingOpacity}
        initial="initial"
        animate="animate"
        className="absolute top-1/4 right-[5%] md:right-[15%] text-[80px] sm:text-[120px] md:text-[180px] lg:text-[220px] font-bold text-gray-200 select-none pointer-events-none z-0"
        style={{ lineHeight: 1 }}
      >
        未来
      </motion.div>

      <div className="hidden md:block absolute top-[20%] left-[10%] opacity-10">
        <EnsoCircle size={200} delay={0.5} />
      </div>
      
      <motion.div 
        className="hidden md:block absolute top-20 right-[10%] w-[400px] md:w-[600px] h-[400px] md:h-[600px] rounded-full blur-3xl pointer-events-none glow-purple-soft breathing-glow"
        style={{ willChange: "transform, opacity" }}
      />
      
      <section className="w-full flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 md:px-12 lg:px-16 mt-8 md:mt-12 relative z-10">
        <div className="max-w-2xl text-center pt-16 md:pt-25 md:text-left md:pl-8 lg:pl-20 w-full overflow-x-visible">
          <FadeUp delay={0.2}>
            <motion.h1 
              className="text-5xl md:text-6xl hero-text font-extrabold leading-tight md:leading-tight lg:leading-[1.2] text-[#1A1A1A] calligraphy-reveal px-2 md:px-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.3 }}
            >
              Learn Japanese Online — From Zero to Confidence
            </motion.h1>
          </FadeUp>

          <FadeUp delay={0.4}>
            <p className="text-gray-600 mt-4 text-lg px-2 md:px-0">
              Live interactive classes, cultural immersion,
              and simple step-by-step progress.
            </p>
          </FadeUp>

          <FadeUp delay={0.6}>
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mt-8 justify-center md:justify-start px-2 md:px-0">
              <motion.button 
                onClick={() => openModal()}
                className="relative bg-linear-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-lg shadow-md overflow-hidden w-full sm:w-auto text-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.span
                  className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent"
                  animate={{
                    x: ["-200%", "200%"],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 1.5,
                    ease: "easeInOut",
                  }}
                />
                <span className="relative z-10">Book Free Demo</span>
              </motion.button>

              <Link to="/courses" className="w-full sm:w-auto">
                <button className="text-gray-700 font-medium hover:text-black hover:underline transition w-full sm:w-auto">
                  See Courses
                </button>
              </Link>
            </div>
          </FadeUp>
        </div>

        <div className="hidden md:flex mt-10 md:mt-0 relative w-full justify-center md:justify-end md:pr-8 lg:pr-16">
          <motion.div 
            className="hidden md:block absolute -top-10 left-10 w-32 h-32 rounded-full blur-2xl pointer-events-none glow-pink-soft"
            animate={{
              scale: [1, 1.06, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <div className="relative">
            <img
              src={Heroimg}
              className="w-48 sm:w-60 md:w-72 lg:w-135 opacity-90 max-w-full h-auto"
              alt="bg"
            />
          </div>
        </div>
      </section>

      <motion.div
        className="hidden md:flex pointer-events-none absolute left-0 bottom-0 w-full justify-left z-0 overflow-x-hidden"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 0.5, y: 0 }}
        transition={{ duration: 1.2, delay: 0.6 }}
        aria-hidden="true"
        style={{ zIndex: 0 }}
      >
        <img
          src={RoseFlower}
          alt="Sakura Pink Tree"
          className="w-full max-w-sm sm:max-w-2xl md:max-w-3xl lg:max-w-4xl h-auto object-contain select-none opacity-500 drop-shadow-xl"
          draggable="false"
          style={{ marginBottom: "-2px" }}
        />
      </motion.div>
    </div>
  );
}
