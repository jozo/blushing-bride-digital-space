
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center space-x-1 bg-cream-100 rounded-full p-1">
      <button
        onClick={() => setLanguage('sk')}
        className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-200 ${
          language === 'sk'
            ? 'bg-cream-500 text-white shadow-sm'
            : 'text-cream-700 hover:text-cream-500'
        }`}
      >
        SK
      </button>
      <button
        onClick={() => setLanguage('en')}
        className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-200 ${
          language === 'en'
            ? 'bg-cream-500 text-white shadow-sm'
            : 'text-cream-700 hover:text-cream-500'
        }`}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSwitcher;
