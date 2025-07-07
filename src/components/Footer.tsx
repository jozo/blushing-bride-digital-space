
import React from 'react';
import { Heart, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="mb-8">
          <Heart className="mx-auto mb-4 text-rose-400 h-8 w-8" />
          <h3 className="text-2xl font-serif mb-2">Sarah & James</h3>
          <p className="text-gray-300">June 15, 2024</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="flex items-center justify-center space-x-2">
            <Mail className="h-4 w-4 text-rose-400" />
            <span className="text-gray-300">wedding@sarahandjames.com</span>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <Phone className="h-4 w-4 text-rose-400" />
            <span className="text-gray-300">(555) 123-4567</span>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8">
          <p className="text-gray-400 text-sm">
            We can't wait to celebrate with you! ♥
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
