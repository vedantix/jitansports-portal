import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Dumbbell, Salad, Heart, Brain, Phone, Scale, Star, Trophy } from 'lucide-react';

import CTASection from '../components/CTASection';
import FAQAccordion from '../components/FAQAccordion';
import SEO from '@/components/SEO';

const HERO_IMG = 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1200&q=75';

const INCLUSIONS = [
  { icon: Dumbbell, title: '24x Personal Training', desc: '2x per week intensieve 1-op-1 training, volledig op maat. Aan huis of outdoor in omgeving Den Bosch.' },
  { icon: Salad, title: 'Voedingsschema op maat', desc: 'Persoonlijk voedingsplan dat past bij jouw doelen en voorkeur. Geen crashdieet, maar een leefstijl.' },
  { icon: Scale, title: '3x Lichaamsanalyse', desc: 'Startmeting, tussenmeting en eindmeting. We meten vetpercentage, spiermassa en BMI.' },
  { icon: Heart, title: '1x Deep Tissue Massage', desc: 'Halverwege het programma een volledige Deep Tissue Massage voor herstel en ontspanning.' },
  { icon: Brain, title: 'Mental coaching', desc: 'Aandacht voor mindset, motivatie en een gezonde relatie met eten en bewegen.' },
  { icon: Phone, title: '24/7 WhatsApp support', desc: 'Vragen tussendoor? Ik sta altijd voor je klaar. Snel en persoonlijk antwoord.' },
];

const RESULTS = [
  { name: 'Lisa B.', city: 'Vught', result: '8 kg afgevallen', text: 'In 12 weken heb ik niet alleen mijn doelen bereikt maar ook mijn relatie met eten en bewegen veranderd. Het is een compleet programma – training, voeding én mentale coaching.' },
  { name: 'Frank D.', city: 'Rosmalen', result: 'Fit na je 47ste', text: 'Op mijn 47e dacht ik dat het te laat was. Jitan heeft me het tegendeel bewezen. Na 12 weken voel ik me 10 jaar jonger. Geweldige begeleiding.' },
  { name: 'Anouk K.', city: 'Den Bosch', result: '+6 kg spiermassa', text: 'Ik wilde sterker worden en meer spiermassa opbouwen. Het Get Fit programma heeft me daar in 12 weken bij geholpen. Resultaat zichtbaar, aanpak professioneel.' },
];

const FAQS = [
  { question: 'Wat kost het Get Fit Programma?', answer: 'Het Get Fit Programma kost €595 voor 12 weken. Dit is inclusief 24 trainingen, voedingsschema, 3 lichaamsanalyses, 1 massage en doorlopende coaching via WhatsApp.' },
  { question: 'Hoe intensief is het programma?', answer: 'Je traint 2x per week met een personal trainer. Daarnaast volg je het voedingsplan en doe je eventueel zelfstandige activiteiten. Het is uitdagend maar volledig aangepast aan jouw niveau.' },
  { question: 'Kan ik starten als absolute beginner?', answer: 'Ja. Het Get Fit Programma is geschikt voor alle niveaus, van absolute beginner tot ervaren sporter. Het programma start altijd op jouw niveau.' },
  { question: 'Wat als ik ziek word of een sessie moet missen?', answer: 'Geen zorgen. Gemiste sessies worden altijd ingehaald. Bij ziekte of afwezigheid passen we het schema flexibel aan.' },
  { question: 'Wanneer kan ik starten?', answer: 'Je kunt op elk moment starten. Eerst plannen we een gratis intake. Daarna starten we zodra het voor jou uitkomt.' },
];

