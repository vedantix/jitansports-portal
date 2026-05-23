import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Dumbbell, Salad, Heart, Brain, Phone, Scale, BookOpen, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import CTASection from '../components/CTASection';
import FAQAccordion from '../components/FAQAccordion';

const INCLUSIONS = [
  { icon: Dumbbell, title: "2x per week personal training", desc: "24 sessies in 12 weken onder begeleiding van een ervaren coach" },
  { icon: Scale, title: "Regelmatige weegmomenten", desc: "Startmeting + iedere 4 weken lichaamsanalyse met rapport" },
  { icon: Salad, title: "Voedingsschema's op maat", desc: "Geen crashdiëten, maar haalbare schema's die bij jou passen" },
  { icon: BookOpen, title: "Koelkast-check", desc: "We kijken samen naar je keuken en maken slimme voedingskeuzes" },
  { icon: Heart, title: "Deep Tissue Massage", desc: "Eenmaal een krachtige massage voor herstel en prestatieverbetering" },
  { icon: Brain, title: "Mental Coaching", desc: "Positieve mindset, motivatie en het doorbreken van patronen" },
  { icon: Phone, title: "24/7 Support", desc: "Via app altijd bereikbaar voor vragen en ondersteuning" },
  { icon: Sparkles, title: "Voortgangsboekje", desc: "Houd jouw resultaten en mindset overzichtelijk bij" },
];

const FAQ = [
  { question: "Hoelang duurt het Get Fit Programma?", answer: "Het programma duurt 12 weken. In deze periode krijg je alle begeleiding die je nodig hebt." },
  { question: "Voor wie is het Get Fit Programma geschikt?", answer: "Voor iedereen die serieus aan de slag wil met fitness en gezondheid. Of je nu wilt afvallen, spiermassa opbouwen, of gewoon fitter wilt worden." },
  { question: "Moet ik al sportervaring hebben?", answer: "Nee, we passen alles aan op jouw niveau. Het programma is geschikt voor beginners tot gevorderden." },
  { question: "Zijn er nog plekken beschikbaar?", answer: "Het aantal plekken is beperkt om de kwaliteit van begeleiding te garanderen. Neem snel contact op!" },
];

export default function GetFit() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://media.base44.com/images/public/6a115e447a3ac96774309014/115f006bd_generated_a407f042.png" alt="Get Fit Programma" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/85 to-secondary/40" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-xl">
            <p className="text-primary font-semibold mb-3 uppercase tracking-wider text-sm">Get Fit Programma</p>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
              Fit in 12 weken
            </h1>
            <p className="text-white/80 text-lg">Het complete programma voor jouw transformatie.</p>
          </motion.div>
        </div>
      </section>

      {/* Price banner */}
      <section className="py-6 px-4 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-bold text-lg">Get Fit Pakket – €1.750,00</p>
            <p className="text-sm opacity-80">Beperkt aantal plekken beschikbaar!</p>
          </div>
          <Link to="/booking"><Button variant="secondary" className="gap-2">Meld Je Aan <ArrowRight className="w-4 h-4" /></Button></Link>
        </div>
      </section>

      {/* What's included */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary mb-4">Wat zit er inbegrepen?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Geen half werk, maar een complete aanpak op maat. Alles wat je nodig hebt in één krachtig pakket.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {INCLUSIONS.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="p-6 rounded-2xl bg-white border border-border/50 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-secondary mb-2 text-sm">{item.title}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-display font-bold text-secondary mb-6">Waarom het Get Fit Pakket?</h2>
          <div className="space-y-4 text-left">
            {[
              "Een alles-in-één pakket: sport, voeding, herstel én een goede mindset",
              "Geen standaard oplossing, maar maatwerk en een gerichte persoonlijke aanpak",
              "Exclusieve begeleiding gericht op het aanpassen van jouw patronen",
              "Resultaten die je kunt zien en voelen na 12 weken",
            ].map(t => (
              <div key={t} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-foreground">{t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-secondary mb-8 text-center">Veelgestelde Vragen</h2>
          <FAQAccordion items={FAQ} />
        </div>
      </section>

      <CTASection dark title="Ben jij klaar voor jouw transformatie?" subtitle="Beperkt aantal plekken – meld je vandaag nog aan!" />
    </div>
  );
}