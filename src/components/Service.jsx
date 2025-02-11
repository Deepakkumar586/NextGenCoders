import React from "react";
import Meetings1 from "../assets/Meetings1.jpg";
import SEO from "../assets/SEO.png";
import MobileAppDevelopment from "../assets/MobileAppDevelopment.png";
import SoftwareDevelopment from "../assets/SoftwareDevelopment.png";
import WebsiteDevelopment from "../assets/WebsiteDevelopment.png";
import CRMERP from "../assets/CRM-ERP.png";
import GraphicsDesign from "../assets/GraphicsDesign.png";
import Footer from "./Footer";

const services = [
  {
    img: WebsiteDevelopment,
    title: "Website Development & Design",
    desc: "At NextGen Coders, our team is focused on creating contemporary web designs that support .PHP, JAVA, Node, Python, .NET scripts for a more responsive...",
  },
  {
    img: MobileAppDevelopment,
    title: "Mobile App Development",
    desc: "A mobile application that works on multiple platforms helps transform business these days. Our developer team can help convert your business...",
  },
  {
    img: SoftwareDevelopment,
    title: "Software Development",
    desc: "A solid business needs solid software, which we at Skyview can help you with. A software that compliments and represents your...",
  },
  {
    img: SEO,
    title: "SEO Optimization",
    desc: "Optimizing your website to appear on search engine results is something that has become crucial today. We help you in doing this...",
  },
  {
    img: CRMERP,
    title: "ERP & CRM Development",
    desc: "ERP is an acronym for Enterprise Resource Planning, but even its full name doesn't shed much light...",
  },
  {
    img: GraphicsDesign,
    title: "Graphics & UI/UX Design",
    desc: "Create an impact for your business with our impressionable graphic designs that appeal to your users and customers...",
  },
];

const Service = () => {
  return (
    <div>
      <div className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center">
        <img
          src={Meetings1}
          alt="Service"
          className="absolute w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        <div className="relative text-center text-white px-4 md:px-6 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-wide">
            Our Services
          </h1>
          <p className="text-base md:text-lg mt-4 text-gray-200">
            NextGen Coders provides seamless app development with automated user
            authentication, real-time analytics, and optimized performance for
            mobile and web solutions.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-4 md:px-10 py-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl flex flex-col items-center p-6 text-center"
          >
            <img
              src={service.img}
              alt={service.title}
              className="w-16 h-16 md:w-20 md:h-20 object-contain mb-4"
            />
            <h2 className="text-lg md:text-xl font-semibold text-gray-800">
              {service.title}
            </h2>
            <p className="text-gray-500 mt-3 text-sm md:text-base">
              {service.desc}
            </p>
            <button className="mt-5 px-4 py-2 md:px-5 md:py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
              Learn More
            </button>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Service;
