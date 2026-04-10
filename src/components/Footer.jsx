import { Link } from "react-router-dom";
import { FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2">
           
              <Link to="/">
                <img
                  src={logo}
                  alt="Fledge Academy"
                  className="h-20 w-auto"
                />
              </Link>
            
          </div>
         
          <p className="text-sm text-gray-600 mt-4 leading-relaxed">
            Empowering learners to become confident Japanese speakers through
            structured learning and practical methods.
          </p>
           <h1 className="text-sm text-gray-600 mt-4 leading-relaxed">
            Spreading your Knowledge like wings to fly ! 
          </h1>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold text-gray-900 mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><Link to="/" className="hover:text-gray-900 transition-colors">Home</Link></li>
            <li><Link to="/courses" className="hover:text-gray-900 transition-colors">Courses</Link></li>
            <li><Link to="/blog" className="hover:text-gray-900 transition-colors">Blog</Link></li>
            <li><Link to="/about" className="hover:text-gray-900 transition-colors">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-gray-900 transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold text-gray-900 mb-4">Contact</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>📞 +91 8072702576</li>
            <li>✉️ fledgeacademy@gmail.com</li>
            <li>📍 Online Classes</li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="font-semibold text-gray-900 mb-4">Follow Us</h4>
          <div className="flex gap-4 text-gray-600 text-lg">
            <FaInstagram className="hover:text-gray-900 cursor-pointer" />
            <FaLinkedin className="hover:text-gray-900 cursor-pointer" />
            <FaYoutube className="hover:text-gray-900 cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 py-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Fledge Academy. All rights reserved.
      </div>
    </footer>
  );
}
