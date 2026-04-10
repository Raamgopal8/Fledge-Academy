import React from 'react';
import { motion } from 'framer-motion';
import { Search, ChevronRight, Calendar, Clock, User, Mail } from 'lucide-react';
import Footer from './Footer';
import heroImage from '../assets/japanese_blog_hero.png';
import featuredImage from '../assets/japanese_student_success.png';

const BlogPage = () => {
  return (
    <div className="bg-white min-h-screen font-sans overflow-x-hidden">
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
              Blogs on The Way <br />
              <span className="text-[#3B66AC]"> Stay with us.</span>
            </h1>
            <p className="text-gray-500 text-lg max-w-2xl leading-relaxed">
              Insights, techniques, and stories from the heart of Japanese language mastery. Elevate your learning journey with curated academic perspectives.
            </p>
          </motion.div>
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
            <form 
              action="https://formsubmit.co/fledgeacademy@gmail.com" 
              method="POST"
              className="flex flex-col sm:flex-row gap-4 p-2 bg-[#F8F9FA] rounded-[24px] border border-gray-100"
            >
              {/* FormSubmit Configuration */}
              <input type="hidden" name="_subject" value="New Blog Subscription - Fledge Academy" />
              <input type="hidden" name="_captcha" value="false" />
              
              <input 
                type="email" 
                name="email"
                required
                placeholder="Email address" 
                className="flex-grow bg-transparent px-6 py-4 outline-none text-gray-800 placeholder:text-gray-400"
              />
              <button 
                type="submit"
                className="bg-[#3B66AC] hover:bg-[#2d4f85] text-white font-bold px-8 py-4 rounded-[18px] transition shadow-lg whitespace-nowrap"
              >
                Subscribe Now
              </button>
            </form>
          </div>
          
         
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default BlogPage;
