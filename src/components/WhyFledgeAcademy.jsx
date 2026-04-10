import React from "react";
import japaneseRow from "../assets/japanese_row.png";
import { color, motion } from "framer-motion";

export default function WhyFledgeAcademy() {
  return (
    <section className="min-h-0 pt-6 pb-12 md:min-h-screen md:pt-8 md:pb-20 bg-white px-4 sm:px-6 lg:px-8">
      {/* Heading */}
      <div className="max-w-[1320px] mx-auto mb-8 md:mb-14 text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-black mb-3 sm:mb-4">
          Why Fledge Academy
        </h1>
        <p className="text-sm sm:text-base lg:text-md text-gray-600 max-w-2xl mx-auto px-4 italic">
          At Fledge Academy - clarity, progress, and support combine to create a structured, friendly, and genuinely effective learning experience.
        </p>
      </div>

      {/* MAIN GRID */}
      <div className="max-w-[1320px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1fr_2fr] gap-4 sm:gap-6">
        {/* LEFT SIDE */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:col-span-2">
          <Card
            index="1"
            bg="bg-[#e07a6f]"
            title="Learning You Can Feel"
            desc="Immersive activities in every class make learning feel alive."
            />

          <Card
            index="2"
            bg="bg-[#2f8f83]"
            title="A Community That Lifts You"
            desc="We’re building a supportive space where learners grow together and support each other."
            
          />

          <Card
            index="3"
            bg="bg-[#c77ac6]"
            title="Thoughtful Teaching"
            desc="Our expert trainers simplify difficult ideas and guide you patiently."
            size="large"
            className="md:col-span-2"
          />
        </div>

        {/* RIGHT SIDE */}
        <div className="grid grid-cols-1 gap-4 sm:gap-6">
          {/* Image Card */}
          <motion.div
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="h-[220px] sm:h-[320px] lg:h-[380px] rounded-[18px] p-5 sm:p-6 lg:p-7 text-white relative transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl active:mobile-shake cursor-default"
            style={{
              backgroundColor: "#6a5acd"
            }}
          >
            <Tag />
            <NumberBadge index="4" />

            <h2 className="mt-8 sm:mt-10 lg:mt-12 text-xl sm:text-2xl lg:text-3xl font-semibold">
              Attention That Matters
            </h2>
            <p className="mt-3 sm:mt-4 text-xs sm:text-sm max-w-md opacity-90">
              Small groups allow us to focus on every learner. Your doubts, pace,
              and progress are always heard.
            </p>
          </motion.div>

          {/* Bottom cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <Card
              index="5"
              bg="bg-[#386B7B]"
              title="Progress You Can Trust"
              desc="Weekly reviews and mock exams create a predictable path forward."
            />

            <Card
              index="6"
              bg="bg-[#4f6fd8]"
              title="Flexible Schedules"
              desc="Online classes designed to fit school, college, and work routines."
            />
          </div>
        </div>
      </div>
      <div className="max-w-[900px] mx-auto mt-8 sm:mt-10 lg:mt-12 text-center flex flex-col items-center px-4">
        <blockquote className="bg-[#3B66AC]/10 border-l-4 border-[#3B66AC] px-4 sm:px-6 py-4 sm:py-5 rounded-xl shadow-sm">
          <p className="text-base sm:text-lg lg:text-xl text-gray-800 font-semibold italic leading-relaxed">
            “The right environment doesn’t just teach a language—it changes how you grow in it.”
          </p>
        </blockquote>
      </div>
    </section>
  );
}

/* ---------------- CARD ---------------- */
function Card({ bg, title, desc, size, className = "", index }) {
  const sizeClass = size === "large" ? "h-[220px] sm:h-[320px] lg:h-[380px]" : "h-[220px] sm:h-[240px] lg:h-[260px]";

  return (
    <motion.div
      initial={{ y: 60, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`${bg} ${sizeClass} rounded-[18px] p-5 sm:p-6 text-white relative ${className} transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl active:mobile-shake cursor-default`}
    >
      <Tag />
      <NumberBadge index={index} />

      <h3 className="mt-8 sm:mt-10 lg:mt-12 text-lg sm:text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-xs sm:text-sm opacity-90 leading-relaxed">{desc}</p>
    </motion.div>
  );
}

/* ---------------- NUMBER BADGE ---------------- */
function NumberBadge({ index }) {
  return (
    <div className="absolute top-3 sm:top-4 right-3 sm:right-4 opacity-40 text-3xl sm:text-4xl lg:text-5xl font-semibold">
      {index}
    </div>
  );
}

/* ---------------- TAG ---------------- */
function Tag() {
  return (
    <span className="absolute top-3 sm:top-4 left-3 sm:left-4 bg-white/20 px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-medium">
      Fledge Academy
    </span>
  );
}
