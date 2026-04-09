import { FaPhoneAlt, FaEnvelope, FaGlobe } from "react-icons/fa";

export default function ContactSection() {
  return (
    <section className="w-full py-16 px-4 sm:px-6 md:px-12">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center">
          Ready to Start Your Journey?
        </h1>
        <p className="text-gray-500 text-center mt-2 sm:text-lg">
          Book your free trial class today and experience our teaching method.
        </p>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
          
          {/* FORM CARD */}
          <div className="bg-white border border-gray-100 shadow-xl rounded-2xl p-6 sm:p-8">
            <form action="https://formsubmit.co/fledgeacademy@gmail.com" method="POST">
              {/* Full Name */}
              <div className="mb-5">
                <label className="text-sm font-medium">Full Name</label>
                <input
                  type="text"
                  name="Full_Name"
                  placeholder="Enter your name"
                  className="mt-1 w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                  required
                />
              </div>

              {/* Email */}
              <div className="mb-5">
                <label className="text-sm font-medium">Email</label>
                <input
                  type="email"
                  name="Email"
                  placeholder="your@email.com"
                  className="mt-1 w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                  required
                />
              </div>

              {/* Phone */}
              <div className="mb-5">
                <label className="text-sm font-medium">Phone / WhatsApp</label>
                <input
                  type="text"
                  name="Phone"
                  placeholder="+91 XXXXX XXXXX"
                  className="mt-1 w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                  required
                />
              </div>

              {/* Interest */}
              <div className="mb-5">
                <label className="text-sm font-medium">Interest</label>
                <select 
                  name="Interest"
                  className="mt-1 w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                  required
                >
                  <option value="">Select your interest</option>
                  <option value="JLPT N5">JLPT N5</option>
                  <option value="JLPT N4">JLPT N4</option>
                  <option value="JLPT N3">JLPT N3</option>
                  <option value="Conversational Japanese">Conversational Japanese</option>
                </select>
              </div>

              {/* Message */}
              <div className="mb-6">
                <label className="text-sm font-medium">Message</label>
                <textarea
                  name="Message"
                  placeholder="Tell us about your goals..."
                  rows={4}
                  className="mt-1 w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="
                  w-full py-3 text-white font-semibold rounded-lg
                  bg-gradient-to-r from-blue-500 to-purple-500
                  hover:opacity-90 transition
                "
              >
                Book Free Trial
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
