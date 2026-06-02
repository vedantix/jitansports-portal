import { Star } from 'lucide-react';

const DEFAULT_REVIEWS = [
  {
    name: 'Patries',
    service: 'Personal Training & voeding',
    text: 'Door de persoonlijke begeleiding, voeding en coaching voelde ik mij fitter, sterker en zelfverzekerder.',
  },
  {
    name: 'Kitty',
    service: 'Deep Tissue Massage',
    text: 'De krachtige Deep Tissue massages helpen uitstekend om spanning en pijnklachten los te maken.',
  },
  {
    name: 'Ellen',
    service: 'Training, massage en coaching',
    text: 'Aroen kijkt naar jou als persoon. Na enkele weken voelde ik me gezonder, fitter en gelukkiger.',
  },
];

export default function ServiceReviews({
  eyebrow = 'Resultaten',
  title = 'Klanten die jou voorgingen',
  reviews = DEFAULT_REVIEWS,
}) {
  return (
    <section className="bg-muted/30 px-4 py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-amber-700">{eyebrow}</p>
          <h2 className="text-3xl font-display font-bold text-secondary">{title}</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {reviews.slice(0, 3).map((review) => (
            <article key={`${review.name}-${review.service}`} className="rounded-2xl border border-border bg-white p-6">
              <div className="mb-4 flex gap-0.5">
                {[...Array(5)].map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="mb-5 text-sm italic leading-relaxed text-muted-foreground">&ldquo;{review.text}&rdquo;</p>
              <div className="border-t border-border pt-4">
                <p className="font-semibold text-secondary">{review.name}</p>
                <p className="text-sm font-semibold text-amber-700">{review.service}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
