import React, { useState, useEffect, useRef } from "react";
import { HiMail, HiDownload } from "react-icons/hi";
import { BsCodeSlash, BsLightbulb } from "react-icons/bs";
import { RiArrowRightLine } from "react-icons/ri";

const PortfolioHero = ({  onShowCv }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [typedText, setTypedText] = useState("");
  const canvasRef = useRef(null);
  const particlesRef = useRef(null);
  const animationRef = useRef(null);

  const roles = [
    "Full Stack Blockchain Developer",
    "Smart Contract",
    "Dapps Developer",
    "Animation UI/UX Developer",
    "Problem Solver",
    "Creative Thinker",
    "Comfortable",
  ];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  const scrollToProjects = () => {
    const section = document.querySelector("#projects");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToProjectsTalk = () => {
    const section = document.querySelector("#Contact");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  // Typing animation effect
  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    let charIndex = 0;

    const typingInterval = setInterval(() => {
      if (charIndex <= currentRole.length) {
        setTypedText(currentRole.slice(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, [currentRoleIndex]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const particleCount = 70;
    const baseColor = 
      { r: 189, g: 38, b: 211 }
      

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = canvas.parentElement.offsetHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    let mouseX = 0,
      mouseY = 0;
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };
    window.addEventListener("mousemove", handleMouseMove);

    const focalLength = 300;

    particlesRef.current = Array(particleCount)
      .fill()
      .map(() => ({
        x: Math.random() * canvas.width - canvas.width / 2,
        y: Math.random() * canvas.height - canvas.height / 2,
        z: Math.random() * 1000,
        size: Math.random() * 4 + 2,
        baseSize: Math.random() * 4 + 2,
        speedX: Math.random() * 0.5 - 0.25,
        speedY: Math.random() * 0.5 - 0.25,
        speedZ: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.3,
      }));

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const sortedParticles = [...particlesRef.current].sort(
        (a, b) => a.z - b.z
      );

      sortedParticles.forEach((particle) => {
        const mouseInfluenceX =
          (mouseX - canvas.width / 2 - particle.x) * 0.0001;
        const mouseInfluenceY =
          (mouseY - canvas.height / 2 - particle.y) * 0.0001;

        particle.x += particle.speedX + mouseInfluenceX;
        particle.y += particle.speedY + mouseInfluenceY;
        particle.z -= particle.speedZ;

        if (particle.z < -focalLength) {
          particle.z = Math.random() * 1000;
          particle.x = Math.random() * canvas.width - canvas.width / 2;
          particle.y = Math.random() * canvas.height - canvas.height / 2;
        }

        const scale = focalLength / (focalLength + particle.z);
        const x2d = particle.x * scale + canvas.width / 2;
        const y2d = particle.y * scale + canvas.height / 2;
        const scaleSize = particle.baseSize * scale;
        const distance = 1 - Math.min(particle.z / 1000, 1);
        const opacity = particle.opacity * distance;

        const colorVariation = Math.max(0.6, distance);
        const r = Math.floor(baseColor.r * colorVariation);
        const g = Math.floor(baseColor.g * colorVariation);
        const b = Math.floor(baseColor.b * colorVariation);

        ctx.beginPath();
        ctx.arc(x2d, y2d, scaleSize, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${opacity})`;
        ctx.fill();

        if (distance > 0.8) {
          ctx.beginPath();
          ctx.arc(x2d, y2d, scaleSize * 1.5, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${opacity * 0.3})`;
          ctx.fill();
        }
      });

      animationRef.current = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const bgColor = "bg-[#0E0B12]" 
  const textColor = "text-white" ;
  const secondaryTextColor =  "text-gray-400" ;
  const cardBg =  "bg-[#13101A]";
  const cardBorder = "border-gray-800/30" ;

  const stats = [
    { label: "Projects", value: "30+" },
    { label: "Experience", value: "1+ Years" },
    { label: "Clients", value: "10+" },
  ];

  const skills = [
    "Blockchain",
    "Solidity",
    "Dapps",
    "Hardhat",
    "Cryptography",
    "React",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "Defi",
  ];

  return (
    <div className={`relative min-h-screen w-full overflow-hidden ${bgColor}`}>
      <div className="absolute inset-0 z-0">
        <div
          className={`absolute inset-0 ${
           
             "bg-gradient-to-b from-[#0E0B12]/80 via-transparent to-[#0E0B12]/80"
              
          }`}
        ></div>
        <canvas
          ref={canvasRef}
          className="absolute top-0 left-0 w-full h-full pointer-events-none z-10"
          style={{ zIndex: 1 }}
        />
        <div className="absolute inset-0 grid-pattern"></div>
        <div className="absolute inset-0 light-rays">
          <div className="light-ray ray1"></div>
          <div className="light-ray ray2"></div>
          <div className="light-ray ray3"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20 md:py-28 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 md:gap-16">
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="inline-block p-2 px-4 rounded-full bg-gradient-to-r from-fuchsia-500/10 to-purple-600/10 mb-6 animate-pulse-slow">
              <p className="text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-500 to-purple-600">
                <BsLightbulb className="inline mr-1" /> Available for Work
              </p>
            </div>

            <h1
              className={`text-5xl md:text-6xl lg:text-7xl font-bold ${textColor} mb-4`}
            >
              Hi, I'm{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-500 to-purple-600 animate-gradient-x">
                Abushaker Jamil
              </span>
            </h1>

            <div className="h-16 mb-6">
              <h2 className="text-2xl md:text-3xl font-semibold">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-gray-600 to-yellow-200">
                  {typedText}
                  <span className="animate-blink">|</span>
                </span>
              </h2>
            </div>

            <p
              className={`${secondaryTextColor} text-lg md:text-xl max-w-2xl mb-8 leading-relaxed`}
            >
              Crafting beautiful, functional, and user-centric digital
              experiences. Passionate about turning ideas into reality through
              clean code and innovation.
            </p>

            <div className="flex flex-wrap gap-4 mb-8 justify-center lg:justify-start">
              <button
                onClick={scrollToProjects}
                className="px-6 py-3 rounded-lg bg-gradient-to-r from-fuchsia-500 to-purple-600 hover:from-fuchsia-600 hover:to-purple-700 text-white font-medium transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center"
              >
                View My Work <RiArrowRightLine className="ml-2" />
              </button>
              <a href="#cv">
                <button
                  onClick={onShowCv}
                  className={`px-6 py-3 rounded-lg ${
                    
                       "border-2 border-gray-700 hover:bg-gray-800"
                      
                  } ${textColor} font-medium transition-all duration-300 flex items-center`}
                >
                  <HiDownload className="mr-2" /> Download CV
                </button>
              </a>
            </div>

            

            <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
              {stats.map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-500 to-purple-600">
                    {stat.value}
                  </div>
                  <div className={`text-sm ${secondaryTextColor}`}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-1/2 max-w-lg mx-auto relative">
            {isLoading && (
              <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/50 backdrop-blur-sm rounded-xl">
                <div className="w-12 h-12 border-4 border-fuchsia-500 border-t-transparent rounded-full animate-spin"></div>
              </div>
            )}

            <div
              className={`${cardBg} backdrop-blur-sm rounded-2xl ${cardBorder} border shadow-2xl overflow-hidden transform transition duration-500 hover:shadow-3xl`}
            >
              <div className="p-8">
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    <div className="w-48 h-48 rounded-full bg-gradient-to-br from-fuchsia-500 to-purple-600 p-1 shadow-lg shadow-purple-500/40">
                      <div
                        className={`w-full h-full rounded-full overflow-hidden ${
                           "bg-[#13101A]" 
                        } flex items-center justify-center`}
                      >
                        <img
                          src="/my.webp"
                          alt="My Profile"
                          className="bg-transparent w-full h-full object-cover rounded-full transform transition-transform duration-500 hover:scale-105"
                        />
                      </div>
                    </div>
                    <div className="absolute bottom-2 right-2 w-12 h-12 rounded-full bg-green-500 border-4 border-[#13101A] flex items-center justify-center">
                      <BsCodeSlash className="text-white" />
                    </div>
                  </div>
                </div>

                <div className="text-center mb-6">
                  <h3 className={`text-2xl font-bold ${textColor} mb-2`}>
                    Available for Freelance
                  </h3>
                  <p className={`${secondaryTextColor} mb-4`}>
                    Let's build something amazing together
                  </p>
                </div>

                <div
                  className={`border-t ${
                    "border-gray-800/50" 
                  } my-6`}
                ></div>

                <div className="mb-6">
                  <h4
                    className={`text-sm font-semibold ${secondaryTextColor} mb-3`}
                  >
                    CORE SKILLS
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className={`px-3 py-1.5 rounded-lg  text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-500/90 to-teal-600`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div
                  className={`p-4 rounded-lg ${
                   "bg-gray-800/30" 
                  } mb-6`}
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-fuchsia-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                      <HiMail onClick={scrollToProjectsTalk} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <div className={`text-xs ${secondaryTextColor} mb-1`}>
                        GET IN TOUCH
                      </div>
                      <div className={`text-sm ${textColor} font-medium`}>
                        abushakerjamil254@gmail.com
                      </div>
                    </div>
                  </div>
                </div>

                <button onClick={scrollToProjectsTalk} className="w-full py-3 rounded-lg bg-gradient-to-r from-fuchsia-500 to-purple-600 hover:from-fuchsia-600 hover:to-purple-700 text-white font-medium transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Let's Talk
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="w-12 h-12 rounded-full bg-gradient-to-r from-fuchsia-500 to-purple-600 hover:from-fuchsia-600 hover:to-purple-700 text-white shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
          aria-label="Scroll to top"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      <style jsx>{`
        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.8;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.02);
          }
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s infinite;
        }

        @keyframes blink {
          0%,
          50% {
            opacity: 1;
          }
          51%,
          100% {
            opacity: 0;
          }
        }
        .animate-blink {
          animation: blink 1s infinite;
        }

        .grid-pattern {
          background-image: ${
            "linear-gradient(rgba(56,189, 248,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.06) 1px, transparent 1px)"
            };
          background-size: 35px 35px;
          animation: pulse-grid 8s ease-in-out infinite alternate;
        }
        @keyframes pulse-grid {
          0% {
            opacity: 0.7;
            background-size: 35px 35px;
          }
          100% {
            opacity: 1;
            background-size: 36px 36px;
          }
        }
        .light-rays {
          overflow: hidden;
          opacity: ${"0.4" };
        }
        .light-ray {
          position: absolute;
          width: 200%;
          height: 100%;
          opacity: 0.7;
          background: linear-gradient(
            90deg,
            transparent 0%,
            ${
              "rgba(119,101,243,0.05) 45%, rgba(146,101,243,0.1) 50%, rgba(119,101,243,0.05) 55%"
              },
            transparent 100%
          );
          transform: rotate(45deg);
          top: -50%;
          left: -50%;
        }
        .ray1 {
          animation: moveRay 15s linear infinite;
        }
        .ray2 {
          animation: moveRay 20s linear infinite;
        }
        .ray3 {
          animation: moveRay 25s linear 10s infinite;
        }
        @keyframes moveRay {
          0% {
            transform: rotate(45deg) translateX(-100%);
          }
          100% {
            transform: rotate(45deg) translateX(100%);
          }
        }
        @keyframes gradient-x {
          0%,
          100% {
            background-size: 200% 200%;
            background-position: left center;
          }
          50% {
            background-size: 200% 200%;
            background-position: right center;
          }
        }
        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
        }
      `}</style>
    </div>
  );
};

export default PortfolioHero;
