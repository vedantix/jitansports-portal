import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, CheckCircle } from 'lucide-react';
import { base44 } from '@/api/base44Client';
import { toast } from 'sonner';
import { useSiteContent } from '@/hooks/useSiteContent';
import { createWhatsAppUrl } from '@/lib/siteContent';
import SEO, { ROUTE_SEO } from '@/components/SEO';
import PageHero from '@/components/PageHero';
import CTASection from '@/components/CTASection';

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
      <SEO
        {...ROUTE_SEO['/contact']}
        title={content.seo_contact_title || ROUTE_SEO['/contact'].title}
        description={content.seo_contact_description || ROUTE_SEO['/contact'].description}
        image={content.seo_image}
      />
      <PageHero
        align="center"
        eyebrow={content.contact_eyebrow}
        title={content.contact_title}
        subtitle={content.contact_subtitle}
        titleClassName="md:text-5xl lg:text-5xl"
      />

      <section className="px-4 py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-2xl font-display font-bold text-secondary mb-6">{content.contact_form_title}</h2>
            {sent ? (
              <div className="text-center py-12 rounded-2xl bg-primary/5 border border-primary/20">
                <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-secondary mb-2">{content.contact_success_title}</h3>
                <p className="text-muted-foreground">{content.contact_success_text}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <Label htmlFor="contact-name">Naam *</Label>
                    <Input id="contact-name" name="name" required autoComplete="name" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} placeholder="Jouw naam" className="mt-1.5" />
                  </div>
                  <div>
                    <Label htmlFor="contact-email">E-mail *</Label>
                    <Input id="contact-email" name="email" required type="email" autoComplete="email" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} placeholder="jouw@email.nl" className="mt-1.5" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <Label htmlFor="contact-phone">Telefoon</Label>
                    <Input id="contact-phone" name="phone" type="tel" autoComplete="tel" value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))} placeholder="06-12345678" className="mt-1.5" />
                  </div>
                  <div>
                    <Label htmlFor="contact-subject">Onderwerp</Label>
                    <Input id="contact-subject" name="subject" value={form.subject} onChange={e => setForm(f => ({ ...f, subject: e.target.value }))} placeholder="Waar gaat het over?" className="mt-1.5" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="contact-message">Bericht *</Label>
                  <Textarea id="contact-message" name="message" required value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))} placeholder="Vertel ons meer..." rows={5} className="mt-1.5" />
                </div>
                <Button type="submit" disabled={sending} className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 w-full sm:w-auto">
                  {sending ? 'Verzenden...' : <><Send className="w-4 h-4" /> Verstuur Bericht</>}
                </Button>
              </form>
            )}
          </div>

          <div>
            <h2 className="text-2xl font-display font-bold text-secondary mb-6">{content.contact_details_title}</h2>
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
                  <p className="text-muted-foreground">{content.contact_opening_hours_1}</p>
                  <p className="text-muted-foreground">{content.contact_opening_hours_2}</p>
                </div>
              </div>
            </div>

            <a href={createWhatsAppUrl(content, 'Hallo JitanSports, ik wil graag meer informatie.')} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white gap-2 w-full">
                <MessageCircle className="w-5 h-5" /> {content.contact_whatsapp_button}
              </Button>
            </a>

            <div className="mt-8 aspect-[4/3] overflow-hidden rounded-2xl border border-border/50 lg:aspect-[16/10]">
              <iframe
                src={content.contact_map_url}
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

      <CTASection dark title="Klaar om fitter, sterker en energieker te worden?" subtitle="Plan vandaag nog jouw gratis proefles of stuur direct een WhatsApp bericht." />
    </div>
  );
}
