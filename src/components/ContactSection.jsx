import { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaGlobe } from "react-icons/fa";

export default function ContactSection() {
  const [occupation, setOccupation] = useState('Student');

  return (
    <section className="w-full py-16 px-4 sm:px-6 md:px-12 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-[#1A1A1A]">
          Ready to Start Your Journey?
        </h1>
        <p className="text-gray-500 text-center mt-4 sm:text-lg max-w-2xl mx-auto">
          Book your free trial class today and experience our unique teaching method that focuses on practical fluency.
        </p>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
          
          {/* FORM CARD */}
          <div className="bg-white border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.05)] rounded-[32px] p-8 sm:p-10">
            <form action="https://formsubmit.co/fledgeacademy@gmail.com" method="POST">
              {/* Occupation Toggle */}
              <div className="mb-8">
                <label className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-3 block">Are you a...?</label>
                <div className="flex p-1 bg-gray-50 rounded-xl border border-gray-100">
                  <button
                    type="button"
                    onClick={() => setOccupation('Student')}
                    className={`flex-1 py-3 rounded-lg text-sm font-bold transition-all ${
                      occupation === 'Student' ? 'bg-white text-[#3B66AC] shadow-sm ring-1 ring-black/5' : 'text-gray-400 hover:text-gray-600'
                    }`}
                  >
                    Student
                  </button>
                  <button
                    type="button"
                    onClick={() => setOccupation('Professional')}
                    className={`flex-1 py-3 rounded-lg text-sm font-bold transition-all ${
                      occupation === 'Professional' ? 'bg-white text-[#3B66AC] shadow-sm ring-1 ring-black/5' : 'text-gray-400 hover:text-gray-600'
                    }`}
                  >
                    Professional
                  </button>
                </div>
                <input type="hidden" name="Occupation" value={occupation} />
              </div>

              {/* Grid for Name and Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-2 block">Full Name</label>
                  <input
                    type="text"
                    name="Full_Name"
                    placeholder="your good name"
                    className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:border-[#3B66AC] focus:ring-0 transition-all placeholder:text-gray-300 text-sm"
                    required
                  />
                </div>
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-2 block">Email Address</label>
                  <input
                    type="email"
                    name="Email"
                    placeholder=""
                    className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:border-[#3B66AC] focus:ring-0 transition-all placeholder:text-gray-300 text-sm"
                    required
                  />
                </div>
              </div>

              {/* Location and Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-2 block">Phone / WhatsApp</label>
                  <input
                    type="text"
                    name="Phone"
                    placeholder=""
                    className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:border-[#3B66AC] focus:ring-0 transition-all placeholder:text-gray-300 text-sm"
                    required
                  />
                </div>
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-2 block">Your Location</label>
                  <input
                    type="text"
                    name="Location"
                    placeholder=""
                    className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:border-[#3B66AC] focus:ring-0 transition-all placeholder:text-gray-300 text-sm"
                    required
                  />
                </div>
              </div>

              {/* Interest */}
              <div className="mb-8">
                <label className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-2 block">What course are you interested in?</label>
                <select 
                  name="Interest"
                  className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:border-[#3B66AC] focus:ring-0 transition-all text-sm appearance-none"
                  required
                >
                  <option value="">Select a course</option>
                  <option value="JLPT N5">JLPT N5 – Beginner</option>
                  <option value="JLPT N4">JLPT N4 – Elementary</option>
                  <option value="JLPT N3">JLPT N3 – Intermediate</option>
                  <option value="Conversational Japanese">Conversational Japanese</option>
                  <option value="Junior Course">Junior Course (Grades 6-12)</option>
                </select>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-5 bg-[#3B66AC] hover:bg-[#2d4f85] text-white font-bold rounded-xl shadow-lg shadow-blue-200/50 transition-all transform active:scale-[0.98] uppercase tracking-[2px] text-xs"
              >
                Join With Us
              </button>
            </form>
          </div>

          {/* RIGHT SIDE CONTENT */}
          <div className="flex flex-col justify-start gap-8">

            {/* Contact Details */}
            <div className="space-y-6">

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-purple-100 rounded-lg">
                  <FaPhoneAlt className="text-purple-600 text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Phone / WhatsApp</h4>
                  <p className="text-gray-500 text-sm">+91 8072702576</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-purple-100 rounded-lg">
                  <FaEnvelope className="text-purple-600 text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Email</h4>
                  <p className="text-gray-500 text-sm">fledgeacademy@gmail.com</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-purple-100 rounded-lg">
                  <FaGlobe className="text-purple-600 text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Location</h4>
                  <p className="text-gray-500 text-sm">Online Classes</p>
                </div>
              </div>
            </div>

            {/* Quote Box */}
            <div className="
              mt-6 bg-purple-50 p-6 rounded-xl border border-purple-100
              shadow-md backdrop-blur-sm
            ">
              <p className="text-gray-600 italic text-sm">
                "You don't need talent to learn Japanese — just the right guidance."
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
