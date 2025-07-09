
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import { LanguageProvider } from '@/contexts/LanguageContext';
import Index from '@/pages/Index';
import NotFound from '@/pages/NotFound';
import * as Sentry from "@sentry/react";
import { useEffect } from 'react';
import './App.css';

// Initialize Sentry
Sentry.init({
  dsn: "YOUR_SENTRY_DSN_HERE", // Replace with your actual Sentry DSN
  environment: import.meta.env.MODE,
  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.replayIntegration({
      maskAllText: false,
      blockAllMedia: false,
    }),
  ],
  tracesSampleRate: 1.0,
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
});

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Toaster />
      </Router>
    </LanguageProvider>
  );
}

export default App;
