// OurCourses.jsx
export default function OurCourses() {
  const courses = [
    {
      title: "Junior N5 Course (Grades 6 - 12)",
      desc: "A beginner course for school students that combines structured teaching with activity - based practice across reading, writing, speaking, and cultural understanding",
    },
    {
      title: "N5 Course for College Students & Professionals",
      desc: "A beginner course created for mature learners, blending explanation with speaking drills, guided exercises, reading practice, and practical usage",
    },
    {
      title: "JLPT N4 Course (Elementary Level)",
      desc: "An elementary Japanese course designed to strengthen the foundation built in N5. Learners work through advanced beginner grammar, structured reading and listening tasks, and 300+ kanji - building steady confidence and real language ability.",
    },
  ];


  return (
    <section className="w-full py-16 sm:py-20 bg-white" id="courses">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-8">
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-semibold text-center mb-4 sm:mb-6">
          Our Courses
        </h2>
        <p className="text-center text-gray-500 text-sm sm:text-base md:text-md mb-8 sm:mb-12 md:mb-14 max-w-3xl mx-auto">
          Each course follows a structured, purposeful approach that helps learners
          <br className="hidden sm:block" /> build strong foundations and steady progress in Japanese
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-10 md:gap-14">
          {courses.map((course, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-cyan-200 bg-cyan-50 p-6 sm:p-10 md:p-8 flex flex-col justify-between hover:shadow-lg transition min-h-[280px] sm:min-h-[320px]"
            >
              <div>
                <h3 className="text-lg sm:text-xl md:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">
                  {course.title}
                </h3>
                <p className="text-gray-700 text-sm sm:text-base md:text-md leading-relaxed">
                  {course.desc}
                </p>
              </div>

              <button
                className="mt-6 sm:mt-8 self-start text-xs sm:text-sm font-medium text-cyan-600 
                           hover:text-cyan-700 transition inline-flex items-center gap-1"
              >
                View Course →
              </button>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-10 sm:mt-12 md:mt-14">
          <button
            className="bg-cyan-500 hover:bg-cyan-700 text-white font-semibold px-8 sm:px-10 py-3 sm:py-3.5 rounded-full text-sm sm:text-base md:text-lg shadow-md transition"
          >
            All Courses
          </button>
        </div>
      </div>
    </section>
  );
}
