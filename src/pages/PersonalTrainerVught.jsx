import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, MapPin, Star } from 'lucide-react';
import CTASection from '../components/CTASection';
import FAQAccordion from '../components/FAQAccordion';
import SEO from '@/components/SEO';
import ResponsiveImage from '@/components/ResponsiveImage';

const HERO_IMG = '/images/optimized/page-training-hero-960.jpg';

const BENEFITS = [
  'Personal training aan huis in Vught',
  'Outdoor training in en rondom Vught',
  'Voedings- en leefstijlbegeleiding',
  'Geen reiskosten in Vught',
  'Gratis proefles – volledig vrijblijvend',
  'Gecombineerd met massage op aanvraag',
];

const FAQS = [
  { question: 'Komt JitanSports aan huis in Vught?', answer: 'Ja, JitanSports komt naar jou toe in Vught. We brengen alle benodigde materialen mee. Geen sportschool nodig.' },
  { question: 'Kan ik ook outdoor trainen in Vught?', answer: 'Absoluut. Vught heeft prachtige buitenlocaties om te trainen. We zoeken samen de beste locatie.' },
  { question: 'Biedt JitanSports ook massages in Vught?', answer: 'Ja. Naast personal training bieden we ook Deep Tissue Massage en Ontspanningsmassage aan huis in Vught.' },
  { question: 'Wat als ik een blessure heb?', answer: 'We passen het trainingsplan altijd aan op jouw situatie. Ook bij een blessure kunnen we veilig en effectief trainen.' },
];

export default function PersonalTrainerVught() {
  return (
    <div>
      <SEO
        title="Personal Trainer Vught – Aan Huis en Outdoor | JitanSports"
        description="Personal trainer in Vught voor afvallen, krachttraining en conditie. Training aan huis of outdoor in Vught. Gratis proefles – start vandaag bij JitanSports."
        path="/personal-trainer-vught"
      />
      <section className="relative h-[50vh] min-h-[380px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <ResponsiveImage src={HERO_IMG} alt="" className="w-full h-full object-cover" loading="eager" fetchPriority="high" />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 to-secondary/40" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 mb-3"><MapPin className="w-4 h-4 text-primary" /><span className="text-primary font-semibold text-sm uppercase tracking-wider">Vught</span></div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Personal Trainer Vught</h1>
            <p className="text-white/80 text-lg mb-6">Bereik jouw fitnessdoelen met persoonlijke begeleiding aan huis of outdoor in Vught.</p>
            <div className="flex items-center gap-2 mb-6">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-primary text-primary" />)}
              <span className="text-white/80 text-sm ml-1">5.0 · 47+ beoordelingen</span>
            </div>
            <Link to="/booking"><Button size="lg" className="bg-primary hover:bg-primary/90 text-secondary font-bold gap-2">Plan Gratis Proefles <ArrowRight className="w-5 h-5" /></Button></Link>
          </div>
        </div>
      </section>
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-secondary mb-6">Personal trainer in Vught – JitanSports</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Als personal trainer in Vught biedt JitanSports volledig persoonlijke begeleiding. We trainen bij jou thuis in Vught of op een prachtige buitenlocatie in de omgeving.</p>
          <p className="text-muted-foreground leading-relaxed mb-4">Vught staat bekend om zijn groene omgeving – ideaal voor outdoor training. Of je nu in het park wilt trainen of liever thuis, wij passen ons aan op jouw wensen.</p>
          <p className="text-muted-foreground leading-relaxed mb-8">Naast personal training bieden we ook voedingsbegeleiding en massage aan in Vught. De complete aanpak voor duurzame resultaten.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">{BENEFITS.map(b => (<div key={b} className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" /><span className="text-foreground text-sm">{b}</span></div>))}</div>
        </div>
      </section>
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-secondary mb-8 text-center">Veelgestelde vragen</h2>
          <FAQAccordion items={FAQS} />
        </div>
      </section>
      <CTASection title="Start vandaag in Vught" subtitle="Gratis proefles – geen verplichtingen. Plan nu bij JitanSports." />
    </div>
  );
}
