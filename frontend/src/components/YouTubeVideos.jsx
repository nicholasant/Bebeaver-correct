import React from 'react';
import { Youtube, ExternalLink } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';

const YouTubeVideos = ({ channelUrl }) => {
  return (
    <section className="py-24 bg-gradient-to-b from-stone-950 to-stone-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-red-600 to-red-800 mb-6">
            <Youtube className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-5xl font-bold text-white mb-4">Video Series</h2>
          <p className="text-xl text-gray-400 mb-8">
            Follow our journey through video documentation
          </p>
        </div>

        {/* YouTube Channel Card */}
        <Card className="max-w-4xl mx-auto bg-gradient-to-r from-stone-800 to-stone-900 border-amber-700/50 overflow-hidden">
          <div className="p-12 text-center">
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-red-600 mb-6">
              <Youtube className="w-12 h-12 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-white mb-4">
              Watch Our Expedition Videos
            </h3>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Subscribe to our YouTube channel for real-time expedition updates, behind-the-scenes footage, and authentic overland adventure content. New videos uploaded regularly throughout our journey from Italy to Mongolia.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-red-600 hover:bg-red-700 text-white px-10 py-6 text-lg transition-all duration-300 hover:scale-105"
                onClick={() => window.open(channelUrl, '_blank')}
              >
                <Youtube className="w-6 h-6 mr-2" />
                Visit YouTube Channel
                <ExternalLink className="w-5 h-5 ml-2" />
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-amber-600 text-amber-400 hover:bg-amber-600 hover:text-white px-10 py-6 text-lg transition-all duration-300"
                onClick={() => window.open(`${channelUrl}?sub_confirmation=1`, '_blank')}
              >
                Subscribe Now
              </Button>
            </div>

            <p className="text-sm text-gray-500 mt-6">
              @Bebeaver-q9z • Expedition starts May 2026
            </p>
          </div>
        </Card>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <Card className="bg-stone-800 border-stone-700 p-6 text-center hover:border-amber-600 transition-all duration-300">
            <div className="w-12 h-12 rounded-full bg-amber-700/30 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🎥</span>
            </div>
            <h4 className="text-white font-bold mb-2">Daily Updates</h4>
            <p className="text-gray-400 text-sm">Fresh content from the expedition trail</p>
          </Card>

          <Card className="bg-stone-800 border-stone-700 p-6 text-center hover:border-amber-600 transition-all duration-300">
            <div className="w-12 h-12 rounded-full bg-amber-700/30 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🎬</span>
            </div>
            <h4 className="text-white font-bold mb-2">Behind the Scenes</h4>
            <p className="text-gray-400 text-sm">Unfiltered expedition experiences</p>
          </Card>

          <Card className="bg-stone-800 border-stone-700 p-6 text-center hover:border-amber-600 transition-all duration-300">
            <div className="w-12 h-12 rounded-full bg-amber-700/30 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🗺️</span>
            </div>
            <h4 className="text-white font-bold mb-2">Route Highlights</h4>
            <p className="text-gray-400 text-sm">Key moments from each destination</p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default YouTubeVideos;
