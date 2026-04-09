import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Book, Users, Clock, Award, Star, ArrowRight, GraduationCap, Briefcase, Palette, Check } from 'lucide-react';
import Footer from './Footer';
import heroImage from '../assets/japanese_courses_hero.png';

const courses = [
  {
    id: 1,
    tier: 'Tier 01',
    title: 'Level N5: The Foundation',
    subtitle: 'The threshold of scholarly inquiry and pictographic discovery.',
    level: 'N5',
    kanji: '基',
    accentColor: 'linear-gradient(135deg, #3B66AC 0% 65%, #8ba3cd 65% 80%, #ffffff 80% 100%)',
    duration: '12 Weeks',
    type: 'JLPT Focused',
    description: 'Establish a rock-solid foundation in Hiragana, Katakana, and basic Kanji.',
    focusList: [
      'Hiragana & Katakana orthography',
      '100+ Essential Pictographic Kanji',
      'Rudimentary sentence architecture',
      'Functional daily lexicon'
    ],
    outcomeList: [
      'Comprehensive deciphering of basic instructional texts.',
      'Critical understanding of primary particle functions.',
      'Capacity for essential sociolinguistic introductions.',
      'Readiness for formal standardized evaluation (JLPT N5).'
    ],
    link: '#',
    isStitch: true,
    layout: 'left',
    buttonText: 'Begin the Path',
    buttonStyle: 'white'
  },
  {
    id: 2,
    tier: 'Tier 02',
    title: 'Level N4: Daily Fluency',
    subtitle: 'Articulating the mechanics of daily life with functional precision.',
    level: 'N4',
    kanji: '话',
    accentColor: 'linear-gradient(135deg, #1e3a6d 0% 65%, #4a6fa5 65% 80%, #ffffff 80% 100%)',
    duration: '16 Weeks',
    type: 'JLPT Focused',
    description: 'Bridge the gap between textbook Japanese and real-world fluency.',
    focusList: [
      '300+ Logographic variations',
      'Complex inflectional verb forms',
      'Honorific vs. Humble registers (Intro)',
      'Contextual listening semantics'
    ],
    outcomeList: [
      'Proficiency in navigating domestic transactional environments.',
      'Ability to articulate abstract personal desires and intent.',
      'Structural analysis of multi-clause syntactic chains.',
      'Confident attainment of the JLPT N4 benchmark.'
    ],
    link: '#',
    isStitch: true,
    layout: 'left',
    buttonText: 'Select Tier',
    buttonStyle: 'red'
  },
  {
    id: 3,
    tier: 'Tier 03',
    title: 'Level N3: The Bridge',
    subtitle: 'The pivotal transition from functional communication to scholarly editorial command.',
    level: 'N3',
    kanji: '桥',
    accentColor: 'linear-gradient(135deg, #0f2a52 0% 65%, #2d4a77 65% 80%, #ffffff 80% 100%)',
    duration: '20 Weeks',
    type: 'JLPT Focused',
    description: 'Mastering the mechanics of intermediate Japanese and subtle expression.',
    focusList: [
      '650+ Intermediate Scholarly Kanji',
      'Exegetical reading of news abstracts',
      'Nuanced logical connectors',
      'Professional Keigo foundations'
    ],
    outcomeList: [
      'Comprehension of specific technical and editorial topics.',
      'Integration into semi-professional Japanese discourse.',
      'Capacity to summarize complex narrative sequences.',
      'Secure mastery of the JLPT N3 transitional exam.'
    ],
    link: '#',
    isStitch: true,
    isRecommended: true,
    recommendedBadge: true,
    outcomeTheme: 'dark',
    focusDotColor: 'bg-red-500',
    outcomeHeaderColor: 'text-red-600',
    buttonText: 'Become a Scholar',
    buttonStyle: 'white',
    layout: 'left'
  },
  {
    id: 4,
    tier: 'Tier 04',
    title: 'Level N2: Mastery',
    subtitle: 'The height of editorial command and high-order philosophical fluency.',
    level: 'N2',
    kanji: '熟',
    accentColor: 'linear-gradient(135deg, #0a1e3d 0% 65%, #25406b 65% 80%, #ffffff 80% 100%)',
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
      'High-order professional fluency in corporate settings.',
      'Evaluative reading of complex academic journals.',
      'Nuanced participation in deep philosophical debate.',
      'Complete certification readiness for JLPT N2.'
    ],
    link: '#',
    isStitch: true,
    layout: 'left',
    buttonText: 'Select Tier',
    buttonStyle: 'white'
  },
];


