import React from 'react';
import { Database, Users, Lightbulb, Leaf } from 'lucide-react';

const iconMap = {
  'Data Collection': Database,
  'Cultural Exchange': Users,
  'Independent Projects': Lightbulb,
  'Environmental Monitoring': Leaf
};

const Approach = ({ approaches }) => {
  return (
    <section className="py-24 bg-stone-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">Our Approach</h2>
          <p className="text-xl text-gray-400">
            A multifaceted expedition combining science, culture, and independence
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {approaches.map((approach, idx) => {
            const Icon = iconMap[approach.title];
            return (
              <div
                key={approach.id}
                className="group relative p-8 rounded-xl bg-gradient-to-br from-stone-800 to-stone-900 border border-stone-700 hover:border-amber-600 transition-all duration-500 hover:-translate-y-2"
              >
                {/* Number Badge */}
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-amber-900/50 border border-amber-700 flex items-center justify-center text-amber-400 font-bold">
                  {idx + 1}
                </div>

                {/* Icon */}
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-amber-600 to-amber-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3">{approach.title}</h3>
                <p className="text-gray-400 leading-relaxed">{approach.description}</p>

                {/* Hover Effect Line */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-amber-600 to-amber-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-xl"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Approach;