export default function GetFit() {
  return (
    <div>
      <SEO
        title="Get Fit Programma – 12 Weken Personal Training Den Bosch | JitanSports"
        description="Het Get Fit Programma van JitanSports: 12 weken personal training, voedingsbegeleiding, lichaamsanalyse en massage. Transformeer jouw lichaam in omgeving Den Bosch."
        path="/get-fit"
      />

      {/* Hero */}
      <section className="relative h-[60vh] min-h-[480px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="Get Fit Programma JitanSports" className="w-full h-full object-cover" loading="eager" fetchPriority="high" decoding="async" />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/85 to-secondary/30" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 bg-primary text-primary-foreground text-sm font-bold px-4 py-1.5 rounded-full mb-5">
              <Trophy className="w-4 h-4" /> 12-Weken Transformatie
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-4 leading-tight">
              GET FIT<br /><span className="text-primary">PROGRAMMA</span>
            </h1>
            <p className="text-white/80 text-lg mb-6">
              De meest complete aanpak van JitanSports. 12 weken personal training, voedingsbegeleiding, massage en coaching. Volledig op maat. Gegarandeerd resultaat.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link to="/booking"><Button size="lg" className="bg-primary hover:bg-primary/90 text-secondary font-bold gap-2">Start Jouw Transformatie <ArrowRight className="w-5 h-5" /></Button></Link>
              <a href="https://wa.me/31612345678"><Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">Meer informatie</Button></a>
            </div>
          </div>
        </div>
      </section>

      {/* Price banner */}
      <section className="py-6 px-4 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-bold text-xl">Get Fit Programma – €595</p>
            <p className="text-sm opacity-80">12 weken · 24 trainingen · Voeding + Massage inbegrepen · Volledig op maat</p>
          </div>
          <Link to="/booking"><Button variant="secondary" className="gap-2 font-semibold">Gratis Intake Plannen <ArrowRight className="w-4 h-4" /></Button></Link>
        </div>
      </section>

      {/* Problem/Solution */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-display font-bold text-secondary mb-6">Herken jij dit?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left mb-12">
            {[
              'Je weet niet waar te beginnen met sporten',
              'Je begint steeds opnieuw maar geeft het op',
              'Je voeding is chaotisch en inconsistent',
              'Je traint maar ziet geen resultaat',
              'Je hebt te weinig tijd voor een sportschool',
              'Je wil echt een aanpak die bij je past',
            ].map(item => (
              <div key={item} className="flex items-start gap-3 p-4 rounded-lg bg-muted/50">
                <span className="text-red-400 text-lg">✗</span>
                <span className="text-muted-foreground text-sm">{item}</span>
              </div>
            ))}
          </div>
          <div className="p-8 rounded-2xl bg-secondary text-white">
            <h3 className="text-2xl font-bold mb-3">Dan is het Get Fit Programma voor jou</h3>
            <p className="text-white/80 leading-relaxed">
              In 12 weken brengen we structuur, consistentie en resultaat. Jij traint niet alleen – jij hebt een coach die met je meedenkt, je motiveert en je bij de hand neemt tot je doel is bereikt.
            </p>
          </div>
        </div>
      </section>

      {/* Inclusions */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-secondary">Wat zit er in het programma?</h2>
            <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
              Het Get Fit Programma is de meest complete aanpak van JitanSports. Alles wat je nodig hebt, zit erin.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {INCLUSIONS.map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-2xl bg-white border border-border hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-secondary mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-secondary">Hoe zien 12 weken eruit?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { weeks: 'Week 1-4', title: 'Fundament', icon: '🏗️', items: ['Intake en nulmeting', 'Persoonlijk trainingsplan', 'Voedingsschema', 'Eerste 8 trainingen', 'Techniek en gewenning'] },
              { weeks: 'Week 5-8', title: 'Progressie', icon: '📈', items: ['Intensiteit verhogen', 'Tussenmeting week 6', 'Plan bijstellen', 'Volgende 8 trainingen', 'Deep Tissue Massage'] },
              { weeks: 'Week 9-12', title: 'Resultaat', icon: '🏆', items: ['Hoogste intensiteit', 'Laatste 8 trainingen', 'Eindmeting week 12', 'Uitgebreid eindrapport', 'Plan voor daarna'] },
            ].map((phase) => (
              <div key={phase.weeks} className="p-6 rounded-2xl border border-border bg-muted/30">
                <div className="text-3xl mb-3">{phase.icon}</div>
                <p className="text-primary font-semibold text-sm mb-1">{phase.weeks}</p>
                <h3 className="font-bold text-secondary text-lg mb-4">{phase.title}</h3>
                <ul className="space-y-2">
                  {phase.items.map(item => (
                    <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-display font-bold text-secondary">Resultaten van Get Fit-deelnemers</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {RESULTS.map((r) => (
              <div key={r.name} className="p-6 rounded-2xl bg-white border border-border">
                <div className="flex gap-0.5 mb-3">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-primary text-primary" />)}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed italic mb-4">"{r.text}"</p>
                <div className="pt-4 border-t border-border flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-secondary text-sm">{r.name} · {r.city}</p>
                  </div>
                  <span className="text-xs font-semibold text-amber-700 bg-primary/10 px-2 py-1 rounded-full">{r.result}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-secondary mb-8 text-center">Veelgestelde vragen</h2>
          <FAQAccordion items={FAQS} />
        </div>
      </section>

      <CTASection dark title="Klaar voor jouw 12-weken transformatie?" subtitle="Gratis intake – ontdek of het Get Fit Programma bij jou past. Geen verplichtingen." />
    </div>
  );
}