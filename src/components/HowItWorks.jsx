import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const STEPS = [
  {
    step: '01',
    title: 'Gratis intakegesprek',
    desc: 'We leren elkaar kennen. Jij vertelt over je doelen, klachten en leefstijl. Geen verplichtingen.',
  },
  {
    step: '02',
    title: 'Persoonlijk plan',
    desc: 'Op basis van jouw intake maak ik een trainings- en voedingsplan volledig afgestemd op jou.',
  },
  {
    step: '03',
    title: 'Training en begeleiding',
    desc: 'We gaan aan de slag. Iedere sessie staat in het teken van jouw progressie – stap voor stap.',
  },
  {
    step: '04',
    title: 'Resultaten meten',
    desc: 'Regelmatige lichaamsanalyses en voortgangsmetingen zodat we zien wat werkt en bijsturen waar nodig.',
  },
  {
    step: '05',
    title: 'Blijvend fit blijven',
    desc: 'We bouwen een duurzame lifestyle op. Geen jojo-effect, maar echte verandering voor de lange termijn.',
  },
];

export default function HowItWorks() {
  return (
    <section className="py-16 px-4 bg-secondary text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-primary font-semibold uppercase tracking-wider text-sm mb-2">Werkwijze</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold">Hoe werkt het?</h2>
          <p className="text-white/70 mt-3 max-w-xl mx-auto">
            Van eerste kennismaking tot blijvend resultaat — dit is hoe wij werken.
          </p>
        </div>
        <div className="relative">
          {/* Connector line */}
          <div className="hidden lg:block absolute top-8 left-0 right-0 h-0.5 bg-white/10" style={{ top: '2rem', left: '10%', right: '10%' }} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {STEPS.map((step) => (
              <div
                key={step.step}
                className="text-center relative"
              >
                <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground font-bold text-xl flex items-center justify-center mx-auto mb-4 relative z-10">
                  {step.step}
                </div>
                <h3 className="font-bold text-white mb-2 text-sm">{step.title}</h3>
                <p className="text-white/60 text-xs leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center mt-10">
          <Link
            to="/booking"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors"
          >
            Start met gratis intake <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}