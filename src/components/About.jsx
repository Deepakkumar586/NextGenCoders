import React from "react";
import Meetings1 from "../assets/Meetings1.jpg";
import Secure from "../assets/Secure.png";
import StrongCommunication from "../assets/StringCommunication.png";
import Technical from "../assets/Technical.png";
import Result from "../assets/Result.png";
import Responsive from "../assets/Responisve.png";
import AllInOne from "../assets/AllInOne.png";
import Footer from "./Footer";

const features = [
  {
    img: Secure,
    title: "Secure Solutions",
    desc: "SSL security and backup support for data safety.",
  },
  {
    img: Responsive,
    title: "Responsive Design",
    desc: "Optimized across all devices, from desktops to mobile phones.",
  },
  {
    img: StrongCommunication,
    title: "Strong Communication",
    desc: "We keep our clients updated at every development stage.",
  },
  {
    img: Technical,
    title: "Technical Support",
    desc: "24/7 support for your website and software needs.",
  },
  {
    img: AllInOne,
    title: "All-in-one Package",
    desc: "Complete design and development solutions under one roof.",
  },
  {
    img: Result,
    title: "Great Results",
    desc: "Proven track record of successful projects and satisfied clients.",
  },
];

const About = () => {
  return (
    <div className="w-full bg-gray-900 text-white">
      <div className="relative w-full h-[500px] flex items-center justify-center">
        <img
          src={Meetings1}
          alt="About Us"
          className="absolute w-full h-full object-cover opacity-30"
        />
        <h1 className="relative text-5xl md:text-6xl font-bold text-white">
          ABOUT US
        </h1>
      </div>
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-4xl font-bold text-blue-500">
            About <span className="text-indigo-500">NextGen Coders</span>
          </h2>
          <p className="text-gray-300 mt-6 leading-relaxed">
            NextGen Coders is a growing organization providing advanced
            technological solutions to businesses. We aim to craft
            <span className="text-indigo-400 font-semibold">
              {" "}
              impactful and efficient solutions
            </span>{" "}
            tailored to your needs.
          </p>
          <p className="text-gray-400 mt-4 leading-relaxed">
            Our focus is on delivering cutting-edge technology to ensure
            seamless business operations and success.
          </p>
        </div>
        <img
          src={Meetings1}
          alt="About Us"
          className="w-full max-w-lg rounded-lg shadow-lg"
        />
      </div>
      <div className="text-center py-12">
        <h3 className="text-5xl font-bold text-gray-300">Why Choose Us?</h3>
        <p className="text-gray-300 text-lg mt-4 max-w-2xl mx-auto">
          We are dedicated to delivering innovative solutions with a
          customer-centric approach. Let’s build something extraordinary
          together!
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 pb-16">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 p-6 text-center"
          >
            <img
              src={feature.img}
              alt={feature.title}
              className="w-16 h-16 mx-auto"
            />
            <h4 className="text-xl font-semibold text-gray-300 mt-4">
              {feature.title}
            </h4>
            <p className="text-gray-400 mt-2">{feature.desc}</p>
          </div>
        ))}
      </div>

      {/* Mission & Vision */}
      <div className="bg-white py-16 px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Mission & Vision
        </h2>

        <div className="max-w-5xl mx-auto flex flex-col space-y-12">
          {/* Step 1 */}
          <div className="flex items-center">
            <div className="bg-blue-500 text-white text-lg font-bold w-10 h-10 flex items-center justify-center rounded-lg">
              1
            </div>
            <div className="ml-4 border-l-4 border-blue-500 pl-6">
              <p className="text-gray-800 text-lg">
                At the heart of our mission is the need for constant creation of
                the new and the adaptation of the old.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex items-center justify-end">
            <div className="text-right border-r-4 border-blue-500 pr-6">
              <p className="text-gray-800 text-lg">
                We foresee improving our worldwide reach by nurturing more
                profound, longer-lasting connections with our customers.
              </p>
            </div>
            <div className="bg-blue-500 text-white text-lg font-bold w-10 h-10 flex items-center justify-center rounded-lg ml-4">
              2
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex items-center">
            <div className="bg-blue-500 text-white text-lg font-bold w-10 h-10 flex items-center justify-center rounded-lg">
              3
            </div>
            <div className="ml-4 border-l-4 border-blue-500 pl-6">
              <p className="text-gray-800 text-lg">
                Looking ahead, it is also our aim to drive sustainable growth –
                not just for us but also for our clients.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
