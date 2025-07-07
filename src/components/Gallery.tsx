
import React from 'react';

const Gallery = () => {
  const photos = [
    {
      src: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      alt: "Beautiful mountain landscape"
    },
    {
      src: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      alt: "Elegant interior"
    },
    {
      src: "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      alt: "Nature scene with deer"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-cream-100 to-cream-200" id="gallery">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-cream-800 mb-4">Galéria - naša cesta</h2>
          <div className="h-px w-24 bg-cream-400 mx-auto mb-6"></div>
          <p className="text-cream-700">Náhľad do našich spoločných spomienok...</p>
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
        
        <div className="text-center mt-12">
          <p className="text-cream-700 text-lg">
            More photos coming soon! Follow our journey on social media.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
