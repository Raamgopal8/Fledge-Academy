import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaQuoteLeft } from "react-icons/fa";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function StudentSuccessStories() {
  const stories = [
    {
      title: "The classes felt clear from day one.",
      body:
        "I joined as a complete beginner, but every topic was explained in a way that actually made sense. Weekly reviews helped me understand my progress and improve steadily. Fledge made Japanese feel simple, even on days when I doubted myself.",
      name: "Harini",
      role: "College Student",
      kanji: "明快な授業",
    },
    {
      title: "My child became confident within a few weeks.",
      body:
        "As a parent, I wanted a structured but stress-free environment. The trainer was patient and attentive. Now my child speaks basic Japanese confidently and enjoys every class.",
      name: "Parent of a Grade 8 Student",
      role: "Parent & Children",
      kanji: "自信がついた",
    },
    {
      title: "Learning here fits perfectly into my work schedule.",
      body:
        "Flexible timings and supportive teaching helped me balance work and learning. This is the first course where I’ve felt real, measurable progress.",
      name: "Pranav",
      role: "Working Professional",
      kanji: "成長を実感",
    },
  ];

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className="py-20 bg-gradient-to-b from-white via-red-50/30 to-white" id="testimonials">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-5xl font-semibold text-gray-900">
          Student Success Stories
        </h2>
        <p className="text-gray-600 mt-4 text-sm md:text-base">
          本物の成功体験 • Real transformation stories from our students
        </p>
      </div>

      {/* Cards */}
      <div
        ref={ref}
        className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4"
      >
        {stories.map((item, index) => (
          <motion.div
            key={index}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ delay: index * 0.15 }}
            className="bg-white rounded-2xl border border-red-100 shadow-md p-4 flex flex-col min-h-[320px]"
          >
            {/* QUOTE BLOCK */}
            <div className="flex gap-4 mb-6">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-cyan-400 text-white shrink-0">
                <FaQuoteLeft />
              </div>

              <h3 className="font-semibold text-cyan-700 text-base leading-snug line-clamp-2">
                {item.title}
              </h3>
            </div>

            {/* BODY */}
            <p className="text-gray-700 text-sm leading-relaxed mb-8 line-clamp-5">
              {item.body}
            </p>

            {/* AUTHOR */}
            <div className="mt-auto">
              <h4 className="font-semibold text-gray-900">{item.name}</h4>
              <p className="text-sm text-gray-500">{item.role}</p>

              <div className="h-px bg-red-100 my-4" />

              {/* JAPANESE PHRASE — FIXED ALIGNMENT */}
              <p className="text-sm font-semibold text-cyan-500 tracking-wide">
                {item.kanji}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Footer */}
      <div className="text-center mt-16 text-gray-500 text-xs">
        あなたの物語も、ここから始まります
        <br />
        <span className="text-[10px]">Your story begins here</span>
      </div>
    </section>
  );
}
