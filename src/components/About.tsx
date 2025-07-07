
import React from 'react';

const About = () => {
  return (
    <section className="py-20 bg-white" id="about">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-cream-800 mb-4">Our Love Story</h2>
          <div className="h-px w-24 bg-cream-400 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-serif text-cream-800 mb-3">How We Met</h3>
              <p className="text-cream-700 leading-relaxed">
                It was a rainy Tuesday morning at the local coffee shop when our eyes first met. 
                Sarah was reading her favorite novel, and James couldn't help but notice the 
                smile on her face. A spilled latte later, and the rest is history.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-serif text-cream-800 mb-3">The Proposal</h3>
              <p className="text-cream-700 leading-relaxed">
                Three years later, James surprised Sarah with a sunset picnic at the same park 
                where they had their first official date. As the golden hour painted the sky, 
                he got down on one knee and asked the question that changed everything.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-full overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Beautiful scenery representing our journey"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-cream-100 p-4 rounded-full shadow-lg">
              <span className="text-2xl">💕</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
