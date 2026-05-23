import { Link } from 'react-router-dom';

export default function Logo({ to = '/', className = '', compact = false, onClick = undefined, tone = 'light' }) {
  const titleClass = tone === 'dark' ? 'text-white' : 'text-secondary';
  const subtitleClass = tone === 'dark' ? 'text-white/50' : 'text-muted-foreground';

  return (
    <Link to={to} onClick={onClick} className={`inline-flex items-center gap-2.5 ${className}`}>
      <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-primary ring-1 ring-primary/20">
        <svg viewBox="0 0 64 64" aria-hidden="true" className="h-8 w-8">
          <rect x="5.5" y="19" width="9" height="16" rx="3" fill="currentColor" />
          <rect x="49.5" y="19" width="9" height="16" rx="3" fill="currentColor" />
          <path
            d="M14 27H50"
            fill="none"
            stroke="currentColor"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <path
            d="M12.8 44.2C18.7 36.6 27.6 35.5 34.2 41.4C39.3 45.9 45.5 45.6 51.2 38.6"
            fill="none"
            stroke="white"
            strokeWidth="4.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M22 49.5C27.8 46.4 36.2 46.4 42 49.5"
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
