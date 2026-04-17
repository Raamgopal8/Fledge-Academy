import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Users, Tag, ChevronRight } from 'lucide-react';
import poster1 from "../assets/image1.png";
import Footer from './Footer';

const events = [
  {
    id: 1,
    title: 'The Importance of Learning Foreign Languages in Today’s World',
    date: 'April 21, 2026',
    time: '7:00 PM – 8:30 PM IST',
    location: 'Online (Zoom)',
    type: 'Webinar',
  
    description:
      'Who can attend : School Students, College Students, Language Enthusiasts',
    color: 'bg-blue-50 border-blue-100',
    accentColor: '#3B66AC',
    badge: 'bg-blue-100 text-blue-700',
    icon: '📝',
    image: poster1,
  }
];

const categories = ['All', 'Webinar', 'Workshop', 'Cultural', 'Demo'];

const EventsPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered =
    activeCategory === 'All'
      ? events
      : events.filter((e) => e.type === activeCategory);

  return (
    <div className="bg-white min-h-screen font-sans overflow-x-hidden">
      {/* ─── Hero ─── */}
      <section className="relative pt-32 pb-4 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <span className="text-[#3B66AC] font-bold text-xs tracking-widest uppercase mb-4 block">
              Community &amp; Growth
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-[#1A1A1A] leading-tight mb-6">
              Events & Community <br />
              <span className="text-[#3B66AC]">Connect, Learn, &amp; Thrive.</span>
            </h1>
            <p className="text-gray-500 text-lg max-w-2xl leading-relaxed mb-8">
              Step beyond the classroom into a space built for steady growth. Explore live workshops, cultural sessions, and a supportive community that guides your journey with purpose.
            </p>
            
          </motion.div>
        </div>
      </section>

      {/* ─── Category Filter ─── */}
      <section className="px-6 md:px-12 lg:px-24 mb-4">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold border transition ${
                activeCategory === cat
                  ? 'bg-[#3B66AC] text-white border-[#3B66AC] shadow-md'
                  : 'bg-white text-gray-600 border-gray-200 hover:border-[#3B66AC] hover:text-[#3B66AC]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* ─── Events Grid ─── */}
      <section className="px-6 md:px-12 lg:px-24 mb-24">
        <div className="max-w-7xl mx-auto flex flex-col gap-8">
          {filtered.map((event, i) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`group flex flex-col md:flex-row bg-white rounded-[40px] border border-gray-100 shadow-sm overflow-hidden hover:shadow-xl transition-all duration-500`}
            >
              {/* Left Column: Image/Poster */}
              <div 
                className={`md:w-1/3 relative flex items-center justify-center overflow-hidden transition-all group-hover:scale-105 duration-700 ${event.color.split(' ')[0]}`}
                style={{ borderRight: '1px solid rgba(0,0,0,0.03)' }}
              >
                {event.image ? (
                  <div className="absolute inset-0 w-full h-full flex items-center justify-center bg-gray-50">
                    {/* Blurred Background */}
                    <img 
                      src={event.image} 
                      alt="" 
                      className="absolute inset-0 w-full h-full object-cover blur-xl opacity-30 scale-110"
                    />
                    {/* Main Image */}
                    <img 
                      src={event.image} 
                      alt={event.title} 
                      className="relative z-10 w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 z-20 bg-gradient-to-r from-transparent to-white/5 group-hover:to-transparent transition-all duration-500"></div>
                  </div>
                ) : (
                  <div className="relative">
                    <span className="text-9xl mb-4 block drop-shadow-sm select-none">
                      {event.icon}
                    </span>
                    <div className="absolute inset-0 bg-white/5 backdrop-blur-[1px] rounded-full scale-150 -z-10 opacity-30"></div>
                  </div>
                )}
              </div>

              {/* Right Column: Details */}
              <div className="flex-1 p-8 md:p-12 flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-[10px] font-black uppercase tracking-[3px] px-3 py-1.5 rounded-lg border ${event.badge}`}>
                    {event.type}
                  </span>
                  <div className="flex items-center gap-2 text-sm font-semibold text-white bg-[#3B66AC] hover:bg-[#2d4f85] px-6 py-2 rounded-md transition duration-300 shadow-sm">
                    <Users className="w-4 h-4" />
                    {event.seats} Free
                  </div>
                </div>

                <h3 className="text-3xl font-extrabold text-[#1A1A1A] leading-tight mb-4 group-hover:text-[#3B66AC] transition-colors">
                  {event.title}
                </h3>

                <p className="text-gray-500 text-base leading-relaxed mb-8 max-w-2xl">
                  {event.description}
                </p>

                <div className="mt-auto grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-gray-50">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center border border-gray-100">
                      <Calendar className="w-5 h-5 text-[#3B66AC]" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Date</p>
                      <p className="text-sm font-extrabold text-[#1A1A1A]">{event.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center border border-gray-100">
                      <Clock className="w-5 h-5 text-[#3B66AC]" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Time</p>
                      <p className="text-sm font-extrabold text-[#1A1A1A]">{event.time}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center border border-gray-100">
                      <MapPin className="w-5 h-5 text-[#3B66AC]" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Venue</p>
                      <p className="text-sm font-extrabold text-[#1A1A1A]">{event.location}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex items-center justify-between pointer-events-none">
                  <motion.a
                    href="https://forms.gle/iR8HxecFoVLGahu68"
                    className="pointer-events-auto inline-flex items-center gap-3 bg-[#1A1A1A] hover:bg-[#3B66AC] text-white font-bold px-8 py-4 rounded-2xl transition-all shadow-lg group/btn hover:-translate-y-1"
                  >
                    Register Now
                    <ChevronRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="max-w-7xl mx-auto text-center py-20 text-gray-400 text-lg">
            No events in this category right now. Check back soon!
          </div>
        )}
      </section>

      {/* ─── Community Section ─── */}
      <section className="px-6 md:px-12 lg:px-24 mb-12">
        <div className="max-w-7xl mx-auto bg-[#3B66AC] rounded-[50px] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-xl">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-8">
              Join The Fledge Community
            </h2>
            <p className="text-white/80 text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
              Don’t study alone. Join our WhatsApp community to clear doubts with mentors and connect with fellow professionals. It’s your space for study materials, cultural workshops, and early job alerts. Stay connected, stay disciplined, and grow with a community that cares about your success.
            </p>
            <div className="flex justify-center">
              <a
                href="https://chat.whatsapp.com/LJCMHmRk4n66iR7smHksxJ"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[#3B66AC] font-bold px-10 py-4 rounded-xl hover:bg-gray-100 transition shadow-xl inline-flex items-center gap-3 group text-lg"
              >
                Join WhatsApp Community
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
          
          {/* Decorative Plane Icon (SVG) - Matching CoursesPage */}
          <div className="absolute top-1/2 right-10 -translate-y-1/2 opacity-10 pointer-events-none hidden lg:block">
            <svg width="300" height="300" viewBox="0 0 24 24" fill="white">
              <path d="M21 16.5L16 11.5L5 16.5V20.5L16 15.5L21 20.5V16.5Z" />
              <path d="M21 3.5L3 11.5V15.5L21 7.5V3.5Z" />
            </svg>
          </div>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <Footer />
    </div>
  );
};

export default EventsPage;
