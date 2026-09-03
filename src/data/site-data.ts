export interface Equipment {
  id: string;
  name: string;
  category: string;
  description: string;
  applications: string[];
  imageUrl: string;
  availability: boolean;
  specifications: string;
}

export interface Service {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: string;
}

export const companyName = "PUELLA";

export const contactInfo = {
  phone: "Contact details to be confirmed",
  whatsapp: "Contact details to be confirmed",
  email: "Contact details to be confirmed",
  address: "Port Harcourt, Rivers State, Nigeria",
};

export const equipmentCategories = [
  {
    id: "construction",
    name: "Construction Equipment",
    icon: "construction",
    description:
      "Heavy-duty machinery for building and road construction projects.",
  },
  {
    id: "earthmoving",
    name: "Earthmoving Equipment",
    icon: "excavator",
    description:
      "Excavators, bulldozers and loaders for large-scale excavation and site preparation.",
  },
  {
    id: "lifting",
    name: "Lifting & Material Handling",
    icon: "crane",
    description:
      "Cranes, forklifts and material handling equipment for precise, safe loads.",
  },
  {
    id: "marine",
    name: "Marine Equipment",
    icon: "ship",
    description:
      "Dredgers, tugboats, barges and vessels for marine operations.",
  },
  {
    id: "compaction",
    name: "Compaction Equipment",
    icon: "roller",
    description:
      "Rollers and compactors for road, foundation and soil compaction.",
  },
  {
    id: "power",
    name: "Power & Compressors",
    icon: "electric",
    description:
      "Air compressors and power generation equipment for job sites.",
  },
  {
    id: "oil-gas",
    name: "Oil & Gas Equipment",
    icon: "oil",
    description:
      "Equipment and tools supporting oil and gas field operations.",
  },
  {
    id: "transport",
    name: "Transport & Haulage",
    icon: "truck",
    description:
      "Heavy-duty trucks and haulage solutions for moving equipment and materials.",
  },
];

export const featuredEquipment: Equipment[] = [
  {
    id: "excavator-1",
    name: "Excavators",
    category: "construction",
    description:
      "Versatile hydraulic excavators for excavation, trenching and demolition work.",
    applications: ["Excavation", "Trenching", "Demolition", "Site preparation"],
    imageUrl: "/equipment/excavator.jpg",
    availability: true,
    specifications: "Specifications to be confirmed",
  },
  {
    id: "bulldozer-1",
    name: "Bulldozers",
    category: "construction",
    description:
      "Heavy-duty crawler bulldozers for grading, pushing and earthmoving operations.",
    applications: ["Grading", "Earthmoving", "Land clearing", "Pushing"],
    imageUrl: "/equipment/bulldozer.jpg",
    availability: true,
    specifications: "Specifications to be confirmed",
  },
  {
    id: "crane-1",
    name: "Cranes",
    category: "lifting",
    description:
      "Mobile and crawler cranes for lifting heavy loads on construction and industrial sites.",
    applications: ["Lifting", "Installation", "Material handling", "Assembly"],
    imageUrl: "/equipment/crane.jpg",
    availability: true,
    specifications: "Specifications to be confirmed",
  },
  {
    id: "forklift-1",
    name: "Forklifts",
    category: "lifting",
    description:
      "Rugged forklifts for warehouse, industrial and construction material handling.",
    applications: ["Material handling", "Warehousing", "Loading", "Moving"],
    imageUrl: "/equipment/forklift.jpg",
    availability: true,
    specifications: "Specifications to be confirmed",
  },
  {
    id: "air-compressor-1",
    name: "Air Compressors",
    category: "power",
    description:
      "Industrial air compressors for pneumatic tools and site operations.",
    applications: ["Pneumatic tools", "Pressure testing", "Cleaning", "Power"],
    imageUrl: "/equipment/air-compressor.jpg",
    availability: true,
    specifications: "Specifications to be confirmed",
  },
  {
    id: "roller-1",
    name: "Rollers & Compactors",
    category: "compaction",
    description:
      "Vibratory rollers and compactors for road and foundation compaction work.",
    applications: ["Road construction", "Compaction", "Foundation", "Asphalt"],
    imageUrl: "/equipment/roller.jpg",
    availability: true,
    specifications: "Specifications to be confirmed",
  },
];

