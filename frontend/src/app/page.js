"use client";

import { useState } from "react";
import Sidebar from "@/components/Layout/Sidebar";
import Navbar from "@/components/Layout/Navbar";
import MapWrapper from "@/components/Map/MapWrapper";
import LayersPanel from "@/components/Map/LayersPanel";
import ActiveDispatches from "@/components/Dispatch/ActiveDispatches";
import AiAssistantWidget from "@/components/AI/AiAssistantWidget";

export default function Home() {
  const [activeNav, setActiveNav] = useState("map");
  const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(true);
  const [isAiWidgetOpen, setIsAiWidgetOpen] = useState(true);

  // Active Map Layer States
  const [activeLayers, setActiveLayers] = useState({
    warehouses: true,
    blockages: true,
    zones: true,
    routes: true,
  });

  const handleToggleLayer = (key) => {
    setActiveLayers((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className="h-screen w-screen overflow-hidden flex bg-[#06090e] text-slate-100 font-sans antialiased">
      {/* 1. Slim Left Icon Sidebar */}
      <Sidebar activeNav={activeNav} onSelectNav={setActiveNav} />

      {/* 2. Main Content Area */}
      <div className="flex-1 flex flex-col h-full overflow-hidden">
        {/* Top Operations Navbar */}
        <Navbar
          isRightSidebarOpen={isRightSidebarOpen}
          onToggleRightSidebar={() => setIsRightSidebarOpen((prev) => !prev)}
          isAiWidgetOpen={isAiWidgetOpen}
          onToggleAiWidget={() => setIsAiWidgetOpen((prev) => !prev)}
        />

        {/* Map & Telemetry Split Screen */}
        <div className="relative flex-1 flex overflow-hidden">
          {/* Central Tactical Leaflet Map Canvas */}
          <main className="relative flex-1 h-full w-full overflow-hidden bg-[#06090e]">
            {/* The Leaflet Map with CartoDB Dark Tiles */}
            <MapWrapper activeLayers={activeLayers} />

            {/* Top-Left Floating Glassmorphic Layers Controller & Search */}
            <LayersPanel
              activeLayers={activeLayers}
              onToggleLayer={handleToggleLayer}
            />

            {/* Bottom-Right Floating AI Assistant Widget */}
            <AiAssistantWidget
              isOpen={isAiWidgetOpen}
              onClose={() => setIsAiWidgetOpen(false)}
            />
          </main>

          {/* Right Telemetry Sidebar: Active Dispatches */}
          <ActiveDispatches
            isOpen={isRightSidebarOpen}
            onClose={() => setIsRightSidebarOpen(false)}
          />
        </div>
      </div>
    </div>
  );
}
