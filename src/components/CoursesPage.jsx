import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Book, Users, Clock, Award, Star, ArrowRight, GraduationCap, Briefcase, Palette } from 'lucide-react';
import Footer from './Footer';
import heroImage from '../assets/japanese_courses_hero.png';

const courses = [
  {
    id: 1,
    tier: 'Tier 01',
    title: 'Level N5: The Foundation',
    subtitle: 'The threshold of scholarly inquiry.',
    level: 'N5',
    kanji: '基',
    accentColor: 'linear-gradient(135deg, #020c1d 0%, #1a3a6d 40%, #ffffff 100%)',
    duration: '12 Weeks',
    type: 'JLPT Focused',
    description: 'Establish a rock-solid foundation in Hiragana, Katakana, and basic Kanji.',
    focusList: [
      'Orthography (Hiragana/Katakana)',
      '100+ Essential Kanji',
      'Rudimentary Sentence Architecture'
    ],
    outcomeList: [
      'Master the basics of reading & writing',
      'Build basic conversational ability',
      'Preparation for further scholarly study'
    ],
    link: '#',
    isStitch: true,
    layout: 'left'
  },
  {
    id: 2,
    tier: 'Tier 02',
    title: 'Level N4: Daily Fluency',
    subtitle: 'Articulating the mechanics of daily life with functional precision.',
    level: 'N4',
    kanji: '话',
    accentColor: 'linear-gradient(135deg, #051b3c 0%, #1a3a6d 40%, #ffffff 100%)',
    duration: '16 Weeks',
    type: 'JLPT Focused',
    description: 'Bridge the gap between textbook Japanese and real-world fluency.',
    focusList: [
      '650+ Intermediate Scholarly Kanji',
      'Exegetical reading of news',
      'Nuanced logical connectors'
    ],
    outcomeList: [
      'Bridging to advanced Japanese fluency',
      'Understanding complex societal topics',
      'Professional communication skills'
    ],
    link: '#',
    isStitch: true,
    
    layout: 'left'
  },
  {
    id: 3,
    tier: 'Tier 03',
    title: 'Level N3: The Bridge',
    subtitle: 'The pivotal transition from functional communication to scholarly editorial command.',
    level: 'N3',
    kanji: '桥',
    accentColor: 'linear-gradient(135deg, #010a1a 0%, #1e3a6d 40%, #ffffff 100%)',
    duration: '20 Weeks',
    type: 'JLPT Focused',
    description: 'Mastering the mechanics of intermediate Japanese and subtle expression.',
    focusList: [
      '800+ Contextual Kanji',
      'Authentic Media Analysis',
      'Intermediate Sentence Flow'
    ],
    outcomeList: [
      'Bridge to Advanced Proficiency',
      'Professional Fluency Foundation',
      'Critical Interpretation Skills'
    ],
    link: '#',
    isStitch: true,
    isRecommended: true,
    layout: 'left'
  },
  {
    id: 4,
    tier: 'Tier 04',
    title: 'Level N2: Mastery',
    subtitle: 'The height of editorial command and high-order philosophical fluency.',
    level: 'N2',
    kanji: '熟',
    accentColor: 'linear-gradient(135deg, #010a1a 0%, #1e3a6d 40%, #ffffff 100%)',
    duration: 'Flexible',
    type: 'JLPT Focused',
    description: 'The height of intermediate Japanese, focusing on academic and philosophical command.',
    focusList: [
      '1,000+ Advanced Literary Kanji',
      'Critical analysis of editorial critiques',
      'Native-cadence auditory processing',
      'Full Keigo immersion (Business/Formal)'
    ],
    outcomeList: [
      'High-order professional fluency in corporate settings',
      'Evaluative reading of complex academic journals',
      'Nuanced participation in deep philosophical debate',
      'Complete certification readiness for JLPT N2'
    ],
    link: '#',
    isStitch: true,
    layout: 'left'
  },
];

const categories = ['All Courses', 'JLPT Focused', 'Conversation'];

