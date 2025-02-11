import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-base-300 p-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">NextGen Coders</h1>
        <ul className="flex space-x-6">
          <Link
            to="/"
            className="text-white text-lg hover:text-gray-300 transition"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-white text-lg hover:text-gray-300 transition"
          >
            About
          </Link>
          <Link
            to="/service"
            className="text-white text-lg hover:text-gray-300 transition"
          >
            Services
          </Link>
          <Link
            to="/contact"
            className="text-white text-lg hover:text-gray-300 transition"
          >
            Contact
          </Link>
          <Link
            to="/portfolio"
            className="text-white text-lg hover:text-gray-300 transition"
          >
            Portfolio
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
