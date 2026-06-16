import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, MapPin, Star } from 'lucide-react';
import CTASection from '../components/CTASection';
import FAQAccordion from '../components/FAQAccordion';
import SEO, { ROUTE_SEO, buildFAQSchema, buildServiceSchema } from '@/components/SEO';
import PageHero from '@/components/PageHero';
import SeoSummary from '@/components/SeoSummary';

const HERO_IMG = '/images/optimized/page-training-hero-960.jpg';

const BENEFITS = [
  'Personal training aan huis in Boxtel',
  'Outdoor training in Boxtel en omgeving',
  'Voedingsbegeleiding inbegrepen',
  'Training op jouw niveau en agenda',
  'Gratis proefles - volledig vrijblijvend',
  'Combinatie met massage mogelijk',
];

const FAQS = [
  {
    question: 'Is JitanSports actief als personal trainer in Boxtel?',
    answer:
      'Ja. Boxtel valt binnen het werkgebied van JitanSports. Training kan aan huis, outdoor of op een geschikte locatie in de omgeving.',
  },
  {
    question: 'Kan ik in Boxtel aan huis trainen?',
    answer:
      'Ja. Jitan komt naar je toe met de benodigde materialen. Je hebt geen sportschool nodig om goed en effectief te trainen.',
  },
  {
    question: 'Is voedingsbegeleiding inbegrepen?',
    answer:
      'Bij personal training kijkt Jitan ook naar voeding en leefstijl. Voor een uitgebreider voedingsplan kun je voedingsbegeleiding of het Get Fit Programma kiezen.',
  },
  {
    question: 'Kan ik starten met een gratis proefles?',
    answer:
      'Ja. Je start met een gratis proefles of intake, zodat je kunt kennismaken met de aanpak en kunt bespreken wat je wilt bereiken.',
  },
];

export default function PersonalTrainerBoxtel() {
  return (
    <div>
      <SEO
        {...ROUTE_SEO['/personal-trainer-boxtel']}
        title={ROUTE_SEO['/personal-trainer-boxtel'].title}
        description={ROUTE_SEO['/personal-trainer-boxtel'].description}
        path="/personal-trainer-boxtel"
        image={HERO_IMG}
        jsonLd={[
          buildServiceSchema({
            name: 'Personal Trainer Boxtel',
            serviceType: 'Personal Training',
            description:
              'Personal training aan huis of outdoor in Boxtel voor afvallen, krachttraining, conditie, voedingsbegeleiding en fitter worden.',
            path: '/personal-trainer-boxtel',
            image: HERO_IMG,
            areaServed: ['Boxtel', 'Den Bosch'],
          }),
          buildFAQSchema(FAQS),
        ]}
      />

      <PageHero
        image={HERO_IMG}
        title="Personal Trainer Boxtel"
        subtitle="Persoonlijke training aan huis of outdoor in Boxtel. Voor afvallen, sterker worden, fitter worden en meer energie."
        contentClassName="max-w-xl"
        overlayClassName="bg-gradient-to-r from-secondary/90 to-secondary/40"
        badge={(
          <div className="mb-3 flex items-center gap-2">
            <MapPin className="h-4 w-4 text-primary" />
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">Boxtel</span>
          </div>
        )}
      >
        <div className="mb-6 flex items-center gap-2">
          {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-primary text-primary" />)}
          <span className="ml-1 text-sm text-white/80">4.9/5 Google Reviews</span>
        </div>
        <Link to="/booking">
          <Button size="lg" className="gap-2 bg-primary font-bold text-secondary hover:bg-primary/90">
            Plan Gratis Proefles <ArrowRight className="h-5 w-5" />
          </Button>
        </Link>
      </PageHero>

      <section className="px-4 py-16 md:py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2">
          <div>
            <h2 className="mb-6 text-3xl font-display font-bold text-secondary">Personal trainer in Boxtel</h2>
            <div className="space-y-4 leading-relaxed text-muted-foreground">
              <p>Zoek je een personal trainer in Boxtel die echt persoonlijk met je meekijkt? JitanSports biedt 1-op-1 begeleiding aan huis of outdoor, afgestemd op jouw doel, lichaam en agenda.</p>
              <p>Of je nu wilt afvallen, sterker wilt worden, conditie wilt opbouwen of weer structuur nodig hebt: je krijgt een plan dat past bij jouw niveau en stap voor stap wordt opgebouwd.</p>
              <p>De combinatie van personal training, voedingsbegeleiding en herstel maakt de aanpak praktisch en compleet.</p>
            </div>
            <div className="mt-8 space-y-3">
              {BENEFITS.map((benefit) => (
                <div key={benefit} className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span className="text-sm text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="h-fit rounded-2xl bg-secondary p-8 text-white">
            <h2 className="mb-4 text-2xl font-bold">Werkwijze van Jitan</h2>
            <div className="space-y-4 text-sm leading-relaxed text-white/75">
              <p>We starten met een gratis proefles of intake. Daarna maakt Jitan een persoonlijk plan voor training, voeding en voortgang.</p>
              <p>Je traint op een plek die bij jou past: thuis, buiten of op een geschikte locatie in Boxtel en omgeving.</p>
            </div>
            <Link to="/booking" className="mt-7 inline-block w-full">
              <Button className="w-full gap-2 bg-primary font-bold text-secondary hover:bg-primary/90">
                Gratis proefles plannen <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <SeoSummary>
        <p>
          Jitan Sports biedt personal training in Boxtel voor mensen die willen afvallen, sterker willen worden, fitter willen worden of meer structuur nodig hebben. De begeleiding bestaat uit training aan huis of outdoor, voedingsadvies, persoonlijke coaching en meetbare voortgang.
        </p>
      </SeoSummary>

      <section className="bg-muted/30 px-4 py-16 md:py-20 lg:py-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-center text-3xl font-display font-bold text-secondary">Veelgestelde vragen</h2>
          <FAQAccordion items={FAQS} />
        </div>
      </section>
      <CTASection
        title="Klaar om te starten in Boxtel?"
        subtitle="Plan vandaag nog je gratis proefles en ontdek wat persoonlijke begeleiding voor jou kan doen."
      />
    </div>
  );
}