const StitchCourseCard = ({ course, index }) => {
  const isLeft = course.layout === 'left';
  
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="lg:col-span-6 relative overflow-hidden group rounded-[48px] shadow-[0_10px_40px_-15px_rgba(15,35,68,0.15)] flex flex-col md:flex-row min-h-[520px] bg-white transition-transform duration-500 hover:-translate-y-2"
    >
      {/* Background Kanji Watermark */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center opacity-[0.05]">
         <span className={`text-[24rem] font-serif transition-transform duration-1000 group-hover:scale-110 ${isLeft ? 'translate-x-32' : '-translate-x-32'}`}>
            {course.kanji}
         </span>
      </div>

      {/* Info Section */}
      <div 
        className={`w-full md:w-[45%] p-12 flex flex-col justify-center relative z-10 text-white ${isLeft ? 'md:order-1' : 'md:order-2'}`}
        style={{ background: course.accentColor }}
      >
        <div className="flex flex-col h-full">
          {course.isRecommended && (
            <span className="absolute top-8 right-8 bg-blue-500 text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
              Recommended Path
            </span>
          )}
          
          <span className="text-xs font-bold uppercase tracking-[4px] mb-4 text-white/60">
            {course.tier}
          </span>
          <h3 className="text-4xl font-bold mb-6 font-serif leading-tight text-white">
            {course.title}
          </h3>
          <p className="text-base mb-10 italic font-serif opacity-80 text-white/90">
            "{course.subtitle}"
          </p>
          
          <div className="mt-auto">
            <a 
              href={course.link}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl text-xs font-bold transition-all duration-300 uppercase tracking-widest shadow-lg bg-white text-[#0f2344] hover:bg-blue-50"
            >
              Learn More <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Detail Section */}
      <div className={`w-full md:w-[55%] p-12 bg-transparent flex flex-col justify-center gap-10 relative z-10 ${!isLeft ? 'md:order-1' : 'md:order-2'}`}>
        <div className="grid gap-12">
          {/* Core Focus */}
          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-[2px] mb-6 flex items-center gap-3 text-gray-400">
              <span className="w-8 h-[1px] bg-gray-200"></span> Core Focus
            </h4>
            <ul className="space-y-4 font-sans text-[#0f2344]">
              {course.focusList.map((item, idx) => (
                <li key={idx} className="flex items-start gap-4 text-lg font-medium leading-normal">
                  <span className="w-1.5 h-1.5 rounded-full mt-2.5 shrink-0 bg-blue-400"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Course Outcome Card */}
          <div className="p-8 rounded-[32px] border border-gray-100 bg-white shadow-sm backdrop-blur-md transition-all duration-500 hover:shadow-xl">
            <h4 className="text-[11px] font-bold uppercase tracking-[2px] mb-6 flex items-center gap-3 text-blue-500/80">
               Scholarly Outcome
            </h4>
            <div className="space-y-3">
              {course.outcomeList.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 text-sm font-medium text-[#0f2344]">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 bg-blue-50">
                    <Star className="w-2.5 h-2.5 text-blue-500" />
                  </div>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Meta */}
        <div className="flex items-center gap-8 pt-8 border-t border-gray-50">
           <div className="flex items-center gap-2.5 text-gray-400">
              <Clock className="w-4 h-4" />
              <span className="text-[10px] font-bold uppercase tracking-widest">{course.duration}</span>
           </div>
           <div className="flex items-center gap-2.5 text-gray-400">
              <GraduationCap className="w-4 h-4" />
              <span className="text-[10px] font-bold uppercase tracking-widest">JLPT {course.level} TRACK</span>
           </div>
        </div>
      </div>
    </motion.div>
  );
};

const CoursesPage = () => {
  const [activeCategory, setActiveCategory] = useState('All Courses');

const filteredCourses = activeCategory === 'All Courses' 
    ? courses 
    : courses.filter(c => c.type === activeCategory || (activeCategory === 'Conversation' && c.type === 'Culture'));

  return (
    <div className="bg-[#F8F9FA] min-h-screen font-sans overflow-x-hidden pb-12">
    
      <section className="relative pt-32 pb-12 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            <h1 className="text-5xl md:text-7xl font-extrabold text-[#1A1A1A] leading-tight mb-8">
              Master Japanese <br />
              <span className="text-[#3B66AC]">Without Limits.</span>
            </h1>
            <p className="text-gray-600 text-lg max-w-xl leading-relaxed mb-10">
             Each course follows a structured, purposeful approach that helps learners build strong foundations and steady progress in Japanese.
            </p>
            
            <div className="flex gap-4 mb-8">
              <span className="bg-blue-50 text-blue-600 text-xs font-bold px-3 py-1 rounded flex items-center gap-2">
                <Award className="w-3 h-3" /> JLPT Certified
              </span>
              <span className="bg-gray-100 text-gray-600 text-xs font-bold px-3 py-1 rounded flex items-center gap-2">
                <Users className="w-3 h-3" /> Native Mentors
              </span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="flex-1"
          >
            <div className="rounded-[40px] overflow-hidden shadow-2xl h-[400px] relative group">
              <img 
                src={heroImage} 
                alt="Courses Hero" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-md p-6 rounded-2xl max-w-xs shadow-lg">
                <p className="font-bold text-[#1A1A1A] mb-1">New Cohort Starts Oct 2024</p>
                <p className="text-xs text-gray-500">Limited slots available for N2 Business Prep</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-6 md:px-12 lg:px-24 mb-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end gap-6 border-b border-gray-100 pb-8">
          <div>
            <h2 className="text-2xl font-bold text-[#1A1A1A] mb-2">Academic Pathways</h2>
            <p className="text-gray-500 text-sm">Structured learning designed for rapid fluency.</p>
          </div>
          <div className="flex bg-white p-1.5 rounded-xl shadow-sm border border-gray-100">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-lg text-sm font-semibold transition-all ${
                  activeCategory === cat 
                    ? 'bg-[#3B66AC] text-white shadow-md' 
                    : 'text-gray-500 hover:text-[#1A1A1A]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 md:px-12 lg:px-24 mb-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
          <AnimatePresence mode="wait">
            {filteredCourses.map((course, i) => {
              if (course.isStitch) {
                return <StitchCourseCard key={course.id} course={course} index={i} />;
              }

              const spanClass = course.id === 1 ? 'lg:col-span-4' : 
                                course.id === 2 ? 'lg:col-span-2' :
                                'lg:col-span-3';

              return (
                <motion.div
                  key={course.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                  className={`bg-white rounded-[32px] p-8 md:p-10 shadow-sm border border-gray-100 flex flex-col justify-between hover:shadow-xl transition-all duration-500 overflow-hidden relative group h-full ${spanClass}`}
                >
                  
                  {course.icon && course.icon}

                  <div className="relative z-10 h-full flex flex-col">
                      <div className="flex gap-3">
                        {course.isWorkshop && (
                          <span className="bg-red-50 text-red-500 text-[10px] font-bold tracking-widest px-3 py-1.5 rounded uppercase font-mono border border-red-100/50 shadow-sm">
                            Workshop
                          </span>
                        )}
                        {!course.isWorkshop && (
                          <span className="text-[10px] font-bold tracking-widest px-3 py-1.5 rounded uppercase font-mono border bg-blue-50 text-[#3B66AC] border-blue-100">
                            {course.level}
                          </span>
                        )}
                        
                        {!course.isWorkshop && (
                          <span className="text-gray-400 text-[10px] font-bold tracking-widest px-3 py-1.5 flex items-center gap-1.5 uppercase border border-gray-100 rounded">
                            {course.professional ? <Briefcase className="w-3 h-3" /> : <Clock className="w-3 h-3" />}
                            {course.duration}
                          </span>
                        )}

                        {course.isWorkshop && (
                          <span className="text-gray-400 text-[10px] font-bold tracking-widest px-3 py-1.5 flex items-center gap-1.5 uppercase border border-gray-100 rounded">
                            <Palette className="w-3 h-3" /> Artistic
                          </span>
                        )}
                      </div>
                    

                    <h3 className={`font-extrabold text-[#1A1A1A] mb-4 group-hover:text-[#3B66AC] transition-colors ${
                      course.id === 1 ? 'text-4xl' : 'text-2xl'
                    }`}>
                      {course.title}
                    </h3>

                    <p className={`text-gray-500 leading-relaxed mb-8 ${course.id === 1 ? 'max-w-xl text-lg' : 'text-sm'}`}>
                      {course.description}
                    </p>

                    {course.tags && (
                      <div className="flex flex-wrap gap-2 mb-8">
                        {course.tags.map(tag => (
                          <span key={tag} className="bg-gray-50 text-gray-500 text-[10px] font-bold px-4 py-2 rounded-lg border border-gray-100">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    <div className="mt-auto">
                      {course.nextCohort && (
                        <div className="flex justify-between items-center text-sm mb-6 pb-2 border-b border-gray-50">
                          <p className="font-bold text-gray-400">Duration</p>
                          <p className="font-extrabold text-[#1A1A1A]">{course.duration}</p>
                        </div>
                      )}
                      
                      {course.nextCohort && (
                        <div className="flex justify-between items-center text-sm mb-6">
                          <p className="font-bold text-gray-400">Next Cohort</p>
                          <p className="font-extrabold text-[#1A1A1A]">{course.nextCohort}</p>
                        </div>
                      )}

                      {!course.nextCohort && (
                         <div className="flex justify-between items-center text-sm mb-6">
                            <p className="font-bold text-gray-400 px-1">{course.duration}</p>
                         </div>
                      )}

                      <div className="flex items-center justify-between">
                        {course.style === 'secondary' ? (
                          <button className="w-full bg-[#E9ECEF] text-[#495057] font-bold py-3.5 rounded-xl hover:bg-gray-200 transition-colors">
                            Learn More
                          </button>
                        ) : (
                          <a href={course.link} className={`flex items-center gap-2 font-bold text-[#1A1A1A] hover:gap-4 transition-all ${
                            course.id === 1 ? 'text-lg' : 'text-sm'
                          }`}>
                            Learn More <ArrowRight className={`w-4 h-4 text-[#3B66AC]`} />
                          </a>
                        )}

                        {course.professional && !course.nextCohort && (
                          <span className="flex items-center gap-1.5 text-[10px] font-bold text-[#3B66AC] uppercase tracking-wider">
                            Professional
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </section>

      <section className="px-6 md:px-12 lg:px-24 mb-12">
        <div className="max-w-7xl mx-auto bg-[#3B66AC] rounded-[50px] p-12 md:p-20 text-center text-white relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-8">Ready to find your wing?</h2>
            <p className="text-white/80 text-xl mb-12 max-w-2xl mx-auto">
              Take our free placement test and get a personalized learning roadmap in under 10 minutes.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <button className="bg-white text-[#3B66AC] font-bold px-10 py-4 rounded-xl hover:bg-gray-100 transition shadow-xl">
                Take Placement Test
              </button>
              <button className="border-2 border-white/20 text-white font-bold px-10 py-4 rounded-xl hover:bg-white/10 transition">
                Book a Consultation
              </button>
            </div>
          </div>
          
          {/* Decorative Plane Icon (SVG) */}
          <div className="absolute top-1/2 right-10 -translate-y-1/2 opacity-10 pointer-events-none hidden lg:block">
            <svg width="300" height="300" viewBox="0 0 24 24" fill="white">
              <path d="M21 16.5L16 11.5L5 16.5V20.5L16 15.5L21 20.5V16.5Z" />
              <path d="M21 3.5L3 11.5V15.5L21 7.5V3.5Z" />
            </svg>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default CoursesPage;
