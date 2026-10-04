"use client";

import { Bell, Sparkles, PanelRight, ShieldCheck, Radio } from "lucide-react";

export default function Navbar({
  isRightSidebarOpen,
  onToggleRightSidebar,
  isAiWidgetOpen,
  onToggleAiWidget,
}) {
  return (
    <header className="h-14 bg-[#0a0e17] border-b border-slate-800/80 px-4 flex items-center justify-between select-none z-10 shrink-0">
      {/* Left: Branding & Status */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2">
          <Radio className="w-4 h-4 text-cyan-400 animate-pulse" />
          <h1 className="text-sm font-bold tracking-tight text-white uppercase font-sans">
            Disaster Relief Network
          </h1>
        </div>

        <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-emerald-950/80 text-emerald-400 border border-emerald-800/60">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
          Live Ops
        </span>
      </div>

      {/* Right Controls */}
      <div className="flex items-center gap-2.5">
        {/* Toggle AI Assistant Widget */}
        <button
          onClick={onToggleAiWidget}
          title="Toggle AI Relief Assistant"
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all border ${
            isAiWidgetOpen
              ? "bg-cyan-500/20 text-cyan-300 border-cyan-500/50 shadow-[0_0_12px_rgba(6,182,212,0.3)]"
              : "bg-slate-900/80 text-slate-300 border-slate-700 hover:text-white hover:border-slate-600"
          }`}
        >
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span>AI Assistant</span>
        </button>

        {/* Toggle Right Dispatch Sidebar */}
        <button
          onClick={onToggleRightSidebar}
          title="Toggle Active Dispatches Sidebar"
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all border ${
            isRightSidebarOpen
              ? "bg-slate-800 text-white border-slate-600"
              : "bg-slate-900/80 text-slate-300 border-slate-700 hover:text-white"
          }`}
        >
          <PanelRight className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Dispatches</span>
        </button>

        {/* Notifications */}
        <button
          title="Operational Alerts"
          className="relative w-8 h-8 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
        >
          <Bell className="w-4 h-4" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
        </button>

        {/* User / Officer Profile */}
        <div className="flex items-center gap-2 pl-2 border-l border-slate-800">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-cyan-600 to-indigo-700 flex items-center justify-center text-xs font-bold text-white shadow-sm ring-1 ring-white/10">
            HA
          </div>
          <div className="hidden md:flex flex-col text-left">
            <span className="text-xs font-semibold text-slate-200 leading-none">
              Hussain Abbas
            </span>
            <span className="text-[10px] text-cyan-400/90 font-mono leading-none mt-0.5">
              Full-Stack & AI
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
