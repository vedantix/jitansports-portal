import { Award, Users, Calendar, Gift } from 'lucide-react';

const STATS = [
  { icon: Award, value: "10+", label: "Jaar ervaring" },
  { icon: Users, value: "100+", label: "Tevreden klanten" },
  { icon: Calendar, value: "500+", label: "Trainingen gegeven" },
  { icon: Gift, value: "Gratis", label: "Proefles voor iedereen" },
];

export default function TrustStats() {
  return (
    <section className="py-14 px-4 bg-primary">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {STATS.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center">
              <div className="w-14 h-14 bg-secondary/15 rounded-2xl flex items-center justify-center mb-3">
                <stat.icon className="w-7 h-7 text-secondary" />
              </div>
              <p className="text-4xl font-display font-bold text-secondary">{stat.value}</p>
              <p className="text-secondary/70 text-sm mt-1 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}