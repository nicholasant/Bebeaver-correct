# Seed data for initial database setup

current_location = {
    "lat": 45.4667,
    "lng": 7.8667,
    "status": "Preparing for departure",
    "address": "Ivrea, Italy"
}

route_points = [
    {
        "id": 1,
        "location": "Ivrea, Italy",
        "title": "Starting Point",
        "description": "Starting point for our adventure journey. Departure from Ivrea, Italy",
        "date": "May 2026",
        "lat": 45.4667,
        "lng": 7.8667,
        "image": "https://images.pexels.com/photos/3551207/pexels-photo-3551207.jpeg",
        "order": 1
    },
    {
        "id": 2,
        "location": "Turkey",
        "title": "Cultural Crossroads",
        "description": "Experience the blending of cultures and terrain. Traversing through Turkey's diverse landscapes",
        "date": "June 2026",
        "lat": 39.9334,
        "lng": 32.8597,
        "image": "https://images.unsplash.com/photo-1577701122197-c9607038bd90?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwxfHxjYXVjYXN1cyUyMG1vdW50YWluc3xlbnwwfHx8fDE3Njc0NjkyNjh8MA&ixlib=rb-4.1.0&q=85",
        "order": 2
    },
    {
        "id": 3,
        "location": "Caucasus Mountains",
        "title": "Mountain Challenge",
        "description": "Navigating rugged terrains and breathtaking views. Crossing the Caucasus Mountains",
        "date": "July 2026",
        "lat": 42.5,
        "lng": 45.0,
        "image": "https://images.unsplash.com/photo-1569498283068-140e58143192?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwyfHxjYXVjYXN1cyUyMG1vdW50YWluc3xlbnwwfHx8fDE3Njc0NjkyNjh8MA&ixlib=rb-4.1.0&q=85",
        "order": 3
    },
    {
        "id": 4,
        "location": "Kazakhstan",
        "title": "Vast Steppes",
        "description": "Embracing the open landscapes and nomadic culture. Journey through Kazakhstan's vast steppes",
        "date": "August 2026",
        "lat": 48.0196,
        "lng": 66.9237,
        "image": "https://images.pexels.com/photos/35473569/pexels-photo-35473569.jpeg",
        "order": 4
    },
    {
        "id": 5,
        "location": "Mongolia",
        "title": "Final Destination",
        "description": "Completing our expedition with breathtaking landscapes. Arrival in Mongolia's wilderness",
        "date": "September 2026",
        "lat": 46.8625,
        "lng": 103.8467,
        "image": "https://images.unsplash.com/photo-1742205024280-02ab2ab5207a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDN8MHwxfHNlYXJjaHwxfHxtb25nb2xpYSUyMGxhbmRzY2FwZXxlbnwwfHx8fDE3Njc0NjkyODZ8MA&ixlib=rb-4.1.0&q=85",
        "order": 5
    }
]

sponsors = [
    {
        "id": 1,
        "name": "Sponsor Name 1",
        "logo": "https://via.placeholder.com/200x100/8B7355/FFFFFF?text=Sponsor+1",
        "tier": "platinum",
        "active": True
    },
    {
        "id": 2,
        "name": "Sponsor Name 2",
        "logo": "https://via.placeholder.com/200x100/8B7355/FFFFFF?text=Sponsor+2",
        "tier": "gold",
        "active": True
    },
    {
        "id": 3,
        "name": "Sponsor Name 3",
        "logo": "https://via.placeholder.com/200x100/8B7355/FFFFFF?text=Sponsor+3",
        "tier": "silver",
        "active": True
    }
]