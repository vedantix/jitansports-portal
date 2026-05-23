import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CheckCircle, ArrowRight, Star } from 'lucide-react';
import FAQAccordion from '../components/FAQAccordion';
import CTASection from '../components/CTASection';

const HERO_IMG = 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200';

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "JitanSports – Personal Trainer Voorburg",
  "description": "Personal trainer in Voorburg. 1-op-1 training op maat, voedingsadvies en massage. Gratis proefles.",
  "telephone": "+31682272680",
  "address": { "@type": "PostalAddress", "addressLocality": "Voorburg", "addressCountry": "NL" },
  "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5", "reviewCount": "18" }
};

const FAQS = [
  { question: "Is er een personal trainer actief in Voorburg?", answer: "Ja, JitanSports traint regelmatig klanten in Voorburg en omgeving. Training vindt plaats aan huis, in het park of in de directe omgeving." },
  { question: "Welke diensten zijn beschikbaar in Voorburg?", answer: "Personal Training (outdoor en aan huis), Deep Tissue Massage, Ontspanningsmassage en het Get Fit 12-weken programma zijn allemaal beschikbaar in Voorburg." },
  { question: "Hoe kan ik beginnen?", answer: "Plan een gratis proefles via de website. We bespreken jouw doelen en bekijken welk programma het beste bij jou past." },
  { question: "Moet ik fit zijn om te beginnen?", answer: "Absoluut niet! We beginnen altijd op jouw huidige niveau en bouwen rustig op. Training is voor iedereen, ongeacht conditie of ervaring." },
];

export default function PersonalTrainerVoorburg() {
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
            <span className="text-white/60 text-sm ml-2">5.0 · Klanten in Voorburg</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Personal Trainer Voorburg</h1>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            1-op-1 personal training in Voorburg. Volledig op maat, op jouw locatie. Start vandaag met een gratis proefles!
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/booking">
              <Button size="lg" className="bg-primary text-secondary font-bold gap-2">Plan Gratis Proefles <ArrowRight className="w-4 h-4" /></Button>
            </Link>
            <a href="tel:+31682272680">
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">06 8227 2680</Button>
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-display font-bold text-secondary mb-4">Jouw personal trainer in Voorburg</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            JitanSports biedt professionele personal training in Voorburg aan. Of je nu net begint of al jaren sport – ik stel een programma op dat perfect bij jou past.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Training in Voorburg kan outdoor in het park, bij jou thuis of in de directe omgeving. Aangevuld met voedingsadvies voor maximaal resultaat.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
            {['Personal training in Voorburg', 'Outdoor en aan huis', 'Voedingsadvies', 'Massage beschikbaar', 'Gratis proefles', 'Flexibele tijden'].map(f => (
              <div key={f} className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-sm">{f}</span>
              </div>
            ))}
          </div>
          <Link to="/booking">
            <Button className="bg-secondary text-white font-bold gap-2 hover:bg-secondary/90">
              Start met een gratis proefles <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>

      <section className="py-12 px-4 bg-muted/30">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-display font-bold text-secondary mb-6 text-center">Veelgestelde vragen – Voorburg</h2>
          <FAQAccordion items={FAQS} />
        </div>
      </section>

      <CTASection title="Start personal training in Voorburg" subtitle="Gratis en vrijblijvende proefles. Geen verplichtingen." />
    </div>
  );
}