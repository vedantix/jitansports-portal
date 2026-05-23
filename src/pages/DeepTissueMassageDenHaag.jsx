import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CheckCircle, ArrowRight, Star, Shield } from 'lucide-react';
import FAQAccordion from '../components/FAQAccordion';
import CTASection from '../components/CTASection';

const HERO_IMG = 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1200';

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "JitanSports – Deep Tissue Massage Den Haag",
  "description": "Professionele Deep Tissue Massage in Den Haag. Effectief bij rugklachten, nek/schouder pijn en sportblessures. Aan huis beschikbaar.",
  "telephone": "+31682272680",
  "address": { "@type": "PostalAddress", "addressLocality": "Den Haag", "addressCountry": "NL" },
  "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5", "reviewCount": "28" }
};

const FAQS = [
  { question: "Wat is Deep Tissue Massage precies?", answer: "Deep Tissue Massage richt zich op de diepere lagen van spieren en bindweefsel. Met gerichte druk worden gespannen spieren, knooppunten en littekens losgemaakt. Ideaal bij chronische pijn en sportblessures." },
  { question: "Is Deep Tissue Massage pijnlijk?", answer: "Tijdens de massage kan er enige druk worden gevoeld op gespannen gebieden. Dit is normaal en gaat gepaard met herkenbare pijn ('goede pijn'). Na de massage voelt u duidelijk verschil." },
  { question: "Hoe vaak moet ik een Deep Tissue Massage krijgen?", answer: "Voor chronische klachten raden we aan te starten met wekelijks en daarna maandelijks. Veel klanten combineren dit met personal training voor optimaal herstel." },
  { question: "Welke klachten behandel je met Deep Tissue Massage?", answer: "Rugpijn, nekpijn, schouderspanning, frozen shoulder, sportblessures, spierkrampen en chronische vermoeidheid. Bij twijfel, neem contact op voor advies." },
  { question: "Is Deep Tissue Massage aan huis beschikbaar in Den Haag?", answer: "Ja, JitanSports biedt Deep Tissue Massage aan huis in heel Den Haag en omgeving. Geen reiskosten voor locaties in het werkgebied." },
];

const BENEFITS = [
  'Vermindert chronische rugpijn',
  'Lost spierspanning en knooppunten op',
  'Verbetert doorbloeding',
  'Vermindert sportblessures',
  'Helpt bij nekpijn en schouderpijn',
  'Stimuleert herstel na training',
];

export default function DeepTissueMassageDenHaag() {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(SCHEMA);
    document.head.appendChild(script);
    return () => { if (document.head.contains(script)) document.head.removeChild(script); };
  }, []);

  return (
    <div>
      <section className="relative py-20 px-4 bg-secondary overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img src={HERO_IMG} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-primary text-primary" />)}
            <span className="text-white/60 text-sm ml-2">5.0 · 28+ tevreden klanten</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Deep Tissue Massage Den Haag</h1>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Professionele Deep Tissue Massage in Den Haag. Effectief bij rugklachten, spierspanning en sportblessures. Aan huis beschikbaar!
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/booking">
              <Button size="lg" className="bg-primary text-secondary font-bold gap-2">Boek Deep Tissue Massage <ArrowRight className="w-4 h-4" /></Button>
            </Link>
            <a href="tel:+31682272680">
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">06 8227 2680</Button>
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-display font-bold text-secondary mb-4">Wat is Deep Tissue Massage?</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Deep Tissue Massage is een intensieve massagetechniek gericht op de diepe lagen van spieren en bindweefsel. Door gerichte druk worden chronische spanning, knooppunten en verklevingen losgemaakt die oppervlakkige massages niet bereiken.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-5">
              Bij JitanSports combineer ik diepgaande kennis van anatomie met jarenlange praktijkervaring. Resultaat: blijvende verlichting van klachten in plaats van tijdelijk comfort.
            </p>
            <h3 className="font-bold text-secondary mb-3">Voordelen</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {BENEFITS.map(b => (
                <div key={b} className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-sm">{b}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6">
              <h3 className="font-bold text-secondary text-lg mb-2">Deep Tissue Massage</h3>
              <p className="text-muted-foreground text-sm mb-4">Intensieve behandeling voor chronische klachten en sportblessures.</p>
              <div className="flex items-center gap-6 mb-5">
                <div>
                  <p className="text-2xl font-bold text-primary">€65</p>
                  <p className="text-xs text-muted-foreground">60 minuten</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary">€85</p>
                  <p className="text-xs text-muted-foreground">90 minuten</p>
                </div>
              </div>
              <Link to="/booking">
                <Button className="w-full bg-primary text-secondary font-bold gap-2">Nu boeken <ArrowRight className="w-4 h-4" /></Button>
              </Link>
            </div>
            <div className="bg-muted/40 rounded-2xl p-5 border border-border">
              <p className="text-sm font-medium text-secondary mb-2">Combineer voor maximaal effect:</p>
              <p className="text-sm text-muted-foreground">
                Klanten die Deep Tissue Massage combineren met personal training bereiken snellere herstel, minder blessures en betere trainingsresultaten.
              </p>
              <Link to="/personal-training" className="inline-flex items-center gap-1 text-primary text-sm font-medium mt-3 hover:underline">
                Meer over personal training <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-muted/30">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-display font-bold text-secondary mb-6 text-center">Veelgestelde vragen – Deep Tissue Massage Den Haag</h2>
          <FAQAccordion items={FAQS} />
        </div>
      </section>

      <CTASection title="Boek uw Deep Tissue Massage in Den Haag" subtitle="Aan huis. Professioneel. Effectief. Snel geboekt." />
    </div>
  );
}