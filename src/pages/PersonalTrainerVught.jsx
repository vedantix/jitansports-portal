import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, MapPin, Star } from 'lucide-react';
import CTASection from '../components/CTASection';
import FAQAccordion from '../components/FAQAccordion';
import SEO, { buildFAQSchema, buildServiceSchema } from '@/components/SEO';
import PageHero from '@/components/PageHero';
import ServiceReviews from '@/components/ServiceReviews';
import SeoSummary from '@/components/SeoSummary';

const HERO_IMG = '/images/optimized/page-training-hero-960.jpg';

const BENEFITS = [
  'Personal training aan huis in Vught',
  'Outdoor training in en rondom Vught',
  'Voedings- en leefstijlbegeleiding',
  'Geen reiskosten in Vught',
  'Gratis proefles – volledig vrijblijvend',
  'Gecombineerd met massage op aanvraag',
];

const FAQS = [
  { question: 'Komt JitanSports aan huis in Vught?', answer: 'Ja, JitanSports komt naar jou toe in Vught. We brengen alle benodigde materialen mee. Geen sportschool nodig.' },
  { question: 'Kan ik ook outdoor trainen in Vught?', answer: 'Absoluut. Vught heeft prachtige buitenlocaties om te trainen. We zoeken samen de beste locatie.' },
  { question: 'Biedt JitanSports ook massages in Vught?', answer: 'Ja. Naast personal training bieden we ook Deep Tissue Massage en Ontspanningsmassage aan huis in Vught.' },
  { question: 'Wat als ik een blessure heb?', answer: 'We passen het trainingsplan altijd aan op jouw situatie. Ook bij een blessure kunnen we veilig en effectief trainen.' },
];

export default function PersonalTrainerVught() {
  return (
    <div>
      <SEO
        title="Personal Trainer Vught – Aan Huis en Outdoor | JitanSports"
        description="Personal trainer in Vught voor afvallen, krachttraining en conditie. Training aan huis of outdoor in Vught. Gratis proefles – start vandaag bij JitanSports."
        path="/personal-trainer-vught"
        image={HERO_IMG}
        jsonLd={[
          buildServiceSchema({
            name: 'Personal Trainer Vught',
            serviceType: 'Personal Training',
            description:
              'Personal training aan huis of outdoor in Vught voor afvallen, sterker worden, conditie, voedingsbegeleiding en meer energie.',
            path: '/personal-trainer-vught',
            image: HERO_IMG,
            areaServed: ['Vught', 'Den Bosch'],
          }),
          buildFAQSchema(FAQS),
        ]}
      />
      <PageHero
        image={HERO_IMG}
        title="Personal Trainer Vught"
        subtitle="Bereik jouw fitnessdoelen met persoonlijke begeleiding aan huis of outdoor in Vught."
        contentClassName="max-w-xl"
        overlayClassName="bg-gradient-to-r from-secondary/90 to-secondary/40"
        badge={(
          <div className="mb-3 flex items-center gap-2">
            <MapPin className="h-4 w-4 text-primary" />
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">Vught</span>
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
          <h2 className="text-3xl font-display font-bold text-secondary mb-6">Personal trainer in Vught – JitanSports</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Als personal trainer in Vught biedt JitanSports volledig persoonlijke begeleiding. We trainen bij jou thuis in Vught of op een prachtige buitenlocatie in de omgeving.</p>
          <p className="text-muted-foreground leading-relaxed mb-4">Vught staat bekend om zijn groene omgeving – ideaal voor outdoor training. Of je nu in het park wilt trainen of liever thuis, wij passen ons aan op jouw wensen.</p>
          <p className="text-muted-foreground leading-relaxed mb-8">Naast personal training bieden we ook voedingsbegeleiding en massage aan in Vught. De complete aanpak voor duurzame resultaten.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">{BENEFITS.map(b => (<div key={b} className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" /><span className="text-foreground text-sm">{b}</span></div>))}</div>
        </div>
      </section>
      <SeoSummary>
        <p>
          Jitan Sports biedt personal training in Vught voor afvallen, sterker worden, fitter worden en persoonlijke begeleiding aan huis of outdoor. De aanpak combineert training, voedingsadvies, leefstijlbegeleiding en waar nodig massage voor herstel.
        </p>
      </SeoSummary>
      <section className="px-4 py-16 md:py-20 lg:py-24 bg-muted/30">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-secondary mb-8 text-center">Veelgestelde vragen</h2>
          <FAQAccordion items={FAQS} />
        </div>
      </section>
      <ServiceReviews title="Resultaten met Personal Trainer Vught" />

      <CTASection title="Klaar om fitter, sterker en energieker te worden?" subtitle="Gratis proefles – geen verplichtingen. Plan nu bij JitanSports." />
    </div>
  );
}
