import React from "react";
import firstImage from "../assets/firstImage.png";
import secondImage from "../assets/secondImage.png";
import thirdImage from "../assets/thirdImage.png";
import fourthImage from "../assets/fourthImage.png";
import Node from "../assets/Node.png";
import Net from "../assets/net.png";
import javascript from "../assets/javascript.png";
import PHP from "../assets/php.png";
import Python from "../assets/python.jpg";
import react from "../assets/react.svg";
import shopify from "../assets/shopify.png";
import Vue from "../assets/vue.png";
import Feedback from "./Feedback";
import Information from "./Information";
import Footer from "./Footer";

// Features
const features = [
  {
    title: "Affordable Prices",
    text: "Quality IT solutions at budget-friendly prices.",
  },
  {
    title: "Enhanced Efficiency",
    text: "Streamlined IT solutions for business growth.",
  },
  {
    title: "Scalability & Flexibility",
    text: "Agile solutions that scale with your needs.",
  },
  {
    title: "Long-Lasting Services",
    text: "Sustainable IT excellence for the long term.",
  },
];

// Technologies
const technologies = [
  { name: "Node.js", desc: "Event-driven backend solutions.", img: Node },
  { name: "PHP", desc: "Dynamic web development.", img: PHP },
  { name: "Python", desc: "AI & automation powerhouse.", img: Python },
  { name: "React", desc: "Component-based UI library.", img: react },
  { name: ".NET", desc: "Enterprise-grade applications.", img: Net },
  { name: "Shopify", desc: "E-commerce excellence.", img: shopify },
  { name: "JavaScript", desc: "Interactive web experiences.", img: javascript },
  { name: "Vue.js", desc: "Progressive front-end framework.", img: Vue },
];

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative w-full min-h-screen flex flex-col items-center justify-center text-center px-6 border-b border-gray-300">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-wide text-gray-900">
          Empowering Digital Transformation
        </h1>
        <p className="text-lg md:text-xl mt-4 max-w-3xl text-gray-700">
          Your trusted partner for scalable, innovative IT solutions.
        </p>
        <button className="mt-6 px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
          Get Started
        </button>
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {[
            {
              title: "SEO Optimization",
              desc: "Enhance digital reach",
              img: firstImage,
            },
            {
              title: "Web Development",
              desc: "Innovate your online presence",
              img: secondImage,
            },
            {
              title: "Mobile Apps",
              desc: "Seamless user experience",
              img: thirdImage,
            },
            {
              title: "UI/UX Design",
              desc: "Engaging and intuitive interfaces",
              img: fourthImage,
            },
          ].map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center text-center border border-gray-300 hover:scale-105 transition duration-300"
            >
              <img
                src={service.img}
                alt={service.title}
                className="w-16 h-16"
              />
              <h3 className="text-xl font-bold mt-3 text-gray-900">
                {service.title}
              </h3>
              <p className="text-md text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <section className="bg-gray-900 text-white py-20 px-6 text-center mt-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
            Why Partner with Us?
          </h2>
          <p className="text-lg leading-relaxed max-w-2xl mx-auto text-gray-300">
            We provide cutting-edge technology and strategic expertise to
            accelerate your growth.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 py-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white text-gray-900 border border-gray-700 rounded-xl p-6 flex flex-col items-center text-center shadow-lg hover:scale-105 transition duration-300"
            >
              <h3 className="text-lg font-bold">{feature.title}</h3>
              <p className="text-md text-gray-600 mt-2">{feature.text}</p>
            </div>
          ))}
        </div>
      </section>

      <Information />

      <section className="bg-gray-800 text-white py-20 px-6 text-center">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
            Technologies Driving Innovation
          </h2>
          <p className="text-lg leading-relaxed max-w-3xl mx-auto text-gray-300">
            Explore the cutting-edge technologies that are shaping the future.
          </p>
        </div>

        <div className="max-w-6xl mx-auto mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-700 hover:border-white hover:bg-gray-700 transition duration-300"
            >
              <img
                src={tech.img}
                alt={tech.name}
                className="w-20 h-20 mx-auto mb-4"
              />
              <h3 className="text-xl font-bold">{tech.name}</h3>
              <p className="text-gray-400 mt-2">{tech.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <Feedback />

      <Footer />
    </div>
  );
};

export default Home;
