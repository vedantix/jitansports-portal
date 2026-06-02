import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Users, Clock, Dumbbell, Home, TreePine, Trophy, Heart } from 'lucide-react';
import CTASection from '../components/CTASection';
import FAQAccordion from '../components/FAQAccordion';
import SEO from '@/components/SEO';
import ResponsiveImage from '@/components/ResponsiveImage';
import PageHero from '@/components/PageHero';
import ServiceReviews from '@/components/ServiceReviews';

const HERO_IMG = '/images/optimized/page-training-hero-960.jpg';
const OUTDOOR_IMG = '/images/optimized/gallery-outdoor-thumb-640.jpg';
const HOME_IMG = '/images/optimized/service-training-card-720.jpg';

const BENEFITS = [
  'Volledig persoonlijk trainingsschema op maat',
  'Training aan huis of outdoor in omgeving Den Bosch',
  'Voedingsbegeleiding inbegrepen bij elk pakket',
  'Maandelijkse lichaamsanalyse en voortgangsmeting',
  "Flexibele tijden – ook 's avonds en in het weekend",
  'Geen reiskosten in het werkgebied Den Bosch',
  'Gratis kennismakingsgesprek en proefles',
  'Ondersteuning via WhatsApp tussen sessies',
];

const TARGETS = [
  { icon: Dumbbell, title: 'Spieropbouw', desc: 'Opbouwen van spiermassa met een wetenschappelijk onderbouwd krachtprogramma en de juiste voeding.' },
  { icon: Heart, title: 'Afvallen', desc: 'Duurzaam gewichtsverlies zonder crashdiëten. Combinatie van training en voedingsbegeleiding.' },
  { icon: Trophy, title: 'Conditieverbetering', desc: 'Beter uithoudingsvermogen, meer energie en een betere cardiovasculaire gezondheid.' },
  { icon: Users, title: 'Blessure herstel', desc: 'Veilig en progressief terugkeren naar sport na een blessure, onder professionele begeleiding.' },
  { icon: Clock, title: '40+ fit blijven', desc: 'Specifiek op leeftijd afgestemd programma voor spierbehoud, mobiliteit en vitaliteit.' },
  { icon: Home, title: 'Zwangerschapstraining', desc: 'Veilig trainen voor, tijdens en na de zwangerschap met een gecertificeerde trainer.' },
];

const FAQS = [
  { question: 'Wat kost een personal trainer bij JitanSports?', answer: 'Je start altijd met een gratis proefles. Daarna bieden we verschillende pakketten aan. Een losse sessie kost €75. Pakketten van 5, 10 of 20 sessies zijn beschikbaar met korting. Bekijk onze tarievenpagina voor actuele prijzen.' },
  { question: 'Moet ik eigen materiaal hebben voor training thuis?', answer: 'Nee. JitanSports brengt al het benodigde materiaal mee naar jou toe. Van resistance bands en kettlebells tot springtouwen en mat. Jij hoeft niets te regelen.' },
  { question: 'Hoe snel zie ik resultaat met personal training?', answer: 'De meeste klanten voelen al na 4-6 weken merkbaar verschil in energie, kracht en conditie. Zichtbare verandering in lichaamsvorm is doorgaans na 8-12 weken zichtbaar, afhankelijk van frequentie en consistentie.' },
  { question: 'Kan ik trainen als ik een blessure heb?', answer: 'Ja. We stellen het programma altijd aan op jouw situatie. Bij blessures werken we met een zorgvuldig opgebouwd revalidatieprogramma in overleg met jouw arts of fysiotherapeut.' },
  { question: 'Biedt JitanSports ook duo-training aan?', answer: 'Ja. Je kunt samen met een partner, vriend of familielid trainen. Duo-training biedt de extra motivatie van samen sporten tegen een aantrekkelijker tarief per persoon.' },
  { question: 'Welke gebieden bedient JitanSports?', answer: 'JitanSports is actief in heel omgeving Den Bosch: Den Bosch, Rosmalen, Vught, Oss, Sint-Michielsgestel, Boxtel en omliggende gemeenten. Geen reiskosten binnen het standaard werkgebied.' },
];

