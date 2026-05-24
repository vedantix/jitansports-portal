import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Heart, Shield, Zap, Home, Star } from 'lucide-react';

import CTASection from '../components/CTASection';
import FAQAccordion from '../components/FAQAccordion';
import SEO from '@/components/SEO';

const HERO_IMG = 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1200&q=75';
const DTM_IMG = 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=800&q=75';
const RELAX_IMG = 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=800&q=75';

const MASSAGE_TYPES = [
  {
    icon: Zap,
    tag: 'Populairste keuze',
    title: 'Deep Tissue Massage',
    subtitle: 'Gericht op diepe spierlagen en bindweefsel',
    desc: 'Deep Tissue Massage is onze meest gevraagde behandeling. Met gerichte, stevige technieken bereiken we de diepste lagen van spieren en bindweefsel. Ideaal bij chronische spierspanning, rug- en nekklachten, sportblessures en overbelasting.',
    details: [
      'Behandelt chronische rug-, nek- en schouderklachten',
      'Losmaken van triggerpoints en verklevingen',
      'Verbetert doorbloeding en zuurstoftransport',
      'Versnelt herstel na sportblessures',
      'Vermindert spierspanning en stijfheid',
    ],
    price: '€75 / 60 min · €95 / 90 min',
    forWho: 'Sporters, kantoorwerkers met veel zitwerk, mensen met chronische klachten',
    img: DTM_IMG,
  },
  {
    icon: Heart,
    tag: 'Diepe ontspanning',
    title: 'Ontspanningsmassage',
    subtitle: 'Rust voor lichaam en geest',
    desc: 'De ontspanningsmassage richt zich op het volledig tot rust brengen van lichaam en geest. Met zachte, ritmische bewegingen en effleurage-technieken wordt de spanning in de spieren losgelaten en het zenuwstelsel gekalmeerd.',
    details: [
      'Vermindert stress en mentale vermoeidheid',
      'Verbetert slaapkwaliteit',
      'Verlaagt bloeddruk en hartslag',
      'Versterkt het immuunsysteem',
      'Geeft een diep gevoel van welbevinden',
    ],
    price: '€60 / 60 min · €80 / 90 min',
    forWho: 'Iedereen die ontspanning zoekt, mensen met stress, burn-out preventie',
    img: RELAX_IMG,
  },
  {
    icon: Shield,
    tag: 'Voor sporters',
    title: 'Sportmassage',
    subtitle: 'Prestaties verbeteren, herstel versnellen',
    desc: 'Sportmassage is specifiek gericht op sporters en actieve mensen. De behandeling kombineert verschillende technieken om spieren voor te bereiden op inspanning, de belastbaarheid te verhogen en het herstel na training te versnellen.',
    details: [
      'Voor- of natraining ter voorbereiding en herstel',
      'Preventie van sportblessures',
      'Sneller herstel door verbetering van circulatie',
      'Vermindering van DOMS (spierpijn na training)',
      'Verhoogde beweeglijkheid en flexibiliteit',
    ],
    price: '€65 / 60 min · €85 / 90 min',
    forWho: 'Recreatieve sporters, triathleten, hardlopers, fitnessliefhebbers',
    img: null,
  },
];

const FAQS = [
  { question: 'Hoe lang duurt een massagesessie?', answer: 'Massages zijn beschikbaar in 60 of 90 minuten. Voor chronische klachten en sporters raden we 90 minuten aan voor een uitgebreidere behandeling.' },
  { question: 'Komt de masseur aan huis in Den Bosch?', answer: 'Ja. JitanSports komt met een professionele massagetafel naar jou toe. Geen reiskosten voor locaties in omgeving Den Bosch, Rosmalen, Vught en Oss.' },
  { question: 'Hoe vaak moet ik een massage laten doen?', answer: 'Dit hangt af van jouw klachten en doelen. Bij acute klachten adviseren we wekelijks; voor onderhoud en welzijn maandelijks of tweemaandelijks.' },
  { question: 'Kan ik een massage combineren met personal training?', answer: 'Absoluut. De VIP Treatment combineert 1 uur personal training met 1 uur Deep Tissue Massage. Dit is de meest complete herstel- en trainingsSessione die we aanbieden.' },
  { question: 'Is Deep Tissue Massage pijnlijk?', answer: 'Deep Tissue Massage kan intensief aanvoelen op gespannen gebieden. We stemmen altijd de druk af op jouw comfortniveau. Na de behandeling is lichte spierpijn normaal – vergelijkbaar met de dag na een training.' },
  { question: 'Welke klachten behandelt Deep Tissue Massage?', answer: 'Deep Tissue Massage is effectief bij rug-, nek- en schouderklachten, spierspanning, triggerpoints, sportblessures, slechte houding en RSI-gerelateerde klachten.' },
];

