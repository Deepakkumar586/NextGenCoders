import React from "react";
import { FaStar } from "react-icons/fa";

const feedbacks = [
  {
    name: "Ankit Sharma",
    role: "CEO, TechSolutions",
    feedback:
      "Mizzle transformed our business with cutting-edge web solutions. The professionalism and expertise were top-notch!",
    rating: 5,
  },
  {
    name: "Priya Mehta",
    role: "Founder, InnovateX",
    feedback:
      "Their team delivered a flawless experience. Seamless collaboration, innovative ideas, and outstanding execution!",
    rating: 5,
  },
  {
    name: "Rahul Verma",
    role: "Marketing Head, DigitalBoost",
    feedback:
      "We saw a 60% increase in customer engagement after using Mizzle’s solutions. Highly recommended!",
    rating: 4.5,
  },
];

const Feedback = () => {
  return (
    <section className="bg-white py-16 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-extrabold mb-6 text-gray-900">
          See How We've Helped Our Clients Succeed
        </h2>
        <p className="text-lg text-gray-600 mb-12">
          More than <span className="font-semibold text-blue-400">10+</span>{" "}
          agencies are using <span className="text-blue-400 font-bold">Mizzle</span> to elevate their businesses.
        </p>

        {/* Feedback Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {feedbacks.map((feedback, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg transition-transform duration-300 transform  hover:scale-105 hover:shadow-2xl border-2 border-x border-gray-700 hover:border-blue-500"
            >
              <p className="text-md text-gray-600 italic">"{feedback.feedback}"</p>
              <div className="mt-4 flex justify-center gap-1 text-yellow-400">
                {Array.from({ length: Math.floor(feedback.rating) }, (_, i) => (
                  <FaStar key={i} />
                ))}
                {feedback.rating % 1 !== 0 && <FaStar className="opacity-50" />}
              </div>
              <h3 className="text-lg font-semibold mt-3 text-gray-900">{feedback.name}</h3>
              <p className="text-sm text-gray-700">{feedback.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feedback;
