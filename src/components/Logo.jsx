import { Link } from 'react-router-dom';

export default function Logo({ to = '/', className = '', compact = false, onClick = undefined, tone = 'light' }) {
  const titleClass = tone === 'dark' ? 'text-white' : 'text-secondary';
  const subtitleClass = tone === 'dark' ? 'text-white/50' : 'text-muted-foreground';

  return (
    <Link to={to} onClick={onClick} className={`inline-flex items-center gap-2.5 ${className}`}>
      <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-primary ring-1 ring-primary/20">
        <svg viewBox="0 0 64 64" aria-hidden="true" className="h-9 w-9">
          <path
            d="M9 29H20L24.8 18L32.7 42.5L39.4 27H55"
            fill="none"
            stroke="currentColor"
            strokeWidth="4.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10.5 45C18 36.8 29 36.4 36.8 43.2C42.4 48 49.2 46.7 54 39.8"
            fill="none"
            stroke="white"
            strokeWidth="4.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17 51C26 47.8 37 47.9 45 51"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      </span>
      {!compact && (
        <span className="leading-none">
          <span className={`block font-display text-xl font-extrabold ${titleClass}`}>
            JitanSports
          </span>
          <span className={`mt-1 block text-[0.68rem] font-semibold uppercase ${subtitleClass}`}>
            Training & Massage
          </span>
        </span>
      )}
    </Link>
  );
}
