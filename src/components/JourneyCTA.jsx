export default function JourneyCTA() {
  return (
    <section className="w-full py-16 sm:py-24 px-6 bg-gradient-to-r from-emerald-300 via-teal-300 to-cyan-300 text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
          Ready to Start Your Journey?
        </h2>

        <p className="mt-4 text-lg text-gray-800">
          You don’t have to know everything to begin. <br />
          You only need the right place to learn, grow, and stay consistent.
        </p>

        {/* <p className="mt-6 text-gray-700">
          At <span className="font-semibold">Fledge Academy</span>, we guide you
          with clarity, support, and a structured path that helps you move
          forward with confidence. <br />
          <span className="font-medium">Your journey can begin today.</span>
        </p> */}

        <div className="mt-10 flex flex-col items-center gap-3">
          <button className="bg-white text-gray-900 text-md font-semibold px-10 py-4 rounded-full shadow-md hover:shadow-lg transition">
            Book a Free Trial Class
          </button>

          {/* <p className="text-sm text-gray-700">
            No pressure. No commitment. Just a chance to see if this is the right
            place for you.
          </p> */}
        </div>

        {/* Optional note (show only if space allows) */}
        <p className="mt-8 text-sm italic text-gray-700">
          “You’re not spending for just classes — <br />
          you’re investing in a skill that can shape your future for years.”
        </p>
      </div>
    </section>
  );
}
