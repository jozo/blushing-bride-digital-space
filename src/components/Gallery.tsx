
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const Gallery = () => {
  const { t } = useLanguage();

  const photos = [
    {
      src: "/images/20240501T100804.webp",
      alt: ""
    },
    {
      src: "/images/20240705T133430.webp",
      alt: ""
    },
    {
      src: "/images/Fotografia 24-08-18 11-46-33 5974.jpg",
      alt: ""
    },
    {
      src: "/images/Fotografia 24-08-29 09-25-34 6215.jpg",
      alt: ""
    },
    {
      src: "/images/Fotografia 24-12-17 18-22-09 8120.jpg",
      alt: ""
    },
    {
      src: "/images/Fotografia 24-12-22 16-01-41 8307.jpg",
      alt: ""
    },
    {
      src: "/images/Fotografia 25-04-23 19-04-07 1372.jpg",
      alt: ""
    },
    {
      src: "/images/Fotografia 25-05-03 22-34-29 1665.jpg",
      alt: ""
    },
    {
      src: "/images/IMG_2386.jpg",
      alt: ""
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-cream-100 to-cream-200" id="gallery">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-cream-800 mb-4">{t('gallery.title')}</h2>
          <div className="h-px w-24 bg-cream-400 mx-auto mb-6"></div>
          <p className="text-cream-700">{t('gallery.subtitle')}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 aspect-square"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
