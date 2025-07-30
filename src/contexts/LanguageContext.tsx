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
    'about.meeting.text': 'Prvýkrát sme sa zahliadli na jednej kresťanskej akcii. Najskôr len zdiaľky, postupne sme však na seba narážali viac a viac na miestach, kde sme to ani nečakali. Spoločný rozhovor v aute pred Hlavnou stanicou prerástol do pozvania na prvé rande. Už o pár týždňov na to sme sa držali za ruky a začalo naše spoločné dobrodružstvo.',
    'about.engagement.title': 'Zásnuby',
    'about.engagement.text': 'O rok neskôr sme už vedeli, že sme pre seba tí praví. Púť do Ríma počas jubilejného roku sme mali obohatenú o prekvapenie navyše. V Bazilike sv. Sebastiána Jožko pokľakol a požiadal Sáru o ruku.',
    
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
    'rsvp.deadline': 'Prosím odpovedzte do 15. septembra 2025',
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
    'rsvp.message.placeholder': 'Je niečo, čo by ste nám chceli povedať?',
    'rsvp.submit': 'Odoslať RSVP',
    
    // RSVP Form - Additional translations
    'rsvp.guest.details': 'Detaily hostí',
    'rsvp.add.person': 'Pridať osobu',
    'rsvp.person': 'Osoba',
    'rsvp.person.name': 'Meno',
    'rsvp.person.name.placeholder': 'Meno a priezvisko',
    'rsvp.person.type': 'Typ',
    'rsvp.person.type.adult': 'Dospelý',
    'rsvp.person.type.child': 'Dieťa',
    'rsvp.person.chair': 'Typ stoličky',
    'rsvp.person.chair.adult': 'Dospelácka stolička',
    'rsvp.person.chair.high': 'Detská stolička',
    'rsvp.person.chair.none': 'Žiadna stolička',
    'rsvp.person.dietary': 'Diétne obmedzenia',
    'rsvp.person.dietary.placeholder': 'Nejaké alergie alebo diétne potreby?',
    'rsvp.select.response': 'Vyberte odpoveď',
    'rsvp.select.chair': 'Vyberte stoličku',
    'rsvp.select.type': 'Vyberte typ',
    'rsvp.accommodation.title': 'Typ ubytovania',
    'rsvp.accommodation.description': 'Existujú dve možnosti ubytovania. Pozrite si fotky',
    'rsvp.accommodation.dormitory': 'internátu',
    'rsvp.accommodation.and': 'a',
    'rsvp.accommodation.hotel': 'hotela',
    'rsvp.accommodation.select': 'Vyberte typ ubytovania',
    'rsvp.accommodation.no': 'Bez ubytovania',
    'rsvp.accommodation.cheap': 'Internátna izba (20€/osoba/noc)',
    'rsvp.accommodation.expensive': 'Hotelová izba (40€/osoba/noc)',
    'rsvp.accommodation.days': 'Dni',
    'rsvp.accommodation.thursday': 'Štvrtok',
    'rsvp.accommodation.friday': 'Piatok',
    'rsvp.accommodation.saturday': 'Sobota',
    'rsvp.wedding.taxi': 'Chcem využiť svadobné taxi (iba z recepcie späť na ubytovanie)',
    'rsvp.submitting': 'Odosiela sa...',
    'rsvp.success.title': 'RSVP prijaté!',
    'rsvp.success.message': 'Ďakujeme za odpoveď. Tešíme sa na oslavu s vami!',
    'rsvp.error.title': 'Chyba',
    'rsvp.error.message': 'Vyskytol sa problém pri odosielaní RSVP. Skúste to znova.',
    'rsvp.name.required': 'Meno je povinné',
    
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
    'about.meeting.text': 'We first caught sight of each other at a Christian event. At first, only from a distance, but gradually we kept running into each other more and more in places we didn’t expect. A shared conversation in a car in front of the Main Station turned into an invitation to a first date. Just a few weeks later, we started holding hands and sharing adventures.',
    'about.engagement.title': 'The Engagement',
    'about.engagement.text': 'A year later, we knew that we were right for each other. Jozef added an extra surprise to our pilgrimage to Rome during the Jubilee Year. In the Basilica of St. Sebastian, he knelt down and asked me to marry him.',
    
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
    'rsvp.deadline': 'Please respond by September 15th, 2025',
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
    'rsvp.message.placeholder': 'Is there anything you would like to share with us?',
    'rsvp.submit': 'Send RSVP',
    
    // RSVP Form - Additional translations
    'rsvp.guest.details': 'Guest Details',
    'rsvp.add.person': 'Add Person',
    'rsvp.person': 'Person',
    'rsvp.person.name': 'Name',
    'rsvp.person.name.placeholder': 'First and Last Name',
    'rsvp.person.type': 'Type',
    'rsvp.person.type.adult': 'Adult',
    'rsvp.person.type.child': 'Child',
    'rsvp.person.chair': 'Chair Type',
    'rsvp.person.chair.adult': 'Adult Chair',
    'rsvp.person.chair.high': 'High Chair',
    'rsvp.person.chair.none': 'No Chair',
    'rsvp.person.dietary': 'Dietary Restrictions',
    'rsvp.person.dietary.placeholder': 'Any allergies or dietary needs?',
    'rsvp.select.response': 'Select response',
    'rsvp.select.chair': 'Select chair',
    'rsvp.select.type': 'Select type',
    'rsvp.accommodation.title': 'Accommodation Type',
    'rsvp.accommodation.description': 'There are two options for accommodation. Check photos of the',
    'rsvp.accommodation.dormitory': 'dormitory',
    'rsvp.accommodation.and': 'and',
    'rsvp.accommodation.hotel': 'hotel',
    'rsvp.accommodation.select': 'Select accommodation type',
    'rsvp.accommodation.no': 'No accommodation',
    'rsvp.accommodation.cheap': 'Dormitory room (20€/person/night)',
    'rsvp.accommodation.expensive': 'Hotel room (40€/person/night)',
    'rsvp.accommodation.days': 'Days',
    'rsvp.accommodation.thursday': 'Thursday',
    'rsvp.accommodation.friday': 'Friday',
    'rsvp.accommodation.saturday': 'Saturday',
    'rsvp.wedding.taxi': 'I want to use the wedding taxi (only from the reception back to your accommodation)',
    'rsvp.submitting': 'Submitting...',
    'rsvp.success.title': 'RSVP Received!',
    'rsvp.success.message': 'Thank you for your response. We can\'t wait to celebrate with you!',
    'rsvp.error.title': 'Error',
    'rsvp.error.message': 'There was a problem submitting your RSVP. Please try again.',
    'rsvp.name.required': 'Name is required',
    
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
