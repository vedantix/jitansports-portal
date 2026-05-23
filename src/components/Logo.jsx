import { Link } from 'react-router-dom';

export default function Logo({ to = '/', className = '', compact = false, onClick = undefined, tone = 'light' }) {
  const titleClass = tone === 'dark' ? 'text-white' : 'text-secondary';
  const subtitleClass = tone === 'dark' ? 'text-white/50' : 'text-muted-foreground';

  return (
    <Link to={to} onClick={onClick} className={`inline-flex items-center gap-2.5 ${className}`}>
      <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-primary ring-1 ring-primary/20">
        <svg viewBox="0 0 64 64" aria-hidden="true" className="h-8 w-8">
          <path
            d="M17 42.5C21.2 48.8 32.3 50.7 42.5 44.4C52.6 38.1 54.5 26.1 47.7 19.9C41.4 14.2 30.7 14.1 22.6 20.2"
            fill="none"
            stroke="currentColor"
            strokeWidth="4.2"
            strokeLinecap="round"
          />
          <path
            d="M32 15V38.8C32 45.3 28.1 49 21.7 49C18.5 49 15.8 48 13.8 46.1"
            fill="none"
            stroke="white"
            strokeWidth="4.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M35.5 24.2C38.4 20.7 45.7 21 47.1 26C48.3 30.5 42.9 32.4 38.5 34.2C34.2 36 31.8 38.4 34.1 41.8C36.1 44.9 43.1 45.4 47.7 41.5"
            fill="none"
            stroke="white"
            strokeWidth="4.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="32" cy="12" r="3.2" fill="currentColor" />
        </svg>
      </span>
      {!compact && (
        <span className="leading-none">
          <span className={`block font-display text-xl font-extrabold tracking-tight ${titleClass}`}>
            JitanSports
          </span>
          <span className={`mt-1 block text-[0.66rem] font-semibold uppercase tracking-[0.18em] ${subtitleClass}`}>
            Training & Massage
          </span>
        </span>
      )}
    </Link>
  );
}
