import {
  FaBriefcase,
  FaHeart,
  FaPlane,
  FaGraduationCap,
  FaStar,
  FaBook,
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function WhyLearnJapanese() {
  const features = [
    { icon: <FaBriefcase />, title: "Strong Global Opportunities", desc: "Japan remains one of the world’s leading economies, creating steady demand for professionals who understand its language, culture, and business practices." },
    { icon: <FaHeart />, title: "A Rare Skill That Sets You Apart", desc: "Very few people learn Japanese. Adding it to your profile immediately helps you stand out in academics, interviews, and global career opportunities." },
    { icon: <FaPlane />, title: "Sharper Thinking, Better Learning", desc: "Learning a new language improves memory, focus, and problem-solving abilities, strengthening both academic performance and professional skills." },
    { icon: <FaGraduationCap />, title: "A Bridge to Culture & Innovation", desc: "Japanese connects you to a rich world of traditions, technology, design, and creativity that few learners get to experience deeply." },
    { icon: <FaStar />, title: "Pathway to Study & Work Abroad", desc: "Language proficiency opens doors to scholarships, higher education, and long-term career opportunities with Japanese universities and companies." },
    { icon: <FaBook />, title: "Keeps Your Future Options Open", desc: "Whether your path is tech, business, education, content creation, or translation, Japanese fits naturally into many modern career tracks." },
  ];

  /* Stagger context for cards */
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.1 
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: "easeOut" } 
    }
  };

  return (
    <section className="py-12 md:py-8 bg-white overflow-hidden relative">
      {/* Decorative background blobs */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-blue-50 rounded-full blur-3xl opacity-60 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-cyan-50 rounded-full blur-3xl opacity-60 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="inline-block mb-4 rounded-full bg-[#3B66AC]/10 px-4 py-1.5 text-xs sm:text-sm font-semibold text-[#3B66AC] uppercase tracking-wider">
            Future Proof Your Career
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Why Learn Japanese Today
          </h2>
          <p className="text-gray-500 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed italic">
            Discover global opportunities, cultural depth, and a smarter way of
            thinking through language learning.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {features.map((item, index) => {
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.98, transition: { duration: 0.1 } }}
                className="group bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(59,102,172,0.12)] transition-all duration-300 relative overflow-hidden flex flex-col h-full cursor-default"
              >
                {/* Decorative background glow inside card for hover */}
                <div className="absolute -right-20 -top-20 w-40 h-40 bg-[#3B66AC]/5 rounded-full blur-2xl group-hover:bg-[#3B66AC]/20 transition-colors duration-500"></div>

                {/* ICON */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#F0F4FA] text-[#3B66AC] rounded-2xl flex items-center justify-center text-2xl sm:text-3xl mb-8 group-hover:scale-110 group-hover:bg-[#3B66AC] group-hover:text-white transition-all duration-300 shadow-sm relative z-10">
                  {item.icon}
                </div>

                {/* Content */}
                <div className="relative z-10 flex-grow flex flex-col">
                  <h3 className="text-xl sm:text-2xl font-bold mb-4 text-gray-900 leading-snug group-hover:text-[#3B66AC] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed text-sm sm:text-base flex-grow">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
