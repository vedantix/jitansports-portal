import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Crown, Dumbbell, Zap, Star } from 'lucide-react';
import CTASection from '../components/CTASection';
import SEO from '@/components/SEO';

const HERO_IMG = 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=1200&q=75';

const INCLUDES = [
  '1 uur personal training op maat',
  '1 uur Deep Tissue Massage',
  'Volledig op jouw locatie',
  'Uitgebreid intakegesprek',
  'Voedings- en hersteltips',
  'Geen extra kosten',
];

const REVIEWS = [
  {
    name: 'Linda V.',
    city: 'Rosmalen',
    text: 'De VIP Treatment is precies wat ik nodig had na maanden van stress. Training gevolgd door massage – het was een complete reset. Ik voelde me als herboren.',
  },
  {
    name: 'Mark T.',
    city: 'Den Bosch',
    text: 'Had dit eerder moeten doen. Jitan combineert training en massage naadloos. Na 2 uur was ik zowel uitgedaagd als volledig ontspannen.',
  },
];

export default function VipTreatment() {
  return (
    <div>
      <SEO
        title="VIP Treatment – 1 uur Training en 1 uur Massage | JitanSports"
        description="De ultieme reset: 1 uur personal training gevolgd door 1 uur Deep Tissue Massage. Premium dienst van JitanSports in omgeving Den Bosch."
        path="/vip-treatment"
      />

      <section className="relative h-[60vh] min-h-[450px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="VIP Treatment JitanSports" className="w-full h-full object-cover" loading="eager" fetchPriority="high" decoding="async" />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/80 to-secondary/30" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 bg-primary text-primary-foreground text-sm font-bold px-4 py-1.5 rounded-full mb-5">
              <Crown className="w-4 h-4" /> Premium Dienst
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">VIP Treatment</h1>
            <p className="text-white/80 text-lg mb-6">
              De complete reset voor lichaam en geest. 1 uur personal training direct gevolgd door 1 uur Deep Tissue Massage.
            </p>
            <Link to="/booking">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-secondary font-bold gap-2">
                Boek VIP Treatment <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-6 px-4 bg-primary">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-primary-foreground">
          <div>
            <p className="font-bold text-xl">VIP Treatment – €190</p>
            <p className="text-sm opacity-80">2 uur training en massage · Aan huis of op locatie</p>
          </div>
          <Link to="/booking">
            <Button variant="secondary" className="gap-2 font-semibold">Direct Boeken <ArrowRight className="w-4 h-4" /></Button>
          </Link>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-display font-bold text-secondary mb-6">Wat is de VIP Treatment?</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              De VIP Treatment is de meest complete dienst van JitanSports. In twee uur tijd word je zowel fysiek uitgedaagd als volledig ontspannen. De perfecte combinatie voor topprestaties én herstel.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We beginnen met een uur intensieve personal training, volledig afgestemd op jouw doelen. Daarna volgt een uur Deep Tissue Massage voor spierherstel, stressreductie en ontspanning.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Ideaal als je een complete reset wilt, als beloning voor jezelf, of als je merkt dat training en massage samen veel effectiever zijn dan apart.
            </p>
            <div className="space-y-3">
              {INCLUDES.map(item => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-5">
            <div className="p-8 rounded-2xl bg-secondary text-white">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                  <Dumbbell className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Uur 1: Personal Training</h3>
                  <p className="text-white/60 text-sm">0:00 – 1:00 uur</p>
                </div>
              </div>
              <p className="text-white/70 text-sm leading-relaxed">Intensieve 1-op-1 training op jouw niveau en doelen. Kracht, conditie of revalidatie – volledig afgestemd op jou.</p>
            </div>
            <div className="p-8 rounded-2xl bg-primary/10 border border-primary/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-secondary">Uur 2: Deep Tissue Massage</h3>
                  <p className="text-muted-foreground text-sm">1:00 – 2:00 uur</p>
                </div>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">Diepgaande massage van getrainde spiergroepen. Stimuleert herstel, vermindert spierspanning en geeft diepe ontspanning.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-secondary mb-10 text-center">Wat klanten zeggen</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {REVIEWS.map((review) => (
              <div key={review.name} className="p-6 rounded-2xl bg-white border border-border">
                <div className="flex gap-0.5 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground text-sm leading-relaxed mb-4 italic">"{review.text}"</p>
                <p className="font-semibold text-secondary text-sm">{review.name} · {review.city}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection dark title="Klaar voor jouw complete reset?" subtitle="Boek de VIP Treatment en ervaar training en massage in één ultieme sessie." />
    </div>
  );
}