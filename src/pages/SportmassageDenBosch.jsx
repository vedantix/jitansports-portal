import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Star, Zap } from 'lucide-react';
import CTASection from '../components/CTASection';
import FAQAccordion from '../components/FAQAccordion';
import SEO from '@/components/SEO';

const HERO_IMG = 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1200&q=75';

const BENEFITS = [
  'Sneller herstel na training',
  'Vermindering van spierpijn',
  'Preventie van sportblessures',
  'Verbeterde doorbloeding',
  'Losmaken van spierknooppunten',
  'Beschikbaar aan huis in omgeving Den Bosch',
];

const FAQS = [
  { question: 'Wat is sportmassage?', answer: 'Sportmassage is gericht op sporters en actieve mensen. Het richt zich op het losmaken van gespannen spieren, het verbeteren van de doorbloeding en het versnellen van herstel na inspanning.' },
  { question: 'Verschilt sportmassage van Deep Tissue Massage?', answer: 'Sportmassage en Deep Tissue Massage lijken op elkaar maar hebben een ander doel. Sportmassage is gericht op prestatieverbetering en herstel bij sporters. Deep Tissue Massage richt zich meer op het behandelen van chronische pijn en bindweefselproblemen.' },
  { question: 'Hoe vaak moet ik een sportmassage krijgen?', answer: 'Dit hangt af van jouw trainingsfrequentie. Actieve sporters profiteren van een wekelijkse of tweewekelijkse massage. Recreatieve sporters adviseren wij maandelijks.' },
  { question: 'Kan JitanSports sportmassage aan huis uitvoeren in Den Bosch?', answer: 'Ja. We komen met onze professionele massagetafel naar jou toe in omgeving Den Bosch. Geen reiskosten voor het werkgebied.' },
  { question: 'Is sportmassage ook geschikt als ik geen sporter ben?', answer: 'Absoluut. Iedereen die actief is of last heeft van spierspanning profiteert van sportmassage. Ook bij werkgerelateerde klachten door langdurig zitten.' },
];

export default function SportmassageDenBosch() {
  return (
    <div>
      <SEO
        title="Sportmassage Den Bosch – Aan Huis | JitanSports"
        description="Professionele sportmassage in omgeving Den Bosch. Sneller herstel, minder spierpijn en betere prestaties. Aan huis beschikbaar. Boek direct bij JitanSports."
        path="/sportmassage-den-bosch"
      />
      <section className="relative h-[50vh] min-h-[400px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="Sportmassage Den Bosch" className="w-full h-full object-cover" loading="eager" fetchPriority="high" decoding="async" />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 to-secondary/40" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 mb-3"><Zap className="w-4 h-4 text-primary" /><span className="text-primary font-semibold text-sm uppercase tracking-wider">Sportmassage</span></div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Sportmassage in omgeving Den Bosch</h1>
            <p className="text-white/80 text-lg mb-6">Professionele sportmassage aan huis in omgeving Den Bosch. Herstel sneller, presteer beter en train zonder blessures.</p>
            <div className="flex items-center gap-2 mb-6">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-primary text-primary" />)}
              <span className="text-white/80 text-sm ml-1">5.0 · 31+ beoordelingen</span>
            </div>
            <Link to="/booking"><Button size="lg" className="bg-primary hover:bg-primary/90 text-secondary font-bold gap-2">Boek Sportmassage <ArrowRight className="w-5 h-5" /></Button></Link>
          </div>
        </div>
      </section>
      <section className="py-6 px-4 bg-primary/10">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-secondary font-semibold">Sportmassage aan huis in omgeving Den Bosch – geen reiskosten!</p>
          <Link to="/booking"><Button className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2">Direct Boeken <ArrowRight className="w-4 h-4" /></Button></Link>
        </div>
      </section>
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-display font-bold text-secondary mb-6">Sportmassage voor topprestaties en herstel</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">Sportmassage is dé massage voor actieve mensen en sporters in omgeving Den Bosch. Of je nu recreatief sport of een fervent atleet bent – sportmassage helpt je beter te presteren en sneller te herstellen.</p>
            <p className="text-muted-foreground leading-relaxed mb-4">JitanSports combineert kennis van anatomie, sportfysiologie en massagetechnieken voor een behandeling die écht werkt. We werken gericht op de spiergroepen die jij het meest belast.</p>
            <p className="text-muted-foreground leading-relaxed mb-8">Onze sportmassage is beschikbaar aan huis in omgeving Den Bosch. We brengen onze professionele massagetafel mee. Geen reiskosten binnen het werkgebied.</p>
            <div className="space-y-3">{BENEFITS.map(b => (<div key={b} className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" /><span className="text-foreground text-sm">{b}</span></div>))}</div>
          </div>
          <div className="space-y-5">
            {[
              { title: 'Sportmassage 60 min', desc: 'Complete behandeling van meerdere spiergroepen.', price: '€65' },
              { title: 'Sportmassage 90 min', desc: 'Uitgebreide behandeling voor full body herstel.', price: '€85' },
              { title: 'Training + Massage', desc: '60 min personal training + 60 min sportmassage. De ultieme VIP Treatment.', price: '€190' },
            ].map(item => (
              <div key={item.title} className="p-6 rounded-2xl bg-muted/50 border border-border">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-secondary">{item.title}</h3>
                  <span className="text-primary font-bold text-lg">{item.price}</span>
                </div>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
            <Link to="/booking"><Button className="w-full bg-secondary hover:bg-secondary/90 text-white font-semibold gap-2">Nu Boeken <ArrowRight className="w-4 h-4" /></Button></Link>
          </div>
        </div>
      </section>
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-secondary mb-8 text-center">Veelgestelde vragen</h2>
          <FAQAccordion items={FAQS} />
        </div>
      </section>
      <CTASection dark title="Boek sportmassage in omgeving Den Bosch" subtitle="Aan huis. Professioneel. Effectief. Snel geboekt." />
    </div>
  );
}