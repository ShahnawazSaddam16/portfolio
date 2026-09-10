"use client";

import React, { useState } from "react";
import { Github, Copy, Mail, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./Navbar";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    budget: "",
    timeline: "",
    service: "Custom Solution",
    projectDetails: "",
  });

  const [responseMsg, setResponseMsg] = useState("");
  const [showCopyPopup, setShowCopyPopup] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState({ show: false, message: "", type: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong 😬");

      setToast({ show: true, message: "✅ Quote request sent successfully!", type: "success" });
      setFormData({ name: "", email: "", budget: "", timeline: "", service: "Custom Solution", projectDetails: "" });
      setTimeout(() => setToast({ show: false, message: "", type: "" }), 4000);
    } catch (error) {
      setToast({ show: true, message: `❌ ${error.message}`, type: "error" });
      setTimeout(() => setToast({ show: false, message: "", type: "" }), 4000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCopy = async (text) => {
    await navigator.clipboard.writeText(text);
    setShowCopyPopup(true);
    setTimeout(() => setShowCopyPopup(false), 2000);
  };

  return (
    <section className="min-h-screen" id="Contact">
      <style>{`
        @keyframes slideInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(34, 211, 238, 0.2); }
          50% { box-shadow: 0 0 40px rgba(34, 211, 238, 0.5); }
        }
        .contact-card {
          animation: slideInUp 0.6s ease-out forwards;
          transition: all 0.4s cubic-bezier(0.23, 1, 0.320, 1);
          transform-style: preserve-3d;
        }
        .contact-card:hover {
          transform: translateY(-5px) rotateX(2deg);
          box-shadow: 0 20px 50px rgba(34, 211, 238, 0.3);
        }
        .form-input {
          background: linear-gradient(135deg, rgba(30, 41, 59, 0.6), rgba(15, 23, 42, 0.6));
          border: 1px solid rgba(34, 211, 238, 0.2);
          transition: all 0.3s ease;
        }
        .form-input:focus {
          border-color: rgba(34, 211, 238, 0.6);
          box-shadow: 0 0 20px rgba(34, 211, 238, 0.2);
          background: linear-gradient(135deg, rgba(34, 211, 238, 0.1), rgba(59, 130, 246, 0.1));
        }
      `}</style>

      <motion.section
        className="Contact px-4 mt-20 pb-20"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <motion.div
            className="text-left mb-16"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-5xl mt-30 sm:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Got an idea? Let&apos;s ship it.
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl">
              I&apos;m Shahnawaz — a full-stack developer who turns rough ideas into production-ready products. Tell me what you&apos;re building.
            </p>
          </motion.div>

          {/* Contact Icons */}
          <motion.div
            className="flex gap-6 mb-12"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <motion.button
              onClick={() => handleCopy("shahnawazsaddamb@gmail.com")}
              className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-cyan-500/30 hover:border-cyan-500/60 transition-all duration-300 group"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-6 h-6 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
            </motion.button>

            <motion.a
              href="https://github.com/ShahanwazSaddam144"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-purple-500/30 hover:border-purple-500/60 transition-all duration-300 group"
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-6 h-6 text-purple-400 group-hover:text-purple-300 transition-colors" />
            </motion.a>
          </motion.div>

          {/* ================= REQUEST A QUOTE ================= */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2 className="text-3xl font-bold text-white mb-2">Request a quote</h2>
            <p className="text-gray-400">What do you need?</p>
          </motion.div>

          {/* Service Options */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {["Full-Stack Web App", "Backend & APIs", "SEO & Performance", "E-commerce Store", "Custom Solution"].map((service, idx) => (
              <motion.button
                key={service}
                onClick={() => setFormData({ ...formData, service })}
                className={`p-4 rounded-xl border transition-all duration-300 transform hover:scale-105 ${
                  formData.service === service
                    ? "border-cyan-400 bg-cyan-500/20 text-cyan-300 shadow-lg shadow-cyan-500/30"
                    : "border-gray-600 bg-slate-800/50 text-gray-300 hover:border-cyan-400/50"
                }`}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                {service}
              </motion.button>
            ))}
          </motion.div>

          {/* Working with me */}
          <motion.div
            className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-cyan-500/30 rounded-2xl p-6 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">Working with me</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                <span className="text-gray-300">Reply within 24 hours</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span className="text-gray-300">MVPs shipped in weeks, not months</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span className="text-gray-300">Full ownership from design to deploy</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                <span className="text-gray-300">Clean code, tested & maintainable</span>
              </div>
            </div>
          </motion.div>

          {/* Copy Popup */}
          <AnimatePresence>
            {showCopyPopup && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-green-600 text-white px-4 py-2 rounded-md shadow-lg z-50 pointer-events-none"
              >
                ✅ Copied!
              </motion.div>
            )}
          </AnimatePresence>

          {/* ================= QUOTE FORM ================= */}
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-white mb-2">Tell me about your project.</h3>
            <p className="text-gray-400">All fields optional except name & email.</p>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.input
                name="name"
                type="text"
                placeholder="Your name"
                onChange={handleChange}
                value={formData.name}
                required
                whileFocus={{ scale: 1.02 }}
                className="form-input w-full px-5 py-3 rounded-lg text-gray-300 placeholder-gray-500 focus:placeholder-gray-400 outline-none"
              />

              <motion.input
                name="email"
                type="email"
                placeholder="Your email"
                onChange={handleChange}
                value={formData.email}
                required
                whileFocus={{ scale: 1.02 }}
                className="form-input w-full px-5 py-3 rounded-lg text-gray-300 placeholder-gray-500 focus:placeholder-gray-400 outline-none"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.select
                name="budget"
                onChange={handleChange}
                value={formData.budget}
                className="form-input w-full px-5 py-3 rounded-lg text-gray-300 outline-none bg-slate-800/60"
              >
                <option value="" disabled>Budget</option>
                <option value="Not sure yet">Not sure yet</option>
                <option value="$5k - $10k">$5k - $10k</option>
                <option value="$10k - $25k">$10k - $25k</option>
                <option value="$25k+">$25k+</option>
              </motion.select>

              <motion.select
                name="timeline"
                onChange={handleChange}
                value={formData.timeline}
                className="form-input w-full px-5 py-3 rounded-lg text-gray-300 outline-none bg-slate-800/60"
              >
                <option value="" disabled>Timeline</option>
                <option value="Flexible">Flexible</option>
                <option value="1-2 months">1-2 months</option>
                <option value="3-6 months">3-6 months</option>
                <option value="6+ months">6+ months</option>
              </motion.select>
            </div>

            <motion.textarea
              name="projectDetails"
              placeholder="Project details (optional) - What are you building? Any tech preferences? What's the main goal?"
              onChange={handleChange}
              value={formData.projectDetails}
              rows="4"
              whileFocus={{ scale: 1.02 }}
              className="form-input w-full px-5 py-3 rounded-lg text-gray-300 placeholder-gray-500 focus:placeholder-gray-400 outline-none resize-none"
            />

            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={!isSubmitting ? { scale: 1.05, boxShadow: "0 0 30px rgba(34, 211, 238, 0.5)" } : {}}
              whileTap={!isSubmitting ? { scale: 0.95 } : {}}
              className={`w-full px-6 py-3 rounded-lg text-white font-bold cursor-pointer transition-all duration-300 focus:outline-none flex items-center justify-center gap-2 group ${
                isSubmitting
                  ? "bg-gray-600 cursor-not-allowed opacity-50"
                  : "bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 hover:from-cyan-400 hover:via-blue-400 hover:to-purple-500"
              }`}
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Sending...
                </>
              ) : (
                <>
                  <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                  Request Quote
                </>
              )}
            </motion.button>
          </motion.form>

          {/* Toast Notification */}
          <AnimatePresence>
            {toast.show && (
              <motion.div
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 300 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className={`fixed top-20 right-4 z-50 px-6 py-4 rounded-lg shadow-lg backdrop-blur-xl border ${
                  toast.type === "success"
                    ? "bg-green-500/90 border-green-400/50 text-white"
                    : "bg-red-500/90 border-red-400/50 text-white"
                }`}
              >
                <p className="font-medium">{toast.message}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.section>
    </section>
  );
};

export default Contact;
