"use client";

import { useEffect, useRef } from "react";
import {
  User,
  Code,
  Briefcase,
  Award,
  Rocket,
  Zap,
  Target,
} from "lucide-react";
import gsap from "gsap";
import Tilt from "react-parallax-tilt";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const About = () => {
  const titleRef = useRef(null);
  const profileCardRef = useRef(null);
  const skillCardsRef = useRef([]);
  const statCardsRef = useRef([]);
  const textRef = useRef(null);
  const loremTextRef = useRef(null);
  const loremContainerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const loremText = loremTextRef.current;
    if (!loremText) return;

    // Split text into characters
    const textContent = loremText.textContent;
    loremText.innerHTML = "";

    textContent.split("").forEach((char) => {
      const span = document.createElement("span");
      span.textContent = char === " " ? "\u00A0" : char;
      span.className = "char-lorem";
      loremText.appendChild(span);
    });

    const chars = loremText.querySelectorAll(".char-lorem");

    // Initial state
    gsap.set(chars, {
      opacity: 0,
      y: 60,
      rotateX: -80,
      scale: 0.4,
      filter: "blur(12px)",
      transformOrigin: "50% 50%",
    });

    // Animate characters on scroll
    gsap.to(chars, {
      opacity: 1,
      y: 0,
      rotateX: 0,
      scale: 1,
      filter: "blur(0px)",
      stagger: {
        each: 0.01,
        from: "start",
        ease: "power2.inOut",
      },
      duration: 0.5,
      ease: "power3.out",
      scrollTrigger: {
        trigger: loremContainerRef.current,
        start: "top 80%",
        end: "top 35%",
        scrub: 2,
        toggleActions: "play none none reverse",
      },
    });

    // Container fade in
    gsap.from(loremContainerRef.current, {
      opacity: 0,
      x: -50,
      duration: 1,
      scrollTrigger: {
        trigger: loremContainerRef.current,
        start: "top 85%",
        end: "top 50%",
        scrub: 1.5,
      },
    });
  }, []);

  // Text Ref Animation
  useEffect(() => {
    if (textRef.current) {
      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, []);

  // GSAP Animations
  useEffect(() => {
    // Title animation
    gsap.from(titleRef.current, {
      duration: 1,
      y: -50,
      opacity: 0,
      ease: "power3.out",
      delay: 0.2,
    });

    // Profile card animation
    gsap.from(profileCardRef.current, {
      duration: 1.2,
      scale: 0.8,
      opacity: 0,
      ease: "elastic.out(1, 0.5)",
      delay: 0.5,
    });

    // Skill cards staggered animation
    const validSkillCards = skillCardsRef.current.filter(
      (card) => card !== null
    );
    if (validSkillCards.length > 0) {
      gsap.from(validSkillCards, {
        duration: 0.8,
        x: -100,
        opacity: 0,
        stagger: 0.15,
        ease: "power3.out",
        delay: 0.9,
      });
    }

    // Stats cards animation
    const validStatCards = statCardsRef.current.filter((card) => card !== null);
    if (validStatCards.length > 0) {
      gsap.from(validStatCards, {
        duration: 1,
        y: 100,
        opacity: 0,
        stagger: 0.2,
        ease: "back.out(1.7)",
        delay: 1.3,
      });
    }
  }, []);

  const skills = [
    {
      icon: Code,
      title: "Frontend Development",
      description: "React, Next.js, JavaScript, TypeScript",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Zap,
      title: "Backend Development",
      description: "Node.js, Solidity, Smart Contract",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Rocket,
      title: "Blockchain",
      description: "Advance, Solidity, Dapps, Test, Library",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: Target,
      title: "DevOps & Tools",
      description: "Remix IDE, Hardhat, VS-Code, Text-Net, Extensions",
      color: "from-green-500 to-teal-500",
    },
  ];

  const stats = [
    { icon: Code, label: "Projects", value: "30+", color: "bg-blue-500" },
    {
      icon: Briefcase,
      label: "Experience",
      value: "1+ Years",
      color: "bg-purple-500",
    },
    { icon: Award, label: "Course", value: "10+", color: "bg-orange-500" },
    { icon: User, label: "Clients", value: "10+", color: "bg-green-500" },
  ];

  return (
    <section className="overflow-hidden min-h-screen bg-gradient-to-br bg-[#0E0B12]  py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-6xl md:text-7xl font-bold text-white mb-4">
            About{" "}
            <span className="bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-800 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <p className="text-gray-400 text-lg">
            Crafting digital experiences with passion and precision
          </p>
        </div>

        {/* Profile Card */}
        <div ref={profileCardRef}>
          <Tilt
            tiltMaxAngleX={5}
            tiltMaxAngleY={5}
            perspective={1500}
            scale={1.05}
            transitionSpeed={400}
            glareEnable={true}
            glareMaxOpacity={0.3}
            glareColor="#ff0000"
            glarePosition="all"
            glareBorderRadius="24px"
          >
            <div className="bg-gradient-to-br from-black via-indigo-950/90 to-pink-900/50 rounded-3xl p-8 md:p-12 mb-12 shadow-2xl">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-xl">
                  <User className="w-16 h-16 text-purple-600/30" />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">
                    Blockchain Developer
                  </h3>
                  <p className="text-white/90 text-lg leading-relaxed mb-4">
                    I'm a passionate developer dedicated to creating innovative
                    and impactful Blockchain digital solutions. With a strong
                    foundation in both frontend and smart Contract, I bring
                    ideas to life with clean code and creative problem-solving.
                  </p>
                  <p ref={textRef} className="text-white/80">
                    When I'm not coding, you'll find me exploring new
                    technologies, contributing to open source, or sharing
                    knowledge with the developer community.
                  </p>
                </div>
              </div>
            </div>
          </Tilt>
        </div>

        {/* Animated Lorem Text Container */}
        <div className="relative mb-12 px-2 sm:px-4">
          <div ref={loremContainerRef} className="relative w-full">
            <div className="absolute -inset-2 sm:-inset-4 md:-inset-6 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10 blur-xl sm:blur-2xl rounded-2xl pointer-events-none"></div>

            <div className="relative bg-gradient-to-br from-slate-900/70 via-indigo-900/50 to-purple-900/50 backdrop-blur-md rounded-xl sm:rounded-2xl p-5 sm:p-7 md:p-9 border border-purple-500/30 shadow-2xl w-full overflow-hidden">
              <p
                ref={loremTextRef}
                className="text-gray-100 text-base sm:text-lg md:text-xl leading-loose tracking-wide break-words font-normal drop-shadow-md"
                style={{
                  perspective: "1200px",
                  transformStyle: "preserve-3d",
                }}
              >
                When I entered the blockchain field, I didn't even have basic
                knowledge of computers. I had taken a different path in my
                studies, so the journey was tough. But I've been curious about
                technology since I was young, and with courage, I jumped into my
                dream field. Leaving everything behind to learn new technology
                wasn't easy, especially without a community. I don't have any
                computer background certificates, but I believe that if you have
                the willpower, you can achieve anything, no matter what. It
                wasn't easy for me, but I didn't give up—I kept working at it. I
                tried, failed, tried again, and gradually learned a lot. Now, I
                want to build something of my own in this field. One thing I've
                realized for sure—if you believe in yourself, anything can be
                started, and most importantly, you have to love the field you're
                in. The confidence I have today wouldn't exist if I hadn't made
                some hard decisions along the way. Now, I'm seeking a Blockchain
                Developer role with opportunities to learn and contribute to
                building the financial systems of tomorrow.
              </p>

              <div className="mt-5 sm:mt-7 h-0.5 sm:h-1 w-24 sm:w-28 md:w-36 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-full shadow-lg"></div>
            </div>
          </div>
        </div>

        {/* Skills Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={index}
                ref={(el) => (skillCardsRef.current[index] = el)}
              >
                <Tilt
                  tiltMaxAngleX={20}
                  tiltMaxAngleY={20}
                  perspective={1000}
                  scale={1.02}
                  transitionSpeed={400}
                  glareEnable={true}
                  glareMaxOpacity={0.4}
                  glareColor="#ff00ff"
                  glarePosition="all"
                  glareBorderRadius="16px"
                >
                  <div className="bg-gradient-to-br from-black via-indigo-950 to-pink-900/50 rounded-2xl p-6 border border-gray-700 shadow-xl cursor-pointer h-full">
                    <div
                      className={`w-14 h-14 bg-gradient-to-br ${skill.color} rounded-xl flex items-center justify-center mb-4 shadow-lg`}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2">
                      {skill.title}
                    </h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {skill.description}
                    </p>
                  </div>
                </Tilt>
              </div>
            );
          })}
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} ref={(el) => (statCardsRef.current[index] = el)}>
                <Tilt
                  tiltMaxAngleX={10}
                  tiltMaxAngleY={10}
                  perspective={1000}
                  scale={1.03}
                  transitionSpeed={300}
                  glareEnable={true}
                  glareMaxOpacity={0.2}
                  glareColor="#00ffff"
                  glarePosition="all"
                  glareBorderRadius="16px"
                >
                  <div className="bg-gradient-to-br from-black via-indigo-950/20 to-pink-900/30 rounded-2xl p-6 border border-gray-700 shadow-xl cursor-pointer h-full">
                    <div className="flex flex-col items-center text-center">
                      <div
                        className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center mb-3 shadow-lg`}
                      >
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="text-2xl md:text-3xl font-bold text-white mb-1">
                        {stat.value}
                      </h4>
                      <p className="text-gray-400 text-sm">{stat.label}</p>
                    </div>
                  </div>
                </Tilt>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        .char-lorem {
          display: inline-block;
          transform-origin: center bottom;
          will-change: transform, opacity, filter;
        }
      `}</style>
    </section>
  );
};

export default About;
