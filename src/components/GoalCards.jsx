import { Link } from 'react-router-dom';
import { Scale, Zap, Shield, Dumbbell, ArrowRight } from 'lucide-react';
import { useSiteContent } from '@/hooks/useSiteContent';

const ICONS = [Scale, Zap, Shield, Dumbbell];

export default function GoalCards() {
  const { content } = useSiteContent();
  const goals = ICONS.map((icon, index) => {
    const number = index + 1;
    return {
      icon,
      title: content[`goal_${number}_title`],
      text: content[`goal_${number}_text`],
      cta: content[`goal_${number}_cta`],
      link: content[`goal_${number}_link`],
    };
  });

  return (
    <section className="px-4 py-16 md:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-amber-700 font-semibold uppercase tracking-wider text-sm mb-2">{content.goal_eyebrow}</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary">{content.goal_title}</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {goals.map((goal) => (
            <Link
              key={goal.title}
              to={goal.link}
              className="group relative flex flex-col rounded-2xl border-2 border-border bg-white hover:border-primary hover:shadow-md p-6 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4 shadow-sm">
                <goal.icon className="w-6 h-6 text-amber-700" />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-2">{goal.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5 flex-1">{goal.text}</p>
              <span className="inline-flex items-center gap-1 text-sm font-semibold text-amber-700 group-hover:gap-2 transition-all">
                {goal.cta} <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}