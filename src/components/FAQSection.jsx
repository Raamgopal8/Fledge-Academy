import React, { useState, useEffect } from "react";
import { Plus, Minus } from "lucide-react";

/* Default FAQs (5 visible) */
const baseFaqs = [
  {
    q: "Do I need any previous knowledge to join the N5 course?",
    a: "No. Our N5 course is designed for complete beginners.",
  },
  {
    q: "How interactive are the online classes?",
    a: "Very interactive with speaking, reading, writing, and activities.",
  },
  {
    q: "Will I get individual attention?",
    a: "Yes. Small batch sizes ensure personal guidance.",
  },
  {
    q: "What if I miss a class?",
    a: "Recordings and notes are provided so you can catch up.",
  },
  {
    q: "Do you prepare students for JLPT or NAT exams?",
    a: "Yes. Weekly reviews and mock exams are included.",
  },
];

/* Extra FAQs */
const extraFaqs = [
  {
    q: "How long does it take to complete N5?",
    a: "Usually 3–4 months with consistent practice.",
  },
  {
    q: "Is this course suitable for working professionals?",
    a: "Yes. Flexible schedules and recordings are available.",
  },
  {
    q: "Do you provide certificates after completion?",
    a: "Yes. A course completion certificate is provided.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);
  const [showMore, setShowMore] = useState(false);
  const [hideExtra, setHideExtra] = useState(false);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  /* 🔒 Hide ONLY when page bottom is reached */
  useEffect(() => {
    const handleScroll = () => {
      const reachedBottom =
        window.innerHeight + window.scrollY >=
        document.body.scrollHeight - 5;

      if (reachedBottom && showMore) {
        setHideExtra(true);
        setOpenIndex(null);

        setTimeout(() => {
          setShowMore(false);
          setHideExtra(false);
        }, 300);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [showMore]);

  return (
    <section className="w-full flex flex-col items-center py-10 md:py-16 px-4 sm:px-6 lg:px-8 bg-white" id="faq">
      <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-center">
        Frequently Asked Questions
      </h1>
      <p className="text-gray-500 mt-3 text-center text-sm sm:text-lg">
        Everything you need to know about learning Japanese with us.
      </p>

      <div className="mt-6 md:mt-12 w-full max-w-3xl space-y-4">
        {[...baseFaqs, ...(showMore ? extraFaqs : [])].map((item, idx) => {
          const isExtra = idx >= baseFaqs.length;

          return (
            <div
              key={idx}
              className={`bg-white rounded-xl border-l-4 border-cyan-500 shadow-sm
                transition-all duration-300 ease-in-out
                ${
                  hideExtra && isExtra
                    ? "opacity-0 max-h-0 overflow-hidden"
                    : "opacity-100 max-h-[500px]"
                }`}
            >
              <button
                onClick={() => toggleFAQ(idx)}
                className="w-full flex justify-between items-center py-4 sm:py-5 px-4 text-left"
              >
                <p className="text-sm sm:text-lg font-medium">{item.q}</p>
                <div className="bg-indigo-500/10 p-2 rounded-full">
                  {openIndex === idx ? (
                    <Minus className="text-indigo-500" size={20} />
                  ) : (
                    <Plus className="text-indigo-500" size={20} />
                  )}
                </div>
              </button>

              {openIndex === idx && (
                <div className="px-4 pb-4 text-gray-600 text-sm sm:text-base">
                  {item.a}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {!showMore && (
        <button
          onClick={() => setShowMore(true)}
          className="mt-6 sm:mt-8 rounded-full border border-gray-300 px-4 sm:px-6 py-2 text-xs sm:text-sm font-medium text-gray-700 hover:bg-gray-100 transition"
        >
          Load more questions
        </button>
      )}
    </section>
  );
}
