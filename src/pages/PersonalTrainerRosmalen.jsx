import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, MapPin, Star } from 'lucide-react';
import CTASection from '../components/CTASection';
import FAQAccordion from '../components/FAQAccordion';
import SEO, { buildFAQSchema, buildServiceSchema } from '@/components/SEO';
import PageHero from '@/components/PageHero';
import SeoSummary from '@/components/SeoSummary';

const HERO_IMG = '/images/optimized/page-training-hero-960.jpg';

const BENEFITS = [
  'Personal training aan huis in Rosmalen',
  'Outdoor training in Rosmalen en omgeving',
  'Voedingsbegeleiding inbegrepen',
  'Geen reiskosten in Rosmalen',
  'Gratis proefles – geen verplichtingen',
  '10+ jaar ervaring als personal trainer',
];

const FAQS = [
  { question: 'Biedt JitanSports personal training in Rosmalen?', answer: 'Ja. JitanSports is actief in heel omgeving Den Bosch, inclusief Rosmalen. We trainen aan huis, outdoor of op een locatie die jou uitkomt.' },
  { question: 'Wat kost een personal trainer in Rosmalen?', answer: 'Je start altijd met een gratis proefles. Daarna gelden vaste tarieven afhankelijk van het pakket. Bekijk de tarievenpagina voor exacte prijzen.' },
  { question: 'Zijn er reiskosten voor Rosmalen?', answer: 'Nee. Rosmalen valt binnen ons standaard werkgebied. Geen extra reiskosten.' },
  { question: 'Hoe snel zie ik resultaat?', answer: 'De meeste klanten voelen al na 4-6 weken merkbare verbetering in energie, kracht en uiterlijk.' },
];

export default function PersonalTrainerRosmalen() {
  return (
    <div>
      <SEO
        title="Personal Trainer Rosmalen – Aan Huis en Outdoor | JitanSports"
        description="Personal trainer in Rosmalen voor afvallen, kracht en conditie. Training aan huis of outdoor. Gratis proefles aanvragen bij JitanSports."
        path="/personal-trainer-rosmalen"
        image={HERO_IMG}
        jsonLd={[
          buildServiceSchema({
            name: 'Personal Trainer Rosmalen',
            serviceType: 'Personal Training',
            description:
              'Personal training aan huis of outdoor in Rosmalen voor afvallen, krachttraining, conditie en voedingsbegeleiding.',
            path: '/personal-trainer-rosmalen',
            image: HERO_IMG,
            areaServed: ['Rosmalen', 'Den Bosch'],
          }),
          buildFAQSchema(FAQS),
        ]}
      />
      <PageHero
        image={HERO_IMG}
        title="Personal Trainer Rosmalen"
        subtitle="1-op-1 begeleiding aan huis of outdoor in Rosmalen. Bereik jouw fitnessdoel met JitanSports."
        contentClassName="max-w-xl"
        overlayClassName="bg-gradient-to-r from-secondary/90 to-secondary/40"
        badge={(
          <div className="mb-3 flex items-center gap-2">
            <MapPin className="h-4 w-4 text-primary" />
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">Rosmalen</span>
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
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-display font-bold text-secondary mb-6">Personal trainer in Rosmalen</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">Ben je op zoek naar een personal trainer in Rosmalen? JitanSports biedt professionele 1-op-1 begeleiding bij jou thuis of in de buitenlucht in Rosmalen en omgeving.</p>
            <p className="text-muted-foreground leading-relaxed mb-4">Of je nu wilt afvallen, spiermassa wilt opbouwen, je conditie wilt verbeteren of wilt herstellen van een blessure – wij zorgen voor een volledig persoonlijk trainingsplan.</p>
            <p className="text-muted-foreground leading-relaxed mb-8">Met meer dan 10 jaar ervaring en tientallen tevreden klanten in Rosmalen weet JitanSports wat werkt. We beginnen altijd met een gratis kennismakingsgesprek.</p>
            <div className="space-y-3">{BENEFITS.map(b => (<div key={b} className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" /><span className="text-foreground text-sm">{b}</span></div>))}</div>
          </div>
          <div className="p-8 rounded-2xl bg-secondary text-white h-fit">
            <h3 className="text-xl font-bold mb-6">Gratis proefles in Rosmalen</h3>
            <p className="text-white/70 mb-6 text-sm leading-relaxed">Ervaar zelf wat personal training bij JitanSports inhoudt. Geen verplichtingen, geen kosten.</p>
            <Link to="/booking"><Button className="w-full bg-primary hover:bg-primary/90 text-secondary font-bold gap-2">Plan Nu Gratis Proefles <ArrowRight className="w-4 h-4" /></Button></Link>
          </div>
        </div>
      </section>
      <SeoSummary>
        <p>
          Jitan Sports biedt personal training in Rosmalen voor mensen die willen afvallen, sterker willen worden, fitter willen worden of meer structuur willen in training en voeding. De begeleiding is 1-op-1, aan huis of outdoor, met een persoonlijk plan en meetbare voortgang.
        </p>
      </SeoSummary>
      <section className="px-4 py-16 md:py-20 lg:py-24 bg-muted/30">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-secondary mb-8 text-center">Veelgestelde vragen</h2>
          <FAQAccordion items={FAQS} />
        </div>
      </section>
      <CTASection title="Klaar om fitter, sterker en energieker te worden?" subtitle="Plan vandaag nog je gratis proefles bij JitanSports." />
    </div>
  );
}
