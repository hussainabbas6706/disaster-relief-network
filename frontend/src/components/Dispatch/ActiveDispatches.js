"use client";

import { X, Truck, Users, ShieldAlert, ArrowUpRight } from "lucide-react";
import { mockDispatches } from "@/data/mockDisasterData";

export default function ActiveDispatches({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <aside className="w-80 sm:w-96 bg-[#0a0e17]/95 backdrop-blur-xl border-l border-slate-800/80 flex flex-col h-full select-none shrink-0 z-20 shadow-2xl transition-all duration-300">
      {/* Header */}
      <div className="p-4 border-b border-slate-800/80 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Truck className="w-4 h-4 text-cyan-400" />
          <h2 className="text-sm font-bold text-white tracking-wide uppercase">
            Active Dispatches
          </h2>
        </div>
        <button
          onClick={onClose}
          className="w-7 h-7 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white flex items-center justify-center transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-4 space-y-5 custom-scrollbar">
        {/* Section 1: Progress Tracks */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
              En Route Convoys
            </span>
            <span className="text-[11px] font-mono text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded-full border border-cyan-800/50">
              3 Active
            </span>
          </div>

          <div className="space-y-3">
            {mockDispatches.map((dispatch, idx) => (
              <div
                key={dispatch.id}
                className="bg-slate-900/70 border border-slate-800/90 hover:border-slate-700/90 rounded-2xl p-3.5 transition-all group"
              >
                {/* Title & ETA */}
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div>
                    <h3 className="text-xs font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {dispatch.title}
                    </h3>
                    <p className="text-[11px] text-slate-400">
                      To: <span className="text-slate-200">{dispatch.destination}</span>
                    </p>
                  </div>
                  <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-md bg-slate-800 text-cyan-300 border border-slate-700/60 shrink-0">
                    ETA {dispatch.eta}
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="mb-3">
                  <div className="flex justify-between text-[11px] mb-1">
                    <span className="text-slate-400">Progress</span>
                    <span className="font-mono text-slate-200 font-semibold">
                      {dispatch.progress}%
                    </span>
                  </div>
                  <div className="w-full h-2 bg-slate-800/80 rounded-full overflow-hidden p-0.5 border border-slate-700/40">
                    <div
                      className={`h-full rounded-full bg-gradient-to-r ${dispatch.color} transition-all duration-500`}
                      style={{ width: `${dispatch.progress}%` }}
                    />
                  </div>
                </div>

                {/* Team Avatars & Status */}
                <div className="flex items-center justify-between pt-2 border-t border-slate-800/60">
                  <span className="text-[10px] text-emerald-400 font-medium flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    {dispatch.status}
                  </span>

                  <div className="flex items-center -space-x-1.5 overflow-hidden">
                    {dispatch.team.map((member, i) => (
                      <div
                        key={i}
                        title={member.name}
                        className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-slate-800 ring-2 ring-slate-900 text-[10px] font-bold text-slate-200 border border-slate-700"
                      >
                        {member.initials}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: Response Teams / Field Units */}
        <div className="pt-2">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-cyan-400" />
              Field Agents
            </span>
            <span className="text-[10px] text-slate-500 font-mono">
              8 Available
            </span>
          </div>

          <div className="space-y-2">
            <div className="p-3 bg-slate-900/50 border border-slate-800/70 rounded-xl flex items-center justify-between">
              <div>
                <h4 className="text-xs font-medium text-slate-200">
                  Quick Response Unit 1
                </h4>
                <p className="text-[10px] text-slate-400">Sector South / Harbor</p>
              </div>
              <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-800/40">
                Deployed
              </span>
            </div>

            <div className="p-3 bg-slate-900/50 border border-slate-800/70 rounded-xl flex items-center justify-between">
              <div>
                <h4 className="text-xs font-medium text-slate-200">
                  Heavy Relief Unit 3
                </h4>
                <p className="text-[10px] text-slate-400">Depot W1 Standby</p>
              </div>
              <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded-full border border-cyan-800/40">
                Standby
              </span>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
