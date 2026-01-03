import React from 'react';
import { MapPin, Calendar } from 'lucide-react';
import { Button } from './ui/button';

const Hero = ({ expeditionInfo }) => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/17507607/pexels-photo-17507607.jpeg')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center">
        <div className="space-y-8 animate-fade-in">
          {/* Bebeaver Logo */}
          <div className="flex justify-center mb-8">
            <img 
              src={expeditionInfo.logo} 
              alt="Bebeaver" 
              className="h-32 w-auto"
            />
          </div>

          {/* Main Title */}
          <h1 className="text-6xl md:text-8xl font-bold text-white tracking-tight">
            {expeditionInfo.title}
          </h1>
          <p className="text-3xl md:text-5xl font-light text-amber-200">
            {expeditionInfo.subtitle}
          </p>

          {/* Route Info */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-lg text-gray-200">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-amber-400" />
              <span>{expeditionInfo.route}</span>
            </div>
            <div className="hidden md:block w-1 h-6 bg-amber-600/50"></div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-amber-400" />
              <span>{expeditionInfo.duration}</span>
            </div>
          </div>

          {/* Description */}
          <p className="max-w-3xl mx-auto text-xl text-gray-300 leading-relaxed">
            {expeditionInfo.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Button 
              size="lg" 
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-6 text-lg transition-all duration-300 hover:scale-105"
              onClick={() => document.getElementById('route-section').scrollIntoView({ behavior: 'smooth' })}
            >
              Explore the Route
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-6 text-lg transition-all duration-300 hover:scale-105"
              onClick={() => document.getElementById('sponsor-section').scrollIntoView({ behavior: 'smooth' })}
            >
              Become a Sponsor
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;