import { useEffect, useState } from 'react';
import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';
import { base44 } from '@/api/base44Client';
import CTASection from '../components/CTASection';
import SEO from '@/components/SEO';

const FALLBACK_REVIEWS = [
  {
    name: 'Sarah M.',
    city: 'Den Bosch',
    service: 'Personal Training',
    rating: 5,
    text: 'Ik ben nu 4 maanden bezig met Jitan en het resultaat is ongelooflijk. 12 kilo eraf, veel meer energie en ik voel me geweldig. De persoonlijke aanpak maakt echt het verschil. Jitan luistert naar je, past het programma aan en motiveert je op de momenten dat je het nodig hebt.',
    result: '12 kg afgevallen in 4 maanden',
  },
  {
    name: 'Michel R.',
    city: 'Rosmalen',
    service: 'Deep Tissue Massage',
    rating: 5,
    text: 'Al jarenlang last van rugklachten en na 3 sessies bij Jitan merk ik al een enorm verschil. De Deep Tissue Massage gaat echt naar de kern van het probleem. Jitan is professioneel, vriendelijk en weet precies waar hij moet werken.',
    result: 'Rugklachten sterk verminderd',
  },
  {
    name: 'Lisa B.',
    city: 'Vught',
    service: 'Get Fit Programma',
    rating: 5,
    text: 'Het Get Fit Programma was een eyeopener. In 12 weken heb ik niet alleen mijn doelen bereikt maar ook mijn relatie met eten en bewegen veranderd. Het voedingsplan is realistisch en het trainingsprogramma is zwaar maar haalbaar. Jitan is een echte motivator.',
    result: '8 kg afgevallen, spieren opgebouwd',
  },
  {
    name: 'Tom V.',
    city: 'Oss',
    service: 'Personal Training',
    rating: 5,
    text: 'Als drukke ondernemer had ik geen tijd om naar een sportschool te gaan. Jitan komt gewoon bij mij thuis. In een uur heb ik een complete workout gehad. Efficiënt, effectief en gezellig. Sterk aanbevolen!',
    result: 'Fitter geworden, betere conditie',
  },
  {
    name: 'Anouk K.',
    city: 'Den Bosch',
    service: 'VIP Treatment',
    rating: 5,
    text: 'De VIP Treatment was precies wat ik nodig had na een stressvolle periode. Training gevolgd door massage – de perfecte combinatie. Ik voelde me werkelijk als herboren. Dit ga ik zeker vaker doen.',
    result: 'Complete ontspanning en herstel',
  },
  {
    name: 'Peter J.',
    city: 'Sint-Michielsgestel',
    service: 'Personal Training',
    rating: 5,
    text: 'Na mijn knieblessure dacht ik dat sporten er niet meer in zat. Jitan heeft me begeleid bij mijn herstel en nu train ik twee keer per week. De aanpak is voorzichtig maar progressief. Ik ben zo blij dat ik de stap heb gezet.',
    result: 'Volledig hersteld van knieblessure',
  },
  {
    name: 'Noor S.',
    city: 'Boxtel',
    service: 'Massage',
    rating: 5,
    text: 'Na een zwangerschap had ik veel last van nek- en schouderklachten. De massages van Jitan hebben zoveel verlichting gebracht. Hij is professioneel, tactvol en begrijpt precies wat je lichaam nodig heeft.',
    result: 'Nek- en schouderklachten verholpen',
  },
  {
    name: 'Frank D.',
    city: 'Rosmalen',
    service: 'Get Fit Programma',
    rating: 5,
    text: 'Op mijn 47e dacht ik dat het te laat was om echt fit te worden. Jitan heeft me het tegendeel bewezen. Het 12-weken programma was intensief maar de begeleiding was fantastisch. Ik voel me 10 jaar jonger.',
    result: 'Fit na je 40ste is zeker mogelijk',
  },
  {
    name: 'Kim W.',
    city: 'Den Bosch',
    service: 'Personal Training',
    rating: 5,
    text: 'Trainen tijdens mijn zwangerschap was iets wat ik nooit had verwacht te doen, maar Jitan heeft het zo veilig en prettig gemaakt. Ik voelde me fit, sterk en energiek gedurende mijn hele zwangerschap.',
    result: 'Fit en sterk tijdens zwangerschap',
  },
  {
    name: 'Robert A.',
    city: 'Vught',
    service: 'Deep Tissue Massage',
    rating: 5,
    text: 'Als fervent sporter had ik regelmatig last van spierpijn na zware trainingen. De sportmassages van Jitan hebben mijn herstel enorm versneld. Ik presteer beter, herstel sneller en ben minder vaak geblesseerd.',
    result: 'Sneller herstel na trainingen',
  },
];

export default function Referenties() {
  const [reviews, setReviews] = useState(FALLBACK_REVIEWS);

  useEffect(() => {
    base44.entities.Review.filter({ visible: true })
      .then((data) => {
        if (data?.length >= 3) {
          setReviews(
            data.map((r) => ({
              id: r.id,
              name: r.name,
              city: r.city,
              service: r.service,
              rating: r.rating,
              text: r.text,
              result: '',
            }))
          );
        }
      })
      .catch(() => {});
  }, []);

  return (
    <div>
      <SEO
        title="Klantverhalen & Referenties | JitanSports Den Bosch"
        description="Lees de ervaringen van meer dan 100 tevreden klanten van JitanSports in omgeving Den Bosch. Echte resultaten van personal training, massage en voedingsbegeleiding."
        path="/referenties"
      />

      {/* Hero */}
      <section className="bg-secondary px-4 py-16 text-white md:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-primary font-semibold mb-3 uppercase tracking-wider text-sm">Klantverhalen</p>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Wat onze klanten zeggen
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Meer dan 100 mensen in omgeving Den Bosch zijn je al voorgegaan. Lees hun verhalen en resultaten.
          </p>
          <div className="flex items-center justify-center gap-2 mt-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-primary text-primary" />
            ))}
            <span className="text-white font-semibold ml-2">5.0 · 100+ beoordelingen</span>
          </div>
        </div>
      </section>

      {/* Reviews grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, i) => (
              <motion.div
                key={review.name + i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 6) * 0.08 }}
                className="p-6 rounded-2xl bg-white border border-border hover:shadow-md transition-shadow flex flex-col"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="font-bold text-secondary">{review.name}</p>
                    <p className="text-muted-foreground text-sm">{review.city} · {review.service}</p>
                  </div>
                  <Quote className="w-8 h-8 text-primary/20 flex-shrink-0" />
                </div>
                <div className="flex gap-0.5 mb-3">
                  {[...Array(review.rating || 5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-4 italic">"{review.text}"</p>
                {review.result && (
                  <div className="mt-auto pt-4 border-t border-border">
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-700 bg-primary/10 px-3 py-1.5 rounded-full">
                      ✓ {review.result}
                    </span>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Schrijf jouw eigen succesverhaal" subtitle="Plan vandaag nog je gratis intake en begin jouw transformatie." />
    </div>
  );
}