import { useState } from "react";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full flex items-center justify-between px-6 md:px-10 lg:px-18 bg-white relative z-50 shadow-sm border-b border-gray-200">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <a href="/">
          <img src={logo} alt="Fledge Academy" className="h-25 w-auto" />
        </a>
      </div>

      {/* Desktop Menu Links */}
      <div className="hidden md:flex items-center gap-8 text-base text-gray-800">
        <a href="#why-learn-japanese" className="hover:text-black transition">Why Learn</a>
        <a href="#how-it-works" className="hover:text-black transition">How it works</a>
        <a href="#courses" className="hover:text-black transition">Courses</a>
        <a href="#testimonials" className="hover:text-black transition">Testimonials</a>
        <a href="/CoursesPricing" className="hover:text-black transition">Pricing</a>
        <a href="#faq" className="hover:text-black transition">FAQ</a>
      </div>

      {/* CTA Button */}
      <div className="hidden md:block">
        <button className="bg-cyan-500 text-white font-semibold px-6 py-3 rounded-lg transition">
          Book Slot
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
            <a href="#courses" className="hover:text-black transition py-2">Courses</a>
            <a href="#how-it-works" className="hover:text-black transition py-2">How it works</a>
            <a href="#testimonials" className="hover:text-black transition py-2">Testimonials</a>
            <a href="#pricing" className="hover:text-black transition py-2">Pricing</a>
            <a href="#faq" className="hover:text-black transition py-2">FAQ</a>
            <button className="bg-cyan-400 text-black font-semibold px-6 py-3 rounded-lg transition w-full mt-2">
              Book Slot
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