const allEquipment: Equipment[] = [
  ...featuredEquipment,
  {
    id: "loader-1",
    name: "Wheel Loaders",
    category: "earthmoving",
    description:
      "Powerful wheel loaders for loading materials and aggregate handling.",
    applications: ["Loading", "Aggregate handling", "Material moving"],
    imageUrl: "/equipment/loader.jpg",
    availability: true,
    specifications: "Specifications to be confirmed",
  },
  {
    id: "dredger-1",
    name: "Dredgers",
    category: "marine",
    description:
      "Dredging vessels and equipment for waterway and coastal operations.",
    applications: ["Dredging", "Waterway maintenance", "Sand mining"],
    imageUrl: "/equipment/dredger.jpg",
    availability: true,
    specifications: "Specifications to be confirmed",
  },
  {
    id: "barge-1",
    name: "Barges",
    category: "marine",
    description:
      "Deck and flat-top barges for material transport on water.",
    applications: ["Water transport", "Material moving", "Work platform"],
    imageUrl: "/equipment/barge.jpg",
    availability: true,
    specifications: "Specifications to be confirmed",
  },
  {
    id: "tugboat-1",
    name: "Tugboats",
    category: "marine",
    description:
      "Powerful tugboats for vessel towing and marine support operations.",
    applications: ["Towing", "Vessel support", "Marine operations"],
    imageUrl: "/equipment/tugboat.jpg",
    availability: true,
    specifications: "Specifications to be confirmed",
  },
  {
    id: "generator-1",
    name: "Power Generators",
    category: "power",
    description:
      "Industrial generators for reliable on-site power supply.",
    applications: ["Site power", "Backup power", "Key events"],
    imageUrl: "/equipment/generator.jpg",
    availability: true,
    specifications: "Specifications to be confirmed",
  },
  {
    id: "water-truck-1",
    name: "Water Trucks",
    category: "transport",
    description:
      "Water trucks for dust suppression, water supply and site services.",
    applications: ["Dust suppression", "Water supply", "Site services"],
    imageUrl: "/equipment/water-truck.jpg",
    availability: true,
    specifications: "Specifications to be confirmed",
  },
  {
    id: "dump-truck-1",
    name: "Dump Trucks",
    category: "transport",
    description:
      "Heavy-duty dump trucks for hauling materials, sand and aggregate.",
    applications: ["Material haulage", "Site cleaning", "Transport"],
    imageUrl: "/equipment/dump-truck.jpg",
    availability: true,
    specifications: "Specifications to be confirmed",
  },
];

export const getAllEquipment = () => allEquipment;

export const getEquipmentByCategory = (categoryId: string) =>
  allEquipment.filter((eq) => eq.category === categoryId);

export const getEquipmentById = (id: string) =>
  allEquipment.find((eq) => eq.id === id);

export const services: Service[] = [
  {
    id: "equipment-leasing",
    number: "01",
    title: "Equipment Leasing & Rental",
    description:
      "Heavy-duty equipment for construction, industrial and project operations.",
    icon: "gear",
  },
  {
    id: "marine-services",
    number: "02",
    title: "Marine Services",
    description:
      "Dredgers, tugboats, barges, vessels and marine equipment for water operations.",
    icon: "anchor",
  },
  {
    id: "haulage-logistics",
    number: "03",
    title: "Haulage & Logistics",
    description:
      "Safe movement of equipment and products across Nigeria.",
    icon: "truck",
  },
  {
    id: "oil-gas",
    number: "04",
    title: "Oil & Gas Equipment",
    description:
      "Equipment and tools supporting oil & gas field operations.",
    icon: "flame",
  },
  {
    id: "equipment-training",
    number: "05",
    title: "Equipment Training",
    description:
      "Operator training for cranes, forklifts, bulldozers and other machinery.",
    icon: "graduation",
  },
  {
    id: "waste-management",
    number: "06",
    title: "Waste Management",
    description:
      "Industrial waste management and related services.",
    icon: "recycle",
  },
  {
    id: "fumigation",
    number: "07",
    title: "Fumigation & Industrial Services",
    description:
      "Professional fumigation and related industrial support services.",
    icon: "spray",
  },
];

