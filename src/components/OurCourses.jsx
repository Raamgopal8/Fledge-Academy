import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function OurCourses() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const opacity3 = useTransform(scrollYProgress, [0.8, 0.9], [0, 1]);

  const courses = [
    {
      title: "JLPT N5 – Beginner Japanese Course",
      desc: "Establish a rock-solid foundation in Hiragana, Katakana, and basic Kanji.",
      motionProps: {
        initial: { x: -50, opacity: 0 },
        whileInView: { x: 0, opacity: 1 },
        viewport: { once: true },
        transition: { duration: 0.6 }
      }
    },
    {
      title: "JLPT N4 – Elementary Japanese Course",
      desc: "Bridge the gap between textbook Japanese and real-world fluency.",
      motionProps: {
        initial: { y: 50, opacity: 0 },
        whileInView: { y: 0, opacity: 1 },
        viewport: { once: true },
        transition: { duration: 0.6, delay: 0.2 }
      }
    },
    {
      title: "JLPT N3 – Intermediate Japanese Course",
      desc: "Mastering the mechanics of intermediate Japanese and subtle expression.",
      motionProps: {
        initial: { x: 50, opacity: 0 },
        whileInView: { x: 0, opacity: 1 },
        viewport: { once: true },
        transition: { duration: 0.6, delay: 0.4 }
      }
    },
    {
      title: "Conversation Course - Spoken Japanese & Culture",
      desc: "Focus on native speech patterns and practical roleplays to overcome the fear of speaking.",
      motionProps: {
        initial: { y: 50, opacity: 0 },
        whileInView: { y: 0, opacity: 1 },
        viewport: { once: true },
        transition: { duration: 0.6, delay: 0.6 }
    }
  }
  ];

  return (
    <div ref={containerRef} className="relative bg-white overflow-visible pb-12 md:pb-24">
      <section className="w-full flex items-center justify-center overflow-hidden py-12 md:py-20" id="courses">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-8 w-full">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-4 sm:mb-6">
            Our Courses
          </h2>
          <p className="text-center text-gray-500 text-sm sm:text-base md:text-md mb-8 md:mb-14 max-w-3xl mx-auto italic">
            Each course follows a structured, purposeful approach that helps learners 
            <br className="hidden sm:block" /> build strong foundations and steady progress in Japanese
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 md:gap-14">
            {courses.map((course, idx) => (
              <motion.div
                key={idx}
                {...course.motionProps}
                className="rounded-2xl border border-blue-100 bg-blue-50/50 p-6 sm:p-10 md:p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow min-h-[280px] sm:min-h-[320px]"
              >
                <div>
                  <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">
                    {course.title}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    {course.desc}
                  </p>
                </div>

                <button
                  className="mt-8 sm:mt-10 self-start text-sm font-bold text-[#3B66AC] 
                             hover:text-blue-800 transition inline-flex items-center gap-1"
                >
                  View Course →
                </button>
              </motion.div>
            ))}
          </div>
          
          <div className="flex justify-center mt-8 md:mt-16">
            <Link to="/courses">
              <motion.button
                style={{ opacity: opacity3 }}
                className="bg-[#3B66AC] hover:bg-blue-800 text-white font-bold px-8 sm:px-12 py-3 sm:py-4 rounded-full text-sm sm:text-base shadow-lg transition"
              >
                All Courses
              </motion.button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

