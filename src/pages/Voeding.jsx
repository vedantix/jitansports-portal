import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Salad, Scale, BarChart2, Brain } from 'lucide-react';

import CTASection from '../components/CTASection';
import SEO from '@/components/SEO';

const HERO_IMG = 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=1200&q=75';
const CONTENT_IMG = 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=800&q=75';

const BENEFITS = [
  'Persoonlijk voedingsschema op maat',
  'Geen crashdieten – duurzame aanpak',
  'Afvallen én spiermassa opbouwen',
  'Maandelijkse lichaamsanalyse',
  'Koelkast-check en boodschappenlijst',
  '24/7 bereikbaar voor vragen',
  'Combineerbaar met personal training',
  'Aanpasbaar aan jouw voedingsvoorkeuren',
];

const SERVICES = [
  {
    icon: Salad,
    title: 'Voedingsschema op maat',
    desc: 'Op basis van jouw doelen, voorkeur en leefstijl stel ik een volledig persoonlijk voedingsschema samen. Geen standaard dieet, maar een plan dat bij jou past.',
    price: '€45 per schema',
  },
  {
    icon: Scale,
    title: 'Lichaamsanalyse en meting',
    desc: 'Met professionele apparatuur meten we lichaamsvet, spiermassa en BMI. Inclusief digitaal rapport zodat je je voortgang kunt bijhouden.',
    price: '€15 per meting',
  },
  {
    icon: BarChart2,
    title: 'Maandelijkse voortgangscheck',
    desc: 'Iedere 4 weken evalueren we je voortgang en stellen we het plan bij waar nodig. Zo blijven we op koers naar jouw doel.',
    price: 'Inbegrepen bij pakket',
  },
  {
    icon: Brain,
    title: 'Mental coaching en leefstijl',
    desc: 'Gezond eten is voor 80% mentaal. We werken ook aan gewoontes, triggers en een gezonde relatie met voeding.',
    price: 'Inbegrepen bij Get Fit',
  },
];

const FAQS = [
  {
    question: 'Moet ik calorieën tellen?',
    answer: 'Niet per se. We kijken naar wat bij jou past. Sommige mensen werken goed met calorieën, anderen liever met portiegroottes en voedingskeuzes.',
  },
  {
    question: 'Kan ik vegetarisch of veganistisch voedingsadvies krijgen?',
    answer: 'Ja. Het voedingsplan wordt volledig aangepast aan jouw voedingsvoorkeur of dieetwens.',
  },
  {
    question: 'Hoe snel zie ik resultaat met voedingsbegeleiding?',
    answer: 'De meeste klanten merken al binnen 2-4 weken verschil in energie en welzijn. Zichtbaar gewichtsverlies varieert per persoon.',
  },
  {
    question: 'Kan ik voedingsbegeleiding combineren met personal training?',
    answer: 'Absoluut, en dit is juist de krachtigste combinatie. Training en voeding versterken elkaar enorm.',
  },
];

export default function Voeding() {
  return (
    <div>
      <SEO
        title="Voedingscoach Den Bosch – Voedingsschema op Maat | JitanSports"
        description="Professionele voedingsbegeleiding in omgeving Den Bosch. Persoonlijk voedingsschema, lichaamsanalyse en coaching voor afvallen, spieropbouw en een gezondere leefstijl."
        path="/voeding"
      />

      <section className="relative h-[50vh] min-h-[400px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="Voedingsbegeleiding Den Bosch" className="w-full h-full object-cover" loading="eager" fetchPriority="high" decoding="async" />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 to-secondary/40" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-xl">
            <p className="text-primary font-semibold mb-3 uppercase tracking-wider text-sm">Voedingsbegeleiding</p>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
              Voedingscoach in omgeving Den Bosch
            </h1>
            <p className="text-white/80 text-lg">
              Persoonlijk voedingsadvies en schema op maat. Geen crashdieet, maar een leefstijl die werkt.
            </p>
          </div>
        </div>
      </section>

      <section className="py-5 px-4 bg-primary/10">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-secondary font-semibold">Gratis intake – ontdek welk voedingsplan bij jou past</p>
          <Link to="/booking"><Button className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2">Plan Intake <ArrowRight className="w-4 h-4" /></Button></Link>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-display font-bold text-secondary mb-6">Waarom voedingsbegeleiding?</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Trainen is belangrijk, maar voeding bepaalt voor 70-80% jouw resultaat. Of je nu wilt afvallen, spiermassa wilt opbouwen of gewoon meer energie wilt hebben — de juiste voeding maakt het verschil.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Als voedingscoach in omgeving Den Bosch werk ik met realistische plannen. Geen extreme diëten die je twee weken volhoudt, maar een aanpak die past bij jouw leven, smaak en routine.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              We starten altijd met een uitgebreid intakegesprek: jouw doelen, eetgewoontes, allergieën en voorkeur. Op basis daarvan stel ik een volledig persoonlijk voedingsschema samen.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {BENEFITS.map(b => (
                <div key={b} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-foreground text-sm">{b}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden h-80 lg:h-auto">
            <img src={CONTENT_IMG} alt="Voedingsschema Den Bosch" className="w-full h-full object-cover" loading="lazy" decoding="async" />
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-secondary">Wat bieden we aan?</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {SERVICES.map((item) => (
              <div key={item.title} className="p-6 rounded-2xl bg-white border border-border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-bold text-secondary">{item.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-3">{item.desc}</p>
                <p className="text-primary font-semibold text-sm">{item.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-secondary mb-6">Afvallen in omgeving Den Bosch</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Afvallen gaat niet alleen over minder eten. Het gaat over de juiste keuzes maken, op het juiste moment. Als voedingscoach in omgeving Den Bosch help ik je begrijpen hoe jouw lichaam werkt.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Met een goed voedingsschema en de juiste training van JitanSports behalen klanten gemiddeld 2-4 kg gewichtsverlies per maand op een veilige en duurzame manier.
          </p>
          <h2 className="text-3xl font-display font-bold text-secondary mb-6">Spieropbouw en voeding</h2>
          <p className="text-muted-foreground leading-relaxed">
            Wil je spieren opbouwen? Dan is voldoende eiwitinname cruciaal. Gecombineerd met personal training van JitanSports zul je sneller en effectiever resultaat bereiken.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-secondary mb-8 text-center">Veelgestelde vragen</h2>
          <div className="space-y-4">
            {FAQS.map((faq) => (
              <div key={faq.question} className="p-5 rounded-xl bg-white border border-border">
                <h3 className="font-bold text-secondary mb-2">{faq.question}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Klaar voor een persoonlijk voedingsplan?" subtitle="Plan een gratis intake en ontdek hoe voeding jouw doelen sneller laat bereiken." />
    </div>
  );
}