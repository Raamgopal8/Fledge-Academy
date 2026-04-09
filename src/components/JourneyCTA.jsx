import { useNavigate } from 'react-router-dom';

export default function JourneyCTA() {
  const navigate = useNavigate();
  return (
    <section className="w-full py-16 sm:py-24 px-6 bg-gradient-to-r from-emerald-300 via-teal-300 to-cyan-300 text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
          Ready to Start Your Journey?
        </h2>

        <p className="mt-4 text-lg text-gray-800">
          Join an academy where experienced mentors guide you through every step of the Japanese language and culture.
        </p>

        {/* <p className="mt-6 text-gray-700">
          At <span className="font-semibold">Fledge Academy</span>, we guide you
          with clarity, support, and a structured path that helps you move
          forward with confidence. <br />
          <span className="font-medium">Your journey can begin today.</span>
        </p> */}

        <div className="mt-10 flex flex-col items-center gap-3">
          <button 
            onClick={() => navigate('/contact')}
            className="bg-white text-gray-900 text-md font-semibold px-10 py-4 rounded-full shadow-md hover:shadow-lg transition cursor-pointer"
          >
            Book a Free Demo Class 
          </button>

          {/* <p className="text-sm text-gray-700">
            No pressure. No commitment. Just a chance to see if this is the right
            place for you.
          </p> */}
        </div>
      
      </div>
    </section>
  );
}
