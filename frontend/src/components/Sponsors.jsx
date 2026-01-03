import React from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';

const Sponsors = ({ sponsors }) => {
  return (
    <section id="sponsor-section" className="py-24 bg-stone-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">Our Sponsors</h2>
          <p className="text-xl text-gray-400 mb-8">
            Supporting the journey from West to East
          </p>
        </div>

        {/* Sponsor Logos */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {sponsors.map((sponsor) => (
            <Card
              key={sponsor.id}
              className="p-8 bg-stone-800 border-stone-700 hover:border-amber-600 transition-all duration-300 hover:scale-105 flex items-center justify-center"
            >
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                className="max-w-full h-auto opacity-80 hover:opacity-100 transition-opacity duration-300"
              />
            </Card>
          ))}
        </div>

        {/* Become a Sponsor CTA */}
        <Card className="p-12 bg-gradient-to-r from-amber-900/30 to-stone-800 border-amber-700/50">
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">
              Become Part of This Journey
            </h3>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Join us as a sponsor and be part of an authentic overland expedition. Your support helps us test equipment in real-world conditions, document remote territories, and share this incredible journey with the world.
            </p>
            <Button
              size="lg"
              className="bg-amber-600 hover:bg-amber-700 text-white px-10 py-6 text-lg transition-all duration-300 hover:scale-105"
              onClick={() => document.getElementById('contact-section').scrollIntoView({ behavior: 'smooth' })}
            >
              Contact Us About Sponsorship
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Sponsors;