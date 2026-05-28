"use client";

import React, { useState } from "react";
import {
  Laptop,
  Code,
  Database,
  Smartphone,
  Globe,
  Palette,
} from "lucide-react";

const servicesData = {
  service1: [
    {
      Icon: Laptop,
      Name: "Web Development",
      Service:
        "Building modern, fast, and fully responsive websites tailored to your business needs.",
      Details: [
        "HTML, CSS, JavaScript",
        "Next.js & React",
        "Responsive Design",
      ],
    },
    {
      Icon: Code,
      Name: "Software Development",
      Service:
        "Custom software solutions with clean architecture and optimized performance.",
      Details: ["C Programming", "JavaScript Apps", "Problem Solving"],
    },
    {
      Icon: Smartphone,
      Name: "React Native",
      Service:
        "Cross-platform mobile applications with smooth UI and native performance.",
      Details: ["Android & iOS", "Reusable Components", "API Integration"],
    },
  ],
  service2: [
    {
      Icon: Database,
      Name: "Backend Development",
      Service:
        "Secure, scalable, and efficient backend systems for modern applications.",
      Details: ["Node.js", "Express.js", "MongoDB"],
    },
    {
      Icon: Globe,
      Name: "SEO & Deployment",
      Service:
        "Optimized websites with proper SEO practices and cloud deployment.",
      Details: ["SEO Optimization", "Vercel / Netlify", "Performance Boost"],
    },
    {
      Icon: Palette,
      Name: "UI/UX Design",
      Service:
        "Clean, modern, and user-focused designs that enhance user experience.",
      Details: ["Figma Design", "Tailwind CSS", "User-Friendly Layouts"],
    },
  ],
  service3: [
    {
      Icon: Code,
      Name: "Full Stack Integration",
      Service:
        "Complete end-to-end solutions combining frontend, backend, and database.",
      Details: ["MERN Stack", "API Design", "Database Architecture"],
    },
    {
      Icon: Globe,
      Name: "API Development",
      Service:
        "RESTful and modern APIs with proper authentication and validation.",
      Details: ["REST APIs", "JWT Auth", "API Documentation"],
    },
    {
      Icon: Laptop,
      Name: "Cloud Solutions",
      Service:
        "Scalable cloud infrastructure and deployment solutions for your projects.",
      Details: ["AWS Integration", "Cloud Hosting", "CI/CD Pipelines"],
    },
  ],
};

const Services = () => {
  const [activeTab, setActiveTab] = useState("service1");

  const currentServices = servicesData[activeTab];

  return (
    <>
      <section className="Services mt-20 px-6 mb-20" id="services">
        <style>{`
          @keyframes slideInUp {
            0% {
              opacity: 0;
              transform: translateY(30px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
          @keyframes cardHover {
            0% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-5px);
            }
            100% {
              transform: translateY(0px);
            }
          }
          .service-card {
            animation: slideInUp 0.6s ease-out forwards;
            transition: all 0.3s cubic-bezier(0.23, 1, 0.320, 1);
          }
          .service-card:hover {
            animation: cardHover 0.5s ease-in-out infinite;
            box-shadow: 0 20px 60px rgba(34, 211, 238, 0.3);
          }
          .tab-button {
            position: relative;
            transition: all 0.3s ease;
          }
          .tab-button.active {
            background: linear-gradient(135deg, rgba(34, 211, 238, 0.2), rgba(59, 130, 246, 0.2));
            border-color: rgba(34, 211, 238, 0.5);
          }
          .tab-button.active::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            height: 2px;
            background: linear-gradient(90deg, #22d3ee, #3b82f6);
          }
        `}</style>

        <h1 className="text-center font-extrabold text-gray-100 text-4xl sm:text-5xl mb-6 font-[family-name:var(--font-poppins)]">
          My Services
        </h1>
        <p className="text-center text-gray-400 text-lg mb-16 max-w-2xl mx-auto font-[family-name:var(--font-inter)]">
          I offer comprehensive solutions across different service categories. Click on a tab to explore.
        </p>

        {/* Tab Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-16 flex-wrap">
          {["service1", "service2", "service3"].map((tab, index) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`tab-button relative px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 border border-cyan-500/30 font-[family-name:var(--font-sora)] ${
                activeTab === tab
                  ? "text-cyan-400 bg-gradient-to-r from-cyan-500/10 to-blue-500/10"
                  : "text-gray-400 hover:text-cyan-300 hover:border-cyan-500/50"
              }`}
            >
              Service {index + 1}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {currentServices.map((service, index) => (
            <div
              key={index}
              className="service-card relative group"
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              {/* Card Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Card Content */}
              <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-cyan-500/20 group-hover:border-cyan-500/50 rounded-2xl p-8 h-full flex flex-col transition-all duration-300">
                {/* Icon */}
                <div className="mb-6 inline-block p-4 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 group-hover:from-cyan-500/30 group-hover:to-blue-500/30 transition-all duration-300">
                  <service.Icon className="w-8 h-8 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-100 mb-4 group-hover:text-cyan-300 transition-colors font-[family-name:var(--font-manrope)]">
                  {service.Name}
                </h3>

                {/* Description */}
                <p className="text-gray-400 mb-6 group-hover:text-gray-300 transition-colors font-[family-name:var(--font-inter)]">
                  {service.Service}
                </p>

                {/* Details List */}
                <ul className="space-y-2 mb-6 flex-grow">
                  {service.Details.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-cyan-400 mt-1.5 flex-shrink-0">✓</span>
                      <span className="text-gray-400 group-hover:text-gray-300 transition-colors font-[family-name:var(--font-jetbrains-mono)]">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Footer */}
                <div className="pt-6 border-t border-cyan-500/10 group-hover:border-cyan-500/30 transition-colors">
                  <p className="text-xs text-cyan-400/70 group-hover:text-cyan-400 transition-colors font-semibold font-[family-name:var(--font-inter)]">
                    ✨ Premium Quality Solutions
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-40 right-10 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>
      </section>
    </>
  );
};

export default Services;
