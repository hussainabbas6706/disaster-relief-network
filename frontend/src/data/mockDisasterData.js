// Mock dataset for Disaster Relief Network operations in Karachi coastal & urban sector

export const mockWarehouses = [
  {
    id: "W1",
    name: "Central Logistics Depot",
    coords: [24.8607, 67.0011],
    supplies: { water: "45,000 L", medical: "1,200 Kits", food: "8,500 Rations" },
    capacity: "85%",
    status: "Operational",
    type: "Primary Hub",
  },
  {
    id: "W2",
    name: "Clifton Coastal Depot",
    coords: [24.8138, 67.0315],
    supplies: { water: "22,000 L", medical: "600 Kits", food: "4,000 Rations" },
    capacity: "62%",
    status: "Operational",
    type: "Coastal Base",
  },
  {
    id: "W3",
    name: "Korangi Industrial Depot",
    coords: [24.8415, 67.1126],
    supplies: { water: "30,000 L", medical: "850 Kits", food: "6,200 Rations" },
    capacity: "74%",
    status: "Operational",
    type: "Heavy Supply",
  },
  {
    id: "W4",
    name: "North Karachi Hub",
    coords: [24.9723, 67.0645],
    supplies: { water: "18,000 L", medical: "400 Kits", food: "3,500 Rations" },
    capacity: "45%",
    status: "Operational",
    type: "Secondary Depot",
  },
  {
    id: "W5",
    name: "West Wharf Port Facility",
    coords: [24.8485, 66.9798],
    supplies: { water: "50,000 L", medical: "1,500 Kits", food: "12,000 Rations" },
    capacity: "91%",
    status: "Operational",
    type: "Port Terminal",
  },
];

export const mockBlockages = [
  {
    id: "B1",
    name: "M.A. Jinnah Road Blockage",
    coords: [24.8682, 67.0215],
    reason: "Severe Flash Flooding & Debris",
    severity: "Critical",
    length: "1.2 km",
    reportedAt: "18 mins ago",
  },
  {
    id: "B2",
    name: "Mai Kolachi Bypass Hazard",
    coords: [24.8354, 67.0092],
    reason: "Submerged Roadway & Waterlogging",
    severity: "High",
    length: "0.8 km",
    reportedAt: "42 mins ago",
  },
  {
    id: "B3",
    name: "Shahrah-e-Faisal Underpass Obstruction",
    coords: [24.8624, 67.0658],
    reason: "Structural Damage Under Inspection",
    severity: "Moderate",
    length: "0.5 km",
    reportedAt: "1 hr ago",
  },
  {
    id: "B4",
    name: "Lyari Expressway Exit Ramp",
    coords: [24.8879, 67.0125],
    reason: "Mudslide & Fallen High-Tension Cables",
    severity: "Critical",
    length: "1.6 km",
    reportedAt: "25 mins ago",
  },
];

export const mockReliefZones = [
  {
    id: "Z1",
    name: "Zone Alpha (Saddar Shelter Camp)",
    coords: [24.8569, 67.0185],
    priority: "Urgent",
    population: "2,400 people",
    needed: "Drinking Water, Antibiotics",
    urgencyLevel: "Critical",
  },
  {
    id: "Z2",
    name: "Zone Beta (Keamari Evacuation Point)",
    coords: [24.8219, 66.9745],
    priority: "High",
    population: "1,850 people",
    needed: "Emergency Rations, Tarps",
    urgencyLevel: "High",
  },
  {
    id: "Z3",
    name: "Zone Gamma (Mahmoodabad Relief Center)",
    coords: [24.8465, 67.0792],
    priority: "Moderate",
    population: "920 people",
    needed: "Sanitation Kits, Clean Water",
    urgencyLevel: "Moderate",
  },
];

// OSRM calculated safe route avoiding blockages
export const mockSafeRoute = [
  [24.8485, 66.9798], // West Wharf W5
  [24.8385, 66.9925],
  [24.8290, 67.0050],
  [24.8190, 67.0220],
  [24.8138, 67.0315], // Clifton W2
  [24.8320, 67.0480],
  [24.8465, 67.0792], // Mahmoodabad Z3
  [24.8569, 67.0185], // Saddar Z1
];

// The impassable road segment that OSRM route navigates around
export const mockBlockedSegment = [
  [24.8682, 67.0215],
  [24.8624, 67.0358],
  [24.8590, 67.0510],
];

export const mockDispatches = [
  {
    id: "DISP-101",
    title: "Medical Convoy #4",
    destination: "Zone Alpha (Saddar)",
    progress: 78,
    status: "En Route",
    eta: "9 mins",
    color: "from-cyan-500 to-blue-600",
    team: [
      { name: "Dr. Hamza", initials: "DH" },
      { name: "Sarah K.", initials: "SK" },
      { name: "Bilal M.", initials: "BM" },
    ],
  },
  {
    id: "DISP-102",
    title: "Clean Water Tanker #12",
    destination: "Zone Beta (Keamari)",
    progress: 54,
    status: "Navigating Detour",
    eta: "16 mins",
    color: "from-emerald-500 to-teal-600",
    team: [
      { name: "Rashid Ali", initials: "RA" },
      { name: "Zainab P.", initials: "ZP" },
    ],
  },
  {
    id: "DISP-103",
    title: "Food & Shelter Kits #07",
    destination: "Zone Gamma (Mahmoodabad)",
    progress: 28,
    status: "Loading at Depot W3",
    eta: "24 mins",
    color: "from-amber-500 to-orange-600",
    team: [
      { name: "Captain Fahad", initials: "CF" },
      { name: "Irfan Q.", initials: "IQ" },
      { name: "Tariq S.", initials: "TS" },
    ],
  },
];
