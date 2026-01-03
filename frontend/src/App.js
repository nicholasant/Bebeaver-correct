import React, { useEffect, useState } from 'react';
import './App.css';
import { Toaster } from './components/ui/sonner';
import Hero from './components/Hero';
import RouteMap from './components/RouteMap';
import Features from './components/Features';
import Approach from './components/Approach';
import Documentation from './components/Documentation';
import Sponsors from './components/Sponsors';
import Contact from './components/Contact';
import Footer from './components/Footer';
import {
  expeditionInfo,
  routePoints,
  expeditionFeatures,
  expeditionApproach,
  documentation,
  sponsors,
  contactInfo,
  currentLocation
} from './mock';

function App() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="App min-h-screen bg-stone-950">
      <Hero expeditionInfo={expeditionInfo} />
      <RouteMap routePoints={routePoints} currentLocation={currentLocation} />
      <Features features={expeditionFeatures} />
      <Approach approaches={expeditionApproach} />
      <Documentation items={documentation} />
      <Sponsors sponsors={sponsors} />
      <Contact contactInfo={contactInfo} />
      <Footer expeditionInfo={expeditionInfo} contactInfo={contactInfo} />
      <Toaster />
    </div>
  );
}

export default App;