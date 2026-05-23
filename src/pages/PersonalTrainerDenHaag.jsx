import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CheckCircle, ArrowRight, Star, MapPin } from 'lucide-react';
import FAQAccordion from '../components/FAQAccordion';
import CTASection from '../components/CTASection';

const HERO_IMG = 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1200';

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "JitanSports – Personal Trainer Den Haag",
  "description": "Personal trainer in Den Haag voor gewichtsverlies, krachttraining en voedingsbegeleiding. 10+ jaar ervaring. Gratis proefles.",
  "url": "https://jitansports.nl/personal-trainer-den-haag",
  "telephone": "+31682272680",
  "address": { "@type": "PostalAddress", "addressLocality": "Den Haag", "addressCountry": "NL" },
  "priceRange": "€€",
  "openingHours": ["Mo-Fr 07:00-20:00", "Sa 09:00-17:00"],
  "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5", "reviewCount": "47" }
};

const FAQS = [
  { question: "Wat kost een personal trainer in Den Haag?", answer: "Bij JitanSports start je altijd met een gratis proefles. Daarna gelden vaste tarieven afhankelijk van het gekozen pakket. Bekijk de tarieven pagina voor exacte prijzen." },
  { question: "Waar traint JitanSports in Den Haag?", answer: "We trainen in parken en wijken door heel Den Haag: Scheveningen, Ypenburg, Leidschenveen, het centrum en meer. Ook training aan huis is mogelijk." },
  { question: "Hoe snel zie ik resultaat?", answer: "De meeste klanten zien al na 4–6 weken merkbare verbetering in energie, kracht en lichaamsvorm. Met het Get Fit programma behalen klanten in 12 weken indrukwekkende transformaties." },
  { question: "Is personal training geschikt voor beginners?", answer: "Absoluut! Of je nu een beginner bent of al ervaring hebt – de training wordt volledig afgestemd op jouw niveau en doelen. We beginnen altijd rustig op te bouwen." },
];

export default function PersonalTrainerDenHaag() {
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
            <span className="text-white/60 text-sm ml-2">5.0 · 47+ beoordelingen</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Personal Trainer Den Haag</h1>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            Bereik jouw fitnessdoelen met een ervaren personal trainer in Den Haag. Outdoor training, aan huis of bij jou in de buurt. Start met een gratis proefles!
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/booking">
              <Button size="lg" className="bg-primary text-secondary font-bold gap-2">
                Plan Gratis Proefles <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <a href="tel:+31682272680">
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                06 8227 2680
              </Button>
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-display font-bold text-secondary mb-4">Waarom JitanSports als personal trainer in Den Haag?</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Als personal trainer in Den Haag bied ik volledig maatwerk – afgestemd op jouw doelen, niveau en agenda. Of je nu wil afvallen, sterker worden, meer energie wil of minder pijnklachten wilt – ik help je resultaat te boeken.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-5">
              Met meer dan 10 jaar ervaring en honderden succesvolle klanten in Den Haag en omgeving weet ik wat werkt. Geen one-size-fits-all, maar jouw persoonlijke programma.
            </p>
            <div className="space-y-2">
              {[
                '1-op-1 persoonlijke begeleiding',
                'Training op jouw locatie in Den Haag',
                'Voedings- en leefstijladvies inbegrepen',
                '10+ jaar ervaring als personal trainer',
                'Combinatie training en massage mogelijk',
                'Gratis kennismakingsles – geen verplichtingen',
              ].map(f => (
                <div key={f} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-sm text-foreground">{f}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-muted/40 rounded-2xl p-6 border border-border">
            <h3 className="font-bold text-secondary text-lg mb-5">Diensten in Den Haag</h3>
            {[
              { name: "Personal Training Outdoor", desc: "Training in parken en buitenlocaties in heel Den Haag" },
              { name: "Personal Training @Home", desc: "Ik kom naar jou toe – geen sportschool nodig" },
              { name: "Deep Tissue Massage", desc: "Professionele massage voor herstel en pijnvermindering" },
              { name: "Get Fit Programma", desc: "12 weken totale transformatie incl. voeding en coaching" },
            ].map(s => (
              <div key={s.name} className="mb-4 pb-4 border-b border-border last:border-0 last:mb-0 last:pb-0">
                <p className="font-semibold text-secondary text-sm">{s.name}</p>
                <p className="text-muted-foreground text-xs mt-0.5">{s.desc}</p>
              </div>
            ))}
            <Link to="/booking" className="block mt-5">
              <Button className="w-full bg-primary text-secondary font-bold gap-2">
                Start met Gratis Proefles <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-muted/30">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl font-display font-bold text-secondary mb-6">Actief in heel Den Haag</h2>
          <div className="flex flex-wrap justify-center gap-2.5">
            {['Centrum', 'Scheveningen', 'Loosduinen', 'Escamp', 'Ypenburg', 'Leidschenveen', 'Mariahoeve', 'Wateringse Veld', 'Rijswijk', 'Voorburg', 'Wassenaar'].map(area => (
              <span key={area} className="flex items-center gap-1.5 bg-white border border-border px-3 py-1.5 rounded-full text-sm text-foreground">
                <MapPin className="w-3.5 h-3.5 text-primary" /> {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-display font-bold text-secondary mb-8 text-center">
            Veelgestelde vragen – Personal Trainer Den Haag
          </h2>
          <FAQAccordion items={FAQS} />
        </div>
      </section>

      <CTASection
        title="Klaar om te starten in Den Haag?"
        subtitle="Plan vandaag nog je gratis proefles bij de beste personal trainer in Den Haag."
      />
    </div>
  );
}