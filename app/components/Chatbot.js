"use client"

import React, { useEffect, useRef, useState } from "react";

export default function Chatbot() {
    const API_URL = process.env.NEXT_PUBLIC_API_URL;

  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [awaiting, setAwaiting] = useState(false);
  const listRef = useRef(null);

  useEffect(() => {
    if (!listRef.current) return;
    listRef.current.scrollTop = listRef.current.scrollHeight;
  }, [messages, awaiting]);

  async function sendMessage() {
    if (!input.trim() || awaiting) return;
    const userText = input.trim();
    setInput("");
    setMessages((s) => [...s, { id: Date.now() + Math.random(), role: "user", text: userText }]);
    setAwaiting(true);
    try {
      const res = await fetch(`${API_URL}/chatbot`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userText }),
      });
      const data = await res.json();
      const botText = data?.response || "No response";
      setMessages((s) => [...s, { id: Date.now() + Math.random(), role: "bot", text: botText }]);
    } catch (e) {
      setMessages((s) => [...s, { id: Date.now() + Math.random(), role: "bot", text: "Error: could not reach AI." }]);
    } finally {
      setAwaiting(false);
    }
  }

  function onKey(e) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  }

  return (
    <div className="w-full max-w-6xl mx-auto p-6" id="chatbot">
      <div className="bg-gradient-to-br from-slate-900/90 via-slate-800/90 to-slate-900/95 border border-slate-700/40 rounded-2xl shadow-[0_20px_60px_rgba(2,6,23,0.8)] p-6 flex flex-col lg:flex-row gap-6">
        <div className="lg:w-1/2 flex flex-col justify-between gap-6">
          <div className="flex flex-col gap-4">
            <h3 className="text-3xl lg:text-4xl font-[family:var(--font-poppins)] text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-indigo-400 to-purple-400">
              Ask Shahnawaz&#39;s Portfolio Assistant
            </h3>
            <p className="text-sm lg:text-base text-slate-300 font-[family:var(--font-inter)] leading-relaxed">
              Quick answers about skills, projects, services and contact. This assistant only responds about Shahnawaz&#39;s work and portfolio.
            </p>
          </div>

          <div className="flex flex-col gap-3 mt-4">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-400 to-indigo-500 shadow-[inset_0_2px_6px_rgba(255,255,255,0.03)] flex items-center justify-center">
                  <span className="text-slate-900 font-bold">SS</span>
                </div>

                <div className="text-left">
                  <div className="text-sm text-slate-200 font-[family:var(--font-sora)]">
                    Shahnawaz Saddam Butt
                  </div>
                  <div className="text-xs text-slate-400 font-[family:var(--font-jetbrains-mono)]">
                    Full Stack Developer
                  </div>
                </div>
              </div>

              <div className="text-xs text-slate-400 font-[family:var(--font-manrope)]">
                Available for hire · Email available
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="px-3 py-2 rounded-lg bg-slate-800/60 border border-slate-700/40 text-slate-200 text-xs">
                Next.js
              </div>
              <div className="px-3 py-2 rounded-lg bg-slate-800/60 border border-slate-700/40 text-slate-200 text-xs">
                Tailwind
              </div>
              <div className="px-3 py-2 rounded-lg bg-slate-800/60 border border-slate-700/40 text-slate-200 text-xs">
                React
              </div>
              <div className="px-3 py-2 rounded-lg bg-slate-800/60 border border-slate-700/40 text-slate-200 text-xs">
                Node
              </div>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2 flex flex-col relative">
          <div
            ref={listRef}
            className="flex-1 overflow-auto min-h-[220px] max-h-[420px] rounded-xl p-4 bg-gradient-to-t from-slate-900/60 to-slate-800/50 border border-slate-700/40 shadow-inner"
          >
            {messages.length === 0 && (
              <div className="w-full h-full flex items-center justify-center text-slate-400 font-[family:var(--font-inter)]">
                Send a message to begin
              </div>
            )}

            {messages.map((m) => (
              <div
                key={m.id}
                className={`mb-4 flex ${
                  m.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`${
                    m.role === "user"
                      ? "bg-gradient-to-r from-cyan-400 to-indigo-400 text-slate-900"
                      : "bg-slate-800/70 text-slate-200"
                  } max-w-[80%] p-3 rounded-xl shadow-md border border-slate-700/40`}
                >
                  {m.text}
                </div>
              </div>
            ))}

            {awaiting && (
              <div className="mb-4 flex justify-start">
                <div className="bg-slate-800/60 text-slate-300 max-w-[70%] p-3 rounded-xl animate-pulse">
                  Thinking...
                </div>
              </div>
            )}
          </div>

          <div className="mt-4 flex items-center gap-3">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={onKey}
              disabled={awaiting}
              placeholder={
                awaiting
                  ? "Waiting for response..."
                  : "Type your question about Shahnawaz"
              }
              className="flex-1 min-h-[56px] max-h-28 resize-none rounded-lg p-3 bg-slate-900/70 text-slate-200 border border-slate-700/40 focus:outline-none"
            />

            <button
              onClick={sendMessage}
              disabled={awaiting || !input.trim()}
              className={`px-4 py-3 rounded-lg font-semibold ${
                awaiting || !input.trim()
                  ? "bg-slate-700 text-slate-400 cursor-not-allowed"
                  : "bg-gradient-to-r from-cyan-400 to-indigo-500 text-slate-900 shadow-lg"
              }`}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}