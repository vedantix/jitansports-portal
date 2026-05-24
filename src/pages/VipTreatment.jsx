import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Crown, Dumbbell, Gift, Heart, Moon, Sparkles, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CTASection from '../components/CTASection';
import FAQAccordion from '../components/FAQAccordion';
import ResponsiveImage from '@/components/ResponsiveImage';
import SEO, { buildFAQSchema } from '@/components/SEO';

const INCLUDES = [
  '1 uur doelgerichte personal training',
  '1 uur professionele massage',
  'Aan huis of op locatie',
  'Training op jouw niveau en doel',
  'Herstel, ontspanning en stressverlichting',
  'Ook geschikt als cadeau',
];

const FAQS = [
  {
    question: 'Wat houdt de VIP Treatment precies in?',
    answer:
      'De VIP Treatment bestaat uit 1 uur personal training en aansluitend 1 uur massage. Eerst inspanning, daarna herstel en ontspanning.',
  },
  {
    question: 'Is de massage altijd Deep Tissue?',
    answer:
      'We stemmen de massage af op jouw lichaam. Vaak is dat Deep Tissue of een combinatie met ontspanningsmassage, afhankelijk van je belasting en wensen.',
  },
  {
    question: 'Kan de VIP Treatment aan huis?',
    answer:
      'Ja. JitanSports komt naar je toe met trainingsmateriaal en professionele massagetafel. Je hoeft zelf niets te regelen.',
  },
  {
    question: 'Voor wie is dit geschikt?',
    answer:
      'Voor iedereen die een premium reset wil: sportief, druk in het hoofd, veel spanning in het lichaam of simpelweg toe aan een krachtige combinatie van actie en rust.',
  },
];

export default function VipTreatment() {
  return (
    <div>
      <SEO
        title="VIP Treatment Den Bosch - 1 uur Training + 1 uur Massage | JitanSports"
        description="Exclusieve VIP behandeling aan huis: 1 uur personal training gevolgd door 1 uur massage. Premium inspanning en ontspanning in omgeving Den Bosch."
        path="/vip-treatment"
        image="/images/optimized/page-massage-hero-960.jpg"
        jsonLd={buildFAQSchema(FAQS)}
      />

      <section className="relative flex min-h-[72svh] items-center overflow-hidden px-4 py-20 text-white">
        <div className="absolute inset-0">
          <ResponsiveImage
            src="/images/optimized/page-massage-hero-960.jpg"
            alt=""
            className="h-full w-full object-cover"
            sizes="100vw"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/80 to-secondary/25" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-bold text-primary-foreground">
              <Crown className="h-4 w-4" /> Exclusieve dienst
            </div>
            <h1 className="mb-5 text-4xl font-display font-bold leading-tight md:text-6xl">VIP Treatment</h1>
            <p className="mb-7 text-lg leading-relaxed text-white/82">
              Voel je als VIP in je eigen huis. Eerst een uur doelgerichte krachttraining, daarna een uur massage voor spierherstel, ontspanning en stressverlichting.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link to="/booking">
                <Button size="lg" className="w-full gap-2 bg-primary text-primary-foreground hover:bg-primary/90 sm:w-auto">
                  Boek VIP Treatment <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <Link to="/tarieven">
                <Button size="lg" variant="outline" className="w-full border-white/30 text-white hover:bg-white/10 sm:w-auto">
                  Bekijk tarieven
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary px-4 py-6 text-primary-foreground">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xl font-bold">VIP Treatment - €190</p>
            <p className="text-sm opacity-80">2 uur premium begeleiding · inspanning en ontspanning · aan huis of op locatie</p>
          </div>
          <Link to="/booking">
            <Button variant="secondary" className="gap-2 font-semibold">
              Direct boeken <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-amber-700">Waarom VIP?</p>
            <h2 className="mb-5 text-3xl font-display font-bold text-secondary">Een complete ervaring voor lichaam en hoofd</h2>
            <div className="space-y-4 leading-relaxed text-muted-foreground">
              <p>De VIP Treatment is voor wie het beste uit twee werelden wil: actief werken aan je lichaam en daarna bewust herstellen.</p>
              <p>Het eerste uur staat in het teken van een training die aansluit op jouw doel. Spieropbouw, afvallen, conditie, sterker worden of gewoon weer lekker bewegen: we kiezen wat jouw lichaam nodig heeft.</p>
              <p>Daarna volgt een massage die je getrainde spieren tot rust brengt, de doorbloeding stimuleert en opgebouwde spanning loslaat. Je stapt niet vermoeid de deur uit, maar blijft thuis in je eigen omgeving.</p>
            </div>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {INCLUDES.map((item) => (
                <div key={item} className="flex items-start gap-2 text-sm text-foreground">
                  <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-5">
            <div className="rounded-2xl bg-secondary p-7 text-white">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/20">
                  <Dumbbell className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold">Uur 1: intensieve krachttraining</h3>
                  <p className="text-sm text-white/55">Doelgericht, veilig en op jouw niveau</p>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-white/72">
                We belasten je lichaam op een goede manier: genoeg uitdaging voor resultaat, met techniek en begeleiding om blessures te voorkomen.
              </p>
            </div>
            <div className="rounded-2xl border border-primary/20 bg-primary/10 p-7">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/20">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-secondary">Uur 2: massage en herstel</h3>
                  <p className="text-sm text-muted-foreground">Pure ontspanning met herstelwaarde</p>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Met massage maken we spanning los, stimuleren we herstel en brengen we je lichaam en geest tot rust.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted/30 px-4 py-16">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          {[
            { icon: Sparkles, title: 'Premium reset', text: 'Een compleet moment voor jezelf waarin training, herstel en ontspanning logisch op elkaar aansluiten.' },
            { icon: Moon, title: 'Dieper herstel', text: 'Massage na inspanning helpt je spieren ontspannen en geeft je zenuwstelsel rust.' },
            { icon: Gift, title: 'Ook als cadeau', text: 'Een sterke ervaring om iemand te geven die ontspanning en nieuwe energie verdient.' },
          ].map((item) => (
            <div key={item.title} className="rounded-2xl border border-border bg-white p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <item.icon className="h-6 w-6 text-primary" />
              </div>
              <h2 className="mb-2 text-xl font-bold text-secondary">{item.title}</h2>
              <p className="text-sm leading-relaxed text-muted-foreground">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-5 flex justify-center gap-0.5">
            {[...Array(5)].map((_, index) => (
              <Star key={index} className="h-5 w-5 fill-primary text-primary" />
            ))}
          </div>
          <blockquote className="text-xl font-display italic leading-relaxed text-secondary md:text-2xl">
            "Training gevolgd door massage voelt als een complete reset. Je lichaam heeft gewerkt, daarna mag het direct loslaten."
          </blockquote>
          <p className="mt-5 text-sm font-semibold text-amber-700">JitanSports VIP Treatment</p>
        </div>
      </section>

      <section className="bg-muted/30 px-4 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-center text-3xl font-display font-bold text-secondary">Veelgestelde vragen</h2>
          <FAQAccordion items={FAQS} />
        </div>
      </section>

      <CTASection
        dark
        title="Gun jezelf de VIP Treatment"
        subtitle="Boek 2 uur volledige aandacht: training, massage en herstel in je eigen omgeving."
      />
    </div>
  );
}
