"use client";

import { useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
  ZoomControl,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";

import {
  mockWarehouses,
  mockBlockages,
  mockReliefZones,
  mockSafeRoute,
  mockBlockedSegment,
} from "@/data/mockDisasterData";
import {
  createWarehouseIcon,
  createBlockageIcon,
  createZoneIcon,
} from "./MapMarkers";

export default function DisasterMap({ activeLayers = {} }) {
  // Center coordinates over the operations region (Karachi Harbor / Coastal Metropolis)
  const defaultCenter = [24.8550, 67.0250];

  return (
    <div className="relative w-full h-full bg-[#070b12]">
      <MapContainer
        center={defaultCenter}
        zoom={13}
        zoomControl={false}
        className="w-full h-full z-0"
        style={{ height: "100%", width: "100%", background: "#06090e" }}
      >
        {/* Esri World Dark Gray Canvas (Free, no API key required, crisp dark cartography) */}
        <TileLayer
          attribution="Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ"
          url="https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}"
          maxZoom={16}
        />
        <TileLayer
          url="https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Reference/MapServer/tile/{z}/{y}/{x}"
          maxZoom={16}
        />

        <ZoomControl position="bottomright" />

        {/* 1. Safe Routing Polyline Layer */}
        {activeLayers.routes && (
          <>
            {/* Glow underlay */}
            <Polyline
              positions={mockSafeRoute}
              pathOptions={{
                color: "#06b6d4",
                weight: 8,
                opacity: 0.35,
                lineCap: "round",
                lineJoin: "round",
              }}
            />
            {/* Main vibrant path */}
            <Polyline
              positions={mockSafeRoute}
              pathOptions={{
                color: "#22d3ee",
                weight: 4,
                opacity: 0.95,
                dashArray: "1, 10",
                dashSpeed: 20,
              }}
            />

            {/* Blocked Road Segment (Red Hazard Polyline) */}
            <Polyline
              positions={mockBlockedSegment}
              pathOptions={{
                color: "#ef4444",
                weight: 5,
                opacity: 0.85,
                dashArray: "6, 8",
              }}
            />
          </>
        )}

        {/* 2. Active Warehouses Layer */}
        {activeLayers.warehouses &&
          mockWarehouses.map((warehouse) => (
            <Marker
              key={warehouse.id}
              position={warehouse.coords}
              icon={createWarehouseIcon(warehouse.id)}
            >
              <Popup className="custom-popup">
                <div className="p-3 bg-slate-900 text-slate-100 rounded-xl border border-cyan-500/40 shadow-xl min-w-[220px]">
                  <div className="flex items-center justify-between gap-2 border-b border-slate-800 pb-2 mb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
                      {warehouse.id} • {warehouse.type}
                    </span>
                    <span className="text-[10px] bg-emerald-950 text-emerald-300 px-2 py-0.5 rounded-full border border-emerald-800 font-semibold">
                      {warehouse.status}
                    </span>
                  </div>
                  <h4 className="font-semibold text-sm text-white mb-2">
                    {warehouse.name}
                  </h4>
                  <div className="space-y-1 text-xs text-slate-300 mb-2">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Water Supply:</span>
                      <span className="font-mono text-cyan-300 font-medium">
                        {warehouse.supplies.water}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Medical Kits:</span>
                      <span className="font-mono text-cyan-300 font-medium">
                        {warehouse.supplies.medical}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Emergency Food:</span>
                      <span className="font-mono text-cyan-300 font-medium">
                        {warehouse.supplies.food}
                      </span>
                    </div>
                  </div>
                  <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-cyan-500 to-blue-500 h-full rounded-full"
                      style={{ width: warehouse.capacity }}
                    />
                  </div>
                  <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                    <span>Capacity Meter</span>
                    <span className="text-cyan-300 font-semibold">
                      {warehouse.capacity}
                    </span>
                  </div>
                </div>
              </Popup>
            </Marker>
          ))}

        {/* 3. Road Blockages Hazard Layer */}
        {activeLayers.blockages &&
          mockBlockages.map((blockage) => (
            <Marker
              key={blockage.id}
              position={blockage.coords}
              icon={createBlockageIcon(blockage.severity)}
            >
              <Popup className="custom-popup">
                <div className="p-3 bg-slate-900 text-slate-100 rounded-xl border border-red-500/40 shadow-xl min-w-[210px]">
                  <div className="flex items-center justify-between gap-2 border-b border-slate-800 pb-2 mb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-red-400">
                      ⚠️ ROAD BLOCKAGE
                    </span>
                    <span className="text-[10px] bg-red-950 text-red-300 px-2 py-0.5 rounded-full border border-red-800 font-bold">
                      {blockage.severity}
                    </span>
                  </div>
                  <h4 className="font-semibold text-sm text-white mb-1">
                    {blockage.name}
                  </h4>
                  <p className="text-xs text-red-200/90 mb-2">
                    {blockage.reason}
                  </p>
                  <div className="text-[11px] text-slate-400 space-y-0.5">
                    <div className="flex justify-between">
                      <span>Affected span:</span>
                      <span className="text-slate-200 font-mono">
                        {blockage.length}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Reported:</span>
                      <span className="text-slate-300">
                        {blockage.reportedAt}
                      </span>
                    </div>
                  </div>
                </div>
              </Popup>
            </Marker>
          ))}

        {/* 4. Relief Zones Layer */}
        {activeLayers.zones &&
          mockReliefZones.map((zone) => (
            <Marker
              key={zone.id}
              position={zone.coords}
              icon={createZoneIcon(zone.id)}
            >
              <Popup className="custom-popup">
                <div className="p-3 bg-slate-900 text-slate-100 rounded-xl border border-emerald-500/40 shadow-xl min-w-[220px]">
                  <div className="flex items-center justify-between gap-2 border-b border-slate-800 pb-2 mb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                      🎯 TARGET ZONE
                    </span>
                    <span className="text-[10px] bg-emerald-950 text-emerald-300 px-2 py-0.5 rounded-full border border-emerald-800 font-semibold">
                      {zone.urgencyLevel}
                    </span>
                  </div>
                  <h4 className="font-semibold text-sm text-white mb-1">
                    {zone.name}
                  </h4>
                  <p className="text-xs text-slate-300 mb-2">
                    Needs: <span className="text-emerald-300">{zone.needed}</span>
                  </p>
                  <div className="text-[11px] text-slate-400 flex justify-between">
                    <span>Population at risk:</span>
                    <span className="text-slate-200 font-mono">
                      {zone.population}
                    </span>
                  </div>
                </div>
              </Popup>
            </Marker>
          ))}
      </MapContainer>
    </div>
  );
}
