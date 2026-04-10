import React, { useRef, useLayoutEffect, useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useModal } from '../context/ModalContext';

import img5 from "../assets/5.png";
import img7 from "../assets/7.png";
import img4 from "../assets/4.png";
import img3 from "../assets/3.png";
import img2 from "../assets/2.png";
import img1 from "../assets/1.png";
import bg5 from "../assets/bg-5.png";
import bg7 from "../assets/bg-7.png";
import bg6 from "../assets/bg-6.png";

/* ---------------- SWAPPING TEXT ---------------- */
function SwappingText({ phrases, interval = 2000 }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % phrases.length);
    }, interval);
    return () => clearInterval(timer);
  }, [phrases.length, interval]);

  return (
    <span className="inline-block min-h-[1.2em]">
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="inline-block"
        >
          {phrases[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

/* ---------------- FLOATING IMAGE ---------------- */
function FloatingImage({ img, target, scrollY }) {
  if (!target) {
    return (
      <img
        src={img.src}
        className="hidden md:block absolute object-contain z-30 drop-shadow-lg"
        style={{
          left: img.x,
          top: img.y,
          width: img.w,
          height: img.h,
        }}
      />
    );
  }

  const left = useTransform(scrollY, [target.start, target.end], [img.x, target.x]);
  const top = useTransform(scrollY, [target.start, target.end], [img.y, target.y]);
  const width = useTransform(scrollY, [target.start, target.end], [img.w, target.w]);
  const height = useTransform(scrollY, [target.start, target.end], [img.h, target.h]);

  return (
    <motion.img
      src={img.src}
      className="hidden md:block absolute object-contain z-30 drop-shadow-lg"
      style={{ left, top, width, height }}
    />
  );
}

/* ---------------- MAIN COMPONENT ---------------- */
export default function WixDocking() {
  const { openModal } = useModal();
  const wrapper = useRef(null);
  const grid = useRef(null);
  const frames = useRef([]);

  const { scrollY } = useScroll();
  const [targets, setTargets] = useState([]);

  const bgOpacity = useTransform(scrollY, [0, 500], [1, 0.25]);

  const IMAGES = [
    { src: img5, x: 65, y: 130, w: 250, h: 250, bgW: 280, bgH: 280, bgX: 50, bgY: 120 },
    { src: img7, x: 1250, y: 100, w: 320, h: 240 },
    { src: img4, x: 80, y: 510, w: 350, h: 250, bgW: 280, bgH: 280, bgX: 110, bgY: 490 },
    { src: img3, x: 1200, y: 430, w: 180, h: 180, bgW: 280, bgH: 280, bgX: 1150, bgY: 400 },
  ];

  useLayoutEffect(() => {
    const measure = () => {
      if (!wrapper.current || !grid.current) return;
      if (frames.current.some((f) => !f)) return;

      const wrapperRect = wrapper.current.getBoundingClientRect();
      const gridRect = grid.current.getBoundingClientRect();

      const startScroll = wrapper.current.offsetTop;
      const endScroll = gridRect.top + window.scrollY - window.innerHeight * 0.3;

      const rects = frames.current.map((f) => {
        const r = f.getBoundingClientRect();
        return {
          x: r.left - wrapperRect.left,
          y: r.top - wrapperRect.top,
          w: r.width,
          h: r.height,
          start: startScroll,
          end: endScroll,
        };
      });

      setTargets(rects);
    };

    setTimeout(measure, 600);
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  return (
    <div ref={wrapper} className="relative min-h-full bg-white" id="hero">
      {/* ---------------- HERO ---------------- */}
      <section className="relative min-h-[600px] md:h-screen flex items-center justify-center">
        {/* CENTER CONTENT */}
        <div className="text-center max-w-4xl z-30 pt-24 md:pt-0 md:-mt-32">
          <h1 className="text-5xl md:text-7xl font-extrabold text-[#1A1A1A] leading-tight">
            Learn Japanese
            <br />
            <span className="text-[#3B66AC] font-extrabold">
              <SwappingText
                phrases={[
                  "at your own pace",
                  "from anywhere",
                  "by experiencing it",
                  "with confidence",
                ]}
                interval={2500}
              />
            </span>
          </h1>

          <p className="text-gray-600 text-lg max-w-xl leading-relaxed mb-6 text-center italic">
            Experience the language through a clear path
            <br className="hidden sm:block" />
            that makes every step simple
          </p>

          <div className="mt-6 md:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 px-6 md:px-0">
            <Link to="/courses" className="w-full sm:w-auto">
              <button
                className="w-full bg-cyan-400 text-white px-8 py-4 rounded-xl text-lg font-medium hover:bg-cyan-600 transition"
              >
                Explore Courses
              </button>
            </Link>

            <button
              onClick={() => openModal()}
              className="w-full sm:w-auto bg-gray-100 text-gray-800 px-8 py-4 rounded-xl text-lg font-medium hover:bg-gray-200 transition"
            >
              Enroll Now
            </button>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="md:hidden mt-6 px-6"
          >
            <div className="relative w-full max-w-[320px] mx-auto overflow-hidden rounded-2xl shadow-lg bg-gray-50/50">
              <img
                src={img1}
                className="w-full h-auto object-center"
                alt="Fledge Academy Learning"
              />
            </div>
          </motion.div>

        </div>

        {/* FLOATING IMAGES */}
        {IMAGES.map((img, i) => {
          let bgName = null;
          let bgW, bgH, bgX, bgY;

          if (i === 0) bgName = bg5;
          if (i === 2) bgName = bg7;
          if (i === 3) bgName = bg6;

          if (bgName) {
            bgW = img.bgW;
            bgH = img.bgH;
            bgX = img.bgX;
            bgY = img.bgY;
          }

          return (
            <React.Fragment key={i}>
              {bgName && (
                <motion.div
                  className="hidden md:block"
                  style={{
                    position: "absolute",
                    left: bgX,
                    top: bgY,
                    width: bgW,
                    height: bgH,
                    backgroundImage: `url(${bgName})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    zIndex: 10,
                    opacity: bgOpacity,
                  }}
                />
              )}
              <FloatingImage img={img} target={targets[i] || null} scrollY={scrollY} />
            </React.Fragment>
          );
        })}
      </section>

      {/* ---------------- DOCK GRID ---------------- */}
      <section ref={grid} className="hidden md:flex justify-center pt-20 pb-40">
        <div className="relative w-full max-w-[1250px] min-h-[700px] overflow-hidden rounded-3xl">
          <img src={img2} className="absolute inset-0 w-full h-full z-0" />

          <div ref={(el) => (frames.current[0] = el)} className="absolute top-[50px] left-[35px] w-[170px] h-[170px]" />
          <div ref={(el) => (frames.current[1] = el)} className="absolute top-[130px] right-[10px] w-[150px] h-[150px]" />
          <div ref={(el) => (frames.current[2] = el)} className="absolute bottom-[10px] left-[30px] w-[170px] h-[170px]" />
          <div ref={(el) => (frames.current[3] = el)} className="absolute bottom-[50px] right-[50px] w-[110px] h-[110px]" />
        </div>
      </section>

    </div>
  );
}
