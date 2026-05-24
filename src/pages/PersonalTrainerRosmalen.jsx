import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, MapPin, Star } from 'lucide-react';
import CTASection from '../components/CTASection';
import FAQAccordion from '../components/FAQAccordion';
import SEO from '@/components/SEO';
import ResponsiveImage from '@/components/ResponsiveImage';

const HERO_IMG = '/images/optimized/page-training-hero-960.jpg';

const BENEFITS = [
  'Personal training aan huis in Rosmalen',
  'Outdoor training in Rosmalen en omgeving',
  'Voedingsbegeleiding inbegrepen',
  'Geen reiskosten in Rosmalen',
  'Gratis proefles – geen verplichtingen',
  '10+ jaar ervaring als personal trainer',
];

const FAQS = [
  { question: 'Biedt JitanSports personal training in Rosmalen?', answer: 'Ja. JitanSports is actief in heel omgeving Den Bosch, inclusief Rosmalen. We trainen aan huis, outdoor of op een locatie die jou uitkomt.' },
  { question: 'Wat kost een personal trainer in Rosmalen?', answer: 'Je start altijd met een gratis proefles. Daarna gelden vaste tarieven afhankelijk van het pakket. Bekijk de tarievenpagina voor exacte prijzen.' },
  { question: 'Zijn er reiskosten voor Rosmalen?', answer: 'Nee. Rosmalen valt binnen ons standaard werkgebied. Geen extra reiskosten.' },
  { question: 'Hoe snel zie ik resultaat?', answer: 'De meeste klanten voelen al na 4-6 weken merkbare verbetering in energie, kracht en uiterlijk.' },
];

export default function PersonalTrainerRosmalen() {
  return (
    <div>
      <SEO
        title="Personal Trainer Rosmalen – Aan Huis en Outdoor | JitanSports"
        description="Personal trainer in Rosmalen voor afvallen, kracht en conditie. Training aan huis of outdoor. Gratis proefles aanvragen bij JitanSports."
        path="/personal-trainer-rosmalen"
      />
      <section className="relative h-[50vh] min-h-[380px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <ResponsiveImage src={HERO_IMG} alt="" className="w-full h-full object-cover" loading="eager" fetchPriority="high" />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 to-secondary/40" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 mb-3"><MapPin className="w-4 h-4 text-primary" /><span className="text-primary font-semibold text-sm uppercase tracking-wider">Rosmalen</span></div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Personal Trainer Rosmalen</h1>
            <p className="text-white/80 text-lg mb-6">1-op-1 begeleiding aan huis of outdoor in Rosmalen. Bereik jouw fitnessdoel met JitanSports.</p>
            <div className="flex items-center gap-2 mb-6">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-primary text-primary" />)}
              <span className="text-white/80 text-sm ml-1">5.0 · 47+ beoordelingen</span>
            </div>
            <Link to="/booking"><Button size="lg" className="bg-primary hover:bg-primary/90 text-secondary font-bold gap-2">Plan Gratis Proefles <ArrowRight className="w-5 h-5" /></Button></Link>
          </div>
        </div>
      </section>
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-display font-bold text-secondary mb-6">Personal trainer in Rosmalen</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">Ben je op zoek naar een personal trainer in Rosmalen? JitanSports biedt professionele 1-op-1 begeleiding bij jou thuis of in de buitenlucht in Rosmalen en omgeving.</p>
            <p className="text-muted-foreground leading-relaxed mb-4">Of je nu wilt afvallen, spiermassa wilt opbouwen, je conditie wilt verbeteren of wilt herstellen van een blessure – wij zorgen voor een volledig persoonlijk trainingsplan.</p>
            <p className="text-muted-foreground leading-relaxed mb-8">Met meer dan 10 jaar ervaring en tientallen tevreden klanten in Rosmalen weet JitanSports wat werkt. We beginnen altijd met een gratis kennismakingsgesprek.</p>
            <div className="space-y-3">{BENEFITS.map(b => (<div key={b} className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" /><span className="text-foreground text-sm">{b}</span></div>))}</div>
          </div>
          <div className="p-8 rounded-2xl bg-secondary text-white h-fit">
            <h3 className="text-xl font-bold mb-6">Gratis proefles in Rosmalen</h3>
            <p className="text-white/70 mb-6 text-sm leading-relaxed">Ervaar zelf wat personal training bij JitanSports inhoudt. Geen verplichtingen, geen kosten.</p>
            <Link to="/booking"><Button className="w-full bg-primary hover:bg-primary/90 text-secondary font-bold gap-2">Plan Nu Gratis Proefles <ArrowRight className="w-4 h-4" /></Button></Link>
          </div>
        </div>
      </section>
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-secondary mb-8 text-center">Veelgestelde vragen</h2>
          <FAQAccordion items={FAQS} />
        </div>
      </section>
      <CTASection title="Klaar om te starten in Rosmalen?" subtitle="Plan vandaag nog je gratis proefles bij JitanSports." />
    </div>
  );
}
