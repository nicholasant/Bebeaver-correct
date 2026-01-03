import React, { useEffect, useState } from 'react';
import './App.css';
import { Toaster } from 'sonner';
import Hero from './components/Hero';
import RouteMapLeaflet from './components/RouteMapLeaflet';
import Features from './components/Features';
import Approach from './components/Approach';
import Documentation from './components/Documentation';
import Sponsors from './components/Sponsors';
import Contact from './components/Contact';
import Footer from './components/Footer';
import {
  expeditionInfo,
  expeditionFeatures,
  expeditionApproach,
  documentation,
  contactInfo
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
      <RouteMapLeaflet />
      <Features features={expeditionFeatures} />
      <Approach approaches={expeditionApproach} />
      <Documentation items={documentation} />
      <Sponsors />
      <Contact contactInfo={contactInfo} />
      <Footer expeditionInfo={expeditionInfo} contactInfo={contactInfo} />
      <Toaster richColors position="top-right" />
    </div>
  );
}

export default App;