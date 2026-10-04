import L from "leaflet";

// Custom Leaflet DivIcon for Active Warehouses (Glowing Cyan)
export const createWarehouseIcon = (id) => {
  return L.divIcon({
    className: "custom-leaflet-icon",
    html: `
      <div class="relative flex items-center justify-center cursor-pointer group">
        <span class="absolute inline-flex h-9 w-9 rounded-full bg-cyan-500/30 animate-ping opacity-75"></span>
        <div class="relative flex items-center justify-center w-8 h-8 rounded-full bg-slate-950 border-2 border-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.8)] text-cyan-300 font-bold text-xs transition-transform duration-200 group-hover:scale-110">
          ${id}
        </div>
      </div>
    `,
    iconSize: [32, 32],
    iconAnchor: [16, 16],
    popupAnchor: [0, -18],
  });
};

// Custom Leaflet DivIcon for Road Blockages (Warning Red)
export const createBlockageIcon = (severity) => {
  const isCritical = severity === "Critical";
  return L.divIcon({
    className: "custom-leaflet-icon",
    html: `
      <div class="relative flex items-center justify-center cursor-pointer group">
        <span class="absolute inline-flex h-8 w-8 rounded-full ${isCritical ? 'bg-red-500/40' : 'bg-amber-500/40'} animate-ping opacity-75"></span>
        <div class="relative flex items-center justify-center w-7 h-7 rounded-lg ${isCritical ? 'bg-red-950 border-red-500 text-red-300 shadow-[0_0_15px_rgba(239,68,68,0.8)]' : 'bg-amber-950 border-amber-500 text-amber-300 shadow-[0_0_15px_rgba(245,158,11,0.8)]'} border-2 font-black text-xs transition-transform duration-200 group-hover:scale-110">
          ▲
        </div>
      </div>
    `,
    iconSize: [28, 28],
    iconAnchor: [14, 14],
    popupAnchor: [0, -16],
  });
};

// Custom Leaflet DivIcon for Relief Zones (Glowing Emerald)
export const createZoneIcon = (id) => {
  return L.divIcon({
    className: "custom-leaflet-icon",
    html: `
      <div class="relative flex items-center justify-center cursor-pointer group">
        <span class="absolute inline-flex h-8 w-8 rounded-full bg-emerald-500/30 animate-pulse opacity-75"></span>
        <div class="relative flex items-center justify-center w-7 h-7 rounded-full bg-slate-950 border-2 border-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.8)] text-emerald-300 font-semibold text-xs transition-transform duration-200 group-hover:scale-110">
          ${id}
        </div>
      </div>
    `,
    iconSize: [28, 28],
    iconAnchor: [14, 14],
    popupAnchor: [0, -16],
  });
};
