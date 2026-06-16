import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Heart, Home, Shield, Sparkles, Star, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CTASection from '../components/CTASection';
import FAQAccordion from '../components/FAQAccordion';
import SEO, { buildFAQSchema, buildServiceSchema } from '@/components/SEO';
import PageHero from '@/components/PageHero';

const MASSAGE_TYPES = [
  {
    icon: Zap,
    tag: 'Krachtig herstel',
    title: 'Deep Tissue Massage',
    desc:
      'Een stevige behandeling waarbij opgebouwd bindweefsel en diepe spierspanning laag voor laag worden losgemaakt. Dit helpt blokkades verminderen en ondersteunt een betere bloedcirculatie.',
    details: [
      'Gericht op rug-, nek- en schouderklachten',
      'Maakt vastzittend bindweefsel los',
      'Helpt bij triggerpoints en blokkades',
      'Ondersteunt herstel na training',
      'Geschikt bij langdurige spierspanning',
    ],
    price: '€75 / 60 min',
    link: '/deep-tissue-massage-den-bosch',
  },
  {
    icon: Heart,
    tag: 'Rust en herstel',
    title: 'Ontspanningsmassage',
    desc:
      'Een rustige massage die lichaam en geest tot ontspanning brengt. Ideaal bij stress, vermoeidheid en behoefte aan een moment waarin niets hoeft.',
    details: [
      'Brengt lichaam en hoofd tot rust',
      'Helpt bij stress en mentale spanning',
      'Ondersteunt betere slaap',
      'Zachte en vloeiende technieken',
      'Ook aan huis mogelijk',
    ],
    price: '€60 / 60 min',
    link: '/booking',
  },
  {
    icon: Shield,
    tag: 'Voor actieve lichamen',
    title: 'Sportmassage',
    desc:
      'Voor sporters en actieve mensen die sneller willen herstellen, minder spierpijn willen ervaren en beter willen blijven bewegen.',
    details: [
      'Sneller herstel na inspanning',
      'Minder spierpijn en stijfheid',
      'Preventie van overbelasting',
      'Gericht op zwaar belaste spiergroepen',
      'Beschikbaar aan huis',
    ],
    price: '€65 / 60 min',
    link: '/sportmassage-den-bosch',
  },
];

const FAQS = [
  {
    question: 'Komt JitanSports aan huis voor massage?',
    answer:
      'Ja. Ik kom met een professionele massagetafel en materialen naar je toe in omgeving Den Bosch. Zo blijft ontspanning ook na de behandeling ontspanning.',
  },
  {
    question: 'Wat is het verschil tussen Deep Tissue en ontspanningsmassage?',
    answer:
      'Deep Tissue is steviger en gericht op diepe spierlagen, bindweefsel en klachten. Ontspanningsmassage is rustiger en vooral gericht op ontspanning van lichaam en geest.',
  },
  {
    question: 'Is Deep Tissue Massage geschikt bij rugklachten?',
    answer:
      'Vaak wel. Deep Tissue Massage wordt veel geboekt bij rug-, nek- en schouderklachten, verkrampte spieren en vastzittende gebieden. Bij twijfel bespreken we eerst je klachten.',
  },
  {
    question: 'Hoe vaak moet ik een massage boeken?',
    answer:
      'Bij hardnekkige klachten kan een korte reeks nodig zijn. Voor onderhoud en ontspanning is eens per maand voor veel klanten voldoende.',
  },
  {
    question: 'Kan ik massage combineren met personal training?',
    answer:
      'Ja, dat is juist een van de sterke punten van JitanSports. De VIP Treatment combineert 1 uur training met 1 uur massage.',
  },
];

