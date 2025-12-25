import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqData = [
  {
    q: "Do I need any previous knowledge to join the N5 course?",
    a: "No. Our N5 course is designed for complete beginners. We start from the basics, including scripts and simple sentences, and guide you step by step.",
  },
  {
    q: "How interactive are the online classes?",
    a: "Very interactive. Each session includes speaking, reading, writing, and activity-based practice with continuous feedback.",
  },
  {
    q: "Will I get individual attention?",
    a: "Yes. We keep our batch sizes small to ensure personal guidance, doubt clarification, and regular feedback for every learner.",
  },
  {
    q: "What if I miss a class?",
    a: "No worries. We provide class notes, session recordings, and support so you can easily catch up.",
  },
  {
    q: "Do you prepare students for JLPT or NAT exams?",
    a: "Yes. We conduct weekly reviews, monthly tests, and mock exams to help you prepare confidently for JLPT and NAT levels.",
  },
  {
    q: "What platform do you use for classes?",
    a: "All classes are conducted online via Zoom or Google Meet, and lesson materials are provided for every session.",
  },
];


export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full flex flex-col items-center py-16 px-4 bg-white" id="faq">
      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-bold text-center">
        Frequently Asked Questions
      </h1>
      <p className="text-gray-500 mt-3 text-center text-lg">
        Everything you need to know about learning Japanese with us.
      </p>

      {/* FAQ Items */}
      <div className="mt-12 w-full max-w-3xl space-y-4">
        {faqData.map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl border-l-4 border-cyan-500 shadow-sm"
          >
            {/* Question Row */}
            <button
              onClick={() => toggleFAQ(idx)}
              className="w-full flex justify-between items-center py-5 px-4"
            >
              <p className="text-lg font-medium">{item.q}</p>

              <div className="bg-indigo-500/10 p-2 rounded-full">
                {openIndex === idx ? (
                  <Minus className="text-indigo-500" size={20} />
                ) : (
                  <Plus className="text-indigo-500" size={20} />
                )}
              </div>
            </button>

            {/* Answer */}
            {openIndex === idx && (
              <div className="px-4 pb-4 text-gray-600 animate-fadeIn">
                {item.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
