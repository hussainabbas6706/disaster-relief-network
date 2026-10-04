"use client";

import { useState } from "react";
import { Sparkles, Send, X, Minimize2, Maximize2, Bot, ArrowRight } from "lucide-react";

export default function AiAssistantWidget({ isOpen, onClose }) {
  const [messages, setMessages] = useState([
    {
      role: "user",
      text: "Find safest route for Medical Supplies to Zone Alpha avoiding the flood blockages.",
    },
    {
      role: "assistant",
      text: "Analyzing road blockages... Found 1 critical blockage on M.A. Jinnah Rd. OSRM calculated an optimal detour via Clifton Bypass.",
      chips: ["Highlight Safe Route", "Nearest Depot: W1 (85% Stock)"],
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isMinimized, setIsMinimized] = useState(false);

  if (!isOpen) return null;

  const handleSend = (e) => {
    e?.preventDefault();
    if (!inputValue.trim()) return;

    const userText = inputValue;
    setMessages((prev) => [...prev, { role: "user", text: userText }]);
    setInputValue("");

    // Simulate AI response ready for Phase 3 API integration
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text: `Executing spatial query for: "${userText}". Nearest operational warehouse located at Depot W1 with 45,000L water and 1,200 medical kits.`,
          chips: ["Plot OSRM Route", "Dispatch Relief Convoy"],
        },
      ]);
    }, 600);
  };

  return (
    <div className="absolute bottom-5 right-5 z-[999] w-80 sm:w-96 select-none transition-all duration-300">
      {/* Outer Card */}
      <div className="backdrop-blur-xl bg-slate-950/90 border border-cyan-500/40 shadow-[0_12px_40px_rgba(0,0,0,0.7)] rounded-2xl overflow-hidden flex flex-col text-slate-200">
        {/* Header Bar */}
        <div className="px-3.5 py-2.5 bg-gradient-to-r from-slate-900 to-slate-950 border-b border-slate-800/80 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="p-1 rounded-lg bg-cyan-500/20 text-cyan-400">
              <Sparkles className="w-3.5 h-3.5" />
            </span>
            <span className="text-xs font-bold text-white tracking-wide uppercase">
              AI Relief Assistant
            </span>
          </div>

          <div className="flex items-center gap-1 text-slate-400">
            <button
              onClick={() => setIsMinimized(!isMinimized)}
              className="p-1 hover:text-white hover:bg-slate-800 rounded transition-colors"
            >
              {isMinimized ? (
                <Maximize2 className="w-3.5 h-3.5" />
              ) : (
                <Minimize2 className="w-3.5 h-3.5" />
              )}
            </button>
            <button
              onClick={onClose}
              className="p-1 hover:text-white hover:bg-slate-800 rounded transition-colors"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Body (Collapsible) */}
        {!isMinimized && (
          <>
            {/* Message History */}
            <div className="p-3.5 max-h-64 overflow-y-auto space-y-3 custom-scrollbar text-xs">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex flex-col ${
                    msg.role === "user" ? "items-end" : "items-start"
                  }`}
                >
                  <div
                    className={`p-2.5 rounded-xl max-w-[85%] leading-relaxed ${
                      msg.role === "user"
                        ? "bg-cyan-600 text-white rounded-br-none shadow-md font-medium"
                        : "bg-slate-900/90 border border-slate-800 text-slate-200 rounded-bl-none shadow-md"
                    }`}
                  >
                    {msg.role === "assistant" && (
                      <div className="flex items-center gap-1.5 text-cyan-400 font-semibold text-[10px] mb-1">
                        <Bot className="w-3 h-3" />
                        <span>RELIEF INTELLIGENCE</span>
                      </div>
                    )}
                    <p>{msg.text}</p>

                    {/* Action Chips */}
                    {msg.chips && (
                      <div className="mt-2 flex flex-wrap gap-1.5 pt-1.5 border-t border-slate-800/80">
                        {msg.chips.map((chip, cIdx) => (
                          <button
                            key={cIdx}
                            className="text-[10px] px-2 py-0.5 rounded-md bg-cyan-950/80 text-cyan-300 border border-cyan-800/60 hover:bg-cyan-900 hover:text-white transition-colors flex items-center gap-1"
                          >
                            <span>{chip}</span>
                            <ArrowRight className="w-2.5 h-2.5" />
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Input Row */}
            <form
              onSubmit={handleSend}
              className="p-2.5 bg-slate-900/60 border-t border-slate-800/80 flex items-center gap-2"
            >
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask AI: route around blockages, check supplies..."
                className="flex-1 bg-slate-950 text-xs text-white placeholder-slate-500 px-3 py-2 rounded-xl border border-slate-800 focus:outline-none focus:border-cyan-500/80 transition-colors"
              />
              <button
                type="submit"
                className="p-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white transition-colors shadow-[0_0_10px_rgba(6,182,212,0.4)]"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
