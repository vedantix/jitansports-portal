import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { base44 } from '@/api/base44Client';

const FALLBACK_REVIEWS = [
  { id: 1, name: "Sandra M.", rating: 5, text: "Na 3 maanden personal training bij Jitan voel ik me fitter dan ooit. De persoonlijke aanpak maakt echt het verschil!", service: "Personal Training" },
  { id: 2, name: "Peter V.", rating: 5, text: "De Deep Tissue Massage heeft mijn chronische rugklachten enorm verminderd. Echt een aanrader!", service: "Deep Tissue Massage" },
  { id: 3, name: "Annemieke K.", rating: 5, text: "Het Get Fit programma heeft mijn leven veranderd. 8 kilo afgevallen en vol energie!", service: "Get Fit Programma" },
  { id: 4, name: "Mark de J.", rating: 5, text: "Trainen in de buitenlucht is geweldig. Jitan motiveert je op een prettige manier.", service: "Personal Training" },
];

export default function ReviewSlider() {
  const [reviews, setReviews] = useState(FALLBACK_REVIEWS);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    base44.entities.Review.filter({ visible: true }).then(data => {
      if (data?.length) setReviews(data);
    }).catch(() => {});
  }, []);

  const next = () => setCurrent(c => (c + 1) % reviews.length);
  const prev = () => setCurrent(c => (c - 1 + reviews.length) % reviews.length);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [reviews.length]);

  const review = reviews[current];

  return (
    <div className="relative max-w-2xl mx-auto text-center">
      <div className="flex justify-center gap-1 mb-4">
        {Array.from({ length: review.rating }).map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-primary text-primary" />
        ))}
      </div>
      <blockquote className="text-lg md:text-xl text-foreground/80 italic leading-relaxed mb-6 min-h-[80px]">
        "{review.text}"
      </blockquote>
      <p className="font-semibold text-foreground">{review.name}</p>
      <p className="text-sm text-muted-foreground">{review.service}</p>

      <div className="flex justify-center gap-3 mt-6">
        <button onClick={prev} className="p-2 rounded-full border border-border hover:bg-muted transition-colors">
          <ChevronLeft className="w-5 h-5" />
        </button>
        <div className="flex items-center gap-2">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-all ${i === current ? 'bg-primary w-6' : 'bg-border'}`}
            />
          ))}
        </div>
        <button onClick={next} className="p-2 rounded-full border border-border hover:bg-muted transition-colors">
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}