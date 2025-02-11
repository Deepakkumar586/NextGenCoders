import React, { useState } from "react";
import {
  FaPhoneAlt,
  FaBriefcase,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaGithub,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-base-100 w-full  text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <h2 className="text-3xl font-extrabold text-blue-400">
            NextGen Coders
          </h2>
          <p className="text-gray-300 mt-3">
            Your trusted technology partner for innovative digital solutions.
          </p>
          <p className="text-sm mt-4 text-gray-500">
            © 2014 - 2025 Copyright - NextGen Coders Pvt. Ltd.
          </p>
        </div>
        <div className="flex flex-col space-y-3">
          <h3 className="text-lg font-bold">Quick Links</h3>
          <ul>
            <Link to="/">
              <li className="text-xl text-gray-300  hover:text-blue-400">
                Home
              </li>
            </Link>
            <Link to="/about">
              <li className="text-lg text-gray-300 hover:text-blue-400">
                About
              </li>
            </Link>
            <Link to="/service">
              <li className="text-lg text-gray-300 hover:text-blue-400">
                Service
              </li>
            </Link>
            <Link to="/contact">
              <li className="text-lg text-gray-300 hover:text-blue-400">
                Contact
              </li>
            </Link>
            <Link to="/portfolio">
              <li className="text-lg text-gray-300 hover:text-blue-400">
                Portfolio
              </li>
            </Link>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold flex items-center gap-2">
            <FaMapMarkerAlt /> 📍 India (Head Office)
          </h3>
          <p className="text-gray-300 mt-2">
            📌 NextGen Coders Pvt. Ltd. <br />
            314, Tower A, Cyber Hub, DLF Cyber City, <br />
            Gurugram, Haryana 122002, India
          </p>
          <p className="text-gray-300 mt-2">
            📞 +1 7752 7777 10 <br />
            📞 +1 92993 01834
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-700 mt-10 pt-6">
        <div className="flex space-x-4">
          {[FaLinkedin, FaTwitter, FaFacebook, FaGithub].map((Icon, index) => (
            <a
              key={index}
              href="#"
              className="text-gray-400 hover:text-blue-400 transition-all duration-300 text-2xl"
            >
              <Icon />
            </a>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-6 mt-6 md:mt-0">
          {/* Looking for Job */}
          <button className="flex items-center space-x-2 bg-blue-600 text-white px-5 py-2 rounded-xl hover:bg-blue-700 transition-all duration-300 shadow-lg">
            <FaBriefcase /> <span>Looking for a Job?</span>
          </button>

          {/* Call Support */}
          <button className="flex items-center space-x-2 bg-green-600 text-white px-5 py-2 rounded-xl hover:bg-green-700 transition-all duration-300 shadow-lg">
            <FaPhoneAlt /> <span>Call Support</span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
