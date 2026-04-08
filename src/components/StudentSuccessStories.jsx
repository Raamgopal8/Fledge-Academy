import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import { X } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stories = [
  {
    preview:
      "The  classes have been highly engaging and enjoyable, with interactive sessions that make learning effective and interesting",
    full:
      "In addition to the prescribed syllabus, additional concepts are taught, which enhances overall understanding of the language.Regular assessments, such as the recent test, helped me evaluate my competence level clearly, and periodic doubt-clearing sessions ensure that concepts are well understood. Kanji, which can often be challenging to memorize, is taught using simple and effective mnemonics, making retention much easier.Overall, the sessions are easy to follow and encourage active participation. The mentor explains concepts patiently, creates a comfortable environment to ask questions, and motivates us to explore the language in greater depth. I truly enjoy the classes and feel confident about my progress in learning Japanese",
    name: "Vishwanandhini",
    role: "Tirunelveli, India",
    kanji: "明快な授業",
    rating: 5,
  },
  {
    preview:
      "I started learning Japanese at Fledge Academy completely from scratch, and honestly, the experience has been amazing",
    full:
      "The online classes were well structured, and the sensei explained everything in a very simple and easy way. I never thought I could learn Japanese so easily in such a short time. Within a short period, I learned a lot of vocabulary and kanji, which really boosted my confidence. The classes were motivating, smooth, and totally worth it. I’m really happy that I chose Fledge Academy to start my Japanese learning journey",
    name: "Divya",
    role: "Chennai, India",
    kanji: "自信がついた",
    rating: 5,
  },
  {
    preview:
      "I have always loved watching anime, and that’s how I started liking the Japanese language. I wanted to learn Japanese but honestly didn’t know where to begin. After joining Fledge Academy, things slowly started making sense",
    full:
      "Now I can use small Japanese sentences in real conversations. I even watch anime without subtitles and enjoy understanding native conversations. I never thought learning Japanese would be this easy, but I’m really happy I started with Fledge Academy",
    name: "Ritthic Udhay",
    role: "Coimbatore, India",
    kanji: "成長を実感",
    rating: 4,
  },
];

export default function StudentSuccessStories() {
  const [activeStory, setActiveStory] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  // Check if mobile and update state
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Auto-rotate for mobile
  useEffect(() => {
    if (!isMobile) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % stories.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isMobile]);

  useEffect(() => {
    document.body.style.overflow = activeStory ? "hidden" : "auto";
  }, [activeStory]);

  return (
    <>
      {/* SECTION */}
      <section className="py-20 bg-gradient-to-b from-white via-red-50/30 to-white">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-semibold">
            Student Success Stories
          </h2>
          <p className="text-gray-600 mt-4 text-sm">
            本物の成功体験 • Real transformation stories
          </p>
        </div>

        {/* Cards */}
        <div ref={ref} className="max-w-6xl mx-auto px-4">
          {/* Desktop Grid */}
          <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {stories.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                transition={{ delay: index * 0.15 }}
                className="bg-white rounded-2xl border border-red-100 shadow-md p-4 flex flex-col min-h-[300px]"
              >
              {/* Quote + Stars */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-10 h-10 rounded-full bg-cyan-400 text-white flex items-center justify-center">
                  <FaQuoteLeft />
                </div>

                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <FaStar
                      key={i}
                      className={`text-sm ${
                        i < item.rating
                          ? "text-yellow-400"
                          : "text-gray-200"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Preview + Read More */}
              <div className="mb-8">
                <p className="text-gray-700 text-sm leading-relaxed inline">
                  {item.preview}
                </p>
                <button
                  onClick={() => setActiveStory(item)}
                  className="ml-2 text-xs font-medium text-blue-600 hover:text-cyan-600 transition align-baseline"
                >
                  Read more
                </button>
              </div>

              {/* Footer */}
              <div className="mt-auto">
                <h4 className="font-semibold">{item.name}</h4>
                <p className="text-sm text-gray-500">{item.role}</p>

                <div className="h-px bg-red-100 my-4" />

                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-cyan-500">
                    {item.kanji}
                  </p>
                </div>
              </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile Carousel */}
          <div className="md:hidden relative h-80 overflow-hidden">
            <div className="flex items-center justify-center h-full">
              {stories.map((item, index) => {
                const isActive = index === currentIndex;
                const offset = index - currentIndex;
                const absOffset = Math.abs(offset);
                
                return (
                  <motion.div
                    key={index}
                    className="absolute bg-white rounded-2xl border border-red-100 shadow-md p-4 flex flex-col min-h-[280px] w-64 cursor-pointer"
                    initial={{ scale: 0.8, opacity: 0, x: 300 }}
                    animate={{
                      scale: isActive ? 1.1 : 0.8,
                      opacity: isActive ? 1 : 0.5,
                      x: offset * 120,
                      zIndex: isActive ? 10 : 5 - absOffset,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }}
                    onClick={() => setActiveStory(item)}
                  >
                    {/* Quote + Stars */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-8 h-8 rounded-full bg-cyan-400 text-white flex items-center justify-center text-sm">
                        <FaQuoteLeft />
                      </div>
                      <div className="flex gap-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <FaStar
                            key={i}
                            className={`text-xs ${
                              i < item.rating
                                ? "text-yellow-400"
                                : "text-gray-200"
                            }`}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Preview */}
                    <div className="mb-4 flex-grow">
                      <p className="text-gray-700 text-xs leading-relaxed line-clamp-3">
                        {item.preview}
                      </p>
                    </div>

                    {/* Footer */}
                    <div className="mt-auto">
                      <h4 className="font-semibold text-sm">{item.name}</h4>
                      <p className="text-xs text-gray-500">{item.role}</p>
                      <div className="h-px bg-red-100 my-2" />
                      <p className="text-xs font-semibold text-cyan-500">
                        {item.kanji}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Carousel Indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
              {stories.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? "bg-cyan-500" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MODAL */}
      <AnimatePresence>
        {activeStory && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveStory(null)}
          >
            <motion.div
              className="relative bg-white max-w-lg w-full rounded-2xl p-8"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* CLOSE BUTTON – FIXED SPACING */}
              <button
                onClick={() => setActiveStory(null)}
                className="absolute top-5 right-5 p-2 rounded-full
                           text-gray-400 hover:text-gray-600
                           hover:bg-gray-100 transition"
              >
                <X size={18} />
              </button>

              {/* Content */}
              <div className="flex gap-4 mb-6">
                <FaQuoteLeft className="text-cyan-500 text-4xl shrink-0" />
                <div className="text-gray-700 text-sm leading-relaxed">
                  {activeStory.full.split(/\n|(?<=[.!?])\s+(?=[A-Z])/).map((para, idx) => (
                    <p key={idx} className="mb-3 last:mb-0">{para.trim()}</p>
                  ))}
                </div>
              </div>

              <div className="h-px bg-gray-100 mb-4" />

              <div className="flex items-center justify-between gap-4">
                <div>
                  <h4 className="font-semibold">{activeStory.name}</h4>
                  <p className="text-sm text-gray-500">
                    {activeStory.role}
                  </p>
                </div>

                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <FaStar
                      key={i}
                      className={`text-base ${
                        i < activeStory.rating
                          ? "text-yellow-400"
                          : "text-gray-200"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
