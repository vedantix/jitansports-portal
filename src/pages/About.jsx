import { CheckCircle, Award, Eye, Target, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import CTASection from '../components/CTASection';

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://media.base44.com/images/public/6a115e447a3ac96774309014/b6edaf9c7_generated_18c500fb.png" alt="Over JitanSports" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/85 to-secondary/40" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-xl">
            <p className="text-primary font-semibold mb-3 uppercase tracking-wider text-sm">Over Ons</p>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
              Jouw guide naar een gezonde lifestyle
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Wie ben ik */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="rounded-2xl overflow-hidden h-80 lg:h-[500px]">
            <img src="https://media.base44.com/images/public/6a115e447a3ac96774309014/b6edaf9c7_generated_18c500fb.png" alt="Jitan" className="w-full h-full object-cover" />
          </div>
          <div>
            <h2 className="text-3xl font-display font-bold text-secondary mb-6">Wie ben ik</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              JitanSports is ontstaan vanuit ervaring. Ervaring in het na je 40ste er nog steeds goed uit kunnen zien én jezelf goed voelen. Je kunt nog steeds ongelofelijke prestaties behalen en jezelf energieker, vitaler, gelukkiger en zelfverzekerder voelen.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Wij kunnen je helpen om jou deze verandering te laten behalen. Ben jij bereid om de knoop door te hakken, wil je veranderen en een nieuwe lifestyle aannemen? Dan staan wij klaar om jou te helpen.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              JitanSports onderscheidt zich in de wereld van Personal Training en massage door zich te richten op de combinatie Vintage Krachttraining en Deep Tissue Massage.
            </p>
          </div>
        </div>
      </section>

      {/* Blocks */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { icon: Eye, title: "Mijn Visie", text: "Your health is our goal. JitanSports helpt je om op een verantwoorde manier te trainen, op jouw tempo. Een fitte lifestyle is een goed begin naar jezelf beter voelen." },
            { icon: Target, title: "Mijn Aanpak", text: "Met een luisterend oor en empathie voor jouw doel en situatie gaan wij voor jouw resultaat. Stap voor stap, op jouw eigen tempo – niets moet – we gaan ervoor!" },
            { icon: Award, title: "Mijn Certificeringen", text: "Jarenlange ervaring en opleidingen in fitness, Personal Training, voeding en verschillende vormen van massage. Continue bijscholing om de beste begeleiding te bieden." },
            { icon: Heart, title: "Mijn Achtergrond", text: "Met jarenlange ervaring in zowel fitness als massage helpen wij je verder. Van krachttraining tot Deep Tissue Massage, van voedingsadvies tot mental coaching." },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-2xl bg-white border border-border/50"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <CTASection />
    </div>
  );
}