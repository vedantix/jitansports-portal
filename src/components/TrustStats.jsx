import { Award, Users, Calendar, Gift } from 'lucide-react';
import { useSiteContent } from '@/hooks/useSiteContent';

const ICONS = [Award, Users, Calendar, Gift];

export default function TrustStats() {
  const { content } = useSiteContent();
  const stats = ICONS.map((icon, index) => {
    const number = index + 1;
    return {
      icon,
      value: content[`stat_${number}_value`],
      label: content[`stat_${number}_label`],
    };
  });

  return (
    <section className="py-12 px-4 bg-secondary border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-3">
                <stat.icon className="w-6 h-6 text-primary" />
              </div>
              <p className="text-3xl font-display font-bold text-primary">{stat.value}</p>
              <p className="text-white/60 text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
