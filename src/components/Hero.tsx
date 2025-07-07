
import React from 'react';
import { Heart } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cream-50 to-cream-100 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-10"></div>
      
      <div className="text-center z-10 px-4">
        <div className="animate-fade-in">
          <Heart className="mx-auto mb-6 text-cream-500 h-12 w-12 animate-pulse" />
          <h1 className="text-6xl md:text-8xl font-serif text-cream-800 mb-4 tracking-wide">
            Sarah & James
          </h1>
          <div className="h-px w-32 bg-cream-400 mx-auto mb-6"></div>
          <p className="text-xl md:text-2xl text-cream-700 mb-8 font-light">
            are getting married
          </p>
          <p className="text-lg md:text-xl text-cream-600 mb-12">
            June 15, 2024 • Sunset Garden Estate
          </p>
          <button className="bg-cream-500 hover:bg-cream-600 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-lg">
            View Our Story
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-cream-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-cream-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
