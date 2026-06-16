import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Home, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CTASection from '../components/CTASection';
import FAQAccordion from '../components/FAQAccordion';
import SEO, { buildFAQSchema, buildServiceSchema } from '@/components/SEO';
import PageHero from '@/components/PageHero';

const FAQS = [
  {
    question: 'Waar in Den Bosch kom je aan huis?',
    answer:
      'JitanSports komt aan huis in Den Bosch en omgeving, waaronder Rosmalen, Vught, Oss, Sint-Michielsgestel, Boxtel en omliggende plaatsen.',
  },
  {
    question: 'Moet ik zelf iets klaarzetten?',
    answer:
      'Nee. Ik neem een professionele massagetafel en materialen mee. Je hebt alleen genoeg ruimte nodig om de tafel neer te zetten.',
  },
  {
    question: 'Welke massages kunnen aan huis?',
    answer:
      'Deep Tissue Massage, ontspanningsmassage en sportmassage kunnen aan huis worden uitgevoerd. We kiezen de behandeling die bij jouw klacht of doel past.',
  },
  {
    question: 'Waarom massage aan huis?',
    answer:
      'Je hoeft na de massage niet meer te reizen. Daardoor blijf je ontspannen en geef je je lichaam meer rust om te herstellen.',
  },
];

export default function MassageAanHuisDenBosch() {
  return (
    <div>
      <SEO
        title="Massage Aan Huis Den Bosch | Deep Tissue & Ontspanning | JitanSports"
        description="Massage aan huis in Den Bosch en omgeving. JitanSports komt met professionele massagetafel voor Deep Tissue Massage, sportmassage en ontspanningsmassage."
        path="/massage-aan-huis-den-bosch"
        image="/images/optimized/page-massage-hero-960.jpg"
        jsonLd={[
          buildServiceSchema({
            name: 'Massage aan huis Den Bosch',
            serviceType: 'Massage aan huis',
            description:
              'Massage aan huis in Den Bosch en omgeving met Deep Tissue Massage, sportmassage en ontspanningsmassage op een professionele massagetafel.',
            path: '/massage-aan-huis-den-bosch',
            image: '/images/optimized/page-massage-hero-960.jpg',
          }),
          buildFAQSchema(FAQS),
        ]}
      />

      <PageHero
        image="/images/optimized/page-massage-hero-960.jpg"
        title="Massage aan huis Den Bosch"
        subtitle="Geen reistijd, geen drukte, geen haast. Ik kom naar je toe met een professionele massagetafel, zodat je na de behandeling direct in je eigen omgeving kunt ontspannen."
        overlayClassName="bg-gradient-to-r from-secondary/94 via-secondary/78 to-secondary/25"
        badge={(
          <div className="mb-4 flex items-center gap-2 text-primary">
            <Home className="h-4 w-4" />
            <span className="text-sm font-semibold uppercase tracking-wider">Aan huis in Den Bosch</span>
          </div>
        )}
      >
        <Link to="/booking">
          <Button size="lg" className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
            Boek massage aan huis <ArrowRight className="h-5 w-5" />
          </Button>
        </Link>
      </PageHero>

      <section className="px-4 py-16 md:py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-amber-700">Waarom aan huis?</p>
            <h2 className="mb-5 text-3xl font-display font-bold text-secondary">Echte ontspanning blijft ontspanning</h2>
            <div className="space-y-4 leading-relaxed text-muted-foreground">
              <p>Een massage in een praktijk kan fijn zijn, maar daarna moet je vaak weer de auto in, parkeren, naar huis rijden en opnieuw schakelen. Bij massage aan huis blijft de rust juist hangen.</p>
              <p>JitanSports neemt alles mee. Je hoeft alleen een plek vrij te maken. Na de behandeling kun je rustig blijven liggen, douchen of direct ontspannen op je bank.</p>
              <p>Voor mensen met rugklachten, drukke agenda’s of stress is dat een groot voordeel. Het herstel begint niet pas later, maar meteen.</p>
            </div>
          </div>
          <div className="rounded-2xl border border-border bg-muted/30 p-7">
            <h3 className="mb-5 text-xl font-bold text-secondary">Beschikbare behandelingen</h3>
            <div className="space-y-3">
              {[
                'Deep Tissue Massage voor vastzittende spieren en bindweefsel',
                'Ontspanningsmassage voor rust in lichaam en hoofd',
                'Sportmassage voor herstel na inspanning',
                'VIP Treatment: 1 uur training + 1 uur massage',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span className="text-sm text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted/30 px-4 py-16 md:py-20 lg:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 text-center">
            <div className="mb-4 flex justify-center gap-0.5">
              {[...Array(5)].map((_, index) => (
                <Star key={index} className="h-5 w-5 fill-primary text-primary" />
              ))}
            </div>
            <h2 className="text-3xl font-display font-bold text-secondary">Zo werkt massage aan huis</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {[
              ['01', 'Afspraak plannen', 'Kies je behandeling en voorkeursmoment via de bookingpagina.'],
              ['02', 'Ik kom naar jou toe', 'Ik neem massagetafel, materialen en olie mee. Jij hoeft niets te regelen.'],
              ['03', 'Rust na afloop', 'Je blijft in je eigen omgeving en haalt meer uit het effect van de massage.'],
            ].map(([step, title, text]) => (
              <div key={step} className="rounded-2xl border border-border bg-white p-6">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-primary font-bold text-primary-foreground">{step}</div>
                <h3 className="mb-2 font-bold text-secondary">{title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 md:py-20 lg:py-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-center text-3xl font-display font-bold text-secondary">Veelgestelde vragen</h2>
          <FAQAccordion items={FAQS} />
        </div>
      </section>
      <CTASection
        dark
        title="Klaar om fitter, sterker en energieker te worden?"
        subtitle="Deep Tissue, sportmassage of ontspanning. Professioneel bij jou thuis in omgeving Den Bosch."
      />
    </div>
  );
}
