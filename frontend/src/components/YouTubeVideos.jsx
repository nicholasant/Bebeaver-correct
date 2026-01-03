import React, { useState, useEffect } from 'react';
import { Youtube, ExternalLink } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';

const YouTubeVideos = ({ channelUrl }) => {
  // Extract channel handle from URL
  const channelHandle = channelUrl.split('@')[1] || 'Bebeaver-q9z';
  
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

        {/* YouTube Channel Embed */}
        <Card className="bg-stone-800 border-stone-700 overflow-hidden mb-8">
          <div className="p-8">
            <div className="aspect-video w-full rounded-lg overflow-hidden bg-black">
              <iframe
                src={`https://www.youtube.com/embed?listType=user_uploads&list=${channelHandle}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </Card>

        {/* Latest Videos Grid - Using YouTube Channel Embed */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {[1, 2, 3].map((index) => (
            <Card key={index} className="bg-stone-800 border-stone-700 overflow-hidden hover:border-amber-600 transition-all duration-300">
              <div className="aspect-video bg-black">
                <iframe
                  src={`https://www.youtube.com/embed?listType=user_uploads&list=${channelHandle}&index=${index}`}
                  title={`YouTube video ${index}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </Card>
          ))}
        </div>

        {/* Visit Channel Button */}
        <div className="text-center">
          <Button
            size="lg"
            className="bg-red-600 hover:bg-red-700 text-white px-10 py-6 text-lg transition-all duration-300 hover:scale-105"
            onClick={() => window.open(channelUrl, '_blank')}
          >
            <Youtube className="w-6 h-6 mr-2" />
            Visit Our YouTube Channel
            <ExternalLink className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default YouTubeVideos;
