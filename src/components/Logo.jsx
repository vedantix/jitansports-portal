import { Link } from 'react-router-dom';

export default function Logo({ to = '/', className = '', compact = false, onClick = undefined, tone = 'light' }) {
  const titleClass = tone === 'dark' ? 'text-white' : 'text-secondary';
  const subtitleClass = tone === 'dark' ? 'text-white/50' : 'text-muted-foreground';

  return (
    <Link to={to} onClick={onClick} className={`inline-flex items-center gap-2.5 ${className}`}>
      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-secondary text-primary ring-1 ring-primary/25 shadow-sm">
        <svg viewBox="0 0 64 64" aria-hidden="true" className="h-10 w-10">
          <path
            d="M10 39C10.5 23.5 23.2 10 39.5 10C50.2 10 55 17.2 55 29.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="3.8"
            strokeLinecap="round"
          />
          <circle cx="39.5" cy="18.3" r="5.4" fill="none" stroke="currentColor" strokeWidth="3.8" />
          <path
            d="M35.2 25C29.2 28.8 26.6 34.8 23.5 43.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="3.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M30.7 34C35 38 40.5 40.1 47.4 40"
            fill="none"
            stroke="currentColor"
            strokeWidth="3.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7 47C17.2 46.5 25.7 41.4 36 42.4C45.4 43.3 51.4 48.2 58 40"
            fill="none"
            stroke="white"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11.5 53C22 54.2 31.1 49.2 39.4 50.3C47.3 51.4 51.4 55.9 57.2 52"
            fill="none"
            stroke="currentColor"
            strokeWidth="3.6"
            strokeLinecap="round"
            strokeLinejoin="round"
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
