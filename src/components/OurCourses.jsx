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
    <section className="w-full py-30 bg-white" id="courses">
      <div className="max-w-7xl mx-auto px-4">

        <h2 className="text-3xl md:text-5xl font-semibold text-center mb-3">
          Our Courses
        </h2>
        <p className="text-center text-gray-500 text-base md:text-md mb-10 md:mb-14">
          Each course follows a structured, purposeful approach that helps learners <br></br> build strong foundations and steady progress in Japanese
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 md:pt-7 gap-10 md:gap-14">
          {courses.map((course, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-cyan-200 bg-cyan-50 p-8 min-w-[340px] md:min-w-[400px] flex flex-col justify-between hover:shadow-lg transition"
            >
              <div>
                <h3 className="text-xl md:text-xl font-semibold text-gray-900 mb-4">
                  {course.title}
                </h3>
                <p className="text-gray-700 text-base md:text-md leading-relaxed">
                  {course.desc}
                </p>
              </div>

              <button
                className="mt-8 self-start text-sm font-medium text-cyan-600 
                           hover:text-cyan-700 transition"
              >
                View Course →
              </button>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <button
            className="bg-cyan-500 hover:bg-cyan-700 text-white font-semibold px-8 py-3 rounded-full text-lg shadow-md transition"
          >
            All Courses
          </button>
        </div>
      </div>
    </section>
  );
}
