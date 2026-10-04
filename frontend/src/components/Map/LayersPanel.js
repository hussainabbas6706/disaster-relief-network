"use client";

import { useState } from "react";
import { Search, ChevronDown, ChevronUp, Layers, Check } from "lucide-react";

export default function LayersPanel({ activeLayers, onToggleLayer }) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const layerItems = [
    {
      key: "warehouses",
      label: "Active Warehouses",
      color: "bg-cyan-400",
      count: 5,
      shape: "rounded-full",
    },
    {
      key: "blockages",
      label: "Blocked Roads",
      color: "bg-red-500",
      count: 4,
      shape: "rounded-sm",
    },
    {
      key: "zones",
      label: "Relief Zones",
      color: "bg-emerald-400",
      count: 3,
      shape: "rounded-full",
    },
    {
      key: "routes",
      label: "Routes AI",
      color: "bg-sky-400",
      count: "OSRM",
      shape: "rounded-none w-3.5 h-1",
    },
  ];

  return (
    <div className="absolute top-4 left-4 z-[999] w-72 max-w-[calc(100vw-2rem)] select-none">
      {/* Outer Glassmorphic Card */}
      <div className="backdrop-blur-xl bg-slate-950/85 border border-slate-800/80 shadow-[0_8px_32px_rgba(0,0,0,0.6)] rounded-2xl p-3.5 text-slate-200 transition-all duration-300">
        {/* Search bar inside the card */}
        <div className="relative mb-3">
          <Search className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search sector, depot..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-slate-900/90 text-xs text-white placeholder-slate-400 pl-9 pr-3 py-2 rounded-xl border border-slate-800/90 focus:outline-none focus:border-cyan-500/80 transition-colors"
          />
        </div>

        {/* Header with expand/collapse */}
        <div
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="flex items-center justify-between cursor-pointer py-1 px-1 rounded-lg hover:bg-slate-900/50 transition-colors"
        >
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-cyan-400" />
            <span className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Map Layers
            </span>
          </div>
          {isCollapsed ? (
            <ChevronDown className="w-4 h-4 text-slate-400" />
          ) : (
            <ChevronUp className="w-4 h-4 text-slate-400" />
          )}
        </div>

        {/* Checkbox Options */}
        {!isCollapsed && (
          <div className="mt-2.5 space-y-1.5 pt-2 border-t border-slate-800/80">
            {layerItems.map((item) => {
              const isChecked = activeLayers[item.key];
              return (
                <div
                  key={item.key}
                  onClick={() => onToggleLayer(item.key)}
                  className="flex items-center justify-between px-2.5 py-1.5 rounded-xl hover:bg-slate-900/70 cursor-pointer transition-all duration-150 group"
                >
                  <div className="flex items-center gap-2.5">
                    {/* Custom Checkbox */}
                    <div
                      className={`w-4 h-4 rounded-md flex items-center justify-center border transition-all ${
                        isChecked
                          ? "bg-cyan-600 border-cyan-400 text-white"
                          : "border-slate-700 bg-slate-900/60"
                      }`}
                    >
                      {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                    </div>

                    {/* Indicator Icon/Shape */}
                    <span
                      className={`inline-block ${item.shape} ${item.color} shadow-sm shrink-0 ${
                        item.key === "routes" ? "" : "w-2.5 h-2.5"
                      }`}
                    />

                    {/* Label */}
                    <span className="text-xs font-medium text-slate-300 group-hover:text-white transition-colors">
                      {item.label}
                    </span>
                  </div>

                  {/* Badge */}
                  <span className="text-[10px] font-mono font-semibold px-1.5 py-0.5 rounded-md bg-slate-800/80 text-slate-400 border border-slate-700/40">
                    {item.count}
                  </span>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
