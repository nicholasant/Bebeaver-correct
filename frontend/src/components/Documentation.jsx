import React from 'react';
import { Globe, BookOpen, Video } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const iconMap = {
  website: Globe,
  journal: BookOpen,
  video: Video
};

const Documentation = ({ items }) => {
  return (
    <section className="py-24 bg-gradient-to-b from-stone-950 to-stone-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">Documentation & Output</h2>
          <p className="text-xl text-gray-400">
            Follow the expedition through multiple media channels
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item) => {
            const Icon = iconMap[item.type];
            return (
              <Card
                key={item.id}
                className="group bg-stone-800 border-stone-700 hover:border-amber-600 transition-all duration-500 hover:scale-105 overflow-hidden"
              >
                <CardContent className="p-8 text-center">
                  {/* Icon with animated background */}
                  <div className="relative inline-flex items-center justify-center mb-6">
                    <div className="absolute w-24 h-24 bg-amber-600/20 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
                    <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-amber-600 to-amber-800 flex items-center justify-center group-hover:rotate-12 transition-transform duration-500">
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Documentation;