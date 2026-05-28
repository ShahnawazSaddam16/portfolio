"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faq = [
  {
    question: "How do I track the progress of my project in real-time?",
    answer:
      "You’ll get access to my custom Client Portal where you can track development sprints, task progress, GitHub commits, and give feedback in real time.",
  },
  {
    question: "Which technologies do you specialize in?",
    answer:
      "I specialize in full-stack development using React, Next.js, Node.js, Express, MongoDB, Tailwind CSS, and modern authentication systems like OAuth and JWT.",
  },
  {
    question: "Do you build both frontend and backend?",
    answer:
      "Yes. I design responsive frontends and build secure, scalable backends including APIs, databases, authentication, and admin dashboards.",
  },
  {
    question: "Will my website be mobile responsive?",
    answer:
      "Absolutely. Every project is built mobile-first and tested across devices to ensure smooth performance on phones, tablets, and desktops.",
  },
  {
    question: "Can you integrate third-party services?",
    answer:
      "Yes. I integrate services like Stripe, PayPal, Firebase, Cloudinary, Google OAuth, GitHub OAuth, hCaptcha, and more.",
  },
  {
    question: "Do you provide post-launch support?",
    answer:
      "Yes. I offer bug fixes, performance optimization, and feature updates after launch depending on the support plan we agree on.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Timelines depend on complexity. A landing page may take 3–5 days, while a full-stack app can take 2–4 weeks with milestones.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .faq-item-enter {
          animation: slideDown 0.3s ease-out;
        }
        .faq-card {
          transition: all 0.3s cubic-bezier(0.23, 1, 0.320, 1);
        }
        .faq-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 15px 40px rgba(34, 211, 238, 0.15);
        }
      `}</style>

      {/* Header */}
      <section className="mt-20 px-4 sm:px-8">
        <header className="flex justify-center flex-col items-center text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent font-[family-name:var(--font-poppins)]">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 text-gray-400 text-lg sm:text-xl font-medium max-w-2xl font-[family-name:var(--font-inter)]">
            Everything you need to know about my work, process, and how I can help your business.
          </p>
        </header>
      </section>

      {/* FAQ List */}
      <section className="mt-16 flex justify-center pb-20">
        <div className="w-full max-w-4xl space-y-4 px-4 sm:px-6">
          {faq.map((item, index) => (
            <div
              key={index}
              className="faq-card relative group"
            >
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Content */}
              <div className="relative bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl border border-cyan-500/20 group-hover:border-cyan-500/40 rounded-2xl transition-all duration-300">
                {/* Question */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center gap-4 p-6 text-left hover:bg-cyan-500/5 transition-colors"
                >
                  <h1 className="font-bold text-gray-100 group-hover:text-cyan-300 text-base sm:text-lg transition-colors flex-1 font-[family-name:var(--font-sora)]">
                    {item.question}
                  </h1>
                  <ChevronDown
                    className={`w-6 h-6 text-cyan-400 flex-shrink-0 transition-all duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Answer */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <div className={`px-6 pb-6 border-t border-cyan-500/10 faq-item-enter ${openIndex === index ? '' : 'hidden'}`}>
                    <p className="text-gray-300 text-base leading-relaxed font-[family-name:var(--font-inter)]">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default FAQ;
