import { Link } from 'react-router-dom';
import { ArrowRight, BarChart3, CheckCircle, ClipboardList, HeartPulse, Salad, Scale, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CTASection from '../components/CTASection';
import FAQAccordion from '../components/FAQAccordion';
import ResponsiveImage from '@/components/ResponsiveImage';
import SEO, { buildFAQSchema, buildServiceSchema } from '@/components/SEO';
import PageHero from '@/components/PageHero';
import ServiceReviews from '@/components/ServiceReviews';

const BENEFITS = [
  'Voedingsschema op maat voor afvallen, aankomen of spieropbouw',
  'Geen crashdieet, maar een plan dat je echt volhoudt',
  'Lichaamsanalyse met gewicht, vetpercentage, spiermassa en vochtbalans',
  'Digitaal weegrapport met duidelijke uitleg',
  'Voortgangsmetingen om gericht bij te sturen',
  'Praktische tips voor boodschappen, voorbereiding en normale dagen',
  'Ondersteuning en motivatie wanneer het even lastig wordt',
  'Perfect te combineren met personal training en Get Fit',
];

const SERVICES = [
  {
    icon: Salad,
    title: 'Voedingsschema op maat',
    text: 'We maken een schema dat past bij jouw lichaam, doel, smaak en dagelijkse ritme. Praktisch, haalbaar en zonder killerdieet.',
  },
  {
    icon: Scale,
    title: 'Wegen en lichaamsanalyse',
    text: 'Meer dan een getal op de weegschaal. We meten lichaamssamenstelling en leggen uit wat de cijfers betekenen.',
  },
  {
    icon: BarChart3,
    title: 'Digitaal rapport',
    text: 'Je ontvangt een overzichtelijk digitaal rapport, zodat je ziet waar je staat en waar we gericht aan werken.',
  },
  {
    icon: ClipboardList,
    title: 'Voortgangsplan',
    text: 'Iedere meting gebruiken we om je voeding, training en gewoontes slim bij te sturen.',
  },
];

const FAQS = [
  {
    question: 'Voor welke doelen kan ik voedingsbegeleiding krijgen?',
    answer:
      'Voor afvallen, aankomen, spieropbouw, meer energie en gezonder eten. Het schema wordt aangepast op jouw lichaam en levensstijl.',
  },
  {
    question: 'Wat meet een lichaamsanalyse?',
    answer:
      'We meten onder andere gewicht, vetpercentage, spiermassa en vochtbalans. Daarna ontvang je een digitaal rapport met toelichting.',
  },
  {
    question: 'Moet ik alles afwegen en calorieën tellen?',
    answer:
      'Alleen als dat bij jou past. Sommige klanten werken graag exact, anderen beter met porties en praktische keuzes. We kiezen de methode die jij volhoudt.',
  },
  {
    question: 'Kan dit zonder personal training?',
    answer:
      'Ja, voedingsbegeleiding kan los. De combinatie met training werkt vaak sterker, omdat voeding en beweging elkaar direct versterken.',
  },
];

export default function Voeding() {
  return (
    <div>
      <SEO
        title="Voedingscoach Den Bosch - Voeding & Wegen | JitanSports"
        description="Voedingscoach in omgeving Den Bosch voor voedingsschema's op maat, afvallen, aankomen, spieropbouw, lichaamsanalyse, digitaal weegrapport en voortgangsmetingen."
        path="/voeding"
        image="/images/optimized/page-getfit-hero-960.jpg"
        jsonLd={[
          buildServiceSchema({
            name: 'Voedingscoach Den Bosch',
            serviceType: 'Voedingsbegeleiding',
            description:
              "Voedingscoach in Den Bosch voor voedingsschema's op maat, afvallen, aankomen, spieropbouw, lichaamsanalyse en digitaal weegrapport.",
            path: '/voeding',
            image: '/images/optimized/page-getfit-hero-960.jpg',
          }),
          buildFAQSchema(FAQS),
        ]}
      />

      <PageHero
        image="/images/optimized/page-getfit-hero-960.jpg"
        eyebrow="Voedingsbegeleiding Den Bosch"
        title="Voedingsbegeleiding in Den Bosch"
        subtitle="Voedingsschema's op maat, aanpassing van eetgewoonten, lichaamsanalyse en praktische begeleiding voor afvallen, spieropbouw, meer energie en een gezonde lifestyle."
        overlayClassName="bg-gradient-to-r from-secondary/94 via-secondary/78 to-secondary/25"
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link to="/booking">
            <Button size="lg" className="w-full gap-2 bg-primary text-primary-foreground hover:bg-primary/90 sm:w-auto">
              Plan gratis intake <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
          <Link to="/contact">
            <Button size="lg" variant="outline" className="w-full border-white/30 text-white hover:bg-white/10 sm:w-auto">
              Stel je vraag
            </Button>
          </Link>
        </div>
      </PageHero>

      <section className="bg-primary/10 px-4 py-5">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-semibold text-secondary">Afvallen, aankomen, spieropbouw of meer energie? We maken het concreet.</p>
          <Link to="/voedingscoach-den-bosch">
            <Button variant="outline" className="gap-2">
              Voedingscoach Den Bosch <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      <section className="px-4 py-16 md:py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-amber-700">Probleem</p>
            <h2 className="mb-5 text-3xl font-display font-bold text-secondary">Je kunt pas sturen als je weet waar je staat</h2>
            <div className="space-y-4 leading-relaxed text-muted-foreground">
              <p>Juiste voeding geeft energie en helpt je jouw doelen te behalen. Maar veel mensen eten op gevoel, proberen losse tips of starten met een dieet dat niet bij hun leven past.</p>
              <p>Wanneer je start met een voedingsschema is het fijn om eerlijk te zien waar je staat. Daarom combineren we voedingsadvies met wegen en lichaamsanalyse.</p>
              <p>We kijken niet alleen naar gewicht, maar naar wat er in je lichaam verandert. Zo wordt afvallen, aankomen of spieropbouw veel duidelijker en minder frustrerend.</p>
            </div>
          </div>
          <div className="aspect-[4/3] overflow-hidden rounded-2xl lg:aspect-[16/10]">
            <ResponsiveImage
              src="/images/optimized/service-getfit-card-720.jpg"
              alt="Voeding en lichaamsanalyse bij JitanSports"
              className="h-full w-full object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
        </div>
      </section>

      <section className="bg-muted/30 px-4 py-16 md:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-amber-700">Oplossing</p>
            <h2 className="text-3xl font-display font-bold text-secondary">Wat je krijgt</h2>
            <p className="mt-3 text-muted-foreground">Praktisch advies, meetbaar inzicht en begeleiding die past bij je gewone leven.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((service) => (
              <div key={service.title} className="rounded-2xl border border-border bg-white p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 font-bold text-secondary">{service.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{service.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 md:py-20 lg:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <h2 className="mb-5 text-3xl font-display font-bold text-secondary">Voedingsschema's op maat</h2>
            <div className="space-y-4 leading-relaxed text-muted-foreground">
              <p>Bij JitanSports geloven we dat de juiste voeding de sleutel is tot een fit en energiek leven. Of je nu wilt afvallen, aankomen of gewoon gezonder wilt eten: er is altijd een passend schema.</p>
              <p>Mijn adviezen zijn praktisch en gebaseerd op normale producten. Denk aan voldoende groente, fruit, eiwitten en vezels, maar ook aan balans. Genieten mag onderdeel blijven van een gezonde lifestyle.</p>
              <p>Het blijft een plan dat voor jou vol te houden moet zijn. Want een schema dat alleen op papier mooi is, brengt je niet verder.</p>
            </div>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {BENEFITS.map((benefit) => (
                <div key={benefit} className="flex items-start gap-2 text-sm text-foreground">
                  <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl bg-secondary p-7 text-white">
            <HeartPulse className="mb-4 h-10 w-10 text-primary" />
            <h3 className="mb-3 text-xl font-bold">Jouw gezonde levensstijl begint hier</h3>
            <p className="mb-5 text-sm leading-relaxed text-white/72">
              Met persoonlijke voedingsschema's en professionele lichaamsanalyse krijg je de tools om gericht aan je doel te werken. Stap voor stap, zonder extreme regels.
            </p>
            <Link to="/booking">
              <Button className="w-full gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
                Intake plannen <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-muted/30 px-4 py-16 md:py-20 lg:py-24">
        <div className="mx-auto max-w-4xl">
          <div className="mb-10 text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-amber-700">Werkwijze</p>
            <h2 className="text-3xl font-display font-bold text-secondary">Van intake naar meetbare voortgang</h2>
          </div>
          <div className="space-y-5">
            {[
              ['01', 'Intake', 'We bespreken jouw doel, huidige voedingspatroon, voorkeuren, allergieën en valkuilen.'],
              ['02', 'Meting', 'We voeren een lichaamsanalyse uit en leggen de waarden duidelijk uit.'],
              ['03', 'Plan op maat', 'Je krijgt een voedingsschema en praktische adviezen die passen bij jouw ritme.'],
              ['04', 'Voortgang', 'We meten opnieuw, bespreken het digitale rapport en sturen bij waar nodig.'],
            ].map(([step, title, text]) => (
              <div key={step} className="flex gap-5 rounded-2xl border border-border bg-white p-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary font-bold text-primary-foreground">{step}</div>
                <div>
                  <h3 className="mb-1 font-bold text-secondary">{title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 md:py-20 lg:py-24">
        <div className="mx-auto max-w-3xl">
          <div className="mb-8 text-center">
            <Sparkles className="mx-auto mb-4 h-9 w-9 text-primary" />
            <h2 className="text-3xl font-display font-bold text-secondary">Veelgestelde vragen</h2>
          </div>
          <FAQAccordion items={FAQS} />
        </div>
      </section>

      <ServiceReviews title="Resultaten met voeding, training en begeleiding" />

      <CTASection title="Klaar om fitter, sterker en energieker te worden?" subtitle="Plan vandaag nog jouw gratis proefles en ontdek welk voedingsplan bij jouw lichaam, doel en leefstijl past." />
    </div>
  );
}
