import React from "react";
import Background from "../assets/Background.jpg";
import Footer from "./Footer";

const portfolio = [
  {
    title: "Apartment",
    skills: ["ReactJs", "NodeJs", "JavaScript", "ShadCnUi"],
    desc: "A real estate platform to list, rent, and sell apartments efficiently...",
  },
  {
    title: "E-Commerce Store",
    skills: ["Next.js", "Tailwind", "MongoDB", "Stripe"],
    desc: "An e-commerce store with payment integration and user authentication...",
  },
  {
    title: "Social Media App",
    skills: ["MERN", "Redux", "Firebase", "Socket.io"],
    desc: "A platform where users can connect, chat, and share updates in real time...",
  },
  {
    title: "Task Management App",
    skills: ["React", "Node.js", "Express", "PostgreSQL"],
    desc: "A productivity tool to manage tasks, set deadlines, and collaborate...",
  },
  {
    title: "Crypto Dashboard",
    skills: ["React", "Chart.js", "API Integration"],
    desc: "A dashboard displaying real-time cryptocurrency trends and statistics...",
  },
  {
    title: "Portfolio Website",
    skills: ["Gatsby", "GraphQL", "Styled Components"],
    desc: "A personal portfolio to showcase projects, skills, and contact info...",
  },
];

const Portfolio = () => {
  return (
    <div className="w-full bg-gray-900 text-white">
      <div className="relative w-full h-[500px] flex items-center justify-center">
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <img
          src={Background}
          alt="Our Portfolio"
          className="absolute w-full h-full object-cover"
        />

        <div className="relative text-center px-6 max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Our Portfolio</h1>
          <p className="text-lg md:text-xl text-gray-300">
            We have helped over{" "}
            <span className="text-blue-400 font-semibold">3+ companies</span>{" "}
            increase consumer loyalty and attract new customers online. Here,
            you’ll find a selection of our expert work.
          </p>
        </div>
      </div>
      <div className="container mx-auto py-16 px-8">
        <h2 className="text-4xl font-bold text-center mb-12">
          Our Featured Portfolio
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {portfolio.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
            >
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-white">
                  {project.title}
                </h3>
                <p className="text-gray-300 mt-2">{project.desc}</p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {project.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="bg-blue-500 text-sm text-white px-3 py-1 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Portfolio;
