import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { reviewsConfig } from '@/config/reviews';

function GoogleWordmark({ className = '' }) {
  return (
    <span className={`inline-flex items-center font-semibold ${className}`} aria-label="Google">
      <span className="text-[#4285f4]">G</span>
      <span className="text-[#ea4335]">o</span>
      <span className="text-[#fbbc05]">o</span>
      <span className="text-[#4285f4]">g</span>
      <span className="text-[#34a853]">l</span>
      <span className="text-[#ea4335]">e</span>
    </span>
  );
}

export default function GoogleRatingBadge({
  compact = false,
  showButton = true,
  className = '',
  tone = 'light',
}) {
  const dark = tone === 'dark';
  const textClass = dark ? 'text-white' : 'text-secondary';
  const mutedClass = dark ? 'text-white/72' : 'text-muted-foreground';
  const shellClass = dark
    ? 'border-white/15 bg-white/10 shadow-2xl shadow-black/10 backdrop-blur-md'
    : 'border-border bg-white shadow-sm';

  return (
    <div className={`inline-flex max-w-full flex-col gap-3 rounded-xl border px-4 py-3 ${shellClass} ${className}`}>
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
        <div className="flex items-center gap-0.5" aria-label={`${reviewsConfig.rating} van 5 sterren`}>
          {Array.from({ length: 5 }).map((_, index) => {
            const fill = Math.min(1, Math.max(0, reviewsConfig.ratingValue - index));
            return (
              <span key={index} className="relative inline-block h-4 w-4">
                <Star className="absolute inset-0 h-4 w-4 text-primary/30" />
                <span className="absolute inset-0 overflow-hidden" style={{ width: `${fill * 100}%` }}>
                  <Star className="h-4 w-4 fill-primary text-primary" />
                </span>
              </span>
            );
          })}
        </div>
        <div className={`flex items-center gap-1.5 text-sm font-bold ${textClass}`}>
          <span>{reviewsConfig.rating}/5</span>
          <GoogleWordmark />
          <span>Reviews</span>
        </div>
      </div>
      <div className={`flex flex-wrap items-center gap-3 text-xs ${mutedClass}`}>
        <span>{reviewsConfig.reviewProofText}</span>
        {showButton && (
          <Link
            to="/referenties"
            className={`font-semibold transition-colors ${
              dark ? 'text-primary hover:text-primary/85' : 'text-amber-700 hover:text-amber-800'
            }`}
          >
            Bekijk ervaringen
          </Link>
        )}
      </div>
      {!compact && (
        <meta itemProp="ratingValue" content={String(reviewsConfig.ratingValue)} />
      )}
    </div>
  );
}

export { GoogleWordmark };