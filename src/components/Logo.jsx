import { Link } from 'react-router-dom';

export default function Logo({ to = '/', className = '', compact = false, onClick = undefined, tone = 'light' }) {
  const titleClass = tone === 'dark' ? 'text-white' : 'text-secondary';
  const subtitleClass = tone === 'dark' ? 'text-white/50' : 'text-muted-foreground';

  return (
    <Link to={to} onClick={onClick} className={`inline-flex items-center gap-2.5 ${className}`}>
      <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-primary ring-1 ring-primary/20">
        <svg viewBox="0 0 64 64" aria-hidden="true" className="h-8 w-8">
          <path
            d="M27.5 11.2C25.9 21.8 24.7 31 22.1 39.8C20.2 46.2 16.4 52.3 10.5 52.3C7.1 52.3 5.9 49.2 8.3 47.1C11.8 44 18.7 45.7 23.5 40.6C28 35.8 29.9 26.8 33 14.7"
            fill="none"
            stroke="currentColor"
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M40.9 11.7C36.1 12.4 33.6 15.7 34.1 18.7C34.7 22.5 42.5 22.9 42.2 28.1C41.8 34.4 31.2 36.7 28.2 31.1"
            fill="none"
            stroke="currentColor"
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
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
