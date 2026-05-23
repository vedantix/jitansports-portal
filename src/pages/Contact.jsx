import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { base44 } from '@/api/base44Client';
import { toast } from 'sonner';
import { useSiteContent } from '@/hooks/useSiteContent';
import { createWhatsAppUrl } from '@/lib/siteContent';

export default function Contact() {
  const { content } = useSiteContent();
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    await base44.entities.ContactRequest.create(form);
    setSending(false);
    setSent(true);
    toast.success('Bericht verzonden! We nemen snel contact op.');
  };

  return (
    <div>
      <section className="py-20 px-4 bg-secondary text-secondary-foreground">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-primary font-semibold mb-3 uppercase tracking-wider text-sm">Contact</p>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Neem Contact Op</h1>
            <p className="text-secondary-foreground/70 text-lg">We horen graag van je. Neem gerust contact op!</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-2xl font-display font-bold text-secondary mb-6">Stuur een Bericht</h2>
            {sent ? (
              <div className="text-center py-12 rounded-2xl bg-primary/5 border border-primary/20">
                <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-secondary mb-2">Bedankt!</h3>
                <p className="text-muted-foreground">We nemen zo snel mogelijk contact met je op.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <Label>Naam *</Label>
                    <Input required value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} placeholder="Jouw naam" className="mt-1.5" />
                  </div>
                  <div>
                    <Label>E-mail *</Label>
                    <Input required type="email" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} placeholder="jouw@email.nl" className="mt-1.5" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <Label>Telefoon</Label>
                    <Input value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))} placeholder="06-12345678" className="mt-1.5" />
                  </div>
                  <div>
                    <Label>Onderwerp</Label>
                    <Input value={form.subject} onChange={e => setForm(f => ({ ...f, subject: e.target.value }))} placeholder="Waar gaat het over?" className="mt-1.5" />
                  </div>
                </div>
                <div>
                  <Label>Bericht *</Label>
                  <Textarea required value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))} placeholder="Vertel ons meer..." rows={5} className="mt-1.5" />
                </div>
                <Button type="submit" disabled={sending} className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 w-full sm:w-auto">
                  {sending ? 'Verzenden...' : <><Send className="w-4 h-4" /> Verstuur Bericht</>}
                </Button>
              </form>
            )}
          </div>

          <div>
            <h2 className="text-2xl font-display font-bold text-secondary mb-6">Contactgegevens</h2>
            <div className="space-y-6 mb-10">
              <a href={`tel:${content.phone_href}`} className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-secondary group-hover:text-primary transition-colors">Telefoon</p>
                  <p className="text-muted-foreground">{content.phone_display}</p>
                </div>
              </a>
              <a href={`mailto:${content.email}`} className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-secondary group-hover:text-primary transition-colors">E-mail</p>
                  <p className="text-muted-foreground">{content.email}</p>
                </div>
              </a>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-secondary">Locatie</p>
                  <p className="text-muted-foreground">{content.region}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-secondary">Openingstijden</p>
                  <p className="text-muted-foreground">Ma - Za: 07:00 - 21:00</p>
                  <p className="text-muted-foreground">Zo: Op afspraak</p>
                </div>
              </div>
            </div>

            <a href={createWhatsAppUrl(content, 'Hallo JitanSports, ik wil graag meer informatie.')} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white gap-2 w-full">
                <MessageCircle className="w-5 h-5" /> Direct WhatsApp Contact
              </Button>
            </a>

            <div className="mt-8 rounded-2xl overflow-hidden border border-border/50 h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d156388.35!2d4.2!3d52.07!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c5b72f4298bd71%3A0x400de5a8d1e6c10!2sDen%20Haag!5e0!3m2!1snl!2snl!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
