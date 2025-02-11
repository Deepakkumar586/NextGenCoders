import { useState } from "react";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import Service from "./components/Service";
import Contact from "./components/Contact";
import About from "./components/About";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/portfolio" element={<Portfolio/>} />
      </Routes>
    </div>
  );
}

export default App;
