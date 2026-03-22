import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Rocket, BookOpen, Globe, Users, Brain, ArrowRight } from 'lucide-react';
import Footer from './Footer';
import heroImage from '../assets/japanese_garden_house.png';

const stats = [
  { label: 'YEARS', value: '12+', subtext: 'OF EXCELLENCE' },
  { label: 'GRADUATED', value: '5k+', subtext: 'SCHOLARS' },
  { label: 'PASS RATE', value: '98%', subtext: 'JLPT SUCCESS' },
];

const philosophy = [
  {
    title: 'Academic Rigor',
    description: 'We maintain high linguistic standards, focusing on the structural precision of the Japanese language. Our curriculum is designed by PhD holders and certified native experts to ensure your foundation is unbreakable.',
    icon: <BookOpen className="w-6 h-6 text-blue-600" />,
  },
  {
    title: 'Cultural Soul',
    description: '“To learn a language is to have one more window from which to look at the world.” We integrate deep cultural insights into every lesson, making language more than just words—it\'s a living experience.',
    icon: <Globe className="w-6 h-6 text-blue-600" />,
  },
  {
    title: 'Intimate Cohorts',
    description: 'Small class sizes ensure every student receives personalized mentorship, leveraging the traditional Japanese apprentice-master relationship to accelerate learning and provide direct feedback.',
    icon: <Users className="w-6 h-6 text-blue-600" />,
  },
  {
    title: 'Cognitive Immersion',
    description: 'Our methods leverage neuroscientific principles of spaced repetition and contextual association, making complex Kanji and grammar patterns second nature to our students.',
    icon: <Brain className="w-6 h-6 text-blue-600" />,
  },
];

const AboutPage = () => {
  return (
    <div className="bg-[#F8F9FA] min-h-screen font-sans overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            <span className="text-blue-600 font-bold text-xs tracking-widest uppercase mb-4 block">Who We Are</span>
            <h1 className="text-5xl md:text-6xl font-extrabold text-[#1A1A1A] leading-tight mb-6">
              Pioneering the Path <br /> to <span className="text-[#3B66AC]">Fluency.</span>
            </h1>
            <p className="text-gray-600 text-lg max-w-xl leading-relaxed mb-10">
              Fledge Academy was founded in Tokyo by a collective of educators and linguists who recognized a gap in traditional language instruction. We don't just teach Japanese; we help you find your voice within it.
            </p>
            
            <div className="flex gap-12">
              {stats.map((stat, i) => (
                <div key={i}>
                  <p className="text-3xl font-extrabold text-[#3B66AC]">{stat.value}</p>
                  <p className="text-[10px] font-bold text-gray-400 tracking-widest mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl relative">
              <img 
                src={heroImage} 
                alt="Japanese Garden" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-6 left-6 right-6 bg-[#3B66AC]/90 backdrop-blur-md p-6 rounded-2xl text-white">
                <p className="text-sm font-medium italic">
                  "We began as a small research lab dedicated to Contextual Fluency."
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white p-12 rounded-[40px] shadow-sm border border-gray-100 flex flex-col items-start"
          >
            <div className="bg-blue-50 p-4 rounded-2xl mb-8">
              <Eye className="w-8 h-8 text-[#3B66AC]" />
            </div>
            <h3 className="text-2xl font-bold mb-6 text-[#1A1A1A]">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              To become the global gold standard for contextual language learning, where every student transcends basic communication to achieve profound cultural resonance and intellectual depth.
            </p>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-[#3B66AC] p-12 rounded-[40px] shadow-xl flex flex-col items-start text-white relative overflow-hidden"
          >
            <div className="bg-white/10 p-4 rounded-2xl mb-8 backdrop-blur-sm">
              <Rocket className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-6">Our Mission</h3>
            <p className="text-white/90 leading-relaxed text-lg">
              To elevate Japanese language mastery to an art form. We bridge cultures by fostering deep cultural empathy and providing the tools for boundless intellectual potential through academic excellence.
            </p>
            {/* Subtle decorative element */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
          </motion.div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-extrabold text-[#1A1A1A] mb-4">Our Philosophy</h2>
          <p className="text-gray-500 italic">The pillars that define the Fledge Academy experience</p>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          {philosophy.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex gap-6 items-start p-8 rounded-3xl hover:bg-[#F8F9FA] transition-colors"
            >
              <div className="bg-blue-50 p-4 rounded-xl flex-shrink-0">
                {item.icon}
              </div>
              <div>
                <h4 className="text-xl font-bold text-[#1A1A1A] mb-3">{item.title}</h4>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto bg-[#3B66AC] rounded-[50px] p-12 md:p-24 text-center text-white relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-8">Ready to begin?</h2>
            <p className="text-white/80 text-xl mb-12 max-w-2xl mx-auto">
              Join a global community of scholars dedicated to linguistic excellence and cultural discovery.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <button className="bg-white text-[#3B66AC] font-bold px-10 py-4 rounded-full hover:bg-gray-100 transition shadow-xl">
                Start Free Trial
              </button>
              <button className="border-2 border-white/30 text-white font-bold px-10 py-4 rounded-full hover:bg-white/10 transition">
                Explore Courses
              </button>
            </div>
          </div>
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-[120px] -mr-48 -mt-48"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-[120px] -ml-48 -mb-48"></div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AboutPage;
