import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CheckCircle, ArrowRight, Star } from 'lucide-react';
import FAQAccordion from '../components/FAQAccordion';
import CTASection from '../components/CTASection';

const HERO_IMG = 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1200';

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "JitanSports – Personal Trainer Leidschendam",
  "description": "Personal trainer in Leidschendam. Training op maat, voeding en massage. Gratis proefles.",
  "telephone": "+31682272680",
  "address": { "@type": "PostalAddress", "addressLocality": "Leidschendam", "addressCountry": "NL" },
  "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5", "reviewCount": "9" }
};

const FAQS = [
  { question: "Komt de personal trainer naar Leidschendam?", answer: "Ja, JitanSports is actief in Leidschendam. Training aan huis, outdoor of op een locatie in de omgeving is mogelijk." },
  { question: "Welke trainingsvormen zijn beschikbaar?", answer: "Outdoor krachttraining, functionele training aan huis, voedingscoaching en Deep Tissue Massage zijn beschikbaar in Leidschendam." },
  { question: "Hoe snel kan ik starten?", answer: "Nadat je een proefles hebt gepland, kunnen we doorgaans binnen een week starten. De proefles is gratis en vrijblijvend." },
  { question: "Is er een minimale contractduur?", answer: "Nee, er is geen minimale contractduur. Je betaalt per sessie of kiest voor een voordelig pakket – zonder verplichtingen." },
];

export default function PersonalTrainerLeidschendam() {
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
            <span className="text-white/60 text-sm ml-2">5.0 · Klanten in Leidschendam</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Personal Trainer Leidschendam</h1>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Professionele personal training in Leidschendam. Maatwerk training voor gewichtsverlies, kracht en gezondheid. Gratis proefles!
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
          <h2 className="text-2xl font-display font-bold text-secondary mb-4">Personal trainer in Leidschendam</h2>
          <p className="text-muted-foreground leading-relaxed mb-5">
            In Leidschendam helpt JitanSports klanten met hun fitness- en gezondheidsdoelen. Van afvallen tot krachttraining, van voedingsadvies tot massage – alles onder één dak.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
            {['Training in Leidschendam en omgeving', 'Geen sportschool nodig', 'Voedingsadvies inbegrepen', 'Gratis proefles', 'Flexibele tijden', 'Geen minimale contractduur'].map(f => (
              <div key={f} className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-sm">{f}</span>
              </div>
            ))}
          </div>
          <Link to="/booking">
            <Button className="bg-secondary text-white font-bold gap-2">Start met gratis proefles <ArrowRight className="w-4 h-4" /></Button>
          </Link>
        </div>
      </section>

      <section className="py-12 px-4 bg-muted/30">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-display font-bold text-secondary mb-6 text-center">FAQ – Leidschendam</h2>
          <FAQAccordion items={FAQS} />
        </div>
      </section>

      <CTASection title="Start vandaag in Leidschendam" subtitle="Vrijblijvende proefles – geen verplichtingen." />
    </div>
  );
}