export default function Massage() {
  return (
    <div>
      <SEO
        title="Massage Den Bosch - Deep Tissue, Sportmassage & Aan Huis | JitanSports"
        description="Professionele massage aan huis in Den Bosch en omgeving. Deep Tissue Massage, ontspanningsmassage en sportmassage voor herstel, minder pijn en ontspanning."
        path="/massage"
        image="/images/optimized/page-massage-hero-960.jpg"
        jsonLd={[
          buildServiceSchema({
            name: 'Massage Den Bosch',
            serviceType: 'Deep Tissue Massage, Sportmassage en Ontspanningsmassage',
            description:
              'Professionele massage aan huis in Den Bosch en omgeving: Deep Tissue Massage, sportmassage en ontspanningsmassage voor herstel, minder pijn en ontspanning.',
            path: '/massage',
            image: '/images/optimized/page-massage-hero-960.jpg',
          }),
          buildFAQSchema(FAQS),
        ]}
      />

      <PageHero
        image="/images/optimized/page-massage-hero-960.jpg"
        eyebrow="Deep Tissue Massage Den Bosch"
        title="Deep Tissue Massage in Den Bosch"
        subtitle="Professionele Deep Tissue Massage, ontspanningsmassage en massage aan huis. Verminder blokkades, herstel sneller en kom direct tot rust in je eigen omgeving."
        overlayClassName="bg-gradient-to-r from-secondary/94 via-secondary/78 to-secondary/25"
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link to="/booking">
            <Button size="lg" className="w-full gap-2 bg-primary text-primary-foreground hover:bg-primary/90 sm:w-auto">
              Boek een massage <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
          <Link to="/vip-treatment">
            <Button size="lg" variant="outline" className="w-full border-white/30 text-white hover:bg-white/10 sm:w-auto">
              Bekijk VIP Treatment
            </Button>
          </Link>
        </div>
        <div className="mt-6 flex items-center gap-2">
          {[...Array(5)].map((_, index) => (
            <Star key={index} className="h-4 w-4 fill-primary text-primary" />
          ))}
          <span className="text-sm text-white/78">5.0 · gespecialiseerd in Deep Tissue Massage</span>
        </div>
      </PageHero>

      <section className="bg-primary/10 px-4 py-5">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-semibold text-secondary">Aan huis · Professionele massagetafel · Geen reistijd na je behandeling</p>
          <Link to="/massage-aan-huis-den-bosch">
            <Button variant="outline" className="gap-2">
              Massage aan huis Den Bosch <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      <section className="px-4 py-16 md:py-20 lg:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-amber-700">Probleem</p>
          <h2 className="mb-5 text-3xl font-display font-bold text-secondary">Naast intensief sporten is ontspanning geen luxe</h2>
          <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
            <p>Vastzittende schouders, een stijve rug, hoofdpijn door spanning of spieren die niet goed herstellen: je lichaam geeft vaak duidelijk aan dat het aandacht nodig heeft.</p>
            <p>JitanSports combineert kennis van training, houding en herstel. Daardoor kijken we niet alleen naar ontspanning, maar ook naar wat je lichaam nodig heeft om beter te blijven bewegen.</p>
          </div>
        </div>
      </section>

      <section className="bg-muted/30 px-4 py-16 md:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-amber-700">Behandelingen</p>
            <h2 className="text-3xl font-display font-bold text-secondary">Welke massage past bij jou?</h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {MASSAGE_TYPES.map((type) => (
              <div key={type.title} className="flex flex-col rounded-2xl border border-border bg-white p-6">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                    <type.icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-amber-700">{type.tag}</span>
                </div>
                <h3 className="mb-3 text-xl font-bold text-secondary">{type.title}</h3>
                <p className="mb-5 text-sm leading-relaxed text-muted-foreground">{type.desc}</p>
                <div className="mb-6 space-y-2">
                  {type.details.map((detail) => (
                    <div key={detail} className="flex items-start gap-2 text-sm text-foreground">
                      <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-auto border-t border-border pt-5">
                  <p className="mb-4 font-bold text-primary">{type.price}</p>
                  <Link to={type.link}>
                    <Button className="w-full gap-2 bg-secondary text-white hover:bg-secondary/90">
                      Meer informatie <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 md:py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                <Home className="h-5 w-5 text-primary" />
              </div>
              <span className="text-sm font-semibold uppercase tracking-wider text-amber-700">Massage aan huis</span>
            </div>
            <h2 className="mb-5 text-3xl font-display font-bold text-secondary">Wij komen naar jou toe</h2>
            <div className="space-y-4 leading-relaxed text-muted-foreground">
              <p>Wij komen met een professionele massagetafel bij jou thuis. Dat heeft een dubbel voordeel: je hebt geen reistijd naar een praktijk en je kunt na de behandeling direct in je eigen omgeving ontspannen.</p>
              <p>Daardoor kun je meer genieten van het effect van de massage en geef je lichaam en geest de ruimte om beter te herstellen.</p>
              <p>Massage aan huis is beschikbaar in omgeving Den Bosch, Rosmalen, Vught, Oss, Sint-Michielsgestel, Boxtel en omliggende plaatsen.</p>
            </div>
          </div>
          <div className="rounded-2xl bg-secondary p-8 text-white">
            <Sparkles className="mb-4 h-10 w-10 text-primary" />
            <h3 className="mb-3 text-2xl font-bold">VIP Treatment</h3>
            <p className="mb-6 text-white/72">
              De exclusieve combinatie van 1 uur personal training en 1 uur massage. Eerst inspanning, daarna ontspanning. Een complete reset in twee uur.
            </p>
            <Link to="/vip-treatment">
              <Button className="w-full gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
                Bekijk VIP Treatment <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-muted/30 px-4 py-16 md:py-20 lg:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-display font-bold text-secondary">Werkwijze</h2>
            <p className="mt-3 text-muted-foreground">Rustig, professioneel en afgestemd op jouw lichaam.</p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {[
              ['01', 'Intake', 'We bespreken je klachten, wensen en eventuele aandachtspunten.'],
              ['02', 'Behandeling', 'Ik stem druk, techniek en focusgebieden af op jouw lichaam.'],
              ['03', 'Hersteladvies', 'Je krijgt praktische tips voor rust, beweging en vervolgbehandeling.'],
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
          <h2 className="mb-8 text-center text-3xl font-display font-bold text-secondary">Veelgestelde vragen over massage</h2>
          <FAQAccordion items={FAQS} />
        </div>
      </section>

      <section className="bg-muted/30 px-4 py-10">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-5 text-xl font-display font-bold text-secondary">Massage in jouw omgeving</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              ['Massage aan huis Den Bosch', '/massage-aan-huis-den-bosch'],
              ['Sportmassage Den Bosch', '/sportmassage-den-bosch'],
              ['Deep Tissue Massage Den Bosch', '/deep-tissue-massage-den-bosch'],
              ['Massage Den Bosch', '/massage-den-bosch'],
            ].map(([label, path]) => (
              <Link key={path} to={path}>
                <Button variant="outline" size="sm" className="gap-1">
                  {label} <ArrowRight className="h-3 w-3" />
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CTASection
        dark
        title="Klaar om fitter, sterker en energieker te worden?"
        subtitle="Plan vandaag nog jouw gratis proefles of boek direct een massage aan huis."
      />
    </div>
  );
}
