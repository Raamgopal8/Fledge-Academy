import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Book, Users, Clock, Award, Star, ArrowRight } from 'lucide-react';
import Footer from './Footer';
import heroImage from '../assets/japanese_courses_hero.png';

const courses = [
  {
    id: 1,
    title: 'Beginner Japanese (N5)',
    level: 'N5',
    duration: '12 Weeks',
    type: 'JLPT Focused',
    description: 'Establish a rock-solid foundation in Hiragana, Katakana, and basic Kanji. Master daily survival phrases and essential grammar structures.',
    tags: ['Scripts Mastery', 'Daily Greetings', 'Basic Verbs'],
    link: '#',
  },
  {
    id: 2,
    title: 'Intermediate Conversation',
    level: 'N4-N3',
    duration: '16 Weeks',
    type: 'Conversation',
    description: 'Bridge the gap between textbook Japanese and real-world fluency. Focus on fluid expression and natural sentence structures.',
    nextCohort: 'Nov 15',
    link: '#',
  },
  {
    id: 3,
    title: 'Advanced Business Japanese',
    level: 'N2-N1',
    duration: '20 Weeks',
    type: 'JLPT Focused',
    description: 'Master Keigo (honorifics), professional email writing, and corporate etiquette for the Japanese workplace.',
    professional: true,
    link: '#',
  },
  {
    id: 4,
    title: 'Cultural Workshops',
    level: 'Artistic',
    duration: 'Flexible',
    type: 'Culture',
    description: 'Dive deep into calligraphy, tea ceremony, and history. Language learning is incomplete without its soul.',
    link: '#',
  },
];

const categories = ['All Courses', 'JLPT Focused', 'Conversation'];

const CoursesPage = () => {
  const [activeCategory, setActiveCategory] = useState('All Courses');

  const filteredCourses = activeCategory === 'All Courses' 
    ? courses 
    : courses.filter(c => c.type === activeCategory || (activeCategory === 'Conversation' && c.type === 'Culture')); 
    // Cultural workshops could fit in conversation or stay separate, but for the layout we'll match the design.

  return (
    <div className="bg-[#F8F9FA] min-h-screen font-sans overflow-x-hidden pb-12">
      {/* Hero Section */}
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
              Our curriculum blends traditional linguistic rigor with contemporary cultural immersion. Find the path that fits your ambition.
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

      {/* Filter Section */}
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

      {/* Courses Grid */}
      <section className="px-6 md:px-12 lg:px-24 mb-24">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8">
          <AnimatePresence mode="wait">
            {filteredCourses.map((course, i) => (
              <motion.div
                key={course.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
                className="bg-white rounded-[32px] p-8 md:p-12 shadow-sm border border-gray-50 flex flex-col justify-between hover:shadow-xl transition-shadow group h-full"
              >
                <div>
                  <div className="flex justify-between items-start mb-8">
                    <div className="flex gap-3">
                      <span className="bg-blue-50 text-[#3B66AC] text-[10px] font-bold tracking-widest px-3 py-1.5 rounded uppercase font-mono">
                        Level: {course.level}
                      </span>
                      <span className="text-gray-400 text-[10px] font-bold tracking-widest px-3 py-1.5 flex items-center gap-1.5 uppercase">
                        <Clock className="w-3 h-3" /> {course.duration}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-3xl font-extrabold text-[#1A1A1A] mb-6 group-hover:text-[#3B66AC] transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed mb-8 flex-grow">
                    {course.description}
                  </p>

                  {course.tags && (
                    <div className="flex flex-wrap gap-2 mb-8">
                      {course.tags.map(tag => (
                        <span key={tag} className="bg-gray-50 text-gray-500 text-[10px] font-bold px-3 py-1.5 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {course.nextCohort && (
                     <div className="bg-[#F8F9FA] p-4 rounded-2xl mb-8 flex justify-between items-center">
                        <p className="text-xs font-bold text-gray-400">Next Cohort</p>
                        <p className="text-sm font-extrabold text-[#1A1A1A]">{course.nextCohort}</p>
                     </div>
                  )}
                </div>

                <div className="flex items-center justify-between mt-4">
                  <a href={course.link} className="flex items-center gap-2 text-sm font-bold text-[#1A1A1A] hover:gap-4 transition-all">
                    Learn More <ArrowRight className="w-4 h-4 text-[#3B66AC]" />
                  </a>
                  {course.professional && (
                    <span className="flex items-center gap-1.5 text-[10px] font-bold text-[#3B66AC] uppercase tracking-wider">
                      <Star className="w-3 h-3 fill-[#3B66AC]" /> Professional
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* CTA Section */}
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
