
import React from 'react';
import { MapPin, Clock, Calendar } from 'lucide-react';

const WeddingDetails = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-rose-50 to-pink-50" id="details">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-4">Wedding Details</h2>
          <div className="h-px w-24 bg-rose-300 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-center">
              <Calendar className="mx-auto mb-4 text-rose-400 h-8 w-8" />
              <h3 className="text-2xl font-serif text-gray-800 mb-4">Ceremony</h3>
              <div className="space-y-3 text-gray-600">
                <div className="flex items-center justify-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span>4:00 PM</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>Sunset Garden Estate</span>
                </div>
                <p className="text-sm">123 Garden Lane, Roseville, CA 95661</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-center">
              <span className="text-3xl mb-4 block">🥂</span>
              <h3 className="text-2xl font-serif text-gray-800 mb-4">Reception</h3>
              <div className="space-y-3 text-gray-600">
                <div className="flex items-center justify-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span>6:00 PM</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>Grand Ballroom</span>
                </div>
                <p className="text-sm">456 Celebration Ave, Roseville, CA 95661</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl mx-auto">
            <h3 className="text-xl font-serif text-gray-800 mb-3">Dress Code</h3>
            <p className="text-gray-600">
              Semi-formal attire requested. Think garden party chic! 
              Ladies, we suggest avoiding stilettos as we'll be on grass.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeddingDetails;
