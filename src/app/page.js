"use client";

import { useState } from "react";
import { Header, HeroSection } from "../../components/HomePage";
import About from "../../components/HomePage/About";
import Contact from "../../components/HomePage/Contact";
import Projects from "../../components/HomePage/Projects";
import Cv from "../../components/HomePage/Cv";

export default function Home() {
  const [showCV, setShowCV] = useState(false);

  // useEffect(() => {
  //   if (typeof window === "undefined") return;

  //   try {
  //     const savedMode = localStorage.getItem("darkMode");
  //     let systemPrefersDark = false;

  //     try {
  //       systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  //     } catch (error) {
  //       systemPrefersDark = false;
  //     }

  //     const shouldUseDarkMode = savedMode
  //       ? savedMode === "true"
  //       : systemPrefersDark;

  //     setIsDarkMode(shouldUseDarkMode);
  //     applyTheme(shouldUseDarkMode);
  //   } catch (error) {
  //     console.error("Error initializing theme:", error);
  //     setIsDarkMode(true);
  //     document.documentElement.classList.add("dark");
  //   }
  // }, []);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    applyTheme(newMode);

    try {
      localStorage.setItem("darkMode", newMode.toString());
    } catch (error) {
      console.error("Error saving theme preference", error);
    }
  };

  const applyTheme = (dark) => {
    if (typeof document === "undefined") return;
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <div
      className={`min-h-screen ${
        "bg-black text-white"
      } transition-colors duration-300`}
    >
      <Header onShowCv={() => setShowCV(true)}  />

      <main>
        <section id="home">
          <HeroSection
            
            onShowCv={() => setShowCV(true)} 
          />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="projects">
          <Projects  />
        </section>

        {/* Conditionally Render CV */}
        {showCV && (
          <section id="cv">
            <Cv />
          </section>
        )}

        <section id="Contact">
          <Contact />
        </section>
      </main>

    </div>
  );
}
