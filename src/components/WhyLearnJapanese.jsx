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
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4">
            Why Learn Japanese Today
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Discover global opportunities, cultural depth, and a smarter way of
            thinking through language learning.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {features.map((item, index) => {
            // Show dashed line for all except the last card in each column (2-column layout)
            return (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-3xl p-8 flex gap-6 relative"
              >
                {/* ICON + LINE */}
                <div className="relative flex flex-col items-center">
                  <div className="w-14 h-14 bg-cyan-400 text-white rounded-xl flex items-center justify-center text-2xl z-10">
                    {item.icon}
                  </div>

                  {/* Dashed line for all cards, including last */}
                  <div className="absolute top-[60px] h-[80%] border-l-2 border-dashed border-gray-300" />
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
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
