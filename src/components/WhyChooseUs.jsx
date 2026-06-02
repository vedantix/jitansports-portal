import { UserCheck, Home, Zap, Salad, Gift, Star } from 'lucide-react';

const USPS = [
  {
    icon: UserCheck,
    title: 'Persoonlijke 1-op-1 begeleiding',
    desc: 'Geen groepslessen. Alleen jij en Jitan. Volledige aandacht, volledig op maat.',
  },
  {
    icon: Home,
    title: 'Training aan huis mogelijk',
    desc: 'Jitan komt naar jou toe. Geen sportschool, geen reistijd – gewoon trainen in je eigen omgeving.',
  },
  {
    icon: Zap,
    title: 'Deep Tissue specialist',
    desc: 'Gecertificeerd in Deep Tissue Massage. Effectief bij rugklachten, sportblessures en chronische pijn.',
  },
  {
    icon: Salad,
    title: 'Voedingsbegeleiding inbegrepen',
    desc: 'Training zonder voeding is maar half werk. Samen maken we een haalbaar plan dat past bij jouw leven.',
  },
  {
    icon: Gift,
    title: 'Gratis intake',
    desc: 'We starten altijd met een gratis kennismakingsgesprek. Geen verplichtingen, geen druk.',
  },
  {
    icon: Star,
    title: 'Meer dan 100 tevreden klanten',
    desc: 'Al meer dan 10 jaar helpen wij mensen in omgeving Den Bosch aan een gezondere en fittere lifestyle.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="px-4 py-16 md:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-amber-700 font-semibold uppercase tracking-wider text-sm mb-2">Waarom JitanSports?</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary">
            6 redenen om voor ons te kiezen
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {USPS.map((usp) => (
            <div
              key={usp.title}
              className="flex gap-4 p-6 rounded-2xl border border-border bg-muted/30 hover:bg-white hover:shadow-md transition-all"
            >
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <usp.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-secondary mb-1 text-sm">{usp.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{usp.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}