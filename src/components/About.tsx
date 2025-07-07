
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-white" id="about">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-cream-800 mb-4">{t('about.title')}</h2>
          <div className="h-px w-24 bg-cream-400 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-serif text-cream-800 mb-3">{t('about.meeting.title')}</h3>
              <p className="text-cream-700 leading-relaxed">
                {t('about.meeting.text')}
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-serif text-cream-800 mb-3">{t('about.engagement.title')}</h3>
              <p className="text-cream-700 leading-relaxed">
                {t('about.engagement.text')}
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
