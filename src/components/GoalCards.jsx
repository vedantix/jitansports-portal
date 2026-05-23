import { Link } from 'react-router-dom';
import { Scale, Zap, Shield, Dumbbell, ArrowRight } from 'lucide-react';

const GOALS = [
  {
    icon: Scale,
    title: "Afvallen",
    text: "Bereik een gezond gewicht zonder crashdiëten. Duurzaam, veilig en met blijvend resultaat.",
    cta: "Start nu",
    link: "/get-fit",
    color: "bg-amber-50 border-amber-200 hover:border-amber-400",
  },
  {
    icon: Zap,
    title: "Meer Energie",
    text: "Voel je fitter en energieker gedurende de dag. Stop met uitgeput wakker worden.",
    cta: "Ontdek meer",
    link: "/personal-training",
    color: "bg-sky-50 border-sky-200 hover:border-sky-400",
  },
  {
    icon: Shield,
    title: "Minder Pijnklachten",
    text: "Verminder rug-, nek- en schouderklachten door de kracht van massage en gerichte training.",
    cta: "Meer info",
    link: "/massage",
    color: "bg-green-50 border-green-200 hover:border-green-400",
  },
  {
    icon: Dumbbell,
    title: "Sterker en Fitter",
    text: "Verbeter kracht, conditie en zelfvertrouwen. Ontdek wat jouw lichaam echt kan.",
    cta: "Plan proefles",
    link: "/booking",
    color: "bg-violet-50 border-violet-200 hover:border-violet-400",
  },
];

export default function GoalCards() {
  return (
    <section className="py-14 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-primary font-semibold uppercase tracking-wider text-sm mb-2">Jouw doel, ons resultaat</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary">Wat wil jij bereiken?</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {GOALS.map((goal) => (
            <Link
              key={goal.title}
              to={goal.link}
              className={`group relative rounded-2xl border-2 p-6 transition-all duration-300 ${goal.color}`}
            >
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4 shadow-sm">
                <goal.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-2">{goal.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">{goal.text}</p>
              <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all">
                {goal.cta} <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}