export default function PersonalTraining() {
  return (
    <div>
      <SEO
        title="Personal Trainer Den Bosch – Aan Huis en Outdoor | JitanSports"
        description="Personal trainer in Den Bosch, Rosmalen, Vught en Oss. 1-op-1 training aan huis of outdoor. Voedingsbegeleiding inbegrepen. Gratis proefles. Plan vandaag bij JitanSports."
        path="/personal-training"
      />

      <PageHero
        image={HERO_IMG}
        eyebrow="Personal Training"
        title="Personal Training in Den Bosch"
        subtitle="Word fitter, sterker, energieker en zelfverzekerder met 1-op-1 begeleiding aan huis of outdoor. Op jouw tempo, met een plan dat bij jou past."
        contentClassName="max-w-xl"
        overlayClassName="bg-gradient-to-r from-secondary/90 to-secondary/40"
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link to="/booking">
            <Button size="lg" className="w-full gap-2 bg-primary font-bold text-secondary hover:bg-primary/90 sm:w-auto">
              Plan Gratis Proefles <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
          <Link to="/tarieven">
            <Button size="lg" variant="outline" className="w-full border-white/30 text-white hover:bg-white/10 sm:w-auto">
              Bekijk tarieven
            </Button>
          </Link>
        </div>
      </PageHero>

      {/* Banner */}
      <section className="py-5 px-4 bg-primary/10">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-secondary font-semibold">Gratis proefles · Training aan huis · Voeding inbegrepen</p>
          <Link to="/booking"><Button className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2">Direct Boeken <ArrowRight className="w-4 h-4" /></Button></Link>
        </div>
      </section>

      {/* Intro + benefits */}
      <section className="px-4 py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-3xl font-display font-bold text-secondary mb-6">Wat is personal training bij JitanSports?</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
              <p>
                Personal training bij JitanSports is anders dan wat je gewend bent van een sportschool. Er is geen afleiding, geen wachttijden en geen generieke programma's. Jij staat centraal – van de eerste intake tot de laatste meter.
              </p>
              <p>
                We beginnen altijd met een uitgebreid intakegesprek. Ik wil jou leren kennen: jouw doelen, jouw huidige fitnessniveau, eventuele blessures, jouw dagritme en jouw voedingspatroon. Op basis daarvan stel ik een volledig persoonlijk trainingsplan samen.
              </p>
              <p>
                Elke sessie begeleid ik jou door de training, corrigeer ik de techniek, pas ik de intensiteit aan en motiveer ik jou wanneer het zwaar wordt. Na de sessie ontvang jij feedback en tips voor herstel en voeding.
              </p>
              <p>
                Maandelijks voeren we een lichaamsanalyse uit. Zo meten we niet alleen gewicht maar ook vetpercentage en spiermassa – de echte indicatoren van vooruitgang.
              </p>
            </div>
            <div className="space-y-3">
              {BENEFITS.map(b => (
                <div key={b} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-foreground text-sm">{b}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-5">
            {[
              { icon: Home, title: 'Training aan huis', desc: 'JitanSports komt naar jou toe met alle benodigde materialen. In omgeving Den Bosch, Rosmalen, Vught, Oss en omstreken. Geen reiskosten.', color: 'bg-primary/10' },
              { icon: TreePine, title: 'Outdoor training', desc: 'Training in het park, bos of op een andere buitenlocatie. De natuur zorgt voor extra motivatie en een gevarieerde trainingsomgeving.', color: 'bg-secondary/5' },
              { icon: Users, title: 'Duo-training', desc: 'Train samen met een vriend, partner of familielid. Gezelligheid en motivatie – voor een aantrekkelijk tarief per persoon.', color: 'bg-primary/5' },
            ].map((item) => (
              <div key={item.title} className={`p-6 rounded-2xl border border-border ${item.color}`}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-bold text-secondary">{item.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Voor wie */}
      <section className="px-4 py-16 md:py-20 lg:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-amber-700 font-semibold uppercase tracking-wider text-sm mb-2">Voor iedereen</p>
            <h2 className="text-3xl font-display font-bold text-secondary">Voor wie is personal training geschikt?</h2>
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
              Personal training bij JitanSports is niet alleen voor fanatieke sporters. Het is voor iedereen die doelgericht aan zijn of haar gezondheid wil werken.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {TARGETS.map((item) => (
              <div key={item.title} className="p-6 rounded-2xl bg-white border border-border hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-bold text-secondary mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training aan huis */}
      <section className="px-4 py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="aspect-[4/3] overflow-hidden rounded-2xl lg:aspect-[16/10]">
            <ResponsiveImage src={HOME_IMG} alt="Personal Training aan huis Den Bosch" className="w-full h-full object-cover" sizes="(min-width: 1024px) 50vw, 100vw" />
          </div>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <h2 className="text-3xl font-display font-bold text-secondary">Training aan huis in Den Bosch</h2>
            <p>
              Training aan huis is de meest comfortabele en efficiënte manier om te sporten. JitanSports komt naar jou toe – met alle benodigde materialen. Jij hoeft niets voor te bereiden.
            </p>
            <p>
              De voordelen zijn aanzienlijk: geen reistijd naar een sportschool, geen parkeerkosten, geen wachttijden op apparatuur en geen intimiderende omgeving. Je traint in je eigen vertrouwde omgeving, op het moment dat het jou het beste uitkomt.
            </p>
            <p>
              JitanSports biedt training aan huis in heel omgeving Den Bosch: in Den Bosch zelf, maar ook in Rosmalen, Vught, Oss, Sint-Michielsgestel, Boxtel en omliggende gemeenten.
            </p>
            <Link to="/booking"><Button className="bg-secondary hover:bg-secondary/90 text-white gap-2 mt-2">Plan Proefles Aan Huis <ArrowRight className="w-4 h-4" /></Button></Link>
          </div>
        </div>
      </section>

      {/* Outdoor */}
      <section className="px-4 py-16 md:py-20 lg:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <h2 className="text-3xl font-display font-bold text-secondary">Outdoor training in omgeving Den Bosch</h2>
            <p>
              Den Bosch en omstreken bieden prachtige locaties voor outdoor training. Parken, bossen en open velden zijn de trainingslocatie van veel JitanSports-klanten.
            </p>
            <p>
              Outdoor trainen heeft unieke voordelen: frisse lucht, daglicht en de natuur dragen bij aan een betere stemming, hogere motivatie en een dieper ontspannen gevoel na de training.
            </p>
            <p>
              We trainen bij elk type weer. Bij extreme omstandigheden schakelen we soepel over naar training aan huis.
            </p>
          </div>
          <div className="aspect-[4/3] overflow-hidden rounded-2xl lg:aspect-[16/10]">
            <ResponsiveImage src={OUTDOOR_IMG} alt="Outdoor Personal Training Den Bosch" className="w-full h-full object-cover" sizes="(min-width: 1024px) 50vw, 100vw" />
          </div>
        </div>
      </section>

      {/* Werkwijze */}
      <section className="px-4 py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-secondary">Werkwijze</h2>
            <p className="text-muted-foreground mt-3">Van eerste contact tot blijvend resultaat</p>
          </div>
          <div className="space-y-6">
            {[
              { step: '01', title: 'Gratis intake en kennismaking', desc: 'We bespreken jouw doelen, fitnesshistorie, eventuele blessures en wensen. Geheel vrijblijvend en kosteloos.' },
              { step: '02', title: 'Persoonlijk plan op maat', desc: 'Op basis van de intake stel ik een trainingsschema, voedingsplan en doelstellingen op, volledig afgestemd op jouw lichaam en situatie.' },
              { step: '03', title: 'Training en begeleiding', desc: 'We starten met de eerste sessies. Ik begeleid jou door elke training, zorg voor correcte techniek en pas de intensiteit progressief aan.' },
              { step: '04', title: 'Maandelijkse meting en evaluatie', desc: 'Elke maand meten we jouw voortgang met een lichaamsanalyse. We evalueren het plan en sturen bij waar nodig.' },
              { step: '05', title: 'Duurzaam resultaat en zelfstandigheid', desc: 'Het doel is niet alleen dat je resultaat bereikt, maar ook dat je leert hoe je dit zelf kunt onderhouden.' },
            ].map((step) => (
              <div key={step.step} className="flex gap-5 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold flex items-center justify-center text-sm">{step.step}</div>
                <div>
                  <h3 className="font-bold text-secondary mb-1">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local SEO links */}
      <section className="py-12 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-display font-bold text-secondary mb-6">Personal trainer in jouw gemeente</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              ['Personal Trainer Den Bosch', '/personal-trainer-den-bosch'],
              ['Personal Trainer Rosmalen', '/personal-trainer-rosmalen'],
              ['Personal Trainer Vught', '/personal-trainer-vught'],
              ['Personal Trainer Oss', '/personal-trainer-oss'],
            ].map(([label, path]) => (
              <Link key={path} to={path}>
                <Button variant="outline" size="sm" className="gap-1">{label} <ArrowRight className="w-3 h-3" /></Button>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-secondary mb-8 text-center">Veelgestelde vragen</h2>
          <FAQAccordion items={FAQS} />
        </div>
      </section>

      <ServiceReviews title="Resultaten met personal training op jouw tempo" />

      <CTASection title="Klaar om fitter, sterker en energieker te worden?" subtitle="Plan vandaag nog jouw gratis proefles. Geen verplichtingen, geen kosten." />
    </div>
  );
}
