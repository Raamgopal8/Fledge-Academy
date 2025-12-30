import React from "react";
import japaneseRow from "../assets/japanese_row.png";

export default function WhyFledgeAcademy() {
  return (
    <section className="min-h-screen bg-white px-8 py-20">
      {/* Heading */}
      <div className="max-w-[1320px] mx-auto mb-14 text-center">
        <h1 className="text-5xl font-semibold text-black mb-4">
          Why Fledge Academy
        </h1>
        <p className="text-md text-gray-700 max-w-2xl mx-auto">
          At Fledge Academy - clarity, progress, and support combine to create a structured, friendly, and genuinely effective learning experience.
        </p>
      </div>

      {/* MAIN GRID */}
      <div className="max-w-[1320px] mx-auto grid grid-cols-[1fr_1fr_2fr] gap-4">
        {/* LEFT SIDE */}
        <div className="grid grid-cols-2 gap-4 col-span-2">
          <Card
            index="1"
            bg="bg-[#e07a6f]"
            title="Thoughtful Teaching"
            desc="Our expert trainers simplify difficult ideas and guide you patiently."
          />

          <Card
            index="2"
            bg="bg-[#2f8f83]"
            title="Learning You Can Feel"
            desc="Immersive activities in every class make learning feel alive."
          />

          <Card
            index="3"
            bg="bg-[#c77ac6]"
            title="A Community That Lifts You"
            desc="We’re building a supportive space where learners grow together and support each other."
            size="large"
            className="col-span-2"
          />
        </div>

        {/* RIGHT SIDE */}
        <div className="grid grid-rows-[380px_auto] gap-4">
          {/* Image Card */}
          <div
            className="h-[380px] rounded-[18px] p-7 text-white relative"
            style={{
              backgroundImage: `url(${japaneseRow})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <Tag />
            <NumberBadge index="4" />

            <h2 className="mt-12 text-3xl font-semibold">
              Attention That Matters
            </h2>
            <p className="mt-4 text-sm max-w-md opacity-90">
              Small groups allow us to focus on every learner. Your doubts, pace,
              and progress are always heard.
            </p>
          </div>

          {/* Bottom cards */}
          <div className="grid grid-cols-2 gap-4">
            <Card
              index="5"
              bg="bg-[#4f6fd8]"
              title="Progress You Can Trust"
              desc="Weekly reviews and mock exams create a predictable path forward."
            />

            <Card
              index="6"
              bg="bg-[#6a5acd]"
              title="Flexible Schedules"
              desc="Online classes designed to fit school, college, and work routines."
            />
          </div>
        </div>
      </div>
      <div className="max-w-[900px] mx-auto mt-12 text-center">
        <p className="text-xl text-gray-700 font-medium">
          "The right environment doesn’t just teach a language—it changes how you grow in it"
        </p>
      </div>
    </section>
  );
}

/* ---------------- CARD ---------------- */
function Card({ bg, title, desc, size, className = "", index }) {
  const sizeClass = size === "large" ? "h-[380px]" : "h-[260px]";

  return (
    <div
      className={`${bg} ${sizeClass} rounded-[18px] p-6 text-white relative ${className}`}
    >
      <Tag />
      <NumberBadge index={index} />

      <h3 className="mt-12 text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-sm opacity-90">{desc}</p>
    </div>
  );
}

/* ---------------- NUMBER BADGE ---------------- */
function NumberBadge({ index }) {
  return (
    <div className="absolute top-4 right-4 opacity-40 text-5xl font-semibold">
      {index}
    </div>
  );
}

/* ---------------- TAG ---------------- */
function Tag() {
  return (
    <span className="absolute top-4 left-4 bg-white/20 px-3 py-1 rounded-full text-xs font-medium">
      Fledge Academy
    </span>
  );
}
