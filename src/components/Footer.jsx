import { FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2">
           
              <a href="/">
                <img
                  src={logo}
                  alt="Fledge Academy"
                  className="h-15 w-auto"
                />
              </a>
            
          </div>
          <p className="text-sm text-gray-600 mt-4 leading-relaxed">
            Empowering learners to become confident Japanese speakers through
            structured learning and practical methods.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold text-gray-900 mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="hover:text-gray-900 cursor-pointer">About Us</li>
            <li className="hover:text-gray-900 cursor-pointer">Our Courses</li>
            <li className="hover:text-gray-900 cursor-pointer">
              Why Learn Japanese
            </li>
            <li className="hover:text-gray-900 cursor-pointer">FAQ</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold text-gray-900 mb-4">Contact</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>📞 +91 9XXXXXXXXX</li>
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
