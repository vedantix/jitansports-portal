import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, MapPin, Star } from 'lucide-react';
import CTASection from '../components/CTASection';
import FAQAccordion from '../components/FAQAccordion';
import SEO from '@/components/SEO';
import PageHero from '@/components/PageHero';
import ServiceReviews from '@/components/ServiceReviews';

const HERO_IMG = '/images/optimized/page-training-hero-960.jpg';

const BENEFITS = [
  'Personal training aan huis in Oss',
  'Outdoor training in en rond Oss',
  'Voedings- en leefstijlbegeleiding',
  'Massa opbouwen of afvallen op maat',
  'Gratis intake en proefles',
  '10+ jaar ervaring in de regio',
];

const FAQS = [
  { question: 'Is JitanSports actief als personal trainer in Oss?', answer: 'Ja. JitanSports bedient de regio omgeving Den Bosch, inclusief Oss en omliggende gemeenten.' },
  { question: 'Hoe ver rijdt JitanSports voor training in Oss?', answer: 'Oss valt binnen ons werkgebied. Er zijn geen extra reiskosten. Neem contact op voor exacte mogelijkheden.' },
  { question: 'Biedt JitanSports duo-training in Oss?', answer: "Ja. Je kunt samen met een partner, vriend of familielid trainen. Duo-training is beschikbaar voor een kleine toeslag per persoon." },
  { question: 'Kan ik ook online coachen bij JitanSports?', answer: 'Voor klanten buiten ons rijgebied bieden we beperkte online coaching aan. Neem contact op voor de mogelijkheden.' },
];

export default function PersonalTrainerOss() {
  return (
    <div>
      <SEO
        title="Personal Trainer Oss – Aan Huis en Outdoor | JitanSports"
        description="Personal trainer in Oss voor afvallen, spieropbouw en conditie. Training aan huis of outdoor in Oss. Gratis proefles bij JitanSports."
        path="/personal-trainer-oss"
      />
      <PageHero
        image={HERO_IMG}
        title="Personal Trainer Oss"
        subtitle="Persoonlijke training en coaching in Oss. JitanSports komt naar jou toe voor training op maat."
        contentClassName="max-w-xl"
        overlayClassName="bg-gradient-to-r from-secondary/90 to-secondary/40"
        badge={(
          <div className="mb-3 flex items-center gap-2">
            <MapPin className="h-4 w-4 text-primary" />
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">Oss</span>
          </div>
        )}
      >
        <div className="mb-6 flex items-center gap-2">
          {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-primary text-primary" />)}
          <span className="ml-1 text-sm text-white/80">5.0 · 47+ beoordelingen</span>
        </div>
        <Link to="/booking">
          <Button size="lg" className="gap-2 bg-primary font-bold text-secondary hover:bg-primary/90">
            Plan Gratis Proefles <ArrowRight className="h-5 w-5" />
          </Button>
        </Link>
      </PageHero>
      <section className="px-4 py-16 md:py-20 lg:py-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-secondary mb-6">Personal trainer in Oss</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Op zoek naar een personal trainer in Oss? JitanSports biedt professionele 1-op-1 begeleiding aan huis of outdoor in Oss en de regio.</p>
          <p className="text-muted-foreground leading-relaxed mb-4">Of je nu wilt afvallen, sterker wilt worden of gewoon fitter wilt leven – met een persoonlijk trainings- en voedingsplan van JitanSports bereik je jouw doelen sneller en effectiever.</p>
          <p className="text-muted-foreground leading-relaxed mb-8">We beginnen altijd met een gratis intake om jouw situatie, doelen en wensen in kaart te brengen.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">{BENEFITS.map(b => (<div key={b} className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" /><span className="text-foreground text-sm">{b}</span></div>))}</div>
        </div>
      </section>
      <section className="px-4 py-16 md:py-20 lg:py-24 bg-muted/30">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-secondary mb-8 text-center">Veelgestelde vragen</h2>
          <FAQAccordion items={FAQS} />
        </div>
      </section>
      <ServiceReviews title="Resultaten met Personal Trainer Oss" />

      <CTASection title="Klaar om fitter, sterker en energieker te worden?" subtitle="Plan je gratis intake – JitanSports komt naar jou toe." />
    </div>
  );
}
