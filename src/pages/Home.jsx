import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, MessageCircle, Dumbbell, Salad, Heart, Sparkles, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import CTASection from '../components/CTASection';
import ReviewSlider from '../components/ReviewSlider';
import FAQAccordion from '../components/FAQAccordion';

const WA_URL = "https://wa.me/31682272680?text=Hallo%20JitanSports%2C%20ik%20wil%20graag%20een%20gratis%20proefles%20aanvragen.";

const USPS = [
  "Gratis proefles",
  "Personal training aan huis",
  "Outdoor trainingen",
  "Voedingsbegeleiding",
  "Deep Tissue Massage",
];

const SERVICES = [
  { icon: Dumbbell, title: "Personal Training", desc: "Op maat gemaakte trainingen bij jou thuis of buiten in de natuur. Effectief en persoonlijk.", path: "/personal-training" },
  { icon: Salad, title: "Voedingsbegeleiding", desc: "Een voedingsplan dat past bij jouw doelen, leefstijl en voorkeuren. Geen crashdiëten.", path: "/tarieven" },
  { icon: Heart, title: "Deep Tissue Massage", desc: "Krachtige massage die blokkades verhelpt en chronische klachten vermindert.", path: "/massage" },
  { icon: Sparkles, title: "Lifestyle Coaching", desc: "Holistische begeleiding voor een gezondere lifestyle. Training, voeding en mindset.", path: "/get-fit" },
];

const SERVICE_CARDS = [
  { title: "Personal Training", desc: "Outdoor & aan huis", path: "/personal-training", img: "https://media.base44.com/images/public/6a115e447a3ac96774309014/77461c012_generated_cb61b25a.png" },
  { title: "Massage", desc: "Deep Tissue & Ontspanning", path: "/massage", img: "https://media.base44.com/images/public/6a115e447a3ac96774309014/f2afe8ff0_generated_c71cfae0.png" },
  { title: "Get Fit Programma", desc: "12 weken totaalpakket", path: "/get-fit", img: "https://media.base44.com/images/public/6a115e447a3ac96774309014/115f006bd_generated_a407f042.png" },
  { title: "Voedingsbegeleiding", desc: "Op maat gemaakt plan", path: "/tarieven", img: "https://media.base44.com/images/public/6a115e447a3ac96774309014/115f006bd_generated_a407f042.png" },
];

const FAQ_ITEMS = [
  { question: "Is de eerste proefles echt gratis?", answer: "Ja! De eerste proefles bij JitanSports is volledig gratis en vrijblijvend. Zo kunnen we elkaar leren kennen en kun jij bepalen of onze training bij je past." },
  { question: "Waar vinden de trainingen plaats?", answer: "Wij trainen buiten in de natuur of bij jou thuis. Jij kiest de plek waar jij je het meest prettig voelt. Wij nemen alle benodigde sportmaterialen mee." },
  { question: "Hoe vaak moet ik per week trainen?", answer: "Met slechts één training per week kunnen we al hele mooie resultaten behalen. Uiteraard kun je ook vaker trainen als je dat wilt." },
  { question: "Kan ik samen met iemand trainen?", answer: "Zeker! Duo-trainingen zijn mogelijk. Iedere extra persoon betaalt slechts €10,- extra per sessie." },
  { question: "Wat houdt de Deep Tissue Massage in?", answer: "Deep Tissue Massage is een krachtige massage waarbij vastzittend bindweefsel wordt losgemaakt. Dit helpt bij chronische klachten zoals nek-, schouder- en rugpijn." },
  { question: "Bieden jullie ook voedingsadvies?", answer: "Ja, wij bieden persoonlijke voedingsschema's aan, afgestemd op jouw doelen. Geen crashdiëten, maar een haalbaar plan dat bij jou past." },
  { question: "Wat is het Get Fit Pakket?", answer: "Het Get Fit Pakket is een 12-weken totaalprogramma met personal training (2x per week), voedingsschema's, weegmomenten, Deep Tissue Massage, mental coaching en 24/7 support." },
  { question: "Voor wie is JitanSports geschikt?", answer: "JitanSports is geschikt voor iedereen! Of je nu wilt afvallen, spiermassa opbouwen, fitter worden of van klachten af wilt. We passen alles aan op jouw niveau en tempo." },
  { question: "Komen jullie ook aan huis voor massage?", answer: "Ja! Wij komen met onze professionele massagetafel bij jou thuis. Zo kun je na de massage direct in je eigen omgeving ontspannen." },
  { question: "Hoe kan ik een afspraak maken?", answer: "Je kunt eenvoudig een afspraak maken via onze website, telefonisch (06 82 27 26 80) of via WhatsApp. We reageren snel!" },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://media.base44.com/images/public/6a115e447a3ac96774309014/b6edaf9c7_generated_18c500fb.png" alt="JitanSports Personal Training" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/70 to-secondary/30" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white leading-tight mb-6">
              Word fitter, sterker en energieker met{' '}
              <span className="text-primary">persoonlijke begeleiding</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/80 mb-8 leading-relaxed">
              Personal training, voedingsadvies en massage in één compleet traject.
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              {USPS.map(usp => (
                <span key={usp} className="flex items-center gap-2 text-sm text-white/90 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <CheckCircle className="w-4 h-4 text-primary shrink-0" /> {usp}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/booking">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8 gap-2 text-base w-full sm:w-auto">
                  Plan Gratis Proefles <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <a href={WA_URL} target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 gap-2 w-full sm:w-auto">
                  <MessageCircle className="w-5 h-5" /> WhatsApp Contact
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why JitanSports */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">Waarom JitanSports</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary">
              Het beste van twee werelden
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link to={s.path} className="group block p-8 rounded-2xl bg-white border border-border/50 hover:border-primary/30 hover:shadow-xl transition-all duration-300 h-full">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                    <s.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-secondary mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">Klantervaringen</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary">
              Wat onze klanten zeggen
            </h2>
          </div>
          <ReviewSlider />
        </div>
      </section>

      {/* Services overview */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">Onze Diensten</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary">
              Ontdek ons aanbod
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {SERVICE_CARDS.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link to={card.path} className="group relative block rounded-2xl overflow-hidden h-64 sm:h-72">
                  <img src={card.img} alt={card.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-bold text-white mb-1">{card.title}</h3>
                    <p className="text-white/70 text-sm">{card.desc}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About preview */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-2xl overflow-hidden h-80 lg:h-96">
              <img src="https://media.base44.com/images/public/6a115e447a3ac96774309014/b6edaf9c7_generated_18c500fb.png" alt="Jitan - Personal Trainer" className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div>
              <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">Over Jitan</p>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary mb-6">
                Jouw guide naar een gezonde lifestyle
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                JitanSports is ontstaan vanuit ervaring. Ervaring in het na je 40ste er nog steeds goed uit kunnen zien én jezelf goed voelen. Je kunt nog steeds ongelofelijke prestaties behalen en jezelf energieker, vitaler, gelukkiger en zelfverzekerder voelen.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Met jarenlange ervaring en de nodige kennis uit opleidingen in fitness, Personal Training, voeding en massage helpen wij je verder. Stap voor stap en op eigen tempo.
              </p>
              <Link to="/over-ons">
                <Button variant="outline" className="gap-2">
                  Lees Meer <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">Veelgestelde Vragen</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary">
              Alles wat je wilt weten
            </h2>
          </div>
          <FAQAccordion items={FAQ_ITEMS} />
        </div>
      </section>

      {/* CTA */}
      <CTASection dark />
    </div>
  );
}