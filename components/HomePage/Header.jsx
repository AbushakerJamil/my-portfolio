import { useState, useEffect, useRef } from "react";
import {
  Menu,
  X,
  Home,
  User,
  Briefcase,
  Code,
  Mail,
  FileText,
} from "lucide-react";

const Header = ({ onShowCv }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState(null);
  const menuRef = useRef(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleMenuHover = (section) => {
    setActiveMegaMenu(section);
  };

  const handleMenuLeave = () => {
    setActiveMegaMenu(null);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
        setActiveMegaMenu(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id.toLowerCase());
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const navItems = [
    { id: "home", label: "Home", icon: Home, url: "#home" },
    { id: "about", label: "About", icon: User, url: "#about" },
    { id: "projects", label: "Projects", icon: Briefcase, url: "#projects" },
    { id: "skills", label: "Skills", icon: Code, url: "#skills" },
    { id: "contact", label: "Contact", icon: Mail, url: "#contact" },
  ];

  const skills = [
    { name: "Blockchain", url: "/blockchain.webp" },
    { name: "Solidity", url: "/solidity.webp" },
    { name: "Ethers.js", url: "/ethersjs.webp" },
    { name: "Hardhat", url: "/ha.webp" },
    { name: "Defi", url: "/dapps.webp" },
    { name: "Dapps", url: "/dapps.webp" },
    { name: "Wagmi", url: "/wagmi.webp" },
    { name: "Oracle", url: "oraclr.webp" },
    { name: "Next Js", url: "/next.svg" },
    { name: "React", url: "/react.webp" },
    { name: "JavaScript", url: "/js.webp" },
    { name: "TypeScript", url: "/ts.webp" },
    { name: "Node.js", url: "/node.webp" },
    { name: "Tailwind CSS", url: "/tailwind.webp" },
    { name: "Git", url: "/git.webp" },
  ];

  const scrollToSection = (sectionId, url) => {
    setActiveSection(sectionId);
    setIsOpen(false);
    setActiveMegaMenu(null);
    const target = document.querySelector(url.toLowerCase());
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToProjects = () => {
    const section = document.querySelector("#home");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
    setActiveMegaMenu(null);
  };

  return (
    <>
      <header
        ref={menuRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-gray-900/95 backdrop-blur-lg shadow-xl border-b border-gray-800"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div
              onClick={scrollToProjects}
              className="flex items-center space-x-2 group cursor-pointer"
            >
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-[1px] border-purple-500 group-hover:border-fuchsia-500 transition-all duration-300">
                <div className="absolute inset-0 flex items-center justify-center  font-bold text-xl">
                  <img src="/mylogoo.webp" alt="mylogoo" />
                </div>
              </div>
              <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-400 transition-all duration-300">
                A .Jamil
              </span>
            </div>

            {/* Desktop Navigation */}

            <nav className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={item.id}
                    className={`relative group ${
                      item.id === "skills" ? "relative" : ""
                    }`}
                    onMouseEnter={() =>
                      item.id === "skills" && handleMenuHover("skills")
                    }
                    onMouseLeave={() =>
                      item.id === "skills" && handleMenuLeave()
                    }
                  >
                    <button
                      onClick={() => scrollToSection(item.id, item.url)}
                      className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                        activeSection === item.id
                          ? "bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white shadow-lg"
                          : "text-gray-300 hover:text-white hover:bg-gray-800"
                      }`}
                    >
                      <IconComponent size={18} />
                      <span className="font-medium">{item.label}</span>
                    </button>
                    {/* Skills Dropdown */}
                    {item.id === "skills" && activeMegaMenu === "skills" && (
                      <div
                        className="fixed left-1/2 transform -translate-x-1/2 mt-2 bg-gray-900/95 backdrop-blur-lg border border-gray-800 rounded-xl shadow-2xl z-50 animate-fade-in overflow-hidden"
                        style={{
                          width: "60vw",
                          height: "30vh",
                          minHeight: "200px",
                        }}
                        role="menu"
                        aria-labelledby="skills-menu"
                      >
                        <div className="h-full p-[2px] overflow-y-auto">
                          <div className="grid grid-cols-5 gap-2">
                            {skills.map((skill) => (
                              <div
                                key={skill.name}
                                className="flex flex-col items-center justify-center px-3 py-3 rounded-lg bg-gray-800/50 hover:bg-gradient-to-br hover:from-purple-600/20 hover:to-fuchsia-600/20 border border-gray-700 hover:border-purple-500 transition-all duration-300 cursor-pointer group"
                              >
                                {skill.url ? (
                                  <img
                                    src={skill.url}
                                    alt={skill.name}
                                    className="w-6 h-6 rounded-full object-contain group-hover:scale-110 transition-transform duration-300"
                                  />
                                ) : (
                                  <span className="text-xl group-hover:scale-110 transition-transform duration-300">
                                    {skill.icon}
                                  </span>
                                )}
                                <span className="text-sm text-gray-300 group-hover:text-fuchsia-400 transition-colors duration-300 text-center">
                                  {skill.name}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>

            <div className="hidden lg:flex items-center space-x-3">
              <a href="#cv">
                <button
                  onClick={onShowCv}
                  className="flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white hover:from-purple-700 hover:to-fuchsia-700 shadow-lg hover:shadow-purple-500/50"
                >
                  <FileText size={18} />
                  <span>Resume</span>
                </button>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden items-center space-x-3">
              <button
                onClick={toggleMenu}
                className="p-2 rounded-lg bg-gray-800 text-purple-400"
                aria-label={isOpen ? "Close menu" : "Open menu"}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden fixed inset-y-0 right-0 w-4/5 max-w-sm transform transition-transform duration-300 ease-in-out z-50 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } bg-gray-900 border-l border-gray-800`}
        >
          <div className="h-full flex flex-col">
            {/* Mobile Header */}
            <div className="flex justify-between items-center p-6 border-b border-gray-800">
              <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-400">
                Menu
              </span>
              <button
                onClick={toggleMenu}
                className="p-2 rounded-lg text-purple-400 hover:bg-gray-800"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>

            {/* Mobile Navigation */}
            <nav className="flex-1 p-6 space-y-2">
              {navItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <div key={item.id}>
                    <button
                      onClick={() => {
                        scrollToSection(item.id, item.url);
                        if (item.id === "skills") {
                          setActiveMegaMenu(
                            activeMegaMenu === "skills" ? null : "skills"
                          );
                        }
                      }}
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                        activeSection === item.id
                          ? "bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white"
                          : "text-gray-300 hover:bg-gray-800"
                      }`}
                    >
                      <IconComponent size={18} />
                      <span className="font-medium">{item.label}</span>
                    </button>
                    {/* Skills Dropdown for Mobile */}
                    {item.id === "skills" && activeMegaMenu === "skills" && (
                      <div className="pl-4 pt-2 pb-4 grid grid-cols-2 gap-4 max-h-48 overflow-y-auto animate-fade-in">
                        {skills.map((skill, index) => (
                          <div
                            key={index}
                            className="flex items-center space-x-2 text-gray-300 hover:text-fuchsia-500 transition-colors duration-300"
                          >
                            {skill.url ? (
                              <img
                                src={skill.url}
                                alt={skill.name}
                                className="w-5 h-5 object-contain"
                              />
                            ) : (
                              <span>{skill.icon}</span>
                            )}
                            <span className="text-sm">{skill.name}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>

            <div className="p-6 border-t border-gray-800">
              <button
                onClick={() => {
                  onShowCv();
                  setIsOpen(false);
                }}
                className="w-full flex items-center justify-center space-x-2 px-4 py-3 rounded-lg font-medium transition-all duration-300 bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white hover:from-purple-700 hover:to-fuchsia-700"
              >
                <FileText size={18} />
                <span>Download Resume</span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Overlay */}
        {isOpen && (
          <div
            className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            onClick={toggleMenu}
          />
        )}
      </header>
    </>
  );
};

export default Header;
