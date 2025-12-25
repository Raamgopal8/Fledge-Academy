
import React from "react";

export default function HowItWorksPage() {
  return (
    <section className="relative min-h-screen w-full bg-white py-24 overflow-hidden" id="how-it-works">
      {/* Header */}
      <div className="relative z-10 max-w-5xl mx-auto text-center mb-28">
        <span className="inline-block mb-4 rounded-full bg-cyan-400 px-4 py-1 text-sm font-medium text-white">
          We teach with intention, not compulsion
        </span>

        <h1 className="text-5xl font-semibold tracking-tight text-gray-900">
          How We Shape the Learning Journey
        </h1>

        <p className="mt-5 text-lg text-gray-600">
          Every class is built to create clarity, 
          {/* <br /> */}
         strengthen understanding, and help learners grow with steady, lasting confidence.
        </p>
      </div>

      {/* Timeline area (lines and cards) */}
      <div className="relative max-w-7xl mx-auto px-24 pt-4">
        {/* Vertical timeline lines */}
        <div className="absolute inset-0 flex justify-between h-full pointer-events-none select-none">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="relative w-px bg-gray-200">
              <span className="absolute -top-10 left-1/2 -translate-x-1/2 text-sm text-gray-300">
                {String(i).padStart(2, "0")}
              </span>
            </div>
          ))}
        </div>

      {/* Cards */}
      <div className="relative max-w-7xl mx-auto space-y-10">
          {/* Card 1 - moved slightly left */}
              <div className="max-w-3xl rounded-2xl bg-gray-100 px-10 py-8 shadow-sm" style={{ marginLeft: '-94px' }}>
          <h3 className="text-2xl font-semibold text-gray-900">
            Teach With Clarity
          </h3>
          <p className="mt-4 text-xl leading-relaxed text-gray-600">
            Every concept is presented in a clean, step-by-step format so learners understand the “why” behind what they study.
          </p>
        </div> 

          {/* Card 2  */}
        <div className="ml-40 max-w-3xl rounded-2xl bg-cyan-300 px-12 py-10 shadow-sm">
          <h3 className="text-2xl font-semibold text-gray-900">
            Practice With Intention
          </h3>
          <p className="mt-4 text-xl leading-relaxed text-gray-800">
            Students read, write, speak, and engage with culture-based tasks that make the language memorable and meaningful.
          </p>
        </div>

          {/* Card 3 - moved slightly right */}
        <div className="ml-[38%] w-[71%] rounded-2xl bg-blue-600 px-12 py-10 text-white shadow-sm">
          <div className="flex  items-center gap-3">
            <h3 className="text-2xl font-semibold">
              Grow With Consistency
            </h3>
          </div>
          <p className="mt-4 text-xl leading-relaxed text-blue-100">
            Weekly tests and guided feedback help students build steady progress — without rush and pressure. 
          </p>
        </div>
        </div>
      </div>
    </section>
  );
}
