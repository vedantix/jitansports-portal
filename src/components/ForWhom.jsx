import { Link } from 'react-router-dom';
import { Scale, Dumbbell, Zap, Flame, Heart, Clock } from 'lucide-react';

const TARGETS = [
  {
    icon: Scale,
    title: 'Afvallen',
    desc: 'Duurzaam gewicht verliezen zonder crashdieten. Met de juiste training en voeding bereik je blijvend resultaat.',
    link: '/get-fit',
  },
  {
    icon: Dumbbell,
    title: 'Spieropbouw',
    desc: 'Spiermassa opbouwen op een verantwoorde manier. Krachttraining op maat voor zichtbaar resultaat.',
    link: '/personal-training',
  },
  {
    icon: Zap,
    title: 'Herstel na blessures',
    desc: 'Veilig en verantwoord herstellen. Met gerichte begeleiding en massage terug naar vol vermogen.',
    link: '/massage',
  },
  {
    icon: Flame,
    title: 'Rug- en nekklachten',
    desc: 'Deep Tissue Massage en gerichte oefeningen voor minder pijn en meer beweegvrijheid.',
    link: '/massage',
  },
  {
    icon: Heart,
    title: 'Conditie verbeteren',
    desc: 'Fitter worden, meer uithoudingsvermogen en meer energie in het dagelijks leven.',
    link: '/personal-training',
  },
  {
    icon: Clock,
    title: '40+ fit blijven',
    desc: 'JitanSports is geboren vanuit de ervaring: na je 40ste kun je nog steeds in topvorm zijn.',
    link: '/over-ons',
  },
];

export default function ForWhom() {
  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-amber-700 font-semibold uppercase tracking-wider text-sm mb-2">Voor iedereen</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary">Voor wie is dit?</h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
            Ieder lichaam is anders, ieder doel is anders. Wij passen ons volledig aan op jou.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {TARGETS.map((item) => (
            <div key={item.title}>
              <Link
                to={item.link}
                className="group block p-6 rounded-2xl bg-white border border-border hover:shadow-lg hover:border-primary/20 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-secondary mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}