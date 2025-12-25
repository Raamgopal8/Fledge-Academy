import React, { useRef, useLayoutEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import img5 from "../assets/5.png";
import img7 from "../assets/7.png";
import img4 from "../assets/4.png";
import img3 from "../assets/3.png";
import img2 from "../assets/2.png";
import bg5 from "../assets/bg-5.png";
import bg7 from "../assets/bg-7.png";
import bg6 from "../assets/bg-6.png";

function FloatingImage({ img, target, scrollY }) {
  if (!target) {
    return (
      <img
        src={img.src}
        className="absolute object-contain z-20"
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
      className="absolute object-contain z-20"
      style={{ left, top, width, height }}
    />
  );
}

export default function WixDocking() {
  const wrapper = useRef(null);
  const grid = useRef(null);
  const frames = useRef([]);

  const { scrollY } = useScroll();
  const [targets, setTargets] = useState([]);

  // fade background images on scroll
  const bgOpacity = useTransform(scrollY, [0, 500], [1, 0.25]);

  const IMAGES = [
    { src: img5, x: 50, y: 100, w: 180, h: 180, bgW: 220, bgH: 220, bgX: 30, bgY: 70 },
    { src: img7, x: 1200, y: 50, w: 270, h: 200 },
    { src: img4, x: 80 , y: 470, w: 280, h: 200, bgW: 220, bgH: 240, bgX: 100, bgY: 450 },
    { src: img3, x: 1230, y: 420, w: 120, h: 120, bgW: 220, bgH: 240, bgX: 1180, bgY: 350 },
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
      {/* HERO */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="text-center space-y-8 max-w-4xl z-30 -mt-60">
          <h1 className="md:text-8xl">
            Learn Japanese <br />
            <span className="text-gray-600">without limits</span>
          </h1>
          <p className="text-gray-700 text-md">
            Learn Japanese naturally with an interactive, modern learning platform.
          </p>
          <button
            className="bg-cyan-500 text-white px-10 py-4 rounded-full text-2xl font-semibold"
            onClick={() => window.location.href = '/CoursesPricing'}
          >
            Explore Courses
          </button>
        </div>

        {/* FLOATING + BACKGROUND */}
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
              <FloatingImage img={img} target={targets[i]} scrollY={scrollY} />
            </React.Fragment>
          );
        })}
      </section>

      {/* DOCK GRID */}
      <section ref={grid} className="flex justify-center pt-20 pb-40" id="pricing">
        <div className="relative w-full max-w-[1250px] min-h-[700px] overflow-hidden rounded-3xl">
          <img src={img2} className="absolute inset-0 w-full h-full z-0" />

          <div ref={(el) => (frames.current[0] = el)} className="absolute top-[50px] left-[35px] w-[170px] h-[170px]" />
          <div ref={(el) => (frames.current[1] = el)} className="absolute top-[130px] right-[10px] w-[150px] h-[150px]" />
          <div ref={(el) => (frames.current[2] = el)} className="absolute bottom-[-10px] left-[30px] w-[170px] h-[170px]" />
          <div ref={(el) => (frames.current[3] = el)} className="absolute bottom-[50px] right-[50px] w-[110px] h-[110px]" />
        </div>
      </section>
    </div>
  );
}
