import { Link } from 'react-router-dom';
import {
  ArrowRight,
  BookOpenCheck,
  Brain,
  CheckCircle,
  Dumbbell,
  HeartPulse,
  MessageCircle,
  Refrigerator,
  Salad,
  Scale,
  Sparkles,
  Star,
  Trophy,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import CTASection from '../components/CTASection';
import FAQAccordion from '../components/FAQAccordion';
import SEO, { buildFAQSchema, buildServiceSchema } from '@/components/SEO';
import PageHero from '@/components/PageHero';
import ServiceReviews from '@/components/ServiceReviews';

const INCLUSIONS = [
  {
    icon: Dumbbell,
    title: '24 personal trainingen',
    desc: '12 weken lang train je 2x per week 1-op-1. Outdoor of aan huis, met techniek, structuur en progressie.',
  },
  {
    icon: Scale,
    title: 'Wegen en lichaamsanalyse',
    desc: 'Startmeting, metingen iedere 4 weken en een digitaal rapport met gewicht, vetpercentage, spiermassa en voortgang.',
  },
  {
    icon: Salad,
    title: 'Voedingsschema op maat',
    desc: 'Geen killerdieet, maar een haalbaar schema dat past bij jouw lichaam, voorkeuren en levensstijl.',
  },
  {
    icon: Refrigerator,
    title: 'Koelkast-check',
    desc: 'We kijken praktisch naar wat er in je keuken ligt en maken je omgeving makkelijker voor gezonde keuzes.',
  },
  {
    icon: BookOpenCheck,
    title: 'Voortgangsboekje',
    desc: 'Je houdt resultaten, afspraken en mindset overzichtelijk bij. Dat geeft focus en motivatie.',
  },
  {
    icon: HeartPulse,
    title: 'Deep Tissue Massage',
    desc: 'Een krachtige behandeling voor herstel, minder spierspanning en het losmaken van oude blokkades.',
  },
  {
    icon: Brain,
    title: 'Mental coaching',
    desc: 'We werken aan discipline, motivatie en het doorbreken van patronen die je eerder hebben tegengehouden.',
  },
  {
    icon: MessageCircle,
    title: '24/7 ondersteuning',
    desc: 'Ook tussen de sessies sta je er niet alleen voor. Vragen, twijfel of vastlopen? Je kunt appen.',
  },
];

const PHASES = [
  {
    label: 'Week 1-4',
    title: 'Fundament bouwen',
    items: ['Intake en nulmeting', 'Trainingsplan op niveau', 'Voedingsschema op maat', 'Techniek en ritme opbouwen'],
  },
  {
    label: 'Week 5-8',
    title: 'Patronen doorbreken',
    items: ['Eerste evaluatie', 'Plan bijsturen', 'Koelkast-check', 'Meer intensiteit en controle'],
  },
  {
    label: 'Week 9-12',
    title: 'Resultaat vasthouden',
    items: ['Deep Tissue Massage', 'Eindmeting met rapport', 'Voortgangsboekje afronden', 'Plan voor de periode daarna'],
  },
];

const RESULTS = [
  {
    name: 'Patries',
    result: 'Fit en zelfverzekerd',
    text: 'Ik wilde op mijn 50e weer met vertrouwen in een bikini op de foto. Door training, voeding en coaching is dat meer dan gelukt.',
  },
  {
    name: 'Michiel',
    result: 'Atletischer lichaam',
    text: 'Aroen gaf mij training, voedingsadvies en mentale begeleiding. Ik heb een niveau bereikt dat ik alleen nooit had gehaald.',
  },
  {
    name: 'Ellen',
    result: '12 kilo kwijt',
    text: 'Na enkele weken voelde ik me gezonder, fitter en gelukkiger. De combinatie van training, voeding en begeleiding werkte voor mij.',
  },
];

const FAQS = [
  {
    question: 'Voor wie is het Get Fit Pakket bedoeld?',
    answer:
      'Voor iedereen die serieus wil veranderen: afvallen, spiermassa opbouwen, fitter worden of eindelijk structuur krijgen in training en voeding. Je hoeft nog niet fit te zijn om te starten.',
  },
  {
    question: 'Hoeveel tijd kost het programma?',
    answer:
      'Je traint 12 weken lang 2x per week. Daarnaast werk je met je voedingsschema, voortgangsboekje en korte check-ins. Het traject is intensief, maar praktisch in te passen.',
  },
  {
    question: 'Is dit een crashdieet?',
    answer:
      'Nee. Het voedingsschema wordt afgestemd op jouw lichaam, smaak en levensstijl. Het moet vol te houden zijn, anders is het geen goede oplossing.',
  },
  {
    question: 'Wat kost het Get Fit Pakket?',
    answer:
      'Het complete Get Fit Pakket kost €1.750. Dat is inclusief 24 trainingen, voedingsschema, metingen, koelkast-check, voortgangsboekje, Deep Tissue Massage, mental coaching en 24/7 support.',
  },
  {
    question: 'Waarom is er beperkt plek?',
    answer:
      'Omdat dit veel persoonlijke begeleiding vraagt. Ik neem bewust een beperkt aantal Get Fit-deelnemers tegelijk aan, zodat de kwaliteit hoog blijft.',
  },
];

export default function GetFit() {
  return (
    <div>
      <SEO
        title="Get Fit Pakket Den Bosch - 12 Weken Personal Training | JitanSports"
        description="Premium 12-weken traject met 2x per week personal training, voedingsschema, wegen, koelkast-check, voortgangsboekje, Deep Tissue Massage, mental coaching en 24/7 support."
        path="/get-fit"
        image="/images/optimized/page-getfit-hero-960.jpg"
        jsonLd={[
          buildServiceSchema({
            name: 'Get Fit Pakket Den Bosch',
            serviceType: '12 weken personal training, voeding, massage en coaching',
            description:
              'Premium 12-weken traject in Den Bosch met 2x per week personal training, voedingsschema op maat, lichaamsanalyse, koelkast-check, Deep Tissue Massage, mental coaching en 24/7 support.',
            path: '/get-fit',
            image: '/images/optimized/page-getfit-hero-960.jpg',
          }),
          buildFAQSchema(FAQS),
        ]}
      />

      <PageHero
        image="/images/optimized/page-getfit-hero-960.jpg"
        title="Get Fit Programma Den Bosch"
        subtitle="12 weken begeleiding met 2x per week personal training, wegen, voedingsschema's op maat, koelkast-check, voortgangsboek, Deep Tissue Massage, mental coaching en 24/7 ondersteuning."
        overlayClassName="bg-gradient-to-r from-secondary/95 via-secondary/82 to-secondary/30"
        badge={(
          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-bold text-primary-foreground">
            <Trophy className="h-4 w-4" /> Premium 12-weken traject
          </div>
        )}
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

      <section className="bg-primary px-4 py-6 text-primary-foreground">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xl font-bold">Get Fit Pakket - €1.750</p>
            <p className="text-sm opacity-80">12 weken · 24 trainingen · voeding · massage · mental coaching · 24/7 support</p>
          </div>
          <Link to="/booking">
            <Button variant="secondary" className="gap-2 font-semibold">
              Intake plannen <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      <section className="px-4 py-16 md:py-20 lg:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-amber-700">Herkenbaar?</p>
            <h2 className="mb-5 text-3xl font-display font-bold text-secondary">Je wilt veranderen, maar niet weer half beginnen</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>Misschien begin je steeds opnieuw. Een paar weken sporten, een streng dieet, daarna komt het gewone leven ertussen en ben je terug bij af.</p>
              <p>Het Get Fit Pakket is juist gemaakt om dat patroon te doorbreken. Geen losse training of tijdelijk schema, maar een complete aanpak waarin ik stap voor stap met je meeloop.</p>
              <p>We trainen op jouw niveau, passen voeding praktisch aan, meten eerlijk wat er gebeurt en houden je scherp op de momenten dat motivatie even zakt.</p>
            </div>
          </div>
          <div className="rounded-2xl bg-secondary p-8 text-white">
            <Sparkles className="mb-4 h-10 w-10 text-primary" />
            <h3 className="mb-3 text-2xl font-bold">Dit is de boost waarin alles samenkomt</h3>
            <p className="mb-6 text-white/72">
              Sport, voeding, herstel en mindset in één traject. Exclusief genoeg om persoonlijk te blijven, praktisch genoeg om in je echte leven te passen.
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              {['Afvallen zonder crashdieet', 'Sterker en fitter worden', 'Meer energie in je dag', 'Minder twijfel, meer structuur'].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-white/82">
                  <CheckCircle className="h-4 w-4 shrink-0 text-primary" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted/30 px-4 py-16 md:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-amber-700">Alles inbegrepen</p>
            <h2 className="text-3xl font-display font-bold text-secondary">Wat krijg je in 12 weken?</h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {INCLUSIONS.map((item) => (
              <div key={item.title} className="rounded-2xl border border-border bg-white p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 font-bold text-secondary">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 md:py-20 lg:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-display font-bold text-secondary">Hoe werkt het traject?</h2>
            <p className="mt-3 text-muted-foreground">Duidelijk, meetbaar en persoonlijk. Je weet precies waar je aan toe bent.</p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {PHASES.map((phase) => (
              <div key={phase.label} className="rounded-2xl border border-border bg-white p-6">
                <p className="mb-2 text-sm font-semibold text-amber-700">{phase.label}</p>
                <h3 className="mb-4 text-xl font-bold text-secondary">{phase.title}</h3>
                <ul className="space-y-2">
                  {phase.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/30 px-4 py-16 md:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-amber-700">Resultaten</p>
            <h2 className="text-3xl font-display font-bold text-secondary">Wat klanten ervaren</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {RESULTS.map((result) => (
              <div key={result.name} className="rounded-2xl border border-border bg-white p-6">
                <div className="mb-4 flex gap-0.5">
                  {[...Array(5)].map((_, index) => (
                    <Star key={index} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="mb-5 text-sm italic leading-relaxed text-muted-foreground">"{result.text}"</p>
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-secondary">{result.name}</p>
                  <p className="text-sm font-semibold text-amber-700">{result.result}</p>
                </div>
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

      <ServiceReviews title="Resultaten uit het Get Fit Programma" />

      <CTASection
        dark
        title="Klaar om fitter, sterker en energieker te worden?"
        subtitle="Er is beperkt plek voor Get Fit. Plan vandaag nog jouw gratis proefles of intake."
      />
    </div>
  );
}
