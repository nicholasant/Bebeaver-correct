# West to East Expedition - Backend Integration Contracts

## Overview
Converting the frontend mock data into a fully functional backend with Leaflet/OpenStreetMap integration.

## A) API Contracts

### 1. Current Location API
**GET /api/location/current**
- Returns: Current expedition location with status
```json
{
  "lat": 45.4667,
  "lng": 7.8667,
  "status": "Preparing for departure",
  "lastUpdate": "2026-01-03T20:00:00Z",
  "address": "Ivrea, Italy"
}
```

**PUT /api/location/current**
- Updates current location (admin only for now)
- Body:
```json
{
  "lat": 45.4667,
  "lng": 7.8667,
  "status": "Currently in Ivrea, Italy",
  "address": "Ivrea, Italy"
}
```

### 2. Route Points API
**GET /api/route/points**
- Returns: All route points for the expedition
```json
[
  {
    "id": 1,
    "location": "Ivrea, Italy",
    "title": "Starting Point",
    "description": "...",
    "date": "May 2026",
    "lat": 45.4667,
    "lng": 7.8667,
    "image": "..."
  }
]
```

### 3. Contact Form API
**POST /api/contact**
- Body:
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "company": "ABC Corp",
  "inquiry": "sponsorship",
  "message": "Interested in sponsoring..."
}
```
- Response: Success/error message
- Action: Store in MongoDB for admin review

### 4. Sponsors API
**GET /api/sponsors**
- Returns: List of current sponsors
```json
[
  {
    "id": 1,
    "name": "Sponsor Name",
    "logo": "url",
    "tier": "platinum"
  }
]
```

## B) Mock Data to Replace

### From mock.js:
1. **currentLocation** - Replace with API call to `/api/location/current`
2. **routePoints** - Replace with API call to `/api/route/points`
3. **sponsors** - Replace with API call to `/api/sponsors`
4. **Contact form submission** - Replace with POST to `/api/contact`

## C) Backend Implementation Plan

### Database Models:

1. **CurrentLocation**
   - lat: Float
   - lng: Float
   - status: String
   - lastUpdate: DateTime
   - address: String

2. **RoutePoint**
   - location: String
   - title: String
   - description: String
   - date: String
   - lat: Float
   - lng: Float
   - image: String
   - order: Integer

3. **ContactSubmission**
   - name: String
   - email: String
   - company: String
   - inquiry: String
   - message: String
   - submittedAt: DateTime
   - status: String (pending/reviewed)

4. **Sponsor**
   - name: String
   - logo: String
   - tier: String
   - active: Boolean

### Backend Endpoints to Create:
1. `/api/location/current` - GET/PUT
2. `/api/route/points` - GET
3. `/api/contact` - POST
4. `/api/sponsors` - GET

## D) Frontend Integration Changes

### RouteMap.jsx:
- Replace SVG map with Leaflet map component
- Integrate react-leaflet library
- Connect to `/api/location/current` and `/api/route/points`
- Show real-time location marker on map
- Draw route line between points

### Contact.jsx:
- Replace mock submission with actual API call to `/api/contact`
- Show success/error toast based on response

### Sponsors.jsx:
- Fetch sponsors from `/api/sponsors` instead of mock data

### App.js:
- Remove mock.js imports for data that will come from API
- Keep expedition info (static) in mock.js

## E) Libraries to Install

### Backend:
- Already have: motor (MongoDB), fastapi, pydantic

### Frontend:
- react-leaflet (Leaflet integration)
- leaflet (mapping library)

## F) Seed Data
Initialize database with current mock data as starting point.
