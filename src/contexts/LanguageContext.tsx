
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'sk' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  sk: {
    // Navigation
    'nav.home': 'Domov',
    'nav.story': 'Náš príbeh',
    'nav.info': 'Informácie',
    'nav.gallery': 'Galéria',
    'nav.rsvp': 'RSVP',
    
    // Hero
    'hero.subtitle': 'sa budú brať!',
    'hero.date': '24. október 2025 • Oravská Jasenica',
    'hero.button': 'Prečítaj si náš príbeh',
    
    // About
    'about.title': 'Náš príbeh',
    'about.meeting.title': 'Ako sme sa spoznali',
    'about.meeting.text': 'Prvýkrát sa zahliadli na jednej kresťanskej akcii. Najskôr len zdiaľky, postupne však na seba narážali viac a viac na miestach, kde to ani nečakali. Spoločný rozhovor v aute pred Hlavnou stanicou prerástol do pozvania na prvé rande. Už o pár týždňov na to sa držali za ruky a začali spoločné dobrodružstvo.',
    'about.engagement.title': 'Zásnuby',
    'about.engagement.text': 'Po roku Jozef vedel, že Sára je tá pravá. Púť do Ríma počas jubilejného roku obohatil o prekvapenie navyše. V Bazilike sv. Sebastiána pokľakol a požiadal Sáru o ruku.',
    
    // Wedding Details
    'details.title': 'Informácie o svadbe',
    'details.ceremony': 'Sobáš',
    'details.ceremony.location': 'Kostol sv. Jána a Pavla mučeníkov',
    'details.ceremony.address': 'Záhumnie 154, 029 51 Vasiľov',
    'details.reception': 'Recepcia',
    'details.reception.location': 'Kultúrny dom Oravská Jasenica',
    'details.reception.address': 'Oravská Jasenica 142, 029 64 Oravská Jasenica',
    'details.dresscode.title': 'Dress Code',
    'details.dresscode.text': 'Stačí prísť v elegantnom oblečení. Pre dámy odporúčame šaty a pre pánov oblek.',
    
    // Gallery
    'gallery.title': 'Galéria - naša cesta',
    'gallery.subtitle': 'Náhľad do našich spoločných spomienok...',
    'gallery.more': 'More photos coming soon! Follow our journey on social media.',
    
    // RSVP
    'rsvp.title': 'RSVP',
    'rsvp.deadline': 'Prosím odpovedzte do 1. septembra 2025',
    'rsvp.name': 'Celé meno',
    'rsvp.email': 'Email',
    'rsvp.attendance': 'Zúčastníte sa?',
    'rsvp.attendance.yes': 'Áno, prídem',
    'rsvp.attendance.no': 'Bohužiaľ, nemôžem',
    'rsvp.guests': 'Počet hostí',
    'rsvp.guests.1': '1 hosť',
    'rsvp.guests.2': '2 hostia',
    'rsvp.guests.3': '3 hostia',
    'rsvp.guests.4': '4 hostia',
    'rsvp.dietary': 'Diétne obmedzenia',
    'rsvp.dietary.placeholder': 'Máte nejaké alergie alebo diétne potreby?',
    'rsvp.message': 'Odkaz pre pár',
    'rsvp.message.placeholder': 'Podeľte sa o svoje nadšenie alebo priania!',
    'rsvp.submit': 'Odoslať RSVP',
    
    // Footer
    'footer.excitement': 'Tešíme sa na oslavu s vami! ♥',
    'footer.date': '24. október 2025'
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.story': 'Our Story',
    'nav.info': 'Details',
    'nav.gallery': 'Gallery',
    'nav.rsvp': 'RSVP',
    
    // Hero
    'hero.subtitle': 'are getting married',
    'hero.date': 'October 24, 2025 • Oravská Jasenica',
    'hero.button': 'Read our story',
    
    // About
    'about.title': 'Our Story',
    'about.meeting.title': 'How we met',
    'about.meeting.text': 'They first caught sight of each other at a Christian event. At first, only from a distance, but gradually they kept running into each other more and more in places they didn’t expect. A shared conversation in a car in front of the Main Station turned into an invitation to a first date. Just a few weeks later, they were holding hands and beginning a shared adventure.',
    'about.engagement.title': 'The Engagement',
    'about.engagement.text': 'After a year, Jozef knew that Sára was the one. He added an extra surprise to their pilgrimage to Rome during the Jubilee Year. In the Basilica of St. Sebastian, he knelt down and asked Sára to marry him.',
    
    // Wedding Details
    'details.title': 'Wedding Details',
    'details.ceremony': 'Ceremony',
    'details.ceremony.location': 'Church of St. John and Paul the Martyrs',
    'details.ceremony.address': 'Záhumnie 154, 029 51 Vasiľov',
    'details.reception': 'Reception',
    'details.reception.location': 'Cultural House Oravská Jasenica',
    'details.reception.address': 'Oravská Jasenica 142, 029 64 Oravská Jasenica',
    'details.dresscode.title': 'Dress Code',
    'details.dresscode.text': 'Please come in elegant attire. We recommend dresses for ladies and suits for gentlemen.',
    
    // Gallery
    'gallery.title': 'Gallery - Our Journey',
    'gallery.subtitle': 'A glimpse into our shared memories...',
    'gallery.more': 'More photos coming soon! Follow our journey on social media.',
    
    // RSVP
    'rsvp.title': 'RSVP',
    'rsvp.deadline': 'Please respond by May 1st, 2024',
    'rsvp.name': 'Full Name',
    'rsvp.email': 'Email',
    'rsvp.attendance': 'Will you attend?',
    'rsvp.attendance.yes': 'Joyfully accept',
    'rsvp.attendance.no': 'Regretfully decline',
    'rsvp.guests': 'Number of Guests',
    'rsvp.guests.1': '1 Guest',
    'rsvp.guests.2': '2 Guests',
    'rsvp.guests.3': '3 Guests',
    'rsvp.guests.4': '4 Guests',
    'rsvp.dietary': 'Dietary Restrictions',
    'rsvp.dietary.placeholder': 'Any allergies or dietary needs?',
    'rsvp.message': 'Message for the Couple',
    'rsvp.message.placeholder': 'Share your excitement or well wishes!',
    'rsvp.submit': 'Send RSVP',
    
    // Footer
    'footer.excitement': 'We can\'t wait to celebrate with you! ♥',
    'footer.date': 'October 24, 2025'
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('sk');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
