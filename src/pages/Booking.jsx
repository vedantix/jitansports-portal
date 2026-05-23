import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { base44 } from '@/api/base44Client';
import { CheckCircle, Calendar, Clock, ChevronLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useSiteContent } from '@/hooks/useSiteContent';

const DEFAULT_SLOTS = ['09:00', '10:00', '11:00', '13:00', '14:00', '15:00', '16:00', '17:00'];

function generateSlots(availability, dayOfWeek) {
  if (!availability?.length) return DEFAULT_SLOTS;
  const dayAvail = availability.find(a => a.day_of_week === dayOfWeek && a.is_active);
  if (!dayAvail) return [];
  const slots = [];
  const [startH, startM] = dayAvail.start_time.split(':').map(Number);
  const [endH, endM] = dayAvail.end_time.split(':').map(Number);
  const duration = dayAvail.slot_duration || 60;
  let cur = startH * 60 + startM;
  const end = endH * 60 + endM;
  while (cur + duration <= end) {
    slots.push(`${String(Math.floor(cur / 60)).padStart(2, '0')}:${String(cur % 60).padStart(2, '0')}`);
    cur += duration;
  }
  return slots;
}

const STEPS = [
  { n: 1, label: 'Dienst' },
  { n: 2, label: 'Datum & Tijd' },
  { n: 3, label: 'Uw gegevens' },
];

