import React from 'react';
import { motion } from 'framer-motion';
import { Search, ChevronRight, Calendar, Clock, User, Mail } from 'lucide-react';
import Footer from './Footer';
import heroImage from '../assets/japanese_blog_hero.png';
import featuredImage from '../assets/japanese_student_success.png';

const posts = [
  {
    id: 1,
    title: 'Mastering Hiragana in a Week: The Accelerated Visual Mnemonics Guide',
    excerpt: 'Forget rote memorization. Our neurological approach to Hiragana uses visual hooks to anchor characters in your...',
    category: 'GUIDES',
    date: 'Mar 12, 2024',
    readTime: '6 min read',
    author: 'Takeshi Honda',
    thumbnail: 'https://images.unsplash.com/photo-1528659097888-1b97a7102ad1?auto=format&fit=crop&q=80&w=400', // Fallback or placeholder
  },
  {
    id: 2,
    title: 'Common Japanese Phrases for Travelers: Beyond "Konnichiwa"',
    excerpt: 'Navigate Japan with confidence. We\'ve compiled the essential social lubricants that open doors and hearts...',
    category: 'TRAVEL',
    date: 'Mar 10, 2024',
    readTime: '8 min read',
    author: 'Elena Mitaz',
    thumbnail: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: 3,
    title: 'The Etiquette of the Tea Ceremony: Understanding "Wa"',
    excerpt: 'Language is more than words; it\'s movement. Discover how the concept of harmony shapes Japanese...',
    category: 'CULTURE',
    date: 'Mar 08, 2024',
    readTime: '10 min read',
    author: 'Kenji Fujita',
    thumbnail: 'https://images.unsplash.com/photo-1545048702-793e24de4c27?auto=format&fit=crop&q=80&w=400',
  },
];

const BlogPage = () => {
  return (
    <div className="bg-[#F8F9FA] min-h-screen font-sans overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-12 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <span className="text-[#3B66AC] font-bold text-xs tracking-widest uppercase mb-4 block">Knowledge Hub</span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-[#1A1A1A] leading-tight mb-6">
              The Scholarly <br />
              <span className="text-[#3B66AC]">Horizon.</span>
            </h1>
            <p className="text-gray-500 text-lg max-w-2xl leading-relaxed">
              Insights, techniques, and stories from the heart of Japanese language mastery. Elevate your learning journey with curated academic perspectives.
            </p>
          </motion.div>

          {/* Featured Post */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-[40px] overflow-hidden shadow-sm border border-gray-100 flex flex-col lg:flex-row mb-24 hover:shadow-xl transition-shadow group"
          >
            <div className="lg:w-1/2 h-[400px] lg:h-auto overflow-hidden">
              <img 
                src={featuredImage} 
                alt="Featured Post" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              />
            </div>
            <div className="lg:w-1/2 p-12 md:p-16 flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-6">
                 <span className="bg-blue-50 text-[#3B66AC] text-[10px] font-bold tracking-widest px-3 py-1.5 rounded uppercase">Student Success</span>
                 <span className="text-gray-400 text-[10px] font-bold">March 14, 2024</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] mb-6 leading-tight group-hover:text-[#3B66AC] transition-colors">
                Student Success Spotlight: From Beginner to N2 in 18 Months
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-10">
                Meet Sarah Jenkins, whose dedication to the Fledge method redefined her career trajectory. Learn the specific habits that fueled her rapid progress and how she integrated Japanese into her daily life.
              </p>
              <a href="#" className="flex items-center gap-2 text-sm font-bold text-[#1A1A1A] hover:gap-4 transition-all w-fit">
                Read Full Story <ChevronRight className="w-4 h-4 text-[#3B66AC]" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Latest Publications */}
      <section className="px-6 md:px-12 lg:px-24 mb-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-3xl font-extrabold text-[#1A1A1A]">Latest Publications</h2>
            <div className="flex gap-4">
              <button className="p-3 rounded-full bg-white border border-gray-100 shadow-sm hover:bg-gray-50 transition text-gray-400">
                <ChevronRight className="w-5 h-5 rotate-180" />
              </button>
              <button className="p-3 rounded-full bg-white border border-gray-100 shadow-sm hover:bg-gray-50 transition text-gray-400">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {posts.map((post, i) => (
              <motion.div 
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-[32px] overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-shadow group flex flex-col h-full"
              >
                <div className="h-56 overflow-hidden relative">
                  <img src={post.thumbnail} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-[10px] font-bold tracking-widest px-3 py-1.5 rounded-lg text-[#1A1A1A]">
                    {post.category}
                  </span>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-xl font-extrabold text-[#1A1A1A] mb-4 leading-tight group-hover:text-[#3B66AC] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-grow">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-6 border-t border-gray-50">
                    <div className="flex items-center gap-2">
                       <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-[10px] font-bold text-[#3B66AC]">
                         {post.author.charAt(0)}
                       </div>
                       <span className="text-[10px] font-bold text-gray-400">{post.author}</span>
                    </div>
                    <span className="text-[10px] font-bold text-gray-300 uppercase tracking-tighter">{post.readTime}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="px-6 md:px-12 lg:px-24 mb-24">
        <div className="max-w-7xl mx-auto bg-white rounded-[40px] p-12 md:p-20 shadow-sm border border-gray-100 flex flex-col md:flex-row items-center gap-12 relative overflow-hidden">
          <div className="flex-1 relative z-10">
            <h2 className="text-4xl font-extrabold text-[#1A1A1A] mb-6">Expand Your Horizon</h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              Receive weekly linguistic deep-dives, cultural essays, and exclusive student resources directly in your inbox.
            </p>
          </div>
          <div className="flex-1 w-full relative z-10">
            <form className="flex flex-col sm:flex-row gap-4 p-2 bg-[#F8F9FA] rounded-[24px] border border-gray-100">
              <input 
                type="email" 
                placeholder="Email address" 
                className="flex-grow bg-transparent px-6 py-4 outline-none text-gray-800 placeholder:text-gray-400"
              />
              <button className="bg-[#3B66AC] hover:bg-[#2d4f85] text-white font-bold px-8 py-4 rounded-[18px] transition shadow-lg whitespace-nowrap">
                Subscribe Now
              </button>
            </form>
          </div>
          
          {/* Subtle Background Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50/50 rounded-full blur-3xl -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gray-50 rounded-full blur-3xl -ml-32 -mb-32"></div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default BlogPage;
