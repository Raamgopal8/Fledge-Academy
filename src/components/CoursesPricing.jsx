import { useState } from "react";

export default function CoursesPricing() {
  const [billing, setBilling] = useState("monthly");

  return (
    <section className="relative bg-gradient-to-b from-[#f5f8ff] to-[#e8f0ff] py-10">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 px-4">
        <h1 className="text-4xl md:text-5xl font-semibold text-slate-900">
          Plans that work best for your{" "}
          <span className="relative inline-block">
            <span className="absolute inset-0 bg-blue-200 rounded-lg -z-10" />
            Learning
          </span>
        </h1>
        

        {/* Toggle */}
        {/* <div className="mt-6 flex justify-center">
          <div className="flex items-center bg-white rounded-full p-1 shadow-md">
            <button
              onClick={() => setBilling("monthly")}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition ${
                billing === "monthly"
                  ? "bg-blue-600 text-white shadow"
                  : "text-slate-500"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBilling("yearly")}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition ${
                billing === "yearly"
                  ? "bg-blue-600 text-white shadow"
                  : "text-slate-500"
              }`}
            >
              Yearly
              <span className="ml-2 text-xs bg-slate-100 px-2 py-0.5 rounded-full">
                Save 20%
              </span>
            </button>
          </div>
        </div> */}
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        {/* Junior N5 */}
        <PricingCard
          title="Junior N5 Course"
          subtitle="Grades 6 – 12"
          price="₹1,999"
          description="Perfect for school students starting Japanese"
          buttonStyle="dark"
          features={[
            "Basic Hiragana & Katakana",
            "Daily vocabulary practice",
            "Weekly live classes",
            "Fun quizzes & worksheets",
          ]}
          extras={[
            "Beginner-friendly lessons",
            "Parent progress reports",
            "Certificate of completion",
          ]}
        />

        {/* N5 College */}
        <PricingCard
          popular
          title="N5 Course"
          subtitle="College Students & Professionals"
          price="₹3,999"
          description="Best value for serious Japanese learners"
          buttonStyle="primary"
          features={[
            "Complete JLPT N5 syllabus",
            "Grammar + sentence building",
            "Speaking & listening practice",
            "Mock JLPT tests",
          ]}
          extras={[
            "Advanced practice sets",
            "Doubt-clearing sessions",
            "Career guidance",
          ]}
        />

        {/* N4 */}
        <PricingCard
          title="JLPT N4 Course"
          subtitle="Elementary Level"
          price="₹6,999"
          description="Advance your Japanese to professional basics"
          buttonStyle="dark"
          features={[
            "Full JLPT N4 syllabus",
            "Kanji & reading mastery",
            "Conversation training",
            "JLPT exam strategy",
          ]}
          extras={[
            "Multi-level mock exams",
            "Speaking evaluation",
            "Instructor feedback",
          ]}
        />
      </div>
      <p className="mt-4 text-center pt-5 text-slate-600">
          Trusted by students across India. Choose the Japanese course that
          matches your level and goals.
        </p>
    </section>
  );
}

/* Card Component */
function PricingCard({
  title,
  subtitle,
  price,
  description,
  features,
  extras,
  popular,
  buttonStyle,
}) {
  return (
    <div
      className={`relative rounded-2xl bg-white p-8 shadow-lg border ${
        popular ? "border-blue-500 ring-2 ring-blue-400" : "border-slate-200"
      }`}
    >
      {popular && (
        <span className="absolute top-4 right-4 bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
          Popular
        </span>
      )}

      <h3 className="text-2xl font-bold text-slate-900">{title}</h3>
      <p className="text-sm text-slate-500 mt-1">{subtitle}</p>
      <p className="mt-4 text-slate-600 text-sm">{description}</p>

      <div className="mt-6">
        <span className="text-4xl font-bold text-slate-900">{price}</span>
        <span className="text-slate-500 text-sm"> / course</span>
      </div>

      <button
        className={`mt-6 w-full py-3 rounded-xl font-semibold transition ${
          buttonStyle === "primary"
            ? "bg-blue-600 text-white shadow-lg hover:bg-blue-700"
            : "bg-slate-700 text-white hover:bg-slate-800"
        }`}
      >
        Get started
      </button>

      <ul className="mt-8 space-y-3 text-sm text-slate-600">
        {features.map((item, i) => (
          <li key={i} className="flex items-center gap-3">
            <CheckIcon />
            {item}
          </li>
        ))}
      </ul>

      <div className="mt-6 pt-6 border-t border-slate-200">
        <p className="text-sm font-semibold text-slate-700 mb-3">
          Everything includes:
        </p>
        <ul className="space-y-3 text-sm text-slate-600">
          {extras.map((item, i) => (
            <li key={i} className="flex items-center gap-3">
              <CheckIcon />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/* Check Icon */
function CheckIcon() {
  return (
    <span className="flex items-center justify-center w-5 h-5 rounded-full bg-blue-100 text-blue-600 text-xs font-bold">
      ✓
    </span>
  );
}
