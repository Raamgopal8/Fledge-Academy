import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;
  const linkClass = (path) => `hover:text-blue-600 transition ${isActive(path) ? 'text-blue-600 border-b-2 border-blue-600 pb-1' : ''}`;

  return (
    <nav className="w-full flex items-center justify-between px-6 md:px-10 lg:px-18 bg-white relative z-50 shadow-sm border-b border-gray-200">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <a href="/">
          <img src={logo} alt="Fledge Academy" className="h-25 w-auto" />
        </a>
      </div>

      {/* Desktop Menu Links */}
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
        <Link to="/" className={linkClass("/")}>Home</Link>
        <Link to="/courses" className={linkClass("/courses")}>Courses</Link>
        <Link to="/blog" className={linkClass("/blog")}>Blog</Link>
        <Link to="/about" className={linkClass("/about")}>About</Link>
        <Link to="/contact" className={linkClass("/contact")}>Contact</Link>
      </div>

      {/* CTA Button */}
      <div className="hidden md:block">
        <button className="bg-[#3B66AC] hover:bg-[#2d4f85] text-white font-semibold px-6 py-2 rounded-md transition text-sm">
          Enroll Now
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button 
        className="md:hidden flex flex-col gap-1.5 p-2"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        <span className={`w-6 h-0.5 bg-gray-700 transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
        <span className={`w-6 h-0.5 bg-gray-700 transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
        <span className={`w-6 h-0.5 bg-gray-700 transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg md:hidden">
          <div className="flex flex-col gap-4 p-6 text-gray-800">
            <Link to="/" className="hover:text-blue-600 transition py-2" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link to="/courses" className="hover:text-blue-600 transition py-2" onClick={() => setIsMenuOpen(false)}>Courses</Link>
            <Link to="/blog" className="hover:text-blue-600 transition py-2" onClick={() => setIsMenuOpen(false)}>Blog</Link>
            <Link to="/about" className="hover:text-blue-600 transition py-2 font-bold" onClick={() => setIsMenuOpen(false)}>About</Link>
            <Link to="/contact" className="hover:text-blue-600 transition py-2" onClick={() => setIsMenuOpen(false)}>Contact</Link>
            <button className="bg-[#3B66AC] text-white font-semibold px-6 py-3 rounded-lg transition w-full mt-2">
              Enroll Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
