import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, CheckCircle, Sparkles, User, Scissors, Phone, Mail, FileText } from 'lucide-react';
import { STYLISTS, SERVICES, SALON_INFO } from '../data/salonData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialStylistId?: string;
  initialServiceId?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialStylistId = '',
  initialServiceId = '',
}) => {
  const [selectedStylist, setSelectedStylist] = useState<string>(initialStylistId);
  const [selectedService, setSelectedService] = useState<string>(initialServiceId);
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>('morning');
  const [fullName, setFullName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [notes, setNotes] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [bookingRef, setBookingRef] = useState<string>('');

  useEffect(() => {
    if (initialStylistId) setSelectedStylist(initialStylistId);
    if (initialServiceId) setSelectedService(initialServiceId);
  }, [initialStylistId, initialServiceId]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const randomRef = 'REVE-' + Math.floor(100000 + Math.random() * 900000);
    setBookingRef(randomRef);
    setIsSubmitted(true);
  };

  const resetForm = () => {
    setIsSubmitted(false);
    onClose();
  };

  const chosenStylist = STYLISTS.find((s) => s.id === selectedStylist);
  const chosenService = SERVICES.find((s) => s.id === selectedService);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto bg-black/75 backdrop-blur-sm animate-fade-in">
      <div
        className="fixed inset-0"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="relative w-full max-w-2xl bg-brand-cream rounded-3xl shadow-2xl border border-brand-gold/30 overflow-hidden z-10 max-h-[90vh] flex flex-col my-auto">
        
        {/* Modal Top Header */}
        <div className="px-6 py-5 bg-brand-dark text-brand-cream flex items-center justify-between border-b border-brand-gold/20">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-brand-gold/20 border border-brand-gold/40 flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-brand-gold" />
            </div>
            <div>
              <h3 className="font-serif text-xl font-medium tracking-wide">
                Salon Rêve Appointment Reservation
              </h3>
              <p className="text-[11px] text-brand-gold uppercase tracking-widest font-sans">
                Authentic Korean Hair Atelier • Cary, NC
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-stone-400 hover:text-white hover:bg-stone-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content Scroll Area */}
        <div className="p-6 sm:p-8 overflow-y-auto">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* 1. Stylist Selection */}
              <div>
                <label className="text-xs uppercase tracking-luxury text-stone-600 font-semibold block mb-2 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-brand-gold-dark" />
                  <span>1. Select Master Stylist</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <button
                    type="button"
                    onClick={() => setSelectedStylist('')}
                    className={`p-3.5 rounded-xl border text-left transition-all ${
                      selectedStylist === ''
                        ? 'border-brand-gold bg-brand-gold/10 font-medium ring-1 ring-brand-gold'
                        : 'border-stone-200 bg-white hover:border-stone-300'
                    }`}
                  >
                    <p className="text-xs font-semibold text-stone-900">First Available</p>
                    <p className="text-[10px] text-stone-500">Yuna or Jason</p>
                  </button>

                  {STYLISTS.map((s) => (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => setSelectedStylist(s.id)}
                      className={`p-3.5 rounded-xl border text-left transition-all ${
                        selectedStylist === s.id
                          ? 'border-brand-gold bg-brand-gold/10 font-medium ring-1 ring-brand-gold'
                          : 'border-stone-200 bg-white hover:border-stone-300'
                      }`}
                    >
                      <p className="text-xs font-semibold text-stone-900">{s.name}</p>
                      <p className="text-[10px] text-brand-gold-dark">{s.experience.split('in')[0] || s.experience}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* 2. Service Selection */}
              <div>
                <label className="text-xs uppercase tracking-luxury text-stone-600 font-semibold block mb-2 flex items-center gap-1.5">
                  <Scissors className="w-3.5 h-3.5 text-brand-gold-dark" />
                  <span>2. Select Desired Service</span>
                </label>
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  required
                  className="w-full p-3.5 bg-white border border-stone-200 rounded-xl text-stone-800 text-sm focus:outline-none focus:ring-1 focus:ring-brand-gold focus:border-brand-gold"
                >
                  <option value="">-- Choose from K-Beauty Menu --</option>
                  <optgroup label="K-Style Precision Cuts">
                    {SERVICES.filter((s) => s.category === 'cuts').map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.name} ({s.price} • {s.duration})
                      </option>
                    ))}
                  </optgroup>
                  <optgroup label="Authentic Korean Perms">
                    {SERVICES.filter((s) => s.category === 'perms').map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.name} ({s.price} • {s.duration})
                      </option>
                    ))}
                  </optgroup>
                  <optgroup label="Korean Scalp & Head Spa">
                    {SERVICES.filter((s) => s.category === 'scalp').map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.name} ({s.price} • {s.duration})
                      </option>
                    ))}
                  </optgroup>
                  <optgroup label="Bespoke Color & Treatments">
                    {SERVICES.filter((s) => s.category === 'color' || s.category === 'treatment').map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.name} ({s.price} • {s.duration})
                      </option>
                    ))}
                  </optgroup>
                </select>
              </div>

              {/* 3. Preferred Date & Time Window */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs uppercase tracking-luxury text-stone-600 font-semibold block mb-2 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-brand-gold-dark" />
                    <span>3. Preferred Date</span>
                  </label>
                  <input
                    type="date"
                    required
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full p-3.5 bg-white border border-stone-200 rounded-xl text-stone-800 text-sm focus:outline-none focus:ring-1 focus:ring-brand-gold"
                  />
                  <span className="text-[10px] text-stone-400 mt-1 block">Tuesday – Sunday availability</span>
                </div>

                <div>
                  <label className="text-xs uppercase tracking-luxury text-stone-600 font-semibold block mb-2 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-brand-gold-dark" />
                    <span>Time Window</span>
                  </label>
                  <select
                    value={selectedTimeSlot}
                    onChange={(e) => setSelectedTimeSlot(e.target.value)}
                    className="w-full p-3.5 bg-white border border-stone-200 rounded-xl text-stone-800 text-sm focus:outline-none focus:ring-1 focus:ring-brand-gold"
                  >
                    <option value="morning">Morning (10:00 AM – 1:00 PM)</option>
                    <option value="afternoon">Afternoon (1:00 PM – 4:00 PM)</option>
                    <option value="evening">Late Afternoon / Evening (4:00 PM – 7:00 PM)</option>
                  </select>
                </div>
              </div>

              {/* 4. Guest Details */}
              <div className="space-y-4 pt-2 border-t border-stone-200">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs uppercase tracking-luxury text-stone-600 font-semibold block mb-1.5 flex items-center gap-1">
                      <User className="w-3.5 h-3.5 text-brand-gold-dark" />
                      <span>Full Name</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rachel Kim"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full p-3 bg-white border border-stone-200 rounded-xl text-stone-800 text-sm focus:outline-none focus:ring-1 focus:ring-brand-gold"
                    />
                  </div>

                  <div>
                    <label className="text-xs uppercase tracking-luxury text-stone-600 font-semibold block mb-1.5 flex items-center gap-1">
                      <Phone className="w-3.5 h-3.5 text-brand-gold-dark" />
                      <span>Mobile Phone (for SMS Confirmation)</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="(919) 000-0000"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full p-3 bg-white border border-stone-200 rounded-xl text-stone-800 text-sm focus:outline-none focus:ring-1 focus:ring-brand-gold"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs uppercase tracking-luxury text-stone-600 font-semibold block mb-1.5 flex items-center gap-1">
                    <Mail className="w-3.5 h-3.5 text-brand-gold-dark" />
                    <span>Email Address</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="rachel@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-3 bg-white border border-stone-200 rounded-xl text-stone-800 text-sm focus:outline-none focus:ring-1 focus:ring-brand-gold"
                  />
                </div>

                <div>
                  <label className="text-xs uppercase tracking-luxury text-stone-600 font-semibold block mb-1.5 flex items-center gap-1">
                    <FileText className="w-3.5 h-3.5 text-brand-gold-dark" />
                    <span>Hair Details & Inspiration (Optional)</span>
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Tell us about your current hair history (e.g. previous bleach, current length, desire for see-through bangs, etc.)"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full p-3 bg-white border border-stone-200 rounded-xl text-stone-800 text-sm focus:outline-none focus:ring-1 focus:ring-brand-gold"
                  />
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 rounded-full bg-brand-dark hover:bg-stone-800 text-brand-gold text-xs uppercase tracking-widest font-semibold transition-all duration-300 shadow-luxury flex items-center justify-center gap-2 hover:shadow-glow"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Confirm Appointment Reservation Request</span>
                </button>
                <p className="text-center text-[11px] text-stone-500 mt-2 font-light">
                  Our Cary atelier concierge will send an instant SMS confirmation and email with preparation instructions.
                </p>
              </div>

            </form>
          ) : (
            /* Confirmation Screen */
            <div className="py-8 text-center space-y-6 animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <span className="text-xs uppercase tracking-widest text-brand-gold-dark font-semibold">
                  Reservation Received
                </span>
                <h4 className="font-serif text-3xl text-brand-charcoal font-medium">
                  We look forward to welcoming you, {fullName}!
                </h4>
                <p className="text-sm text-stone-600 max-w-md mx-auto font-light">
                  Your appointment request has been scheduled with <strong className="font-semibold">{chosenStylist ? chosenStylist.name : 'Master Stylist Team'}</strong>.
                </p>
              </div>

              {/* Reservation Summary Box */}
              <div className="p-6 rounded-2xl bg-white border border-stone-200 max-w-md mx-auto text-left space-y-3 shadow-sm">
                <div className="flex justify-between items-center pb-2 border-b border-stone-100">
                  <span className="text-xs text-stone-400 uppercase tracking-wider">Booking Ref:</span>
                  <span className="text-xs font-mono font-bold text-stone-900">{bookingRef}</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-stone-100">
                  <span className="text-xs text-stone-400 uppercase tracking-wider">Service:</span>
                  <span className="text-xs font-medium text-stone-900">{chosenService ? chosenService.name : 'Korean Atelier Service'}</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-stone-100">
                  <span className="text-xs text-stone-400 uppercase tracking-wider">Date & Window:</span>
                  <span className="text-xs font-medium text-stone-900">{selectedDate || 'Upcoming Date'} ({selectedTimeSlot})</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-stone-400 uppercase tracking-wider">Location:</span>
                  <span className="text-xs font-medium text-stone-900">{SALON_INFO.address.street}, Cary, NC</span>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={resetForm}
                  className="w-full sm:w-auto px-8 py-3 rounded-full bg-brand-dark text-brand-gold text-xs uppercase tracking-wider font-medium hover:bg-stone-800 transition-colors"
                >
                  Return to Website
                </button>
                <a
                  href={`tel:${SALON_INFO.contact.phone.replace(/[^0-9]/g, '')}`}
                  className="w-full sm:w-auto px-6 py-3 rounded-full border border-stone-300 text-stone-700 text-xs uppercase tracking-wider hover:bg-stone-100 transition-colors"
                >
                  Call Shop: {SALON_INFO.contact.phone}
                </a>
              </div>

            </div>
          )}
        </div>

      </div>
    </div>
  );
};
