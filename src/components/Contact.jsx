import React from "react";
import Footer from "./Footer";

const Contact = () => {
  return (
    <div className="flex flex-col w-full items-center justify-center min-h-screen  text-white px-6 py-12">
      <div className="lg:flex lg:items-center lg:justify-between w-full max-w-6xl">
        <div className="lg:w-1/2 text-center lg:text-left space-y-6">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-blue-400">
            Need More Information?
          </h2>
          <p className="text-gray-300 text-lg">
            Drop a message to our experienced IT professionals. <br />
            We’re available for{" "}
            <span className="font-bold text-blue-500">16 hours a day!</span>
          </p>
          <p className="text-gray-400">
            Our experts will assess your plan and provide the best estimation
            for technology and budget based on your requirements.
          </p>
        </div>
        <div className="lg:w-1/2 bg-gray-800 shadow-xl rounded-xl p-8 w-full max-w-lg mt-10 lg:mt-0">
          <h3 className="text-2xl font-semibold text-white text-center mb-6">
            Contact Us
          </h3>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-300 font-medium">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full bg-gray-700 px-4 py-2 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-300 font-medium">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-gray-700 px-4 py-2 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-300 font-medium">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="Enter your phone number"
                className="w-full bg-gray-700 px-4 py-2 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-300 font-medium">
                Inquiry Type
              </label>
              <select className="w-full bg-gray-700 px-4 py-2 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Web Development & Design</option>
                <option>Mobile App Development</option>
                <option>Software Development</option>
                <option>SEO & Digital Marketing</option>
                <option>UI/UX & Graphic Design</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-300 font-medium">
                Your Message
              </label>
              <textarea
                rows="4"
                placeholder="Type your message here..."
                className="w-full bg-gray-700 px-4 py-2 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <button className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition">
              Submit Inquiry
            </button>
          </form>
        </div>
      </div>

      <div className="mt-12 mb-9 w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-gray-800 shadow-md rounded-xl p-9 hover:scale-105">
          <h4 className="text-2xl font-semibold text-blue-400">📍 Address</h4>
          <p className="text-gray-300 text-lg mt-4">
            NextGen Coders Pvt. Ltd. 314, Tower A, Cyber Hub, DLF Cyber City,
            Gurugram, Haryana, India
          </p>
        </div>
        <div className="bg-gray-800 shadow-md rounded-xl p-6 hover:scale-105">
          <h4 className="text-2xl font-semibold text-blue-400">📞 Phone</h4>
          <p className="text-gray-300 text-lg mt-4">
            +91 98483 820 | 0522-4235604
          </p>
        </div>
        <div className="bg-gray-800 shadow-md rounded-xl p-6 hover:scale-105">
          <h4 className="text-2xl font-semibold text-blue-400">✉ Email</h4>
          <p className="text-gray-300 mt-4 text-xl">
            contact@nextgencoders.com <br />{" "}
            <span> nextgencoders@gmail.com</span>{" "}
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
