"use client";

import { useRef, useState } from "react";
import {
  ExternalLink,
  Github,
  Code2,
  Sparkles,
  Layers,
  Zap,
  ArrowRight,
} from "lucide-react";

const Projects = () => {
  const titleRef = useRef(null);
  const filterRef = useRef(null);
  const projectCardsRef = useRef([]);
  const statsRef = useRef([]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleMouseMove = (e, index) => {
    if (e.target.tagName === 'A' || e.target.closest('a')) {
      return;
    }
    
    const wrapper = projectCardsRef.current[index];
    if (!wrapper) return;
    
    const rect = wrapper.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * 12;
    const rotateY = ((x - centerX) / centerX) * -12;

    wrapper.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
  };

  const handleMouseLeave = (index) => {
    const wrapper = projectCardsRef.current[index];
    if (!wrapper) return;
    wrapper.style.transform = "perspective(1200px) rotateX(0deg) rotateY(0deg) scale(1)";
  };

  const filters = ["All", "FullStack Blockchain", "Smart Contract Dapps", "UI/UX"];

  const projects = [
    {
      id: 1,
      title: "ERC20 TokenSwap ",
      category: "FullStack Blockchain",
      description:
        "Built TokenSwap, a decentralized exchange (DEX) supporting ERC20 tokens and USDT on Ethereum.",
      image: "/toke.webp",
      gradient: "from-purple-500 via-pink-500 to-red-500",
      tech: ["Solidity", "Next.js", "Hardhat", "Ether.js", "Wagmi"],
      github: "https://github.com/AbushakerJamil/Next-ICO-TOKEN-Dapps",
      demo: "https://cryptolaunch.vercel.app/",
      featured: true,
    },
    {
      id: 2,
      title: "Raffle Dapps",
      category: "Smart Contract Dapps",
      description:
        "Developed a decentralized Raffle (Lottery) smart contract using Solidity, integrating Chainlink VRF v2 for secure random winnerselection.",
      image: "/solid.webp",
      gradient: "from-cyan-500 via-blue-500 to-purple-500",
      tech: ["Solidity", "Hardhat", "Chainlink", "Mock", "Ethers"],
      github: "https://github.com/AbushakerJamil/Raffle-DApps-smart-contract-lottery",
      demo: "https://github.com/AbushakerJamil/Raffle-DApps-smart-contract-lottery",
      featured: true,
    },
    {
      id: 3,
      title: "Smart Contract E-Com",
      category: "FullStack Blockchain",
      description:
        "A decentralized e-commerce smart contract that enables secure, trustless buying and selling without intermediaries.",
      image: "/solid2.webp",
      gradient: "from-green-500 via-teal-500 to-cyan-500",
      tech: ["Solidity", "Hardhat", "Ethers"],
      github: "https://github.com/AbushakerJamil/NONEcom-Hardhat-smart-contract/blob/main/contracts/mollaEcom.sol",
      demo: "https://github.com/AbushakerJamil/NONEcom-Hardhat-smart-contract/blob/main/contracts/mollaEcom.sol",
      featured: false,
    },
    {
      id: 4,
      title: "Award Win Website",
      category: "UI/UX",
      description:
        "Comprehensive design system with 20+ components, dark mode, accessibility features, and premium animations.",
      image: "/zentry.webp",
      gradient: "from-orange-500 via-red-500 to-pink-500",
      tech: ["React", "JavaScript", "Gsap", "Tailwind",],
      github: "https://github.com/AbushakerJamil/Awward_Win_Web",
      demo: "https://github.com/AbushakerJamil/Awward_Win_Web",
      featured: false,
    },
    {
      id: 5,
      title: "Advance Smart Contract Security",
      category: "Smart Contract Dapps",
      description:
        "Advanced smart contract security techniques ensuring reliability, protection against vulnerabilities, and robust decentralized applications..",
      image: "/encript.webp",
      gradient: "from-indigo-500 via-purple-500 to-pink-500",
      tech: ["Advance Solidity", "MetaMask", "Ethars"],
      github: "https://github.com/AbushakerJamil/encripted_Ethers.JS_Deploy",
      demo: "https://github.com/AbushakerJamil/encripted_Ethers.JS_Deploy",
      featured: false,
    },
    {
      id: 6,
      title: "Smart Contract Voting System",
      category: "Smart Contract Dapps",
      description:
        "Decentralized smart contract-based voting system ensuring transparency, fairness, and tamper-proof election results.",
      image: "📱",
      gradient: "from-pink-500 via-rose-500 to-red-500",
      tech: ["Smart Contract", "Sapolia","Remix IDE"],
      github: "#",
      demo: "#",
      featured: true,
    },
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section className="overflow-hidden min-h-screen bg-gradient-to-br bg-[#0E0B12]/90  py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div ref={titleRef} className="text-center mb-12">
          <h2 className="text-6xl md:text-7xl font-bold text-white mb-4">
            Featured{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-gray-400 text-lg">
            Building the future, one project at a time
          </p>
        </div>

        <div
          ref={filterRef}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                activeFilter === filter
                  ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/50"
                  : "bg-gray-800 text-gray-300 border border-gray-700 hover:border-purple-500 hover:text-white"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              onMouseMove={(e) => handleMouseMove(e, index)}
              onMouseLeave={() => handleMouseLeave(index)}
              onMouseEnter={() => setHoveredCard(project.id)}
              className="project-card-wrapper"
              style={{ 
                transformStyle: "preserve-3d",
                transition: "transform 0.3s cubic-bezier(0.23, 1, 0.32, 1)"
              }}
            >
              <div 
                ref={(el) => (projectCardsRef.current[index] = el)}
                className="relative bg-gray-800 rounded-3xl overflow-hidden border border-gray-700 shadow-2xl h-full group transition-all duration-300 hover:shadow-purple-500/20"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl pointer-events-none`}
                ></div>

                {project.featured && (
                  <div className="absolute top-4 right-4 z-30 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg pointer-events-none">
                    <Sparkles className="w-3 h-3" />
                    Featured
                  </div>
                )}

                <div
                  className={`relative h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}
                >
                  {project.image.startsWith('/') || project.image.startsWith('http') ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className={`max-w-full max-h-full object-contain transition-all duration-500 pointer-events-none ${
                        hoveredCard === project.id ? "scale-110 rotate-3" : "scale-100"
                      }`}
                    />
                  ) : (
                    <div
                      className={`text-8xl transform transition-all duration-500 pointer-events-none ${
                        hoveredCard === project.id ? "scale-110 rotate-6" : "scale-100"
                      }`}
                    >
                      {project.image}
                    </div>
                  )}
                  
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300 pointer-events-none"></div>

                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 transform hover:scale-110 hover:rotate-12 z-50 relative"
                      aria-label="GitHub"
                    >
                      <Github className="w-6 h-6 text-white pointer-events-none" />
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 transform hover:scale-110 hover:-rotate-12 z-50 relative"
                      aria-label="Live Demo"
                    >
                      <ExternalLink className="w-6 h-6 text-white pointer-events-none" />
                    </a>
                  </div>

                  <div className="absolute inset-0 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent animate-scan"></div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 relative z-10">
                  <div className="flex items-center gap-2 mb-3">
                    <div
                      className={`w-2 h-2 rounded-full bg-gradient-to-r ${project.gradient} animate-pulse`}
                    ></div>
                    <span className="text-sm text-gray-400 font-medium">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-600 group-hover:bg-clip-text transition-all duration-300">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-lg text-xs font-medium border border-gray-600 hover:border-purple-500 hover:text-purple-400 transition-all duration-300 transform hover:scale-105"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 text-purple-400 font-semibold py-3 px-4 rounded-xl hover:from-purple-600 hover:to-pink-600 hover:text-white transition-all duration-300 text-center z-50 relative"
                  >
                    <span className="flex items-center justify-center gap-2 pointer-events-none">
                      View Details
                      <ArrowRight className="w-4 h-4 inline-block transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            {
              icon: Code2,
              label: "Total Projects",
              value: "30+",
              color: "from-blue-500 to-cyan-500",
            },
            {
              icon: Sparkles,
              label: "Technologies",
              value: "10+",
              color: "from-purple-500 to-pink-500",
            },
            {
              icon: Layers,
              label: "Open Source",
              value: "5+",
              color: "from-orange-500 to-red-500",
            },
            {
              icon: Zap,
              label: "Active Projects",
              value: "2",
              color: "from-green-500 to-teal-500",
            },
          ].map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                ref={(el) => (statsRef.current[index] = el)}
                className="bg-gray-800 rounded-2xl p-6 border border-gray-700 text-center transform transition-all duration-300 hover:scale-105 hover:border-purple-500 cursor-pointer"
              >
                <div
                  className={`w-14 h-14 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg transform transition-all duration-300 hover:rotate-12`}
                >
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h4 className="text-3xl font-bold text-white mb-1">
                  {stat.value}
                </h4>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes scan {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(1000%);
          }
        }
        .animate-scan {
          animation: scan 2s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Projects;