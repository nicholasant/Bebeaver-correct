import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline, useMap } from 'react-leaflet';
import { Navigation } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

// Fix Leaflet default icon issue with React
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

// Custom marker icon for route points
const routeIcon = new L.Icon({
  iconUrl: 'data:image/svg+xml;base64,' + btoa(`
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#d97706" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
      <circle cx="12" cy="10" r="3"></circle>
    </svg>
  `),
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32]
});

// Custom marker icon for current location
const currentLocationIcon = new L.Icon({
  iconUrl: 'data:image/svg+xml;base64,' + btoa(`
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="#ef4444" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="10"></circle>
      <circle cx="12" cy="12" r="3" fill="#fff"></circle>
    </svg>
  `),
  iconSize: [32, 32],
  iconAnchor: [16, 16],
  popupAnchor: [0, -16]
});

// Component to update map view when active point changes
function ChangeView({ center, zoom }) {
  const map = useMap();
  map.setView(center, zoom);
  return null;
}

const RouteMapLeaflet = () => {
  const [routePoints, setRoutePoints] = useState([]);
  const [currentLocation, setCurrentLocation] = useState(null);
  const [activePoint, setActivePoint] = useState(null);
  const [mapCenter, setMapCenter] = useState([45.4667, 7.8667]);
  const [mapZoom, setMapZoom] = useState(4);
  const [loading, setLoading] = useState(true);

  // Fetch route points and current location
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [pointsRes, locationRes] = await Promise.all([
          axios.get(`${API}/route/points`),
          axios.get(`${API}/location/current`)
        ]);
        
        setRoutePoints(pointsRes.data);
        setCurrentLocation(locationRes.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handlePointClick = (point) => {
    setActivePoint(point);
    setMapCenter([point.lat, point.lng]);
    setMapZoom(6);
  };

  if (loading) {
    return (
      <section id="route-section" className="py-24 bg-stone-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-amber-600"></div>
            <p className="text-white mt-4">Loading map...</p>
          </div>
        </div>
      </section>
    );
  }

  const routeLine = routePoints.map(p => [p.lat, p.lng]);

  return (
    <section id="route-section" className="py-24 bg-stone-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">Expedition Route</h2>
          <p className="text-xl text-gray-400">Follow our journey from West to East</p>
        </div>

        {/* Current Location Status */}
        {currentLocation && (
          <Card className="mb-12 p-6 bg-amber-950/30 border-amber-700/50">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-3">
                <Navigation className="w-6 h-6 text-amber-400 animate-pulse" />
                <div>
                  <p className="text-sm text-gray-400">Current Status</p>
                  <p className="text-lg font-semibold text-white">{currentLocation.status}</p>
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-400">Location</p>
                <p className="text-white">{currentLocation.address}</p>
              </div>
            </div>
          </Card>
        )}

        {/* Map and Route Points */}
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="p-4 bg-stone-800 border-stone-700 overflow-hidden">
              <MapContainer
                center={mapCenter}
                zoom={mapZoom}
                style={{ height: '600px', width: '100%', borderRadius: '0.5rem' }}
                className="z-0"
              >
                <ChangeView center={mapCenter} zoom={mapZoom} />
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                
                {/* Route line */}
                {routeLine.length > 1 && (
                  <Polyline
                    positions={routeLine}
                    color="#d97706"
                    weight={3}
                    opacity={0.7}
                    dashArray="10, 10"
                  />
                )}

                {/* Route point markers */}
                {routePoints.map((point, idx) => (
                  <Marker
                    key={point.id}
                    position={[point.lat, point.lng]}
                    icon={routeIcon}
                    eventHandlers={{
                      click: () => handlePointClick(point)
                    }}
                  >
                    <Popup>
                      <div className="text-center">
                        <h3 className="font-bold text-lg mb-1">{point.title}</h3>
                        <p className="text-sm text-gray-600 mb-2">{point.location}</p>
                        <Badge className="bg-amber-600 text-white">{point.date}</Badge>
                      </div>
                    </Popup>
                  </Marker>
                ))}

                {/* Current location marker */}
                {currentLocation && (
                  <Marker
                    position={[currentLocation.lat, currentLocation.lng]}
                    icon={currentLocationIcon}
                  >
                    <Popup>
                      <div className="text-center">
                        <h3 className="font-bold">Current Location</h3>
                        <p className="text-sm">{currentLocation.address}</p>
                        <p className="text-xs text-gray-600 mt-1">{currentLocation.status}</p>
                      </div>
                    </Popup>
                  </Marker>
                )}
              </MapContainer>
            </Card>
          </div>

          {/* Route Points List */}
          <div className="space-y-4">
            {routePoints.map((point, idx) => (
              <Card
                key={point.id}
                className={`p-4 cursor-pointer transition-all duration-300 ${ 
                  activePoint?.id === point.id
                    ? 'bg-amber-900/50 border-amber-600 scale-105'
                    : 'bg-stone-800 border-stone-700 hover:bg-stone-700'
                }`}
                onClick={() => handlePointClick(point)}
              >
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-700 flex items-center justify-center text-white font-bold">
                    {idx + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-white mb-1">{point.title}</h3>
                    <p className="text-sm text-gray-400 mb-2">{point.location}</p>
                    <Badge variant="outline" className="text-xs border-amber-600 text-amber-400">
                      {point.date}
                    </Badge>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Active Point Details */}
        {activePoint && (
          <Card className="mt-8 p-6 bg-gradient-to-r from-stone-800 to-stone-900 border-amber-700/50">
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">{activePoint.title}</h3>
                <p className="text-amber-400 mb-4">{activePoint.location}</p>
                <p className="text-gray-300 leading-relaxed">{activePoint.description}</p>
                <p className="text-sm text-gray-500 mt-4">{activePoint.date}</p>
              </div>
              <div className="rounded-lg overflow-hidden h-64">
                <img
                  src={activePoint.image}
                  alt={activePoint.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </Card>
        )}
      </div>
    </section>
  );
};

export default RouteMapLeaflet;