const StitchCourseCard = ({ course, index }) => {
  const isLeft = course.layout === 'left';
  const { 
    recommendedBadge, 
    outcomeTheme = 'light', 
    focusDotColor = 'bg-blue-300/60',
    outcomeHeaderColor = 'text-[#3B66AC]'
  } = course;
  
  const FocusColumn = (
    <div key="focus" className="w-full lg:w-[32%] p-10 flex flex-col justify-center relative z-10 border-r border-gray-100/30">
      <h4 className="text-[10px] font-bold uppercase tracking-[3px] mb-8 text-white/70 flex items-center gap-3">
        <span className="w-6 h-[1px] bg-white/30"></span> Core Focus
      </h4>
      <ul className="space-y-5">
        {course.focusList.map((item, idx) => (
          <li key={idx} className="flex items-start gap-3.5 text-base font-medium text-white leading-relaxed group/item">
            <span className={`w-1.5 h-1.5 rounded-full mt-2 shrink-0 ${focusDotColor} transition-colors`}></span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );

  const OutcomeColumn = (
    <div key="outcome" className={`w-full lg:w-[35%] p-8 ${outcomeTheme === 'dark' ? 'bg-[#0a1e3d]/40' : 'bg-transparent'} flex items-center justify-center relative z-10`}>
      <div className={`w-full p-8 rounded-[36px] ${outcomeTheme === 'dark' ? 'bg-[#0f2a52] border-white/5 shadow-2xl shadow-black/20' : 'bg-white shadow-[0_10px_30px_-5px_rgba(0,0,0,0.05)] border-white/50'} border backdrop-blur-sm transition-all duration-500 group-hover:shadow-xl group-hover:-translate-y-1`}>
        <h4 className={`text-[10px] font-bold uppercase tracking-[2px] mb-8 ${outcomeTheme === 'dark' ? 'text-red-400' : outcomeHeaderColor} border-b border-gray-100/10 pb-4`}>
           Course Outcome
        </h4>
        <div className="space-y-5">
          {course.outcomeList.map((item, idx) => (
            <div key={idx} className={`flex items-start gap-4 text-sm font-medium ${outcomeTheme === 'dark' ? 'text-white/80' : 'text-gray-700'} leading-snug italic font-serif`}>
              <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${outcomeTheme === 'dark' ? 'bg-red-500/10 border-red-500/20' : 'bg-blue-50 border-blue-100'} border shadow-sm mt-0.5`}>
                <Check className={`w-2.5 h-2.5 ${outcomeTheme === 'dark' ? 'text-red-400' : 'text-[#3B66AC]'}`} />
              </div>
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const InfoColumn = (
    <div 
      key="info"
      className="w-full lg:w-[33%] p-10 flex flex-col justify-center relative z-10 text-white overflow-hidden"
    >
      {/* Decorative Grid Lines */}
      <div className="absolute bottom-0 right-0 w-32 h-32 opacity-10 pointer-events-none">
        <div className="w-full h-full border-r-[20px] border-b-[20px] border-white/20 border-dotted"></div>
      </div>

      <div className="relative z-20 h-full flex flex-col">
        <span className="text-[10px] font-black uppercase tracking-[5px] mb-4 text-white/40">
          {course.tier}
        </span>
        <h3 className="text-4xl font-bold mb-6 font-serif leading-tight text-white">
          {course.title}
        </h3>
        <p className="text-sm mb-12 italic font-serif opacity-80 leading-relaxed text-white">
          {course.subtitle}
        </p>
        
        <div className="mt-auto">
          <button className={`w-full ${
            course.buttonStyle === 'red' 
              ? 'bg-[#B91C1C] hover:bg-[#991B1B] text-white shadow-[#B91C1C]/20' 
              : 'bg-white hover:bg-gray-50 text-[#3B66AC] shadow-white/20'
            } text-[11px] font-bold py-4 rounded-xl transition-all duration-300 uppercase tracking-[3px] shadow-lg group-hover:scale-[1.02] active:scale-95`}
          >
            {course.buttonText}
          </button>
        </div>
      </div>
    </div>
  );

  const columns = isLeft ? [InfoColumn, FocusColumn, OutcomeColumn] : [FocusColumn, OutcomeColumn, InfoColumn];

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="lg:col-span-6 relative overflow-hidden group rounded-[40px] shadow-[0_20px_60px_-15px_rgba(15,35,68,0.15)] flex flex-col lg:flex-row min-h-[480px] bg-white transition-all duration-700 hover:shadow-2xl"
      style={{ background: course.accentColor }}
    >
      {recommendedBadge && (
        <div className="absolute top-0 right-0 z-30">
          <div className="bg-[#B91C1C] text-white text-[9px] font-black px-6 py-2.5 rounded-bl-2xl uppercase tracking-[2px] shadow-lg">
            Recommended Path
          </div>
        </div>
      )}

      {/* Background Kanji Watermark */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center opacity-[0.03]">
         <span className="text-[24rem] font-serif transition-transform duration-[2000ms] group-hover:scale-125 group-hover:rotate-6">
            {course.kanji}
         </span>
      </div>

      {columns}
    </motion.div>
  );
};

const CoursesPage = () => {
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
            className="flex-1 w-full flex justify-center lg:block"
          >
            <div className="rounded-[40px] overflow-hidden shadow-2xl h-[400px] relative group">
              <img 
                src={heroImage} 
                alt="Courses Hero" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-md p-6 rounded-2xl max-w-xs shadow-lg">
                <p className="text-xs text-gray-500">Courses Onboarding</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>


      <section className="px-6 md:px-12 lg:px-24 mb-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
          <AnimatePresence mode="wait">
            {courses.map((course, i) => {
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
      
    
      <Footer />
    </div>
  );
};

export default CoursesPage;
