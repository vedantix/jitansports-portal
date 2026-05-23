import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Users, Clock, MapPin, Dumbbell } from 'lucide-react';
import { motion } from 'framer-motion';
import CTASection from '../components/CTASection';
import FAQAccordion from '../components/FAQAccordion';

const BENEFITS = [
  "Training op maat, afgestemd op jouw doelen",
  "Outdoor in de natuur of bij jou thuis",
  "Alle sportmaterialen worden meegenomen",
  "Al resultaat met 1x per week trainen",
  "Duo-training mogelijk (+€10 per persoon)",
  "Gratis en vrijblijvende proefles",
];

const FAQ = [
  { question: "Hoe lang duurt een training?", answer: "Een trainingssessie duurt één uur. In dat uur kunnen we met een gestructureerde aanpak heel veel bereiken." },
  { question: "Kan ik ook zwanger trainen?", answer: "Ja! We bieden zwangerschapstraining aan. Of je nu in je eerste, tweede of derde trimester bent, we passen het schema aan zodat het veilig en verantwoord is." },
  { question: "Wat als het regent bij outdoor training?", answer: "We trainen in principe altijd buiten, ook bij een beetje regen. Bij extreme weersomstandigheden kunnen we uitwijken naar een alternatieve locatie of training aan huis." },
  { question: "Moet ik al fit zijn om te beginnen?", answer: "Absoluut niet! We passen alles aan op jouw niveau. Of je nu beginner bent of al ervaring hebt, we starten waar jij bent." },
];

export default function PersonalTraining() {
  return (
    <div>
      <section className="relative h-[50vh] min-h-[400px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://media.base44.com/images/public/6a115e447a3ac96774309014/77461c012_generated_cb61b25a.png" alt="Personal Training Outdoor" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/85 to-secondary/40" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-xl">
            <p className="text-primary font-semibold mb-3 uppercase tracking-wider text-sm">Personal Training</p>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
              Personal Training op zijn best
            </h1>
            <p className="text-white/80 text-lg">Daar waar jij je prettig voelt, daar trainen wij.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-6 px-4 bg-primary/10">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-secondary font-semibold">Ervaar het zelf met een gratis proefles!</p>
          <Link to="/booking"><Button className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2">{"Plan Gratis Proefles"} <ArrowRight className="w-4 h-4" /></Button></Link>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-display font-bold text-secondary mb-6">Training op jouw manier</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Wij zijn ervan overtuigd dat jij het beste uit jezelf kunt halen op een plek waar jij jezelf goed voelt. Voor de een is dit buiten en voor de ander thuis. Daarom geven wij onze Personal Training buiten in de natuur of bij jou thuis.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Neem voor, na of tijdens een drukke werkdag een moment voor jezelf en train in de buitenlucht. De natuur werkt ontspannend en rustgevend waardoor jij jezelf kunt opladen met een training op maat.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                {"Met slechts één training per week kunnen we al hele mooie resultaten behalen. Wij zorgen voor een gestructureerde aanpak, een training op maat om jouw fitnessdoelen te behalen."}
              </p>
              <div className="space-y-3">
                {BENEFITS.map(b => (
                  <div key={b} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-foreground">{b}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              {[
                { icon: Users, title: "DUO Training", text: "Alleen trainen is top! Maar het kan ook met z'n tweeën of meer. Train samen met je partner, vriend(in) of familielid voor extra motivatie." },
                { icon: Clock, title: "In één uur bereik je veel", text: "Met ons gerichte trainingsprogramma, op basis van krachttraining, activeren wij doelgericht spiergroepen die jou helpen sterker te worden." },
                { icon: MapPin, title: "Outdoor en Aan Huis", text: "Jij kiest waar je traint. Buiten in het park of in je eigen woonkamer. Wij zorgen voor alle benodigde sportmaterialen." },
                { icon: Dumbbell, title: "Zwangerschapstraining", text: "Trainen voor, tijdens en na je zwangerschap? Ja dat kan! We trainen met een aangepast trainingsschema, veilig en verantwoord." },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 rounded-2xl bg-muted/50 border border-border/50"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-bold text-secondary">{item.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-muted/50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-display font-bold text-secondary mb-6">{"Voeding en Training gaan hand in hand"}</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Naast trainen kan voeding heel veel betekenen voor het behalen van jouw doelen. Of je nu wilt afvallen, aankomen, spieropbouw nastreeft of je gezondheid wilt verbeteren.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            {"Samen bespreken we jouw doelen en maken we een voedingsplan dat volledig is afgestemd op jouw persoonlijke situatie. Geen crashdiëten, maar een haalbaar plan dat bij jou past."}
          </p>
          <Link to="/contact"><Button variant="outline" className="gap-2">Vraag Voedingsadvies Aan <ArrowRight className="w-4 h-4" /></Button></Link>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-secondary mb-8 text-center">Veelgestelde Vragen</h2>
          <FAQAccordion items={FAQ} />
        </div>
      </section>

      <CTASection />
    </div>
  );
}