
import React from 'react';
import { MapPin, Clock, Calendar } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const WeddingDetails = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-gradient-to-br from-cream-50 to-cream-100" id="info">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-cream-800 mb-4">{t('details.title')}</h2>
          <div className="h-px w-24 bg-cream-400 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-center">
              <Calendar className="mx-auto mb-4 text-cream-500 h-8 w-8" />
              <h3 className="text-2xl font-serif text-cream-800 mb-4">{t('details.ceremony')}</h3>
              <div className="space-y-3 text-cream-700">
                <div className="flex items-center justify-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span>15:00</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <a href="https://maps.app.goo.gl/hpyZpCiGXbKgz11Z9" target="_blank"
                    className="underline hover:no-underline">
                    {t('details.ceremony.location')}
                  </a>
                </div>
                <p className="text-sm">{t('details.ceremony.address')}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-center">
              <span className="text-3xl mb-4 block">🥂</span>
              <h3 className="text-2xl font-serif text-cream-800 mb-4">{t('details.reception')}</h3>
              <div className="space-y-3 text-cream-700">
                <div className="flex items-center justify-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span>17:00</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <a href="https://maps.app.goo.gl/fVjcyn4FrmCJsdv98" target="_blank"
                    className="underline hover:no-underline">
                    {t('details.reception.location')}
                  </a>
                </div>
                <p className="text-sm">{t('details.reception.address')}</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl mx-auto">
            <h3 className="text-xl font-serif text-cream-800 mb-3">{t('details.dresscode.title')}</h3>
            <p className="text-cream-700">
              {t('details.dresscode.text')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeddingDetails;
