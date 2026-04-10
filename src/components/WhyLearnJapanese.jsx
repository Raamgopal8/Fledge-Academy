import {
  FaBriefcase,
  FaHeart,
  FaPlane,
  FaGraduationCap,
  FaStar,
  FaBook,
} from "react-icons/fa";

export default function WhyLearnJapanese() {
  const features = [
    { icon: <FaBriefcase />, title: "Strong Global Opportunities", desc: "Japan remains one of the world’s leading economies, creating steady demand for professionals who understand its language, culture, and business practices." },
    { icon: <FaHeart />, title: "A Rare Skill That Sets You Apart", desc: "Very few people learn Japanese. Adding it to your profile immediately helps you stand out in academics, interviews, and global career opportunities." },
    { icon: <FaPlane />, title: "Sharper Thinking, Better Learning", desc: "Learning a new language improves memory, focus, and problem-solving abilities, strengthening both academic performance and professional skills." },
    { icon: <FaGraduationCap />, title: "A Bridge to Culture & Innovation", desc: "Japanese connects you to a rich world of traditions, technology, design, and creativity that few learners get to experience deeply." },
    { icon: <FaStar />, title: "Pathway to Study & Work Abroad", desc: "Language proficiency opens doors to scholarships, higher education, and long-term career opportunities with Japanese universities and companies." },
    { icon: <FaBook />, title: "Keeps Your Future Options Open", desc: "Whether your path is tech, business, education, content creation, or translation, Japanese fits naturally into many modern career tracks." },
  ];

  return (
    <section className="py-12 md:py-5 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Why Learn Japanese Today
          </h2>
          <p className="text-gray-600 text-lg max-w-xl leading-relaxed mb-6 mx-auto italic">
            Discover global opportunities, cultural depth, and a smarter way of
            thinking through language learning.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8">
          {features.map((item, index) => {
            return (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-3xl p-6 sm:p-8 flex gap-4 sm:gap-6 relative group transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_30px_rgb(59,102,172,0.15)] active:mobile-shake cursor-pointer"
              >
                {/* ICON + LINE */}
                <div className="relative flex flex-col items-center">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#3B66AC] text-white rounded-xl flex items-center justify-center text-xl sm:text-2xl z-10 transition-transform duration-300 group-hover:scale-110">
                    {item.icon}
                  </div>

                </div>

                {/* Content */}
                <div>
                  <h3 className="text-2xl font-bold mb-6 text-[#1A1A1A] transition-colors duration-300 group-hover:text-[#3B66AC]">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
