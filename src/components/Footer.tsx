
import React from 'react';
import { Heart, Mail, Phone } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-cream-800 text-cream-100 py-12">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="mb-8">
          <Heart className="mx-auto mb-4 text-cream-300 h-8 w-8" />
          <h3 className="text-2xl font-serif mb-2">Sára & Jozef</h3>
          <p className="text-cream-200">{t('footer.date')}</p>

        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="flex items-center justify-center space-x-2">
            <Mail className="h-4 w-4 text-cream-300" />
            <span className="text-cream-200">hi@jozo.io</span>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <div className="flex flex-col">
              <div className="flex items-center space-x-2 mb-2">
                <Phone className="h-4 w-4 text-cream-300" />
                <span className="text-cream-200">+421 908 659 451</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-cream-300" />
                <span className="text-cream-200">+421 949 803 040</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-cream-600 pt-8">
          <p className="text-cream-300 text-sm">
            {t('footer.excitement')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
