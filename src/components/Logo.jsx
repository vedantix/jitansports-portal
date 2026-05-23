import { Link } from 'react-router-dom';

export default function Logo({ to = '/', className = '', compact = false, onClick = undefined, tone = 'light' }) {
  const titleClass = tone === 'dark' ? 'text-white' : 'text-secondary';
  const subtitleClass = tone === 'dark' ? 'text-white/50' : 'text-muted-foreground';

  return (
    <Link to={to} onClick={onClick} className={`inline-flex items-center gap-2.5 ${className}`}>
      <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-primary ring-1 ring-primary/20">
        <svg viewBox="0 0 64 64" aria-hidden="true" className="h-8 w-8">
          <circle cx="40.5" cy="15.5" r="5" fill="currentColor" />
          <path
            d="M35.4 24C29.1 28.3 25.6 34.8 23.8 43.6"
            fill="none"
            stroke="currentColor"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M31 30.2C38.6 31.2 44.6 35.2 49.8 41.5"
            fill="none"
            stroke="white"
            strokeWidth="4.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14 45.8C20.1 38.2 29.2 37.6 36.1 43.9C40.9 48.3 46.6 48.2 51.5 42.1"
            fill="none"
            stroke="white"
            strokeWidth="4.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18.5 51C25.3 47.3 34.5 47.4 41.2 51"
            fill="none"
            stroke="currentColor"
            strokeWidth="3.2"
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
