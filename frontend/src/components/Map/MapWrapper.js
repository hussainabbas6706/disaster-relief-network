"use client";

import dynamic from "next/dynamic";

const DisasterMap = dynamic(() => import("./DisasterMap"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#070b12] text-slate-400">
      <div className="relative flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-cyan-500/20 border-t-cyan-400 rounded-full animate-spin"></div>
        <div className="absolute w-8 h-8 rounded-full bg-cyan-500/20 animate-pulse"></div>
      </div>
      <p className="mt-4 text-xs font-mono tracking-widest text-cyan-400 uppercase">
        Initializing Tactical GIS Map Engine...
      </p>
    </div>
  ),
});

export default function MapWrapper(props) {
  return <DisasterMap {...props} />;
}
