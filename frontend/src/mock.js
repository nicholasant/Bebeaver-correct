// Mock data for West to East Expedition

export const expeditionInfo = {
  title: "WEST TO EAST",
  subtitle: "Overland Expedition",
  route: "Ivrea (Italy) to Mongolia",
  duration: "May - September 2026",
  team: "Bebeaver",
  logo: "https://customer-assets.emergentagent.com/job_preso-website/artifacts/k9b63y6a_ChatGPT%20Image%203%20gen%202026%2C%2019_04_10.png",
  description: "A 3-month independent overland expedition designed as a real-world field test. Continuous use, constant load, real conditions. No staged content."
};

export const routePoints = [
  {
    id: 1,
    location: "Ivrea, Italy",
    title: "Starting Point",
    description: "Starting point for our adventure journey. Departure from Ivrea, Italy",
    date: "May 2026",
    lat: 45.4667,
    lng: 7.8667,
    image: "https://images.pexels.com/photos/3551207/pexels-photo-3551207.jpeg"
  },
  {
    id: 2,
    location: "Turkey",
    title: "Cultural Crossroads",
    description: "Experience the blending of cultures and terrain. Traversing through Turkey's diverse landscapes",
    date: "June 2026",
    lat: 39.9334,
    lng: 32.8597,
    image: "https://images.unsplash.com/photo-1577701122197-c9607038bd90?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwxfHxjYXVjYXN1cyUyMG1vdW50YWluc3xlbnwwfHx8fDE3Njc0NjkyNjh8MA&ixlib=rb-4.1.0&q=85"
  },
  {
    id: 3,
    location: "Caucasus Mountains",
    title: "Mountain Challenge",
    description: "Navigating rugged terrains and breathtaking views. Crossing the Caucasus Mountains",
    date: "July 2026",
    lat: 42.5,
    lng: 45.0,
    image: "https://images.unsplash.com/photo-1569498283068-140e58143192?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwyfHxjYXVjYXN1cyUyMG1vdW50YWluc3xlbnwwfHx8fDE3Njc0NjkyNjh8MA&ixlib=rb-4.1.0&q=85"
  },
  {
    id: 4,
    location: "Kazakhstan",
    title: "Vast Steppes",
    description: "Embracing the open landscapes and nomadic culture. Journey through Kazakhstan's vast steppes",
    date: "August 2026",
    lat: 48.0196,
    lng: 66.9237,
    image: "https://images.pexels.com/photos/35473569/pexels-photo-35473569.jpeg"
  },
  {
    id: 5,
    location: "Mongolia",
    title: "Final Destination",
    description: "Completing our expedition with breathtaking landscapes. Arrival in Mongolia's wilderness",
    date: "September 2026",
    lat: 46.8625,
    lng: 103.8467,
    image: "https://images.unsplash.com/photo-1742205024280-02ab2ab5207a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDN8MHwxfHNlYXJjaHwxfHxtb25nb2xpYSUyMGxhbmRzY2FwZXxlbnwwfHx8fDE3Njc0NjkyODZ8MA&ixlib=rb-4.1.0&q=85"
  }
];

export const expeditionFeatures = [
  {
    id: 1,
    title: "Authenticity in Action",
    description: "Testing products in real conditions ensures they withstand the harshest environments, providing confidence in their performance during the expedition and beyond."
  },
  {
    id: 2,
    title: "Durability Assessment",
    description: "Evaluating gear and equipment in diverse terrains allows for optimal functionality, confirming they meet operational needs while adapting to unexpected challenges."
  },
  {
    id: 3,
    title: "Functionality Verification",
    description: "Continuous real-world testing across multiple climates and terrains to ensure every piece of equipment performs flawlessly throughout the entire journey."
  }
];

export const expeditionApproach = [
  {
    id: 1,
    title: "Data Collection",
    description: "Gathering valuable insights from diverse geographical areas."
  },
  {
    id: 2,
    title: "Cultural Exchange",
    description: "Engaging with local communities to share experiences and knowledge."
  },
  {
    id: 3,
    title: "Independent Projects",
    description: "Fostering self-sufficiency through hands-on fieldwork initiatives."
  },
  {
    id: 4,
    title: "Environmental Monitoring",
    description: "Assessing ecological conditions in various climates and terrains."
  }
];

export const documentation = [
  {
    id: 1,
    title: "Video Series",
    description: "Documenting real-life experiences",
    type: "video"
  }
];

export const socialMedia = {
  youtube: "https://www.youtube.com/@Bebeaver-q9z",
  facebook: "#", // To be updated
  instagram: "#", // To be updated
  tiktok: "#" // To be updated
};

export const sponsors = [
  {
    id: 1,
    name: "Sponsor Name 1",
    logo: "https://via.placeholder.com/200x100/8B7355/FFFFFF?text=Sponsor+1",
    tier: "platinum"
  },
  {
    id: 2,
    name: "Sponsor Name 2",
    logo: "https://via.placeholder.com/200x100/8B7355/FFFFFF?text=Sponsor+2",
    tier: "gold"
  },
  {
    id: 3,
    name: "Sponsor Name 3",
    logo: "https://via.placeholder.com/200x100/8B7355/FFFFFF?text=Sponsor+3",
    tier: "silver"
  }
];

export const contactInfo = {
  phone: "123-456-7890",
  email: "hello@reallygreatsite.com",
  website: "www.reallygreatsite.com"
};

// Current expedition location (can be updated dynamically)
export const currentLocation = {
  lat: 45.4667,
  lng: 7.8667,
  lastUpdate: "Not started yet",
  status: "Preparing for departure"
};