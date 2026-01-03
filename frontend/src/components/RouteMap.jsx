import React, { useState, useEffect } from 'react';
import { MapPin, Navigation } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';

const RouteMap = ({ routePoints, currentLocation }) => {
  const [activePoint, setActivePoint] = useState(null);

  // Calculate map boundaries
  const minLat = Math.min(...routePoints.map(p => p.lat)) - 5;
  const maxLat = Math.max(...routePoints.map(p => p.lat)) + 5;
  const minLng = Math.min(...routePoints.map(p => p.lng)) - 10;
  const maxLng = Math.max(...routePoints.map(p => p.lng)) + 10;

  const latRange = maxLat - minLat;
  const lngRange = maxLng - minLng;

  // Convert lat/lng to SVG coordinates
  const getPosition = (lat, lng) => {
    const x = ((lng - minLng) / lngRange) * 100;
    const y = ((maxLat - lat) / latRange) * 100;
    return { x, y };
  };

  const points = routePoints.map(point => ({
    ...point,
    position: getPosition(point.lat, point.lng)
  }));

  const currentPos = getPosition(currentLocation.lat, currentLocation.lng);

  return (
    <section id="route-section" className="py-24 bg-stone-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">Expedition Route</h2>
          <p className="text-xl text-gray-400">Follow our journey from West to East</p>
        </div>

        {/* Current Location Status */}
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
              <p className="text-sm text-gray-400">Last Update</p>
              <p className="text-white">{currentLocation.lastUpdate}</p>
            </div>
          </div>
        </Card>

        {/* Interactive Map */}
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="p-8 bg-stone-800 border-stone-700">
              <svg viewBox="0 0 100 100" className="w-full h-[600px]">
                {/* Route Line */}
                <polyline
                  points={points.map(p => `${p.position.x},${p.position.y}`).join(' ')}
                  fill="none"
                  stroke="#d97706"
                  strokeWidth="0.3"
                  strokeDasharray="1,0.5"
                  opacity="0.6"
                />

                {/* Route Points */}
                {points.map((point, idx) => (
                  <g key={point.id}>
                    <circle
                      cx={point.position.x}
                      cy={point.position.y}
                      r="2"
                      fill="#78350f"
                      stroke="#fbbf24"
                      strokeWidth="0.3"
                      className="cursor-pointer transition-all duration-300 hover:r-3"
                      onClick={() => setActivePoint(point)}
                      onMouseEnter={() => setActivePoint(point)}
                    />
                    <text
                      x={point.position.x}
                      y={point.position.y - 3}
                      textAnchor="middle"
                      fill="#fbbf24"
                      fontSize="2.5"
                      fontWeight="bold"
                      className="cursor-pointer"
                      onClick={() => setActivePoint(point)}
                    >
                      {idx + 1}
                    </text>
                  </g>
                ))}

                {/* Current Location Marker */}
                <g>
                  <circle
                    cx={currentPos.x}
                    cy={currentPos.y}
                    r="1.5"
                    fill="#ef4444"
                    className="animate-pulse"
                  />
                  <circle
                    cx={currentPos.x}
                    cy={currentPos.y}
                    r="3"
                    fill="none"
                    stroke="#ef4444"
                    strokeWidth="0.3"
                    opacity="0.5"
                    className="animate-ping"
                  />
                </g>
              </svg>
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
                onClick={() => setActivePoint(point)}
                onMouseEnter={() => setActivePoint(point)}
              >
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-700 flex items-center justify-center text-white font-bold">
                    {idx + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-white mb-1">{point.title}</h3>
                    <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
                      <MapPin className="w-3 h-3" />
                      <span>{point.location}</span>
                    </div>
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

export default RouteMap;