export const whyChooseItems = [
  {
    title: "Reliable Equipment",
    description:
      "Equipment maintained and serviced to support demanding projects.",
    icon: "shield",
  },
  {
    title: "Experienced Operators",
    description:
      "Trained personnel available for equipment operations when needed.",
    icon: "users",
  },
  {
    title: "Flexible Rental Terms",
    description:
      "Short- and long-term leasing options designed around your project.",
    icon: "calendar",
  },
  {
    title: "Wide Equipment Range",
    description:
      "Construction, marine, energy, industrial and other equipment categories.",
    icon: "layers",
  },
  {
    title: "Cost Effective",
    description:
      "Solutions tailored to project requirements, avoiding unnecessary spend.",
    icon: "wallet",
  },
];

export const projects = [
  {
    id: 1,
    title: "Project Name To Be Confirmed",
    location: "Port Harcourt",
    service: "Equipment Leasing",
    equipment: "Excavator / Bulldozer",
    status: "Details to be supplied",
  },
];

export const projectTypes = [
  { id: "construction", label: "Construction" },
  { id: "road-work", label: "Road Work" },
  { id: "marine", label: "Marine" },
  { id: "oil-gas", label: "Oil & Gas" },
  { id: "agriculture", label: "Agriculture" },
  { id: "industrial", label: "Industrial" },
];

export const tasks = [
  { id: "excavation", label: "Excavation" },
  { id: "lifting", label: "Lifting" },
  { id: "transportation", label: "Transportation" },
  { id: "drilling", label: "Drilling" },
  { id: "material-handling", label: "Material Handling" },
];

export const equipmentRecommendations: Record<
  string,
  Record<string, string[]>
> = {
  construction: {
    excavation: ["Excavators", "Bulldozers", "Wheel Loaders"],
    lifting: ["Cranes", "Forklifts"],
    transportation: ["Dump Trucks", "Water Trucks"],
    drilling: ["Drilling Rigs"],
    "material-handling": ["Forklifts", "Cranes"],
  },
  "road-work": {
    excavation: ["Excavators", "Bulldozers", "Wheel Loaders"],
    lifting: ["Cranes"],
    transportation: ["Dump Trucks"],
    drilling: ["Drilling Rigs"],
    "material-handling": ["Rollers & Compactors", "Wheel Loaders"],
  },
  marine: {
    excavation: ["Dredgers", "Barges"],
    lifting: ["Tugboats", "Cranes"],
    transportation: ["Barges", "Tugboats"],
    drilling: ["Drilling Rigs"],
    "material-handling": ["Barges", "Forklifts"],
  },
  "oil-gas": {
    excavation: ["Excavators", "Bulldozers"],
    lifting: ["Cranes", "Forklifts"],
    transportation: ["Dump Trucks", "Water Trucks"],
    drilling: ["Drilling Rigs"],
    "material-handling": ["Forklifts", "Cranes"],
  },
  agriculture: {
    excavation: ["Excavators"],
    lifting: ["Forklifts"],
    transportation: ["Dump Trucks"],
    drilling: ["Drilling Rigs"],
    "material-handling": ["Forklifts"],
  },
  industrial: {
    excavation: ["Excavators"],
    lifting: ["Cranes", "Forklifts"],
    transportation: ["Dump Trucks"],
    drilling: ["Drilling Rigs"],
    "material-handling": ["Forklifts", "Cranes"],
  },
};

export const navigation = [
  { name: "Home", href: "/" },
  { name: "Equipment", href: "/equipment" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];