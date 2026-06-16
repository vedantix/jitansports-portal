import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Building2, Users, Armchair, Zap, CheckCircle, Send, ArrowRight } from 'lucide-react';
import { base44 } from '@/api/base44Client';
import SEO, { buildServiceSchema } from '@/components/SEO';
import PageHero from '@/components/PageHero';
import CTASection from '@/components/CTASection';

const HERO_IMG = '/images/optimized/page-training-hero-960.jpg';

const SERVICES = [
  {
    icon: Armchair,
    title: 'Stoelmassage',
    desc: 'Een stoelmassage van 15, 20 of 30 minuten per medewerker. Geen omkleedruimte nodig, gewoon op kantoor. Gericht op nek, schouders en rug.',
    price: 'Vanaf €25 per persoon',
  },
  {
    icon: Zap,
    title: 'Vitaliteitsdagen',
    desc: 'Een complete vitaliteitsdag met workshops, massages en bewegingssessies. Geef je team een dag om energie op te laden.',
    price: 'Op aanvraag',
  },
  {
    icon: Users,
    title: 'Groepstrainingen',
    desc: 'Teamtraining in de buitenlucht of op locatie. Verbeter de teamdynamiek én de gezondheid van je medewerkers tegelijk.',
    price: 'Op aanvraag',
  },
  {
    icon: Building2,
    title: 'Gezondheidsworkshops',
    desc: 'Workshops over voeding, beweging, stressreductie en slaap. Praktisch en inspirerend voor teams van elke omvang.',
    price: 'Op aanvraag',
  },
];

const BENEFITS = [
  'Minder verzuim door betere vitaliteit',
  'Meer werkplezier en motivatie',
  'Betere teamcohesie',
  'Preventie van nek- en rugklachten',
  'Zichtbaar gewaardeerd door medewerkers',
  'Flexibel inzetbaar – ook op locatie',
];

export default function Bedrijven() {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    await base44.entities.ContactRequest.create({
      name: form.name,
      email: form.email,
      subject: `Bedrijfsaanvraag - ${form.company}`,
      message: form.message,
    });
    setSent(true);
    setSending(false);
  };

  return (
    <div>
      <SEO
        title="Bedrijfsfitness en Stoelmassage Den Bosch | JitanSports"
        description="Stoelmassage, vitaliteitsdagen, groepstrainingen en workshops voor bedrijven in omgeving Den Bosch. Vraag een offerte aan bij JitanSports."
        path="/bedrijven"
        image={HERO_IMG}
        jsonLd={buildServiceSchema({
          name: 'Bedrijfsfitness en Stoelmassage Den Bosch',
          serviceType: 'Corporate Wellness',
          description:
            'Stoelmassage, vitaliteitsdagen, groepstrainingen en gezondheidsworkshops voor bedrijven in Den Bosch en omgeving.',
          path: '/bedrijven',
          image: HERO_IMG,
        })}
      />

      <PageHero
        image={HERO_IMG}
        eyebrow="Voor Bedrijven"
        title="Bedrijfsfitness en Stoelmassage in omgeving Den Bosch"
        subtitle="Investeer in de vitaliteit van je team. Van stoelmassage op kantoor tot complete vitaliteitsdagen."
        contentClassName="max-w-xl"
        overlayClassName="bg-gradient-to-r from-secondary/90 to-secondary/40"
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link to="/contact">
            <Button size="lg" className="w-full gap-2 bg-primary font-bold text-primary-foreground hover:bg-primary/90 sm:w-auto">
              Vraag offerte aan <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
          <Link to="/booking">
            <Button size="lg" variant="outline" className="w-full border-white/30 text-white hover:bg-white/10 sm:w-auto">
              Plan kennismaking
            </Button>
          </Link>
        </div>
      </PageHero>

      <section className="px-4 py-16 md:py-20 lg:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-amber-700 font-semibold uppercase tracking-wider text-sm mb-3">Vitaliteit op de werkvloer</p>
          <h2 className="text-3xl font-display font-bold text-secondary mb-6">Breng verzuim terug tot een minimum</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
            <p>Stress, rugklachten en RSI drukken zwaar op ziekteverzuim. Met de juiste zorg voor medewerkers kun je klachten verminderen, voorkomen en teams meer energie geven.</p>
            <p>Stoelmassages helpen bij nek-, schouder- en rugklachten en bieden ontspanning tijdens een drukke werkdag. Medewerkers voelen zich gewaardeerd en kunnen zich daarna vaak beter concentreren.</p>
            <p>Naast stoelmassage verzorgt JitanSports groepstrainingen en vitaliteitsdagen. Samen sporten kan een sterk teambuildingmoment zijn én bijdragen aan fittere medewerkers.</p>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-secondary">Onze bedrijfsdiensten</h2>
            <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
              Flexibel in te zetten. Op kantoor, op locatie of als onderdeel van een groter vitaliteitsprogramma.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {SERVICES.map((item) => (
              <div key={item.title} className="p-6 rounded-2xl bg-white border border-border hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-bold text-secondary">{item.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-3">{item.desc}</p>
                <p className="text-primary font-semibold text-sm">{item.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 md:py-20 lg:py-24 bg-muted/30">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-display font-bold text-secondary mb-8">Waarom investeren in vitaliteit?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
            {BENEFITS.map(b => (
              <div key={b} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-foreground text-sm">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 md:py-20 lg:py-24">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-display font-bold text-secondary">Offerte aanvragen</h2>
            <p className="text-muted-foreground mt-3">Vul het formulier in en ontvang binnen 24 uur een persoonlijke offerte.</p>
          </div>
          {sent ? (
            <div className="text-center p-10 rounded-2xl bg-primary/10 border border-primary/20">
              <CheckCircle className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-secondary mb-2">Aanvraag ontvangen!</h3>
              <p className="text-muted-foreground">We nemen binnen 24 uur contact met je op.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-secondary mb-1">Naam</label>
                  <input required type="text" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} className="w-full rounded-lg border border-border px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-secondary mb-1">Bedrijfsnaam</label>
                  <input required type="text" value={form.company} onChange={e => setForm({ ...form, company: e.target.value })} className="w-full rounded-lg border border-border px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-secondary mb-1">E-mail</label>
                <input required type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} className="w-full rounded-lg border border-border px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary" />
              </div>
              <div>
                <label className="block text-sm font-medium text-secondary mb-1">Bericht</label>
                <textarea required value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} rows={4} placeholder="Beschrijf de dienst(en), het aantal medewerkers en gewenste datum..." className="w-full rounded-lg border border-border px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary" />
              </div>
              <Button type="submit" disabled={sending} className="w-full gap-2 bg-secondary hover:bg-secondary/90 text-white font-semibold py-3">
                <Send className="w-4 h-4" /> {sending ? 'Versturen...' : 'Verstuur Aanvraag'}
              </Button>
            </form>
          )}
        </div>
      </section>
      <CTASection
        dark
        title="Klaar om je team fitter en energieker te maken?"
        subtitle="Vraag een offerte aan voor stoelmassages, groepstrainingen of een vitaliteitsdag."
      />
    </div>
  );
}
