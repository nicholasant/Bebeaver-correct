import React from 'react';
import { Mountain } from 'lucide-react';

const Footer = ({ expeditionInfo, contactInfo }) => {
  return (
    <footer className="bg-black text-gray-400 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Mountain className="w-8 h-8 text-amber-500" />
              <div>
                <h3 className="text-xl font-bold text-white">{expeditionInfo.title}</h3>
                <p className="text-sm text-gray-500">{expeditionInfo.subtitle}</p>
              </div>
            </div>
            <p className="text-sm text-gray-500">
              {expeditionInfo.route}
            </p>
            <p className="text-sm text-amber-600 font-semibold mt-2">
              {expeditionInfo.duration}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button 
                  onClick={() => document.getElementById('route-section').scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-amber-500 transition-colors"
                >
                  Route Map
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('sponsor-section').scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-amber-500 transition-colors"
                >
                  Sponsors
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('contact-section').scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-amber-500 transition-colors"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>{contactInfo.email}</li>
              <li>{contactInfo.phone}</li>
              <li>{contactInfo.website}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-800 pt-8 text-center text-sm">
          <p>&copy; 2026 {expeditionInfo.team}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;