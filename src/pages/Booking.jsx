import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Calendar, Clock, CheckCircle, ArrowRight, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import { base44 } from '@/api/base44Client';
import { toast } from 'sonner';

const SERVICES = [
  "Gratis Proefles",
  "Personal Training Outdoor",
  "Personal Training @Home",
  "Deep Tissue Massage",
  "Ontspanningsmassage",
  "Get Fit Pakket",
];

const TIME_SLOTS = [
  "07:00", "08:00", "09:00", "10:00", "11:00", "12:00",
  "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00",
];

export default function Booking() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({ service: '', date: '', time: '', name: '', email: '', phone: '', message: '' });
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);

  const update = (key, val) => setForm(f => ({ ...f, [key]: val }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    await base44.entities.Appointment.create(form);
    setSending(false);
    setDone(true);
    toast.success('Afspraak aangevraagd! We nemen snel contact op ter bevestiging.');
  };

  const today = new Date().toISOString().split('T')[0];

  if (done) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center px-4">
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center max-w-md">
          <CheckCircle className="w-20 h-20 text-primary mx-auto mb-6" />
          <h1 className="text-3xl font-display font-bold text-secondary mb-3">Afspraak Aangevraagd!</h1>
          <p className="text-muted-foreground mb-2">Bedankt, {form.name}! We hebben jouw aanvraag ontvangen.</p>
          <p className="text-muted-foreground mb-8">
            {"We nemen zo snel mogelijk contact op ter bevestiging van je "}
            {form.service}{" op "}{form.date}{" om "}{form.time}.
          </p>
          <a href="/"><Button variant="outline">Terug naar Home</Button></a>
        </motion.div>
      </div>
    );
  }

  return (
    <div>
      <section className="py-20 px-4 bg-secondary text-secondary-foreground">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-primary font-semibold mb-3 uppercase tracking-wider text-sm">Reserveren</p>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Maak een Afspraak</h1>
            <p className="text-secondary-foreground/70 text-lg">Kies jouw dienst, datum en tijd. Simpel en snel.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-10">
            {[1, 2, 3].map(s => (
              <div key={s} className="flex items-center gap-2">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${
                  step >= s ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
                }`}>{s}</div>
                {s < 3 && <div className={`w-12 h-0.5 ${step > s ? 'bg-primary' : 'bg-muted'}`} />}
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit}>
            {step === 1 && (
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
                <h2 className="text-2xl font-display font-bold text-secondary">Kies een dienst</h2>
                <div className="grid grid-cols-1 gap-3">
                  {SERVICES.map(s => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => { update('service', s); setStep(2); }}
                      className={`p-5 rounded-xl border text-left transition-all ${
                        form.service === s
                          ? 'border-primary bg-primary/5 ring-2 ring-primary/20'
                          : 'border-border/50 hover:border-primary/30 hover:bg-muted/50'
                      }`}
                    >
                      <span className="font-semibold text-secondary">{s}</span>
                      {s === 'Gratis Proefles' && <span className="block text-xs text-primary mt-0.5">Eerste les altijd gratis!</span>}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
                <h2 className="text-2xl font-display font-bold text-secondary">{"Kies datum en tijd"}</h2>
                <div>
                  <Label className="flex items-center gap-2 mb-1.5"><Calendar className="w-4 h-4" /> Datum</Label>
                  <Input type="date" min={today} value={form.date} onChange={e => update('date', e.target.value)} required />
                </div>
                <div>
                  <Label className="flex items-center gap-2 mb-1.5"><Clock className="w-4 h-4" /> Tijd</Label>
                  <div className="grid grid-cols-4 gap-2">
                    {TIME_SLOTS.map(t => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => update('time', t)}
                        className={`py-2.5 rounded-lg text-sm font-medium transition-all ${
                          form.time === t ? 'bg-primary text-primary-foreground' : 'bg-muted hover:bg-muted/80 text-foreground'
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="flex gap-3">
                  <Button type="button" variant="outline" onClick={() => setStep(1)} className="gap-2">
                    <ArrowLeft className="w-4 h-4" /> Terug
                  </Button>
                  <Button
                    type="button"
                    disabled={!form.date || !form.time}
                    onClick={() => setStep(3)}
                    className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 flex-1"
                  >
                    Volgende <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-5">
                <h2 className="text-2xl font-display font-bold text-secondary">Jouw Gegevens</h2>
                <div className="p-4 rounded-xl bg-primary/5 border border-primary/20 text-sm">
                  <p><strong>Dienst:</strong> {form.service}</p>
                  <p><strong>Datum:</strong> {form.date}</p>
                  <p><strong>Tijd:</strong> {form.time}</p>
                </div>
                <div>
                  <Label>Naam *</Label>
                  <Input required value={form.name} onChange={e => update('name', e.target.value)} placeholder="Jouw volledige naam" className="mt-1.5" />
                </div>
                <div>
                  <Label>E-mail *</Label>
                  <Input required type="email" value={form.email} onChange={e => update('email', e.target.value)} placeholder="jouw@email.nl" className="mt-1.5" />
                </div>
                <div>
                  <Label>Telefoon *</Label>
                  <Input required value={form.phone} onChange={e => update('phone', e.target.value)} placeholder="06-12345678" className="mt-1.5" />
                </div>
                <div>
                  <Label>Opmerkingen</Label>
                  <Textarea value={form.message} onChange={e => update('message', e.target.value)} placeholder="Heb je nog iets dat we moeten weten?" rows={3} className="mt-1.5" />
                </div>
                <div className="flex gap-3">
                  <Button type="button" variant="outline" onClick={() => setStep(2)} className="gap-2">
                    <ArrowLeft className="w-4 h-4" /> Terug
                  </Button>
                  <Button type="submit" disabled={sending} className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 flex-1">
                    {sending ? 'Bezig...' : 'Bevestig Afspraak'}
                  </Button>
                </div>
              </motion.div>
            )}
          </form>
        </div>
      </section>
    </div>
  );
}