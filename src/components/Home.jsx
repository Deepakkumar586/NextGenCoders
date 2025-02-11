import React from "react";
import SEO from "../assets/SEO.png";
import WebsiteDevelopment from "../assets/WebsiteDevelopment.png";
import MobileAppDevelopment from "../assets/MobileAppDevelopment.png";
import GraphicsDesign from "../assets/GraphicsDesign.png";
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
    text: "Get high-quality IT solutions without exceeding your budget. We deliver cost-effective services without compromising excellence.",
  },
  {
    title: "Enhanced Efficiency",
    text: "Optimize operations with cutting-edge technology. Our solutions streamline workflows, boosting productivity and growth.",
  },
  {
    title: "Scalability & Flexibility",
    text: "Future-proof your business with adaptable IT solutions. We design systems that evolve with your needs and market trends.",
  },
  {
    title: "Long-Lasting Services",
    text: "Invest in sustainable, high-performance IT solutions. We focus on reliability, security, and long-term success.",
  },
];

// Technologies
const technologies = [
  {
    name: "Node.js",
    desc: "Build fast, scalable, and efficient server-side applications. Leverage event-driven, non-blocking architecture for high-performance backends.",
    img: Node,
  },
  {
    name: "PHP",
    desc: "Create dynamic and interactive web solutions. A reliable scripting language powering millions of websites and applications worldwide.",
    img: PHP,
  },
  {
    name: "Python",
    desc: "Unlock AI, automation, and data science capabilities. A versatile language known for its simplicity and robust ecosystem.",
    img: Python,
  },
  {
    name: "React",
    desc: "Develop modern, interactive UIs with reusable components. A powerful front-end library for building seamless user experiences.",
    img: react,
  },
  {
    name: ".NET",
    desc: "Build enterprise-grade applications with Microsoft’s secure framework. Ideal for web, desktop, and cloud-based solutions.",
    img: Net,
  },
  {
    name: "Shopify",
    desc: "Empower businesses with scalable e-commerce solutions. A leading platform for creating and managing online stores effortlessly.",
    img: shopify,
  },
  {
    name: "JavaScript",
    desc: "Enhance web interactivity with a versatile scripting language. The backbone of modern front-end and full-stack development.",
    img: javascript,
  },
  {
    name: "Vue.js",
    desc: "Build progressive, high-performance web applications. A lightweight yet powerful framework for intuitive front-end development.",
    img: Vue,
  },
];

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative w-full min-h-screen flex flex-col items-center justify-center text-center px-6  border-gray-300">
        <h1 className="text-4xl mt-10 md:text-6xl font-extrabold tracking-wide text-gray-900">
          Empowering Digital Transformation
        </h1>
        <p className="text-lg md:text-xl mt-4 max-w-3xl text-gray-700">
          Empowering businesses with cutting-edge technology and scalable
          solutions. We specialize in crafting seamless digital experiences that
          drive growth. Our expertise spans web development, mobile apps, and
          cloud solutions. With innovation at our core, we turn challenges into
          opportunities. Let's build the future of technology—together.
        </p>

        <button className="mt-6 px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
          Get Started
        </button>
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {[
            {
              title: "SEO Optimization",
              desc: "Boost your online visibility with data-driven SEO strategies. We optimize content, keywords, and site performance to enhance search rankings and drive organic traffic.",
              img: SEO,
            },
            {
              title: "Web Development",
              desc: "Transform your ideas into dynamic, high-performance websites. From frontend aesthetics to backend functionality, we craft scalable and secure digital experiences.",
              img: WebsiteDevelopment,
            },
            {
              title: "Mobile Apps",
              desc: "Deliver seamless, high-quality mobile experiences tailored for iOS and Android. We focus on performance, security, and user engagement to maximize app success.",
              img: MobileAppDevelopment,
            },
            {
              title: "UI/UX Design",
              desc: "Create visually stunning and user-friendly designs that enhance engagement. We blend creativity with usability to deliver intuitive and accessible digital experiences.",
              img: GraphicsDesign,
            },
          ].map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-2xl flex flex-col items-center text-center border-2 border-x border-gray-900 hover:border-blue-400 hover:scale-105 transition duration-300"
            >
              <img
                src={service.img}
                alt={service.title}
                className="w-16 h-16"
              />
              <h3 className="text-xl font-bold mt-3 text-gray-900 mb-2">
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
              className="bg-gray-900 p-6 rounded-xl shadow-lg border-4 border-x border-gray-700 hover:border-white hover:bg-gray-700 transition duration-300"
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
