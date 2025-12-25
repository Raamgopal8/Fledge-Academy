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
    {
      icon: <FaBriefcase className="text-white text-xl" />,
      title: "Strong Global Opportunities",
      desc: "Japan remains one of the world’s leading economies, creating steady demand for professionals who understand its language, culture, and business practices.",
    },
    {
      icon: <FaHeart className="text-white text-xl" />,
      title: "A Rare Skill That Sets You Apart",
      desc: "Very few people learn Japanese. Adding it to your profile immediately helps you stand out in academics, interviews, and global career opportunities.",
    },
    {
      icon: <FaPlane className="text-white text-xl" />,
      title: "Sharper Thinking, Better Learning",
      desc: "Learning a new language improves memory, focus, and problem-solving abilities, strengthening both academic performance and professional skills.",
    },
    {
      icon: <FaGraduationCap className="text-white text-xl" />,
      title: "A Bridge to Culture & Innovation",
      desc: "Japanese connects you to a rich world of traditions, technology, design, and creativity that few learners get to experience deeply.",
    },
    {
      icon: <FaStar className="text-white text-xl" />,
      title: "Pathway to Study & Work Abroad",
      desc: "Language proficiency opens doors to scholarships, higher education, and long-term career opportunities with Japanese universities and companies.",
    },
    {
      icon: <FaBook className="text-white text-xl" />,
      title: "Keeps Your Future Options Open",
      desc: "Whether your path is tech, business, education, content creation, or translation, Japanese fits naturally into many modern career tracks.",
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white" id="why-learn-japanese">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900 mb-3">
          Why Learn Japanese Today?
        </h2>

        <p className="text-gray-500 mb-10 sm:mb-12 md:mb-16 text-sm sm:text-base max-w-2xl mx-auto">
          Discover global opportunities, cultural depth, and a smarter way of thinking through language learning.
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 sm:p-8 rounded-2xl 
                         shadow-lg hover:shadow-xl 
                         transition-all duration-300 
                         h-full flex flex-col"
            >
              {/* Icon */}
              <div className="w-12 h-12 flex items-center justify-center bg-cyan-400 rounded-xl mx-auto mb-6">
                {item.icon}
              </div>

              {/* Text */}
              <h3 className="text-base sm:text-md font-semibold text-gray-900 mb-3">
                {item.title}
              </h3>

              <p
                className="text-sm sm:text-base text-gray-500 leading-relaxed line-clamp-4"
                title={item.desc}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
