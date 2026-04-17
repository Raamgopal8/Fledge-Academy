import { Link } from "react-router-dom";
import { FaInstagram, FaLinkedin, FaYoutube, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";
import logo from "../assets/fledgeacad.png";

export default function Footer() {
  return (
    <footer className="w-full bg-slate-50 border-t border-slate-200 pt-16 pb-8 relative overflow-hidden">
      {/* Decorative top accent line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#3B66AC] to-blue-400"></div>

      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row flex-wrap justify-between gap-12">
        {/* Brand */}
        <div className="w-full md:max-w-sm flex flex-col items-start">
          <Link to="/" className="inline-block -mt-16 -mb-6">
            <img
              src={logo}
              alt="Fledge Academy"
              className="h-56 w-auto object-contain object-top"
            />
          </Link>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            Empowering learners to become confident Japanese speakers through
            structured learning and practical methods.
          </p>
          <p className="text-[#3B66AC] font-semibold text-sm tracking-wide uppercase mt-2">
            Spread your knowledge like wings to fly !
          </p>
        </div>

        {/* Quick Links */}
        <div className="w-full md:w-auto md:mt-10">
          <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-wider text-sm">Explore</h4>
          <ul className="space-y-3 text-slate-600">
            {['Home', 'Courses', 'Blog', 'About', 'Contact'].map((item) => (
              <li key={item}>
                <Link 
                  to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`} 
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="hover:text-[#3B66AC] font-medium flex items-center group transition-colors"
                >
                  <span className="w-0 h-0.5 bg-[#3B66AC] mr-0 group-hover:w-3 group-hover:mr-2 transition-all duration-300"></span>
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="w-full md:w-auto md:mt-10">
          <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-wider text-sm">Get in Touch</h4>
          <ul className="space-y-4 text-slate-600">
            <li className="flex items-center gap-3 group hover:text-[#3B66AC] transition-colors cursor-pointer">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm group-hover:shadow text-[#3B66AC] shrink-0 transition-shadow">
                <FaPhoneAlt />
              </div>
              <span className="font-medium">+91 8072702576</span>
            </li>
            <li className="flex items-center gap-3 group hover:text-[#3B66AC] transition-colors cursor-pointer">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm group-hover:shadow text-[#3B66AC] shrink-0 transition-shadow">
                <FaEnvelope />
              </div>
              <span className="font-medium">fledgeacademy@gmail.com</span>
            </li>
            <li className="flex items-center gap-3 group hover:text-[#3B66AC] transition-colors cursor-pointer">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm group-hover:shadow text-[#3B66AC] shrink-0 transition-shadow">
                <FaMapMarkerAlt />
              </div>
              <span className="font-medium">Online Classes</span>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div className="w-full md:w-auto md:mt-10">
          <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-wider text-sm">Connect With Us</h4>
          <div className="flex gap-4">
            <a href="https://www.instagram.com/fledge_academy" className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-slate-500 hover:text-white hover:bg-gradient-to-tr hover:from-yellow-400 hover:via-pink-500 hover:to-purple-500 transition-all duration-300 hover:scale-110 hover:-translate-y-1">
              <FaInstagram size={24} />
            </a>
            <a href="https://www.linkedin.com/company/fledgeacademy" className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-slate-500 hover:text-white hover:bg-[#0077b5] transition-all duration-300 hover:scale-110 hover:-translate-y-1">
              <FaLinkedin size={24} />
            </a>
            <a href="https://www.youtube.com/@fledgeacademy" className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-slate-500 hover:text-white hover:bg-[#FF0000] transition-all duration-300 hover:scale-110 hover:-translate-y-1">
              <FaYoutube size={24} />
            </a>
            <a href="https://chat.whatsapp.com/GzS0x6vE0y..." target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-slate-500 hover:text-white hover:bg-[#25D366] transition-all duration-300 hover:scale-110 hover:-translate-y-1">
              <FaWhatsapp size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-slate-200">
        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          <p className="text-sm text-slate-500 font-medium">
            © {new Date().getFullYear()} Fledge Academy. All rights reserved.
          </p>
         
          {/* <div className="flex gap-6 text-sm font-medium text-slate-500 shadow-none">
            <a href="#" className="hover:text-[#3B66AC] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#3B66AC] transition-colors">Terms of Service</a>
          </div>
         */}

        </div>
      </div>
    </footer>
  );
}
