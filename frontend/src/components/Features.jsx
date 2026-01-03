import React from 'react';
import { Shield, Gauge, Radio } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const iconMap = {
  0: Radio,
  1: Gauge,
  2: Shield
};

const Features = ({ features }) => {
  return (
    <section className="py-24 bg-gradient-to-b from-stone-900 to-stone-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">Real-World Testing Essentials</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Exploring remote territories with continuous field testing in the harshest conditions
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, idx) => {
            const Icon = iconMap[idx];
            return (
              <Card
                key={feature.id}
                className="group bg-stone-800 border-stone-700 hover:border-amber-600 transition-all duration-500 hover:scale-105"
              >
                <CardContent className="p-8">
                  <div className="mb-6">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-700 to-amber-900 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;