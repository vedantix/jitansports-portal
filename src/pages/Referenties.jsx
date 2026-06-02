import { useEffect, useState } from 'react';
import { Star, Quote } from 'lucide-react';
import { base44 } from '@/api/base44Client';
import CTASection from '../components/CTASection';
import SEO from '@/components/SEO';
import PageHero from '@/components/PageHero';

const FALLBACK_REVIEWS = [
  {
    name: 'Patries Post',
    city: 'Den Bosch',
    service: 'Personal Training & Deep Tissue',
    rating: 5,
    text: 'Aroen is betrokken, rustig en professioneel. Hij helpt je scherp blijven met training, voeding en motivatie. Mijn doel was op mijn 50e met vertrouwen in bikini op de foto. Dat is meer dan gelukt.',
    result: 'Doel ruim overtroffen',
  },
  {
    name: 'Kitty van Riemsdijk',
    city: 'Den Bosch',
    service: 'Deep Tissue Massage',
    rating: 5,
    text: 'Aroen is al jaren met veel plezier mijn personal trainer. Hij kijkt niet alleen naar het fysieke, maar ook naar het mentale. Zijn krachtige Deep Tissue massages helpen uitstekend om pijn weg te nemen.',
    result: 'Fit, bewust en minder pijn',
  },
  {
    name: 'Leontine Verboon',
    city: 'Den Bosch',
    service: 'Personal Training',
    rating: 5,
    text: 'Ik train al bijna twee jaar consequent twee keer per week. De trainingen zijn afwisselend, op mijn niveau en altijd positief. Geen chronische rugklachten meer en ik blijf gemotiveerd.',
    result: 'Structureel blijven trainen',
  },
  {
    name: 'Michiel Gerrits',
    city: 'Rosmalen',
    service: 'Personal Training',
    rating: 5,
    text: 'Aroen bracht mij in een jaar naar een niveau dat ik zelf nooit had gehaald. Naast afwisselende trainingen gaf hij voedingsadvies en aandacht aan de mentale kant.',
    result: 'Atletischer lichaam en meer energie',
  },
  {
    name: 'Petra',
    city: 'Den Bosch',
    service: 'Deep Tissue Massage',
    rating: 5,
    text: 'Na jaren kantoorbaan kreeg ik steeds vaker rug-, schouder- en nekklachten. De Deep Tissue Massage was intens, maar daarna voelde ik fysiek duidelijk verbetering.',
    result: 'Minder klachten door diepe massage',
  },
  {
    name: 'Irmgard Kamphuis',
    city: 'Vught',
    service: 'Personal Training',
    rating: 5,
    text: 'Aroen stimuleert me op een rustige, doortastende manier. Daardoor geef ik niet op en blijf ik gefocust op mijn doel voor de lange termijn.',
    result: 'Meer focus en volhouden',
  },
  {
    name: 'Mariëlle Wassink',
    city: 'Den Bosch',
    service: 'Outdoor Training',
    rating: 5,
    text: 'De trainingen zijn afwisselend en Aroen pusht op een goede manier naar betere resultaten. Hij let op techniek, doet oefeningen goed voor en trainen in de buitenlucht bevalt erg goed.',
    result: 'Meer kracht en uithoudingsvermogen',
  },
  {
    name: 'Ellen de Kroon',
    city: 'Rosmalen',
    service: 'Personal Training & Massage',
    rating: 5,
    text: 'Aroen kijkt naar iedere persoon als individu. Na enkele weken voelde ik me gezonder, fitter en gelukkiger. Hij helpt met training, voeding en waar nodig massage.',
    result: '12 kg gewichtsverlies',
  },
  {
    name: 'Gus Lathouwers',
    city: 'Den Bosch',
    service: 'Personal Training',
    rating: 5,
    text: 'Ik heb in een half jaar meer bereikt dan ik voor mogelijk had gehouden. Ook als het doorzetten was, had ik altijd het gevoel dat Aroen achter mij stond.',
    result: 'Meer bereikt dan verwacht',
  },
  {
    name: 'Aroen klant',
    city: 'Vught',
    service: 'Training',
    rating: 5,
    text: 'Aroen motiveert, ziet hoe ver je kunt gaan en geeft praktische tips mee voor zelfstandig trainen. Zijn passie neem je mee de rest van de week in.',
    result: 'Extra stap leren zetten',
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

      <PageHero
        align="center"
        eyebrow="Klantverhalen"
        title="Wat onze klanten zeggen"
        subtitle="Meer dan 100 mensen in omgeving Den Bosch zijn je al voorgegaan. Lees hun verhalen en resultaten."
        titleClassName="md:text-5xl lg:text-5xl"
      >
        <div className="mt-6 flex items-center justify-center gap-2">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-6 w-6 fill-primary text-primary" />
          ))}
          <span className="ml-2 font-semibold text-white">5.0 · 100+ beoordelingen</span>
        </div>
      </PageHero>

      {/* Reviews grid */}
      <section className="px-4 py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, i) => (
              <div
                key={review.name + i}
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
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Schrijf jouw eigen succesverhaal" subtitle="Plan vandaag nog je gratis intake en begin jouw transformatie." />
    </div>
  );
}
