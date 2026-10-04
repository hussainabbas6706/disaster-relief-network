"use client";

import {
  Compass,
  LayoutGrid,
  Activity,
  Users,
  Settings,
  HelpCircle,
} from "lucide-react";

export default function Sidebar({ activeNav = "map", onSelectNav }) {
  const navItems = [
    { id: "map", icon: LayoutGrid, label: "Operations Map" },
    { id: "telemetry", icon: Activity, label: "Live Telemetry" },
    { id: "teams", icon: Users, label: "Field Teams" },
  ];

  return (
    <aside className="w-16 bg-[#090d16] border-r border-slate-800/80 flex flex-col items-center justify-between py-4 select-none shrink-0 z-20">
      {/* Top Brand Mark */}
      <div className="flex flex-col items-center gap-6">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-600 to-blue-600 flex items-center justify-center text-white shadow-[0_0_20px_rgba(6,182,212,0.4)] cursor-pointer hover:scale-105 transition-transform">
          <Compass className="w-5 h-5 animate-spin-slow" />
        </div>

        {/* Navigation Item Icons */}
        <nav className="flex flex-col items-center gap-3">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeNav === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onSelectNav && onSelectNav(item.id)}
                title={item.label}
                className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                  isActive
                    ? "bg-cyan-500/20 text-cyan-400 border border-cyan-500/40 shadow-[0_0_12px_rgba(6,182,212,0.25)]"
                    : "text-slate-400 hover:text-slate-100 hover:bg-slate-800/50"
                }`}
              >
                <Icon className="w-5 h-5" />
              </button>
            );
          })}
        </nav>
      </div>

      {/* Bottom Utilities */}
      <div className="flex flex-col items-center gap-3 text-slate-400">
        <button
          title="Support / Docs"
          className="w-10 h-10 rounded-xl flex items-center justify-center hover:text-slate-100 hover:bg-slate-800/50 transition-colors"
        >
          <HelpCircle className="w-5 h-5" />
        </button>
        <button
          title="System Settings"
          className="w-10 h-10 rounded-xl flex items-center justify-center hover:text-slate-100 hover:bg-slate-800/50 transition-colors"
        >
          <Settings className="w-5 h-5" />
        </button>
      </div>
    </aside>
  );
}