export default function Booking() {
  const { content } = useSiteContent();
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({ service: '', date: '', time: '', name: '', email: '', phone: '', message: '' });
  const [availability, setAvailability] = useState([]);
  const [bookedSlots, setBookedSlots] = useState([]);
  const [blockedDates, setBlockedDates] = useState([]);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const services = [1, 2, 3, 4, 5, 6].map((number) => ({
    id: `service-${number}`,
    name: content[`booking_service_${number}_name`],
    desc: content[`booking_service_${number}_desc`],
    price: content[`booking_service_${number}_price`],
    duration: content[`booking_service_${number}_duration`],
  }));

  useEffect(() => {
    base44.entities.Availability.list().then(setAvailability).catch(() => {});
    base44.entities.BlockedDate.list().then(setBlockedDates).catch(() => {});
  }, []);

  useEffect(() => {
    if (!form.date) return;
    base44.entities.Appointment.filter({ date: form.date }).then(apts => {
      setBookedSlots(apts.filter(a => a.status !== 'geannuleerd').map(a => a.time));
    }).catch(() => {});
  }, [form.date]);

  const today = new Date().toISOString().split('T')[0];

  const isDayBlocked = (dateStr) => blockedDates.some(b => b.date === dateStr && !b.time);

  const getAvailableSlots = () => {
    if (!form.date) return [];
    const dow = new Date(form.date + 'T12:00:00').getDay();
    const slots = generateSlots(availability, dow);
    const timeBlocked = blockedDates.filter(b => b.date === form.date && b.time).map(b => b.time);
    return slots.filter(s => !bookedSlots.includes(s) && !timeBlocked.includes(s));
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      await base44.entities.Appointment.create({
        name: form.name,
        email: form.email,
        phone: form.phone,
        service: form.service,
        date: form.date,
        time: form.time,
        message: form.message,
        status: 'nieuw',
      });
      base44.integrations.Core.SendEmail({
        to: form.email,
        subject: 'Afspraakverzoek ontvangen - JitanSports',
        body: `Beste ${form.name},\n\nBedankt voor uw afspraakverzoek!\n\nDienst: ${form.service}\nDatum: ${form.date}\nTijd: ${form.time}\n\nWe nemen zo snel mogelijk contact met u op ter bevestiging.\n\nMet vriendelijke groet,\nJitanSports\n${content.phone_display}\n${content.email}`,
      }).catch(() => {});
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setSubmitted(false);
    setStep(1);
    setForm({ service: '', date: '', time: '', name: '', email: '', phone: '', message: '' });
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-muted/30 flex items-center justify-center px-4 py-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-3xl p-8 md:p-10 text-center max-w-md w-full shadow-xl"
        >
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
            <CheckCircle className="w-8 h-8 text-green-500" />
          </div>
          <h2 className="text-2xl font-display font-bold text-secondary mb-2">{content.booking_success_title}</h2>
          <p className="text-muted-foreground mb-6">{content.booking_success_text}</p>
          <div className="bg-muted/50 rounded-2xl p-5 text-left mb-6 space-y-1">
            <p className="font-semibold text-secondary">{form.service}</p>
            <p className="text-sm text-muted-foreground">{form.date} om {form.time}</p>
            <p className="text-sm text-muted-foreground">{form.name} · {form.email}</p>
          </div>
          <Button onClick={resetForm} variant="outline" className="w-full">{content.booking_new_button}</Button>
        </motion.div>
      </div>
    );
  }

  const availableSlots = getAvailableSlots();
  const dateBlocked = form.date && isDayBlocked(form.date);

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Header */}
      <section className="bg-secondary py-12 px-4 text-center">
        <h1 className="text-3xl md:text-4xl font-display font-bold text-white mb-2">{content.booking_title}</h1>
        <p className="text-white/60 text-base">{content.booking_subtitle}</p>
      </section>

      {/* Progress bar */}
      <div className="bg-white border-b border-border sticky top-16 md:top-20 z-10">
        <div className="max-w-2xl mx-auto flex">
          {STEPS.map(s => (
            <div
              key={s.n}
              className={`flex-1 py-4 text-center text-sm font-medium border-b-2 transition-colors ${
                step === s.n
                  ? 'border-primary text-primary'
                  : step > s.n
                  ? 'border-green-400 text-green-600'
                  : 'border-transparent text-muted-foreground'
              }`}
            >
              <span className={`inline-flex w-6 h-6 rounded-full items-center justify-center text-xs mr-1.5 ${
                step >= s.n ? 'bg-primary text-secondary font-bold' : 'bg-muted text-muted-foreground'
              }`}>
                {s.n}
              </span>
              <span className="hidden sm:inline">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-8 pb-16">
        <AnimatePresence mode="wait">
          {/* Step 1 – Service */}
          {step === 1 && (
            <motion.div key="s1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
              <h2 className="text-xl font-bold text-secondary mb-5">{content.booking_service_title}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {services.map(s => (
                  <button
                    key={s.id}
                    onClick={() => setForm(p => ({ ...p, service: s.name }))}
                    className={`text-left p-5 rounded-2xl border-2 transition-all ${
                      form.service === s.name
                        ? 'border-primary bg-primary/5 shadow-sm'
                        : 'border-border bg-white hover:border-primary/40'
                    }`}
                  >
                    <p className="font-semibold text-secondary mb-1 text-sm">{s.name}</p>
                    <p className="text-xs text-muted-foreground mb-3">{s.desc}</p>
                    <div className="flex items-center gap-3 text-xs">
                      <span className="text-primary font-bold">{s.price}</span>
                      <span className="text-muted-foreground">{s.duration}</span>
                    </div>
                  </button>
                ))}
              </div>
              <Button
                disabled={!form.service}
                onClick={() => setStep(2)}
                className="w-full gap-2 bg-secondary text-white hover:bg-secondary/90 py-6 text-base"
              >
                Volgende: Datum kiezen <ArrowRight className="w-5 h-5" />
              </Button>
            </motion.div>
          )}

          {/* Step 2 – Date & Time */}
          {step === 2 && (
            <motion.div key="s2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
              <button onClick={() => setStep(1)} className="flex items-center gap-1 text-muted-foreground hover:text-foreground text-sm mb-5 transition-colors">
                <ChevronLeft className="w-4 h-4" /> Terug
              </button>
              <h2 className="text-xl font-bold text-secondary mb-5">Kies datum en tijd</h2>

              <div className="bg-white rounded-2xl p-5 border border-border mb-4">
                <label className="block text-sm font-medium text-secondary mb-2 flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-primary" /> Datum
                </label>
                <input
                  type="date"
                  min={today}
                  value={form.date}
                  onChange={e => setForm(p => ({ ...p, date: e.target.value, time: '' }))}
                  className="w-full border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
                {dateBlocked && (
                  <p className="text-red-500 text-sm mt-2">
                    ⚠ Deze datum is niet beschikbaar. Kies een andere datum.
                  </p>
                )}
              </div>

              {form.date && !dateBlocked && (
                <div className="bg-white rounded-2xl p-5 border border-border mb-4">
                  <label className="block text-sm font-medium text-secondary mb-3 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-primary" /> Beschikbare tijden
                  </label>
                  {availableSlots.length === 0 ? (
                    <p className="text-muted-foreground text-sm text-center py-4">
                      Geen beschikbare tijden op deze datum.<br />Kies een andere datum.
                    </p>
                  ) : (
                    <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                      {availableSlots.map(slot => (
                        <button
                          key={slot}
                          onClick={() => setForm(p => ({ ...p, time: slot }))}
                          className={`py-3 px-2 rounded-xl text-sm font-semibold transition-all ${
                            form.time === slot
                              ? 'bg-primary text-secondary shadow-sm'
                              : 'bg-muted hover:bg-primary/10 text-foreground'
                          }`}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              )}

              <Button
                disabled={!form.date || !form.time || !!dateBlocked}
                onClick={() => setStep(3)}
                className="w-full gap-2 bg-secondary text-white hover:bg-secondary/90 py-6 text-base"
              >
                Volgende: Uw gegevens <ArrowRight className="w-5 h-5" />
              </Button>
            </motion.div>
          )}

          {/* Step 3 – Personal Details */}
          {step === 3 && (
            <motion.div key="s3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
              <button onClick={() => setStep(2)} className="flex items-center gap-1 text-muted-foreground hover:text-foreground text-sm mb-5 transition-colors">
                <ChevronLeft className="w-4 h-4" /> Terug
              </button>
              <h2 className="text-xl font-bold text-secondary mb-5">Uw gegevens</h2>

              <div className="bg-primary/5 rounded-2xl p-4 border border-primary/20 mb-5 flex items-center gap-3">
                <div>
                  <p className="text-sm font-semibold text-secondary">{form.service}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{form.date} om {form.time}</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-5 border border-border space-y-4 mb-5">
                {[
                  { key: 'name', label: 'Naam', placeholder: 'Uw volledige naam', type: 'text', required: true },
                  { key: 'email', label: 'E-mailadres', placeholder: 'uw@email.nl', type: 'email', required: true },
                  { key: 'phone', label: 'Telefoonnummer', placeholder: '06 1234 5678', type: 'tel', required: true },
                ].map(field => (
                  <div key={field.key}>
                    <label className="block text-sm font-medium text-secondary mb-1">
                      {field.label} {field.required && <span className="text-primary">*</span>}
                    </label>
                    <input
                      type={field.type}
                      value={form[field.key]}
                      onChange={e => setForm(p => ({ ...p, [field.key]: e.target.value }))}
                      placeholder={field.placeholder}
                      className="w-full border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                ))}
                <div>
                  <label className="block text-sm font-medium text-secondary mb-1">Bericht (optioneel)</label>
                  <textarea
                    value={form.message}
                    onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                    placeholder="Bijzonderheden, vragen of blessures..."
                    rows={3}
                    className="w-full border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  />
                </div>
              </div>

              <Button
                disabled={!form.name || !form.email || !form.phone || loading}
                onClick={handleSubmit}
                className="w-full bg-primary text-secondary font-bold gap-2 py-6 text-base hover:bg-primary/90"
              >
                {loading ? 'Verzenden...' : 'Afspraak Bevestigen'}
                {!loading && <CheckCircle className="w-5 h-5" />}
              </Button>
              <p className="text-xs text-muted-foreground text-center mt-3">
                We nemen binnen 24 uur contact op ter bevestiging. Geen verplichtingen.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
