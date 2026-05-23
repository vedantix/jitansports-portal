import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CheckCircle, ArrowRight, Star } from 'lucide-react';
import FAQAccordion from '../components/FAQAccordion';
import CTASection from '../components/CTASection';

const HERO_IMG = 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1200';

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "JitanSports – Massage Den Haag",
  "description": "Professionele massage in Den Haag. Deep Tissue Massage en ontspanningsmassage aan huis of op locatie. Direct boeken!",
  "telephone": "+31682272680",
  "address": { "@type": "PostalAddress", "addressLocality": "Den Haag", "addressCountry": "NL" },
  "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5", "reviewCount": "31" }
};

const FAQS = [
  { question: "Welke massages zijn beschikbaar in Den Haag?", answer: "JitanSports biedt Deep Tissue Massage en Ontspanningsmassage aan in Den Haag. Beide zijn beschikbaar aan huis of op locatie." },
  { question: "Hoe lang duurt een massage?", answer: "Massages zijn beschikbaar in 60 of 90 minuten. We raden 90 minuten aan voor chronische klachten." },
  { question: "Komt de masseur aan huis?", answer: "Ja! JitanSports komt naar u toe in Den Haag en omgeving. Geen reiskosten voor locaties in het werkgebied." },
  { question: "Helpt massage bij rugklachten?", answer: "Deep Tissue Massage is bijzonder effectief bij chronische rug-, nek- en schouderklachten. Veel klanten voelen al na de eerste sessie verlichting." },
];

export default function MassageDenHaag() {
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
            <span className="text-white/60 text-sm ml-2">5.0 · 31+ tevreden klanten</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Massage Den Haag</h1>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Professionele massage aan huis of op locatie in Den Haag. Verminder pijn, verminder stress en herstel sneller. Direct boeken!
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/booking">
              <Button size="lg" className="bg-primary text-secondary font-bold gap-2">Boek een Massage <ArrowRight className="w-4 h-4" /></Button>
            </Link>
            <a href="tel:+31682272680">
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">06 8227 2680</Button>
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl font-display font-bold text-secondary mb-4">Massage aan huis in Den Haag</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              JitanSports biedt professionele massagediensten aan huis in Den Haag. Geen gedoe met rijden naar een massagepraktijk – ik kom naar jou toe.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-5">
              Of je nu chronische rugklachten hebt, last van stress of gewoon wil ontspannen na een drukke werkweek – wij hebben de behandeling die bij jou past.
            </p>
            <div className="space-y-2">
              {['Massage aan huis in heel Den Haag', 'Deep Tissue en ontspanningsmassage', '60 of 90 minuten sessies', 'Gecertificeerde massagetherapeut', 'Ook voor chronische pijnklachten', 'Snel te boeken via de website'].map(f => (
                <div key={f} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-sm">{f}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            {[
              { name: 'Deep Tissue Massage', desc: 'Gericht op diepe spierlagen. Ideaal bij chronische pijn, sportblessures en spanning in nek, schouders en rug.', price: 'Vanaf €65', duration: '60–90 min' },
              { name: 'Ontspanningsmassage', desc: 'Ontspannende, vloeiende massage. Perfect voor stress-relief, betere slaap en algemeen herstel.', price: 'Vanaf €55', duration: '60–90 min' },
            ].map(s => (
              <div key={s.name} className="bg-muted/40 rounded-2xl p-5 border border-border">
                <h3 className="font-bold text-secondary mb-2">{s.name}</h3>
                <p className="text-sm text-muted-foreground mb-3">{s.desc}</p>
                <div className="flex items-center gap-3 text-sm">
                  <span className="text-primary font-bold">{s.price}</span>
                  <span className="text-muted-foreground">{s.duration}</span>
                </div>
              </div>
            ))}
            <Link to="/booking">
              <Button className="w-full bg-primary text-secondary font-bold gap-2 mt-2">Direct een massage boeken <ArrowRight className="w-4 h-4" /></Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-muted/30">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-display font-bold text-secondary mb-6 text-center">Veelgestelde vragen – Massage Den Haag</h2>
          <FAQAccordion items={FAQS} />
        </div>
      </section>

      <CTASection title="Boek een massage in Den Haag" subtitle="Snel geboekt, professioneel uitgevoerd. Aan huis in Den Haag." />
    </div>
  );
}