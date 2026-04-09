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
      title: "Junior N5 Course (Grades 6 - 12)",
      desc: "A beginner course for school students that combines structured teaching with activity - based practice across reading, writing, speaking, and cultural understanding.",
      motionProps: {
        initial: { x: -50, opacity: 0 },
        whileInView: { x: 0, opacity: 1 },
        viewport: { once: true },
        transition: { duration: 0.6 }
      }
    },
    {
      title: "N5 Course for College Students & Professionals",
      desc: "A beginner course created for mature learners, blending explanation with speaking drills, guided exercises, reading practice, and practical usage.",
      motionProps: {
        initial: { y: 50, opacity: 0 },
        whileInView: { y: 0, opacity: 1 },
        viewport: { once: true },
        transition: { duration: 0.6, delay: 0.2 }
      }
    },
    {
      title: "JLPT N4 Course (Elementary Level)",
      desc: "An elementary Japanese course designed to strengthen the foundation built in N5. Learners work through advanced beginner grammar, structured reading and listening tasks, and 300+ kanji - building steady confidence and real language ability.",
      motionProps: {
        initial: { x: 50, opacity: 0 },
        whileInView: { x: 0, opacity: 1 },
        viewport: { once: true },
        transition: { duration: 0.6, delay: 0.4 }
      }
    },
    {
      title: "Demo Classes",
      desc: "Basic Japanese kanji, grammar, and vocabulary are covered in this course session.",
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
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 sm:mb-6">
            Our Courses
          </h2>
          <p className="text-center text-gray-500 text-sm sm:text-base md:text-md mb-8 md:mb-14 max-w-3xl mx-auto">
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
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                    {course.title}
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
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

