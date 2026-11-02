import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { ScrollToTop } from './components/ScrollToTop';

// Multi-Page Routes
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { HeadSpaPage } from './pages/HeadSpaPage';
import { ContactPage } from './pages/ContactPage';

import { Calendar } from 'lucide-react';

export const App: React.FC = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingStylistId, setBookingStylistId] = useState<string>('');
  const [bookingServiceId, setBookingServiceId] = useState<string>('');

  const handleOpenBooking = (stylistId?: string, serviceId?: string) => {
    setBookingStylistId(stylistId || '');
    setBookingServiceId(serviceId || '');
    setIsBookingOpen(true);
  };

  const handleSelectStylistBooking = (stylistId?: string) => {
    setBookingStylistId(stylistId || '');
    setBookingServiceId('');
    setIsBookingOpen(true);
  };

  const handleSelectServiceBooking = (serviceId?: string) => {
    setBookingServiceId(serviceId || '');
    setBookingStylistId('');
    setIsBookingOpen(true);
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-brand-cream text-brand-charcoal font-sans flex flex-col selection:bg-brand-gold/25 selection:text-brand-dark">
        {/* Sticky Header with Multi-Page Navigation */}
        <Navbar onOpenBooking={handleOpenBooking} />

        {/* Dynamic Route Pages */}
        <main className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={<HomePage onOpenBooking={handleOpenBooking} />}
            />
            <Route
              path="/about"
              element={<AboutPage onOpenBooking={handleSelectStylistBooking} />}
            />
            <Route
              path="/services"
              element={<ServicesPage onOpenBooking={handleOpenBooking} />}
            />
            <Route
              path="/head-spa"
              element={<HeadSpaPage onOpenBooking={handleSelectServiceBooking} />}
            />
            <Route
              path="/contact"
              element={<ContactPage onOpenBooking={() => handleOpenBooking()} />}
            />
            {/* Fallback to Home */}
            <Route
              path="*"
              element={<HomePage onOpenBooking={handleOpenBooking} />}
            />
          </Routes>
        </main>

        {/* Multi-Page Footer */}
        <Footer />

        {/* Global Interactive Booking Modal */}
        <BookingModal
          isOpen={isBookingOpen}
          onClose={() => setIsBookingOpen(false)}
          initialStylistId={bookingStylistId}
          initialServiceId={bookingServiceId}
        />

        {/* Mobile Floating Quick Action Button */}
        <aside aria-label="Quick booking" className="sm:hidden fixed bottom-5 right-5 z-30">
          <button
            onClick={() => handleOpenBooking()}
            className="px-5 py-3 rounded-full bg-brand-gold text-brand-dark font-semibold text-xs tracking-wider uppercase shadow-xl flex items-center gap-2 border border-brand-dark/20 active:scale-95"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Atelier</span>
          </button>
        </aside>
      </div>
    </Router>
  );
};

export default App;
