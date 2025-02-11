import React from "react";
import Meetings1 from "../assets/Meetings1.jpg";
import Meetings2 from "../assets/Meetings2.jpg";

const sections = [
  {
    title: "The Role of IT Services in Business",
    text: "In today's expeditious business world, IT services are the unsung heroes that keep operations running smoothly. From facilitating irrevocable transactions in coffee shops to driving strategic decision-making and cyber security efforts, IT services are the backbone of every business. They render communication, streamline processes, and safeguard sensitive data, ensuring that businesses can thrive in an increasingly digital landscape. Simply put, without IT services, businesses would struggle to function efficiently and securely in the digital age.",
    img: Meetings1,
    reverse: false,
  },
  {
    title: "The Contribution of IT Services to Increased Output",
    text: "In the zestful field of business, IT services are the secret ingredient that fuels productivity and drives success. They are the silent champions behind the scenes, working tirelessly to elevate output and propel businesses to new heights. IT Services have been automating repetitive tasks to streamlining workflows since a decade. They turbocharge efficiency and boost output. IT services foster collaboration and communication, breaking down silos and connecting teams across departments and geographies. Imagine a world where information flows freely, ideas shared effortlessly, and decisions are made swiftly.",
    img: Meetings2,
    reverse: true,
  },
];

const Information = () => {
  return (
    <section className="bg-white text-gray-600 py-16 px-6">
      <div className="max-w-6xl mx-auto space-y-16">
        {sections.map((section, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row  gap-10 ${
              section.reverse ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Image Section */}
            <div className="w-full md:w-1/2">
              <img
                src={section.img}
                alt={section.title}
                className="rounded-lg shadow-lg w-full h-auto transition-transform duration-300 transform"
              />
            </div>

            {/* Content Section */}
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h2 className="text-3xl font-extrabold mb-4 text-gray-900">
                {section.title}
              </h2>
              <p className="text-lg text-gray-700">{section.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Information;