export default function Massage() {
  return (
    <div>
      <SEO
        title="Massage Den Bosch – Deep Tissue, Sportmassage & Ontspanning | JitanSports"
        description="Professionele massage aan huis in omgeving Den Bosch. Deep Tissue Massage, Sportmassage en Ontspanningsmassage. Gecertificeerd therapeut. Boek vandaag bij JitanSports."
        path="/massage"
      />

      {/* Hero */}
      <section className="relative h-[55vh] min-h-[420px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="Massage Den Bosch" className="w-full h-full object-cover" loading="eager" fetchPriority="high" decoding="async" />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 to-secondary/40" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-xl">
            <p className="text-primary font-semibold mb-3 uppercase tracking-wider text-sm">Massagetherapie</p>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
              Massage aan huis in omgeving Den Bosch
            </h1>
            <p className="text-white/80 text-lg mb-8">
              Professionele Deep Tissue Massage, Sportmassage en Ontspanningsmassage. Gecertificeerd therapeut. Aan huis of op locatie.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/booking"><Button size="lg" className="bg-primary hover:bg-primary/90 text-secondary font-bold gap-2">Boek Een Massage <ArrowRight className="w-5 h-5" /></Button></Link>
              <Link to="/tarieven"><Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">Tarieven bekijken</Button></Link>
            </div>
            <div className="flex items-center gap-2 mt-6">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-primary text-primary" />)}
              <span className="text-white/80 text-sm ml-1">5.0 · Meer dan 30 massagereviews</span>
            </div>
          </div>
        </div>
      </section>

      {/* Banner */}
      <section className="py-5 px-4 bg-primary/10">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-secondary font-semibold">✓ Aan huis in Den Bosch · ✓ Geen reiskosten · ✓ Professionele massagetafel</p>
          <Link to="/booking"><Button className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2">Direct Boeken <ArrowRight className="w-4 h-4" /></Button></Link>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-display font-bold text-secondary mb-6">Massagetherapie in omgeving Den Bosch</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
            <p>
              JitanSports biedt professionele massagetherapie aan huis in omgeving Den Bosch. Als gecertificeerd massagetherapeut met specialisatie in Deep Tissue Massage en sportmassage help ik mensen van chronische pijn, spierspanning en sportklachten af.
            </p>
            <p>
              Mijn massages zijn resultaatgericht. Of je nu last hebt van een stijve nek na werkdagen achter de computer, spierpijn na intensieve trainingen of jarenlange rugklachten – ik ga naar de kern van het probleem.
            </p>
          </div>
        </div>
      </section>

      {/* Massage types */}
      <section className="py-8 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-display font-bold text-secondary">Onze massagebehandelingen</h2>
          </div>
          {MASSAGE_TYPES.map((type, i) => (
            <div
              key={type.title}
              className="rounded-2xl bg-white border border-border overflow-hidden"
            >
              <div className={`grid grid-cols-1 ${type.img ? 'lg:grid-cols-2' : ''} gap-0`}>
                {type.img && (
                  <div className={`h-64 lg:h-auto ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <img src={type.img} alt={type.title} className="w-full h-full object-cover" loading="lazy" decoding="async" />
                  </div>
                )}
                <div className={`p-8 ${i % 2 === 1 && type.img ? 'lg:order-1' : ''}`}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <type.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-sm font-semibold text-amber-700 bg-primary/10 px-3 py-1 rounded-full">{type.tag}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-secondary mb-1">{type.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{type.subtitle}</p>
                  <p className="text-muted-foreground leading-relaxed mb-5">{type.desc}</p>
                  <div className="space-y-2 mb-5">
                    {type.details.map(d => (
                      <div key={d} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground">{d}</span>
                      </div>
                    ))}
                  </div>
                  <div className="pt-4 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                    <div>
                      <p className="text-primary font-bold">{type.price}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">Voor wie: {type.forWho}</p>
                    </div>
                    <Link to="/booking"><Button className="bg-secondary hover:bg-secondary/90 text-white gap-2 shrink-0">Boek {type.title} <ArrowRight className="w-4 h-4" /></Button></Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Aan huis */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Home className="w-5 h-5 text-primary" />
              </div>
              <span className="text-amber-700 font-semibold text-sm uppercase tracking-wider">Massage aan huis</span>
            </div>
            <h2 className="text-3xl font-display font-bold text-secondary mb-5">Massage aan huis in omgeving Den Bosch</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Een van de grootste voordelen van JitanSports is dat we naar jou toe komen. We brengen onze professionele massagetafel, lakens en alle benodigde materialen mee. Jij hoeft niets te doen dan te ontspannen.
              </p>
              <p>
                Massage aan huis heeft duidelijke voordelen ten opzichte van een massagepraktijk. Je hoeft na de behandeling niet meer in de auto te stappen. Je kunt direct na de massage rusten in jouw eigen comfortabele omgeving – wat het hersteleffect significant vergroot.
              </p>
              <p>
                We bieden massage aan huis aan in heel omgeving Den Bosch: Den Bosch, Rosmalen, Vught, Oss, Sint-Michielsgestel, Boxtel en omstreken. Geen reiskosten voor locaties in het standaard werkgebied.
              </p>
            </div>
          </div>
          <div className="p-8 rounded-2xl bg-secondary text-white">
            <h3 className="text-xl font-bold mb-5">VIP Treatment</h3>
            <p className="text-white/70 mb-6 leading-relaxed">
              De ultieme combinatie: 1 uur personal training direct gevolgd door 1 uur Deep Tissue Massage. De complete reset voor lichaam en geest.
            </p>
            <div className="flex items-center justify-between mb-6 pb-6 border-b border-white/10">
              <span className="text-white/70">1 uur Personal Training + 1 uur Massage</span>
              <span className="text-primary font-bold text-xl">€190</span>
            </div>
            <div className="space-y-2 mb-6">
              {['Aan huis of op locatie', 'Geen extra kosten', 'Complete reset in 2 uur', 'Ideaal cadeau'].map(item => (
                <div key={item} className="flex items-center gap-2 text-sm text-white/80">
                  <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <Link to="/vip-treatment"><Button className="w-full bg-primary hover:bg-primary/90 text-secondary font-bold gap-2">Bekijk VIP Treatment <ArrowRight className="w-4 h-4" /></Button></Link>
          </div>
        </div>
      </section>

      {/* Klachten sectie */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-display font-bold text-secondary">Massagetherapie voor jouw klachten</h2>
            <p className="text-muted-foreground mt-3">Herken jij één van deze klachten? Massage kan helpen.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              'Chronische rugpijn',
              'Stijve nek en schouders',
              'Hoofdpijn door spierspanning',
              'RSI en repetitieve overbelasting',
              'Spierpijn na training',
              'Stress en burnout preventie',
              'Slechte houding',
              'Blessure herstel',
              'Whiplash gevolgen',
              'Herstellen na operatie',
            ].map(klacht => (
              <div key={klacht} className="flex items-center gap-3 p-3 rounded-lg bg-white border border-border">
                <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                <span className="text-sm text-foreground">{klacht}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-secondary mb-8 text-center">Veelgestelde vragen over massage</h2>
          <FAQAccordion items={FAQS} />
        </div>
      </section>

      {/* Local SEO */}
      <section className="py-10 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-xl font-display font-bold text-secondary mb-5">Massage in jouw omgeving</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              ['Sportmassage Den Bosch', '/sportmassage-den-bosch'],
              ['Deep Tissue Massage Den Bosch', '/deep-tissue-massage-den-bosch'],
              ['Massage Den Bosch', '/massage-den-bosch'],
            ].map(([label, path]) => (
              <Link key={path} to={path}><Button variant="outline" size="sm" className="gap-1">{label} <ArrowRight className="w-3 h-3" /></Button></Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection dark title="Boek jouw massage in omgeving Den Bosch" subtitle="Aan huis. Professioneel. Geen reiskosten. Snel geboekt." />
    </div>
  );
}