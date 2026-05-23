import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, MapPin } from 'lucide-react';
import { base44 } from '@/api/base44Client';

const FALLBACK_REVIEWS = [
  { id: 1, name: "Peter V.", city: "Den Haag", rating: 5, text: "Ik ben 12 kilo afgevallen en voel me fitter dan ooit. De persoonlijke aanpak van Jitan maakt echt het verschil!", service: "Personal Training" },
  { id: 2, name: "Sandra M.", city: "Wassenaar", rating: 5, text: "De Deep Tissue Massage heeft mijn chronische rugklachten enorm verminderd. Al 3 maanden klachtenvrij!", service: "Deep Tissue Massage" },
  { id: 3, name: "Annemieke K.", city: "Voorburg", rating: 5, text: "Het Get Fit programma heeft mijn leven veranderd. Niet alleen slanker, maar ook zoveel meer energie!", service: "Get Fit Programma" },
  { id: 4, name: "Mark de J.", city: "Leidschendam", rating: 5, text: "Trainen in de buitenlucht is geweldig. Jitan motiveert je op een persoonlijke manier. Absolute aanrader!", service: "Personal Training Outdoor" },
  { id: 5, name: "Linda H.", city: "Den Haag", rating: 5, text: "Na 6 maanden training ben ik 8 kilo kwijt en beweeg ik weer pijnloos. Jitan begrijpt wat je nodig hebt.", service: "Personal Training" },
];

export default function ReviewsSection() {
  const [reviews, setReviews] = useState(FALLBACK_REVIEWS);
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    base44.entities.Review.filter({ visible: true }).then(data => {
      if (data?.length >= 2) setReviews(data);
    }).catch(() => {});
  }, []);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => setCurrent(c => (c + 1) % reviews.length), 5500);
    return () => clearInterval(timer);
  }, [reviews.length, paused]);

  const navigate = (dir) => {
    setPaused(true);
    setCurrent(c => (c + dir + reviews.length) % reviews.length);
  };

  const review = reviews[current];

  return (
    <section className="py-16 px-4 bg-secondary text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-primary font-semibold uppercase tracking-wider text-sm mb-2">Klantbeoordelingen</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold">Wat onze klanten zeggen</h2>
          <div className="flex items-center justify-center gap-1 mt-3">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-primary text-primary" />)}
            <span className="ml-2 text-white/60 text-sm">Gemiddeld 5.0 – 100+ beoordelingen</span>
          </div>
        </div>

        <div className="relative max-w-3xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 text-center min-h-[260px] flex flex-col justify-center">
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(review.rating || 5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-primary text-primary" />
              ))}
            </div>
            <blockquote className="text-lg md:text-xl italic leading-relaxed mb-6 text-white/90">
              &ldquo;{review.text}&rdquo;
            </blockquote>
            <div>
              <p className="font-bold text-white text-lg">{review.name}</p>
              <div className="flex items-center justify-center gap-2 text-white/60 text-sm mt-1 flex-wrap">
                <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" />{review.city || 'Den Haag'}</span>
                <span>·</span>
                <span>{review.service}</span>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center gap-4 mt-6">
            <button
              onClick={() => navigate(-1)}
              className="p-2 rounded-full border border-white/20 hover:bg-white/10 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setPaused(true); setCurrent(i); }}
                  className={`rounded-full transition-all ${i === current ? 'bg-primary w-6 h-2' : 'bg-white/30 w-2 h-2'}`}
                />
              ))}
            </div>
            <button
              onClick={() => navigate(1)}
              className="p-2 rounded-full border border-white/20 hover:bg-white/10 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}