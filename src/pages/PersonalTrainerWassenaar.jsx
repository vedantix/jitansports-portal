import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CheckCircle, ArrowRight, Star } from 'lucide-react';
import FAQAccordion from '../components/FAQAccordion';
import CTASection from '../components/CTASection';

const HERO_IMG = 'https://images.unsplash.com/photo-1544033527-b192daee1f5b?w=1200';

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "JitanSports – Personal Trainer Wassenaar",
  "description": "Personal trainer actief in Wassenaar. Outdoor training, aan huis of in de regio. Gratis proefles.",
  "telephone": "+31682272680",
  "address": { "@type": "PostalAddress", "addressLocality": "Wassenaar", "addressCountry": "NL" },
  "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5", "reviewCount": "12" }
};

const FAQS = [
  { question: "Traint JitanSports ook in Wassenaar?", answer: "Ja! JitanSports traint actief in Wassenaar en omgeving. We trainen in parken, aan huis of op een locatie die jou uitkomt." },
  { question: "Hoe ver reist de personal trainer?", answer: "JitanSports is actief in de regio Den Haag, Wassenaar, Voorburg en Leidschendam. Reiskosten zijn inbegrepen voor locaties in dit werkgebied." },
  { question: "Is er een gratis proefles beschikbaar?", answer: "Ja, elke nieuwe klant start met een gratis, vrijblijvende proefles. Geen verplichtingen, geen verborgen kosten." },
  { question: "Kan ik ook een massage boeken in Wassenaar?", answer: "Ja, Deep Tissue Massage en ontspanningsmassage zijn ook beschikbaar in Wassenaar. Neem contact op voor de mogelijkheden." },
];

export default function PersonalTrainerWassenaar() {
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
            <span className="text-white/60 text-sm ml-2">5.0 · Meerdere klanten in Wassenaar</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Personal Trainer Wassenaar</h1>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Professionele personal training in Wassenaar. Outdoor, aan huis of in de omgeving – volledig op maat. Begin met een gratis proefles!
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
          <h2 className="text-2xl font-display font-bold text-secondary mb-4">Personal trainer in Wassenaar</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            JitanSports is een ervaren personal trainer die actief is in Wassenaar en directe omgeving. Of je nu wil afvallen, sterker worden of chronische pijnklachten wil verminderen – ik begeleid je van A tot Z.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Training in Wassenaar betekent: buiten in de prachtige omgeving, aan huis bij jou, of op een locatie die jou het beste uitkomt. Gecombineerd met voedingsadvies en optionele Deep Tissue Massage voor het complete pakket.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
            {['Training in Wassenaar op jouw locatie', 'Outdoor en aan huis mogelijk', '10+ jaar ervaring', 'Voedingsadvies inbegrepen', 'Deep Tissue Massage beschikbaar', 'Gratis proefles'].map(f => (
              <div key={f} className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-sm">{f}</span>
              </div>
            ))}
          </div>
          <Link to="/booking">
            <Button className="bg-secondary text-white font-bold gap-2 hover:bg-secondary/90">
              Plan uw proefles in Wassenaar <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>

      <section className="py-12 px-4 bg-muted/30">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-display font-bold text-secondary mb-6 text-center">Veelgestelde vragen – Wassenaar</h2>
          <FAQAccordion items={FAQS} />
        </div>
      </section>

      <CTASection title="Start met personal training in Wassenaar" subtitle="Gratis proefles, vrijblijvend kennismaken. Plan vandaag nog!" />
    </div>
  );
}