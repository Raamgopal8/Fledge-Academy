import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, User, Mail, Phone, MapPin, GraduationCap, Briefcase, BookOpen } from 'lucide-react';
import { useModal } from '../context/ModalContext';

const EnrollmentModal = () => {
  const { isEnrollModalOpen, selectedCourse, closeModal } = useModal();
  const [occupation, setOccupation] = useState('Student');
  const [interest, setInterest] = useState('');

  useEffect(() => {
    if (selectedCourse) {
      setInterest(selectedCourse);
    } else {
      setInterest('');
    }
  }, [selectedCourse]);

  // FormSubmit.co URL
  const formAction = "https://formsubmit.co/fledgeacademy@gmail.com";

  return (
    <AnimatePresence>
      {isEnrollModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="bg-white w-full max-w-md rounded-3xl shadow-2xl overflow-hidden relative"
          >
            {/* Header */}
            <div className="bg-[#3B66AC] p-6 text-white relative">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 p-2 hover:bg-white/20 rounded-full transition-colors"
              >
                <X size={24} />
              </button>
              <h2 className="text-2xl font-bold">Enroll Now</h2>
              <p className="text-blue-100 text-sm mt-1">Join Fledge Academy today</p>
            </div>

            {/* Form */}
            <form action={formAction} method="POST" className="p-6 space-y-4">
              {/* Hidden Fields for FormSubmit */}
              <input type="hidden" name="_subject" value={`New Enrollment: ${selectedCourse || 'General'}`} />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="false" />

              {/* Full Name */}
              <div className="space-y-1">
                <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                  <User size={16} className="text-[#3B66AC]" /> Full Name
                </label>
                <input
                  type="text"
                  name="Full_Name"
                  required
                  placeholder=""
                  className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:border-[#3B66AC] focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                />
              </div>

              {/* Email */}
              <div className="space-y-1">
                <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                  <Mail size={16} className="text-[#3B66AC]" /> Email Address
                </label>
                <input
                  type="email"
                  name="Email"
                  required
                  placeholder=""
                  className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:border-[#3B66AC] focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                />
              </div>

              {/* Phone */}
              <div className="space-y-1">
                <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                  <Phone size={16} className="text-[#3B66AC]" /> Phone Number
                </label>
                <input
                  type="tel"
                  name="Phone"
                  required
                  placeholder=""
                  className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:border-[#3B66AC] focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                />
              </div>

              {/* Occupation - Clickable Options */}
              <div className="space-y-1">
                <label className="text-sm font-semibold text-gray-700">Occupation</label>
                <div className="flex gap-3">
                  <input type="hidden" name="Occupation" value={occupation} />
                  <button
                    type="button"
                    onClick={() => setOccupation('Student')}
                    className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-2xl border-2 transition-all ${
                      occupation === 'Student'
                        ? 'border-[#3B66AC] bg-blue-50 text-[#3B66AC]'
                        : 'border-gray-100 bg-gray-50 text-gray-500 hover:border-gray-200'
                    }`}
                  >
                    <GraduationCap size={18} /> Student
                  </button>
                  <button
                    type="button"
                    onClick={() => setOccupation('Professional')}
                    className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-2xl border-2 transition-all ${
                      occupation === 'Professional'
                        ? 'border-[#3B66AC] bg-blue-50 text-[#3B66AC]'
                        : 'border-gray-100 bg-gray-50 text-gray-500 hover:border-gray-200'
                    }`}
                  >
                    <Briefcase size={18} /> Professional
                  </button>
                </div>
              </div>

              {/* Location */}
              <div className="space-y-1">
                <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                  <MapPin size={16} className="text-[#3B66AC]" /> Location
                </label>
                <input
                  type="text"
                  name="Location"
                  required
                  placeholder=""
                  className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:border-[#3B66AC] focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                />
              </div>

              {/* Interest */}
              <div className="space-y-1">
                <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                  <BookOpen size={16} className="text-[#3B66AC]" /> Interested In
                </label>
                <select
                  name="Interest"
                  value={interest}
                  onChange={(e) => setInterest(e.target.value)}
                  className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:border-[#3B66AC] focus:ring-2 focus:ring-blue-100 outline-none transition-all appearance-none bg-white"
                >
                  <option value="">Select a Course</option>
                  <option value="JLPT N5 – Beginner Japanese Course">JLPT N5 – Beginner Japanese Course</option>
                  <option value="JLPT N4 – Elementary Japanese Course">JLPT N4 – Elementary Japanese Course</option>
                  <option value="JLPT N3 – Intermediate Japanese Course">JLPT N3 – Intermediate Japanese Course</option>
                  <option value="Conversation Course - Spoken Japanese & Culture">Conversation Course - Spoken Japanese & Culture</option>
                
                </select>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#3B66AC] text-white py-4 rounded-2xl font-bold text-lg hover:shadow-lg hover:shadow-blue-200 transform hover:-translate-y-1 transition-all mt-4"
              >
                Enroll Now
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default EnrollmentModal;
