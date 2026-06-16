import { Link } from 'react-router-dom';
import { ArrowRight, BarChart3, ClipboardList, Salad, Scale } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CTASection from '../components/CTASection';
import FAQAccordion from '../components/FAQAccordion';
import SEO, { ROUTE_SEO, buildFAQSchema, buildLocalBusinessSchema, buildServiceSchema } from '@/components/SEO';
import PageHero from '@/components/PageHero';
import SeoSummary from '@/components/SeoSummary';

const HERO_IMG = '/images/optimized/page-getfit-hero-960.jpg';

const FAQS = [
  {
    question: 'Wat is voedingsbegeleiding bij Jitan Sports?',
    answer:
      'Voedingsbegeleiding is praktische coaching rondom eten, meten en bijsturen. Je krijgt een voedingsplan dat past bij jouw lichaam, doel en dagelijkse ritme.',
  },
  {
    question: 'Is voedingsbegeleiding geschikt voor afvallen?',
    answer:
      'Ja. Jitan Sports helpt je duurzaam afvallen zonder crashdieet. We combineren duidelijke voeding, lichaamsanalyse en eventueel personal training voor beter resultaat.',
  },
  {
    question: 'Kan voedingsbegeleiding ook bij spieropbouw?',
    answer:
      'Ja. Voor spieropbouw kijken we naar voldoende energie, eiwitten, timing rondom training en herstel. Het doel is sterker worden zonder onnodig vet aan te komen.',
  },
  {
    question: 'Krijg ik ook metingen?',
    answer:
      'Ja. Met lichaamsanalyse en voortgangsmetingen zie je meer dan alleen gewicht. We kijken onder andere naar vetpercentage, spiermassa en ontwikkeling over tijd.',
  },
  {
    question: 'Kan ik voedingsbegeleiding los boeken?',
    answer:
      'Ja. Voedingsbegeleiding kan los geboekt worden, maar werkt vaak extra sterk in combinatie met personal training of het Get Fit Programma.',
  },
];

export default function VoedingsbegeleidingDenBosch() {
  return (
    <div>
      <SEO
        {...ROUTE_SEO['/voedingsbegeleiding-den-bosch']}
        title={ROUTE_SEO['/voedingsbegeleiding-den-bosch'].title}
        description={ROUTE_SEO['/voedingsbegeleiding-den-bosch'].description}
        path="/voedingsbegeleiding-den-bosch"
        image={HERO_IMG}
        jsonLd={[
          buildLocalBusinessSchema(),
          buildServiceSchema({
            name: 'Voedingsbegeleiding Den Bosch',
            serviceType: 'Voedingsbegeleiding',
            description:
              "Voedingsbegeleiding in Den Bosch voor afvallen, spieropbouw, gezonder eten, voedingsschema's op maat, lichaamsanalyse en voortgangsmetingen.",
            path: '/voedingsbegeleiding-den-bosch',
            image: HERO_IMG,
          }),
          buildFAQSchema(FAQS),
        ]}
      />

      <PageHero
        image={HERO_IMG}
        eyebrow="Voedingsbegeleiding Den Bosch"
        title="Voedingsbegeleiding in Den Bosch"
        subtitle="Geen crashdieet, maar praktische begeleiding voor afvallen, spieropbouw, meer energie en een gezonde leefstijl. Met voedingsschema, lichaamsanalyse en duidelijke voortgang."
        overlayClassName="bg-gradient-to-r from-secondary/94 via-secondary/78 to-secondary/25"
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link to="/booking">
            <Button size="lg" className="w-full gap-2 bg-primary text-primary-foreground hover:bg-primary/90 sm:w-auto">
              Plan gratis intake <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
          <Link to="/personal-training">
            <Button size="lg" variant="outline" className="w-full border-white/30 text-white hover:bg-white/10 sm:w-auto">
              Combineer met training
            </Button>
          </Link>
        </div>
      </PageHero>

      <section className="px-4 py-16 md:py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-amber-700">Waarom begeleiding werkt</p>
            <h2 className="mb-5 text-3xl font-display font-bold text-secondary">Je hoeft voeding niet perfect te doen, je moet weten wat werkt</h2>
            <div className="space-y-4 leading-relaxed text-muted-foreground">
              <p>Veel mensen proberen losse tips, een streng dieet of een schema dat niet bij hun leven past. Daardoor voelt voeding snel ingewikkeld en houd je het moeilijk vol.</p>
              <p>Bij Jitan Sports maken we voeding concreet. We kijken naar je doel, lichaam, dagritme, smaak en training. Daarna bouwen we een plan dat je begrijpt en kunt volhouden.</p>
              <p>Met metingen en bijsturing zie je wat er echt gebeurt. Zo wordt afvallen, aankomen of spieropbouw duidelijker en minder frustrerend.</p>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { icon: Salad, title: 'Voedingsschema op maat', text: 'Afgestemd op jouw lichaam, doel, voorkeuren en weekritme.' },
              { icon: Scale, title: 'Lichaamsanalyse', text: 'Inzicht in gewicht, vetpercentage, spiermassa en voortgang.' },
              { icon: BarChart3, title: 'Voortgang meten', text: 'We sturen bij op basis van resultaat, energie en haalbaarheid.' },
              { icon: ClipboardList, title: 'Praktisch plan', text: 'Geen extreme regels, maar keuzes die werken in jouw gewone leven.' },
            ].map((item) => (
              <article key={item.title} className="rounded-2xl border border-border bg-muted/30 p-6">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mb-2 font-bold text-secondary">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/30 px-4 py-16 md:py-20 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-display font-bold text-secondary">Voor wie is voedingsbegeleiding geschikt?</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              ['Afvallen', 'Je wilt vet verliezen zonder crashdieet en met een plan dat je volhoudt.'],
              ['Spieropbouw', 'Je wilt sterker worden en je lichaam genoeg brandstof geven om te herstellen.'],
              ['Gezonde leefstijl', 'Je wilt meer energie, betere gewoontes en minder willekeur in je voeding.'],
            ].map(([title, text]) => (
              <article key={title} className="rounded-2xl border border-border bg-white p-6">
                <h3 className="mb-2 font-bold text-secondary">{title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <SeoSummary>
        <p>
          Jitan Sports biedt voedingsbegeleiding in Den Bosch voor afvallen, spieropbouw, aankomen en gezonder eten. De begeleiding bestaat uit een praktisch voedingsplan, lichaamsanalyse, voortgangsmetingen en persoonlijke coaching die past bij jouw doel en leefstijl.
        </p>
      </SeoSummary>

      <section className="px-4 py-16 md:py-20 lg:py-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-center text-3xl font-display font-bold text-secondary">Veelgestelde vragen</h2>
          <FAQAccordion items={FAQS} />
        </div>
      </section>
      <CTASection
        title="Klaar om voeding helder te maken?"
        subtitle="Plan een gratis intake en ontdek welk voedingsplan past bij jouw lichaam, doel en dagelijkse leven."
      />
    </div>
  );
}
