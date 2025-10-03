import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
  MessageSquare,
  Code,
  Shield,
  AlertCircle,
  CheckCircle,
} from "lucide-react";

const Contact = () => {
  const currentYear = new Date().getFullYear();
  const titleRef = useRef(null);
  const formRef = useRef(null);

  const NEXT_PUBLIC_EMAILJS_PUBLIC = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC;
  const NEXT_PUBLIC_EMAILJS_TEMPLATEID =
    process.env.NEXT_PUBLIC_EMAILJS_TEMPLATEID;
  const NEXT_PUBLIC_EMAILJS_SERVICE = process.env.NEXT_PUBLIC_EMAILJS_SERVICE;
  

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const bgColor = "bg-[#0E0B12]/10";
  const cardBg = "bg-[#13101A]";
  const textColor = "text-white";
  const secondaryTextColor = "text-gray-400";
  const borderColor = "border-gray-800/30";
  const inputBg = "bg-gray-800/50 border-gray-700";

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };


  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "abushakerjamil254@gmail.com",
      color: "from-fuchsia-500 to-purple-600",
      link: "mailto:abushakerjamil254@gmail.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+880 01647596052",
      color: "from-purple-500 to-pink-600",
      link: "tel:+8801647596052",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Dhaka, Bangladesh",
      color: "from-indigo-500 to-teal-400",
    },
    {
      icon: MessageSquare,
      title: "Response Time",
      value: "Within 24 hours",
      color: "from-green-500 to-emerald-600",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      name: "GitHub",
      url: "https://github.com/AbushakerJamil",
      color: "hover:text-gray-400",
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/abushaker-jamil-1b414b224/",
      color: "hover:text-blue-500",
    },
    {
      icon: Twitter,
      name: "Twitter",
      url: "https://x.com/AbushakerJamil",
      color: "hover:text-blue-400",
    },
    {
      icon: Mail,
      name: "Email",
      url: "mailto:abushakerjamil254@gmail.com",
      color: "hover:text-fuchsia-500",
    },
  ];

  const features = [
    {
      icon: Shield,
      title: "Reliable",
      description: "Quality work delivered on time",
    },
    {
      icon: Code,
      title: "Modern Tech",
      description: "Using latest technologies",
    },
    {
      icon: MessageSquare,
      title: "Great Communication",
      description: "Always responsive and clear",
    },
  ];

  const handleSubmitFrom = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      setFormStatus("error");
      return;
    }

    setIsSubmitting(true);

    try {
      const result = await emailjs.send(
        NEXT_PUBLIC_EMAILJS_SERVICE,
        NEXT_PUBLIC_EMAILJS_TEMPLATEID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject || "No Subject",
          message: formData.message,
          to_email: "abushakerjamil254@gmail.com",
        },
        NEXT_PUBLIC_EMAILJS_PUBLIC
      );

      console.log("SUCCESS!", result.text);
      setFormStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setErrors({});

      setTimeout(() => setFormStatus(""), 5000);
    } catch (error) {
      console.error("FAILED...", error);
      setFormStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className={`relative ${bgColor} overflow-hidden`}>
      <div className="absolute inset-0 z-0">
        <div
          className={`absolute inset-0 ${"bg-gradient-to-br from-[#0E0B12] via-[#13101A] to-[#0E0B12]"}`}
        ></div>

        <div className="absolute inset-0 overflow-hidden">
          <div
            className={`absolute -top-40 -right-40 w-96 h-96 rounded-full ${"bg-gradient-to-br from-fuchsia-500/10 to-purple-600/10"} blur-3xl animate-pulse`}
          ></div>
          <div
            className={`absolute -bottom-40 -left-40 w-96 h-96 rounded-full ${"bg-gradient-to-br from-indigo-500/10 to-teal-400/10"} blur-3xl animate-pulse`}
            style={{ animationDelay: "2s" }}
          ></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div ref={titleRef} className="text-center mb-16">
          <h2 className={`text-5xl md:text-6xl font-bold ${textColor} mb-4`}>
            Get In{" "}
            <span className="bg-gradient-to-r from-fuchsia-500 to-purple-600 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className={`${secondaryTextColor} text-lg`}>
            Let's create something amazing together
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="order-2 lg:order-1">
            <div
              className={`${cardBg} rounded-3xl p-8 border ${borderColor} shadow-2xl hover:shadow-fuchsia-500/10 transition-all duration-500`}
            >
              <h3 className={`text-3xl font-bold ${textColor} mb-6`}>
                Send Message
              </h3>
              <form
                ref={formRef}
                onSubmit={handleSubmitFrom}
                className="space-y-6"
              >
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name *"
                    className={`w-full ${inputBg} ${textColor} border ${
                      errors.name ? "border-red-500" : ""
                    } rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 focus:border-transparent transition-all duration-300 placeholder-gray-500`}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-2 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email *"
                    className={`w-full ${inputBg} ${textColor} border ${
                      errors.email ? "border-red-500" : ""
                    } rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 focus:border-transparent transition-all duration-300 placeholder-gray-500`}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-2 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject (Optional)"
                    className={`w-full ${inputBg} ${textColor} border rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 focus:border-transparent transition-all duration-300 placeholder-gray-500`}
                  />
                </div>

                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message *"
                    rows="5"
                    className={`w-full ${inputBg} ${textColor} border ${
                      errors.message ? "border-red-500" : ""
                    } rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 focus:border-transparent transition-all duration-300 resize-none placeholder-gray-500`}
                  ></textarea>
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-2 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-gradient-to-r from-fuchsia-500 to-purple-600 hover:from-fuchsia-600 hover:to-purple-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-fuchsia-500/50 transform hover:scale-105 ${
                    isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>

                {formStatus === "success" && (
                  <div className="bg-green-500/20 border border-green-500 text-green-400 px-4 py-3 rounded-xl flex items-center gap-2 animate-pulse">
                    <CheckCircle className="w-5 h-5" />
                    Message sent successfully! I will get back to you soon.
                  </div>
                )}

                {formStatus === "error" && (
                  <div className="bg-red-500/20 border border-red-500 text-red-400 px-4 py-3 rounded-xl flex items-center gap-2">
                    <AlertCircle className="w-5 h-5" />
                    Please fix the errors above and try again.
                  </div>
                )}
              </form>
            </div>
          </div>

          <div className="space-y-6 order-1 lg:order-2">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <a
                  key={index}
                  href={info.link}
                  className={`block ${cardBg} rounded-2xl p-6 border ${borderColor} shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group`}
                >
                  <div className="flex items-center gap-5">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${info.color} rounded-xl flex items-center justify-center shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h4 className={`text-lg font-bold ${textColor} mb-1`}>
                        {info.title}
                      </h4>
                      <p className={secondaryTextColor}>{info.value}</p>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>

        <div className={`border-t border-b ${borderColor} py-12 my-12`}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className={`text-center p-6 rounded-xl ${"bg-gray-800/20"} hover:scale-105 transition-transform duration-300`}
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-r from-fuchsia-500/20 to-purple-600/20 text-fuchsia-500 mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h5 className={`text-lg font-semibold ${textColor} mb-2`}>
                    {feature.title}
                  </h5>
                  <p className={`${secondaryTextColor} text-sm`}>
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mb-12">
          <h3 className={`text-3xl font-bold ${textColor} text-center mb-8`}>
            Connect With{" "}
            <span className="bg-gradient-to-r from-fuchsia-500 to-purple-600 bg-clip-text text-transparent">
              Me
            </span>
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-4 rounded-xl ${"bg-gray-800/50"} ${secondaryTextColor} ${
                    social.color
                  } transition-all duration-300 hover:scale-110 hover:shadow-lg border ${borderColor}`}
                  aria-label={social.name}
                >
                  <Icon className="w-6 h-6" />
                </a>
              );
            })}
          </div>
        </div>

        <div className={`border-t ${borderColor} pt-8`}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p
              className={`${secondaryTextColor} text-sm text-center md:text-left`}
            >
              © {currentYear} Portfolio. All rights reserved.
            </p>
            <p className="text-xl text-center md:text-left">
              <span className="bg-gradient-to-r from-fuchsia-500 via-sky-500 to-yellow-700 bg-clip-text text-transparent font-medium animate-pulse">
                Thank you for your Time
              </span>
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className={`${secondaryTextColor} hover:text-fuchsia-500 text-sm transition-colors duration-300`}
              >
                Privacy Policy
              </a>
              <span className={secondaryTextColor}>•</span>
              <a
                href="#"
                className={`${secondaryTextColor} hover:text-fuchsia-500 text-sm transition-colors duration-300`}
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
